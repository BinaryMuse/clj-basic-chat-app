(ns interface
  (:require-macros [cljs.core.async.macros :refer [go]])
  (:require [cljs.core.async :as async :refer [put! chan <!]]
            [clojure.string :as string]))

(defn by-id [id]
  (.getElementById js/document id))

(defn make-div [classname content]
  (let [div (.createElement js/document "div")]
    (.add (.-classList div) classname)
    (if content
      (set! (.-innerHTML div) content))
    div))

(defn scroll-to-bottom! [elem]
  (set! (.-scrollTop elem) (- (.-scrollHeight elem) (.-offsetHeight elem))))

(defn is-submit-keystroke? [e]
  (and
   (= (.-which e) 13)
   (not (.-shiftKey e))))

(def rows (by-id "rows"))
(def rows-inner (by-id "rows-inner"))
(def input (by-id "input"))

(def enters (chan))
(def outgoing (chan))

(def username (js/prompt "Username" "BinaryMuse"))

(defn add-row [name chat]
  (let [namediv (make-div "name" name)
        chatdiv (make-div "chat" (string/replace chat "\n" "<br>"))
        rowdiv  (make-div "row" nil)]
    (.appendChild rowdiv namediv)
    (.appendChild rowdiv chatdiv)
    (.appendChild rows-inner rowdiv)))

(defn add-message [message]
  (add-row (:username message) (:message message))
  (scroll-to-bottom! rows))

(defn clear-input! [elem]
  (set! (.-value elem) ""))

(go (while true
      (let [e (<! enters)
            target (.-target e)
            text (.-value target)]
        (if (not (string/blank? text))
          (do
            (put! outgoing {:username username :message text})
            (clear-input! target))))))

(.addEventListener input "keydown" (fn [e]
                                     (if (is-submit-keystroke? e)
                                         (do
                                           (.preventDefault e)
                                           (put! enters e)))))
