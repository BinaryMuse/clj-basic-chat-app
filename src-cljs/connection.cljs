(ns connection
  (:require-macros [cljs.core.async.macros :refer [go alt!]])
  (:require [cljs.core.async :as async :refer [put! chan <!]]
            [cljs.reader :as reader]))

(def chatlines [])
(def ws-uri (str "ws://" (.-host (.-location js/document)) "/echo"))

(defn handle-message [channel]
  (fn [e]
    (let [messages (reader/read-string (.-data e))]
      (if (not-empty messages)
        (doseq [msg messages]
          (put! channel msg))))))

(defn create-ws [internal in]
  (let [ws (js/WebSocket. ws-uri)]
    (set! (.-onmessage ws) (handle-message in))
    (go (while true
          (let [message (<! internal)]
            (.send ws (prn-str [message])))))
    ws))

(defn connect []
  (let [in (chan)
        out (chan)
        internal (chan)
        ws (create-ws internal in)]
    (go (while true
          (alt!
           internal ([message] (put! in message))
           out ([message] (do (put! internal message))))))
    {:in in :out out}))

(defn send-message [conn message]
  ;server won't send us our own messages; immediately send to UI
  (put! (:in conn) message)
  (put! (:out conn) message))
