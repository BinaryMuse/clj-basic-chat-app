// Compiled by ClojureScript 0.0-2202
goog.provide('chat');
goog.require('cljs.core');
goog.require('connection');
chat.start = (function start(){var map__8812 = connection.connect.call(null);var map__8812__$1 = ((cljs.core.seq_QMARK_.call(null,map__8812))?cljs.core.apply.call(null,cljs.core.hash_map,map__8812):map__8812);var conn = map__8812__$1;var from_server = cljs.core.get.call(null,map__8812__$1,new cljs.core.Keyword(null,"in","in",1013907607));var from_ui = interface$.outgoing;var c__5638__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__5638__auto__,map__8812,map__8812__$1,conn,from_server,from_ui){
return (function (){var f__5639__auto__ = (function (){var switch__5623__auto__ = ((function (c__5638__auto__,map__8812,map__8812__$1,conn,from_server,from_ui){
return (function (state_8854){var state_val_8855 = (state_8854[1]);if((state_val_8855 === 1))
{var state_8854__$1 = state_8854;var statearr_8856_8883 = state_8854__$1;(statearr_8856_8883[2] = null);
(statearr_8856_8883[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_8855 === 2))
{var state_8854__$1 = state_8854;if(true)
{var statearr_8857_8884 = state_8854__$1;(statearr_8857_8884[1] = 4);
} else
{var statearr_8858_8885 = state_8854__$1;(statearr_8858_8885[1] = 5);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_8855 === 3))
{var inst_8852 = (state_8854[2]);var state_8854__$1 = state_8854;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_8854__$1,inst_8852);
} else
{if((state_val_8855 === 4))
{var inst_8820 = [from_server,from_ui];var inst_8821 = (new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,inst_8820,null));var state_8854__$1 = state_8854;return cljs.core.async.impl.ioc_helpers.ioc_alts_BANG_.call(null,state_8854__$1,7,inst_8821);
} else
{if((state_val_8855 === 5))
{var state_8854__$1 = state_8854;var statearr_8859_8886 = state_8854__$1;(statearr_8859_8886[2] = null);
(statearr_8859_8886[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_8855 === 6))
{var inst_8850 = (state_8854[2]);var state_8854__$1 = state_8854;var statearr_8860_8887 = state_8854__$1;(statearr_8860_8887[2] = inst_8850);
(statearr_8860_8887[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_8855 === 7))
{var inst_8823 = (state_8854[7]);var inst_8825 = (state_8854[8]);var inst_8823__$1 = (state_8854[2]);var inst_8824 = cljs.core.nth.call(null,inst_8823__$1,0,null);var inst_8825__$1 = cljs.core.nth.call(null,inst_8823__$1,1,null);var inst_8826 = cljs.core._EQ_.call(null,inst_8825__$1,from_server);var state_8854__$1 = (function (){var statearr_8861 = state_8854;(statearr_8861[9] = inst_8824);
(statearr_8861[7] = inst_8823__$1);
(statearr_8861[8] = inst_8825__$1);
return statearr_8861;
})();if(inst_8826)
{var statearr_8862_8888 = state_8854__$1;(statearr_8862_8888[1] = 8);
} else
{var statearr_8863_8889 = state_8854__$1;(statearr_8863_8889[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_8855 === 8))
{var inst_8823 = (state_8854[7]);var inst_8829 = cljs.core.nth.call(null,inst_8823,0,null);var inst_8830 = interface$.add_message.call(null,inst_8829);var state_8854__$1 = state_8854;var statearr_8864_8890 = state_8854__$1;(statearr_8864_8890[2] = inst_8830);
(statearr_8864_8890[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_8855 === 9))
{var inst_8825 = (state_8854[8]);var inst_8832 = cljs.core._EQ_.call(null,inst_8825,from_ui);var state_8854__$1 = state_8854;if(inst_8832)
{var statearr_8865_8891 = state_8854__$1;(statearr_8865_8891[1] = 11);
} else
{var statearr_8866_8892 = state_8854__$1;(statearr_8866_8892[1] = 12);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_8855 === 10))
{var inst_8846 = (state_8854[2]);var state_8854__$1 = (function (){var statearr_8867 = state_8854;(statearr_8867[10] = inst_8846);
return statearr_8867;
})();var statearr_8868_8893 = state_8854__$1;(statearr_8868_8893[2] = null);
(statearr_8868_8893[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_8855 === 11))
{var inst_8823 = (state_8854[7]);var inst_8835 = cljs.core.nth.call(null,inst_8823,0,null);var inst_8836 = connection.send_message.call(null,conn,inst_8835);var state_8854__$1 = state_8854;var statearr_8869_8894 = state_8854__$1;(statearr_8869_8894[2] = inst_8836);
(statearr_8869_8894[1] = 13);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_8855 === 12))
{var inst_8825 = (state_8854[8]);var inst_8838 = cljs.core._EQ_.call(null,inst_8825,new cljs.core.Keyword(null,"default","default",2558708147));var state_8854__$1 = state_8854;if(inst_8838)
{var statearr_8870_8895 = state_8854__$1;(statearr_8870_8895[1] = 14);
} else
{var statearr_8871_8896 = state_8854__$1;(statearr_8871_8896[1] = 15);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_8855 === 13))
{var inst_8844 = (state_8854[2]);var state_8854__$1 = state_8854;var statearr_8872_8897 = state_8854__$1;(statearr_8872_8897[2] = inst_8844);
(statearr_8872_8897[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_8855 === 14))
{var inst_8824 = (state_8854[9]);var state_8854__$1 = state_8854;var statearr_8873_8898 = state_8854__$1;(statearr_8873_8898[2] = inst_8824);
(statearr_8873_8898[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_8855 === 15))
{var state_8854__$1 = state_8854;var statearr_8874_8899 = state_8854__$1;(statearr_8874_8899[2] = null);
(statearr_8874_8899[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_8855 === 16))
{var inst_8842 = (state_8854[2]);var state_8854__$1 = state_8854;var statearr_8875_8900 = state_8854__$1;(statearr_8875_8900[2] = inst_8842);
(statearr_8875_8900[1] = 13);
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
}
}
}
}
}
}
});})(c__5638__auto__,map__8812,map__8812__$1,conn,from_server,from_ui))
;return ((function (switch__5623__auto__,c__5638__auto__,map__8812,map__8812__$1,conn,from_server,from_ui){
return (function() {
var state_machine__5624__auto__ = null;
var state_machine__5624__auto____0 = (function (){var statearr_8879 = [null,null,null,null,null,null,null,null,null,null,null];(statearr_8879[0] = state_machine__5624__auto__);
(statearr_8879[1] = 1);
return statearr_8879;
});
var state_machine__5624__auto____1 = (function (state_8854){while(true){
var ret_value__5625__auto__ = (function (){try{while(true){
var result__5626__auto__ = switch__5623__auto__.call(null,state_8854);if(cljs.core.keyword_identical_QMARK_.call(null,result__5626__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5626__auto__;
}
break;
}
}catch (e8880){if((e8880 instanceof Object))
{var ex__5627__auto__ = e8880;var statearr_8881_8901 = state_8854;(statearr_8881_8901[5] = ex__5627__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_8854);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e8880;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5625__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__8902 = state_8854;
state_8854 = G__8902;
continue;
}
} else
{return ret_value__5625__auto__;
}
break;
}
});
state_machine__5624__auto__ = function(state_8854){
switch(arguments.length){
case 0:
return state_machine__5624__auto____0.call(this);
case 1:
return state_machine__5624__auto____1.call(this,state_8854);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5624__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5624__auto____0;
state_machine__5624__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5624__auto____1;
return state_machine__5624__auto__;
})()
;})(switch__5623__auto__,c__5638__auto__,map__8812,map__8812__$1,conn,from_server,from_ui))
})();var state__5640__auto__ = (function (){var statearr_8882 = f__5639__auto__.call(null);(statearr_8882[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5638__auto__);
return statearr_8882;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5640__auto__);
});})(c__5638__auto__,map__8812,map__8812__$1,conn,from_server,from_ui))
);
return c__5638__auto__;
});
window.onload = chat.start;
