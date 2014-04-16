(ns chat
  (:require-macros [cljs.core.async.macros :refer [go alt!]])
  (:require [connection]))

(defn start []
  (let [{from-server :in :as conn} (connection/connect)
        from-ui interface/outgoing]
    (go (while true
          (alt!
           from-server ([msg] (interface/add-message msg))
           from-ui ([msg] (connection/send-message conn msg)))))))

(set! (.-onload js/window) start)
