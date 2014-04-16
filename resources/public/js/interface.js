// Compiled by ClojureScript 0.0-2202
goog.provide('interface$');
goog.require('cljs.core');
goog.require('cljs.core.async');
goog.require('clojure.string');
goog.require('clojure.string');
goog.require('cljs.core.async');
goog.require('cljs.core.async');
interface$.by_id = (function by_id(id){return document.getElementById(id);
});
interface$.make_div = (function make_div(classname,content){var div = document.createElement("div");div.classList.add(classname);
if(cljs.core.truth_(content))
{div.innerHTML = content;
} else
{}
return div;
});
interface$.scroll_to_bottom_BANG_ = (function scroll_to_bottom_BANG_(elem){return elem.scrollTop = (elem.scrollHeight - elem.offsetHeight);
});
interface$.is_submit_keystroke_QMARK_ = (function is_submit_keystroke_QMARK_(e){return (cljs.core._EQ_.call(null,e.which,13)) && (cljs.core.not.call(null,e.shiftKey));
});
interface$.rows = interface$.by_id.call(null,"rows");
interface$.rows_inner = interface$.by_id.call(null,"rows-inner");
interface$.input = interface$.by_id.call(null,"input");
interface$.enters = cljs.core.async.chan.call(null);
interface$.outgoing = cljs.core.async.chan.call(null);
interface$.username = prompt("Username","BinaryMuse");
interface$.add_row = (function add_row(name,chat__$1){var namediv = interface$.make_div.call(null,"name",name);var chatdiv = interface$.make_div.call(null,"chat",clojure.string.replace.call(null,chat__$1,"\n","<br>"));var rowdiv = interface$.make_div.call(null,"row",null);rowdiv.appendChild(namediv);
rowdiv.appendChild(chatdiv);
return interface$.rows_inner.appendChild(rowdiv);
});
interface$.add_message = (function add_message(message){interface$.add_row.call(null,new cljs.core.Keyword(null,"username","username",748190792).cljs$core$IFn$_invoke$arity$1(message),new cljs.core.Keyword(null,"message","message",1968829305).cljs$core$IFn$_invoke$arity$1(message));
return interface$.scroll_to_bottom_BANG_.call(null,interface$.rows);
});
interface$.clear_input_BANG_ = (function clear_input_BANG_(elem){return elem.value = "";
});
var c__5638__auto___9207 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__5638__auto___9207){
return (function (){var f__5639__auto__ = (function (){var switch__5623__auto__ = ((function (c__5638__auto___9207){
return (function (state_9185){var state_val_9186 = (state_9185[1]);if((state_val_9186 === 1))
{var state_9185__$1 = state_9185;var statearr_9187_9208 = state_9185__$1;(statearr_9187_9208[2] = null);
(statearr_9187_9208[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9186 === 2))
{var state_9185__$1 = state_9185;if(true)
{var statearr_9188_9209 = state_9185__$1;(statearr_9188_9209[1] = 4);
} else
{var statearr_9189_9210 = state_9185__$1;(statearr_9189_9210[1] = 5);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9186 === 3))
{var inst_9183 = (state_9185[2]);var state_9185__$1 = state_9185;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_9185__$1,inst_9183);
} else
{if((state_val_9186 === 4))
{var state_9185__$1 = state_9185;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_9185__$1,7,interface$.enters);
} else
{if((state_val_9186 === 5))
{var state_9185__$1 = state_9185;var statearr_9190_9211 = state_9185__$1;(statearr_9190_9211[2] = null);
(statearr_9190_9211[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9186 === 6))
{var inst_9181 = (state_9185[2]);var state_9185__$1 = state_9185;var statearr_9191_9212 = state_9185__$1;(statearr_9191_9212[2] = inst_9181);
(statearr_9191_9212[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9186 === 7))
{var inst_9166 = (state_9185[7]);var inst_9165 = (state_9185[8]);var inst_9164 = (state_9185[2]);var inst_9165__$1 = inst_9164.target;var inst_9166__$1 = inst_9165__$1.value;var inst_9167 = clojure.string.blank_QMARK_.call(null,inst_9166__$1);var inst_9168 = cljs.core.not.call(null,inst_9167);var state_9185__$1 = (function (){var statearr_9192 = state_9185;(statearr_9192[7] = inst_9166__$1);
(statearr_9192[8] = inst_9165__$1);
return statearr_9192;
})();if(inst_9168)
{var statearr_9193_9213 = state_9185__$1;(statearr_9193_9213[1] = 8);
} else
{var statearr_9194_9214 = state_9185__$1;(statearr_9194_9214[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9186 === 8))
{var inst_9166 = (state_9185[7]);var inst_9165 = (state_9185[8]);var inst_9170 = [new cljs.core.Keyword(null,"username","username",748190792),new cljs.core.Keyword(null,"message","message",1968829305)];var inst_9171 = [interface$.username,inst_9166];var inst_9172 = cljs.core.PersistentHashMap.fromArrays.call(null,inst_9170,inst_9171);var inst_9173 = cljs.core.async.put_BANG_.call(null,interface$.outgoing,inst_9172);var inst_9174 = interface$.clear_input_BANG_.call(null,inst_9165);var state_9185__$1 = (function (){var statearr_9195 = state_9185;(statearr_9195[9] = inst_9173);
return statearr_9195;
})();var statearr_9196_9215 = state_9185__$1;(statearr_9196_9215[2] = inst_9174);
(statearr_9196_9215[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9186 === 9))
{var state_9185__$1 = state_9185;var statearr_9197_9216 = state_9185__$1;(statearr_9197_9216[2] = null);
(statearr_9197_9216[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9186 === 10))
{var inst_9177 = (state_9185[2]);var state_9185__$1 = (function (){var statearr_9198 = state_9185;(statearr_9198[10] = inst_9177);
return statearr_9198;
})();var statearr_9199_9217 = state_9185__$1;(statearr_9199_9217[2] = null);
(statearr_9199_9217[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{return null;
}
}
}
}
}
}
}
}
}
}
});})(c__5638__auto___9207))
;return ((function (switch__5623__auto__,c__5638__auto___9207){
return (function() {
var state_machine__5624__auto__ = null;
var state_machine__5624__auto____0 = (function (){var statearr_9203 = [null,null,null,null,null,null,null,null,null,null,null];(statearr_9203[0] = state_machine__5624__auto__);
(statearr_9203[1] = 1);
return statearr_9203;
});
var state_machine__5624__auto____1 = (function (state_9185){while(true){
var ret_value__5625__auto__ = (function (){try{while(true){
var result__5626__auto__ = switch__5623__auto__.call(null,state_9185);if(cljs.core.keyword_identical_QMARK_.call(null,result__5626__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5626__auto__;
}
break;
}
}catch (e9204){if((e9204 instanceof Object))
{var ex__5627__auto__ = e9204;var statearr_9205_9218 = state_9185;(statearr_9205_9218[5] = ex__5627__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_9185);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e9204;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5625__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__9219 = state_9185;
state_9185 = G__9219;
continue;
}
} else
{return ret_value__5625__auto__;
}
break;
}
});
state_machine__5624__auto__ = function(state_9185){
switch(arguments.length){
case 0:
return state_machine__5624__auto____0.call(this);
case 1:
return state_machine__5624__auto____1.call(this,state_9185);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5624__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5624__auto____0;
state_machine__5624__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5624__auto____1;
return state_machine__5624__auto__;
})()
;})(switch__5623__auto__,c__5638__auto___9207))
})();var state__5640__auto__ = (function (){var statearr_9206 = f__5639__auto__.call(null);(statearr_9206[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5638__auto___9207);
return statearr_9206;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5640__auto__);
});})(c__5638__auto___9207))
);
interface$.input.addEventListener("keydown",(function (e){if(interface$.is_submit_keystroke_QMARK_.call(null,e))
{e.preventDefault();
return cljs.core.async.put_BANG_.call(null,interface$.enters,e);
} else
{return null;
}
}));
