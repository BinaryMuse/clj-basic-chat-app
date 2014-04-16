// Compiled by ClojureScript 0.0-2202
goog.provide('connection');
goog.require('cljs.core');
goog.require('cljs.core.async');
goog.require('cljs.reader');
goog.require('cljs.reader');
goog.require('cljs.core.async');
goog.require('cljs.core.async');
connection.chatlines = cljs.core.PersistentVector.EMPTY;
connection.ws_uri = [cljs.core.str("ws://"),cljs.core.str(document.location.host),cljs.core.str("/echo")].join('');
connection.handle_message = (function handle_message(channel){return (function (e){var messages = cljs.reader.read_string.call(null,e.data);if(cljs.core.truth_(cljs.core.not_empty.call(null,messages)))
{var seq__8907 = cljs.core.seq.call(null,messages);var chunk__8908 = null;var count__8909 = 0;var i__8910 = 0;while(true){
if((i__8910 < count__8909))
{var msg = cljs.core._nth.call(null,chunk__8908,i__8910);cljs.core.async.put_BANG_.call(null,channel,msg);
{
var G__8911 = seq__8907;
var G__8912 = chunk__8908;
var G__8913 = count__8909;
var G__8914 = (i__8910 + 1);
seq__8907 = G__8911;
chunk__8908 = G__8912;
count__8909 = G__8913;
i__8910 = G__8914;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__8907);if(temp__4092__auto__)
{var seq__8907__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8907__$1))
{var c__4229__auto__ = cljs.core.chunk_first.call(null,seq__8907__$1);{
var G__8915 = cljs.core.chunk_rest.call(null,seq__8907__$1);
var G__8916 = c__4229__auto__;
var G__8917 = cljs.core.count.call(null,c__4229__auto__);
var G__8918 = 0;
seq__8907 = G__8915;
chunk__8908 = G__8916;
count__8909 = G__8917;
i__8910 = G__8918;
continue;
}
} else
{var msg = cljs.core.first.call(null,seq__8907__$1);cljs.core.async.put_BANG_.call(null,channel,msg);
{
var G__8919 = cljs.core.next.call(null,seq__8907__$1);
var G__8920 = null;
var G__8921 = 0;
var G__8922 = 0;
seq__8907 = G__8919;
chunk__8908 = G__8920;
count__8909 = G__8921;
i__8910 = G__8922;
continue;
}
}
} else
{return null;
}
}
break;
}
} else
{return null;
}
});
});
connection.create_ws = (function create_ws(internal,in$){var ws = (new WebSocket(connection.ws_uri));ws.onmessage = connection.handle_message.call(null,in$);
var c__5638__auto___8985 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__5638__auto___8985,ws){
return (function (){var f__5639__auto__ = (function (){var switch__5623__auto__ = ((function (c__5638__auto___8985,ws){
return (function (state_8969){var state_val_8970 = (state_8969[1]);if((state_val_8970 === 7))
{var inst_8957 = (state_8969[2]);var inst_8958 = [inst_8957];var inst_8959 = (new cljs.core.PersistentVector(null,1,5,cljs.core.PersistentVector.EMPTY_NODE,inst_8958,null));var inst_8960 = cljs.core.prn_str.call(null,inst_8959);var inst_8961 = ws.send(inst_8960);var state_8969__$1 = (function (){var statearr_8971 = state_8969;(statearr_8971[7] = inst_8961);
return statearr_8971;
})();var statearr_8972_8986 = state_8969__$1;(statearr_8972_8986[2] = null);
(statearr_8972_8986[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_8970 === 6))
{var inst_8965 = (state_8969[2]);var state_8969__$1 = state_8969;var statearr_8973_8987 = state_8969__$1;(statearr_8973_8987[2] = inst_8965);
(statearr_8973_8987[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_8970 === 5))
{var state_8969__$1 = state_8969;var statearr_8974_8988 = state_8969__$1;(statearr_8974_8988[2] = null);
(statearr_8974_8988[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_8970 === 4))
{var state_8969__$1 = state_8969;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_8969__$1,7,internal);
} else
{if((state_val_8970 === 3))
{var inst_8967 = (state_8969[2]);var state_8969__$1 = state_8969;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_8969__$1,inst_8967);
} else
{if((state_val_8970 === 2))
{var state_8969__$1 = state_8969;if(true)
{var statearr_8975_8989 = state_8969__$1;(statearr_8975_8989[1] = 4);
} else
{var statearr_8976_8990 = state_8969__$1;(statearr_8976_8990[1] = 5);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_8970 === 1))
{var state_8969__$1 = state_8969;var statearr_8977_8991 = state_8969__$1;(statearr_8977_8991[2] = null);
(statearr_8977_8991[1] = 2);
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
});})(c__5638__auto___8985,ws))
;return ((function (switch__5623__auto__,c__5638__auto___8985,ws){
return (function() {
var state_machine__5624__auto__ = null;
var state_machine__5624__auto____0 = (function (){var statearr_8981 = [null,null,null,null,null,null,null,null];(statearr_8981[0] = state_machine__5624__auto__);
(statearr_8981[1] = 1);
return statearr_8981;
});
var state_machine__5624__auto____1 = (function (state_8969){while(true){
var ret_value__5625__auto__ = (function (){try{while(true){
var result__5626__auto__ = switch__5623__auto__.call(null,state_8969);if(cljs.core.keyword_identical_QMARK_.call(null,result__5626__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5626__auto__;
}
break;
}
}catch (e8982){if((e8982 instanceof Object))
{var ex__5627__auto__ = e8982;var statearr_8983_8992 = state_8969;(statearr_8983_8992[5] = ex__5627__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_8969);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e8982;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5625__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__8993 = state_8969;
state_8969 = G__8993;
continue;
}
} else
{return ret_value__5625__auto__;
}
break;
}
});
state_machine__5624__auto__ = function(state_8969){
switch(arguments.length){
case 0:
return state_machine__5624__auto____0.call(this);
case 1:
return state_machine__5624__auto____1.call(this,state_8969);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5624__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5624__auto____0;
state_machine__5624__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5624__auto____1;
return state_machine__5624__auto__;
})()
;})(switch__5623__auto__,c__5638__auto___8985,ws))
})();var state__5640__auto__ = (function (){var statearr_8984 = f__5639__auto__.call(null);(statearr_8984[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5638__auto___8985);
return statearr_8984;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5640__auto__);
});})(c__5638__auto___8985,ws))
);
return ws;
});
connection.connect = (function connect(){var in$ = cljs.core.async.chan.call(null);var out = cljs.core.async.chan.call(null);var internal = cljs.core.async.chan.call(null);var ws = connection.create_ws.call(null,internal,in$);var c__5638__auto___9134 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__5638__auto___9134,in$,out,internal,ws){
return (function (){var f__5639__auto__ = (function (){var switch__5623__auto__ = ((function (c__5638__auto___9134,in$,out,internal,ws){
return (function (state_9105){var state_val_9106 = (state_9105[1]);if((state_val_9106 === 1))
{var state_9105__$1 = state_9105;var statearr_9107_9135 = state_9105__$1;(statearr_9107_9135[2] = null);
(statearr_9107_9135[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9106 === 2))
{var state_9105__$1 = state_9105;if(true)
{var statearr_9108_9136 = state_9105__$1;(statearr_9108_9136[1] = 4);
} else
{var statearr_9109_9137 = state_9105__$1;(statearr_9109_9137[1] = 5);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9106 === 3))
{var inst_9103 = (state_9105[2]);var state_9105__$1 = state_9105;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_9105__$1,inst_9103);
} else
{if((state_val_9106 === 4))
{var inst_9071 = [internal,out];var inst_9072 = (new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,inst_9071,null));var state_9105__$1 = state_9105;return cljs.core.async.impl.ioc_helpers.ioc_alts_BANG_.call(null,state_9105__$1,7,inst_9072);
} else
{if((state_val_9106 === 5))
{var state_9105__$1 = state_9105;var statearr_9110_9138 = state_9105__$1;(statearr_9110_9138[2] = null);
(statearr_9110_9138[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9106 === 6))
{var inst_9101 = (state_9105[2]);var state_9105__$1 = state_9105;var statearr_9111_9139 = state_9105__$1;(statearr_9111_9139[2] = inst_9101);
(statearr_9111_9139[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9106 === 7))
{var inst_9074 = (state_9105[7]);var inst_9076 = (state_9105[8]);var inst_9074__$1 = (state_9105[2]);var inst_9075 = cljs.core.nth.call(null,inst_9074__$1,0,null);var inst_9076__$1 = cljs.core.nth.call(null,inst_9074__$1,1,null);var inst_9077 = cljs.core._EQ_.call(null,inst_9076__$1,internal);var state_9105__$1 = (function (){var statearr_9112 = state_9105;(statearr_9112[7] = inst_9074__$1);
(statearr_9112[9] = inst_9075);
(statearr_9112[8] = inst_9076__$1);
return statearr_9112;
})();if(inst_9077)
{var statearr_9113_9140 = state_9105__$1;(statearr_9113_9140[1] = 8);
} else
{var statearr_9114_9141 = state_9105__$1;(statearr_9114_9141[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9106 === 8))
{var inst_9074 = (state_9105[7]);var inst_9080 = cljs.core.nth.call(null,inst_9074,0,null);var inst_9081 = cljs.core.async.put_BANG_.call(null,in$,inst_9080);var state_9105__$1 = state_9105;var statearr_9115_9142 = state_9105__$1;(statearr_9115_9142[2] = inst_9081);
(statearr_9115_9142[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9106 === 9))
{var inst_9076 = (state_9105[8]);var inst_9083 = cljs.core._EQ_.call(null,inst_9076,out);var state_9105__$1 = state_9105;if(inst_9083)
{var statearr_9116_9143 = state_9105__$1;(statearr_9116_9143[1] = 11);
} else
{var statearr_9117_9144 = state_9105__$1;(statearr_9117_9144[1] = 12);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9106 === 10))
{var inst_9097 = (state_9105[2]);var state_9105__$1 = (function (){var statearr_9118 = state_9105;(statearr_9118[10] = inst_9097);
return statearr_9118;
})();var statearr_9119_9145 = state_9105__$1;(statearr_9119_9145[2] = null);
(statearr_9119_9145[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9106 === 11))
{var inst_9074 = (state_9105[7]);var inst_9086 = cljs.core.nth.call(null,inst_9074,0,null);var inst_9087 = cljs.core.async.put_BANG_.call(null,internal,inst_9086);var state_9105__$1 = state_9105;var statearr_9120_9146 = state_9105__$1;(statearr_9120_9146[2] = inst_9087);
(statearr_9120_9146[1] = 13);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9106 === 12))
{var inst_9076 = (state_9105[8]);var inst_9089 = cljs.core._EQ_.call(null,inst_9076,new cljs.core.Keyword(null,"default","default",2558708147));var state_9105__$1 = state_9105;if(inst_9089)
{var statearr_9121_9147 = state_9105__$1;(statearr_9121_9147[1] = 14);
} else
{var statearr_9122_9148 = state_9105__$1;(statearr_9122_9148[1] = 15);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9106 === 13))
{var inst_9095 = (state_9105[2]);var state_9105__$1 = state_9105;var statearr_9123_9149 = state_9105__$1;(statearr_9123_9149[2] = inst_9095);
(statearr_9123_9149[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9106 === 14))
{var inst_9075 = (state_9105[9]);var state_9105__$1 = state_9105;var statearr_9124_9150 = state_9105__$1;(statearr_9124_9150[2] = inst_9075);
(statearr_9124_9150[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9106 === 15))
{var state_9105__$1 = state_9105;var statearr_9125_9151 = state_9105__$1;(statearr_9125_9151[2] = null);
(statearr_9125_9151[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9106 === 16))
{var inst_9093 = (state_9105[2]);var state_9105__$1 = state_9105;var statearr_9126_9152 = state_9105__$1;(statearr_9126_9152[2] = inst_9093);
(statearr_9126_9152[1] = 13);
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
});})(c__5638__auto___9134,in$,out,internal,ws))
;return ((function (switch__5623__auto__,c__5638__auto___9134,in$,out,internal,ws){
return (function() {
var state_machine__5624__auto__ = null;
var state_machine__5624__auto____0 = (function (){var statearr_9130 = [null,null,null,null,null,null,null,null,null,null,null];(statearr_9130[0] = state_machine__5624__auto__);
(statearr_9130[1] = 1);
return statearr_9130;
});
var state_machine__5624__auto____1 = (function (state_9105){while(true){
var ret_value__5625__auto__ = (function (){try{while(true){
var result__5626__auto__ = switch__5623__auto__.call(null,state_9105);if(cljs.core.keyword_identical_QMARK_.call(null,result__5626__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5626__auto__;
}
break;
}
}catch (e9131){if((e9131 instanceof Object))
{var ex__5627__auto__ = e9131;var statearr_9132_9153 = state_9105;(statearr_9132_9153[5] = ex__5627__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_9105);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e9131;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5625__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__9154 = state_9105;
state_9105 = G__9154;
continue;
}
} else
{return ret_value__5625__auto__;
}
break;
}
});
state_machine__5624__auto__ = function(state_9105){
switch(arguments.length){
case 0:
return state_machine__5624__auto____0.call(this);
case 1:
return state_machine__5624__auto____1.call(this,state_9105);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5624__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5624__auto____0;
state_machine__5624__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5624__auto____1;
return state_machine__5624__auto__;
})()
;})(switch__5623__auto__,c__5638__auto___9134,in$,out,internal,ws))
})();var state__5640__auto__ = (function (){var statearr_9133 = f__5639__auto__.call(null);(statearr_9133[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5638__auto___9134);
return statearr_9133;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5640__auto__);
});})(c__5638__auto___9134,in$,out,internal,ws))
);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"in","in",1013907607),in$,new cljs.core.Keyword(null,"out","out",1014014656),out], null);
});
connection.send_message = (function send_message(conn,message){cljs.core.async.put_BANG_.call(null,new cljs.core.Keyword(null,"in","in",1013907607).cljs$core$IFn$_invoke$arity$1(conn),message);
return cljs.core.async.put_BANG_.call(null,new cljs.core.Keyword(null,"out","out",1014014656).cljs$core$IFn$_invoke$arity$1(conn),message);
});
