// Compiled by ClojureScript 0.0-2202
goog.provide('cljs.core.async');
goog.require('cljs.core');
goog.require('cljs.core.async.impl.ioc_helpers');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.timers');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.timers');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.ioc_helpers');
cljs.core.async.fn_handler = (function fn_handler(f){if(typeof cljs.core.async.t10373 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t10373 = (function (f,fn_handler,meta10374){
this.f = f;
this.fn_handler = fn_handler;
this.meta10374 = meta10374;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t10373.cljs$lang$type = true;
cljs.core.async.t10373.cljs$lang$ctorStr = "cljs.core.async/t10373";
cljs.core.async.t10373.cljs$lang$ctorPrWriter = (function (this__4048__auto__,writer__4049__auto__,opt__4050__auto__){return cljs.core._write.call(null,writer__4049__auto__,"cljs.core.async/t10373");
});
cljs.core.async.t10373.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t10373.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return true;
});
cljs.core.async.t10373.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.f;
});
cljs.core.async.t10373.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_10375){var self__ = this;
var _10375__$1 = this;return self__.meta10374;
});
cljs.core.async.t10373.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_10375,meta10374__$1){var self__ = this;
var _10375__$1 = this;return (new cljs.core.async.t10373(self__.f,self__.fn_handler,meta10374__$1));
});
cljs.core.async.__GT_t10373 = (function __GT_t10373(f__$1,fn_handler__$1,meta10374){return (new cljs.core.async.t10373(f__$1,fn_handler__$1,meta10374));
});
}
return (new cljs.core.async.t10373(f,fn_handler,null));
});
/**
* Returns a fixed buffer of size n. When full, puts will block/park.
*/
cljs.core.async.buffer = (function buffer(n){return cljs.core.async.impl.buffers.fixed_buffer.call(null,n);
});
/**
* Returns a buffer of size n. When full, puts will complete but
* val will be dropped (no transfer).
*/
cljs.core.async.dropping_buffer = (function dropping_buffer(n){return cljs.core.async.impl.buffers.dropping_buffer.call(null,n);
});
/**
* Returns a buffer of size n. When full, puts will complete, and be
* buffered, but oldest elements in buffer will be dropped (not
* transferred).
*/
cljs.core.async.sliding_buffer = (function sliding_buffer(n){return cljs.core.async.impl.buffers.sliding_buffer.call(null,n);
});
/**
* Returns true if a channel created with buff will never block. That is to say,
* puts into this buffer will never cause the buffer to be full.
*/
cljs.core.async.unblocking_buffer_QMARK_ = (function unblocking_buffer_QMARK_(buff){var G__10377 = buff;if(G__10377)
{var bit__4131__auto__ = null;if(cljs.core.truth_((function (){var or__3481__auto__ = bit__4131__auto__;if(cljs.core.truth_(or__3481__auto__))
{return or__3481__auto__;
} else
{return G__10377.cljs$core$async$impl$protocols$UnblockingBuffer$;
}
})()))
{return true;
} else
{if((!G__10377.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__10377);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__10377);
}
});
/**
* Creates a channel with an optional buffer. If buf-or-n is a number,
* will create and use a fixed buffer of that size.
*/
cljs.core.async.chan = (function() {
var chan = null;
var chan__0 = (function (){return chan.call(null,null);
});
var chan__1 = (function (buf_or_n){var buf_or_n__$1 = ((cljs.core._EQ_.call(null,buf_or_n,0))?null:buf_or_n);return cljs.core.async.impl.channels.chan.call(null,((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer.call(null,buf_or_n__$1):buf_or_n__$1));
});
chan = function(buf_or_n){
switch(arguments.length){
case 0:
return chan__0.call(this);
case 1:
return chan__1.call(this,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
chan.cljs$core$IFn$_invoke$arity$0 = chan__0;
chan.cljs$core$IFn$_invoke$arity$1 = chan__1;
return chan;
})()
;
/**
* Returns a channel that will close after msecs
*/
cljs.core.async.timeout = (function timeout(msecs){return cljs.core.async.impl.timers.timeout.call(null,msecs);
});
/**
* takes a val from port. Must be called inside a (go ...) block. Will
* return nil if closed. Will park if nothing is available.
* Returns true unless port is already closed
*/
cljs.core.async._LT__BANG_ = (function _LT__BANG_(port){if(null)
{return null;
} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("<! used not in (go ...) block"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,null))].join('')));
}
});
/**
* Asynchronously takes a val from port, passing to fn1. Will pass nil
* if closed. If on-caller? (default true) is true, and value is
* immediately available, will call fn1 on calling thread.
* Returns nil.
*/
cljs.core.async.take_BANG_ = (function() {
var take_BANG_ = null;
var take_BANG___2 = (function (port,fn1){return take_BANG_.call(null,port,fn1,true);
});
var take_BANG___3 = (function (port,fn1,on_caller_QMARK_){var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,fn1));if(cljs.core.truth_(ret))
{var val_10378 = cljs.core.deref.call(null,ret);if(cljs.core.truth_(on_caller_QMARK_))
{fn1.call(null,val_10378);
} else
{cljs.core.async.impl.dispatch.run.call(null,((function (val_10378,ret){
return (function (){return fn1.call(null,val_10378);
});})(val_10378,ret))
);
}
} else
{}
return null;
});
take_BANG_ = function(port,fn1,on_caller_QMARK_){
switch(arguments.length){
case 2:
return take_BANG___2.call(this,port,fn1);
case 3:
return take_BANG___3.call(this,port,fn1,on_caller_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
take_BANG_.cljs$core$IFn$_invoke$arity$2 = take_BANG___2;
take_BANG_.cljs$core$IFn$_invoke$arity$3 = take_BANG___3;
return take_BANG_;
})()
;
cljs.core.async.nop = (function nop(_){return null;
});
cljs.core.async.fhnop = cljs.core.async.fn_handler.call(null,cljs.core.async.nop);
/**
* puts a val into port. nil values are not allowed. Must be called
* inside a (go ...) block. Will park if no buffer space is available.
* Returns true unless port is already closed.
*/
cljs.core.async._GT__BANG_ = (function _GT__BANG_(port,val){if(null)
{return null;
} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(">! used not in (go ...) block"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,null))].join('')));
}
});
/**
* Asynchronously puts a val into port, calling fn0 (if supplied) when
* complete. nil values are not allowed. Will throw if closed. If
* on-caller? (default true) is true, and the put is immediately
* accepted, will call fn0 on calling thread.  Returns nil.
*/
cljs.core.async.put_BANG_ = (function() {
var put_BANG_ = null;
var put_BANG___2 = (function (port,val){var temp__4090__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fhnop);if(cljs.core.truth_(temp__4090__auto__))
{var ret = temp__4090__auto__;return cljs.core.deref.call(null,ret);
} else
{return true;
}
});
var put_BANG___3 = (function (port,val,fn1){return put_BANG_.call(null,port,val,fn1,true);
});
var put_BANG___4 = (function (port,val,fn1,on_caller_QMARK_){var temp__4090__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,fn1));if(cljs.core.truth_(temp__4090__auto__))
{var retb = temp__4090__auto__;var ret = cljs.core.deref.call(null,retb);if(cljs.core.truth_(on_caller_QMARK_))
{fn1.call(null,ret);
} else
{cljs.core.async.impl.dispatch.run.call(null,((function (ret,retb,temp__4090__auto__){
return (function (){return fn1.call(null,ret);
});})(ret,retb,temp__4090__auto__))
);
}
return ret;
} else
{return true;
}
});
put_BANG_ = function(port,val,fn1,on_caller_QMARK_){
switch(arguments.length){
case 2:
return put_BANG___2.call(this,port,val);
case 3:
return put_BANG___3.call(this,port,val,fn1);
case 4:
return put_BANG___4.call(this,port,val,fn1,on_caller_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
put_BANG_.cljs$core$IFn$_invoke$arity$2 = put_BANG___2;
put_BANG_.cljs$core$IFn$_invoke$arity$3 = put_BANG___3;
put_BANG_.cljs$core$IFn$_invoke$arity$4 = put_BANG___4;
return put_BANG_;
})()
;
cljs.core.async.close_BANG_ = (function close_BANG_(port){return cljs.core.async.impl.protocols.close_BANG_.call(null,port);
});
cljs.core.async.random_array = (function random_array(n){var a = (new Array(n));var n__4329__auto___10379 = n;var x_10380 = 0;while(true){
if((x_10380 < n__4329__auto___10379))
{(a[x_10380] = 0);
{
var G__10381 = (x_10380 + 1);
x_10380 = G__10381;
continue;
}
} else
{}
break;
}
var i = 1;while(true){
if(cljs.core._EQ_.call(null,i,n))
{return a;
} else
{var j = cljs.core.rand_int.call(null,i);(a[i] = (a[j]));
(a[j] = i);
{
var G__10382 = (i + 1);
i = G__10382;
continue;
}
}
break;
}
});
cljs.core.async.alt_flag = (function alt_flag(){var flag = cljs.core.atom.call(null,true);if(typeof cljs.core.async.t10386 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t10386 = (function (flag,alt_flag,meta10387){
this.flag = flag;
this.alt_flag = alt_flag;
this.meta10387 = meta10387;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t10386.cljs$lang$type = true;
cljs.core.async.t10386.cljs$lang$ctorStr = "cljs.core.async/t10386";
cljs.core.async.t10386.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__4048__auto__,writer__4049__auto__,opt__4050__auto__){return cljs.core._write.call(null,writer__4049__auto__,"cljs.core.async/t10386");
});})(flag))
;
cljs.core.async.t10386.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t10386.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){var self__ = this;
var ___$1 = this;return cljs.core.deref.call(null,self__.flag);
});})(flag))
;
cljs.core.async.t10386.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.flag,null);
return true;
});})(flag))
;
cljs.core.async.t10386.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_10388){var self__ = this;
var _10388__$1 = this;return self__.meta10387;
});})(flag))
;
cljs.core.async.t10386.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_10388,meta10387__$1){var self__ = this;
var _10388__$1 = this;return (new cljs.core.async.t10386(self__.flag,self__.alt_flag,meta10387__$1));
});})(flag))
;
cljs.core.async.__GT_t10386 = ((function (flag){
return (function __GT_t10386(flag__$1,alt_flag__$1,meta10387){return (new cljs.core.async.t10386(flag__$1,alt_flag__$1,meta10387));
});})(flag))
;
}
return (new cljs.core.async.t10386(flag,alt_flag,null));
});
cljs.core.async.alt_handler = (function alt_handler(flag,cb){if(typeof cljs.core.async.t10392 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t10392 = (function (cb,flag,alt_handler,meta10393){
this.cb = cb;
this.flag = flag;
this.alt_handler = alt_handler;
this.meta10393 = meta10393;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t10392.cljs$lang$type = true;
cljs.core.async.t10392.cljs$lang$ctorStr = "cljs.core.async/t10392";
cljs.core.async.t10392.cljs$lang$ctorPrWriter = (function (this__4048__auto__,writer__4049__auto__,opt__4050__auto__){return cljs.core._write.call(null,writer__4049__auto__,"cljs.core.async/t10392");
});
cljs.core.async.t10392.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t10392.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});
cljs.core.async.t10392.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;cljs.core.async.impl.protocols.commit.call(null,self__.flag);
return self__.cb;
});
cljs.core.async.t10392.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_10394){var self__ = this;
var _10394__$1 = this;return self__.meta10393;
});
cljs.core.async.t10392.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_10394,meta10393__$1){var self__ = this;
var _10394__$1 = this;return (new cljs.core.async.t10392(self__.cb,self__.flag,self__.alt_handler,meta10393__$1));
});
cljs.core.async.__GT_t10392 = (function __GT_t10392(cb__$1,flag__$1,alt_handler__$1,meta10393){return (new cljs.core.async.t10392(cb__$1,flag__$1,alt_handler__$1,meta10393));
});
}
return (new cljs.core.async.t10392(cb,flag,alt_handler,null));
});
/**
* returns derefable [val port] if immediate, nil if enqueued
*/
cljs.core.async.do_alts = (function do_alts(fret,ports,opts){var flag = cljs.core.async.alt_flag.call(null);var n = cljs.core.count.call(null,ports);var idxs = cljs.core.async.random_array.call(null,n);var priority = new cljs.core.Keyword(null,"priority","priority",4143410454).cljs$core$IFn$_invoke$arity$1(opts);var ret = (function (){var i = 0;while(true){
if((i < n))
{var idx = (cljs.core.truth_(priority)?i:(idxs[i]));var port = cljs.core.nth.call(null,ports,idx);var wport = ((cljs.core.vector_QMARK_.call(null,port))?port.call(null,0):null);var vbox = (cljs.core.truth_(wport)?(function (){var val = port.call(null,1);return cljs.core.async.impl.protocols.put_BANG_.call(null,wport,val,cljs.core.async.alt_handler.call(null,flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__10395_SHARP_){return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__10395_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__10396_SHARP_){return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__10396_SHARP_,port], null));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));if(cljs.core.truth_(vbox))
{return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref.call(null,vbox),(function (){var or__3481__auto__ = wport;if(cljs.core.truth_(or__3481__auto__))
{return or__3481__auto__;
} else
{return port;
}
})()], null));
} else
{{
var G__10397 = (i + 1);
i = G__10397;
continue;
}
}
} else
{return null;
}
break;
}
})();var or__3481__auto__ = ret;if(cljs.core.truth_(or__3481__auto__))
{return or__3481__auto__;
} else
{if(cljs.core.contains_QMARK_.call(null,opts,new cljs.core.Keyword(null,"default","default",2558708147)))
{var temp__4092__auto__ = (function (){var and__3469__auto__ = cljs.core.async.impl.protocols.active_QMARK_.call(null,flag);if(cljs.core.truth_(and__3469__auto__))
{return cljs.core.async.impl.protocols.commit.call(null,flag);
} else
{return and__3469__auto__;
}
})();if(cljs.core.truth_(temp__4092__auto__))
{var got = temp__4092__auto__;return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",2558708147).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"default","default",2558708147)], null));
} else
{return null;
}
} else
{return null;
}
}
});
/**
* Completes at most one of several channel operations. Must be called
* inside a (go ...) block. ports is a vector of channel endpoints,
* which can be either a channel to take from or a vector of
* [channel-to-put-to val-to-put], in any combination. Takes will be
* made as if by <!, and puts will be made as if by >!. Unless
* the :priority option is true, if more than one port operation is
* ready a non-deterministic choice will be made. If no operation is
* ready and a :default value is supplied, [default-val :default] will
* be returned, otherwise alts! will park until the first operation to
* become ready completes. Returns [val port] of the completed
* operation, where val is the value taken for takes, and a
* boolean (true unless already closed, as per put!) for puts.
* 
* opts are passed as :key val ... Supported options:
* 
* :default val - the value to use if none of the operations are immediately ready
* :priority true - (default nil) when true, the operations will be tried in order.
* 
* Note: there is no guarantee that the port exps or val exprs will be
* used, nor in what order should they be, so they should not be
* depended upon for side effects.
* @param {...*} var_args
*/
cljs.core.async.alts_BANG_ = (function() { 
var alts_BANG___delegate = function (ports,p__10398){var map__10400 = p__10398;var map__10400__$1 = ((cljs.core.seq_QMARK_.call(null,map__10400))?cljs.core.apply.call(null,cljs.core.hash_map,map__10400):map__10400);var opts = map__10400__$1;if(null)
{return null;
} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("alts! used not in (go ...) block"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,null))].join('')));
}
};
var alts_BANG_ = function (ports,var_args){
var p__10398 = null;if (arguments.length > 1) {
  p__10398 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return alts_BANG___delegate.call(this,ports,p__10398);};
alts_BANG_.cljs$lang$maxFixedArity = 1;
alts_BANG_.cljs$lang$applyTo = (function (arglist__10401){
var ports = cljs.core.first(arglist__10401);
var p__10398 = cljs.core.rest(arglist__10401);
return alts_BANG___delegate(ports,p__10398);
});
alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = alts_BANG___delegate;
return alts_BANG_;
})()
;
/**
* Takes a function and a source channel, and returns a channel which
* contains the values produced by applying f to each value taken from
* the source channel
*/
cljs.core.async.map_LT_ = (function map_LT_(f,ch){if(typeof cljs.core.async.t10409 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t10409 = (function (ch,f,map_LT_,meta10410){
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta10410 = meta10410;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t10409.cljs$lang$type = true;
cljs.core.async.t10409.cljs$lang$ctorStr = "cljs.core.async/t10409";
cljs.core.async.t10409.cljs$lang$ctorPrWriter = (function (this__4048__auto__,writer__4049__auto__,opt__4050__auto__){return cljs.core._write.call(null,writer__4049__auto__,"cljs.core.async/t10409");
});
cljs.core.async.t10409.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t10409.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});
cljs.core.async.t10409.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t10409.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){if(typeof cljs.core.async.t10412 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t10412 = (function (fn1,_,meta10410,ch,f,map_LT_,meta10413){
this.fn1 = fn1;
this._ = _;
this.meta10410 = meta10410;
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta10413 = meta10413;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t10412.cljs$lang$type = true;
cljs.core.async.t10412.cljs$lang$ctorStr = "cljs.core.async/t10412";
cljs.core.async.t10412.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__4048__auto__,writer__4049__auto__,opt__4050__auto__){return cljs.core._write.call(null,writer__4049__auto__,"cljs.core.async/t10412");
});})(___$1))
;
cljs.core.async.t10412.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t10412.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$3){var self__ = this;
var ___$4 = this;return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;
cljs.core.async.t10412.prototype.cljs$core$async$impl$protocols$Handler$lock_id$arity$1 = ((function (___$1){
return (function (___$3){var self__ = this;
var ___$4 = this;return cljs.core.async.impl.protocols.lock_id.call(null,self__.fn1);
});})(___$1))
;
cljs.core.async.t10412.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$3){var self__ = this;
var ___$4 = this;var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);return ((function (f1,___$4,___$1){
return (function (p1__10402_SHARP_){return f1.call(null,(((p1__10402_SHARP_ == null))?null:self__.f.call(null,p1__10402_SHARP_)));
});
;})(f1,___$4,___$1))
});})(___$1))
;
cljs.core.async.t10412.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_10414){var self__ = this;
var _10414__$1 = this;return self__.meta10413;
});})(___$1))
;
cljs.core.async.t10412.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_10414,meta10413__$1){var self__ = this;
var _10414__$1 = this;return (new cljs.core.async.t10412(self__.fn1,self__._,self__.meta10410,self__.ch,self__.f,self__.map_LT_,meta10413__$1));
});})(___$1))
;
cljs.core.async.__GT_t10412 = ((function (___$1){
return (function __GT_t10412(fn1__$1,___$2,meta10410__$1,ch__$2,f__$2,map_LT___$2,meta10413){return (new cljs.core.async.t10412(fn1__$1,___$2,meta10410__$1,ch__$2,f__$2,map_LT___$2,meta10413));
});})(___$1))
;
}
return (new cljs.core.async.t10412(fn1,___$1,self__.meta10410,self__.ch,self__.f,self__.map_LT_,null));
})());if(cljs.core.truth_((function (){var and__3469__auto__ = ret;if(cljs.core.truth_(and__3469__auto__))
{return !((cljs.core.deref.call(null,ret) == null));
} else
{return and__3469__auto__;
}
})()))
{return cljs.core.async.impl.channels.box.call(null,self__.f.call(null,cljs.core.deref.call(null,ret)));
} else
{return ret;
}
});
cljs.core.async.t10409.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t10409.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t10409.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});
cljs.core.async.t10409.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_10411){var self__ = this;
var _10411__$1 = this;return self__.meta10410;
});
cljs.core.async.t10409.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_10411,meta10410__$1){var self__ = this;
var _10411__$1 = this;return (new cljs.core.async.t10409(self__.ch,self__.f,self__.map_LT_,meta10410__$1));
});
cljs.core.async.__GT_t10409 = (function __GT_t10409(ch__$1,f__$1,map_LT___$1,meta10410){return (new cljs.core.async.t10409(ch__$1,f__$1,map_LT___$1,meta10410));
});
}
return (new cljs.core.async.t10409(ch,f,map_LT_,null));
});
/**
* Takes a function and a target channel, and returns a channel which
* applies f to each value before supplying it to the target channel.
*/
cljs.core.async.map_GT_ = (function map_GT_(f,ch){if(typeof cljs.core.async.t10418 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t10418 = (function (ch,f,map_GT_,meta10419){
this.ch = ch;
this.f = f;
this.map_GT_ = map_GT_;
this.meta10419 = meta10419;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t10418.cljs$lang$type = true;
cljs.core.async.t10418.cljs$lang$ctorStr = "cljs.core.async/t10418";
cljs.core.async.t10418.cljs$lang$ctorPrWriter = (function (this__4048__auto__,writer__4049__auto__,opt__4050__auto__){return cljs.core._write.call(null,writer__4049__auto__,"cljs.core.async/t10418");
});
cljs.core.async.t10418.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t10418.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});
cljs.core.async.t10418.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t10418.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});
cljs.core.async.t10418.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t10418.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t10418.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_10420){var self__ = this;
var _10420__$1 = this;return self__.meta10419;
});
cljs.core.async.t10418.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_10420,meta10419__$1){var self__ = this;
var _10420__$1 = this;return (new cljs.core.async.t10418(self__.ch,self__.f,self__.map_GT_,meta10419__$1));
});
cljs.core.async.__GT_t10418 = (function __GT_t10418(ch__$1,f__$1,map_GT___$1,meta10419){return (new cljs.core.async.t10418(ch__$1,f__$1,map_GT___$1,meta10419));
});
}
return (new cljs.core.async.t10418(ch,f,map_GT_,null));
});
/**
* Takes a predicate and a target channel, and returns a channel which
* supplies only the values for which the predicate returns true to the
* target channel.
*/
cljs.core.async.filter_GT_ = (function filter_GT_(p,ch){if(typeof cljs.core.async.t10424 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t10424 = (function (ch,p,filter_GT_,meta10425){
this.ch = ch;
this.p = p;
this.filter_GT_ = filter_GT_;
this.meta10425 = meta10425;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t10424.cljs$lang$type = true;
cljs.core.async.t10424.cljs$lang$ctorStr = "cljs.core.async/t10424";
cljs.core.async.t10424.cljs$lang$ctorPrWriter = (function (this__4048__auto__,writer__4049__auto__,opt__4050__auto__){return cljs.core._write.call(null,writer__4049__auto__,"cljs.core.async/t10424");
});
cljs.core.async.t10424.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t10424.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){var self__ = this;
var ___$1 = this;if(cljs.core.truth_(self__.p.call(null,val)))
{return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else
{return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});
cljs.core.async.t10424.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t10424.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});
cljs.core.async.t10424.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t10424.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t10424.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});
cljs.core.async.t10424.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_10426){var self__ = this;
var _10426__$1 = this;return self__.meta10425;
});
cljs.core.async.t10424.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_10426,meta10425__$1){var self__ = this;
var _10426__$1 = this;return (new cljs.core.async.t10424(self__.ch,self__.p,self__.filter_GT_,meta10425__$1));
});
cljs.core.async.__GT_t10424 = (function __GT_t10424(ch__$1,p__$1,filter_GT___$1,meta10425){return (new cljs.core.async.t10424(ch__$1,p__$1,filter_GT___$1,meta10425));
});
}
return (new cljs.core.async.t10424(ch,p,filter_GT_,null));
});
/**
* Takes a predicate and a target channel, and returns a channel which
* supplies only the values for which the predicate returns false to the
* target channel.
*/
cljs.core.async.remove_GT_ = (function remove_GT_(p,ch){return cljs.core.async.filter_GT_.call(null,cljs.core.complement.call(null,p),ch);
});
/**
* Takes a predicate and a source channel, and returns a channel which
* contains only the values taken from the source channel for which the
* predicate returns true. The returned channel will be unbuffered by
* default, or a buf-or-n can be supplied. The channel will close
* when the source channel closes.
*/
cljs.core.async.filter_LT_ = (function() {
var filter_LT_ = null;
var filter_LT___2 = (function (p,ch){return filter_LT_.call(null,p,ch,null);
});
var filter_LT___3 = (function (p,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__5638__auto___10509 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__5638__auto___10509,out){
return (function (){var f__5639__auto__ = (function (){var switch__5623__auto__ = ((function (c__5638__auto___10509,out){
return (function (state_10488){var state_val_10489 = (state_10488[1]);if((state_val_10489 === 1))
{var state_10488__$1 = state_10488;var statearr_10490_10510 = state_10488__$1;(statearr_10490_10510[2] = null);
(statearr_10490_10510[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10489 === 2))
{var state_10488__$1 = state_10488;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_10488__$1,4,ch);
} else
{if((state_val_10489 === 3))
{var inst_10486 = (state_10488[2]);var state_10488__$1 = state_10488;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_10488__$1,inst_10486);
} else
{if((state_val_10489 === 4))
{var inst_10470 = (state_10488[7]);var inst_10470__$1 = (state_10488[2]);var inst_10471 = (inst_10470__$1 == null);var state_10488__$1 = (function (){var statearr_10491 = state_10488;(statearr_10491[7] = inst_10470__$1);
return statearr_10491;
})();if(cljs.core.truth_(inst_10471))
{var statearr_10492_10511 = state_10488__$1;(statearr_10492_10511[1] = 5);
} else
{var statearr_10493_10512 = state_10488__$1;(statearr_10493_10512[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10489 === 5))
{var inst_10473 = cljs.core.async.close_BANG_.call(null,out);var state_10488__$1 = state_10488;var statearr_10494_10513 = state_10488__$1;(statearr_10494_10513[2] = inst_10473);
(statearr_10494_10513[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10489 === 6))
{var inst_10470 = (state_10488[7]);var inst_10475 = p.call(null,inst_10470);var state_10488__$1 = state_10488;if(cljs.core.truth_(inst_10475))
{var statearr_10495_10514 = state_10488__$1;(statearr_10495_10514[1] = 8);
} else
{var statearr_10496_10515 = state_10488__$1;(statearr_10496_10515[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10489 === 7))
{var inst_10484 = (state_10488[2]);var state_10488__$1 = state_10488;var statearr_10497_10516 = state_10488__$1;(statearr_10497_10516[2] = inst_10484);
(statearr_10497_10516[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10489 === 8))
{var inst_10470 = (state_10488[7]);var state_10488__$1 = state_10488;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_10488__$1,11,out,inst_10470);
} else
{if((state_val_10489 === 9))
{var state_10488__$1 = state_10488;var statearr_10498_10517 = state_10488__$1;(statearr_10498_10517[2] = null);
(statearr_10498_10517[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10489 === 10))
{var inst_10481 = (state_10488[2]);var state_10488__$1 = (function (){var statearr_10499 = state_10488;(statearr_10499[8] = inst_10481);
return statearr_10499;
})();var statearr_10500_10518 = state_10488__$1;(statearr_10500_10518[2] = null);
(statearr_10500_10518[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10489 === 11))
{var inst_10478 = (state_10488[2]);var state_10488__$1 = state_10488;var statearr_10501_10519 = state_10488__$1;(statearr_10501_10519[2] = inst_10478);
(statearr_10501_10519[1] = 10);
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
});})(c__5638__auto___10509,out))
;return ((function (switch__5623__auto__,c__5638__auto___10509,out){
return (function() {
var state_machine__5624__auto__ = null;
var state_machine__5624__auto____0 = (function (){var statearr_10505 = [null,null,null,null,null,null,null,null,null];(statearr_10505[0] = state_machine__5624__auto__);
(statearr_10505[1] = 1);
return statearr_10505;
});
var state_machine__5624__auto____1 = (function (state_10488){while(true){
var ret_value__5625__auto__ = (function (){try{while(true){
var result__5626__auto__ = switch__5623__auto__.call(null,state_10488);if(cljs.core.keyword_identical_QMARK_.call(null,result__5626__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5626__auto__;
}
break;
}
}catch (e10506){if((e10506 instanceof Object))
{var ex__5627__auto__ = e10506;var statearr_10507_10520 = state_10488;(statearr_10507_10520[5] = ex__5627__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_10488);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e10506;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5625__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__10521 = state_10488;
state_10488 = G__10521;
continue;
}
} else
{return ret_value__5625__auto__;
}
break;
}
});
state_machine__5624__auto__ = function(state_10488){
switch(arguments.length){
case 0:
return state_machine__5624__auto____0.call(this);
case 1:
return state_machine__5624__auto____1.call(this,state_10488);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5624__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5624__auto____0;
state_machine__5624__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5624__auto____1;
return state_machine__5624__auto__;
})()
;})(switch__5623__auto__,c__5638__auto___10509,out))
})();var state__5640__auto__ = (function (){var statearr_10508 = f__5639__auto__.call(null);(statearr_10508[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5638__auto___10509);
return statearr_10508;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5640__auto__);
});})(c__5638__auto___10509,out))
);
return out;
});
filter_LT_ = function(p,ch,buf_or_n){
switch(arguments.length){
case 2:
return filter_LT___2.call(this,p,ch);
case 3:
return filter_LT___3.call(this,p,ch,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
filter_LT_.cljs$core$IFn$_invoke$arity$2 = filter_LT___2;
filter_LT_.cljs$core$IFn$_invoke$arity$3 = filter_LT___3;
return filter_LT_;
})()
;
/**
* Takes a predicate and a source channel, and returns a channel which
* contains only the values taken from the source channel for which the
* predicate returns false. The returned channel will be unbuffered by
* default, or a buf-or-n can be supplied. The channel will close
* when the source channel closes.
*/
cljs.core.async.remove_LT_ = (function() {
var remove_LT_ = null;
var remove_LT___2 = (function (p,ch){return remove_LT_.call(null,p,ch,null);
});
var remove_LT___3 = (function (p,ch,buf_or_n){return cljs.core.async.filter_LT_.call(null,cljs.core.complement.call(null,p),ch,buf_or_n);
});
remove_LT_ = function(p,ch,buf_or_n){
switch(arguments.length){
case 2:
return remove_LT___2.call(this,p,ch);
case 3:
return remove_LT___3.call(this,p,ch,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
remove_LT_.cljs$core$IFn$_invoke$arity$2 = remove_LT___2;
remove_LT_.cljs$core$IFn$_invoke$arity$3 = remove_LT___3;
return remove_LT_;
})()
;
cljs.core.async.mapcat_STAR_ = (function mapcat_STAR_(f,in$,out){var c__5638__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__5638__auto__){
return (function (){var f__5639__auto__ = (function (){var switch__5623__auto__ = ((function (c__5638__auto__){
return (function (state_10687){var state_val_10688 = (state_10687[1]);if((state_val_10688 === 1))
{var state_10687__$1 = state_10687;var statearr_10689_10730 = state_10687__$1;(statearr_10689_10730[2] = null);
(statearr_10689_10730[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10688 === 2))
{var state_10687__$1 = state_10687;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_10687__$1,4,in$);
} else
{if((state_val_10688 === 3))
{var inst_10685 = (state_10687[2]);var state_10687__$1 = state_10687;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_10687__$1,inst_10685);
} else
{if((state_val_10688 === 4))
{var inst_10628 = (state_10687[7]);var inst_10628__$1 = (state_10687[2]);var inst_10629 = (inst_10628__$1 == null);var state_10687__$1 = (function (){var statearr_10690 = state_10687;(statearr_10690[7] = inst_10628__$1);
return statearr_10690;
})();if(cljs.core.truth_(inst_10629))
{var statearr_10691_10731 = state_10687__$1;(statearr_10691_10731[1] = 5);
} else
{var statearr_10692_10732 = state_10687__$1;(statearr_10692_10732[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10688 === 5))
{var inst_10631 = cljs.core.async.close_BANG_.call(null,out);var state_10687__$1 = state_10687;var statearr_10693_10733 = state_10687__$1;(statearr_10693_10733[2] = inst_10631);
(statearr_10693_10733[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10688 === 6))
{var inst_10628 = (state_10687[7]);var inst_10637 = f.call(null,inst_10628);var inst_10638 = cljs.core.seq.call(null,inst_10637);var inst_10639 = inst_10638;var inst_10640 = null;var inst_10641 = 0;var inst_10642 = 0;var state_10687__$1 = (function (){var statearr_10694 = state_10687;(statearr_10694[8] = inst_10642);
(statearr_10694[9] = inst_10641);
(statearr_10694[10] = inst_10640);
(statearr_10694[11] = inst_10639);
return statearr_10694;
})();var statearr_10695_10734 = state_10687__$1;(statearr_10695_10734[2] = null);
(statearr_10695_10734[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10688 === 7))
{var inst_10683 = (state_10687[2]);var state_10687__$1 = state_10687;var statearr_10696_10735 = state_10687__$1;(statearr_10696_10735[2] = inst_10683);
(statearr_10696_10735[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10688 === 8))
{var inst_10642 = (state_10687[8]);var inst_10641 = (state_10687[9]);var inst_10644 = (inst_10642 < inst_10641);var inst_10645 = inst_10644;var state_10687__$1 = state_10687;if(cljs.core.truth_(inst_10645))
{var statearr_10697_10736 = state_10687__$1;(statearr_10697_10736[1] = 10);
} else
{var statearr_10698_10737 = state_10687__$1;(statearr_10698_10737[1] = 11);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10688 === 9))
{var inst_10675 = (state_10687[2]);var inst_10676 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);var state_10687__$1 = (function (){var statearr_10699 = state_10687;(statearr_10699[12] = inst_10675);
return statearr_10699;
})();if(cljs.core.truth_(inst_10676))
{var statearr_10700_10738 = state_10687__$1;(statearr_10700_10738[1] = 21);
} else
{var statearr_10701_10739 = state_10687__$1;(statearr_10701_10739[1] = 22);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10688 === 10))
{var inst_10642 = (state_10687[8]);var inst_10640 = (state_10687[10]);var inst_10647 = cljs.core._nth.call(null,inst_10640,inst_10642);var state_10687__$1 = state_10687;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_10687__$1,13,out,inst_10647);
} else
{if((state_val_10688 === 11))
{var inst_10639 = (state_10687[11]);var inst_10653 = (state_10687[13]);var inst_10653__$1 = cljs.core.seq.call(null,inst_10639);var state_10687__$1 = (function (){var statearr_10705 = state_10687;(statearr_10705[13] = inst_10653__$1);
return statearr_10705;
})();if(inst_10653__$1)
{var statearr_10706_10740 = state_10687__$1;(statearr_10706_10740[1] = 14);
} else
{var statearr_10707_10741 = state_10687__$1;(statearr_10707_10741[1] = 15);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10688 === 12))
{var inst_10673 = (state_10687[2]);var state_10687__$1 = state_10687;var statearr_10708_10742 = state_10687__$1;(statearr_10708_10742[2] = inst_10673);
(statearr_10708_10742[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10688 === 13))
{var inst_10642 = (state_10687[8]);var inst_10641 = (state_10687[9]);var inst_10640 = (state_10687[10]);var inst_10639 = (state_10687[11]);var inst_10649 = (state_10687[2]);var inst_10650 = (inst_10642 + 1);var tmp10702 = inst_10641;var tmp10703 = inst_10640;var tmp10704 = inst_10639;var inst_10639__$1 = tmp10704;var inst_10640__$1 = tmp10703;var inst_10641__$1 = tmp10702;var inst_10642__$1 = inst_10650;var state_10687__$1 = (function (){var statearr_10709 = state_10687;(statearr_10709[8] = inst_10642__$1);
(statearr_10709[9] = inst_10641__$1);
(statearr_10709[10] = inst_10640__$1);
(statearr_10709[11] = inst_10639__$1);
(statearr_10709[14] = inst_10649);
return statearr_10709;
})();var statearr_10710_10743 = state_10687__$1;(statearr_10710_10743[2] = null);
(statearr_10710_10743[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10688 === 14))
{var inst_10653 = (state_10687[13]);var inst_10655 = cljs.core.chunked_seq_QMARK_.call(null,inst_10653);var state_10687__$1 = state_10687;if(inst_10655)
{var statearr_10711_10744 = state_10687__$1;(statearr_10711_10744[1] = 17);
} else
{var statearr_10712_10745 = state_10687__$1;(statearr_10712_10745[1] = 18);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10688 === 15))
{var state_10687__$1 = state_10687;var statearr_10713_10746 = state_10687__$1;(statearr_10713_10746[2] = null);
(statearr_10713_10746[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10688 === 16))
{var inst_10671 = (state_10687[2]);var state_10687__$1 = state_10687;var statearr_10714_10747 = state_10687__$1;(statearr_10714_10747[2] = inst_10671);
(statearr_10714_10747[1] = 12);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10688 === 17))
{var inst_10653 = (state_10687[13]);var inst_10657 = cljs.core.chunk_first.call(null,inst_10653);var inst_10658 = cljs.core.chunk_rest.call(null,inst_10653);var inst_10659 = cljs.core.count.call(null,inst_10657);var inst_10639 = inst_10658;var inst_10640 = inst_10657;var inst_10641 = inst_10659;var inst_10642 = 0;var state_10687__$1 = (function (){var statearr_10715 = state_10687;(statearr_10715[8] = inst_10642);
(statearr_10715[9] = inst_10641);
(statearr_10715[10] = inst_10640);
(statearr_10715[11] = inst_10639);
return statearr_10715;
})();var statearr_10716_10748 = state_10687__$1;(statearr_10716_10748[2] = null);
(statearr_10716_10748[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10688 === 18))
{var inst_10653 = (state_10687[13]);var inst_10662 = cljs.core.first.call(null,inst_10653);var state_10687__$1 = state_10687;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_10687__$1,20,out,inst_10662);
} else
{if((state_val_10688 === 19))
{var inst_10668 = (state_10687[2]);var state_10687__$1 = state_10687;var statearr_10717_10749 = state_10687__$1;(statearr_10717_10749[2] = inst_10668);
(statearr_10717_10749[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10688 === 20))
{var inst_10653 = (state_10687[13]);var inst_10664 = (state_10687[2]);var inst_10665 = cljs.core.next.call(null,inst_10653);var inst_10639 = inst_10665;var inst_10640 = null;var inst_10641 = 0;var inst_10642 = 0;var state_10687__$1 = (function (){var statearr_10718 = state_10687;(statearr_10718[8] = inst_10642);
(statearr_10718[9] = inst_10641);
(statearr_10718[10] = inst_10640);
(statearr_10718[15] = inst_10664);
(statearr_10718[11] = inst_10639);
return statearr_10718;
})();var statearr_10719_10750 = state_10687__$1;(statearr_10719_10750[2] = null);
(statearr_10719_10750[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10688 === 21))
{var state_10687__$1 = state_10687;var statearr_10720_10751 = state_10687__$1;(statearr_10720_10751[2] = null);
(statearr_10720_10751[1] = 23);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10688 === 22))
{var state_10687__$1 = state_10687;var statearr_10721_10752 = state_10687__$1;(statearr_10721_10752[2] = null);
(statearr_10721_10752[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10688 === 23))
{var inst_10681 = (state_10687[2]);var state_10687__$1 = state_10687;var statearr_10722_10753 = state_10687__$1;(statearr_10722_10753[2] = inst_10681);
(statearr_10722_10753[1] = 7);
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
}
}
}
}
}
}
}
});})(c__5638__auto__))
;return ((function (switch__5623__auto__,c__5638__auto__){
return (function() {
var state_machine__5624__auto__ = null;
var state_machine__5624__auto____0 = (function (){var statearr_10726 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_10726[0] = state_machine__5624__auto__);
(statearr_10726[1] = 1);
return statearr_10726;
});
var state_machine__5624__auto____1 = (function (state_10687){while(true){
var ret_value__5625__auto__ = (function (){try{while(true){
var result__5626__auto__ = switch__5623__auto__.call(null,state_10687);if(cljs.core.keyword_identical_QMARK_.call(null,result__5626__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5626__auto__;
}
break;
}
}catch (e10727){if((e10727 instanceof Object))
{var ex__5627__auto__ = e10727;var statearr_10728_10754 = state_10687;(statearr_10728_10754[5] = ex__5627__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_10687);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e10727;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5625__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__10755 = state_10687;
state_10687 = G__10755;
continue;
}
} else
{return ret_value__5625__auto__;
}
break;
}
});
state_machine__5624__auto__ = function(state_10687){
switch(arguments.length){
case 0:
return state_machine__5624__auto____0.call(this);
case 1:
return state_machine__5624__auto____1.call(this,state_10687);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5624__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5624__auto____0;
state_machine__5624__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5624__auto____1;
return state_machine__5624__auto__;
})()
;})(switch__5623__auto__,c__5638__auto__))
})();var state__5640__auto__ = (function (){var statearr_10729 = f__5639__auto__.call(null);(statearr_10729[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5638__auto__);
return statearr_10729;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5640__auto__);
});})(c__5638__auto__))
);
return c__5638__auto__;
});
/**
* Takes a function and a source channel, and returns a channel which
* contains the values in each collection produced by applying f to
* each value taken from the source channel. f must return a
* collection.
* 
* The returned channel will be unbuffered by default, or a buf-or-n
* can be supplied. The channel will close when the source channel
* closes.
*/
cljs.core.async.mapcat_LT_ = (function() {
var mapcat_LT_ = null;
var mapcat_LT___2 = (function (f,in$){return mapcat_LT_.call(null,f,in$,null);
});
var mapcat_LT___3 = (function (f,in$,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);cljs.core.async.mapcat_STAR_.call(null,f,in$,out);
return out;
});
mapcat_LT_ = function(f,in$,buf_or_n){
switch(arguments.length){
case 2:
return mapcat_LT___2.call(this,f,in$);
case 3:
return mapcat_LT___3.call(this,f,in$,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = mapcat_LT___2;
mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = mapcat_LT___3;
return mapcat_LT_;
})()
;
/**
* Takes a function and a target channel, and returns a channel which
* applies f to each value put, then supplies each element of the result
* to the target channel. f must return a collection.
* 
* The returned channel will be unbuffered by default, or a buf-or-n
* can be supplied. The target channel will be closed when the source
* channel closes.
*/
cljs.core.async.mapcat_GT_ = (function() {
var mapcat_GT_ = null;
var mapcat_GT___2 = (function (f,out){return mapcat_GT_.call(null,f,out,null);
});
var mapcat_GT___3 = (function (f,out,buf_or_n){var in$ = cljs.core.async.chan.call(null,buf_or_n);cljs.core.async.mapcat_STAR_.call(null,f,in$,out);
return in$;
});
mapcat_GT_ = function(f,out,buf_or_n){
switch(arguments.length){
case 2:
return mapcat_GT___2.call(this,f,out);
case 3:
return mapcat_GT___3.call(this,f,out,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = mapcat_GT___2;
mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = mapcat_GT___3;
return mapcat_GT_;
})()
;
/**
* Takes elements from the from channel and supplies them to the to
* channel. By default, the to channel will be closed when the from
* channel closes, but can be determined by the close?  parameter. Will
* stop consuming the from channel if the to channel closes
*/
cljs.core.async.pipe = (function() {
var pipe = null;
var pipe__2 = (function (from,to){return pipe.call(null,from,to,true);
});
var pipe__3 = (function (from,to,close_QMARK_){var c__5638__auto___10850 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__5638__auto___10850){
return (function (){var f__5639__auto__ = (function (){var switch__5623__auto__ = ((function (c__5638__auto___10850){
return (function (state_10826){var state_val_10827 = (state_10826[1]);if((state_val_10827 === 1))
{var state_10826__$1 = state_10826;var statearr_10828_10851 = state_10826__$1;(statearr_10828_10851[2] = null);
(statearr_10828_10851[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10827 === 2))
{var state_10826__$1 = state_10826;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_10826__$1,4,from);
} else
{if((state_val_10827 === 3))
{var inst_10824 = (state_10826[2]);var state_10826__$1 = state_10826;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_10826__$1,inst_10824);
} else
{if((state_val_10827 === 4))
{var inst_10805 = (state_10826[7]);var inst_10805__$1 = (state_10826[2]);var inst_10806 = (inst_10805__$1 == null);var state_10826__$1 = (function (){var statearr_10829 = state_10826;(statearr_10829[7] = inst_10805__$1);
return statearr_10829;
})();if(cljs.core.truth_(inst_10806))
{var statearr_10830_10852 = state_10826__$1;(statearr_10830_10852[1] = 5);
} else
{var statearr_10831_10853 = state_10826__$1;(statearr_10831_10853[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10827 === 5))
{var state_10826__$1 = state_10826;if(cljs.core.truth_(close_QMARK_))
{var statearr_10832_10854 = state_10826__$1;(statearr_10832_10854[1] = 8);
} else
{var statearr_10833_10855 = state_10826__$1;(statearr_10833_10855[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10827 === 6))
{var inst_10805 = (state_10826[7]);var state_10826__$1 = state_10826;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_10826__$1,11,to,inst_10805);
} else
{if((state_val_10827 === 7))
{var inst_10822 = (state_10826[2]);var state_10826__$1 = state_10826;var statearr_10834_10856 = state_10826__$1;(statearr_10834_10856[2] = inst_10822);
(statearr_10834_10856[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10827 === 8))
{var inst_10809 = cljs.core.async.close_BANG_.call(null,to);var state_10826__$1 = state_10826;var statearr_10835_10857 = state_10826__$1;(statearr_10835_10857[2] = inst_10809);
(statearr_10835_10857[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10827 === 9))
{var state_10826__$1 = state_10826;var statearr_10836_10858 = state_10826__$1;(statearr_10836_10858[2] = null);
(statearr_10836_10858[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10827 === 10))
{var inst_10812 = (state_10826[2]);var state_10826__$1 = state_10826;var statearr_10837_10859 = state_10826__$1;(statearr_10837_10859[2] = inst_10812);
(statearr_10837_10859[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10827 === 11))
{var inst_10815 = (state_10826[2]);var state_10826__$1 = state_10826;if(cljs.core.truth_(inst_10815))
{var statearr_10838_10860 = state_10826__$1;(statearr_10838_10860[1] = 12);
} else
{var statearr_10839_10861 = state_10826__$1;(statearr_10839_10861[1] = 13);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10827 === 12))
{var state_10826__$1 = state_10826;var statearr_10840_10862 = state_10826__$1;(statearr_10840_10862[2] = null);
(statearr_10840_10862[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10827 === 13))
{var state_10826__$1 = state_10826;var statearr_10841_10863 = state_10826__$1;(statearr_10841_10863[2] = null);
(statearr_10841_10863[1] = 14);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10827 === 14))
{var inst_10820 = (state_10826[2]);var state_10826__$1 = state_10826;var statearr_10842_10864 = state_10826__$1;(statearr_10842_10864[2] = inst_10820);
(statearr_10842_10864[1] = 7);
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
});})(c__5638__auto___10850))
;return ((function (switch__5623__auto__,c__5638__auto___10850){
return (function() {
var state_machine__5624__auto__ = null;
var state_machine__5624__auto____0 = (function (){var statearr_10846 = [null,null,null,null,null,null,null,null];(statearr_10846[0] = state_machine__5624__auto__);
(statearr_10846[1] = 1);
return statearr_10846;
});
var state_machine__5624__auto____1 = (function (state_10826){while(true){
var ret_value__5625__auto__ = (function (){try{while(true){
var result__5626__auto__ = switch__5623__auto__.call(null,state_10826);if(cljs.core.keyword_identical_QMARK_.call(null,result__5626__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5626__auto__;
}
break;
}
}catch (e10847){if((e10847 instanceof Object))
{var ex__5627__auto__ = e10847;var statearr_10848_10865 = state_10826;(statearr_10848_10865[5] = ex__5627__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_10826);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e10847;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5625__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__10866 = state_10826;
state_10826 = G__10866;
continue;
}
} else
{return ret_value__5625__auto__;
}
break;
}
});
state_machine__5624__auto__ = function(state_10826){
switch(arguments.length){
case 0:
return state_machine__5624__auto____0.call(this);
case 1:
return state_machine__5624__auto____1.call(this,state_10826);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5624__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5624__auto____0;
state_machine__5624__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5624__auto____1;
return state_machine__5624__auto__;
})()
;})(switch__5623__auto__,c__5638__auto___10850))
})();var state__5640__auto__ = (function (){var statearr_10849 = f__5639__auto__.call(null);(statearr_10849[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5638__auto___10850);
return statearr_10849;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5640__auto__);
});})(c__5638__auto___10850))
);
return to;
});
pipe = function(from,to,close_QMARK_){
switch(arguments.length){
case 2:
return pipe__2.call(this,from,to);
case 3:
return pipe__3.call(this,from,to,close_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
pipe.cljs$core$IFn$_invoke$arity$2 = pipe__2;
pipe.cljs$core$IFn$_invoke$arity$3 = pipe__3;
return pipe;
})()
;
/**
* Takes a predicate and a source channel and returns a vector of two
* channels, the first of which will contain the values for which the
* predicate returned true, the second those for which it returned
* false.
* 
* The out channels will be unbuffered by default, or two buf-or-ns can
* be supplied. The channels will close after the source channel has
* closed.
*/
cljs.core.async.split = (function() {
var split = null;
var split__2 = (function (p,ch){return split.call(null,p,ch,null,null);
});
var split__4 = (function (p,ch,t_buf_or_n,f_buf_or_n){var tc = cljs.core.async.chan.call(null,t_buf_or_n);var fc = cljs.core.async.chan.call(null,f_buf_or_n);var c__5638__auto___10967 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__5638__auto___10967,tc,fc){
return (function (){var f__5639__auto__ = (function (){var switch__5623__auto__ = ((function (c__5638__auto___10967,tc,fc){
return (function (state_10942){var state_val_10943 = (state_10942[1]);if((state_val_10943 === 1))
{var state_10942__$1 = state_10942;var statearr_10944_10968 = state_10942__$1;(statearr_10944_10968[2] = null);
(statearr_10944_10968[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10943 === 2))
{var state_10942__$1 = state_10942;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_10942__$1,4,ch);
} else
{if((state_val_10943 === 3))
{var inst_10940 = (state_10942[2]);var state_10942__$1 = state_10942;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_10942__$1,inst_10940);
} else
{if((state_val_10943 === 4))
{var inst_10919 = (state_10942[7]);var inst_10919__$1 = (state_10942[2]);var inst_10920 = (inst_10919__$1 == null);var state_10942__$1 = (function (){var statearr_10945 = state_10942;(statearr_10945[7] = inst_10919__$1);
return statearr_10945;
})();if(cljs.core.truth_(inst_10920))
{var statearr_10946_10969 = state_10942__$1;(statearr_10946_10969[1] = 5);
} else
{var statearr_10947_10970 = state_10942__$1;(statearr_10947_10970[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10943 === 5))
{var inst_10922 = cljs.core.async.close_BANG_.call(null,tc);var inst_10923 = cljs.core.async.close_BANG_.call(null,fc);var state_10942__$1 = (function (){var statearr_10948 = state_10942;(statearr_10948[8] = inst_10922);
return statearr_10948;
})();var statearr_10949_10971 = state_10942__$1;(statearr_10949_10971[2] = inst_10923);
(statearr_10949_10971[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10943 === 6))
{var inst_10919 = (state_10942[7]);var inst_10925 = p.call(null,inst_10919);var state_10942__$1 = state_10942;if(cljs.core.truth_(inst_10925))
{var statearr_10950_10972 = state_10942__$1;(statearr_10950_10972[1] = 9);
} else
{var statearr_10951_10973 = state_10942__$1;(statearr_10951_10973[1] = 10);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10943 === 7))
{var inst_10938 = (state_10942[2]);var state_10942__$1 = state_10942;var statearr_10952_10974 = state_10942__$1;(statearr_10952_10974[2] = inst_10938);
(statearr_10952_10974[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10943 === 8))
{var inst_10931 = (state_10942[2]);var state_10942__$1 = state_10942;if(cljs.core.truth_(inst_10931))
{var statearr_10953_10975 = state_10942__$1;(statearr_10953_10975[1] = 12);
} else
{var statearr_10954_10976 = state_10942__$1;(statearr_10954_10976[1] = 13);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10943 === 9))
{var state_10942__$1 = state_10942;var statearr_10955_10977 = state_10942__$1;(statearr_10955_10977[2] = tc);
(statearr_10955_10977[1] = 11);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10943 === 10))
{var state_10942__$1 = state_10942;var statearr_10956_10978 = state_10942__$1;(statearr_10956_10978[2] = fc);
(statearr_10956_10978[1] = 11);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10943 === 11))
{var inst_10919 = (state_10942[7]);var inst_10929 = (state_10942[2]);var state_10942__$1 = state_10942;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_10942__$1,8,inst_10929,inst_10919);
} else
{if((state_val_10943 === 12))
{var state_10942__$1 = state_10942;var statearr_10957_10979 = state_10942__$1;(statearr_10957_10979[2] = null);
(statearr_10957_10979[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10943 === 13))
{var state_10942__$1 = state_10942;var statearr_10958_10980 = state_10942__$1;(statearr_10958_10980[2] = null);
(statearr_10958_10980[1] = 14);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10943 === 14))
{var inst_10936 = (state_10942[2]);var state_10942__$1 = state_10942;var statearr_10959_10981 = state_10942__$1;(statearr_10959_10981[2] = inst_10936);
(statearr_10959_10981[1] = 7);
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
});})(c__5638__auto___10967,tc,fc))
;return ((function (switch__5623__auto__,c__5638__auto___10967,tc,fc){
return (function() {
var state_machine__5624__auto__ = null;
var state_machine__5624__auto____0 = (function (){var statearr_10963 = [null,null,null,null,null,null,null,null,null];(statearr_10963[0] = state_machine__5624__auto__);
(statearr_10963[1] = 1);
return statearr_10963;
});
var state_machine__5624__auto____1 = (function (state_10942){while(true){
var ret_value__5625__auto__ = (function (){try{while(true){
var result__5626__auto__ = switch__5623__auto__.call(null,state_10942);if(cljs.core.keyword_identical_QMARK_.call(null,result__5626__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5626__auto__;
}
break;
}
}catch (e10964){if((e10964 instanceof Object))
{var ex__5627__auto__ = e10964;var statearr_10965_10982 = state_10942;(statearr_10965_10982[5] = ex__5627__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_10942);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e10964;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5625__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__10983 = state_10942;
state_10942 = G__10983;
continue;
}
} else
{return ret_value__5625__auto__;
}
break;
}
});
state_machine__5624__auto__ = function(state_10942){
switch(arguments.length){
case 0:
return state_machine__5624__auto____0.call(this);
case 1:
return state_machine__5624__auto____1.call(this,state_10942);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5624__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5624__auto____0;
state_machine__5624__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5624__auto____1;
return state_machine__5624__auto__;
})()
;})(switch__5623__auto__,c__5638__auto___10967,tc,fc))
})();var state__5640__auto__ = (function (){var statearr_10966 = f__5639__auto__.call(null);(statearr_10966[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5638__auto___10967);
return statearr_10966;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5640__auto__);
});})(c__5638__auto___10967,tc,fc))
);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
});
split = function(p,ch,t_buf_or_n,f_buf_or_n){
switch(arguments.length){
case 2:
return split__2.call(this,p,ch);
case 4:
return split__4.call(this,p,ch,t_buf_or_n,f_buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
split.cljs$core$IFn$_invoke$arity$2 = split__2;
split.cljs$core$IFn$_invoke$arity$4 = split__4;
return split;
})()
;
/**
* f should be a function of 2 arguments. Returns a channel containing
* the single result of applying f to init and the first item from the
* channel, then applying f to that result and the 2nd item, etc. If
* the channel closes without yielding items, returns init and f is not
* called. ch must close before reduce produces a result.
*/
cljs.core.async.reduce = (function reduce(f,init,ch){var c__5638__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__5638__auto__){
return (function (){var f__5639__auto__ = (function (){var switch__5623__auto__ = ((function (c__5638__auto__){
return (function (state_11030){var state_val_11031 = (state_11030[1]);if((state_val_11031 === 7))
{var inst_11026 = (state_11030[2]);var state_11030__$1 = state_11030;var statearr_11032_11048 = state_11030__$1;(statearr_11032_11048[2] = inst_11026);
(statearr_11032_11048[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11031 === 6))
{var inst_11016 = (state_11030[7]);var inst_11019 = (state_11030[8]);var inst_11023 = f.call(null,inst_11016,inst_11019);var inst_11016__$1 = inst_11023;var state_11030__$1 = (function (){var statearr_11033 = state_11030;(statearr_11033[7] = inst_11016__$1);
return statearr_11033;
})();var statearr_11034_11049 = state_11030__$1;(statearr_11034_11049[2] = null);
(statearr_11034_11049[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11031 === 5))
{var inst_11016 = (state_11030[7]);var state_11030__$1 = state_11030;var statearr_11035_11050 = state_11030__$1;(statearr_11035_11050[2] = inst_11016);
(statearr_11035_11050[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11031 === 4))
{var inst_11019 = (state_11030[8]);var inst_11019__$1 = (state_11030[2]);var inst_11020 = (inst_11019__$1 == null);var state_11030__$1 = (function (){var statearr_11036 = state_11030;(statearr_11036[8] = inst_11019__$1);
return statearr_11036;
})();if(cljs.core.truth_(inst_11020))
{var statearr_11037_11051 = state_11030__$1;(statearr_11037_11051[1] = 5);
} else
{var statearr_11038_11052 = state_11030__$1;(statearr_11038_11052[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11031 === 3))
{var inst_11028 = (state_11030[2]);var state_11030__$1 = state_11030;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11030__$1,inst_11028);
} else
{if((state_val_11031 === 2))
{var state_11030__$1 = state_11030;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11030__$1,4,ch);
} else
{if((state_val_11031 === 1))
{var inst_11016 = init;var state_11030__$1 = (function (){var statearr_11039 = state_11030;(statearr_11039[7] = inst_11016);
return statearr_11039;
})();var statearr_11040_11053 = state_11030__$1;(statearr_11040_11053[2] = null);
(statearr_11040_11053[1] = 2);
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
});})(c__5638__auto__))
;return ((function (switch__5623__auto__,c__5638__auto__){
return (function() {
var state_machine__5624__auto__ = null;
var state_machine__5624__auto____0 = (function (){var statearr_11044 = [null,null,null,null,null,null,null,null,null];(statearr_11044[0] = state_machine__5624__auto__);
(statearr_11044[1] = 1);
return statearr_11044;
});
var state_machine__5624__auto____1 = (function (state_11030){while(true){
var ret_value__5625__auto__ = (function (){try{while(true){
var result__5626__auto__ = switch__5623__auto__.call(null,state_11030);if(cljs.core.keyword_identical_QMARK_.call(null,result__5626__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5626__auto__;
}
break;
}
}catch (e11045){if((e11045 instanceof Object))
{var ex__5627__auto__ = e11045;var statearr_11046_11054 = state_11030;(statearr_11046_11054[5] = ex__5627__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11030);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e11045;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5625__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__11055 = state_11030;
state_11030 = G__11055;
continue;
}
} else
{return ret_value__5625__auto__;
}
break;
}
});
state_machine__5624__auto__ = function(state_11030){
switch(arguments.length){
case 0:
return state_machine__5624__auto____0.call(this);
case 1:
return state_machine__5624__auto____1.call(this,state_11030);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5624__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5624__auto____0;
state_machine__5624__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5624__auto____1;
return state_machine__5624__auto__;
})()
;})(switch__5623__auto__,c__5638__auto__))
})();var state__5640__auto__ = (function (){var statearr_11047 = f__5639__auto__.call(null);(statearr_11047[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5638__auto__);
return statearr_11047;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5640__auto__);
});})(c__5638__auto__))
);
return c__5638__auto__;
});
/**
* Puts the contents of coll into the supplied channel.
* 
* By default the channel will be closed after the items are copied,
* but can be determined by the close? parameter.
* 
* Returns a channel which will close after the items are copied.
*/
cljs.core.async.onto_chan = (function() {
var onto_chan = null;
var onto_chan__2 = (function (ch,coll){return onto_chan.call(null,ch,coll,true);
});
var onto_chan__3 = (function (ch,coll,close_QMARK_){var c__5638__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__5638__auto__){
return (function (){var f__5639__auto__ = (function (){var switch__5623__auto__ = ((function (c__5638__auto__){
return (function (state_11129){var state_val_11130 = (state_11129[1]);if((state_val_11130 === 1))
{var inst_11105 = cljs.core.seq.call(null,coll);var inst_11106 = inst_11105;var state_11129__$1 = (function (){var statearr_11131 = state_11129;(statearr_11131[7] = inst_11106);
return statearr_11131;
})();var statearr_11132_11154 = state_11129__$1;(statearr_11132_11154[2] = null);
(statearr_11132_11154[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11130 === 2))
{var inst_11106 = (state_11129[7]);var state_11129__$1 = state_11129;if(cljs.core.truth_(inst_11106))
{var statearr_11133_11155 = state_11129__$1;(statearr_11133_11155[1] = 4);
} else
{var statearr_11134_11156 = state_11129__$1;(statearr_11134_11156[1] = 5);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11130 === 3))
{var inst_11127 = (state_11129[2]);var state_11129__$1 = state_11129;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11129__$1,inst_11127);
} else
{if((state_val_11130 === 4))
{var inst_11106 = (state_11129[7]);var inst_11109 = cljs.core.first.call(null,inst_11106);var state_11129__$1 = state_11129;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_11129__$1,7,ch,inst_11109);
} else
{if((state_val_11130 === 5))
{var inst_11106 = (state_11129[7]);var state_11129__$1 = state_11129;var statearr_11135_11157 = state_11129__$1;(statearr_11135_11157[2] = inst_11106);
(statearr_11135_11157[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11130 === 6))
{var inst_11114 = (state_11129[2]);var state_11129__$1 = state_11129;if(cljs.core.truth_(inst_11114))
{var statearr_11136_11158 = state_11129__$1;(statearr_11136_11158[1] = 8);
} else
{var statearr_11137_11159 = state_11129__$1;(statearr_11137_11159[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11130 === 7))
{var inst_11111 = (state_11129[2]);var state_11129__$1 = state_11129;var statearr_11138_11160 = state_11129__$1;(statearr_11138_11160[2] = inst_11111);
(statearr_11138_11160[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11130 === 8))
{var inst_11106 = (state_11129[7]);var inst_11116 = cljs.core.next.call(null,inst_11106);var inst_11106__$1 = inst_11116;var state_11129__$1 = (function (){var statearr_11139 = state_11129;(statearr_11139[7] = inst_11106__$1);
return statearr_11139;
})();var statearr_11140_11161 = state_11129__$1;(statearr_11140_11161[2] = null);
(statearr_11140_11161[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11130 === 9))
{var state_11129__$1 = state_11129;if(cljs.core.truth_(close_QMARK_))
{var statearr_11141_11162 = state_11129__$1;(statearr_11141_11162[1] = 11);
} else
{var statearr_11142_11163 = state_11129__$1;(statearr_11142_11163[1] = 12);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11130 === 10))
{var inst_11125 = (state_11129[2]);var state_11129__$1 = state_11129;var statearr_11143_11164 = state_11129__$1;(statearr_11143_11164[2] = inst_11125);
(statearr_11143_11164[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11130 === 11))
{var inst_11120 = cljs.core.async.close_BANG_.call(null,ch);var state_11129__$1 = state_11129;var statearr_11144_11165 = state_11129__$1;(statearr_11144_11165[2] = inst_11120);
(statearr_11144_11165[1] = 13);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11130 === 12))
{var state_11129__$1 = state_11129;var statearr_11145_11166 = state_11129__$1;(statearr_11145_11166[2] = null);
(statearr_11145_11166[1] = 13);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11130 === 13))
{var inst_11123 = (state_11129[2]);var state_11129__$1 = state_11129;var statearr_11146_11167 = state_11129__$1;(statearr_11146_11167[2] = inst_11123);
(statearr_11146_11167[1] = 10);
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
});})(c__5638__auto__))
;return ((function (switch__5623__auto__,c__5638__auto__){
return (function() {
var state_machine__5624__auto__ = null;
var state_machine__5624__auto____0 = (function (){var statearr_11150 = [null,null,null,null,null,null,null,null];(statearr_11150[0] = state_machine__5624__auto__);
(statearr_11150[1] = 1);
return statearr_11150;
});
var state_machine__5624__auto____1 = (function (state_11129){while(true){
var ret_value__5625__auto__ = (function (){try{while(true){
var result__5626__auto__ = switch__5623__auto__.call(null,state_11129);if(cljs.core.keyword_identical_QMARK_.call(null,result__5626__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5626__auto__;
}
break;
}
}catch (e11151){if((e11151 instanceof Object))
{var ex__5627__auto__ = e11151;var statearr_11152_11168 = state_11129;(statearr_11152_11168[5] = ex__5627__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11129);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e11151;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5625__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__11169 = state_11129;
state_11129 = G__11169;
continue;
}
} else
{return ret_value__5625__auto__;
}
break;
}
});
state_machine__5624__auto__ = function(state_11129){
switch(arguments.length){
case 0:
return state_machine__5624__auto____0.call(this);
case 1:
return state_machine__5624__auto____1.call(this,state_11129);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5624__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5624__auto____0;
state_machine__5624__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5624__auto____1;
return state_machine__5624__auto__;
})()
;})(switch__5623__auto__,c__5638__auto__))
})();var state__5640__auto__ = (function (){var statearr_11153 = f__5639__auto__.call(null);(statearr_11153[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5638__auto__);
return statearr_11153;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5640__auto__);
});})(c__5638__auto__))
);
return c__5638__auto__;
});
onto_chan = function(ch,coll,close_QMARK_){
switch(arguments.length){
case 2:
return onto_chan__2.call(this,ch,coll);
case 3:
return onto_chan__3.call(this,ch,coll,close_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
onto_chan.cljs$core$IFn$_invoke$arity$2 = onto_chan__2;
onto_chan.cljs$core$IFn$_invoke$arity$3 = onto_chan__3;
return onto_chan;
})()
;
/**
* Creates and returns a channel which contains the contents of coll,
* closing when exhausted.
*/
cljs.core.async.to_chan = (function to_chan(coll){var ch = cljs.core.async.chan.call(null,cljs.core.bounded_count.call(null,100,coll));cljs.core.async.onto_chan.call(null,ch,coll);
return ch;
});
cljs.core.async.Mux = (function (){var obj11171 = {};return obj11171;
})();
cljs.core.async.muxch_STAR_ = (function muxch_STAR_(_){if((function (){var and__3469__auto__ = _;if(and__3469__auto__)
{return _.cljs$core$async$Mux$muxch_STAR_$arity$1;
} else
{return and__3469__auto__;
}
})())
{return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else
{var x__4108__auto__ = (((_ == null))?null:_);return (function (){var or__3481__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__4108__auto__)]);if(or__3481__auto__)
{return or__3481__auto__;
} else
{var or__3481__auto____$1 = (cljs.core.async.muxch_STAR_["_"]);if(or__3481__auto____$1)
{return or__3481__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mux.muxch*",_);
}
}
})().call(null,_);
}
});
cljs.core.async.Mult = (function (){var obj11173 = {};return obj11173;
})();
cljs.core.async.tap_STAR_ = (function tap_STAR_(m,ch,close_QMARK_){if((function (){var and__3469__auto__ = m;if(and__3469__auto__)
{return m.cljs$core$async$Mult$tap_STAR_$arity$3;
} else
{return and__3469__auto__;
}
})())
{return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else
{var x__4108__auto__ = (((m == null))?null:m);return (function (){var or__3481__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__4108__auto__)]);if(or__3481__auto__)
{return or__3481__auto__;
} else
{var or__3481__auto____$1 = (cljs.core.async.tap_STAR_["_"]);if(or__3481__auto____$1)
{return or__3481__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mult.tap*",m);
}
}
})().call(null,m,ch,close_QMARK_);
}
});
cljs.core.async.untap_STAR_ = (function untap_STAR_(m,ch){if((function (){var and__3469__auto__ = m;if(and__3469__auto__)
{return m.cljs$core$async$Mult$untap_STAR_$arity$2;
} else
{return and__3469__auto__;
}
})())
{return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else
{var x__4108__auto__ = (((m == null))?null:m);return (function (){var or__3481__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__4108__auto__)]);if(or__3481__auto__)
{return or__3481__auto__;
} else
{var or__3481__auto____$1 = (cljs.core.async.untap_STAR_["_"]);if(or__3481__auto____$1)
{return or__3481__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mult.untap*",m);
}
}
})().call(null,m,ch);
}
});
cljs.core.async.untap_all_STAR_ = (function untap_all_STAR_(m){if((function (){var and__3469__auto__ = m;if(and__3469__auto__)
{return m.cljs$core$async$Mult$untap_all_STAR_$arity$1;
} else
{return and__3469__auto__;
}
})())
{return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else
{var x__4108__auto__ = (((m == null))?null:m);return (function (){var or__3481__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__4108__auto__)]);if(or__3481__auto__)
{return or__3481__auto__;
} else
{var or__3481__auto____$1 = (cljs.core.async.untap_all_STAR_["_"]);if(or__3481__auto____$1)
{return or__3481__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mult.untap-all*",m);
}
}
})().call(null,m);
}
});
/**
* Creates and returns a mult(iple) of the supplied channel. Channels
* containing copies of the channel can be created with 'tap', and
* detached with 'untap'.
* 
* Each item is distributed to all taps in parallel and synchronously,
* i.e. each tap must accept before the next item is distributed. Use
* buffering/windowing to prevent slow taps from holding up the mult.
* 
* Items received when there are no taps get dropped.
* 
* If a tap puts to a closed channel, it will be removed from the mult.
*/
cljs.core.async.mult = (function mult(ch){var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var m = (function (){if(typeof cljs.core.async.t11395 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t11395 = (function (cs,ch,mult,meta11396){
this.cs = cs;
this.ch = ch;
this.mult = mult;
this.meta11396 = meta11396;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t11395.cljs$lang$type = true;
cljs.core.async.t11395.cljs$lang$ctorStr = "cljs.core.async/t11395";
cljs.core.async.t11395.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__4048__auto__,writer__4049__auto__,opt__4050__auto__){return cljs.core._write.call(null,writer__4049__auto__,"cljs.core.async/t11395");
});})(cs))
;
cljs.core.async.t11395.prototype.cljs$core$async$Mult$ = true;
cljs.core.async.t11395.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$2,close_QMARK_){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$2,close_QMARK_);
return null;
});})(cs))
;
cljs.core.async.t11395.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$2){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$2);
return null;
});})(cs))
;
cljs.core.async.t11395.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);
return null;
});})(cs))
;
cljs.core.async.t11395.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t11395.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){var self__ = this;
var ___$1 = this;return self__.ch;
});})(cs))
;
cljs.core.async.t11395.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_11397){var self__ = this;
var _11397__$1 = this;return self__.meta11396;
});})(cs))
;
cljs.core.async.t11395.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_11397,meta11396__$1){var self__ = this;
var _11397__$1 = this;return (new cljs.core.async.t11395(self__.cs,self__.ch,self__.mult,meta11396__$1));
});})(cs))
;
cljs.core.async.__GT_t11395 = ((function (cs){
return (function __GT_t11395(cs__$1,ch__$1,mult__$1,meta11396){return (new cljs.core.async.t11395(cs__$1,ch__$1,mult__$1,meta11396));
});})(cs))
;
}
return (new cljs.core.async.t11395(cs,ch,mult,null));
})();var dchan = cljs.core.async.chan.call(null,1);var dctr = cljs.core.atom.call(null,null);var done = ((function (cs,m,dchan,dctr){
return (function (_){if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === 0))
{return cljs.core.async.put_BANG_.call(null,dchan,true);
} else
{return null;
}
});})(cs,m,dchan,dctr))
;var c__5638__auto___11616 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__5638__auto___11616,cs,m,dchan,dctr,done){
return (function (){var f__5639__auto__ = (function (){var switch__5623__auto__ = ((function (c__5638__auto___11616,cs,m,dchan,dctr,done){
return (function (state_11528){var state_val_11529 = (state_11528[1]);if((state_val_11529 === 32))
{var inst_11470 = (state_11528[7]);var inst_11471 = (state_11528[8]);var inst_11468 = (state_11528[9]);var inst_11469 = (state_11528[10]);var inst_11483 = (state_11528[2]);var inst_11484 = (inst_11471 + 1);var tmp11530 = inst_11470;var tmp11531 = inst_11468;var tmp11532 = inst_11469;var inst_11468__$1 = tmp11531;var inst_11469__$1 = tmp11532;var inst_11470__$1 = tmp11530;var inst_11471__$1 = inst_11484;var state_11528__$1 = (function (){var statearr_11533 = state_11528;(statearr_11533[7] = inst_11470__$1);
(statearr_11533[8] = inst_11471__$1);
(statearr_11533[11] = inst_11483);
(statearr_11533[9] = inst_11468__$1);
(statearr_11533[10] = inst_11469__$1);
return statearr_11533;
})();var statearr_11534_11617 = state_11528__$1;(statearr_11534_11617[2] = null);
(statearr_11534_11617[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11529 === 1))
{var state_11528__$1 = state_11528;var statearr_11535_11618 = state_11528__$1;(statearr_11535_11618[2] = null);
(statearr_11535_11618[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11529 === 33))
{var inst_11487 = (state_11528[12]);var inst_11489 = cljs.core.chunked_seq_QMARK_.call(null,inst_11487);var state_11528__$1 = state_11528;if(inst_11489)
{var statearr_11536_11619 = state_11528__$1;(statearr_11536_11619[1] = 36);
} else
{var statearr_11537_11620 = state_11528__$1;(statearr_11537_11620[1] = 37);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11529 === 2))
{var state_11528__$1 = state_11528;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11528__$1,4,ch);
} else
{if((state_val_11529 === 34))
{var state_11528__$1 = state_11528;var statearr_11538_11621 = state_11528__$1;(statearr_11538_11621[2] = null);
(statearr_11538_11621[1] = 35);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11529 === 3))
{var inst_11526 = (state_11528[2]);var state_11528__$1 = state_11528;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11528__$1,inst_11526);
} else
{if((state_val_11529 === 35))
{var inst_11510 = (state_11528[2]);var state_11528__$1 = state_11528;var statearr_11539_11622 = state_11528__$1;(statearr_11539_11622[2] = inst_11510);
(statearr_11539_11622[1] = 29);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11529 === 4))
{var inst_11400 = (state_11528[13]);var inst_11400__$1 = (state_11528[2]);var inst_11401 = (inst_11400__$1 == null);var state_11528__$1 = (function (){var statearr_11540 = state_11528;(statearr_11540[13] = inst_11400__$1);
return statearr_11540;
})();if(cljs.core.truth_(inst_11401))
{var statearr_11541_11623 = state_11528__$1;(statearr_11541_11623[1] = 5);
} else
{var statearr_11542_11624 = state_11528__$1;(statearr_11542_11624[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11529 === 36))
{var inst_11487 = (state_11528[12]);var inst_11491 = cljs.core.chunk_first.call(null,inst_11487);var inst_11492 = cljs.core.chunk_rest.call(null,inst_11487);var inst_11493 = cljs.core.count.call(null,inst_11491);var inst_11468 = inst_11492;var inst_11469 = inst_11491;var inst_11470 = inst_11493;var inst_11471 = 0;var state_11528__$1 = (function (){var statearr_11543 = state_11528;(statearr_11543[7] = inst_11470);
(statearr_11543[8] = inst_11471);
(statearr_11543[9] = inst_11468);
(statearr_11543[10] = inst_11469);
return statearr_11543;
})();var statearr_11544_11625 = state_11528__$1;(statearr_11544_11625[2] = null);
(statearr_11544_11625[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11529 === 5))
{var inst_11407 = cljs.core.deref.call(null,cs);var inst_11408 = cljs.core.seq.call(null,inst_11407);var inst_11409 = inst_11408;var inst_11410 = null;var inst_11411 = 0;var inst_11412 = 0;var state_11528__$1 = (function (){var statearr_11545 = state_11528;(statearr_11545[14] = inst_11412);
(statearr_11545[15] = inst_11411);
(statearr_11545[16] = inst_11410);
(statearr_11545[17] = inst_11409);
return statearr_11545;
})();var statearr_11546_11626 = state_11528__$1;(statearr_11546_11626[2] = null);
(statearr_11546_11626[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11529 === 37))
{var inst_11496 = (state_11528[18]);var inst_11400 = (state_11528[13]);var inst_11487 = (state_11528[12]);var inst_11496__$1 = cljs.core.first.call(null,inst_11487);var inst_11497 = cljs.core.async.put_BANG_.call(null,inst_11496__$1,inst_11400,done);var state_11528__$1 = (function (){var statearr_11547 = state_11528;(statearr_11547[18] = inst_11496__$1);
return statearr_11547;
})();if(cljs.core.truth_(inst_11497))
{var statearr_11548_11627 = state_11528__$1;(statearr_11548_11627[1] = 39);
} else
{var statearr_11549_11628 = state_11528__$1;(statearr_11549_11628[1] = 40);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11529 === 6))
{var inst_11460 = (state_11528[19]);var inst_11459 = cljs.core.deref.call(null,cs);var inst_11460__$1 = cljs.core.keys.call(null,inst_11459);var inst_11461 = cljs.core.count.call(null,inst_11460__$1);var inst_11462 = cljs.core.reset_BANG_.call(null,dctr,inst_11461);var inst_11467 = cljs.core.seq.call(null,inst_11460__$1);var inst_11468 = inst_11467;var inst_11469 = null;var inst_11470 = 0;var inst_11471 = 0;var state_11528__$1 = (function (){var statearr_11550 = state_11528;(statearr_11550[20] = inst_11462);
(statearr_11550[19] = inst_11460__$1);
(statearr_11550[7] = inst_11470);
(statearr_11550[8] = inst_11471);
(statearr_11550[9] = inst_11468);
(statearr_11550[10] = inst_11469);
return statearr_11550;
})();var statearr_11551_11629 = state_11528__$1;(statearr_11551_11629[2] = null);
(statearr_11551_11629[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11529 === 38))
{var inst_11507 = (state_11528[2]);var state_11528__$1 = state_11528;var statearr_11552_11630 = state_11528__$1;(statearr_11552_11630[2] = inst_11507);
(statearr_11552_11630[1] = 35);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11529 === 7))
{var inst_11524 = (state_11528[2]);var state_11528__$1 = state_11528;var statearr_11553_11631 = state_11528__$1;(statearr_11553_11631[2] = inst_11524);
(statearr_11553_11631[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11529 === 39))
{var state_11528__$1 = state_11528;var statearr_11554_11632 = state_11528__$1;(statearr_11554_11632[2] = null);
(statearr_11554_11632[1] = 41);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11529 === 8))
{var inst_11412 = (state_11528[14]);var inst_11411 = (state_11528[15]);var inst_11414 = (inst_11412 < inst_11411);var inst_11415 = inst_11414;var state_11528__$1 = state_11528;if(cljs.core.truth_(inst_11415))
{var statearr_11555_11633 = state_11528__$1;(statearr_11555_11633[1] = 10);
} else
{var statearr_11556_11634 = state_11528__$1;(statearr_11556_11634[1] = 11);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11529 === 40))
{var inst_11496 = (state_11528[18]);var inst_11500 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var inst_11501 = cljs.core.async.untap_STAR_.call(null,m,inst_11496);var state_11528__$1 = (function (){var statearr_11557 = state_11528;(statearr_11557[21] = inst_11500);
return statearr_11557;
})();var statearr_11558_11635 = state_11528__$1;(statearr_11558_11635[2] = inst_11501);
(statearr_11558_11635[1] = 41);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11529 === 9))
{var inst_11457 = (state_11528[2]);var state_11528__$1 = state_11528;var statearr_11559_11636 = state_11528__$1;(statearr_11559_11636[2] = inst_11457);
(statearr_11559_11636[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11529 === 41))
{var inst_11487 = (state_11528[12]);var inst_11503 = (state_11528[2]);var inst_11504 = cljs.core.next.call(null,inst_11487);var inst_11468 = inst_11504;var inst_11469 = null;var inst_11470 = 0;var inst_11471 = 0;var state_11528__$1 = (function (){var statearr_11560 = state_11528;(statearr_11560[7] = inst_11470);
(statearr_11560[8] = inst_11471);
(statearr_11560[9] = inst_11468);
(statearr_11560[10] = inst_11469);
(statearr_11560[22] = inst_11503);
return statearr_11560;
})();var statearr_11561_11637 = state_11528__$1;(statearr_11561_11637[2] = null);
(statearr_11561_11637[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11529 === 10))
{var inst_11412 = (state_11528[14]);var inst_11410 = (state_11528[16]);var inst_11418 = cljs.core._nth.call(null,inst_11410,inst_11412);var inst_11419 = cljs.core.nth.call(null,inst_11418,0,null);var inst_11420 = cljs.core.nth.call(null,inst_11418,1,null);var state_11528__$1 = (function (){var statearr_11562 = state_11528;(statearr_11562[23] = inst_11419);
return statearr_11562;
})();if(cljs.core.truth_(inst_11420))
{var statearr_11563_11638 = state_11528__$1;(statearr_11563_11638[1] = 13);
} else
{var statearr_11564_11639 = state_11528__$1;(statearr_11564_11639[1] = 14);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11529 === 42))
{var state_11528__$1 = state_11528;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11528__$1,45,dchan);
} else
{if((state_val_11529 === 11))
{var inst_11429 = (state_11528[24]);var inst_11409 = (state_11528[17]);var inst_11429__$1 = cljs.core.seq.call(null,inst_11409);var state_11528__$1 = (function (){var statearr_11565 = state_11528;(statearr_11565[24] = inst_11429__$1);
return statearr_11565;
})();if(inst_11429__$1)
{var statearr_11566_11640 = state_11528__$1;(statearr_11566_11640[1] = 16);
} else
{var statearr_11567_11641 = state_11528__$1;(statearr_11567_11641[1] = 17);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11529 === 43))
{var state_11528__$1 = state_11528;var statearr_11568_11642 = state_11528__$1;(statearr_11568_11642[2] = null);
(statearr_11568_11642[1] = 44);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11529 === 12))
{var inst_11455 = (state_11528[2]);var state_11528__$1 = state_11528;var statearr_11569_11643 = state_11528__$1;(statearr_11569_11643[2] = inst_11455);
(statearr_11569_11643[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11529 === 44))
{var inst_11521 = (state_11528[2]);var state_11528__$1 = (function (){var statearr_11570 = state_11528;(statearr_11570[25] = inst_11521);
return statearr_11570;
})();var statearr_11571_11644 = state_11528__$1;(statearr_11571_11644[2] = null);
(statearr_11571_11644[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11529 === 13))
{var inst_11419 = (state_11528[23]);var inst_11422 = cljs.core.async.close_BANG_.call(null,inst_11419);var state_11528__$1 = state_11528;var statearr_11572_11645 = state_11528__$1;(statearr_11572_11645[2] = inst_11422);
(statearr_11572_11645[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11529 === 45))
{var inst_11518 = (state_11528[2]);var state_11528__$1 = state_11528;var statearr_11576_11646 = state_11528__$1;(statearr_11576_11646[2] = inst_11518);
(statearr_11576_11646[1] = 44);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11529 === 14))
{var state_11528__$1 = state_11528;var statearr_11577_11647 = state_11528__$1;(statearr_11577_11647[2] = null);
(statearr_11577_11647[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11529 === 15))
{var inst_11412 = (state_11528[14]);var inst_11411 = (state_11528[15]);var inst_11410 = (state_11528[16]);var inst_11409 = (state_11528[17]);var inst_11425 = (state_11528[2]);var inst_11426 = (inst_11412 + 1);var tmp11573 = inst_11411;var tmp11574 = inst_11410;var tmp11575 = inst_11409;var inst_11409__$1 = tmp11575;var inst_11410__$1 = tmp11574;var inst_11411__$1 = tmp11573;var inst_11412__$1 = inst_11426;var state_11528__$1 = (function (){var statearr_11578 = state_11528;(statearr_11578[14] = inst_11412__$1);
(statearr_11578[15] = inst_11411__$1);
(statearr_11578[16] = inst_11410__$1);
(statearr_11578[17] = inst_11409__$1);
(statearr_11578[26] = inst_11425);
return statearr_11578;
})();var statearr_11579_11648 = state_11528__$1;(statearr_11579_11648[2] = null);
(statearr_11579_11648[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11529 === 16))
{var inst_11429 = (state_11528[24]);var inst_11431 = cljs.core.chunked_seq_QMARK_.call(null,inst_11429);var state_11528__$1 = state_11528;if(inst_11431)
{var statearr_11580_11649 = state_11528__$1;(statearr_11580_11649[1] = 19);
} else
{var statearr_11581_11650 = state_11528__$1;(statearr_11581_11650[1] = 20);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11529 === 17))
{var state_11528__$1 = state_11528;var statearr_11582_11651 = state_11528__$1;(statearr_11582_11651[2] = null);
(statearr_11582_11651[1] = 18);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11529 === 18))
{var inst_11453 = (state_11528[2]);var state_11528__$1 = state_11528;var statearr_11583_11652 = state_11528__$1;(statearr_11583_11652[2] = inst_11453);
(statearr_11583_11652[1] = 12);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11529 === 19))
{var inst_11429 = (state_11528[24]);var inst_11433 = cljs.core.chunk_first.call(null,inst_11429);var inst_11434 = cljs.core.chunk_rest.call(null,inst_11429);var inst_11435 = cljs.core.count.call(null,inst_11433);var inst_11409 = inst_11434;var inst_11410 = inst_11433;var inst_11411 = inst_11435;var inst_11412 = 0;var state_11528__$1 = (function (){var statearr_11584 = state_11528;(statearr_11584[14] = inst_11412);
(statearr_11584[15] = inst_11411);
(statearr_11584[16] = inst_11410);
(statearr_11584[17] = inst_11409);
return statearr_11584;
})();var statearr_11585_11653 = state_11528__$1;(statearr_11585_11653[2] = null);
(statearr_11585_11653[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11529 === 20))
{var inst_11429 = (state_11528[24]);var inst_11439 = cljs.core.first.call(null,inst_11429);var inst_11440 = cljs.core.nth.call(null,inst_11439,0,null);var inst_11441 = cljs.core.nth.call(null,inst_11439,1,null);var state_11528__$1 = (function (){var statearr_11586 = state_11528;(statearr_11586[27] = inst_11440);
return statearr_11586;
})();if(cljs.core.truth_(inst_11441))
{var statearr_11587_11654 = state_11528__$1;(statearr_11587_11654[1] = 22);
} else
{var statearr_11588_11655 = state_11528__$1;(statearr_11588_11655[1] = 23);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11529 === 21))
{var inst_11450 = (state_11528[2]);var state_11528__$1 = state_11528;var statearr_11589_11656 = state_11528__$1;(statearr_11589_11656[2] = inst_11450);
(statearr_11589_11656[1] = 18);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11529 === 22))
{var inst_11440 = (state_11528[27]);var inst_11443 = cljs.core.async.close_BANG_.call(null,inst_11440);var state_11528__$1 = state_11528;var statearr_11590_11657 = state_11528__$1;(statearr_11590_11657[2] = inst_11443);
(statearr_11590_11657[1] = 24);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11529 === 23))
{var state_11528__$1 = state_11528;var statearr_11591_11658 = state_11528__$1;(statearr_11591_11658[2] = null);
(statearr_11591_11658[1] = 24);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11529 === 24))
{var inst_11429 = (state_11528[24]);var inst_11446 = (state_11528[2]);var inst_11447 = cljs.core.next.call(null,inst_11429);var inst_11409 = inst_11447;var inst_11410 = null;var inst_11411 = 0;var inst_11412 = 0;var state_11528__$1 = (function (){var statearr_11592 = state_11528;(statearr_11592[14] = inst_11412);
(statearr_11592[15] = inst_11411);
(statearr_11592[28] = inst_11446);
(statearr_11592[16] = inst_11410);
(statearr_11592[17] = inst_11409);
return statearr_11592;
})();var statearr_11593_11659 = state_11528__$1;(statearr_11593_11659[2] = null);
(statearr_11593_11659[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11529 === 25))
{var inst_11470 = (state_11528[7]);var inst_11471 = (state_11528[8]);var inst_11473 = (inst_11471 < inst_11470);var inst_11474 = inst_11473;var state_11528__$1 = state_11528;if(cljs.core.truth_(inst_11474))
{var statearr_11594_11660 = state_11528__$1;(statearr_11594_11660[1] = 27);
} else
{var statearr_11595_11661 = state_11528__$1;(statearr_11595_11661[1] = 28);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11529 === 26))
{var inst_11460 = (state_11528[19]);var inst_11514 = (state_11528[2]);var inst_11515 = cljs.core.seq.call(null,inst_11460);var state_11528__$1 = (function (){var statearr_11596 = state_11528;(statearr_11596[29] = inst_11514);
return statearr_11596;
})();if(inst_11515)
{var statearr_11597_11662 = state_11528__$1;(statearr_11597_11662[1] = 42);
} else
{var statearr_11598_11663 = state_11528__$1;(statearr_11598_11663[1] = 43);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11529 === 27))
{var inst_11471 = (state_11528[8]);var inst_11400 = (state_11528[13]);var inst_11476 = (state_11528[30]);var inst_11469 = (state_11528[10]);var inst_11476__$1 = cljs.core._nth.call(null,inst_11469,inst_11471);var inst_11477 = cljs.core.async.put_BANG_.call(null,inst_11476__$1,inst_11400,done);var state_11528__$1 = (function (){var statearr_11599 = state_11528;(statearr_11599[30] = inst_11476__$1);
return statearr_11599;
})();if(cljs.core.truth_(inst_11477))
{var statearr_11600_11664 = state_11528__$1;(statearr_11600_11664[1] = 30);
} else
{var statearr_11601_11665 = state_11528__$1;(statearr_11601_11665[1] = 31);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11529 === 28))
{var inst_11487 = (state_11528[12]);var inst_11468 = (state_11528[9]);var inst_11487__$1 = cljs.core.seq.call(null,inst_11468);var state_11528__$1 = (function (){var statearr_11602 = state_11528;(statearr_11602[12] = inst_11487__$1);
return statearr_11602;
})();if(inst_11487__$1)
{var statearr_11603_11666 = state_11528__$1;(statearr_11603_11666[1] = 33);
} else
{var statearr_11604_11667 = state_11528__$1;(statearr_11604_11667[1] = 34);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11529 === 29))
{var inst_11512 = (state_11528[2]);var state_11528__$1 = state_11528;var statearr_11605_11668 = state_11528__$1;(statearr_11605_11668[2] = inst_11512);
(statearr_11605_11668[1] = 26);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11529 === 30))
{var state_11528__$1 = state_11528;var statearr_11606_11669 = state_11528__$1;(statearr_11606_11669[2] = null);
(statearr_11606_11669[1] = 32);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11529 === 31))
{var inst_11476 = (state_11528[30]);var inst_11480 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var inst_11481 = cljs.core.async.untap_STAR_.call(null,m,inst_11476);var state_11528__$1 = (function (){var statearr_11607 = state_11528;(statearr_11607[31] = inst_11480);
return statearr_11607;
})();var statearr_11608_11670 = state_11528__$1;(statearr_11608_11670[2] = inst_11481);
(statearr_11608_11670[1] = 32);
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
});})(c__5638__auto___11616,cs,m,dchan,dctr,done))
;return ((function (switch__5623__auto__,c__5638__auto___11616,cs,m,dchan,dctr,done){
return (function() {
var state_machine__5624__auto__ = null;
var state_machine__5624__auto____0 = (function (){var statearr_11612 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_11612[0] = state_machine__5624__auto__);
(statearr_11612[1] = 1);
return statearr_11612;
});
var state_machine__5624__auto____1 = (function (state_11528){while(true){
var ret_value__5625__auto__ = (function (){try{while(true){
var result__5626__auto__ = switch__5623__auto__.call(null,state_11528);if(cljs.core.keyword_identical_QMARK_.call(null,result__5626__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5626__auto__;
}
break;
}
}catch (e11613){if((e11613 instanceof Object))
{var ex__5627__auto__ = e11613;var statearr_11614_11671 = state_11528;(statearr_11614_11671[5] = ex__5627__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11528);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e11613;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5625__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__11672 = state_11528;
state_11528 = G__11672;
continue;
}
} else
{return ret_value__5625__auto__;
}
break;
}
});
state_machine__5624__auto__ = function(state_11528){
switch(arguments.length){
case 0:
return state_machine__5624__auto____0.call(this);
case 1:
return state_machine__5624__auto____1.call(this,state_11528);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5624__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5624__auto____0;
state_machine__5624__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5624__auto____1;
return state_machine__5624__auto__;
})()
;})(switch__5623__auto__,c__5638__auto___11616,cs,m,dchan,dctr,done))
})();var state__5640__auto__ = (function (){var statearr_11615 = f__5639__auto__.call(null);(statearr_11615[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5638__auto___11616);
return statearr_11615;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5640__auto__);
});})(c__5638__auto___11616,cs,m,dchan,dctr,done))
);
return m;
});
/**
* Copies the mult source onto the supplied channel.
* 
* By default the channel will be closed when the source closes,
* but can be determined by the close? parameter.
*/
cljs.core.async.tap = (function() {
var tap = null;
var tap__2 = (function (mult,ch){return tap.call(null,mult,ch,true);
});
var tap__3 = (function (mult,ch,close_QMARK_){cljs.core.async.tap_STAR_.call(null,mult,ch,close_QMARK_);
return ch;
});
tap = function(mult,ch,close_QMARK_){
switch(arguments.length){
case 2:
return tap__2.call(this,mult,ch);
case 3:
return tap__3.call(this,mult,ch,close_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
tap.cljs$core$IFn$_invoke$arity$2 = tap__2;
tap.cljs$core$IFn$_invoke$arity$3 = tap__3;
return tap;
})()
;
/**
* Disconnects a target channel from a mult
*/
cljs.core.async.untap = (function untap(mult,ch){return cljs.core.async.untap_STAR_.call(null,mult,ch);
});
/**
* Disconnects all target channels from a mult
*/
cljs.core.async.untap_all = (function untap_all(mult){return cljs.core.async.untap_all_STAR_.call(null,mult);
});
cljs.core.async.Mix = (function (){var obj11674 = {};return obj11674;
})();
cljs.core.async.admix_STAR_ = (function admix_STAR_(m,ch){if((function (){var and__3469__auto__ = m;if(and__3469__auto__)
{return m.cljs$core$async$Mix$admix_STAR_$arity$2;
} else
{return and__3469__auto__;
}
})())
{return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else
{var x__4108__auto__ = (((m == null))?null:m);return (function (){var or__3481__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__4108__auto__)]);if(or__3481__auto__)
{return or__3481__auto__;
} else
{var or__3481__auto____$1 = (cljs.core.async.admix_STAR_["_"]);if(or__3481__auto____$1)
{return or__3481__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mix.admix*",m);
}
}
})().call(null,m,ch);
}
});
cljs.core.async.unmix_STAR_ = (function unmix_STAR_(m,ch){if((function (){var and__3469__auto__ = m;if(and__3469__auto__)
{return m.cljs$core$async$Mix$unmix_STAR_$arity$2;
} else
{return and__3469__auto__;
}
})())
{return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else
{var x__4108__auto__ = (((m == null))?null:m);return (function (){var or__3481__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__4108__auto__)]);if(or__3481__auto__)
{return or__3481__auto__;
} else
{var or__3481__auto____$1 = (cljs.core.async.unmix_STAR_["_"]);if(or__3481__auto____$1)
{return or__3481__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mix.unmix*",m);
}
}
})().call(null,m,ch);
}
});
cljs.core.async.unmix_all_STAR_ = (function unmix_all_STAR_(m){if((function (){var and__3469__auto__ = m;if(and__3469__auto__)
{return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1;
} else
{return and__3469__auto__;
}
})())
{return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else
{var x__4108__auto__ = (((m == null))?null:m);return (function (){var or__3481__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__4108__auto__)]);if(or__3481__auto__)
{return or__3481__auto__;
} else
{var or__3481__auto____$1 = (cljs.core.async.unmix_all_STAR_["_"]);if(or__3481__auto____$1)
{return or__3481__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mix.unmix-all*",m);
}
}
})().call(null,m);
}
});
cljs.core.async.toggle_STAR_ = (function toggle_STAR_(m,state_map){if((function (){var and__3469__auto__ = m;if(and__3469__auto__)
{return m.cljs$core$async$Mix$toggle_STAR_$arity$2;
} else
{return and__3469__auto__;
}
})())
{return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else
{var x__4108__auto__ = (((m == null))?null:m);return (function (){var or__3481__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__4108__auto__)]);if(or__3481__auto__)
{return or__3481__auto__;
} else
{var or__3481__auto____$1 = (cljs.core.async.toggle_STAR_["_"]);if(or__3481__auto____$1)
{return or__3481__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mix.toggle*",m);
}
}
})().call(null,m,state_map);
}
});
cljs.core.async.solo_mode_STAR_ = (function solo_mode_STAR_(m,mode){if((function (){var and__3469__auto__ = m;if(and__3469__auto__)
{return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2;
} else
{return and__3469__auto__;
}
})())
{return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else
{var x__4108__auto__ = (((m == null))?null:m);return (function (){var or__3481__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__4108__auto__)]);if(or__3481__auto__)
{return or__3481__auto__;
} else
{var or__3481__auto____$1 = (cljs.core.async.solo_mode_STAR_["_"]);if(or__3481__auto____$1)
{return or__3481__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mix.solo-mode*",m);
}
}
})().call(null,m,mode);
}
});
/**
* Creates and returns a mix of one or more input channels which will
* be put on the supplied out channel. Input sources can be added to
* the mix with 'admix', and removed with 'unmix'. A mix supports
* soloing, muting and pausing multiple inputs atomically using
* 'toggle', and can solo using either muting or pausing as determined
* by 'solo-mode'.
* 
* Each channel can have zero or more boolean modes set via 'toggle':
* 
* :solo - when true, only this (ond other soloed) channel(s) will appear
* in the mix output channel. :mute and :pause states of soloed
* channels are ignored. If solo-mode is :mute, non-soloed
* channels are muted, if :pause, non-soloed channels are
* paused.
* 
* :mute - muted channels will have their contents consumed but not included in the mix
* :pause - paused channels will not have their contents consumed (and thus also not included in the mix)
*/
cljs.core.async.mix = (function mix(out){var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pause","pause",1120344424),null,new cljs.core.Keyword(null,"mute","mute",1017267595),null], null), null);var attrs = cljs.core.conj.call(null,solo_modes,new cljs.core.Keyword(null,"solo","solo",1017440337));var solo_mode = cljs.core.atom.call(null,new cljs.core.Keyword(null,"mute","mute",1017267595));var change = cljs.core.async.chan.call(null);var changed = ((function (cs,solo_modes,attrs,solo_mode,change){
return (function (){return cljs.core.async.put_BANG_.call(null,change,true);
});})(cs,solo_modes,attrs,solo_mode,change))
;var pick = ((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (attr,chs){return cljs.core.reduce_kv.call(null,((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (ret,c,v){if(cljs.core.truth_(attr.call(null,v)))
{return cljs.core.conj.call(null,ret,c);
} else
{return ret;
}
});})(cs,solo_modes,attrs,solo_mode,change,changed))
,cljs.core.PersistentHashSet.EMPTY,chs);
});})(cs,solo_modes,attrs,solo_mode,change,changed))
;var calc_state = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick){
return (function (){var chs = cljs.core.deref.call(null,cs);var mode = cljs.core.deref.call(null,solo_mode);var solos = pick.call(null,new cljs.core.Keyword(null,"solo","solo",1017440337),chs);var pauses = pick.call(null,new cljs.core.Keyword(null,"pause","pause",1120344424),chs);return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1123523302),solos,new cljs.core.Keyword(null,"mutes","mutes",1118168300),pick.call(null,new cljs.core.Keyword(null,"mute","mute",1017267595),chs),new cljs.core.Keyword(null,"reads","reads",1122290959),cljs.core.conj.call(null,(((cljs.core._EQ_.call(null,mode,new cljs.core.Keyword(null,"pause","pause",1120344424))) && (!(cljs.core.empty_QMARK_.call(null,solos))))?cljs.core.vec.call(null,solos):cljs.core.vec.call(null,cljs.core.remove.call(null,pauses,cljs.core.keys.call(null,chs)))),change)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick))
;var m = (function (){if(typeof cljs.core.async.t11794 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t11794 = (function (pick,out,attrs,cs,calc_state,solo_modes,mix,changed,change,solo_mode,meta11795){
this.pick = pick;
this.out = out;
this.attrs = attrs;
this.cs = cs;
this.calc_state = calc_state;
this.solo_modes = solo_modes;
this.mix = mix;
this.changed = changed;
this.change = change;
this.solo_mode = solo_mode;
this.meta11795 = meta11795;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t11794.cljs$lang$type = true;
cljs.core.async.t11794.cljs$lang$ctorStr = "cljs.core.async/t11794";
cljs.core.async.t11794.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__4048__auto__,writer__4049__auto__,opt__4050__auto__){return cljs.core._write.call(null,writer__4049__auto__,"cljs.core.async/t11794");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t11794.prototype.cljs$core$async$Mix$ = true;
cljs.core.async.t11794.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t11794.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t11794.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t11794.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t11794.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){var self__ = this;
var ___$1 = this;if(cljs.core.truth_(self__.solo_modes.call(null,mode)))
{} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("mode must be one of: "),cljs.core.str(self__.solo_modes)].join('')),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"solo-modes","solo-modes",-1162732933,null),new cljs.core.Symbol(null,"mode","mode",-1637174436,null))))].join('')));
}
cljs.core.reset_BANG_.call(null,self__.solo_mode,mode);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t11794.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t11794.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){var self__ = this;
var ___$1 = this;return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t11794.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_11796){var self__ = this;
var _11796__$1 = this;return self__.meta11795;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t11794.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_11796,meta11795__$1){var self__ = this;
var _11796__$1 = this;return (new cljs.core.async.t11794(self__.pick,self__.out,self__.attrs,self__.cs,self__.calc_state,self__.solo_modes,self__.mix,self__.changed,self__.change,self__.solo_mode,meta11795__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.__GT_t11794 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function __GT_t11794(pick__$1,out__$1,attrs__$1,cs__$1,calc_state__$1,solo_modes__$1,mix__$1,changed__$1,change__$1,solo_mode__$1,meta11795){return (new cljs.core.async.t11794(pick__$1,out__$1,attrs__$1,cs__$1,calc_state__$1,solo_modes__$1,mix__$1,changed__$1,change__$1,solo_mode__$1,meta11795));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
}
return (new cljs.core.async.t11794(pick,out,attrs,cs,calc_state,solo_modes,mix,changed,change,solo_mode,null));
})();var c__5638__auto___11913 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__5638__auto___11913,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){var f__5639__auto__ = (function (){var switch__5623__auto__ = ((function (c__5638__auto___11913,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_11866){var state_val_11867 = (state_11866[1]);if((state_val_11867 === 1))
{var inst_11800 = (state_11866[7]);var inst_11800__$1 = calc_state.call(null);var inst_11801 = cljs.core.seq_QMARK_.call(null,inst_11800__$1);var state_11866__$1 = (function (){var statearr_11868 = state_11866;(statearr_11868[7] = inst_11800__$1);
return statearr_11868;
})();if(inst_11801)
{var statearr_11869_11914 = state_11866__$1;(statearr_11869_11914[1] = 2);
} else
{var statearr_11870_11915 = state_11866__$1;(statearr_11870_11915[1] = 3);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11867 === 2))
{var inst_11800 = (state_11866[7]);var inst_11803 = cljs.core.apply.call(null,cljs.core.hash_map,inst_11800);var state_11866__$1 = state_11866;var statearr_11871_11916 = state_11866__$1;(statearr_11871_11916[2] = inst_11803);
(statearr_11871_11916[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11867 === 3))
{var inst_11800 = (state_11866[7]);var state_11866__$1 = state_11866;var statearr_11872_11917 = state_11866__$1;(statearr_11872_11917[2] = inst_11800);
(statearr_11872_11917[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11867 === 4))
{var inst_11800 = (state_11866[7]);var inst_11806 = (state_11866[2]);var inst_11807 = cljs.core.get.call(null,inst_11806,new cljs.core.Keyword(null,"reads","reads",1122290959));var inst_11808 = cljs.core.get.call(null,inst_11806,new cljs.core.Keyword(null,"mutes","mutes",1118168300));var inst_11809 = cljs.core.get.call(null,inst_11806,new cljs.core.Keyword(null,"solos","solos",1123523302));var inst_11810 = inst_11800;var state_11866__$1 = (function (){var statearr_11873 = state_11866;(statearr_11873[8] = inst_11810);
(statearr_11873[9] = inst_11807);
(statearr_11873[10] = inst_11808);
(statearr_11873[11] = inst_11809);
return statearr_11873;
})();var statearr_11874_11918 = state_11866__$1;(statearr_11874_11918[2] = null);
(statearr_11874_11918[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11867 === 5))
{var inst_11810 = (state_11866[8]);var inst_11813 = cljs.core.seq_QMARK_.call(null,inst_11810);var state_11866__$1 = state_11866;if(inst_11813)
{var statearr_11875_11919 = state_11866__$1;(statearr_11875_11919[1] = 7);
} else
{var statearr_11876_11920 = state_11866__$1;(statearr_11876_11920[1] = 8);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11867 === 6))
{var inst_11864 = (state_11866[2]);var state_11866__$1 = state_11866;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11866__$1,inst_11864);
} else
{if((state_val_11867 === 7))
{var inst_11810 = (state_11866[8]);var inst_11815 = cljs.core.apply.call(null,cljs.core.hash_map,inst_11810);var state_11866__$1 = state_11866;var statearr_11877_11921 = state_11866__$1;(statearr_11877_11921[2] = inst_11815);
(statearr_11877_11921[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11867 === 8))
{var inst_11810 = (state_11866[8]);var state_11866__$1 = state_11866;var statearr_11878_11922 = state_11866__$1;(statearr_11878_11922[2] = inst_11810);
(statearr_11878_11922[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11867 === 9))
{var inst_11818 = (state_11866[12]);var inst_11818__$1 = (state_11866[2]);var inst_11819 = cljs.core.get.call(null,inst_11818__$1,new cljs.core.Keyword(null,"reads","reads",1122290959));var inst_11820 = cljs.core.get.call(null,inst_11818__$1,new cljs.core.Keyword(null,"mutes","mutes",1118168300));var inst_11821 = cljs.core.get.call(null,inst_11818__$1,new cljs.core.Keyword(null,"solos","solos",1123523302));var state_11866__$1 = (function (){var statearr_11879 = state_11866;(statearr_11879[12] = inst_11818__$1);
(statearr_11879[13] = inst_11820);
(statearr_11879[14] = inst_11821);
return statearr_11879;
})();return cljs.core.async.impl.ioc_helpers.ioc_alts_BANG_.call(null,state_11866__$1,10,inst_11819);
} else
{if((state_val_11867 === 10))
{var inst_11826 = (state_11866[15]);var inst_11825 = (state_11866[16]);var inst_11824 = (state_11866[2]);var inst_11825__$1 = cljs.core.nth.call(null,inst_11824,0,null);var inst_11826__$1 = cljs.core.nth.call(null,inst_11824,1,null);var inst_11827 = (inst_11825__$1 == null);var inst_11828 = cljs.core._EQ_.call(null,inst_11826__$1,change);var inst_11829 = (inst_11827) || (inst_11828);var state_11866__$1 = (function (){var statearr_11880 = state_11866;(statearr_11880[15] = inst_11826__$1);
(statearr_11880[16] = inst_11825__$1);
return statearr_11880;
})();if(cljs.core.truth_(inst_11829))
{var statearr_11881_11923 = state_11866__$1;(statearr_11881_11923[1] = 11);
} else
{var statearr_11882_11924 = state_11866__$1;(statearr_11882_11924[1] = 12);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11867 === 11))
{var inst_11825 = (state_11866[16]);var inst_11831 = (inst_11825 == null);var state_11866__$1 = state_11866;if(cljs.core.truth_(inst_11831))
{var statearr_11883_11925 = state_11866__$1;(statearr_11883_11925[1] = 14);
} else
{var statearr_11884_11926 = state_11866__$1;(statearr_11884_11926[1] = 15);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11867 === 12))
{var inst_11826 = (state_11866[15]);var inst_11840 = (state_11866[17]);var inst_11821 = (state_11866[14]);var inst_11840__$1 = inst_11821.call(null,inst_11826);var state_11866__$1 = (function (){var statearr_11885 = state_11866;(statearr_11885[17] = inst_11840__$1);
return statearr_11885;
})();if(cljs.core.truth_(inst_11840__$1))
{var statearr_11886_11927 = state_11866__$1;(statearr_11886_11927[1] = 17);
} else
{var statearr_11887_11928 = state_11866__$1;(statearr_11887_11928[1] = 18);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11867 === 13))
{var inst_11862 = (state_11866[2]);var state_11866__$1 = state_11866;var statearr_11888_11929 = state_11866__$1;(statearr_11888_11929[2] = inst_11862);
(statearr_11888_11929[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11867 === 14))
{var inst_11826 = (state_11866[15]);var inst_11833 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_11826);var state_11866__$1 = state_11866;var statearr_11889_11930 = state_11866__$1;(statearr_11889_11930[2] = inst_11833);
(statearr_11889_11930[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11867 === 15))
{var state_11866__$1 = state_11866;var statearr_11890_11931 = state_11866__$1;(statearr_11890_11931[2] = null);
(statearr_11890_11931[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11867 === 16))
{var inst_11836 = (state_11866[2]);var inst_11837 = calc_state.call(null);var inst_11810 = inst_11837;var state_11866__$1 = (function (){var statearr_11891 = state_11866;(statearr_11891[8] = inst_11810);
(statearr_11891[18] = inst_11836);
return statearr_11891;
})();var statearr_11892_11932 = state_11866__$1;(statearr_11892_11932[2] = null);
(statearr_11892_11932[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11867 === 17))
{var inst_11840 = (state_11866[17]);var state_11866__$1 = state_11866;var statearr_11893_11933 = state_11866__$1;(statearr_11893_11933[2] = inst_11840);
(statearr_11893_11933[1] = 19);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11867 === 18))
{var inst_11826 = (state_11866[15]);var inst_11820 = (state_11866[13]);var inst_11821 = (state_11866[14]);var inst_11843 = cljs.core.empty_QMARK_.call(null,inst_11821);var inst_11844 = inst_11820.call(null,inst_11826);var inst_11845 = cljs.core.not.call(null,inst_11844);var inst_11846 = (inst_11843) && (inst_11845);var state_11866__$1 = state_11866;var statearr_11894_11934 = state_11866__$1;(statearr_11894_11934[2] = inst_11846);
(statearr_11894_11934[1] = 19);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11867 === 19))
{var inst_11848 = (state_11866[2]);var state_11866__$1 = state_11866;if(cljs.core.truth_(inst_11848))
{var statearr_11895_11935 = state_11866__$1;(statearr_11895_11935[1] = 20);
} else
{var statearr_11896_11936 = state_11866__$1;(statearr_11896_11936[1] = 21);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11867 === 20))
{var inst_11825 = (state_11866[16]);var state_11866__$1 = state_11866;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_11866__$1,23,out,inst_11825);
} else
{if((state_val_11867 === 21))
{var inst_11818 = (state_11866[12]);var inst_11810 = inst_11818;var state_11866__$1 = (function (){var statearr_11897 = state_11866;(statearr_11897[8] = inst_11810);
return statearr_11897;
})();var statearr_11898_11937 = state_11866__$1;(statearr_11898_11937[2] = null);
(statearr_11898_11937[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11867 === 22))
{var inst_11860 = (state_11866[2]);var state_11866__$1 = state_11866;var statearr_11899_11938 = state_11866__$1;(statearr_11899_11938[2] = inst_11860);
(statearr_11899_11938[1] = 13);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11867 === 23))
{var inst_11851 = (state_11866[2]);var state_11866__$1 = state_11866;if(cljs.core.truth_(inst_11851))
{var statearr_11900_11939 = state_11866__$1;(statearr_11900_11939[1] = 24);
} else
{var statearr_11901_11940 = state_11866__$1;(statearr_11901_11940[1] = 25);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11867 === 24))
{var inst_11818 = (state_11866[12]);var inst_11810 = inst_11818;var state_11866__$1 = (function (){var statearr_11902 = state_11866;(statearr_11902[8] = inst_11810);
return statearr_11902;
})();var statearr_11903_11941 = state_11866__$1;(statearr_11903_11941[2] = null);
(statearr_11903_11941[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11867 === 25))
{var state_11866__$1 = state_11866;var statearr_11904_11942 = state_11866__$1;(statearr_11904_11942[2] = null);
(statearr_11904_11942[1] = 26);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11867 === 26))
{var inst_11856 = (state_11866[2]);var state_11866__$1 = state_11866;var statearr_11905_11943 = state_11866__$1;(statearr_11905_11943[2] = inst_11856);
(statearr_11905_11943[1] = 22);
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
});})(c__5638__auto___11913,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;return ((function (switch__5623__auto__,c__5638__auto___11913,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var state_machine__5624__auto__ = null;
var state_machine__5624__auto____0 = (function (){var statearr_11909 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_11909[0] = state_machine__5624__auto__);
(statearr_11909[1] = 1);
return statearr_11909;
});
var state_machine__5624__auto____1 = (function (state_11866){while(true){
var ret_value__5625__auto__ = (function (){try{while(true){
var result__5626__auto__ = switch__5623__auto__.call(null,state_11866);if(cljs.core.keyword_identical_QMARK_.call(null,result__5626__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5626__auto__;
}
break;
}
}catch (e11910){if((e11910 instanceof Object))
{var ex__5627__auto__ = e11910;var statearr_11911_11944 = state_11866;(statearr_11911_11944[5] = ex__5627__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11866);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e11910;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5625__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__11945 = state_11866;
state_11866 = G__11945;
continue;
}
} else
{return ret_value__5625__auto__;
}
break;
}
});
state_machine__5624__auto__ = function(state_11866){
switch(arguments.length){
case 0:
return state_machine__5624__auto____0.call(this);
case 1:
return state_machine__5624__auto____1.call(this,state_11866);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5624__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5624__auto____0;
state_machine__5624__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5624__auto____1;
return state_machine__5624__auto__;
})()
;})(switch__5623__auto__,c__5638__auto___11913,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();var state__5640__auto__ = (function (){var statearr_11912 = f__5639__auto__.call(null);(statearr_11912[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5638__auto___11913);
return statearr_11912;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5640__auto__);
});})(c__5638__auto___11913,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
);
return m;
});
/**
* Adds ch as an input to the mix
*/
cljs.core.async.admix = (function admix(mix,ch){return cljs.core.async.admix_STAR_.call(null,mix,ch);
});
/**
* Removes ch as an input to the mix
*/
cljs.core.async.unmix = (function unmix(mix,ch){return cljs.core.async.unmix_STAR_.call(null,mix,ch);
});
/**
* removes all inputs from the mix
*/
cljs.core.async.unmix_all = (function unmix_all(mix){return cljs.core.async.unmix_all_STAR_.call(null,mix);
});
/**
* Atomically sets the state(s) of one or more channels in a mix. The
* state map is a map of channels -> channel-state-map. A
* channel-state-map is a map of attrs -> boolean, where attr is one or
* more of :mute, :pause or :solo. Any states supplied are merged with
* the current state.
* 
* Note that channels can be added to a mix via toggle, which can be
* used to add channels in a particular (e.g. paused) state.
*/
cljs.core.async.toggle = (function toggle(mix,state_map){return cljs.core.async.toggle_STAR_.call(null,mix,state_map);
});
/**
* Sets the solo mode of the mix. mode must be one of :mute or :pause
*/
cljs.core.async.solo_mode = (function solo_mode(mix,mode){return cljs.core.async.solo_mode_STAR_.call(null,mix,mode);
});
cljs.core.async.Pub = (function (){var obj11947 = {};return obj11947;
})();
cljs.core.async.sub_STAR_ = (function sub_STAR_(p,v,ch,close_QMARK_){if((function (){var and__3469__auto__ = p;if(and__3469__auto__)
{return p.cljs$core$async$Pub$sub_STAR_$arity$4;
} else
{return and__3469__auto__;
}
})())
{return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else
{var x__4108__auto__ = (((p == null))?null:p);return (function (){var or__3481__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__4108__auto__)]);if(or__3481__auto__)
{return or__3481__auto__;
} else
{var or__3481__auto____$1 = (cljs.core.async.sub_STAR_["_"]);if(or__3481__auto____$1)
{return or__3481__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Pub.sub*",p);
}
}
})().call(null,p,v,ch,close_QMARK_);
}
});
cljs.core.async.unsub_STAR_ = (function unsub_STAR_(p,v,ch){if((function (){var and__3469__auto__ = p;if(and__3469__auto__)
{return p.cljs$core$async$Pub$unsub_STAR_$arity$3;
} else
{return and__3469__auto__;
}
})())
{return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else
{var x__4108__auto__ = (((p == null))?null:p);return (function (){var or__3481__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__4108__auto__)]);if(or__3481__auto__)
{return or__3481__auto__;
} else
{var or__3481__auto____$1 = (cljs.core.async.unsub_STAR_["_"]);if(or__3481__auto____$1)
{return or__3481__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Pub.unsub*",p);
}
}
})().call(null,p,v,ch);
}
});
cljs.core.async.unsub_all_STAR_ = (function() {
var unsub_all_STAR_ = null;
var unsub_all_STAR___1 = (function (p){if((function (){var and__3469__auto__ = p;if(and__3469__auto__)
{return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1;
} else
{return and__3469__auto__;
}
})())
{return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else
{var x__4108__auto__ = (((p == null))?null:p);return (function (){var or__3481__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4108__auto__)]);if(or__3481__auto__)
{return or__3481__auto__;
} else
{var or__3481__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);if(or__3481__auto____$1)
{return or__3481__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
})().call(null,p);
}
});
var unsub_all_STAR___2 = (function (p,v){if((function (){var and__3469__auto__ = p;if(and__3469__auto__)
{return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2;
} else
{return and__3469__auto__;
}
})())
{return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else
{var x__4108__auto__ = (((p == null))?null:p);return (function (){var or__3481__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4108__auto__)]);if(or__3481__auto__)
{return or__3481__auto__;
} else
{var or__3481__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);if(or__3481__auto____$1)
{return or__3481__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
})().call(null,p,v);
}
});
unsub_all_STAR_ = function(p,v){
switch(arguments.length){
case 1:
return unsub_all_STAR___1.call(this,p);
case 2:
return unsub_all_STAR___2.call(this,p,v);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = unsub_all_STAR___1;
unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = unsub_all_STAR___2;
return unsub_all_STAR_;
})()
;
/**
* Creates and returns a pub(lication) of the supplied channel,
* partitioned into topics by the topic-fn. topic-fn will be applied to
* each value on the channel and the result will determine the 'topic'
* on which that value will be put. Channels can be subscribed to
* receive copies of topics using 'sub', and unsubscribed using
* 'unsub'. Each topic will be handled by an internal mult on a
* dedicated channel. By default these internal channels are
* unbuffered, but a buf-fn can be supplied which, given a topic,
* creates a buffer with desired properties.
* 
* Each item is distributed to all subs in parallel and synchronously,
* i.e. each sub must accept before the next item is distributed. Use
* buffering/windowing to prevent slow subs from holding up the pub.
* 
* Items received when there are no matching subs get dropped.
* 
* Note that if buf-fns are used then each topic is handled
* asynchronously, i.e. if a channel is subscribed to more than one
* topic it should not expect them to be interleaved identically with
* the source.
*/
cljs.core.async.pub = (function() {
var pub = null;
var pub__2 = (function (ch,topic_fn){return pub.call(null,ch,topic_fn,cljs.core.constantly.call(null,null));
});
var pub__3 = (function (ch,topic_fn,buf_fn){var mults = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var ensure_mult = ((function (mults){
return (function (topic){var or__3481__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,mults),topic);if(cljs.core.truth_(or__3481__auto__))
{return or__3481__auto__;
} else
{return cljs.core.get.call(null,cljs.core.swap_BANG_.call(null,mults,((function (or__3481__auto__,mults){
return (function (p1__11948_SHARP_){if(cljs.core.truth_(p1__11948_SHARP_.call(null,topic)))
{return p1__11948_SHARP_;
} else
{return cljs.core.assoc.call(null,p1__11948_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__3481__auto__,mults))
),topic);
}
});})(mults))
;var p = (function (){if(typeof cljs.core.async.t12063 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t12063 = (function (ensure_mult,mults,buf_fn,topic_fn,ch,pub,meta12064){
this.ensure_mult = ensure_mult;
this.mults = mults;
this.buf_fn = buf_fn;
this.topic_fn = topic_fn;
this.ch = ch;
this.pub = pub;
this.meta12064 = meta12064;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t12063.cljs$lang$type = true;
cljs.core.async.t12063.cljs$lang$ctorStr = "cljs.core.async/t12063";
cljs.core.async.t12063.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__4048__auto__,writer__4049__auto__,opt__4050__auto__){return cljs.core._write.call(null,writer__4049__auto__,"cljs.core.async/t12063");
});})(mults,ensure_mult))
;
cljs.core.async.t12063.prototype.cljs$core$async$Pub$ = true;
cljs.core.async.t12063.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$2,close_QMARK_){var self__ = this;
var p__$1 = this;var m = self__.ensure_mult.call(null,topic);return cljs.core.async.tap.call(null,m,ch__$2,close_QMARK_);
});})(mults,ensure_mult))
;
cljs.core.async.t12063.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$2){var self__ = this;
var p__$1 = this;var temp__4092__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,self__.mults),topic);if(cljs.core.truth_(temp__4092__auto__))
{var m = temp__4092__auto__;return cljs.core.async.untap.call(null,m,ch__$2);
} else
{return null;
}
});})(mults,ensure_mult))
;
cljs.core.async.t12063.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){var self__ = this;
var ___$1 = this;return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;
cljs.core.async.t12063.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){var self__ = this;
var ___$1 = this;return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;
cljs.core.async.t12063.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t12063.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){var self__ = this;
var ___$1 = this;return self__.ch;
});})(mults,ensure_mult))
;
cljs.core.async.t12063.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_12065){var self__ = this;
var _12065__$1 = this;return self__.meta12064;
});})(mults,ensure_mult))
;
cljs.core.async.t12063.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_12065,meta12064__$1){var self__ = this;
var _12065__$1 = this;return (new cljs.core.async.t12063(self__.ensure_mult,self__.mults,self__.buf_fn,self__.topic_fn,self__.ch,self__.pub,meta12064__$1));
});})(mults,ensure_mult))
;
cljs.core.async.__GT_t12063 = ((function (mults,ensure_mult){
return (function __GT_t12063(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta12064){return (new cljs.core.async.t12063(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta12064));
});})(mults,ensure_mult))
;
}
return (new cljs.core.async.t12063(ensure_mult,mults,buf_fn,topic_fn,ch,pub,null));
})();var c__5638__auto___12177 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__5638__auto___12177,mults,ensure_mult,p){
return (function (){var f__5639__auto__ = (function (){var switch__5623__auto__ = ((function (c__5638__auto___12177,mults,ensure_mult,p){
return (function (state_12133){var state_val_12134 = (state_12133[1]);if((state_val_12134 === 1))
{var state_12133__$1 = state_12133;var statearr_12135_12178 = state_12133__$1;(statearr_12135_12178[2] = null);
(statearr_12135_12178[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12134 === 2))
{var state_12133__$1 = state_12133;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12133__$1,4,ch);
} else
{if((state_val_12134 === 3))
{var inst_12131 = (state_12133[2]);var state_12133__$1 = state_12133;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12133__$1,inst_12131);
} else
{if((state_val_12134 === 4))
{var inst_12068 = (state_12133[7]);var inst_12068__$1 = (state_12133[2]);var inst_12069 = (inst_12068__$1 == null);var state_12133__$1 = (function (){var statearr_12136 = state_12133;(statearr_12136[7] = inst_12068__$1);
return statearr_12136;
})();if(cljs.core.truth_(inst_12069))
{var statearr_12137_12179 = state_12133__$1;(statearr_12137_12179[1] = 5);
} else
{var statearr_12138_12180 = state_12133__$1;(statearr_12138_12180[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12134 === 5))
{var inst_12075 = cljs.core.deref.call(null,mults);var inst_12076 = cljs.core.vals.call(null,inst_12075);var inst_12077 = cljs.core.seq.call(null,inst_12076);var inst_12078 = inst_12077;var inst_12079 = null;var inst_12080 = 0;var inst_12081 = 0;var state_12133__$1 = (function (){var statearr_12139 = state_12133;(statearr_12139[8] = inst_12079);
(statearr_12139[9] = inst_12078);
(statearr_12139[10] = inst_12080);
(statearr_12139[11] = inst_12081);
return statearr_12139;
})();var statearr_12140_12181 = state_12133__$1;(statearr_12140_12181[2] = null);
(statearr_12140_12181[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12134 === 6))
{var inst_12068 = (state_12133[7]);var inst_12116 = (state_12133[12]);var inst_12116__$1 = topic_fn.call(null,inst_12068);var inst_12117 = cljs.core.deref.call(null,mults);var inst_12118 = cljs.core.get.call(null,inst_12117,inst_12116__$1);var inst_12119 = cljs.core.async.muxch_STAR_.call(null,inst_12118);var state_12133__$1 = (function (){var statearr_12141 = state_12133;(statearr_12141[12] = inst_12116__$1);
return statearr_12141;
})();return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_12133__$1,19,inst_12119,inst_12068);
} else
{if((state_val_12134 === 7))
{var inst_12129 = (state_12133[2]);var state_12133__$1 = state_12133;var statearr_12142_12182 = state_12133__$1;(statearr_12142_12182[2] = inst_12129);
(statearr_12142_12182[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12134 === 8))
{var inst_12080 = (state_12133[10]);var inst_12081 = (state_12133[11]);var inst_12083 = (inst_12081 < inst_12080);var inst_12084 = inst_12083;var state_12133__$1 = state_12133;if(cljs.core.truth_(inst_12084))
{var statearr_12146_12183 = state_12133__$1;(statearr_12146_12183[1] = 10);
} else
{var statearr_12147_12184 = state_12133__$1;(statearr_12147_12184[1] = 11);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12134 === 9))
{var inst_12114 = (state_12133[2]);var state_12133__$1 = state_12133;var statearr_12148_12185 = state_12133__$1;(statearr_12148_12185[2] = inst_12114);
(statearr_12148_12185[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12134 === 10))
{var inst_12079 = (state_12133[8]);var inst_12078 = (state_12133[9]);var inst_12080 = (state_12133[10]);var inst_12081 = (state_12133[11]);var inst_12086 = cljs.core._nth.call(null,inst_12079,inst_12081);var inst_12087 = cljs.core.async.muxch_STAR_.call(null,inst_12086);var inst_12088 = cljs.core.async.close_BANG_.call(null,inst_12087);var inst_12089 = (inst_12081 + 1);var tmp12143 = inst_12079;var tmp12144 = inst_12078;var tmp12145 = inst_12080;var inst_12078__$1 = tmp12144;var inst_12079__$1 = tmp12143;var inst_12080__$1 = tmp12145;var inst_12081__$1 = inst_12089;var state_12133__$1 = (function (){var statearr_12149 = state_12133;(statearr_12149[8] = inst_12079__$1);
(statearr_12149[9] = inst_12078__$1);
(statearr_12149[10] = inst_12080__$1);
(statearr_12149[11] = inst_12081__$1);
(statearr_12149[13] = inst_12088);
return statearr_12149;
})();var statearr_12150_12186 = state_12133__$1;(statearr_12150_12186[2] = null);
(statearr_12150_12186[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12134 === 11))
{var inst_12092 = (state_12133[14]);var inst_12078 = (state_12133[9]);var inst_12092__$1 = cljs.core.seq.call(null,inst_12078);var state_12133__$1 = (function (){var statearr_12151 = state_12133;(statearr_12151[14] = inst_12092__$1);
return statearr_12151;
})();if(inst_12092__$1)
{var statearr_12152_12187 = state_12133__$1;(statearr_12152_12187[1] = 13);
} else
{var statearr_12153_12188 = state_12133__$1;(statearr_12153_12188[1] = 14);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12134 === 12))
{var inst_12112 = (state_12133[2]);var state_12133__$1 = state_12133;var statearr_12154_12189 = state_12133__$1;(statearr_12154_12189[2] = inst_12112);
(statearr_12154_12189[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12134 === 13))
{var inst_12092 = (state_12133[14]);var inst_12094 = cljs.core.chunked_seq_QMARK_.call(null,inst_12092);var state_12133__$1 = state_12133;if(inst_12094)
{var statearr_12155_12190 = state_12133__$1;(statearr_12155_12190[1] = 16);
} else
{var statearr_12156_12191 = state_12133__$1;(statearr_12156_12191[1] = 17);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12134 === 14))
{var state_12133__$1 = state_12133;var statearr_12157_12192 = state_12133__$1;(statearr_12157_12192[2] = null);
(statearr_12157_12192[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12134 === 15))
{var inst_12110 = (state_12133[2]);var state_12133__$1 = state_12133;var statearr_12158_12193 = state_12133__$1;(statearr_12158_12193[2] = inst_12110);
(statearr_12158_12193[1] = 12);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12134 === 16))
{var inst_12092 = (state_12133[14]);var inst_12096 = cljs.core.chunk_first.call(null,inst_12092);var inst_12097 = cljs.core.chunk_rest.call(null,inst_12092);var inst_12098 = cljs.core.count.call(null,inst_12096);var inst_12078 = inst_12097;var inst_12079 = inst_12096;var inst_12080 = inst_12098;var inst_12081 = 0;var state_12133__$1 = (function (){var statearr_12159 = state_12133;(statearr_12159[8] = inst_12079);
(statearr_12159[9] = inst_12078);
(statearr_12159[10] = inst_12080);
(statearr_12159[11] = inst_12081);
return statearr_12159;
})();var statearr_12160_12194 = state_12133__$1;(statearr_12160_12194[2] = null);
(statearr_12160_12194[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12134 === 17))
{var inst_12092 = (state_12133[14]);var inst_12101 = cljs.core.first.call(null,inst_12092);var inst_12102 = cljs.core.async.muxch_STAR_.call(null,inst_12101);var inst_12103 = cljs.core.async.close_BANG_.call(null,inst_12102);var inst_12104 = cljs.core.next.call(null,inst_12092);var inst_12078 = inst_12104;var inst_12079 = null;var inst_12080 = 0;var inst_12081 = 0;var state_12133__$1 = (function (){var statearr_12161 = state_12133;(statearr_12161[8] = inst_12079);
(statearr_12161[9] = inst_12078);
(statearr_12161[10] = inst_12080);
(statearr_12161[11] = inst_12081);
(statearr_12161[15] = inst_12103);
return statearr_12161;
})();var statearr_12162_12195 = state_12133__$1;(statearr_12162_12195[2] = null);
(statearr_12162_12195[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12134 === 18))
{var inst_12107 = (state_12133[2]);var state_12133__$1 = state_12133;var statearr_12163_12196 = state_12133__$1;(statearr_12163_12196[2] = inst_12107);
(statearr_12163_12196[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12134 === 19))
{var inst_12121 = (state_12133[2]);var state_12133__$1 = state_12133;if(cljs.core.truth_(inst_12121))
{var statearr_12164_12197 = state_12133__$1;(statearr_12164_12197[1] = 20);
} else
{var statearr_12165_12198 = state_12133__$1;(statearr_12165_12198[1] = 21);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12134 === 20))
{var state_12133__$1 = state_12133;var statearr_12166_12199 = state_12133__$1;(statearr_12166_12199[2] = null);
(statearr_12166_12199[1] = 22);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12134 === 21))
{var inst_12116 = (state_12133[12]);var inst_12124 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_12116);var state_12133__$1 = state_12133;var statearr_12167_12200 = state_12133__$1;(statearr_12167_12200[2] = inst_12124);
(statearr_12167_12200[1] = 22);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12134 === 22))
{var inst_12126 = (state_12133[2]);var state_12133__$1 = (function (){var statearr_12168 = state_12133;(statearr_12168[16] = inst_12126);
return statearr_12168;
})();var statearr_12169_12201 = state_12133__$1;(statearr_12169_12201[2] = null);
(statearr_12169_12201[1] = 2);
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
}
}
}
}
}
}
});})(c__5638__auto___12177,mults,ensure_mult,p))
;return ((function (switch__5623__auto__,c__5638__auto___12177,mults,ensure_mult,p){
return (function() {
var state_machine__5624__auto__ = null;
var state_machine__5624__auto____0 = (function (){var statearr_12173 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_12173[0] = state_machine__5624__auto__);
(statearr_12173[1] = 1);
return statearr_12173;
});
var state_machine__5624__auto____1 = (function (state_12133){while(true){
var ret_value__5625__auto__ = (function (){try{while(true){
var result__5626__auto__ = switch__5623__auto__.call(null,state_12133);if(cljs.core.keyword_identical_QMARK_.call(null,result__5626__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5626__auto__;
}
break;
}
}catch (e12174){if((e12174 instanceof Object))
{var ex__5627__auto__ = e12174;var statearr_12175_12202 = state_12133;(statearr_12175_12202[5] = ex__5627__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12133);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e12174;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5625__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__12203 = state_12133;
state_12133 = G__12203;
continue;
}
} else
{return ret_value__5625__auto__;
}
break;
}
});
state_machine__5624__auto__ = function(state_12133){
switch(arguments.length){
case 0:
return state_machine__5624__auto____0.call(this);
case 1:
return state_machine__5624__auto____1.call(this,state_12133);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5624__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5624__auto____0;
state_machine__5624__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5624__auto____1;
return state_machine__5624__auto__;
})()
;})(switch__5623__auto__,c__5638__auto___12177,mults,ensure_mult,p))
})();var state__5640__auto__ = (function (){var statearr_12176 = f__5639__auto__.call(null);(statearr_12176[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5638__auto___12177);
return statearr_12176;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5640__auto__);
});})(c__5638__auto___12177,mults,ensure_mult,p))
);
return p;
});
pub = function(ch,topic_fn,buf_fn){
switch(arguments.length){
case 2:
return pub__2.call(this,ch,topic_fn);
case 3:
return pub__3.call(this,ch,topic_fn,buf_fn);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
pub.cljs$core$IFn$_invoke$arity$2 = pub__2;
pub.cljs$core$IFn$_invoke$arity$3 = pub__3;
return pub;
})()
;
/**
* Subscribes a channel to a topic of a pub.
* 
* By default the channel will be closed when the source closes,
* but can be determined by the close? parameter.
*/
cljs.core.async.sub = (function() {
var sub = null;
var sub__3 = (function (p,topic,ch){return sub.call(null,p,topic,ch,true);
});
var sub__4 = (function (p,topic,ch,close_QMARK_){return cljs.core.async.sub_STAR_.call(null,p,topic,ch,close_QMARK_);
});
sub = function(p,topic,ch,close_QMARK_){
switch(arguments.length){
case 3:
return sub__3.call(this,p,topic,ch);
case 4:
return sub__4.call(this,p,topic,ch,close_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
sub.cljs$core$IFn$_invoke$arity$3 = sub__3;
sub.cljs$core$IFn$_invoke$arity$4 = sub__4;
return sub;
})()
;
/**
* Unsubscribes a channel from a topic of a pub
*/
cljs.core.async.unsub = (function unsub(p,topic,ch){return cljs.core.async.unsub_STAR_.call(null,p,topic,ch);
});
/**
* Unsubscribes all channels from a pub, or a topic of a pub
*/
cljs.core.async.unsub_all = (function() {
var unsub_all = null;
var unsub_all__1 = (function (p){return cljs.core.async.unsub_all_STAR_.call(null,p);
});
var unsub_all__2 = (function (p,topic){return cljs.core.async.unsub_all_STAR_.call(null,p,topic);
});
unsub_all = function(p,topic){
switch(arguments.length){
case 1:
return unsub_all__1.call(this,p);
case 2:
return unsub_all__2.call(this,p,topic);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
unsub_all.cljs$core$IFn$_invoke$arity$1 = unsub_all__1;
unsub_all.cljs$core$IFn$_invoke$arity$2 = unsub_all__2;
return unsub_all;
})()
;
/**
* Takes a function and a collection of source channels, and returns a
* channel which contains the values produced by applying f to the set
* of first items taken from each source channel, followed by applying
* f to the set of second items from each channel, until any one of the
* channels is closed, at which point the output channel will be
* closed. The returned channel will be unbuffered by default, or a
* buf-or-n can be supplied
*/
cljs.core.async.map = (function() {
var map = null;
var map__2 = (function (f,chs){return map.call(null,f,chs,null);
});
var map__3 = (function (f,chs,buf_or_n){var chs__$1 = cljs.core.vec.call(null,chs);var out = cljs.core.async.chan.call(null,buf_or_n);var cnt = cljs.core.count.call(null,chs__$1);var rets = cljs.core.object_array.call(null,cnt);var dchan = cljs.core.async.chan.call(null,1);var dctr = cljs.core.atom.call(null,null);var done = cljs.core.mapv.call(null,((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (i){return ((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (ret){(rets[i] = ret);
if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === 0))
{return cljs.core.async.put_BANG_.call(null,dchan,rets.slice(0));
} else
{return null;
}
});
;})(chs__$1,out,cnt,rets,dchan,dctr))
});})(chs__$1,out,cnt,rets,dchan,dctr))
,cljs.core.range.call(null,cnt));var c__5638__auto___12340 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__5638__auto___12340,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){var f__5639__auto__ = (function (){var switch__5623__auto__ = ((function (c__5638__auto___12340,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_12310){var state_val_12311 = (state_12310[1]);if((state_val_12311 === 1))
{var state_12310__$1 = state_12310;var statearr_12312_12341 = state_12310__$1;(statearr_12312_12341[2] = null);
(statearr_12312_12341[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12311 === 2))
{var inst_12273 = cljs.core.reset_BANG_.call(null,dctr,cnt);var inst_12274 = 0;var state_12310__$1 = (function (){var statearr_12313 = state_12310;(statearr_12313[7] = inst_12273);
(statearr_12313[8] = inst_12274);
return statearr_12313;
})();var statearr_12314_12342 = state_12310__$1;(statearr_12314_12342[2] = null);
(statearr_12314_12342[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12311 === 3))
{var inst_12308 = (state_12310[2]);var state_12310__$1 = state_12310;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12310__$1,inst_12308);
} else
{if((state_val_12311 === 4))
{var inst_12274 = (state_12310[8]);var inst_12276 = (inst_12274 < cnt);var state_12310__$1 = state_12310;if(cljs.core.truth_(inst_12276))
{var statearr_12315_12343 = state_12310__$1;(statearr_12315_12343[1] = 6);
} else
{var statearr_12316_12344 = state_12310__$1;(statearr_12316_12344[1] = 7);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12311 === 5))
{var inst_12294 = (state_12310[2]);var state_12310__$1 = (function (){var statearr_12317 = state_12310;(statearr_12317[9] = inst_12294);
return statearr_12317;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12310__$1,12,dchan);
} else
{if((state_val_12311 === 6))
{var state_12310__$1 = state_12310;var statearr_12318_12345 = state_12310__$1;(statearr_12318_12345[2] = null);
(statearr_12318_12345[1] = 11);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12311 === 7))
{var state_12310__$1 = state_12310;var statearr_12319_12346 = state_12310__$1;(statearr_12319_12346[2] = null);
(statearr_12319_12346[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12311 === 8))
{var inst_12292 = (state_12310[2]);var state_12310__$1 = state_12310;var statearr_12320_12347 = state_12310__$1;(statearr_12320_12347[2] = inst_12292);
(statearr_12320_12347[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12311 === 9))
{var inst_12274 = (state_12310[8]);var inst_12287 = (state_12310[2]);var inst_12288 = (inst_12274 + 1);var inst_12274__$1 = inst_12288;var state_12310__$1 = (function (){var statearr_12321 = state_12310;(statearr_12321[8] = inst_12274__$1);
(statearr_12321[10] = inst_12287);
return statearr_12321;
})();var statearr_12322_12348 = state_12310__$1;(statearr_12322_12348[2] = null);
(statearr_12322_12348[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12311 === 10))
{var inst_12278 = (state_12310[2]);var inst_12279 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var state_12310__$1 = (function (){var statearr_12323 = state_12310;(statearr_12323[11] = inst_12278);
return statearr_12323;
})();var statearr_12324_12349 = state_12310__$1;(statearr_12324_12349[2] = inst_12279);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12310__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12311 === 11))
{var inst_12274 = (state_12310[8]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_12310,10,Object,null,9);var inst_12283 = chs__$1.call(null,inst_12274);var inst_12284 = done.call(null,inst_12274);var inst_12285 = cljs.core.async.take_BANG_.call(null,inst_12283,inst_12284);var state_12310__$1 = state_12310;var statearr_12325_12350 = state_12310__$1;(statearr_12325_12350[2] = inst_12285);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12310__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12311 === 12))
{var inst_12296 = (state_12310[12]);var inst_12296__$1 = (state_12310[2]);var inst_12297 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_12296__$1);var state_12310__$1 = (function (){var statearr_12326 = state_12310;(statearr_12326[12] = inst_12296__$1);
return statearr_12326;
})();if(cljs.core.truth_(inst_12297))
{var statearr_12327_12351 = state_12310__$1;(statearr_12327_12351[1] = 13);
} else
{var statearr_12328_12352 = state_12310__$1;(statearr_12328_12352[1] = 14);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12311 === 13))
{var inst_12299 = cljs.core.async.close_BANG_.call(null,out);var state_12310__$1 = state_12310;var statearr_12329_12353 = state_12310__$1;(statearr_12329_12353[2] = inst_12299);
(statearr_12329_12353[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12311 === 14))
{var inst_12296 = (state_12310[12]);var inst_12301 = cljs.core.apply.call(null,f,inst_12296);var state_12310__$1 = state_12310;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_12310__$1,16,out,inst_12301);
} else
{if((state_val_12311 === 15))
{var inst_12306 = (state_12310[2]);var state_12310__$1 = state_12310;var statearr_12330_12354 = state_12310__$1;(statearr_12330_12354[2] = inst_12306);
(statearr_12330_12354[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12311 === 16))
{var inst_12303 = (state_12310[2]);var state_12310__$1 = (function (){var statearr_12331 = state_12310;(statearr_12331[13] = inst_12303);
return statearr_12331;
})();var statearr_12332_12355 = state_12310__$1;(statearr_12332_12355[2] = null);
(statearr_12332_12355[1] = 2);
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
});})(c__5638__auto___12340,chs__$1,out,cnt,rets,dchan,dctr,done))
;return ((function (switch__5623__auto__,c__5638__auto___12340,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var state_machine__5624__auto__ = null;
var state_machine__5624__auto____0 = (function (){var statearr_12336 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_12336[0] = state_machine__5624__auto__);
(statearr_12336[1] = 1);
return statearr_12336;
});
var state_machine__5624__auto____1 = (function (state_12310){while(true){
var ret_value__5625__auto__ = (function (){try{while(true){
var result__5626__auto__ = switch__5623__auto__.call(null,state_12310);if(cljs.core.keyword_identical_QMARK_.call(null,result__5626__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5626__auto__;
}
break;
}
}catch (e12337){if((e12337 instanceof Object))
{var ex__5627__auto__ = e12337;var statearr_12338_12356 = state_12310;(statearr_12338_12356[5] = ex__5627__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12310);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e12337;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5625__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__12357 = state_12310;
state_12310 = G__12357;
continue;
}
} else
{return ret_value__5625__auto__;
}
break;
}
});
state_machine__5624__auto__ = function(state_12310){
switch(arguments.length){
case 0:
return state_machine__5624__auto____0.call(this);
case 1:
return state_machine__5624__auto____1.call(this,state_12310);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5624__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5624__auto____0;
state_machine__5624__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5624__auto____1;
return state_machine__5624__auto__;
})()
;})(switch__5623__auto__,c__5638__auto___12340,chs__$1,out,cnt,rets,dchan,dctr,done))
})();var state__5640__auto__ = (function (){var statearr_12339 = f__5639__auto__.call(null);(statearr_12339[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5638__auto___12340);
return statearr_12339;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5640__auto__);
});})(c__5638__auto___12340,chs__$1,out,cnt,rets,dchan,dctr,done))
);
return out;
});
map = function(f,chs,buf_or_n){
switch(arguments.length){
case 2:
return map__2.call(this,f,chs);
case 3:
return map__3.call(this,f,chs,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
map.cljs$core$IFn$_invoke$arity$2 = map__2;
map.cljs$core$IFn$_invoke$arity$3 = map__3;
return map;
})()
;
/**
* Takes a collection of source channels and returns a channel which
* contains all values taken from them. The returned channel will be
* unbuffered by default, or a buf-or-n can be supplied. The channel
* will close after all the source channels have closed.
*/
cljs.core.async.merge = (function() {
var merge = null;
var merge__1 = (function (chs){return merge.call(null,chs,null);
});
var merge__2 = (function (chs,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__5638__auto___12465 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__5638__auto___12465,out){
return (function (){var f__5639__auto__ = (function (){var switch__5623__auto__ = ((function (c__5638__auto___12465,out){
return (function (state_12441){var state_val_12442 = (state_12441[1]);if((state_val_12442 === 1))
{var inst_12412 = cljs.core.vec.call(null,chs);var inst_12413 = inst_12412;var state_12441__$1 = (function (){var statearr_12443 = state_12441;(statearr_12443[7] = inst_12413);
return statearr_12443;
})();var statearr_12444_12466 = state_12441__$1;(statearr_12444_12466[2] = null);
(statearr_12444_12466[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12442 === 2))
{var inst_12413 = (state_12441[7]);var inst_12415 = cljs.core.count.call(null,inst_12413);var inst_12416 = (inst_12415 > 0);var state_12441__$1 = state_12441;if(cljs.core.truth_(inst_12416))
{var statearr_12445_12467 = state_12441__$1;(statearr_12445_12467[1] = 4);
} else
{var statearr_12446_12468 = state_12441__$1;(statearr_12446_12468[1] = 5);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12442 === 3))
{var inst_12439 = (state_12441[2]);var state_12441__$1 = state_12441;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12441__$1,inst_12439);
} else
{if((state_val_12442 === 4))
{var inst_12413 = (state_12441[7]);var state_12441__$1 = state_12441;return cljs.core.async.impl.ioc_helpers.ioc_alts_BANG_.call(null,state_12441__$1,7,inst_12413);
} else
{if((state_val_12442 === 5))
{var inst_12435 = cljs.core.async.close_BANG_.call(null,out);var state_12441__$1 = state_12441;var statearr_12447_12469 = state_12441__$1;(statearr_12447_12469[2] = inst_12435);
(statearr_12447_12469[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12442 === 6))
{var inst_12437 = (state_12441[2]);var state_12441__$1 = state_12441;var statearr_12448_12470 = state_12441__$1;(statearr_12448_12470[2] = inst_12437);
(statearr_12448_12470[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12442 === 7))
{var inst_12421 = (state_12441[8]);var inst_12420 = (state_12441[9]);var inst_12420__$1 = (state_12441[2]);var inst_12421__$1 = cljs.core.nth.call(null,inst_12420__$1,0,null);var inst_12422 = cljs.core.nth.call(null,inst_12420__$1,1,null);var inst_12423 = (inst_12421__$1 == null);var state_12441__$1 = (function (){var statearr_12449 = state_12441;(statearr_12449[10] = inst_12422);
(statearr_12449[8] = inst_12421__$1);
(statearr_12449[9] = inst_12420__$1);
return statearr_12449;
})();if(cljs.core.truth_(inst_12423))
{var statearr_12450_12471 = state_12441__$1;(statearr_12450_12471[1] = 8);
} else
{var statearr_12451_12472 = state_12441__$1;(statearr_12451_12472[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12442 === 8))
{var inst_12413 = (state_12441[7]);var inst_12422 = (state_12441[10]);var inst_12421 = (state_12441[8]);var inst_12420 = (state_12441[9]);var inst_12425 = (function (){var c = inst_12422;var v = inst_12421;var vec__12418 = inst_12420;var cs = inst_12413;return ((function (c,v,vec__12418,cs,inst_12413,inst_12422,inst_12421,inst_12420,state_val_12442,c__5638__auto___12465,out){
return (function (p1__12358_SHARP_){return cljs.core.not_EQ_.call(null,c,p1__12358_SHARP_);
});
;})(c,v,vec__12418,cs,inst_12413,inst_12422,inst_12421,inst_12420,state_val_12442,c__5638__auto___12465,out))
})();var inst_12426 = cljs.core.filterv.call(null,inst_12425,inst_12413);var inst_12413__$1 = inst_12426;var state_12441__$1 = (function (){var statearr_12452 = state_12441;(statearr_12452[7] = inst_12413__$1);
return statearr_12452;
})();var statearr_12453_12473 = state_12441__$1;(statearr_12453_12473[2] = null);
(statearr_12453_12473[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12442 === 9))
{var inst_12421 = (state_12441[8]);var state_12441__$1 = state_12441;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_12441__$1,11,out,inst_12421);
} else
{if((state_val_12442 === 10))
{var inst_12433 = (state_12441[2]);var state_12441__$1 = state_12441;var statearr_12455_12474 = state_12441__$1;(statearr_12455_12474[2] = inst_12433);
(statearr_12455_12474[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12442 === 11))
{var inst_12413 = (state_12441[7]);var inst_12430 = (state_12441[2]);var tmp12454 = inst_12413;var inst_12413__$1 = tmp12454;var state_12441__$1 = (function (){var statearr_12456 = state_12441;(statearr_12456[11] = inst_12430);
(statearr_12456[7] = inst_12413__$1);
return statearr_12456;
})();var statearr_12457_12475 = state_12441__$1;(statearr_12457_12475[2] = null);
(statearr_12457_12475[1] = 2);
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
});})(c__5638__auto___12465,out))
;return ((function (switch__5623__auto__,c__5638__auto___12465,out){
return (function() {
var state_machine__5624__auto__ = null;
var state_machine__5624__auto____0 = (function (){var statearr_12461 = [null,null,null,null,null,null,null,null,null,null,null,null];(statearr_12461[0] = state_machine__5624__auto__);
(statearr_12461[1] = 1);
return statearr_12461;
});
var state_machine__5624__auto____1 = (function (state_12441){while(true){
var ret_value__5625__auto__ = (function (){try{while(true){
var result__5626__auto__ = switch__5623__auto__.call(null,state_12441);if(cljs.core.keyword_identical_QMARK_.call(null,result__5626__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5626__auto__;
}
break;
}
}catch (e12462){if((e12462 instanceof Object))
{var ex__5627__auto__ = e12462;var statearr_12463_12476 = state_12441;(statearr_12463_12476[5] = ex__5627__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12441);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e12462;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5625__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__12477 = state_12441;
state_12441 = G__12477;
continue;
}
} else
{return ret_value__5625__auto__;
}
break;
}
});
state_machine__5624__auto__ = function(state_12441){
switch(arguments.length){
case 0:
return state_machine__5624__auto____0.call(this);
case 1:
return state_machine__5624__auto____1.call(this,state_12441);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5624__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5624__auto____0;
state_machine__5624__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5624__auto____1;
return state_machine__5624__auto__;
})()
;})(switch__5623__auto__,c__5638__auto___12465,out))
})();var state__5640__auto__ = (function (){var statearr_12464 = f__5639__auto__.call(null);(statearr_12464[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5638__auto___12465);
return statearr_12464;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5640__auto__);
});})(c__5638__auto___12465,out))
);
return out;
});
merge = function(chs,buf_or_n){
switch(arguments.length){
case 1:
return merge__1.call(this,chs);
case 2:
return merge__2.call(this,chs,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
merge.cljs$core$IFn$_invoke$arity$1 = merge__1;
merge.cljs$core$IFn$_invoke$arity$2 = merge__2;
return merge;
})()
;
/**
* Returns a channel containing the single (collection) result of the
* items taken from the channel conjoined to the supplied
* collection. ch must close before into produces a result.
*/
cljs.core.async.into = (function into(coll,ch){return cljs.core.async.reduce.call(null,cljs.core.conj,coll,ch);
});
/**
* Returns a channel that will return, at most, n items from ch. After n items
* have been returned, or ch has been closed, the return chanel will close.
* 
* The output channel is unbuffered by default, unless buf-or-n is given.
*/
cljs.core.async.take = (function() {
var take = null;
var take__2 = (function (n,ch){return take.call(null,n,ch,null);
});
var take__3 = (function (n,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__5638__auto___12570 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__5638__auto___12570,out){
return (function (){var f__5639__auto__ = (function (){var switch__5623__auto__ = ((function (c__5638__auto___12570,out){
return (function (state_12547){var state_val_12548 = (state_12547[1]);if((state_val_12548 === 1))
{var inst_12524 = 0;var state_12547__$1 = (function (){var statearr_12549 = state_12547;(statearr_12549[7] = inst_12524);
return statearr_12549;
})();var statearr_12550_12571 = state_12547__$1;(statearr_12550_12571[2] = null);
(statearr_12550_12571[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12548 === 2))
{var inst_12524 = (state_12547[7]);var inst_12526 = (inst_12524 < n);var state_12547__$1 = state_12547;if(cljs.core.truth_(inst_12526))
{var statearr_12551_12572 = state_12547__$1;(statearr_12551_12572[1] = 4);
} else
{var statearr_12552_12573 = state_12547__$1;(statearr_12552_12573[1] = 5);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12548 === 3))
{var inst_12544 = (state_12547[2]);var inst_12545 = cljs.core.async.close_BANG_.call(null,out);var state_12547__$1 = (function (){var statearr_12553 = state_12547;(statearr_12553[8] = inst_12544);
return statearr_12553;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12547__$1,inst_12545);
} else
{if((state_val_12548 === 4))
{var state_12547__$1 = state_12547;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12547__$1,7,ch);
} else
{if((state_val_12548 === 5))
{var state_12547__$1 = state_12547;var statearr_12554_12574 = state_12547__$1;(statearr_12554_12574[2] = null);
(statearr_12554_12574[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12548 === 6))
{var inst_12542 = (state_12547[2]);var state_12547__$1 = state_12547;var statearr_12555_12575 = state_12547__$1;(statearr_12555_12575[2] = inst_12542);
(statearr_12555_12575[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12548 === 7))
{var inst_12529 = (state_12547[9]);var inst_12529__$1 = (state_12547[2]);var inst_12530 = (inst_12529__$1 == null);var inst_12531 = cljs.core.not.call(null,inst_12530);var state_12547__$1 = (function (){var statearr_12556 = state_12547;(statearr_12556[9] = inst_12529__$1);
return statearr_12556;
})();if(inst_12531)
{var statearr_12557_12576 = state_12547__$1;(statearr_12557_12576[1] = 8);
} else
{var statearr_12558_12577 = state_12547__$1;(statearr_12558_12577[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12548 === 8))
{var inst_12529 = (state_12547[9]);var state_12547__$1 = state_12547;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_12547__$1,11,out,inst_12529);
} else
{if((state_val_12548 === 9))
{var state_12547__$1 = state_12547;var statearr_12559_12578 = state_12547__$1;(statearr_12559_12578[2] = null);
(statearr_12559_12578[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12548 === 10))
{var inst_12539 = (state_12547[2]);var state_12547__$1 = state_12547;var statearr_12560_12579 = state_12547__$1;(statearr_12560_12579[2] = inst_12539);
(statearr_12560_12579[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12548 === 11))
{var inst_12524 = (state_12547[7]);var inst_12534 = (state_12547[2]);var inst_12535 = (inst_12524 + 1);var inst_12524__$1 = inst_12535;var state_12547__$1 = (function (){var statearr_12561 = state_12547;(statearr_12561[10] = inst_12534);
(statearr_12561[7] = inst_12524__$1);
return statearr_12561;
})();var statearr_12562_12580 = state_12547__$1;(statearr_12562_12580[2] = null);
(statearr_12562_12580[1] = 2);
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
});})(c__5638__auto___12570,out))
;return ((function (switch__5623__auto__,c__5638__auto___12570,out){
return (function() {
var state_machine__5624__auto__ = null;
var state_machine__5624__auto____0 = (function (){var statearr_12566 = [null,null,null,null,null,null,null,null,null,null,null];(statearr_12566[0] = state_machine__5624__auto__);
(statearr_12566[1] = 1);
return statearr_12566;
});
var state_machine__5624__auto____1 = (function (state_12547){while(true){
var ret_value__5625__auto__ = (function (){try{while(true){
var result__5626__auto__ = switch__5623__auto__.call(null,state_12547);if(cljs.core.keyword_identical_QMARK_.call(null,result__5626__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5626__auto__;
}
break;
}
}catch (e12567){if((e12567 instanceof Object))
{var ex__5627__auto__ = e12567;var statearr_12568_12581 = state_12547;(statearr_12568_12581[5] = ex__5627__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12547);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e12567;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5625__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__12582 = state_12547;
state_12547 = G__12582;
continue;
}
} else
{return ret_value__5625__auto__;
}
break;
}
});
state_machine__5624__auto__ = function(state_12547){
switch(arguments.length){
case 0:
return state_machine__5624__auto____0.call(this);
case 1:
return state_machine__5624__auto____1.call(this,state_12547);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5624__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5624__auto____0;
state_machine__5624__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5624__auto____1;
return state_machine__5624__auto__;
})()
;})(switch__5623__auto__,c__5638__auto___12570,out))
})();var state__5640__auto__ = (function (){var statearr_12569 = f__5639__auto__.call(null);(statearr_12569[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5638__auto___12570);
return statearr_12569;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5640__auto__);
});})(c__5638__auto___12570,out))
);
return out;
});
take = function(n,ch,buf_or_n){
switch(arguments.length){
case 2:
return take__2.call(this,n,ch);
case 3:
return take__3.call(this,n,ch,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
take.cljs$core$IFn$_invoke$arity$2 = take__2;
take.cljs$core$IFn$_invoke$arity$3 = take__3;
return take;
})()
;
/**
* Returns a channel that will contain values from ch. Consecutive duplicate
* values will be dropped.
* 
* The output channel is unbuffered by default, unless buf-or-n is given.
*/
cljs.core.async.unique = (function() {
var unique = null;
var unique__1 = (function (ch){return unique.call(null,ch,null);
});
var unique__2 = (function (ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__5638__auto___12679 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__5638__auto___12679,out){
return (function (){var f__5639__auto__ = (function (){var switch__5623__auto__ = ((function (c__5638__auto___12679,out){
return (function (state_12654){var state_val_12655 = (state_12654[1]);if((state_val_12655 === 1))
{var inst_12631 = null;var state_12654__$1 = (function (){var statearr_12656 = state_12654;(statearr_12656[7] = inst_12631);
return statearr_12656;
})();var statearr_12657_12680 = state_12654__$1;(statearr_12657_12680[2] = null);
(statearr_12657_12680[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12655 === 2))
{var state_12654__$1 = state_12654;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12654__$1,4,ch);
} else
{if((state_val_12655 === 3))
{var inst_12651 = (state_12654[2]);var inst_12652 = cljs.core.async.close_BANG_.call(null,out);var state_12654__$1 = (function (){var statearr_12658 = state_12654;(statearr_12658[8] = inst_12651);
return statearr_12658;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12654__$1,inst_12652);
} else
{if((state_val_12655 === 4))
{var inst_12634 = (state_12654[9]);var inst_12634__$1 = (state_12654[2]);var inst_12635 = (inst_12634__$1 == null);var inst_12636 = cljs.core.not.call(null,inst_12635);var state_12654__$1 = (function (){var statearr_12659 = state_12654;(statearr_12659[9] = inst_12634__$1);
return statearr_12659;
})();if(inst_12636)
{var statearr_12660_12681 = state_12654__$1;(statearr_12660_12681[1] = 5);
} else
{var statearr_12661_12682 = state_12654__$1;(statearr_12661_12682[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12655 === 5))
{var inst_12631 = (state_12654[7]);var inst_12634 = (state_12654[9]);var inst_12638 = cljs.core._EQ_.call(null,inst_12634,inst_12631);var state_12654__$1 = state_12654;if(inst_12638)
{var statearr_12662_12683 = state_12654__$1;(statearr_12662_12683[1] = 8);
} else
{var statearr_12663_12684 = state_12654__$1;(statearr_12663_12684[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12655 === 6))
{var state_12654__$1 = state_12654;var statearr_12665_12685 = state_12654__$1;(statearr_12665_12685[2] = null);
(statearr_12665_12685[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12655 === 7))
{var inst_12649 = (state_12654[2]);var state_12654__$1 = state_12654;var statearr_12666_12686 = state_12654__$1;(statearr_12666_12686[2] = inst_12649);
(statearr_12666_12686[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12655 === 8))
{var inst_12631 = (state_12654[7]);var tmp12664 = inst_12631;var inst_12631__$1 = tmp12664;var state_12654__$1 = (function (){var statearr_12667 = state_12654;(statearr_12667[7] = inst_12631__$1);
return statearr_12667;
})();var statearr_12668_12687 = state_12654__$1;(statearr_12668_12687[2] = null);
(statearr_12668_12687[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12655 === 9))
{var inst_12634 = (state_12654[9]);var state_12654__$1 = state_12654;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_12654__$1,11,out,inst_12634);
} else
{if((state_val_12655 === 10))
{var inst_12646 = (state_12654[2]);var state_12654__$1 = state_12654;var statearr_12669_12688 = state_12654__$1;(statearr_12669_12688[2] = inst_12646);
(statearr_12669_12688[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12655 === 11))
{var inst_12634 = (state_12654[9]);var inst_12643 = (state_12654[2]);var inst_12631 = inst_12634;var state_12654__$1 = (function (){var statearr_12670 = state_12654;(statearr_12670[7] = inst_12631);
(statearr_12670[10] = inst_12643);
return statearr_12670;
})();var statearr_12671_12689 = state_12654__$1;(statearr_12671_12689[2] = null);
(statearr_12671_12689[1] = 2);
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
});})(c__5638__auto___12679,out))
;return ((function (switch__5623__auto__,c__5638__auto___12679,out){
return (function() {
var state_machine__5624__auto__ = null;
var state_machine__5624__auto____0 = (function (){var statearr_12675 = [null,null,null,null,null,null,null,null,null,null,null];(statearr_12675[0] = state_machine__5624__auto__);
(statearr_12675[1] = 1);
return statearr_12675;
});
var state_machine__5624__auto____1 = (function (state_12654){while(true){
var ret_value__5625__auto__ = (function (){try{while(true){
var result__5626__auto__ = switch__5623__auto__.call(null,state_12654);if(cljs.core.keyword_identical_QMARK_.call(null,result__5626__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5626__auto__;
}
break;
}
}catch (e12676){if((e12676 instanceof Object))
{var ex__5627__auto__ = e12676;var statearr_12677_12690 = state_12654;(statearr_12677_12690[5] = ex__5627__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12654);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e12676;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5625__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__12691 = state_12654;
state_12654 = G__12691;
continue;
}
} else
{return ret_value__5625__auto__;
}
break;
}
});
state_machine__5624__auto__ = function(state_12654){
switch(arguments.length){
case 0:
return state_machine__5624__auto____0.call(this);
case 1:
return state_machine__5624__auto____1.call(this,state_12654);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5624__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5624__auto____0;
state_machine__5624__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5624__auto____1;
return state_machine__5624__auto__;
})()
;})(switch__5623__auto__,c__5638__auto___12679,out))
})();var state__5640__auto__ = (function (){var statearr_12678 = f__5639__auto__.call(null);(statearr_12678[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5638__auto___12679);
return statearr_12678;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5640__auto__);
});})(c__5638__auto___12679,out))
);
return out;
});
unique = function(ch,buf_or_n){
switch(arguments.length){
case 1:
return unique__1.call(this,ch);
case 2:
return unique__2.call(this,ch,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
unique.cljs$core$IFn$_invoke$arity$1 = unique__1;
unique.cljs$core$IFn$_invoke$arity$2 = unique__2;
return unique;
})()
;
/**
* Returns a channel that will contain vectors of n items taken from ch. The
* final vector in the return channel may be smaller than n if ch closed before
* the vector could be completely filled.
* 
* The output channel is unbuffered by default, unless buf-or-n is given
*/
cljs.core.async.partition = (function() {
var partition = null;
var partition__2 = (function (n,ch){return partition.call(null,n,ch,null);
});
var partition__3 = (function (n,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__5638__auto___12826 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__5638__auto___12826,out){
return (function (){var f__5639__auto__ = (function (){var switch__5623__auto__ = ((function (c__5638__auto___12826,out){
return (function (state_12796){var state_val_12797 = (state_12796[1]);if((state_val_12797 === 1))
{var inst_12759 = (new Array(n));var inst_12760 = inst_12759;var inst_12761 = 0;var state_12796__$1 = (function (){var statearr_12798 = state_12796;(statearr_12798[7] = inst_12760);
(statearr_12798[8] = inst_12761);
return statearr_12798;
})();var statearr_12799_12827 = state_12796__$1;(statearr_12799_12827[2] = null);
(statearr_12799_12827[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12797 === 2))
{var state_12796__$1 = state_12796;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12796__$1,4,ch);
} else
{if((state_val_12797 === 3))
{var inst_12794 = (state_12796[2]);var state_12796__$1 = state_12796;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12796__$1,inst_12794);
} else
{if((state_val_12797 === 4))
{var inst_12764 = (state_12796[9]);var inst_12764__$1 = (state_12796[2]);var inst_12765 = (inst_12764__$1 == null);var inst_12766 = cljs.core.not.call(null,inst_12765);var state_12796__$1 = (function (){var statearr_12800 = state_12796;(statearr_12800[9] = inst_12764__$1);
return statearr_12800;
})();if(inst_12766)
{var statearr_12801_12828 = state_12796__$1;(statearr_12801_12828[1] = 5);
} else
{var statearr_12802_12829 = state_12796__$1;(statearr_12802_12829[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12797 === 5))
{var inst_12769 = (state_12796[10]);var inst_12760 = (state_12796[7]);var inst_12764 = (state_12796[9]);var inst_12761 = (state_12796[8]);var inst_12768 = (inst_12760[inst_12761] = inst_12764);var inst_12769__$1 = (inst_12761 + 1);var inst_12770 = (inst_12769__$1 < n);var state_12796__$1 = (function (){var statearr_12803 = state_12796;(statearr_12803[10] = inst_12769__$1);
(statearr_12803[11] = inst_12768);
return statearr_12803;
})();if(cljs.core.truth_(inst_12770))
{var statearr_12804_12830 = state_12796__$1;(statearr_12804_12830[1] = 8);
} else
{var statearr_12805_12831 = state_12796__$1;(statearr_12805_12831[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12797 === 6))
{var inst_12761 = (state_12796[8]);var inst_12782 = (inst_12761 > 0);var state_12796__$1 = state_12796;if(cljs.core.truth_(inst_12782))
{var statearr_12807_12832 = state_12796__$1;(statearr_12807_12832[1] = 12);
} else
{var statearr_12808_12833 = state_12796__$1;(statearr_12808_12833[1] = 13);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12797 === 7))
{var inst_12792 = (state_12796[2]);var state_12796__$1 = state_12796;var statearr_12809_12834 = state_12796__$1;(statearr_12809_12834[2] = inst_12792);
(statearr_12809_12834[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12797 === 8))
{var inst_12769 = (state_12796[10]);var inst_12760 = (state_12796[7]);var tmp12806 = inst_12760;var inst_12760__$1 = tmp12806;var inst_12761 = inst_12769;var state_12796__$1 = (function (){var statearr_12810 = state_12796;(statearr_12810[7] = inst_12760__$1);
(statearr_12810[8] = inst_12761);
return statearr_12810;
})();var statearr_12811_12835 = state_12796__$1;(statearr_12811_12835[2] = null);
(statearr_12811_12835[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12797 === 9))
{var inst_12760 = (state_12796[7]);var inst_12774 = cljs.core.vec.call(null,inst_12760);var state_12796__$1 = state_12796;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_12796__$1,11,out,inst_12774);
} else
{if((state_val_12797 === 10))
{var inst_12780 = (state_12796[2]);var state_12796__$1 = state_12796;var statearr_12812_12836 = state_12796__$1;(statearr_12812_12836[2] = inst_12780);
(statearr_12812_12836[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12797 === 11))
{var inst_12776 = (state_12796[2]);var inst_12777 = (new Array(n));var inst_12760 = inst_12777;var inst_12761 = 0;var state_12796__$1 = (function (){var statearr_12813 = state_12796;(statearr_12813[12] = inst_12776);
(statearr_12813[7] = inst_12760);
(statearr_12813[8] = inst_12761);
return statearr_12813;
})();var statearr_12814_12837 = state_12796__$1;(statearr_12814_12837[2] = null);
(statearr_12814_12837[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12797 === 12))
{var inst_12760 = (state_12796[7]);var inst_12784 = cljs.core.vec.call(null,inst_12760);var state_12796__$1 = state_12796;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_12796__$1,15,out,inst_12784);
} else
{if((state_val_12797 === 13))
{var state_12796__$1 = state_12796;var statearr_12815_12838 = state_12796__$1;(statearr_12815_12838[2] = null);
(statearr_12815_12838[1] = 14);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12797 === 14))
{var inst_12789 = (state_12796[2]);var inst_12790 = cljs.core.async.close_BANG_.call(null,out);var state_12796__$1 = (function (){var statearr_12816 = state_12796;(statearr_12816[13] = inst_12789);
return statearr_12816;
})();var statearr_12817_12839 = state_12796__$1;(statearr_12817_12839[2] = inst_12790);
(statearr_12817_12839[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12797 === 15))
{var inst_12786 = (state_12796[2]);var state_12796__$1 = state_12796;var statearr_12818_12840 = state_12796__$1;(statearr_12818_12840[2] = inst_12786);
(statearr_12818_12840[1] = 14);
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
});})(c__5638__auto___12826,out))
;return ((function (switch__5623__auto__,c__5638__auto___12826,out){
return (function() {
var state_machine__5624__auto__ = null;
var state_machine__5624__auto____0 = (function (){var statearr_12822 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_12822[0] = state_machine__5624__auto__);
(statearr_12822[1] = 1);
return statearr_12822;
});
var state_machine__5624__auto____1 = (function (state_12796){while(true){
var ret_value__5625__auto__ = (function (){try{while(true){
var result__5626__auto__ = switch__5623__auto__.call(null,state_12796);if(cljs.core.keyword_identical_QMARK_.call(null,result__5626__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5626__auto__;
}
break;
}
}catch (e12823){if((e12823 instanceof Object))
{var ex__5627__auto__ = e12823;var statearr_12824_12841 = state_12796;(statearr_12824_12841[5] = ex__5627__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12796);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e12823;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5625__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__12842 = state_12796;
state_12796 = G__12842;
continue;
}
} else
{return ret_value__5625__auto__;
}
break;
}
});
state_machine__5624__auto__ = function(state_12796){
switch(arguments.length){
case 0:
return state_machine__5624__auto____0.call(this);
case 1:
return state_machine__5624__auto____1.call(this,state_12796);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5624__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5624__auto____0;
state_machine__5624__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5624__auto____1;
return state_machine__5624__auto__;
})()
;})(switch__5623__auto__,c__5638__auto___12826,out))
})();var state__5640__auto__ = (function (){var statearr_12825 = f__5639__auto__.call(null);(statearr_12825[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5638__auto___12826);
return statearr_12825;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5640__auto__);
});})(c__5638__auto___12826,out))
);
return out;
});
partition = function(n,ch,buf_or_n){
switch(arguments.length){
case 2:
return partition__2.call(this,n,ch);
case 3:
return partition__3.call(this,n,ch,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
partition.cljs$core$IFn$_invoke$arity$2 = partition__2;
partition.cljs$core$IFn$_invoke$arity$3 = partition__3;
return partition;
})()
;
/**
* Returns a channel that will contain vectors of items taken from ch. New
* vectors will be created whenever (f itm) returns a value that differs from
* the previous item's (f itm).
* 
* The output channel is unbuffered, unless buf-or-n is given
*/
cljs.core.async.partition_by = (function() {
var partition_by = null;
var partition_by__2 = (function (f,ch){return partition_by.call(null,f,ch,null);
});
var partition_by__3 = (function (f,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__5638__auto___12985 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__5638__auto___12985,out){
return (function (){var f__5639__auto__ = (function (){var switch__5623__auto__ = ((function (c__5638__auto___12985,out){
return (function (state_12955){var state_val_12956 = (state_12955[1]);if((state_val_12956 === 1))
{var inst_12914 = [];var inst_12915 = inst_12914;var inst_12916 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",4382193538);var state_12955__$1 = (function (){var statearr_12957 = state_12955;(statearr_12957[7] = inst_12915);
(statearr_12957[8] = inst_12916);
return statearr_12957;
})();var statearr_12958_12986 = state_12955__$1;(statearr_12958_12986[2] = null);
(statearr_12958_12986[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12956 === 2))
{var state_12955__$1 = state_12955;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12955__$1,4,ch);
} else
{if((state_val_12956 === 3))
{var inst_12953 = (state_12955[2]);var state_12955__$1 = state_12955;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12955__$1,inst_12953);
} else
{if((state_val_12956 === 4))
{var inst_12919 = (state_12955[9]);var inst_12919__$1 = (state_12955[2]);var inst_12920 = (inst_12919__$1 == null);var inst_12921 = cljs.core.not.call(null,inst_12920);var state_12955__$1 = (function (){var statearr_12959 = state_12955;(statearr_12959[9] = inst_12919__$1);
return statearr_12959;
})();if(inst_12921)
{var statearr_12960_12987 = state_12955__$1;(statearr_12960_12987[1] = 5);
} else
{var statearr_12961_12988 = state_12955__$1;(statearr_12961_12988[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12956 === 5))
{var inst_12919 = (state_12955[9]);var inst_12916 = (state_12955[8]);var inst_12923 = (state_12955[10]);var inst_12923__$1 = f.call(null,inst_12919);var inst_12924 = cljs.core._EQ_.call(null,inst_12923__$1,inst_12916);var inst_12925 = cljs.core.keyword_identical_QMARK_.call(null,inst_12916,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",4382193538));var inst_12926 = (inst_12924) || (inst_12925);var state_12955__$1 = (function (){var statearr_12962 = state_12955;(statearr_12962[10] = inst_12923__$1);
return statearr_12962;
})();if(cljs.core.truth_(inst_12926))
{var statearr_12963_12989 = state_12955__$1;(statearr_12963_12989[1] = 8);
} else
{var statearr_12964_12990 = state_12955__$1;(statearr_12964_12990[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12956 === 6))
{var inst_12915 = (state_12955[7]);var inst_12940 = inst_12915.length;var inst_12941 = (inst_12940 > 0);var state_12955__$1 = state_12955;if(cljs.core.truth_(inst_12941))
{var statearr_12966_12991 = state_12955__$1;(statearr_12966_12991[1] = 12);
} else
{var statearr_12967_12992 = state_12955__$1;(statearr_12967_12992[1] = 13);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12956 === 7))
{var inst_12951 = (state_12955[2]);var state_12955__$1 = state_12955;var statearr_12968_12993 = state_12955__$1;(statearr_12968_12993[2] = inst_12951);
(statearr_12968_12993[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12956 === 8))
{var inst_12915 = (state_12955[7]);var inst_12919 = (state_12955[9]);var inst_12923 = (state_12955[10]);var inst_12928 = inst_12915.push(inst_12919);var tmp12965 = inst_12915;var inst_12915__$1 = tmp12965;var inst_12916 = inst_12923;var state_12955__$1 = (function (){var statearr_12969 = state_12955;(statearr_12969[7] = inst_12915__$1);
(statearr_12969[8] = inst_12916);
(statearr_12969[11] = inst_12928);
return statearr_12969;
})();var statearr_12970_12994 = state_12955__$1;(statearr_12970_12994[2] = null);
(statearr_12970_12994[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12956 === 9))
{var inst_12915 = (state_12955[7]);var inst_12931 = cljs.core.vec.call(null,inst_12915);var state_12955__$1 = state_12955;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_12955__$1,11,out,inst_12931);
} else
{if((state_val_12956 === 10))
{var inst_12938 = (state_12955[2]);var state_12955__$1 = state_12955;var statearr_12971_12995 = state_12955__$1;(statearr_12971_12995[2] = inst_12938);
(statearr_12971_12995[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12956 === 11))
{var inst_12919 = (state_12955[9]);var inst_12923 = (state_12955[10]);var inst_12933 = (state_12955[2]);var inst_12934 = [];var inst_12935 = inst_12934.push(inst_12919);var inst_12915 = inst_12934;var inst_12916 = inst_12923;var state_12955__$1 = (function (){var statearr_12972 = state_12955;(statearr_12972[7] = inst_12915);
(statearr_12972[8] = inst_12916);
(statearr_12972[12] = inst_12933);
(statearr_12972[13] = inst_12935);
return statearr_12972;
})();var statearr_12973_12996 = state_12955__$1;(statearr_12973_12996[2] = null);
(statearr_12973_12996[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12956 === 12))
{var inst_12915 = (state_12955[7]);var inst_12943 = cljs.core.vec.call(null,inst_12915);var state_12955__$1 = state_12955;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_12955__$1,15,out,inst_12943);
} else
{if((state_val_12956 === 13))
{var state_12955__$1 = state_12955;var statearr_12974_12997 = state_12955__$1;(statearr_12974_12997[2] = null);
(statearr_12974_12997[1] = 14);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12956 === 14))
{var inst_12948 = (state_12955[2]);var inst_12949 = cljs.core.async.close_BANG_.call(null,out);var state_12955__$1 = (function (){var statearr_12975 = state_12955;(statearr_12975[14] = inst_12948);
return statearr_12975;
})();var statearr_12976_12998 = state_12955__$1;(statearr_12976_12998[2] = inst_12949);
(statearr_12976_12998[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12956 === 15))
{var inst_12945 = (state_12955[2]);var state_12955__$1 = state_12955;var statearr_12977_12999 = state_12955__$1;(statearr_12977_12999[2] = inst_12945);
(statearr_12977_12999[1] = 14);
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
});})(c__5638__auto___12985,out))
;return ((function (switch__5623__auto__,c__5638__auto___12985,out){
return (function() {
var state_machine__5624__auto__ = null;
var state_machine__5624__auto____0 = (function (){var statearr_12981 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_12981[0] = state_machine__5624__auto__);
(statearr_12981[1] = 1);
return statearr_12981;
});
var state_machine__5624__auto____1 = (function (state_12955){while(true){
var ret_value__5625__auto__ = (function (){try{while(true){
var result__5626__auto__ = switch__5623__auto__.call(null,state_12955);if(cljs.core.keyword_identical_QMARK_.call(null,result__5626__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5626__auto__;
}
break;
}
}catch (e12982){if((e12982 instanceof Object))
{var ex__5627__auto__ = e12982;var statearr_12983_13000 = state_12955;(statearr_12983_13000[5] = ex__5627__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12955);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e12982;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5625__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__13001 = state_12955;
state_12955 = G__13001;
continue;
}
} else
{return ret_value__5625__auto__;
}
break;
}
});
state_machine__5624__auto__ = function(state_12955){
switch(arguments.length){
case 0:
return state_machine__5624__auto____0.call(this);
case 1:
return state_machine__5624__auto____1.call(this,state_12955);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5624__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5624__auto____0;
state_machine__5624__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5624__auto____1;
return state_machine__5624__auto__;
})()
;})(switch__5623__auto__,c__5638__auto___12985,out))
})();var state__5640__auto__ = (function (){var statearr_12984 = f__5639__auto__.call(null);(statearr_12984[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5638__auto___12985);
return statearr_12984;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5640__auto__);
});})(c__5638__auto___12985,out))
);
return out;
});
partition_by = function(f,ch,buf_or_n){
switch(arguments.length){
case 2:
return partition_by__2.call(this,f,ch);
case 3:
return partition_by__3.call(this,f,ch,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
partition_by.cljs$core$IFn$_invoke$arity$2 = partition_by__2;
partition_by.cljs$core$IFn$_invoke$arity$3 = partition_by__3;
return partition_by;
})()
;
