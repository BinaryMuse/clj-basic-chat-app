(ns irc.handler
  (:use compojure.core
        org.httpkit.server)
  (:require [compojure.handler :as handler]
            [compojure.route :as route]
            [ring.util.response :as resp]
            [clojure.edn :as reader]))

(def clients (atom {}))
(def messages (atom clojure.lang.PersistentQueue/EMPTY))

(defn handle-message [con msgs]
  (swap! messages conj (first msgs))
  (doseq [client @clients]
    (if (not= (key client) con)
      (send! (key client) (prn-str msgs)))))

(defn wss [req]
  (with-channel req con
    (swap! clients assoc con true)
    (send! con (prn-str (vec @messages)))
    (on-close con (fn [status]
                    (swap! clients dissoc con)))
    (on-receive con (fn [data]
                      (handle-message con (reader/read-string data))))))

(defroutes app-routes
  (GET "/" [] (resp/resource-response "index.html" {:root "public"}))
  (GET "/echo" [] wss)
  (route/resources "/")
  (route/not-found "Not Found"))

(defn -main [& args]
  (run-server (handler/site #'app-routes) {:port 3000})
  (println "Listening on port 3000"))
