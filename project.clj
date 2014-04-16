(defproject irc "0.1.0-SNAPSHOT"
  :description "FIXME: write description"
  :url "http://example.com/FIXME"
  :dependencies [[org.clojure/clojure "1.5.1"]
                 [org.clojure/clojurescript "0.0-2202"]
                 [org.clojure/core.async "0.1.278.0-76b25b-alpha"]
                 [compojure "1.1.6"]
                 [http-kit "2.1.16"]]
  :plugins [[lein-ring "0.8.10"]
            [lein-cljsbuild "1.0.3"]]
  :cljsbuild {
    :builds [{
      :source-paths ["src-cljs"]
      :compiler {
        :output-dir "resources/public/js"
        :output-to "resources/public/js/main.js"
        :source-map "resources/public/js/main.js.map"
        :optimizations :whitespace
        :pretty-print true }}]}
  :main irc.handler
  :profiles
  {:dev {:dependencies [[javax.servlet/servlet-api "2.5"]
                        [ring-mock "0.1.5"]]}})
