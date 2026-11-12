var e=Object.create,t=Object.defineProperty,n=Object.getOwnPropertyDescriptor,r=Object.getOwnPropertyNames,i=Object.getPrototypeOf,a=Object.prototype.hasOwnProperty,o=(e,t)=>()=>(t||(e((t={exports:{}}).exports,t,t.exports),e=null),t.exports),s=(e,i,o,s)=>{if(i&&typeof i==`object`||typeof i==`function`)for(var c=r(i),l=0,u=c.length,d;l<u;l++)d=c[l],!a.call(e,d)&&d!==o&&t(e,d,{get:(e=>i[e]).bind(null,d),enumerable:!(s=n(i,d))||s.enumerable});return e},c=(n,r,o)=>(o=n==null?{}:e(i(n)),s(r||!n||!n.__esModule||!a.call(n,`default`)?t(o,`default`,{value:n,enumerable:!0}):o,n)),l=o((e=>{var t=Symbol.for(`react.transitional.element`),n=Symbol.for(`react.portal`),r=Symbol.for(`react.fragment`),i=Symbol.for(`react.strict_mode`),a=Symbol.for(`react.profiler`),o=Symbol.for(`react.consumer`),s=Symbol.for(`react.context`),c=Symbol.for(`react.forward_ref`),l=Symbol.for(`react.suspense`),u=Symbol.for(`react.memo`),d=Symbol.for(`react.lazy`),f=Symbol.for(`react.activity`),p=Symbol.for(`react.view_transition`),m=Symbol.iterator;function h(e){return typeof e!=`object`||!e?null:(e=m&&e[m]||e[`@@iterator`],typeof e==`function`?e:null)}var g={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},_=Object.assign,v={};function y(e,t,n){this.props=e,this.context=t,this.refs=v,this.updater=n||g}y.prototype.isReactComponent={},y.prototype.setState=function(e,t){if(typeof e!=`object`&&typeof e!=`function`&&e!=null)throw Error(`takes an object of state variables to update or a function which returns an object of state variables.`);this.updater.enqueueSetState(this,e,t,`setState`)},y.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,`forceUpdate`)};function b(){}b.prototype=y.prototype;function x(e,t,n){this.props=e,this.context=t,this.refs=v,this.updater=n||g}var S=x.prototype=new b;S.constructor=x,_(S,y.prototype),S.isPureReactComponent=!0;var C=Array.isArray;function w(){}var T={H:null,A:null,T:null,S:null},E=Object.prototype.hasOwnProperty;function D(e,n,r){var i=r.ref;return{$$typeof:t,type:e,key:n,ref:i===void 0?null:i,props:r}}function O(e,t){return D(e.type,t,e.props)}function k(e){return typeof e==`object`&&!!e&&e.$$typeof===t}function A(e){var t={"=":`=0`,":":`=2`};return`$`+e.replace(/[=:]/g,function(e){return t[e]})}var j=/\/+/g;function M(e,t){return typeof e==`object`&&e&&e.key!=null?A(``+e.key):t.toString(36)}function N(e){switch(e.status){case`fulfilled`:return e.value;case`rejected`:throw e.reason;default:switch(typeof e.status==`string`?e.then(w,w):(e.status=`pending`,e.then(function(t){e.status===`pending`&&(e.status=`fulfilled`,e.value=t)},function(t){e.status===`pending`&&(e.status=`rejected`,e.reason=t)})),e.status){case`fulfilled`:return e.value;case`rejected`:throw e.reason}}throw e}function P(e,r,i,a,o){var s=typeof e;(s===`undefined`||s===`boolean`)&&(e=null);var c=!1;if(e===null)c=!0;else switch(s){case`bigint`:case`string`:case`number`:c=!0;break;case`object`:switch(e.$$typeof){case t:case n:c=!0;break;case d:return c=e._init,P(c(e._payload),r,i,a,o)}}if(c)return o=o(e),c=a===``?`.`+M(e,0):a,C(o)?(i=``,c!=null&&(i=c.replace(j,`$&/`)+`/`),P(o,r,i,``,function(e){return e})):o!=null&&(k(o)&&(o=O(o,i+(o.key==null||e&&e.key===o.key?``:(``+o.key).replace(j,`$&/`)+`/`)+c)),r.push(o)),1;c=0;var l=a===``?`.`:a+`:`;if(C(e))for(var u=0;u<e.length;u++)a=e[u],s=l+M(a,u),c+=P(a,r,i,s,o);else if(u=h(e),typeof u==`function`)for(e=u.call(e),u=0;!(a=e.next()).done;)a=a.value,s=l+M(a,u++),c+=P(a,r,i,s,o);else if(s===`object`){if(typeof e.then==`function`)return P(N(e),r,i,a,o);throw r=String(e),Error(`Objects are not valid as a React child (found: `+(r===`[object Object]`?`object with keys {`+Object.keys(e).join(`, `)+`}`:r)+`). If you meant to render a collection of children, use an array instead.`)}return c}function F(e,t,n){if(e==null)return e;var r=[],i=0;return P(e,r,``,``,function(e){return t.call(n,e,i++)}),r}function I(e){if(e._status===-1){var t=e._result,n=t();n.then(function(t){(e._status===0||e._status===-1)&&(e._status=1,e._result=t,n.status===void 0&&(n.status=`fulfilled`,n.value=t))},function(t){(e._status===0||e._status===-1)&&(e._status=2,e._result=t,n.status===void 0&&(n.status=`rejected`,n.reason=t))}),e._status===-1&&(e._status=0,e._result=n)}if(e._status===1)return e._result.default;throw e._result}var ee=typeof reportError==`function`?reportError:function(e){if(typeof window==`object`&&typeof window.ErrorEvent==`function`){var t=new window.ErrorEvent(`error`,{bubbles:!0,cancelable:!0,message:typeof e==`object`&&e&&typeof e.message==`string`?String(e.message):String(e),error:e});if(!window.dispatchEvent(t))return}else if(typeof process==`object`&&typeof process.emit==`function`){process.emit(`uncaughtException`,e);return}console.error(e)};function L(e){var t=T.T,n={};n.types=t===null?null:t.types,T.T=n;try{var r=e(),i=T.S;i!==null&&i(n,r),typeof r==`object`&&r&&typeof r.then==`function`&&r.then(w,ee)}catch(e){ee(e)}finally{t!==null&&n.types!==null&&(t.types=n.types),T.T=t}}function R(e){var t=T.T;if(t!==null){var n=t.types;n===null?t.types=[e]:n.indexOf(e)===-1&&n.push(e)}else L(R.bind(null,e))}var z={map:F,forEach:function(e,t,n){F(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return F(e,function(){t++}),t},toArray:function(e){return F(e,function(e){return e})||[]},only:function(e){if(!k(e))throw Error(`React.Children.only expected to receive a single React element child.`);return e}};e.Activity=f,e.Children=z,e.Component=y,e.Fragment=r,e.Profiler=a,e.PureComponent=x,e.StrictMode=i,e.Suspense=l,e.ViewTransition=p,e.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=T,e.__COMPILER_RUNTIME={__proto__:null,c:function(e){return T.H.useMemoCache(e)}},e.addTransitionType=R,e.cache=function(e){return function(){return e.apply(null,arguments)}},e.cacheSignal=function(){return null},e.cloneElement=function(e,t,n){if(e==null)throw Error(`The argument must be a React element, but you passed `+e+`.`);var r=_({},e.props),i=e.key;if(t!=null)for(a in t.key!==void 0&&(i=``+t.key),t)!E.call(t,a)||a===`key`||a===`__self`||a===`__source`||a===`ref`&&t.ref===void 0||(r[a]=t[a]);var a=arguments.length-2;if(a===1)r.children=n;else if(1<a){for(var o=Array(a),s=0;s<a;s++)o[s]=arguments[s+2];r.children=o}return D(e.type,i,r)},e.createContext=function(e){return e={$$typeof:s,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null},e.Provider=e,e.Consumer={$$typeof:o,_context:e},e},e.createElement=function(e,t,n){var r,i={},a=null;if(t!=null)for(r in t.key!==void 0&&(a=``+t.key),t)E.call(t,r)&&r!==`key`&&r!==`__self`&&r!==`__source`&&(i[r]=t[r]);var o=arguments.length-2;if(o===1)i.children=n;else if(1<o){for(var s=Array(o),c=0;c<o;c++)s[c]=arguments[c+2];i.children=s}if(e&&e.defaultProps)for(r in o=e.defaultProps,o)i[r]===void 0&&(i[r]=o[r]);return D(e,a,i)},e.createRef=function(){return{current:null}},e.forwardRef=function(e){return{$$typeof:c,render:e}},e.isValidElement=k,e.lazy=function(e){return{$$typeof:d,_payload:{_status:-1,_result:e},_init:I}},e.memo=function(e,t){return{$$typeof:u,type:e,compare:t===void 0?null:t}},e.startTransition=L,e.unstable_useCacheRefresh=function(){return T.H.useCacheRefresh()},e.use=function(e){return T.H.use(e)},e.useActionState=function(e,t,n){return T.H.useActionState(e,t,n)},e.useCallback=function(e,t){return T.H.useCallback(e,t)},e.useContext=function(e){return T.H.useContext(e)},e.useDebugValue=function(){},e.useDeferredValue=function(e,t){return T.H.useDeferredValue(e,t)},e.useEffect=function(e,t){return T.H.useEffect(e,t)},e.useEffectEvent=function(e){return T.H.useEffectEvent(e)},e.useId=function(){return T.H.useId()},e.useImperativeHandle=function(e,t,n){return T.H.useImperativeHandle(e,t,n)},e.useInsertionEffect=function(e,t){return T.H.useInsertionEffect(e,t)},e.useLayoutEffect=function(e,t){return T.H.useLayoutEffect(e,t)},e.useMemo=function(e,t){return T.H.useMemo(e,t)},e.useOptimistic=function(e,t){return T.H.useOptimistic(e,t)},e.useReducer=function(e,t,n){return T.H.useReducer(e,t,n)},e.useRef=function(e){return T.H.useRef(e)},e.useState=function(e){return T.H.useState(e)},e.useSyncExternalStore=function(e,t,n){return T.H.useSyncExternalStore(e,t,n)},e.useTransition=function(){return T.H.useTransition()},e.version=`19.3.1`})),u=o(((e,t)=>{t.exports=l()})),d=o((e=>{function t(e,t){var n=e.length;e.push(t);a:for(;0<n;){var r=n-1>>>1,a=e[r];if(0<i(a,t))e[r]=t,e[n]=a,n=r;else break a}}function n(e){return e.length===0?null:e[0]}function r(e){if(e.length===0)return null;var t=e[0],n=e.pop();if(n!==t){e[0]=n;a:for(var r=0,a=e.length,o=a>>>1;r<o;){var s=2*(r+1)-1,c=e[s],l=s+1,u=e[l];if(0>i(c,n))l<a&&0>i(u,c)?(e[r]=u,e[l]=n,r=l):(e[r]=c,e[s]=n,r=s);else if(l<a&&0>i(u,n))e[r]=u,e[l]=n,r=l;else break a}}return t}function i(e,t){var n=e.sortIndex-t.sortIndex;return n===0?e.id-t.id:n}if(e.unstable_now=void 0,typeof performance==`object`&&typeof performance.now==`function`){var a=performance;e.unstable_now=function(){return a.now()}}else{var o=Date,s=o.now();e.unstable_now=function(){return o.now()-s}}var c=[],l=[],u=1,d=null,f=3,p=!1,m=!1,h=!1,g=!1,_=typeof setTimeout==`function`?setTimeout:null,v=typeof clearTimeout==`function`?clearTimeout:null,y=typeof setImmediate<`u`?setImmediate:null;function b(e){for(var i=n(l);i!==null;){if(i.callback===null)r(l);else if(i.startTime<=e)r(l),i.sortIndex=i.expirationTime,t(c,i);else break;i=n(l)}}function x(e){if(h=!1,b(e),!m){if(n(c)!==null)m=!0,S||(S=!0,O());else{var t=n(l);t!==null&&j(x,t.startTime-e)}}}var S=!1,C=-1,w=5,T=-1;function E(){return g?!0:!(e.unstable_now()-T<w)}function D(){if(g=!1,S){var t=e.unstable_now();T=t;var i=!0;try{a:{m=!1,h&&(h=!1,v(C),C=-1),p=!0;var a=f;try{b:{for(b(t),d=n(c);d!==null&&!(d.expirationTime>t&&E());){var o=d.callback;if(typeof o==`function`){d.callback=null,f=d.priorityLevel;var s=o(d.expirationTime<=t);if(t=e.unstable_now(),typeof s==`function`){d.callback=s,b(t),i=!0;break b}d===n(c)&&r(c),b(t)}else r(c);d=n(c)}if(d!==null)i=!0;else{var u=n(l);u!==null&&j(x,u.startTime-t),i=!1}}break a}finally{d=null,f=a,p=!1}i=void 0}}finally{i?O():S=!1}}}var O;if(typeof y==`function`)O=function(){y(D)};else if(typeof MessageChannel<`u`){var k=new MessageChannel,A=k.port2;k.port1.onmessage=D,O=function(){A.postMessage(null)}}else O=function(){_(D,0)};function j(t,n){C=_(function(){t(e.unstable_now())},n)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(e){e.callback=null},e.unstable_forceFrameRate=function(e){0>e||125<e?console.error(`forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported`):w=0<e?Math.floor(1e3/e):5},e.unstable_getCurrentPriorityLevel=function(){return f},e.unstable_next=function(e){switch(f){case 1:case 2:case 3:var t=3;break;default:t=f}var n=f;f=t;try{return e()}finally{f=n}},e.unstable_requestPaint=function(){g=!0},e.unstable_runWithPriority=function(e,t){switch(e){case 1:case 2:case 3:case 4:case 5:break;default:e=3}var n=f;f=e;try{return t()}finally{f=n}},e.unstable_scheduleCallback=function(r,i,a){var o=e.unstable_now();switch(typeof a==`object`&&a?(a=a.delay,a=typeof a==`number`&&0<a?o+a:o):a=o,r){case 1:var s=-1;break;case 2:s=250;break;case 5:s=1073741823;break;case 4:s=1e4;break;default:s=5e3}return s=a+s,r={id:u++,callback:i,priorityLevel:r,startTime:a,expirationTime:s,sortIndex:-1},a>o?(r.sortIndex=a,t(l,r),n(c)===null&&r===n(l)&&(h?(v(C),C=-1):h=!0,j(x,a-o))):(r.sortIndex=s,t(c,r),m||p||(m=!0,S||(S=!0,O()))),r},e.unstable_shouldYield=E,e.unstable_wrapCallback=function(e){var t=f;return function(){var n=f;f=t;try{return e.apply(this,arguments)}finally{f=n}}}})),f=o(((e,t)=>{t.exports=d()})),p=o((e=>{var t=u();function n(e){var t=`https://react.dev/errors/`+e;if(1<arguments.length){t+=`?args[]=`+encodeURIComponent(arguments[1]);for(var n=2;n<arguments.length;n++)t+=`&args[]=`+encodeURIComponent(arguments[n])}return`Minified React error #`+e+`; visit `+t+` for the full message or use the non-minified dev environment for full errors and additional helpful warnings.`}function r(){}var i={d:{f:r,r:function(){throw Error(n(522))},D:r,C:r,L:r,m:r,X:r,S:r,M:r},p:0,findDOMNode:null},a=Symbol.for(`react.portal`),o=Symbol.for(`react.recoverable`),s=Symbol.for(`react.optimistic_key`);function c(e,t,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:a,key:r==null?null:r===s?s:``+r,children:e,containerInfo:t,implementation:n}}var l=t.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function d(e,t){if(e===`font`)return``;if(typeof t==`string`)return t===`use-credentials`?t:``}e.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=i,e.browser=function(e){return{$$typeof:o,_reason:e}},e.createPortal=function(e,t){var r=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)throw Error(n(299));return c(e,t,null,r)},e.flushSync=function(e){var t=l.T,n=i.p;try{if(l.T=null,i.p=2,e)return e()}finally{l.T=t,i.p=n,i.d.f()}},e.preconnect=function(e,t){typeof e==`string`&&(t?(t=t.crossOrigin,t=typeof t==`string`?t===`use-credentials`?t:``:void 0):t=null,i.d.C(e,t))},e.prefetchDNS=function(e){typeof e==`string`&&i.d.D(e)},e.preinit=function(e,t){if(typeof e==`string`&&t&&typeof t.as==`string`){var n=t.as,r=d(n,t.crossOrigin),a=typeof t.integrity==`string`?t.integrity:void 0,o=typeof t.fetchPriority==`string`?t.fetchPriority:void 0;n===`style`?i.d.S(e,typeof t.precedence==`string`?t.precedence:void 0,{crossOrigin:r,integrity:a,fetchPriority:o}):n===`script`&&i.d.X(e,{crossOrigin:r,integrity:a,fetchPriority:o,nonce:typeof t.nonce==`string`?t.nonce:void 0})}},e.preinitModule=function(e,t){if(typeof e==`string`){if(typeof t==`object`&&t){if(t.as==null||t.as===`script`){var n=d(t.as,t.crossOrigin);i.d.M(e,{crossOrigin:n,integrity:typeof t.integrity==`string`?t.integrity:void 0,nonce:typeof t.nonce==`string`?t.nonce:void 0,fetchPriority:typeof t.fetchPriority==`string`?t.fetchPriority:void 0})}}else t??i.d.M(e)}},e.preload=function(e,t){if(typeof e==`string`&&typeof t==`object`&&t&&typeof t.as==`string`){var n=t.as,r=d(n,t.crossOrigin);i.d.L(e,n,{crossOrigin:r,integrity:typeof t.integrity==`string`?t.integrity:void 0,nonce:typeof t.nonce==`string`?t.nonce:void 0,type:typeof t.type==`string`?t.type:void 0,fetchPriority:typeof t.fetchPriority==`string`?t.fetchPriority:void 0,referrerPolicy:typeof t.referrerPolicy==`string`?t.referrerPolicy:void 0,imageSrcSet:typeof t.imageSrcSet==`string`?t.imageSrcSet:void 0,imageSizes:typeof t.imageSizes==`string`?t.imageSizes:void 0,media:typeof t.media==`string`?t.media:void 0})}},e.preloadModule=function(e,t){if(typeof e==`string`){if(t){var n=d(t.as,t.crossOrigin);i.d.m(e,{as:typeof t.as==`string`&&t.as!==`script`?t.as:void 0,crossOrigin:n,integrity:typeof t.integrity==`string`?t.integrity:void 0,nonce:typeof t.nonce==`string`?t.nonce:void 0,fetchPriority:typeof t.fetchPriority==`string`?t.fetchPriority:void 0})}else i.d.m(e)}},e.requestFormReset=function(e){i.d.r(e)},e.unstable_batchedUpdates=function(e,t){return e(t)},e.useFormState=function(e,t,n){return l.H.useFormState(e,t,n)},e.useFormStatus=function(){return l.H.useHostTransitionStatus()},e.version=`19.3.1`})),m=o(((e,t)=>{function n(){if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<`u`&&typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE==`function`)try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(n)}catch(e){console.error(e)}}n(),t.exports=p()})),h=o((e=>{var t=f(),n=u(),r=m();function i(e){var t=`https://react.dev/errors/`+e;if(1<arguments.length){t+=`?args[]=`+encodeURIComponent(arguments[1]);for(var n=2;n<arguments.length;n++)t+=`&args[]=`+encodeURIComponent(arguments[n])}return`Minified React error #`+e+`; visit `+t+` for the full message or use the non-minified dev environment for full errors and additional helpful warnings.`}function a(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function o(e){for(var t=e,n=t;n&&!n.alternate;)t=n,t.flags&4098&&(e=t.return),n=t.return;for(;t.return;)t=t.return;return t.tag===3?e:null}function s(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function c(e){if(e.tag===31){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function l(e){if(o(e)!==e)throw Error(i(188))}function d(e){var t=e.alternate;if(!t){if(t=o(e),t===null)throw Error(i(188));return t===e?e:null}for(var n=e,r=t;;){var a=n.return;if(a===null)break;var s=a.alternate;if(s===null){if(r=a.return,r!==null){n=r;continue}break}if(a.child===s.child){for(s=a.child;s;){if(s===n)return l(a),e;if(s===r)return l(a),t;s=s.sibling}throw Error(i(188))}if(n.return!==r.return)n=a,r=s;else{for(var c=!1,u=a.child;u;){if(u===n){c=!0,n=a,r=s;break}if(u===r){c=!0,r=a,n=s;break}u=u.sibling}if(!c){for(u=s.child;u;){if(u===n){c=!0,n=s,r=a;break}if(u===r){c=!0,r=s,n=a;break}u=u.sibling}if(!c)throw Error(i(189))}}if(n.alternate!==r)throw Error(i(190))}if(n.tag!==3)throw Error(i(188));return n.stateNode.current===n?e:t}function p(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e;for(e=e.child;e!==null;){if(t=p(e),t!==null)return t;e=e.sibling}return null}function h(e,t,n,r,i,a){for(;e!==null;){if((e.tag===5||e.tag===27||e.tag===6)&&n(e,r,i,a)||(e.tag!==22||e.memoizedState===null)&&(t||e.tag!==5&&e.tag!==27)&&h(e.child,t,n,r,i,a))return!0;e=e.sibling}return!1}function g(e){for(e=e.return;e!==null;){if(e.tag===3||e.tag===5||e.tag===27)return e;e=e.return}return null}function _(e){var t=!1;for(e=e.return;e!==null&&(e.tag===4&&(t=!0),e.tag!==3&&e.tag!==5&&e.tag!==27);)e=e.return;return t}function v(e){var t=[null,null],n=g(e);return n===null||y(t,e,n.child,{foundSelf:!1}),t}function y(e,t,n,r){for(;n!==null;){if(n===t)r.foundSelf=!0;else if(n.tag===5||n.tag===27||n.tag===6){if(r.foundSelf)return e[1]=n,!0;e[0]=n}else if((n.tag!==22||n.memoizedState===null)&&y(e,t,n.child,r))return!0;n=n.sibling}return!1}function b(e){switch(e.tag){case 5:case 27:case 6:return e.stateNode;case 3:return e.stateNode.containerInfo;default:throw Error(i(559))}}var x=null,S=null;function C(e,t,n){return e===n||e===t&&(x=e,!0)}function w(e,t,n){return e===n?(S=e,!1):e===t&&(S!==null&&(x=e),!0)}function T(e){if(e===null)return null;do e=e===null?null:e.return;while(e&&e.tag!==5&&e.tag!==27&&e.tag!==3);return e||null}function E(e,t,n){for(var r=0,i=e;i;i=n(i))r++;i=0;for(var a=t;a;a=n(a))i++;for(;0<r-i;)e=n(e),r--;for(;0<i-r;)t=n(t),i--;for(;r--;){if(e===t||t!==null&&e===t.alternate)return e;e=n(e),t=n(t)}return null}var D=Object.assign,O=Symbol.for(`react.element`),k=Symbol.for(`react.transitional.element`),A=Symbol.for(`react.portal`),j=Symbol.for(`react.fragment`),M=Symbol.for(`react.strict_mode`),N=Symbol.for(`react.profiler`),P=Symbol.for(`react.consumer`),F=Symbol.for(`react.context`),I=Symbol.for(`react.forward_ref`),ee=Symbol.for(`react.suspense`),L=Symbol.for(`react.suspense_list`),R=Symbol.for(`react.memo`),z=Symbol.for(`react.lazy`),te=Symbol.for(`react.activity`),ne=Symbol.for(`react.legacy_hidden`),re=Symbol.for(`react.memo_cache_sentinel`),ie=Symbol.for(`react.view_transition`),ae=Symbol.for(`react.recoverable`),oe=Symbol.iterator;function se(e){return typeof e!=`object`||!e?null:(e=oe&&e[oe]||e[`@@iterator`],typeof e==`function`?e:null)}var ce=Symbol.for(`react.client.reference`);function le(e){if(e==null)return null;if(typeof e==`function`)return e.$$typeof===ce?null:e.displayName||e.name||null;if(typeof e==`string`)return e;switch(e){case j:return`Fragment`;case N:return`Profiler`;case M:return`StrictMode`;case ee:return`Suspense`;case L:return`SuspenseList`;case te:return`Activity`;case ie:return`ViewTransition`}if(typeof e==`object`)switch(e.$$typeof){case A:return`Portal`;case F:return e.displayName||`Context`;case P:return(e._context.displayName||`Context`)+`.Consumer`;case I:var t=e.render;return e=e.displayName,e||=(e=t.displayName||t.name||``,e===``?`ForwardRef`:`ForwardRef(`+e+`)`),e;case R:return t=e.displayName||null,t===null?le(e.type)||`Memo`:t;case z:t=e._payload,e=e._init;try{return le(e(t))}catch{}}return null}var ue=Array.isArray,B=n.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,V=r.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,de={pending:!1,data:null,method:null,action:null},fe=[],pe=-1;function me(e){return{current:e}}function he(e){0>pe||(e.current=fe[pe],fe[pe]=null,pe--)}function ge(e,t){pe++,fe[pe]=e.current,e.current=t}var _e=me(null),ve=me(null),ye=me(null),be=me(null);function xe(e,t){switch(ge(ye,t),ge(ve,e),ge(_e,null),t.nodeType){case 9:case 11:e=(e=t.documentElement)&&(e=e.namespaceURI)?up(e):0;break;default:if(e=t.tagName,t=t.namespaceURI)t=up(t),e=dp(t,e);else switch(e){case`svg`:e=1;break;case`math`:e=2;break;default:e=0}}he(_e),ge(_e,e)}function Se(){he(_e),he(ve),he(ye)}function Ce(e){var t=e.memoizedState;t!==null&&(sh._currentValue=t.memoizedState,ge(be,e)),t=_e.current;var n=dp(t,e.type);t!==n&&(ge(ve,e),ge(_e,n))}function we(e){ve.current===e&&(he(_e),he(ve)),be.current===e&&(he(be),sh._currentValue=de)}var Te,Ee;function De(e){if(Te===void 0)try{throw Error()}catch(e){var t=e.stack.trim().match(/\n( *(at )?)/);Te=t&&t[1]||``,Ee=-1<e.stack.indexOf(`
    at`)?` (<anonymous>)`:-1<e.stack.indexOf(`@`)?`@unknown:0:0`:``}return`
`+Te+e+Ee}var Oe=!1;function ke(e,t){if(!e||Oe)return``;Oe=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var r={DetermineComponentFrameRoot:function(){try{if(t){var n=function(){throw Error()};if(Object.defineProperty(n.prototype,"props",{set:function(){throw Error()}}),typeof Reflect==`object`&&Reflect.construct){try{Reflect.construct(n,[])}catch(e){var r=e}Reflect.construct(e,[],n)}else{try{n.call()}catch(e){r=e}n=!1;try{var i=Object.getOwnPropertyDescriptor(e.prototype,`props`);Object.defineProperty(e.prototype,"props",{configurable:!0,set:function(){throw Error()}}),n=!0,new e}finally{n&&(i===void 0?delete e.prototype.props:Object.defineProperty(e.prototype,"props",i))}}}else{try{throw Error()}catch(e){r=e}(n=e())&&typeof n.catch==`function`&&n.catch(function(){})}}catch(e){if(e&&r&&typeof e.stack==`string`)return[e.stack,r.stack]}return[null,null]}};r.DetermineComponentFrameRoot.displayName=`DetermineComponentFrameRoot`;var i=Object.getOwnPropertyDescriptor(r.DetermineComponentFrameRoot,`name`);i&&i.configurable&&Object.defineProperty(r.DetermineComponentFrameRoot,"name",{value:`DetermineComponentFrameRoot`});var a=r.DetermineComponentFrameRoot(),o=a[0],s=a[1];if(o&&s){var c=o.split(`
`),l=s.split(`
`);for(i=r=0;r<c.length&&!c[r].includes(`DetermineComponentFrameRoot`);)r++;for(;i<l.length&&!l[i].includes(`DetermineComponentFrameRoot`);)i++;if(r===c.length||i===l.length)for(r=c.length-1,i=l.length-1;1<=r&&0<=i&&c[r]!==l[i];)i--;for(;1<=r&&0<=i;r--,i--)if(c[r]!==l[i]){if(r!==1||i!==1)do if(r--,i--,0>i||c[r]!==l[i]){var u=`
`+c[r].replace(` at new `,` at `);return e.displayName&&u.includes(`<anonymous>`)&&(u=u.replace(`<anonymous>`,e.displayName)),u}while(1<=r&&0<=i);break}}}finally{Oe=!1,Error.prepareStackTrace=n}return(n=e?e.displayName||e.name:``)?De(n):``}function Ae(e,t){switch(e.tag){case 26:case 27:case 5:return De(e.type);case 16:return De(`Lazy`);case 13:return e.child!==t&&t!==null?De(`Suspense Fallback`):De(`Suspense`);case 19:return De(`SuspenseList`);case 0:case 15:return ke(e.type,!1);case 11:return ke(e.type.render,!1);case 1:return ke(e.type,!0);case 31:return De(`Activity`);case 30:return De(`ViewTransition`);default:return``}}function je(e){try{var t=``,n=null;do t+=Ae(e,n),n=e,e=e.return;while(e);return t}catch(e){return`
Error generating stack: `+e.message+`
`+e.stack}}var Me=Object.prototype.hasOwnProperty,Ne=t.unstable_scheduleCallback,Pe=t.unstable_cancelCallback,Fe=t.unstable_shouldYield,Ie=t.unstable_requestPaint,Le=t.unstable_now,Re=t.unstable_getCurrentPriorityLevel,ze=t.unstable_ImmediatePriority,Be=t.unstable_UserBlockingPriority,Ve=t.unstable_NormalPriority,He=t.unstable_LowPriority,Ue=t.unstable_IdlePriority,We=t.log,Ge=t.unstable_setDisableYieldValue,Ke=null,qe=null;function Je(e){if(typeof We==`function`&&Ge(e),qe&&typeof qe.setStrictMode==`function`)try{qe.setStrictMode(Ke,e)}catch{}}var Ye=Math.clz32?Math.clz32:Qe,Xe=Math.log,Ze=Math.LN2;function Qe(e){return e>>>=0,e===0?32:31-(Xe(e)/Ze|0)|0}var $e=256,et=262144,tt=4194304;function nt(e){var t=e&42;if(t!==0)return t;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return e&-e;case 262144:case 524288:case 1048576:case 2097152:return e&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return e&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function rt(e,t,n){var r=e.pendingLanes;if(r===0)return 0;var i=0,a=e.suspendedLanes,o=e.pingedLanes;e=e.warmLanes;var s=r&134217727;return s===0?(s=r&~a,s===0?o===0?n||(n=r&~e,n!==0&&(i=nt(n))):i=nt(o):i=nt(s)):(r=s&~a,r===0?(o&=s,o===0?n||(n=s&~e,n!==0&&(i=nt(n))):i=nt(o)):i=nt(r)),i===0?0:t!==0&&t!==i&&(t&a)===0&&(a=i&-i,n=t&-t,a>=n||a===32&&n&4194048)?t:i}function it(e,t){return(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&t)===0}function at(e,t){t&8&&(t|=t&32);var n=e.entangledLanes;if(n!==0)for(e=e.entanglements,n&=t;0<n;){var r=31-Ye(n),i=1<<r;t|=e[r],n&=~i}return t}function ot(e,t){switch(e){case 1:case 2:case 4:case 8:case 64:return t+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function st(){var e=tt;return tt<<=1,!(tt&62914560)&&(tt=4194304),e}function ct(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function lt(e,t){e.pendingLanes|=t,t!==268435456&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function ut(e,t,n,r,i,a){var o=e.pendingLanes;e.pendingLanes=n,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=n,e.entangledLanes&=n,e.errorRecoveryDisabledLanes&=n,e.shellSuspendCounter=0;var s=e.entanglements,c=e.expirationTimes,l=e.hiddenUpdates;for(n=o&~n;0<n;){var u=31-Ye(n),d=1<<u;s[u]=0,c[u]=-1;var f=l[u];if(f!==null)for(l[u]=null,u=0;u<f.length;u++){var p=f[u];p!==null&&(p.lane&=-536870913)}n&=~d}r!==0&&dt(e,r,0),a!==0&&i===0&&e.tag!==0&&(e.suspendedLanes|=a&~(o&~t))}function dt(e,t,n){e.pendingLanes|=t,e.suspendedLanes&=~t;var r=31-Ye(t);e.entangledLanes|=t,e.entanglements[r]=e.entanglements[r]|1073741824|n&261930}function ft(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-Ye(n),i=1<<r;i&t|e[r]&t&&(e[r]|=t),n&=~i}}function pt(e,t){var n=t&-t;return n=n&42?1:mt(n),(n&(e.suspendedLanes|t))===0?n:0}function mt(e){switch(e){case 2:e=1;break;case 8:e=4;break;case 32:e=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:e=128;break;case 268435456:e=134217728;break;default:e=0}return e}function ht(e){return e&=-e,2<e?8<e?e&134217727?32:268435456:8:2}function gt(){var e=V.p;return e===0?(e=window.event,e===void 0?32:Ch(e.type)):e}function _t(e,t){var n=V.p;try{return V.p=e,t()}finally{V.p=n}}var vt=Math.random().toString(36).slice(2),yt=`__reactFiber$`+vt,bt=`__reactProps$`+vt,xt=`__reactContainer$`+vt,St=`__reactEvents$`+vt,Ct=`__reactListeners$`+vt,wt=`__reactHandles$`+vt,Tt=`__reactResources$`+vt,Et=`__reactMarker$`+vt,Dt=`__reactLoad$`+vt;function Ot(e){delete e[yt],delete e[bt],delete e[Ct],delete e[wt]}function kt(e){var t;if(t=e[yt])return t;for(var n=e.parentNode;n;){if(t=n[xt]||n[yt]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=fm(e);e!==null;){if(n=e[yt])return n;e=fm(e)}return t}e=n,n=e.parentNode}return null}function At(e){if(e=e[yt]||e[xt]){var t=e.tag;if(t===5||t===6||t===13||t===31||t===26||t===27||t===3)return e}return null}function jt(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e.stateNode;throw Error(i(33))}function Mt(e){var t=e[Tt];return t||=e[Tt]={hoistableStyles:new Map,hoistableScripts:new Map},t}function Nt(e){e[Et]=!0}function Pt(e){e[Dt]=void 0}var Ft=new Set,It={};function Lt(e,t){Rt(e,t),Rt(e+`Capture`,t)}function Rt(e,t){for(It[e]=t,e=0;e<t.length;e++)Ft.add(t[e])}var zt=RegExp(`^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$`),Bt={},Vt={};function Ht(e){return Me.call(Vt,e)?!0:Me.call(Bt,e)?!1:zt.test(e)?Vt[e]=!0:(Bt[e]=!0,!1)}var Ut=!1;function Wt(){var e=Ut;return Ut=!1,e}function Gt(e,t,n){if(Ht(t)){if(n===null)e.removeAttribute(t);else{switch(typeof n){case`undefined`:case`function`:case`symbol`:e.removeAttribute(t);return;case`boolean`:var r=t.toLowerCase().slice(0,5);if(r!==`data-`&&r!==`aria-`){e.removeAttribute(t);return}}e.setAttribute(t,n)}}}function Kt(e,t,n){if(n===null)e.removeAttribute(t);else{switch(typeof n){case`undefined`:case`function`:case`symbol`:case`boolean`:e.removeAttribute(t);return}e.setAttribute(t,n)}}function qt(e,t,n,r){if(r===null)e.removeAttribute(n);else{switch(typeof r){case`undefined`:case`function`:case`symbol`:case`boolean`:e.removeAttribute(n);return}e.setAttributeNS(t,n,r)}}function Jt(e){switch(typeof e){case`bigint`:case`boolean`:case`number`:case`string`:case`undefined`:return e;case`object`:return e;default:return``}}function Yt(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()===`input`&&(t===`checkbox`||t===`radio`)}function Xt(e,t,n){var r=Object.getOwnPropertyDescriptor(e.constructor.prototype,t);if(!e.hasOwnProperty(t)&&r!==void 0&&typeof r.get==`function`&&typeof r.set==`function`){var i=r.get,a=r.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return i.call(this)},set:function(e){n=``+e,a.call(this,e)}}),Object.defineProperty(e,t,{enumerable:r.enumerable}),{getValue:function(){return n},setValue:function(e){n=``+e},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function Zt(e){if(!e._valueTracker){var t=Yt(e)?`checked`:`value`;e._valueTracker=Xt(e,t,``+e[t])}}function Qt(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r=``;return e&&(r=Yt(e)?e.checked?`true`:`false`:e.value),e=r,e!==n&&(t.setValue(e),!0)}var $t=/[\n"\\]/g;function en(e){return e.replace($t,function(e){return`\\`+e.charCodeAt(0).toString(16)+` `})}function tn(e,t,n,r,i,a,o,s){e.name=``,o!=null&&typeof o!=`function`&&typeof o!=`symbol`&&typeof o!=`boolean`?e.type=o:e.removeAttribute(`type`),t==null?o!==`submit`&&o!==`reset`||e.removeAttribute(`value`):o===`number`?(t===0&&e.value===``||e.value!=t)&&(e.value=``+Jt(t)):e.value!==``+Jt(t)&&(e.value=``+Jt(t)),t==null?n==null?r!=null&&e.removeAttribute(`value`):rn(e,Jt(n)):o===`number`&&e.value==t?rn(e,Jt(e.value)):rn(e,Jt(t)),i==null&&a!=null&&(e.defaultChecked=!!a),i!=null&&(e.checked=i&&typeof i!=`function`&&typeof i!=`symbol`),s!=null&&typeof s!=`function`&&typeof s!=`symbol`&&typeof s!=`boolean`?e.name=``+Jt(s):e.removeAttribute(`name`)}function nn(e,t,n,r,i,a,o,s){if(a!=null&&typeof a!=`function`&&typeof a!=`symbol`&&typeof a!=`boolean`&&(e.type=a),t!=null||n!=null){if(!(a!==`submit`&&a!==`reset`||t!=null)){Zt(e);return}n=n==null?``:``+Jt(n),t=t==null?n:``+Jt(t),s||t===e.value||(e.value=t),e.defaultValue=t}r??=i,r=typeof r!=`function`&&typeof r!=`symbol`&&!!r,e.checked=s?e.checked:!!r,e.defaultChecked=!!r,o!=null&&typeof o!=`function`&&typeof o!=`symbol`&&typeof o!=`boolean`&&(e.name=o),Zt(e)}function rn(e,t){e.defaultValue!==``+t&&(e.defaultValue=``+t)}function an(e,t,n,r){if(e=e.options,t){t={};for(var i=0;i<n.length;i++)t[`$`+n[i]]=!0;for(n=0;n<e.length;n++)i=t.hasOwnProperty(`$`+e[n].value),e[n].selected!==i&&(e[n].selected=i),i&&r&&(e[n].defaultSelected=!0)}else{for(n=``+Jt(n),t=null,i=0;i<e.length;i++){if(e[i].value===n){e[i].selected=!0,r&&(e[i].defaultSelected=!0);return}t!==null||e[i].disabled||(t=e[i])}t!==null&&(t.selected=!0)}}function on(e,t,n){t!=null&&(t=``+Jt(t),t!==e.value&&(e.value=t),n==null)?e.defaultValue!==t&&(e.defaultValue=t):e.defaultValue=n==null?``:``+Jt(n)}function sn(e,t,n,r){if(t==null){if(r!=null){if(n!=null)throw Error(i(92));if(ue(r)){if(1<r.length)throw Error(i(93));r=r[0]}n=r}n??=``,t=n}n=Jt(t),e.defaultValue=n,r=e.textContent,r===n&&r!==``&&r!==null&&(e.value=r),Zt(e)}function cn(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var ln=new Set(`animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp`.split(` `));function un(e,t,n){var r=t.indexOf(`--`)===0;n==null||typeof n==`boolean`||n===``?r?e.setProperty(t,``):t===`float`?e.cssFloat=``:e[t]=``:r?e.setProperty(t,n):typeof n!=`number`||n===0||ln.has(t)?t===`float`?e.cssFloat=n:e[t]=(``+n).trim():e[t]=n+`px`}function dn(e,t,n){if(t!=null&&typeof t!=`object`)throw Error(i(62));if(e=e.style,n!=null){for(var r in n)!n.hasOwnProperty(r)||t!=null&&t.hasOwnProperty(r)||(r.indexOf(`--`)===0?e.setProperty(r,``):r===`float`?e.cssFloat=``:e[r]=``,Ut=!0);for(var a in t)r=t[a],t.hasOwnProperty(a)&&n[a]!==r&&(un(e,a,r),Ut=!0)}else for(var o in t)t.hasOwnProperty(o)&&un(e,o,t[o])}function fn(e){if(e.indexOf(`-`)===-1)return!1;switch(e){case`annotation-xml`:case`color-profile`:case`font-face`:case`font-face-src`:case`font-face-uri`:case`font-face-format`:case`font-face-name`:case`missing-glyph`:return!1;default:return!0}}var pn=new Map([[`acceptCharset`,`accept-charset`],[`htmlFor`,`for`],[`httpEquiv`,`http-equiv`],[`crossOrigin`,`crossorigin`],[`accentHeight`,`accent-height`],[`alignmentBaseline`,`alignment-baseline`],[`arabicForm`,`arabic-form`],[`baselineShift`,`baseline-shift`],[`capHeight`,`cap-height`],[`clipPath`,`clip-path`],[`clipRule`,`clip-rule`],[`colorInterpolation`,`color-interpolation`],[`colorInterpolationFilters`,`color-interpolation-filters`],[`colorProfile`,`color-profile`],[`colorRendering`,`color-rendering`],[`dominantBaseline`,`dominant-baseline`],[`enableBackground`,`enable-background`],[`fillOpacity`,`fill-opacity`],[`fillRule`,`fill-rule`],[`floodColor`,`flood-color`],[`floodOpacity`,`flood-opacity`],[`fontFamily`,`font-family`],[`fontSize`,`font-size`],[`fontSizeAdjust`,`font-size-adjust`],[`fontStretch`,`font-stretch`],[`fontStyle`,`font-style`],[`fontVariant`,`font-variant`],[`fontWeight`,`font-weight`],[`glyphName`,`glyph-name`],[`glyphOrientationHorizontal`,`glyph-orientation-horizontal`],[`glyphOrientationVertical`,`glyph-orientation-vertical`],[`horizAdvX`,`horiz-adv-x`],[`horizOriginX`,`horiz-origin-x`],[`imageRendering`,`image-rendering`],[`letterSpacing`,`letter-spacing`],[`lightingColor`,`lighting-color`],[`markerEnd`,`marker-end`],[`markerMid`,`marker-mid`],[`markerStart`,`marker-start`],[`maskType`,`mask-type`],[`overlinePosition`,`overline-position`],[`overlineThickness`,`overline-thickness`],[`paintOrder`,`paint-order`],[`panose-1`,`panose-1`],[`pointerEvents`,`pointer-events`],[`renderingIntent`,`rendering-intent`],[`shapeRendering`,`shape-rendering`],[`stopColor`,`stop-color`],[`stopOpacity`,`stop-opacity`],[`strikethroughPosition`,`strikethrough-position`],[`strikethroughThickness`,`strikethrough-thickness`],[`strokeDasharray`,`stroke-dasharray`],[`strokeDashoffset`,`stroke-dashoffset`],[`strokeLinecap`,`stroke-linecap`],[`strokeLinejoin`,`stroke-linejoin`],[`strokeMiterlimit`,`stroke-miterlimit`],[`strokeOpacity`,`stroke-opacity`],[`strokeWidth`,`stroke-width`],[`textAnchor`,`text-anchor`],[`textDecoration`,`text-decoration`],[`textRendering`,`text-rendering`],[`transformOrigin`,`transform-origin`],[`underlinePosition`,`underline-position`],[`underlineThickness`,`underline-thickness`],[`unicodeBidi`,`unicode-bidi`],[`unicodeRange`,`unicode-range`],[`unitsPerEm`,`units-per-em`],[`vAlphabetic`,`v-alphabetic`],[`vHanging`,`v-hanging`],[`vIdeographic`,`v-ideographic`],[`vMathematical`,`v-mathematical`],[`vectorEffect`,`vector-effect`],[`vertAdvY`,`vert-adv-y`],[`vertOriginX`,`vert-origin-x`],[`vertOriginY`,`vert-origin-y`],[`wordSpacing`,`word-spacing`],[`writingMode`,`writing-mode`],[`xmlnsXlink`,`xmlns:xlink`],[`xHeight`,`x-height`]]),mn=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function hn(e){return mn.test(``+e)?`javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')`:e}function gn(){}var _n=null;function vn(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var yn=null,bn=null;function xn(e){var t=At(e);if(t&&(e=t.stateNode)){var n=e[bt]||null;a:switch(e=t.stateNode,t.type){case`input`:if(tn(e,n.value,n.defaultValue,n.defaultValue,n.checked,n.defaultChecked,n.type,n.name),t=n.name,n.type===`radio`&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll(`input[name="`+en(``+t)+`"][type="radio"]`),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var a=r[bt]||null;if(!a)throw Error(i(90));tn(r,a.value,a.defaultValue,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name)}}for(t=0;t<n.length;t++)r=n[t],r.form===e.form&&Qt(r)}break a;case`textarea`:on(e,n.value,n.defaultValue);break a;case`select`:t=n.value,t!=null&&an(e,!!n.multiple,t,!1)}}}var Sn=!1;function Cn(e,t,n){if(Sn)return e(t,n);Sn=!0;try{return e(t)}finally{if(Sn=!1,(yn!==null||bn!==null)&&(Id(),yn&&(t=yn,e=bn,bn=yn=null,xn(t),e)))for(t=0;t<e.length;t++)xn(e[t])}}function wn(e,t){var n=e.stateNode;if(n===null)return null;var r=n[bt]||null;if(r===null)return null;n=r[t];a:switch(t){case`onClick`:case`onClickCapture`:case`onDoubleClick`:case`onDoubleClickCapture`:case`onMouseDown`:case`onMouseDownCapture`:case`onMouseMove`:case`onMouseMoveCapture`:case`onMouseUp`:case`onMouseUpCapture`:case`onMouseEnter`:(r=!r.disabled)||(e=e.type,r=e!==`button`&&e!==`input`&&e!==`select`&&e!==`textarea`),e=!r;break a;default:e=!1}if(e)return null;if(n&&typeof n!=`function`)throw Error(i(231,t,typeof n));return n}var Tn=typeof window<`u`&&window.document!==void 0&&window.document.createElement!==void 0,En=!1;if(Tn)try{var Dn={};Object.defineProperty(Dn,"passive",{get:function(){En=!0}}),window.addEventListener(`test`,Dn,Dn),window.removeEventListener(`test`,Dn,Dn)}catch{En=!1}var On=null,kn=null,An=null;function jn(){if(An)return An;var e,t=kn,n=t.length,r,i=`value`in On?On.value:On.textContent,a=i.length;for(e=0;e<n&&t[e]===i[e];e++);var o=n-e;for(r=1;r<=o&&t[n-r]===i[a-r];r++);return An=i.slice(e,1<r?1-r:void 0)}function Mn(e){var t=e.keyCode;return`charCode`in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function Nn(){return!0}function Pn(){return!1}function Fn(e){function t(t,n,r,i,a){for(var o in this._reactName=t,this._targetInst=r,this.type=n,this.nativeEvent=i,this.target=a,this.currentTarget=null,e)e.hasOwnProperty(o)&&(t=e[o],this[o]=t?t(i):i[o]);return this.isDefaultPrevented=(i.defaultPrevented==null?!1===i.returnValue:i.defaultPrevented)?Nn:Pn,this.isPropagationStopped=Pn,this}return D(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var e=this.nativeEvent;e&&(e.preventDefault?e.preventDefault():typeof e.returnValue!=`unknown`&&(e.returnValue=!1),this.isDefaultPrevented=Nn)},stopPropagation:function(){var e=this.nativeEvent;e&&(e.stopPropagation?e.stopPropagation():typeof e.cancelBubble!=`unknown`&&(e.cancelBubble=!0),this.isPropagationStopped=Nn)},persist:function(){},isPersistent:Nn}),t}var In={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Ln=Fn(In),Rn=D({},In,{view:0,detail:0}),zn=Fn(Rn),Bn,Vn,Hn,Un=D({},Rn,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:er,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return`movementX`in e?e.movementX:(e!==Hn&&(Hn&&e.type===`mousemove`?(Bn=e.screenX-Hn.screenX,Vn=e.screenY-Hn.screenY):Vn=Bn=0,Hn=e),Bn)},movementY:function(e){return`movementY`in e?e.movementY:Vn}}),Wn=Fn(Un),Gn=Fn(D({},Un,{dataTransfer:0})),Kn=Fn(D({},Rn,{relatedTarget:0})),qn=Fn(D({},In,{animationName:0,elapsedTime:0,pseudoElement:0})),Jn=Fn(D({},In,{clipboardData:function(e){return`clipboardData`in e?e.clipboardData:window.clipboardData}})),Yn=Fn(D({},In,{data:0})),Xn={Esc:`Escape`,Spacebar:` `,Left:`ArrowLeft`,Up:`ArrowUp`,Right:`ArrowRight`,Down:`ArrowDown`,Del:`Delete`,Win:`OS`,Menu:`ContextMenu`,Apps:`ContextMenu`,Scroll:`ScrollLock`,MozPrintableKey:`Unidentified`},Zn={8:`Backspace`,9:`Tab`,12:`Clear`,13:`Enter`,16:`Shift`,17:`Control`,18:`Alt`,19:`Pause`,20:`CapsLock`,27:`Escape`,32:` `,33:`PageUp`,34:`PageDown`,35:`End`,36:`Home`,37:`ArrowLeft`,38:`ArrowUp`,39:`ArrowRight`,40:`ArrowDown`,45:`Insert`,46:`Delete`,112:`F1`,113:`F2`,114:`F3`,115:`F4`,116:`F5`,117:`F6`,118:`F7`,119:`F8`,120:`F9`,121:`F10`,122:`F11`,123:`F12`,144:`NumLock`,145:`ScrollLock`,224:`Meta`},Qn={Alt:`altKey`,Control:`ctrlKey`,Meta:`metaKey`,Shift:`shiftKey`};function $n(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=Qn[e])?!!t[e]:!1}function er(){return $n}var tr=Fn(D({},Rn,{key:function(e){if(e.key){var t=Xn[e.key]||e.key;if(t!==`Unidentified`)return t}return e.type===`keypress`?(e=Mn(e),e===13?`Enter`:String.fromCharCode(e)):e.type===`keydown`||e.type===`keyup`?Zn[e.keyCode]||`Unidentified`:``},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:er,charCode:function(e){return e.type===`keypress`?Mn(e):0},keyCode:function(e){return e.type===`keydown`||e.type===`keyup`?e.keyCode:0},which:function(e){return e.type===`keypress`?Mn(e):e.type===`keydown`||e.type===`keyup`?e.keyCode:0}})),nr=Fn(D({},Un,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0})),rr=Fn(D({},In,{submitter:0})),ir=Fn(D({},Rn,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:er})),ar=Fn(D({},In,{propertyName:0,elapsedTime:0,pseudoElement:0})),or=Fn(D({},Un,{deltaX:function(e){return`deltaX`in e?e.deltaX:`wheelDeltaX`in e?-e.wheelDeltaX:0},deltaY:function(e){return`deltaY`in e?e.deltaY:`wheelDeltaY`in e?-e.wheelDeltaY:`wheelDelta`in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0})),sr=Fn(D({},In,{newState:0,oldState:0,source:0})),cr=[9,13,27,32],lr=Tn&&`CompositionEvent`in window,ur=null;Tn&&`documentMode`in document&&(ur=document.documentMode);var dr=Tn&&`TextEvent`in window&&!ur,fr=Tn&&(!lr||ur&&8<ur&&11>=ur),pr=` `,mr=!1;function hr(e,t){switch(e){case`keyup`:return cr.indexOf(t.keyCode)!==-1;case`keydown`:return t.keyCode!==229;case`keypress`:case`mousedown`:case`focusout`:return!0;default:return!1}}function gr(e){return e=e.detail,typeof e==`object`&&`data`in e?e.data:null}var _r=!1;function vr(e,t){switch(e){case`compositionend`:return gr(t);case`keypress`:return t.which===32?(mr=!0,pr):null;case`textInput`:return e=t.data,e===pr&&mr?null:e;default:return null}}function yr(e,t){if(_r)return e===`compositionend`||!lr&&hr(e,t)?(e=jn(),An=kn=On=null,_r=!1,e):null;switch(e){case`paste`:return null;case`keypress`:if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case`compositionend`:return fr&&t.locale!==`ko`?null:t.data;default:return null}}var br={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function xr(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t===`input`?!!br[e.type]:t===`textarea`}function Sr(e,t,n,r){yn?bn?bn.push(r):bn=[r]:yn=r,t=qf(t,`onChange`),0<t.length&&(n=new Ln(`onChange`,`change`,null,n,r),e.push({event:n,listeners:t}))}var Cr=null,wr=null;function Tr(e){zf(e,0)}function Er(e){if(Qt(jt(e)))return e}function Dr(e,t){if(e===`change`)return t}var Or=!1;if(Tn){var kr;if(Tn){var Ar=`oninput`in document;if(!Ar){var jr=document.createElement(`div`);jr.setAttribute(`oninput`,`return;`),Ar=typeof jr.oninput==`function`}kr=Ar}else kr=!1;Or=kr&&(!document.documentMode||9<document.documentMode)}function Mr(){Cr&&(Cr.detachEvent(`onpropertychange`,Nr),wr=Cr=null)}function Nr(e){if(e.propertyName===`value`&&Er(wr)){var t=[];Sr(t,wr,e,vn(e)),Cn(Tr,t)}}function Pr(e,t,n){e===`focusin`?(Mr(),Cr=t,wr=n,Cr.attachEvent(`onpropertychange`,Nr)):e===`focusout`&&Mr()}function Fr(e){if(e===`selectionchange`||e===`keyup`||e===`keydown`)return Er(wr)}function Ir(e,t){if(e===`click`)return Er(t)}function Lr(e,t){if(e===`input`||e===`change`)return Er(t)}function Rr(e,t){return e===t&&(e!==0||1/e==1/t)||e!==e&&t!==t}var zr=typeof Object.is==`function`?Object.is:Rr;function Br(e,t){if(zr(e,t))return!0;if(typeof e!=`object`||!e||typeof t!=`object`||!t)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!Me.call(t,i)||!zr(e[i],t[i]))return!1}return!0}function Vr(e){if(e||=typeof document<`u`?document:void 0,e===void 0)return null;try{return e.activeElement||e.body}catch{return e.body}}function Hr(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Ur(e,t){var n=Hr(e);e=0;for(var r;n;){if(n.nodeType===3){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}a:{for(;n;){if(n.nextSibling){n=n.nextSibling;break a}n=n.parentNode}n=void 0}n=Hr(n)}}function Wr(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?Wr(e,t.parentNode):`contains`in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function Gr(e){e=e!=null&&e.ownerDocument!=null&&e.ownerDocument.defaultView!=null?e.ownerDocument.defaultView:window;for(var t=Vr(e.document);t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href==`string`}catch{n=!1}if(n)e=t.contentWindow;else break;t=Vr(e.document)}return t}function Kr(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t===`input`&&(e.type===`text`||e.type===`search`||e.type===`tel`||e.type===`url`||e.type===`password`)||t===`textarea`||e.contentEditable===`true`)}var qr=Tn&&`documentMode`in document&&11>=document.documentMode,Jr=null,Yr=null,Xr=null,Zr=!1;function Qr(e,t,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Zr||Jr==null||Jr!==Vr(r)||(r=Jr,`selectionStart`in r&&Kr(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),Xr&&Br(Xr,r)||(Xr=r,r=qf(Yr,`onSelect`),0<r.length&&(t=new Ln(`onSelect`,`select`,null,t,n),e.push({event:t,listeners:r}),t.target=Jr)))}function $r(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n[`Webkit`+e]=`webkit`+t,n[`Moz`+e]=`moz`+t,n}var ei={animationend:$r(`Animation`,`AnimationEnd`),animationiteration:$r(`Animation`,`AnimationIteration`),animationstart:$r(`Animation`,`AnimationStart`),transitionrun:$r(`Transition`,`TransitionRun`),transitionstart:$r(`Transition`,`TransitionStart`),transitioncancel:$r(`Transition`,`TransitionCancel`),transitionend:$r(`Transition`,`TransitionEnd`)},ti={},ni={};Tn&&(ni=document.createElement(`div`).style,`AnimationEvent`in window||(delete ei.animationend.animation,delete ei.animationiteration.animation,delete ei.animationstart.animation),`TransitionEvent`in window||delete ei.transitionend.transition);function ri(e){if(ti[e])return ti[e];if(!ei[e])return e;var t=ei[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in ni)return ti[e]=t[n];return e}var ii=ri(`animationend`),ai=ri(`animationiteration`),oi=ri(`animationstart`),si=ri(`transitionrun`),ci=ri(`transitionstart`),li=ri(`transitioncancel`),ui=ri(`transitionend`),di=new Map,fi=`abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error fullscreenChange fullscreenError gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel`.split(` `);fi.push(`scrollEnd`);function pi(e,t){di.set(e,t),Lt(t,[e])}var mi=0;function hi(e,t){if(e.name!=null&&e.name!==`auto`)return e.name;if(t.autoName!==null)return t.autoName;e=_d.identifierPrefix;var n=mi++;return e=`_`+e+`t_`+n.toString(32)+`_`,t.autoName=e}function gi(e){if(e==null||typeof e==`string`)return e;var t=null,n=Td;if(n!==null)for(var r=0;r<n.length;r++){var i=e[n[r]];if(i!=null){if(i===`none`)return`none`;t=t==null?i:t+(` `+i)}}return t??e.default}function _i(e,t){return e=gi(e),t=gi(t),t==null?e===`auto`?null:e:t===`auto`?null:t}var vi=typeof reportError==`function`?reportError:function(e){if(typeof window==`object`&&typeof window.ErrorEvent==`function`){var t=new window.ErrorEvent(`error`,{bubbles:!0,cancelable:!0,message:typeof e==`object`&&e&&typeof e.message==`string`?String(e.message):String(e),error:e});if(!window.dispatchEvent(t))return}else if(typeof process==`object`&&typeof process.emit==`function`){process.emit(`uncaughtException`,e);return}console.error(e)},yi=[],bi=0,xi=0;function Si(){for(var e=bi,t=xi=bi=0;t<e;){var n=yi[t];yi[t++]=null;var r=yi[t];yi[t++]=null;var i=yi[t];yi[t++]=null;var a=yi[t];if(yi[t++]=null,r!==null&&i!==null){var o=r.pending;o===null?i.next=i:(i.next=o.next,o.next=i),r.pending=i}a!==0&&Ei(n,i,a)}}function Ci(e,t,n,r){yi[bi++]=e,yi[bi++]=t,yi[bi++]=n,yi[bi++]=r,xi|=r,e.lanes|=r,e=e.alternate,e!==null&&(e.lanes|=r)}function wi(e,t,n,r){return Ci(e,t,n,r),Di(e)}function Ti(e,t){return Ci(e,null,null,t),Di(e)}function Ei(e,t,n){e.lanes|=n;var r=e.alternate;r!==null&&(r.lanes|=n);for(var i=!1,a=e.return;a!==null;)a.childLanes|=n,r=a.alternate,r!==null&&(r.childLanes|=n),a.tag===22&&(e=a.stateNode,e===null||e._visibility&1||(i=!0)),e=a,a=a.return;return e.tag===3?(a=e.stateNode,i&&t!==null&&(i=31-Ye(n),e=a.hiddenUpdates,r=e[i],r===null?e[i]=[t]:r.push(t),t.lane=n|536870912),a):null}function Di(e){if(50<Ed)throw Ed=0,Dd=null,Error(i(185));for(var t=e.return;t!==null;)e=t,t=e.return;return e.tag===3?e.stateNode:null}var Oi={};function ki(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Ai(e,t,n,r){return new ki(e,t,n,r)}function ji(e){return e=e.prototype,!(!e||!e.isReactComponent)}function Mi(e,t){var n=e.alternate;return n===null?(n=Ai(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&1206910976,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n.refCleanup=e.refCleanup,n}function Ni(e,t){e.flags&=1206910978;var n=e.alternate;return n===null?(e.childLanes=0,e.lanes=t,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=n.childLanes,e.lanes=n.lanes,e.child=n.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=n.memoizedProps,e.memoizedState=n.memoizedState,e.updateQueue=n.updateQueue,e.type=n.type,t=n.dependencies,e.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),e}function Pi(e,t,n,r,a,o){var s=0;if(r=e,typeof r==`function`)ji(r)&&(s=1);else if(typeof r==`string`)s=qm(e,n,_e.current)?26:e===`html`||e===`head`||e===`body`?27:5;else a:switch(r){case te:return e=Ai(31,n,t,a),e.elementType=te,e.lanes=o,e;case j:return Fi(n.children,a,o,t);case M:s=8,a|=24;break;case N:return e=Ai(12,n,t,a|2),e.elementType=N,e.lanes=o,e;case ee:return e=Ai(13,n,t,a),e.elementType=ee,e.lanes=o,e;case L:return e=Ai(19,n,t,a),e.elementType=L,e.lanes=o,e;case ne:case ie:return e=a|32,e=Ai(30,n,t,e),e.elementType=ie,e.lanes=o,e.stateNode={autoName:null,paired:null,clones:null,ref:null},e;default:if(typeof r==`object`&&r)switch(r.$$typeof){case F:s=10;break a;case P:s=9;break a;case I:s=11;break a;case R:s=14;break a;case z:s=16,r=null;break a}s=29,n=Error(i(130,e===null?`null`:typeof e,``)),r=null}return t=Ai(s,n,t,a),t.elementType=e,t.type=r,t.lanes=o,t}function Fi(e,t,n,r){return e=Ai(7,e,r,t),e.lanes=n,e}function Ii(e,t,n){return e=Ai(6,e,null,t),e.lanes=n,e}function Li(e){var t=Ai(18,null,null,0);return t.stateNode=e,t}function Ri(e,t,n){return t=Ai(4,e.children===null?[]:e.children,e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}var zi=new WeakMap;function Bi(e,t){if(typeof e==`object`&&e){var n=zi.get(e);return n===void 0?(t={value:e,source:t,stack:je(t)},zi.set(e,t),t):n}return{value:e,source:t,stack:je(t)}}var Vi=[],H=0,Hi=null,U=0,Ui=[],Wi=0,Gi=null,Ki=1,qi=``;function Ji(e,t){Vi[H++]=U,Vi[H++]=Hi,Hi=e,U=t}function Yi(e,t,n){Ui[Wi++]=Ki,Ui[Wi++]=qi,Ui[Wi++]=Gi,Gi=e;var r=Ki;e=qi;var i=32-Ye(r)-1;r&=~(1<<i),n+=1;var a=32-Ye(t)+i;if(30<a){var o=i-i%5;a=(r&(1<<o)-1).toString(32),r>>=o,i-=o,Ki=1<<32-Ye(t)+i|n<<i|r,qi=a+e}else Ki=1<<a|n<<i|r,qi=e}function Xi(e){e.return!==null&&(Ji(e,1),Yi(e,1,0))}function Zi(e){for(;e===Hi;)Hi=Vi[--H],Vi[H]=null,U=Vi[--H],Vi[H]=null;for(;e===Gi;)Gi=Ui[--Wi],Ui[Wi]=null,qi=Ui[--Wi],Ui[Wi]=null,Ki=Ui[--Wi],Ui[Wi]=null}function Qi(e,t){Ui[Wi++]=Ki,Ui[Wi++]=qi,Ui[Wi++]=Gi,Ki=t.id,qi=t.overflow,Gi=e}var $i=null,ea=null,W=!1,G=null,K=!1,ta=Error(i(519));function na(e){throw ca(Bi(Error(i(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?`text`:`HTML`,``)),e)),ta}function ra(e){var t=e.stateNode,n=e.type,r=e.memoizedProps;switch(t[yt]=e,t[bt]=r,n){case`dialog`:Bf(`cancel`,t),Bf(`close`,t);break;case`iframe`:case`object`:case`embed`:Bf(`load`,t);break;case`video`:case`audio`:for(n=0;n<Lf.length;n++)Bf(Lf[n],t);break;case`source`:Bf(`error`,t);break;case`img`:case`image`:case`link`:Bf(`error`,t),Bf(`load`,t);break;case`details`:Bf(`toggle`,t);break;case`input`:Bf(`invalid`,t),nn(t,r.value,r.defaultValue,r.checked,r.defaultChecked,r.type,r.name,!0);break;case`select`:Bf(`invalid`,t);break;case`textarea`:Bf(`invalid`,t),sn(t,r.value,r.defaultValue,r.children)}n=r.children,typeof n!=`string`&&typeof n!=`number`&&typeof n!=`bigint`||t.textContent===``+n||!0===r.suppressHydrationWarning||$f(t.textContent,n)?(r.popover!=null&&(Bf(`beforetoggle`,t),Bf(`toggle`,t)),r.onScroll!=null&&Bf(`scroll`,t),r.onScrollEnd!=null&&Bf(`scrollend`,t),r.onClick!=null&&(t.onclick=gn),t=!0):t=!1,t||na(e,!0)}function ia(e){for($i=e.return;$i;)switch($i.tag){case 5:case 31:case 13:K=!1;return;case 27:case 3:K=!0;return;default:$i=$i.return}}function aa(e){if(e!==$i)return!1;if(!W)return ia(e),W=!0,!1;var t=e.tag,n;if((n=t!==3&&t!==27)&&((n=t===5)&&(n=e.type,n=n===`form`||n===`button`||pp(e.type,e.memoizedProps)),n=!n),n&&ea&&na(e),ia(e),t===13){if(e=e.memoizedState,e=e===null?null:e.dehydrated,!e)throw Error(i(317));ea=dm(e)}else if(t===31){if(e=e.memoizedState,e=e===null?null:e.dehydrated,!e)throw Error(i(317));ea=dm(e)}else t===27?(t=ea,Sp(e.type)?(e=um,um=null,ea=e):ea=t):ea=$i?lm(e.stateNode.nextSibling):null;return!0}function oa(){ea=$i=null,W=!1}function sa(){var e=G;return e!==null&&(ld===null?ld=e:ld.push.apply(ld,e),G=null),e}function ca(e){G===null?G=[e]:G.push(e)}var la=me(null),ua=null,da=null;function fa(e,t,n){ge(la,t._currentValue),t._currentValue=n}function pa(e){e._currentValue=la.current,he(la)}function ma(e,t,n){for(;e!==null;){var r=e.alternate;if((e.childLanes&t)===t?r!==null&&(r.childLanes&t)!==t&&(r.childLanes|=t):(e.childLanes|=t,r!==null&&(r.childLanes|=t)),e===n)break;e=e.return}}function ha(e,t,n,r){var a=e.child;for(a!==null&&(a.return=e);a!==null;){var o=a.dependencies;if(o!==null){var s=a.child;o=o.firstContext;a:for(;o!==null;){var c=o;o=a;for(var l=0;l<t.length;l++)if(c.context===t[l]){o.lanes|=n,c=o.alternate,c!==null&&(c.lanes|=n),ma(o.return,n,e),r||(s=null);break a}o=c.next}}else if(a.tag===18){if(s=a.return,s===null)throw Error(i(341));s.lanes|=n,o=s.alternate,o!==null&&(o.lanes|=n),ma(s,n,e),s=null}else a.tag===13&&a.memoizedState!==null&&a.memoizedState.dehydrated===null?(a.lanes|=n,s=a.alternate,s!==null&&(s.lanes|=n),ma(a.return,n,e),s=a.child,s=s===null?null:s.sibling):s=a.child;if(s!==null)s.return=a;else for(s=a;s!==null;){if(s===e){s=null;break}if(a=s.sibling,a!==null){a.return=s.return,s=a;break}s=s.return}a=s}}function ga(e,t,n,r){e=null;for(var a=t,o=!1;a!==null;){if(!o){if(a.flags&524288)o=!0;else if(a.flags&262144)break}if(a.tag===10){var s=a.alternate;if(s===null)throw Error(i(387));if(s=s.memoizedProps,s!==null){var c=a.type;zr(a.pendingProps.value,s.value)||(e===null?e=[c]:e.push(c))}}else if(a===be.current){if(s=a.alternate,s===null)throw Error(i(387));s.memoizedState.memoizedState!==a.memoizedState.memoizedState&&(e===null?e=[sh]:e.push(sh))}a=a.return}return e!==null&&ha(t,e,n,r),t.flags|=262144,e!==null}function _a(e){for(e=e.firstContext;e!==null;){if(!zr(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function va(e){ua=e,da=null,e=e.dependencies,e!==null&&(e.firstContext=null)}function ya(e){return xa(ua,e)}function ba(e,t){return ua===null&&va(e),xa(e,t)}function xa(e,t){var n=t._currentValue;if(t={context:t,memoizedValue:n,next:null},da===null){if(e===null)throw Error(i(308));da=t,e.dependencies={lanes:0,firstContext:t},e.flags|=524288}else da=da.next=t;return n}var Sa=typeof AbortController<`u`?AbortController:function(){var e=[],t=this.signal={aborted:!1,addEventListener:function(t,n){e.push(n)}};this.abort=function(){t.aborted=!0,e.forEach(function(e){return e()})}},Ca=t.unstable_scheduleCallback,wa=t.unstable_NormalPriority,Ta={$$typeof:F,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function Ea(){return{controller:new Sa,data:new Map,refCount:0}}function Da(e){e.refCount--,e.refCount===0&&Ca(wa,function(){e.controller.abort()})}function Oa(e,t){if(e.pendingLanes&4194048){var n=e.transitionTypes;for(n===null&&(n=e.transitionTypes=[]),e=0;e<t.length;e++){var r=t[e];n.indexOf(r)===-1&&n.push(r)}}}var ka=null;function Aa(e){var t=e.transitionTypes;return e.transitionTypes=null,t}var ja=null,Ma=0,Na=0,Pa=null;function Fa(e,t){if(ja===null){var n=ja=[];Ma=0,Na=Mf(),Pa={status:`pending`,value:void 0,then:function(e){n.push(e)}}}return Ma++,t.then(Ia,Ia),t}function Ia(){if(--Ma===0&&(ka=null,ja!==null)){Pa!==null&&(Pa.status=`fulfilled`);var e=ja;ja=null,Na=0,Pa=null;for(var t=0;t<e.length;t++)(0,e[t])()}}function La(e,t){var n=[],r={status:`pending`,value:null,reason:null,then:function(e){n.push(e)}};return e.then(function(){r.status=`fulfilled`,r.value=t;for(var e=0;e<n.length;e++)(0,n[e])(t)},function(e){for(r.status=`rejected`,r.reason=e,e=0;e<n.length;e++)(0,n[e])(void 0)}),r}var Ra=B.S;B.S=function(e,t){if(fd=Le(),typeof t==`object`&&t&&typeof t.then==`function`&&Fa(e,t),ka!==null)for(var n=vf;n!==null;)Oa(n,ka),n=n.next;if(n=e.types,n!==null){for(var r=vf;r!==null;)Oa(r,n),r=r.next;if(Na!==0){r=ka,r===null&&(r=ka=[]);for(var i=0;i<n.length;i++){var a=n[i];r.indexOf(a)===-1&&r.push(a)}}}Ra!==null&&Ra(e,t)};var za=me(null);function Ba(){var e=za.current;return e===null?Xu.pooledCache:e}function Va(e,t){t===null?ge(za,za.current):ge(za,t.pool)}function Ha(){var e=Ba();return e===null?null:{parent:Ta._currentValue,pool:e}}var Ua=Error(i(460)),Wa=Error(i(474)),Ga=Error(i(542)),Ka={then:function(){}};function qa(e){return e=e.status,e===`fulfilled`||e===`rejected`}function Ja(e,t,n){switch(n=e[n],n===void 0?e.push(t):n!==t&&(t.then(gn,gn),t=n),t.status){case`fulfilled`:return t.value;case`rejected`:throw e=t.reason,Qa(e),e===void 0&&!(`reason`in t)?Error(i(600)):e;default:if(typeof t.status==`string`)t.then(gn,gn);else{if(e=Xu,e!==null&&100<e.shellSuspendCounter)throw Error(i(482));e=t,e.status=`pending`,e.then(function(e){if(t.status===`pending`){var n=t;n.status=`fulfilled`,n.value=e}},function(e){if(t.status===`pending`){var n=t;n.status=`rejected`,n.reason=e}})}switch(t.status){case`fulfilled`:return t.value;case`rejected`:throw e=t.reason,Qa(e),e}throw Xa=t,Ua}}function Ya(e){try{var t=e._init;return t(e._payload)}catch(e){throw typeof e==`object`&&e&&typeof e.then==`function`?(Xa=e,Ua):e}}var Xa=null;function Za(){if(Xa===null)throw Error(i(459));var e=Xa;return Xa=null,e}function Qa(e){if(e===Ua||e===Ga)throw Error(i(483))}var $a=null,eo=0;function to(e){var t=eo;return eo+=1,$a===null&&($a=[]),Ja($a,e,t)}function no(e,t){t=t.props.ref,e.ref=t===void 0?null:t}function ro(e,t){throw t.$$typeof===O?Error(i(525)):(e=Object.prototype.toString.call(t),Error(i(31,e===`[object Object]`?`object with keys {`+Object.keys(t).join(`, `)+`}`:e)))}function io(e){function t(t,n){if(e){var r=t.deletions;r===null?(t.deletions=[n],t.flags|=16):r.push(n)}}function n(n,r){if(!e)return null;for(;r!==null;)t(n,r),r=r.sibling;return null}function r(e){for(var t=new Map;e!==null;)e.key===null?t.set(e.index,e):t.set(e.key,e),e=e.sibling;return t}function a(e,t){return e=Mi(e,t),e.index=0,e.sibling=null,e}function o(t,n,r){return t.index=r,e?(r=t.alternate,r===null?(t.flags|=134217730,n):(r=r.index,r<n?(t.flags|=2,n):r)):(t.flags|=1048576,n)}function s(t){return e&&t.alternate===null&&(t.flags|=134217730),t}function c(e,t,n,r){return t===null||t.tag!==6?(t=Ii(n,e.mode,r),t.return=e,t):(t=a(t,n),t.return=e,t)}function l(e,t,n,r){var i=n.type;return i===j?(e=d(e,t,n.props.children,r,n.key),no(e,n),e):t!==null&&(t.elementType===i||typeof i==`object`&&i&&i.$$typeof===z&&Ya(i)===t.type)?(t=a(t,n.props),no(t,n),t.return=e,t):(t=Pi(n.type,n.key,n.props,null,e.mode,r),no(t,n),t.return=e,t)}function u(e,t,n,r){return t===null||t.tag!==4||t.stateNode.containerInfo!==n.containerInfo||t.stateNode.implementation!==n.implementation?(t=Ri(n,e.mode,r),t.return=e,t):(t=a(t,n.children||[]),t.return=e,t)}function d(e,t,n,r,i){return t===null||t.tag!==7?(t=Fi(n,e.mode,r,i),t.return=e,t):(t=a(t,n),t.return=e,t)}function f(e,t,n){if(typeof t==`string`&&t!==``||typeof t==`number`||typeof t==`bigint`)return t=Ii(``+t,e.mode,n),t.return=e,t;if(typeof t==`object`&&t){switch(t.$$typeof){case k:return n=Pi(t.type,t.key,t.props,null,e.mode,n),no(n,t),n.return=e,n;case A:return t=Ri(t,e.mode,n),t.return=e,t;case z:return t=Ya(t),f(e,t,n)}if(ue(t)||se(t))return t=Fi(t,e.mode,n,null),t.return=e,t;if(typeof t.then==`function`)return f(e,to(t),n);if(t.$$typeof===F)return f(e,ba(e,t),n);ro(e,t)}return null}function p(e,t,n,r){var i=t===null?null:t.key;if(typeof n==`string`&&n!==``||typeof n==`number`||typeof n==`bigint`)return i===null?c(e,t,``+n,r):null;if(typeof n==`object`&&n){switch(n.$$typeof){case k:return n.key===i?l(e,t,n,r):null;case A:return n.key===i?u(e,t,n,r):null;case z:return n=Ya(n),p(e,t,n,r)}if(ue(n)||se(n))return i===null?d(e,t,n,r,null):null;if(typeof n.then==`function`)return p(e,t,to(n),r);if(n.$$typeof===F)return p(e,t,ba(e,n),r);ro(e,n)}return null}function m(e,t,n,r,i){if(typeof r==`string`&&r!==``||typeof r==`number`||typeof r==`bigint`)return e=e.get(n)||null,c(t,e,``+r,i);if(typeof r==`object`&&r){switch(r.$$typeof){case k:return e=e.get(r.key===null?n:r.key)||null,l(t,e,r,i);case A:return e=e.get(r.key===null?n:r.key)||null,u(t,e,r,i);case z:return r=Ya(r),m(e,t,n,r,i)}if(ue(r)||se(r))return e=e.get(n)||null,d(t,e,r,i,null);if(typeof r.then==`function`)return m(e,t,n,to(r),i);if(r.$$typeof===F)return m(e,t,n,ba(t,r),i);ro(t,r)}return null}function h(i,a,s,c){for(var l=null,u=null,d=a,h=a=0,g=null;d!==null&&h<s.length;h++){d.index>h?(g=d,d=null):g=d.sibling;var _=p(i,d,s[h],c);if(_===null){d===null&&(d=g);break}e&&d&&_.alternate===null&&t(i,d),a=o(_,a,h),u===null?l=_:u.sibling=_,u=_,d=g}if(h===s.length)return n(i,d),W&&Ji(i,h),l;if(d===null){for(;h<s.length;h++)d=f(i,s[h],c),d!==null&&(a=o(d,a,h),u===null?l=d:u.sibling=d,u=d);return W&&Ji(i,h),l}for(d=r(d);h<s.length;h++)g=m(d,i,h,s[h],c),g!==null&&(e&&(_=g.alternate,_!==null&&d.delete(_.key===null?h:_.key)),a=o(g,a,h),u===null?l=g:u.sibling=g,u=g);return e&&d.forEach(function(e){return t(i,e)}),W&&Ji(i,h),l}function g(a,s,c,l){if(c==null)throw Error(i(151));for(var u=null,d=null,h=s,g=s=0,_=null,v=c.next();h!==null&&!v.done;g++,v=c.next()){h.index>g?(_=h,h=null):_=h.sibling;var y=p(a,h,v.value,l);if(y===null){h===null&&(h=_);break}e&&h&&y.alternate===null&&t(a,h),s=o(y,s,g),d===null?u=y:d.sibling=y,d=y,h=_}if(v.done)return n(a,h),W&&Ji(a,g),u;if(h===null){for(;!v.done;g++,v=c.next())v=f(a,v.value,l),v!==null&&(s=o(v,s,g),d===null?u=v:d.sibling=v,d=v);return W&&Ji(a,g),u}for(h=r(h);!v.done;g++,v=c.next())v=m(h,a,g,v.value,l),v!==null&&(e&&(_=v.alternate,_!==null&&h.delete(_.key===null?g:_.key)),s=o(v,s,g),d===null?u=v:d.sibling=v,d=v);return e&&h.forEach(function(e){return t(a,e)}),W&&Ji(a,g),u}function _(e,r,o,c){if(typeof o==`object`&&o&&o.type===j&&o.key===null&&o.props.ref===void 0&&(o=o.props.children),typeof o==`object`&&o){switch(o.$$typeof){case k:a:{for(var l=o.key;r!==null;){if(r.key===l){if(l=o.type,l===j){if(r.tag===7){n(e,r.sibling),c=a(r,o.props.children),no(c,o),c.return=e,e=c;break a}}else if(r.elementType===l||typeof l==`object`&&l&&l.$$typeof===z&&Ya(l)===r.type){n(e,r.sibling),c=a(r,o.props),no(c,o),c.return=e,e=c;break a}n(e,r);break}t(e,r),r=r.sibling}o.type===j?(c=Fi(o.props.children,e.mode,c,o.key),no(c,o),c.return=e,e=c):(c=Pi(o.type,o.key,o.props,null,e.mode,c),no(c,o),c.return=e,e=c)}return s(e);case A:a:{for(l=o.key;r!==null;){if(r.key===l){if(r.tag===4&&r.stateNode.containerInfo===o.containerInfo&&r.stateNode.implementation===o.implementation){n(e,r.sibling),c=a(r,o.children||[]),c.return=e,e=c;break a}n(e,r);break}t(e,r),r=r.sibling}c=Ri(o,e.mode,c),c.return=e,e=c}return s(e);case z:return o=Ya(o),_(e,r,o,c)}if(ue(o))return h(e,r,o,c);if(se(o)){if(l=se(o),typeof l!=`function`)throw Error(i(150));return o=l.call(o),g(e,r,o,c)}if(typeof o.then==`function`)return _(e,r,to(o),c);if(o.$$typeof===F)return _(e,r,ba(e,o),c);ro(e,o)}return typeof o==`string`&&o!==``||typeof o==`number`||typeof o==`bigint`?(o=``+o,r!==null&&r.tag===6?(n(e,r.sibling),c=a(r,o),c.return=e,e=c):(n(e,r),c=Ii(o,e.mode,c),c.return=e,e=c),s(e)):n(e,r)}return function(e,t,n,r){try{eo=0;var i=_(e,t,n,r);return $a=null,i}catch(t){if(t===Ua||t===Ga)throw t;var a=Ai(29,t,null,e.mode);return a.lanes=r,a.return=e,a}}}var ao=io(!0),oo=io(!1),so=!1;function co(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function lo(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function uo(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function fo(e,t,n){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,Yu&2){var i=r.pending;return i===null?t.next=t:(t.next=i.next,i.next=t),r.pending=t,t=Di(e),Ei(e,null,n),t}return Ci(e,r,t,n),Di(e)}function po(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,n&4194048)){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,ft(e,n)}}function mo(e,t){var n=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,a=null;if(n=n.firstBaseUpdate,n!==null){do{var o={lane:n.lane,tag:n.tag,payload:n.payload,callback:null,next:null};a===null?i=a=o:a=a.next=o,n=n.next}while(n!==null);a===null?i=a=t:a=a.next=t}else i=a=t;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:a,shared:r.shared,callbacks:r.callbacks},e.updateQueue=n}else e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}var ho=!1;function go(){if(ho){var e=Pa;if(e!==null)throw e}}function _o(e,t,n,r){ho=!1;var i=e.updateQueue;so=!1;var a=i.firstBaseUpdate,o=i.lastBaseUpdate,s=i.shared.pending;if(s!==null){i.shared.pending=null;var c=s,l=c.next;c.next=null,o===null?a=l:o.next=l,o=c;var u=e.alternate;u!==null&&(u=u.updateQueue,s=u.lastBaseUpdate,s!==o&&(s===null?u.firstBaseUpdate=l:s.next=l,u.lastBaseUpdate=c))}if(a!==null){var d=i.baseState;o=0,u=l=c=null,s=a;do{var f=s.lane&-536870913,p=f!==s.lane;if(p?(Q&f)===f:(r&f)===f){f!==0&&f===Na&&(ho=!0),u!==null&&(u=u.next={lane:0,tag:s.tag,payload:s.payload,callback:null,next:null});a:{var m=e,h=s;f=t;var g=n;switch(h.tag){case 1:if(m=h.payload,typeof m==`function`){d=m.call(g,d,f);break a}d=m;break a;case 3:m.flags=m.flags&-65537|128;case 0:if(m=h.payload,f=typeof m==`function`?m.call(g,d,f):m,f==null)break a;d=D({},d,f);break a;case 2:so=!0}}f=s.callback,f!==null&&(e.flags|=64,p&&(e.flags|=8192),p=i.callbacks,p===null?i.callbacks=[f]:p.push(f))}else p={lane:f,tag:s.tag,payload:s.payload,callback:s.callback,next:null},u===null?(l=u=p,c=d):u=u.next=p,o|=f;if(s=s.next,s===null){if(s=i.shared.pending,s===null)break;p=s,s=p.next,p.next=null,i.lastBaseUpdate=p,i.shared.pending=null}}while(1);u===null&&(c=d),i.baseState=c,i.firstBaseUpdate=l,i.lastBaseUpdate=u,a===null&&(i.shared.lanes=0),rd|=o,e.lanes=o,e.memoizedState=d}}function vo(e,t){if(typeof e!=`function`)throw Error(i(191,e));e.call(t)}function yo(e,t){var n=e.callbacks;if(n!==null)for(e.callbacks=null,e=0;e<n.length;e++)vo(n[e],t)}var bo=me(null),xo=me(0);function So(e,t){e=td,ge(xo,e),ge(bo,t),td=e|t.baseLanes}function Co(){ge(xo,td),ge(bo,bo.current)}function wo(){td=xo.current,he(bo),he(xo)}var To=me(null),Eo=null;function Do(e){var t=e.alternate;ge(Mo,Mo.current&1),ge(To,e),Eo===null&&(t===null||bo.current!==null||t.memoizedState!==null)&&(Eo=e)}function Oo(e){ge(Mo,Mo.current),ge(To,e),Eo===null&&(Eo=e)}function ko(e){e.tag===22?(ge(Mo,Mo.current),ge(To,e),Eo===null&&(Eo=e)):Ao()}function Ao(){ge(Mo,Mo.current),ge(To,To.current)}function jo(e){he(To),Eo===e&&(Eo=null),he(Mo)}var Mo=me(0);function No(e,t){ge(To,To.current),ge(Mo,t)}function Po(e){he(Mo),he(To),Eo===e&&(Eo=null)}function Fo(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||om(n)||sm(n)))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==`independent`){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var Io=0,Lo=null,Ro=null,zo=null,Bo=!1,Vo=!1,Ho=!1,Uo=0,Wo=0,Go=null,Ko=0;function qo(){throw Error(i(321))}function Jo(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!zr(e[n],t[n]))return!1;return!0}function Yo(e,t,n,r,i,a){return Io=a,Lo=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,B.H=e===null||e.memoizedState===null?dc:fc,Ho=!1,a=n(r,i),Ho=!1,Vo&&(a=Zo(t,n,r,i)),Xo(e),a}function Xo(e){B.H=uc;var t=Ro!==null&&Ro.next!==null;if(Io=0,zo=Ro=Lo=null,Bo=!1,Wo=0,Go=null,t)throw Error(i(300));e===null||kc||(e=e.dependencies,e!==null&&_a(e)&&(kc=!0))}function Zo(e,t,n,r){Lo=e;var a=0;do{if(Vo&&(Go=null),Wo=0,Vo=!1,25<=a)throw Error(i(301));if(a+=1,zo=Ro=null,e.updateQueue!=null){var o=e.updateQueue;o.lastEffect=null,o.events=null,o.stores=null,o.memoCache!=null&&(o.memoCache.index=0)}B.H=pc,o=t(n,r)}while(Vo);return o}function Qo(){var e=B.H,t=e.useState()[0];return t=typeof t.then==`function`?is(t):t,e=e.useState()[0],(Ro===null?null:Ro.memoizedState)!==e&&(Lo.flags|=1024),t}function q(){var e=Uo!==0;return Uo=0,e}function $o(e,t,n){t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~n}function es(e){if(Bo){for(e=e.memoizedState;e!==null;){var t=e.queue;t!==null&&(t.pending=null),e=e.next}Bo=!1}Io=0,zo=Ro=Lo=null,Vo=!1,Wo=Uo=0,Go=null}function ts(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return zo===null?Lo.memoizedState=zo=e:zo=zo.next=e,zo}function ns(){if(Ro===null){var e=Lo.alternate;e=e===null?null:e.memoizedState}else e=Ro.next;var t=zo===null?Lo.memoizedState:zo.next;if(t!==null)zo=t,Ro=e;else{if(e===null)throw Lo.alternate===null?Error(i(467)):Error(i(310));Ro=e,e={memoizedState:Ro.memoizedState,baseState:Ro.baseState,baseQueue:Ro.baseQueue,queue:Ro.queue,next:null},zo===null?Lo.memoizedState=zo=e:zo=zo.next=e}return zo}function rs(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function is(e){var t=Wo;return Wo+=1,Go===null&&(Go=[]),e=Ja(Go,e,t),t=Lo,(zo===null?t.memoizedState:zo.next)===null&&(t=t.alternate,B.H=t===null||t.memoizedState===null?dc:fc),e}function as(e){if(typeof e==`object`&&e){if(typeof e.then==`function`)return is(e);if(e.$$typeof===ae)return;if(e.$$typeof===F)return ya(e)}throw Error(i(438,String(e)))}function os(e){var t=null,n=Lo.updateQueue;if(n!==null&&(t=n.memoCache),t==null){var r=Lo.alternate;r!==null&&(r=r.updateQueue,r!==null&&(r=r.memoCache,r!=null&&(t={data:r.data.map(function(e){return e.slice()}),index:0})))}if(t??={data:[],index:0},n===null&&(n=rs(),Lo.updateQueue=n),n.memoCache=t,n=t.data[t.index],n===void 0)for(n=t.data[t.index]=Array(e),r=0;r<e;r++)n[r]=re;return t.index++,n}function ss(e,t){return typeof t==`function`?t(e):t}function cs(e){return ls(ns(),Ro,e)}function ls(e,t,n){var r=e.queue;if(r===null)throw Error(i(311));r.lastRenderedReducer=n;var a=e.baseQueue,o=r.pending;if(o!==null){if(a!==null){var s=a.next;a.next=o.next,o.next=s}t.baseQueue=a=o,r.pending=null}if(o=e.baseState,a===null)e.memoizedState=o;else{t=a.next;var c=s=null,l=null,u=t,d=!1;do{var f=u.lane&-536870913;if(f===u.lane?(Io&f)===f:(Q&f)===f){var p=u.revertLane;if(p===0)l!==null&&(l=l.next={lane:0,revertLane:0,gesture:null,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),f===Na&&(d=!0);else if((Io&p)===p){u=u.next,p===Na&&(d=!0);continue}else f={lane:0,revertLane:u.revertLane,gesture:null,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null},l===null?(c=l=f,s=o):l=l.next=f,Lo.lanes|=p,rd|=p;f=u.action,Ho&&n(o,f),o=u.hasEagerState?u.eagerState:n(o,f)}else p={lane:f,revertLane:u.revertLane,gesture:u.gesture,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null},l===null?(c=l=p,s=o):l=l.next=p,Lo.lanes|=f,rd|=f;u=u.next}while(u!==null&&u!==t);if(l===null?s=o:l.next=c,!zr(o,e.memoizedState)&&(kc=!0,d&&(n=Pa,n!==null)))throw n;e.memoizedState=o,e.baseState=s,e.baseQueue=l,r.lastRenderedState=o}return a===null&&(r.lanes=0),[e.memoizedState,r.dispatch]}function us(e){var t=ns(),n=t.queue;if(n===null)throw Error(i(311));n.lastRenderedReducer=e;var r=n.dispatch,a=n.pending,o=t.memoizedState;if(a!==null){n.pending=null;var s=a=a.next;do o=e(o,s.action),s=s.next;while(s!==a);zr(o,t.memoizedState)||(kc=!0),t.memoizedState=o,t.baseQueue===null&&(t.baseState=o),n.lastRenderedState=o}return[o,r]}function ds(e,t,n){var r=Lo,a=ns(),o=W;if(o){if(n===void 0)throw Error(i(407));n=n()}else n=t();var s=!zr((Ro||a).memoizedState,n);if(s&&(a.memoizedState=n,kc=!0),a=a.queue,Is(ms.bind(null,r,a,e),[e]),e=a.getSnapshot!==t||s||zo!==null&&!!(zo.memoizedState.tag&1),js(e?9:8,{destroy:void 0},ps.bind(null,r,a,n,t),null),e){if(r.flags|=2048,Xu===null)throw Error(i(349));o||Io&127||fs(r,t,n)}return n}function fs(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=Lo.updateQueue,t===null?(t=rs(),Lo.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function ps(e,t,n,r){t.value=n,t.getSnapshot=r,hs(t)&&gs(e)}function ms(e,t,n){return n(function(){hs(t)&&gs(e)})}function hs(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!zr(e,n)}catch{return!0}}function gs(e){var t=Ti(e,2);t!==null&&jd(t,e,2)}function _s(e){var t=ts();if(typeof e==`function`){var n=e;if(e=n(),Ho){Je(!0);try{n()}finally{Je(!1)}}}return t.memoizedState=t.baseState=e,t.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:ss,lastRenderedState:e},t}function vs(e,t,n,r){return e.baseState=n,ls(e,Ro,typeof r==`function`?r:ss)}function ys(e,t,n,r,a){if(sc(e))throw Error(i(485));if(e=t.action,e!==null){var o={payload:a,action:e,next:null,isTransition:!0,status:`pending`,value:null,reason:null,listeners:[],then:function(e){o.listeners.push(e)}};B.T===null?o.isTransition=!1:n(!0),r(o),n=t.pending,n===null?(o.next=t.pending=o,bs(t,o)):(o.next=n.next,t.pending=n.next=o)}}function bs(e,t){var n=t.action,r=t.payload,i=e.state;if(t.isTransition){var a=B.T,o={};o.types=a===null?null:a.types,B.T=o;try{var s=n(i,r),c=B.S;c!==null&&c(o,s),xs(e,t,s)}catch(n){Cs(e,t,n)}finally{a!==null&&o.types!==null&&(a.types=o.types),B.T=a}}else try{a=n(i,r),xs(e,t,a)}catch(n){Cs(e,t,n)}}function xs(e,t,n){typeof n==`object`&&n&&typeof n.then==`function`?n.then(function(n){Ss(e,t,n)},function(n){return Cs(e,t,n)}):Ss(e,t,n)}function Ss(e,t,n){t.status=`fulfilled`,t.value=n,ws(t),e.state=n,t=e.pending,t!==null&&(n=t.next,n===t?e.pending=null:(n=n.next,t.next=n,bs(e,n)))}function Cs(e,t,n){var r=e.pending;if(e.pending=null,r!==null){r=r.next;do t.status=`rejected`,t.reason=n,ws(t),t=t.next;while(t!==r)}e.action=null}function ws(e){e=e.listeners;for(var t=0;t<e.length;t++)(0,e[t])()}function Ts(e,t){return t}function Es(e,t){if(W){var n=Xu.formState;if(n!==null){a:{var r=Lo;if(W){if(ea){b:{for(var i=ea,a=K;i.nodeType!==8;)if(!a||(i=lm(i.nextSibling),i===null)){i=null;break b}a=i.data,i=a===`F!`||a===`F`?i:null}if(i){ea=lm(i.nextSibling),r=i.data===`F!`;break a}}na(r)}r=!1}r&&(t=n[0])}}return n=ts(),n.memoizedState=n.baseState=t,r={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Ts,lastRenderedState:t},n.queue=r,n=ic.bind(null,Lo,r),r.dispatch=n,r=_s(!1),a=oc.bind(null,Lo,!1,r.queue),r=ts(),i={state:t,dispatch:null,action:e,pending:null},r.queue=i,n=ys.bind(null,Lo,i,a,n),i.dispatch=n,r.memoizedState=e,[t,n,!1]}function Ds(e){return Os(ns(),Ro,e)}function Os(e,t,n){if(t=ls(e,t,Ts)[0],e=cs(ss)[0],typeof t==`object`&&t&&typeof t.then==`function`)try{var r=is(t)}catch(e){throw e===Ua?Ga:e}else r=t;t=ns();var i=t.queue,a=i.dispatch;return n!==t.memoizedState&&(Lo.flags|=2048,js(9,{destroy:void 0},ks.bind(null,i,n),null)),[r,a,e]}function ks(e,t){e.action=t}function As(e){var t=ns(),n=Ro;if(n!==null)return Os(t,n,e);ns(),t=t.memoizedState,n=ns();var r=n.queue.dispatch;return n.memoizedState=e,[t,r,!1]}function js(e,t,n,r){return e={tag:e,create:n,deps:r,inst:t,next:null},t=Lo.updateQueue,t===null&&(t=rs(),Lo.updateQueue=t),n=t.lastEffect,n===null?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e),e}function Ms(){return ns().memoizedState}function Ns(e,t,n,r){var i=ts();Lo.flags|=e,i.memoizedState=js(1|t,{destroy:void 0},n,r===void 0?null:r)}function Ps(e,t,n,r){var i=ns();r=r===void 0?null:r;var a=i.memoizedState.inst;Ro!==null&&r!==null&&Jo(r,Ro.memoizedState.deps)?i.memoizedState=js(t,a,n,r):(Lo.flags|=e,i.memoizedState=js(1|t,a,n,r))}function Fs(e,t){Ns(8390656,8,e,t)}function Is(e,t){Ps(2048,8,e,t)}function Ls(e){Lo.flags|=4;var t=Lo.updateQueue;if(t===null)t=rs(),Lo.updateQueue=t,t.events=[e];else{var n=t.events;n===null?t.events=[e]:n.push(e)}}function Rs(e){var t=ns().memoizedState;return Ls({ref:t,nextImpl:e}),function(){if(Yu&2)throw Error(i(440));return t.impl.apply(void 0,arguments)}}function zs(e,t){return Ps(4,2,e,t)}function Bs(e,t){return Ps(4,4,e,t)}function Vs(e,t){if(typeof t==`function`){e=e();var n=t(e);return function(){typeof n==`function`?n():t(null)}}if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function Hs(e,t,n){n=n==null?null:n.concat([e]),Ps(4,4,Vs.bind(null,t,e),n)}function Us(){}function Ws(e,t){var n=ns();t=t===void 0?null:t;var r=n.memoizedState;return t!==null&&Jo(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function Gs(e,t){var n=ns();t=t===void 0?null:t;var r=n.memoizedState;if(t!==null&&Jo(t,r[1]))return r[0];if(r=e(),Ho){Je(!0);try{e()}finally{Je(!1)}}return n.memoizedState=[r,t],r}function Ks(e,t,n){return n===void 0||Io&1073741824&&!(Q&261930)?e.memoizedState=t:(e.memoizedState=n,e=kd(),Lo.lanes|=e,rd|=e,n)}function qs(e,t,n,r){return zr(n,t)?n:bo.current===null?!(Io&106)||Io&1073741824&&!(Q&261930)?(kc=!0,e.memoizedState=n):(e=kd(),Lo.lanes|=e,rd|=e,t):(e=Ks(e,n,r),zr(e,t)||(kc=!0),e)}function Js(e,t,n,r,i){var a=V.p;V.p=a!==0&&8>a?a:8;var o=B.T,s={};s.types=o===null?null:o.types,B.T=s,oc(e,!1,t,n);try{var c=i(),l=B.S;l!==null&&l(s,c),typeof c==`object`&&c&&typeof c.then==`function`?ac(e,t,La(c,r),Od(e)):ac(e,t,r,Od(e))}catch(n){ac(e,t,{then:function(){},status:`rejected`,reason:n},Od())}finally{V.p=a,o!==null&&s.types!==null&&(o.types=s.types),B.T=o}}function Ys(){}function Xs(e,t,n,r){if(e.tag!==5)throw Error(i(476));var a=Zs(e).queue;Js(e,a,t,de,n===null?Ys:function(){return Qs(e),n(r)})}function Zs(e){var t=e.memoizedState;if(t!==null)return t;t={memoizedState:de,baseState:de,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:ss,lastRenderedState:de},next:null};var n={};return t.next={memoizedState:n,baseState:n,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:ss,lastRenderedState:n},next:null},e.memoizedState=t,e=e.alternate,e!==null&&(e.memoizedState=t),t}function Qs(e){var t=Zs(e);t.next===null&&(t=e.alternate.memoizedState),ac(e,t.next.queue,{},Od())}function $s(){return ya(sh)}function ec(){return ns().memoizedState}function tc(){return ns().memoizedState}function nc(e){for(var t=e.return;t!==null;){switch(t.tag){case 24:case 3:var n=Od();e=uo(n);var r=fo(t,e,n);r!==null&&(jd(r,t,n),po(r,t,n)),t={cache:Ea()},e.payload=t;return}t=t.return}}function rc(e,t,n){var r=Od();n={lane:r,revertLane:0,gesture:null,action:n,hasEagerState:!1,eagerState:null,next:null},sc(e)?cc(t,n):(n=wi(e,t,n,r),n!==null&&(jd(n,e,r),lc(n,t,r)))}function ic(e,t,n){ac(e,t,n,Od())}function ac(e,t,n,r){var i={lane:r,revertLane:0,gesture:null,action:n,hasEagerState:!1,eagerState:null,next:null};if(sc(e))cc(t,i);else{var a=e.alternate;if(e.lanes===0&&(a===null||a.lanes===0)&&(a=t.lastRenderedReducer,a!==null))try{var o=t.lastRenderedState,s=a(o,n);if(i.hasEagerState=!0,i.eagerState=s,zr(s,o))return Ci(e,t,i,0),Xu===null&&Si(),!1}catch{}if(n=wi(e,t,i,r),n!==null)return jd(n,e,r),lc(n,t,r),!0}return!1}function oc(e,t,n,r){if(r={lane:2,revertLane:Mf(),gesture:null,action:r,hasEagerState:!1,eagerState:null,next:null},sc(e)){if(t)throw Error(i(479))}else t=wi(e,n,r,2),t!==null&&jd(t,e,2)}function sc(e){var t=e.alternate;return e===Lo||t!==null&&t===Lo}function cc(e,t){Vo=Bo=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function lc(e,t,n){if(n&4194048){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,ft(e,n)}}var uc={readContext:ya,use:as,useCallback:qo,useContext:qo,useEffect:qo,useImperativeHandle:qo,useLayoutEffect:qo,useInsertionEffect:qo,useMemo:qo,useReducer:qo,useRef:qo,useState:qo,useDebugValue:qo,useDeferredValue:qo,useTransition:qo,useSyncExternalStore:qo,useId:qo,useHostTransitionStatus:qo,useFormState:qo,useActionState:qo,useOptimistic:qo,useMemoCache:qo,useCacheRefresh:qo,useEffectEvent:qo},dc={readContext:ya,use:as,useCallback:function(e,t){return ts().memoizedState=[e,t===void 0?null:t],e},useContext:ya,useEffect:Fs,useImperativeHandle:function(e,t,n){n=n==null?null:n.concat([e]),Ns(4194308,4,Vs.bind(null,t,e),n)},useLayoutEffect:function(e,t){return Ns(4194308,4,e,t)},useInsertionEffect:function(e,t){Ns(4,2,e,t)},useMemo:function(e,t){var n=ts();t=t===void 0?null:t;var r=e();if(Ho){Je(!0);try{e()}finally{Je(!1)}}return n.memoizedState=[r,t],r},useReducer:function(e,t,n){var r=ts();if(n!==void 0){var i=n(t);if(Ho){Je(!0);try{n(t)}finally{Je(!1)}}}else i=t;return r.memoizedState=r.baseState=i,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:i},r.queue=e,e=e.dispatch=rc.bind(null,Lo,e),[r.memoizedState,e]},useRef:function(e){var t=ts();return e={current:e},t.memoizedState=e},useState:function(e){e=_s(e);var t=e.queue,n=ic.bind(null,Lo,t);return t.dispatch=n,[e.memoizedState,n]},useDebugValue:Us,useDeferredValue:function(e,t){return Ks(ts(),e,t)},useTransition:function(){var e=_s(!1);return e=Js.bind(null,Lo,e.queue,!0,!1),ts().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,t,n){var r=Lo,a=ts();if(W){if(n===void 0)throw Error(i(407));n=n()}else{if(n=t(),Xu===null)throw Error(i(349));Q&127||fs(r,t,n)}a.memoizedState=n;var o={value:n,getSnapshot:t};return a.queue=o,Fs(ms.bind(null,r,o,e),[e]),r.flags|=2048,js(9,{destroy:void 0},ps.bind(null,r,o,n,t),null),n},useId:function(){var e=ts(),t=Xu.identifierPrefix;if(W){var n=qi,r=Ki;n=(r&~(1<<32-Ye(r)-1)).toString(32)+n,t=`_`+t+`R_`+n,n=Uo++,0<n&&(t+=`H`+n.toString(32)),t+=`_`}else n=Ko++,t=`_`+t+`r_`+n.toString(32)+`_`;return e.memoizedState=t},useHostTransitionStatus:$s,useFormState:Es,useActionState:Es,useOptimistic:function(e){var t=ts();t.memoizedState=t.baseState=e;var n={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return t.queue=n,t=oc.bind(null,Lo,!0,n),n.dispatch=t,[e,t]},useMemoCache:os,useCacheRefresh:function(){return ts().memoizedState=nc.bind(null,Lo)},useEffectEvent:function(e){var t=ts(),n={impl:e};return t.memoizedState=n,function(){if(Yu&2)throw Error(i(440));return n.impl.apply(void 0,arguments)}}},fc={readContext:ya,use:as,useCallback:Ws,useContext:ya,useEffect:Is,useImperativeHandle:Hs,useInsertionEffect:zs,useLayoutEffect:Bs,useMemo:Gs,useReducer:cs,useRef:Ms,useState:function(){return cs(ss)},useDebugValue:Us,useDeferredValue:function(e,t){return qs(ns(),Ro.memoizedState,e,t)},useTransition:function(){var e=cs(ss)[0],t=ns().memoizedState;return[typeof e==`boolean`?e:is(e),t]},useSyncExternalStore:ds,useId:ec,useHostTransitionStatus:$s,useFormState:Ds,useActionState:Ds,useOptimistic:function(e,t){return vs(ns(),Ro,e,t)},useMemoCache:os,useCacheRefresh:tc,useEffectEvent:Rs},pc={readContext:ya,use:as,useCallback:Ws,useContext:ya,useEffect:Is,useImperativeHandle:Hs,useInsertionEffect:zs,useLayoutEffect:Bs,useMemo:Gs,useReducer:us,useRef:Ms,useState:function(){return us(ss)},useDebugValue:Us,useDeferredValue:function(e,t){var n=ns();return Ro===null?Ks(n,e,t):qs(n,Ro.memoizedState,e,t)},useTransition:function(){var e=us(ss)[0],t=ns().memoizedState;return[typeof e==`boolean`?e:is(e),t]},useSyncExternalStore:ds,useId:ec,useHostTransitionStatus:$s,useFormState:As,useActionState:As,useOptimistic:function(e,t){var n=ns();return Ro===null?(n.baseState=e,[e,n.queue.dispatch]):vs(n,Ro,e,t)},useMemoCache:os,useCacheRefresh:tc,useEffectEvent:Rs};function mc(e,t,n,r){t=e.memoizedState,n=n(r,t),n=n==null?t:D({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var hc={enqueueSetState:function(e,t,n){e=e._reactInternals;var r=Od(),i=uo(r);i.payload=t,n!=null&&(i.callback=n),t=fo(e,i,r),t!==null&&(jd(t,e,r),po(t,e,r))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=Od(),i=uo(r);i.tag=1,i.payload=t,n!=null&&(i.callback=n),t=fo(e,i,r),t!==null&&(jd(t,e,r),po(t,e,r))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=Od(),r=uo(n);r.tag=2,t!=null&&(r.callback=t),t=fo(e,r,n),t!==null&&(jd(t,e,n),po(t,e,n))}};function gc(e,t,n,r,i,a,o){return e=e.stateNode,typeof e.shouldComponentUpdate==`function`?e.shouldComponentUpdate(r,a,o):t.prototype&&t.prototype.isPureReactComponent?!Br(n,r)||!Br(i,a):!0}function _c(e,t,n,r){e=t.state,typeof t.componentWillReceiveProps==`function`&&t.componentWillReceiveProps(n,r),typeof t.UNSAFE_componentWillReceiveProps==`function`&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&hc.enqueueReplaceState(t,t.state,null)}function vc(e,t){var n=t;if(`ref`in t)for(var r in n={},t)r!==`ref`&&(n[r]=t[r]);if(e=e.defaultProps)for(var i in n===t&&(n=D({},n)),e)n[i]===void 0&&(n[i]=e[i]);return n}function yc(e){vi(e)}function bc(e){console.error(e)}function xc(e){vi(e)}function Sc(e,t){try{var n=e.onUncaughtError;n(t.value,{componentStack:t.stack})}catch(e){setTimeout(function(){throw e})}}function Cc(e,t,n){try{var r=e.onCaughtError;r(n.value,{componentStack:n.stack,errorBoundary:t.tag===1?t.stateNode:null})}catch(e){setTimeout(function(){throw e})}}function wc(e,t,n){return n=uo(n),n.tag=3,n.payload={element:null},n.callback=function(){Sc(e,t)},n}function Tc(e){return e=uo(e),e.tag=3,e}function Ec(e,t,n,r){var i=n.type.getDerivedStateFromError;if(typeof i==`function`){var a=r.value;e.payload=function(){return i(a)},e.callback=function(){Cc(t,n,r)}}var o=n.stateNode;o!==null&&typeof o.componentDidCatch==`function`&&(e.callback=function(){Cc(t,n,r),typeof i!=`function`&&(hd===null?hd=new Set([this]):hd.add(this));var e=r.stack;this.componentDidCatch(r.value,{componentStack:e===null?``:e})})}function Dc(e,t,n,r,a){if(n.flags|=32768,typeof r==`object`&&r&&typeof r.then==`function`){if(t=n.alternate,t!==null&&ga(t,n,a,!0),n=To.current,n!==null){switch(n.tag){case 31:case 13:case 19:return Eo===null?Ud():n.alternate===null&&nd===0&&(nd=3),n.flags&=-257,n.flags|=65536,n.lanes=a,r===Ka?n.flags|=16384:(t=n.updateQueue,t===null?n.updateQueue=new Set([r]):t.add(r),ff(e,r,a)),!1;case 22:return n.flags|=65536,r===Ka?n.flags|=16384:(t=n.updateQueue,t===null?(t={transitions:null,markerInstances:null,retryQueue:new Set([r])},n.updateQueue=t):(n=t.retryQueue,n===null?t.retryQueue=new Set([r]):n.add(r)),ff(e,r,a)),!1}throw Error(i(435,n.tag))}return ff(e,r,a),Ud(),!1}if(W)return t=To.current,t===null?(r!==ta&&(t=Error(i(423),{cause:r}),ca(Bi(t,n))),e=e.current.alternate,e.flags|=65536,a&=-a,e.lanes|=a,r=Bi(r,n),a=wc(e.stateNode,r,a),mo(e,a),nd!==4&&(nd=2)):(!(t.flags&65536)&&(t.flags|=256),t.flags|=65536,t.lanes=a,r!==ta&&(e=Error(i(422),{cause:r}),ca(Bi(e,n)))),!1;var o=Error(i(520),{cause:r});if(o=Bi(o,n),cd===null?cd=[o]:cd.push(o),nd!==4&&(nd=2),t===null)return!0;r=Bi(r,n),n=t;do{switch(n.tag){case 3:return n.flags|=65536,e=a&-a,n.lanes|=e,e=wc(n.stateNode,r,e),mo(n,e),!1;case 1:if(t=n.type,o=n.stateNode,!(n.flags&128)&&(typeof t.getDerivedStateFromError==`function`||o!==null&&typeof o.componentDidCatch==`function`&&(hd===null||!hd.has(o))))return n.flags|=65536,a&=-a,n.lanes|=a,a=Tc(a),Ec(a,e,n,r),mo(n,a),!1;break;case 22:if(n.memoizedState!==null)return n.flags|=65536,!1}n=n.return}while(n!==null);return!1}var Oc=Error(i(461)),kc=!1;function Ac(e,t,n,r){t.child=e===null?oo(t,null,n,r):ao(t,e.child,n,r)}function jc(e,t,n,r,i){n=n.render;var a=t.ref;if(`ref`in r){var o={};for(var s in r)s!==`ref`&&(o[s]=r[s])}else o=r;return va(t),r=Yo(e,t,n,o,a,i),s=q(),e!==null&&!kc?($o(e,t,i),rl(e,t,i)):(W&&s&&Xi(t),t.flags|=1,Ac(e,t,r,i),t.child)}function J(e,t,n,r,i){if(e===null){var a=n.type;return typeof a==`function`&&!ji(a)&&a.defaultProps===void 0&&n.compare===null?(t.tag=15,t.type=a,Mc(e,t,a,r,i)):(e=Pi(n.type,null,r,t,t.mode,i),e.ref=t.ref,e.return=t,t.child=e)}if(a=e.child,!il(e,i)){var o=a.memoizedProps;if(n=n.compare,n=n===null?Br:n,n(o,r)&&e.ref===t.ref)return rl(e,t,i)}return t.flags|=1,e=Mi(a,r),e.ref=t.ref,e.return=t,t.child=e}function Mc(e,t,n,r,i){if(e!==null){var a=e.memoizedProps;if(Br(a,r)&&e.ref===t.ref){if(kc=!1,t.pendingProps=r=a,il(e,i))e.flags&131072&&(kc=!0);else return t.lanes=e.lanes,rl(e,t,i)}}return zc(e,t,n,r,i)}function Y(e,t,n,r){var i=r.children,a=e===null?null:e.memoizedState;if(e===null&&t.stateNode===null&&(t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),r.mode===`hidden`){if(t.flags&128){if(a=a===null?n:a.baseLanes|n,e!==null){for(r=t.child=e.child,i=0;r!==null;)i=i|r.lanes|r.childLanes,r=r.sibling;r=i&~a}else r=0,t.child=null;return Pc(e,t,a,n,r)}if(n&536870912)t.memoizedState={baseLanes:0,cachePool:null},e!==null&&Va(t,a===null?null:a.cachePool),a===null?Co():So(t,a),ko(t);else return r=t.lanes=536870912,Pc(e,t,a===null?n:a.baseLanes|n,n,r)}else a===null?(e!==null&&Va(t,null),Co(),Ao()):(Va(t,a.cachePool),So(t,a),Ao(),t.memoizedState=null);return Ac(e,t,i,n),t.child}function Nc(e,t){return e!==null&&e.tag===22||t.stateNode!==null||(t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),t.sibling}function Pc(e,t,n,r,i){var a=Ba();return a=a===null?null:{parent:Ta._currentValue,pool:a},t.memoizedState={baseLanes:n,cachePool:a},e!==null&&Va(t,null),Co(),ko(t),e!==null&&ga(e,t,r,!0),t.childLanes=i,null}function Fc(e,t){return t=Jc({mode:t.mode,children:t.children},e.mode),t.ref=e.ref,e.child=t,t.return=e,t}function Ic(e,t,n){return ao(t,e.child,null,n),e=Fc(t,t.pendingProps),e.flags|=2,jo(t),t.memoizedState=null,e}function Lc(e,t,n){var r=t.pendingProps,a=!!(t.flags&128);if(t.flags&=-129,e===null){if(W){if(r.mode===`hidden`)return e=Fc(t,r),t.lanes=536870912,e.memoizedState={baseLanes:0,cachePool:null},Nc(null,e);if(Oo(t),(e=ea)?(e=am(e,K),e=e!==null&&e.data===`&`?e:null,e!==null&&(t.memoizedState={dehydrated:e,treeContext:Gi===null?null:{id:Ki,overflow:qi},retryLane:536870912,hydrationErrors:null},n=Li(e),n.return=t,t.child=n,$i=t,ea=null)):e=null,e===null)throw na(t);return t.lanes=536870912,null}return Fc(t,r)}var o=e.memoizedState;if(o!==null){var s=o.dehydrated;if(Oo(t),a){if(t.flags&256)t.flags&=-257,t=Ic(e,t,n);else if(t.memoizedState!==null)t.child=e.child,t.flags|=128,t=null;else throw Error(i(558))}else if(kc||ga(e,t,n,!1),a=(n&e.childLanes)!==0,kc||a){if(bo.current===null){if(r=Xu,r!==null&&(s=pt(r,n),s!==0&&s!==o.retryLane))throw o.retryLane=s,Ti(e,s),jd(r,e,s),Oc;Ud()}t=Ic(e,t,n)}else e=o.treeContext,ea=lm(s.nextSibling),$i=t,W=!0,G=null,K=!1,e!==null&&Qi(t,e),t=Fc(t,r),t.flags|=134221824;return t}return e=Mi(e.child,{mode:r.mode,children:r.children}),e.ref=t.ref,t.child=e,e.return=t,e}function Rc(e,t){var n=t.ref;if(n===null)e!==null&&e.ref!==null&&(t.flags|=4194816);else{if(typeof n!=`function`&&typeof n!=`object`)throw Error(i(284));(e===null||e.ref!==n)&&(t.flags|=4194816)}}function zc(e,t,n,r,i){return va(t),n=Yo(e,t,n,r,void 0,i),r=q(),e!==null&&!kc?($o(e,t,i),rl(e,t,i)):(W&&r&&Xi(t),t.flags|=1,Ac(e,t,n,i),t.child)}function Bc(e,t,n,r,i,a){return va(t),t.updateQueue=null,n=Zo(t,r,n,i),Xo(e),r=q(),e!==null&&!kc?($o(e,t,a),rl(e,t,a)):(W&&r&&Xi(t),t.flags|=1,Ac(e,t,n,a),t.child)}function Vc(e,t,n,r,i){if(va(t),t.stateNode===null){var a=Oi,o=n.contextType;typeof o==`object`&&o&&(a=ya(o)),a=new n(r,a),t.memoizedState=a.state!==null&&a.state!==void 0?a.state:null,a.updater=hc,t.stateNode=a,a._reactInternals=t,a=t.stateNode,a.props=r,a.state=t.memoizedState,a.refs={},co(t),o=n.contextType,a.context=typeof o==`object`&&o?ya(o):Oi,a.state=t.memoizedState,o=n.getDerivedStateFromProps,typeof o==`function`&&(mc(t,n,o,r),a.state=t.memoizedState),typeof n.getDerivedStateFromProps==`function`||typeof a.getSnapshotBeforeUpdate==`function`||typeof a.UNSAFE_componentWillMount!=`function`&&typeof a.componentWillMount!=`function`||(o=a.state,typeof a.componentWillMount==`function`&&a.componentWillMount(),typeof a.UNSAFE_componentWillMount==`function`&&a.UNSAFE_componentWillMount(),o!==a.state&&hc.enqueueReplaceState(a,a.state,null),_o(t,r,a,i),go(),a.state=t.memoizedState),typeof a.componentDidMount==`function`&&(t.flags|=4194308),r=!0}else if(e===null){a=t.stateNode;var s=t.memoizedProps,c=vc(n,s);a.props=c;var l=a.context,u=n.contextType;o=Oi,typeof u==`object`&&u&&(o=ya(u));var d=n.getDerivedStateFromProps;u=typeof d==`function`||typeof a.getSnapshotBeforeUpdate==`function`,s=t.pendingProps!==s,u||typeof a.UNSAFE_componentWillReceiveProps!=`function`&&typeof a.componentWillReceiveProps!=`function`||(s||l!==o)&&_c(t,a,r,o),so=!1;var f=t.memoizedState;a.state=f,_o(t,r,a,i),go(),l=t.memoizedState,s||f!==l||so?(typeof d==`function`&&(mc(t,n,d,r),l=t.memoizedState),(c=so||gc(t,n,c,r,f,l,o))?(u||typeof a.UNSAFE_componentWillMount!=`function`&&typeof a.componentWillMount!=`function`||(typeof a.componentWillMount==`function`&&a.componentWillMount(),typeof a.UNSAFE_componentWillMount==`function`&&a.UNSAFE_componentWillMount()),typeof a.componentDidMount==`function`&&(t.flags|=4194308)):(typeof a.componentDidMount==`function`&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=l),a.props=r,a.state=l,a.context=o,r=c):(typeof a.componentDidMount==`function`&&(t.flags|=4194308),r=!1)}else{a=t.stateNode,lo(e,t),o=t.memoizedProps,u=vc(n,o),a.props=u,d=t.pendingProps,f=a.context,l=n.contextType,c=Oi,typeof l==`object`&&l&&(c=ya(l)),s=n.getDerivedStateFromProps,(l=typeof s==`function`||typeof a.getSnapshotBeforeUpdate==`function`)||typeof a.UNSAFE_componentWillReceiveProps!=`function`&&typeof a.componentWillReceiveProps!=`function`||(o!==d||f!==c)&&_c(t,a,r,c),so=!1,f=t.memoizedState,a.state=f,_o(t,r,a,i),go();var p=t.memoizedState;o!==d||f!==p||so||e!==null&&e.dependencies!==null&&_a(e.dependencies)?(typeof s==`function`&&(mc(t,n,s,r),p=t.memoizedState),(u=so||gc(t,n,u,r,f,p,c)||e!==null&&e.dependencies!==null&&_a(e.dependencies))?(l||typeof a.UNSAFE_componentWillUpdate!=`function`&&typeof a.componentWillUpdate!=`function`||(typeof a.componentWillUpdate==`function`&&a.componentWillUpdate(r,p,c),typeof a.UNSAFE_componentWillUpdate==`function`&&a.UNSAFE_componentWillUpdate(r,p,c)),typeof a.componentDidUpdate==`function`&&(t.flags|=4),typeof a.getSnapshotBeforeUpdate==`function`&&(t.flags|=1024)):(typeof a.componentDidUpdate!=`function`||o===e.memoizedProps&&f===e.memoizedState||(t.flags|=4),typeof a.getSnapshotBeforeUpdate!=`function`||o===e.memoizedProps&&f===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=p),a.props=r,a.state=p,a.context=c,r=u):(typeof a.componentDidUpdate!=`function`||o===e.memoizedProps&&f===e.memoizedState||(t.flags|=4),typeof a.getSnapshotBeforeUpdate!=`function`||o===e.memoizedProps&&f===e.memoizedState||(t.flags|=1024),r=!1)}return a=r,Rc(e,t),r=!!(t.flags&128),a||r?(a=t.stateNode,n=r&&typeof n.getDerivedStateFromError!=`function`?null:a.render(),t.flags|=1,e!==null&&r?(t.child=ao(t,e.child,null,i),t.child=ao(t,null,n,i)):Ac(e,t,n,i),t.memoizedState=a.state,e=t.child):e=rl(e,t,i),e}function Hc(e,t,n,r){return oa(),t.flags|=256,Ac(e,t,n,r),t.child}var Uc={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function Wc(e){return{baseLanes:e,cachePool:Ha()}}function Gc(e,t,n){return e=e===null?0:e.childLanes&~n,t&&(e|=od),e}function Kc(e,t,n){var r=t.pendingProps,i=!1,a=!!(t.flags&128),o;if((o=a)||(o=e!==null&&e.memoizedState===null?!1:!!(Mo.current&2)),o&&(i=!0,t.flags&=-129),o=!!(t.flags&32),t.flags&=-33,e===null){if(W){if(i?Do(t):Ao(),(e=ea)?(e=am(e,K),e=e!==null&&e.data!==`&`?e:null,e!==null&&(t.memoizedState={dehydrated:e,treeContext:Gi===null?null:{id:Ki,overflow:qi},retryLane:536870912,hydrationErrors:null},n=Li(e),n.return=t,t.child=n,$i=t,ea=null)):e=null,e===null)throw na(t);return t.lanes=sm(e)?32:536870912,null}return a=r.children,r=r.fallback,i?(Ao(),i=t.mode,a=Jc({mode:`hidden`,children:a},i),r=Fi(r,i,n,null),a.return=t,r.return=t,a.sibling=r,t.child=a,r=t.child,r.memoizedState=Wc(n),r.childLanes=Gc(e,o,n),t.memoizedState=Uc,Nc(null,r)):(Do(t),qc(t,a))}var s=e.memoizedState;if(s!==null){var c=s.dehydrated;if(c!==null)return Xc(e,t,a,o,r,c,s,n)}return i?(Ao(),i=r.fallback,a=t.mode,s=e.child,c=s.sibling,r=Mi(s,{mode:`hidden`,children:r.children}),r.subtreeFlags=s.subtreeFlags&1206910976,c===null?(i=Fi(i,a,n,null),i.flags|=2):i=Mi(c,i),i.return=t,r.return=t,r.sibling=i,t.child=r,Nc(null,r),r=t.child,i=e.child.memoizedState,i===null?i=Wc(n):(a=i.cachePool,a===null?a=Ha():(s=Ta._currentValue,a=a.parent===s?a:{parent:s,pool:s}),i={baseLanes:i.baseLanes|n,cachePool:a}),r.memoizedState=i,r.childLanes=Gc(e,o,n),t.memoizedState=Uc,Nc(e.child,r)):(Do(t),n=e.child,e=n.sibling,n=Mi(n,{mode:`visible`,children:r.children}),n.return=t,n.sibling=null,e!==null&&(o=t.deletions,o===null?(t.deletions=[e],t.flags|=16):o.push(e)),t.child=n,t.memoizedState=null,n)}function qc(e,t){return t=Jc({mode:`visible`,children:t},e.mode),t.return=e,e.child=t}function Jc(e,t){return e=Ai(22,e,null,t),e.lanes=0,e}function Yc(e,t,n){return ao(t,e.child,null,n),e=qc(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function Xc(e,t,n,r,a,o,s,c){if(n)return t.flags&256?(Do(t),t.flags&=-257,Yc(e,t,c)):t.memoizedState===null?(Ao(),o=a.fallback,s=t.mode,a=Jc({mode:`visible`,children:a.children},s),o=Fi(o,s,c,null),o.flags|=2,a.return=t,o.return=t,a.sibling=o,t.child=a,ao(t,e.child,null,c),a=t.child,a.memoizedState=Wc(c),a.childLanes=Gc(e,r,c),t.memoizedState=Uc,Nc(null,a)):(Ao(),t.child=e.child,t.flags|=128,null);if(Do(t),sm(o)){if(r=o.nextSibling&&o.nextSibling.dataset,r)var l=r.dgst;return r=l,r!==``&&(a=Error(i(419)),a.stack=``,a.digest=r,ca({value:a,source:null,stack:null})),Yc(e,t,c)}if(kc||ga(e,t,c,!1),r=(c&e.childLanes)!==0,kc||r){if(bo.current!==null)return Yc(e,t,c);if(r=Xu,r!==null&&(a=pt(r,c),a!==0&&a!==s.retryLane))throw s.retryLane=a,Ti(e,a),jd(r,e,a),Oc;return om(o)||Ud(),Yc(e,t,c)}return om(o)?(t.flags|=192,t.child=e.child,null):(e=s.treeContext,ea=lm(o.nextSibling),$i=t,W=!0,G=null,K=!1,e!==null&&Qi(t,e),t=qc(t,a.children),t.flags|=134221824,t)}function Zc(e,t,n){e.lanes|=t;var r=e.alternate;r!==null&&(r.lanes|=t),ma(e.return,t,n)}function Qc(e){for(var t=null;e!==null;){var n=e.alternate;n!==null&&Fo(n)===null&&(t=e),e=e.sibling}return t}function $c(e,t,n,r,i,a){var o=e.memoizedState;o===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i,treeForkCount:a}:(o.isBackwards=t,o.rendering=null,o.renderingStartTime=0,o.last=r,o.tail=n,o.tailMode=i,o.treeForkCount=a)}function el(e){var t=e.child;for(e.child=null;t!==null;){var n=t.sibling;t.sibling=e.child,e.child=t,t=n}}function tl(e,t,n){var r=t.pendingProps,i=r.revealOrder,a=r.tail;r=r.children;var o=Mo.current;if(t.flags&128)return No(t,o),null;var s=!!(o&2);if(s?(o=o&1|2,t.flags|=128):o&=1,No(t,o),i===`backwards`&&e!==null?(el(e),Ac(e,t,r,n),el(e)):Ac(e,t,r,n),r=W?U:0,!s&&e!==null&&e.flags&128)a:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Zc(e,n,t);else if(e.tag===19)Zc(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break a;for(;e.sibling===null;){if(e.return===null||e.return===t)break a;e=e.return}e.sibling.return=e.return,e=e.sibling}switch(i){case`backwards`:n=Qc(t.child),n===null?(i=t.child,t.child=null):(i=n.sibling,n.sibling=null,el(t)),$c(t,!0,i,null,a,r);break;case`unstable_legacy-backwards`:for(n=null,i=t.child,t.child=null;i!==null;){if(e=i.alternate,e!==null&&Fo(e)===null){t.child=i;break}e=i.sibling,i.sibling=n,n=i,i=e}$c(t,!0,n,null,a,r);break;case`together`:$c(t,!1,null,null,void 0,r);break;case`independent`:t.memoizedState=null;break;default:n=Qc(t.child),n===null?(i=t.child,t.child=null):(i=n.sibling,n.sibling=null),$c(t,!1,i,n,a,r)}return t.child}function nl(e,t,n){var r=t.pendingProps;return fa(t,t.type,r.value),Ac(e,t,r.children,n),t.child}function rl(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),rd|=t.lanes,(n&t.childLanes)===0){if(e!==null){if(ga(e,t,n,!1),(n&t.childLanes)===0)return null}else return null}if(e!==null&&t.child!==e.child)throw Error(i(153));if(t.child!==null){for(e=t.child,n=Mi(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=Mi(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function il(e,t){return(e.lanes&t)!==0||(e=e.dependencies,!!(e!==null&&_a(e)))}function al(e,t,n){switch(t.tag){case 3:xe(t,t.stateNode.containerInfo),fa(t,Ta,e.memoizedState.cache),oa();break;case 27:case 5:Ce(t);break;case 4:xe(t,t.stateNode.containerInfo);break;case 10:fa(t,t.type,t.memoizedProps.value);break;case 31:if(t.memoizedState!==null)return t.flags|=128,Oo(t),null;break;case 13:var r=t.memoizedState;if(r!==null){if(r.dehydrated!==null)return Do(t),t.flags|=128,null;r=ga(e,t,n,!1);var i=t.child.childLanes;return r||(n&i)!==0?Kc(e,t,n):(Do(t),e=rl(e,t,n),e===null?null:e.sibling)}Do(t);break;case 19:if(t.flags&128)return tl(e,t,n);if(i=!!(e.flags&128),r=(n&t.childLanes)!==0,r||=(ga(e,t,n,!1),(n&t.childLanes)!==0),i){if(r)return tl(e,t,n);t.flags|=128}if(i=t.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),No(t,Mo.current),r)break;return null;case 22:return t.lanes=0,Y(e,t,n,t.pendingProps);case 24:fa(t,Ta,e.memoizedState.cache)}return rl(e,t,n)}function ol(e,t,n){if(e!==null){if(e.memoizedProps!==t.pendingProps)kc=!0;else{if(!il(e,n)&&!(t.flags&128))return kc=!1,al(e,t,n);kc=!!(e.flags&131072)}}else kc=!1,W&&t.flags&1048576&&Yi(t,U,t.index);switch(t.lanes=0,t.tag){case 16:a:{var r=t.pendingProps;if(e=Ya(t.elementType),t.type=e,typeof e==`function`)ji(e)?(r=vc(e,r),t.tag=1,t=Vc(null,t,e,r,n)):(t.tag=0,t=zc(null,t,e,r,n));else{if(e!=null){var a=e.$$typeof;if(a===I){t.tag=11,t=jc(null,t,e,r,n);break a}if(a===R){t.tag=14,t=J(null,t,e,r,n);break a}if(a===F){t.tag=10,t.type=e,t=nl(null,t,n);break a}}throw t=le(e)||e,Error(i(306,t,``))}}return t;case 0:return zc(e,t,t.type,t.pendingProps,n);case 1:return r=t.type,a=vc(r,t.pendingProps),Vc(e,t,r,a,n);case 3:a:{if(xe(t,t.stateNode.containerInfo),e===null)throw Error(i(387));r=t.pendingProps;var o=t.memoizedState;a=o.element,lo(e,t),_o(t,r,null,n);var s=t.memoizedState;if(r=s.cache,fa(t,Ta,r),r!==o.cache&&ha(t,[Ta],n,!0),go(),r=s.element,o.isDehydrated){if(o={element:r,isDehydrated:!1,cache:s.cache},t.updateQueue.baseState=o,t.memoizedState=o,t.flags&256){t=Hc(e,t,r,n);break a}if(r!==a){a=Bi(Error(i(424)),t),ca(a),t=Hc(e,t,r,n);break a}switch(e=t.stateNode.containerInfo,e.nodeType){case 9:e=e.body;break;default:e=e.nodeName===`HTML`?e.ownerDocument.body:e}for(ea=lm(e.firstChild),$i=t,W=!0,G=null,K=!0,n=oo(t,null,r,n),t.child=n;n;)n.flags=n.flags&-3|134221824,n=n.sibling}else{if(oa(),r===a){t=rl(e,t,n);break a}Ac(e,t,r,n)}t=t.child}return t;case 26:return Rc(e,t),e===null?(n=Nm(t.type,null,t.pendingProps,null))?t.memoizedState=n:W||(t.stateNode=fp(t.type,t.pendingProps,ye.current,t)):t.memoizedState=Nm(t.type,e.memoizedProps,t.pendingProps,e.memoizedState),null;case 27:return Ce(t),e===null&&W&&(r=t.stateNode=hm(t.type,t.pendingProps,ye.current),$i=t,K=!0,a=ea,Sp(t.type)?(um=a,ea=lm(r.firstChild)):ea=a),Ac(e,t,t.pendingProps.children,n),Rc(e,t),e===null&&(t.flags|=4194304),t.child;case 5:return e===null&&W&&((a=r=ea)&&(r=rm(r,t.type,t.pendingProps,K),r===null?a=!1:(t.stateNode=r,$i=t,ea=lm(r.firstChild),K=!1,a=!0)),a||na(t)),Ce(t),a=t.type,o=t.pendingProps,s=e===null?null:e.memoizedProps,r=o.children,pp(a,o)?r=null:s!==null&&pp(a,s)&&(t.flags|=32),t.memoizedState!==null&&(a=Yo(e,t,Qo,null,null,n),sh._currentValue=a),Rc(e,t),Ac(e,t,r,n),t.child;case 6:return e===null&&W&&((e=n=ea)&&(n=im(n,t.pendingProps,K),n===null?e=!1:(t.stateNode=n,$i=t,ea=null,e=!0)),e||na(t)),null;case 13:return Kc(e,t,n);case 4:return xe(t,t.stateNode.containerInfo),r=t.pendingProps,e===null?t.child=ao(t,null,r,n):Ac(e,t,r,n),t.child;case 11:return jc(e,t,t.type,t.pendingProps,n);case 7:return r=t.pendingProps,Rc(e,t),Ac(e,t,r,n),t.child;case 8:return Ac(e,t,t.pendingProps.children,n),t.child;case 12:return Ac(e,t,t.pendingProps.children,n),t.child;case 10:return nl(e,t,n);case 9:return a=t.type._context,r=t.pendingProps.children,va(t),a=ya(a),r=r(a),t.flags|=1,Ac(e,t,r,n),t.child;case 14:return J(e,t,t.type,t.pendingProps,n);case 15:return Mc(e,t,t.type,t.pendingProps,n);case 19:return tl(e,t,n);case 31:return Lc(e,t,n);case 22:return Y(e,t,n,t.pendingProps);case 24:return va(t),r=ya(Ta),e===null?(a=Ba(),a===null&&(a=Xu,o=Ea(),a.pooledCache=o,o.refCount++,o!==null&&(a.pooledCacheLanes|=n),a=o),t.memoizedState={parent:r,cache:a},co(t),fa(t,Ta,a)):((e.lanes&n)!==0&&(lo(e,t),_o(t,null,null,n),go()),a=e.memoizedState,o=t.memoizedState,a.parent===r?(r=o.cache,fa(t,Ta,r),r!==a.cache&&ha(t,[Ta],n,!0)):(a={parent:r,cache:r},t.memoizedState=a,t.lanes===0&&(t.memoizedState=t.updateQueue.baseState=a),fa(t,Ta,r))),Ac(e,t,t.pendingProps.children,n),t.child;case 30:return t.stateNode===null&&(t.stateNode={autoName:null,paired:null,clones:null,ref:null}),r=t.pendingProps,r.name!=null&&r.name!==`auto`?t.flags|=e===null?18882560:18874368:W&&Xi(t),e!==null&&e.memoizedProps.name!==r.name?t.flags|=4194816:Rc(e,t),Ac(e,t,r.children,n),t.child;case 29:throw t.pendingProps}throw Error(i(156,t.tag))}function sl(e){e.flags|=4}function cl(e,t,n,r,i){var a;if((a=!!(e.mode&32))&&(a=n===null?Jm(t,r):Jm(t,r)&&(r.src!==n.src||r.srcSet!==n.srcSet)),a){if(e.flags|=16777216,(i&335544128)===i){if(e.stateNode.complete)e.flags|=8192;else if(Bd())e.flags|=8192;else throw Xa=Ka,Wa}}else e.flags&=-16777217}function ll(e,t){if(t.type!==`stylesheet`||t.state.loading&4)e.flags&=-16777217;else if(e.flags|=16777216,!Ym(t)){if(Bd())e.flags|=8192;else throw Xa=Ka,Wa}}function ul(e,t){t!==null&&(e.flags|=4),e.flags&16384&&(t=e.tag===22?536870912:st(),e.lanes|=t,sd|=t)}function dl(e,t){if(!W)switch(e.tailMode){case`visible`:break;case`collapsed`:for(var n=e.tail,r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null;break;default:for(t=e.tail,n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null}}function fl(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,r=0;if(t)for(var i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&1206910976,r|=i.flags&1206910976,i.return=e,i=i.sibling;else for(i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=e,i=i.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function pl(e,t,n){var r=t.pendingProps;switch(Zi(t),t.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return fl(t),null;case 1:return fl(t),null;case 3:return n=t.stateNode,r=null,e!==null&&(r=e.memoizedState.cache),t.memoizedState.cache!==r&&(t.flags|=2048),pa(Ta),Se(),n.pendingContext&&(n.context=n.pendingContext,n.pendingContext=null),(e===null||e.child===null)&&(aa(t)?sl(t):e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,sa())),fl(t),null;case 26:var a=t.type,o=t.memoizedState;return e===null?(sl(t),o===null?(fl(t),cl(t,a,null,r,n)):(fl(t),ll(t,o))):o?o===e.memoizedState?(fl(t),t.flags&=-16777217):(sl(t),fl(t),ll(t,o)):(e=e.memoizedProps,e!==r&&sl(t),fl(t),cl(t,a,e,r,n)),null;case 27:if(we(t),n=ye.current,a=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==r&&sl(t);else{if(!r){if(t.stateNode===null)throw Error(i(166));return fl(t),t.subtreeFlags&=-33554433,null}e=_e.current,aa(t)?ra(t,e):(e=hm(a,r,n),t.stateNode=e,sl(t))}return fl(t),t.subtreeFlags&=-33554433,null;case 5:if(we(t),a=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==r&&sl(t);else{if(!r){if(t.stateNode===null)throw Error(i(166));return fl(t),t.subtreeFlags&=-33554433,null}if(o=_e.current,aa(t))ra(t,o);else{var s=lp(ye.current);switch(o){case 1:o=s.createElementNS(`http://www.w3.org/2000/svg`,a);break;case 2:o=s.createElementNS(`http://www.w3.org/1998/Math/MathML`,a);break;default:switch(a){case`svg`:o=s.createElementNS(`http://www.w3.org/2000/svg`,a);break;case`math`:o=s.createElementNS(`http://www.w3.org/1998/Math/MathML`,a);break;case`script`:o=s.createElement(`div`),o.innerHTML=`<script><\/script>`,o=o.removeChild(o.firstChild);break;case`select`:o=typeof r.is==`string`?s.createElement(`select`,{is:r.is}):s.createElement(`select`),r.multiple?o.multiple=!0:r.size&&(o.size=r.size);break;default:o=typeof r.is==`string`?s.createElement(a,{is:r.is}):s.createElement(a)}}o[yt]=t,o[bt]=r;a:for(s=t.child;s!==null;){if(s.tag===5||s.tag===6)o.appendChild(s.stateNode);else if(s.tag!==4&&s.tag!==27&&s.child!==null){s.child.return=s,s=s.child;continue}if(s===t)break a;for(;s.sibling===null;){if(s.return===null||s.return===t)break a;s=s.return}s.sibling.return=s.return,s=s.sibling}t.stateNode=o;a:switch(np(o,a,r),a){case`button`:case`input`:case`select`:case`textarea`:r=!!r.autoFocus;break a;case`img`:r=!0;break a;default:r=!1}r&&sl(t)}}return fl(t),t.subtreeFlags&=-33554433,cl(t,t.type,e===null?null:e.memoizedProps,t.pendingProps,n),null;case 6:if(e&&t.stateNode!=null)e.memoizedProps!==r&&sl(t);else{if(typeof r!=`string`&&t.stateNode===null)throw Error(i(166));if(e=ye.current,aa(t)){if(e=t.stateNode,n=t.memoizedProps,r=null,a=$i,a!==null)switch(a.tag){case 27:case 5:r=a.memoizedProps}e[yt]=t,e=!!(e.nodeValue===n||r!==null&&!0===r.suppressHydrationWarning||$f(e.nodeValue,n)),e||na(t,!0)}else e=lp(e).createTextNode(r),e[yt]=t,t.stateNode=e}return fl(t),null;case 31:if(n=t.memoizedState,e===null||e.memoizedState!==null){if(r=aa(t),n!==null){if(e===null){if(!r)throw Error(i(318));if(e=t.memoizedState,e=e===null?null:e.dehydrated,!e)throw Error(i(557));e[yt]=t}else oa(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;fl(t),e=!1}else n=sa(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=n),e=!0;if(!e)return t.flags&256?(jo(t),t):(jo(t),null);if(t.flags&128)throw Error(i(558))}return fl(t),null;case 13:if(r=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(a=aa(t),r!==null&&r.dehydrated!==null){if(e===null){if(!a)throw Error(i(318));if(a=t.memoizedState,a=a===null?null:a.dehydrated,!a)throw Error(i(317));a[yt]=t}else oa(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;fl(t),a=!1}else a=sa(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=a),a=!0;if(!a)return t.flags&256?(jo(t),t):(jo(t),null)}return jo(t),t.flags&128?(t.lanes=n,t):(n=r!==null,e=e!==null&&e.memoizedState!==null,n&&(r=t.child,a=null,r.alternate!==null&&r.alternate.memoizedState!==null&&r.alternate.memoizedState.cachePool!==null&&(a=r.alternate.memoizedState.cachePool.pool),o=null,r.memoizedState!==null&&r.memoizedState.cachePool!==null&&(o=r.memoizedState.cachePool.pool),o!==a&&(r.flags|=2048)),n!==e&&n&&(t.child.flags|=8192),ul(t,t.updateQueue),fl(t),null);case 4:return Se(),e===null&&Uf(t.stateNode.containerInfo),t.flags|=67108864,fl(t),null;case 10:return pa(t.type),fl(t),null;case 19:if(Po(t),r=t.memoizedState,r===null)return fl(t),null;if(a=!!(t.flags&128),o=r.rendering,o===null){if(a)dl(r,!1);else{if(nd!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(o=Fo(e),o!==null){for(t.flags|=128,dl(r,!1),e=o.updateQueue,t.updateQueue=e,ul(t,e),t.subtreeFlags=0,e=n,n=t.child;n!==null;)Ni(n,e),n=n.sibling;return No(t,Mo.current&1|2),W&&Ji(t,r.treeForkCount),t.child}e=e.sibling}r.tail!==null&&Le()>pd&&(t.flags|=128,a=!0,dl(r,!1),t.lanes=4194304)}}else{if(!a){if(e=Fo(o),e!==null){if(t.flags|=128,a=!0,e=e.updateQueue,t.updateQueue=e,ul(t,e),dl(r,!0),r.tail===null&&r.tailMode!==`collapsed`&&r.tailMode!==`visible`&&!o.alternate&&!W)return fl(t),null}else 2*Le()-r.renderingStartTime>pd&&n!==536870912&&(t.flags|=128,a=!0,dl(r,!1),t.lanes=4194304)}r.isBackwards?(o.sibling=t.child,t.child=o):(e=r.last,e===null?t.child=o:e.sibling=o,r.last=o)}if(r.tail!==null){e=r.tail;a:{for(n=e;n!==null;){if(n.alternate!==null){n=!1;break a}n=n.sibling}n=!0}return r.rendering=e,r.tail=e.sibling,r.renderingStartTime=Le(),e.sibling=null,o=Mo.current,o=a?o&1|2:o&1,r.tailMode===`visible`||r.tailMode===`collapsed`||!n||W?No(t,o):(n=o,ge(To,t),ge(Mo,n),Eo===null&&(Eo=t)),W&&Ji(t,r.treeForkCount),e}return fl(t),null;case 22:case 23:return jo(t),wo(),r=t.memoizedState!==null,e===null?r&&(t.flags|=8192):e.memoizedState!==null!==r&&(t.flags|=8192),r?n&536870912&&!(t.flags&128)&&(fl(t),t.subtreeFlags&6&&(t.flags|=8192)):fl(t),n=t.updateQueue,n!==null&&ul(t,n.retryQueue),n=null,e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(n=e.memoizedState.cachePool.pool),r=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(r=t.memoizedState.cachePool.pool),r!==n&&(t.flags|=2048),e!==null&&he(za),null;case 24:return n=null,e!==null&&(n=e.memoizedState.cache),t.memoizedState.cache!==n&&(t.flags|=2048),pa(Ta),fl(t),null;case 25:return null;case 30:return t.flags|=33554432,fl(t),null}throw Error(i(156,t.tag))}function ml(e,t){switch(Zi(t),t.tag){case 1:return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return pa(Ta),Se(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 26:case 27:case 5:return we(t),null;case 31:if(t.memoizedState!==null){if(jo(t),t.alternate===null)throw Error(i(340));oa()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 13:if(jo(t),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(i(340));oa()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return Po(t),e=t.flags,e&65536?(t.flags=e&-65537|128,e=t.memoizedState,e!==null&&(e.rendering=null,e.tail=null),t.flags|=4,t):null;case 4:return Se(),null;case 10:return pa(t.type),null;case 22:case 23:return jo(t),wo(),e!==null&&he(za),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 24:return pa(Ta),null;case 25:return null;default:return null}}function hl(e,t){switch(Zi(t),t.tag){case 3:pa(Ta),Se();break;case 26:case 27:case 5:we(t);break;case 4:Se();break;case 31:t.memoizedState!==null&&jo(t);break;case 13:jo(t);break;case 19:Po(t);break;case 10:pa(t.type);break;case 22:case 23:jo(t),wo(),e!==null&&he(za);break;case 24:pa(Ta)}}function gl(e,t){try{var n=t.updateQueue,r=n===null?null:n.lastEffect;if(r!==null){var i=r.next;n=i;do{if((n.tag&e)===e){r=void 0;var a=n.create,o=n.inst;r=a(),o.destroy=r}n=n.next}while(n!==i)}}catch(e){df(t,t.return,e)}}function _l(e,t,n){try{var r=t.updateQueue,i=r===null?null:r.lastEffect;if(i!==null){var a=i.next;r=a;do{if((r.tag&e)===e){var o=r.inst,s=o.destroy;if(s!==void 0){o.destroy=void 0,i=t;var c=n,l=s;try{l()}catch(e){df(i,c,e)}}}r=r.next}while(r!==a)}}catch(e){df(t,t.return,e)}}function vl(e){var t=e.updateQueue;if(t!==null){var n=e.stateNode;try{yo(t,n)}catch(t){df(e,e.return,t)}}}function yl(e,t,n){n.props=vc(e.type,e.memoizedProps),n.state=e.memoizedState;try{n.componentWillUnmount()}catch(n){df(e,t,n)}}function bl(e,t){try{var n=e.ref;if(n!==null){switch(e.tag){case 26:case 27:case 5:var r=e.stateNode;break;case 30:var i=e.stateNode,a=hi(e.memoizedProps,i);(i.ref===null||i.ref.name!==a)&&(i.ref=Pp(a)),r=i.ref;break;case 7:if(e.stateNode===null){var o=new Fp(e);h(e.child,!1,Qp,o,void 0,void 0),e.stateNode=o}r=e.stateNode;break;default:r=e.stateNode}typeof n==`function`?e.refCleanup=n(r):n.current=r}}catch(n){df(e,t,n)}}function xl(e,t){var n=e.ref,r=e.refCleanup;if(n!==null){if(typeof r==`function`)try{r()}catch(n){df(e,t,n)}finally{e.refCleanup=null,e=e.alternate,e!=null&&(e.refCleanup=null)}else if(typeof n==`function`)try{n(null)}catch(n){df(e,t,n)}else n.current=null}}function Sl(e,t){if((e.tag===5||e.tag===27||e.tag===6)&&e.alternate===null&&t!==null)for(var n=0;n<t.length;n++)em(e.stateNode,t[n])}function Cl(e){for(var t=e.return;t!==null&&(El(t)&&em(e.stateNode,t.stateNode),!Tl(t));)t=t.return}function wl(e){for(var t=e.return;t!==null&&(El(t)&&tm(e.stateNode,t.stateNode),!Tl(t));)t=t.return}function Tl(e){return e.tag===5||e.tag===3||e.tag===27}function El(e){return e&&e.tag===7&&e.stateNode!==null}function Dl(e){var t=e.type,n=e.memoizedProps,r=e.stateNode;try{a:switch(t){case`button`:case`input`:case`select`:case`textarea`:n.autoFocus&&r.focus();break a;case`img`:n.src?r.src=n.src:n.srcSet&&(r.srcset=n.srcSet)}}catch(t){df(e,e.return,t)}}function Ol(e,t,n){try{var r=e.stateNode;ip(r,e.type,n,t),r[bt]=t}catch(t){df(e,e.return,t)}}function kl(e){return e.tag===5||e.tag===3||e.tag===26||e.tag===27&&Sp(e.type)||e.tag===4}function Al(e){a:for(;;){for(;e.sibling===null;){if(e.return===null||kl(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.tag===27&&Sp(e.type)||e.flags&2||e.child===null||e.tag===4)continue a;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function jl(e,t,n,r){var i=e.tag;if(i===5||i===6)i=e.stateNode,t?(n.nodeType===9?n.body:n.nodeName===`HTML`?n.ownerDocument.body:n).insertBefore(i,t):(t=n.nodeType===9?n.body:n.nodeName===`HTML`?n.ownerDocument.body:n,t.appendChild(i),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=gn)),Sl(e,r),Ut=!0;else if(i!==4&&(i===27&&(Sl(e,r),r=null,Sp(e.type)&&(n=e.stateNode,t=null)),e=e.child,e!==null))for(jl(e,t,n,r),e=e.sibling;e!==null;)jl(e,t,n,r),e=e.sibling}function Ml(e,t,n,r){var i=e.tag;if(i===5||i===6)i=e.stateNode,t?n.insertBefore(i,t):n.appendChild(i),Sl(e,r),Ut=!0;else if(i!==4&&(i===27&&(Sl(e,r),r=null,Sp(e.type)&&(n=e.stateNode)),e=e.child,e!==null))for(Ml(e,t,n,r),e=e.sibling;e!==null;)Ml(e,t,n,r),e=e.sibling}function Nl(e){var t=e.stateNode,n=e.memoizedProps;try{for(var r=e.type,i=t.attributes;i.length;)t.removeAttributeNode(i[0]);np(t,r,n),t[yt]=e,t[bt]=n}catch(t){df(e,e.return,t)}}var Pl=!1,X=null;function Fl(e){(e.tag===30||e.subtreeFlags&33554432)&&(Pl=!0)}var Il=null;function Ll(){var e=Il;return Il=null,e}var Rl=0;function zl(e,t,n,r,i){return Rl=0,Bl(e.child,t,n,r,i)}function Bl(e,t,n,r,i){for(var a=!1;e!==null;){if(e.tag===5){var o=e.stateNode;if(r!==null){var s=Op(o);r.push(s),s.view&&(a=!0)}else a||Op(o).view&&(a=!0);Pl=!0,Tp(o,Rl===0?t:t+`_`+Rl,n),Rl++}else e.tag===22&&e.memoizedState!==null||e.tag===30&&i||Bl(e.child,t,n,r,i)&&(a=!0);e=e.sibling}return a}function Vl(e,t){for(;e!==null;)e.tag===5?Ep(e.stateNode,e.memoizedProps):e.tag===22&&e.memoizedState!==null||e.tag===30&&t||Vl(e.child,t),e=e.sibling}function Hl(e){if(e.subtreeFlags&18874368)for(e=e.child;e!==null;){if((e.tag!==22||e.memoizedState===null)&&(Hl(e),e.tag===30&&e.flags&18874368&&e.stateNode.paired)){var t=e.memoizedProps;if(t.name==null||t.name===`auto`)throw Error(i(544));var n=t.name;t=_i(t.default,t.share),t!==`none`&&(zl(e,n,t,null,!1)||Vl(e.child,!1))}e=e.sibling}}function Ul(e,t){if(e.tag===30){var n=e.stateNode,r=e.memoizedProps,i=hi(r,n),a=_i(r.default,n.paired?r.share:r.enter);a===`none`?Hl(e):zl(e,i,a,null,!1)?(Hl(e),n.paired||t||Ad(e,r.onEnter)):Vl(e.child,!1)}else if(e.subtreeFlags&33554432)for(e=e.child;e!==null;)Ul(e,t),e=e.sibling;else Hl(e)}function Wl(e){if(X!==null&&X.size!==0){var t=X;if(e.subtreeFlags&18874368)for(e=e.child;e!==null;){if(e.tag!==22||e.memoizedState===null){if(e.tag===30&&e.flags&18874368){var n=e.memoizedProps,r=n.name;if(r!=null&&r!==`auto`){var i=t.get(r);if(i!==void 0){var a=_i(n.default,n.share);if(a!==`none`&&(zl(e,r,a,null,!1)?(a=e.stateNode,i.paired=a,a.paired=i,Ad(e,n.onShare)):Vl(e.child,!1)),t.delete(r),t.size===0)break}}}Wl(e)}e=e.sibling}}}function Gl(e){if(e.tag===30){var t=e.memoizedProps,n=hi(t,e.stateNode),r=X===null?void 0:X.get(n),i=_i(t.default,r===void 0?t.exit:t.share);i!==`none`&&(zl(e,n,i,null,!1)?r===void 0?Ad(e,t.onExit):(i=e.stateNode,r.paired=i,i.paired=r,X.delete(n),Ad(e,t.onShare)):Vl(e.child,!1)),X!==null&&Wl(e)}else if(e.subtreeFlags&33554432)for(e=e.child;e!==null;)Gl(e),e=e.sibling;else X!==null&&Wl(e)}function Kl(e){for(e=e.child;e!==null;){if(e.tag===30){var t=e.memoizedProps,n=hi(t,e.stateNode);t=_i(t.default,t.update),e.flags&=-5,t!==`none`&&zl(e,n,t,e.memoizedState=[],!1)}else e.subtreeFlags&33554432&&Kl(e);e=e.sibling}}function ql(e){if(e.subtreeFlags&18874368)for(e=e.child;e!==null;){if(e.tag!==22||e.memoizedState===null){if(e.tag===30&&e.flags&18874368){var t=e.stateNode;t.paired!==null&&(t.paired=null,Vl(e.child,!1))}ql(e)}e=e.sibling}}function Jl(e){if(e.tag===30)e.stateNode.paired=null,Vl(e.child,!1),ql(e);else if(e.subtreeFlags&33554432)for(e=e.child;e!==null;)Jl(e),e=e.sibling;else ql(e)}function Yl(e){for(e=e.child;e!==null;)e.tag===30?Vl(e.child,!1):e.subtreeFlags&33554432&&Yl(e),e=e.sibling}function Xl(e,t,n,r,i,a,o){for(var s=!1;t!==null;){if(t.tag===5){var c=t.stateNode;if(a!==null&&Rl<a.length){var l=a[Rl],u=Op(c);(l.view||u.view)&&(s=!0);var d;if(d=!(e.flags&4)){if(u.clip)d=!0;else{d=l.rect;var f=u.rect;d=d.y!==f.y||d.x!==f.x||d.height!==f.height||d.width!==f.width}}d&&(e.flags|=4),u.abs?u=!l.abs:(l=l.rect,u=u.rect,u=l.height!==u.height||l.width!==u.width),u&&(e.flags|=32)}else e.flags|=32;e.flags&4&&Tp(c,Rl===0?n:n+`_`+Rl,i),s&&e.flags&4||(Il===null&&(Il=[]),Il.push(c,Rl===0?r:r+`_`+Rl,t.memoizedProps)),Rl++}else(t.tag!==22||t.memoizedState===null)&&(t.tag===30&&o?e.flags|=t.flags&32:Xl(e,t.child,n,r,i,a,o)&&(s=!0));t=t.sibling}return s}function Zl(e,t){for(e=e.child;e!==null;){if(e.tag===30){var n=e.memoizedProps,r=e.stateNode,i=hi(n,r),a=_i(n.default,n.update);if(t){r=r.clones;var o=r===null?null:r.map(kp)}else o=e.memoizedState,e.memoizedState=null;r=e;var s=e.child;Rl=0,i=Xl(r,s,i,i,a,o,!1),e.flags&4&&i&&(t||Ad(e,n.onUpdate))}else e.subtreeFlags&33554432&&Zl(e,t);e=e.sibling}}var Ql=!1,$l=!1,eu=!1,tu=!1,nu=typeof WeakSet==`function`?WeakSet:Set,ru=null,iu=!1,au=!1,ou=!1,su=!1;function cu(e,t,n){if(e=e.containerInfo,sp=gh,e=Gr(e),Kr(e)){if(`selectionStart`in e)var r={start:e.selectionStart,end:e.selectionEnd};else a:{r=(r=e.ownerDocument)&&r.defaultView||window;var i=r.getSelection&&r.getSelection();if(i&&i.rangeCount!==0){r=i.anchorNode;var a=i.anchorOffset,o=i.focusNode;i=i.focusOffset;try{r.nodeType,o.nodeType}catch{r=null;break a}var s=0,c=-1,l=-1,u=0,d=0,f=e,p=null;b:for(;;){for(var m;f!==r||a!==0&&f.nodeType!==3||(c=s+a),f!==o||i!==0&&f.nodeType!==3||(l=s+i),f.nodeType===3&&(s+=f.nodeValue.length),(m=f.firstChild)!==null;)p=f,f=m;for(;;){if(f===e)break b;if(p===r&&++u===a&&(c=s),p===o&&++d===i&&(l=s),(m=f.nextSibling)!==null)break;f=p,p=f.parentNode}f=m}r=c===-1||l===-1?null:{start:c,end:l}}else r=null}r||={start:0,end:0}}else r=null;for(cp={focusedElem:e,selectionRange:r},gh=!1,n=(n&335544064)===n,ru=t,t=n?9270:1024;ru!==null;){if(e=ru,n&&(r=e.deletions,r!==null))for(a=0;a<r.length;a++)n&&Gl(r[a]);if(e.alternate===null&&e.flags&2)n&&Fl(e),lu(n);else{if(e.tag===22){if(r=e.alternate,e.memoizedState!==null){r!==null&&r.memoizedState===null&&n&&Gl(r),lu(n);continue}if(r!==null&&r.memoizedState!==null){n&&Fl(e),lu(n);continue}}r=e.child,(e.subtreeFlags&t)!==0&&r!==null?(r.return=e,ru=r):(n&&Kl(e),lu(n))}}X=null}function lu(e){for(;ru!==null;){var t=ru,n=e,r=t.alternate,a=t.flags;switch(t.tag){case 0:case 11:case 15:break;case 1:if(a&1024&&r!==null){n=void 0,a=r.memoizedProps,r=r.memoizedState;var o=t.stateNode;try{var s=vc(t.type,a);n=o.getSnapshotBeforeUpdate(s,r),o.__reactInternalSnapshotBeforeUpdate=n}catch(e){df(t,t.return,e)}}break;case 3:if(a&1024){if(r=t.stateNode.containerInfo,n=r.nodeType,n===9)nm(r);else if(n===1)switch(r.nodeName){case`HEAD`:case`HTML`:case`BODY`:nm(r);break;default:r.textContent=``}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;case 30:n&&r!==null&&(n=hi(r.memoizedProps,r.stateNode),a=t.memoizedProps,a=_i(a.default,a.update),a!==`none`&&zl(r,n,a,r.memoizedState=[],!0));break;default:if(a&1024)throw Error(i(163))}if(r=t.sibling,r!==null){r.return=t.return,ru=r;break}ru=t.return}}function uu(e,t,n){var r=n.flags;switch(n.tag){case 0:case 11:case 15:Au(e,n),r&4&&gl(5,n);break;case 1:if(Au(e,n),r&4){if(e=n.stateNode,t===null)try{e.componentDidMount()}catch(e){df(n,n.return,e)}else{var i=vc(n.type,t.memoizedProps);t=t.memoizedState;try{e.componentDidUpdate(i,t,e.__reactInternalSnapshotBeforeUpdate)}catch(e){df(n,n.return,e)}}}r&64&&vl(n),r&512&&bl(n,n.return);break;case 3:if(Au(e,n),r&64&&(e=n.updateQueue,e!==null)){if(t=null,n.child!==null)switch(n.child.tag){case 27:case 5:t=n.child.stateNode;break;case 1:t=n.child.stateNode}try{yo(e,t)}catch(e){df(n,n.return,e)}}break;case 27:t===null&&r&4&&Nl(n);case 26:case 5:Au(e,n),t===null&&r&4&&Dl(n),r&512&&bl(n,n.return);break;case 12:Au(e,n);break;case 31:Au(e,n),r&4&&yu(e,n);break;case 13:Au(e,n),r&4&&bu(e,n),r&64&&(e=n.memoizedState,e!==null&&(e=e.dehydrated,e!==null&&(n=hf.bind(null,n),cm(e,n))));break;case 22:if(r=n.memoizedState!==null||Ql,!r){var a=t!==null&&t.memoizedState!==null||$l;t=Ql,i=$l,Ql=r,($l=a)&&!i?(r=2,n.subtreeFlags&8772&&(r|=1),Mu(e,n,r)):Au(e,n),Ql=t,$l=i}break;case 30:Au(e,n),r&512&&bl(n,n.return);break;case 7:r&512&&bl(n,n.return);default:Au(e,n)}}function du(e,t){for(e=e.child;e!==null;)fu(e,t),e=e.sibling}function fu(e,t){switch(e.tag){case 5:case 26:try{var n=e.stateNode;if(t){var r=n.style;typeof r.setProperty==`function`?r.setProperty(`display`,`none`,`important`):r.display=`none`}else{var i=e.stateNode,a=e.memoizedProps.style,o=a!=null&&a.hasOwnProperty(`display`)?a.display:null;i.style.display=o==null||typeof o==`boolean`?``:(``+o).trim()}}catch(t){df(e,e.return,t)}pu(e,t);break;case 6:try{e.stateNode.nodeValue=t?``:e.memoizedProps,Ut=!0}catch(t){df(e,e.return,t)}break;case 18:try{var s=e.stateNode;t?wp(s,!0):wp(e.stateNode,!1)}catch(t){df(e,e.return,t)}break;case 22:case 23:e.memoizedState===null&&du(e,t);break;default:du(e,t)}}function pu(e,t){if(e.subtreeFlags&67108864)for(e=e.child;e!==null;){a:{var n=e,r=t;switch(n.tag){case 4:fu(n,r);break a;case 22:n.memoizedState===null&&pu(n,r);break a;default:pu(n,r)}}e=e.sibling}}function mu(e){var t=e.alternate;t!==null&&(e.alternate=null,mu(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&Ot(t)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var hu=null,gu=!1;function _u(e,t,n){for(n=n.child;n!==null;)vu(e,t,n),n=n.sibling}function vu(e,t,n){if(qe&&typeof qe.onCommitFiberUnmount==`function`)try{qe.onCommitFiberUnmount(Ke,n)}catch{}switch(n.tag){case 26:$l||xl(n,t),_u(e,t,n),n.memoizedState?n.memoizedState.count--:n.stateNode&&!$l&&(n=n.stateNode,n.parentNode.removeChild(n));break;case 27:$l||xl(n,t),wl(n);var r=hu,i=gu;Sp(n.type)&&(hu=n.stateNode,gu=!1),_u(e,t,n),gm(n.stateNode,n.type,n.memoizedProps),hu=r,gu=i;break;case 5:$l||xl(n,t),wl(n);case 6:if(n.tag===6&&wl(n),r=hu,i=gu,hu=null,_u(e,t,n),hu=r,gu=i,hu!==null){if(gu)try{(hu.nodeType===9?hu.body:hu.nodeName===`HTML`?hu.ownerDocument.body:hu).removeChild(n.stateNode),Ut=!0}catch(e){df(n,t,e)}else try{hu.removeChild(n.stateNode),Ut=!0}catch(e){df(n,t,e)}}break;case 18:hu!==null&&(gu?(e=hu,Cp(e.nodeType===9?e.body:e.nodeName===`HTML`?e.ownerDocument.body:e,n.stateNode),Hh(e)):Cp(hu,n.stateNode));break;case 4:r=hu,i=gu,hu=n.stateNode.containerInfo,gu=!0,_u(e,t,n),hu=r,gu=i;break;case 0:case 11:case 14:case 15:_l(2,n,t),$l||_l(4,n,t),_u(e,t,n);break;case 1:$l||(xl(n,t),r=n.stateNode,typeof r.componentWillUnmount==`function`&&yl(n,t,r)),_u(e,t,n);break;case 21:_u(e,t,n);break;case 22:$l=(r=$l)||n.memoizedState!==null,_u(e,t,n),$l=r;break;case 30:xl(n,t),_u(e,t,n);break;case 7:$l||xl(n,t),_u(e,t,n);break;default:_u(e,t,n)}}function yu(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null))){e=e.dehydrated;try{Hh(e)}catch(e){df(t,t.return,e)}}}function bu(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null&&(e=e.dehydrated,e!==null))))try{Hh(e)}catch(e){df(t,t.return,e)}}function xu(e){switch(e.tag){case 31:case 13:case 19:var t=e.stateNode;return t===null&&(t=e.stateNode=new nu),t;case 22:return e=e.stateNode,t=e._retryCache,t===null&&(t=e._retryCache=new nu),t;default:throw Error(i(435,e.tag))}}function Su(e,t){var n=xu(e);t.forEach(function(t){if(!n.has(t)){n.add(t);var r=gf.bind(null,e,t);t.then(r,r)}})}function Cu(e,t,n){var r=t.deletions;if(r!==null)for(var a=0;a<r.length;a++){var o=r[a],s=e,c=t,l=c;a:for(;l!==null;){switch(l.tag){case 27:if(Sp(l.type)){hu=l.stateNode,gu=!1;break a}break;case 5:hu=l.stateNode,gu=!1;break a;case 3:case 4:hu=l.stateNode.containerInfo,gu=!0;break a}l=l.return}if(hu===null)throw Error(i(160));vu(s,c,o),hu=null,gu=!1,s=o.alternate,s!==null&&(s.return=null),o.return=null}if(t.subtreeFlags&13886)for(t=t.child;t!==null;)Tu(t,e,n),t=t.sibling}var wu=null;function Tu(e,t,n){var r=e.alternate,a=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(a&4&&(r=e.updateQueue,r=r===null?null:r.events,r!==null))for(var o=0;o<r.length;o++){var s=r[o];s.ref.impl=s.nextImpl}Cu(t,e,n),Eu(e),a&4&&(_l(3,e,e.return),gl(3,e),_l(5,e,e.return));break;case 1:Cu(t,e,n),Eu(e),a&512&&($l||r===null||xl(r,r.return)),a&64&&Ql&&(e=e.updateQueue,e!==null&&(t=e.callbacks,t!==null&&(n=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=n===null?t:n.concat(t))));break;case 26:if(o=wu,Cu(t,e,n),Eu(e),a&512&&($l||r===null||xl(r,r.return)),a&4){if(a=r===null?null:r.memoizedState,n=e.memoizedState,r===null){if(n===null){if(e.stateNode===null){if(Ql)e.stateNode=fp(e.type,e.memoizedProps,t.containerInfo,e);else{a:{t=e.type,n=e.memoizedProps,a=o.ownerDocument||o;b:switch(t){case`title`:r=a.getElementsByTagName(`title`)[0],(!r||r[Et]||r[yt]||r.namespaceURI===`http://www.w3.org/2000/svg`||r.hasAttribute(`itemprop`))&&(r=a.createElement(t),a.head.insertBefore(r,a.querySelector(`head > title`))),np(r,t,n),r[yt]=e,Nt(r),t=r;break a;case`link`:if(o=Gm(`link`,`href`,a).get(t+(n.href||``))){for(s=0;s<o.length;s++)if(r=o[s],r.getAttribute(`href`)===(n.href==null||n.href===``?null:n.href)&&r.getAttribute(`rel`)===(n.rel==null?null:n.rel)&&r.getAttribute(`title`)===(n.title==null?null:n.title)&&r.getAttribute(`crossorigin`)===(n.crossOrigin==null?null:n.crossOrigin)){o.splice(s,1);break b}}r=a.createElement(t),np(r,t,n),a.head.appendChild(r);break;case`meta`:if(o=Gm(`meta`,`content`,a).get(t+(n.content||``))){for(s=0;s<o.length;s++)if(r=o[s],r.getAttribute(`content`)===(n.content==null?null:``+n.content)&&r.getAttribute(`name`)===(n.name==null?null:n.name)&&r.getAttribute(`property`)===(n.property==null?null:n.property)&&r.getAttribute(`http-equiv`)===(n.httpEquiv==null?null:n.httpEquiv)&&r.getAttribute(`charset`)===(n.charSet==null?null:n.charSet)){o.splice(s,1);break b}}r=a.createElement(t),np(r,t,n),a.head.appendChild(r);break;default:throw Error(i(468,t))}r[yt]=e,Nt(r),t=r}e.stateNode=t}}else Ql||Km(o,e.type,e.stateNode)}else e.stateNode=Bm(o,n,e.memoizedProps)}else a===n?n===null&&e.stateNode!==null&&Ol(e,e.memoizedProps,r.memoizedProps):(a===null?(t=r.stateNode,t===null||$l||t.parentNode.removeChild(t)):a.count--,n===null?Ql||Km(o,e.type,e.stateNode):Bm(o,n,e.memoizedProps))}break;case 27:Cu(t,e,n),Eu(e),a&512&&($l||r===null||xl(r,r.return)),r!==null&&a&4&&Ol(e,e.memoizedProps,r.memoizedProps);break;case 5:if(o=eu,eu=!1,Cu(t,e,n),eu=o,Eu(e),a&512&&($l||r===null||xl(r,r.return)),e.flags&32){t=e.stateNode;try{cn(t,``),Ut=!0}catch(t){df(e,e.return,t)}}a&4&&e.stateNode!=null&&(t=e.memoizedProps,Ol(e,t,r===null?t:r.memoizedProps)),a&1024&&(tu=!0);break;case 6:if(Cu(t,e,n),Eu(e),a&4){if(e.stateNode===null)throw Error(i(162));t=e.memoizedProps,n=e.stateNode;try{n.nodeValue=t,Ut=!0}catch(t){df(e,e.return,t)}}break;case 3:if(Ut=!1,Wm=null,o=wu,wu=bm(t.containerInfo),Cu(t,e,n),wu=o,Eu(e),a&4&&r!==null&&r.memoizedState.isDehydrated)try{Hh(t.containerInfo)}catch(t){df(e,e.return,t)}tu&&(tu=!1,Du(e)),Ut=!1;break;case 4:a=eu,eu=Ql,r=Wt(),o=wu,wu=bm(e.stateNode.containerInfo),Cu(t,e,n),Eu(e),wu=o,Ut&&au&&(ou=!0),Ut=r,eu=a;break;case 12:Cu(t,e,n),Eu(e);break;case 31:Cu(t,e,n),Eu(e),a&4&&(t=e.updateQueue,t!==null&&(e.updateQueue=null,Su(e,t)));break;case 13:Cu(t,e,n),Eu(e),e.child.flags&8192&&e.memoizedState!==null!=(r!==null&&r.memoizedState!==null)&&(dd=Le()),a&4&&(t=e.updateQueue,t!==null&&(e.updateQueue=null,Su(e,t)));break;case 22:o=e.memoizedState!==null,s=r!==null&&r.memoizedState!==null;var c=Ql,l=$l,u=eu;Ql=c||o,eu=u||o,$l=l||s,Cu(t,e,n),$l=l,eu=u,Ql=c,Eu(e),a&8192&&(t=e.stateNode,t._visibility=o?t._visibility&-2:t._visibility|1,!o||r===null||s||Ql||$l||(t=s||$l,n=Ql,r=$l,Ql=o||Ql,$l=t,ju(e,2),Ql=n,$l=r),!o&&eu||du(e,o)),a&4&&(t=e.updateQueue,t!==null&&(n=t.retryQueue,n!==null&&(t.retryQueue=null,Su(e,n))));break;case 19:Cu(t,e,n),Eu(e),a&4&&(t=e.updateQueue,t!==null&&(e.updateQueue=null,Su(e,t)));break;case 30:a&512&&($l||r===null||xl(r,r.return)),a=Wt(),o=au,s=(n&335544064)===n,c=e.memoizedProps,au=s&&_i(c.default,c.update)!==`none`,Cu(t,e,n),Eu(e),s&&r!==null&&Ut&&(e.flags|=4),au=o,Ut=a;break;case 21:break;case 7:a&512&&($l||r===null||xl(r,r.return)),r&&r.stateNode!==null&&(r.stateNode._fragmentFiber=e);default:Cu(t,e,n),Eu(e)}}function Eu(e){var t=e.flags;if(t&2){try{for(var n,r=e.return;r!==null;){if(kl(r)){n=r;break}r=r.return}r=null;for(var a=e.return;a!==null;){if(El(a)){var o=a.stateNode;r===null?r=[o]:r.push(o)}if(Tl(a))break;a=a.return}var s=r;if(n==null)throw Error(i(160));switch(n.tag){case 27:var c=n.stateNode;Ml(e,Al(e),c,s);break;case 5:var l=n.stateNode;n.flags&32&&(cn(l,``),n.flags&=-33),Ml(e,Al(e),l,s);break;case 3:case 4:var u=n.stateNode.containerInfo;jl(e,Al(e),u,s);break;default:throw Error(i(161))}}catch(t){df(e,e.return,t)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function Du(e){if(e.subtreeFlags&1024)for(e=e.child;e!==null;){var t=e;Du(t),t.tag===5&&t.flags&1024&&(t=t.stateNode,gh=!0,t.reset(),gh=!1),e=e.sibling}}function Ou(e,t){if(t.subtreeFlags&9270)for(t=t.child;t!==null;)ku(t,e),t=t.sibling;else Zl(t,!1)}function ku(e,t){var n=e.alternate;if(n===null)Ul(e,!1);else switch(e.tag){case 3:if(su=iu=!1,Ll(),Ou(t,e),!iu&&!ou){if(e=Il,e!==null)for(var r=0;r<e.length;r+=3){n=e[r];var i=e[r+1];Ep(n,e[r+2]),n=n.ownerDocument.documentElement,n!==null&&n.animate({opacity:[0,0],pointerEvents:[`none`,`none`]},{duration:0,fill:`forwards`,pseudoElement:`::view-transition-group(`+i+`)`})}e=t.containerInfo,e=e.nodeType===9?e.documentElement:e.ownerDocument.documentElement,e!==null&&e.style.viewTransitionName===``&&(e.style.viewTransitionName=`none`,e.animate({opacity:[0,0],pointerEvents:[`none`,`none`]},{duration:0,fill:`forwards`,pseudoElement:`::view-transition-group(root)`}),e.animate({width:[0,0],height:[0,0]},{duration:0,fill:`forwards`,pseudoElement:`::view-transition`})),su=!0}Il=null;break;case 5:Ou(t,e);break;case 4:r=iu,iu=!1,Ou(t,e),iu&&(ou=!0),iu=r;break;case 22:e.memoizedState===null&&(n.memoizedState===null?Ou(t,e):Ul(e,!1));break;case 30:r=iu,i=Ll(),iu=!1,Ou(t,e),iu&&(e.flags|=4);var a=e.memoizedProps,o=e.stateNode;t=hi(a,o),o=hi(n.memoizedProps,o);var s=_i(a.default,a.update);s===`none`?t=!1:(a=n.memoizedState,n.memoizedState=null,n=e.child,Rl=0,t=Xl(e,n,t,o,s,a,!0),Rl!==(a===null?0:a.length)&&(e.flags|=32)),e.flags&4&&t?(Ad(e,e.memoizedProps.onUpdate),Il=i):i!==null&&(i.push.apply(i,Il),Il=i),iu=e.flags&32?!0:r;break;default:Ou(t,e)}}function Au(e,t){if(t.subtreeFlags&8772)for(t=t.child;t!==null;)uu(e,t.alternate,t),t=t.sibling}function ju(e,t){for(e=e.child;e!==null;){var n=e,r=t;switch(n.tag){case 0:case 11:case 14:case 15:_l(4,n,n.return),ju(n,r);break;case 1:xl(n,n.return);var i=n.stateNode;typeof i.componentWillUnmount==`function`&&yl(n,n.return,i),ju(n,r);break;case 27:r&2&&gm(n.stateNode,n.type,n.memoizedProps);case 5:xl(n,n.return),n.tag!==5&&n.tag!==27||wl(n),ju(n,r);break;case 6:wl(n);break;case 26:xl(n,n.return),i=n.stateNode,n.memoizedState!==null||i===null||$l||i.parentNode.removeChild(i),ju(n,r);break;case 22:n.memoizedState===null&&ju(n,r);break;case 30:xl(n,n.return),ju(n,r);break;case 7:xl(n,n.return);default:ju(n,r)}e=e.sibling}}function Mu(e,t,n){for(n=t.subtreeFlags&8772?n:n&-2,t=t.child;t!==null;){var r=t.alternate,i=e,a=t,o=a.flags,s=!!(n&1);switch(a.tag){case 0:case 11:case 15:Mu(i,a,n),gl(4,a);break;case 1:if(Mu(i,a,n),r=a,i=r.stateNode,typeof i.componentDidMount==`function`)try{i.componentDidMount()}catch(e){df(r,r.return,e)}if(r=a,i=r.updateQueue,i!==null){var c=r.stateNode;try{var l=i.shared.hiddenCallbacks;if(l!==null)for(i.shared.hiddenCallbacks=null,i=0;i<l.length;i++)vo(l[i],c)}catch(e){df(r,r.return,e)}}s&&o&64&&vl(a),bl(a,a.return);break;case 27:n&2&&Nl(a);case 5:a.tag!==5&&a.tag!==27||Cl(a),Mu(i,a,n),s&&r===null&&o&4&&Dl(a),bl(a,a.return);break;case 6:Cl(a);break;case 26:c=a.stateNode,a.memoizedState!==null||c===null||Ql||Km(bm(c.ownerDocument),a.type,c),Mu(i,a,n),s&&r===null&&o&4&&Dl(a),bl(a,a.return);break;case 12:Mu(i,a,n);break;case 31:Mu(i,a,n),s&&o&4&&yu(i,a);break;case 13:Mu(i,a,n),s&&o&4&&bu(i,a);break;case 22:a.memoizedState===null&&Mu(i,a,n),bl(a,a.return);break;case 30:Mu(i,a,n),bl(a,a.return);break;case 7:bl(a,a.return);default:Mu(i,a,n)}t=t.sibling}}function Nu(e,t){var n=null;e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(n=e.memoizedState.cachePool.pool),e=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(e=t.memoizedState.cachePool.pool),e!==n&&(e!=null&&e.refCount++,n!=null&&Da(n))}function Pu(e,t){e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&Da(e))}function Fu(e,t,n,r){var i=(n&335544064)===n;if(t.subtreeFlags&(i?10262:10256))for(t=t.child;t!==null;)Iu(e,t,n,r),t=t.sibling;else i&&Yl(t)}function Iu(e,t,n,r){var i=(n&335544064)===n;i&&t.alternate===null&&t.return!==null&&t.return.alternate!==null&&Jl(t);var a=t.flags;switch(t.tag){case 0:case 11:case 15:Fu(e,t,n,r),a&2048&&gl(9,t);break;case 1:Fu(e,t,n,r);break;case 3:Fu(e,t,n,r),i&&su&&(e=e.containerInfo,e=e.nodeType===9?e.body:e.nodeName===`HTML`?e.ownerDocument.body:e,e.style.viewTransitionName===`root`&&(e.style.viewTransitionName=``),e=e.ownerDocument.documentElement,e!==null&&e.style.viewTransitionName===`none`&&(e.style.viewTransitionName=``)),a&2048&&(a=null,t.alternate!==null&&(a=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==a&&(t.refCount++,a!=null&&Da(a)));break;case 12:if(a&2048){Fu(e,t,n,r),a=t.stateNode;try{var o=t.memoizedProps,s=o.id,c=o.onPostCommit;typeof c==`function`&&c(s,t.alternate===null?`mount`:`update`,a.passiveEffectDuration,-0)}catch(e){df(t,t.return,e)}}else Fu(e,t,n,r);break;case 31:Fu(e,t,n,r);break;case 13:Fu(e,t,n,r);break;case 23:break;case 22:o=t.stateNode,s=t.alternate,t.memoizedState===null?(i&&s!==null&&s.memoizedState!==null&&Jl(t),o._visibility&2?Fu(e,t,n,r):(o._visibility|=2,Lu(e,t,n,r,!!(t.subtreeFlags&10256)||!1))):(i&&s!==null&&s.memoizedState===null&&Jl(s),o._visibility&2?Fu(e,t,n,r):Ru(e,t)),a&2048&&Nu(s,t);break;case 24:Fu(e,t,n,r),a&2048&&Pu(t.alternate,t);break;case 30:i&&(a=t.alternate,a!==null&&(Vl(a.child,!0),Vl(t.child,!0))),Fu(e,t,n,r);break;default:Fu(e,t,n,r)}}function Lu(e,t,n,r,i){for(i&&=!!(t.subtreeFlags&10256)||!1,t=t.child;t!==null;){var a=e,o=t,s=n,c=r,l=o.flags;switch(o.tag){case 0:case 11:case 15:Lu(a,o,s,c,i),gl(8,o);break;case 23:break;case 22:var u=o.stateNode;o.memoizedState===null?(u._visibility|=2,Lu(a,o,s,c,i)):u._visibility&2?Lu(a,o,s,c,i):Ru(a,o),i&&l&2048&&Nu(o.alternate,o);break;case 24:Lu(a,o,s,c,i),i&&l&2048&&Pu(o.alternate,o);break;default:Lu(a,o,s,c,i)}t=t.sibling}}function Ru(e,t){if(t.subtreeFlags&10256)for(t=t.child;t!==null;){var n=e,r=t,i=r.flags;switch(r.tag){case 22:Ru(n,r),i&2048&&Nu(r.alternate,r);break;case 24:Ru(n,r),i&2048&&Pu(r.alternate,r);break;default:Ru(n,r)}t=t.sibling}}var zu=8192;function Bu(e,t,n){if(e.subtreeFlags&zu)for(e=e.child;e!==null;)Vu(e,t,n),e=e.sibling}function Vu(e,t,n){switch(e.tag){case 26:Bu(e,t,n),e.flags&zu&&(e.memoizedState===null?(e=e.stateNode,(t&335544128)===t&&Zm(n,e)):Qm(n,wu,e.memoizedState,e.memoizedProps));break;case 5:Bu(e,t,n),e.flags&zu&&(e=e.stateNode,(t&335544128)===t&&Zm(n,e));break;case 3:case 4:var r=wu;wu=bm(e.stateNode.containerInfo),Bu(e,t,n),wu=r;break;case 22:e.memoizedState===null&&(r=e.alternate,r!==null&&r.memoizedState!==null?(r=zu,zu=16777216,Bu(e,t,n),zu=r):Bu(e,t,n));break;case 30:if((e.flags&zu)!==0&&(r=e.memoizedProps.name,r!=null&&r!==`auto`)){var i=e.stateNode;i.paired=null,X===null&&(X=new Map),X.set(r,i)}Bu(e,t,n);break;default:Bu(e,t,n)}}function Hu(e){var t=e.alternate;if(t!==null&&(e=t.child,e!==null)){t.child=null;do t=e.sibling,e.sibling=null,e=t;while(e!==null)}}function Uu(e){var t=e.deletions;if(e.flags&16){if(t!==null)for(var n=0;n<t.length;n++){var r=t[n];ru=r,Ku(r,e)}Hu(e)}if(e.subtreeFlags&10256)for(e=e.child;e!==null;)Wu(e),e=e.sibling}function Wu(e){switch(e.tag){case 0:case 11:case 15:Uu(e),e.flags&2048&&_l(9,e,e.return);break;case 3:Uu(e);break;case 12:Uu(e);break;case 22:var t=e.stateNode;e.memoizedState!==null&&t._visibility&2&&(e.return===null||e.return.tag!==13)?(t._visibility&=-3,Gu(e)):Uu(e);break;default:Uu(e)}}function Gu(e){var t=e.deletions;if(e.flags&16){if(t!==null)for(var n=0;n<t.length;n++){var r=t[n];ru=r,Ku(r,e)}Hu(e)}for(e=e.child;e!==null;){switch(t=e,t.tag){case 0:case 11:case 15:_l(8,t,t.return),Gu(t);break;case 22:n=t.stateNode,n._visibility&2&&(n._visibility&=-3,Gu(t));break;default:Gu(t)}e=e.sibling}}function Ku(e,t){for(;ru!==null;){var n=ru;switch(n.tag){case 0:case 11:case 15:_l(8,n,t);break;case 23:case 22:if(n.memoizedState!==null&&n.memoizedState.cachePool!==null){var r=n.memoizedState.cachePool.pool;r!=null&&r.refCount++}break;case 24:Da(n.memoizedState.cache)}if(r=n.child,r!==null)r.return=n,ru=r;else a:for(n=e;ru!==null;){r=ru;var i=r.sibling,a=r.return;if(mu(r),r===n){ru=null;break a}if(i!==null){i.return=a,ru=i;break a}ru=a}}}var qu={getCacheForType:function(e){var t=ya(Ta),n=t.data.get(e);return n===void 0&&(n=e(),t.data.set(e,n)),n},cacheSignal:function(){return ya(Ta).controller.signal}},Ju=typeof WeakMap==`function`?WeakMap:Map,Yu=0,Xu=null,Z=null,Q=0,Zu=0,$=null,Qu=!1,$u=!1,ed=!1,td=0,nd=0,rd=0,id=0,ad=0,od=0,sd=0,cd=null,ld=null,ud=!1,dd=0,fd=0,pd=1/0,md=null,hd=null,gd=0,_d=null,vd=null,yd=0,bd=0,xd=null,Sd=null,Cd=null,wd=null,Td=null,Ed=0,Dd=null;function Od(){return Yu&2&&Q!==0?Q&-Q:B.T===null?gt():Mf()}function kd(){if(od===0){if(!(Q&536870912)||W){var e=et;et<<=1,!(et&3932160)&&(et=262144),od=e}else od=536870912}return e=To.current,e!==null&&(e.flags|=32),od}function Ad(e,t){if(t!=null){var n=e.stateNode,r=n.ref;r===null&&(r=n.ref=Pp(hi(e.memoizedProps,n))),wd===null&&(wd=[]),wd.push(t.bind(null,r))}}function jd(e,t,n){(e===Xu&&(Zu===2||Zu===9)||e.cancelPendingCommit!==null)&&(Rd(e,0),Fd(e,Q,od,!1)),lt(e,n),Yu&2&&e===Xu||(e===Xu&&(!(Yu&2)&&(id|=n),nd===4&&Fd(e,Q,od,!1)),wf(e))}function Md(e,t,n){if(Yu&6)throw Error(i(327));var r=!n&&!(t&127)&&(t&e.expiredLanes)===0||it(e,t),a=r?Kd(e,t):Wd(e,t,!0),o=r;do{if(a===0){$u&&!r&&Fd(e,t,0,!1);break}if(n=e.current.alternate,o&&!Pd(n))a=Wd(e,t,!1),o=!1;else{if(a===2){if(o=t,e.errorRecoveryDisabledLanes&o)var s=0;else s=e.pendingLanes&-536870913,s=s===0?s&536870912?536870912:0:s;if(s!==0){t=s;a:{var c=e;a=cd;var l=c.current.memoizedState.isDehydrated;if(l&&(Rd(c,s).flags|=256),s=Wd(c,s,!1),s!==2&&s!==6){if(ed&&!l){c.errorRecoveryDisabledLanes|=o,id|=o,a=4;break a}o=ld,ld=a,o!==null&&(ld===null?ld=o:ld.push.apply(ld,o))}a=s}if(o=!1,a!==2)continue}}if(a===1){Rd(e,0),Fd(e,t,0,!0);break}a:{switch(r=e,o=a,o){case 0:case 1:throw Error(i(345));case 4:if((t&4194048)!==t&&(t&62914560)!==t)break;case 6:Fd(r,t,od,!Qu);break a;case 2:ld=null;break;case 3:case 5:break;default:throw Error(i(329))}if((t&62914560)===t&&(a=dd+300-Le(),10<a)){if(Fd(r,t,od,!Qu),rt(r,0,!0)!==0)break a;yd=t,r.timeoutHandle=gp(Nd.bind(null,r,n,ld,md,ud,t,od,id,sd,Qu,o,`Throttled`,-0,0),a);break a}Nd(r,n,ld,md,ud,t,od,id,sd,Qu,o,null,-0,0)}break}}while(1);wf(e)}function Nd(e,t,n,r,i,a,o,s,c,l,u,d,f,p){e.timeoutHandle=-1;var m=t.subtreeFlags,h=(a&335544064)===a;d=null,(h||m&8192||(m&16785408)==16785408)&&(d={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:gn},X=null,Vu(t,a,d),h&&(m=d,h=e.containerInfo,h=(h.nodeType===9?h:h.ownerDocument).__reactViewTransition,h!=null&&(m.count++,m.waitingForViewTransition=!0,m=nh.bind(m),h.finished.then(m,m))),m=(a&62914560)===a?dd-Le():(a&4194048)===a?fd-Le():0,m=eh(d,m),m!==null)?(yd=a,e.cancelPendingCommit=m($d.bind(null,e,t,a,n,r,i,o,s,c,l,u,d,null,f,p)),Fd(e,a,o,!l)):$d(e,t,a,n,r,i,o,s,c,l,u,d)}function Pd(e){for(var t=e;;){var n=t.tag;if((n===0||n===11||n===15)&&t.flags&16384&&(n=t.updateQueue,n!==null&&(n=n.stores,n!==null)))for(var r=0;r<n.length;r++){var i=n[r],a=i.getSnapshot;i=i.value;try{if(!zr(a(),i))return!1}catch{return!1}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function Fd(e,t,n,r){t=at(e,t),t&=~ad,t&=~id,e.suspendedLanes|=t,e.pingedLanes&=~t,r&&(e.warmLanes|=t),r=e.expirationTimes;for(var i=t;0<i;){var a=31-Ye(i),o=1<<a;r[a]=-1,i&=~o}n!==0&&dt(e,n,t)}function Id(){return Yu&6?!0:(Tf(0,!1),!1)}function Ld(){if(Z!==null){if(Zu===0)var e=Z.return;else e=Z,da=ua=null,es(e),$a=null,eo=0,e=Z;for(;e!==null;)hl(e.alternate,e),e=e.return;Z=null}}function Rd(e,t){var n=e.timeoutHandle;return n!==-1&&(e.timeoutHandle=-1,_p(n)),n=e.cancelPendingCommit,n!==null&&(e.cancelPendingCommit=null,n()),yd=0,Ld(),Xu=e,Z=n=Mi(e.current,null),Q=t,Zu=0,$=null,Qu=!1,$u=it(e,t),ed=!1,sd=od=ad=id=rd=nd=0,ld=cd=null,ud=!1,td=at(e,t),Si(),n}function zd(e,t){Lo=null,B.H=uc,t===Ua||t===Ga?(t=Za(),Zu=3):t===Wa?(t=Za(),Zu=4):Zu=t===Oc?8:typeof t==`object`&&t&&typeof t.then==`function`?6:1,$=t,Z===null&&(nd=1,Sc(e,Bi(t,e.current)))}function Bd(){var e=To.current;return e===null?!0:(Q&4194048)===Q?Eo===null:(Q&62914560)===Q||Q&536870912?e===Eo:!1}function Vd(){var e=B.H;return B.H=uc,e===null?uc:e}function Hd(){var e=B.A;return B.A=qu,e}function Ud(){nd=4,Qu||(Q&4194048)!==Q&&To.current!==null||($u=!0),!(rd&134217727)&&!(id&134217727)||Xu===null||Fd(Xu,Q,od,!1)}function Wd(e,t,n){var r=Yu;Yu|=2;var i=Vd(),a=Hd();(Xu!==e||Q!==t)&&(md=null,Rd(e,t)),t=!1;var o=nd;a:do try{if(Zu!==0&&Z!==null){var s=Z,c=$;switch(Zu){case 8:Ld(),o=6;break a;case 3:case 2:case 9:case 6:To.current===null&&(t=!0);var l=Zu;if(Zu=0,$=null,Xd(e,s,c,l),n&&$u){o=0;break a}break;default:l=Zu,Zu=0,$=null,Xd(e,s,c,l)}}Gd(),o=nd;break}catch(t){zd(e,t)}while(1);return t&&e.shellSuspendCounter++,da=ua=null,Yu=r,B.H=i,B.A=a,Z===null&&(Xu=null,Q=0,Si()),o}function Gd(){for(;Z!==null;)Jd(Z)}function Kd(e,t){var n=Yu;Yu|=2;var r=Vd(),a=Hd();Xu!==e||Q!==t?(md=null,pd=Le()+500,Rd(e,t)):$u=it(e,t);a:do try{if(Zu!==0&&Z!==null){t=Z;var o=$;b:switch(Zu){case 1:Zu=0,$=null,Xd(e,t,o,1);break;case 2:case 9:if(qa(o)){Zu=0,$=null,Yd(t);break}t=function(){Zu!==2&&Zu!==9||Xu!==e||(Zu=7),wf(e)},o.then(t,t);break a;case 3:Zu=7;break a;case 4:Zu=5;break a;case 7:qa(o)?(Zu=0,$=null,Yd(t)):(Zu=0,$=null,Xd(e,t,o,7));break;case 5:var s=null;switch(Z.tag){case 26:s=Z.memoizedState;case 5:case 27:var c=Z;if(s?Ym(s):c.stateNode.complete){Zu=0,$=null;var l=c.sibling;if(l!==null)Z=l;else{var u=c.return;u===null?Z=null:(Z=u,Zd(u))}break b}}Zu=0,$=null,Xd(e,t,o,5);break;case 6:Zu=0,$=null,Xd(e,t,o,6);break;case 8:Ld(),nd=6;break a;default:throw Error(i(462))}}qd();break}catch(t){zd(e,t)}while(1);return da=ua=null,B.H=r,B.A=a,Yu=n,Z===null?(Xu=null,Q=0,Si(),nd):0}function qd(){for(;Z!==null&&!Fe();)Jd(Z)}function Jd(e){var t=ol(e.alternate,e,td);e.memoizedProps=e.pendingProps,t===null?Zd(e):Z=t}function Yd(e){var t=e,n=t.alternate;switch(t.tag){case 15:case 0:t=Bc(n,t,t.pendingProps,t.type,void 0,Q);break;case 11:t=Bc(n,t,t.pendingProps,t.type.render,t.ref,Q);break;case 5:es(t);var r=t;r===$i&&(W?(ia(r),r.tag===5&&r.stateNode!=null&&(ea=r.stateNode)):(ia(r),W=!0));default:hl(n,t),t=Z=Ni(t,td),t=ol(n,t,td)}e.memoizedProps=e.pendingProps,t===null?Zd(e):Z=t}function Xd(e,t,n,r){da=ua=null,es(t),$a=null,eo=0;var i=t.return;try{if(Dc(e,i,t,n,Q)){nd=1,Sc(e,Bi(n,e.current)),Z=null;return}}catch(t){if(i!==null)throw Z=i,t;nd=1,Sc(e,Bi(n,e.current)),Z=null;return}t.flags&32768?(W||r===1?e=!0:$u||Q&536870912?e=!1:(Qu=e=!0,(r===2||r===9||r===3||r===6)&&(r=To.current,r!==null&&r.tag===13&&(r.flags|=16384))),Qd(t,e)):Zd(t)}function Zd(e){var t=e;do{if(t.flags&32768){Qd(t,Qu);return}e=t.return;var n=pl(t.alternate,t,td);if(n!==null){Z=n;return}if(t=t.sibling,t!==null){Z=t;return}Z=t=e}while(t!==null);nd===0&&(nd=5)}function Qd(e,t){do{var n=ml(e.alternate,e);if(n!==null){n.flags&=32767,Z=n;return}if(n=e.return,n!==null&&(n.flags|=32768,n.subtreeFlags=0,n.deletions=null),!t&&(e=e.sibling,e!==null)){Z=e;return}Z=e=n}while(e!==null);nd=6,Z=null}function $d(e,t,n,r,a,o,s,c,l,u,d,f){e.cancelPendingCommit=null;do cf();while(gd!==0);if(Yu&6)throw Error(i(327));if(t!==null){if(t===e.current)throw Error(i(177));e===Xu&&(Z=Xu=null,Q=0),vd=t,_d=e,yd=n,xd=a,Sd=r,ef(e,t,n,s,c,l,f)}}function ef(e,t,n,r,i,a,o){var s=t.lanes|t.childLanes;if(bd=s,s|=xi,ut(e,n,s,r,i,a),wd=null,(n&335544064)===n?(Td=Aa(e),r=10262):(Td=null,r=10256),(t.subtreeFlags&r)!==0||(t.flags&r)!==0?(e.callbackNode=null,e.callbackPriority=0,_f(Ve,function(){return lf(),null})):(e.callbackNode=null,e.callbackPriority=0),Pl=!1,r=!!(t.flags&13878),t.subtreeFlags&13878||r){r=B.T,B.T=null,i=V.p,V.p=2,a=Yu,Yu|=4;try{cu(e,t,n)}finally{Yu=a,V.p=i,B.T=r}}gd=1,Pl?Cd=Mp(o,e.containerInfo,Td,rf,af,nf,of,lf,tf,null,null):(rf(),af(),of())}function tf(e){if(gd!==0){var t=_d.onRecoverableError;t(e,{componentStack:null})}}function nf(){gd===3&&(gd=0,ku(vd,_d),gd=4)}function rf(){if(gd===1){gd=0;var e=_d,t=vd,n=yd,r=!!(t.flags&13878);if(t.subtreeFlags&13878||r){r=B.T,B.T=null;var i=V.p;V.p=2;var a=Yu;Yu|=4;try{au=ou=!1,Tu(t,e,n),n=cp;var o=Gr(e.containerInfo),s=n.focusedElem,c=n.selectionRange;if(o!==s&&s&&s.ownerDocument&&Wr(s.ownerDocument.documentElement,s)){if(c!==null&&Kr(s)){var l=c.start,u=c.end;if(u===void 0&&(u=l),`selectionStart`in s)s.selectionStart=l,s.selectionEnd=Math.min(u,s.value.length);else{var d=s.ownerDocument||document,f=d&&d.defaultView||window;if(f.getSelection){var p=f.getSelection(),m=s.textContent.length,h=Math.min(c.start,m),g=c.end===void 0?h:Math.min(c.end,m);!p.extend&&h>g&&(o=g,g=h,h=o);var _=Ur(s,h),v=Ur(s,g);if(_&&v&&(p.rangeCount!==1||p.anchorNode!==_.node||p.anchorOffset!==_.offset||p.focusNode!==v.node||p.focusOffset!==v.offset)){var y=d.createRange();y.setStart(_.node,_.offset),p.removeAllRanges(),h>g?(p.addRange(y),p.extend(v.node,v.offset)):(y.setEnd(v.node,v.offset),p.addRange(y))}}}}for(d=[],p=s;p=p.parentNode;)p.nodeType===1&&d.push({element:p,left:p.scrollLeft,top:p.scrollTop});for(typeof s.focus==`function`&&s.focus(),s=0;s<d.length;s++){var b=d[s];b.element.scrollLeft=b.left,b.element.scrollTop=b.top}}gh=!!sp,cp=sp=null}finally{Yu=a,V.p=i,B.T=r}}e.current=t,gd=2}}function af(){if(gd===2){gd=0;var e=_d,t=vd,n=!!(t.flags&8772);if(t.subtreeFlags&8772||n){n=B.T,B.T=null;var r=V.p;V.p=2;var i=Yu;Yu|=4;try{uu(e,t.alternate,t)}finally{Yu=i,V.p=r,B.T=n}}gd=3}}function of(){if(gd===4||gd===3){gd=0;var e=Cd;Cd=null,Ie();var t=_d,n=vd,r=yd,i=Sd,a=(r&335544064)===r?10262:10256;if((n.subtreeFlags&a)!==0||(n.flags&a)!==0?gd=5:(gd=0,vd=_d=null,sf(t,t.pendingLanes)),a=t.pendingLanes,a===0&&(hd=null),ht(r),n=n.stateNode,qe&&typeof qe.onCommitFiberRoot==`function`)try{qe.onCommitFiberRoot(Ke,n,void 0,(n.current.flags&128)==128)}catch{}if(i!==null){n=B.T,a=V.p,V.p=2,B.T=null;try{for(var o=t.onRecoverableError,s=0;s<i.length;s++){var c=i[s];o(c.value,{componentStack:c.stack})}}finally{B.T=n,V.p=a}}if(i=wd,o=Td,Td=null,i!==null&&(wd=null,o===null&&(o=[]),e!==null))for(c=0;c<i.length;c++)n=(0,i[c])(o),n!==void 0&&e.finished.finally(n);yd&3&&cf(),wf(t),a=t.pendingLanes,r&261930&&a&42?t===Dd?Ed++:(Ed=0,Dd=t):(Ed=0,Dd=null),Tf(0,!1)}}function sf(e,t){(e.pooledCacheLanes&=t)===0&&(t=e.pooledCache,t!=null&&(e.pooledCache=null,Da(t)))}function cf(){return Cd!==null&&(Cd.skipTransition(),Cd=null),rf(),af(),of(),lf()}function lf(){if(gd!==5)return!1;var e=_d,t=bd;bd=0;var n=ht(yd),r=B.T,a=V.p;try{V.p=32>n?32:n,B.T=null,n=xd,xd=null;var o=_d,s=yd;if(gd=0,vd=_d=null,yd=0,Yu&6)throw Error(i(331));var c=Yu;if(Yu|=4,Wu(o.current),Iu(o,o.current,s,n),Yu=c,Tf(0,!1),qe&&typeof qe.onPostCommitFiberRoot==`function`)try{qe.onPostCommitFiberRoot(Ke,o)}catch{}return!0}finally{V.p=a,B.T=r,sf(e,t)}}function uf(e,t,n){t=Bi(n,t),t=wc(e.stateNode,t,2),e=fo(e,t,2),e!==null&&(lt(e,2),wf(e))}function df(e,t,n){if(e.tag===3)uf(e,e,n);else for(;t!==null;){if(t.tag===3){uf(t,e,n);break}if(t.tag===1){var r=t.stateNode;if(typeof t.type.getDerivedStateFromError==`function`||typeof r.componentDidCatch==`function`&&(hd===null||!hd.has(r))){e=Bi(n,e),n=Tc(2),r=fo(t,n,2),r!==null&&(Ec(n,r,t,e),lt(r,2),wf(r));break}}t=t.return}}function ff(e,t,n){var r=e.pingCache;if(r===null){r=e.pingCache=new Ju;var i=new Set;r.set(t,i)}else i=r.get(t),i===void 0&&(i=new Set,r.set(t,i));i.has(n)||(ed=!0,i.add(n),e=pf.bind(null,e,t,n),t.then(e,e))}function pf(e,t,n){var r=e.pingCache;r!==null&&r.delete(t),e.pingedLanes|=e.suspendedLanes&n,e.warmLanes&=~n,Xu===e&&(Q&n)===n&&(nd===4||nd===3&&(Q&62914560)===Q&&300>Le()-dd?Yu&2?ad|=n:Rd(e,0):ad|=n,sd===Q&&(sd=0)),wf(e)}function mf(e,t){t===0&&(t=st()),e=Ti(e,t),e!==null&&(lt(e,t),wf(e))}function hf(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),mf(e,n)}function gf(e,t){var n=0;switch(e.tag){case 31:case 13:var r=e.stateNode,a=e.memoizedState;a!==null&&(n=a.retryLane);break;case 19:r=e.stateNode;break;case 22:r=e.stateNode._retryCache;break;default:throw Error(i(314))}r!==null&&r.delete(t),mf(e,n)}function _f(e,t){return Ne(e,t)}var vf=null,yf=null,bf=!1,xf=!1,Sf=!1,Cf=0;function wf(e){e!==yf&&e.next===null&&(yf===null?vf=yf=e:yf=yf.next=e),xf=!0,bf||(bf=!0,jf())}function Tf(e,t){if(!Sf&&xf){Sf=!0;do for(var n=!1,r=vf;r!==null;){if(!t){if(e!==0){var i=r.pendingLanes;if(i===0)var a=0;else{var o=r.suspendedLanes,s=r.pingedLanes;a=(1<<31-Ye(42|e)+1)-1,a&=i&~(o&~s),a=a&201326741?a&201326741|1:a?a|2:0}a!==0&&(n=!0,Af(r,a))}else a=Q,a=rt(r,r===Xu?a:0,r.cancelPendingCommit!==null||r.timeoutHandle!==-1),!(a&3)||it(r,a)||(n=!0,Af(r,a))}r=r.next}while(n);Sf=!1}}function Ef(){Df()}function Df(){xf=bf=!1;var e=0;Cf!==0&&hp()&&(e=Cf);for(var t=Le(),n=null,r=vf;r!==null;){var i=r.next,a=Of(r,t);a===0?(r.next=null,n===null?vf=i:n.next=i,i===null&&(yf=n)):(n=r,(e!==0||a&3)&&(xf=!0)),r=i}gd!==0&&gd!==5||Tf(e,!1),Cf!==0&&(Cf=0)}function Of(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,i=e.expirationTimes,a=e.pendingLanes&-62914561;0<a;){var o=31-Ye(a),s=1<<o,c=i[o];c===-1?((s&n)===0||(s&r)!==0)&&(i[o]=ot(s,t)):c<=t&&(e.expiredLanes|=s),a&=~s}if(t=Xu,n=Q,n=rt(e,e===t?n:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),r=e.callbackNode,n===0||e===t&&(Zu===2||Zu===9)||e.cancelPendingCommit!==null)return r!==null&&r!==null&&Pe(r),e.callbackNode=null,e.callbackPriority=0;if(!(n&3)||it(e,n)){if(t=n&-n,t===e.callbackPriority)return t;switch(r!==null&&Pe(r),ht(n)){case 2:case 8:n=Be;break;case 32:n=Ve;break;case 268435456:n=Ue;break;default:n=Ve}return r=kf.bind(null,e),n=Ne(n,r),e.callbackPriority=t,e.callbackNode=n,t}return r!==null&&r!==null&&Pe(r),e.callbackPriority=2,e.callbackNode=null,2}function kf(e,t){if(gd!==0&&gd!==5)return e.callbackNode=null,e.callbackPriority=0,null;var n=e.callbackNode;if(cf()&&e.callbackNode!==n)return null;var r=Q;return r=rt(e,e===Xu?r:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),r===0?null:(Md(e,r,t),Of(e,Le()),e.callbackNode!=null&&e.callbackNode===n?kf.bind(null,e):null)}function Af(e,t){if(cf())return null;Md(e,t,!0)}function jf(){bp(function(){Yu&6?Ne(ze,Ef):Df()})}function Mf(){if(Cf===0){var e=Na;e===0&&(e=$e,$e<<=1,!($e&261888)&&($e=256)),Cf=e}return Cf}function Nf(e){return e==null||typeof e==`symbol`||typeof e==`boolean`?null:typeof e==`function`?e:hn(e)}function Pf(e,t,n,r,i){if(t===`submit`&&n&&n.stateNode===i){var a=Nf((i[bt]||null).action),o=r.submitter;o&&(t=(t=o[bt]||null)?Nf(t.formAction):o.getAttribute(`formAction`),t!==null&&(a=t,o=null));var s=new Ln(`action`,`action`,null,r,i);e.push({event:s,listeners:[{instance:null,listener:function(){if(r.defaultPrevented){if(Cf!==0){var e=new FormData(i,o);Xs(n,{pending:!0,data:e,method:i.method,action:a},null,e)}}else typeof a==`function`&&(s.preventDefault(),e=new FormData(i,o),Xs(n,{pending:!0,data:e,method:i.method,action:a},a,e))},currentTarget:i}]})}}for(var Ff=0;Ff<fi.length;Ff++){var If=fi[Ff];pi(If.toLowerCase(),`on`+(If[0].toUpperCase()+If.slice(1)))}pi(ii,`onAnimationEnd`),pi(ai,`onAnimationIteration`),pi(oi,`onAnimationStart`),pi(`dblclick`,`onDoubleClick`),pi(`focusin`,`onFocus`),pi(`focusout`,`onBlur`),pi(si,`onTransitionRun`),pi(ci,`onTransitionStart`),pi(li,`onTransitionCancel`),pi(ui,`onTransitionEnd`),Rt(`onMouseEnter`,[`mouseout`,`mouseover`]),Rt(`onMouseLeave`,[`mouseout`,`mouseover`]),Rt(`onPointerEnter`,[`pointerout`,`pointerover`]),Rt(`onPointerLeave`,[`pointerout`,`pointerover`]),Lt(`onChange`,`change click focusin focusout input keydown keyup selectionchange`.split(` `)),Lt(`onSelect`,`focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange`.split(` `)),Lt(`onBeforeInput`,[`compositionend`,`keypress`,`textInput`,`paste`]),Lt(`onCompositionEnd`,`compositionend focusout keydown keypress keyup mousedown`.split(` `)),Lt(`onCompositionStart`,`compositionstart focusout keydown keypress keyup mousedown`.split(` `)),Lt(`onCompositionUpdate`,`compositionupdate focusout keydown keypress keyup mousedown`.split(` `));var Lf=`abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting`.split(` `),Rf=new Set(`beforetoggle cancel close invalid load scroll scrollend toggle`.split(` `).concat(Lf));function zf(e,t){t=!!(t&4);for(var n=0;n<e.length;n++){var r=e[n],i=r.event;r=r.listeners;a:{var a=void 0;if(t)for(var o=r.length-1;0<=o;o--){var s=r[o],c=s.instance,l=s.currentTarget;if(s=s.listener,c!==a&&i.isPropagationStopped())break a;a=s,i.currentTarget=l;try{a(i)}catch(e){vi(e)}i.currentTarget=null,a=c}else for(o=0;o<r.length;o++){if(s=r[o],c=s.instance,l=s.currentTarget,s=s.listener,c!==a&&i.isPropagationStopped())break a;a=s,i.currentTarget=l;try{a(i)}catch(e){vi(e)}i.currentTarget=null,a=c}}}}function Bf(e,t){var n=t[St];n===void 0&&(n=t[St]=new Set);var r=e+`__bubble`;n.has(r)||(Wf(t,e,2,!1),n.add(r))}function Vf(e,t,n){var r=0;t&&(r|=4),Wf(n,e,r,t)}var Hf=`_reactListening`+Math.random().toString(36).slice(2);function Uf(e){if(!e[Hf]){e[Hf]=!0,Ft.forEach(function(t){t!==`selectionchange`&&(Rf.has(t)||Vf(t,!1,e),Vf(t,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[Hf]||(t[Hf]=!0,Vf(`selectionchange`,!1,t))}}function Wf(e,t,n,r){switch(Ch(t)){case 2:var i=_h;break;case 8:i=vh;break;default:i=yh}n=i.bind(null,t,n,e),i=void 0,!En||t!==`touchstart`&&t!==`touchmove`&&t!==`wheel`||(i=!0),r?i===void 0?e.addEventListener(t,n,!0):e.addEventListener(t,n,{capture:!0,passive:i}):i===void 0?e.addEventListener(t,n,!1):e.addEventListener(t,n,{passive:i})}function Gf(e,t,n,r,i){var a=r;if(!(t&1)&&!(t&2)&&r!==null)a:for(;;){if(r===null)return;var s=r.tag;if(s===3||s===4){var c=r.stateNode.containerInfo;if(c===i)break;if(s===4)for(s=r.return;s!==null;){var l=s.tag;if((l===3||l===4)&&s.stateNode.containerInfo===i)return;s=s.return}for(;c!==null;){if(s=kt(c),s===null)return;if(l=s.tag,l===5||l===6||l===26||l===27){r=a=s;continue a}c=c.parentNode}}r=r.return}Cn(function(){var r=a,i=vn(n),s=[];a:{var c=di.get(e);if(c!==void 0){var l=Ln,u=e;switch(e){case`keypress`:if(Mn(n)===0)break a;case`keydown`:case`keyup`:l=tr;break;case`focusin`:u=`focus`,l=Kn;break;case`focusout`:u=`blur`,l=Kn;break;case`beforeblur`:case`afterblur`:l=Kn;break;case`click`:if(n.button===2)break a;case`auxclick`:case`dblclick`:case`mousedown`:case`mousemove`:case`mouseup`:case`mouseout`:case`mouseover`:case`contextmenu`:l=Wn;break;case`drag`:case`dragend`:case`dragenter`:case`dragexit`:case`dragleave`:case`dragover`:case`dragstart`:case`drop`:l=Gn;break;case`touchcancel`:case`touchend`:case`touchmove`:case`touchstart`:l=ir;break;case ii:case ai:case oi:l=qn;break;case ui:l=ar;break;case`scroll`:case`scrollend`:l=zn;break;case`wheel`:l=or;break;case`copy`:case`cut`:case`paste`:l=Jn;break;case`gotpointercapture`:case`lostpointercapture`:case`pointercancel`:case`pointerdown`:case`pointermove`:case`pointerout`:case`pointerover`:case`pointerup`:l=nr;break;case`submit`:l=rr;break;case`toggle`:case`beforetoggle`:l=sr}var d=!!(t&4),f=!d&&(e===`scroll`||e===`scrollend`),p=d?c===null?null:c+`Capture`:c;d=[];for(var m=r,h;m!==null;){var g=m;if(h=g.stateNode,g=g.tag,g!==5&&g!==26&&g!==27||h===null||p===null||(g=wn(m,p),g!=null&&d.push(Kf(m,g,h))),f)break;m=m.return}0<d.length&&(c=new l(c,u,null,n,i),s.push({event:c,listeners:d}))}}if(!(t&7)){a:{if(l=e===`mouseover`||e===`pointerover`,c=e===`mouseout`||e===`pointerout`,l&&n!==_n&&(u=n.relatedTarget||n.fromElement)&&(kt(u)||u[xt]))break a;(c||l)&&(u=i.window===i?i:(l=i.ownerDocument)?l.defaultView||l.parentWindow:window,c?(l=n.relatedTarget||n.toElement,c=r,l=l?kt(l):null,l!==null&&(f=o(l),d=l.tag,l!==f||d!==5&&d!==27&&d!==6)&&(l=null)):(c=null,l=r),c!==l&&(d=Wn,g=`onMouseLeave`,p=`onMouseEnter`,m=`mouse`,(e===`pointerout`||e===`pointerover`)&&(d=nr,g=`onPointerLeave`,p=`onPointerEnter`,m=`pointer`),f=c==null?u:jt(c),h=l==null?u:jt(l),u=new d(g,m+`leave`,c,n,i),u.target=f,u.relatedTarget=h,g=null,kt(i)===r&&(d=new d(p,m+`enter`,l,n,i),d.target=h,d.relatedTarget=f,g=d),f=g,d=c&&l?E(c,l,Jf):null,c!==null&&Yf(s,u,c,d,!1),l!==null&&f!==null&&Yf(s,f,l,d,!0)))}a:{if(c=r?jt(r):window,l=c.nodeName&&c.nodeName.toLowerCase(),l===`select`||l===`input`&&c.type===`file`)var _=Dr;else if(xr(c)){if(Or)_=Lr;else{_=Fr;var v=Pr}}else l=c.nodeName,!l||l.toLowerCase()!==`input`||c.type!==`checkbox`&&c.type!==`radio`?r&&fn(r.elementType)&&(_=Dr):_=Ir;if(_&&=_(e,r)){Sr(s,_,n,i);break a}v&&v(e,c,r)}switch(v=r?jt(r):window,e){case`focusin`:(xr(v)||v.contentEditable===`true`)&&(Jr=v,Yr=r,Xr=null);break;case`focusout`:Xr=Yr=Jr=null;break;case`mousedown`:Zr=!0;break;case`contextmenu`:case`mouseup`:case`dragend`:Zr=!1,Qr(s,n,i);break;case`selectionchange`:if(qr)break;case`keydown`:case`keyup`:Qr(s,n,i)}var y;if(lr)b:{switch(e){case`compositionstart`:var b=`onCompositionStart`;break b;case`compositionend`:b=`onCompositionEnd`;break b;case`compositionupdate`:b=`onCompositionUpdate`;break b}b=void 0}else _r?hr(e,n)&&(b=`onCompositionEnd`):e===`keydown`&&n.keyCode===229&&(b=`onCompositionStart`);b&&(fr&&n.locale!==`ko`&&(_r||b!==`onCompositionStart`?b===`onCompositionEnd`&&_r&&(y=jn()):(On=i,kn=`value`in On?On.value:On.textContent,_r=!0)),v=qf(r,b),0<v.length&&(b=new Yn(b,e,null,n,i),s.push({event:b,listeners:v}),y?b.data=y:(y=gr(n),y!==null&&(b.data=y)))),(y=dr?vr(e,n):yr(e,n))&&(b=qf(r,`onBeforeInput`),0<b.length&&(v=new Yn(`onBeforeInput`,`beforeinput`,null,n,i),s.push({event:v,listeners:b}),v.data=y)),Pf(s,e,r,n,i)}zf(s,t)})}function Kf(e,t,n){return{instance:e,listener:t,currentTarget:n}}function qf(e,t){for(var n=t+`Capture`,r=[];e!==null;){var i=e,a=i.stateNode;if(i=i.tag,i!==5&&i!==26&&i!==27||a===null||(i=wn(e,n),i!=null&&r.unshift(Kf(e,i,a)),i=wn(e,t),i!=null&&r.push(Kf(e,i,a))),e.tag===3)return r;e=e.return}return[]}function Jf(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5&&e.tag!==27);return e||null}function Yf(e,t,n,r,i){for(var a=t._reactName,o=[];n!==null&&n!==r;){var s=n,c=s.alternate,l=s.stateNode;if(s=s.tag,c!==null&&c===r)break;s!==5&&s!==26&&s!==27||l===null||(c=l,i?(l=wn(n,a),l!=null&&o.unshift(Kf(n,l,c))):i||(l=wn(n,a),l!=null&&o.push(Kf(n,l,c)))),n=n.return}o.length!==0&&e.push({event:t,listeners:o})}var Xf=/\r\n?/g,Zf=/\u0000|\uFFFD/g;function Qf(e){return(typeof e==`string`?e:``+e).replace(Xf,`
`).replace(Zf,``)}function $f(e,t){return t=Qf(t),Qf(e)===t}function ep(e,t,n,r,a,o){switch(n){case`children`:if(typeof r==`string`)t===`body`||t===`textarea`&&r===``||cn(e,r);else if(typeof r==`number`||typeof r==`bigint`)t!==`body`&&cn(e,``+r);else return;break;case`className`:Kt(e,`class`,r);break;case`tabIndex`:Kt(e,`tabindex`,r);break;case`dir`:case`role`:case`viewBox`:case`width`:case`height`:Kt(e,n,r);break;case`style`:dn(e,r,o);return;case`data`:if(t!==`object`){Kt(e,`data`,r);break}case`src`:case`href`:if(r===``&&(t!==`a`||n!==`href`)||r==null||typeof r==`function`||typeof r==`symbol`||typeof r==`boolean`){e.removeAttribute(n);break}r=hn(r),e.setAttribute(n,r);break;case`action`:case`formAction`:if(typeof r==`function`){e.setAttribute(n,`javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')`);break}if(typeof o==`function`&&(n===`formAction`?(t!==`input`&&ep(e,t,`name`,a.name,a,null),ep(e,t,`formEncType`,a.formEncType,a,null),ep(e,t,`formMethod`,a.formMethod,a,null),ep(e,t,`formTarget`,a.formTarget,a,null)):(ep(e,t,`encType`,a.encType,a,null),ep(e,t,`method`,a.method,a,null),ep(e,t,`target`,a.target,a,null))),r==null||typeof r==`symbol`||typeof r==`boolean`){e.removeAttribute(n);break}r=hn(r),e.setAttribute(n,r);break;case`onClick`:r!=null&&(e.onclick=gn);return;case`onScroll`:r!=null&&Bf(`scroll`,e);return;case`onScrollEnd`:r!=null&&Bf(`scrollend`,e);return;case`dangerouslySetInnerHTML`:if(r!=null){if(typeof r!=`object`||!(`__html`in r))throw Error(i(61));if(n=r.__html,n!=null){if(a.children!=null)throw Error(i(60));o?.__html!==n&&(e.innerHTML=n)}}break;case`multiple`:e.multiple=r&&typeof r!=`function`&&typeof r!=`symbol`;break;case`muted`:e.muted=r&&typeof r!=`function`&&typeof r!=`symbol`;break;case`suppressContentEditableWarning`:case`suppressHydrationWarning`:case`defaultValue`:case`defaultChecked`:case`innerHTML`:case`ref`:break;case`autoFocus`:break;case`xlinkHref`:if(r==null||typeof r==`function`||typeof r==`boolean`||typeof r==`symbol`){e.removeAttribute(`xlink:href`);break}n=hn(r),e.setAttributeNS(`http://www.w3.org/1999/xlink`,`xlink:href`,n);break;case`contentEditable`:case`spellCheck`:case`draggable`:case`value`:case`autoReverse`:case`externalResourcesRequired`:case`focusable`:case`preserveAlpha`:r!=null&&typeof r!=`function`&&typeof r!=`symbol`?e.setAttribute(n,r):e.removeAttribute(n);break;case`inert`:case`allowFullScreen`:case`async`:case`autoPlay`:case`controls`:case`credentialless`:case`default`:case`defer`:case`disabled`:case`disablePictureInPicture`:case`disableRemotePlayback`:case`formNoValidate`:case`hidden`:case`loop`:case`noModule`:case`noValidate`:case`open`:case`playsInline`:case`readOnly`:case`required`:case`reversed`:case`scoped`:case`seamless`:case`itemScope`:r&&typeof r!=`function`&&typeof r!=`symbol`?e.setAttribute(n,``):e.removeAttribute(n);break;case`capture`:case`download`:!0===r?e.setAttribute(n,``):!1!==r&&r!=null&&typeof r!=`function`&&typeof r!=`symbol`?e.setAttribute(n,r):e.removeAttribute(n);break;case`cols`:case`rows`:case`size`:case`span`:r!=null&&typeof r!=`function`&&typeof r!=`symbol`&&!isNaN(r)&&1<=r?e.setAttribute(n,r):e.removeAttribute(n);break;case`rowSpan`:case`start`:r==null||typeof r==`function`||typeof r==`symbol`||isNaN(r)?e.removeAttribute(n):e.setAttribute(n,r);break;case`popover`:Bf(`beforetoggle`,e),Bf(`toggle`,e),Gt(e,`popover`,r);break;case`xlinkActuate`:qt(e,`http://www.w3.org/1999/xlink`,`xlink:actuate`,r);break;case`xlinkArcrole`:qt(e,`http://www.w3.org/1999/xlink`,`xlink:arcrole`,r);break;case`xlinkRole`:qt(e,`http://www.w3.org/1999/xlink`,`xlink:role`,r);break;case`xlinkShow`:qt(e,`http://www.w3.org/1999/xlink`,`xlink:show`,r);break;case`xlinkTitle`:qt(e,`http://www.w3.org/1999/xlink`,`xlink:title`,r);break;case`xlinkType`:qt(e,`http://www.w3.org/1999/xlink`,`xlink:type`,r);break;case`xmlBase`:qt(e,`http://www.w3.org/XML/1998/namespace`,`xml:base`,r);break;case`xmlLang`:qt(e,`http://www.w3.org/XML/1998/namespace`,`xml:lang`,r);break;case`xmlSpace`:qt(e,`http://www.w3.org/XML/1998/namespace`,`xml:space`,r);break;case`is`:Gt(e,`is`,r);break;case`innerText`:case`textContent`:return;default:if(!(2<n.length)||n[0]!==`o`&&n[0]!==`O`||n[1]!==`n`&&n[1]!==`N`)n=pn.get(n)||n,Gt(e,n,r);else return}Ut=!0}function tp(e,t,n,r,a,o){switch(n){case`style`:dn(e,r,o);return;case`dangerouslySetInnerHTML`:if(r!=null){if(typeof r!=`object`||!(`__html`in r))throw Error(i(61));if(n=r.__html,n!=null){if(a.children!=null)throw Error(i(60));o?.__html!==n&&(e.innerHTML=n)}}break;case`children`:if(typeof r==`string`)cn(e,r);else if(typeof r==`number`||typeof r==`bigint`)cn(e,``+r);else return;break;case`onScroll`:r!=null&&Bf(`scroll`,e);return;case`onScrollEnd`:r!=null&&Bf(`scrollend`,e);return;case`onClick`:r!=null&&(e.onclick=gn);return;case`suppressContentEditableWarning`:case`suppressHydrationWarning`:case`innerHTML`:case`ref`:return;case`innerText`:case`textContent`:return;default:if(!It.hasOwnProperty(n))a:{if(n[0]===`o`&&n[1]===`n`&&(a=n.endsWith(`Capture`),o=n.slice(2,a?n.length-7:void 0),t=e[bt]||null,t=t==null?null:t[n],typeof t==`function`&&e.removeEventListener(o,t,a),typeof r==`function`)){typeof t!=`function`&&t!==null&&(n in e?e[n]=null:e.hasAttribute(n)&&e.removeAttribute(n)),e.addEventListener(o,r,a);break a}Ut=!0,n in e?e[n]=r:!0===r?e.setAttribute(n,``):Gt(e,n,r)}return}Ut=!0}function np(e,t,n){switch(t){case`div`:case`span`:case`svg`:case`path`:case`a`:case`g`:case`p`:case`li`:break;case`img`:Bf(`error`,e),Bf(`load`,e);var r=!1,a=!1,o;for(o in n)if(n.hasOwnProperty(o)){var s=n[o];if(s!=null)switch(o){case`src`:r=!0;break;case`srcSet`:a=!0;break;case`children`:case`dangerouslySetInnerHTML`:throw Error(i(137,t));default:ep(e,t,o,s,n,null)}}a&&ep(e,t,`srcSet`,n.srcSet,n,null),r&&ep(e,t,`src`,n.src,n,null);return;case`input`:Bf(`invalid`,e);var c=o=s=a=null,l=null,u=null;for(r in n)if(n.hasOwnProperty(r)){var d=n[r];if(d!=null)switch(r){case`name`:a=d;break;case`type`:s=d;break;case`checked`:l=d;break;case`defaultChecked`:u=d;break;case`value`:o=d;break;case`defaultValue`:c=d;break;case`children`:case`dangerouslySetInnerHTML`:if(d!=null)throw Error(i(137,t));break;default:ep(e,t,r,d,n,null)}}nn(e,o,c,l,u,s,a,!1);return;case`select`:for(a in Bf(`invalid`,e),r=s=o=null,n)if(n.hasOwnProperty(a)&&(c=n[a],c!=null))switch(a){case`value`:o=c;break;case`defaultValue`:s=c;break;case`multiple`:r=c;default:ep(e,t,a,c,n,null)}t=o,n=s,e.multiple=!!r,t==null?n!=null&&an(e,!!r,n,!0):an(e,!!r,t,!1);return;case`textarea`:for(s in Bf(`invalid`,e),o=a=r=null,n)if(n.hasOwnProperty(s)&&(c=n[s],c!=null))switch(s){case`value`:r=c;break;case`defaultValue`:a=c;break;case`children`:o=c;break;case`dangerouslySetInnerHTML`:if(c!=null)throw Error(i(91));break;default:ep(e,t,s,c,n,null)}sn(e,r,a,o);return;case`option`:for(l in n)if(n.hasOwnProperty(l)&&(r=n[l],r!=null))switch(l){case`selected`:e.selected=r&&typeof r!=`function`&&typeof r!=`symbol`;break;default:ep(e,t,l,r,n,null)}return;case`dialog`:Bf(`beforetoggle`,e),Bf(`toggle`,e),Bf(`cancel`,e),Bf(`close`,e);break;case`iframe`:case`object`:Bf(`load`,e);break;case`video`:case`audio`:for(r=0;r<Lf.length;r++)Bf(Lf[r],e);break;case`image`:Bf(`error`,e),Bf(`load`,e);break;case`details`:Bf(`toggle`,e);break;case`embed`:case`source`:case`link`:Bf(`error`,e),Bf(`load`,e);case`area`:case`base`:case`br`:case`col`:case`hr`:case`keygen`:case`meta`:case`param`:case`track`:case`wbr`:case`menuitem`:for(u in n)if(n.hasOwnProperty(u)&&(r=n[u],r!=null))switch(u){case`children`:case`dangerouslySetInnerHTML`:throw Error(i(137,t));default:ep(e,t,u,r,n,null)}return;default:if(fn(t)){for(d in n)n.hasOwnProperty(d)&&(r=n[d],r!==void 0&&tp(e,t,d,r,n,void 0));return}}for(c in n)n.hasOwnProperty(c)&&(r=n[c],r!=null&&ep(e,t,c,r,n,null))}var rp={};function ip(e,t,n,r){switch(t){case`div`:case`span`:case`svg`:case`path`:case`a`:case`g`:case`p`:case`li`:break;case`input`:var a=null,o=null,s=null,c=null,l=null,u=null,d=null;for(m in n){var f=n[m];if(n.hasOwnProperty(m)&&f!=null)switch(m){case`checked`:break;case`value`:break;case`defaultValue`:l=f;default:r.hasOwnProperty(m)||ep(e,t,m,null,r,f)}}for(var p in r){var m=r[p];if(f=n[p],r.hasOwnProperty(p)&&(m!=null||f!=null))switch(p){case`type`:m!==f&&(Ut=!0),o=m;break;case`name`:m!==f&&(Ut=!0),a=m;break;case`checked`:m!==f&&(Ut=!0),u=m;break;case`defaultChecked`:m!==f&&(Ut=!0),d=m;break;case`value`:m!==f&&(Ut=!0),s=m;break;case`defaultValue`:m!==f&&(Ut=!0),c=m;break;case`children`:case`dangerouslySetInnerHTML`:if(m!=null)throw Error(i(137,t));break;default:m!==f&&ep(e,t,p,m,r,f)}}tn(e,s,c,l,u,d,o,a);return;case`select`:for(o in m=s=c=p=null,n)if(l=n[o],n.hasOwnProperty(o)&&l!=null)switch(o){case`value`:break;case`multiple`:m=l;default:r.hasOwnProperty(o)||ep(e,t,o,null,r,l)}for(a in r)if(o=r[a],l=n[a],r.hasOwnProperty(a)&&(o!=null||l!=null))switch(a){case`value`:o!==l&&(Ut=!0),p=o;break;case`defaultValue`:o!==l&&(Ut=!0),c=o;break;case`multiple`:o!==l&&(Ut=!0),s=o;default:o!==l&&ep(e,t,a,o,r,l)}t=c,n=s,r=m,p==null?!!r!=!!n&&(t==null?an(e,!!n,n?[]:``,!1):an(e,!!n,t,!0)):an(e,!!n,p,!1);return;case`textarea`:for(c in m=p=null,n)if(a=n[c],n.hasOwnProperty(c)&&a!=null&&!r.hasOwnProperty(c))switch(c){case`value`:break;case`children`:break;default:ep(e,t,c,null,r,a)}for(s in r)if(a=r[s],o=n[s],r.hasOwnProperty(s)&&(a!=null||o!=null))switch(s){case`value`:a!==o&&(Ut=!0),p=a;break;case`defaultValue`:a!==o&&(Ut=!0),m=a;break;case`children`:break;case`dangerouslySetInnerHTML`:if(a!=null)throw Error(i(91));break;default:a!==o&&ep(e,t,s,a,r,o)}on(e,p,m);return;case`option`:for(var h in n)if(p=n[h],n.hasOwnProperty(h)&&p!=null&&!r.hasOwnProperty(h))switch(h){case`selected`:e.selected=!1;break;default:ep(e,t,h,null,r,p)}for(l in r)if(p=r[l],m=n[l],r.hasOwnProperty(l)&&p!==m&&(p!=null||m!=null))switch(l){case`selected`:p!==m&&(Ut=!0),e.selected=p&&typeof p!=`function`&&typeof p!=`symbol`;break;default:ep(e,t,l,p,r,m)}return;case`img`:case`link`:case`area`:case`base`:case`br`:case`col`:case`embed`:case`hr`:case`keygen`:case`meta`:case`param`:case`source`:case`track`:case`wbr`:case`menuitem`:for(var g in n)p=n[g],n.hasOwnProperty(g)&&p!=null&&!r.hasOwnProperty(g)&&ep(e,t,g,null,r,p);for(u in r)if(p=r[u],m=n[u],r.hasOwnProperty(u)&&p!==m&&(p!=null||m!=null))switch(u){case`children`:case`dangerouslySetInnerHTML`:if(p!=null)throw Error(i(137,t));break;default:ep(e,t,u,p,r,m)}return;default:if(fn(t)){for(var _ in n)p=n[_],n.hasOwnProperty(_)&&p!==void 0&&!r.hasOwnProperty(_)&&tp(e,t,_,void 0,r,p);for(d in r)p=r[d],m=n[d],!r.hasOwnProperty(d)||p===m||p===void 0&&m===void 0||tp(e,t,d,p,r,m);return}}for(var v in n)p=n[v],n.hasOwnProperty(v)&&p!=null&&!r.hasOwnProperty(v)&&ep(e,t,v,null,r,p);for(f in r)p=r[f],m=n[f],!r.hasOwnProperty(f)||p===m||p==null&&m==null||ep(e,t,f,p,r,m)}function ap(e){switch(e){case`css`:case`script`:case`font`:case`img`:case`image`:case`input`:case`link`:return!0;default:return!1}}function op(){if(typeof performance.getEntriesByType==`function`){for(var e=0,t=0,n=performance.getEntriesByType(`resource`),r=0;r<n.length;r++){var i=n[r],a=i.transferSize,o=i.initiatorType,s=i.duration;if(a&&s&&ap(o)){for(o=0,s=i.responseEnd,r+=1;r<n.length;r++){var c=n[r],l=c.startTime;if(l>s)break;var u=c.transferSize,d=c.initiatorType;u&&ap(d)&&(c=c.responseEnd,o+=u*(c<s?1:(s-l)/(c-l)))}if(--r,t+=8*(a+o)/(i.duration/1e3),e++,10<e)break}}if(0<e)return t/e/1e6}return navigator.connection&&(e=navigator.connection.downlink,typeof e==`number`)?e:5}var sp=null,cp=null;function lp(e){return e.nodeType===9?e:e.ownerDocument}function up(e){switch(e){case`http://www.w3.org/2000/svg`:return 1;case`http://www.w3.org/1998/Math/MathML`:return 2;default:return 0}}function dp(e,t){if(e===0)switch(t){case`svg`:return 1;case`math`:return 2;default:return 0}return e===1&&t===`foreignObject`?0:e}function fp(e,t,n,r){return n=lp(n).createElement(e),n[yt]=r,n[bt]=t,np(n,e,t),Nt(n),n}function pp(e,t){return e===`textarea`||e===`noscript`||typeof t.children==`string`||typeof t.children==`number`||typeof t.children==`bigint`||typeof t.dangerouslySetInnerHTML==`object`&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var mp=null;function hp(){var e=window.event;return e&&e.type===`popstate`?e!==mp&&(mp=e,!0):(mp=null,!1)}var gp=typeof setTimeout==`function`?setTimeout:void 0,_p=typeof clearTimeout==`function`?clearTimeout:void 0,vp=typeof Promise==`function`?Promise:void 0,yp=typeof requestAnimationFrame==`function`?requestAnimationFrame:gp,bp=typeof queueMicrotask==`function`?queueMicrotask:vp===void 0?gp:function(e){return vp.resolve(null).then(e).catch(xp)};function xp(e){setTimeout(function(){throw e})}function Sp(e){return e===`head`}function Cp(e,t){var n=t,r=0;do{var i=n.nextSibling;if(e.removeChild(n),i&&i.nodeType===8){if(n=i.data,n===`/$`||n===`/&`){if(r===0){e.removeChild(i),Hh(t);return}r--}else if(n===`$`||n===`$?`||n===`$~`||n===`$!`||n===`&`)r++;else if(n===`html`)_m(e.ownerDocument.documentElement);else if(n===`head`){n=e.ownerDocument.head,_m(n);for(var a=n.firstChild;a;){var o=a.nextSibling,s=a.nodeName;a[Et]||s===`SCRIPT`||s===`STYLE`||s===`LINK`&&a.rel.toLowerCase()===`stylesheet`||n.removeChild(a),a=o}}else n===`body`&&_m(e.ownerDocument.body)}n=i}while(n);Hh(t)}function wp(e,t){var n=e;e=0;do{var r=n.nextSibling;if(n.nodeType===1?t?(n._stashedDisplay=n.style.display,n.style.display=`none`):(n.style.display=n._stashedDisplay||``,n.getAttribute(`style`)===``&&n.removeAttribute(`style`)):n.nodeType===3&&(t?(n._stashedText=n.nodeValue,n.nodeValue=``):n.nodeValue=n._stashedText||``),r&&r.nodeType===8){if(n=r.data,n===`/$`){if(e===0)break;e--}else n!==`$`&&n!==`$?`&&n!==`$~`&&n!==`$!`||e++}n=r}while(n)}function Tp(e,t,n){if(t=CSS.escape(t)===t?t:`r-`+btoa(t).replace(/=/g,``),e.style.viewTransitionName=t,n!=null&&(e.style.viewTransitionClass=n),n=getComputedStyle(e),n.display===`inline`){if(t=e.getClientRects(),t.length===1)var r=1;else for(var i=r=0;i<t.length;i++){var a=t[i];0<a.width&&0<a.height&&r++}r===1&&(e=e.style,e.display=t.length===1?`inline-block`:`block`,e.marginTop=`-`+n.paddingTop,e.marginBottom=`-`+n.paddingBottom)}}function Ep(e,t){e=e.style,t=t.style;var n=t==null?null:t.hasOwnProperty(`viewTransitionName`)?t.viewTransitionName:t.hasOwnProperty(`view-transition-name`)?t[`view-transition-name`]:null;e.viewTransitionName=n==null||typeof n==`boolean`?``:(``+n).trim(),n=t==null?null:t.hasOwnProperty(`viewTransitionClass`)?t.viewTransitionClass:t.hasOwnProperty(`view-transition-class`)?t[`view-transition-class`]:null,e.viewTransitionClass=n==null||typeof n==`boolean`?``:(``+n).trim(),e.display===`inline-block`&&(t==null?e.display=e.margin=``:(n=t.display,e.display=n==null||typeof n==`boolean`?``:n,n=t.margin,n==null?(n=t.hasOwnProperty(`marginTop`)?t.marginTop:t[`margin-top`],e.marginTop=n==null||typeof n==`boolean`?``:n,t=t.hasOwnProperty(`marginBottom`)?t.marginBottom:t[`margin-bottom`],e.marginBottom=t==null||typeof t==`boolean`?``:t):e.margin=n))}function Dp(e,t,n){return n=n.ownerDocument.defaultView,{rect:e,abs:t.position===`absolute`||t.position===`fixed`,clip:t.clipPath!==`none`||t.overflow!==`visible`||t.filter!==`none`||t.mask!==`none`||t.mask!==`none`||t.borderRadius!==`0px`,view:0<=e.bottom&&0<=e.right&&e.top<=n.innerHeight&&e.left<=n.innerWidth}}function Op(e){return Dp(e.getBoundingClientRect(),getComputedStyle(e),e)}function kp(e){var t=e.getBoundingClientRect();t=new DOMRect(t.x+2e4,t.y+2e4,t.width,t.height);var n=getComputedStyle(e);return Dp(t,n,e)}function Ap(e){return e.documentElement.clientHeight}function jp(e){this.addEventListener(`load`,e),this.addEventListener(`error`,e)}function Mp(e,t,n,r,i,a,o,s,c){var l=t.nodeType===9?t:t.ownerDocument;try{var u=l.startViewTransition({update:function(){var t=l.defaultView,n=t.navigation&&t.navigation.transition,o=l.fonts.status;r();var s=[];if(o===`loaded`&&(Ap(l),l.fonts.status===`loading`&&s.push(l.fonts.ready)),o=s.length,e!==null)for(var c=e.suspenseyImages,u=0,d=0;d<c.length;d++){var f=c[d];if(!f.complete){var p=f.getBoundingClientRect();if(0<p.bottom&&0<p.right&&p.top<t.innerHeight&&p.left<t.innerWidth){if(u+=Xm(f),u>$m){s.length=o;break}f=new Promise(jp.bind(f)),s.push(f)}}}if(0<s.length)return t=Promise.race([Promise.all(s),new Promise(function(e){return setTimeout(e,500)})]).then(i,i),(n?Promise.allSettled([n.finished,t]):t).then(a,a);if(i(),n)return n.finished.then(a,a);a()},types:n});l.__reactViewTransition=u;var d=[];return u.ready.then(function(){for(var e=l.documentElement.getAnimations({subtree:!0}),t=0;t<e.length;t++){var n=e[t],r=n.effect,i=r.pseudoElement;if(i!=null&&i.startsWith(`::view-transition`)){d.push(n),n=r.getKeyframes();for(var a=i=void 0,s=!0,c=0;c<n.length;c++){var u=n[c],f=u.width;if(i===void 0)i=f;else if(i!==f){s=!1;break}if(f=u.height,a===void 0)a=f;else if(a!==f){s=!1;break}delete u.width,delete u.height,u.transform===`none`&&delete u.transform}s&&i!==void 0&&a!==void 0&&(r.setKeyframes(n),s=getComputedStyle(r.target,r.pseudoElement),s.width!==i||s.height!==a)&&(s=n[0],s.width=i,s.height=a,s=n[n.length-1],s.width=i,s.height=a,r.setKeyframes(n))}}o()},function(e){l.__reactViewTransition===u&&(l.__reactViewTransition=null);try{if(typeof e==`object`&&e)switch(e.name){case`InvalidStateError`:(e.message===`View transition was skipped because document visibility state is hidden.`||e.message===`Skipping view transition because document visibility state has become hidden.`||e.message===`Skipping view transition because viewport size changed.`||e.message===`Transition was aborted because of invalid state`)&&(e=null)}e!==null&&c(e)}finally{r(),i(),o()}}),u.finished.finally(function(){for(var e=0;e<d.length;e++)d[e].cancel();l.__reactViewTransition===u&&(l.__reactViewTransition=null),s()}),u}catch{return r(),i(),o(),null}}function Np(e,t){this._scope=document.documentElement,this._selector=`::view-transition-`+e+`(`+t+`)`}Np.prototype.animate=function(e,t){return t=typeof t==`number`?{duration:t}:D({},t),t.pseudoElement=this._selector,this._scope.animate(e,t)},Np.prototype.getAnimations=function(){for(var e=this._scope,t=this._selector,n=e.getAnimations({subtree:!0}),r=[],i=0;i<n.length;i++){var a=n[i].effect;a!==null&&a.target===e&&a.pseudoElement===t&&r.push(n[i])}return r},Np.prototype.getComputedStyle=function(){return getComputedStyle(this._scope,this._selector)};function Pp(e){return{name:e,group:new Np(`group`,e),imagePair:new Np(`image-pair`,e),old:new Np(`old`,e),new:new Np(`new`,e)}}function Fp(e){this._fragmentFiber=e,this._observers=this._eventListeners=null}Fp.prototype.addEventListener=function(e,t,n){var r=null,i=null;if(!(n!=null&&typeof n!=`boolean`&&(r=n.signal||null,r!==null&&r.aborted))){this._eventListeners===null&&(this._eventListeners=[]);var a=this._eventListeners;if(Bp(a,e,t,n)===-1){var o=this,s=t;n!=null&&typeof n!=`boolean`&&!0===n.once&&(s=function(r){o.removeEventListener(e,t,n),typeof t==`function`?t.call(this,r):t.handleEvent(r)}),r!==null&&(i=o.removeEventListener.bind(o,e,t,n),r.addEventListener(`abort`,i,{once:!0}),i=r.removeEventListener.bind(r,`abort`,i)),r=Rp(n),a.push({type:e,listener:t,optionsOrUseCapture:n,attachedListener:s,cleanup:i}),h(this._fragmentFiber.child,!1,Ip,e,s,r)}this._eventListeners=a}};function Ip(e,t,n,r){return b(e).addEventListener(t,n,r),!1}Fp.prototype.removeEventListener=function(e,t,n){var r=this._eventListeners;if(r!==null&&(t=Bp(r,e,t,n),t!==-1)){var i=r[t];n=i.attachedListener;var a=i.cleanup;i=Rp(i.optionsOrUseCapture),h(this._fragmentFiber.child,!1,Lp,e,n,i),r.splice(t,1),a!==null&&a()}};function Lp(e,t,n,r){return b(e).removeEventListener(t,n,r),!1}function Rp(e){return e!=null&&typeof e!=`boolean`&&(!0===e.once||e.signal instanceof AbortSignal)?{capture:e.capture,passive:e.passive}:e}function zp(e){return e==null?`c=0`:typeof e==`boolean`?`c=`+(e?`1`:`0`):`c=`+(e.capture?`1`:`0`)}function Bp(e,t,n,r){if(e.length===0)return-1;r=zp(r);for(var i=0;i<e.length;i++){var a=e[i];if(a.type===t&&a.listener===n&&zp(a.optionsOrUseCapture)===r)return i}return-1}Fp.prototype.dispatchEvent=function(e){var t=g(this._fragmentFiber);if(t===null)return!0;t=b(t);var n=this._eventListeners;if(n!==null&&0<n.length||!e.bubbles){var r=t.nodeType===9?t.createComment(``):document.createTextNode(``);if(n)for(var i=0;i<n.length;i++){var a=n[i];r.addEventListener(a.type,a.attachedListener,Rp(a.optionsOrUseCapture))}if(t.appendChild(r),e=r.dispatchEvent(e),n)for(i=0;i<n.length;i++)a=n[i],r.removeEventListener(a.type,a.attachedListener,Rp(a.optionsOrUseCapture));return t.removeChild(r),e}return t.dispatchEvent(e)},Fp.prototype.focus=function(e){h(this._fragmentFiber.child,!0,Vp,e,void 0,void 0)};function Vp(e,t){return e.tag!==6&&(e=b(e),pm(e,t))}Fp.prototype.focusLast=function(e){var t=[];h(this._fragmentFiber.child,!0,Hp,t,void 0,void 0);for(var n=t.length-1;0<=n&&!Vp(t[n],e);n--);};function Hp(e,t){return t.push(e),!1}Fp.prototype.blur=function(){var e=g(this._fragmentFiber);e!==null&&(e=b(e),e=lp(e).activeElement,e!==null&&h(this._fragmentFiber.child,!1,Up,e,void 0,void 0))};function Up(e,t){return e.tag!==6&&(e=b(e),e===t||e.contains(t)?(t.blur(),!0):!1)}Fp.prototype.observeUsing=function(e){this._observers===null&&(this._observers=new Set),this._observers.add(e),h(this._fragmentFiber.child,!1,Wp,e,void 0,void 0)};function Wp(e,t){return e.tag===6||(e=b(e),t.observe(e)),!1}Fp.prototype.unobserveUsing=function(e){var t=this._observers;if(t!==null&&t.has(e)){t.delete(e),h(this._fragmentFiber.child,!1,Gp,e,void 0,void 0);for(var n=t=0;n<Kp.length;n++){var r=Kp[n];r.fragmentInstance===this&&r.observer===e?e.unobserve(r.instance):Kp[t++]=r}Kp.length=t}};function Gp(e,t){return e.tag===6||(e=b(e),t.unobserve(e)),!1}var Kp=[],qp=!1;function Jp(e,t,n){Kp.push({fragmentInstance:e,observer:t,instance:n}),qp||(qp=!0,mm(function(){qp=!1;var e=Kp;Kp=[];for(var t=0;t<e.length;t++){var n=e[t];n.observer.unobserve(n.instance)}}))}Fp.prototype.getClientRects=function(){var e=[];return h(this._fragmentFiber.child,!1,Yp,e,void 0,void 0),e};function Yp(e,t){if(e.tag===6){e=e.stateNode;var n=e.ownerDocument.createRange();n.selectNodeContents(e),t.push.apply(t,n.getClientRects())}else e=b(e),t.push.apply(t,e.getClientRects());return!1}Fp.prototype.getRootNode=function(e){var t=g(this._fragmentFiber);return t===null?this:b(t).getRootNode(e)},Fp.prototype.compareDocumentPosition=function(e){var t=g(this._fragmentFiber);if(t===null)return Node.DOCUMENT_POSITION_DISCONNECTED;var n=[];h(this._fragmentFiber.child,!1,Hp,n,void 0,void 0);var r=b(t);if(n.length===0){if(n=r,_(this._fragmentFiber)){a:{for(t=this._fragmentFiber.return;t!==null;){if(t.tag===4){t=t.stateNode.containerInfo;break a}if(t.tag===3||t.tag===5||t.tag===27)break;t=t.return}t=null}t!=null&&(n=t)}t=this._fragmentFiber;var i=r=n.compareDocumentPosition(e);return n===e?i=Node.DOCUMENT_POSITION_CONTAINS:r&Node.DOCUMENT_POSITION_CONTAINED_BY&&(n=v(t)[1],n===null?i=Node.DOCUMENT_POSITION_PRECEDING:(e=b(n).compareDocumentPosition(e),i=e===0||e&Node.DOCUMENT_POSITION_FOLLOWING?Node.DOCUMENT_POSITION_FOLLOWING:Node.DOCUMENT_POSITION_PRECEDING)),i|=Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC}t=b(n[0]),i=b(n[n.length-1]);var a=_(this._fragmentFiber)?t.parentElement:r;if(a==null)return Node.DOCUMENT_POSITION_DISCONNECTED;r=a.compareDocumentPosition(t)&Node.DOCUMENT_POSITION_CONTAINED_BY,a=a.compareDocumentPosition(i)&Node.DOCUMENT_POSITION_CONTAINED_BY;var o=t.compareDocumentPosition(e),s=i.compareDocumentPosition(e),c=o&Node.DOCUMENT_POSITION_CONTAINED_BY||s&Node.DOCUMENT_POSITION_CONTAINED_BY;return s=r&&a&&o&Node.DOCUMENT_POSITION_FOLLOWING&&s&Node.DOCUMENT_POSITION_PRECEDING,t=r&&t===e||a&&i===e||c||s?Node.DOCUMENT_POSITION_CONTAINED_BY:!r&&t===e||!a&&i===e?Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC:o,t&Node.DOCUMENT_POSITION_DISCONNECTED||t&Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC||Xp(t,this._fragmentFiber,n[0],n[n.length-1],e)?t:Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC};function Xp(e,t,n,r,i){var a=kt(i);if(e&Node.DOCUMENT_POSITION_CONTAINED_BY){if(n=!!a)a:{for(;a!==null;){if(a.tag===7&&(a===t||a.alternate===t)){n=!0;break a}a=a.return}n=!1}return n}if(e&Node.DOCUMENT_POSITION_CONTAINS){if(a===null)return a=i.ownerDocument,i===a||i===a.documentElement||i===a.body;a:{for(a=t,t=g(t);a!==null;){if(!(a.tag!==5&&a.tag!==3&&a.tag!==27||a!==t&&a.alternate!==t)){a=!0;break a}a=a.return}a=!1}return a}return e&Node.DOCUMENT_POSITION_PRECEDING?((t=!!a)&&!(t=a===n)&&(t=E(n,a,T),t===null?t=!1:(h(t,!0,C,a,n),a=x,x=null,t=a!==null)),t):e&Node.DOCUMENT_POSITION_FOLLOWING?((t=!!a)&&!(t=a===r)&&(t=E(r,a,T),t===null?t=!1:(h(t,!0,w,a,r),a=x,S=x=null,t=a!==null)),t):!1}function Zp(e,t){var n=e.ownerDocument.createRange();n.selectNodeContents(e),e=n.getBoundingClientRect(),window.scrollTo(window.scrollX+e.left,t?window.scrollY+e.top:window.scrollY+e.bottom-window.innerHeight)}Fp.prototype.scrollIntoView=function(e){if(typeof e==`object`)throw Error(i(566));var t=[];h(this._fragmentFiber.child,!1,Hp,t,void 0,void 0);var n=!1!==e;if(t.length===0){var r=v(this._fragmentFiber);if(r=n?r[1]||r[0]||g(this._fragmentFiber):r[0]||r[1],r===null)return;if(r.tag===6){e=b(r),Zp(e,n);return}if(r=b(r),r.nodeType!==9){if(r.nodeType===11){n=`host`in r?r.host:null,n!==null&&n.scrollIntoView(e);return}r.scrollIntoView(e)}}for(r=n?t.length-1:0;r!==(n?-1:t.length);){var a=t[r];a.tag===6?(a=b(a),Zp(a,n)):b(a).scrollIntoView(e),r+=n?-1:1}};function Qp(e,t){return e=b(e),$p(e,t),!1}function $p(e,t){e.reactFragments??=new Set,e.reactFragments.add(t)}function em(e,t){var n=t._eventListeners;if(n!==null)for(var r=0;r<n.length;r++){var i=n[r];e.addEventListener(i.type,i.attachedListener,Rp(i.optionsOrUseCapture))}e.nodeType!==3&&(n=t._observers,n!==null&&n.forEach(function(n){for(var r=0,i=0;i<Kp.length;i++){var a=Kp[i];(a.fragmentInstance!==t||a.observer!==n||a.instance!==e)&&(Kp[r++]=a)}Kp.length=r,n.observe(e)}),$p(e,t))}function tm(e,t){var n=t._eventListeners;if(n!==null)for(var r=0;r<n.length;r++){var i=n[r];e.removeEventListener(i.type,i.attachedListener,Rp(i.optionsOrUseCapture))}e.nodeType!==3&&(n=t._observers,n!==null&&n.forEach(function(n){typeof n.rootMargin==`string`?Jp(t,n,e):n.unobserve(e)}),e.reactFragments!=null&&e.reactFragments.delete(t))}function nm(e){var t=e.firstChild;for(t&&t.nodeType===10&&(t=t.nextSibling);t;){var n=t;switch(t=t.nextSibling,n.nodeName){case`HTML`:case`HEAD`:case`BODY`:nm(n),Ot(n);continue;case`SCRIPT`:case`STYLE`:continue;case`LINK`:if(n.rel.toLowerCase()===`stylesheet`)continue}e.removeChild(n)}}function rm(e,t,n,r){for(;e.nodeType===1;){var i=n;if(e.nodeName.toLowerCase()!==t.toLowerCase()){if(!r&&(e.nodeName!==`INPUT`||e.type!==`hidden`))break}else if(!r){if(t===`input`&&e.type===`hidden`){var a=i.name==null?null:``+i.name;if(i.type===`hidden`&&e.getAttribute(`name`)===a)return e}else return e}else if(!e[Et])switch(t){case`meta`:if(!e.hasAttribute(`itemprop`))break;return e;case`link`:if(a=e.getAttribute(`rel`),a===`stylesheet`&&e.hasAttribute(`data-precedence`)||a!==i.rel||e.getAttribute(`href`)!==(i.href==null||i.href===``?null:i.href)||e.getAttribute(`crossorigin`)!==(i.crossOrigin==null?null:i.crossOrigin)||e.getAttribute(`title`)!==(i.title==null?null:i.title))break;return e;case`style`:if(e.hasAttribute(`data-precedence`))break;return e;case`script`:if(a=e.getAttribute(`src`),(a!==(i.src==null?null:i.src)||e.getAttribute(`type`)!==(i.type==null?null:i.type)||e.getAttribute(`crossorigin`)!==(i.crossOrigin==null?null:i.crossOrigin))&&a&&e.hasAttribute(`async`)&&!e.hasAttribute(`itemprop`))break;return e;default:return e}if(e=lm(e.nextSibling),e===null)break}return null}function im(e,t,n){if(t===``)return null;for(;e.nodeType!==3;)if((e.nodeType!==1||e.nodeName!==`INPUT`||e.type!==`hidden`)&&!n||(e=lm(e.nextSibling),e===null))return null;return e}function am(e,t){for(;e.nodeType!==8;)if((e.nodeType!==1||e.nodeName!==`INPUT`||e.type!==`hidden`)&&!t||(e=lm(e.nextSibling),e===null))return null;return e}function om(e){return e.data===`$?`||e.data===`$~`}function sm(e){return e.data===`$!`||e.data===`$?`&&e.ownerDocument.readyState!==`loading`}function cm(e,t){var n=e.ownerDocument;if(e.data===`$~`)e._reactRetry=t;else if(e.data!==`$?`||n.readyState!==`loading`)t();else{var r=function(){t(),n.removeEventListener(`DOMContentLoaded`,r)};n.addEventListener(`DOMContentLoaded`,r),e._reactRetry=r}}function lm(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t===`$`||t===`$!`||t===`$?`||t===`$~`||t===`&`||t===`F!`||t===`F`)break;if(t===`/$`||t===`/&`)return null}}return e}var um=null;function dm(e){e=e.nextSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n===`/$`||n===`/&`){if(t===0)return lm(e.nextSibling);t--}else n!==`$`&&n!==`$!`&&n!==`$?`&&n!==`$~`&&n!==`&`||t++}e=e.nextSibling}return null}function fm(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n===`$`||n===`$!`||n===`$?`||n===`$~`||n===`&`){if(t===0)return e;t--}else n!==`/$`&&n!==`/&`||t++}e=e.previousSibling}return null}function pm(e,t){function n(){r=!0}if(e.ownerDocument.activeElement===e)return!0;var r=!1;try{e.ownerDocument.addEventListener(`focus`,n,!0),(e.focus||HTMLElement.prototype.focus).call(e,t)}finally{e.ownerDocument.removeEventListener(`focus`,n,!0)}return r}function mm(e){yp(function(){yp(function(t){return e(t)})})}function hm(e,t,n){switch(t=lp(n),e){case`html`:if(e=t.documentElement,!e)throw Error(i(452));return e;case`head`:if(e=t.head,!e)throw Error(i(453));return e;case`body`:if(e=t.body,!e)throw Error(i(454));return e;default:throw Error(i(451))}}function gm(e,t,n){for(var r in n){var i=n[r];n.hasOwnProperty(r)&&i!=null&&ep(e,t,r,null,rp,i)}n.dangerouslySetInnerHTML!=null&&(e.textContent=``),e.onclick===gn&&(e.onclick=null),Ot(e)}function _m(e){for(var t=e.attributes;t.length;)e.removeAttributeNode(t[0]);Ot(e)}var vm=new Map,ym=new Set;function bm(e){if(typeof e.getRootNode==`function`){var t=e.getRootNode();if(t.nodeType===9||t.nodeType===11)return t}return e.nodeType===9?e:e.ownerDocument}var xm=V.d;V.d={f:Sm,r:Cm,D:Em,C:Dm,L:Om,m:km,X:jm,S:Am,M:Mm};function Sm(){var e=xm.f(),t=Id();return e||t}function Cm(e){var t=At(e);t!==null&&t.tag===5&&t.type===`form`?Qs(t):xm.r(e)}var wm=typeof document>`u`?null:document;function Tm(e,t,n){var r=wm;if(r&&typeof t==`string`&&t){var i=en(t);i=`link[rel="`+e+`"][href="`+i+`"]`,typeof n==`string`&&(i+=`[crossorigin="`+n+`"]`),ym.has(i)||(ym.add(i),e={rel:e,crossOrigin:n,href:t},r.querySelector(i)===null&&(t=r.createElement(`link`),np(t,`link`,e),Nt(t),r.head.appendChild(t)))}}function Em(e){xm.D(e),Tm(`dns-prefetch`,e,null)}function Dm(e,t){xm.C(e,t),Tm(`preconnect`,e,t)}function Om(e,t,n){xm.L(e,t,n);var r=wm;if(r&&e&&t){var i=`link[rel="preload"][as="`+en(t)+`"]`;t===`image`&&n&&n.imageSrcSet?(i+=`[imagesrcset="`+en(n.imageSrcSet)+`"]`,typeof n.imageSizes==`string`&&(i+=`[imagesizes="`+en(n.imageSizes)+`"]`)):i+=`[href="`+en(e)+`"]`;var a=i;switch(t){case`style`:a=Pm(e);break;case`script`:a=Rm(e)}if(!(vm.has(a)||(e=D({rel:`preload`,href:t===`image`&&n&&n.imageSrcSet?void 0:e,as:t},n),vm.set(a,e),r.querySelector(i)!==null||t===`style`&&r.querySelector(Fm(a))||t===`script`&&r.querySelector(zm(a))))){var o=r.createElement(`link`);np(o,`link`,e),t===`style`&&(o[Dt]=!0,o.onload=o.onerror=function(){Pt(o)}),Nt(o),r.head.appendChild(o)}}}function km(e,t){xm.m(e,t);var n=wm;if(n&&e){var r=t&&typeof t.as==`string`?t.as:`script`,i=`link[rel="modulepreload"][as="`+en(r)+`"][href="`+en(e)+`"]`,a=i;switch(r){case`audioworklet`:case`paintworklet`:case`serviceworker`:case`sharedworker`:case`worker`:case`script`:a=Rm(e)}if(!vm.has(a)&&(e=D({rel:`modulepreload`,href:e},t),vm.set(a,e),n.querySelector(i)===null)){switch(r){case`audioworklet`:case`paintworklet`:case`serviceworker`:case`sharedworker`:case`worker`:case`script`:if(n.querySelector(zm(a)))return}r=n.createElement(`link`),np(r,`link`,e),Nt(r),n.head.appendChild(r)}}}function Am(e,t,n){xm.S(e,t,n);var r=wm;if(r&&e){var i=Mt(r).hoistableStyles,a=Pm(e);t||=`default`;var o=i.get(a);if(!o){var s={loading:0,preload:null};if(o=r.querySelector(Fm(a)))s.loading=5;else{e=D({rel:`stylesheet`,href:e,"data-precedence":t},n),(n=vm.get(a))&&Hm(e,n);var c=o=r.createElement(`link`);Nt(c),np(c,`link`,e),c._p=new Promise(function(e,t){c.onload=e,c.onerror=t}),c.addEventListener(`load`,function(){s.loading|=1}),c.addEventListener(`error`,function(){s.loading|=2}),s.loading|=4,Vm(o,t,r)}o={type:`stylesheet`,instance:o,count:1,state:s},i.set(a,o)}}}function jm(e,t){xm.X(e,t);var n=wm;if(n&&e){var r=Mt(n).hoistableScripts,i=Rm(e),a=r.get(i);a||(a=n.querySelector(zm(i)),a||(e=D({src:e,async:!0},t),(t=vm.get(i))&&Um(e,t),a=n.createElement(`script`),Nt(a),np(a,`link`,e),n.head.appendChild(a)),a={type:`script`,instance:a,count:1,state:null},r.set(i,a))}}function Mm(e,t){xm.M(e,t);var n=wm;if(n&&e){var r=Mt(n).hoistableScripts,i=Rm(e),a=r.get(i);a||(a=n.querySelector(zm(i)),a||(e=D({src:e,async:!0,type:`module`},t),(t=vm.get(i))&&Um(e,t),a=n.createElement(`script`),Nt(a),np(a,`link`,e),n.head.appendChild(a)),a={type:`script`,instance:a,count:1,state:null},r.set(i,a))}}function Nm(e,t,n,r){var a=(a=ye.current)?bm(a):null;if(!a)throw Error(i(446));switch(e){case`meta`:case`title`:return null;case`style`:return typeof n.precedence==`string`&&typeof n.href==`string`?(n=Pm(n.href),t=Mt(a).hoistableStyles,r=t.get(n),r||(r={type:`style`,instance:null,count:0,state:null},t.set(n,r)),r):{type:`void`,instance:null,count:0,state:null};case`link`:if(n.rel===`stylesheet`&&typeof n.href==`string`&&typeof n.precedence==`string`){e=Pm(n.href);var o=Mt(a).hoistableStyles,s=o.get(e);if(s||(a=a.ownerDocument||a,s={type:`stylesheet`,instance:null,count:0,state:{loading:0,preload:null}},o.set(e,s),(o=a.querySelector(Fm(e)))?o._p||(s.instance=o,s.state.loading=5):(o=vm.get(e),o||(o={rel:`preload`,as:`style`,href:n.href,crossOrigin:n.crossOrigin,integrity:n.integrity,media:n.media,hrefLang:n.hrefLang,referrerPolicy:n.referrerPolicy},vm.set(e,o)),Lm(a,e,o,s.state))),t&&r===null)throw Error(i(528,``));return s}if(t&&r!==null)throw Error(i(529,``));return null;case`script`:return t=n.async,n=n.src,typeof n==`string`&&t&&typeof t!=`function`&&typeof t!=`symbol`?(n=Rm(n),t=Mt(a).hoistableScripts,r=t.get(n),r||(r={type:`script`,instance:null,count:0,state:null},t.set(n,r)),r):{type:`void`,instance:null,count:0,state:null};default:throw Error(i(444,e))}}function Pm(e){return`href="`+en(e)+`"`}function Fm(e){return`link[rel="stylesheet"][`+e+`]`}function Im(e){return D({},e,{"data-precedence":e.precedence,precedence:null})}function Lm(e,t,n,r){if(t=e.querySelector(`link[rel="preload"][as="style"][`+t+`]`)){if(!0!==t[Dt]){r.loading=1;return}}else t=e.createElement(`link`),t[Dt]=!0,t.onload=t.onerror=Pt.bind(null,t),np(t,`link`,n),Nt(t),e.head.appendChild(t);r.preload=t,t.addEventListener(`load`,function(){return r.loading|=1}),t.addEventListener(`error`,function(){return r.loading|=2})}function Rm(e){return`[src="`+en(e)+`"]`}function zm(e){return`script[async]`+e}function Bm(e,t,n){if(t.count++,t.instance===null)switch(t.type){case`style`:var r=e.querySelector(`style[data-href~="`+en(n.href)+`"]`);if(r)return t.instance=r,Nt(r),r;var a=D({},n,{"data-href":n.href,"data-precedence":n.precedence,href:null,precedence:null});return r=(e.ownerDocument||e).createElement(`style`),Nt(r),np(r,`style`,a),Vm(r,n.precedence,e),t.instance=r;case`stylesheet`:a=Pm(n.href);var o=e.querySelector(Fm(a));if(o)return t.state.loading|=4,t.instance=o,Nt(o),o;r=Im(n),(a=vm.get(a))&&Hm(r,a),o=(e.ownerDocument||e).createElement(`link`),Nt(o);var s=o;return s._p=new Promise(function(e,t){s.onload=e,s.onerror=t}),np(o,`link`,r),t.state.loading|=4,Vm(o,n.precedence,e),t.instance=o;case`script`:return o=Rm(n.src),(a=e.querySelector(zm(o)))?(t.instance=a,Nt(a),a):(r=n,(a=vm.get(o))&&(r=D({},n),Um(r,a)),e=e.ownerDocument||e,a=e.createElement(`script`),Nt(a),np(a,`link`,r),e.head.appendChild(a),t.instance=a);case`void`:return null;default:throw Error(i(443,t.type))}else t.type===`stylesheet`&&!(t.state.loading&4)&&(r=t.instance,t.state.loading|=4,Vm(r,n.precedence,e));return t.instance}function Vm(e,t,n){for(var r=n.querySelectorAll(`link[rel="stylesheet"][data-precedence],style[data-precedence]`),i=r.length?r[r.length-1]:null,a=i,o=0;o<r.length;o++){var s=r[o];if(s.dataset.precedence===t)a=s;else if(a!==i)break}a?a.parentNode.insertBefore(e,a.nextSibling):(t=n.nodeType===9?n.head:n,t.insertBefore(e,t.firstChild))}function Hm(e,t){e.crossOrigin??=t.crossOrigin,e.referrerPolicy??=t.referrerPolicy,e.title??=t.title}function Um(e,t){e.crossOrigin??=t.crossOrigin,e.referrerPolicy??=t.referrerPolicy,e.integrity??=t.integrity}var Wm=null;function Gm(e,t,n){if(Wm===null){var r=new Map,i=Wm=new Map;i.set(n,r)}else i=Wm,r=i.get(n),r||(r=new Map,i.set(n,r));if(r.has(e))return r;for(r.set(e,null),n=n.getElementsByTagName(e),i=0;i<n.length;i++){var a=n[i];if(!(a[Et]||a[yt]||e===`link`&&a.getAttribute(`rel`)===`stylesheet`)&&a.namespaceURI!==`http://www.w3.org/2000/svg`){var o=a.getAttribute(t)||``;o=e+o;var s=r.get(o);s?s.push(a):r.set(o,[a])}}return r}function Km(e,t,n){e=e.ownerDocument||e,e.head.insertBefore(n,t===`title`?e.querySelector(`head > title`):null)}function qm(e,t,n){if(n===1||t.itemProp!=null)return!1;switch(e){case`meta`:case`title`:return!0;case`style`:if(typeof t.precedence!=`string`||typeof t.href!=`string`||t.href===``)break;return!0;case`link`:if(typeof t.rel!=`string`||typeof t.href!=`string`||t.href===``||t.onLoad||t.onError)break;switch(t.rel){case`stylesheet`:return e=t.disabled,typeof t.precedence==`string`&&e==null;default:return!0}case`script`:if(t.async&&typeof t.async!=`function`&&typeof t.async!=`symbol`&&!t.onLoad&&!t.onError&&t.src&&typeof t.src==`string`)return!0}return!1}function Jm(e,t){return e===`img`&&t.src!=null&&t.src!==``&&t.onLoad==null&&t.loading!==`lazy`}function Ym(e){return!(e.type===`stylesheet`&&!(e.state.loading&3))}function Xm(e){return(e.width||100)*(e.height||100)*(typeof devicePixelRatio==`number`?devicePixelRatio:1)*.25}function Zm(e,t){typeof t.decode==`function`&&(e.imgCount++,t.complete||(e.imgBytes+=Xm(t),e.suspenseyImages.push(t)),e=rh.bind(e),t.decode().then(e,e))}function Qm(e,t,n,r){if(n.type===`stylesheet`&&(typeof r.media!=`string`||!1!==matchMedia(r.media).matches)&&!(n.state.loading&4)){if(n.instance===null){var i=Pm(r.href),a=t.querySelector(Fm(i));if(a){t=a._p,typeof t==`object`&&t&&typeof t.then==`function`&&(e.count++,e=nh.bind(e),t.then(e,e)),n.state.loading|=4,n.instance=a,Nt(a);return}a=t.ownerDocument||t,r=Im(r),(i=vm.get(i))&&Hm(r,i),a=a.createElement(`link`),Nt(a);var o=a;o._p=new Promise(function(e,t){o.onload=e,o.onerror=t}),np(a,`link`,r),n.instance=a}e.stylesheets===null&&(e.stylesheets=new Map),e.stylesheets.set(n,t),(t=n.state.preload)&&!(n.state.loading&3)&&(e.count++,n=nh.bind(e),t.addEventListener(`load`,n),t.addEventListener(`error`,n))}}var $m=0;function eh(e,t){return e.stylesheets&&e.count===0&&ah(e,e.stylesheets),0<e.count||0<e.imgCount?function(n){var r=setTimeout(function(){if(e.stylesheets&&ah(e,e.stylesheets),e.unsuspend){var t=e.unsuspend;e.unsuspend=null,t()}},6e4+t);0<e.imgBytes&&$m===0&&($m=62500*op());var i=setTimeout(function(){if(e.waitingForImages=!1,e.count===0&&(e.stylesheets&&ah(e,e.stylesheets),e.unsuspend)){var t=e.unsuspend;e.unsuspend=null,t()}},(e.imgBytes>$m?50:800)+t);return e.unsuspend=n,function(){e.unsuspend=null,clearTimeout(r),clearTimeout(i)}}:null}function th(e){if(e.count===0&&(e.imgCount===0||!e.waitingForImages)){if(e.stylesheets)ah(e,e.stylesheets);else if(e.unsuspend){var t=e.unsuspend;e.unsuspend=null,t()}}}function nh(){this.count--,th(this)}function rh(){this.imgCount--,th(this)}var ih=null;function ah(e,t){e.stylesheets=null,e.unsuspend!==null&&(e.count++,ih=new Map,t.forEach(oh,e),ih=null,nh.call(e))}function oh(e,t){if(!(t.state.loading&4)){var n=ih.get(e);if(n)var r=n.get(null);else{n=new Map,ih.set(e,n);for(var i=e.querySelectorAll(`link[data-precedence],style[data-precedence]`),a=0;a<i.length;a++){var o=i[a];(o.nodeName===`LINK`||o.getAttribute(`media`)!==`not all`)&&(n.set(o.dataset.precedence,o),r=o)}r&&n.set(null,r)}i=t.instance,o=i.getAttribute(`data-precedence`),a=n.get(o)||r,a===r&&n.set(null,i),n.set(o,i),this.count++,r=nh.bind(this),i.addEventListener(`load`,r),i.addEventListener(`error`,r),a?a.parentNode.insertBefore(i,a.nextSibling):(e=e.nodeType===9?e.head:e,e.insertBefore(i,e.firstChild)),t.state.loading|=4}}var sh={$$typeof:F,Provider:null,Consumer:null,_currentValue:de,_currentValue2:de,_threadCount:0};function ch(e,t,n,r,i,a,o,s,c){this.tag=1,this.containerInfo=e,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=ct(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=ct(0),this.hiddenUpdates=ct(null),this.identifierPrefix=r,this.onUncaughtError=i,this.onCaughtError=a,this.onRecoverableError=o,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=c,this.transitionTypes=null,this.incompleteTransitions=new Map}function lh(e,t,n,r,i,a,o,s,c,l,u,d){return e=new ch(e,t,n,o,c,l,u,d,s),t=1,!0===a&&(t|=24),a=Ai(3,null,null,t),e.current=a,a.stateNode=e,t=Ea(),t.refCount++,e.pooledCache=t,t.refCount++,a.memoizedState={element:r,isDehydrated:n,cache:t},co(a),e}function uh(e){return e?(e=Oi,e):Oi}function dh(e,t,n,r,i,a){i=uh(i),r.context===null?r.context=i:r.pendingContext=i,r=uo(t),r.payload={element:n},a=a===void 0?null:a,a!==null&&(r.callback=a),n=fo(e,r,t),n!==null&&(jd(n,e,t),po(n,e,t))}function fh(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function ph(e,t){fh(e,t),(e=e.alternate)&&fh(e,t)}function mh(e){if(e.tag===13||e.tag===31){var t=Ti(e,67108864);t!==null&&jd(t,e,67108864),ph(e,67108864)}}function hh(e){if(e.tag===13||e.tag===31){var t=Od();t=mt(t);var n=Ti(e,t);n!==null&&jd(n,e,t),ph(e,t)}}var gh=!0;function _h(e,t,n,r){var i=B.T;B.T=null;var a=V.p;try{V.p=2,yh(e,t,n,r)}finally{V.p=a,B.T=i}}function vh(e,t,n,r){var i=B.T;B.T=null;var a=V.p;try{V.p=8,yh(e,t,n,r)}finally{V.p=a,B.T=i}}function yh(e,t,n,r){if(gh){var i=bh(r);if(i===null)Gf(e,t,r,xh,n),Mh(e,r);else if(Ph(i,e,t,n,r))r.stopPropagation();else if(Mh(e,r),t&4&&-1<jh.indexOf(e)){for(;i!==null;){var a=At(i);if(a!==null)switch(a.tag){case 3:if(a=a.stateNode,a.current.memoizedState.isDehydrated){var o=nt(a.pendingLanes);if(o!==0){var s=a;for(s.pendingLanes|=2,s.entangledLanes|=2;o;){var c=1<<31-Ye(o);s.entanglements[1]|=c,o&=~c}wf(a),!(Yu&6)&&(pd=Le()+500,Tf(0,!1))}}break;case 31:case 13:s=Ti(a,2),s!==null&&jd(s,a,2),Id(),ph(a,2)}if(a=bh(r),a===null&&Gf(e,t,r,xh,n),a===i)break;i=a}i!==null&&r.stopPropagation()}else Gf(e,t,r,null,n)}}function bh(e){return e=vn(e),Sh(e)}var xh=null;function Sh(e){if(xh=null,e=kt(e),e!==null){var t=o(e);if(t===null)e=null;else{var n=t.tag;if(n===13){if(e=s(t),e!==null)return e;e=null}else if(n===31){if(e=c(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null)}}return xh=e,null}function Ch(e){switch(e){case`beforetoggle`:case`cancel`:case`click`:case`close`:case`contextmenu`:case`copy`:case`cut`:case`auxclick`:case`dblclick`:case`dragend`:case`dragstart`:case`drop`:case`focusin`:case`focusout`:case`input`:case`invalid`:case`keydown`:case`keypress`:case`keyup`:case`mousedown`:case`mouseup`:case`paste`:case`pause`:case`play`:case`pointercancel`:case`pointerdown`:case`pointerup`:case`ratechange`:case`reset`:case`seeked`:case`submit`:case`toggle`:case`touchcancel`:case`touchend`:case`touchstart`:case`volumechange`:case`change`:case`selectionchange`:case`textInput`:case`compositionstart`:case`compositionend`:case`compositionupdate`:case`beforeblur`:case`afterblur`:case`beforeinput`:case`blur`:case`fullscreenchange`:case`fullscreenerror`:case`focus`:case`hashchange`:case`popstate`:case`select`:case`selectstart`:return 2;case`drag`:case`dragenter`:case`dragexit`:case`dragleave`:case`dragover`:case`mousemove`:case`mouseout`:case`mouseover`:case`pointermove`:case`pointerout`:case`pointerover`:case`resize`:case`scroll`:case`touchmove`:case`wheel`:case`mouseenter`:case`mouseleave`:case`pointerenter`:case`pointerleave`:return 8;case`message`:switch(Re()){case ze:return 2;case Be:return 8;case Ve:case He:return 32;case Ue:return 268435456;default:return 32}default:return 32}}var wh=!1,Th=null,Eh=null,Dh=null,Oh=new Map,kh=new Map,Ah=[],jh=`mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset`.split(` `);function Mh(e,t){switch(e){case`focusin`:case`focusout`:Th=null;break;case`dragenter`:case`dragleave`:Eh=null;break;case`mouseover`:case`mouseout`:Dh=null;break;case`pointerover`:case`pointerout`:Oh.delete(t.pointerId);break;case`gotpointercapture`:case`lostpointercapture`:kh.delete(t.pointerId)}}function Nh(e,t,n,r,i,a){return e===null||e.nativeEvent!==a?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:a,targetContainers:[i]},t!==null&&(t=At(t),t!==null&&mh(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,i!==null&&t.indexOf(i)===-1&&t.push(i),e)}function Ph(e,t,n,r,i){switch(t){case`focusin`:return Th=Nh(Th,e,t,n,r,i),!0;case`dragenter`:return Eh=Nh(Eh,e,t,n,r,i),!0;case`mouseover`:return Dh=Nh(Dh,e,t,n,r,i),!0;case`pointerover`:var a=i.pointerId;return Oh.set(a,Nh(Oh.get(a)||null,e,t,n,r,i)),!0;case`gotpointercapture`:return a=i.pointerId,kh.set(a,Nh(kh.get(a)||null,e,t,n,r,i)),!0}return!1}function Fh(e){var t=kt(e.target);if(t!==null){var n=o(t);if(n!==null){if(t=n.tag,t===13){if(t=s(n),t!==null){e.blockedOn=t,_t(e.priority,function(){hh(n)});return}}else if(t===31){if(t=c(n),t!==null){e.blockedOn=t,_t(e.priority,function(){hh(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Ih(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=bh(e.nativeEvent);if(n===null){n=e.nativeEvent;var r=new n.constructor(n.type,n);_n=r,n.target.dispatchEvent(r),_n=null}else return t=At(n),t!==null&&mh(t),e.blockedOn=n,!1;t.shift()}return!0}function Lh(e,t,n){Ih(e)&&n.delete(t)}function Rh(){wh=!1,Th!==null&&Ih(Th)&&(Th=null),Eh!==null&&Ih(Eh)&&(Eh=null),Dh!==null&&Ih(Dh)&&(Dh=null),Oh.forEach(Lh),kh.forEach(Lh)}function zh(e,n){e.blockedOn===n&&(e.blockedOn=null,wh||(wh=!0,t.unstable_scheduleCallback(t.unstable_NormalPriority,Rh)))}var Bh=null;function Vh(e){Bh!==e&&(Bh=e,t.unstable_scheduleCallback(t.unstable_NormalPriority,function(){Bh===e&&(Bh=null);for(var t=0;t<e.length;t+=3){var n=e[t],r=e[t+1],i=e[t+2];if(typeof r!=`function`){if(Sh(r||n)===null)continue;break}var a=At(n);a!==null&&(e.splice(t,3),t-=3,Xs(a,{pending:!0,data:i,method:n.method,action:r},r,i))}}))}function Hh(e){function t(t){return zh(t,e)}Th!==null&&zh(Th,e),Eh!==null&&zh(Eh,e),Dh!==null&&zh(Dh,e),Oh.forEach(t),kh.forEach(t);for(var n=0;n<Ah.length;n++){var r=Ah[n];r.blockedOn===e&&(r.blockedOn=null)}for(;0<Ah.length&&(n=Ah[0],n.blockedOn===null);)Fh(n),n.blockedOn===null&&Ah.shift();if(n=(e.ownerDocument||e).$$reactFormReplay,n!=null)for(r=0;r<n.length;r+=3){var i=n[r],a=n[r+1],o=i[bt]||null;if(typeof a==`function`)o||Vh(n);else if(o){var s=null;if(a&&a.hasAttribute(`formAction`)){if(i=a,o=a[bt]||null)s=o.formAction;else if(Sh(i)!==null)continue}else s=o.action;typeof s==`function`?n[r+1]=s:(n.splice(r,3),r-=3),Vh(n)}}}function Uh(){function e(e){e.canIntercept&&e.info===`react-transition`&&e.intercept({handler:function(){return new Promise(function(e){return i=e})},focusReset:`manual`,scroll:`manual`})}function t(){i!==null&&(i(),i=null),r||setTimeout(n,20)}function n(){if(!r&&!navigation.transition){var e=navigation.currentEntry;e&&e.url!=null&&navigation.navigate(e.url,{state:e.getState(),info:`react-transition`,history:`replace`})}}if(typeof navigation==`object`){var r=!1,i=null;return navigation.addEventListener(`navigate`,e),navigation.addEventListener(`navigatesuccess`,t),navigation.addEventListener(`navigateerror`,t),setTimeout(n,100),function(){r=!0,navigation.removeEventListener(`navigate`,e),navigation.removeEventListener(`navigatesuccess`,t),navigation.removeEventListener(`navigateerror`,t),i!==null&&(i(),i=null)}}}function Wh(e){this._internalRoot=e}Gh.prototype.render=Wh.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(i(409));var n=t.current;dh(n,Od(),e,t,null,null)},Gh.prototype.unmount=Wh.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;dh(e.current,2,null,e,null,null),Id(),t[xt]=null}};function Gh(e){this._internalRoot=e}Gh.prototype.unstable_scheduleHydration=function(e){if(e){var t=gt();e={blockedOn:null,target:e,priority:t};for(var n=0;n<Ah.length&&t!==0&&t<Ah[n].priority;n++);Ah.splice(n,0,e),n===0&&Fh(e)}};var Kh=n.version;if(Kh!==`19.3.1`)throw Error(i(527,Kh,`19.3.1`));V.findDOMNode=function(e){var t=e._reactInternals;if(t===void 0)throw typeof e.render==`function`?Error(i(188)):(e=Object.keys(e).join(`,`),Error(i(268,e)));return e=d(t),e=e===null?null:p(e),e=e===null?null:e.stateNode,e};var qh={bundleType:0,version:`19.3.1`,rendererPackageName:`react-dom`,currentDispatcherRef:B,reconcilerVersion:`19.3.1`};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<`u`){var Jh=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Jh.isDisabled&&Jh.supportsFiber)try{Ke=Jh.inject(qh),qe=Jh}catch{}}e.createRoot=function(e,t){if(!a(e))throw Error(i(299));var n=!1,r=``,o=yc,s=bc,c=xc;return t!=null&&(!0===t.unstable_strictMode&&(n=!0),t.identifierPrefix!==void 0&&(r=t.identifierPrefix),t.onUncaughtError!==void 0&&(o=t.onUncaughtError),t.onCaughtError!==void 0&&(s=t.onCaughtError),t.onRecoverableError!==void 0&&(c=t.onRecoverableError)),t=lh(e,1,!1,null,null,n,r,null,o,s,c,Uh),e[xt]=t.current,Uf(e),new Wh(t)}})),g=o(((e,t)=>{function n(){if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<`u`&&typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE==`function`)try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(n)}catch(e){console.error(e)}}n(),t.exports=h()})),_=c(u(),1),v=g();function y(e){if(e===void 0)throw ReferenceError(`this hasn't been initialised - super() hasn't been called`);return e}function b(e,t){e.prototype=Object.create(t.prototype),e.prototype.constructor=e,e.__proto__=t}var x={autoSleep:120,force3D:`auto`,nullTargetWarn:1,units:{lineHeight:``}},S={duration:.5,overwrite:!1,delay:0},C,w,T,E=1e8,D=1/E,O=Math.PI*2,k=O/4,A=0,j=Math.sqrt,M=Math.cos,N=Math.sin,P=function(e){return typeof e==`string`},F=function(e){return typeof e==`function`},I=function(e){return typeof e==`number`},ee=function(e){return e===void 0},L=function(e){return typeof e==`object`},R=function(e){return e!==!1},z=function(){return typeof window<`u`},te=function(e){return F(e)||P(e)},ne=typeof ArrayBuffer==`function`&&ArrayBuffer.isView||function(){},re=Array.isArray,ie=/random\([^)]+\)/g,ae=/,\s*/g,oe=/(?:-?\.?\d|\.)+/gi,se=/[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g,ce=/[-+=.]*\d+[.e-]*\d*[a-z%]*/g,le=/[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi,ue=/[+-]=-?[.\d]+/,B=/[^,'"\[\]\s]+/gi,V=/^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i,de,fe,pe,me,he={},ge={},_e,ve=function(e){return(ge=Xe(e,he))&&gr},ye=function(e,t){return console.warn(`Invalid property`,e,`set to`,t,`Missing plugin? gsap.registerPlugin()`)},be=function(e,t){return!t&&console.warn(e)},xe=function(e,t){return e&&(he[e]=t)&&ge&&(ge[e]=t)||he},Se=function(){return 0},Ce={suppressEvents:!0,isStart:!0,kill:!1},we={suppressEvents:!0,kill:!1},Te={suppressEvents:!0},Ee={},De=[],Oe={},ke,Ae={},je={},Me=30,Ne=[],Pe=``,Fe=function(e){var t=e[0],n,r;if(L(t)||F(t)||(e=[e]),!(n=(t._gsap||{}).harness)){for(r=Ne.length;r--&&!Ne[r].targetTest(t););n=Ne[r]}for(r=e.length;r--;)e[r]&&(e[r]._gsap||(e[r]._gsap=new En(e[r],n)))||e.splice(r,1);return e},Ie=function(e){return e._gsap||Fe(Nt(e))[0]._gsap},Le=function(e,t,n){return(n=e[t])&&F(n)?e[t]():ee(n)&&e.getAttribute&&e.getAttribute(t)||n},Re=function(e,t){return(e=e.split(`,`)).forEach(t)||e},ze=function(e){return Math.round(e*1e5)/1e5||0},Be=function(e){return Math.round(e*1e7)/1e7||0},Ve=function(e,t){var n=t.charAt(0),r=parseFloat(t.substr(2));return e=parseFloat(e),n===`+`?e+r:n===`-`?e-r:n===`*`?e*r:e/r},He=function(e,t){for(var n=t.length,r=0;e.indexOf(t[r])<0&&++r<n;);return r<n},Ue=function(){var e=De.length,t=De.slice(0),n,r;for(Oe={},De.length=0,n=0;n<e;n++)r=t[n],r&&r._lazy&&(r.render(r._lazy[0],r._lazy[1],!0)._lazy=0)},We=function(e){return!!(e._initted||e._startAt||e.add)},Ge=function(e,t,n,r){De.length&&!w&&Ue(),e.render(t,n,r||!!(w&&t<0&&We(e))),De.length&&!w&&Ue()},Ke=function(e){var t=parseFloat(e);return(t||t===0)&&(e+``).match(B).length<2?t:P(e)?e.trim():e},qe=function(e){return e},Je=function(e,t){for(var n in t)n in e||(e[n]=t[n]);return e},Ye=function(e){return function(t,n){for(var r in n)r in t||r===`duration`&&e||r===`ease`||(t[r]=n[r])}},Xe=function(e,t){for(var n in t)e[n]=t[n];return e},Ze=function e(t,n){for(var r in n)r!==`__proto__`&&r!==`constructor`&&r!==`prototype`&&(t[r]=L(n[r])?e(t[r]||(t[r]={}),n[r]):n[r]);return t},Qe=function(e,t){var n={},r;for(r in e)r in t||(n[r]=e[r]);return n},$e=function(e){var t=e.parent||de,n=e.keyframes?Ye(re(e.keyframes)):Je;if(R(e.inherit))for(;t;)n(e,t.vars.defaults),t=t.parent||t._dp;return e},et=function(e,t){for(var n=e.length,r=n===t.length;r&&n--&&e[n]===t[n];);return n<0},tt=function(e,t,n,r,i){n===void 0&&(n=`_first`),r===void 0&&(r=`_last`);var a=e[r],o;if(i)for(o=t[i];a&&a[i]>o;)a=a._prev;return a?(t._next=a._next,a._next=t):(t._next=e[n],e[n]=t),t._next?t._next._prev=t:e[r]=t,t._prev=a,t.parent=t._dp=e,t},nt=function(e,t,n,r){n===void 0&&(n=`_first`),r===void 0&&(r=`_last`);var i=t._prev,a=t._next;i?i._next=a:e[n]===t&&(e[n]=a),a?a._prev=i:e[r]===t&&(e[r]=i),t._next=t._prev=t.parent=null},rt=function(e,t){e.parent&&(!t||e.parent.autoRemoveChildren)&&e.parent.remove&&e.parent.remove(e),e._act=0},it=function(e,t){if(e&&(!t||t._end>e._dur||t._start<0))for(var n=e;n;)n._dirty=1,n=n.parent;return e},at=function(e){for(var t=e.parent;t&&t.parent;)t._dirty=1,t.totalDuration(),t=t.parent;return e},ot=function(e,t,n,r){return e._startAt&&(w?e._startAt.revert(we):e.vars.immediateRender&&!e.vars.autoRevert||e._startAt.render(t,!0,r))},st=function e(t){return!t||t._ts&&e(t.parent)},ct=function(e){return e._repeat?lt(e._tTime,e=e.duration()+e._rDelay)*e:0},lt=function(e,t){var n=Math.floor(e=Be(e/t));return e&&n===e?n-1:n},ut=function(e,t){return(e-t._start)*t._ts+(t._ts>=0?0:t._dirty?t.totalDuration():t._tDur)},dt=function(e){return e._end=Be(e._start+(e._tDur/Math.abs(e._ts||e._rts||D)||0))},ft=function(e,t){var n=e._dp;return n&&n.smoothChildTiming&&e._ts&&(e._start=Be(n._time-(e._ts>0?t/e._ts:((e._dirty?e.totalDuration():e._tDur)-t)/-e._ts)),dt(e),n._dirty||it(n,e)),e},pt=function(e,t){var n;if((t._time||!t._dur&&t._initted||t._start<e._time&&(t._dur||!t.add))&&(n=ut(e.rawTime(),t),(!t._dur||Dt(0,t.totalDuration(),n)-t._tTime>D)&&t.render(n,!0)),it(e,t)._dp&&e._initted&&e._time>=e._dur&&e._ts){if(e._dur<e.duration())for(n=e;n._dp;)n.rawTime()>=0&&n.totalTime(n._tTime),n=n._dp;e._zTime=-D}},mt=function(e,t,n,r){return t.parent&&rt(t),t._start=Be((I(n)?n:!n&&vt(t)&&(!e._last||e._last._start>=e._time)?e._last?e._last._start:e._time:n||e!==de?wt(e,n,t):e._time)+t._delay),t._end=Be(t._start+(t.totalDuration()/Math.abs(t.timeScale())||0)),tt(e,t,`_first`,`_last`,e._sort?`_start`:0),vt(t)||(e._recent=t),r||pt(e,t),e._ts<0&&ft(e,e._tTime),e},ht=function(e,t){return(he.ScrollTrigger||ye(`scrollTrigger`,t))&&he.ScrollTrigger.create(t,e)},gt=function(e,t,n,r,i){if(Fn(e,t,i),!e._initted)return 1;if(!n&&e._pt&&!w&&(e._dur&&e.vars.lazy!==!1||!e._dur&&e.vars.lazy)&&ke!==fn.frame)return De.push(e),e._lazy=[i,r],1},_t=function e(t){var n=t.parent;return n&&n._ts&&n._initted&&!n._lock&&(n.rawTime()<0||e(n))},vt=function(e){var t=e.data;return t===`isFromStart`||t===`isStart`},yt=function(e,t,n,r){var i=e.ratio,a=t<0||!t&&(!e._start&&_t(e)&&(e._initted||!vt(e))||(e._ts<0||e._dp._ts<0)&&!vt(e))?0:1,o=e._rDelay,s=0,c,l,u;if(o&&e._repeat&&(s=Dt(0,e._tDur,t),l=lt(s,o),e._yoyo&&l&1&&(a=1-a),l!==lt(e._tTime,o)&&(i=1-a,e.vars.repeatRefresh&&e._initted&&e.invalidate())),a!==i||w||r||e._zTime===D||!t&&e._zTime){if(!e._initted&&gt(e,t,r,n,s))return;for(u=e._zTime,e._zTime=t||(n?D:0),n||=t&&!u,e.ratio=a,e._from&&(a=1-a),e._time=0,e._tTime=s,c=e._pt;c;)c.r(a,c.d),c=c._next;t<0&&ot(e,t,n,!0),e._onUpdate&&!n&&Xt(e,`onUpdate`),s&&e._repeat&&!n&&e.parent&&Xt(e,`onRepeat`),(t>=e._tDur||t<0)&&e.ratio===a&&(a&&rt(e,1),!n&&!w&&(Xt(e,a?`onComplete`:`onReverseComplete`,!0),e._prom&&e._prom()))}else e._zTime||=t},bt=function(e,t,n){var r;if(n>t)for(r=e._first;r&&r._start<=n;){if(r.data===`isPause`&&r._start>t)return r;r=r._next}else for(r=e._last;r&&r._start>=n;){if(r.data===`isPause`&&r._start<t)return r;r=r._prev}},xt=function(e,t,n,r){var i=e._repeat,a=Be(t)||0,o=e._tTime/e._tDur;return o&&!r&&(e._time*=a/e._dur),e._dur=a,e._tDur=i?i<0?1e10:Be(a*(i+1)+e._rDelay*i):a,o>0&&!r&&ft(e,e._tTime=e._tDur*o),e.parent&&dt(e),n||it(e.parent,e),e},St=function(e){return e instanceof On?it(e):xt(e,e._dur)},Ct={_start:0,endTime:Se,totalDuration:Se},wt=function e(t,n,r){var i=t.labels,a=t._recent||Ct,o=t.duration()>=E?a.endTime(!1):t._dur,s,c,l;return P(n)&&(isNaN(n)||n in i)?(c=n.charAt(0),l=n.substr(-1)===`%`,s=n.indexOf(`=`),c===`<`||c===`>`?(s>=0&&(n=n.replace(/=/,``)),(c===`<`?a._start:a.endTime(a._repeat>=0))+(parseFloat(n.substr(1))||0)*(l?(s<0?a:r).totalDuration()/100:1)):s<0?(n in i||(i[n]=o),i[n]):(c=parseFloat(n.charAt(s-1)+n.substr(s+1)),l&&r&&(c=c/100*(re(r)?r[0]:r).totalDuration()),s>1?e(t,n.substr(0,s-1),r)+c:o+c)):n==null?o:+n},Tt=function(e,t,n){var r=I(t[1]),i=(r?2:1)+(e<2?0:1),a=t[i],o,s;if(r&&(a.duration=t[1]),a.parent=n,e){for(o=a,s=n;s&&!(`immediateRender`in o);)o=s.vars.defaults||{},s=R(s.vars.inherit)&&s.parent;a.immediateRender=R(o.immediateRender),e<2?a.runBackwards=1:a.startAt=t[i-1]}return new Hn(t[0],a,t[i+1])},Et=function(e,t){return e||e===0?t(e):t},Dt=function(e,t,n){return n<e?e:n>t?t:n},Ot=function(e,t){return!P(e)||!(t=V.exec(e))?``:t[1]},kt=function(e,t,n){return Et(n,function(n){return Dt(e,t,n)})},At=[].slice,jt=function(e,t){return e&&L(e)&&`length`in e&&(!t&&!e.length||e.length-1 in e&&L(e[0]))&&!e.nodeType&&e!==fe},Mt=function(e,t,n){return n===void 0&&(n=[]),e.forEach(function(e){var r;return P(e)&&!t||jt(e,1)?(r=n).push.apply(r,Nt(e)):n.push(e)})||n},Nt=function(e,t,n){return T&&!t&&T.selector?T.selector(e):P(e)&&!n&&(pe||!pn())?At.call((t||me).querySelectorAll(e),0):re(e)?Mt(e,n):jt(e)?At.call(e,0):e?[e]:[]},Pt=function(e){return e=Nt(e)[0]||be(`Invalid scope`)||{},function(t){var n=e.current||e.nativeElement||e;return Nt(t,n.querySelectorAll?n:n===e?be(`Invalid scope`)||me.createElement(`div`):e)}},Ft=function(e){return e.sort(function(){return .5-Math.random()})},It=function(e){if(F(e))return e;var t=L(e)?e:{each:e},n=xn(t.ease),r=t.from||0,i=parseFloat(t.base)||0,a={},o=r>0&&r<1,s=isNaN(r)||o,c=t.axis,l=r,u=r;return P(r)?l=u={center:.5,edges:.5,end:1}[r]||0:!o&&s&&(l=r[0],u=r[1]),function(e,o,d){var f=(d||t).length,p=a[f],m,h,g,_,v,y,b,x,S;if(!p){if(S=t.grid===`auto`?0:(t.grid||[1,E])[1],!S){for(b=-E;b<(b=d[S++].getBoundingClientRect().left)&&S<f;);S<f&&S--}for(p=a[f]=[],m=s?Math.min(S,f)*l-.5:r%S,h=S===E?0:s?f*u/S-.5:r/S|0,b=0,x=E,y=0;y<f;y++)g=y%S-m,_=h-(y/S|0),p[y]=v=c?Math.abs(c===`y`?_:g):j(g*g+_*_),v>b&&(b=v),v<x&&(x=v);r===`random`&&Ft(p),p.max=b-x,p.min=x,p.v=f=(parseFloat(t.amount)||parseFloat(t.each)*(S>f?f-1:c?c===`y`?f/S:S:Math.max(S,f/S))||0)*(r===`edges`?-1:1),p.b=f<0?i-f:i,p.u=Ot(t.amount||t.each)||0,n=n&&f<0?bn(n):n}return f=(p[e]-p.min)/p.max||0,Be(p.b+(n?n(f):f)*p.v)+p.u}},Lt=function(e){var t=10**((e+``).split(`.`)[1]||``).length;return function(n){var r=Be(Math.round(parseFloat(n)/e)*e*t);return(r-r%1)/t+(I(n)?0:Ot(n))}},Rt=function(e,t){var n=re(e),r,i;return!n&&L(e)&&(r=n=e.radius||E,e.values?(e=Nt(e.values),(i=!I(e[0]))&&(r*=r)):e=Lt(e.increment)),Et(t,n?F(e)?function(t){return i=e(t),Math.abs(i-t)<=r?i:t}:function(t){for(var n=parseFloat(i?t.x:t),a=parseFloat(i?t.y:0),o=E,s=0,c=e.length,l,u;c--;)i?(l=e[c].x-n,u=e[c].y-a,l=l*l+u*u):l=Math.abs(e[c]-n),l<o&&(o=l,s=c);return s=!r||o<=r?e[s]:t,i||s===t||I(t)?s:s+Ot(t)}:Lt(e))},zt=function(e,t,n,r){return Et(re(e)?!t:n===!0?!!(n=0):!r,function(){return re(e)?e[~~(Math.random()*e.length)]:(n||=1e-5)&&(r=n<1?10**((n+``).length-2):1)&&Math.floor(Math.round((e-n/2+Math.random()*(t-e+n*.99))/n)*n*r)/r})},Bt=function(){var e=[...arguments];return function(t){return e.reduce(function(e,t){return t(e)},t)}},Vt=function(e,t){return function(n){return e(parseFloat(n))+(t||Ot(n))}},Ht=function(e,t,n){return qt(e,t,0,1,n)},Ut=function(e,t,n){return Et(n,function(n){return e[~~t(n)]})},Wt=function e(t,n,r){var i=n-t;return re(t)?Ut(t,e(0,t.length),n):Et(r,function(e){return(i+(e-t)%i)%i+t})},Gt=function e(t,n,r){var i=n-t,a=i*2;return re(t)?Ut(t,e(0,t.length-1),n):Et(r,function(e){return e=(a+(e-t)%a)%a||0,t+(e>i?a-e:e)})},Kt=function(e){return e.replace(ie,function(e){var t=e.indexOf(`[`)+1,n=e.substring(t||7,t?e.indexOf(`]`):e.length-1).split(ae);return zt(t?n:+n[0],t?0:+n[1],+n[2]||1e-5)})},qt=function(e,t,n,r,i){var a=t-e,o=r-n;return Et(i,function(t){return n+((t-e)/a*o||0)})},Jt=function e(t,n,r,i){var a=isNaN(t+n)?0:function(e){return(1-e)*t+e*n};if(!a){var o=P(t),s={},c,l,u,d,f;if(r===!0&&(i=1)&&(r=null),o)t={p:t},n={p:n};else if(re(t)&&!re(n)){for(u=[],d=t.length,f=d-2,l=1;l<d;l++)u.push(e(t[l-1],t[l]));d--,a=function(e){e*=d;var t=Math.min(f,~~e);return u[t](e-t)},r=n}else i||(t=Xe(re(t)?[]:{},t));if(!u){for(c in n)An.call(s,t,c,`get`,n[c]);a=function(e){return Zn(e,s)||(o?t.p:t)}}}return Et(r,a)},Yt=function(e,t,n){var r=e.labels,i=E,a,o,s;for(a in r)o=r[a]-t,o<0==!!n&&o&&i>(o=Math.abs(o))&&(s=a,i=o);return s},Xt=function(e,t,n){var r=e.vars,i=r[t],a=T,o=e._ctx,s,c,l;if(i)return s=r[t+`Params`],c=r.callbackScope||e,n&&De.length&&Ue(),o&&(T=o),l=s?i.apply(c,s):i.call(c),T=a,l},Zt=function(e){return rt(e),e.scrollTrigger&&e.scrollTrigger.kill(!!w),e.progress()<1&&Xt(e,`onInterrupt`),e},Qt,$t=[],en=function(e){if(e){if(e=!e.name&&e.default||e,z()||e.headless){var t=e.name,n=F(e),r=t&&!n&&e.init?function(){this._props=[]}:e,i={init:Se,render:Zn,add:An,kill:$n,modifier:Qn,rawVars:0},a={targetTest:0,get:0,getSetter:qn,aliases:{},register:0};if(pn(),e!==r){if(Ae[t])return;Je(r,Je(Qe(e,i),a)),Xe(r.prototype,Xe(i,Qe(e,a))),Ae[r.prop=t]=r,e.targetTest&&(Ne.push(r),Ee[t]=1),t=(t===`css`?`CSS`:t.charAt(0).toUpperCase()+t.substr(1))+`Plugin`}xe(t,r),e.register&&e.register(gr,r,nr)}else $t.push(e)}},tn=255,nn={aqua:[0,tn,tn],lime:[0,tn,0],silver:[192,192,192],black:[0,0,0],maroon:[128,0,0],teal:[0,128,128],blue:[0,0,tn],navy:[0,0,128],white:[tn,tn,tn],olive:[128,128,0],yellow:[tn,tn,0],orange:[tn,165,0],gray:[128,128,128],purple:[128,0,128],green:[0,128,0],red:[tn,0,0],pink:[tn,192,203],cyan:[0,tn,tn],transparent:[tn,tn,tn,0]},rn=function(e,t,n){return e+=e<0?1:e>1?-1:0,(e*6<1?t+(n-t)*e*6:e<.5?n:e*3<2?t+(n-t)*(2/3-e)*6:t)*tn+.5|0},an=function(e,t,n){var r=e?I(e)?[e>>16,e>>8&tn,e&tn]:0:nn.black,i,a,o,s,c,l,u,d,f,p;if(!r){if(e.substr(-1)===`,`&&(e=e.substr(0,e.length-1)),nn[e])r=nn[e];else if(e.charAt(0)===`#`){if(e.length<6&&(i=e.charAt(1),a=e.charAt(2),o=e.charAt(3),e=`#`+i+i+a+a+o+o+(e.length===5?e.charAt(4)+e.charAt(4):``)),e.length===9)return r=parseInt(e.substr(1,6),16),[r>>16,r>>8&tn,r&tn,parseInt(e.substr(7),16)/255];e=parseInt(e.substr(1),16),r=[e>>16,e>>8&tn,e&tn]}else if(e.substr(0,3)===`hsl`){if(r=p=e.match(oe),!t)s=r[0]%360/360,c=r[1]/100,l=r[2]/100,a=l<=.5?l*(c+1):l+c-l*c,i=l*2-a,r.length>3&&(r[3]*=1),r[0]=rn(s+1/3,i,a),r[1]=rn(s,i,a),r[2]=rn(s-1/3,i,a);else if(~e.indexOf(`=`))return r=e.match(se),n&&r.length<4&&(r[3]=1),r}else r=e.match(oe)||nn.transparent;r=r.map(Number)}return t&&!p&&(i=r[0]/tn,a=r[1]/tn,o=r[2]/tn,u=Math.max(i,a,o),d=Math.min(i,a,o),l=(u+d)/2,u===d?s=c=0:(f=u-d,c=l>.5?f/(2-u-d):f/(u+d),s=u===i?(a-o)/f+(a<o?6:0):u===a?(o-i)/f+2:(i-a)/f+4,s*=60),r[0]=~~(s+.5),r[1]=~~(c*100+.5),r[2]=~~(l*100+.5)),n&&r.length<4&&(r[3]=1),r},on=function(e){var t=[],n=[],r=-1;return e.split(cn).forEach(function(e){var i=e.match(ce)||[];t.push.apply(t,i),n.push(r+=i.length+1)}),t.c=n,t},sn=function(e,t,n){var r=``,i=(e+r).match(cn),a=t?`hsla(`:`rgba(`,o=0,s,c,l,u;if(!i)return e;if(i=i.map(function(e){return(e=an(e,t,1))&&a+(t?e[0]+`,`+e[1]+`%,`+e[2]+`%,`+e[3]:e.join(`,`))+`)`}),n&&(l=on(e),s=n.c,s.join(r)!==l.c.join(r)))for(c=e.replace(cn,`1`).split(ce),u=c.length-1;o<u;o++)r+=c[o]+(~s.indexOf(o)?i.shift()||a+`0,0,0,0)`:(l.length?l:i.length?i:n).shift());if(!c)for(c=e.split(cn),u=c.length-1;o<u;o++)r+=c[o]+i[o];return r+c[u]},cn=function(){var e=`(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b`,t;for(t in nn)e+=`|`+t+`\\b`;return RegExp(e+`)`,`gi`)}(),ln=/hsl[a]?\(/,un=function(e){var t=e.join(` `),n;if(cn.lastIndex=0,cn.test(t))return n=ln.test(t),e[1]=sn(e[1],n),e[0]=sn(e[0],n,on(e[1])),!0},dn,fn=function(){var e=Date.now,t=500,n=33,r=e(),i=r,a=1e3/240,o=a,s=[],c,l,u,d,f,p,m=function u(m){var h=e()-i,g=m===!0,_,v,y,b;if((h>t||h<0)&&(r+=h-n),i+=h,y=i-r,_=y-o,(_>0||g)&&(b=++d.frame,f=y-d.time*1e3,d.time=y/=1e3,o+=_+(_>=a?0:a-_),v=1),g||(c=l(u)),v)for(p=0;p<s.length;p++)s[p](y,f,b,m)};return d={time:0,frame:0,tick:function(){m(!0)},deltaRatio:function(e){return f/(1e3/(e||60))},wake:function(){_e&&(!pe&&z()&&(fe=pe=window,me=fe.document||{},he.gsap=gr,(fe.gsapVersions||(fe.gsapVersions=[])).push(gr.version),ve(ge||fe.GreenSockGlobals||!fe.gsap&&fe||{}),$t.forEach(en)),u=typeof requestAnimationFrame<`u`&&requestAnimationFrame,c&&d.sleep(),l=u||function(e){return setTimeout(e,o-d.time*1e3+1|0)},dn=1,m(2))},sleep:function(){(u?cancelAnimationFrame:clearTimeout)(c),dn=0,l=Se},lagSmoothing:function(e,r){t=e||1/0,n=Math.min(r||33,t)},fps:function(e){a=1e3/(e||240),o=d.time*1e3+a},add:function(e,t,n){var r=t?function(t,n,i,a){e(t,n,i,a),d.remove(r)}:e;return d.remove(e),s[n?`unshift`:`push`](r),pn(),r},remove:function(e,t){~(t=s.indexOf(e))&&s.splice(t,1)&&p>=t&&p--},_listeners:s},d}(),pn=function(){return!dn&&fn.wake()},mn={},hn=/^[\d.\-M][\d.\-,\s]/,gn=/["']/g,_n=function(e){for(var t={},n=e.substr(1,e.length-3).split(`:`),r=n[0],i=1,a=n.length,o,s,c;i<a;i++)s=n[i],o=i===a-1?s.length:s.lastIndexOf(`,`),c=s.substr(0,o),t[r]=isNaN(c)?c.replace(gn,``).trim():+c,r=s.substr(o+1).trim();return t},vn=function(e){var t=e.indexOf(`(`)+1,n=e.indexOf(`)`),r=e.indexOf(`(`,t);return e.substring(t,~r&&r<n?e.indexOf(`)`,n+1):n)},yn=function(e){var t=(e+``).split(`(`),n=mn[t[0]];return n&&t.length>1&&n.config?n.config.apply(null,~e.indexOf(`{`)?[_n(t[1])]:vn(e).split(`,`).map(Ke)):mn._CE&&hn.test(e)?mn._CE(``,e):n},bn=function(e){return function(t){return 1-e(1-t)}},xn=function(e,t){return e&&(F(e)?e:mn[e]||yn(e))||t},Sn=function(e,t,n,r){n===void 0&&(n=function(e){return 1-t(1-e)}),r===void 0&&(r=function(e){return e<.5?t(e*2)/2:1-t((1-e)*2)/2});var i={easeIn:t,easeOut:n,easeInOut:r},a;return Re(e,function(e){for(var t in mn[e]=he[e]=i,mn[a=e.toLowerCase()]=n,i)mn[a+(t===`easeIn`?`.in`:t===`easeOut`?`.out`:`.inOut`)]=mn[e+`.`+t]=i[t]}),i},Cn=function(e){return function(t){return t<.5?(1-e(1-t*2))/2:.5+e((t-.5)*2)/2}},wn=function e(t,n,r){var i=n>=1?n:1,a=(r||(t?.3:.45))/(n<1?n:1),o=a/O*(Math.asin(1/i)||0),s=function(e){return e===1?1:i*2**(-10*e)*N((e-o)*a)+1},c=t===`out`?s:t===`in`?function(e){return 1-s(1-e)}:Cn(s);return a=O/a,c.config=function(n,r){return e(t,n,r)},c},Tn=function e(t,n){n===void 0&&(n=1.70158);var r=function(e){return e?--e*e*((n+1)*e+n)+1:0},i=t===`out`?r:t===`in`?function(e){return 1-r(1-e)}:Cn(r);return i.config=function(n){return e(t,n)},i};Re(`Linear,Quad,Cubic,Quart,Quint,Strong`,function(e,t){var n=t<5?t+1:t;Sn(e+`,Power`+(n-1),t?function(e){return e**+n}:function(e){return e},function(e){return 1-(1-e)**n},function(e){return e<.5?(e*2)**n/2:1-((1-e)*2)**n/2})}),mn.Linear.easeNone=mn.none=mn.Linear.easeIn,Sn(`Elastic`,wn(`in`),wn(`out`),wn()),(function(e,t){var n=1/t,r=2*n,i=2.5*n,a=function(a){return a<n?e*a*a:a<r?e*(a-1.5/t)**2+.75:a<i?e*(a-=2.25/t)*a+.9375:e*(a-2.625/t)**2+.984375};Sn(`Bounce`,function(e){return 1-a(1-e)},a)})(7.5625,2.75),Sn(`Expo`,function(e){return 2**(10*(e-1))*e+e*e*e*e*e*e*(1-e)}),Sn(`Circ`,function(e){return-(j(1-e*e)-1)}),Sn(`Sine`,function(e){return e===1?1:-M(e*k)+1}),Sn(`Back`,Tn(`in`),Tn(`out`),Tn()),mn.SteppedEase=mn.steps=he.SteppedEase={config:function(e,t){e===void 0&&(e=1);var n=1/e,r=e+ +!t,i=+!!t,a=1-D;return function(e){return((r*Dt(0,a,e)|0)+i)*n}}},S.ease=mn[`quad.out`],Re(`onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt`,function(e){return Pe+=e+`,`+e+`Params,`});var En=function(e,t){this.id=A++,e._gsap=this,this.target=e,this.harness=t,this.get=t?t.get:Le,this.set=t?t.getSetter:qn},Dn=function(){function e(e){this.vars=e,this._delay=+e.delay||0,(this._repeat=e.repeat===1/0?-2:e.repeat||0)&&(this._rDelay=e.repeatDelay||0,this._yoyo=!!e.yoyo||!!e.yoyoEase),this._ts=1,xt(this,+e.duration,1,1),this.data=e.data,T&&(this._ctx=T,T.data.push(this)),dn||fn.wake()}var t=e.prototype;return t.delay=function(e){return e||e===0?(this.parent&&this.parent.smoothChildTiming&&this.startTime(this._start+e-this._delay),this._delay=e,this):this._delay},t.duration=function(e){return arguments.length?this.totalDuration(this._repeat>0?e+(e+this._rDelay)*this._repeat:e):this.totalDuration()&&this._dur},t.totalDuration=function(e){return arguments.length?(this._dirty=0,xt(this,this._repeat<0?e:(e-this._repeat*this._rDelay)/(this._repeat+1))):this._tDur},t.totalTime=function(e,t){if(pn(),!arguments.length)return this._tTime;var n=this._dp;if(n&&n.smoothChildTiming&&this._ts){for(ft(this,e),!n._dp||n.parent||pt(n,this);n&&n.parent;)n.parent._time!==n._start+(n._ts>=0?n._tTime/n._ts:(n.totalDuration()-n._tTime)/-n._ts)&&n.totalTime(n._tTime,!0),n=n.parent;!this.parent&&this._dp.autoRemoveChildren&&(this._ts>0&&e<this._tDur||this._ts<0&&e>0||!this._tDur&&!e)&&mt(this._dp,this,this._start-this._delay)}return(this._tTime!==e||!this._dur&&!t||this._initted&&Math.abs(this._zTime)===D||!this._initted&&this._dur&&e||!e&&!this._initted&&(this.add||this._ptLookup))&&(this._ts||(this._pTime=e),Ge(this,e,t)),this},t.time=function(e,t){return arguments.length?this.totalTime(Math.min(this.totalDuration(),e+ct(this))%(this._dur+this._rDelay)||(e?this._dur:0),t):this._time},t.totalProgress=function(e,t){return arguments.length?this.totalTime(this.totalDuration()*e,t):this.totalDuration()?Math.min(1,this._tTime/this._tDur):this.rawTime()>=0&&this._initted?1:0},t.progress=function(e,t){return arguments.length?this.totalTime(this.duration()*(this._yoyo&&!(this.iteration()&1)?1-e:e)+ct(this),t):this.duration()?Math.min(1,this._time/this._dur):+(this.rawTime()>0)},t.iteration=function(e,t){var n=this.duration()+this._rDelay;return arguments.length?this.totalTime(this._time+(e-1)*n,t):this._repeat?lt(this._tTime,n)+1:1},t.timeScale=function(e,t){if(!arguments.length)return this._rts===-D?0:this._rts;if(this._rts===e)return this;var n=this.parent&&this._ts?ut(this.parent._time,this):this._tTime,r=this._rts<0;this._rts=+e||0,this._ts=this._ps||e===-D?0:this._rts;var i=this.totalDuration();return(r!==this._rts<0||n>0&&n<i)&&this.totalTime(Dt(-Math.abs(this._delay),i,n),t!==!1),dt(this),at(this)},t.paused=function(e){if(!arguments.length)return this._ps;if(this._ps!==e){if(this._ps=e,e)this._pTime=this._tTime||Math.max(-this._delay,this.rawTime()),this._ts=this._act=0;else{pn(),this._ts=this._rts;var t=this.parent&&!this.parent.smoothChildTiming?this.rawTime():this._tTime||this._pTime,n=this.progress()===1&&Math.abs(this._zTime)!==D,r;if(n)for(this._tTime-=D,r=this._first;r;){if(!r._dur&&r._zTime<0&&r._ts&&r._start<=t+D){n=!1;break}r=r._next}this.totalTime(t,n)}}return this},t.startTime=function(e){if(arguments.length){this._start=Be(e);var t=this.parent||this._dp;return t&&(t._sort||!this.parent)&&mt(t,this,this._start-this._delay),this}return this._start},t.endTime=function(e){return this._start+(R(e)?this.totalDuration():this.duration())/Math.abs(this._ts||1)},t.rawTime=function(e){var t=this.parent||this._dp;return t?e&&(!this._ts||this._repeat&&this._time&&this.totalProgress()<1)?this._tTime%(this._dur+this._rDelay):this._ts?ut(t.rawTime(e),this):this._tTime:this._tTime},t.revert=function(e){e===void 0&&(e=Te);var t=w;return w=e,We(this)&&(this.timeline&&this.timeline.revert(e),this.totalTime(-.01,e.suppressEvents)),this.data!==`nested`&&e.kill!==!1&&this.kill(),w=t,this},t.globalTime=function(e){for(var t=this,n=arguments.length?e:t.rawTime();t;)n=t._start+n/(Math.abs(t._ts)||1),t=t._dp;return!this.parent&&this._sat?this._sat.globalTime(e):n},t.repeat=function(e){return arguments.length?(this._repeat=e===1/0?-2:e,St(this)):this._repeat===-2?1/0:this._repeat},t.repeatDelay=function(e){if(arguments.length){var t=this._time;return this._rDelay=e,St(this),t?this.time(t):this}return this._rDelay},t.yoyo=function(e){return arguments.length?(this._yoyo=e,this):this._yoyo},t.seek=function(e,t){return this.totalTime(wt(this,e),R(t))},t.restart=function(e,t){return this.play().totalTime(e?-this._delay:0,R(t)),this._dur||(this._zTime=-D),this},t.play=function(e,t){return e!=null&&this.seek(e,t),this.reversed(!1).paused(!1)},t.reverse=function(e,t){return e!=null&&this.seek(e||this.totalDuration(),t),this.reversed(!0).paused(!1)},t.pause=function(e,t){return e!=null&&this.seek(e,t),this.paused(!0)},t.resume=function(){return this.paused(!1)},t.reversed=function(e){return arguments.length?(!!e!==this.reversed()&&this.timeScale(-this._rts||(e?-D:0)),this):this._rts<0},t.invalidate=function(){return this._initted=this._act=0,this._zTime=-D,this},t.isActive=function(){var e=this.parent||this._dp,t=this._start,n;return!!(!e||this._ts&&this._initted&&e.isActive()&&(n=e.rawTime(!0))>=t&&n<this.endTime(!0)-D)},t.eventCallback=function(e,t,n){var r=this.vars;return arguments.length>1?(t?(r[e]=t,n&&(r[e+`Params`]=n),e===`onUpdate`&&(this._onUpdate=t)):delete r[e],this):r[e]},t.then=function(e){var t=this,n=t._prom;return new Promise(function(r){var i=F(e)?e:qe,a=function(){var e=t.then;t.then=null,n&&n(),F(i)&&(i=i(t))&&(i.then||i===t)&&(t.then=e),r(i),t.then=e};t._initted&&t.totalProgress()===1&&t._ts>=0||!t._tTime&&t._ts<0?a():t._prom=a})},t.kill=function(){Zt(this)},e}();Je(Dn.prototype,{_time:0,_start:0,_end:0,_tTime:0,_tDur:0,_dirty:0,_repeat:0,_yoyo:!1,parent:null,_initted:!1,_rDelay:0,_ts:1,_dp:0,ratio:0,_zTime:-D,_prom:0,_ps:!1,_rts:1});var On=function(e){b(t,e);function t(t,n){var r;return t===void 0&&(t={}),r=e.call(this,t)||this,r.labels={},r.smoothChildTiming=!!t.smoothChildTiming,r.autoRemoveChildren=!!t.autoRemoveChildren,r._sort=R(t.sortChildren),de&&mt(t.parent||de,y(r),n),t.reversed&&r.reverse(),t.paused&&r.paused(!0),t.scrollTrigger&&ht(y(r),t.scrollTrigger),r}var n=t.prototype;return n.to=function(e,t,n){return Tt(0,arguments,this),this},n.from=function(e,t,n){return Tt(1,arguments,this),this},n.fromTo=function(e,t,n,r){return Tt(2,arguments,this),this},n.set=function(e,t,n){return t.duration=0,t.parent=this,$e(t).repeatDelay||(t.repeat=0),t.immediateRender=!!t.immediateRender,new Hn(e,t,wt(this,n),1),this},n.call=function(e,t,n){return mt(this,Hn.delayedCall(0,e,t),n)},n.staggerTo=function(e,t,n,r,i,a,o){return n.duration=t,n.stagger=n.stagger||r,n.onComplete=a,n.onCompleteParams=o,n.parent=this,new Hn(e,n,wt(this,i)),this},n.staggerFrom=function(e,t,n,r,i,a,o){return n.runBackwards=1,$e(n).immediateRender=R(n.immediateRender),this.staggerTo(e,t,n,r,i,a,o)},n.staggerFromTo=function(e,t,n,r,i,a,o,s){return r.startAt=n,$e(r).immediateRender=R(r.immediateRender),this.staggerTo(e,t,r,i,a,o,s)},n.render=function(e,t,n){var r=this._time,i=this._dirty?this.totalDuration():this._tDur,a=this._dur,o=e<=0?0:Be(e),s=this._zTime<0!=e<0&&(this._initted||!a),c,l,u,d,f,p,m,h,g,_,v,y;if(this!==de&&o>i&&e>=0&&(o=i),o!==this._tTime||n||s){if(r!==this._time&&a&&(o+=this._time-r,e+=this._time-r),c=o,g=this._start,h=this._ts,p=!h,s&&(a||(r=this._zTime),(e||!t)&&(this._zTime=e)),this._repeat){if(v=this._yoyo,f=a+this._rDelay,this._repeat<-1&&e<0)return this.totalTime(f*100+e,t,n);if(c=Be(o%f),o===i?(d=this._repeat,c=a):(_=Be(o/f),d=~~_,d&&d===_&&(c=a,d--),c>a&&(c=a)),_=lt(this._tTime,f),!r&&this._tTime&&_!==d&&this._tTime-_*f-this._dur<=0&&(_=d),v&&d&1&&(c=a-c,y=1),d!==_&&!this._lock){var b=v&&_&1,x=b===(v&&d&1);if(d<_&&(b=!b),r=b?0:o%a?a:o,this._lock=1,this.render(r||(y?0:Be(d*f)),t,!a)._lock=0,this._tTime=o,!t&&this.parent&&Xt(this,`onRepeat`),this.vars.repeatRefresh&&!y&&(this.invalidate()._lock=1,_=d),r&&r!==this._time||p!==!this._ts||this.vars.onRepeat&&!this.parent&&!this._act||(a=this._dur,i=this._tDur,x&&(this._lock=2,r=b?a:-1e-4,this.render(r,!0),this.vars.repeatRefresh&&!y&&this.invalidate()),this._lock=0,!this._ts&&!p))return this}}if(this._hasPause&&!this._forcing&&this._lock<2&&(m=bt(this,Be(r),Be(c)),m&&(o-=c-(c=m._start))),this._tTime=o,this._time=c,this._act=!!h,this._initted||(this._onUpdate=this.vars.onUpdate,this._initted=1,this._zTime=e,r=0),!r&&o&&a&&!t&&!_&&(Xt(this,`onStart`),this._tTime!==o))return this;if(c>=r&&e>=0)for(l=this._first;l;){if(u=l._next,(l._act||c>=l._start)&&l._ts&&m!==l){if(l.parent!==this)return this.render(e,t,n);if(l.render(l._ts>0?(c-l._start)*l._ts:(l._dirty?l.totalDuration():l._tDur)+(c-l._start)*l._ts,t,n),c!==this._time||!this._ts&&!p){m=0,u&&(o+=this._zTime=-D);break}}l=u}else{l=this._last;for(var S=e<0?e:c;l;){if(u=l._prev,(l._act||S<=l._end)&&l._ts&&m!==l){if(l.parent!==this)return this.render(e,t,n);if(l.render(l._ts>0?(S-l._start)*l._ts:(l._dirty?l.totalDuration():l._tDur)+(S-l._start)*l._ts,t,n||w&&We(l)),c!==this._time||!this._ts&&!p){m=0,u&&(o+=this._zTime=S?-D:D);break}}l=u}}if(m&&!t&&(this.pause(),m.render(c>=r?0:-D)._zTime=c>=r?1:-1,this._ts))return this._start=g,dt(this),this.render(e,t,n);this._onUpdate&&!t&&Xt(this,`onUpdate`,!0),(o===i&&this._tTime>=this.totalDuration()||!o&&r)&&(g!==this._start&&Math.abs(h)===Math.abs(this._ts)||this._lock||((e||!a)&&(o===i&&this._ts>0||!o&&this._ts<0)&&rt(this,1),t||e<0&&!r||!o&&!r&&i||(Xt(this,o===i&&e>=0?`onComplete`:`onReverseComplete`,!0),this._prom&&!(o<i&&this.timeScale()>0)&&this._prom())))}return this},n.add=function(e,t){var n=this;if(I(t)||(t=wt(this,t,e)),!(e instanceof Dn)){if(re(e))return e.forEach(function(e){return n.add(e,t)}),this;if(P(e))return this.addLabel(e,t);if(F(e))e=Hn.delayedCall(0,e);else return this}return this===e?this:mt(this,e,t)},n.getChildren=function(e,t,n,r){e===void 0&&(e=!0),t===void 0&&(t=!0),n===void 0&&(n=!0),r===void 0&&(r=-E);for(var i=[],a=this._first;a;)a._start>=r&&(a instanceof Hn?t&&i.push(a):(n&&i.push(a),e&&i.push.apply(i,a.getChildren(!0,t,n)))),a=a._next;return i},n.getById=function(e){for(var t=this.getChildren(1,1,1),n=t.length;n--;)if(t[n].vars.id===e)return t[n]},n.remove=function(e){return P(e)?this.removeLabel(e):F(e)?this.killTweensOf(e):(e.parent===this&&nt(this,e),e===this._recent&&(this._recent=this._last),it(this))},n.totalTime=function(t,n){return arguments.length?(this._forcing=1,!this._dp&&this._ts&&(this._start=Be(fn.time-(this._ts>0?t/this._ts:(this.totalDuration()-t)/-this._ts))),e.prototype.totalTime.call(this,t,n),this._forcing=0,this):this._tTime},n.addLabel=function(e,t){return this.labels[e]=wt(this,t),this},n.removeLabel=function(e){return delete this.labels[e],this},n.addPause=function(e,t,n){var r=Hn.delayedCall(0,t||Se,n);return r.data=`isPause`,this._hasPause=1,mt(this,r,wt(this,e))},n.removePause=function(e){var t=this._first;for(e=wt(this,e);t;)t._start===e&&t.data===`isPause`&&rt(t),t=t._next},n.killTweensOf=function(e,t,n){for(var r=this.getTweensOf(e,n),i=r.length;i--;)Nn!==r[i]&&r[i].kill(e,t);return this},n.getTweensOf=function(e,t){for(var n=[],r=Nt(e),i=this._first,a=I(t),o;i;)i instanceof Hn?He(i._targets,r)&&(a?(!Nn||i._initted&&i._ts)&&i.globalTime(0)<=t&&i.globalTime(i.totalDuration())>t:!t||i.isActive())&&n.push(i):(o=i.getTweensOf(r,t)).length&&n.push.apply(n,o),i=i._next;return n},n.tweenTo=function(e,t){t||={};var n=this,r=wt(n,e),i=t,a=i.startAt,o=i.onStart,s=i.onStartParams,c=i.immediateRender,l,u=Hn.to(n,Je({ease:t.ease||`none`,lazy:!1,immediateRender:!1,time:r,overwrite:`auto`,duration:t.duration||Math.abs((r-(a&&`time`in a?a.time:n._time))/n.timeScale())||D,onStart:function(){if(n.pause(),!l){var e=t.duration||Math.abs((r-(a&&`time`in a?a.time:n._time))/n.timeScale());u._dur!==e&&xt(u,e,0,1).render(u._time,!0,!0),l=1}o&&o.apply(u,s||[])}},t));return c?u.render(0):u},n.tweenFromTo=function(e,t,n){return this.tweenTo(t,Je({startAt:{time:wt(this,e)}},n))},n.recent=function(){return this._recent},n.nextLabel=function(e){return e===void 0&&(e=this._time),Yt(this,wt(this,e))},n.previousLabel=function(e){return e===void 0&&(e=this._time),Yt(this,wt(this,e),1)},n.currentLabel=function(e){return arguments.length?this.seek(e,!0):this.previousLabel(this._time+D)},n.shiftChildren=function(e,t,n){n===void 0&&(n=0);var r=this._first,i=this.labels,a;for(e=Be(e);r;)r._start>=n&&(r._start+=e,r._end+=e),r=r._next;if(t)for(a in i)i[a]>=n&&(i[a]+=e);return it(this)},n.invalidate=function(t){var n=this._first;for(this._lock=0;n;)n.invalidate(t),n=n._next;return e.prototype.invalidate.call(this,t)},n.clear=function(e){e===void 0&&(e=!0);for(var t=this._first,n;t;)n=t._next,this.remove(t),t=n;return this._dp&&(this._time=this._tTime=this._pTime=0),e&&(this.labels={}),it(this)},n.totalDuration=function(e){var t=0,n=this,r=n._last,i=E,a,o,s;if(arguments.length)return n.timeScale((n._repeat<0?n.duration():n.totalDuration())/(n.reversed()?-e:e));if(n._dirty){for(s=n.parent;r;)a=r._prev,r._dirty&&r.totalDuration(),o=r._start,o>i&&n._sort&&r._ts&&!n._lock?(n._lock=1,mt(n,r,o-r._delay,1)._lock=0):i=o,o<0&&r._ts&&(t-=o,(!s&&!n._dp||s&&s.smoothChildTiming)&&(n._start+=Be(o/n._ts),n._time-=o,n._tTime-=o),n.shiftChildren(-o,!1,-1/0),i=0),r._end>t&&r._ts&&(t=r._end),r=a;xt(n,n===de&&n._time>t?n._time:t,1,1),n._dirty=0}return n._tDur},t.updateRoot=function(e){if(de._ts&&(Ge(de,ut(e,de)),ke=fn.frame),fn.frame>=Me){Me+=x.autoSleep||120;var t=de._first;if((!t||!t._ts)&&x.autoSleep&&fn._listeners.length<2){for(;t&&!t._ts;)t=t._next;t||fn.sleep()}}},t}(Dn);Je(On.prototype,{_lock:0,_hasPause:0,_forcing:0});var kn=function(e,t,n,r,i,a,o){var s=new nr(this._pt,e,t,0,1,Xn,null,i),c=0,l=0,u,d,f,p,m,h,g,_;for(s.b=n,s.e=r,n+=``,r+=``,(g=~r.indexOf(`random(`))&&(r=Kt(r)),a&&(_=[n,r],a(_,e,t),n=_[0],r=_[1]),d=n.match(le)||[];u=le.exec(r);)p=u[0],m=r.substring(c,u.index),f?f=(f+1)%5:m.substr(-5)===`rgba(`&&(f=1),p!==d[l++]&&(h=parseFloat(d[l-1])||0,s._pt={_next:s._pt,p:m||l===1?m:`,`,s:h,c:p.charAt(1)===`=`?Ve(h,p)-h:parseFloat(p)-h,m:f&&f<4?Math.round:0},c=le.lastIndex);return s.c=c<r.length?r.substring(c,r.length):``,s.fp=o,(ue.test(r)||g)&&(s.e=0),this._pt=s,s},An=function(e,t,n,r,i,a,o,s,c,l){F(r)&&(r=r(i||0,e,a));var u=e[t],d=n===`get`?F(u)?c?e[t.indexOf(`set`)||!F(e[`get`+t.substr(3)])?t:`get`+t.substr(3)](c):e[t]():u:n,f=F(u)?c?Gn:Wn:Un,p;if(P(r)&&(~r.indexOf(`random(`)&&(r=Kt(r)),r.charAt(1)===`=`&&(p=Ve(d,r)+(Ot(d)||0),(p||p===0)&&(r=p))),!l||d!==r||Pn)return!isNaN(d*r)&&r!==``?(p=new nr(this._pt,e,t,+d||0,r-(d||0),typeof u==`boolean`?Yn:Jn,0,f),c&&(p.fp=c),o&&p.modifier(o,this,e),this._pt=p):(!u&&!(t in e)&&ye(t,r),kn.call(this,e,t,d,r,f,s||x.stringFilter,c))},jn=function(e,t,n,r,i){if(F(e)&&(e=zn(e,i,t,n,r)),!L(e)||e.style&&e.nodeType||re(e)||ne(e))return P(e)?zn(e,i,t,n,r):e;var a={},o;for(o in e)a[o]=zn(e[o],i,t,n,r);return a},Mn=function(e,t,n,r,i,a){var o,s,c,l;if(Ae[e]&&(o=new Ae[e]).init(i,o.rawVars?t[e]:jn(t[e],r,i,a,n),n,r,a)!==!1&&(n._pt=s=new nr(n._pt,i,e,0,1,o.render,o,0,o.priority),n!==Qt))for(c=n._ptLookup[n._targets.indexOf(i)],l=o._props.length;l--;)c[o._props[l]]=s;return o},Nn,Pn,Fn=function e(t,n,r){var i=t.vars,a=i.ease,o=i.startAt,s=i.immediateRender,c=i.lazy,l=i.onUpdate,u=i.runBackwards,d=i.yoyoEase,f=i.keyframes,p=i.autoRevert,m=t._dur,h=t._startAt,g=t._targets,_=t.parent,v=_&&_.data===`nested`?_.vars.targets:g,y=t._overwrite===`auto`&&!C,b=t.timeline,x=i.easeReverse||d,T,O,k,A,j,M,N,P,F,I,ee,L,z;if(!b||f&&a||(a=`none`),t._ease=xn(a,S.ease),t._rEase=x&&(xn(x)||t._ease),t._from=!b&&!!i.runBackwards,t._from&&(t.ratio=1),!b||f&&!i.stagger){if(P=g[0]?Ie(g[0]).harness:0,L=P&&i[P.prop],T=Qe(i,Ee),h&&(h._zTime<0&&h.progress(1),n<0&&u&&s&&!p?h.render(-1,!0):h.revert(u&&m?we:Ce),h._lazy=0),o){if(rt(t._startAt=Hn.set(g,Je({data:`isStart`,overwrite:!1,parent:_,immediateRender:!0,lazy:!h&&R(c),startAt:null,delay:0,onUpdate:l&&function(){return Xt(t,`onUpdate`)},stagger:0},o))),t._startAt._dp=0,t._startAt._sat=t,n<0&&(w||!s&&!p)&&t._startAt.revert(we),s&&m&&n<=0&&r<=0){n&&(t._zTime=n);return}}else if(u&&m&&!h){if(n&&(s=!1),k=Je({overwrite:!1,data:`isFromStart`,lazy:s&&!h&&R(c),immediateRender:s,stagger:0,parent:_},T),L&&(k[P.prop]=L),rt(t._startAt=Hn.set(g,k)),t._startAt._dp=0,t._startAt._sat=t,n<0&&(w?t._startAt.revert(we):t._startAt.render(-1,!0)),t._zTime=n,!s)e(t._startAt,D,D);else if(!n)return}for(t._pt=t._ptCache=0,c=m&&R(c)||c&&!m,O=0;O<g.length;O++){if(j=g[O],N=j._gsap||Fe(g)[O]._gsap,t._ptLookup[O]=I={},Oe[N.id]&&De.length&&Ue(),ee=v===g?O:v.indexOf(j),P&&(F=new P).init(j,L||T,t,ee,v)!==!1&&(t._pt=A=new nr(t._pt,j,F.name,0,1,F.render,F,0,F.priority),F._props.forEach(function(e){I[e]=A}),F.priority&&(M=1)),!P||L)for(k in T)Ae[k]&&(F=Mn(k,T,t,ee,j,v))?F.priority&&(M=1):I[k]=A=An.call(t,j,k,`get`,T[k],ee,v,0,i.stringFilter);t._op&&t._op[O]&&t.kill(j,t._op[O]),y&&t._pt&&(Nn=t,de.killTweensOf(j,I,t.globalTime(n)),z=!t.parent,Nn=0),t._pt&&c&&(Oe[N.id]=1)}M&&tr(t),t._onInit&&t._onInit(t)}t._onUpdate=l,t._initted=(!t._op||t._pt)&&!z,f&&n<=0&&b.render(E,!0,!0)},In=function(e,t,n,r,i,a,o,s){var c=(e._pt&&e._ptCache||(e._ptCache={}))[t],l,u,d,f;if(!c)for(c=e._ptCache[t]=[],d=e._ptLookup,f=e._targets.length;f--;){if(l=d[f][t],l&&l.d&&l.d._pt)for(l=l.d._pt;l&&l.p!==t&&l.fp!==t;)l=l._next;if(!l)return Pn=1,e.vars[t]=`+=0`,Fn(e,o),Pn=0,s?be(t+` not eligible for reset. Try splitting into individual properties`):1;c.push(l)}for(f=c.length;f--;)u=c[f],l=u._pt||u,l.s=(r||r===0)&&!i?r:l.s+(r||0)+a*l.c,l.c=n-l.s,u.e&&(u.e=ze(n)+Ot(u.e)),u.b&&(u.b=l.s+Ot(u.b))},Ln=function(e,t){var n=e[0]?Ie(e[0]).harness:0,r=n&&n.aliases,i,a,o,s;if(!r)return t;for(a in i=Xe({},t),r)if(a in i)for(s=r[a].split(`,`),o=s.length;o--;)i[s[o]]=i[a];return i},Rn=function(e,t,n,r){var i=t.ease||r||`power1.inOut`,a,o;if(re(t))o=n[e]||(n[e]=[]),t.forEach(function(e,n){return o.push({t:n/(t.length-1)*100,v:e,e:i})});else for(a in t)o=n[a]||(n[a]=[]),a===`ease`||o.push({t:parseFloat(e),v:t[a],e:i})},zn=function(e,t,n,r,i){return F(e)?e.call(t,n,r,i):P(e)&&~e.indexOf(`random(`)?Kt(e):e},Bn=Pe+`repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,easeReverse,autoRevert`,Vn={};Re(Bn+`,id,stagger,delay,duration,paused,scrollTrigger`,function(e){return Vn[e]=1}),Bn=Bn.split(`,`);var Hn=function(e){b(t,e);function t(t,n,r,i){var a;typeof n==`number`&&(r.duration=n,n=r,r=null),a=e.call(this,i?n:$e(n))||this;var o=a.vars,s=o.duration,c=o.delay,l=o.immediateRender,u=o.stagger,d=o.overwrite,f=o.keyframes,p=o.defaults,m=o.scrollTrigger,h=n.parent||de,g=(re(t)||ne(t)?I(t[0]):`length`in n)?[t]:Nt(t),_,v,b,S,w,T,E,O;if(a._targets=g.length?Fe(g):be(`GSAP target `+t+` not found. https://gsap.com`,!x.nullTargetWarn)||[],a._ptLookup=[],a._overwrite=d,f||u||te(s)||te(c)){n=a.vars;var k=n.easeReverse||n.yoyoEase;if(_=a.timeline=new On({data:`nested`,defaults:p||{},targets:h&&h.data===`nested`?h.vars.targets:g}),_.kill(),_.parent=_._dp=y(a),_._start=0,u||te(s)||te(c)){if(S=g.length,E=u&&It(u),L(u))for(w in u)~Bn.indexOf(w)&&(O||={},O[w]=u[w]);for(v=0;v<S;v++)b=Qe(n,Vn),b.stagger=0,k&&(b.easeReverse=k),O&&Xe(b,O),T=g[v],b.duration=+zn(s,y(a),v,T,g),b.delay=(+zn(c,y(a),v,T,g)||0)-a._delay,!u&&S===1&&b.delay&&(a._delay=c=b.delay,a._start+=c,b.delay=0),_.to(T,b,E?E(v,T,g):0),_._ease=mn.none;_.duration()?s=c=0:a.timeline=0}else if(f){$e(Je(_.vars.defaults,{ease:`none`})),_._ease=xn(f.ease||n.ease||`none`);var A=0,j,M,N;if(re(f))f.forEach(function(e){return _.to(g,e,`>`)}),_.duration();else{for(w in b={},f)w===`ease`||w===`easeEach`||Rn(w,f[w],b,f.easeEach);for(w in b)for(j=b[w].sort(function(e,t){return e.t-t.t}),A=0,v=0;v<j.length;v++)M=j[v],N={ease:M.e,duration:(M.t-(v?j[v-1].t:0))/100*s},N[w]=M.v,_.to(g,N,A),A+=N.duration;_.duration()<s&&_.to({},{duration:s-_.duration()})}}s||a.duration(s=_.duration())}else a.timeline=0;return d===!0&&!C&&(Nn=y(a),de.killTweensOf(g),Nn=0),mt(h,y(a),r),n.reversed&&a.reverse(),n.paused&&a.paused(!0),(l||!s&&!f&&a._start===Be(h._time)&&R(l)&&st(y(a))&&h.data!==`nested`)&&(a._tTime=-D,a.render(Math.max(0,-c)||0)),m&&ht(y(a),m),a}var n=t.prototype;return n.render=function(e,t,n){var r=this._time,i=this._tDur,a=this._dur,o=e<0,s=e>i-D&&!o?i:e<D?0:e,c,l,u,d,f,p,m,h;if(!a)yt(this,e,t,n);else if(s!==this._tTime||!e||n||!this._initted&&this._tTime||this._startAt&&this._zTime<0!==o||this._lazy){if(c=s,h=this.timeline,this._repeat){if(d=a+this._rDelay,this._repeat<-1&&o)return this.totalTime(d*100+e,t,n);if(c=Be(s%d),s===i?(u=this._repeat,c=a):(f=Be(s/d),u=~~f,u&&u===f?(c=a,u--):c>a&&(c=a)),p=this._yoyo&&u&1,p&&(c=a-c),f=lt(this._tTime,d),c===r&&!n&&this._initted&&u===f)return this._tTime=s,this;u!==f&&this.vars.repeatRefresh&&!p&&!this._lock&&c!==d&&this._initted&&(this._lock=n=1,this.render(Be(d*u),!0).invalidate()._lock=0)}if(!this._initted){if(gt(this,o?e:c,n,t,s))return this._tTime=0,this;if(r!==this._time&&!(n&&this.vars.repeatRefresh&&u!==f))return this;if(a!==this._dur)return this.render(e,t,n)}if(this._rEase){var g=c<r;if(g!==this._inv){var _=g?r:a-r;this._inv=g,this._from&&(this.ratio=1-this.ratio),this._invRatio=this.ratio,this._invTime=r,this._invRecip=_?(g?-1:1)/_:0,this._invScale=g?-this.ratio:1-this.ratio,this._invEase=g?this._rEase:this._ease}this.ratio=m=this._invRatio+this._invScale*this._invEase((c-this._invTime)*this._invRecip)}else this.ratio=m=this._ease(c/a);if(this._from&&(this.ratio=m=1-m),this._tTime=s,this._time=c,!this._act&&this._ts&&(this._act=1,this._lazy=0),!r&&s&&!t&&!f&&(Xt(this,`onStart`),this._tTime!==s))return this;for(l=this._pt;l;)l.r(m,l.d),l=l._next;h&&h.render(e<0?e:h._dur*h._ease(c/this._dur),t,n)||this._startAt&&(this._zTime=e),this._onUpdate&&!t&&(o&&ot(this,e,t,n),Xt(this,`onUpdate`)),this._repeat&&u!==f&&this.vars.onRepeat&&!t&&this.parent&&Xt(this,`onRepeat`),s!==this._tDur&&s||this._tTime!==s||(o&&!this._onUpdate&&ot(this,e,!0,!0),(e||!a)&&(s===this._tDur&&this._ts>0||!s&&this._ts<0)&&rt(this,1),!t&&(!o||r)&&(s||r||p)&&(Xt(this,s===i?`onComplete`:`onReverseComplete`,!0),this._prom&&!(s<i&&this.timeScale()>0)&&this._prom()))}return this},n.targets=function(){return this._targets},n.invalidate=function(t){return t&&this.vars.runBackwards||(this._startAt=0),this._pt=this._op=this._onUpdate=this._lazy=this.ratio=0,this._ptLookup=[],this.timeline&&this.timeline.invalidate(t),e.prototype.invalidate.call(this,t)},n.resetTo=function(e,t,n,r,i){dn||fn.wake(),this._ts||this.play();var a=Math.min(this._dur,(this._dp._time-this._start)*this._ts),o;return this._initted||Fn(this,a),o=this._ease(a/this._dur),In(this,e,t,n,r,o,a,i)?this.resetTo(e,t,n,r,1):(ft(this,0),this.parent||tt(this._dp,this,`_first`,`_last`,this._dp._sort?`_start`:0),this.render(0))},n.kill=function(e,t){if(t===void 0&&(t=`all`),!e&&(!t||t===`all`))return this._lazy=this._pt=0,this.parent?Zt(this):this.scrollTrigger&&this.scrollTrigger.kill(!!w),this;if(this.timeline){var n=this.timeline.totalDuration();return this.timeline.killTweensOf(e,t,Nn&&Nn.vars.overwrite!==!0)._first||Zt(this),this.parent&&n!==this.timeline.totalDuration()&&xt(this,this._dur*this.timeline._tDur/n,0,1),this}var r=this._targets,i=e?Nt(e):r,a=this._ptLookup,o=this._pt,s,c,l,u,d,f,p;if((!t||t===`all`)&&et(r,i))return t===`all`&&(this._pt=0),Zt(this);for(s=this._op=this._op||[],t!==`all`&&(P(t)&&(d={},Re(t,function(e){return d[e]=1}),t=d),t=Ln(r,t)),p=r.length;p--;)if(~i.indexOf(r[p]))for(d in c=a[p],t===`all`?(s[p]=t,u=c,l={}):(l=s[p]=s[p]||{},u=t),u)f=c&&c[d],f&&(`kill`in f.d&&f.d.kill(d)!==!0||nt(this,f,`_pt`),delete c[d]),l!==`all`&&(l[d]=1);return this._initted&&!this._pt&&o&&Zt(this),this},t.to=function(e,n){return new t(e,n,arguments[2])},t.from=function(e,t){return Tt(1,arguments)},t.delayedCall=function(e,n,r,i){return new t(n,0,{immediateRender:!1,lazy:!1,overwrite:!1,delay:e,onComplete:n,onReverseComplete:n,onCompleteParams:r,onReverseCompleteParams:r,callbackScope:i})},t.fromTo=function(e,t,n){return Tt(2,arguments)},t.set=function(e,n){return n.duration=0,n.repeatDelay||(n.repeat=0),new t(e,n)},t.killTweensOf=function(e,t,n){return de.killTweensOf(e,t,n)},t}(Dn);Je(Hn.prototype,{_targets:[],_lazy:0,_startAt:0,_op:0,_onInit:0}),Re(`staggerTo,staggerFrom,staggerFromTo`,function(e){Hn[e]=function(){var t=new On,n=At.call(arguments,0);return n.splice(e===`staggerFromTo`?5:4,0,0),t[e].apply(t,n)}});var Un=function(e,t,n){return e[t]=n},Wn=function(e,t,n){return e[t](n)},Gn=function(e,t,n,r){return e[t](r.fp,n)},Kn=function(e,t,n){return e.setAttribute(t,n)},qn=function(e,t){return F(e[t])?Wn:ee(e[t])&&e.setAttribute?Kn:Un},Jn=function(e,t){return t.set(t.t,t.p,Math.round((t.s+t.c*e)*1e6)/1e6,t)},Yn=function(e,t){return t.set(t.t,t.p,!!(t.s+t.c*e),t)},Xn=function(e,t){var n=t._pt,r=``;if(!e&&t.b)r=t.b;else if(e===1&&t.e)r=t.e;else{for(;n;)r=n.p+(n.m?n.m(n.s+n.c*e):Math.round((n.s+n.c*e)*1e4)/1e4)+r,n=n._next;r+=t.c}t.set(t.t,t.p,r,t)},Zn=function(e,t){for(var n=t._pt;n;)n.r(e,n.d),n=n._next},Qn=function(e,t,n,r){for(var i=this._pt,a;i;)a=i._next,i.p===r&&i.modifier(e,t,n),i=a},$n=function(e){for(var t=this._pt,n,r;t;)r=t._next,t.p===e&&!t.op||t.op===e?nt(this,t,`_pt`):t.dep||(n=1),t=r;return!n},er=function(e,t,n,r){r.mSet(e,t,r.m.call(r.tween,n,r.mt),r)},tr=function(e){for(var t=e._pt,n,r,i,a;t;){for(n=t._next,r=i;r&&r.pr>t.pr;)r=r._next;(t._prev=r?r._prev:a)?t._prev._next=t:i=t,(t._next=r)?r._prev=t:a=t,t=n}e._pt=i},nr=function(){function e(e,t,n,r,i,a,o,s,c){this.t=t,this.s=r,this.c=i,this.p=n,this.r=a||Jn,this.d=o||this,this.set=s||Un,this.pr=c||0,this._next=e,e&&(e._prev=this)}var t=e.prototype;return t.modifier=function(e,t,n){this.mSet=this.mSet||this.set,this.set=er,this.m=e,this.mt=n,this.tween=t},e}();Re(Pe+`parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger,easeReverse`,function(e){return Ee[e]=1}),he.TweenMax=he.TweenLite=Hn,he.TimelineLite=he.TimelineMax=On,de=new On({sortChildren:!1,defaults:S,autoRemoveChildren:!0,id:`root`,smoothChildTiming:!0}),x.stringFilter=un;var rr=[],ir={},ar=[],or=0,sr=0,cr=function(e){return(ir[e]||ar).map(function(e){return e()})},lr=function(){var e=Date.now(),t=[];e-or>2&&(cr(`matchMediaInit`),rr.forEach(function(e){var n=e.queries,r=e.conditions,i,a,o,s;for(a in n)i=fe.matchMedia(n[a]).matches,i&&(o=1),i!==r[a]&&(r[a]=i,s=1);s&&(e.revert(),o&&t.push(e))}),cr(`matchMediaRevert`),t.forEach(function(e){return e.onMatch(e,function(t){return e.add(null,t)})}),or=e,cr(`matchMedia`))},ur=function(){function e(e,t){this.selector=t&&Pt(t),this.data=[],this._r=[],this.isReverted=!1,this.id=sr++,e&&this.add(e)}var t=e.prototype;return t.add=function(e,t,n){F(e)&&(n=t,t=e,e=F);var r=this,i=function(){var e=T,i=r.selector,a;return e&&e!==r&&e.data.push(r),n&&(r.selector=Pt(n)),T=r,a=t.apply(r,arguments),F(a)&&r._r.push(a),T=e,r.selector=i,r.isReverted=!1,a};return r.last=i,e===F?i(r,function(e){return r.add(null,e)}):e?r[e]=i:i},t.ignore=function(e){var t=T;T=null,e(this),T=t},t.getTweens=function(){var t=[];return this.data.forEach(function(n){return n instanceof e?t.push.apply(t,n.getTweens()):n instanceof Hn&&!(n.parent&&n.parent.data===`nested`)&&t.push(n)}),t},t.clear=function(){this._r.length=this.data.length=0},t.kill=function(e,t){var n=this;if(e?(function(){for(var t=n.getTweens(),r=n.data.length,i;r--;)i=n.data[r],i.data===`isFlip`&&(i.revert(),i.getChildren(!0,!0,!1).forEach(function(e){return t.splice(t.indexOf(e),1)}));for(t.map(function(e){return{g:e._dur||e._delay||e._sat&&!e._sat.vars.immediateRender?e.globalTime(0):-1/0,t:e}}).sort(function(e,t){return t.g-e.g||-1/0}).forEach(function(t){return t.t.revert(e)}),r=n.data.length;r--;)i=n.data[r],i instanceof On?i.data!==`nested`&&(i.scrollTrigger&&i.scrollTrigger.revert(),i.kill()):!(i instanceof Hn)&&i.revert&&i.revert(e);n._r.forEach(function(t){return t(e,n)}),n.isReverted=!0})():this.data.forEach(function(e){return e.kill&&e.kill()}),this.clear(),t){for(var r=rr.length;r--;)rr[r].id===this.id&&rr.splice(r,1);this._mqs&&this._mqs.forEach(function(e){return e.removeListener?e.removeListener(lr):e.removeEventListener(`change`,lr)}),this._mqs=null}},t.revert=function(e){this.kill(e||{})},e}(),dr=function(){function e(e){this.contexts=[],this.scope=e,T&&T.data.push(this)}var t=e.prototype;return t.add=function(e,t,n){L(e)||(e={matches:e});var r=new ur(0,n||this.scope),i=r.conditions={},a,o,s;for(o in T&&!r.selector&&(r.selector=T.selector),this.contexts.push(r),t=r.add(`onMatch`,t),r.queries=e,e)o===`all`?s=1:(a=fe.matchMedia(e[o]),a&&(rr.indexOf(r)<0&&rr.push(r),(i[o]=a.matches)&&(s=1),a.addListener?a.addListener(lr):a.addEventListener(`change`,lr),(r._mqs||=[]).push(a)));return s&&t(r,function(e){return r.add(null,e)}),this},t.revert=function(e){this.kill(e||{})},t.kill=function(e){this.contexts.forEach(function(t){return t.kill(e,!0)})},e}(),fr={registerPlugin:function(){[...arguments].forEach(function(e){return en(e)})},timeline:function(e){return new On(e)},getTweensOf:function(e,t){return de.getTweensOf(e,t)},getProperty:function(e,t,n,r){P(e)&&(e=Nt(e)[0]);var i=Ie(e||{}).get,a=n?qe:Ke;return n===`native`&&(n=``),e&&(t?a((Ae[t]&&Ae[t].get||i)(e,t,n,r)):function(t,n,r){return a((Ae[t]&&Ae[t].get||i)(e,t,n,r))})},quickSetter:function(e,t,n){if(e=Nt(e),e.length>1){var r=e.map(function(e){return gr.quickSetter(e,t,n)}),i=r.length;return function(e){for(var t=i;t--;)r[t](e)}}e=e[0]||{};var a=Ae[t],o=Ie(e),s=o.harness&&(o.harness.aliases||{})[t]||t,c=a?function(t){var r=new a;Qt._pt=0,r.init(e,n?t+n:t,Qt,0,[e]),r.render(1,r),Qt._pt&&Zn(1,Qt)}:o.set(e,s);return a?c:function(t){return c(e,s,n?t+n:t,o,1)}},quickTo:function(e,t,n){var r,i=gr.to(e,Je((r={},r[t]=`+=0.1`,r.paused=!0,r.stagger=0,r),n||{})),a=function(e,n,r){return i.resetTo(t,e,n,r)};return a.tween=i,a},isTweening:function(e){return de.getTweensOf(e,!0).length>0},defaults:function(e){return e&&e.ease&&(e.ease=xn(e.ease,S.ease)),Ze(S,e||{})},config:function(e){return Ze(x,e||{})},registerEffect:function(e){var t=e.name,n=e.effect,r=e.plugins,i=e.defaults,a=e.extendTimeline;(r||``).split(`,`).forEach(function(e){return e&&!Ae[e]&&!he[e]&&be(t+` effect requires `+e+` plugin.`)}),je[t]=function(e,t,r){return n(Nt(e),Je(t||{},i),r)},a&&(On.prototype[t]=function(e,n,r){return this.add(je[t](e,L(n)?n:(r=n)&&{},this),r)})},registerEase:function(e,t){mn[e]=xn(t)},parseEase:function(e,t){return arguments.length?xn(e,t):mn},getById:function(e){return de.getById(e)},exportRoot:function(e,t){e===void 0&&(e={});var n=new On(e),r,i;for(n.smoothChildTiming=R(e.smoothChildTiming),de.remove(n),n._dp=0,n._time=n._tTime=de._time,r=de._first;r;)i=r._next,(t||!(!r._dur&&r instanceof Hn&&r.vars.onComplete===r._targets[0]))&&mt(n,r,r._start-r._delay),r=i;return mt(de,n,0),n},context:function(e,t){return e?new ur(e,t):T},matchMedia:function(e){return new dr(e)},matchMediaRefresh:function(){return rr.forEach(function(e){var t=e.conditions,n,r;for(r in t)t[r]&&(t[r]=!1,n=1);n&&e.revert()})||lr()},addEventListener:function(e,t){var n=ir[e]||(ir[e]=[]);~n.indexOf(t)||n.push(t)},removeEventListener:function(e,t){var n=ir[e],r=n&&n.indexOf(t);r>=0&&n.splice(r,1)},utils:{wrap:Wt,wrapYoyo:Gt,distribute:It,random:zt,snap:Rt,normalize:Ht,getUnit:Ot,clamp:kt,splitColor:an,toArray:Nt,selector:Pt,mapRange:qt,pipe:Bt,unitize:Vt,interpolate:Jt,shuffle:Ft},install:ve,effects:je,ticker:fn,updateRoot:On.updateRoot,plugins:Ae,globalTimeline:de,core:{PropTween:nr,globals:xe,Tween:Hn,Timeline:On,Animation:Dn,getCache:Ie,_removeLinkedListItem:nt,reverting:function(){return w},context:function(e){return e&&T&&(T.data.push(e),e._ctx=T),T},suppressOverwrites:function(e){return C=e}}};Re(`to,from,fromTo,delayedCall,set,killTweensOf`,function(e){return fr[e]=Hn[e]}),fn.add(On.updateRoot),Qt=fr.to({},{duration:0});var pr=function(e,t){for(var n=e._pt;n&&n.p!==t&&n.op!==t&&n.fp!==t;)n=n._next;return n},mr=function(e,t){var n=e._targets,r,i,a;for(r in t)for(i=n.length;i--;)a=e._ptLookup[i][r],(a&&=a.d)&&(a._pt&&(a=pr(a,r)),a&&a.modifier&&a.modifier(t[r],e,n[i],r))},hr=function(e,t){return{name:e,headless:1,rawVars:1,init:function(e,n,r){r._onInit=function(e){var r,i;if(P(n)&&(r={},Re(n,function(e){return r[e]=1}),n=r),t){for(i in r={},n)r[i]=t(n[i]);n=r}mr(e,n)}}}},gr=fr.registerPlugin({name:`attr`,init:function(e,t,n,r,i){var a,o,s;for(a in this.tween=n,t)s=e.getAttribute(a)||``,o=this.add(e,`setAttribute`,(s||0)+``,t[a],r,i,0,0,a),o.op=a,o.b=s,this._props.push(a)},render:function(e,t){for(var n=t._pt;n;)w?n.set(n.t,n.p,n.b,n):n.r(e,n.d),n=n._next}},{name:`endArray`,headless:1,init:function(e,t){for(var n=t.length;n--;)this.add(e,n,e[n]||0,t[n],0,0,0,0,0,1)}},hr(`roundProps`,Lt),hr(`modifiers`),hr(`snap`,Rt))||fr;Hn.version=On.version=gr.version=`3.15.1`,_e=1,z()&&pn(),mn.Power0,mn.Power1,mn.Power2,mn.Power3,mn.Power4,mn.Linear,mn.Quad,mn.Cubic,mn.Quart,mn.Quint,mn.Strong,mn.Elastic,mn.Back,mn.SteppedEase,mn.Bounce,mn.Sine,mn.Expo,mn.Circ;var _r,vr,yr,br,xr,Sr,Cr,wr=function(){return typeof window<`u`},Tr={},Er=180/Math.PI,Dr=Math.PI/180,Or=Math.atan2,kr=1e8,Ar=/([A-Z])/g,jr=/(left|right|width|margin|padding|x)/i,Mr=/[\s,\(]\S/,Nr={autoAlpha:`opacity,visibility`,scale:`scaleX,scaleY`,alpha:`opacity`},Pr=function(e,t){return t.set(t.t,t.p,Math.round((t.s+t.c*e)*1e4)/1e4+t.u,t)},Fr=function(e,t){return t.set(t.t,t.p,e===1?t.e:Math.round((t.s+t.c*e)*1e4)/1e4+t.u,t)},Ir=function(e,t){return t.set(t.t,t.p,e?Math.round((t.s+t.c*e)*1e4)/1e4+t.u:t.b,t)},Lr=function(e,t){return t.set(t.t,t.p,e===1?t.e:e?Math.round((t.s+t.c*e)*1e4)/1e4+t.u:t.b,t)},Rr=function(e,t){var n=t.s+t.c*e;t.set(t.t,t.p,~~(n+(n<0?-.5:.5))+t.u,t)},zr=function(e,t){return t.set(t.t,t.p,e?t.e:t.b,t)},Br=function(e,t){return t.set(t.t,t.p,e===1?t.e:t.b,t)},Vr=function(e,t,n){return e.style[t]=n},Hr=function(e,t,n){return e.style.setProperty(t,n)},Ur=function(e,t,n){return e._gsap[t]=n},Wr=function(e,t,n){return e._gsap.scaleX=e._gsap.scaleY=n},Gr=function(e,t,n,r,i){var a=e._gsap;a.scaleX=a.scaleY=n,a.renderTransform(i,a)},Kr=function(e,t,n,r,i){var a=e._gsap;a[t]=n,a.renderTransform(i,a)},qr=`transform`,Jr=qr+`Origin`,Yr=function e(t,n){var r=this,i=this.target,a=i.style,o=i._gsap;if(t in Tr&&a){if(this.tfm=this.tfm||{},t!==`transform`)t=Nr[t]||t,~t.indexOf(`,`)?t.split(`,`).forEach(function(e){return r.tfm[e]=mi(i,e)}):this.tfm[t]=o.x?o[t]:mi(i,t),t===Jr&&(this.tfm.zOrigin=o.zOrigin);else return Nr.transform.split(`,`).forEach(function(t){return e.call(r,t,n)});if(this.props.indexOf(qr)>=0)return;o.svg&&(this.svgo=i.getAttribute(`data-svg-origin`),this.props.push(Jr,n,``)),t=qr}(a||n)&&this.props.push(t,n,a[t])},Xr=function(e){e.translate&&(e.removeProperty(`translate`),e.removeProperty(`scale`),e.removeProperty(`rotate`))},Zr=function(){for(var e=this.props,t=this.target,n=t.style,r=t._gsap,i=0,a;i<e.length;i+=3)e[i+1]?e[i+1]===2?t[e[i]](e[i+2]):t[e[i]]=e[i+2]:e[i+2]?n[e[i]]=e[i+2]:n.removeProperty(e[i].substr(0,2)===`--`?e[i]:e[i].replace(Ar,`-$1`).toLowerCase());if(this.tfm){for(a in this.tfm)r[a]=this.tfm[a];r.svg&&(r.renderTransform(),t.setAttribute(`data-svg-origin`,this.svgo||``)),i=Cr(),i&&i.isStart||n[qr]||(Xr(n),r.zOrigin&&n[Jr]&&(n[Jr]+=` `+r.zOrigin+`px`,r.zOrigin=0,r.renderTransform()),r.uncache=1)}},Qr=function(e,t){var n={target:e,props:[],revert:Zr,save:Yr};return e._gsap||gr.core.getCache(e),t&&e.style&&e.nodeType&&t.split(`,`).forEach(function(e){return n.save(e)}),n},$r,ei=function(e,t){var n=vr.createElementNS?vr.createElementNS((t||`http://www.w3.org/1999/xhtml`).replace(/^https/,`http`),e):vr.createElement(e);return n&&n.style?n:vr.createElement(e)},ti=function e(t,n,r){var i=getComputedStyle(t);return i[n]||i.getPropertyValue(n.replace(Ar,`-$1`).toLowerCase())||i.getPropertyValue(n)||!r&&e(t,ri(n)||n,1)||``},ni=`O,Moz,ms,Ms,Webkit`.split(`,`),ri=function(e,t,n){var r=(t||xr).style,i=5;if(e in r&&!n)return e;for(e=e.charAt(0).toUpperCase()+e.substr(1);i--&&!(ni[i]+e in r););return i<0?null:(i===3?`ms`:i>=0?ni[i]:``)+e},ii=function(){wr()&&window.document&&(_r=window,vr=_r.document,yr=vr.documentElement,xr=ei(`div`)||{style:{}},ei(`div`),qr=ri(qr),Jr=qr+`Origin`,xr.style.cssText=`border-width:0;line-height:0;position:absolute;padding:0`,$r=!!ri(`perspective`),Cr=gr.core.reverting,br=1)},ai=function(e){var t=e.ownerSVGElement,n=ei(`svg`,t&&t.getAttribute(`xmlns`)||`http://www.w3.org/2000/svg`),r=e.cloneNode(!0),i;r.style.display=`block`,n.appendChild(r),yr.appendChild(n);try{i=r.getBBox()}catch{}return n.removeChild(r),yr.removeChild(n),i},oi=function(e,t){for(var n=t.length;n--;)if(e.hasAttribute(t[n]))return e.getAttribute(t[n])},si=function(e){var t,n;try{t=e.getBBox()}catch{t=ai(e),n=1}return t&&(t.width||t.height)||n||(t=ai(e)),t&&!t.width&&!t.x&&!t.y?{x:+oi(e,[`x`,`cx`,`x1`])||0,y:+oi(e,[`y`,`cy`,`y1`])||0,width:0,height:0}:t},ci=function(e){return!(!e.getCTM||e.parentNode&&!e.ownerSVGElement||!si(e))},li=function(e,t){if(t){var n=e.style,r;t in Tr&&t!==Jr&&(t=qr),n.removeProperty?(r=t.substr(0,2),(r===`ms`||t.substr(0,6)===`webkit`)&&(t=`-`+t),n.removeProperty(r===`--`?t:t.replace(Ar,`-$1`).toLowerCase())):n.removeAttribute(t)}},ui=function(e,t,n,r,i,a){var o=new nr(e._pt,t,n,0,1,a?Br:zr);return e._pt=o,o.b=r,o.e=i,e._props.push(n),o},di={deg:1,rad:1,turn:1},fi={grid:1,flex:1},pi=function e(t,n,r,i){var a=parseFloat(r)||0,o=(r+``).trim().substr((a+``).length)||`px`,s=xr.style,c=jr.test(n),l=t.tagName.toLowerCase()===`svg`,u=(l?`client`:`offset`)+(c?`Width`:`Height`),d=100,f=i===`px`,p=i===`%`,m,h,g,_;if(i===o||!a||di[i]||di[o])return a;if(o!==`px`&&!f&&(a=e(t,n,r,`px`)),_=t.getCTM&&ci(t),(p||o===`%`)&&(Tr[n]||~n.indexOf(`adius`)))return m=_?t.getBBox()[c?`width`:`height`]:t[u],ze(p?a/m*d:a/100*m);if(s[c?`width`:`height`]=d+(f?o:i),h=i!==`rem`&&~n.indexOf(`adius`)||i===`em`&&t.appendChild&&!l?t:t.parentNode,_&&(h=(t.ownerSVGElement||{}).parentNode),h&&h!==vr&&h.appendChild||(h=vr.body),g=h._gsap,g&&p&&g.width&&c&&g.time===fn.time&&!g.uncache)return ze(a/g.width*d);if(p&&(n===`height`||n===`width`)){var v=t.style[n];t.style[n]=d+i,m=t[u],v?t.style[n]=v:li(t,n)}else(p||o===`%`)&&!fi[ti(h,`display`)]&&(s.position=ti(t,`position`)),h===t&&(s.position=`static`),h.appendChild(xr),m=xr[u],h.removeChild(xr),s.position=`absolute`;return c&&p&&(g=Ie(h),g.time=fn.time,g.width=h[u]),ze(f?m*a/d:m&&a?d/m*a:0)},mi=function(e,t,n,r){var i;return br||ii(),t in Nr&&t!==`transform`&&(t=Nr[t],~t.indexOf(`,`)&&(t=t.split(`,`)[0])),Tr[t]&&t!==`transform`?(i=Ei(e,r),i=t===`transformOrigin`?i.svg?i.origin:Di(ti(e,Jr))+` `+i.zOrigin+`px`:i[t]):(i=e.style[t],(!i||i===`auto`||r||~(i+``).indexOf(`calc(`))&&(i=yi[t]&&yi[t](e,t,n)||ti(e,t)||Le(e,t)||+(t===`opacity`))),n&&!~(i+``).trim().indexOf(` `)?pi(e,t,i,n)+n:i},hi=function(e,t,n,r){if(!n||n===`none`){var i=ri(t,e,1),a=i&&ti(e,i,1);a&&a!==n?(t=i,n=a):t===`borderColor`&&(n=ti(e,`borderTopColor`))}var o=new nr(this._pt,e.style,t,0,1,Xn),s=0,c=0,l,u,d,f,p,m,h,g,_,v,y,b;if(o.b=n,o.e=r,n+=``,r+=``,r.substring(0,6)===`var(--`&&(r=ti(e,r.substring(4,r.indexOf(`)`)))),r===`auto`&&(m=e.style[t],e.style[t]=r,r=ti(e,t)||r,m?e.style[t]=m:li(e,t)),l=[n,r],un(l),n=l[0],r=l[1],d=n.match(ce)||[],b=r.match(ce)||[],b.length){for(;u=ce.exec(r);)h=u[0],_=r.substring(s,u.index),p?p=(p+1)%5:(_.substr(-5)===`rgba(`||_.substr(-5)===`hsla(`)&&(p=1),h!==(m=d[c++]||``)&&(f=parseFloat(m)||0,y=m.substr((f+``).length),h.charAt(1)===`=`&&(h=Ve(f,h)+y),g=parseFloat(h),v=h.substr((g+``).length),s=ce.lastIndex-v.length,v||(v=v||x.units[t]||y,s===r.length&&(r+=v,o.e+=v)),y!==v&&(f=pi(e,t,m,v)||0),o._pt={_next:o._pt,p:_||c===1?_:`,`,s:f,c:g-f,m:p&&p<4||t===`zIndex`?Math.round:0});o.c=s<r.length?r.substring(s,r.length):``}else o.r=t===`display`&&r===`none`?Br:zr;return ue.test(r)&&(o.e=0),this._pt=o,o},gi={top:`0%`,bottom:`100%`,left:`0%`,right:`100%`,center:`50%`},_i=function(e){var t=e.split(` `),n=t[0],r=t[1]||`50%`;return(n===`top`||n===`bottom`||r===`left`||r===`right`)&&(e=n,n=r,r=e),t[0]=gi[n]||n,t[1]=gi[r]||r,t.join(` `)},vi=function(e,t){if(t.tween&&t.tween._time===t.tween._dur){var n=t.t,r=n.style,i=t.u,a=n._gsap,o,s,c;if(i===`all`||i===!0)r.cssText=``,s=1;else for(i=i.split(`,`),c=i.length;--c>-1;)o=i[c],Tr[o]&&(s=1,o=o===`transformOrigin`?Jr:qr),li(n,o);s&&(li(n,qr),a&&(a.svg&&n.removeAttribute(`transform`),r.scale=r.rotate=r.translate=`none`,Ei(n,1),a.uncache=1,Xr(r)))}},yi={clearProps:function(e,t,n,r,i){if(i.data!==`isFromStart`){var a=e._pt=new nr(e._pt,t,n,0,0,vi);return a.u=r,a.pr=-10,a.tween=i,e._props.push(n),1}}},bi=[1,0,0,1,0,0],xi={},Si=function(e){return e===`matrix(1, 0, 0, 1, 0, 0)`||e===`none`||!e},Ci=function(e){var t=ti(e,qr);return Si(t)?bi:t.substr(7).match(se).map(ze)},wi=function(e,t){var n=e._gsap||Ie(e),r=e.style,i=Ci(e),a,o,s,c;return n.svg&&e.getAttribute(`transform`)?(s=e.transform.baseVal.consolidate().matrix,i=[s.a,s.b,s.c,s.d,s.e,s.f],i.join(`,`)===`1,0,0,1,0,0`?bi:i):(i===bi&&!e.offsetParent&&e!==yr&&!n.svg&&(s=r.display,r.display=`block`,a=e.parentNode,a&&(e.offsetParent||e.getBoundingClientRect().width)||(c=1,o=e.nextElementSibling,yr.appendChild(e)),i=Ci(e),s?r.display=s:li(e,`display`),c&&(o?a.insertBefore(e,o):a?a.appendChild(e):yr.removeChild(e))),t&&i.length>6?[i[0],i[1],i[4],i[5],i[12],i[13]]:i)},Ti=function(e,t,n,r,i,a){var o=e._gsap,s=i||wi(e,!0),c=o.xOrigin||0,l=o.yOrigin||0,u=o.xOffset||0,d=o.yOffset||0,f=s[0],p=s[1],m=s[2],h=s[3],g=s[4],_=s[5],v=t.split(` `),y=parseFloat(v[0])||0,b=parseFloat(v[1])||0,x,S,C,w;n?s!==bi&&(S=f*h-p*m)&&(C=h/S*y+b*(-m/S)+(m*_-h*g)/S,w=y*(-p/S)+f/S*b-(f*_-p*g)/S,y=C,b=w):(x=si(e),y=x.x+(~v[0].indexOf(`%`)?y/100*x.width:y),b=x.y+(~(v[1]||v[0]).indexOf(`%`)?b/100*x.height:b)),r||r!==!1&&o.smooth?(g=y-c,_=b-l,o.xOffset=u+(g*f+_*m)-g,o.yOffset=d+(g*p+_*h)-_):o.xOffset=o.yOffset=0,o.xOrigin=y,o.yOrigin=b,o.smooth=!!r,o.origin=t,o.originIsAbsolute=!!n,e.style[Jr]=`0px 0px`,a&&(ui(a,o,`xOrigin`,c,y),ui(a,o,`yOrigin`,l,b),ui(a,o,`xOffset`,u,o.xOffset),ui(a,o,`yOffset`,d,o.yOffset)),e.setAttribute(`data-svg-origin`,y+` `+b)},Ei=function(e,t){var n=e._gsap||new En(e);if(`x`in n&&!t&&!n.uncache)return n;var r=e.style,i=n.scaleX<0,a=`px`,o=`deg`,s=getComputedStyle(e),c=ti(e,Jr)||`0`,l=u=d=m=h=g=_=v=y=0,u,d,f=p=1,p,m,h,g,_,v,y,b,S,C,w,T,E,D,O,k,A,j,M,N,P,F,I,ee,L,R,z,te;return n.svg=!!(e.getCTM&&ci(e)),s.translate&&((s.translate!==`none`||s.scale!==`none`||s.rotate!==`none`)&&(r[qr]=(s.translate===`none`?``:`translate3d(`+(s.translate+` 0 0`).split(` `).slice(0,3).join(`, `)+`) `)+(s.rotate===`none`?``:`rotate(`+s.rotate+`) `)+(s.scale===`none`?``:`scale(`+s.scale.split(` `).join(`,`)+`) `)+(s[qr]===`none`?``:s[qr])),r.scale=r.rotate=r.translate=`none`),C=wi(e,n.svg),n.svg&&(n.uncache?(P=e.getBBox(),c=n.xOrigin-P.x+`px `+(n.yOrigin-P.y)+`px`,N=``):N=!t&&e.getAttribute(`data-svg-origin`),Ti(e,N||c,!!N||n.originIsAbsolute,n.smooth!==!1,C)),b=n.xOrigin||0,S=n.yOrigin||0,C!==bi&&(D=C[0],O=C[1],k=C[2],A=C[3],l=j=C[4],u=M=C[5],C.length===6?(f=Math.sqrt(D*D+O*O),p=Math.sqrt(A*A+k*k),m=D||O?Or(O,D)*Er:0,_=k||A?Or(k,A)*Er+m:0,_&&(p*=Math.abs(Math.cos(_*Dr))),n.svg&&(l-=b-(b*D+S*k),u-=S-(b*O+S*A))):(te=C[6],R=C[7],I=C[8],ee=C[9],L=C[10],z=C[11],l=C[12],u=C[13],d=C[14],w=Or(te,L),h=w*Er,w&&(T=Math.cos(-w),E=Math.sin(-w),N=j*T+I*E,P=M*T+ee*E,F=te*T+L*E,I=j*-E+I*T,ee=M*-E+ee*T,L=te*-E+L*T,z=R*-E+z*T,j=N,M=P,te=F),w=Or(-k,L),g=w*Er,w&&(T=Math.cos(-w),E=Math.sin(-w),N=D*T-I*E,P=O*T-ee*E,F=k*T-L*E,z=A*E+z*T,D=N,O=P,k=F),w=Or(O,D),m=w*Er,w&&(T=Math.cos(w),E=Math.sin(w),N=D*T+O*E,P=j*T+M*E,O=O*T-D*E,M=M*T-j*E,D=N,j=P),h&&Math.abs(h)+Math.abs(m)>359.9&&(h=m=0,g=180-g),f=ze(Math.sqrt(D*D+O*O+k*k)),p=ze(Math.sqrt(M*M+te*te)),w=Or(j,M),_=Math.abs(w)>2e-4?w*Er:0,y=z?1/(z<0?-z:z):0),n.svg&&(N=e.getAttribute(`transform`),n.forceCSS=e.setAttribute(`transform`,``)||!Si(ti(e,qr)),N&&e.setAttribute(`transform`,N))),Math.abs(_)>90&&Math.abs(_)<270&&(i?(f*=-1,_+=m<=0?180:-180,m+=m<=0?180:-180):(p*=-1,_+=_<=0?180:-180)),t||=n.uncache,n.x=l-((n.xPercent=l&&(!t&&n.xPercent||(Math.round(e.offsetWidth/2)===Math.round(-l)?-50:0)))?e.offsetWidth*n.xPercent/100:0)+a,n.y=u-((n.yPercent=u&&(!t&&n.yPercent||(Math.round(e.offsetHeight/2)===Math.round(-u)?-50:0)))?e.offsetHeight*n.yPercent/100:0)+a,n.z=d+a,n.scaleX=ze(f),n.scaleY=ze(p),n.rotation=ze(m)+o,n.rotationX=ze(h)+o,n.rotationY=ze(g)+o,n.skewX=_+o,n.skewY=v+o,n.transformPerspective=y+a,(n.zOrigin=parseFloat(c.split(` `)[2])||!t&&n.zOrigin||0)&&(r[Jr]=Di(c)),n.xOffset=n.yOffset=0,n.force3D=x.force3D,n.renderTransform=n.svg?Pi:$r?Ni:ki,n.uncache=0,n},Di=function(e){return(e=e.split(` `))[0]+` `+e[1]},Oi=function(e,t,n){var r=Ot(t);return ze(parseFloat(t)+parseFloat(pi(e,`x`,n+`px`,r)))+r},ki=function(e,t){t.z=`0px`,t.rotationY=t.rotationX=`0deg`,t.force3D=0,Ni(e,t)},Ai=`0deg`,ji=`0px`,Mi=`) `,Ni=function(e,t){var n=t||this,r=n.xPercent,i=n.yPercent,a=n.x,o=n.y,s=n.z,c=n.rotation,l=n.rotationY,u=n.rotationX,d=n.skewX,f=n.skewY,p=n.scaleX,m=n.scaleY,h=n.transformPerspective,g=n.force3D,_=n.target,v=n.zOrigin,y=``,b=g===`auto`&&e&&e!==1||g===!0;if(v&&(u!==Ai||l!==Ai)){var x=parseFloat(l)*Dr,S=Math.sin(x),C=Math.cos(x),w;x=parseFloat(u)*Dr,w=Math.cos(x),a=Oi(_,a,S*w*-v),o=Oi(_,o,-Math.sin(x)*-v),s=Oi(_,s,C*w*-v+v)}h!==ji&&(y+=`perspective(`+h+Mi),(r||i)&&(y+=`translate(`+r+`%, `+i+`%) `),(b||a!==ji||o!==ji||s!==ji)&&(y+=s!==ji||b?`translate3d(`+a+`, `+o+`, `+s+`) `:`translate(`+a+`, `+o+Mi),c!==Ai&&(y+=`rotate(`+c+Mi),l!==Ai&&(y+=`rotateY(`+l+Mi),u!==Ai&&(y+=`rotateX(`+u+Mi),(d!==Ai||f!==Ai)&&(y+=`skew(`+d+`, `+f+Mi),(p!==1||m!==1)&&(y+=`scale(`+p+`, `+m+Mi),_.style[qr]=y||`translate(0, 0)`},Pi=function(e,t){var n=t||this,r=n.xPercent,i=n.yPercent,a=n.x,o=n.y,s=n.rotation,c=n.skewX,l=n.skewY,u=n.scaleX,d=n.scaleY,f=n.target,p=n.xOrigin,m=n.yOrigin,h=n.xOffset,g=n.yOffset,_=n.forceCSS,v=parseFloat(a),y=parseFloat(o),b,x,S,C,w;s=parseFloat(s),c=parseFloat(c),l=parseFloat(l),l&&(l=parseFloat(l),c+=l,s+=l),s||c?(s*=Dr,c*=Dr,b=Math.cos(s)*u,x=Math.sin(s)*u,S=Math.sin(s-c)*-d,C=Math.cos(s-c)*d,c&&(l*=Dr,w=Math.tan(c-l),w=Math.sqrt(1+w*w),S*=w,C*=w,l&&(w=Math.tan(l),w=Math.sqrt(1+w*w),b*=w,x*=w)),b=ze(b),x=ze(x),S=ze(S),C=ze(C)):(b=u,C=d,x=S=0),(v&&!~(a+``).indexOf(`px`)||y&&!~(o+``).indexOf(`px`))&&(v=pi(f,`x`,a,`px`),y=pi(f,`y`,o,`px`)),(p||m||h||g)&&(v=ze(v+p-(p*b+m*S)+h),y=ze(y+m-(p*x+m*C)+g)),(r||i)&&(w=f.getBBox(),v=ze(v+r/100*w.width),y=ze(y+i/100*w.height)),w=`matrix(`+b+`,`+x+`,`+S+`,`+C+`,`+v+`,`+y+`)`,f.setAttribute(`transform`,w),_&&(f.style[qr]=w)},Fi=function(e,t,n,r,i){var a=360,o=P(i),s=parseFloat(i)*(o&&~i.indexOf(`rad`)?Er:1)-r,c=r+s+`deg`,l,u;return o&&(l=i.split(`_`)[1],l===`short`&&(s%=a,s!==s%(a/2)&&(s+=s<0?a:-a)),l===`cw`&&s<0?s=(s+a*kr)%a-~~(s/a)*a:l===`ccw`&&s>0&&(s=(s-a*kr)%a-~~(s/a)*a)),e._pt=u=new nr(e._pt,t,n,r,s,Fr),u.e=c,u.u=`deg`,e._props.push(n),u},Ii=function(e,t){for(var n in t)e[n]=t[n];return e},Li=function(e,t,n){var r=Ii({},n._gsap),i=`perspective,force3D,transformOrigin,svgOrigin`,a=n.style,o,s,c,l,u,d,f,p;for(s in r.svg?(c=n.getAttribute(`transform`),n.setAttribute(`transform`,``),a[qr]=t,o=Ei(n,1),li(n,qr),n.setAttribute(`transform`,c)):(c=getComputedStyle(n)[qr],a[qr]=t,o=Ei(n,1),a[qr]=c),Tr)c=r[s],l=o[s],c!==l&&i.indexOf(s)<0&&(f=Ot(c),p=Ot(l),u=f===p?parseFloat(c):pi(n,s,c,p),d=parseFloat(l),e._pt=new nr(e._pt,o,s,u,d-u,Pr),e._pt.u=p||0,e._props.push(s));Ii(o,r)};Re(`padding,margin,Width,Radius`,function(e,t){var n=`Top`,r=`Right`,i=`Bottom`,a=`Left`,o=(t<3?[n,r,i,a]:[n+a,n+r,i+r,i+a]).map(function(n){return t<2?e+n:`border`+n+e});yi[t>1?`border`+e:e]=function(e,t,n,r,i){var a,s;if(arguments.length<4)return a=o.map(function(t){return mi(e,t,n)}),s=a.join(` `),s.split(a[0]).length===5?a[0]:s;a=(r+``).split(` `),s={},o.forEach(function(e,t){return s[e]=a[t]=a[t]||a[(t-1)/2|0]}),e.init(t,s,i)}});var Ri={name:`css`,register:ii,targetTest:function(e){return e.style&&e.nodeType},init:function(e,t,n,r,i){var a=this._props,o=e.style,s=n.vars.startAt,c,l,u,d,f,p,m,h,g,_,v,y,b,S,C,w,T;for(m in br||ii(),this.styles=this.styles||Qr(e),w=this.styles.props,this.tween=n,t)if(m!==`autoRound`&&(l=t[m],!(Ae[m]&&Mn(m,t,n,r,e,i)))){if(f=typeof l,p=yi[m],f===`function`&&(l=l.call(n,r,e,i),f=typeof l),f===`string`&&~l.indexOf(`random(`)&&(l=Kt(l)),p)p(this,e,m,l,n)&&(C=1);else if(m.substr(0,2)===`--`)c=(getComputedStyle(e).getPropertyValue(m)+``).trim(),l+=``,cn.lastIndex=0,cn.test(c)||(h=Ot(c),g=Ot(l),g?h!==g&&(c=pi(e,m,c,g)+g):h&&(l+=h)),this.add(o,`setProperty`,c,l,r,i,0,0,m),a.push(m),w.push(m,0,o[m]);else if(f!==`undefined`){if(s&&m in s?(c=typeof s[m]==`function`?s[m].call(n,r,e,i):s[m],P(c)&&~c.indexOf(`random(`)&&(c=Kt(c)),Ot(c+``)||c===`auto`||(c+=x.units[m]||Ot(mi(e,m))||``),(c+``).charAt(1)===`=`&&(c=mi(e,m))):c=mi(e,m),d=parseFloat(c),_=f===`string`&&l.charAt(1)===`=`&&l.substr(0,2),_&&(l=l.substr(2)),u=parseFloat(l),m in Nr&&(m===`autoAlpha`&&(d===1&&mi(e,`visibility`)===`hidden`&&u&&(d=0),w.push(`visibility`,0,o.visibility),ui(this,o,`visibility`,d?`inherit`:`hidden`,u?`inherit`:`hidden`,!u)),m!==`scale`&&m!==`transform`&&(m=Nr[m],~m.indexOf(`,`)&&(m=m.split(`,`)[0]))),v=m in Tr,v){if(this.styles.save(m),T=l,f===`string`&&l.substring(0,6)===`var(--`){if(l=ti(e,l.substring(4,l.indexOf(`)`))),l.substring(0,5)===`calc(`){var E=e.style.perspective;e.style.perspective=l,l=ti(e,`perspective`),E?e.style.perspective=E:li(e,`perspective`)}u=parseFloat(l)}if(y||(b=e._gsap,b.renderTransform&&!t.parseTransform||Ei(e,t.parseTransform),S=t.smoothOrigin!==!1&&b.smooth,y=this._pt=new nr(this._pt,o,qr,0,1,b.renderTransform,b,0,-1),y.dep=1),m===`scale`)this._pt=new nr(this._pt,b,`scaleY`,b.scaleY,(_?Ve(b.scaleY,_+u):u)-b.scaleY||0,Pr),this._pt.u=0,a.push(`scaleY`,m),m+=`X`;else if(m===`transformOrigin`){w.push(Jr,0,o[Jr]),l=_i(l),b.svg?Ti(e,l,0,S,0,this):(g=parseFloat(l.split(` `)[2])||0,g!==b.zOrigin&&ui(this,b,`zOrigin`,b.zOrigin,g),ui(this,o,m,Di(c),Di(l)));continue}else if(m===`svgOrigin`){Ti(e,l,1,S,0,this);continue}else if(m in xi){Fi(this,b,m,d,_?Ve(d,_+l):l);continue}else if(m===`smoothOrigin`){ui(this,b,`smooth`,b.smooth,l);continue}else if(m===`force3D`){b[m]=l;continue}else if(m===`transform`){Li(this,l,e);continue}}else m in o||(m=ri(m)||m);if(v||(u||u===0)&&(d||d===0)&&!Mr.test(l)&&m in o)h=(c+``).substr((d+``).length),u||=0,g=Ot(l)||(m in x.units?x.units[m]:h),h!==g&&(d=pi(e,m,c,g)),this._pt=new nr(this._pt,v?b:o,m,d,(_?Ve(d,_+u):u)-d,!v&&(g===`px`||m===`zIndex`)&&t.autoRound!==!1?Rr:Pr),this._pt.u=g||0,v&&T!==l?(this._pt.b=c,this._pt.e=T,this._pt.r=Lr):h!==g&&g!==`%`&&(this._pt.b=c,this._pt.r=Ir);else if(m in o)hi.call(this,e,m,c,_?_+l:l);else if(m in e)this.add(e,m,c||e[m],_?_+l:l,r,i);else if(m!==`parseTransform`){ye(m,l);continue}v||(m in o?w.push(m,0,o[m]):typeof e[m]==`function`?w.push(m,2,e[m]()):w.push(m,1,c||e[m])),a.push(m)}}C&&tr(this)},render:function(e,t){if(t.tween._time||!Cr())for(var n=t._pt;n;)n.r(e,n.d),n=n._next;else t.styles.revert()},get:mi,aliases:Nr,getSetter:function(e,t,n){var r=Nr[t];return r&&r.indexOf(`,`)<0&&(t=r),t in Tr&&t!==Jr&&(e._gsap.x||mi(e,`x`))?n&&Sr===n?t===`scale`?Wr:Ur:(Sr=n||{})&&(t===`scale`?Gr:Kr):e.style&&!ee(e.style[t])?Vr:~t.indexOf(`-`)?Hr:qn(e,t)},core:{_removeProperty:li,_getMatrix:wi}};gr.utils.checkPrefix=ri,gr.core.getStyleSaver=Qr,(function(e,t,n,r){var i=Re(e+`,`+t+`,`+n,function(e){Tr[e]=1});Re(t,function(e){x.units[e]=`deg`,xi[e]=1}),Nr[i[13]]=e+`,`+t,Re(r,function(e){var t=e.split(`:`);Nr[t[1]]=i[t[0]]})})(`x,y,z,scale,scaleX,scaleY,xPercent,yPercent`,`rotation,rotationX,rotationY,skewX,skewY`,`transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective`,`0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY`),Re(`x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective`,function(e){x.units[e]=`px`}),gr.registerPlugin(Ri);var zi=gr.registerPlugin(Ri)||gr;zi.core.Tween;function Bi(e){if(!e)return null;if(e instanceof Date)return Number.isNaN(e.getTime())?null:e;let t=String(e).trim(),n=t.match(/^(\d{1,2})\/(\d{1,2})\/(\d{4})(?:[ T](\d{1,2}):(\d{2})(?::(\d{2}))?)?$/);if(n){let[,e,t,r,i=`0`,a=`0`,o=`0`]=n,s=new Date(Number(r),Number(t)-1,Number(e),Number(i),Number(a),Number(o));return s.getDate()===Number(e)&&s.getMonth()===Number(t)-1?s:null}let r=new Date(t);return Number.isNaN(r.getTime())?null:r}var Vi=o((e=>{var t=Symbol.for(`react.transitional.element`),n=Symbol.for(`react.fragment`);function r(e,n,r){var i=null;if(r!==void 0&&(i=``+r),n.key!==void 0&&(i=``+n.key),`key`in n)for(var a in r={},n)a!==`key`&&(r[a]=n[a]);else r=n;return n=r.ref,{$$typeof:t,type:e,key:i,ref:n===void 0?null:n,props:r}}e.Fragment=n,e.jsx=r,e.jsxs=r})),H=o(((e,t)=>{t.exports=Vi()}))(),Hi={plus:(0,H.jsx)(H.Fragment,{children:(0,H.jsx)(`path`,{d:`M12 5v14M5 12h14`})}),home:(0,H.jsxs)(H.Fragment,{children:[(0,H.jsx)(`path`,{d:`m3 10 9-7 9 7v10a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1Z`}),(0,H.jsx)(`path`,{d:`M9 21v-7h6v7`})]}),grid:(0,H.jsxs)(H.Fragment,{children:[(0,H.jsx)(`rect`,{x:`3`,y:`3`,width:`7`,height:`7`,rx:`1`}),(0,H.jsx)(`rect`,{x:`14`,y:`3`,width:`7`,height:`7`,rx:`1`}),(0,H.jsx)(`rect`,{x:`3`,y:`14`,width:`7`,height:`7`,rx:`1`}),(0,H.jsx)(`rect`,{x:`14`,y:`14`,width:`7`,height:`7`,rx:`1`})]}),library:(0,H.jsxs)(H.Fragment,{children:[(0,H.jsx)(`path`,{d:`M4 19.5A2.5 2.5 0 0 1 6.5 17H20`}),(0,H.jsx)(`path`,{d:`M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2Z`})]}),knowledge:(0,H.jsxs)(H.Fragment,{children:[(0,H.jsx)(`path`,{d:`m12 3 8 4.5-8 4.5-8-4.5L12 3Z`}),(0,H.jsx)(`path`,{d:`m4 12 8 4.5 8-4.5M4 16.5l8 4.5 8-4.5`})]}),file:(0,H.jsxs)(H.Fragment,{children:[(0,H.jsx)(`path`,{d:`M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8Z`}),(0,H.jsx)(`path`,{d:`M14 2v6h6M8 13h8M8 17h6`})]}),team:(0,H.jsxs)(H.Fragment,{children:[(0,H.jsx)(`path`,{d:`M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2`}),(0,H.jsx)(`circle`,{cx:`9`,cy:`7`,r:`4`}),(0,H.jsx)(`path`,{d:`M22 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75`})]}),settings:(0,H.jsxs)(H.Fragment,{children:[(0,H.jsx)(`circle`,{cx:`12`,cy:`12`,r:`3`}),(0,H.jsx)(`path`,{d:`M19.4 15a1.7 1.7 0 0 0 .34 1.88l.06.06-2.83 2.83-.06-.06a1.7 1.7 0 0 0-1.88-.34 1.7 1.7 0 0 0-1.03 1.55V21h-4v-.08A1.7 1.7 0 0 0 8.97 19.4a1.7 1.7 0 0 0-1.88.34l-.06.06-2.83-2.83.06-.06A1.7 1.7 0 0 0 4.6 15.03 1.7 1.7 0 0 0 3.08 14H3v-4h.08A1.7 1.7 0 0 0 4.6 8.97a1.7 1.7 0 0 0-.34-1.88L4.2 7.03 7.03 4.2l.06.06A1.7 1.7 0 0 0 8.97 4.6 1.7 1.7 0 0 0 10 3.08V3h4v.08a1.7 1.7 0 0 0 1.03 1.52 1.7 1.7 0 0 0 1.88-.34l.06-.06 2.83 2.83-.06.06a1.7 1.7 0 0 0-.34 1.88A1.7 1.7 0 0 0 20.92 10H21v4h-.08A1.7 1.7 0 0 0 19.4 15Z`})]}),message:(0,H.jsx)(H.Fragment,{children:(0,H.jsx)(`path`,{d:`M21 11.5a8.4 8.4 0 0 1-.9 3.8A8.5 8.5 0 0 1 12.5 20a8.4 8.4 0 0 1-3.8-.9L3 21l1.9-5.7A8.4 8.4 0 0 1 4 11.5 8.5 8.5 0 0 1 8.7 3.9a8.4 8.4 0 0 1 3.8-.9h.5a8.5 8.5 0 0 1 8 8v.5Z`})}),briefcase:(0,H.jsxs)(H.Fragment,{children:[(0,H.jsx)(`rect`,{x:`3`,y:`7`,width:`18`,height:`13`,rx:`2`}),(0,H.jsx)(`path`,{d:`M8 7V5a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2M3 12h18`})]}),activity:(0,H.jsx)(H.Fragment,{children:(0,H.jsx)(`path`,{d:`m3 12 4-4 4 8 4-12 3 8h3`})}),search:(0,H.jsxs)(H.Fragment,{children:[(0,H.jsx)(`circle`,{cx:`11`,cy:`11`,r:`6`}),(0,H.jsx)(`path`,{d:`m20 20-4.5-4.5`})]}),bell:(0,H.jsx)(H.Fragment,{children:(0,H.jsx)(`path`,{d:`M18 8a6 6 0 0 0-12 0c0 7-3 7-3 9h18c0-2-3-2-3-9M10 21h4`})}),sun:(0,H.jsxs)(H.Fragment,{children:[(0,H.jsx)(`circle`,{cx:`12`,cy:`12`,r:`4`}),(0,H.jsx)(`path`,{d:`M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41`})]}),moon:(0,H.jsx)(H.Fragment,{children:(0,H.jsx)(`path`,{d:`M20.2 15.3A8.5 8.5 0 0 1 8.7 3.8a8.5 8.5 0 1 0 11.5 11.5Z`})}),chevronDown:(0,H.jsx)(H.Fragment,{children:(0,H.jsx)(`path`,{d:`m6 9 6 6 6-6`})}),chevronRight:(0,H.jsx)(H.Fragment,{children:(0,H.jsx)(`path`,{d:`m9 18 6-6-6-6`})}),paperclip:(0,H.jsx)(H.Fragment,{children:(0,H.jsx)(`path`,{d:`m21.4 11.6-8.5 8.5a5 5 0 0 1-7.1-7.1l8.5-8.5a3.5 3.5 0 0 1 5 5L10.8 18a2 2 0 1 1-2.8-2.8l7.8-7.8`})}),link:(0,H.jsxs)(H.Fragment,{children:[(0,H.jsx)(`path`,{d:`M10 13a5 5 0 0 0 7.07.07l2-2a5 5 0 0 0-7.07-7.07l-1.15 1.15`}),(0,H.jsx)(`path`,{d:`M14 11a5 5 0 0 0-7.07-.07l-2 2A5 5 0 0 0 12 20l1.15-1.15`})]}),mic:(0,H.jsxs)(H.Fragment,{children:[(0,H.jsx)(`rect`,{x:`9`,y:`3`,width:`6`,height:`11`,rx:`3`}),(0,H.jsx)(`path`,{d:`M5 11a7 7 0 0 0 14 0M12 18v3M8 21h8`})]}),pause:(0,H.jsxs)(H.Fragment,{children:[(0,H.jsx)(`rect`,{x:`6`,y:`4`,width:`4`,height:`16`,rx:`1`}),(0,H.jsx)(`rect`,{x:`14`,y:`4`,width:`4`,height:`16`,rx:`1`})]}),play:(0,H.jsx)(H.Fragment,{children:(0,H.jsx)(`path`,{d:`M7 4v16l13-8Z`})}),square:(0,H.jsx)(H.Fragment,{children:(0,H.jsx)(`rect`,{x:`5`,y:`5`,width:`14`,height:`14`,rx:`2`})}),volume:(0,H.jsxs)(H.Fragment,{children:[(0,H.jsx)(`path`,{d:`M11 5 6 9H3v6h3l5 4Z`}),(0,H.jsx)(`path`,{d:`M16 8a5 5 0 0 1 0 8`}),(0,H.jsx)(`path`,{d:`M19 5a9 9 0 0 1 0 14`})]}),send:(0,H.jsx)(H.Fragment,{children:(0,H.jsx)(`path`,{d:`M12 19V5M6 11l6-6 6 6`})}),close:(0,H.jsx)(H.Fragment,{children:(0,H.jsx)(`path`,{d:`m6 6 12 12M18 6 6 18`})}),folder:(0,H.jsx)(H.Fragment,{children:(0,H.jsx)(`path`,{d:`M3 7.5A2.5 2.5 0 0 1 5.5 5H10l2 2h6.5A2.5 2.5 0 0 1 21 9.5v8A2.5 2.5 0 0 1 18.5 20h-13A2.5 2.5 0 0 1 3 17.5Z`})}),sparkle:(0,H.jsxs)(H.Fragment,{children:[(0,H.jsx)(`path`,{d:`m12 3-1.4 5.6L5 10l5.6 1.4L12 17l1.4-5.6L19 10l-5.6-1.4Z`}),(0,H.jsx)(`path`,{d:`m19 16-.7 2.3L16 19l2.3.7L19 22l.7-2.3L22 19l-2.3-.7Z`})]}),check:(0,H.jsx)(H.Fragment,{children:(0,H.jsx)(`path`,{d:`m5 12 4 4L19 6`})}),menu:(0,H.jsx)(H.Fragment,{children:(0,H.jsx)(`path`,{d:`M4 6h16M4 12h16M4 18h16`})}),panelLeft:(0,H.jsxs)(H.Fragment,{children:[(0,H.jsx)(`rect`,{x:`3`,y:`4`,width:`18`,height:`16`,rx:`3`}),(0,H.jsx)(`path`,{d:`M9 4v16`})]}),more:(0,H.jsxs)(H.Fragment,{children:[(0,H.jsx)(`circle`,{cx:`5`,cy:`12`,r:`1`,fill:`currentColor`}),(0,H.jsx)(`circle`,{cx:`12`,cy:`12`,r:`1`,fill:`currentColor`}),(0,H.jsx)(`circle`,{cx:`19`,cy:`12`,r:`1`,fill:`currentColor`})]}),archive:(0,H.jsx)(H.Fragment,{children:(0,H.jsx)(`path`,{d:`M3 7h18v13H3zM5 3h14v4H5zM9 12h6`})}),copy:(0,H.jsxs)(H.Fragment,{children:[(0,H.jsx)(`rect`,{x:`9`,y:`9`,width:`11`,height:`11`,rx:`2`}),(0,H.jsx)(`path`,{d:`M15 9V5a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h4`})]}),refresh:(0,H.jsxs)(H.Fragment,{children:[(0,H.jsx)(`path`,{d:`M20 11a8 8 0 1 0 2 5.3`}),(0,H.jsx)(`path`,{d:`M20 4v7h-7`})]}),download:(0,H.jsxs)(H.Fragment,{children:[(0,H.jsx)(`path`,{d:`M12 3v12`}),(0,H.jsx)(`path`,{d:`m7 10 5 5 5-5`}),(0,H.jsx)(`path`,{d:`M5 21h14`})]}),scissors:(0,H.jsxs)(H.Fragment,{children:[(0,H.jsx)(`circle`,{cx:`6`,cy:`7`,r:`3`}),(0,H.jsx)(`circle`,{cx:`6`,cy:`17`,r:`3`}),(0,H.jsx)(`path`,{d:`m8.7 8.3 11.3 6.2M8.7 15.7 20 9.5`})]}),split:(0,H.jsxs)(H.Fragment,{children:[(0,H.jsx)(`path`,{d:`M8 3H5a2 2 0 0 0-2 2v3M16 3h3a2 2 0 0 1 2 2v3M8 21H5a2 2 0 0 1-2-2v-3M16 21h3a2 2 0 0 0 2-2v-3`}),(0,H.jsx)(`path`,{d:`m9 8 6 8M15 8l-2 2`})]}),coin:(0,H.jsxs)(H.Fragment,{children:[(0,H.jsx)(`circle`,{cx:`12`,cy:`12`,r:`9`}),(0,H.jsx)(`path`,{d:`M12 6.5v11`}),(0,H.jsx)(`path`,{d:`M15.2 9.2a3 3 0 0 0-3-1.7h-.6a2.5 2.5 0 0 0 0 5h.8a2.5 2.5 0 0 1 0 5h-.6a3 3 0 0 1-3-1.7`})]})};function U({name:e,size:t=20,strokeWidth:n=1.7,className:r=``}){return(0,H.jsx)(`svg`,{className:r,width:t,height:t,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:n,strokeLinecap:`round`,strokeLinejoin:`round`,"aria-hidden":`true`,children:Hi[e]||Hi.sparkle})}function Ui({size:e=20,className:t=``}){return(0,H.jsxs)(`svg`,{className:t,width:e,height:e,viewBox:`0 0 24 24`,fill:`currentColor`,"aria-hidden":`true`,children:[(0,H.jsx)(`path`,{d:`M2.5 3.5 8 9l4-5.5L16 9l5.5-5.5V14H2.5Z`}),(0,H.jsx)(`path`,{d:`m12 15.2 4.1 4.1L12 23.5l-4.1-4.2Z`})]})}var Wi={draft:`draft`,awaiting_input:`awaiting_input`,ready:`ready`,running:`running`,completed:`completed`,failed:`failed`};function Gi(e){return e?.name||e?.label||e?.id||`Expert Gabriel`}function Ki(e){if(e?.mission&&typeof e.mission==`object`){let t=e.mission,n=Array.isArray(e.agents)?e.agents:t.selectedAgents||[];return{id:t.id||`mission-${Date.now()}`,title:t.title||`Mission Gabriel`,status:Wi[t.status]||`ready`,objective:t.objective||``,agents:n.map(e=>({id:e.id||e.agentId||Gi(e).toLowerCase().replace(/\s+/g,`-`),name:Gi(e),status:e.status||`selected`,description:e.description||e.role||``})),deliverables:Array.isArray(e.deliverables)?e.deliverables:[],panelType:e.panel?.type||`mission_summary`,inputs:Array.isArray(t.inputs)?t.inputs:[],execution:t.execution&&typeof t.execution==`object`?{endpoint:t.execution.endpoint,method:t.execution.method||`POST`,label:t.execution.label||`Lancer la mission`,payload:t.execution.payload||{}}:null,jobId:t.job_id||null,progress:Number.isFinite(t.progress)?t.progress:0,error:t.error||``}}if(e?.recommendation?.agent){let t=e.recommendation;return{id:`directive-${Date.now()}`,title:t.label||`Prochaine étape recommandée`,status:`ready`,objective:t.reason||`Gabriel a analysé votre demande et vous indique la suite.`,agents:[{id:t.agent,name:t.label||t.agent,status:`selected`,description:`Sélectionné par Gabriel`}],deliverables:[],panelType:`mission_summary`}}return null}function qi(e=``){let t=e.trim().split(/\s+/).filter(Boolean);return(t.length?t.slice(0,2).map(e=>e[0]):[`G`]).join(``).toUpperCase()}var Ji={psychologue:{id:`psychologue`,name:`Le Psychologue`,shortName:`Psychologue`,role:`Comprendre les émotions, motivations et freins de votre audience.`,path:`/psychologue`,portrait:`/static/images/psychologue-agent.jpeg`,contextLabel:`Analyse d’audience`},stratege:{id:`stratege`,name:`Ariane`,shortName:`Ariane`,role:`Votre stratège de conseil.`,path:`/stratege`,portrait:`/static/images/personas/p2.jpeg`,contextLabel:`Décision stratégique`},createur:{id:`createur`,name:`Le Créateur`,shortName:`Créateur`,role:`Faire vivre la stratégie dans des contenus prêts à produire.`,path:`/createur`,portrait:`/static/images/createur-agent.jpeg`,contextLabel:`Production de contenus`}};function Yi(e){return Ji[e]||null}function Xi(e){return!!Yi(e)}var Zi=`psychologue`;function Qi(e){return Xi(e)||e===`conversation`}function $i(e){let t=null;try{t=new URL(e).searchParams.get(`agent`)}catch{return Zi}return t&&Qi(t)?t:Zi}function ea(e,t){let n=new URL(e);return t!==`psychologue`&&Qi(t)?n.searchParams.set(`agent`,t):n.searchParams.delete(`agent`),n.toString()}function W(e){if(e.status===401)return!0;try{return e.redirected&&new URL(e.url,window.location.origin).pathname===`/login`}catch{return!1}}async function G(e,t){let n=await e.text();try{return n?JSON.parse(n):{}}catch{let n=e.status?` (HTTP ${e.status})`:``;throw Error(`${t} a renvoyé une réponse invalide${n}. Vérifiez que Gabriel est lancé avec son backend.`)}}function K(e,t={}){let{headers:n,...r}=t;return fetch(e,{credentials:`same-origin`,headers:{Accept:`application/json`,...n||{}},...r})}var ta=[{id:`home`,icon:`home`,label:`Accueil`},{id:`analyses`,icon:`activity`,label:`Analyses`},{id:`cross`,icon:`split`,label:`Cross Analyses`},{id:`strategies`,icon:`archive`,label:`Stratégies`},{id:`workspaces`,icon:`grid`,label:`Espaces de travail`},{id:`library`,icon:`library`,label:`Bibliothèque`},{id:`team`,icon:`team`,label:`Agents`}],na={home:{eyebrow:`Gabriel.ai · Système multi-agents`,title:`Accueil`,search:`Rechercher dans Gabriel`},analyses:{eyebrow:`Le Psychologue`,title:`Analyses`,search:`Rechercher une analyse`},cross:{eyebrow:`Le Psychologue`,title:`Cross Analyses`,search:`Rechercher une comparaison`},workspaces:{eyebrow:`Organisation`,title:`Espaces`,search:`Rechercher un espace`},library:{eyebrow:`Contexte`,title:`Bibliothèque`,search:`Rechercher une source`},team:{eyebrow:`Spécialistes`,title:`Agents`,search:`Rechercher un agent`},strategies:{eyebrow:`Décisions`,title:`Stratégies`,search:`Rechercher une stratégie`},settings:{eyebrow:`Préférences`,title:`Paramètres`,search:`Rechercher un réglage`}};function ra({item:e,active:t,onClick:n}){return(0,H.jsx)(`button`,{type:`button`,className:`gv2-rail-button${t?` is-active`:``}`,onClick:n,title:e.label,"aria-label":e.label,children:(0,H.jsx)(U,{name:e.icon,size:18})})}function ia({agent:e,active:t,onClick:n,badge:r}){return(0,H.jsxs)(`button`,{type:`button`,className:`gv2-agent-nav-row${t?` is-active`:``}`,onClick:n,children:[(0,H.jsx)(`img`,{src:e.portrait,alt:``}),(0,H.jsxs)(`span`,{children:[(0,H.jsxs)(`strong`,{children:[e.shortName,r&&(0,H.jsx)(`em`,{className:`gv2-agent-badge`,children:r})]}),(0,H.jsx)(`small`,{children:e.contextLabel})]}),(0,H.jsx)(U,{name:`chevronRight`,size:15})]})}function aa({workspaces:e,activeWorkspaceId:t,query:n,onSelectWorkspace:r,onDeleteWorkspace:i,deletingWorkspaceId:a}){let o=(0,_.useMemo)(()=>e.filter(e=>(e.title||``).toLocaleLowerCase(`fr`).includes(n.toLocaleLowerCase(`fr`))),[e,n]);return(0,H.jsxs)(`div`,{className:`gv2-workspace-list`,children:[o.map(e=>(0,H.jsxs)(`div`,{className:`gv2-workspace-row`,children:[(0,H.jsxs)(`button`,{type:`button`,className:`gv2-workspace-select${e.folder_id===t?` is-current`:``}`,onClick:()=>r(e.folder_id),children:[(0,H.jsx)(`span`,{className:`gv2-workspace-avatar`,children:qi(e.title)}),(0,H.jsx)(`span`,{children:e.title||`Workspace`}),e.folder_id===t&&(0,H.jsx)(U,{name:`check`,size:14})]}),(0,H.jsx)(`button`,{type:`button`,className:`gv2-workspace-delete`,disabled:a===e.folder_id,onClick:()=>i(e),"aria-label":`Supprimer ${e.title||`ce workspace`}`,title:`Supprimer ce workspace`,children:(0,H.jsx)(U,{name:`close`,size:13})})]},e.folder_id)),!o.length&&(0,H.jsx)(`p`,{className:`gv2-nav-empty`,children:`Aucun espace ne correspond à cette recherche.`})]})}function oa({activeWorkspace:e,activeTab:t,onStartNewConversation:n,onStartAnalysis:r,onSelectAgent:i,onOpenAnalysis:a}){let o=ca().slice(0,3);return(0,H.jsxs)(`div`,{className:`gv2-nav-content`,children:[(0,H.jsxs)(`button`,{type:`button`,className:`gv2-nav-primary-action`,onClick:r,children:[(0,H.jsx)(U,{name:`activity`,size:17}),(0,H.jsx)(`span`,{children:`Nouvelle analyse`})]}),(0,H.jsxs)(`button`,{type:`button`,className:`gv2-nav-text-action`,onClick:n,children:[(0,H.jsx)(U,{name:`message`,size:15}),` Nouvelle conversation`]}),(0,H.jsx)(`p`,{className:`gv2-nav-section-label`,children:`VOS AGENTS`}),(0,H.jsx)(`div`,{className:`gv2-agent-nav-list`,children:[`psychologue`,`stratege`,`createur`].map(e=>Ji[e]&&(0,H.jsx)(ia,{agent:Ji[e],active:t===e,badge:e===`psychologue`?`Principal`:``,onClick:()=>i(e)},e))}),o.length>0&&a&&(0,H.jsxs)(H.Fragment,{children:[(0,H.jsx)(`p`,{className:`gv2-nav-section-label`,children:`ANALYSES RÉCENTES`}),(0,H.jsx)(ua,{items:o,onOpen:a})]}),(0,H.jsxs)(`section`,{className:`gv2-nav-note`,children:[(0,H.jsx)(`span`,{className:`gv2-nav-note-mark`,children:`G`}),(0,H.jsxs)(`div`,{children:[(0,H.jsx)(`strong`,{children:e?.title||`Aucun espace ouvert`}),(0,H.jsx)(`p`,{children:e?.objective||`Commencez par analyser une audience : la stratégie et le contenu s’appuieront ensuite sur cette compréhension.`})]})]})]})}function sa({activeWorkspace:e}){return(0,H.jsxs)(`div`,{className:`gv2-nav-content`,children:[(0,H.jsxs)(`section`,{className:`gv2-nav-note`,children:[(0,H.jsx)(`span`,{className:`gv2-nav-note-mark`,children:(0,H.jsx)(U,{name:`library`,size:16})}),(0,H.jsxs)(`div`,{children:[(0,H.jsx)(`strong`,{children:`Sources du workspace`}),(0,H.jsx)(`p`,{children:e?.source_type?`Source active : ${e.source_type}.`:`Les liens, fichiers et données utiles apparaîtront ici dès leur ajout dans la conversation.`})]})]}),(0,H.jsx)(`p`,{className:`gv2-nav-section-label`,children:`ÉTAT DU DOSSIER`}),(0,H.jsxs)(`div`,{className:`gv2-nav-status-list`,children:[(0,H.jsxs)(`span`,{children:[(0,H.jsx)(U,{name:e?.analysis_id?`check`:`more`,size:14}),`Analyse d’audience`]}),(0,H.jsxs)(`span`,{children:[(0,H.jsx)(U,{name:e?.strategy_id?`check`:`more`,size:14}),`Décision stratégique`]}),(0,H.jsxs)(`span`,{children:[(0,H.jsx)(U,{name:e?.creator_output_id?`check`:`more`,size:14}),`Créations`]})]})]})}function ca(){let[e,t]=(0,_.useState)([]);return(0,_.useEffect)(()=>{let e=!0,n=K(`/history`);if(n&&typeof n.then==`function`)return n.then(async n=>{if(!n||!n.ok||W(n))return;let r=JSON.parse(await n.text()),i=Array.isArray(r)?r:Array.isArray(r?.history)?r.history:[];e&&t(i.filter(e=>e&&e.analysis_id))}).catch(()=>{}),()=>{e=!1}},[]),e}function la(e){let t=Bi(e);return t?t.toLocaleDateString(`fr-FR`,{day:`numeric`,month:`short`}):``}function ua({items:e,onOpen:t}){return(0,H.jsx)(`div`,{className:`gv2-analysis-list`,children:e.map(e=>(0,H.jsxs)(`button`,{type:`button`,className:`gv2-analysis-row`,onClick:()=>t(e.analysis_id),children:[(0,H.jsx)(`strong`,{children:e.title||e.source||`Analyse`}),(0,H.jsx)(`small`,{children:[e.source&&e.source!==e.title?e.source:``,e.nb_commentaires?`${e.nb_commentaires} commentaires`:``,la(e.created_at)].filter(Boolean).join(` · `)})]},e.analysis_id))})}function da({query:e,onOpenAnalysis:t,onStartAnalysis:n}){let r=ca(),i=e.toLocaleLowerCase(`fr`),a=r.filter(e=>`${e.title||``} ${e.source||``}`.toLocaleLowerCase(`fr`).includes(i));return(0,H.jsxs)(`div`,{className:`gv2-nav-content`,children:[(0,H.jsxs)(`button`,{type:`button`,className:`gv2-nav-primary-action`,onClick:n,children:[(0,H.jsx)(U,{name:`plus`,size:16}),(0,H.jsx)(`span`,{children:`Nouvelle analyse`})]}),(0,H.jsx)(`p`,{className:`gv2-nav-section-label`,children:`VOS ANALYSES`}),a.length?(0,H.jsx)(ua,{items:a,onOpen:t}):(0,H.jsx)(`p`,{className:`gv2-nav-empty`,children:r.length?`Aucune analyse ne correspond à cette recherche.`:`Vos analyses apparaîtront ici après votre première lecture d’audience.`})]})}function fa({query:e,onOpenCross:t,onStartCross:n}){let[r,i]=(0,_.useState)(null);(0,_.useEffect)(()=>{let e=!0,t=K(`/api/v2/agents/psychologue/cross-analyses`);if(t&&typeof t.then==`function`)return t.then(async t=>{if(!t||W(t))return;let n=t.ok?JSON.parse(await t.text()):{};e&&i(Array.isArray(n?.cross_analyses)?n.cross_analyses:[])}).catch(()=>{e&&i([])}),()=>{e=!1}},[]);let a=e.toLocaleLowerCase(`fr`),o=(r||[]).filter(e=>(e.sources||[]).map(e=>e.title).join(` `).toLocaleLowerCase(`fr`).includes(a)),s={completed:``,partial_success:`Partielle`,running:`En cours`,failed:`Échec`,error:`Échec`,interrupted:`Interrompue`,prepared:`En préparation`};return(0,H.jsxs)(`div`,{className:`gv2-nav-content`,children:[(0,H.jsxs)(`button`,{type:`button`,className:`gv2-nav-primary-action`,onClick:n,children:[(0,H.jsx)(U,{name:`plus`,size:16}),(0,H.jsx)(`span`,{children:`Nouvelle Cross Analyse`})]}),(0,H.jsx)(`p`,{className:`gv2-nav-section-label`,children:`VOS COMPARAISONS`}),r===null?(0,H.jsx)(`p`,{className:`gv2-nav-empty`,children:`Chargement…`}):o.length?(0,H.jsx)(`div`,{className:`gv2-analysis-list`,children:o.map(e=>{let n=(e.sources||[]).map(e=>e.title).filter(Boolean),r=[`completed`,`partial_success`].includes(e.status);return(0,H.jsxs)(`button`,{type:`button`,className:`gv2-analysis-row`,disabled:!r,onClick:()=>t(e.cross_analysis_id),children:[(0,H.jsx)(`strong`,{children:n.length?n.join(` × `):`Cross Analyse`}),(0,H.jsx)(`small`,{children:[`${(e.sources||[]).length} audiences`,la(e.created_at),s[e.status]].filter(Boolean).join(` · `)})]},e.cross_analysis_id)})}):(0,H.jsx)(`p`,{className:`gv2-nav-empty`,children:r.length?`Aucune comparaison ne correspond à cette recherche.`:`Comparez 2 à 5 audiences pour voir ce qui les rassemble et ce qui les sépare.`})]})}var pa=[{label:`PORTE D’ENTRÉE`,ids:[`psychologue`]},{label:`PROLONGEMENTS`,ids:[`stratege`,`createur`]}];function ma({activeTab:e,query:t,onSelectAgent:n}){let r=e=>`${e.name} ${e.contextLabel}`.toLocaleLowerCase(`fr`).includes(t.toLocaleLowerCase(`fr`)),i=pa.map(e=>({...e,agents:e.ids.map(e=>Ji[e]).filter(Boolean).filter(r)})).filter(e=>e.agents.length);return(0,H.jsxs)(`div`,{className:`gv2-nav-content`,children:[i.map(t=>(0,H.jsxs)(_.Fragment,{children:[(0,H.jsx)(`p`,{className:`gv2-nav-section-label`,children:t.label}),(0,H.jsx)(`div`,{className:`gv2-agent-nav-list`,children:t.agents.map(t=>(0,H.jsx)(ia,{agent:t,active:e===t.id,onClick:()=>n(t.id)},t.id))})]},t.label)),!i.length&&(0,H.jsx)(`p`,{className:`gv2-nav-empty`,children:`Aucun agent ne correspond à cette recherche.`})]})}var ha={fonctionne:{classe:`worked`,texte:`A fonctionné`},sans_resultat:{classe:`noresult`,texte:`Sans résultat`}};function ga(e){if(!e)return``;try{let t=Bi(e);return t?t.toLocaleDateString(`fr-FR`,{day:`numeric`,month:`short`,year:`numeric`}):``}catch{return``}}function _a({strategie:e,onMarquer:t,onSupprimer:n,suppression:r}){let i=ha[e.resultat];return(0,H.jsxs)(`article`,{className:`gv2-strategy-card`,children:[(0,H.jsxs)(`div`,{className:`gv2-strategy-card-top`,children:[(0,H.jsxs)(`div`,{children:[(0,H.jsx)(`div`,{className:`gv2-strategy-card-title`,children:e.title||`Stratégie`}),(0,H.jsxs)(`div`,{className:`gv2-strategy-card-meta`,children:[(0,H.jsx)(`span`,{children:ga(e.created_at)}),i&&(0,H.jsx)(`span`,{className:`gv2-strategy-badge is-${i.classe}`,children:i.texte})]})]}),(0,H.jsxs)(`div`,{className:`gv2-strategy-card-actions`,children:[(0,H.jsx)(`a`,{className:`gv2-strategy-open`,href:`/strategies/${encodeURIComponent(e.strategy_id)}/open`,children:`Ouvrir`}),(0,H.jsx)(`button`,{type:`button`,className:`gv2-strategy-delete`,disabled:r,onClick:()=>n(e.strategy_id),"aria-label":`Supprimer cette stratégie`,title:`Supprimer`,children:(0,H.jsx)(U,{name:`close`,size:13})})]})]}),(0,H.jsxs)(`div`,{className:`gv2-strategy-track`,children:[(0,H.jsx)(`p`,{children:`Cette stratégie a-t-elle fonctionné sur le terrain ?`}),(0,H.jsxs)(`div`,{className:`gv2-strategy-track-options`,children:[(0,H.jsx)(`button`,{type:`button`,className:e.resultat===`fonctionne`?`is-selected`:``,onClick:()=>t(e.strategy_id,`fonctionne`),children:`Oui, elle a marché`}),(0,H.jsx)(`button`,{type:`button`,className:e.resultat===`sans_resultat`?`is-selected`:``,onClick:()=>t(e.strategy_id,`sans_resultat`),children:`Appliquée, sans résultat`}),(0,H.jsx)(`button`,{type:`button`,className:e.resultat?``:`is-selected`,onClick:()=>t(e.strategy_id,``),children:`Pas encore testée`})]})]})]})}function va(){let[e,t]=(0,_.useState)(null),[n,r]=(0,_.useState)(``);(0,_.useEffect)(()=>{let e=!0;return K(`/strategies`).then(async n=>{if(W(n))return;let r=await G(n,`Vos stratégies`).catch(()=>null);e&&t(Array.isArray(r)?r:[])}).catch(()=>{e&&t([])}),()=>{e=!1}},[]);async function i(n,r){t(e=>e.map(e=>e.strategy_id===n?{...e,resultat:r}:e));let i=(e||[]).find(e=>e.strategy_id===n);try{await K(`/feedback`,{method:`POST`,headers:{"Content-Type":`application/json`},body:JSON.stringify({strategy_id:n,analysis_id:i?.analysis_id||``,resultat:r})})}catch{}}async function a(e){if(window.confirm(`Supprimer définitivement cette stratégie ?`)){r(e);try{await K(`/strategies/${encodeURIComponent(e)}`,{method:`DELETE`}),t(t=>t.filter(t=>t.strategy_id!==e))}finally{r(``)}}}if(e===null)return(0,H.jsx)(`div`,{className:`gv2-nav-content`,children:(0,H.jsx)(`p`,{className:`gv2-nav-loading`,children:`Chargement de vos stratégies…`})});if(!e.length)return(0,H.jsx)(`div`,{className:`gv2-nav-content`,children:(0,H.jsxs)(`section`,{className:`gv2-nav-note`,children:[(0,H.jsx)(`span`,{className:`gv2-nav-note-mark`,children:(0,H.jsx)(U,{name:`archive`,size:16})}),(0,H.jsxs)(`div`,{children:[(0,H.jsx)(`strong`,{children:`Aucune stratégie sauvegardée`}),(0,H.jsx)(`p`,{children:`Chaque stratégie générée par Ariane est conservée ici. Vous pourrez suivre si elle a fonctionné sur le terrain.`})]})]})});let o=e.length,s=e.filter(e=>e.resultat===`fonctionne`).length;return(0,H.jsxs)(`div`,{className:`gv2-nav-content gv2-nav-content--strategies`,children:[(0,H.jsxs)(`div`,{className:`gv2-strategy-stats`,children:[(0,H.jsxs)(`div`,{children:[(0,H.jsx)(`strong`,{children:o}),(0,H.jsx)(`span`,{children:`Créées`})]}),(0,H.jsxs)(`div`,{children:[(0,H.jsx)(`strong`,{children:s}),(0,H.jsx)(`span`,{children:`Ont fonctionné`})]})]}),(0,H.jsx)(`div`,{className:`gv2-strategy-list`,children:e.map(e=>(0,H.jsx)(_a,{strategie:e,onMarquer:i,onSupprimer:a,suppression:n===e.strategy_id},e.strategy_id))})]})}var ya=[{cle:`role_utilisateur`,label:`Votre rôle`,placeholder:`Coach business, fondateur SaaS, consultant marketing…`},{cle:`activite`,label:`Activité / entreprise`,placeholder:`Ce que vous faites concrètement au quotidien`},{cle:`offre`,label:`Offre principale`,placeholder:`Programme, formation, service, logiciel, produit…`},{cle:`cible`,label:`Cible idéale`,placeholder:`Entrepreneurs, PME, indépendants, e-commerçants…`},{cle:`modele_economique`,label:`Modèle économique`,placeholder:`Abonnement mensuel, vente unique, commission, freemium…`},{cle:`resultats_actuels`,label:`Résultats actuels`,placeholder:`CA mensuel, nombre de clients, taux de conversion, audience…`,long:!0},{cle:`objectif_principal`,label:`Objectif prioritaire`,placeholder:`Ce que vous voulez atteindre dans les 90 prochains jours`,long:!0}],ba=[{cle:`vision_strategique`,label:`Vision stratégique`,placeholder:`Où voulez-vous amener votre entreprise dans 3 ans ?`,long:!0},{cle:`ton_de_marque`,label:`Ton de marque`,placeholder:`Expert, chaleureux, direct, premium, provocateur…`}];function xa({champ:e,valeur:t,onChange:n}){let r={id:e.cle,value:t,onChange:t=>n(e.cle,t.target.value),placeholder:e.placeholder};return(0,H.jsxs)(`div`,{className:`gv2-profile-row`,children:[(0,H.jsx)(`label`,{htmlFor:e.cle,children:e.label}),e.long?(0,H.jsx)(`textarea`,{rows:2,...r}):(0,H.jsx)(`input`,{type:`text`,...r})]})}function Sa(){let[e,t]=(0,_.useState)(null),[n,r]=(0,_.useState)(`repos`);(0,_.useEffect)(()=>{let e=!0;return K(`/profil/data`).then(async n=>{if(W(n))return;let r=await G(n,`Votre profil`).catch(()=>({}));e&&t(r&&typeof r==`object`?r:{})}).catch(()=>{e&&t({})}),()=>{e=!1}},[]);function i(e,n){t(t=>({...t||{},[e]:n}))}async function a(t){t.preventDefault(),r(`en_cours`);try{let t=await K(`/profil`,{method:`POST`,headers:{"Content-Type":`application/json`},body:JSON.stringify(e||{})}),n=await G(t,`Votre profil`).catch(()=>null);r(t.ok&&n?.success?`reussi`:`echec`)}catch{r(`echec`)}setTimeout(()=>r(`repos`),2200)}if(e===null)return(0,H.jsx)(`p`,{className:`gv2-nav-loading`,children:`Chargement de votre profil…`});let o=ya.filter(t=>(e[t.cle]||``).trim().length>0).length,s=ya.length,c=o===s?`complet`:o>=3?`partiel`:`vide`,l={complet:`Profil complet — Gabriel a tout ce qu’il lui faut`,partiel:`Profil partiel — complétez pour de meilleurs résultats`,vide:`Profil vide — commencez par renseigner votre rôle`}[c];return(0,H.jsxs)(`form`,{className:`gv2-profile-form`,onSubmit:a,children:[(0,H.jsxs)(`div`,{className:`gv2-profile-status is-${c}`,children:[(0,H.jsx)(`div`,{className:`gv2-profile-status-track`,children:(0,H.jsx)(`div`,{className:`gv2-profile-status-fill`,style:{width:`${Math.round(o/s*100)}%`}})}),(0,H.jsxs)(`div`,{className:`gv2-profile-status-row`,children:[(0,H.jsx)(`span`,{children:l}),(0,H.jsxs)(`span`,{children:[o,` / `,s]})]})]}),(0,H.jsx)(`p`,{className:`gv2-nav-section-label`,children:`L’ESSENTIEL`}),ya.map(t=>(0,H.jsx)(xa,{champ:t,valeur:e[t.cle]||``,onChange:i},t.cle)),(0,H.jsx)(`p`,{className:`gv2-nav-section-label`,children:`FACULTATIF`}),ba.map(t=>(0,H.jsx)(xa,{champ:t,valeur:e[t.cle]||``,onChange:i},t.cle)),(0,H.jsx)(`button`,{type:`submit`,className:`gv2-profile-save is-${n}`,disabled:n===`en_cours`,children:n===`en_cours`?`Enregistrement…`:n===`reussi`?`✓ Enregistré`:n===`echec`?`Erreur — réessayer`:`Enregistrer`})]})}var Ca={free:`Gratuit`,early_access:`Early Access`,standard:`Standard`,pme:`PME`},wa=[{id:`early_access`,badge:`🚀 Offre de lancement`,nom:`Early Access`,prix:`29 €`,accent:`featured`,cta:`Rejoindre en Early Access`},{id:`standard`,nom:`Standard`,prix:`49 €`,cta:`Passer en Standard`},{id:`pme`,badge:`🏢 Équipe & besoins avancés`,nom:`PME`,prix:`99 €`,accent:`premium`,cta:`Passer en PME`}];function Ta({offre:e,actif:t,enCours:n,onChoisir:r}){return(0,H.jsxs)(`div`,{className:`gv2-plan-card${e.accent?` is-${e.accent}`:``}${t?` is-active`:``}`,children:[e.badge&&(0,H.jsx)(`div`,{className:`gv2-plan-card-badge`,children:e.badge}),(0,H.jsx)(`div`,{className:`gv2-plan-card-name`,children:e.nom}),(0,H.jsxs)(`div`,{className:`gv2-plan-card-price`,children:[e.prix,(0,H.jsx)(`span`,{children:`/mois`})]}),t?(0,H.jsx)(`div`,{className:`gv2-plan-card-current`,children:`Votre plan actuel`}):(0,H.jsx)(`button`,{type:`button`,disabled:n,onClick:()=>r(e.id),children:n?`Redirection…`:e.cta})]})}function Ea({workspaces:e}){let[t,n]=(0,_.useState)(null),[r,i]=(0,_.useState)(``),[a,o]=(0,_.useState)(``);(0,_.useEffect)(()=>{let e=!0;return K(`/usage`).then(async t=>{let r=await G(t,`Votre consommation`).catch(()=>null);e&&n(r||{})}).catch(()=>{e&&n({})}),()=>{e=!1}},[]);let s=t?.plan||`free`;async function c(e){i(e),o(``);try{let t=await K(`/stripe/checkout`,{method:`POST`,headers:{"Content-Type":`application/json`},body:JSON.stringify({plan:e})}),n=await G(t,`Le paiement`).catch(()=>null);if(t.ok&&n?.url){window.location.assign(n.url);return}o(n?.error||`Erreur lors du paiement. Réessayez.`)}catch{o(`Erreur réseau. Réessayez.`)}i(``)}return(0,H.jsxs)(`div`,{className:`gv2-plan-section`,children:[(0,H.jsxs)(`div`,{className:`gv2-plan-usage`,children:[(0,H.jsx)(`div`,{className:`gv2-plan-badge${s===`free`?` is-free`:``}`,children:Ca[s]||s}),(0,H.jsxs)(`div`,{className:`gv2-plan-stats`,children:[(0,H.jsxs)(`div`,{children:[(0,H.jsx)(`strong`,{children:t?t.limit?`${t.used||0} / ${t.limit}`:`${t.used||0}`:`…`}),(0,H.jsx)(`span`,{children:`Analyses`})]}),(0,H.jsxs)(`div`,{children:[(0,H.jsx)(`strong`,{children:e?.length??`—`}),(0,H.jsx)(`span`,{children:`Dossiers`})]})]})]}),(0,H.jsx)(`p`,{className:`gv2-nav-section-label`,children:`CHANGER D’OFFRE`}),(0,H.jsx)(`div`,{className:`gv2-plan-grid`,children:wa.map(e=>(0,H.jsx)(Ta,{offre:e,actif:e.id===s,enCours:r===e.id,onChoisir:c},e.id))}),a&&(0,H.jsx)(`p`,{className:`gv2-plan-error`,role:`alert`,children:a}),(0,H.jsx)(`p`,{className:`gv2-plan-note`,children:`Paiement sécurisé par Stripe · Annulable à tout moment`})]})}function Da({user:e}){let[t,n]=(0,_.useState)(!1),[r,i]=(0,_.useState)(``),[a,o]=(0,_.useState)(!1),[s,c]=(0,_.useState)(``),l=(e?.email||``).trim().toLowerCase(),u=r.trim().toLowerCase()===l&&l.length>0;async function d(){o(!0),c(``);try{let e=await K(`/account/delete`,{method:`POST`,headers:{"Content-Type":`application/json`},body:JSON.stringify({confirm_email:r.trim()})}),t=await G(e,`La suppression du compte`).catch(()=>null);if(e.ok&&t?.success){window.location.assign(`/`);return}c(t?.error||`Impossible de supprimer ce compte.`)}catch{c(`Erreur réseau.`)}o(!1)}return t?(0,H.jsxs)(`div`,{className:`gv2-account-delete-confirm`,children:[(0,H.jsxs)(`p`,{children:[`Tapez `,(0,H.jsx)(`strong`,{children:e?.email}),` pour confirmer. Cette action supprime toutes vos données et est irréversible.`]}),(0,H.jsx)(`input`,{type:`email`,value:r,onChange:e=>i(e.target.value),placeholder:e?.email,"aria-label":`Confirmez votre email`}),s&&(0,H.jsx)(`p`,{className:`gv2-account-delete-error`,role:`alert`,children:s}),(0,H.jsxs)(`div`,{className:`gv2-account-delete-actions`,children:[(0,H.jsx)(`button`,{type:`button`,onClick:()=>{n(!1),i(``),c(``)},children:`Annuler`}),(0,H.jsx)(`button`,{type:`button`,className:`is-danger`,disabled:!u||a,onClick:d,children:a?`Suppression…`:`Supprimer définitivement`})]})]}):(0,H.jsx)(`button`,{type:`button`,className:`gv2-account-delete-open`,onClick:()=>n(!0),children:`Supprimer définitivement mon compte`})}function Oa({user:e,workspaces:t,darkMode:n,onToggleDarkMode:r,onStartGuide:i}){return(0,H.jsxs)(`div`,{className:`gv2-nav-content`,children:[(0,H.jsxs)(`section`,{className:`gv2-nav-note`,children:[(0,H.jsx)(`span`,{className:`gv2-user-avatar`,children:qi(e?.name||e?.email||`G`)}),(0,H.jsxs)(`div`,{children:[(0,H.jsx)(`strong`,{children:e?.name||e?.email?.split(`@`)[0]||`Votre compte`}),(0,H.jsx)(`p`,{children:e?.email})]})]}),(0,H.jsx)(Ea,{workspaces:t}),(0,H.jsxs)(`section`,{className:`gv2-nav-theme`,"aria-label":`Apparence`,children:[(0,H.jsx)(`span`,{children:(0,H.jsx)(U,{name:n?`moon`:`sun`,size:16})}),(0,H.jsxs)(`div`,{children:[(0,H.jsx)(`strong`,{children:`Mode sombre`}),(0,H.jsx)(`p`,{children:n?`Activé`:`Désactivé`})]}),(0,H.jsx)(`button`,{type:`button`,role:`switch`,"aria-checked":n,"aria-label":`Activer le mode sombre`,className:n?`is-active`:``,onClick:r,children:(0,H.jsx)(`i`,{})})]}),(0,H.jsxs)(`button`,{className:`gv2-nav-guide`,type:`button`,onClick:i,children:[(0,H.jsx)(U,{name:`sparkle`,size:15}),(0,H.jsx)(`span`,{children:`Relancer le guide`}),(0,H.jsx)(U,{name:`chevronRight`,size:14})]}),(0,H.jsx)(`p`,{className:`gv2-nav-section-label`,children:`VOTRE PROFIL BUSINESS`}),(0,H.jsx)(Sa,{}),(0,H.jsxs)(`div`,{className:`gv2-account-danger`,children:[(0,H.jsx)(`p`,{className:`gv2-nav-section-label`,children:`ZONE DE DANGER`}),(0,H.jsx)(Da,{user:e})]})]})}function ka({workspaces:e,activeWorkspaceId:t,activeWorkspace:n,activeTab:r,mission:i,onSelectWorkspace:a,onCreateWorkspace:o,onDeleteWorkspace:s,deletingWorkspaceId:c,onSelectConversation:l,onStartNewConversation:u,onStartAnalysis:d,onOpenAnalysis:f,onOpenCross:p,onStartCross:m,onSelectAgent:h,user:g,collapsed:v,onToggleCollapsed:y,darkMode:b,onToggleDarkMode:x,onStartGuide:S,initialSection:C}){let[w,T]=(0,_.useState)(!1),[E,D]=(0,_.useState)(``),[O,k]=(0,_.useState)(!1),[A,j]=(0,_.useState)(C&&na[C]?C:`workspaces`),[M,N]=(0,_.useState)(``),P=na[A]||na.workspaces;function F(e){j(e),N(``),v&&y(),e===`home`&&(d||u)()}function I(){v&&y()}async function ee(e){e.preventDefault();let t=E.trim();if(t&&!O){k(!0);try{await o(t),D(``),T(!1)}finally{k(!1)}}}return(0,H.jsxs)(`aside`,{className:`gv2-sidebar${v?` is-collapsed`:``}`,"aria-label":`Navigation principale`,children:[(0,H.jsxs)(`nav`,{className:`gv2-rail`,"aria-label":`Navigation globale`,children:[(0,H.jsx)(`button`,{type:`button`,className:`gv2-rail-brand`,onClick:I,"aria-label":`Ouvrir le menu Gabriel`,children:(0,H.jsx)(Ui,{size:18})}),(0,H.jsx)(`div`,{className:`gv2-rail-items`,children:ta.map(e=>(0,H.jsx)(ra,{item:e,active:A===e.id,onClick:()=>F(e.id)},e.id))}),(0,H.jsxs)(`div`,{className:`gv2-rail-bottom`,children:[(0,H.jsx)(`button`,{type:`button`,className:`gv2-rail-tarifs${r===`tarifs`?` is-active`:``}`,title:`Voir les tarifs`,"aria-label":`Voir les tarifs`,"aria-pressed":r===`tarifs`,onClick:()=>h(`tarifs`),children:(0,H.jsx)(U,{name:`coin`,size:17})}),(0,H.jsx)(`button`,{type:`button`,className:`gv2-rail-user`,title:g?.name||g?.email||`Votre compte`,"aria-label":`Votre compte`,onClick:()=>F(`settings`),children:(0,H.jsx)(U,{name:`settings`,size:17})})]})]}),(0,H.jsx)(`button`,{type:`button`,className:`gv2-sidebar-toggle${v?` is-collapsed`:``}`,onClick:y,"aria-label":v?`Agrandir le menu`:`Réduire le menu`,title:v?`Agrandir le menu`:`Réduire le menu`,children:(0,H.jsx)(U,{name:`panelLeft`,size:18})}),!v&&(0,H.jsxs)(`section`,{className:`gv2-nav-detail`,"aria-label":P.title,children:[(0,H.jsxs)(`header`,{className:`gv2-nav-detail-header`,children:[(0,H.jsxs)(`div`,{children:[(0,H.jsx)(`p`,{children:P.eyebrow}),(0,H.jsx)(`h2`,{children:P.title})]}),(0,H.jsx)(`div`,{className:`gv2-nav-shortcuts`,"aria-label":`Sections du menu`,children:ta.map(e=>(0,H.jsx)(ra,{item:e,active:A===e.id,onClick:()=>F(e.id)},e.id))})]}),(0,H.jsxs)(`label`,{className:`gv2-nav-search`,children:[(0,H.jsx)(U,{name:`search`,size:15}),(0,H.jsx)(`input`,{value:M,onChange:e=>N(e.target.value),placeholder:P.search,"aria-label":P.search})]}),A===`home`&&(0,H.jsx)(oa,{activeWorkspace:n,activeTab:r,onStartNewConversation:u,onStartAnalysis:d||u,onSelectAgent:h,onOpenAnalysis:f}),A===`cross`&&(0,H.jsx)(fa,{query:M,onOpenCross:p||(()=>{}),onStartCross:m||d||u}),A===`analyses`&&(0,H.jsx)(da,{query:M,onOpenAnalysis:f||(()=>{}),onStartAnalysis:d||u}),A===`workspaces`&&(0,H.jsxs)(`div`,{className:`gv2-nav-content gv2-nav-content--workspaces`,children:[(0,H.jsxs)(`div`,{className:`gv2-create-wrap`,children:[(0,H.jsxs)(`button`,{className:`gv2-new-workspace`,type:`button`,onClick:()=>T(e=>!e),"aria-expanded":w,children:[(0,H.jsx)(U,{name:`plus`,size:17}),(0,H.jsx)(`span`,{children:`Nouvel espace`}),(0,H.jsx)(`kbd`,{children:`⌘ K`})]}),w&&(0,H.jsxs)(`form`,{className:`gv2-workspace-form`,onSubmit:ee,children:[(0,H.jsx)(`label`,{htmlFor:`workspace-name`,children:`Nom de l’espace`}),(0,H.jsxs)(`div`,{children:[(0,H.jsx)(`input`,{id:`workspace-name`,autoFocus:!0,value:E,onChange:e=>D(e.target.value),placeholder:`Ex. Golden Dove`,maxLength:`200`}),(0,H.jsx)(`button`,{type:`submit`,disabled:!E.trim()||O,children:O?`…`:`Créer`})]})]})]}),(0,H.jsx)(`p`,{className:`gv2-nav-section-label`,children:`VOS ESPACES`}),(0,H.jsx)(aa,{workspaces:e,activeWorkspaceId:t,query:M,onSelectWorkspace:a,onDeleteWorkspace:s,deletingWorkspaceId:c})]}),A===`library`&&(0,H.jsx)(sa,{activeWorkspace:n}),A===`team`&&(0,H.jsx)(ma,{activeTab:r,query:M,onSelectAgent:h}),A===`strategies`&&(0,H.jsx)(va,{}),A===`settings`&&(0,H.jsx)(Oa,{user:g,workspaces:e,darkMode:b,onToggleDarkMode:x,onStartGuide:S})]})]})}var Aa=[{id:`psychologue`,label:`Psychologue`,agent:Ji.psychologue,group:`entree`},{id:`stratege`,label:`Ariane`,agent:Ji.stratege,group:`prolongements`},{id:`createur`,label:`Créateur`,agent:Ji.createur,group:`prolongements`},{id:`conversation`,label:`Conversation`,icon:`message`,group:`suivi`},{id:`activity`,label:`Activité`,icon:`activity`,group:`suivi`},{id:`memory`,label:`Mémoire`,icon:`archive`,group:`suivi`}];function ja({currentTab:e,onChange:t}){return(0,H.jsx)(`nav`,{className:`gv2-tabs`,"aria-label":`Sections de l’espace de travail`,children:Aa.map((n,r)=>(0,H.jsxs)(_.Fragment,{children:[r>0&&Aa[r-1].group!==n.group&&(0,H.jsx)(`span`,{className:`gv2-tabs-divider`,"aria-hidden":`true`}),(0,H.jsxs)(`button`,{type:`button`,className:e===n.id?`is-active`:``,onClick:()=>t(n.id),"aria-current":e===n.id?`page`:void 0,title:n.label,children:[n.agent?(0,H.jsx)(`img`,{className:`gv2-tab-agent-avatar`,src:n.agent.portrait,alt:``}):(0,H.jsx)(U,{name:n.icon,size:18}),(0,H.jsx)(`span`,{children:n.label})]})]},n.id))})}var Ma=Object.fromEntries(Aa.map(e=>[e.id,e.label])),Na=`1.3.27`;function Pa(e,t,n){return Math.max(e,Math.min(t,n))}function Fa(e,t,n){return(1-n)*e+n*t}function Ia(e,t,n,r){return Fa(e,t,1-Math.exp(-n*r))}function La(e,t){return(e%t+t)%t}var Ra=class{isRunning=!1;value=0;from=0;to=0;currentTime=0;lerp;duration;easing;onUpdate;advance(e){if(!this.isRunning)return;let t=!1;if(this.duration&&this.easing){this.currentTime+=e;let n=Pa(0,this.currentTime/this.duration,1);t=n>=1;let r=t?1:this.easing(n);this.value=this.from+(this.to-this.from)*r}else this.lerp?(this.value=Ia(this.value,this.to,this.lerp*60,e),Math.round(this.value)===Math.round(this.to)&&(this.value=this.to,t=!0)):(this.value=this.to,t=!0);t&&this.stop(),this.onUpdate?.(this.value,t)}stop(){this.isRunning=!1}fromTo(e,t,{lerp:n,duration:r,easing:i,onStart:a,onUpdate:o}){this.from=this.value=e,this.to=t,this.lerp=n,this.duration=r,this.easing=i,this.currentTime=0,this.isRunning=!0,a?.(),this.onUpdate=o}};function za(e,t){let n;return function(...r){clearTimeout(n),n=setTimeout(()=>{n=void 0,e.apply(this,r)},t)}}var Ba=class{width=0;height=0;scrollHeight=0;scrollWidth=0;debouncedResize;wrapperResizeObserver;contentResizeObserver;constructor(e,t,{autoResize:n=!0,debounce:r=250}={}){this.wrapper=e,this.content=t,n&&(this.debouncedResize=za(this.resize,r),this.wrapper instanceof Window?window.addEventListener(`resize`,this.debouncedResize):(this.wrapperResizeObserver=new ResizeObserver(this.debouncedResize),this.wrapperResizeObserver.observe(this.wrapper)),this.contentResizeObserver=new ResizeObserver(this.debouncedResize),this.contentResizeObserver.observe(this.content)),this.resize()}destroy(){this.wrapperResizeObserver?.disconnect(),this.contentResizeObserver?.disconnect(),this.wrapper===window&&this.debouncedResize&&window.removeEventListener(`resize`,this.debouncedResize)}resize=()=>{this.onWrapperResize(),this.onContentResize()};onWrapperResize=()=>{this.wrapper instanceof Window?(this.width=window.innerWidth,this.height=window.innerHeight):(this.width=this.wrapper.clientWidth,this.height=this.wrapper.clientHeight)};onContentResize=()=>{this.wrapper instanceof Window?(this.scrollHeight=this.content.scrollHeight,this.scrollWidth=this.content.scrollWidth):(this.scrollHeight=this.wrapper.scrollHeight,this.scrollWidth=this.wrapper.scrollWidth)};get limit(){return{x:this.scrollWidth-this.width,y:this.scrollHeight-this.height}}},Va=class{events={};emit(e,...t){let n=this.events[e]||[];for(let e=0,r=n.length;e<r;e++)n[e]?.(...t)}on(e,t){return this.events[e]?this.events[e].push(t):this.events[e]=[t],()=>{this.events[e]=this.events[e]?.filter(e=>t!==e)}}off(e,t){this.events[e]=this.events[e]?.filter(e=>t!==e)}destroy(){this.events={}}},Ha=100/6,Ua={passive:!1};function Wa(e,t){return e===1?Ha:e===2?t:1}var Ga=class{touchStart={x:0,y:0};lastDelta={x:0,y:0};window={width:0,height:0};emitter=new Va;constructor(e,t={wheelMultiplier:1,touchMultiplier:1}){this.element=e,this.options=t,window.addEventListener(`resize`,this.onWindowResize),this.onWindowResize(),this.element.addEventListener(`wheel`,this.onWheel,Ua),this.element.addEventListener(`touchstart`,this.onTouchStart,Ua),this.element.addEventListener(`touchmove`,this.onTouchMove,Ua),this.element.addEventListener(`touchend`,this.onTouchEnd,Ua)}on(e,t){return this.emitter.on(e,t)}destroy(){this.emitter.destroy(),window.removeEventListener(`resize`,this.onWindowResize),this.element.removeEventListener(`wheel`,this.onWheel,Ua),this.element.removeEventListener(`touchstart`,this.onTouchStart,Ua),this.element.removeEventListener(`touchmove`,this.onTouchMove,Ua),this.element.removeEventListener(`touchend`,this.onTouchEnd,Ua)}onTouchStart=e=>{let{clientX:t,clientY:n}=e.targetTouches?e.targetTouches[0]:e;this.touchStart.x=t,this.touchStart.y=n,this.lastDelta={x:0,y:0},this.emitter.emit(`scroll`,{deltaX:0,deltaY:0,event:e})};onTouchMove=e=>{let{clientX:t,clientY:n}=e.targetTouches?e.targetTouches[0]:e,r=-(t-this.touchStart.x)*this.options.touchMultiplier,i=-(n-this.touchStart.y)*this.options.touchMultiplier;this.touchStart.x=t,this.touchStart.y=n,this.lastDelta={x:r,y:i},this.emitter.emit(`scroll`,{deltaX:r,deltaY:i,event:e})};onTouchEnd=e=>{this.emitter.emit(`scroll`,{deltaX:this.lastDelta.x,deltaY:this.lastDelta.y,event:e})};onWheel=e=>{let{deltaX:t,deltaY:n,deltaMode:r}=e,i=Wa(r,this.window.width),a=Wa(r,this.window.height);t*=i,n*=a,t*=this.options.wheelMultiplier,n*=this.options.wheelMultiplier,this.emitter.emit(`scroll`,{deltaX:t,deltaY:n,event:e})};onWindowResize=()=>{this.window={width:window.innerWidth,height:window.innerHeight}}},Ka=e=>Math.min(1,1.001-2**(-10*e)),qa=class{_isScrolling=!1;_isStopped=!1;_isLocked=!1;_preventNextNativeScrollEvent=!1;_resetVelocityTimeout=null;_rafId=null;_isDraggingSelection=!1;reducedMotionMediaQuery=window.matchMedia(`(prefers-reduced-motion: reduce)`);isTouching;isIos;time=0;userData={};lastVelocity=0;velocity=0;direction=0;options;targetScroll;animatedScroll;animate=new Ra;emitter=new Va;dimensions;virtualScroll;constructor({wrapper:e=window,content:t=document.documentElement,eventsTarget:n=e,smoothWheel:r=!0,syncTouch:i=!1,syncTouchLerp:a=.075,touchInertiaExponent:o=1.7,duration:s,easing:c,lerp:l=.1,infinite:u=!1,orientation:d=`vertical`,gestureOrientation:f=d===`horizontal`?`both`:`vertical`,touchMultiplier:p=1,wheelMultiplier:m=1,autoResize:h=!0,prevent:g,virtualScroll:_,overscroll:v=!0,autoRaf:y=!1,anchors:b=!1,autoToggle:x=!1,allowNestedScroll:S=!1,__experimental__naiveDimensions:C=!1,naiveDimensions:w=C,stopInertiaOnNavigate:T=!1,respectReducedMotion:E=!0}={}){window.lenisVersion=Na,window.lenis||(window.lenis={}),window.lenis.version=Na,d===`horizontal`&&(window.lenis.horizontal=!0),i===!0&&(window.lenis.touch=!0),this.isIos=/(iPad|iPhone|iPod)/g.test(navigator.userAgent),e&&e!==document.documentElement||(e=window),typeof s==`number`&&typeof c!=`function`?c=Ka:typeof c==`function`&&typeof s!=`number`&&(s=1),this.options={wrapper:e,content:t,eventsTarget:n,smoothWheel:r,syncTouch:i,syncTouchLerp:a,touchInertiaExponent:o,duration:s,easing:c,lerp:l,infinite:u,gestureOrientation:f,orientation:d,touchMultiplier:p,wheelMultiplier:m,autoResize:h,prevent:g,virtualScroll:_,overscroll:v,autoRaf:y,anchors:b,autoToggle:x,allowNestedScroll:S,naiveDimensions:w,stopInertiaOnNavigate:T,respectReducedMotion:E},this.dimensions=new Ba(e,t,{autoResize:h}),this.updateClassName(),this.targetScroll=this.animatedScroll=this.actualScroll,this.options.wrapper.addEventListener(`scroll`,this.onNativeScroll),this.options.wrapper.addEventListener(`scrollend`,this.onScrollEnd,{capture:!0}),(this.options.anchors||this.options.stopInertiaOnNavigate)&&this.options.wrapper.addEventListener(`click`,this.onClick),this.options.wrapper.addEventListener(`pointerdown`,this.onPointerDown),this.virtualScroll=new Ga(n,{touchMultiplier:p,wheelMultiplier:m}),this.virtualScroll.on(`scroll`,this.onVirtualScroll),this.options.autoToggle&&(this.checkOverflow(),this.rootElement.addEventListener(`transitionend`,this.onTransitionEnd)),this.options.autoRaf&&(this._rafId=requestAnimationFrame(this.raf))}destroy(){this.emitter.destroy(),this._resetVelocityTimeout!==null&&(clearTimeout(this._resetVelocityTimeout),this._resetVelocityTimeout=null),this.options.wrapper.removeEventListener(`scroll`,this.onNativeScroll),this.options.wrapper.removeEventListener(`scrollend`,this.onScrollEnd,{capture:!0}),this.options.wrapper.removeEventListener(`pointerdown`,this.onPointerDown),(this.options.anchors||this.options.stopInertiaOnNavigate)&&this.options.wrapper.removeEventListener(`click`,this.onClick),this.virtualScroll.destroy(),this.dimensions.destroy(),this.cleanUpClassName(),this._rafId&&cancelAnimationFrame(this._rafId)}on(e,t){return this.emitter.on(e,t)}off(e,t){return this.emitter.off(e,t)}onScrollEnd=e=>{e instanceof CustomEvent||(this.isScrolling===`smooth`||this.isScrolling===!1)&&e.stopPropagation()};dispatchScrollendEvent=()=>{this.options.wrapper.dispatchEvent(new CustomEvent(`scrollend`,{bubbles:this.options.wrapper===window,detail:{lenisScrollEnd:!0}}))};get overflow(){let e=this.isHorizontal?`overflow-x`:`overflow-y`;return getComputedStyle(this.rootElement)[e]}checkOverflow(){[`hidden`,`clip`].includes(this.overflow)?this.internalStop():this.internalStart()}onTransitionEnd=e=>{e.propertyName?.includes(`overflow`)&&e.target===this.rootElement&&this.checkOverflow()};setScroll(e){this.isHorizontal?this.options.wrapper.scrollTo({left:e,behavior:`instant`}):this.options.wrapper.scrollTo({top:e,behavior:`instant`})}onClick=e=>{let t=e.composedPath().filter(e=>e instanceof HTMLAnchorElement&&e.href).map(e=>new URL(e.href)),n=new URL(window.location.href);if(this.options.anchors){let e=t.find(e=>n.host===e.host&&n.pathname===e.pathname&&e.hash);if(e){let t=typeof this.options.anchors==`object`&&this.options.anchors?this.options.anchors:void 0,n=decodeURIComponent(e.hash);this.scrollTo(n,t);return}}this.options.stopInertiaOnNavigate&&t.some(e=>n.host===e.host&&n.pathname!==e.pathname)&&this.reset()};onPointerDown=e=>{e.button===1&&this.reset()};isTouchOnSelectionHandle(e){let t=window.getSelection();if(!t||t.isCollapsed||t.rangeCount===0)return!1;let n=e.targetTouches[0]??e.changedTouches[0];if(!n)return!1;let r=t.getRangeAt(0).getClientRects();if(r.length===0)return!1;let i=r[0],a=r[r.length-1],o=Math.hypot(n.clientX-i.left,n.clientY-i.top)<=40,s=Math.hypot(n.clientX-a.right,n.clientY-a.bottom)<=40;return o||s}onVirtualScroll=e=>{if(typeof this.options.virtualScroll==`function`&&this.options.virtualScroll(e)===!1)return;let{deltaX:t,deltaY:n,event:r}=e;if(this.emitter.emit(`virtual-scroll`,{deltaX:t,deltaY:n,event:r}),r.ctrlKey||r.lenisStopPropagation)return;let i=r.type.includes(`touch`),a=r.type.includes(`wheel`);if(i&&this.isIos&&(r.type===`touchstart`&&(this._isDraggingSelection=this.isTouchOnSelectionHandle(r)),this._isDraggingSelection)){r.type===`touchend`&&(this._isDraggingSelection=!1);return}this.isTouching=r.type===`touchstart`||r.type===`touchmove`;let o=t===0&&n===0;if(this.options.syncTouch&&i&&r.type===`touchstart`&&o&&!this.isStopped&&!this.isLocked){this.reset();return}let s=this.options.gestureOrientation===`vertical`&&n===0||this.options.gestureOrientation===`horizontal`&&t===0;if(o||s)return;let c=r.composedPath();c=c.slice(0,c.indexOf(this.rootElement));let l=this.options.prevent,u=Math.abs(t)>=Math.abs(n)?`horizontal`:`vertical`;if(c.find(e=>e instanceof HTMLElement&&(typeof l==`function`&&l?.(e)||e.hasAttribute?.(`data-lenis-prevent`)||u===`vertical`&&e.hasAttribute?.(`data-lenis-prevent-vertical`)||u===`horizontal`&&e.hasAttribute?.(`data-lenis-prevent-horizontal`)||i&&e.hasAttribute?.(`data-lenis-prevent-touch`)||a&&e.hasAttribute?.(`data-lenis-prevent-wheel`)||this.options.allowNestedScroll&&this.hasNestedScroll(e,{deltaX:t,deltaY:n}))))return;if(this.isStopped||this.isLocked){r.cancelable&&r.preventDefault();return}if(!(this.options.syncTouch&&i||this.options.smoothWheel&&a)){this.isScrolling=`native`,this.animate.stop(),r.lenisStopPropagation=!0;return}let d=n;this.options.gestureOrientation===`both`?d=Math.abs(n)>Math.abs(t)?n:t:this.options.gestureOrientation===`horizontal`&&(d=t),(!this.options.overscroll||this.options.infinite||this.options.wrapper!==window&&this.limit>0&&(this.animatedScroll>0&&this.animatedScroll<this.limit||this.animatedScroll===0&&n>0||this.animatedScroll===this.limit&&n<0))&&(r.lenisStopPropagation=!0),r.cancelable&&r.preventDefault();let f=i&&this.options.syncTouch,p=i&&r.type===`touchend`;p&&(d=Math.sign(d)*Math.abs(this.velocity)**this.options.touchInertiaExponent),this.scrollTo(this.targetScroll+d,{programmatic:!1,...f?{lerp:p?this.options.syncTouchLerp:1}:{lerp:this.options.lerp,duration:this.options.duration,easing:this.options.easing}})};resize(){this.dimensions.resize(),this.animatedScroll=this.targetScroll=this.actualScroll,this.emit()}emit(){this.emitter.emit(`scroll`,this)}onNativeScroll=()=>{if(this._resetVelocityTimeout!==null&&(clearTimeout(this._resetVelocityTimeout),this._resetVelocityTimeout=null),this._preventNextNativeScrollEvent)this._preventNextNativeScrollEvent=!1;else if(this.isScrolling===!1||this.isScrolling===`native`){let e=this.animatedScroll;this.animatedScroll=this.targetScroll=this.actualScroll,this.lastVelocity=this.velocity,this.velocity=this.animatedScroll-e,this.direction=Math.sign(this.animatedScroll-e),this.isStopped||(this.isScrolling=`native`),this.emit(),this.velocity!==0&&(this._resetVelocityTimeout=setTimeout(()=>{this.lastVelocity=this.velocity,this.velocity=0,this.isScrolling=!1,this.emit()},400))}};reset(){this.isLocked=!1,this.isScrolling=!1,this.animatedScroll=this.targetScroll=this.actualScroll,this.lastVelocity=this.velocity=0,this.animate.stop()}start(){this.isStopped&&(this.options.autoToggle?this.rootElement.style.removeProperty(`overflow`):this.internalStart())}internalStart(){this.isStopped&&(this.reset(),this.isStopped=!1,this.emit())}stop(){this.isStopped||(this.options.autoToggle?this.rootElement.style.setProperty(`overflow`,`clip`):this.internalStop())}internalStop(){this.isStopped||(this.reset(),this.isStopped=!0,this.emit())}raf=e=>{let t=e-(this.time||e);this.time=e,this.animate.advance(t*.001),this.options.autoRaf&&(this._rafId=requestAnimationFrame(this.raf))};scrollTo(e,{offset:t=0,immediate:n=!1,lock:r=!1,programmatic:i=!0,lerp:a=i?this.options.lerp:void 0,duration:o=i?this.options.duration:void 0,easing:s=i?this.options.easing:void 0,onStart:c,onComplete:l,force:u=!1,userData:d}={}){if(this.prefersReducedMotion&&(i?n=!0:(a=1,o=void 0,s=void 0)),(this.isStopped||this.isLocked)&&!u)return;let f=e,p=t;if(typeof f==`string`&&[`top`,`left`,`start`,`#`].includes(f))f=0;else if(typeof f==`string`&&[`bottom`,`right`,`end`].includes(f))f=this.limit;else{let e=null;if(typeof f==`string`?(e=f.startsWith(`#`)?document.getElementById(f.slice(1)):document.querySelector(f),e||(f===`#top`?f=0:console.warn(`Lenis: Target not found`,f))):f instanceof Element&&(e=f),e){if(this.options.wrapper!==window){let e=this.rootElement.getBoundingClientRect();p-=this.isHorizontal?e.left:e.top}let t=e.getBoundingClientRect(),n=getComputedStyle(e),r=this.isHorizontal?Number.parseFloat(n.scrollMarginLeft):Number.parseFloat(n.scrollMarginTop),i=getComputedStyle(this.rootElement),a=this.isHorizontal?Number.parseFloat(i.scrollPaddingLeft):Number.parseFloat(i.scrollPaddingTop);f=(this.isHorizontal?t.left:t.top)+this.animatedScroll-(Number.isNaN(r)?0:r)-(Number.isNaN(a)?0:a)}}if(typeof f==`number`){if(f+=p,this.options.infinite){if(i){this.targetScroll=this.animatedScroll=this.scroll;let e=f-this.animatedScroll;e>this.limit/2?f-=this.limit:e<-this.limit/2&&(f+=this.limit)}}else f=Pa(0,f,this.limit);f===this.targetScroll?(c?.(this),l?.(this)):(this.userData=d??{},n?(this.animatedScroll=this.targetScroll=f,this.setScroll(this.scroll),this.reset(),this.preventNextNativeScrollEvent(),this.emit(),l?.(this),this.userData={},requestAnimationFrame(()=>{this.dispatchScrollendEvent()})):(i||(this.targetScroll=f),typeof o==`number`&&typeof s!=`function`?s=Ka:typeof s==`function`&&typeof o!=`number`&&(o=1),this.animate.fromTo(this.animatedScroll,f,{duration:o,easing:s,lerp:a,onStart:()=>{r&&(this.isLocked=!0),this.isScrolling=`smooth`,c?.(this)},onUpdate:(e,t)=>{this.isScrolling=`smooth`,this.lastVelocity=this.velocity,this.velocity=e-this.animatedScroll,this.direction=Math.sign(this.velocity),this.animatedScroll=e,this.setScroll(this.scroll),i&&(this.targetScroll=e),t||this.emit(),t&&(this.reset(),this.emit(),l?.(this),this.userData={},requestAnimationFrame(()=>{this.dispatchScrollendEvent()}),this.preventNextNativeScrollEvent())}})))}}preventNextNativeScrollEvent(){this._preventNextNativeScrollEvent=!0,requestAnimationFrame(()=>{this._preventNextNativeScrollEvent=!1})}hasNestedScroll(e,{deltaX:t,deltaY:n}){let r=Date.now();e._lenis||={};let i=e._lenis,a,o,s,c,l,u,d,f,p,m;if(r-(i.time??0)>2e3){i.time=Date.now();let t=window.getComputedStyle(e);if(i.computedStyle=t,a=[`auto`,`overlay`,`scroll`].includes(t.overflowX),o=[`auto`,`overlay`,`scroll`].includes(t.overflowY),l=[`auto`].includes(t.overscrollBehaviorX),u=[`auto`].includes(t.overscrollBehaviorY),i.hasOverflowX=a,i.hasOverflowY=o,!(a||o))return!1;d=e.scrollWidth,f=e.scrollHeight,p=e.clientWidth,m=e.clientHeight,s=d>p,c=f>m,i.isScrollableX=s,i.isScrollableY=c,i.scrollWidth=d,i.scrollHeight=f,i.clientWidth=p,i.clientHeight=m,i.hasOverscrollBehaviorX=l,i.hasOverscrollBehaviorY=u}else s=i.isScrollableX,c=i.isScrollableY,a=i.hasOverflowX,o=i.hasOverflowY,d=i.scrollWidth,f=i.scrollHeight,p=i.clientWidth,m=i.clientHeight,l=i.hasOverscrollBehaviorX,u=i.hasOverscrollBehaviorY;if(!(a&&s||o&&c))return!1;let h=Math.abs(t)>=Math.abs(n)?`horizontal`:`vertical`,g,_,v,y,b,x;if(h===`horizontal`)g=Math.round(e.scrollLeft),_=d-p,v=t,y=a,b=s,x=l;else if(h===`vertical`)g=Math.round(e.scrollTop),_=f-m,v=n,y=o,b=c,x=u;else return!1;return!x&&(g>=_||g<=0)||(v>0?g<_:g>0)&&y&&b}get rootElement(){return this.options.wrapper===window?document.documentElement:this.options.wrapper}get limit(){return this.options.naiveDimensions?this.isHorizontal?this.rootElement.scrollWidth-this.rootElement.clientWidth:this.rootElement.scrollHeight-this.rootElement.clientHeight:this.dimensions.limit[this.isHorizontal?`x`:`y`]}get isHorizontal(){return this.options.orientation===`horizontal`}get actualScroll(){let e=this.options.wrapper;return this.isHorizontal?e.scrollX??e.scrollLeft:e.scrollY??e.scrollTop}get scroll(){return this.options.infinite?La(this.animatedScroll,this.limit):this.animatedScroll}get progress(){return this.limit===0?1:this.scroll/this.limit}get isScrolling(){return this._isScrolling}set isScrolling(e){this._isScrolling!==e&&(this._isScrolling=e,this.updateClassName())}get isStopped(){return this._isStopped}set isStopped(e){this._isStopped!==e&&(this._isStopped=e,this.updateClassName())}get isLocked(){return this._isLocked}set isLocked(e){this._isLocked!==e&&(this._isLocked=e,this.updateClassName())}get isSmooth(){return this.isScrolling===`smooth`}get prefersReducedMotion(){return this.options.respectReducedMotion&&this.reducedMotionMediaQuery.matches}get className(){let e=`lenis`;return this.options.autoToggle&&(e+=` lenis-autoToggle`),this.isStopped&&(e+=` lenis-stopped`),this.isLocked&&(e+=` lenis-locked`),this.isScrolling&&(e+=` lenis-scrolling`),this.isScrolling===`smooth`&&(e+=` lenis-smooth`),e}updateClassName(){this.cleanUpClassName(),this.className.split(` `).forEach(e=>{this.rootElement.classList.add(e)})}cleanUpClassName(){for(let e of Array.from(this.rootElement.classList))(e===`lenis`||e.startsWith(`lenis-`))&&this.rootElement.classList.remove(e)}};function Ja(e,t){return String(e||``).split(/(\*\*[^*\n]+?\*\*|__[^_\n]+?__|`[^`\n]+?`|\*[^*\n]+?\*|_[^_\n]+?_)/g).map((e,n)=>{let r=`${t}-${n}`;return/^\*\*[^*]+\*\*$/.test(e)||/^__[^_]+__$/.test(e)?(0,H.jsx)(`strong`,{children:e.slice(2,-2)},r):/^`[^`]+`$/.test(e)?(0,H.jsx)(`code`,{children:e.slice(1,-1)},r):/^\*[^*]+\*$/.test(e)||/^_[^_]+_$/.test(e)?(0,H.jsx)(`em`,{children:e.slice(1,-1)},r):e})}function Ya(e){let t=[],n=/(?:^|\s)(\d+)[.)]\s+([\s\S]*?)(?=(?:\s+\d+[.)]\s+)|$)/g,r;for(;r=n.exec(String(e||``));)t.push(r[2].trim());return t.length>1?t:null}function Xa(e){let t=String(e||``).trim().replace(/^-\s+/,``).split(/\s+-\s+/).map(e=>e.trim()).filter(Boolean);return t.length>1?t:null}function Za(e){let t=String(e||``).trim().toLowerCase();return t.length<=100&&/^(?:ce que|votre situation|ma lecture|les constats|les éléments|ce qui|à éclaircir|pour avancer|prochaine étape|recommandation|en pratique|point d['’]attention|points? à|notre lecture)/.test(t)}function Qa(e){let t=String(e||``).toLowerCase();return/ne sais pas|éclaircir|question|manque|à préciser/.test(t)?`questions`:/ce que je lis|ma lecture|analyse|ce qui/.test(t)?`insight`:/situation|constat|élément|observ/.test(t)?`facts`:`default`}function $a(e){return{facts:`Les faits`,insight:`Lecture de Gabriel`,questions:`À éclaircir`,default:`Point de décision`}[e]||`Point de décision`}function eo(e,t,n=0){let r=String(e||``).trim(),i=r.match(/^(.{3,100}?)\s*:\s+([\s\S]+)$/);if(i&&Za(i[1])){let e=Ya(i[2]),r=Xa(i[2]),a=e||r,o=Qa(i[1]);return(0,H.jsxs)(`section`,{className:`gv2-message-section gv2-message-section--${o}`,children:[(0,H.jsxs)(`header`,{className:`gv2-message-section-header`,children:[(0,H.jsx)(`span`,{className:`gv2-message-section-index`,"aria-hidden":`true`,children:String(n).padStart(2,`0`)}),(0,H.jsxs)(`div`,{children:[(0,H.jsx)(`small`,{children:$a(o)}),(0,H.jsx)(`h3`,{children:Ja(i[1],`section-${t}`)})]})]}),(0,H.jsx)(`div`,{className:`gv2-message-section-content`,children:a?(0,H.jsx)(`ol`,{className:`gv2-message-list${e?` gv2-message-list--ordered`:``}`,children:a.map((e,n)=>(0,H.jsx)(`li`,{children:Ja(e,`section-${t}-${n}`)},n))}):(0,H.jsx)(`p`,{children:Ja(i[2],`section-copy-${t}`)})})]},t)}return(0,H.jsx)(`p`,{className:t===0?`gv2-message-opening`:``,children:Ja(r,`paragraph-${t}`)},t)}function to(e,t=!1){let n=String(e||``).trim().split(/\n{2,}/).filter(Boolean),r=0;return n.map((e,n)=>{let i=e.split(`
`).map(e=>e.trim()).filter(Boolean),a=i.length===1&&i[0].match(/^(#{1,3})\s+(.+)/),o=i.length>1&&i.every(e=>/^(?:[-–•])\s+/.test(e)),s=i.length>1&&i.every(e=>/^\d+[.)]\s+/.test(e)),c=i.length>0&&i.every(e=>/^>\s?/.test(e));if(i.length===1&&/^(?:---+|\*\*\*+|___+)$/.test(i[0]))return(0,H.jsx)(`hr`,{},n);if(a){let e=a[1].length===1?`h2`:`h3`;return(0,H.jsx)(e,{children:Ja(a[2],`heading-${n}`)},n)}if(c)return(0,H.jsx)(`blockquote`,{children:(0,H.jsx)(`p`,{children:Ja(i.map(e=>e.replace(/^>\s?/,``)).join(` `),`quote-${n}`)})},n);if(o)return(0,H.jsx)(`ul`,{className:`gv2-message-list`,children:i.map((e,t)=>(0,H.jsx)(`li`,{children:Ja(e.replace(/^(?:[-–•])\s+/,``),`bullet-${n}-${t}`)},t))},n);if(s)return(0,H.jsx)(`ol`,{className:`gv2-message-list gv2-message-list--ordered`,children:i.map((e,t)=>(0,H.jsx)(`li`,{children:Ja(e.replace(/^\d+[.)]\s+/,``),`ordered-${n}-${t}`)},t))},n);let l=i.join(` `),u=l.match(/^(.{3,100}?)\s*:\s+([\s\S]+)$/);return t&&u&&Za(u[1])&&(r+=1),t?eo(l,n,r):(0,H.jsx)(`p`,{children:Ja(l,`paragraph-${n}`)},n)})}function no({mission:e,itemId:t}){return(0,H.jsxs)(`div`,{className:`gv2-event-card`,"data-gv2-message-id":t,children:[(0,H.jsx)(`div`,{className:`gv2-event-mark`,children:(0,H.jsx)(U,{name:`sparkle`,size:18})}),(0,H.jsxs)(`div`,{children:[(0,H.jsx)(`span`,{children:`Gabriel a défini la prochaine étape`}),(0,H.jsx)(`strong`,{children:e.title}),e.objective&&(0,H.jsx)(`p`,{children:e.objective})]})]})}function ro({content:e}){let[t,n]=(0,_.useState)(!1);async function r(){try{await navigator.clipboard.writeText(e)}catch{let t=document.createElement(`textarea`);t.value=e,t.style.position=`fixed`,t.style.opacity=`0`,document.body.append(t),t.select(),document.execCommand(`copy`),t.remove()}n(!0),window.setTimeout(()=>n(!1),1300)}function i(){let t=new Blob([e],{type:`text/plain;charset=utf-8`}),n=URL.createObjectURL(t),r=document.createElement(`a`);r.href=n,r.download=`reponse-gabriel-${new Date().toISOString().slice(0,10)}.txt`,document.body.append(r),r.click(),r.remove(),window.setTimeout(()=>URL.revokeObjectURL(n),0)}return(0,H.jsxs)(`div`,{className:`gv2-message-actions`,"aria-label":`Actions de la réponse`,children:[(0,H.jsxs)(`button`,{type:`button`,onClick:r,children:[(0,H.jsx)(U,{name:`copy`,size:18}),(0,H.jsx)(`span`,{children:t?`Copié`:`Copier`})]}),(0,H.jsxs)(`button`,{type:`button`,onClick:i,children:[(0,H.jsx)(U,{name:`download`,size:18}),(0,H.jsx)(`span`,{children:`Télécharger`})]})]})}var io=[{label:`Analyser une audience`,text:`Je souhaite analyser mon audience afin de mieux comprendre ses attentes, ses motivations et ses freins.`,icon:`knowledge`},{label:`Clarifier une offre`,text:`Aide-moi à clarifier mon offre, sa promesse et ce qui la différencie.`,icon:`sparkle`},{label:`Préparer une stratégie`,text:`Je veux construire une stratégie claire à partir de mon contexte business.`,icon:`activity`},{label:`Créer un contenu`,text:`Je veux préparer un contenu utile et aligné sur mon audience.`,icon:`briefcase`}];function ao({items:e,firstName:t,isSubmitting:n,compact:r=!1,landing:i=!1}){let a=(0,_.useRef)(null),o=(0,_.useRef)(null),s=(0,_.useRef)(null),c=(0,_.useRef)(new Set),l=e.some(e=>e.role===`user`);(0,_.useEffect)(()=>{let e=o.current,t=window.matchMedia(`(prefers-reduced-motion: reduce)`).matches;if(!e||t)return;let n=new qa({wrapper:e,content:e.firstElementChild,duration:1.05,smoothWheel:!0,syncTouch:!1});s.current=n;let r,i=e=>{n.raf(e),r=window.requestAnimationFrame(i)};return r=window.requestAnimationFrame(i),()=>{window.cancelAnimationFrame(r),n.destroy(),s.current=null}},[]),(0,_.useEffect)(()=>{let e=a.current;e&&(s.current?s.current.scrollTo(e,{duration:n?.35:.65}):e.scrollIntoView({block:`end`,behavior:`smooth`}))},[e,n]),(0,_.useLayoutEffect)(()=>{if(window.matchMedia(`(prefers-reduced-motion: reduce)`).matches||!o.current)return;let e=Array.from(o.current.querySelectorAll(`[data-gv2-message-id]`)).filter(e=>!c.current.has(e.dataset.gv2MessageId)&&(c.current.add(e.dataset.gv2MessageId),!0));if(!e.length)return;let t=zi.fromTo(e,{autoAlpha:0,y:10},{autoAlpha:1,y:0,duration:.38,ease:`power2.out`,stagger:.05,overwrite:`auto`});return()=>t.kill()},[e]);let u=i&&!r;return(0,H.jsx)(`div`,{className:`gv2-conversation-scroll${r?` is-compact`:``}${u?` is-landing`:``}`,ref:o,children:(0,H.jsxs)(`div`,{className:`gv2-conversation${r?` is-compact`:``}${l?` has-started`:``}${u?` is-landing`:``}`,children:[u&&(0,H.jsxs)(`header`,{className:`gv2-conversation-landing`,children:[(0,H.jsx)(`h1`,{children:`Que puis-je faire pour vous\xA0?`}),(0,H.jsx)(`span`,{children:`Décrivez votre besoin. Gabriel clarifie la demande et mobilise les bons experts au bon moment.`})]}),!u&&!r&&!l&&(0,H.jsxs)(`header`,{className:`gv2-conversation-welcome`,children:[(0,H.jsxs)(`h1`,{children:[`Bonjour `,t,`,`]}),(0,H.jsx)(`p`,{children:`Que souhaites-tu accomplir aujourd’hui\xA0?`})]}),!u&&e.map(e=>{if(e.role===`event`&&e.mission)return(0,H.jsx)(no,{mission:e.mission,itemId:e.id},e.id);let t=e.role===`assistant`&&String(e.content||``).length>460;return(0,H.jsxs)(`article`,{"data-gv2-message-id":e.id,className:`gv2-message gv2-message--${e.role}${t?` is-editorial`:``}`,children:[(0,H.jsx)(`div`,{className:`gv2-message-avatar`,children:e.role===`assistant`?`G`:e.role===`error`?`!`:`V`}),(0,H.jsxs)(`div`,{className:`gv2-message-body`,children:[(0,H.jsxs)(`div`,{className:`gv2-message-meta`,children:[(0,H.jsx)(`strong`,{children:e.role===`assistant`||e.role===`error`?`Gabriel`:`Vous`}),(0,H.jsx)(`time`,{children:e.createdAt})]}),to(e.content,e.role===`assistant`),e.role===`assistant`&&(0,H.jsx)(ro,{content:e.content})]})]},e.id)}),n&&(0,H.jsxs)(`article`,{className:`gv2-message gv2-message--assistant gv2-message--typing`,children:[(0,H.jsx)(`div`,{className:`gv2-message-avatar`,children:`G`}),(0,H.jsxs)(`div`,{className:`gv2-typing`,children:[(0,H.jsx)(`span`,{}),(0,H.jsx)(`span`,{}),(0,H.jsx)(`span`,{})]})]}),(0,H.jsx)(`div`,{ref:a})]})})}function oo({onSend:e,disabled:t,compact:n=!1,landing:r=!1}){let[i,a]=(0,_.useState)(``),[o,s]=(0,_.useState)([]),[c,l]=(0,_.useState)(!0),[u,d]=(0,_.useState)(!1),[f,p]=(0,_.useState)(!1),[m,h]=(0,_.useState)(!1),[g,v]=(0,_.useState)(``),y=(0,_.useRef)(null),b=(0,_.useRef)(null),x=(0,_.useRef)(null),S=(0,_.useRef)(``),C=(0,_.useRef)(``),w=(0,_.useRef)(!1),T=(0,_.useRef)(null),E=(0,_.useRef)([]),D=(0,_.useRef)(null);(0,_.useEffect)(()=>{r&&l(!0)},[r]),(0,_.useEffect)(()=>()=>{let e=x.current;if(e)try{e.abort()}catch{}let t=T.current;t&&t.state!==`inactive`&&t.stop(),D.current?.getTracks().forEach(e=>e.stop())},[]),(0,_.useLayoutEffect)(()=>{let e=b.current;if(!e)return;e.style.height=`auto`;let t=n?112:r?220:180;e.style.height=`${Math.min(e.scrollHeight,t)}px`,e.style.overflowY=e.scrollHeight>t?`auto`:`hidden`},[n,i,r]);async function O(n){n.preventDefault();let r=i.trim()||(o.length?`J’ai joint : ${o.map(e=>e.name).join(`, `)}`:``);r&&!t&&await e(r,o)&&(a(``),s([]))}function k(e){A(e.target.files),e.target.value=``}function A(e){let t=Array.from(e||[]);t.length&&s(e=>{let n=new Set(e.map(e=>`${e.name}-${e.size}-${e.lastModified}`));return[...e,...t.filter(e=>{let t=`${e.name}-${e.size}-${e.lastModified}`;return!n.has(t)&&(n.add(t),!0)})].slice(0,1)})}function j(e,t){let n=String(t||``).trim();return n?`${e}${e&&!/\s$/.test(e)?` `:``}${n}`:e}function M(e){let t=new e;S.current=i,C.current=``,w.current=!1,t.lang=`fr-FR`,t.continuous=!0,t.interimResults=!0,t.maxAlternatives=1,t.onstart=()=>h(!0),t.onresult=e=>{let t=``;for(let n=e.resultIndex;n<e.results.length;n+=1){let r=e.results[n]?.[0]?.transcript||``;e.results[n].isFinal?C.current+=`${r} `:t+=r}let n=`${C.current}${t}`.trim();n&&(w.current=!0,a(j(S.current,n)))},t.onerror=e=>{let t={"not-allowed":`Autorisez le microphone dans votre navigateur pour utiliser la dictée.`,"service-not-allowed":`La reconnaissance vocale est bloquée par votre navigateur.`,"audio-capture":`Aucun microphone n’a été détecté.`,network:`La reconnaissance vocale nécessite une connexion internet.`}[e.error]||(e.error===`no-speech`?`Je ne vous ai pas entendu. Réessayez en parlant un peu plus près du micro.`:`La dictée a été interrompue. Réessayez dans un instant.`);v(t)},t.onend=()=>{x.current===t&&(x.current=null),h(!1),w.current||v(e=>e||`Je ne vous ai pas entendu. Vérifiez votre microphone puis réessayez.`),window.requestAnimationFrame(()=>b.current?.focus())},x.current=t;try{t.start()}catch{x.current=null,v(`La dictée ne peut pas démarrer. Réessayez dans un instant.`)}}async function N(){if(!navigator.mediaDevices?.getUserMedia||!window.MediaRecorder)v(`La dictée n’est pas disponible dans ce navigateur. Utilisez une version récente de Chrome, Edge ou Safari.`);else try{let e=await navigator.mediaDevices.getUserMedia({audio:!0}),t=[`audio/webm;codecs=opus`,`audio/webm`,`audio/mp4`].find(e=>window.MediaRecorder.isTypeSupported?.(e)),n=t?new MediaRecorder(e,{mimeType:t}):new MediaRecorder(e);D.current=e,E.current=[],n.ondataavailable=e=>{e.data?.size&&E.current.push(e.data)},n.onerror=()=>{h(!1),v(`La dictée a été interrompue. Réessayez dans un instant.`)},n.onstop=async()=>{let e=n.mimeType||`audio/webm`,t=new Blob(E.current,{type:e});if(D.current?.getTracks().forEach(e=>e.stop()),D.current=null,T.current=null,h(!1),!t.size)return;let r=new FormData;r.append(`audio`,t,`dictee-gabriel.${e.includes(`mp4`)?`m4a`:`webm`}`);try{let e=await K(`/voice/transcribe`,{method:`POST`,body:r});if(W(e)){window.location.assign(`/login`);return}let t=await G(e,`Le service de dictée`);if(!e.ok||!t?.text)throw Error(e.status===503?`La transcription serveur n’est pas disponible. Essayez depuis Chrome pour utiliser la dictée intégrée.`:t?.error||`La transcription est indisponible.`);a(e=>`${e}${e&&!/\s$/.test(e)?` `:``}${String(t.text).trim()}`),window.requestAnimationFrame(()=>b.current?.focus())}catch(e){v(e.message||`La transcription est indisponible.`)}},T.current=n,n.start(250),h(!0)}catch(e){v(e?.name===`NotAllowedError`?`Autorisez le microphone dans votre navigateur pour utiliser la dictée.`:`Le microphone est indisponible. Vérifiez qu’il est connecté puis réessayez.`)}}function P(){if(t)return;v(``);let e=x.current;if(e){try{e.stop()}catch{}return}let n=T.current;if(n&&n.state!==`inactive`){n.stop();return}let r=window.SpeechRecognition||window.webkitSpeechRecognition;r?M(r):N()}function F(e){a(t=>t||e),d(!1),window.requestAnimationFrame(()=>b.current?.focus())}function I(e){e.preventDefault(),p(!1),A(e.dataTransfer?.files)}return(0,H.jsxs)(`form`,{className:`gv2-composer${n?` is-compact`:``}${r?` is-landing`:``}${u?` is-tools-open`:``}${f?` is-dragging-files`:``}${m?` is-recording`:``}`,onSubmit:O,onDragOver:e=>{e.preventDefault(),p(!0)},onDragLeave:e=>{e.currentTarget===e.target&&p(!1)},onDrop:I,children:[o.length>0&&(0,H.jsx)(`div`,{className:`gv2-attachment-row`,children:o.map(e=>(0,H.jsxs)(`span`,{children:[(0,H.jsx)(U,{name:`paperclip`,size:13}),e.name,(0,H.jsx)(`button`,{type:`button`,onClick:()=>s(t=>t.filter(t=>t!==e)),children:(0,H.jsx)(U,{name:`close`,size:13})})]},`${e.name}-${e.size}`))}),(0,H.jsx)(`textarea`,{ref:b,value:i,rows:`1`,disabled:t,onChange:e=>a(e.target.value),onKeyDown:e=>{e.key===`Escape`&&d(!1),e.key===`Enter`&&!e.shiftKey&&(e.preventDefault(),O(e))},placeholder:r?`Décrivez ce que vous souhaitez accomplir…`:`Écris ton message à Gabriel…`,"aria-label":`Message à Gabriel`}),(0,H.jsxs)(`div`,{className:`gv2-composer-actions`,children:[(0,H.jsxs)(`div`,{className:`gv2-composer-toolbox`,children:[(0,H.jsx)(`button`,{className:`gv2-circle-button`,type:`button`,onClick:()=>d(e=>!e),title:`Ajouter du contexte`,"aria-label":`Ajouter du contexte`,"aria-expanded":u,"aria-haspopup":`menu`,children:(0,H.jsx)(U,{name:`plus`,size:20})}),u&&(0,H.jsxs)(`div`,{className:`gv2-composer-tools`,role:`menu`,"aria-label":`Ajouter au message`,children:[(0,H.jsxs)(`button`,{type:`button`,role:`menuitem`,onClick:()=>{d(!1),y.current?.click()},children:[(0,H.jsx)(U,{name:`paperclip`,size:16}),(0,H.jsxs)(`span`,{children:[(0,H.jsx)(`strong`,{children:`Importer des commentaires`}),(0,H.jsx)(`small`,{children:`CSV, Excel, JSON ou TXT`})]})]}),(0,H.jsxs)(`button`,{type:`button`,role:`menuitem`,onClick:()=>F(`Voici le lien à analyser : `),children:[(0,H.jsx)(U,{name:`link`,size:16}),(0,H.jsxs)(`span`,{children:[(0,H.jsx)(`strong`,{children:`Coller un lien`}),(0,H.jsx)(`small`,{children:`Page, vidéo ou ressource`})]})]}),(0,H.jsxs)(`button`,{type:`button`,role:`menuitem`,onClick:()=>F(`Note : `),children:[(0,H.jsx)(U,{name:`file`,size:16}),(0,H.jsxs)(`span`,{children:[(0,H.jsx)(`strong`,{children:`Ajouter une note`}),(0,H.jsx)(`small`,{children:`Conserver une idée dans le fil`})]})]})]})]}),(0,H.jsx)(`input`,{ref:y,type:`file`,accept:`.csv,.xlsx,.xls,.json,.txt`,hidden:!0,onChange:k}),(0,H.jsxs)(`button`,{className:`gv2-action-chip gv2-file-chip`,type:`button`,onClick:()=>y.current?.click(),children:[(0,H.jsx)(U,{name:`paperclip`,size:16}),(0,H.jsx)(`span`,{children:`Importer des commentaires`})]}),(0,H.jsxs)(`button`,{className:`gv2-action-chip`,type:`button`,onClick:()=>F(`Voici le lien à analyser : `),children:[(0,H.jsx)(U,{name:`link`,size:16}),(0,H.jsx)(`span`,{children:`Coller un lien`})]}),(0,H.jsxs)(`button`,{className:`gv2-action-chip gv2-note-chip`,type:`button`,onClick:()=>F(`Note : `),children:[(0,H.jsx)(U,{name:`file`,size:16}),(0,H.jsx)(`span`,{children:`Enregistrer une note`})]}),(0,H.jsxs)(`button`,{className:`gv2-action-chip gv2-voice-chip${m?` is-recording`:``}`,type:`button`,onClick:P,"aria-pressed":m,title:m?`Terminer la dictée`:`Dicter un message`,children:[(0,H.jsx)(U,{name:`mic`,size:16}),(0,H.jsx)(`span`,{children:m?`Terminer`:`Dictée`})]}),(0,H.jsx)(`button`,{className:`gv2-send-button`,type:`submit`,disabled:t||!i.trim()&&!o.length,"aria-label":`Envoyer`,children:(0,H.jsx)(U,{name:`send`,size:20})})]}),m&&(0,H.jsxs)(`div`,{className:`gv2-composer-voice-feedback`,role:`status`,children:[(0,H.jsxs)(`p`,{className:`gv2-composer-voice-status`,children:[(0,H.jsx)(`i`,{}),`Gabriel vous écoute\xA0: votre texte apparaît en direct.`]}),(0,H.jsx)(`div`,{className:`gv2-composer-voice-wave`,"aria-hidden":`true`,children:Array.from({length:15},(e,t)=>(0,H.jsx)(`span`,{style:{"--gv2-wave-delay":`${t*-.085}s`,"--gv2-wave-height":`${34+t*29%57}%`}},t))})]}),g&&(0,H.jsx)(`p`,{className:`gv2-composer-voice-error`,role:`status`,children:g}),r&&c&&(0,H.jsxs)(`div`,{className:`gv2-landing-prompts`,"aria-label":`Idées pour commencer`,children:[(0,H.jsxs)(`div`,{className:`gv2-landing-prompts-head`,children:[(0,H.jsx)(`span`,{children:`Quelques points de départ, si utile`}),(0,H.jsx)(`button`,{type:`button`,onClick:()=>l(!1),children:`Masquer`})]}),(0,H.jsx)(`div`,{children:io.map(e=>(0,H.jsxs)(`button`,{type:`button`,onClick:()=>{a(e.text),window.requestAnimationFrame(()=>b.current?.focus())},children:[(0,H.jsx)(U,{name:e.icon,size:15}),(0,H.jsx)(`span`,{children:e.label})]},e.label))})]})]})}var so=[`violet`,`green`,`blue`,`orange`],co={pending:`En attente`,selected:`Prêt`,running:`En cours`,completed:`Terminé`,failed:`En erreur`},lo={awaiting_input:`Informations requises`,ready:`Prête à démarrer`,running:`En cours`,completed:`Terminée`,failed:`À relancer`};function uo(){return(0,H.jsxs)(`div`,{className:`gv2-panel-empty`,children:[(0,H.jsx)(`div`,{className:`gv2-panel-empty-icon`,children:(0,H.jsx)(U,{name:`sparkle`,size:23})}),(0,H.jsx)(`h2`,{children:`Aucune mission active`}),(0,H.jsx)(`p`,{children:`Expliquez à Gabriel ce que vous souhaitez accomplir. Il déterminera la mission et mobilisera les experts utiles.`})]})}function fo({label:e,done:t,current:n,unavailable:r}){return(0,H.jsxs)(`div`,{className:`gv2-context-journey-row${n?` is-current`:``}${t?` is-done`:``}`,children:[(0,H.jsx)(`span`,{className:`gv2-context-journey-state`,children:t?(0,H.jsx)(U,{name:`check`,size:13}):(0,H.jsx)(`i`,{})}),(0,H.jsx)(`span`,{children:e}),(0,H.jsx)(`small`,{children:t?`Disponible`:n?`En cours`:r?`À lancer`:`En attente`})]})}function po({workspace:e,onUpdateWorkspace:t}){let n=e?.objective||``,[r,i]=(0,_.useState)(!1),[a,o]=(0,_.useState)(n);if(!e)return(0,H.jsx)(`p`,{className:`gv2-business-objective`,children:`Ajoutez votre contexte dans la conversation : Gabriel l’utilisera pour guider les trois spécialistes.`});async function s(){i(!1);let r=a.trim().slice(0,500);r!==n&&await t?.(e.folder_id,{objective:r})}return r?(0,H.jsx)(`textarea`,{className:`gv2-business-objective gv2-business-objective--edit`,value:a,autoFocus:!0,rows:3,maxLength:500,"aria-label":`Objectif de ce dossier`,placeholder:`Ce que vous cherchez à accomplir dans ce dossier.`,onChange:e=>o(e.target.value),onBlur:s,onKeyDown:e=>{e.key===`Escape`&&(o(n),i(!1)),e.key===`Enter`&&!e.shiftKey&&(e.preventDefault(),e.currentTarget.blur())}}):(0,H.jsx)(`button`,{type:`button`,className:`gv2-business-objective gv2-business-objective--button${n?``:` is-empty`}`,onClick:()=>{o(n),i(!0)},title:`Modifier l’objectif de ce dossier`,children:n||`Quel est votre objectif ici ? Gabriel s’en sert dès la première réponse.`})}function mo({workspace:e,activeAgent:t,onUpdateWorkspace:n}){let r=!!e?.analysis_id,i=!!e?.strategy_id,a=!!e?.creator_output_id,o=t?.id;return(0,H.jsxs)(`section`,{className:`gv2-business-context`,"aria-label":`Contexte business`,children:[(0,H.jsxs)(`p`,{className:`gv2-panel-eyebrow`,children:[(0,H.jsx)(U,{name:`sparkle`,size:16}),`Contexte business`]}),t&&(0,H.jsxs)(`div`,{className:`gv2-context-agent`,children:[(0,H.jsx)(`img`,{src:t.portrait,alt:``}),(0,H.jsxs)(`div`,{children:[(0,H.jsx)(`strong`,{children:t.name}),(0,H.jsx)(`span`,{children:t.contextLabel})]})]}),(0,H.jsx)(`h2`,{children:e?.title||`Workspace à définir`}),(0,H.jsx)(po,{workspace:e,onUpdateWorkspace:n}),(0,H.jsxs)(`div`,{className:`gv2-context-source`,children:[(0,H.jsx)(U,{name:`link`,size:15}),(0,H.jsx)(`span`,{children:e?.source_type?`Source : ${e.source_type}`:`Aucune source connectée`})]}),(0,H.jsxs)(`div`,{className:`gv2-context-journey`,"aria-label":`Avancement des agents`,children:[(0,H.jsx)(fo,{label:`Psychologue`,done:r,current:o===`psychologue`&&!r}),(0,H.jsx)(fo,{label:`Stratège`,done:i,current:o===`stratege`&&!i,unavailable:!r}),(0,H.jsx)(fo,{label:`Créateur`,done:a,current:o===`createur`&&!a,unavailable:!i})]})]})}var ho=[[`script`,`Script court`],[`youtube`,`Script YouTube`],[`tiktok`,`TikTok / Reels`],[`linkedin`,`Post LinkedIn`],[`post`,`Thread`],[`email`,`Séquence email`],[`sales_page`,`Page de vente`]],go=[[`expert`,`Expert`],[`premium`,`Premium`],[`educational`,`Pédagogique`],[`storytelling`,`Storytelling`],[`direct_response`,`Direct`],[`emotional`,`Émotionnel`]],_o=[[``,`Selon la demande`],[`attention`,`Capter l’attention`],[`education`,`Éduquer`],[`conversion`,`Convertir`],[`autorite`,`Installer l’autorité`],[`sales`,`Vendre`],[`launch`,`Préparer un lancement`]],vo=[[``,`Automatique`],[`tiktok`,`TikTok`],[`youtube`,`YouTube`],[`instagram`,`Instagram`],[`linkedin`,`LinkedIn`],[`email`,`Email`],[`website`,`Site web`],[`ads`,`Publicité`]],yo=[[``,`Aucune — facultatif`],[`confiance`,`Confiance`],[`curiosite`,`Curiosité`],[`inspiration`,`Inspiration`],[`motivation`,`Motivation`],[`urgence`,`Urgence`],[`empathie`,`Empathie`],[`autorite`,`Autorité`]];function bo({label:e,value:t,options:n,onChange:r}){return(0,H.jsxs)(`label`,{className:`gv2-creator-setting`,children:[(0,H.jsx)(`span`,{children:e}),(0,H.jsx)(`select`,{value:t||``,onChange:e=>r(e.target.value),children:n.map(([e,t])=>(0,H.jsx)(`option`,{value:e,children:t},e||`default`))})]})}function xo({workspace:e,settings:t,onSettingsChange:n,hasOutput:r,onRefinement:i,onClose:a}){let o=!!e?.analysis_id,s=!!e?.strategy_id;return(0,H.jsxs)(`div`,{className:`gv2-creator-context-panel`,children:[(0,H.jsxs)(`header`,{className:`gv2-creator-atelier-head`,children:[(0,H.jsx)(`strong`,{children:`Atelier`}),(0,H.jsx)(`button`,{type:`button`,onClick:a,"aria-label":`Fermer l’Atelier`,title:`Fermer l’Atelier`,children:(0,H.jsx)(U,{name:`close`,size:18})})]}),(0,H.jsxs)(`section`,{className:`gv2-creator-context-intro`,children:[(0,H.jsxs)(`p`,{className:`gv2-panel-eyebrow`,children:[(0,H.jsx)(U,{name:`sparkle`,size:16}),`Atelier de création`]}),(0,H.jsxs)(`div`,{className:`gv2-context-agent`,children:[(0,H.jsx)(`img`,{src:Ji.createur.portrait,alt:``}),(0,H.jsxs)(`div`,{children:[(0,H.jsx)(`strong`,{children:`Le Créateur`}),(0,H.jsx)(`span`,{children:`Rédaction et formats de conversion`})]})]}),(0,H.jsxs)(`h2`,{children:[`Donnez le cap.`,(0,H.jsx)(`br`,{}),`La discussion fait le reste.`]}),(0,H.jsx)(`p`,{children:`Réglez ici le cadre de la création. Vous pouvez aussi ne rien choisir : le Créateur s’adapte à votre demande.`})]}),(0,H.jsxs)(`section`,{className:`gv2-creator-settings`,"aria-label":`Paramètres de création`,children:[(0,H.jsx)(`p`,{className:`gv2-panel-label`,children:`Paramètres de création`}),(0,H.jsx)(bo,{label:`Format`,value:t.contentType,options:ho,onChange:e=>n({contentType:e})}),(0,H.jsx)(bo,{label:`Canal`,value:t.channel,options:vo,onChange:e=>n({channel:e})}),(0,H.jsx)(bo,{label:`Tonalité`,value:t.tone,options:go,onChange:e=>n({tone:e})}),(0,H.jsx)(bo,{label:`Objectif`,value:t.objective,options:_o,onChange:e=>n({objective:e})}),(0,H.jsxs)(`label`,{className:`gv2-creator-setting gv2-creator-range`,children:[(0,H.jsxs)(`span`,{children:[`Liberté créative `,(0,H.jsx)(`b`,{children:t.creativity||50})]}),(0,H.jsx)(`input`,{type:`range`,min:`0`,max:`100`,value:t.creativity||50,onChange:e=>n({creativity:Number(e.target.value)})})]}),(0,H.jsxs)(`details`,{className:`gv2-creator-advanced-settings`,children:[(0,H.jsxs)(`summary`,{children:[`Options avancées`,(0,H.jsx)(U,{name:`chevronDown`,size:14})]}),(0,H.jsxs)(`div`,{children:[(0,H.jsx)(bo,{label:`Émotion visée`,value:t.emotion,options:yo,onChange:e=>n({emotion:e})}),(0,H.jsxs)(`label`,{className:`gv2-creator-switch`,children:[(0,H.jsx)(`input`,{type:`checkbox`,checked:!!t.generateVariant,onChange:e=>n({generateVariant:e.target.checked})}),(0,H.jsx)(`span`,{}),(0,H.jsxs)(`div`,{children:[(0,H.jsx)(`strong`,{children:`Proposer une variante`}),(0,H.jsx)(`small`,{children:`Une seconde piste si elle apporte une vraie différence.`})]})]})]})]})]}),(0,H.jsxs)(`section`,{className:`gv2-creator-linked-context`,children:[(0,H.jsx)(`p`,{className:`gv2-panel-label`,children:`Contexte relié`}),(0,H.jsxs)(`div`,{children:[(0,H.jsx)(`span`,{className:o?`is-ready`:``,children:o?(0,H.jsx)(U,{name:`check`,size:12}):(0,H.jsx)(`i`,{})}),(0,H.jsxs)(`p`,{children:[(0,H.jsx)(`strong`,{children:`Audience`}),(0,H.jsx)(`small`,{children:o?`Analyse disponible`:`Aucune analyse reliée`})]})]}),(0,H.jsxs)(`div`,{children:[(0,H.jsx)(`span`,{className:s?`is-ready`:``,children:s?(0,H.jsx)(U,{name:`check`,size:12}):(0,H.jsx)(`i`,{})}),(0,H.jsxs)(`p`,{children:[(0,H.jsx)(`strong`,{children:`Stratégie`}),(0,H.jsx)(`small`,{children:s?`Stratégie disponible`:`Aucune stratégie reliée`})]})]})]}),r&&(0,H.jsxs)(`section`,{className:`gv2-creator-refinements`,children:[(0,H.jsx)(`p`,{className:`gv2-panel-label`,children:`Pistes de modification`}),(0,H.jsx)(`p`,{children:`Facultatives : elles préparent simplement votre prochaine instruction.`}),(0,H.jsxs)(`div`,{children:[(0,H.jsx)(`button`,{type:`button`,onClick:()=>i(`Raccourcis et clarifie le message, sans perdre l’idée principale.`),children:`Raccourcir et clarifier`}),(0,H.jsx)(`button`,{type:`button`,onClick:()=>i(`Renforce le hook et les premières lignes pour retenir immédiatement l’attention.`),children:`Renforcer le hook`}),(0,H.jsx)(`button`,{type:`button`,onClick:()=>i(`Propose un angle plus inattendu, tout en gardant l’objectif initial.`),children:`Changer l’angle`})]})]})]})}function So({done:e,label:t,detail:n,current:r}){return(0,H.jsxs)(`div`,{className:`gv2-strategy-context-state${e?` is-done`:``}${r?` is-current`:``}`,children:[(0,H.jsx)(`span`,{children:e?(0,H.jsx)(U,{name:`check`,size:12}):(0,H.jsx)(`i`,{})}),(0,H.jsxs)(`div`,{children:[(0,H.jsx)(`strong`,{children:t}),n&&(0,H.jsx)(`small`,{children:n})]})]})}function Co({interview:e,mission:t,onStart:n,isStarting:r}){let[i,a]=(0,_.useState)(`progress`),o=e?.contextProgress?.understood||[],s=e?.contextProgress?.remaining||[],c=o.length+s.length,l=!!e?.interviewReady,u=o.length>0||s.length>0,d=e?.messages||[];return(0,H.jsxs)(`div`,{className:`gv2-strategy-context-panel`,children:[(0,H.jsxs)(`section`,{className:`gv2-strategy-context-intro`,children:[(0,H.jsxs)(`p`,{className:`gv2-panel-eyebrow`,children:[(0,H.jsx)(U,{name:`sparkle`,size:16}),`Lecture stratégique`]}),(0,H.jsxs)(`div`,{className:`gv2-context-agent`,children:[(0,H.jsx)(`img`,{src:Ji.stratege.portrait,alt:``}),(0,H.jsxs)(`div`,{children:[(0,H.jsx)(`strong`,{children:Ji.stratege.name}),(0,H.jsx)(`span`,{children:`Décision et positionnement`})]})]}),(0,H.jsxs)(`div`,{className:`gv2-strategy-clarity${l?` is-clear`:``}`,children:[(0,H.jsx)(`span`,{}),(0,H.jsx)(`p`,{children:l?`Votre situation est suffisamment claire`:u?`Entretien en cours`:`Entretien non commencé`})]}),(0,H.jsx)(`div`,{className:`gv2-strategy-clarity-line`,children:(0,H.jsx)(`i`,{style:{width:`${c>0?Math.round(o.length/c*100):0}%`}})}),(0,H.jsx)(`h2`,{children:l?`Compréhension suffisante`:c>0?`${o.length}/${c} clarifiés`:`Contexte à préciser`}),(0,H.jsx)(`p`,{children:`Ariane utilise uniquement les informations réellement reliées à ce workspace.`})]}),(0,H.jsxs)(`section`,{className:`gv2-strategy-context-body`,children:[(0,H.jsxs)(`div`,{className:`gv2-strategy-context-tabs`,role:`tablist`,"aria-label":`Lecture du contexte`,children:[(0,H.jsx)(`button`,{type:`button`,role:`tab`,"aria-selected":i===`progress`,className:i===`progress`?`is-active`:``,onClick:()=>a(`progress`),children:`Progression`}),(0,H.jsx)(`button`,{type:`button`,role:`tab`,"aria-selected":i===`history`,className:i===`history`?`is-active`:``,onClick:()=>a(`history`),children:`Historique`})]}),i===`progress`?(0,H.jsxs)(H.Fragment,{children:[(0,H.jsx)(`p`,{className:`gv2-strategy-context-label`,children:`Déjà compris`}),(0,H.jsx)(`div`,{className:`gv2-strategy-context-list`,children:o.length?o.map(e=>(0,H.jsx)(So,{done:!0,label:e},e)):(0,H.jsx)(`p`,{className:`gv2-strategy-context-empty`,children:`Rien pour le moment.`})}),s.length>0&&(0,H.jsxs)(H.Fragment,{children:[(0,H.jsx)(`p`,{className:`gv2-strategy-context-label gv2-strategy-context-label--pending`,children:`À éclaircir`}),(0,H.jsx)(`div`,{className:`gv2-strategy-context-list`,children:s.map(t=>(0,H.jsx)(So,{label:t,current:t===e?.currentDimension},t))})]})]}):(0,H.jsx)(`div`,{className:`gv2-strategy-history`,children:d.length?d.map((e,t)=>(0,H.jsxs)(`div`,{children:[(0,H.jsx)(`span`,{}),(0,H.jsxs)(`p`,{children:[(0,H.jsx)(`strong`,{children:e.role===`user`?`Vous`:`Ariane`}),(0,H.jsx)(`small`,{children:e.content})]})]},t)):(0,H.jsx)(`p`,{children:`L’historique apparaîtra ici.`})}),t?.execution&&(t.status===`ready`||t.status===`failed`)&&(0,H.jsxs)(`button`,{type:`button`,className:`gv2-strategy-context-launch`,onClick:n,disabled:r,children:[(0,H.jsx)(U,{name:`sparkle`,size:15}),r?`Lancement…`:t.execution.label]})]})]})}function wo({mission:e,onStart:t,isStarting:n}){let r=e.status===`running`,i=e.status===`completed`,a=e.status===`awaiting_input`;return(0,H.jsxs)(`div`,{className:`gv2-panel-stack`,children:[(0,H.jsxs)(`section`,{className:`gv2-panel-card gv2-mission-card`,children:[(0,H.jsxs)(`p`,{className:`gv2-panel-eyebrow`,children:[(0,H.jsx)(U,{name:`sparkle`,size:16}),r?`Mission en cours`:i?`Mission terminée`:`Mission Gabriel`]}),(0,H.jsx)(`h2`,{children:e.title}),e.objective&&(0,H.jsx)(`p`,{className:`gv2-mission-objective`,children:e.objective}),(0,H.jsxs)(`div`,{className:`gv2-mission-status gv2-mission-status--${e.status}`,children:[(0,H.jsx)(`span`,{}),lo[e.status]||`Mission`]}),r&&(0,H.jsxs)(`div`,{className:`gv2-mission-progress`,"aria-label":`Progression : ${e.progress||0}%`,children:[(0,H.jsx)(`i`,{style:{width:`${Math.max(3,Math.min(100,e.progress||0))}%`}}),(0,H.jsxs)(`small`,{children:[e.progress||0,`%`]})]})]}),e.inputs?.length>0&&(0,H.jsxs)(`section`,{className:`gv2-panel-card`,children:[(0,H.jsx)(`p`,{className:`gv2-panel-label`,children:a?`Pour avancer`:`Sources de la mission`}),(0,H.jsx)(`div`,{className:`gv2-mission-inputs`,children:e.inputs.map(e=>(0,H.jsxs)(`div`,{children:[(0,H.jsx)(`strong`,{children:e.label}),e.value&&(0,H.jsx)(`span`,{title:e.value,children:e.value}),e.help&&(0,H.jsx)(`small`,{children:e.help})]},e.id))}),a&&(0,H.jsx)(`p`,{className:`gv2-panel-hint`,children:`Répondez dans la conversation : Gabriel mettra à jour la mission dès que la donnée est disponible.`})]}),e.agents.length>0&&(0,H.jsxs)(`section`,{className:`gv2-panel-card`,children:[(0,H.jsx)(`p`,{className:`gv2-panel-label`,children:`Équipe mobilisée`}),(0,H.jsx)(`div`,{className:`gv2-agent-list`,children:e.agents.map((e,t)=>(0,H.jsxs)(`div`,{className:`gv2-agent-row`,children:[(0,H.jsx)(`span`,{className:`gv2-agent-icon gv2-agent-icon--${so[t%so.length]}`,children:(0,H.jsx)(U,{name:`sparkle`,size:15})}),(0,H.jsxs)(`span`,{className:`gv2-agent-copy`,children:[(0,H.jsx)(`strong`,{children:e.name}),(0,H.jsx)(`small`,{children:e.description||`Mobilisé par Gabriel`})]}),(0,H.jsx)(`span`,{className:`gv2-agent-status gv2-agent-status--${e.status}`,title:co[e.status]})]},e.id))})]}),e.deliverables.length>0&&(0,H.jsxs)(`section`,{className:`gv2-panel-card`,children:[(0,H.jsx)(`p`,{className:`gv2-panel-label`,children:`Livrables prévus`}),(0,H.jsx)(`div`,{className:`gv2-deliverable-list`,children:e.deliverables.map((e,t)=>(0,H.jsxs)(`div`,{children:[(0,H.jsx)(U,{name:`file`,size:17}),(0,H.jsx)(`span`,{children:e.title}),e.type&&(0,H.jsx)(`small`,{children:e.type})]},`${e.title}-${t}`))})]}),e.execution&&(e.status===`ready`||e.status===`failed`)&&(0,H.jsxs)(`button`,{type:`button`,className:`gv2-mission-launch`,onClick:t,disabled:n,children:[(0,H.jsx)(U,{name:`sparkle`,size:17}),(0,H.jsx)(`span`,{children:n?`Lancement…`:e.execution.label})]}),e.error&&(0,H.jsxs)(`section`,{className:`gv2-panel-card gv2-mission-error`,children:[(0,H.jsx)(U,{name:`close`,size:16}),(0,H.jsx)(`p`,{children:e.error})]}),(0,H.jsxs)(`section`,{className:`gv2-panel-card gv2-guidance-card`,children:[(0,H.jsx)(U,{name:`message`,size:18}),(0,H.jsx)(`p`,{children:`Gabriel pilote cette étape. Continuez la conversation pour préciser le contexte ou les données nécessaires.`})]})]})}var To={empty:uo,mission_summary:wo,youtube_analyzer:wo,document_analyzer:wo,offer_builder:wo,data_import:wo};function Eo({mission:e,workspace:t,activeAgent:n,onUpdateWorkspace:r,onStartMission:i,isStartingMission:a,creatorSettings:o,onCreatorSettingsChange:s,creatorHasOutput:c,onCreatorRefinement:l,onCreatorClose:u,strategeInterview:d}){if(n?.id===`createur`)return(0,H.jsx)(`aside`,{className:`gv2-context-panel gv2-context-panel--creator`,"aria-label":`Paramètres de création`,children:(0,H.jsx)(xo,{workspace:t,settings:o,onSettingsChange:s,hasOutput:c,onRefinement:l,onClose:u})});if(n?.id===`stratege`)return(0,H.jsx)(`aside`,{className:`gv2-context-panel gv2-context-panel--strategy`,"aria-label":`Clarté du contexte stratégique`,children:(0,H.jsx)(Co,{interview:d,mission:e,onStart:i,isStarting:a})});let f=e?To[e.panelType]||To.mission_summary:To.empty;return(0,H.jsxs)(`aside`,{className:`gv2-context-panel`,"aria-label":`Contexte du workspace`,children:[(0,H.jsx)(mo,{workspace:t,activeAgent:n,onUpdateWorkspace:r}),(0,H.jsx)(f,{mission:e,onStart:i,isStarting:a})]})}var Do=Object.freeze({name:`Front End Stratège Builder`,version:`1.0.0`}),Oo=Object.freeze([{key:`synthese`,label:`Synthèse`,eyebrow:`Analyse stratégique`,title:`La décision en un regard`},{key:`marketing`,label:`Opportunités`,eyebrow:`Marché & valeur`,title:`Là où le levier est le plus fort`},{key:`branding`,label:`Positionnement`,eyebrow:`Marque & contenus`,title:`Construire une préférence claire`},{key:`plan`,label:`Priorités`,eyebrow:`Ordre d’action`,title:`Passer de la décision à l’exécution`},{key:`decision`,label:`Vigilance`,eyebrow:`Regard critique`,title:`Ce qui pourrait remettre la stratégie en question`}]),ko=`.kpi-card,.strat-card,.decision-card,.obj-card,.opp-card,.conf-gauge-card,.fb-card,.createur-bridge`,Ao=Object.freeze([{selector:`.strat-hero-decision`,thresholds:{medium:105,long:190,extended:320}},{selector:`.kpi-value--text`,thresholds:{medium:65,long:125,extended:220}},{selector:`.decision-text`,thresholds:{medium:105,long:195,extended:330}},{selector:`.obj-text`,thresholds:{medium:145,long:275,extended:460}},{selector:`.opp-decision-text`,thresholds:{medium:115,long:220,extended:370}},{selector:`.opp-signal-text, .opp-sub-text`,thresholds:{medium:150,long:290,extended:480}},{selector:`.crit-row-text, .reco-signal`,thresholds:{medium:165,long:315,extended:520}},{selector:`.plan-item, .plan-decision, .risk-text, .risk-mitigation`,thresholds:{medium:150,long:300,extended:500}}]),jo=Object.freeze({short:0,medium:1,long:2,extended:3});function Mo(e){return String(e??``).replace(/\s+/g,` `).trim()}function No(e,t={}){let n=Mo(e),r={medium:Number.isFinite(t.medium)?t.medium:120,long:Number.isFinite(t.long)?t.long:240,extended:Number.isFinite(t.extended)?t.extended:420};return n.length>=r.extended?`extended`:n.length>=r.long?`long`:n.length>=r.medium?`medium`:`short`}function Po(e,t){return Oo.map(n=>({section:n,tab:t.querySelector(`[aria-controls="dash-panel-${n.key}"]`),panel:e.querySelector(`#dash-panel-${n.key}`)})).filter(e=>e.tab&&e.panel)}function Fo(e,t){e.forEach((e,n)=>{let r=n===t;e.classList.toggle(`active`,r),e.removeAttribute(`role`),e.removeAttribute(`aria-selected`),r?e.setAttribute(`aria-current`,`location`):e.removeAttribute(`aria-current`)})}function Io(e,t){let n=e.getElementById(`strat-dashboard`),r=e.defaultView,i=n?.querySelector(`.dash-tabs`);if(!n||!r||!i||!n.classList.contains(`strat-cockpit-active`))return!1;let a=Po(n,i);if(!a.length)return!1;let o=a.map(e=>e.tab),s=a.map(e=>e.panel);if(n.classList.add(`gv2-strategy-report`,`sfb-report`),n.dataset.sfbBuilder=Do.name,n.dataset.sfbVersion=Do.version,e.body?.classList.add(`gv2-strategy-report-active`),i.setAttribute(`role`,`navigation`),i.setAttribute(`aria-label`,`Sommaire du rapport stratégique`),!i.querySelector(`.gv2-strategy-report-nav-head`)){let t=e.createElement(`div`);t.className=`gv2-strategy-report-nav-head`,t.innerHTML=`<span>Votre rapport</span><strong>Rapport stratégique</strong><small>Décision &amp; exécution</small>`,i.prepend(t)}if(!i.querySelector(`.gv2-strategy-report-nav-foot`)){let t=e.createElement(`div`);t.className=`gv2-strategy-report-nav-foot`,t.innerHTML=`<span aria-hidden="true">✦</span><p>Analysé par Gabriel<small>Intelligence business</small></p>`,i.append(t)}a.forEach(({tab:t,panel:n,section:i},a)=>{let s=String(a+1).padStart(2,`0`);if(t.textContent!==i.label&&(t.textContent=i.label),t.dataset.reportNumber=s,t.removeAttribute(`role`),t.removeAttribute(`aria-selected`),n.classList.remove(`hidden`),n.removeAttribute(`role`),n.dataset.reportSection=s,n.dataset.sfbSection=i.key,!n.querySelector(`:scope > .gv2-strategy-section-heading`)){let t=e.createElement(`header`);t.className=`gv2-strategy-section-heading`,t.innerHTML=`<p><span>${s}</span>${i.eyebrow}</p><h2>${i.title}</h2>`,n.prepend(t)}t.onclick=()=>{Fo(o,o.indexOf(t)),n.scrollIntoView({behavior:r.matchMedia?.(`(prefers-reduced-motion: reduce)`).matches?`auto`:`smooth`,block:`start`})}});let c=o.findIndex(e=>e.classList.contains(`active`));if(Fo(o,c>=0?c:0),t.sectionObserver?.disconnect(),r.IntersectionObserver){let n=e.querySelector(`.app-content`);t.sectionObserver=new r.IntersectionObserver(e=>{let t=e.filter(e=>e.isIntersecting).sort((e,t)=>t.intersectionRatio-e.intersectionRatio)[0];if(!t)return;let n=s.indexOf(t.target);n>=0&&Fo(o,n)},{root:n||null,rootMargin:`-12% 0px -62% 0px`,threshold:[0,.08,.2,.45]}),s.forEach(e=>t.sectionObserver.observe(e))}return!0}function Lo(e){let t=new Map;e.querySelectorAll(`.dash-panel`).forEach(e=>{[...e.children].forEach(e=>{if(e.classList.contains(`gv2-strategy-section-heading`))return;let t=!!(Mo(e.textContent)||e.querySelector(`img, svg, canvas, video`));e.classList.add(`sfb-deliverable`),e.classList.toggle(`sfb-empty-deliverable`,!t)})}),Ao.forEach(n=>{e.querySelectorAll(n.selector).forEach(e=>{let r=No(e.textContent,n.thresholds);e.dataset.sfbDensity=r;let i=e.closest(ko);if(!i)return;let a=t.get(i)||`short`;jo[r]>jo[a]?t.set(i,r):t.has(i)||t.set(i,a)})}),e.querySelectorAll(ko).forEach(e=>{e.dataset.sfbDensity=t.get(e)||`short`})}function Ro(e){return e.clientWidth>0&&e.scrollWidth>e.clientWidth+2}function zo(e){let t=e?.getElementById(`strat-dashboard`);if(!t)return{builder:Do.name,version:Do.version,ready:!1,status:`waiting`,sections:0,deliverables:0,issues:[{type:`missing-dashboard`,message:`Le tableau de bord du Stratège n’est pas encore disponible.`}]};let n=[],r=[...t.querySelectorAll(`.dash-panel`)],i=[...t.querySelectorAll(`.sfb-deliverable`)];r.forEach(e=>{[...e.children].filter(e=>!e.classList.contains(`gv2-strategy-section-heading`)).length||n.push({type:`empty-section`,section:e.dataset.sfbSection||e.id,message:`Section sans livrable visible.`})}),i.forEach((e,t)=>{!Mo(e.textContent)&&!e.querySelector(`img, svg, canvas, video`)&&n.push({type:`empty-deliverable`,index:t,message:`Bloc de livrable vide.`});let r=Ro(e);e.classList.toggle(`sfb-has-horizontal-overflow`,r),r&&n.push({type:`horizontal-overflow`,index:t,message:`Débordement horizontal détecté.`})});let a=t.querySelector(`.strat-action-bar`),o=r[0];if(a&&o&&typeof a.getBoundingClientRect==`function`){let t=a.getBoundingClientRect(),r=o.getBoundingClientRect(),i=e.defaultView?.innerHeight||0,s=r.top-t.bottom;t.height>0&&s>Math.max(420,i*.62)&&n.push({type:`excessive-section-gap`,pixels:Math.round(s),message:`Espace excessif avant le premier livrable.`})}let s={builder:Do.name,version:Do.version,ready:t.classList.contains(`strat-cockpit-active`),status:n.length?`warning`:`ok`,sections:r.length,deliverables:i.length,densities:{short:t.querySelectorAll(`[data-sfb-density="short"]`).length,medium:t.querySelectorAll(`[data-sfb-density="medium"]`).length,long:t.querySelectorAll(`[data-sfb-density="long"]`).length,extended:t.querySelectorAll(`[data-sfb-density="extended"]`).length},issues:n};return t.dataset.sfbStatus=s.status,t.dataset.sfbIssueCount=String(n.length),t.__sfbAudit=s,s}function Bo(e){let t=e?.defaultView,n=e?.getElementById(`strat-dashboard`),r={destroyed:!1,queued:!1,mutationObserver:null,resizeObserver:null,sectionObserver:null,lastAudit:null},i=()=>r.destroyed||!n?zo(e):(Io(e,r)&&Lo(n),r.lastAudit=zo(e),r.lastAudit),a=()=>{r.destroyed||r.queued||(r.queued=!0,(t?.requestAnimationFrame?e=>t.requestAnimationFrame(e):e=>t?.setTimeout(e,0))(()=>{r.queued=!1,i()}))},o={name:Do.name,version:Do.version,run:i,audit:()=>zo(e),observe:()=>(i(),!n||!t||(r.mutationObserver?.disconnect(),t.MutationObserver&&(r.mutationObserver=new t.MutationObserver(a),r.mutationObserver.observe(n,{childList:!0,subtree:!0,characterData:!0})),r.resizeObserver?.disconnect(),t.ResizeObserver&&(r.resizeObserver=new t.ResizeObserver(a),r.resizeObserver.observe(n))),o),destroy:()=>{r.destroyed=!0,r.mutationObserver?.disconnect(),r.resizeObserver?.disconnect(),r.sectionObserver?.disconnect()},get lastAudit(){return r.lastAudit}};return o}function Vo(e){let t=e?.defaultView;t?.__gabrielFrontEndStrategeBuilder?.destroy?.();let n=Bo(e);return n.observe(),t&&(t.__gabrielFrontEndStrategeBuilder=n),n}function Ho(e,t){let n=new URLSearchParams({embedded:`1`});return t&&n.set(`folder_id`,t),`${e.path}?${n.toString()}`}function Uo(e){return Object.values(Ji).find(t=>t.path===e)?.id||null}function Wo(e){let t=e.querySelector(`.chat-window`),n=e.querySelector(`.ctx-panel`);if(!t||!n)return;let r=e.getElementById(`gv2-audio-thinking`);r||(r=e.createElement(`section`),r.id=`gv2-audio-thinking`,r.className=`gv2-audio-thinking`,r.setAttribute(`role`,`status`),r.setAttribute(`aria-live`,`polite`),r.innerHTML=`
      <div class="gv2-audio-thinking-surface">
        <span class="gv2-audio-thinking-dots" aria-hidden="true"><i></i><i></i></span>
        <div class="gv2-audio-thinking-preview"><span>V</span><p data-gv2-audio-preview></p><b aria-hidden="true"></b></div>
        <div class="gv2-audio-thinking-status"><i aria-hidden="true"></i><em>Ariane réfléchit…</em></div>
        <p class="gv2-audio-thinking-copy">Je relie les éléments de votre réponse à votre situation.</p>
      </div>`,t.append(r));let i=()=>{let t=n.dataset.interviewState===`transcribing`;if(r.classList.toggle(`is-active`,t),!t)return;let i=e.querySelector(`#listening-transcript`)?.textContent?.trim(),a=e.querySelector(`#chat-input`)?.value?.trim(),o=((i&&i!==`Je vous écoute…`?i:a)||`Votre réponse est en cours de préparation.`).replace(/\s+/g,` `),s=r.querySelector(`[data-gv2-audio-preview]`);s&&(s.textContent=o.length>110?`${o.slice(0,107).trimEnd()}…`:o)};if(i(),!t.__gv2ThinkingObserver&&e.defaultView?.MutationObserver){let r=new e.defaultView.MutationObserver(i);r.observe(n,{attributes:!0,attributeFilter:[`data-interview-state`]}),t.__gv2ThinkingObserver=r}}function Go(e){let t=e.querySelector(`.chat-input-row`);if(!t)return;t.querySelector(`.gv2-strategist-atelier`)?.remove();let n=t.querySelector(`.compose-add`);n&&!n.dataset.gv2ComposerIcon&&(n.dataset.gv2ComposerIcon=`paperclip`,n.innerHTML=`
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="m21.44 11.05-9.19 9.19a6 6 0 0 1-8.49-8.49l9.19-9.19a4 4 0 0 1 5.66 5.66l-9.2 9.19a2 2 0 0 1-2.83-2.83l8.49-8.48" />
      </svg>`);let r=t.querySelector(`.chat-send`);r&&!r.dataset.gv2ComposerIcon&&(r.dataset.gv2ComposerIcon=`arrow-up`,r.innerHTML=`
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <line x1="12" y1="19" x2="12" y2="5" /><polyline points="5 12 12 5 19 12" />
      </svg>`),t.querySelector(`#chat-input`)?.setAttribute(`aria-label`,`Votre réponse à Ariane`);let i=t.querySelector(`#mic-btn`);i?.setAttribute(`aria-label`,`Répondre à Ariane à la voix`),i?.setAttribute(`title`,`Répondre à la voix`)}function Ko(e){let t=[`#interview-state-kicker`,`#interview-state-title`,`#interview-state-copy`,`#voice-speaking-badge`,`#voice-live-label`],n=()=>t.forEach(t=>{let n=e.querySelector(t);if(!n?.textContent?.includes(`Gabriel`))return;let r=[...n.childNodes].filter(e=>e.nodeType===3);r.length?r.forEach(e=>{e.textContent?.includes(`Gabriel`)&&(e.textContent=e.textContent.replaceAll(`Gabriel`,`Ariane`))}):n.textContent=n.textContent.replaceAll(`Gabriel`,`Ariane`)});n();let r=e.querySelector(`.chat-window`);if(!r||r.__gv2VoiceCopyObserver||!e.defaultView?.MutationObserver)return;let i=new e.defaultView.MutationObserver(n);i.observe(r,{childList:!0,subtree:!0,characterData:!0}),r.__gv2VoiceCopyObserver=i}function qo(e){let t=e.getElementById(`chat-messages`);if(!t)return;let n={copy:`<rect x="9" y="9" width="11" height="11" rx="2"/><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"/>`,download:`<path d="M12 3v12"/><polyline points="7 10 12 15 17 10"/><path d="M5 21h14"/>`},r=(t,r)=>{let i=e.createElement(`button`);return i.type=`button`,i.className=`gv2-strategist-reply-action gv2-strategist-reply-action--${t}`,i.innerHTML=`<svg viewBox="0 0 24 24" aria-hidden="true">${n[t]}</svg><span>${r}</span>`,i},i=t=>{let n=e.createElement(`textarea`);n.value=t,n.style.position=`fixed`,n.style.opacity=`0`,e.body.append(n),n.select(),e.execCommand?.(`copy`),n.remove()},a=t=>{if(!(t instanceof e.defaultView.HTMLElement)||!t.matches(`.msg.agent:not(#typing)`)||t.querySelector(`.gv2-strategist-reply-actions`))return;let n=t.querySelector(`.msg-bubble`),a=n?.innerText?.trim();if(!n||!a)return;let o=e.createElement(`div`);o.className=`gv2-strategist-reply-actions`;let s=r(`copy`,`Copier`);s.addEventListener(`click`,async()=>{try{await e.defaultView.navigator.clipboard.writeText(a)}catch{i(a)}let t=s.querySelector(`span`);t&&(t.textContent=`Copié`),e.defaultView.setTimeout(()=>{t?.isConnected&&(t.textContent=`Copier`)},1300)});let c=r(`download`,`Télécharger`);c.addEventListener(`click`,()=>{let t=new e.defaultView.Blob([a],{type:`text/plain;charset=utf-8`}),n=e.defaultView.URL.createObjectURL(t),r=e.createElement(`a`);r.href=n,r.download=`reponse-ariane-${new Date().toISOString().slice(0,10)}.txt`,e.body.append(r),r.click(),r.remove(),e.defaultView.setTimeout(()=>e.defaultView.URL.revokeObjectURL(n),0)}),o.append(s,c),n.insertAdjacentElement(`afterend`,o)};if(t.querySelectorAll(`.msg.agent`).forEach(a),!t.__gv2ReplyObserver&&e.defaultView?.MutationObserver){let n=new e.defaultView.MutationObserver(n=>{let r=t.scrollHeight-t.scrollTop-t.clientHeight<90;n.forEach(t=>t.addedNodes.forEach(t=>{t instanceof e.defaultView.HTMLElement&&(a(t),t.querySelectorAll?.(`.msg.agent`).forEach(a))})),r&&e.defaultView.requestAnimationFrame(()=>{t.scrollTop=t.scrollHeight})});n.observe(t,{childList:!0,subtree:!0}),t.__gv2ReplyObserver=n}}function Jo(e,t,n){if(![`stratege`,`psychologue`].includes(t)||!e?.head)return;if(!e.getElementById(`gabriel-v2-fonts`)){let t=e.createElement(`link`);t.id=`gabriel-v2-fonts`,t.rel=`stylesheet`,t.href=`https://fonts.googleapis.com/css2?family=Inter+Tight:wght@300;400;500;600&family=JetBrains+Mono:wght@400;500&family=Space+Grotesk:wght@400;500;600&display=swap`,e.head.append(t)}if(t===`stratege`){let t=e.querySelector(`#gate-welcome .gate-title`),n=e.querySelector(`#gate-welcome .gate-sub`),r=e.querySelector(`#gate-intro .gate-eyebrow`),i=e.querySelector(`#gate-intro .gate-question`),a=e.querySelector(`#gate-intro .gate-write`),o=e.querySelector(`#listening-title`),s=e.querySelector(`#listening-overlay .listening-copy`);t&&(t.textContent=`Bonjour, je suis Ariane, votre stratège.`),n&&(n.textContent=`Ensemble, transformons vos ambitions et vos enjeux en une stratégie claire, solide et prête à être déployée.`),r&&(r.textContent=`Ariane · votre stratège`),i&&!i.textContent.trim()&&(i.textContent=`Exprimez votre besoin avec vos propres mots. Ariane en clarifiera les priorités et la suite.`),a&&(a.textContent=`Je préfère répondre par écrit`),o&&(o.textContent=`Ariane vous écoute.`),s&&(s.textContent=`Parlez librement. Votre réponse est retranscrite en direct.`),Wo(e),Go(e),Ko(e),qo(e),Vo(e)}let r=`gabriel-v2-embedded-presentation`,i=e.getElementById(r);i||(i=e.createElement(`style`),i.id=r,e.head.append(i)),i.textContent=t===`psychologue`?`
    /* Le nom de l'agent est déjà présent dans la navigation V2 : ce sur-titre
       fait doublon dans l'outil embarqué. */
    body.page-psychologue .page-label { display: none !important; }
    /* Le studio de réglage est un outil interne de la page historique. Dans
       le workbench V2, il n'apporte pas de valeur au travail courant. */
    body.is-embedded-agent.page-psychologue :is(.uxs-fab, .uxs, .uxs-toast) { display: none !important; }
    ${n?`
      /* Thème sombre appliqué à l'instance embarquée depuis Gabriel V2.
         Aucune feuille de style historique n'est modifiée. */
      body.is-embedded-agent.page-psychologue {
        --bg-main: #17191a !important;
        --bg-panel: #1d1f20 !important;
        --bg-card: #232526 !important;
        --bg-card-hover: #2c2e30 !important;
        --text-primary: #f2f3f3 !important;
        --text-secondary: #d3d5d5 !important;
        --text-muted: #a4a6a8 !important;
        --text-disabled: #777a7c !important;
        --champagne: #f0f1f1 !important;
        --champagne-light: #d9dbdc !important;
        --champagne-soft: #c6c8c9 !important;
        --border-soft: rgba(255,255,255,.11) !important;
        --border-medium: rgba(255,255,255,.17) !important;
        color: #f2f3f3 !important;
        color-scheme: dark !important;
        background: #17191a !important;
      }
      body.is-embedded-agent.page-psychologue :is(.app-layout, .app-main, .app-content) { background: #17191a !important; }
      body.is-embedded-agent.page-psychologue :is(.input-card, .url-input-row, .file-drop-zone, .chat-input-row, .sc-input-row) { background: #232526 !important; border-color: rgba(255,255,255,.13) !important; }
      body.is-embedded-agent.page-psychologue :is(input:not([type="checkbox"]):not([type="radio"]):not([type="range"]), textarea, select) { color: #f2f3f3 !important; caret-color: #f2f3f3 !important; background-color: #202223 !important; border-color: rgba(255,255,255,.16) !important; }
      body.is-embedded-agent.page-psychologue :is(input, textarea)::placeholder { color: #989b9d !important; }
      body.is-embedded-agent.page-psychologue select option { color: #f2f3f3 !important; background: #202223 !important; }
      body.is-embedded-agent.page-psychologue :is(.url-hint, .url-hint.is-busy, .url-hint.is-success, .status-msg, .comment-meta, .input-zone a) { color: #b1b3b5 !important; }
      /* Sources : les composants de cette page historique imposent leurs
         propres blancs. On les ramène dans la palette sombre V2, ici dans
         l'iframe uniquement. */
      body.is-embedded-agent.page-psychologue .input-card {
        background: linear-gradient(135deg, #1d1d19, #171815) !important;
        border-color: rgba(240,210,162,.24) !important;
      }
      body.is-embedded-agent.page-psychologue :is(.src-tabs, .card-footer) { border-color: rgba(240,210,162,.18) !important; }
      body.is-embedded-agent.page-psychologue .src-tab { color: #9d9589 !important; }
      body.is-embedded-agent.page-psychologue .src-tab.active { color: #f1dfc3 !important; }
      body.is-embedded-agent.page-psychologue .src-tab::after { background: #e0b978 !important; }
      body.is-embedded-agent.page-psychologue .src-tab:hover:not(.active) { color: #efe0ca !important; background: rgba(214,174,109,.08) !important; }
      body.is-embedded-agent.page-psychologue .source-platform {
        border-color: rgba(240,210,162,.23) !important;
        background: #26241f !important;
        color: #d7cbb9 !important;
      }
      body.is-embedded-agent.page-psychologue .source-platform:hover { border-color: #d7b273 !important; color: #fff2df !important; }
      body.is-embedded-agent.page-psychologue .source-platform.is-active {
        border-color: #e0ba7b !important;
        background: linear-gradient(135deg, #f0d29f, #d2a466) !important;
        color: #281e13 !important;
      }
      body.is-embedded-agent.page-psychologue .source-platform:not(.is-active) .source-platform-mark { color: #ead5b8 !important; background: rgba(240,210,162,.13) !important; }
      body.is-embedded-agent.page-psychologue .source-platform.is-active .source-platform-mark { color: #2a1d10 !important; background: rgba(255,249,238,.7) !important; }
      body.is-embedded-agent.page-psychologue .source-link-row {
        border-color: rgba(240,210,162,.25) !important;
        background: #20201b !important;
      }
      body.is-embedded-agent.page-psychologue .source-link-row:focus-within { border-color: #dbb576 !important; box-shadow: 0 0 0 3px rgba(219,181,118,.12) !important; }
      body.is-embedded-agent.page-psychologue .source-link-row > svg { color: #e8cfaa !important; }
      body.is-embedded-agent.page-psychologue .source-link-row .input { color: #f2eadf !important; background: transparent !important; }
      body.is-embedded-agent.page-psychologue .url-check-btn.source-submit { background: #e3bf86 !important; color: #251b10 !important; }
      body.is-embedded-agent.page-psychologue .url-check-btn.source-submit:hover { background: #f0d3a2 !important; }
      body.is-embedded-agent.page-psychologue .source-example { color: #9f9688 !important; }
      body.is-embedded-agent.page-psychologue .analyse-btn {
        border-color: #e2bd83 !important;
        background: linear-gradient(135deg, #f1d3a0, #d2a566) !important;
        color: #261b10 !important;
      }
      body.is-embedded-agent.page-psychologue .analyse-btn:hover { background: #f5dcb0 !important; border-color: #f5dcb0 !important; color: #261b10 !important; }
    `:``}
  `:`
    /* Contrat d'intégration V2 : le shell Gabriel possède déjà l'identité
       d'Ariane et son panneau de progression. L'iframe ne rend donc que le
       parcours central. Les éléments historiques restent dans le DOM pour
       leurs contrôleurs, mais ne créent plus de seconde colonne ni de
       scrollbar concurrente. */
    body.is-embedded-agent.page-stratege .ctx-panel,
    body.is-embedded-agent.page-stratege .ctx-panel.step-welcome {
      grid-template-columns: minmax(0, 1fr) !important;
      grid-template-rows: minmax(0, 1fr) auto !important;
      padding-right: 0 !important;
    }
    body.is-embedded-agent.page-stratege .ctx-panel::before,
    body.is-embedded-agent.page-stratege .ctx-panel::after {
      display: none !important;
      content: none !important;
    }
    body.is-embedded-agent.page-stratege .ctx-panel .interview-side,
    body.is-embedded-agent.page-stratege .ctx-panel.step-welcome .interview-side,
    body.is-embedded-agent.page-stratege :is(.interview-progress-btn, .interview-progress-backdrop, .interview-progress-close, .pipeline-bar) {
      display: none !important;
    }
    body.is-embedded-agent.page-stratege :is(.interview-gate, .chat-window) {
      grid-column: 1 !important;
    }

    /* Géométrie du parcours intégré — la zone centrale et le composeur
       partagent deux rangées réelles. Le contenu peut donc défiler dans la
       première sans jamais passer sous la barre de saisie. */
    html:has(body.is-embedded-agent.page-stratege) {
      height: 100% !important;
      overflow: hidden !important;
    }
    body.is-embedded-agent.page-stratege {
      height: 100vh !important;
      min-height: 0 !important;
      overflow: hidden !important;
    }
    body.is-embedded-agent.page-stratege :is(.app-layout, .app-main, .app-content, .strat-layout) {
      min-height: 0 !important;
    }
    body.is-embedded-agent.page-stratege .app-layout {
      height: 100% !important;
      overflow: hidden !important;
    }
    body.is-embedded-agent.page-stratege .app-main {
      height: 100% !important;
      overflow: hidden !important;
    }
    body.is-embedded-agent.page-stratege .app-content {
      display: flex !important;
      height: 100% !important;
      min-height: 0 !important;
      flex-direction: column !important;
      padding-bottom: 0 !important;
      overflow: hidden !important;
    }
    body.is-embedded-agent.page-stratege .strat-layout {
      display: grid !important;
      flex: 1 1 auto !important;
      height: 100% !important;
      min-height: 0 !important;
      grid-template-rows: minmax(0, 1fr) !important;
      align-items: stretch !important;
      overflow: hidden !important;
    }
    body.is-embedded-agent.page-stratege .ctx-panel,
    body.is-embedded-agent.page-stratege .ctx-panel.step-welcome {
      box-sizing: border-box !important;
      height: 100% !important;
      min-height: 0 !important;
      max-height: 100% !important;
      align-self: stretch !important;
      overflow: hidden !important;
    }
    body.is-embedded-agent.page-stratege :is(.interview-gate, .chat-window) {
      grid-row: 1 !important;
    }
    body.is-embedded-agent.page-stratege .chat-input-row {
      grid-row: 2 !important;
    }
    body.is-embedded-agent.page-stratege .interview-gate {
      box-sizing: border-box !important;
      width: min(100%, 920px) !important;
      height: 100% !important;
      min-height: 0 !important;
      max-height: 100% !important;
      padding: clamp(30px, 5vh, 54px) clamp(28px, 6vw, 72px) clamp(26px, 4vh, 46px) !important;
      overflow-x: hidden !important;
      overflow-y: auto !important;
      overscroll-behavior: contain !important;
      scrollbar-gutter: stable !important;
    }
    body.is-embedded-agent.page-stratege #gate-welcome .gate-eyebrow {
      margin-bottom: clamp(14px, 2.4vh, 24px) !important;
    }
    body.is-embedded-agent.page-stratege #gate-welcome .gate-sub {
      margin-top: clamp(18px, 2.8vh, 28px) !important;
    }
    body.is-embedded-agent.page-stratege #gate-welcome .gate-next {
      margin-top: clamp(28px, 4vh, 44px) !important;
    }
    body.is-embedded-agent.page-stratege .chat-window {
      box-sizing: border-box !important;
      height: 100% !important;
      min-height: 0 !important;
      max-height: 100% !important;
      overflow: hidden !important;
    }
    body.is-embedded-agent.page-stratege .chat-messages {
      flex: 1 1 auto !important;
      min-height: 0 !important;
      max-height: none !important;
      overflow-y: auto !important;
      overscroll-behavior: contain !important;
      scrollbar-gutter: stable !important;
    }

    /* Composeur du Stratège — même respiration que l'Atelier du Créateur,
       avec une hiérarchie adaptée à la décision : la demande occupe la
       première ligne, les outils restent discrets dans le socle. */
    body.is-embedded-agent.page-stratege:not(.strategy-studio-preview) .chat-input-row {
      box-sizing: border-box !important;
      display: grid !important;
      grid-template-columns: 36px minmax(0, 1fr) 36px 48px !important;
      grid-template-rows: minmax(70px, auto) 48px !important;
      column-gap: 8px !important;
      row-gap: 5px !important;
      align-items: center !important;
      width: min(820px, calc(100% - 48px)) !important;
      max-width: 820px !important;
      min-height: 154px !important;
      margin: 0 auto 14px !important;
      padding: 18px 18px 15px !important;
      overflow: visible !important;
      border: 1px solid rgba(102, 114, 125, .24) !important;
      border-radius: 24px !important;
      background: #fff !important;
      box-shadow: 0 18px 42px -34px rgba(25, 31, 36, .55) !important;
      transform: none !important;
      transition: border-color .18s ease, box-shadow .18s ease !important;
    }
    body.is-embedded-agent.page-stratege:not(.strategy-studio-preview) .chat-input-row:focus-within {
      border-color: rgba(102, 114, 125, .58) !important;
      box-shadow: 0 22px 48px -36px rgba(25, 31, 36, .62) !important;
    }
    body.is-embedded-agent.page-stratege:not(.strategy-studio-preview) .chat-input {
      grid-column: 1 / -1 !important;
      grid-row: 1 !important;
      align-self: stretch !important;
      width: 100% !important;
      min-width: 0 !important;
      min-height: 66px !important;
      max-height: 142px !important;
      padding: 2px 4px !important;
      color: #26292c !important;
      font-size: 15px !important;
      line-height: 1.55 !important;
      caret-color: #66727d !important;
    }
    body.is-embedded-agent.page-stratege:not(.strategy-studio-preview) .chat-input::placeholder { color: #8c9195 !important; }
    body.is-embedded-agent.page-stratege:not(.strategy-studio-preview) :is(.compose-add, .mic-btn) {
      width: 36px !important;
      height: 36px !important;
      min-width: 36px !important;
      align-self: center !important;
      border: 0 !important;
      border-radius: 50% !important;
      background: transparent !important;
      color: #747b80 !important;
    }
    body.is-embedded-agent.page-stratege:not(.strategy-studio-preview) .compose-add { grid-column: 1 !important; grid-row: 2 !important; }
    body.is-embedded-agent.page-stratege:not(.strategy-studio-preview) .mic-btn { grid-column: 3 !important; grid-row: 2 !important; }
    body.is-embedded-agent.page-stratege:not(.strategy-studio-preview) :is(.compose-add, .mic-btn):hover {
      background: #f2f4f5 !important;
      color: #48535c !important;
    }
    body.is-embedded-agent.page-stratege:not(.strategy-studio-preview) :is(.compose-add, .mic-btn) svg {
      width: 21px !important;
      height: 21px !important;
      stroke: currentColor !important;
      fill: none !important;
      stroke-width: 1.8 !important;
      stroke-linecap: round !important;
      stroke-linejoin: round !important;
    }
    body.is-embedded-agent.page-stratege:not(.strategy-studio-preview) .review-restart-btn {
      grid-column: 2 !important;
      grid-row: 2 !important;
      justify-self: start !important;
      align-self: center !important;
      height: 34px !important;
      padding: 0 12px !important;
      border-color: #e0e3e4 !important;
      color: #667078 !important;
    }
    body.is-embedded-agent.page-stratege:not(.strategy-studio-preview) .chat-send {
      grid-column: 4 !important;
      grid-row: 2 !important;
      width: 48px !important;
      height: 48px !important;
      min-width: 48px !important;
      align-self: center !important;
      border: 0 !important;
      border-radius: 50% !important;
      background: #111416 !important;
      color: #fff !important;
      box-shadow: none !important;
    }
    body.is-embedded-agent.page-stratege:not(.strategy-studio-preview) .chat-send:hover { background: #273038 !important; }
    body.is-embedded-agent.page-stratege:not(.strategy-studio-preview) .chat-send svg {
      width: 23px !important;
      height: 23px !important;
      stroke: currentColor !important;
      fill: none !important;
      stroke-width: 1.8 !important;
      stroke-linecap: round !important;
      stroke-linejoin: round !important;
    }
    body.is-embedded-agent.page-stratege:not(.strategy-studio-preview) .strat-layout.has-strategy .chat-input-row {
      position: fixed !important;
      z-index: 340 !important;
      left: 50% !important;
      right: auto !important;
      bottom: max(18px, env(safe-area-inset-bottom)) !important;
      width: min(820px, calc(100vw - 56px)) !important;
      max-width: 820px !important;
      margin: 0 !important;
      transform: translateX(-50%) !important;
    }
    body.is-embedded-agent.page-stratege.gv2-strategy-report-active #strat-dashboard.sfb-report { padding-bottom: 190px !important; }
    @media (max-width: 700px) {
      body.is-embedded-agent.page-stratege:not(.strategy-studio-preview) .chat-input-row,
      body.is-embedded-agent.page-stratege:not(.strategy-studio-preview) .strat-layout.has-strategy .chat-input-row {
        grid-template-columns: 34px minmax(0, 1fr) 34px 44px !important;
        grid-template-rows: minmax(54px, auto) 44px !important;
        width: calc(100% - 20px) !important;
        max-width: none !important;
        min-height: 128px !important;
        padding: 14px 13px 12px !important;
        border-radius: 20px !important;
      }
      body.is-embedded-agent.page-stratege:not(.strategy-studio-preview) .chat-input { min-height: 50px !important; font-size: 14px !important; }
      body.is-embedded-agent.page-stratege:not(.strategy-studio-preview) .chat-send { width: 44px !important; height: 44px !important; min-width: 44px !important; }
    }
    /* Réponses d'Ariane — aucune bulle décorative : une colonne éditoriale
       calme, puis les outils réellement utiles en gris secondaire. */
    body.is-embedded-agent.page-stratege .chat-messages {
      padding: clamp(24px, 4vw, 46px) clamp(24px, 6vw, 62px) 18px !important;
      gap: clamp(25px, 4vh, 38px) !important;
    }
    body.is-embedded-agent.page-stratege .msg.agent:not(#typing) {
      align-self: center !important;
      width: min(720px, 100%) !important;
      max-width: 100% !important;
      margin: 0 auto !important;
      gap: 0 !important;
    }
    body.is-embedded-agent.page-stratege .msg.agent:not(#typing)::before,
    body.is-embedded-agent.page-stratege .msg.agent:not(#typing) .msg-time { display: none !important; }
    body.is-embedded-agent.page-stratege .msg.agent:not(#typing) .msg-bubble {
      padding: 0 !important;
      border: 0 !important;
      border-radius: 0 !important;
      background: transparent !important;
      color: #171a1c !important;
      font-family: 'Creato Display', Arial, sans-serif !important;
      font-size: clamp(16px, 1.65vw, 19px) !important;
      font-weight: 400 !important;
      letter-spacing: -.016em !important;
      line-height: 1.72 !important;
    }
    body.is-embedded-agent.page-stratege .msg.agent:not(#typing).stance-challenge .msg-bubble,
    body.is-embedded-agent.page-stratege .msg.agent:not(#typing).stance-contradict .msg-bubble {
      padding-left: 18px !important;
      border-left: 1px solid rgba(102, 114, 125, .48) !important;
    }
    body.is-embedded-agent.page-stratege .msg.agent:not(#typing) .msg-observation {
      margin: 0 0 16px !important;
      padding: 0 0 12px !important;
      border-bottom: 1px solid #e4e6e7 !important;
      color: #66727d !important;
      font-size: 12px !important;
      line-height: 1.55 !important;
    }
    body.is-embedded-agent.page-stratege .msg.agent:not(#typing) .msg-observation span {
      margin-bottom: 5px !important;
      color: #8b9297 !important;
      font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace !important;
      font-size: 9px !important;
      letter-spacing: .13em !important;
    }
    body.is-embedded-agent.page-stratege .gv2-strategist-reply-actions {
      display: flex !important;
      align-items: center !important;
      flex-wrap: wrap !important;
      gap: 18px !important;
      margin-top: 22px !important;
    }
    body.is-embedded-agent.page-stratege .gv2-strategist-reply-action {
      display: inline-flex !important;
      align-items: center !important;
      gap: 7px !important;
      min-height: 30px !important;
      padding: 3px 0 !important;
      border: 0 !important;
      border-radius: 0 !important;
      background: transparent !important;
      color: #747a7f !important;
      font-family: 'Creato Display', Arial, sans-serif !important;
      font-size: 12px !important;
      font-weight: 400 !important;
      cursor: pointer !important;
      transition: color .16s ease !important;
    }
    body.is-embedded-agent.page-stratege .gv2-strategist-reply-action:hover { color: #273139 !important; }
    body.is-embedded-agent.page-stratege .gv2-strategist-reply-action svg {
      width: 18px !important;
      height: 18px !important;
      stroke: currentColor !important;
      fill: none !important;
      stroke-width: 1.7 !important;
      stroke-linecap: round !important;
      stroke-linejoin: round !important;
    }
    body.is-embedded-agent.page-stratege #typing {
      width: min(720px, 100%) !important;
      max-width: 100% !important;
      margin-inline: auto !important;
    }
    body.is-embedded-agent.page-stratege #typing .msg-bubble {
      padding: 0 !important;
      border: 0 !important;
      background: transparent !important;
      font-size: 13px !important;
    }
    @media (max-width: 700px) {
      body.is-embedded-agent.page-stratege .chat-messages { padding: 20px 18px 14px !important; gap: 24px !important; }
      body.is-embedded-agent.page-stratege .msg.agent:not(#typing) .msg-bubble { font-size: 15px !important; line-height: 1.65 !important; }
      body.is-embedded-agent.page-stratege .gv2-strategist-reply-actions { margin-top: 17px !important; gap: 15px !important; }
    }
    /* Entretien d'Ariane : la page historique distribuait le titre, le micro
       et l'action sur toute la hauteur. Dans la colonne V2 ils forment un
       seul moment de réponse, lisible et compact. */
    body.is-embedded-agent.page-stratege .app-content {
      padding: 0 !important;
    }
    body.is-embedded-agent.page-stratege .interview-session-bar {
      padding-bottom: 8px !important;
      margin-bottom: 8px !important;
    }
    body.is-embedded-agent.page-stratege #gate-intro {
      justify-content: center !important;
      gap: 0 !important;
      padding: clamp(28px, 5vh, 62px) 24px 32px !important;
    }
    body.is-embedded-agent.page-stratege #gate-intro .gate-eyebrow {
      align-self: center !important;
      margin: 0 0 25px !important;
      font-size: clamp(19px, 2vw, 25px) !important;
    }
    body.is-embedded-agent.page-stratege #gate-intro .gate-mic {
      width: 64px !important;
      height: 64px !important;
    }
    body.is-embedded-agent.page-stratege #gate-intro .gate-mic svg {
      width: 45px !important;
      height: 45px !important;
    }
    body.is-embedded-agent.page-stratege #gate-intro .gate-question {
      margin: 20px 0 0 !important;
      max-width: 590px !important;
      line-height: 1.65 !important;
    }
    body.is-embedded-agent.page-stratege #gate-intro .gate-actions { margin-top: 18px !important; }
    /* Audio Ariane : l'invitation et le moment d'écoute deviennent une seule
       surface calme, avec les vrais contrôles existants de l'entretien. */
    body.is-embedded-agent.page-stratege #gate-intro {
      width: min(430px, calc(100% - 48px)) !important;
      height: 416px !important;
      min-height: 0 !important;
      max-height: calc(100% - 30px) !important;
      box-sizing: border-box !important;
      align-self: center !important;
      justify-self: center !important;
      border: 1px solid rgba(83,76,67,.08) !important;
      border-radius: 24px !important;
      background: linear-gradient(145deg, rgba(255,255,255,.94), rgba(247,246,243,.82)) !important;
      box-shadow: inset 0 1px 0 rgba(255,255,255,.98), 0 18px 42px rgba(41,37,31,.055) !important;
      backdrop-filter: blur(24px) saturate(125%) !important;
      -webkit-backdrop-filter: blur(24px) saturate(125%) !important;
    }
    body.is-embedded-agent.page-stratege #gate-intro .gate-eyebrow {
      color: #72695d !important;
      font-size: 11px !important;
      font-weight: 650 !important;
      letter-spacing: .12em !important;
      text-transform: uppercase !important;
    }
    body.is-embedded-agent.page-stratege #gate-intro .gate-mic {
      position: relative !important;
      width: 72px !important;
      height: 72px !important;
      border: 1px solid rgba(48,44,38,.12) !important;
      border-radius: 50% !important;
      background: linear-gradient(145deg, #2b2823, #171613) !important;
      color: #f5d9a8 !important;
      box-shadow: inset 0 1px 0 rgba(255,255,255,.12), 0 10px 22px rgba(32,28,22,.14) !important;
    }
    body.is-embedded-agent.page-stratege #gate-intro .gate-mic::before { display: none !important; }
    body.is-embedded-agent.page-stratege #gate-intro .gate-mic svg { width: 29px !important; height: 29px !important; stroke: currentColor !important; }
    body.is-embedded-agent.page-stratege #gate-intro .gate-question { min-height: 46px !important; color: #5f594f !important; font-size: 13px !important; text-align: center !important; }
    body.is-embedded-agent.page-stratege #gate-intro .gate-question:empty::before { content: 'Expliquez votre besoin avec vos propres mots. Ariane structure ensuite les priorités.'; }
    body.is-embedded-agent.page-stratege #gate-intro .gate-write { color: #71685d !important; }
    body.is-embedded-agent.page-stratege .chat-window.is-recording .listening-overlay {
      inset: 20px !important;
      border: 1px solid rgba(196,157,99,.2) !important;
      border-radius: 28px !important;
      background: linear-gradient(145deg, rgba(255,255,255,.9), rgba(239,237,231,.82)) !important;
      box-shadow: inset 0 1px 0 rgba(255,255,255,.95), 0 24px 56px rgba(41,37,31,.12) !important;
      backdrop-filter: blur(26px) saturate(125%) !important;
      -webkit-backdrop-filter: blur(26px) saturate(125%) !important;
    }
    body.is-embedded-agent.page-stratege .listening-kicker { display: block !important; color: #9a7648 !important; }
    body.is-embedded-agent.page-stratege .listening-title { display: block !important; margin: 0 0 10px !important; color: #24211d !important; font-size: 29px !important; font-weight: 430 !important; letter-spacing: -.045em !important; }
    body.is-embedded-agent.page-stratege .listening-copy { display: block !important; max-width: 320px !important; margin: 0 0 22px !important; color: #756d63 !important; font-size: 12px !important; line-height: 1.55 !important; }
    body.is-embedded-agent.page-stratege .listening-transcript { min-height: 70px !important; margin-bottom: 20px !important; color: #4c463e !important; }
    body.is-embedded-agent.page-stratege .listening-mic-btn {
      width: 68px !important; height: 68px !important; margin-bottom: 20px !important;
      border-color: rgba(196,157,99,.34) !important;
      background: linear-gradient(145deg, #f4dfbb, #dfb679) !important;
    }
    body.is-embedded-agent.page-stratege .listening-mic-btn svg { stroke: #2a1e11 !important; }
    body.is-embedded-agent.page-stratege .listening-wave span { background: #b28752 !important; }
    body.is-embedded-agent.page-stratege .listening-action.primary { background: #2b2823 !important; border-color: #2b2823 !important; color: #fffaf1 !important; }
    /* Architecture de l'écoute : pendant l'enregistrement il n'y a qu'un
       centre de gravité. Les réglages de voix et la barre de session ne
       viennent pas concurrencer l'écoute ou se superposer à la carte. */
    body.is-embedded-agent.page-stratege .ctx-panel[data-interview-state="listening"] .interview-session-bar,
    body.is-embedded-agent.page-stratege .ctx-panel[data-interview-state="listening"] .chat-input-row,
    body.is-embedded-agent.page-stratege .chat-window.is-recording .voice-toolbar { display: none !important; }
    body.is-embedded-agent.page-stratege .chat-window.is-recording .listening-overlay {
      top: 50% !important;
      right: auto !important;
      bottom: auto !important;
      left: 50% !important;
      width: min(560px, calc(100% - 56px)) !important;
      height: min(500px, calc(100% - 40px)) !important;
      min-height: 0 !important;
      padding: 30px 34px 26px !important;
      transform: translate(-50%, -50%) !important;
      box-sizing: border-box !important;
      justify-content: center !important;
    }
    body.is-embedded-agent.page-stratege .chat-window.is-recording .listening-transcript {
      min-height: 58px !important;
      margin-bottom: 16px !important;
    }
    body.is-embedded-agent.page-stratege .chat-window.is-recording .listening-mic-btn { margin-bottom: 16px !important; }
    body.is-embedded-agent.page-stratege .chat-window.is-recording .listening-wave { margin-bottom: 10px !important; }
    body.is-embedded-agent.page-stratege .chat-window.is-recording .listening-meta { margin-bottom: 18px !important; }
    body.is-embedded-agent.page-stratege .chat-window.is-recording .listening-actions { width: 100% !important; gap: 8px !important; }
    body.is-embedded-agent.page-stratege .chat-window.is-recording .listening-action { flex: 1 1 0 !important; padding: 9px 10px !important; }
    /* Signal audio V2 : une lumière circule sur le contour plutôt qu'un
       effet massif. La surface reste lisible, le mouvement n'apparaît que
       pendant l'écoute et respecte la préférence de mouvement réduite. */
    body.is-embedded-agent.page-stratege .chat-window.is-recording .listening-overlay {
      isolation: isolate !important;
      overflow: hidden !important;
      border-color: rgba(116,99,248,.35) !important;
      box-shadow: inset 0 1px 0 rgba(255,255,255,.95), 0 22px 58px rgba(66,58,116,.13), 0 0 0 1px rgba(181,146,255,.06) !important;
    }
    body.is-embedded-agent.page-stratege .chat-window.is-recording .listening-overlay::before {
      position: absolute !important;
      z-index: 0 !important;
      inset: -42% !important;
      border-radius: inherit !important;
      background: conic-gradient(from 20deg, transparent 0deg, transparent 68deg, rgba(102,87,255,.92) 108deg, rgba(210,168,255,.72) 142deg, rgba(116,99,248,.82) 178deg, transparent 228deg, transparent 360deg) !important;
      animation: gv2-audio-neon-orbit 4.2s linear infinite !important;
      content: '' !important; pointer-events: none !important;
    }
    body.is-embedded-agent.page-stratege .chat-window.is-recording .listening-overlay::after {
      position: absolute !important;
      z-index: 1 !important;
      inset: 1px !important;
      border-radius: 27px !important;
      background: radial-gradient(circle at 50% 14%, rgba(154,137,255,.18), transparent 39%), linear-gradient(145deg, rgba(255,255,255,.93), rgba(238,238,244,.86)) !important;
      content: '' !important; pointer-events: none !important;
    }
    body.is-embedded-agent.page-stratege .chat-window.is-recording .listening-overlay > * { position: relative !important; z-index: 2 !important; }
    body.is-embedded-agent.page-stratege .chat-window.is-recording .listening-mic-btn {
      border-color: rgba(119,100,255,.68) !important;
      background: radial-gradient(circle at 36% 28%, #7062ee, #40357d 72%) !important;
      color: #fff !important;
      box-shadow: 0 0 0 7px rgba(117,99,248,.07), 0 0 28px rgba(115,96,246,.34), inset 0 1px 0 rgba(255,255,255,.32) !important;
      animation: gv2-audio-mic-breathe 1.9s ease-in-out infinite !important;
    }
    body.is-embedded-agent.page-stratege .chat-window.is-recording .listening-mic-btn::before { display: none !important; }
    body.is-embedded-agent.page-stratege .chat-window.is-recording .listening-mic-btn svg { stroke: #fff !important; }
    body.is-embedded-agent.page-stratege .chat-window.is-recording .listening-wave span { background: linear-gradient(#7465fa, #c49aff) !important; box-shadow: 0 0 8px rgba(118,101,248,.24); }
    body.is-embedded-agent.page-stratege .chat-window.is-recording .listening-kicker { color: #6d5ce7 !important; }
    body.is-embedded-agent.page-stratege .chat-window.is-recording .listening-silence { color: #735fd1 !important; }
    /* Restitution stratégique V2 — le contenu reste identique, mais chaque
       onglet devient une grille lisible. Le regard suit : décision, preuve,
       puis action, au lieu de traverser une succession de longs documents. */
    body.is-embedded-agent.page-stratege #strat-dashboard.strat-cockpit-active {
      gap: 16px !important;
      padding: 18px 20px 72px !important;
    }
    body.is-embedded-agent.page-stratege #strat-dashboard.strat-cockpit-active .strat-action-bar::before {
      font-size: clamp(24px, 2.5vw, 36px) !important;
      font-weight: 520 !important;
      letter-spacing: -.055em !important;
    }
    body.is-embedded-agent.page-stratege #strat-dashboard.strat-cockpit-active .dash-tabs {
      justify-content: flex-start !important;
      gap: clamp(16px, 2.6vw, 36px) !important;
      margin-bottom: 20px !important;
      padding: 0 4px !important;
    }
    body.is-embedded-agent.page-stratege #strat-dashboard.strat-cockpit-active .dash-tab {
      padding-bottom: 11px !important;
      font-size: 10px !important;
      letter-spacing: .09em !important;
    }
    body.is-embedded-agent.page-stratege #strat-dashboard.strat-cockpit-active .dash-panel {
      display: grid !important;
      grid-column: 1 / -1 !important;
      grid-template-columns: repeat(12, minmax(0, 1fr)) !important;
      gap: 14px !important;
      align-items: start !important;
    }
    body.is-embedded-agent.page-stratege #strat-dashboard.strat-cockpit-active .dash-panel.hidden { display: none !important; }
    body.is-embedded-agent.page-stratege #strat-dashboard.strat-cockpit-active .strat-hero,
    body.is-embedded-agent.page-stratege #strat-dashboard.strat-cockpit-active .kpi-row,
    body.is-embedded-agent.page-stratege #strat-dashboard.strat-cockpit-active :is(.strat-card--psychology, .strat-card--offer, .strat-card--opportunities, .strat-card--recommendations, .strat-card--plan, .strat-card--critique) {
      grid-column: 1 / -1 !important;
    }
    body.is-embedded-agent.page-stratege #strat-dashboard.strat-cockpit-active :is(.decision-card, .obj-card) { grid-column: span 6 !important; }
    body.is-embedded-agent.page-stratege #strat-dashboard.strat-cockpit-active :is(.strat-card--pricing, .strat-card--monetization, .strat-card--social, .strat-card--positioning, .strat-card--content, .strat-card--risks, .strat-card--indicators, .strat-card--clarify) { grid-column: span 6 !important; }
    /* Une analyse qui porte une idée complète ne doit pas s'arrêter au milieu
       du canevas : elle devient un volet éditorial, sans vide parasitaire. */
    body.is-embedded-agent.page-stratege #strat-dashboard.strat-cockpit-active .strat-card--value { grid-column: 1 / -1 !important; }
    body.is-embedded-agent.page-stratege #strat-dashboard.strat-cockpit-active .strat-hero {
      grid-template-columns: minmax(0, 1.35fr) minmax(260px, .65fr) !important;
      min-height: 0 !important;
      border-radius: 17px !important;
    }
    body.is-embedded-agent.page-stratege #strat-dashboard.strat-cockpit-active .strat-hero-body {
      min-height: 330px !important;
      padding: clamp(25px, 3.2vw, 42px) !important;
    }
    body.is-embedded-agent.page-stratege #strat-dashboard.strat-cockpit-active .strat-hero-visual { min-height: 330px !important; }
    body.is-embedded-agent.page-stratege #strat-dashboard.strat-cockpit-active .strat-hero-decision {
      max-width: 760px !important;
      font-size: clamp(27px, 3vw, 43px) !important;
      font-weight: 470 !important;
      letter-spacing: -.057em !important;
      line-height: 1.04 !important;
    }
    body.is-embedded-agent.page-stratege #strat-dashboard.strat-cockpit-active .strat-hero-week {
      max-width: 700px !important;
      margin-top: 22px !important;
      padding: 12px 14px !important;
      border-radius: 10px !important;
    }
    body.is-embedded-agent.page-stratege #strat-dashboard.strat-cockpit-active .kpi-row { gap: 14px !important; }
    body.is-embedded-agent.page-stratege #strat-dashboard.strat-cockpit-active .kpi-card {
      min-height: 132px !important;
      padding: 17px 18px !important;
      border-radius: 13px !important;
    }
    body.is-embedded-agent.page-stratege #strat-dashboard.strat-cockpit-active .kpi-value { font-size: clamp(25px, 2.25vw, 34px) !important; }
    body.is-embedded-agent.page-stratege #strat-dashboard.strat-cockpit-active .decision-card,
    body.is-embedded-agent.page-stratege #strat-dashboard.strat-cockpit-active .obj-card {
      min-height: 0 !important;
      padding: 21px 23px !important;
      border-radius: 13px !important;
    }
    body.is-embedded-agent.page-stratege #strat-dashboard.strat-cockpit-active .decision-text {
      font-size: clamp(20px, 1.85vw, 27px) !important;
      line-height: 1.22 !important;
      letter-spacing: -.04em !important;
    }
    body.is-embedded-agent.page-stratege #strat-dashboard.strat-cockpit-active .strat-card {
      min-height: 0 !important;
      padding: 19px 20px !important;
      border-radius: 14px !important;
      box-shadow: inset 0 1px 0 color-mix(in srgb, var(--text-primary) 3%, transparent) !important;
    }
    body.is-embedded-agent.page-stratege #strat-dashboard.strat-cockpit-active .dash-sec-head { margin-bottom: 13px !important; padding-bottom: 12px !important; }
    body.is-embedded-agent.page-stratege #strat-dashboard.strat-cockpit-active .dash-sec-title { font-size: 14px !important; }
    body.is-embedded-agent.page-stratege #strat-dashboard.strat-cockpit-active .psycho-used-grid { grid-template-columns: repeat(4, minmax(0, 1fr)) !important; gap: 8px !important; }
    body.is-embedded-agent.page-stratege #strat-dashboard.strat-cockpit-active .psycho-used-item {
      min-height: 0 !important;
      padding: 12px !important;
      border-radius: 9px !important;
    }
    body.is-embedded-agent.page-stratege #strat-dashboard.strat-cockpit-active .psycho-used-val { font-size: 11px !important; line-height: 1.52 !important; }
    body.is-embedded-agent.page-stratege #strat-dashboard.strat-cockpit-active .strat-card--value .value-core { margin-bottom: 15px !important; }
    body.is-embedded-agent.page-stratege #strat-dashboard.strat-cockpit-active .strat-card--value .value-rows {
      grid-template-columns: repeat(2, minmax(0, 1fr)) !important;
      gap: 10px !important;
    }
    body.is-embedded-agent.page-stratege #strat-dashboard.strat-cockpit-active .strat-card--value .value-row {
      min-height: 0 !important;
      padding: 15px 16px !important;
    }
    body.is-embedded-agent.page-stratege #strat-dashboard.strat-cockpit-active .strat-card--value .value-gap {
      margin-top: 10px !important;
      padding: 12px 15px !important;
    }
    body.is-embedded-agent.page-stratege #strat-dashboard.strat-cockpit-active .strat-card--offer .dash-sec-head { margin: 20px 22px 0 !important; }
    body.is-embedded-agent.page-stratege #strat-dashboard.strat-cockpit-active .offer-card {
      min-height: 0 !important;
      padding: 24px !important;
    }
    body.is-embedded-agent.page-stratege #strat-dashboard.strat-cockpit-active .offer-poster { min-height: 0 !important; }
    body.is-embedded-agent.page-stratege #strat-dashboard.strat-cockpit-active .offer-poster .offer-name {
      max-width: 690px !important;
      font-size: clamp(31px, 3.7vw, 51px) !important;
      line-height: .98 !important;
      letter-spacing: -.072em !important;
    }
    body.is-embedded-agent.page-stratege #strat-dashboard.strat-cockpit-active .offer-poster-message { min-height: 64px !important; }
    body.is-embedded-agent.page-stratege #strat-dashboard.strat-cockpit-active .mono-visual { min-height: 210px !important; }
    body.is-embedded-agent.page-stratege #strat-dashboard.strat-cockpit-active .opp-list {
      display: grid !important;
      grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)) !important;
      gap: 10px !important;
    }
    body.is-embedded-agent.page-stratege #strat-dashboard.strat-cockpit-active .opp-card { height: 100% !important; margin: 0 !important; padding: 14px !important; border-radius: 10px !important; }
    body.is-embedded-agent.page-stratege #strat-dashboard.strat-cockpit-active .reco-list { display: grid !important; grid-template-columns: repeat(3, minmax(0, 1fr)) !important; gap: 9px !important; }
    body.is-embedded-agent.page-stratege #strat-dashboard.strat-cockpit-active .reco-item { min-height: 124px !important; height: 100% !important; padding: 13px !important; border-radius: 10px !important; }
    body.is-embedded-agent.page-stratege #strat-dashboard.strat-cockpit-active .crit-head { margin-bottom: 12px !important; }
    body.is-embedded-agent.page-stratege #strat-dashboard.strat-cockpit-active .strat-card--critique { display: grid !important; grid-template-columns: repeat(2, minmax(0, 1fr)) !important; gap: 10px !important; }
    body.is-embedded-agent.page-stratege #strat-dashboard.strat-cockpit-active .strat-card--critique .crit-head,
    body.is-embedded-agent.page-stratege #strat-dashboard.strat-cockpit-active .strat-card--critique .crit-conf { grid-column: 1 / -1 !important; }
    body.is-embedded-agent.page-stratege #strat-dashboard.strat-cockpit-active .crit-row { margin: 0 !important; min-height: 132px !important; padding: 14px !important; border-radius: 10px !important; }
    body.is-embedded-agent.page-stratege #strat-dashboard.strat-cockpit-active .plan-tabs { margin-bottom: 14px !important; }
    body.is-embedded-agent.page-stratege #strat-dashboard.strat-cockpit-active .plan-phase { max-width: 860px !important; }
    /* Les actions après analyse sont secondaires : une seule ligne claire,
       sans la hauteur d'une nouvelle section de rapport. */
    body.is-embedded-agent.page-stratege #strat-dashboard.strat-cockpit-active .fb-card {
      display: grid !important;
      grid-template-columns: minmax(220px, auto) auto minmax(220px, 1fr) auto !important;
      align-items: center !important;
      gap: 10px 14px !important;
      min-height: 0 !important;
      padding: 15px 18px !important;
      background: color-mix(in srgb, var(--bg-card) 94%, transparent) !important;
    }
    body.is-embedded-agent.page-stratege #strat-dashboard.strat-cockpit-active .fb-title { margin: 0 !important; font-size: 12px !important; }
    body.is-embedded-agent.page-stratege #strat-dashboard.strat-cockpit-active .fb-options { margin: 0 !important; gap: 6px !important; flex-wrap: nowrap !important; }
    body.is-embedded-agent.page-stratege #strat-dashboard.strat-cockpit-active .fb-btn { padding: 7px 12px !important; }
    body.is-embedded-agent.page-stratege #strat-dashboard.strat-cockpit-active .fb-comment { min-height: 38px !important; height: 38px !important; padding: 8px 11px !important; }
    body.is-embedded-agent.page-stratege #strat-dashboard.strat-cockpit-active .fb-card > div:last-child { justify-self: end !important; }
    body.is-embedded-agent.page-stratege #strat-dashboard.strat-cockpit-active .createur-bridge-inner {
      display: grid !important;
      grid-template-columns: minmax(0, 1fr) auto !important;
      align-items: center !important;
      gap: 14px 24px !important;
      padding: 18px 20px !important;
    }
    body.is-embedded-agent.page-stratege #strat-dashboard.strat-cockpit-active .createur-bridge-header { min-width: 0 !important; }
    body.is-embedded-agent.page-stratege #strat-dashboard.strat-cockpit-active .createur-bridge-sub { max-width: 780px !important; }
    body.is-embedded-agent.page-stratege #strat-dashboard.strat-cockpit-active .createur-features { display: none !important; }
    body.is-embedded-agent.page-stratege #strat-dashboard.strat-cockpit-active .createur-send-btn { grid-column: 2 !important; grid-row: 1 !important; min-width: max-content !important; padding: 11px 14px !important; }
    @media (max-width: 920px) {
      body.is-embedded-agent.page-stratege #strat-dashboard.strat-cockpit-active .dash-panel { grid-template-columns: repeat(6, minmax(0, 1fr)) !important; }
      body.is-embedded-agent.page-stratege #strat-dashboard.strat-cockpit-active .decision-card,
      body.is-embedded-agent.page-stratege #strat-dashboard.strat-cockpit-active .obj-card,
      body.is-embedded-agent.page-stratege #strat-dashboard.strat-cockpit-active :is(.strat-card--pricing, .strat-card--monetization, .strat-card--social, .strat-card--positioning, .strat-card--content, .strat-card--risks, .strat-card--indicators, .strat-card--clarify) { grid-column: span 3 !important; }
      body.is-embedded-agent.page-stratege #strat-dashboard.strat-cockpit-active .strat-hero { grid-template-columns: 1fr !important; }
      body.is-embedded-agent.page-stratege #strat-dashboard.strat-cockpit-active .strat-hero-visual { min-height: 220px !important; }
      body.is-embedded-agent.page-stratege #strat-dashboard.strat-cockpit-active .psycho-used-grid,
      body.is-embedded-agent.page-stratege #strat-dashboard.strat-cockpit-active .reco-list { grid-template-columns: repeat(2, minmax(0, 1fr)) !important; }
      body.is-embedded-agent.page-stratege #strat-dashboard.strat-cockpit-active .fb-card { grid-template-columns: 1fr auto !important; }
      body.is-embedded-agent.page-stratege #strat-dashboard.strat-cockpit-active .fb-comment { grid-column: 1 / -1 !important; grid-row: 2 !important; }
      body.is-embedded-agent.page-stratege #strat-dashboard.strat-cockpit-active .fb-card > div:last-child { grid-column: 2 !important; grid-row: 3 !important; }
    }
    @media (max-width: 620px) {
      body.is-embedded-agent.page-stratege #strat-dashboard.strat-cockpit-active .dash-panel { grid-template-columns: 1fr !important; }
      body.is-embedded-agent.page-stratege #strat-dashboard.strat-cockpit-active .dash-panel > *,
      body.is-embedded-agent.page-stratege #strat-dashboard.strat-cockpit-active .decision-card,
      body.is-embedded-agent.page-stratege #strat-dashboard.strat-cockpit-active .obj-card,
      body.is-embedded-agent.page-stratege #strat-dashboard.strat-cockpit-active :is(.strat-card--pricing, .strat-card--monetization, .strat-card--social, .strat-card--positioning, .strat-card--content, .strat-card--risks, .strat-card--indicators, .strat-card--clarify) { grid-column: 1 !important; }
      body.is-embedded-agent.page-stratege #strat-dashboard.strat-cockpit-active .kpi-row,
      body.is-embedded-agent.page-stratege #strat-dashboard.strat-cockpit-active .psycho-used-grid,
      body.is-embedded-agent.page-stratege #strat-dashboard.strat-cockpit-active .strat-card--value .value-rows,
      body.is-embedded-agent.page-stratege #strat-dashboard.strat-cockpit-active .reco-list,
      body.is-embedded-agent.page-stratege #strat-dashboard.strat-cockpit-active .strat-card--critique { grid-template-columns: 1fr !important; }
      body.is-embedded-agent.page-stratege #strat-dashboard.strat-cockpit-active .fb-card { display: flex !important; align-items: stretch !important; flex-direction: column !important; }
      body.is-embedded-agent.page-stratege #strat-dashboard.strat-cockpit-active .fb-options { flex-wrap: wrap !important; }
      body.is-embedded-agent.page-stratege #strat-dashboard.strat-cockpit-active .fb-card > div:last-child { justify-self: auto !important; }
      body.is-embedded-agent.page-stratege #strat-dashboard.strat-cockpit-active .createur-bridge-inner { grid-template-columns: 1fr !important; }
      body.is-embedded-agent.page-stratege #strat-dashboard.strat-cockpit-active .createur-send-btn { grid-column: 1 !important; grid-row: auto !important; width: 100% !important; }
      body.is-embedded-agent.page-stratege #strat-dashboard.strat-cockpit-active .strat-hero-body { min-height: 0 !important; padding: 24px !important; }
      body.is-embedded-agent.page-stratege #strat-dashboard.strat-cockpit-active .strat-hero-decision { font-size: 31px !important; }
      body.is-embedded-agent.page-stratege #strat-dashboard.strat-cockpit-active .offer-poster { grid-template-columns: 1fr !important; gap: 15px !important; }
    }
    /* Rapport stratégique continu — adaptation de la direction éditoriale
       fournie pour Gabriel. Les données, boutons et événements restent ceux
       de la page historique ; seule leur mise en scène V2 est remplacée. */
    body.is-embedded-agent.page-stratege #strat-dashboard.gv2-strategy-report {
      --report-bg: ${n?`#181a19`:`#f4f5f3`};
      --report-rail: ${n?`#1d201e`:`#f7f8f6`};
      --report-surface: ${n?`#202321`:`#fbfcfa`};
      --report-text: ${n?`#f0f2ef`:`#171b1a`};
      --report-muted: ${n?`#9da59f`:`#7d8681`};
      --report-faint: ${n?`#747c77`:`#9ba39f`};
      --report-rule: ${n?`rgba(255,255,255,.12)`:`#dce1dd`};
      --report-accent: ${n?`#789486`:`#728d7e`};
      --report-accent-soft: ${n?`#27302b`:`#e8eeea`};
      display: grid !important;
      grid-template-columns: 220px minmax(0, 1fr) !important;
      gap: 0 !important;
      width: 100% !important;
      max-width: none !important;
      padding: 0 0 120px !important;
      color: var(--report-text) !important;
      background: linear-gradient(90deg, var(--report-rail) 0 220px, var(--report-bg) 220px) !important;
      overflow: visible !important;
      isolation: isolate !important;
    }
    html:has(body.gv2-strategy-report-active) {
      height: 100% !important;
      overflow: hidden !important;
    }
    body.is-embedded-agent.page-stratege.gv2-strategy-report-active {
      height: 100vh !important;
      min-height: 0 !important;
      overflow: hidden !important;
    }
    body.is-embedded-agent.page-stratege.gv2-strategy-report-active :is(.app-layout, .app-main) {
      height: 100% !important;
      min-height: 0 !important;
      overflow: hidden !important;
    }
    body.is-embedded-agent.page-stratege.gv2-strategy-report-active .app-content {
      flex: 1 1 auto !important;
      height: 100% !important;
      min-height: 0 !important;
      max-width: none !important;
      padding: 0 !important;
      background: var(--report-bg, ${n?`#181a19`:`#f4f5f3`}) !important;
      overflow-x: hidden !important;
      overflow-y: auto !important;
      overscroll-behavior-y: contain !important;
      scrollbar-gutter: stable !important;
      -webkit-overflow-scrolling: touch !important;
    }
    body.is-embedded-agent.page-stratege.gv2-strategy-report-active .app-content {
      scrollbar-width: thin !important;
      scrollbar-color: color-mix(in srgb, var(--report-muted) 48%, transparent) transparent !important;
    }
    body.is-embedded-agent.page-stratege.gv2-strategy-report-active .app-content::-webkit-scrollbar { width: 9px !important; }
    body.is-embedded-agent.page-stratege.gv2-strategy-report-active .app-content::-webkit-scrollbar-track { background: transparent !important; }
    body.is-embedded-agent.page-stratege.gv2-strategy-report-active .app-content::-webkit-scrollbar-thumb {
      border: 3px solid transparent !important;
      border-radius: 999px !important;
      background: color-mix(in srgb, var(--report-muted) 48%, transparent) !important;
      background-clip: padding-box !important;
    }
    body.is-embedded-agent.page-stratege .strat-layout.has-strategy:has(#strat-dashboard.gv2-strategy-report) > .ctx-panel {
      display: none !important;
    }
    body.is-embedded-agent.page-stratege .strat-layout.has-strategy:has(#strat-dashboard.gv2-strategy-report),
    body.is-embedded-agent.page-stratege .strat-layout.has-strategy:has(#strat-dashboard.gv2-strategy-report) #strat-right {
      width: 100% !important;
      max-width: none !important;
      margin: 0 !important;
      padding: 0 !important;
      background: var(--report-bg, ${n?`#181a19`:`#f4f5f3`}) !important;
    }
    body.is-embedded-agent.page-stratege #strat-dashboard.gv2-strategy-report > * {
      grid-column: 2 !important;
      min-width: 0 !important;
      color: var(--report-text) !important;
      box-sizing: border-box !important;
    }
    body.is-embedded-agent.page-stratege #strat-dashboard.gv2-strategy-report .dash-tabs {
      /* Le sommaire reste visible, mais ne participe pas au calcul des lignes
         de la grille. Avec position: sticky + height: 100vh, la première
         ligne prenait toute la hauteur de l'écran et créait un grand vide
         entre l'en-tête et la première section du rapport. */
      position: fixed !important;
      z-index: 14 !important;
      top: 0 !important;
      left: 0 !important;
      grid-column: 1 !important;
      align-self: start !important;
      display: flex !important;
      flex-direction: column !important;
      align-items: stretch !important;
      justify-content: flex-start !important;
      gap: 2px !important;
      width: 220px !important;
      height: 100vh !important;
      margin: 0 !important;
      padding: 38px 20px 22px !important;
      border: 0 !important;
      border-right: 1px solid var(--report-rule) !important;
      background: color-mix(in srgb, var(--report-rail) 94%, transparent) !important;
      backdrop-filter: blur(16px) !important;
      -webkit-backdrop-filter: blur(16px) !important;
    }
    body.is-embedded-agent.page-stratege #strat-dashboard.gv2-strategy-report .gv2-strategy-report-nav-head {
      display: flex !important;
      flex-direction: column !important;
      gap: 5px !important;
      margin-bottom: 30px !important;
      padding-bottom: 25px !important;
      border-bottom: 1px solid var(--report-rule) !important;
    }
    body.is-embedded-agent.page-stratege #strat-dashboard.gv2-strategy-report .gv2-strategy-report-nav-head > span {
      margin-bottom: 18px !important;
      color: var(--report-faint) !important;
      font-family: ui-monospace, SFMono-Regular, Menlo, monospace !important;
      font-size: 9px !important;
      font-weight: 600 !important;
      letter-spacing: .17em !important;
      text-transform: uppercase !important;
    }
    body.is-embedded-agent.page-stratege #strat-dashboard.gv2-strategy-report .gv2-strategy-report-nav-head > strong {
      max-width: 150px !important;
      color: var(--report-text) !important;
      font-size: 15px !important;
      font-weight: 650 !important;
      line-height: 1.24 !important;
      letter-spacing: -.025em !important;
    }
    body.is-embedded-agent.page-stratege #strat-dashboard.gv2-strategy-report .gv2-strategy-report-nav-head > small {
      color: var(--report-muted) !important;
      font-size: 11px !important;
    }
    body.is-embedded-agent.page-stratege #strat-dashboard.gv2-strategy-report .dash-tab {
      position: relative !important;
      display: flex !important;
      align-items: center !important;
      width: 100% !important;
      min-height: 43px !important;
      padding: 0 10px 0 40px !important;
      border: 0 !important;
      border-radius: 8px !important;
      color: var(--report-muted) !important;
      background: transparent !important;
      font-family: inherit !important;
      font-size: 12px !important;
      font-weight: 450 !important;
      line-height: 1 !important;
      letter-spacing: -.01em !important;
      text-align: left !important;
      text-transform: none !important;
      transition: color .2s ease, background .2s ease !important;
    }
    body.is-embedded-agent.page-stratege #strat-dashboard.gv2-strategy-report .dash-tab::before {
      position: absolute !important;
      left: 12px !important;
      color: var(--report-faint) !important;
      content: attr(data-report-number) !important;
      font-family: ui-monospace, SFMono-Regular, Menlo, monospace !important;
      font-size: 9px !important;
      letter-spacing: .08em !important;
    }
    body.is-embedded-agent.page-stratege #strat-dashboard.gv2-strategy-report .dash-tab::after { display: none !important; }
    body.is-embedded-agent.page-stratege #strat-dashboard.gv2-strategy-report .dash-tab:hover,
    body.is-embedded-agent.page-stratege #strat-dashboard.gv2-strategy-report .dash-tab.active {
      color: var(--report-text) !important;
      background: var(--report-accent-soft) !important;
      font-weight: 620 !important;
    }
    body.is-embedded-agent.page-stratege #strat-dashboard.gv2-strategy-report .gv2-strategy-report-nav-foot {
      display: flex !important;
      align-items: center !important;
      gap: 10px !important;
      margin-top: auto !important;
      padding-top: 18px !important;
      border-top: 1px solid var(--report-rule) !important;
      color: var(--report-muted) !important;
    }
    body.is-embedded-agent.page-stratege #strat-dashboard.gv2-strategy-report .gv2-strategy-report-nav-foot > span {
      display: grid !important;
      width: 29px !important;
      height: 29px !important;
      place-items: center !important;
      border: 1px solid var(--report-rule) !important;
      border-radius: 50% !important;
      color: var(--report-accent) !important;
      font-size: 13px !important;
    }
    body.is-embedded-agent.page-stratege #strat-dashboard.gv2-strategy-report .gv2-strategy-report-nav-foot p {
      display: flex !important;
      flex-direction: column !important;
      gap: 3px !important;
      margin: 0 !important;
      font-size: 10px !important;
      line-height: 1.2 !important;
    }
    body.is-embedded-agent.page-stratege #strat-dashboard.gv2-strategy-report .gv2-strategy-report-nav-foot small { color: var(--report-faint) !important; font-size: 8px !important; }
    body.is-embedded-agent.page-stratege #strat-dashboard.gv2-strategy-report .strat-action-bar {
      grid-column: 2 !important;
      grid-row: 1 !important;
      display: grid !important;
      grid-template-columns: minmax(0, 1fr) auto auto !important;
      align-items: end !important;
      gap: 18px !important;
      min-height: 132px !important;
      margin: 0 !important;
      padding: 38px clamp(32px, 5vw, 76px) 28px !important;
      border-bottom: 1px solid var(--report-rule) !important;
      background: var(--report-bg) !important;
    }
    body.is-embedded-agent.page-stratege #strat-dashboard.gv2-strategy-report .strat-action-bar::before {
      align-self: end !important;
      margin: 0 !important;
      color: var(--report-text) !important;
      content: 'Rapport stratégique' !important;
      font-size: clamp(30px, 3.2vw, 46px) !important;
      font-weight: 480 !important;
      line-height: .92 !important;
      letter-spacing: -.072em !important;
    }
    body.is-embedded-agent.page-stratege #strat-dashboard.gv2-strategy-report :is(.strat-result-label, .regen-btn) {
      align-self: center !important;
      color: var(--report-muted) !important;
      border-color: var(--report-rule) !important;
      background: transparent !important;
    }
    body.is-embedded-agent.page-stratege #strat-dashboard.gv2-strategy-report .dash-panel,
    body.is-embedded-agent.page-stratege #strat-dashboard.gv2-strategy-report .dash-panel.hidden {
      display: grid !important;
      grid-column: 2 !important;
      grid-template-columns: repeat(12, minmax(0, 1fr)) !important;
      gap: 18px !important;
      align-items: start !important;
      margin: 0 !important;
      padding: 0 clamp(32px, 5vw, 76px) 84px !important;
      border-bottom: 1px solid var(--report-rule) !important;
      background: var(--report-bg) !important;
      scroll-margin-top: 10px !important;
      animation: none !important;
    }
    body.is-embedded-agent.page-stratege #strat-dashboard.gv2-strategy-report .gv2-strategy-section-heading {
      grid-column: 1 / -1 !important;
      display: grid !important;
      grid-template-columns: minmax(180px, .32fr) minmax(0, 1fr) !important;
      align-items: end !important;
      gap: 26px !important;
      min-height: 148px !important;
      padding: 36px 0 26px !important;
      border-bottom: 1px solid var(--report-rule) !important;
    }
    body.is-embedded-agent.page-stratege #strat-dashboard.gv2-strategy-report .gv2-strategy-section-heading p {
      display: flex !important;
      gap: 18px !important;
      align-items: center !important;
      margin: 0 0 7px !important;
      color: var(--report-muted) !important;
      font-family: ui-monospace, SFMono-Regular, Menlo, monospace !important;
      font-size: 10px !important;
      font-weight: 600 !important;
      letter-spacing: .13em !important;
      text-transform: uppercase !important;
    }
    body.is-embedded-agent.page-stratege #strat-dashboard.gv2-strategy-report .gv2-strategy-section-heading p span { color: var(--report-faint) !important; }
    body.is-embedded-agent.page-stratege #strat-dashboard.gv2-strategy-report .gv2-strategy-section-heading h2 {
      max-width: 820px !important;
      margin: 0 !important;
      color: var(--report-text) !important;
      font-size: clamp(30px, 3vw, 46px) !important;
      font-weight: 470 !important;
      line-height: .98 !important;
      letter-spacing: -.07em !important;
      text-wrap: balance !important;
    }
    body.is-embedded-agent.page-stratege #strat-dashboard.gv2-strategy-report .dash-panel > :not(.gv2-strategy-section-heading) {
      color: var(--report-text) !important;
    }
    body.is-embedded-agent.page-stratege #strat-dashboard.gv2-strategy-report :is(.strat-hero, .strat-card, .decision-card, .obj-card, .kpi-card, .fb-card, .createur-bridge) {
      border-color: var(--report-rule) !important;
      border-radius: 0 !important;
      color: var(--report-text) !important;
      box-shadow: none !important;
    }
    body.is-embedded-agent.page-stratege #strat-dashboard.gv2-strategy-report :is(.strat-card, .decision-card, .obj-card, .kpi-card) {
      background: transparent !important;
    }
    body.is-embedded-agent.page-stratege #strat-dashboard.gv2-strategy-report .strat-hero {
      grid-column: 1 / -1 !important;
      grid-template-columns: minmax(0, 1.45fr) minmax(260px, .55fr) !important;
      min-height: 350px !important;
      margin-top: 18px !important;
      overflow: hidden !important;
      border: 1px solid var(--report-rule) !important;
      background: var(--report-surface) !important;
    }
    body.is-embedded-agent.page-stratege #strat-dashboard.gv2-strategy-report .strat-hero-body {
      min-height: 350px !important;
      padding: clamp(28px, 3.6vw, 52px) !important;
      background: var(--report-surface) !important;
    }
    body.is-embedded-agent.page-stratege #strat-dashboard.gv2-strategy-report .strat-hero-visual { min-height: 350px !important; border-left: 1px solid var(--report-rule) !important; }
    body.is-embedded-agent.page-stratege #strat-dashboard.gv2-strategy-report .strat-hero-portrait { filter: grayscale(1) contrast(.9) !important; }
    body.is-embedded-agent.page-stratege #strat-dashboard.gv2-strategy-report .strat-hero-decision {
      max-width: 820px !important;
      color: var(--report-text) !important;
      font-size: clamp(26px, 2.4vw, 38px) !important;
      font-weight: 470 !important;
      line-height: 1.01 !important;
      letter-spacing: -.065em !important;
    }
    body.is-embedded-agent.page-stratege #strat-dashboard.gv2-strategy-report :is(.strat-hero-kicker, .strat-hero-week-label, .dash-sec-title, .kpi-label, .value-row-label, .crit-label) {
      color: var(--report-muted) !important;
      font-family: ui-monospace, SFMono-Regular, Menlo, monospace !important;
      letter-spacing: .12em !important;
      text-transform: uppercase !important;
    }
    body.is-embedded-agent.page-stratege #strat-dashboard.gv2-strategy-report .strat-hero-week {
      border: 0 !important;
      border-top: 1px solid var(--report-rule) !important;
      border-radius: 0 !important;
      background: transparent !important;
    }
    body.is-embedded-agent.page-stratege #strat-dashboard.gv2-strategy-report .kpi-row {
      grid-column: 1 / -1 !important;
      display: grid !important;
      grid-template-columns: repeat(auto-fit, minmax(190px, 1fr)) !important;
      gap: 0 !important;
      margin: 16px 0 0 !important;
      border: 1px solid var(--report-rule) !important;
      background: transparent !important;
    }
    body.is-embedded-agent.page-stratege #strat-dashboard.gv2-strategy-report .kpi-card {
      min-height: 150px !important;
      padding: 25px !important;
      border: 0 !important;
      border-right: 1px solid var(--report-rule) !important;
    }
    body.is-embedded-agent.page-stratege #strat-dashboard.gv2-strategy-report .kpi-card:last-child { border-right: 0 !important; }
    body.is-embedded-agent.page-stratege #strat-dashboard.gv2-strategy-report .kpi-value { color: var(--report-text) !important; font-size: clamp(28px, 3vw, 44px) !important; font-weight: 480 !important; }
    body.is-embedded-agent.page-stratege #strat-dashboard.gv2-strategy-report .kpi-value.kpi-value--text {
      font-size: clamp(17px, 1.35vw, 22px) !important;
      line-height: 1.24 !important;
      letter-spacing: -.035em !important;
      overflow-wrap: anywhere !important;
    }
    body.is-embedded-agent.page-stratege #strat-dashboard.gv2-strategy-report :is(.decision-card, .obj-card) {
      grid-column: span 6 !important;
      min-height: 220px !important;
      padding: 30px !important;
      border: 1px solid var(--report-rule) !important;
    }
    body.is-embedded-agent.page-stratege #strat-dashboard.gv2-strategy-report .decision-text { color: var(--report-text) !important; font-size: clamp(23px, 2.4vw, 34px) !important; font-weight: 470 !important; }
    body.is-embedded-agent.page-stratege #strat-dashboard.gv2-strategy-report .strat-card {
      min-height: 0 !important;
      padding: 30px 0 !important;
      border: 0 !important;
      border-top: 1px solid var(--report-rule) !important;
      background: transparent !important;
    }
    body.is-embedded-agent.page-stratege #strat-dashboard.gv2-strategy-report .dash-sec-head {
      margin: 0 0 24px !important;
      padding: 0 0 18px !important;
      border-bottom: 1px solid var(--report-rule) !important;
    }
    body.is-embedded-agent.page-stratege #strat-dashboard.gv2-strategy-report .dash-sec-ico {
      color: var(--report-accent) !important;
      border-color: var(--report-rule) !important;
      background: transparent !important;
    }
    body.is-embedded-agent.page-stratege #strat-dashboard.gv2-strategy-report .dash-sec-title { color: var(--report-muted) !important; font-size: 10px !important; }
    body.is-embedded-agent.page-stratege #strat-dashboard.gv2-strategy-report .psycho-used-grid,
    body.is-embedded-agent.page-stratege #strat-dashboard.gv2-strategy-report .strat-card--value .value-rows {
      gap: 0 !important;
      border: 1px solid var(--report-rule) !important;
    }
    body.is-embedded-agent.page-stratege #strat-dashboard.gv2-strategy-report :is(.psycho-used-item, .value-row) {
      min-height: 145px !important;
      padding: 22px !important;
      border: 0 !important;
      border-right: 1px solid var(--report-rule) !important;
      border-radius: 0 !important;
      background: transparent !important;
    }
    body.is-embedded-agent.page-stratege #strat-dashboard.gv2-strategy-report :is(.psycho-used-item, .value-row):last-child { border-right: 0 !important; }
    body.is-embedded-agent.page-stratege #strat-dashboard.gv2-strategy-report .opp-list {
      grid-template-columns: repeat(3, minmax(0, 1fr)) !important;
      gap: 0 !important;
      border: 1px solid var(--report-rule) !important;
    }
    body.is-embedded-agent.page-stratege #strat-dashboard.gv2-strategy-report .opp-card {
      min-height: 260px !important;
      padding: 28px !important;
      border: 0 !important;
      border-right: 1px solid var(--report-rule) !important;
      border-radius: 0 !important;
      background: transparent !important;
    }
    body.is-embedded-agent.page-stratege #strat-dashboard.gv2-strategy-report .opp-card:first-child { background: var(--report-accent-soft) !important; }
    body.is-embedded-agent.page-stratege #strat-dashboard.gv2-strategy-report .opp-card:last-child { border-right: 0 !important; }
    body.is-embedded-agent.page-stratege #strat-dashboard.gv2-strategy-report .reco-list {
      display: flex !important;
      flex-direction: column !important;
      gap: 0 !important;
      border-top: 1px solid var(--report-rule) !important;
    }
    body.is-embedded-agent.page-stratege #strat-dashboard.gv2-strategy-report .reco-item {
      min-height: 155px !important;
      margin: 0 !important;
      padding: 26px 22px !important;
      border: 0 !important;
      border-bottom: 1px solid var(--report-rule) !important;
      border-radius: 0 !important;
      background: transparent !important;
    }
    body.is-embedded-agent.page-stratege #strat-dashboard.gv2-strategy-report .strat-card--critique {
      grid-template-columns: repeat(2, minmax(0, 1fr)) !important;
      gap: 0 !important;
      border: 1px solid var(--report-rule) !important;
      padding: 0 !important;
    }
    body.is-embedded-agent.page-stratege #strat-dashboard.gv2-strategy-report .strat-card--critique :is(.crit-head, .crit-conf) { padding: 24px !important; }
    body.is-embedded-agent.page-stratege #strat-dashboard.gv2-strategy-report .crit-row {
      min-height: 220px !important;
      margin: 0 !important;
      padding: 28px !important;
      border: 0 !important;
      border-top: 1px solid var(--report-rule) !important;
      border-right: 1px solid var(--report-rule) !important;
      border-radius: 0 !important;
      background: transparent !important;
    }
    body.is-embedded-agent.page-stratege #strat-dashboard.gv2-strategy-report .crit-row:nth-child(odd) { border-right: 0 !important; }
    body.is-embedded-agent.page-stratege #strat-dashboard.gv2-strategy-report .plan-phase {
      max-width: none !important;
      padding: 28px 0 !important;
      border-bottom: 1px solid var(--report-rule) !important;
    }
    body.is-embedded-agent.page-stratege #strat-dashboard.gv2-strategy-report :is(.fb-card, .createur-bridge) {
      grid-column: 2 !important;
      width: auto !important;
      margin: 24px clamp(32px, 5vw, 76px) 0 !important;
      border: 1px solid var(--report-rule) !important;
      background: var(--report-surface) !important;
    }
    body.is-embedded-agent.page-stratege #strat-dashboard.gv2-strategy-report :is(p, li, .obj-text, .kpi-sub, .value-row-text, .psycho-used-val, .opp-signal-text, .opp-decision-text, .opp-sub-text, .reco-signal, .crit-row-text) { color: var(--report-muted) !important; }
    /* Les panneaux historiques utilisaient douze colonnes et plusieurs blocs
       sans placement explicite. Dans un rapport continu, chacun de ces blocs
       doit occuper la ligne de lecture entière : cela évite les jauges de
       quelques pixels et les cartes tassées visibles dans le rendu réel. */
    body.is-embedded-agent.page-stratege #strat-dashboard.gv2-strategy-report .dash-panel > :not(.gv2-strategy-section-heading) {
      grid-column: 1 / -1 !important;
      width: 100% !important;
      min-width: 0 !important;
    }
    body.is-embedded-agent.page-stratege #strat-dashboard.gv2-strategy-report .conf-gauge-pair {
      grid-template-columns: repeat(2, minmax(0, 1fr)) !important;
      width: 100% !important;
      margin: 18px 0 0 !important;
    }
    /* Front End Stratège Builder — la taille suit la densité réelle du
       livrable, pas le type de carte supposé par le template historique. */
    body.is-embedded-agent.page-stratege #strat-dashboard.sfb-report [data-sfb-density] {
      min-width: 0 !important;
      max-width: 100% !important;
      text-wrap: pretty !important;
      overflow-wrap: break-word !important;
    }
    body.is-embedded-agent.page-stratege #strat-dashboard.sfb-report .sfb-empty-deliverable {
      display: none !important;
    }
    body.is-embedded-agent.page-stratege #strat-dashboard.sfb-report :is(.strat-hero-decision, .decision-text)[data-sfb-density="long"] {
      font-size: clamp(25px, 2.15vw, 34px) !important;
      line-height: 1.08 !important;
    }
    body.is-embedded-agent.page-stratege #strat-dashboard.sfb-report :is(.strat-hero-decision, .decision-text)[data-sfb-density="extended"] {
      font-size: clamp(21px, 1.75vw, 28px) !important;
      line-height: 1.14 !important;
      letter-spacing: -.045em !important;
    }
    body.is-embedded-agent.page-stratege #strat-dashboard.sfb-report .kpi-value--text[data-sfb-density="medium"] { font-size: 19px !important; }
    body.is-embedded-agent.page-stratege #strat-dashboard.sfb-report .kpi-value--text[data-sfb-density="long"] { font-size: 17px !important; line-height: 1.3 !important; }
    body.is-embedded-agent.page-stratege #strat-dashboard.sfb-report .kpi-value--text[data-sfb-density="extended"] { font-size: 15px !important; line-height: 1.36 !important; letter-spacing: -.02em !important; }
    body.is-embedded-agent.page-stratege #strat-dashboard.sfb-report :is(.opp-decision-text, .opp-signal-text, .opp-sub-text, .crit-row-text, .reco-signal)[data-sfb-density="long"] {
      font-size: 14px !important;
      line-height: 1.5 !important;
    }
    body.is-embedded-agent.page-stratege #strat-dashboard.sfb-report :is(.opp-decision-text, .opp-signal-text, .opp-sub-text, .crit-row-text, .reco-signal)[data-sfb-density="extended"] {
      font-size: 13px !important;
      line-height: 1.55 !important;
    }
    body.is-embedded-agent.page-stratege #strat-dashboard.sfb-report :is(.obj-text, .plan-item, .plan-decision, .risk-text, .risk-mitigation)[data-sfb-density="long"] {
      font-size: 13px !important;
      line-height: 1.55 !important;
    }
    body.is-embedded-agent.page-stratege #strat-dashboard.sfb-report :is(.obj-text, .plan-item, .plan-decision, .risk-text, .risk-mitigation)[data-sfb-density="extended"] {
      font-size: 12px !important;
      line-height: 1.6 !important;
    }
    body.is-embedded-agent.page-stratege #strat-dashboard.sfb-report .sfb-has-horizontal-overflow {
      max-width: 100% !important;
      overflow-x: hidden !important;
      overflow-wrap: anywhere !important;
      word-break: break-word !important;
    }
    @media (max-width: 980px) {
      body.is-embedded-agent.page-stratege #strat-dashboard.gv2-strategy-report {
        grid-template-columns: 174px minmax(0, 1fr) !important;
        background: linear-gradient(90deg, var(--report-rail) 0 174px, var(--report-bg) 174px) !important;
      }
      body.is-embedded-agent.page-stratege #strat-dashboard.gv2-strategy-report .dash-tabs { width: 174px !important; padding-inline: 13px !important; }
      body.is-embedded-agent.page-stratege #strat-dashboard.gv2-strategy-report .gv2-strategy-section-heading { grid-template-columns: 1fr !important; gap: 13px !important; }
      body.is-embedded-agent.page-stratege #strat-dashboard.gv2-strategy-report .strat-hero { grid-template-columns: 1fr !important; }
      body.is-embedded-agent.page-stratege #strat-dashboard.gv2-strategy-report .strat-hero-visual { min-height: 250px !important; border-top: 1px solid var(--report-rule) !important; border-left: 0 !important; }
      body.is-embedded-agent.page-stratege #strat-dashboard.gv2-strategy-report .kpi-row { grid-template-columns: repeat(auto-fit, minmax(180px, 1fr)) !important; }
      body.is-embedded-agent.page-stratege #strat-dashboard.gv2-strategy-report .opp-list { grid-template-columns: 1fr !important; }
      body.is-embedded-agent.page-stratege #strat-dashboard.gv2-strategy-report .opp-card { min-height: 0 !important; border-right: 0 !important; border-bottom: 1px solid var(--report-rule) !important; }
      body.is-embedded-agent.page-stratege #strat-dashboard.gv2-strategy-report .opp-card:last-child { border-bottom: 0 !important; }
    }
    @media (max-width: 700px) {
      body.is-embedded-agent.page-stratege #strat-dashboard.gv2-strategy-report {
        display: block !important;
        padding-bottom: 70px !important;
        background: var(--report-bg) !important;
      }
      body.is-embedded-agent.page-stratege #strat-dashboard.gv2-strategy-report .strat-action-bar {
        grid-template-columns: minmax(0, 1fr) auto !important;
        min-height: 130px !important;
        padding: 28px 20px 22px !important;
      }
      body.is-embedded-agent.page-stratege #strat-dashboard.gv2-strategy-report .strat-action-bar::before { font-size: 35px !important; }
      body.is-embedded-agent.page-stratege #strat-dashboard.gv2-strategy-report .strat-result-label { display: none !important; }
      body.is-embedded-agent.page-stratege #strat-dashboard.gv2-strategy-report .dash-tabs {
        position: sticky !important;
        top: 0 !important;
        left: auto !important;
        display: flex !important;
        flex-direction: row !important;
        gap: 5px !important;
        width: 100% !important;
        height: auto !important;
        padding: 9px 12px !important;
        flex-wrap: wrap !important;
        overflow-x: hidden !important;
        border-right: 0 !important;
        border-bottom: 1px solid var(--report-rule) !important;
      }
      body.is-embedded-agent.page-stratege #strat-dashboard.gv2-strategy-report :is(.gv2-strategy-report-nav-head, .gv2-strategy-report-nav-foot) { display: none !important; }
      body.is-embedded-agent.page-stratege #strat-dashboard.gv2-strategy-report .dash-tab {
        flex: 1 1 calc(33.333% - 5px) !important;
        width: auto !important;
        min-width: 88px !important;
        min-height: 36px !important;
        justify-content: center !important;
        padding: 0 8px !important;
        font-size: 11px !important;
        text-align: center !important;
        white-space: normal !important;
      }
      body.is-embedded-agent.page-stratege #strat-dashboard.gv2-strategy-report .dash-tab::before { display: none !important; }
      body.is-embedded-agent.page-stratege #strat-dashboard.gv2-strategy-report .dash-panel,
      body.is-embedded-agent.page-stratege #strat-dashboard.gv2-strategy-report .dash-panel.hidden {
        grid-template-columns: 1fr !important;
        gap: 12px !important;
        padding: 0 20px 60px !important;
      }
      body.is-embedded-agent.page-stratege #strat-dashboard.gv2-strategy-report .dash-panel > *,
      body.is-embedded-agent.page-stratege #strat-dashboard.gv2-strategy-report :is(.decision-card, .obj-card) { grid-column: 1 !important; }
      body.is-embedded-agent.page-stratege #strat-dashboard.gv2-strategy-report .gv2-strategy-section-heading { min-height: 142px !important; padding: 28px 0 22px !important; }
      body.is-embedded-agent.page-stratege #strat-dashboard.gv2-strategy-report .gv2-strategy-section-heading h2 { font-size: 32px !important; }
      body.is-embedded-agent.page-stratege #strat-dashboard.gv2-strategy-report .strat-hero-body { min-height: 0 !important; padding: 24px !important; }
      body.is-embedded-agent.page-stratege #strat-dashboard.gv2-strategy-report .strat-hero-decision { font-size: 30px !important; }
      body.is-embedded-agent.page-stratege #strat-dashboard.gv2-strategy-report .kpi-row,
      body.is-embedded-agent.page-stratege #strat-dashboard.gv2-strategy-report .psycho-used-grid,
      body.is-embedded-agent.page-stratege #strat-dashboard.gv2-strategy-report .strat-card--value .value-rows,
      body.is-embedded-agent.page-stratege #strat-dashboard.gv2-strategy-report .strat-card--critique,
      body.is-embedded-agent.page-stratege #strat-dashboard.gv2-strategy-report .conf-gauge-pair { grid-template-columns: 1fr !important; }
      body.is-embedded-agent.page-stratege #strat-dashboard.gv2-strategy-report :is(.kpi-card, .psycho-used-item, .value-row, .crit-row) { border-right: 0 !important; border-bottom: 1px solid var(--report-rule) !important; }
      body.is-embedded-agent.page-stratege #strat-dashboard.gv2-strategy-report :is(.kpi-card, .psycho-used-item, .value-row, .crit-row):last-child { border-bottom: 0 !important; }
      body.is-embedded-agent.page-stratege #strat-dashboard.gv2-strategy-report :is(.decision-card, .obj-card) { min-height: 0 !important; }
      body.is-embedded-agent.page-stratege #strat-dashboard.gv2-strategy-report :is(.fb-card, .createur-bridge) {
        width: auto !important;
        margin: 20px !important;
      }
    }
    /* Après l'écoute, Ariane reste présente pendant la mise au clair : la
       transcription est visible, puis un halo discret prend le relais. */
    body.is-embedded-agent.page-stratege .gv2-audio-thinking {
      position: absolute !important;
      z-index: 18 !important;
      inset: 20px !important;
      display: none !important;
      place-items: center !important;
      overflow: hidden !important;
      border: 1px solid rgba(112,92,248,.6) !important;
      border-radius: 28px !important;
      background: linear-gradient(136deg, rgba(255,255,255,.58), rgba(235,232,252,.46)) !important;
      box-shadow: inset 0 1px 0 rgba(255,255,255,.94), 0 24px 62px rgba(70,60,120,.16), 0 0 0 1px rgba(178,152,255,.1) !important;
      backdrop-filter: blur(27px) saturate(128%) !important;
      -webkit-backdrop-filter: blur(27px) saturate(128%) !important;
      isolation: isolate !important;
    }
    body.is-embedded-agent.page-stratege .ctx-panel[data-interview-state="transcribing"] .gv2-audio-thinking.is-active { display: grid !important; }
    body.is-embedded-agent.page-stratege .gv2-audio-thinking::before {
      position: absolute !important;
      z-index: 0 !important;
      inset: -48% !important;
      border-radius: inherit !important;
      background: conic-gradient(from 18deg, transparent 0deg, transparent 70deg, rgba(109,89,255,.82) 105deg, rgba(215,164,255,.7) 142deg, rgba(100,214,255,.78) 175deg, transparent 228deg, transparent 360deg) !important;
      animation: gv2-audio-thinking-orbit 5.4s linear infinite !important;
      content: '' !important;
      pointer-events: none !important;
    }
    body.is-embedded-agent.page-stratege .gv2-audio-thinking::after {
      position: absolute !important;
      z-index: 1 !important;
      inset: 1px !important;
      border-radius: 27px !important;
      background: radial-gradient(circle at 21% 105%, rgba(169,143,255,.2), transparent 36%), radial-gradient(circle at 93% 8%, rgba(126,207,255,.17), transparent 34%), linear-gradient(140deg, rgba(255,255,255,.7), rgba(239,239,247,.6)) !important;
      content: '' !important;
      pointer-events: none !important;
    }
    body.is-embedded-agent.page-stratege .gv2-audio-thinking-surface { position: relative !important; z-index: 2 !important; display: grid !important; width: min(440px, calc(100% - 48px)) !important; gap: 22px !important; }
    body.is-embedded-agent.page-stratege .gv2-audio-thinking-dots { display: inline-flex !important; align-items: center !important; justify-content: center !important; width: 62px !important; height: 31px !important; gap: 7px !important; border-radius: 999px !important; background: #141517 !important; box-shadow: inset 0 1px 0 rgba(255,255,255,.12), 0 7px 18px rgba(37,35,51,.16) !important; }
    body.is-embedded-agent.page-stratege .gv2-audio-thinking-dots i { width: 7px !important; height: 7px !important; border-radius: 50% !important; background: #fff !important; animation: gv2-audio-thinking-dot 1.2s ease-in-out infinite alternate !important; }
    body.is-embedded-agent.page-stratege .gv2-audio-thinking-dots i:last-child { animation-delay: .2s !important; }
    body.is-embedded-agent.page-stratege .gv2-audio-thinking-preview { display: grid !important; grid-template-columns: 27px minmax(0,1fr) 15px !important; align-items: center !important; gap: 11px !important; min-height: 70px !important; padding: 12px 16px !important; border: 1px solid rgba(92,91,108,.23) !important; border-radius: 22px !important; background: rgba(255,255,255,.3) !important; box-shadow: inset 0 1px 0 rgba(255,255,255,.52) !important; }
    body.is-embedded-agent.page-stratege .gv2-audio-thinking-preview > span { display: grid !important; width: 27px !important; height: 27px !important; place-items: center !important; border-radius: 50% !important; background: #126bb4 !important; color: #fff !important; font-size: 11px !important; font-weight: 700 !important; }
    body.is-embedded-agent.page-stratege .gv2-audio-thinking-preview p { display: -webkit-box !important; margin: 0 !important; overflow: hidden !important; color: #272830 !important; font-size: 15px !important; line-height: 1.36 !important; text-overflow: ellipsis !important; -webkit-box-orient: vertical !important; -webkit-line-clamp: 2 !important; }
    body.is-embedded-agent.page-stratege .gv2-audio-thinking-preview b { position: relative !important; display: block !important; width: 14px !important; height: 14px !important; border: 1.5px solid #555863 !important; border-radius: 3px !important; }
    body.is-embedded-agent.page-stratege .gv2-audio-thinking-preview b::after { position: absolute !important; top: -4px !important; right: -4px !important; width: 9px !important; height: 9px !important; border: 1.5px solid #555863 !important; border-radius: 2px !important; background: rgba(245,245,250,.62) !important; content: '' !important; }
    body.is-embedded-agent.page-stratege .gv2-audio-thinking-status { display: flex !important; align-items: center !important; gap: 11px !important; padding-left: 7px !important; color: #545561 !important; }
    body.is-embedded-agent.page-stratege .gv2-audio-thinking-status > i { display: block !important; width: 22px !important; height: 22px !important; border: 2px solid rgba(82,84,94,.24) !important; border-top-color: #6f5be9 !important; border-radius: 50% !important; animation: gv2-audio-thinking-spin .9s linear infinite !important; }
    body.is-embedded-agent.page-stratege .gv2-audio-thinking-status em { font-size: 18px !important; font-style: italic !important; letter-spacing: -.025em !important; }
    body.is-embedded-agent.page-stratege .gv2-audio-thinking-copy { margin: -13px 0 0 40px !important; color: #73727e !important; font-size: 11px !important; line-height: 1.5 !important; }
    @keyframes gv2-audio-neon-orbit { to { transform: rotate(360deg); } }
    @keyframes gv2-audio-mic-breathe { 0%,100% { transform: scale(1); } 50% { transform: scale(1.045); } }
    @keyframes gv2-audio-thinking-orbit { to { transform: rotate(360deg); } }
    @keyframes gv2-audio-thinking-spin { to { transform: rotate(360deg); } }
    @keyframes gv2-audio-thinking-dot { to { opacity: .4; transform: translateY(-1px); } }
    @media (prefers-reduced-motion: reduce) {
      body.is-embedded-agent.page-stratege .chat-window.is-recording .listening-overlay::before,
      body.is-embedded-agent.page-stratege .chat-window.is-recording .listening-mic-btn,
      body.is-embedded-agent.page-stratege .gv2-audio-thinking::before,
      body.is-embedded-agent.page-stratege .gv2-audio-thinking-status > i,
      body.is-embedded-agent.page-stratege .gv2-audio-thinking-dots i { animation: none !important; }
    }
    ${n?`
      body.is-embedded-agent.page-stratege #gate-intro,
      body.is-embedded-agent.page-stratege .chat-window.is-recording .listening-overlay {
        border-color: rgba(240,210,162,.2) !important;
        background: linear-gradient(145deg, rgba(53,48,40,.92), rgba(23,23,19,.91)) !important;
        box-shadow: inset 0 1px 0 rgba(255,239,214,.08), 0 24px 56px rgba(0,0,0,.28) !important;
      }
      body.is-embedded-agent.page-stratege :is(#gate-intro .gate-eyebrow, #gate-intro .gate-question, #gate-intro .gate-write, .listening-copy) { color: #d6c7b4 !important; }
      body.is-embedded-agent.page-stratege .listening-title,
      body.is-embedded-agent.page-stratege .listening-transcript { color: #f5ece0 !important; }
      body.is-embedded-agent.page-stratege .chat-window.is-recording .listening-overlay::after { background: radial-gradient(circle at 50% 14%, rgba(147,130,255,.19), transparent 39%), linear-gradient(145deg, rgba(45,42,53,.95), rgba(24,24,28,.94)) !important; }
      body.is-embedded-agent.page-stratege .chat-window.is-recording .listening-kicker { color: #c7bbff !important; }
      body.is-embedded-agent.page-stratege .chat-window.is-recording .listening-silence { color: #d5cdfa !important; }
      body.is-embedded-agent.page-stratege .gv2-audio-thinking { border-color: rgba(161,142,255,.66) !important; background: linear-gradient(140deg, rgba(52,49,69,.74), rgba(25,25,34,.72)) !important; box-shadow: inset 0 1px 0 rgba(255,255,255,.08), 0 24px 62px rgba(0,0,0,.32) !important; }
      body.is-embedded-agent.page-stratege .gv2-audio-thinking::after { background: radial-gradient(circle at 21% 105%, rgba(157,129,255,.23), transparent 36%), radial-gradient(circle at 93% 8%, rgba(116,191,255,.16), transparent 34%), linear-gradient(140deg, rgba(47,45,60,.88), rgba(25,25,32,.9)) !important; }
      body.is-embedded-agent.page-stratege .gv2-audio-thinking-preview { border-color: rgba(218,211,255,.17) !important; background: rgba(255,255,255,.055) !important; box-shadow: inset 0 1px 0 rgba(255,255,255,.08) !important; }
      body.is-embedded-agent.page-stratege .gv2-audio-thinking-preview p { color: #f3f0fa !important; }
      body.is-embedded-agent.page-stratege .gv2-audio-thinking-preview b, body.is-embedded-agent.page-stratege .gv2-audio-thinking-preview b::after { border-color: #c9c3d2 !important; background: rgba(47,45,60,.8) !important; }
      body.is-embedded-agent.page-stratege .gv2-audio-thinking-status { color: #e8e3f1 !important; }
      body.is-embedded-agent.page-stratege .gv2-audio-thinking-copy { color: #bab3c3 !important; }
    `:``}

    /* ── Entretien vocal V2 — normalisation finale ──────────────────────
       Ces règles gagnent volontairement sur les expérimentations visuelles
       précédentes. Elles conservent le DOM, les événements et les appels
       vocaux historiques, mais rendent chaque état dans la DA blanche. */
    body.is-embedded-agent.page-stratege {
      --gv2-strategist: #66727d;
      --gv2-sage: #718078;
      --gv2-champagne: #b08a52;
      --gv2-ink: #1d1d1f;
      --gv2-muted: #777b7f;
      --gv2-rule: #e3e5e6;
      --gv2-surface: #ffffff;
      background: #fff !important;
      color: var(--gv2-ink) !important;
      font-family: 'Inter Tight', 'Helvetica Neue', Arial, sans-serif !important;
    }
    body.is-embedded-agent.page-stratege :is(button, input, textarea, select) {
      font-family: 'Inter Tight', 'Helvetica Neue', Arial, sans-serif !important;
    }
    body.is-embedded-agent.page-stratege :is(.gate-eyebrow, .interview-state-kicker, .listening-kicker, .composer-agent-label) {
      font-family: 'JetBrains Mono', ui-monospace, monospace !important;
    }

    /* Le fil reste la seule zone de défilement. Le composeur occupe une
       rangée distincte : aucun message ne passe dessous. */
    body.is-embedded-agent.page-stratege .chat-window {
      display: flex !important;
      min-height: 0 !important;
      flex-direction: column !important;
      overflow: hidden !important;
      background: #fff !important;
    }
    body.is-embedded-agent.page-stratege .chat-messages {
      flex: 1 1 auto !important;
      min-height: 0 !important;
      padding: clamp(26px, 4vw, 46px) clamp(22px, 6vw, 60px) 52px !important;
      overflow-x: hidden !important;
      overflow-y: auto !important;
      scroll-behavior: smooth !important;
      scrollbar-gutter: stable !important;
    }
    body.is-embedded-agent.page-stratege .msg.agent:not(#typing) .msg-bubble,
    body.is-embedded-agent.page-stratege .gv2-strategist-reply-action {
      font-family: 'Inter Tight', 'Helvetica Neue', Arial, sans-serif !important;
    }
    body.is-embedded-agent.page-stratege .msg.agent:not(#typing) .msg-bubble {
      font-size: clamp(16px, 1.35vw, 18px) !important;
      line-height: 1.66 !important;
    }
    body.is-embedded-agent.page-stratege .msg.user {
      align-self: flex-end !important;
      width: min(520px, 72%) !important;
      max-width: 72% !important;
      margin: 0 0 0 auto !important;
      text-align: right !important;
    }
    body.is-embedded-agent.page-stratege .msg.user::before,
    body.is-embedded-agent.page-stratege .msg.user .msg-time { display: none !important; }
    body.is-embedded-agent.page-stratege .msg.user .msg-bubble {
      padding: 0 !important;
      border: 0 !important;
      background: transparent !important;
      color: #777b7f !important;
      font-family: 'Inter Tight', 'Helvetica Neue', Arial, sans-serif !important;
      font-size: 13px !important;
      line-height: 1.55 !important;
    }

    /* Command bar issue de la référence Lovable : texte sur un niveau
       dédié, commandes regroupées sur un second niveau compact. */
    body.is-embedded-agent.page-stratege:not(.strategy-studio-preview) .chat-input-row,
    body.is-embedded-agent.page-stratege:not(.strategy-studio-preview) .strat-layout.has-strategy .chat-input-row {
      position: relative !important;
      z-index: 22 !important;
      inset: auto !important;
      box-sizing: border-box !important;
      display: grid !important;
      grid-template-columns: 30px max-content minmax(0, 1fr) 34px 42px !important;
      grid-template-rows: minmax(28px, auto) 42px !important;
      column-gap: 8px !important;
      row-gap: 0 !important;
      align-items: center !important;
      justify-self: center !important;
      align-self: end !important;
      width: min(760px, calc(100% - 40px)) !important;
      max-width: 760px !important;
      min-width: 0 !important;
      min-height: 88px !important;
      margin: 0 auto max(12px, env(safe-area-inset-bottom)) !important;
      padding: 9px 10px 8px 12px !important;
      overflow: hidden !important;
      border: 1px solid rgba(102, 114, 125, .26) !important;
      border-radius: 19px !important;
      background: rgba(255, 255, 255, .98) !important;
      box-shadow: 0 18px 42px -34px rgba(25, 31, 36, .52) !important;
      transform: none !important;
    }
    body.is-embedded-agent.page-stratege:not(.strategy-studio-preview) .chat-input-row:focus-within {
      border-color: rgba(102, 114, 125, .62) !important;
      box-shadow: 0 20px 44px -34px rgba(25, 31, 36, .58) !important;
    }
    body.is-embedded-agent.page-stratege:not(.strategy-studio-preview) .chat-input {
      grid-column: 1 / -1 !important;
      grid-row: 1 !important;
      align-self: start !important;
      width: 100% !important;
      min-width: 0 !important;
      min-height: 26px !important;
      max-height: 72px !important;
      padding: 3px 5px !important;
      overflow-y: auto !important;
      color: var(--gv2-ink) !important;
      font-size: 15px !important;
      line-height: 1.45 !important;
    }
    body.is-embedded-agent.page-stratege:not(.strategy-studio-preview) .composer-agent-label {
      grid-column: 2 !important;
      grid-row: 2 !important;
      align-self: center !important;
      display: inline-flex !important;
      align-items: center !important;
      min-width: 0 !important;
      overflow: hidden !important;
      color: #8b9094 !important;
      font-size: 9px !important;
      font-weight: 500 !important;
      line-height: 1.2 !important;
      letter-spacing: .12em !important;
      text-overflow: ellipsis !important;
      text-transform: uppercase !important;
      white-space: nowrap !important;
    }
    body.is-embedded-agent.page-stratege:not(.strategy-studio-preview) .compose-add {
      grid-column: 1 !important;
      grid-row: 2 !important;
    }
    body.is-embedded-agent.page-stratege:not(.strategy-studio-preview) .mic-btn {
      grid-column: 4 !important;
      grid-row: 2 !important;
      color: var(--gv2-strategist) !important;
    }
    body.is-embedded-agent.page-stratege:not(.strategy-studio-preview) .chat-send {
      grid-column: 5 !important;
      grid-row: 2 !important;
      width: 42px !important;
      height: 42px !important;
      min-width: 42px !important;
      background: #111416 !important;
    }
    body.is-embedded-agent.page-stratege:not(.strategy-studio-preview) .review-restart-btn {
      grid-column: 2 !important;
      grid-row: 2 !important;
      z-index: 2 !important;
      height: 24px !important;
      padding: 0 !important;
      border: 0 !important;
      background: #fff !important;
      font-family: 'JetBrains Mono', ui-monospace, monospace !important;
      font-size: 9px !important;
      letter-spacing: .1em !important;
      text-transform: uppercase !important;
    }
    body.is-embedded-agent.page-stratege:not(.strategy-studio-preview) .chat-input-row:has(.review-restart-btn.active) .composer-agent-label {
      visibility: hidden !important;
    }
    body.is-embedded-agent.page-stratege.gv2-strategy-report-active #strat-dashboard.sfb-report {
      padding-bottom: 108px !important;
    }

    /* L'invitation vocale reste centrale mais n'est plus enfermée dans une
       grande carte. Le texte demeure disponible en dessous. */
    body.is-embedded-agent.page-stratege #gate-intro {
      width: min(720px, calc(100% - 40px)) !important;
      height: auto !important;
      min-height: 0 !important;
      max-height: none !important;
      padding: clamp(34px, 7vh, 64px) 24px !important;
      border: 0 !important;
      border-radius: 0 !important;
      background: transparent !important;
      box-shadow: none !important;
      backdrop-filter: none !important;
    }
    body.is-embedded-agent.page-stratege #gate-intro .gate-eyebrow {
      margin-bottom: 18px !important;
      color: var(--gv2-strategist) !important;
      font-size: 10px !important;
    }
    body.is-embedded-agent.page-stratege #gate-intro .gate-mic {
      width: 58px !important;
      height: 58px !important;
      border-color: rgba(102, 114, 125, .32) !important;
      background: #111416 !important;
      color: #fff !important;
      box-shadow: none !important;
    }
    body.is-embedded-agent.page-stratege #gate-intro .gate-question {
      max-width: 600px !important;
      min-height: 0 !important;
      margin-top: 18px !important;
      color: #4d5358 !important;
      font-size: 15px !important;
      line-height: 1.62 !important;
    }

    /* Autorisation, transcription, analyse et lecture utilisent le stage
       natif piloté par le backend. Il apparaît dans le flux, jamais en
       plein écran. */
    body.is-embedded-agent.page-stratege .interview-state-stage {
      box-sizing: border-box !important;
      display: none !important;
      width: min(720px, calc(100% - 40px)) !important;
      min-height: 104px !important;
      margin: 12px auto 0 !important;
      padding: 15px 18px !important;
      flex: 0 0 auto !important;
      flex-direction: column !important;
      align-items: flex-start !important;
      border: 1px solid var(--gv2-rule) !important;
      border-radius: 16px !important;
      background: #fff !important;
      box-shadow: none !important;
      text-align: left !important;
    }
    body.is-embedded-agent.page-stratege .ctx-panel:is(
      [data-interview-state='requesting_permission'],
      [data-interview-state='transcribing'],
      [data-interview-state='analyzing'],
      [data-interview-state='gabriel_speaking'],
      [data-interview-state='session_paused'],
      [data-interview-state='error']
    ) .interview-state-stage { display: flex !important; }
    body.is-embedded-agent.page-stratege .interview-state-kicker {
      color: var(--gv2-strategist) !important;
      font-size: 9px !important;
      font-weight: 500 !important;
      letter-spacing: .16em !important;
      text-transform: uppercase !important;
    }
    body.is-embedded-agent.page-stratege .interview-state-title {
      margin: 8px 0 3px !important;
      color: var(--gv2-ink) !important;
      font-family: 'Space Grotesk', 'Helvetica Neue', Arial, sans-serif !important;
      font-size: 20px !important;
      font-weight: 500 !important;
      letter-spacing: -.025em !important;
      line-height: 1.2 !important;
    }
    body.is-embedded-agent.page-stratege .interview-state-copy {
      margin: 0 !important;
      color: var(--gv2-muted) !important;
      font-size: 13px !important;
      line-height: 1.5 !important;
    }
    body.is-embedded-agent.page-stratege .interview-state-wave {
      width: min(210px, 55%) !important;
      height: 18px !important;
      margin-top: 10px !important;
    }
    body.is-embedded-agent.page-stratege .interview-state-wave span {
      background: var(--gv2-strategist) !important;
      box-shadow: none !important;
    }
    body.is-embedded-agent.page-stratege .gv2-audio-thinking,
    body.is-embedded-agent.page-stratege .ctx-panel[data-interview-state='transcribing'] .gv2-audio-thinking.is-active {
      display: none !important;
    }

    /* Écoute en direct : même carte compacte, dans le flux de conversation.
       Tous les gestionnaires historiques restent ceux du backend. */
    body.is-embedded-agent.page-stratege .chat-window.is-recording .listening-overlay {
      position: relative !important;
      z-index: 9 !important;
      inset: auto !important;
      box-sizing: border-box !important;
      display: grid !important;
      grid-template-columns: minmax(0, 1fr) auto !important;
      flex: 0 0 auto !important;
      width: min(720px, calc(100% - 40px)) !important;
      height: auto !important;
      min-height: 0 !important;
      max-height: none !important;
      margin: 12px auto 18px !important;
      padding: 15px 18px !important;
      align-items: center !important;
      justify-content: stretch !important;
      gap: 7px 16px !important;
      overflow: hidden !important;
      border: 1px solid rgba(102, 114, 125, .28) !important;
      border-radius: 16px !important;
      background: #fff !important;
      box-shadow: none !important;
      backdrop-filter: none !important;
      transform: none !important;
      text-align: left !important;
      isolation: auto !important;
    }
    body.is-embedded-agent.page-stratege .chat-window.is-recording .listening-overlay::before,
    body.is-embedded-agent.page-stratege .chat-window.is-recording .listening-overlay::after {
      display: none !important;
      content: none !important;
    }
    body.is-embedded-agent.page-stratege .chat-window.is-recording .listening-overlay > * {
      z-index: auto !important;
      margin: 0 !important;
    }
    body.is-embedded-agent.page-stratege .chat-window.is-recording .listening-kicker {
      grid-column: 1 !important;
      grid-row: 1 !important;
      color: var(--gv2-strategist) !important;
      font-size: 9px !important;
      font-weight: 500 !important;
      letter-spacing: .16em !important;
    }
    body.is-embedded-agent.page-stratege .chat-window.is-recording .listening-title {
      grid-column: 1 !important;
      grid-row: 2 !important;
      color: var(--gv2-ink) !important;
      font-family: 'Space Grotesk', 'Helvetica Neue', Arial, sans-serif !important;
      font-size: 19px !important;
      font-weight: 500 !important;
      letter-spacing: -.02em !important;
    }
    body.is-embedded-agent.page-stratege .chat-window.is-recording .listening-copy {
      grid-column: 1 !important;
      grid-row: 3 !important;
      display: block !important;
      max-width: 54ch !important;
      color: var(--gv2-muted) !important;
      font-size: 12px !important;
      line-height: 1.45 !important;
    }
    body.is-embedded-agent.page-stratege .chat-window.is-recording .listening-mic-btn {
      grid-column: 2 !important;
      grid-row: 1 / 4 !important;
      width: 44px !important;
      height: 44px !important;
      border: 0 !important;
      background: var(--gv2-strategist) !important;
      color: #fff !important;
      box-shadow: none !important;
      animation: none !important;
    }
    body.is-embedded-agent.page-stratege .chat-window.is-recording .listening-mic-btn svg {
      width: 19px !important;
      height: 19px !important;
      stroke: #fff !important;
    }
    body.is-embedded-agent.page-stratege .chat-window.is-recording .listening-transcript {
      grid-column: 1 / -1 !important;
      grid-row: 4 !important;
      display: block !important;
      width: 100% !important;
      max-width: none !important;
      min-height: 34px !important;
      max-height: 48px !important;
      padding: 8px 0 0 !important;
      overflow-y: auto !important;
      border-top: 1px solid var(--gv2-rule) !important;
      color: #42484d !important;
      font-size: 14px !important;
      line-height: 1.52 !important;
      text-align: left !important;
    }
    body.is-embedded-agent.page-stratege .chat-window.is-recording .listening-wave {
      grid-column: 1 !important;
      grid-row: 5 !important;
      width: min(240px, 70%) !important;
      height: 16px !important;
      justify-content: flex-start !important;
    }
    body.is-embedded-agent.page-stratege .chat-window.is-recording .listening-wave span {
      background: var(--gv2-strategist) !important;
      box-shadow: none !important;
    }
    body.is-embedded-agent.page-stratege .chat-window.is-recording .listening-meta {
      grid-column: 2 !important;
      grid-row: 5 !important;
      display: flex !important;
      gap: 8px !important;
      color: var(--gv2-muted) !important;
      font-family: 'JetBrains Mono', ui-monospace, monospace !important;
      font-size: 9px !important;
      letter-spacing: .08em !important;
      white-space: nowrap !important;
    }
    body.is-embedded-agent.page-stratege .chat-window.is-recording .listening-silence {
      display: inline !important;
      color: var(--gv2-strategist) !important;
    }
    body.is-embedded-agent.page-stratege .chat-window.is-recording .listening-actions {
      grid-column: 1 / -1 !important;
      grid-row: 6 !important;
      display: flex !important;
      width: auto !important;
      justify-content: flex-start !important;
      gap: 8px !important;
      padding-top: 3px !important;
    }
    body.is-embedded-agent.page-stratege .chat-window.is-recording .listening-action {
      flex: 0 0 auto !important;
      min-height: 30px !important;
      padding: 5px 11px !important;
      border: 1px solid var(--gv2-rule) !important;
      border-radius: 999px !important;
      background: #fff !important;
      color: #5d6368 !important;
      font-family: 'JetBrains Mono', ui-monospace, monospace !important;
      font-size: 9px !important;
      letter-spacing: .08em !important;
      text-transform: uppercase !important;
    }
    body.is-embedded-agent.page-stratege .chat-window.is-recording .listening-action.primary {
      border-color: #111416 !important;
      background: #111416 !important;
      color: #fff !important;
    }
    body.is-embedded-agent.page-stratege .ctx-panel[data-interview-state='listening'] .chat-input-row,
    body.is-embedded-agent.page-stratege .ctx-panel[data-interview-state='paused'] .chat-input-row {
      display: grid !important;
      grid-template-columns: 30px max-content minmax(0, 1fr) 42px !important;
    }
    body.is-embedded-agent.page-stratege .ctx-panel:is(
      [data-interview-state='listening'],
      [data-interview-state='paused']
    ) .chat-input-row .mic-btn {
      display: none !important;
    }
    body.is-embedded-agent.page-stratege .ctx-panel:is(
      [data-interview-state='listening'],
      [data-interview-state='paused']
    ) .chat-input-row .chat-send {
      grid-column: 4 !important;
    }
    body.is-embedded-agent.page-stratege .chat-window.is-recording .voice-toolbar {
      display: none !important;
    }

    /* Lecture de la réponse : la barre native devient une ligne secondaire,
       sans bulle et sans concurrence avec le texte d'Ariane. */
    body.is-embedded-agent.page-stratege .voice-toolbar {
      width: min(720px, calc(100% - 40px)) !important;
      min-height: 30px !important;
      margin: 8px auto 0 !important;
      padding: 0 !important;
      flex: 0 0 auto !important;
      border: 0 !important;
      background: transparent !important;
    }
    body.is-embedded-agent.page-stratege .voice-speaking-badge.active {
      display: inline-flex !important;
      padding: 0 !important;
      border: 0 !important;
      background: transparent !important;
      color: var(--gv2-sage) !important;
      font-family: 'JetBrains Mono', ui-monospace, monospace !important;
      font-size: 9px !important;
      letter-spacing: .1em !important;
      text-transform: uppercase !important;
    }
    body.is-embedded-agent.page-stratege .voice-speaking-badge .voice-wave span {
      background: var(--gv2-sage) !important;
    }
    body.is-embedded-agent.page-stratege .voice-playback-btn {
      width: 28px !important;
      height: 28px !important;
      border-color: var(--gv2-rule) !important;
      border-radius: 50% !important;
      background: #fff !important;
      color: #687078 !important;
    }

    @media (max-width: 700px) {
      body.is-embedded-agent.page-stratege .chat-messages {
        padding: 22px 16px 42px !important;
      }
      body.is-embedded-agent.page-stratege .msg.user {
        width: min(88%, 460px) !important;
        max-width: 88% !important;
      }
      body.is-embedded-agent.page-stratege:not(.strategy-studio-preview) .chat-input-row,
      body.is-embedded-agent.page-stratege:not(.strategy-studio-preview) .strat-layout.has-strategy .chat-input-row {
        grid-template-columns: 28px minmax(0, 1fr) 34px 42px !important;
        grid-template-rows: minmax(27px, auto) 40px !important;
        width: calc(100% - 18px) !important;
        min-height: 82px !important;
        padding: 8px 8px 7px 10px !important;
        border-radius: 17px !important;
      }
      body.is-embedded-agent.page-stratege:not(.strategy-studio-preview) .composer-agent-label {
        display: none !important;
      }
      body.is-embedded-agent.page-stratege:not(.strategy-studio-preview) .chat-input {
        grid-column: 1 / -1 !important;
        grid-row: 1 !important;
        min-height: 25px !important;
        max-height: 64px !important;
        font-size: 14px !important;
      }
      body.is-embedded-agent.page-stratege:not(.strategy-studio-preview) .mic-btn {
        grid-column: 3 !important;
        grid-row: 2 !important;
      }
      body.is-embedded-agent.page-stratege:not(.strategy-studio-preview) .chat-send {
        grid-column: 4 !important;
        grid-row: 2 !important;
        width: 42px !important;
        height: 42px !important;
        min-width: 42px !important;
      }
      body.is-embedded-agent.page-stratege .interview-state-stage,
      body.is-embedded-agent.page-stratege .chat-window.is-recording .listening-overlay,
      body.is-embedded-agent.page-stratege .voice-toolbar {
        width: calc(100% - 18px) !important;
      }
      body.is-embedded-agent.page-stratege .chat-window.is-recording .listening-overlay {
        grid-template-columns: minmax(0, 1fr) 40px !important;
        padding: 13px 14px !important;
      }
      body.is-embedded-agent.page-stratege .chat-window.is-recording .listening-copy { display: none !important; }
      body.is-embedded-agent.page-stratege .chat-window.is-recording .listening-transcript { max-height: 68px !important; }
      body.is-embedded-agent.page-stratege .chat-window.is-recording .listening-meta {
        grid-column: 1 / -1 !important;
        justify-self: start !important;
      }
      body.is-embedded-agent.page-stratege .ctx-panel:is(
        [data-interview-state='listening'],
        [data-interview-state='paused']
      ) .chat-input-row {
        grid-template-columns: 28px minmax(0, 1fr) 42px !important;
      }
      body.is-embedded-agent.page-stratege .ctx-panel:is(
        [data-interview-state='listening'],
        [data-interview-state='paused']
      ) .chat-input-row .chat-send {
        grid-column: 3 !important;
        grid-row: 2 !important;
      }
    }
  `}function Yo({agentId:e,workspace:t,onReturnToConversation:n,onNavigate:r,contextCollapsed:i,onShowContext:a,darkMode:o=!1}){let s=Yi(e),c=(0,_.useMemo)(()=>s?Ho(s,t?.folder_id):``,[s,t?.folder_id]),l=(0,_.useRef)(new Set),u=(0,_.useRef)(null);if((0,_.useEffect)(()=>{try{Jo(u.current?.contentDocument,e,o)}catch{}},[e,o]),!s)return null;function d(t){try{let i=t.currentTarget.contentWindow?.location?.pathname;if(!i)return;if(i===s.path){Jo(t.currentTarget.contentDocument,e,o);return}if(i===`/orchestrateur`){n?.();return}let a=Uo(i);if(a){r?.(a);return}if(i===`/login`){window.location.assign(`/login`);return}l.current.has(i)||(l.current.add(i),t.currentTarget.src=c)}catch{}}return(0,H.jsxs)(`section`,{className:`gv2-agent-workspace`,"aria-label":`Espace ${s.name}`,children:[(0,H.jsxs)(`header`,{className:`gv2-agent-workspace-header`,children:[(0,H.jsx)(`img`,{className:`gv2-agent-portrait`,src:s.portrait,alt:``}),(0,H.jsxs)(`div`,{className:`gv2-agent-workspace-copy`,children:[(0,H.jsx)(`h1`,{children:s.name}),(0,H.jsx)(`p`,{children:s.role})]}),i&&(0,H.jsx)(`div`,{className:`gv2-agent-workspace-actions`,children:i&&(0,H.jsxs)(`button`,{type:`button`,className:`gv2-agent-context-link`,onClick:()=>a?.(),children:[(0,H.jsx)(U,{name:`sparkle`,size:15}),(0,H.jsx)(`span`,{children:`Contexte`})]})})]}),(0,H.jsx)(`div`,{className:`gv2-agent-frame-wrap`,children:(0,H.jsx)(`iframe`,{ref:u,className:`gv2-agent-frame`,src:c,onLoad:d,title:`Espace de travail — ${s.name}`},c)})]})}function Xo({agentId:e,agent:t,workspace:n,items:r,firstName:i,isSubmitting:a,onSend:o,discussionCollapsed:s,onToggleDiscussion:c,onResizeStart:l,onResizeKey:u,onResizeReset:d,onReturnToConversation:f,onNavigateAgent:p,contextCollapsed:m,onShowContext:h,darkMode:g}){return(0,H.jsxs)(`section`,{className:`gv2-agent-workbench${s?` is-discussion-collapsed`:``}`,"aria-label":`Espace de travail ${t.name}`,children:[(0,H.jsxs)(`section`,{className:`gv2-discussion-panel`,"aria-label":`Discussion avec Gabriel`,children:[(0,H.jsxs)(`header`,{className:`gv2-discussion-header`,children:[(0,H.jsx)(`span`,{className:`gv2-discussion-mark`,children:`G`}),(0,H.jsxs)(`div`,{className:`gv2-discussion-heading`,children:[(0,H.jsx)(`strong`,{children:`Conversation`}),(0,H.jsx)(`span`,{children:`Gabriel garde le fil de ce travail`})]}),(0,H.jsx)(`button`,{type:`button`,className:`gv2-discussion-toggle`,onClick:c,"aria-label":s?`Afficher la conversation`:`Réduire la conversation`,title:s?`Afficher la conversation`:`Réduire la conversation`,children:(0,H.jsx)(U,{name:`chevronRight`,size:16})})]}),(0,H.jsxs)(`div`,{className:`gv2-discussion-content`,children:[(0,H.jsx)(ao,{items:r,firstName:i,isSubmitting:a,compact:!0}),(0,H.jsx)(oo,{onSend:o,disabled:a,compact:!0})]})]}),(0,H.jsx)(`button`,{className:`gv2-workbench-resize-handle`,type:`button`,onPointerDown:l,onDoubleClick:d,onKeyDown:u,"aria-label":`Redimensionner la conversation et l’espace agent`,title:`Glisser pour redimensionner · double clic pour réinitialiser`}),(0,H.jsx)(Yo,{agentId:e,workspace:n,onReturnToConversation:f,onNavigate:p,contextCollapsed:m,onShowContext:h,darkMode:g})]})}if(typeof document<`u`&&!document.getElementById(`tactile-glass-ui-styles`)){let e=document.createElement(`style`);e.id=`tactile-glass-ui-styles`,e.textContent=`:root {
  /* ==========================================================================
     LAYER 1: FOUNDATION PRIMITIVES
     ========================================================================== */

  /* 1.1 Spacing Scale (Strict 4px grid, with 2px micro-step for compact insets) */
  --space-2: 2px;
  --space-4: 4px;
  --space-8: 8px;
  --space-12: 12px;
  --space-16: 16px;
  --space-20: 20px;
  --space-24: 24px;
  --space-28: 28px;
  --space-32: 32px;
  --space-36: 36px;
  --space-40: 40px;
  --space-48: 48px;
  --space-56: 56px;
  --space-64: 64px;
  --space-80: 80px;
  --space-96: 96px;

  /* 1.2 Border Radii
     - sm (8px): Inline code tags
     - md (12px): Sidebar navigation items and icon boxes
     - lg (16px): Major containers (.stage-block, .settings-panel, .doc-code-box)
     - xl..3xl: Optical WebGL glass component hulls (Prompt, Card, Audio)
     - full (9999px): Capsule buttons, shell actions, reset buttons, badges, and pills */
  --radius-sm: 8px;
  --radius-md: 12px;
  --radius-lg: 16px;
  --radius-xl: 24px;
  --radius-2xl: 28px;
  --radius-3xl: 32px;
  --radius-full: 9999px;

  /* 1.3 Surfaces, Borders & Text Hierarchy (3-Tier Z-Axis Elevation: Canvas -> Surface -> Elevated)
     - bg-canvas (Z0): Root page and transparent WebGL stage backdrop
     - bg-surface / hover / active (Z1): Primary containers and controls sitting directly on canvas (inspector panels, code blocks, shell buttons, sidebar items, and mobile nav pills)
     - bg-elevated / hover / active (Z2): Nested elements sitting inside a surface (sidebar icon boxes, inspector Reset buttons, version badge, inline code tags, segmented state track, and prompt pills)
     - border-subtle: Delicate 1px structural outline for the stage block
     - text-primary / secondary / muted: 3-tier typographic contrast hierarchy */
  --bg-canvas: #141517;
  --bg-surface: rgba(27, 30, 33, 0.88);
  --bg-surface-hover: rgba(32, 36, 42, 0.92);
  --bg-surface-active: rgba(42, 47, 55, 0.96);
  --bg-elevated: rgba(255, 255, 255, 0.08);
  --bg-elevated-hover: rgba(255, 255, 255, 0.14);
  --bg-elevated-active: rgba(255, 255, 255, 0.20);
  --border-subtle: rgba(255, 255, 255, 0.04);

  --text-primary: #ffffff;
  --text-secondary: #9da0a6;
  --text-muted: #71757e;
  --focus-ring-color: rgba(255, 255, 255, 0.40);

  /* 1.4 Typography Scale
     - xs (11px): Badges, slider values, compact labels
     - sm (12px): Sidebar navigation, shell buttons, code snippets, timecodes, site footer
     - md (14px): Body descriptions (.stage-subtitle, .doc-section-desc), panel headers, brand title
     - base (16px): Primary interactive component labels (Button, Tabs, Prompt, Card brand)
     - lg (20px): Documentation section headings (H2) and audio track title
     - xl (24px): Embossed credit card number groups
     - 2xl (36px): Active component page heading (H1)
     - display: Fluid container-responsive hero typography (Tactile Heading) */
  --font-sans: -apple-system, BlinkMacSystemFont, 'SF Pro Text', 'SF Pro Display', 'SF Pro', sans-serif;
  --font-mono: ui-monospace, SFMono-Regular, 'SF Mono', Menlo, Consolas, monospace;
  --font-size-xs: 11px;
  --font-size-sm: 12px;
  --font-size-md: 14px;
  --font-size-base: 16px;
  --font-size-lg: 20px;
  --font-size-xl: 24px;
  --font-size-2xl: 36px;
  --font-size-display: clamp(var(--space-32), 11.5cqw, var(--space-80));

  /* Font Weights
     - regular (400): Body copy, descriptions, inactive nav items, slider labels, code, card number, footer
     - medium (500): All headings (H1, H2, brand, panel headers), active nav item, shell action buttons, badges, tabs, prompt pills, slider values, footer author
     - semibold (600): Primary button CTA, audio track title & timecodes, card metadata
     - extrabold (800): Hero display typography (Tactile Heading) */
  --font-weight-regular: 400;
  --font-weight-medium: 500;
  --font-weight-semibold: 600;
  --font-weight-extrabold: 800;

  /* Line Heights & Letter Spacing
     - line-height-none (1.0): Hero display typography (Tactile Heading & Hero Stage)
     - line-height-tight (16px): Compact numeric rows (.audio-time-row)
     - line-height-snug (24px): Monospace code blocks (.code-panel-pre)
     - line-height-relaxed (1.5): Body copy, subtitles, descriptions, and prompt textarea
     - line-height-2xl (44px): Active component page heading (.stage-title)
     - letter-spacing-tighter (-0.04em): Active component page heading (.stage-title)
     - letter-spacing-display (-0.025em): Hero display typography (Tactile Heading & Hero Stage)
     - letter-spacing-tight (-0.015em): Section headings (.doc-section-title) & primary button CTA (.btn-label)
     - letter-spacing-snug (-0.01em): Brand title, panel headers, and audio track title
     - letter-spacing-wide (0.04em): Segmented state pill labels (.state-btn)
     - letter-spacing-wider (0.08em): Credit card metadata values (.credit-card-value)
     - letter-spacing-widest (0.10em): Embossed credit card number (.credit-card-number)
     - letter-spacing-ultra (0.22em): Credit card bank wordmark (.credit-card-bank-name) */
  --line-height-none: 1.0;
  --line-height-tight: var(--space-16);
  --line-height-snug: var(--space-24);
  --line-height-relaxed: 1.5;
  --line-height-2xl: 44px;
  --letter-spacing-tighter: -0.04em;
  --letter-spacing-display: -0.025em;
  --letter-spacing-tight: -0.015em;
  --letter-spacing-snug: -0.01em;
  --letter-spacing-wide: 0.04em;
  --letter-spacing-wider: 0.08em;
  --letter-spacing-widest: 0.10em;
  --letter-spacing-ultra: 0.22em;

  /* 1.5 Iconography (Strict 4px grid) */
  --icon-sm: var(--space-16);
  --icon-md: var(--space-20);
  --icon-lg: var(--space-24);

  /* ==========================================================================
     LAYER 2: SEMANTIC SHELL & COMPONENT TOKENS
     ========================================================================== */

  /* 2.1 Shell Layout & Controls
     - control-h-sm (32px): Icon-only copy buttons inside code blocks
     - control-h-md (40px): Shell action buttons (Copy Prompt, SKILL.md, GitHub), Reset buttons, and mobile nav pills */
  --sidebar-nav-w: 220px;
  --sidebar-settings-w: 304px;
  --inspector-label-w: 88px;
  --inspector-value-w: var(--space-36);
  --heading-max-w: 920px;
  --subtitle-max-w: 680px;
  --perspective-3d: 1000px;
  --control-h-sm: var(--space-32);
  --control-h-md: var(--space-40);

  /* 2.2 Tactile Button (Unified 56px height) */
  --btn-h: var(--space-56);
  --btn-radius: var(--radius-2xl);
  --btn-pad-h: var(--space-32);

  /* 2.3 Tactile Switch (Unified 104x56px hull + molded 48px optical glass thumb dome) */
  --switch-w: 104px;
  --switch-h: var(--space-56);
  --switch-pad: var(--space-4);
  --switch-thumb-size: var(--space-48);
  --switch-travel: var(--space-48);

  /* 2.4 Tactile Tabs (Unified 56px hull + molded 48px optical glass capsule indicator) */
  --tabs-h: var(--space-56);
  --tabs-item-h: var(--space-48);

  /* 2.5 Tactile Prompt Input */
  --prompt-box-w: 580px;
  --prompt-box-radius: var(--radius-xl);
  --prompt-box-pad: var(--space-20);
  --prompt-pill-h: var(--space-40);
  --prompt-submit-size: var(--space-40);
  --prompt-textarea-min-h: var(--space-48);
  --prompt-textarea-max-h: 160px;

  /* 2.6 Tactile Credit Card (ISO/IEC 7810 ID-1 ratio ~1.586) */
  --card-w: 444px;
  --card-radius: var(--radius-xl);
  --card-pad: var(--space-24);
  --card-network-w: var(--space-48);
  --card-network-circle-size: var(--space-32);
  --card-icon-muted: rgba(255, 255, 255, 0.55);
  --card-text: rgba(255, 255, 255, 0.92);
  --card-network-left-bg: linear-gradient(135deg, rgba(255, 255, 255, 0.22) 0%, rgba(255, 255, 255, 0.05) 100%);
  --card-network-right-bg: linear-gradient(135deg, rgba(255, 255, 255, 0.28) 0%, rgba(255, 255, 255, 0.08) 100%);

  /* 2.7 Tactile Spatial Audio Player (480x304px) */
  --audio-w: 480px;
  --audio-radius: var(--radius-3xl);
  --audio-pad-top: var(--space-28);
  --audio-pad-h: var(--space-32);
  --audio-pad-bottom: var(--space-48);
  --audio-btn-sec-size: var(--space-56);
  --audio-btn-play-size: var(--space-80);
  --audio-like-btn-size: var(--space-36);
  --audio-transport-offset: -40px;
  --audio-scale: 1;

  /* 2.8 Tactile Background (Full-section / Hero Optical Glass Panel) */
  --bg-panel-min-h: 360px;
  --bg-panel-radius: var(--radius-lg);
  --bg-panel-pad: var(--space-32);
}

@media (max-width: 640px) {
  :root {
    --font-size-2xl: 28px;
    --line-height-2xl: 36px;
  }
}

/* ==========================================================================
   STANDALONE COMPONENT STRUCTURAL RULES (Tactile Glass UI)
   ========================================================================== */

.tactile-glass-fx {
  position: relative;
  display: inline-flex;
  overflow: hidden;
  -webkit-tap-highlight-color: transparent;
}

.tactile-btn {
  position: relative;
  pointer-events: auto;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: auto;
  color: var(--text-primary);
  cursor: pointer;
  border: none;
  background: transparent;
  outline: none;
  box-sizing: border-box;
  -webkit-appearance: none;
  appearance: none;
  font-family: var(--font-sans);
  text-decoration: none;
  user-select: none;
  flex-shrink: 0;
  height: var(--btn-h);
  border-radius: var(--btn-radius);
  padding: 0 var(--btn-pad-h);
  gap: var(--space-12);
  -webkit-tap-highlight-color: transparent;
}

.tactile-btn:disabled {
  opacity: 0.4;
  cursor: not-allowed;
}

.tactile-btn .btn-label {
  font-size: var(--font-size-base);
  font-weight: var(--font-weight-semibold);
  color: var(--text-primary);
  letter-spacing: var(--letter-spacing-tight);
  white-space: nowrap;
  transition: font-size 0.2s ease;
}

.tactile-btn .btn-icon {
  width: var(--icon-md);
  height: var(--icon-md);
  stroke: currentColor;
  stroke-width: 2;
  fill: none;
  transition: transform 0.2s ease, width 0.2s ease, height 0.2s ease;
  flex-shrink: 0;
}

.tactile-btn:hover .btn-icon {
  transform: translateX(var(--space-2));
}

.tactile-btn.btn-circle {
  width: var(--btn-h);
  height: var(--btn-h);
  padding: 0;
  justify-content: center;
  border-radius: var(--radius-full);
  flex-shrink: 0;
  background: transparent;
  aspect-ratio: 1 / 1;
}

.tactile-btn.btn-circle:hover .btn-icon {
  transform: scale(1.12);
}

.tactile-switch {
  position: relative;
  pointer-events: auto;
  cursor: pointer;
  border: none;
  background: transparent;
  outline: none;
  padding: 0;
  flex-shrink: 0;
  box-sizing: border-box;
  width: var(--switch-w);
  height: var(--switch-h);
  border-radius: calc(var(--switch-h) / 2);
  -webkit-tap-highlight-color: transparent;
}

.tactile-switch:focus-visible {
  outline: var(--space-2) solid var(--focus-ring-color);
  outline-offset: var(--space-2);
}

.tactile-switch:disabled {
  opacity: 0.4;
  cursor: not-allowed;
}

.tactile-switch .switch-thumb {
  position: absolute;
  border-radius: var(--radius-full);
  background: transparent;
  box-shadow: none;
  width: var(--switch-thumb-size);
  height: var(--switch-thumb-size);
  top: var(--switch-pad);
  left: var(--switch-pad);
  transition: transform 0.25s cubic-bezier(0.16, 1, 0.3, 1);
  pointer-events: none;
}

.tactile-switch.active .switch-thumb,
.tactile-switch[aria-checked="true"] .switch-thumb {
  transform: translateX(var(--switch-travel));
}

.tactile-tabs {
  position: relative;
  display: inline-flex;
  align-items: center;
  max-width: 100%;
  height: var(--tabs-h);
  padding: var(--space-4);
  background: transparent;
  border: none;
  border-radius: var(--radius-full);
  user-select: none;
  box-sizing: border-box;
  -webkit-tap-highlight-color: transparent;
}

.tactile-tabs .tabs-indicator {
  position: absolute;
  left: 0;
  top: var(--space-4);
  height: var(--tabs-item-h);
  border-radius: var(--radius-full);
  background: transparent;
  box-shadow: none;
  border: none;
  pointer-events: none;
  transition: transform 0.25s cubic-bezier(0.16, 1, 0.3, 1), width 0.25s cubic-bezier(0.16, 1, 0.3, 1);
  z-index: 1;
}

.tactile-tabs .tab-item {
  position: relative;
  z-index: 2;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: var(--space-12);
  height: var(--tabs-item-h);
  padding: 0 var(--space-24);
  border-radius: var(--radius-full);
  border: none;
  background: transparent;
  color: var(--text-secondary);
  font-family: var(--font-sans);
  font-size: var(--font-size-base);
  font-weight: var(--font-weight-medium);
  cursor: pointer;
  outline: none;
  transition: color 0.15s ease;
  box-sizing: border-box;
  white-space: nowrap;
  -webkit-tap-highlight-color: transparent;
}

.tactile-tabs .tab-item:hover,
.tactile-tabs .tab-item.active {
  color: var(--text-primary);
}

.tactile-tabs .tab-item:disabled {
  opacity: 0.35;
  cursor: not-allowed;
  color: var(--text-muted);
}

.tactile-tabs .tab-item:focus-visible {
  outline: var(--space-2) solid var(--focus-ring-color);
  outline-offset: var(--space-2);
}

.tactile-prompt-box {
  position: relative;
  pointer-events: auto;
  width: min(100%, var(--prompt-box-w));
  border-radius: var(--prompt-box-radius);
  padding: var(--prompt-box-pad);
  background: transparent;
  border: none;
  outline: none;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  gap: var(--space-16);
  user-select: none;
}

.prompt-body {
  width: 100%;
}

.prompt-textarea {
  width: 100%;
  min-height: var(--prompt-textarea-min-h);
  max-height: var(--prompt-textarea-max-h);
  border: none;
  outline: none;
  background: transparent;
  resize: none;
  color: var(--text-primary);
  font-family: var(--font-sans);
  font-size: var(--font-size-base);
  line-height: var(--line-height-relaxed);
  caret-color: var(--text-primary);
  box-sizing: border-box;
  padding: 0;
  margin: 0;
}

.prompt-textarea::placeholder {
  color: var(--text-muted);
}

.prompt-bottom-bar {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-top: var(--space-4);
}

.prompt-pills-row {
  display: inline-flex;
  align-items: center;
  gap: var(--space-8);
}

.prompt-mention-btn {
  width: var(--prompt-pill-h);
  height: var(--prompt-pill-h);
  border-radius: var(--radius-full);
  display: flex;
  align-items: center;
  justify-content: center;
  background: var(--bg-elevated);
  border: none;
  outline: none;
  color: var(--text-secondary);
  font-size: var(--font-size-md);
  font-weight: var(--font-weight-medium);
  cursor: pointer;
  transition: background 0.2s ease, color 0.2s ease, transform 0.15s ease;
}

.prompt-mention-btn:hover {
  background: var(--bg-elevated-hover);
  color: var(--text-primary);
}

.prompt-mention-btn:active {
  background: var(--bg-elevated-active);
  transform: scale(0.95);
}

.prompt-pill {
  height: var(--prompt-pill-h);
  padding: 0 var(--space-16);
  border-radius: var(--radius-full);
  background: var(--bg-elevated);
  border: none;
  outline: none;
  display: inline-flex;
  align-items: center;
  gap: var(--space-4);
  color: var(--text-secondary);
  font-family: var(--font-sans);
  font-size: var(--font-size-sm);
  font-weight: var(--font-weight-medium);
  cursor: pointer;
  transition: background 0.2s ease, color 0.2s ease, transform 0.15s ease;
}

.prompt-pill:hover {
  background: var(--bg-elevated-hover);
  color: var(--text-primary);
}

.prompt-pill:active {
  background: var(--bg-elevated-active);
  transform: scale(0.97);
}

.prompt-submit-btn {
  width: var(--prompt-submit-size);
  height: var(--prompt-submit-size);
  border-radius: var(--radius-full);
  background: var(--bg-elevated);
  border: none;
  outline: none;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  color: var(--text-primary);
  cursor: pointer;
  transition: background 0.2s ease, transform 0.15s ease, opacity 0.2s ease;
}

.prompt-submit-btn:hover {
  background: var(--bg-elevated-hover);
  transform: scale(1.04);
}

.prompt-submit-btn:active {
  background: var(--bg-elevated-active);
  transform: scale(0.94);
}

.prompt-submit-btn:disabled {
  opacity: 0.4;
  cursor: not-allowed;
  transform: none;
}

.prompt-submit-icon {
  width: var(--icon-sm);
  height: var(--icon-sm);
  stroke: currentColor;
  stroke-width: 2.2;
  fill: none;
}

.tactile-heading-container {
  display: flex;
  flex-direction: column;
  max-width: var(--heading-max-w);
}

.tactile-heading-badge {
  margin-bottom: var(--space-16);
  display: inline-flex;
  align-items: center;
}

.display-heading,
.tactile-heading-title {
  font-family: var(--font-sans);
  color: var(--text-primary);
  font-weight: var(--font-weight-extrabold);
  letter-spacing: var(--letter-spacing-display);
  line-height: var(--line-height-none);
  width: 100%;
  user-select: none;
  font-size: var(--font-size-display);
  text-wrap: balance;
  margin: 0;
}

.tactile-heading-subtitle {
  font-size: var(--font-size-md);
  font-weight: var(--font-weight-regular);
  line-height: var(--line-height-relaxed);
  color: var(--text-secondary);
  max-width: var(--subtitle-max-w);
  margin-top: var(--space-16);
}

.tactile-glass-word {
  position: relative;
  display: inline-flex;
  align-items: baseline;
  justify-content: center;
  vertical-align: baseline;
  margin: 0;
  padding: 0;
  line-height: inherit;
  border: none;
  background: transparent;
  user-select: none;
  -webkit-tap-highlight-color: transparent;
}

.tactile-card.tactile-credit-card {
  position: relative;
  border: none;
  background: transparent;
  outline: none;
  box-sizing: border-box;
  cursor: default;
  user-select: none;
  pointer-events: auto;
  overflow: visible;
  aspect-ratio: 1.5857;
  width: min(100%, var(--card-w));
  height: auto;
  padding: var(--card-pad);
  border-radius: var(--card-radius);
  transform-style: preserve-3d;
  transform: rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1);
  will-change: transform;
  -webkit-tap-highlight-color: transparent;
}

.credit-card-inner {
  position: relative;
  z-index: 1;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 100%;
  height: 100%;
  box-sizing: border-box;
  pointer-events: none;
}

.credit-card-top {
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  width: 100%;
}

.credit-card-contactless {
  width: var(--icon-lg);
  height: var(--icon-lg);
  color: var(--card-icon-muted);
  transition: color 0.2s ease;
}

.tactile-card:hover .credit-card-contactless {
  color: var(--card-text);
}

.credit-card-brand {
  display: flex;
  flex-direction: column;
  align-items: flex-end;
}

.credit-card-bank-name {
  font-size: var(--font-size-base);
  font-weight: var(--font-weight-semibold);
  letter-spacing: var(--letter-spacing-ultra);
  color: var(--card-text);
}

.credit-card-tier {
  font-size: var(--font-size-xs);
  font-weight: var(--font-weight-medium);
  letter-spacing: var(--letter-spacing-wider);
  color: var(--card-icon-muted);
  text-transform: uppercase;
  margin-top: var(--space-4);
}

.credit-card-number {
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  font-family: var(--font-mono);
  font-size: var(--font-size-xl);
  font-weight: var(--font-weight-regular);
  letter-spacing: var(--letter-spacing-widest);
  color: var(--card-text);
  margin: var(--space-8) 0;
  user-select: all;
}

.credit-card-bottom {
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  width: 100%;
}

.credit-card-field {
  display: flex;
  flex-direction: column;
}

.credit-card-value {
  font-size: var(--font-size-sm);
  font-weight: var(--font-weight-semibold);
  letter-spacing: var(--letter-spacing-wider);
  color: var(--card-text);
  text-transform: uppercase;
}

.credit-card-network {
  display: flex;
  align-items: center;
  position: relative;
  width: var(--card-network-w);
  height: var(--card-network-circle-size);
}

.network-circle {
  width: var(--card-network-circle-size);
  height: var(--card-network-circle-size);
  border-radius: var(--radius-full);
  position: absolute;
  border: none;
  backdrop-filter: blur(var(--space-2));
}

.network-circle-left {
  left: 0;
  background: var(--card-network-left-bg);
}

.network-circle-right {
  right: 0;
  background: var(--card-network-right-bg);
  mix-blend-mode: screen;
}

.tactile-audio-player {
  position: relative;
  border: none;
  background: transparent;
  outline: none;
  box-sizing: border-box;
  cursor: default;
  user-select: none;
  pointer-events: auto;
  overflow: visible;
  aspect-ratio: 480 / 304;
  width: min(100%, var(--audio-w));
  height: auto;
  padding: var(--audio-pad-top) var(--audio-pad-h) var(--audio-pad-bottom);
  border-radius: var(--audio-radius);
  transform-style: flat;
  transform: perspective(var(--perspective-3d)) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1);
  will-change: transform;
  -webkit-tap-highlight-color: transparent;
}

.tactile-audio-player .audio-spectrum-front {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
  z-index: 1;
}

.tactile-audio-player .audio-player-inner {
  position: relative;
  z-index: 2;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 100%;
  height: 100%;
  box-sizing: border-box;
  pointer-events: none;
}

.tactile-audio-player .audio-top-row {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: var(--space-16);
  width: 100%;
}

.tactile-audio-player .audio-track-title {
  font-size: var(--font-size-lg);
  font-weight: var(--font-weight-semibold);
  letter-spacing: var(--letter-spacing-snug);
  color: var(--text-primary);
}

.tactile-audio-player .audio-like-btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: var(--audio-like-btn-size);
  height: var(--audio-like-btn-size);
  padding: 0;
  border: none;
  outline: none;
  background: transparent;
  color: var(--text-secondary);
  cursor: pointer;
  pointer-events: auto;
  transition: color 0.15s ease, transform 0.15s ease;
}

.tactile-audio-player .audio-like-btn:hover,
.tactile-audio-player .audio-like-btn[aria-pressed="true"] {
  color: var(--text-primary);
}

.tactile-audio-player .audio-like-btn:hover {
  transform: scale(1.08);
}

.tactile-audio-player .audio-like-btn:active {
  transform: scale(0.94);
}

.tactile-audio-player .audio-like-btn svg {
  width: var(--icon-md);
  height: var(--icon-md);
  fill: none;
  stroke: currentColor;
  stroke-width: 1.75;
}

.tactile-audio-player .audio-timeline-group {
  position: relative;
  z-index: 3;
  display: flex;
  flex-direction: column;
  gap: var(--space-8);
  width: 100%;
  pointer-events: auto;
}

.tactile-audio-player .audio-progress-hit {
  position: relative;
  z-index: 3;
  display: flex;
  align-items: center;
  width: 100%;
  height: var(--space-4);
  padding: var(--space-8) 0;
  margin: calc(var(--space-8) * -1) 0;
  box-sizing: content-box;
  cursor: pointer;
  outline: none;
  pointer-events: auto;
  touch-action: none;
}

.tactile-audio-player .audio-progress-track {
  position: relative;
  width: 100%;
  height: var(--space-4);
  border-radius: var(--radius-full);
  background: var(--bg-elevated-hover);
  overflow: hidden;
  pointer-events: none;
}

.tactile-audio-player .audio-progress-fill {
  position: absolute;
  left: 0;
  top: 0;
  bottom: 0;
  border-radius: var(--radius-full);
  background: var(--text-primary);
  pointer-events: none;
}

.tactile-audio-player .audio-time-row {
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: var(--space-16);
  line-height: var(--line-height-tight);
  font-size: var(--font-size-sm);
  font-weight: var(--font-weight-semibold);
  font-variant-numeric: tabular-nums;
  color: var(--text-primary);
  pointer-events: none;
}

.tactile-audio-player .audio-controls-dock {
  position: absolute;
  left: 50%;
  bottom: var(--audio-transport-offset);
  transform: translateX(-50%) scale(var(--audio-scale));
  transform-origin: 50% 50%;
  z-index: 2;
  display: flex;
  align-items: center;
  pointer-events: auto;
}

.tactile-audio-player .audio-transport-btn {
  position: relative;
  z-index: 1;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: var(--audio-btn-sec-size);
  height: var(--audio-btn-sec-size);
  border-radius: var(--radius-full);
  border: none;
  outline: none;
  background: transparent;
  color: var(--text-primary);
  cursor: pointer;
}

.tactile-audio-player .audio-transport-btn svg {
  width: var(--icon-md);
  height: var(--icon-md);
  fill: none;
  stroke: currentColor;
  stroke-width: 1.75;
}

.tactile-audio-player .audio-play-btn {
  position: relative;
  z-index: 2;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: var(--audio-btn-play-size);
  height: var(--audio-btn-play-size);
  margin: 0 calc(var(--space-4) * -1);
  border-radius: var(--radius-full);
  border: none;
  outline: none;
  background: transparent;
  color: var(--text-primary);
  cursor: pointer;
}

.tactile-audio-player .audio-play-btn svg {
  width: var(--icon-lg);
  height: var(--icon-lg);
  fill: none;
  stroke: currentColor;
  stroke-width: 1.75;
}

.tactile-background {
  position: relative;
  width: 100%;
  min-height: var(--bg-panel-min-h);
  padding: var(--bg-panel-pad);
  border-radius: var(--bg-panel-radius);
  border: none;
  background: transparent;
  outline: none;
  box-sizing: border-box;
  display: flex;
  align-items: center;
  justify-content: center;
  user-select: none;
  pointer-events: auto;
  overflow: hidden;
  -webkit-tap-highlight-color: transparent;
}
`,document.head.appendChild(e)}if(typeof document<`u`&&!document.getElementById(`tactile-glass-ui-styles`)){let e=document.createElement(`style`);e.id=`tactile-glass-ui-styles`,e.textContent=`:root {
  /* ==========================================================================
     LAYER 1: FOUNDATION PRIMITIVES
     ========================================================================== */

  /* 1.1 Spacing Scale (Strict 4px grid, with 2px micro-step for compact insets) */
  --space-2: 2px;
  --space-4: 4px;
  --space-8: 8px;
  --space-12: 12px;
  --space-16: 16px;
  --space-20: 20px;
  --space-24: 24px;
  --space-28: 28px;
  --space-32: 32px;
  --space-36: 36px;
  --space-40: 40px;
  --space-48: 48px;
  --space-56: 56px;
  --space-64: 64px;
  --space-80: 80px;
  --space-96: 96px;

  /* 1.2 Border Radii
     - sm (8px): Inline code tags
     - md (12px): Sidebar navigation items and icon boxes
     - lg (16px): Major containers (.stage-block, .settings-panel, .doc-code-box)
     - xl..3xl: Optical WebGL glass component hulls (Prompt, Card, Audio)
     - full (9999px): Capsule buttons, shell actions, reset buttons, badges, and pills */
  --radius-sm: 8px;
  --radius-md: 12px;
  --radius-lg: 16px;
  --radius-xl: 24px;
  --radius-2xl: 28px;
  --radius-3xl: 32px;
  --radius-full: 9999px;

  /* 1.3 Surfaces, Borders & Text Hierarchy (3-Tier Z-Axis Elevation: Canvas -> Surface -> Elevated)
     - bg-canvas (Z0): Root page and transparent WebGL stage backdrop
     - bg-surface / hover / active (Z1): Primary containers and controls sitting directly on canvas (inspector panels, code blocks, shell buttons, sidebar items, and mobile nav pills)
     - bg-elevated / hover / active (Z2): Nested elements sitting inside a surface (sidebar icon boxes, inspector Reset buttons, version badge, inline code tags, segmented state track, and prompt pills)
     - border-subtle: Delicate 1px structural outline for the stage block
     - text-primary / secondary / muted: 3-tier typographic contrast hierarchy */
  --bg-canvas: #141517;
  --bg-surface: rgba(27, 30, 33, 0.88);
  --bg-surface-hover: rgba(32, 36, 42, 0.92);
  --bg-surface-active: rgba(42, 47, 55, 0.96);
  --bg-elevated: rgba(255, 255, 255, 0.08);
  --bg-elevated-hover: rgba(255, 255, 255, 0.14);
  --bg-elevated-active: rgba(255, 255, 255, 0.20);
  --border-subtle: rgba(255, 255, 255, 0.04);

  --text-primary: #ffffff;
  --text-secondary: #9da0a6;
  --text-muted: #71757e;
  --focus-ring-color: rgba(255, 255, 255, 0.40);

  /* 1.4 Typography Scale
     - xs (11px): Badges, slider values, compact labels
     - sm (12px): Sidebar navigation, shell buttons, code snippets, timecodes, site footer
     - md (14px): Body descriptions (.stage-subtitle, .doc-section-desc), panel headers, brand title
     - base (16px): Primary interactive component labels (Button, Tabs, Prompt, Card brand)
     - lg (20px): Documentation section headings (H2) and audio track title
     - xl (24px): Embossed credit card number groups
     - 2xl (36px): Active component page heading (H1)
     - display: Fluid container-responsive hero typography (Tactile Heading) */
  --font-sans: -apple-system, BlinkMacSystemFont, 'SF Pro Text', 'SF Pro Display', 'SF Pro', sans-serif;
  --font-mono: ui-monospace, SFMono-Regular, 'SF Mono', Menlo, Consolas, monospace;
  --font-size-xs: 11px;
  --font-size-sm: 12px;
  --font-size-md: 14px;
  --font-size-base: 16px;
  --font-size-lg: 20px;
  --font-size-xl: 24px;
  --font-size-2xl: 36px;
  --font-size-display: clamp(var(--space-32), 11.5cqw, var(--space-80));

  /* Font Weights
     - regular (400): Body copy, descriptions, inactive nav items, slider labels, code, card number, footer
     - medium (500): All headings (H1, H2, brand, panel headers), active nav item, shell action buttons, badges, tabs, prompt pills, slider values, footer author
     - semibold (600): Primary button CTA, audio track title & timecodes, card metadata
     - extrabold (800): Hero display typography (Tactile Heading) */
  --font-weight-regular: 400;
  --font-weight-medium: 500;
  --font-weight-semibold: 600;
  --font-weight-extrabold: 800;

  /* Line Heights & Letter Spacing
     - line-height-none (1.0): Hero display typography (Tactile Heading & Hero Stage)
     - line-height-tight (16px): Compact numeric rows (.audio-time-row)
     - line-height-snug (24px): Monospace code blocks (.code-panel-pre)
     - line-height-relaxed (1.5): Body copy, subtitles, descriptions, and prompt textarea
     - line-height-2xl (44px): Active component page heading (.stage-title)
     - letter-spacing-tighter (-0.04em): Active component page heading (.stage-title)
     - letter-spacing-display (-0.025em): Hero display typography (Tactile Heading & Hero Stage)
     - letter-spacing-tight (-0.015em): Section headings (.doc-section-title) & primary button CTA (.btn-label)
     - letter-spacing-snug (-0.01em): Brand title, panel headers, and audio track title
     - letter-spacing-wide (0.04em): Segmented state pill labels (.state-btn)
     - letter-spacing-wider (0.08em): Credit card metadata values (.credit-card-value)
     - letter-spacing-widest (0.10em): Embossed credit card number (.credit-card-number)
     - letter-spacing-ultra (0.22em): Credit card bank wordmark (.credit-card-bank-name) */
  --line-height-none: 1.0;
  --line-height-tight: var(--space-16);
  --line-height-snug: var(--space-24);
  --line-height-relaxed: 1.5;
  --line-height-2xl: 44px;
  --letter-spacing-tighter: -0.04em;
  --letter-spacing-display: -0.025em;
  --letter-spacing-tight: -0.015em;
  --letter-spacing-snug: -0.01em;
  --letter-spacing-wide: 0.04em;
  --letter-spacing-wider: 0.08em;
  --letter-spacing-widest: 0.10em;
  --letter-spacing-ultra: 0.22em;

  /* 1.5 Iconography (Strict 4px grid) */
  --icon-sm: var(--space-16);
  --icon-md: var(--space-20);
  --icon-lg: var(--space-24);

  /* ==========================================================================
     LAYER 2: SEMANTIC SHELL & COMPONENT TOKENS
     ========================================================================== */

  /* 2.1 Shell Layout & Controls
     - control-h-sm (32px): Icon-only copy buttons inside code blocks
     - control-h-md (40px): Shell action buttons (Copy Prompt, SKILL.md, GitHub), Reset buttons, and mobile nav pills */
  --sidebar-nav-w: 220px;
  --sidebar-settings-w: 304px;
  --inspector-label-w: 88px;
  --inspector-value-w: var(--space-36);
  --heading-max-w: 920px;
  --subtitle-max-w: 680px;
  --perspective-3d: 1000px;
  --control-h-sm: var(--space-32);
  --control-h-md: var(--space-40);

  /* 2.2 Tactile Button (Unified 56px height) */
  --btn-h: var(--space-56);
  --btn-radius: var(--radius-2xl);
  --btn-pad-h: var(--space-32);

  /* 2.3 Tactile Switch (Unified 104x56px hull + molded 48px optical glass thumb dome) */
  --switch-w: 104px;
  --switch-h: var(--space-56);
  --switch-pad: var(--space-4);
  --switch-thumb-size: var(--space-48);
  --switch-travel: var(--space-48);

  /* 2.4 Tactile Tabs (Unified 56px hull + molded 48px optical glass capsule indicator) */
  --tabs-h: var(--space-56);
  --tabs-item-h: var(--space-48);

  /* 2.5 Tactile Prompt Input */
  --prompt-box-w: 580px;
  --prompt-box-radius: var(--radius-xl);
  --prompt-box-pad: var(--space-20);
  --prompt-pill-h: var(--space-40);
  --prompt-submit-size: var(--space-40);
  --prompt-textarea-min-h: var(--space-48);
  --prompt-textarea-max-h: 160px;

  /* 2.6 Tactile Credit Card (ISO/IEC 7810 ID-1 ratio ~1.586) */
  --card-w: 444px;
  --card-radius: var(--radius-xl);
  --card-pad: var(--space-24);
  --card-network-w: var(--space-48);
  --card-network-circle-size: var(--space-32);
  --card-icon-muted: rgba(255, 255, 255, 0.55);
  --card-text: rgba(255, 255, 255, 0.92);
  --card-network-left-bg: linear-gradient(135deg, rgba(255, 255, 255, 0.22) 0%, rgba(255, 255, 255, 0.05) 100%);
  --card-network-right-bg: linear-gradient(135deg, rgba(255, 255, 255, 0.28) 0%, rgba(255, 255, 255, 0.08) 100%);

  /* 2.7 Tactile Spatial Audio Player (480x304px) */
  --audio-w: 480px;
  --audio-radius: var(--radius-3xl);
  --audio-pad-top: var(--space-28);
  --audio-pad-h: var(--space-32);
  --audio-pad-bottom: var(--space-48);
  --audio-btn-sec-size: var(--space-56);
  --audio-btn-play-size: var(--space-80);
  --audio-like-btn-size: var(--space-36);
  --audio-transport-offset: -40px;
  --audio-scale: 1;

  /* 2.8 Tactile Background (Full-section / Hero Optical Glass Panel) */
  --bg-panel-min-h: 360px;
  --bg-panel-radius: var(--radius-lg);
  --bg-panel-pad: var(--space-32);
}

@media (max-width: 640px) {
  :root {
    --font-size-2xl: 28px;
    --line-height-2xl: 36px;
  }
}

/* ==========================================================================
   STANDALONE COMPONENT STRUCTURAL RULES (Tactile Glass UI)
   ========================================================================== */

.tactile-glass-fx {
  position: relative;
  display: inline-flex;
  overflow: hidden;
  -webkit-tap-highlight-color: transparent;
}

.tactile-btn {
  position: relative;
  pointer-events: auto;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: auto;
  color: var(--text-primary);
  cursor: pointer;
  border: none;
  background: transparent;
  outline: none;
  box-sizing: border-box;
  -webkit-appearance: none;
  appearance: none;
  font-family: var(--font-sans);
  text-decoration: none;
  user-select: none;
  flex-shrink: 0;
  height: var(--btn-h);
  border-radius: var(--btn-radius);
  padding: 0 var(--btn-pad-h);
  gap: var(--space-12);
  -webkit-tap-highlight-color: transparent;
}

.tactile-btn:disabled {
  opacity: 0.4;
  cursor: not-allowed;
}

.tactile-btn .btn-label {
  font-size: var(--font-size-base);
  font-weight: var(--font-weight-semibold);
  color: var(--text-primary);
  letter-spacing: var(--letter-spacing-tight);
  white-space: nowrap;
  transition: font-size 0.2s ease;
}

.tactile-btn .btn-icon {
  width: var(--icon-md);
  height: var(--icon-md);
  stroke: currentColor;
  stroke-width: 2;
  fill: none;
  transition: transform 0.2s ease, width 0.2s ease, height 0.2s ease;
  flex-shrink: 0;
}

.tactile-btn:hover .btn-icon {
  transform: translateX(var(--space-2));
}

.tactile-btn.btn-circle {
  width: var(--btn-h);
  height: var(--btn-h);
  padding: 0;
  justify-content: center;
  border-radius: var(--radius-full);
  flex-shrink: 0;
  background: transparent;
  aspect-ratio: 1 / 1;
}

.tactile-btn.btn-circle:hover .btn-icon {
  transform: scale(1.12);
}

.tactile-switch {
  position: relative;
  pointer-events: auto;
  cursor: pointer;
  border: none;
  background: transparent;
  outline: none;
  padding: 0;
  flex-shrink: 0;
  box-sizing: border-box;
  width: var(--switch-w);
  height: var(--switch-h);
  border-radius: calc(var(--switch-h) / 2);
  -webkit-tap-highlight-color: transparent;
}

.tactile-switch:focus-visible {
  outline: var(--space-2) solid var(--focus-ring-color);
  outline-offset: var(--space-2);
}

.tactile-switch:disabled {
  opacity: 0.4;
  cursor: not-allowed;
}

.tactile-switch .switch-thumb {
  position: absolute;
  border-radius: var(--radius-full);
  background: transparent;
  box-shadow: none;
  width: var(--switch-thumb-size);
  height: var(--switch-thumb-size);
  top: var(--switch-pad);
  left: var(--switch-pad);
  transition: transform 0.25s cubic-bezier(0.16, 1, 0.3, 1);
  pointer-events: none;
}

.tactile-switch.active .switch-thumb,
.tactile-switch[aria-checked="true"] .switch-thumb {
  transform: translateX(var(--switch-travel));
}

.tactile-tabs {
  position: relative;
  display: inline-flex;
  align-items: center;
  max-width: 100%;
  height: var(--tabs-h);
  padding: var(--space-4);
  background: transparent;
  border: none;
  border-radius: var(--radius-full);
  user-select: none;
  box-sizing: border-box;
  -webkit-tap-highlight-color: transparent;
}

.tactile-tabs .tabs-indicator {
  position: absolute;
  left: 0;
  top: var(--space-4);
  height: var(--tabs-item-h);
  border-radius: var(--radius-full);
  background: transparent;
  box-shadow: none;
  border: none;
  pointer-events: none;
  transition: transform 0.25s cubic-bezier(0.16, 1, 0.3, 1), width 0.25s cubic-bezier(0.16, 1, 0.3, 1);
  z-index: 1;
}

.tactile-tabs .tab-item {
  position: relative;
  z-index: 2;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: var(--space-12);
  height: var(--tabs-item-h);
  padding: 0 var(--space-24);
  border-radius: var(--radius-full);
  border: none;
  background: transparent;
  color: var(--text-secondary);
  font-family: var(--font-sans);
  font-size: var(--font-size-base);
  font-weight: var(--font-weight-medium);
  cursor: pointer;
  outline: none;
  transition: color 0.15s ease;
  box-sizing: border-box;
  white-space: nowrap;
  -webkit-tap-highlight-color: transparent;
}

.tactile-tabs .tab-item:hover,
.tactile-tabs .tab-item.active {
  color: var(--text-primary);
}

.tactile-tabs .tab-item:disabled {
  opacity: 0.35;
  cursor: not-allowed;
  color: var(--text-muted);
}

.tactile-tabs .tab-item:focus-visible {
  outline: var(--space-2) solid var(--focus-ring-color);
  outline-offset: var(--space-2);
}

.tactile-prompt-box {
  position: relative;
  pointer-events: auto;
  width: min(100%, var(--prompt-box-w));
  border-radius: var(--prompt-box-radius);
  padding: var(--prompt-box-pad);
  background: transparent;
  border: none;
  outline: none;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  gap: var(--space-16);
  user-select: none;
}

.prompt-body {
  width: 100%;
}

.prompt-textarea {
  width: 100%;
  min-height: var(--prompt-textarea-min-h);
  max-height: var(--prompt-textarea-max-h);
  border: none;
  outline: none;
  background: transparent;
  resize: none;
  color: var(--text-primary);
  font-family: var(--font-sans);
  font-size: var(--font-size-base);
  line-height: var(--line-height-relaxed);
  caret-color: var(--text-primary);
  box-sizing: border-box;
  padding: 0;
  margin: 0;
}

.prompt-textarea::placeholder {
  color: var(--text-muted);
}

.prompt-bottom-bar {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-top: var(--space-4);
}

.prompt-pills-row {
  display: inline-flex;
  align-items: center;
  gap: var(--space-8);
}

.prompt-mention-btn {
  width: var(--prompt-pill-h);
  height: var(--prompt-pill-h);
  border-radius: var(--radius-full);
  display: flex;
  align-items: center;
  justify-content: center;
  background: var(--bg-elevated);
  border: none;
  outline: none;
  color: var(--text-secondary);
  font-size: var(--font-size-md);
  font-weight: var(--font-weight-medium);
  cursor: pointer;
  transition: background 0.2s ease, color 0.2s ease, transform 0.15s ease;
}

.prompt-mention-btn:hover {
  background: var(--bg-elevated-hover);
  color: var(--text-primary);
}

.prompt-mention-btn:active {
  background: var(--bg-elevated-active);
  transform: scale(0.95);
}

.prompt-pill {
  height: var(--prompt-pill-h);
  padding: 0 var(--space-16);
  border-radius: var(--radius-full);
  background: var(--bg-elevated);
  border: none;
  outline: none;
  display: inline-flex;
  align-items: center;
  gap: var(--space-4);
  color: var(--text-secondary);
  font-family: var(--font-sans);
  font-size: var(--font-size-sm);
  font-weight: var(--font-weight-medium);
  cursor: pointer;
  transition: background 0.2s ease, color 0.2s ease, transform 0.15s ease;
}

.prompt-pill:hover {
  background: var(--bg-elevated-hover);
  color: var(--text-primary);
}

.prompt-pill:active {
  background: var(--bg-elevated-active);
  transform: scale(0.97);
}

.prompt-submit-btn {
  width: var(--prompt-submit-size);
  height: var(--prompt-submit-size);
  border-radius: var(--radius-full);
  background: var(--bg-elevated);
  border: none;
  outline: none;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  color: var(--text-primary);
  cursor: pointer;
  transition: background 0.2s ease, transform 0.15s ease, opacity 0.2s ease;
}

.prompt-submit-btn:hover {
  background: var(--bg-elevated-hover);
  transform: scale(1.04);
}

.prompt-submit-btn:active {
  background: var(--bg-elevated-active);
  transform: scale(0.94);
}

.prompt-submit-btn:disabled {
  opacity: 0.4;
  cursor: not-allowed;
  transform: none;
}

.prompt-submit-icon {
  width: var(--icon-sm);
  height: var(--icon-sm);
  stroke: currentColor;
  stroke-width: 2.2;
  fill: none;
}

.tactile-heading-container {
  display: flex;
  flex-direction: column;
  max-width: var(--heading-max-w);
}

.tactile-heading-badge {
  margin-bottom: var(--space-16);
  display: inline-flex;
  align-items: center;
}

.display-heading,
.tactile-heading-title {
  font-family: var(--font-sans);
  color: var(--text-primary);
  font-weight: var(--font-weight-extrabold);
  letter-spacing: var(--letter-spacing-display);
  line-height: var(--line-height-none);
  width: 100%;
  user-select: none;
  font-size: var(--font-size-display);
  text-wrap: balance;
  margin: 0;
}

.tactile-heading-subtitle {
  font-size: var(--font-size-md);
  font-weight: var(--font-weight-regular);
  line-height: var(--line-height-relaxed);
  color: var(--text-secondary);
  max-width: var(--subtitle-max-w);
  margin-top: var(--space-16);
}

.tactile-glass-word {
  position: relative;
  display: inline-flex;
  align-items: baseline;
  justify-content: center;
  vertical-align: baseline;
  margin: 0;
  padding: 0;
  line-height: inherit;
  border: none;
  background: transparent;
  user-select: none;
  -webkit-tap-highlight-color: transparent;
}

.tactile-card.tactile-credit-card {
  position: relative;
  border: none;
  background: transparent;
  outline: none;
  box-sizing: border-box;
  cursor: default;
  user-select: none;
  pointer-events: auto;
  overflow: visible;
  aspect-ratio: 1.5857;
  width: min(100%, var(--card-w));
  height: auto;
  padding: var(--card-pad);
  border-radius: var(--card-radius);
  transform-style: preserve-3d;
  transform: rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1);
  will-change: transform;
  -webkit-tap-highlight-color: transparent;
}

.credit-card-inner {
  position: relative;
  z-index: 1;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 100%;
  height: 100%;
  box-sizing: border-box;
  pointer-events: none;
}

.credit-card-top {
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  width: 100%;
}

.credit-card-contactless {
  width: var(--icon-lg);
  height: var(--icon-lg);
  color: var(--card-icon-muted);
  transition: color 0.2s ease;
}

.tactile-card:hover .credit-card-contactless {
  color: var(--card-text);
}

.credit-card-brand {
  display: flex;
  flex-direction: column;
  align-items: flex-end;
}

.credit-card-bank-name {
  font-size: var(--font-size-base);
  font-weight: var(--font-weight-semibold);
  letter-spacing: var(--letter-spacing-ultra);
  color: var(--card-text);
}

.credit-card-tier {
  font-size: var(--font-size-xs);
  font-weight: var(--font-weight-medium);
  letter-spacing: var(--letter-spacing-wider);
  color: var(--card-icon-muted);
  text-transform: uppercase;
  margin-top: var(--space-4);
}

.credit-card-number {
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  font-family: var(--font-mono);
  font-size: var(--font-size-xl);
  font-weight: var(--font-weight-regular);
  letter-spacing: var(--letter-spacing-widest);
  color: var(--card-text);
  margin: var(--space-8) 0;
  user-select: all;
}

.credit-card-bottom {
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  width: 100%;
}

.credit-card-field {
  display: flex;
  flex-direction: column;
}

.credit-card-value {
  font-size: var(--font-size-sm);
  font-weight: var(--font-weight-semibold);
  letter-spacing: var(--letter-spacing-wider);
  color: var(--card-text);
  text-transform: uppercase;
}

.credit-card-network {
  display: flex;
  align-items: center;
  position: relative;
  width: var(--card-network-w);
  height: var(--card-network-circle-size);
}

.network-circle {
  width: var(--card-network-circle-size);
  height: var(--card-network-circle-size);
  border-radius: var(--radius-full);
  position: absolute;
  border: none;
  backdrop-filter: blur(var(--space-2));
}

.network-circle-left {
  left: 0;
  background: var(--card-network-left-bg);
}

.network-circle-right {
  right: 0;
  background: var(--card-network-right-bg);
  mix-blend-mode: screen;
}

.tactile-audio-player {
  position: relative;
  border: none;
  background: transparent;
  outline: none;
  box-sizing: border-box;
  cursor: default;
  user-select: none;
  pointer-events: auto;
  overflow: visible;
  aspect-ratio: 480 / 304;
  width: min(100%, var(--audio-w));
  height: auto;
  padding: var(--audio-pad-top) var(--audio-pad-h) var(--audio-pad-bottom);
  border-radius: var(--audio-radius);
  transform-style: flat;
  transform: perspective(var(--perspective-3d)) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1);
  will-change: transform;
  -webkit-tap-highlight-color: transparent;
}

.tactile-audio-player .audio-spectrum-front {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
  z-index: 1;
}

.tactile-audio-player .audio-player-inner {
  position: relative;
  z-index: 2;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 100%;
  height: 100%;
  box-sizing: border-box;
  pointer-events: none;
}

.tactile-audio-player .audio-top-row {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: var(--space-16);
  width: 100%;
}

.tactile-audio-player .audio-track-title {
  font-size: var(--font-size-lg);
  font-weight: var(--font-weight-semibold);
  letter-spacing: var(--letter-spacing-snug);
  color: var(--text-primary);
}

.tactile-audio-player .audio-like-btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: var(--audio-like-btn-size);
  height: var(--audio-like-btn-size);
  padding: 0;
  border: none;
  outline: none;
  background: transparent;
  color: var(--text-secondary);
  cursor: pointer;
  pointer-events: auto;
  transition: color 0.15s ease, transform 0.15s ease;
}

.tactile-audio-player .audio-like-btn:hover,
.tactile-audio-player .audio-like-btn[aria-pressed="true"] {
  color: var(--text-primary);
}

.tactile-audio-player .audio-like-btn:hover {
  transform: scale(1.08);
}

.tactile-audio-player .audio-like-btn:active {
  transform: scale(0.94);
}

.tactile-audio-player .audio-like-btn svg {
  width: var(--icon-md);
  height: var(--icon-md);
  fill: none;
  stroke: currentColor;
  stroke-width: 1.75;
}

.tactile-audio-player .audio-timeline-group {
  position: relative;
  z-index: 3;
  display: flex;
  flex-direction: column;
  gap: var(--space-8);
  width: 100%;
  pointer-events: auto;
}

.tactile-audio-player .audio-progress-hit {
  position: relative;
  z-index: 3;
  display: flex;
  align-items: center;
  width: 100%;
  height: var(--space-4);
  padding: var(--space-8) 0;
  margin: calc(var(--space-8) * -1) 0;
  box-sizing: content-box;
  cursor: pointer;
  outline: none;
  pointer-events: auto;
  touch-action: none;
}

.tactile-audio-player .audio-progress-track {
  position: relative;
  width: 100%;
  height: var(--space-4);
  border-radius: var(--radius-full);
  background: var(--bg-elevated-hover);
  overflow: hidden;
  pointer-events: none;
}

.tactile-audio-player .audio-progress-fill {
  position: absolute;
  left: 0;
  top: 0;
  bottom: 0;
  border-radius: var(--radius-full);
  background: var(--text-primary);
  pointer-events: none;
}

.tactile-audio-player .audio-time-row {
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: var(--space-16);
  line-height: var(--line-height-tight);
  font-size: var(--font-size-sm);
  font-weight: var(--font-weight-semibold);
  font-variant-numeric: tabular-nums;
  color: var(--text-primary);
  pointer-events: none;
}

.tactile-audio-player .audio-controls-dock {
  position: absolute;
  left: 50%;
  bottom: var(--audio-transport-offset);
  transform: translateX(-50%) scale(var(--audio-scale));
  transform-origin: 50% 50%;
  z-index: 2;
  display: flex;
  align-items: center;
  pointer-events: auto;
}

.tactile-audio-player .audio-transport-btn {
  position: relative;
  z-index: 1;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: var(--audio-btn-sec-size);
  height: var(--audio-btn-sec-size);
  border-radius: var(--radius-full);
  border: none;
  outline: none;
  background: transparent;
  color: var(--text-primary);
  cursor: pointer;
}

.tactile-audio-player .audio-transport-btn svg {
  width: var(--icon-md);
  height: var(--icon-md);
  fill: none;
  stroke: currentColor;
  stroke-width: 1.75;
}

.tactile-audio-player .audio-play-btn {
  position: relative;
  z-index: 2;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: var(--audio-btn-play-size);
  height: var(--audio-btn-play-size);
  margin: 0 calc(var(--space-4) * -1);
  border-radius: var(--radius-full);
  border: none;
  outline: none;
  background: transparent;
  color: var(--text-primary);
  cursor: pointer;
}

.tactile-audio-player .audio-play-btn svg {
  width: var(--icon-lg);
  height: var(--icon-lg);
  fill: none;
  stroke: currentColor;
  stroke-width: 1.75;
}

.tactile-background {
  position: relative;
  width: 100%;
  min-height: var(--bg-panel-min-h);
  padding: var(--bg-panel-pad);
  border-radius: var(--bg-panel-radius);
  border: none;
  background: transparent;
  outline: none;
  box-sizing: border-box;
  display: flex;
  align-items: center;
  justify-content: center;
  user-select: none;
  pointer-events: auto;
  overflow: hidden;
  -webkit-tap-highlight-color: transparent;
}
`,document.head.appendChild(e)}var Zo=Object.defineProperty,Qo=(e,t,n)=>t in e?Zo(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,q=(e,t,n)=>Qo(e,typeof t==`symbol`?t:t+``,n),$o={refraction:4,thickness:8,bevelWidth:2,frost:2,dispersion:88,sheen:12,lightAngle:24,darkness:0,rim:16,fluidBright:36,fluidSpeed:80,fluidScale:24,fluidAuraWidth:8,fluidCenter:32,auroraFlow:100,hoverBright:264,lightTrack:100,clickWave:100},es=`#version 300 es
  in vec2 a_pos;
  out vec2 v_uv;
  void main() {
    v_uv = (a_pos + 1.0) * 0.5;
    gl_Position = vec4(a_pos, 0.0, 1.0);
  }
`,ts=`#version 300 es
  precision highp float;
  in vec2 v_uv;
  out vec4 fragColor;

  uniform vec2 u_resolution;
  uniform sampler2D u_src;
  uniform float u_srcComposite;
  uniform sampler2D u_textMask;
  uniform float u_isText;
  uniform float u_isAudioDeck;
  uniform vec4 u_switchThumb;
  uniform vec4 u_rect;
  uniform float u_radius;
  uniform float u_useBackdrop;
  uniform vec4 u_tilt;
  uniform vec3 u_bgColor;

  // Glass optic parameters
  uniform float u_refraction;
  uniform float u_thickness;
  uniform float u_bevelWidth;
  uniform float u_frost;
  uniform float u_dispersion;
  uniform float u_sheen;
  uniform float u_lightAngle;
  uniform float u_darkness;
  uniform float u_rim;
  uniform float u_time;

  // Fluid caustic uniforms
  uniform float u_fluidBright;
  uniform float u_fluidSpeed;
  uniform float u_fluidScale;
  uniform float u_fluidAuraWidth;
  uniform float u_fluidCenter;
  uniform float u_auroraFlow;

  // Interactivity uniforms
  uniform vec2 u_mousePos;
  uniform float u_hoverStrength;
  uniform float u_lightTrack;
  uniform float u_hoverBright;
  uniform vec2 u_clickPos;
  uniform float u_clickTime;
  uniform float u_clickWave;


  float smax(float a, float b, float k) {
    float h = max(k - abs(a - b), 0.0) / k;
    return max(a, b) + h * h * k * 0.25;
  }

  float smin(float a, float b, float k) {
    float h = max(k - abs(a - b), 0.0) / k;
    return min(a, b) - h * h * k * 0.25;
  }

  float sdRoundRect(vec2 p, vec2 b, float r) {
    vec2 q = abs(p) - b + r;
    vec2 u = max(-q, 0.0);
    float inner = -(u.x * u.y) / max(length(u), 1e-4);
    return inner + length(max(q, 0.0)) - r;
  }

  float opSmoothUnion(float d1, float d2, float k) {
    vec2 u = max(vec2(k - d1, k - d2), vec2(0.0));
    return max(k, min(d1, d2)) - length(u);
  }

  float sdAudioDeck(vec2 p, vec2 b, float r) {
    float s = b.x / 240.0;
    float dCard = sdRoundRect(p, b, r);
    float dPlay = length(p - vec2(0.0, -b.y)) - 40.0 * s;
    float dPrev = length(p - vec2(-64.0 * s, -b.y)) - 28.0 * s;
    float dNext = length(p - vec2(64.0 * s, -b.y)) - 28.0 * s;
    float dBridge = length(p - vec2(clamp(p.x, -64.0 * s, 64.0 * s), -b.y)) - 9.0 * s;
    float dBtns = opSmoothUnion(opSmoothUnion(dPlay, min(dPrev, dNext), 2.0 * s), dBridge, 2.0 * s);
    return opSmoothUnion(dCard, dBtns, 2.0 * s);
  }

  float evalLensSDF(vec2 p, vec2 b, float r) {
    if (u_isAudioDeck > 0.5) {
      return sdAudioDeck(p, b, r);
    }
    return sdRoundRect(p, b, r);
  }

  // Domain-Warped Silky Fluid Caustic Field (Deep S-curls, soft rounded crests, zero straight sticks or grid tears)
  float getCausticWave(vec2 p, float t, float frostAmt, float dispOffset) {
    p *= 0.95;

    // 1. Primary S-curve vortex warp (tight enough to curve visibly inside edge auras)
    float w1 = sin(p.x * 1.85 + p.y * 0.55 + t * 0.62) * 0.62 +
               cos(p.y * 1.95 - p.x * 0.65 - t * 0.48) * 0.58;
    vec2 pWarp = p + vec2(
      cos(w1 * 2.25 + p.y * 1.15 + t * 0.45),
      sin(w1 * 2.25 - p.x * 1.15 - t * 0.35)
    ) * 0.56;

    // 2. Secondary swirl modulation so waves bend into flowing S-ribbons instead of straight sticks or square grids
    float swirl = sin(pWarp.y * 1.75 - pWarp.x * 1.25 + t * 0.52) * 0.75;
    float w2 = sin(pWarp.x * 2.05 + pWarp.y * 1.35 - t * 0.58 + swirl) * 0.58 +
               cos(pWarp.y * 2.30 - pWarp.x * 0.95 + t * 0.50 - swirl * 0.6) * 0.42;

    float w2_disp = w2 + dispOffset;
    // Intrinsic optical softness (0.022) eliminates hard laser "sticks" and prevents razor tears on refracted text
    float wAbs = sqrt(w2_disp * w2_disp + 0.022 + frostAmt * frostAmt * 0.045);
    float width = 0.11 + frostAmt * 0.16;
    float ridge = width / (pow(wAbs, 1.50) + width);
    float halo = exp(-wAbs * 1.65) * 0.50;
    return ridge * 0.68 + halo;
  }

  // Interactively warps fluid coordinate field based on cursor presence and click splash
  vec2 warpFluid(vec2 p, vec2 pSurf, vec2 mouseNorm, float hoverAmt, vec2 clickNorm, float clickDt, float clickAmt) {
    // 1. Smooth fingertip displacement: zero displacement at exact touch point, smooth outward swell
    if (hoverAmt > 0.001) {
      vec2 dMouse = pSurf - mouseNorm;
      float rMouse = length(dMouse);
      float radius = 0.90;
      float mouseInf = smoothstep(radius, 0.0, rMouse);
      
      vec2 push = dMouse * (mouseInf * 0.70);
      vec2 swirl = vec2(-dMouse.y, dMouse.x) * (mouseInf * 0.45);
      
      p += (push + swirl) * hoverAmt;
    }
    
    // 2. Click impulse: physical liquid undulation / splash wave expanding from tap point
    if (clickAmt > 0.001 && clickDt >= 0.0 && clickDt < 0.90) {
      vec2 dClick = pSurf - clickNorm;
      float rClick = length(dClick);
      float waveSpeed = 2.8;
      float waveFront = clickDt * waveSpeed;
      float waveWidth = 0.35 + clickDt * 0.30;
      float ring = smoothstep(waveWidth, 0.0, abs(rClick - waveFront));
      float decay = (1.0 - clickDt / 0.90) * exp(-clickDt * 2.2);
      
      vec2 waveDir = rClick > 1e-4 ? dClick / rClick : vec2(0.0);
      float splashDisplacement = ring * sin((rClick - waveFront) * 7.5) * decay * (clickAmt * 0.50);
      p += waveDir * splashDisplacement;
    }
    
    return p;
  }

  float getFluidExcitation(vec2 pSurf, vec2 mouseNorm, float hoverAmt, float hoverBright, vec2 clickNorm, float clickDt, float clickAmt) {
    float glow = 0.0;
    float brightScale = hoverBright * 0.01;
    
    // Faint bioluminescent / caustic awakening directly under the finger
    if (hoverAmt > 0.001) {
      float rMouse = length(pSurf - mouseNorm);
      float mouseInf = smoothstep(0.85, 0.0, rMouse);
      glow += mouseInf * hoverAmt * (brightScale * 0.45);
    }
    
    // Fluid splash glow expanding with the liquid wave
    if (clickAmt > 0.001 && clickDt >= 0.0 && clickDt < 0.90) {
      float rClick = length(pSurf - clickNorm);
      float waveFront = clickDt * 2.8;
      float waveWidth = 0.35 + clickDt * 0.30;
      float ring = smoothstep(waveWidth, 0.0, abs(rClick - waveFront));
      float decay = (1.0 - clickDt / 0.90) * exp(-clickDt * 2.2);
      glow += ring * decay * clickAmt * (brightScale * 0.70);
    }
    
    return glow;
  }

  vec4 sampleBackdropRGBA(vec2 uv) {
    if (u_srcComposite < -0.5) {
      return vec4(0.0);
    }
    vec2 uvSafe = 1.0 - abs(1.0 - abs(uv));
    if (u_srcComposite > 1.5) {
      vec4 s = texture(u_src, vec2(uvSafe.x, 1.0 - uvSafe.y));
      return vec4(s.rgb * s.a, s.a);
    }
    if (u_srcComposite > 0.5) {
      vec4 s = texture(u_src, uvSafe);
      return vec4(s.rgb + u_bgColor * (1.0 - s.a), 1.0);
    }
    vec2 uvTex = vec2(uvSafe.x, 1.0 - uvSafe.y);
    return vec4(mix(u_bgColor, vec3(1.0), texture(u_src, uvTex).a), 1.0);
  }

  vec4 sampleFrostedRGBA(vec2 uv, float frostAmt) {
    if (u_srcComposite < -0.5) {
      return vec4(0.0);
    }
    vec4 centerCol = sampleBackdropRGBA(uv);
    if (frostAmt <= 0.01) return centerCol;

    // Real GPU Frosted Glass Diffusion (Golden-Angle Fermat Spiral Blur)
    vec2 texel = 1.0 / u_resolution;
    float radius = frostAmt * 40.0;
    
    vec4 accumCol = centerCol * 0.20;
    float totalW = 0.20;

    for (int i = 1; i <= 10; i++) {
      float fi = float(i);
      float r = sqrt(fi / 10.0) * radius;
      float theta = fi * 2.3999632;
      vec2 offset = vec2(cos(theta), sin(theta)) * r * texel;
      
      float w = exp(-0.5 * (r * r) / max(radius * radius * 0.4, 1.0));
      accumCol += sampleBackdropRGBA(uv + offset) * w;
      totalW += w;
    }

    return accumCol / totalW;
  }

  vec4 renderSingleGlassLens(vec2 screenPx, vec4 rect, float radius, bool isThumb, out float outBaseAlpha) {
    outBaseAlpha = 1.0;
    vec2 center = rect.xy + rect.zw * 0.5;
    vec2 localPx = screenPx - center;
    vec2 halfSize = rect.zw * 0.5;

    // Interactive 3D Perspective Raycast projection for tilted surfaces
    if (!isThumb && u_tilt.w > 0.5) {
      float d = u_tilt.w;
      float rx = u_tilt.x;
      float ry = u_tilt.y;
      float sc = max(u_tilt.z, 0.001);

      float cosX = cos(rx), sinX = sin(rx);
      float cosY = cos(ry), sinY = sin(ry);

      // Plane normal in CSS 3D camera coordinates (Rotate around Y then around X)
      vec3 N = vec3(sinY, -cosY * sinX, cosY * cosX);

      // WebGL localPx has Y up, CSS 3D camera has Y down
      vec3 V = vec3(localPx.x, -localPx.y, -d);
      float denom = dot(V, N);
      if (abs(denom) > 1e-5) {
        float tHit = (-d * N.z) / denom;
        vec3 P = vec3(tHit * V.x, tHit * V.y, d * (1.0 - tHit));

        // Inverse RotateX (by -rx)
        vec3 P1 = vec3(P.x, P.y * cosX + P.z * sinX, -P.y * sinX + P.z * cosX);
        // Inverse RotateY (by -ry)
        vec3 P0 = vec3(P1.x * cosY - P1.z * sinY, P1.y, P1.x * sinY + P1.z * cosY);

        // Scale and convert back to WebGL localPx (Y up)
        localPx = vec2(P0.x, -P0.y) / sc;
      }
    }

    float coverage = 0.0;
    vec2 norm = vec2(0.0);
    float distIn = 0.0;

    if (u_isText > 0.5) {
      vec2 textUV = (screenPx - rect.xy) / rect.zw;
      if (textUV.x < 0.0 || textUV.x > 1.0 || textUV.y < 0.0 || textUV.y > 1.0) {
        return vec4(0.0);
      }
      vec2 maskUV = vec2(textUV.x, 1.0 - textUV.y);
      vec4 tData = texture(u_textMask, maskUV);
      coverage = tData.a;
      if (coverage <= 0.005) return vec4(0.0);

      distIn = tData.r * 32.0;

      // 32-bit floating point continuous normal from GPU hardware bilinear central difference
      vec2 texel = 1.0 / rect.zw;
      vec2 step = texel * 1.5;
      float d_r  = texture(u_textMask, maskUV + vec2(step.x, 0.0)).r;
      float d_l  = texture(u_textMask, maskUV - vec2(step.x, 0.0)).r;
      float d_t  = texture(u_textMask, maskUV + vec2(0.0, step.y)).r;
      float d_b  = texture(u_textMask, maskUV - vec2(0.0, step.y)).r;
      float d_tr = texture(u_textMask, maskUV + vec2(step.x, step.y)).r;
      float d_tl = texture(u_textMask, maskUV + vec2(-step.x, step.y)).r;
      float d_br = texture(u_textMask, maskUV + vec2(step.x, -step.y)).r;
      float d_bl = texture(u_textMask, maskUV + vec2(-step.x, -step.y)).r;

      float dx = -( (d_tr + 2.0 * d_r + d_br) - (d_tl + 2.0 * d_l + d_bl) );
      float dy = -( (d_tr + 2.0 * d_t + d_tl) - (d_br + 2.0 * d_b + d_bl) );

      norm = vec2(dx, dy);
      float nLen = length(norm);
      if (nLen > 1e-4) norm /= nLen;
      else norm = vec2(0.0);

      // Smooth 3D dome profile: 2D normal tilt smoothly decays to 0 at the top of the bevel/apex,
      // completely eliminating medial axis crease lines, harsh step cliffs, and rectangular offset cutouts!
      float bVal = max(u_bevelWidth, 0.5);
      float strokeRad = max(bVal * 1.2, 4.0);
      float domeTilt = cos(clamp(distIn / strokeRad, 0.0, 1.0) * 1.5707963);
      norm *= domeTilt;
    } else if (isThumb) {
      float sdf = length(localPx) - radius;
      coverage = 1.0 - smoothstep(-0.75, 0.75, sdf);
      if (coverage <= 0.0) return vec4(0.0);
      float rLen = length(localPx);
      norm = rLen > 1e-4 ? localPx / rLen : vec2(0.0, 1.0);
      distIn = -sdf;
    } else {
      float effRad = min(radius, min(halfSize.x, halfSize.y));
      float sdf = evalLensSDF(localPx, halfSize, effRad);
      coverage = 1.0 - smoothstep(-0.75, 0.75, sdf);
      if (coverage <= 0.0) return vec4(0.0);

      // Analytical Normal from smooth SDF for outer border & bevel
      float eps = 1.0;
      float dx = evalLensSDF(localPx + vec2(eps, 0.0), halfSize, effRad) -
                 evalLensSDF(localPx - vec2(eps, 0.0), halfSize, effRad);
      float dy = evalLensSDF(localPx + vec2(0.0, eps), halfSize, effRad) -
                 evalLensSDF(localPx - vec2(0.0, eps), halfSize, effRad);
      float gLen = length(vec2(dx, dy));
      norm = gLen > 1e-4 ? vec2(dx, dy) / gLen : vec2(0.0);

      distIn = -sdf;
    }

    bool isFullBleed = (!isThumb && u_isText < 0.5 && radius <= 0.01 && u_bevelWidth <= 0.01);
    if (isFullBleed) {
      coverage = 1.0;
    }

    // 1. Edge Bevel Refraction strictly on perimeter (distIn < bWidthVal)
    float bWidthVal = max(u_bevelWidth, 0.5);
    float bevelSlope = 0.0;
    if (u_bevelWidth > 0.01 && distIn < bWidthVal) {
      float t = distIn / bWidthVal;
      bevelSlope = (1.0 - t) / max(sqrt(max(1.0 - (1.0 - t) * (1.0 - t), 0.001)), 0.15) * clamp(u_bevelWidth, 0.0, 1.0);
    }
    float edgeTaper = isFullBleed ? 1.0 : smoothstep(0.0, 1.8, distIn);
    float thicknessScale = 0.35 + (u_thickness * 0.01) * 1.3;
    float bevelRefr = (u_refraction * 0.001) * thicknessScale;
    vec2 dispBevel = norm * (bevelSlope * 0.85 * bevelRefr);
    if (u_isText > 0.5) {
      float bRad = max(u_bevelWidth * 1.2, 4.0);
      float t = clamp(distIn / bRad, 0.0, 1.0);
      bevelSlope = (1.0 - t) / max(sqrt(max(1.0 - (1.0 - t) * (1.0 - t), 0.001)), 0.2) * clamp(u_bevelWidth * 0.4 + 0.6, 0.0, 1.5);
      dispBevel = norm * (bevelSlope * 0.85 * bevelRefr);
    } else if (u_isAudioDeck > 0.5) {
      // Subtle molded-glass refraction along the outer Boolean union arc of the transport buttons
      float s = halfSize.x / 240.0;
      vec2 pPlay = localPx - vec2(0.0, -halfSize.y);
      vec2 pPrev = localPx - vec2(-64.0 * s, -halfSize.y);
      vec2 pNext = localPx - vec2(64.0 * s, -halfSize.y);
      float dPlay = length(pPlay) - 40.0 * s;
      float dPrev = length(pPrev) - 28.0 * s;
      float dNext = length(pNext) - 28.0 * s;
      float dSec = min(dPrev, dNext);
      vec2 nPlay = length(pPlay) > 1e-4 ? pPlay / length(pPlay) : vec2(0.0, 1.0);
      vec2 nSec = dPrev < dNext
        ? (length(pPrev) > 1e-4 ? pPrev / length(pPrev) : vec2(0.0, 1.0))
        : (length(pNext) > 1e-4 ? pNext / length(pNext) : vec2(0.0, 1.0));
      float innerTransition = smoothstep(1.5 * s, bWidthVal, distIn);
      float playMask = smoothstep(1.0 * s, 5.0 * s, distIn + dPlay) * smoothstep(0.0, 4.0 * s, dSec) * innerTransition;
      float secMask = smoothstep(1.0 * s, 5.0 * s, distIn + dSec) * smoothstep(0.0, 4.0 * s, dPlay) * innerTransition;
      float playEdge = smoothstep(-1.0 * s, 1.0 * s, -dPlay) * exp(-max(-dPlay, 0.0) / (3.2 * s)) * playMask;
      float secEdge = smoothstep(-1.0 * s, 1.0 * s, -dSec) * exp(-max(-dSec, 0.0) / (2.8 * s)) * secMask;
      dispBevel += (nPlay * playEdge * 0.45 + nSec * secEdge * 0.35) * bevelRefr;
    } else if (u_switchThumb.z > 0.5 && u_switchThumb.w > 0.5) {
      vec2 pThumb = localPx - u_switchThumb.xy;
      vec2 halfThumb = u_switchThumb.zw;
      float capRad = min(halfThumb.x, halfThumb.y);
      float segHalf = max(halfThumb.x - capRad, 0.0);
      vec2 qExact = vec2(pThumb.x - clamp(pThumb.x, -segHalf, segHalf), pThumb.y);
      float dThumb = length(qExact) - capRad;
      if (dThumb < 2.0) {
        vec2 pNorm = qExact / max(capRad, 1.0);
        float r2 = clamp(dot(pNorm, pNorm), 0.0, 1.0);
        float thumbTaper = smoothstep(-0.75, 0.75, -dThumb);
        float thumbBevel = pow(r2, mix(2.0, 0.8, clamp(u_bevelWidth / 15.0, 0.0, 1.0)));
        dispBevel += pNorm * (thumbBevel * 0.65 * bevelRefr * thumbTaper);
      }
    }
    float contourFactor = (1.0 - smoothstep(0.0, bWidthVal * 1.25, distIn)) * clamp(u_bevelWidth, 0.0, 1.0);

    // 2. Liquid Surface & Dome Refraction across element body (100% continuous, zero creases, zero ovals)
    float btnHeight = max(halfSize.y * 2.0, 1.0);
    float frostVal = u_frost * 0.01;
    float fluidT = u_time * (u_fluidSpeed * 0.01);
    float fluidSc = 0.40 + u_fluidScale * 0.04;

    vec2 localMouse = isThumb ? (u_mousePos - u_switchThumb.xy) : u_mousePos;
    vec2 localClick = isThumb ? (u_clickPos - u_switchThumb.xy) : u_clickPos;
    vec2 pPhys = (localPx / btnHeight) * 1.15;
    vec2 mouseNorm = (localMouse / btnHeight) * 1.15;
    vec2 clickNorm = (localClick / btnHeight) * 1.15;
    float fluidPull = u_hoverStrength * (u_lightTrack * 0.01);
    float hoverGlow = u_hoverStrength;
    float clickAmt = u_clickWave * 0.01;
    float clickDt = u_time - u_clickTime;

    // Physical surface coordinate on the button (unrefracted by glass)
    vec2 pSurf = (localPx / btnHeight) * fluidSc;
    vec2 pSurf_warped = warpFluid(pSurf, pPhys, mouseNorm, fluidPull, clickNorm, clickDt, clickAmt);

    // Dynamic 2D isotropic fluid gradient refraction: wave crests naturally refract light in 2D
    float epsF = 0.04;
    float gradFrost = max(frostVal, 0.28);
    float fDx = getCausticWave(pSurf_warped + vec2(epsF, 0.0), fluidT, gradFrost, 0.0) -
                getCausticWave(pSurf_warped - vec2(epsF, 0.0), fluidT, gradFrost, 0.0);
    float fDy = getCausticWave(pSurf_warped + vec2(0.0, epsF), fluidT, gradFrost, 0.0) -
                getCausticWave(pSurf_warped - vec2(0.0, epsF), fluidT, gradFrost, 0.0);
    vec2 fluidGrad = vec2(fDx, fDy) / (2.0 * epsF);
    fluidGrad /= (1.0 + length(fluidGrad) * 0.22);

    // Smooth exponential rim aura decay: tight, seamless falloff hugging the bevel chamfer
    // Tightly confined to the bevel edge, with delicate exponential fade onto the immediate perimeter (2-4px)
    float rimDist = max(distIn - bWidthVal, 0.0);
    float auraWidth = max(u_fluidAuraWidth, 1.0);
    float auraDecay = exp(-rimDist / max(auraWidth * 0.65, 0.75)) * (1.0 - smoothstep(0.0, auraWidth * 2.0, rimDist));
    float fluidPresence = max(contourFactor, auraDecay);

    // Liquid refraction ripples are focused strictly where fluid is present (bevel + aura)
    // The central core remains 100% pure optical dome magnification without soapy fluid turbulence!
    float centerFluidFactor = clamp(u_fluidCenter * 0.01, 0.0, 1.0);
    float refrFluidWeight = mix(centerFluidFactor, 1.0, fluidPresence);

    float fluidBend = (u_refraction * 0.0004) * (0.35 + (u_thickness * 0.01) * 0.95);
    vec2 dispFluid = fluidGrad * (fluidBend * refrFluidWeight);

    // Gentle isotropic convex glass magnification (smooth C-infinity dome profile)
    vec2 dispDome = vec2(0.0);
    float domeBend = (u_thickness * 0.00015) * (u_refraction * 0.01);
    if (u_isText > 0.5) {
      dispDome = -norm * (domeBend * 3.5);
    } else {
      vec2 pIso = localPx / (halfSize.y * 1.5);
      float domeProfile = 1.0 / (1.0 + dot(pIso, pIso) * 0.35);
      dispDome = -pIso * (domeProfile * domeBend);
    }

    // Total displacement: strictly tapered to zero at boundary
    vec2 disp = (dispBevel + dispFluid + dispDome) * edgeTaper;

    // Prismatic dispersion spread factor on the bevel chamfer and perimeter
    float dispSpread = (u_dispersion * 0.01) * (contourFactor * 0.85 + 0.15);

    // 3. Chromatic Background Refraction (smooth spectral split without negative delta)
    vec4 bgSample = sampleFrostedRGBA(v_uv - disp, frostVal);
    vec3 bgSpectral = bgSample.rgb;
    float bgAlpha = bgSample.a;

    if (dispSpread > 0.0005 && bgAlpha > 0.001) {
      vec2 dR = disp * (1.0 - dispSpread * 0.85);
      vec2 dY = disp * (1.0 - dispSpread * 0.40);
      vec2 dC = disp * (1.0 + dispSpread * 0.40);
      vec2 dB = disp * (1.0 + dispSpread * 0.85);

      vec4 sR_bg = sampleFrostedRGBA(v_uv - dR, frostVal);
      vec4 sY_bg = sampleFrostedRGBA(v_uv - dY, frostVal);
      vec4 sC_bg = sampleFrostedRGBA(v_uv - dC, frostVal);
      vec4 sB_bg = sampleFrostedRGBA(v_uv - dB, frostVal);

      float rEdge = sR_bg.r * 0.60 + sY_bg.r * 0.40;
      float gEdge = sY_bg.g * 0.35 + bgSample.g * 0.30 + sC_bg.g * 0.35;
      float bEdge = sC_bg.b * 0.40 + sB_bg.b * 0.60;
      bgSpectral = vec3(rEdge, gEdge, bEdge);
      bgAlpha = (sR_bg.a + sY_bg.a + bgSample.a + sC_bg.a + sB_bg.a) * 0.20;
    }

    vec2 hitPxG = (v_uv - (dispBevel + dispDome + dispFluid * 0.25) * edgeTaper) * u_resolution;

    // Interactive fluid coordinate for the element body
    vec2 pG_raw = (hitPxG - center) / btnHeight * fluidSc;
    vec2 pG_warped = warpFluid(pG_raw, pPhys, mouseNorm, fluidPull, clickNorm, clickDt, clickAmt);
    
    // Pure fluid caustic field
    float fG_body = getCausticWave(pG_warped, fluidT, frostVal, 0.0);

    // Dynamic polar border beam orbiting the perimeter (for buttons and prompt box)
    float beamSpeed = u_fluidSpeed * 0.015;
    float aspect = halfSize.x / max(halfSize.y, 1.0);
    float theta = atan(localPx.y * aspect, localPx.x);
    float beamPhase = theta - u_time * beamSpeed;

    // Smooth traveling wave along the rim
    // Dynamic comet crest that sweeps along the border beam
    float cosB = cos(beamPhase);
    float beamHead = pow(clamp(cosB * 0.5 + 0.5, 0.0, 1.0), 3.5);
    float beamGlow = pow(clamp(cosB * 0.5 + 0.5, 0.0, 1.0), 1.8) * 0.35;
    float beamProfile = beamHead * 1.5 + beamGlow;
    float flowAmt = clamp(u_auroraFlow * 0.01, 0.0, 1.0);
    float flowMod = mix(1.0, beamProfile * 1.4 + 0.08, flowAmt);

    // Dynamic rainbow polar aurora chromatic phase (border beam style)
    // Seamless 2pi-periodic spectrum without branch-cut seams across the negative X axis
    vec3 polarRainbow = 0.55 + 0.45 * cos(beamPhase + vec3(0.0, 2.0944, 4.1888));
    vec3 auroraColor = polarRainbow;

    if (u_isText > 0.5) {
      // Smooth continuous spectral gradient across the word with slow organic breathing drift
      float xSpan = (localPx.x / max(halfSize.x, 1.0)) * 0.5 + 0.5;
      float slowDrift = u_time * (u_fluidSpeed * 0.0035);
      float textPhase = xSpan * 3.14159265 * 1.35 + slowDrift;
      auroraColor = 0.55 + 0.45 * cos(textPhase + vec3(0.0, 2.0944, 4.1888));

      // Organic liquid caustic shimmer: gentle luminous wave breathing through the living fluid
      float waveShimmer = 0.82 + 0.28 * cos(xSpan * 4.71239 - u_time * (u_fluidSpeed * 0.008));
      flowMod = mix(1.0, waveShimmer * 1.25, flowAmt);
    }

    // Edge fluid mask (confined to bevel & tight edge aura; Center Clarity drives pure colorless refraction on panels)
    float edgeFluidMask = fluidPresence * flowMod;
    float fluidMask = u_isText > 0.5 ? mix(centerFluidFactor, 1.0, edgeFluidMask) : edgeFluidMask;

    float dispFactor = clamp(u_dispersion * 0.01, 0.0, 1.0);
    vec3 causticTint = mix(vec3(1.0), auroraColor, dispFactor);

    // Fluid illumination on the glass rim
    float fluidGlow = getFluidExcitation(pPhys, mouseNorm, hoverGlow, u_hoverBright, clickNorm, clickDt, clickAmt);
    if (u_isText > 0.5 && hoverGlow > 0.001) {
      // For typography: bathe the entire word in luminous caustic glow, with gentle focus on the cursor
      float xDist = abs(pPhys.x - mouseNorm.x);
      float textHoverFalloff = exp(-xDist * 0.5);
      float wordAmbientHover = hoverGlow * (u_hoverBright * 0.01) * 0.45;
      fluidGlow = max(fluidGlow, wordAmbientHover * (0.60 + 0.40 * textHoverFalloff));
    }
    float fluidEdgeFade = isFullBleed ? 1.0 : smoothstep(0.0, 1.8, distIn);
    float causticBrightScale = (u_fluidBright * 0.01) + fluidGlow;
    float totalFluidFactor = causticBrightScale * fluidEdgeFade * fluidMask;

    // Caustic highlight: monochromatic wave modulated by iridescent aurora tint
    vec3 causticEmission = causticTint * (fG_body * totalFluidFactor * edgeTaper);
    if (dispSpread > 0.0005) {
      vec3 prismAccent = 0.55 + 0.45 * cos(beamPhase * 2.0 + vec3(0.0, 2.0944, 4.1888));
      causticEmission += (prismAccent - 0.45) * (fG_body * totalFluidFactor * edgeTaper * clamp(u_dispersion * 0.012, 0.0, 1.0) * (1.0 + contourFactor * 1.5));
    }

    // Smoked Glass Absorption Tint (obsidian glass)
    float absorptionScale = 0.5 + (u_thickness * 0.01) * 0.8;
    float darkFactor = clamp((u_darkness * 0.01) * absorptionScale, 0.0, 0.95);
    float bevelThickness = 1.0 - bevelSlope * 0.35;
    float darkAtten = darkFactor * bevelThickness * 0.85;
    vec3 obsidianTint = u_bgColor * 0.45;

    // Clean, crisp achromatic specular gleam strictly on the contour facing light
    vec2 lightDir2D = vec2(cos(u_lightAngle), sin(u_lightAngle));
    float lightAlign = dot(norm, lightDir2D);

    float textFade = u_isText > 0.5 ? smoothstep(0.08, 0.85, coverage) : 1.0;
    float bevelPeak = smoothstep(0.0, 1.0, distIn) * (1.0 - smoothstep(1.0, bWidthVal + 1.2, distIn)) * textFade;
    float mainGleam = pow(clamp(lightAlign, 0.0, 1.0), 16.0) * bevelPeak * (u_sheen * 0.01) * 1.5;
    float backGleam = pow(clamp(-lightAlign, 0.0, 1.0), 8.0) * bevelPeak * (u_rim * 0.01) * 0.7;
    float edgeRim = pow(clamp(1.0 - distIn / 2.5, 0.0, 1.0), 2.0) * edgeTaper * (0.35 + 0.5 * clamp(lightAlign * 0.5 + 0.5, 0.0, 1.0)) * (u_rim * 0.01) * 0.85 * textFade;

    if (u_isText > 0.5) {
      // Single continuous physical glass bevel highlight:
      // Organic exponential profile hugging the outer perimeter with zero double-contours or square cutouts
      float gleamWidth = max(u_bevelWidth * 1.4, 2.4);
      float gleamFalloff = exp(-distIn / gleamWidth) * edgeTaper * textFade;
      mainGleam = pow(clamp(lightAlign, 0.0, 1.0), 14.0) * gleamFalloff * (u_sheen * 0.01) * 1.8;
      backGleam = pow(clamp(-lightAlign, 0.0, 1.0), 7.0) * gleamFalloff * (u_rim * 0.01) * 0.75;
      edgeRim = pow(clamp(1.0 - distIn / max(u_bevelWidth * 1.6, 2.8), 0.0, 1.0), 1.6) * edgeTaper *
                (0.35 + 0.55 * clamp(lightAlign * 0.5 + 0.5, 0.0, 1.0)) * (u_rim * 0.01) * 0.85 * textFade;
    }

    // Prismatic chromatic sheen on the bevel gleam
    float prismAngle = dot(vec2(-norm.y, norm.x), lightDir2D);
    vec3 gleamColor = vec3(1.0);
    if (u_dispersion > 1.0) {
      float gleamDisp = (u_dispersion * 0.01) * 0.55;
      gleamColor = vec3(
        1.0 + prismAngle * gleamDisp * 0.65,
        1.0 - abs(prismAngle) * gleamDisp * 0.35,
        1.0 - prismAngle * gleamDisp * 0.65
      );
    }

    vec3 lensCol = vec3(0.0);
    if (u_srcComposite < -0.5 || u_srcComposite > 1.5) {
      float domTransparency = 1.0 - bgAlpha;
      float absorbAlpha = darkAtten * 0.75;
      outBaseAlpha = clamp(bgAlpha + absorbAlpha * domTransparency, 0.0, 1.0);

      vec3 baseCol = bgSpectral * (1.0 - absorbAlpha) + (u_bgColor * 0.35) * (absorbAlpha * domTransparency);
      vec3 opticalEmit = causticEmission * (1.0 - darkAtten * 0.65);

      if (u_isText > 0.5) {
        float bRad = max(u_bevelWidth * 1.2, 4.0);
        float strokeDome = cos(clamp(distIn / bRad, 0.0, 1.0) * 1.5707963);
        float glyphFresnel = (0.045 + 0.095 * strokeDome) * (0.45 + (u_refraction * 0.01) * 0.55) * (0.45 + frostVal * 0.55) * (1.0 - darkAtten * 0.7) * textFade;
        opticalEmit += mix(vec3(1.0), auroraColor, dispFactor * 0.40) * (glyphFresnel * domTransparency);
      } else if (!isFullBleed) {
        float bevelFresnel = contourFactor * (0.04 + (u_refraction * 0.01) * 0.06) * (0.5 + (u_thickness * 0.01) * 0.5) * edgeTaper;
        float frostVeil = (frostVal * 0.03 + (u_sheen * 0.01) * 0.012) * (1.0 - darkAtten * 0.7) * edgeTaper;
        opticalEmit += (vec3(bevelFresnel) * gleamColor + vec3(frostVeil)) * domTransparency;
      }

      lensCol = baseCol + opticalEmit + (mainGleam + backGleam) * gleamColor + vec3(edgeRim);
    } else {
      outBaseAlpha = 1.0;
      vec3 baseSample = bgSpectral + causticEmission;
      lensCol = mix(baseSample, obsidianTint, darkAtten);
      lensCol += (mainGleam + backGleam) * gleamColor + vec3(edgeRim);
    }

    if (u_isAudioDeck > 0.5) {
      // Convex molded-glass dome relief along the mutual Boolean union boundary of the transport buttons
      float s = halfSize.x / 240.0;
      vec2 pPlay = localPx - vec2(0.0, -halfSize.y);
      vec2 pPrev = localPx - vec2(-64.0 * s, -halfSize.y);
      vec2 pNext = localPx - vec2(64.0 * s, -halfSize.y);
      float rPlay = length(pPlay);
      float rPrev = length(pPrev);
      float rNext = length(pNext);
      float dPlay = rPlay - 40.0 * s;
      float dPrev = rPrev - 28.0 * s;
      float dNext = rNext - 28.0 * s;
      float dSec = min(dPrev, dNext);

      vec2 nPlay = rPlay > 1e-4 ? pPlay / rPlay : vec2(0.0, 1.0);
      vec2 nSec = dPrev < dNext
        ? (rPrev > 1e-4 ? pPrev / rPrev : vec2(0.0, 1.0))
        : (rNext > 1e-4 ? pNext / rNext : vec2(0.0, 1.0));

      float innerTransition = smoothstep(1.5 * s, bWidthVal, distIn);
      float playMask = smoothstep(1.0 * s, 5.0 * s, distIn + dPlay) * smoothstep(0.0, 4.0 * s, dSec) * innerTransition;
      float secMask = smoothstep(1.0 * s, 5.0 * s, distIn + dSec) * smoothstep(0.0, 4.0 * s, dPlay) * innerTransition;
      float distPlay = -dPlay;
      float distSec = -dSec;
      float playTaper = smoothstep(-0.8 * s, 0.8 * s, distPlay) * clamp(rPlay / (40.0 * s), 0.0, 1.0);
      float secTaper = smoothstep(-0.8 * s, 0.8 * s, distSec) * clamp(min(rPrev, rNext) / (28.0 * s), 0.0, 1.0);

      float playSheenProf = playTaper * (1.0 - smoothstep(1.0 * s, bWidthVal + 1.2 * s, max(distPlay, 0.0))) * playMask;
      float secSheenProf = secTaper * (1.0 - smoothstep(1.0 * s, bWidthVal * 0.85 + 1.2 * s, max(distSec, 0.0))) * secMask;
      float playRimProf = playTaper * pow(clamp(1.0 - max(distPlay, 0.0) / (2.5 * s), 0.0, 1.0), 2.0) * playMask;
      float secRimProf = secTaper * pow(clamp(1.0 - max(distSec, 0.0) / (2.2 * s), 0.0, 1.0), 2.0) * secMask;

      float alignPlay = dot(nPlay, lightDir2D);
      float alignSec = dot(nSec, lightDir2D);

      float playGleam = (pow(clamp(alignPlay, 0.0, 1.0), 8.0) * (u_sheen * 0.01) * 0.85 +
                         pow(clamp(-alignPlay, 0.0, 1.0), 6.0) * (u_rim * 0.01) * 0.35) * playSheenProf;
      float secGleam = (pow(clamp(alignSec, 0.0, 1.0), 8.0) * (u_sheen * 0.01) * 0.72 +
                        pow(clamp(-alignSec, 0.0, 1.0), 6.0) * (u_rim * 0.01) * 0.28) * secSheenProf;

      float playEdgeRim = playRimProf * (0.25 + 0.55 * clamp(alignPlay * 0.5 + 0.5, 0.0, 1.0)) * (u_rim * 0.01) * 0.48;
      float secEdgeRim = secRimProf * (0.22 + 0.50 * clamp(alignSec * 0.5 + 0.5, 0.0, 1.0)) * (u_rim * 0.01) * 0.40;

      vec2 nDome = dPlay < dSec ? nPlay : nSec;
      float domePrism = dot(vec2(-nDome.y, nDome.x), lightDir2D);
      vec3 domeGleamColor = vec3(1.0);
      if (u_dispersion > 1.0) {
        float gDisp = (u_dispersion * 0.01) * 0.55;
        domeGleamColor = vec3(
          1.0 + domePrism * gDisp * 0.65,
          1.0 - abs(domePrism) * gDisp * 0.35,
          1.0 - domePrism * gDisp * 0.65
        );
      }

      lensCol += (playGleam + secGleam) * domeGleamColor + vec3(playEdgeRim + secEdgeRim);
    }

    return vec4(lensCol, coverage);
  }

  vec4 renderGlassLens(vec2 screenPx, vec4 rect, float radius) {
    float baseAlpha = 1.0;
    vec4 lens = renderSingleGlassLens(screenPx, rect, radius, false, baseAlpha);
    if (u_switchThumb.z > 0.5 && u_switchThumb.w > 0.5 && lens.a > 0.0) {
      vec2 trackCenter = rect.xy + rect.zw * 0.5;
      vec2 thumbCenter = trackCenter + u_switchThumb.xy;
      vec2 halfThumb = u_switchThumb.zw;
      float capRad = min(halfThumb.x, halfThumb.y);
      float segHalf = max(halfThumb.x - capRad, 0.0);
      vec2 pThumb = screenPx - thumbCenter;
      vec2 qExact = vec2(pThumb.x - clamp(pThumb.x, -segHalf, segHalf), pThumb.y);
      float dThumb = length(qExact) - capRad;
      if (dThumb <= 2.0) {
        float distThumb = -dThumb;
        float thumbTaper = smoothstep(-0.75, 0.75, distThumb);

        // Normalized radial coordinates from capsule medial axis: r in [0, 1], r2 = r^2 in [0, 1]
        vec2 pNorm = qExact / max(capRad, 1.0);
        float r2 = clamp(dot(pNorm, pNorm), 0.0, 1.0);
        vec2 nThumb = length(qExact) > 1e-4 ? qExact / length(qExact) : vec2(0.0, 1.0);

        float frostVal = u_frost * 0.01;
        float sheenAmt = u_sheen * 0.01;
        float rimAmt = u_rim * 0.01;

        // Smooth C-infinity bevel cushion: flatter central plateau, gentler bevel closer to the perimeter
        float domeExp = mix(1.85, 0.85, clamp(u_bevelWidth / 15.0, 0.0, 1.0));
        float smoothDome = pow(r2, domeExp);
        float softEdge = pow(r2, 4.8);

        vec2 lightDir2D = vec2(cos(u_lightAngle), sin(u_lightAngle));
        float alignSmooth = dot(pNorm, lightDir2D);
        float alignEdge = dot(nThumb, lightDir2D);

        // Delicate 3D bevel lighting (less bulging/puffy, more refined flat-topped glass lens)
        float darkFade = 1.0 - clamp(u_darkness * 0.01, 0.0, 0.9);
        float primaryGlow = pow(clamp(alignSmooth * 0.5 + 0.5, 0.0, 1.0), 2.2) * sheenAmt * 0.28;
        float counterGlow = pow(clamp(-alignSmooth * 0.5 + 0.5, 0.0, 1.0), 2.4) * rimAmt * 0.20;
        float ambientDome = (sheenAmt * 0.09 + rimAmt * 0.09 + frostVal * 0.04) * darkFade;
        // Soft achromatic frosted glass base fill so the interior is evenly translucent
        float innerTranslucentFill = (0.05 + frostVal * 0.07 + sheenAmt * 0.04) * darkFade;
        float domeCushion = (primaryGlow + counterGlow + ambientDome) * smoothDome + innerTranslucentFill;

        // Delicate outer glass rim at r -> 1
        float dirRim = 0.45 + 0.55 * max(pow(clamp(alignEdge * 0.5 + 0.5, 0.0, 1.0), 2.2),
                                         pow(clamp(-alignEdge * 0.5 + 0.5, 0.0, 1.0), 2.2) * 0.85);
        float edgeHighlight = softEdge * dirRim * (rimAmt * 0.24 + sheenAmt * 0.12);

        // Subtle chromatic dispersion flare on the bevel (driven by Dispersion slider)
        float domePrism = dot(vec2(-pNorm.y, pNorm.x), lightDir2D);
        vec3 domeGleamColor = vec3(1.0);
        if (u_dispersion > 1.0) {
          float gDisp = (u_dispersion * 0.01) * 0.25;
          domeGleamColor = vec3(
            1.0 + domePrism * gDisp * 0.50,
            1.0 - abs(domePrism) * gDisp * 0.22,
            1.0 - domePrism * gDisp * 0.50
          );
        }

        // Purely additive optical glass dome over the transparent refracted capsule (zero opaque darkening!)
        lens.rgb += ((domeCushion + edgeHighlight) * domeGleamColor) * thumbTaper;
      }
    }
    if (u_srcComposite < -0.5 || u_srcComposite > 1.5) {
      float coverage = lens.a;
      vec3 clampedRGB = clamp(lens.rgb, 0.0, 1.0);
      float lightPeak = max(clampedRGB.r, max(clampedRGB.g, clampedRGB.b));
      float finalAlpha = clamp(baseAlpha + lightPeak * (1.0 - baseAlpha), 0.0, 1.0) * coverage;
      return vec4(clampedRGB * coverage, finalAlpha);
    }
    return vec4(lens.rgb * lens.a, lens.a);
  }

  void main() {
    if (u_useBackdrop > 0.5) {
      float a = texture(u_src, vec2(v_uv.x, 1.0 - v_uv.y)).a;
      fragColor = vec4(vec3(a), a);
      return;
    }
    vec2 screenPx = v_uv * u_resolution;
    fragColor = renderGlassLens(screenPx, u_rect, u_radius);
  }
`;function ns(e,t,n){let r=e.createShader(t);return e.shaderSource(r,n),e.compileShader(r),e.getShaderParameter(r,e.COMPILE_STATUS)||console.error(`TactileGlassEngine: Shader compile error`,e.getShaderInfoLog(r)),r}function rs(e){let t=e.createProgram();return e.attachShader(t,ns(e,e.VERTEX_SHADER,es)),e.attachShader(t,ns(e,e.FRAGMENT_SHADER,ts)),e.linkProgram(t),e.getProgramParameter(t,e.LINK_STATUS)||console.error(`TactileGlassEngine: Program link error`,e.getProgramInfoLog(t)),t}function is(e){let t=e.trim();if(!t||t===`transparent`)return null;if(t.startsWith(`#`)){let e=t.slice(1);if(e.length===3)return[parseInt(e[0]+e[0],16)/255,parseInt(e[1]+e[1],16)/255,parseInt(e[2]+e[2],16)/255];if(e.length>=6)return[parseInt(e.slice(0,2),16)/255,parseInt(e.slice(2,4),16)/255,parseInt(e.slice(4,6),16)/255]}let n=t.match(/rgba?\(\s*([\d.]+)\s*[, ]\s*([\d.]+)\s*[, ]\s*([\d.]+)(?:\s*[,/]\s*([\d.]+))?\s*\)/i);return n?(n[4]===void 0?1:parseFloat(n[4]))<=.01?null:[Math.min(255,Math.max(0,parseFloat(n[1])))/255,Math.min(255,Math.max(0,parseFloat(n[2])))/255,Math.min(255,Math.max(0,parseFloat(n[3])))/255]:null}function as(e){if(typeof window<`u`&&typeof document<`u`){let t=e?.parentElement||document.body;for(;t;){let e=window.getComputedStyle(t).backgroundColor,n=is(e);if(n)return n;t=t.parentElement}let n=is(window.getComputedStyle(document.documentElement).getPropertyValue(`--bg-canvas`));if(n)return n}return[0,0,0]}function os(e,t,n,r,i){let a=0;n[0]=0,r[0]=-1/0,r[1]=1/0;for(let t=1;t<i;t++){let i=(e[t]+t*t-(e[n[a]]+n[a]*n[a]))/(2*t-2*n[a]);for(;i<=r[a];)a--,i=(e[t]+t*t-(e[n[a]]+n[a]*n[a]))/(2*t-2*n[a]);a++,n[a]=t,r[a]=i,r[a+1]=1/0}a=0;for(let o=0;o<i;o++){for(;r[a+1]<o;)a++;t[o]=(o-n[a])*(o-n[a])+e[n[a]]}}function ss(e,t,n){let r=new Float32Array(t*n),i=Math.max(t,n),a=new Float32Array(i),o=new Int32Array(i),s=new Float32Array(i+1);for(let i=0;i<t;i++){for(let r=0;r<n;r++)a[r]=e[r*t+i]?1e9:0;os(a,a,o,s,n);for(let e=0;e<n;e++)r[e*t+i]=a[e]}for(let e=0;e<n;e++){let n=e*t;for(let e=0;e<t;e++)a[e]=r[n+e];os(a,a,o,s,t);for(let e=0;e<t;e++)r[n+e]=Math.sqrt(a[e])}return r}function cs(e,t,n,r,i,a,o,s){e.clearRect(0,0,t,n),e.font=i,`letterSpacing`in e&&(e.letterSpacing=a&&a!==`normal`?a:`0px`),e.textBaseline=`alphabetic`,e.textAlign=`left`,e.fillStyle=`#ffffff`,e.fillText(r,o,s);let c=e.getImageData(0,0,t,n).data,l=t*n,u=new Uint8Array(l);for(let e=0;e<l;e++)u[e]=+(c[e*4+3]>=128);let d=ss(u,t,n),f=new Float32Array(l);for(let e=0;e<l;e++){let t=d[e],n=c[e*4+3];n===0?f[e]=0:t<=2?f[e]=Math.max(0,t-1+n/255):f[e]=t}let p=new Float32Array(l),m=new Float32Array(l),h=6/16,g=4/16,_=1/16;for(let e=0;e<n;e++){let n=e*t;for(let e=0;e<t;e++){let r=Math.max(0,e-2),i=Math.max(0,e-1),a=Math.min(t-1,e+1),o=Math.min(t-1,e+2);p[n+e]=f[n+e]*h+(f[n+i]+f[n+a])*g+(f[n+r]+f[n+o])*_}}for(let e=0;e<n;e++){let r=e*t,i=Math.max(0,e-2)*t,a=Math.max(0,e-1)*t,o=Math.min(n-1,e+1)*t,s=Math.min(n-1,e+2)*t;for(let e=0;e<t;e++)m[r+e]=p[r+e]*h+(p[a+e]+p[o+e])*g+(p[i+e]+p[s+e])*_}for(let e=0;e<l;e++){let t=e*4;c[t+3]===0?(c[t]=0,c[t+1]=0,c[t+2]=0,c[t+3]=0):(c[t]=Math.min(255,Math.round(m[e]*8)),c[t+1]=0,c[t+2]=0)}return c}var ls=class{constructor(){q(this,`glCanvas`,null),q(this,`gl`,null),q(this,`prog`,null),q(this,`quadBuf`,null),q(this,`bgTexture`,null),q(this,`compositeCanvas`,null),q(this,`compositeCtx`,null),q(this,`compositeTexture`,null),q(this,`textMaskCanvas`,null),q(this,`textMaskCtx`,null),q(this,`textMaskTextures`,new Map),q(this,`uSrc`,null),q(this,`uSrcComposite`,null),q(this,`uTextMask`,null),q(this,`uIsText`,null),q(this,`uResolution`,null),q(this,`uRect`,null),q(this,`uRadius`,null),q(this,`uUseBackdrop`,null),q(this,`uTilt`,null),q(this,`uBgColor`,null),q(this,`uRefraction`,null),q(this,`uThickness`,null),q(this,`uBevelWidth`,null),q(this,`uFrost`,null),q(this,`uDispersion`,null),q(this,`uSheen`,null),q(this,`uLightAngle`,null),q(this,`uDarkness`,null),q(this,`uRim`,null),q(this,`uTime`,null),q(this,`uFluidBright`,null),q(this,`uFluidSpeed`,null),q(this,`uFluidScale`,null),q(this,`uFluidAuraWidth`,null),q(this,`uFluidCenter`,null),q(this,`uAuroraFlow`,null),q(this,`uMousePos`,null),q(this,`uHoverStrength`,null),q(this,`uLightTrack`,null),q(this,`uHoverBright`,null),q(this,`uClickPos`,null),q(this,`uClickTime`,null),q(this,`uClickWave`,null),q(this,`uIsAudioDeck`,null),q(this,`uSwitchThumb`,null),q(this,`instances`,new Map),q(this,`animId`,null),q(this,`startTime`,performance.now()),q(this,`isTabVisible`,!0),q(this,`handleVisibilityChange`,()=>{this.isTabVisible=!document.hidden,this.isTabVisible?this.instances.size>0&&!this.animId&&this.startLoop():this.stopLoop()}),typeof window<`u`&&document.addEventListener(`visibilitychange`,this.handleVisibilityChange)}initGL(){if(this.gl)return!0;if(typeof window>`u`)return!1;this.glCanvas=document.createElement(`canvas`),this.glCanvas.width=512,this.glCanvas.height=256;let e=this.glCanvas.getContext(`webgl2`,{alpha:!0,antialias:!1,powerPreference:`high-performance`});if(!e)return!1;this.gl=e,this.prog=rs(e),this.quadBuf=e.createBuffer(),e.bindBuffer(e.ARRAY_BUFFER,this.quadBuf),e.bufferData(e.ARRAY_BUFFER,new Float32Array([-1,-1,1,-1,-1,1,-1,1,1,-1,1,1]),e.STATIC_DRAW);let t=e.getAttribLocation(this.prog,`a_pos`);return e.enableVertexAttribArray(t),e.vertexAttribPointer(t,2,e.FLOAT,!1,0,0),this.uSrc=e.getUniformLocation(this.prog,`u_src`),this.uSrcComposite=e.getUniformLocation(this.prog,`u_srcComposite`),this.uTextMask=e.getUniformLocation(this.prog,`u_textMask`),this.uIsText=e.getUniformLocation(this.prog,`u_isText`),this.uResolution=e.getUniformLocation(this.prog,`u_resolution`),this.uRect=e.getUniformLocation(this.prog,`u_rect`),this.uRadius=e.getUniformLocation(this.prog,`u_radius`),this.uUseBackdrop=e.getUniformLocation(this.prog,`u_useBackdrop`),this.uTilt=e.getUniformLocation(this.prog,`u_tilt`),this.uBgColor=e.getUniformLocation(this.prog,`u_bgColor`),this.uRefraction=e.getUniformLocation(this.prog,`u_refraction`),this.uThickness=e.getUniformLocation(this.prog,`u_thickness`),this.uBevelWidth=e.getUniformLocation(this.prog,`u_bevelWidth`),this.uFrost=e.getUniformLocation(this.prog,`u_frost`),this.uDispersion=e.getUniformLocation(this.prog,`u_dispersion`),this.uSheen=e.getUniformLocation(this.prog,`u_sheen`),this.uLightAngle=e.getUniformLocation(this.prog,`u_lightAngle`),this.uDarkness=e.getUniformLocation(this.prog,`u_darkness`),this.uRim=e.getUniformLocation(this.prog,`u_rim`),this.uTime=e.getUniformLocation(this.prog,`u_time`),this.uFluidBright=e.getUniformLocation(this.prog,`u_fluidBright`),this.uFluidSpeed=e.getUniformLocation(this.prog,`u_fluidSpeed`),this.uFluidScale=e.getUniformLocation(this.prog,`u_fluidScale`),this.uFluidAuraWidth=e.getUniformLocation(this.prog,`u_fluidAuraWidth`),this.uFluidCenter=e.getUniformLocation(this.prog,`u_fluidCenter`),this.uAuroraFlow=e.getUniformLocation(this.prog,`u_auroraFlow`),this.uMousePos=e.getUniformLocation(this.prog,`u_mousePos`),this.uHoverStrength=e.getUniformLocation(this.prog,`u_hoverStrength`),this.uLightTrack=e.getUniformLocation(this.prog,`u_lightTrack`),this.uHoverBright=e.getUniformLocation(this.prog,`u_hoverBright`),this.uClickPos=e.getUniformLocation(this.prog,`u_clickPos`),this.uClickTime=e.getUniformLocation(this.prog,`u_clickTime`),this.uClickWave=e.getUniformLocation(this.prog,`u_clickWave`),this.uIsAudioDeck=e.getUniformLocation(this.prog,`u_isAudioDeck`),this.uSwitchThumb=e.getUniformLocation(this.prog,`u_switchThumb`),this.bgTexture=e.createTexture(),e.bindTexture(e.TEXTURE_2D,this.bgTexture),e.texImage2D(e.TEXTURE_2D,0,e.RGBA,1,1,0,e.RGBA,e.UNSIGNED_BYTE,new Uint8Array([0,0,0,0])),!0}register(e){this.instances.set(e.id,e),this.gl||this.initGL(),this.instances.size===1&&this.startLoop()}unregister(e){this.instances.delete(e);let t=this.textMaskTextures.get(e);t&&this.gl&&this.gl.deleteTexture(t.tex),this.textMaskTextures.delete(e),this.instances.size===0&&this.stopLoop()}startLoop(){if(this.animId!==null)return;let e=()=>{this.renderFrame(),this.animId=this.instances.size>0&&this.isTabVisible?requestAnimationFrame(e):null};this.animId=requestAnimationFrame(e)}stopLoop(){this.animId!==null&&(cancelAnimationFrame(this.animId),this.animId=null)}getTime(){return(performance.now()-this.startTime)*.001}renderFrame(){let e=this.gl,t=this.glCanvas,n=this.prog;if(!e||!t||!n)return;let r=this.getTime(),i=new Map;this.instances.forEach(e=>{e.visible&&i.set(e,e.canvas.getBoundingClientRect())});let a=Array.from(this.instances.values()).sort((e,t)=>{let n=e.canvas.parentElement,r=t.canvas.parentElement;if(n&&n.contains(t.canvas))return-1;if(r&&r.contains(e.canvas))return 1;let i=e.canvas.width*e.canvas.height,a=t.canvas.width*t.canvas.height;return i===a?0:a-i});a.forEach((o,s)=>{var c;if(!o.visible)return;let{canvas:l,ctx:u}=o,d=l.width,f=l.height;if(d<=0||f<=0)return;(t.width<d||t.height<f)&&(t.width=Math.max(t.width,d),t.height=Math.max(t.height,f)),e.viewport(0,0,d,f),e.useProgram(n);let p=Math.min(window.devicePixelRatio||1,2),m=i.get(o)||l.getBoundingClientRect(),h=d*f,g;for(let e=s-1;e>=0;e--){let t=a[e];if(!t.visible||t.canvas.width<=0||t.canvas.height<=0)continue;if((c=t.canvas.parentElement)!=null&&c.contains(l)){g=t;break}let n=i.get(t),r=t.canvas.width*t.canvas.height;if(n&&r>h*1.5&&m.right>n.left&&m.left<n.right&&m.bottom>n.top&&m.top<n.bottom){g=t;break}}if(e.activeTexture(e.TEXTURE0),g&&g.canvas.width>0&&g.canvas.height>0){if(this.compositeCanvas||(this.compositeCanvas=document.createElement(`canvas`),this.compositeCtx=this.compositeCanvas.getContext(`2d`),this.compositeTexture=e.createTexture()),(this.compositeCanvas.width!==d||this.compositeCanvas.height!==f)&&(this.compositeCanvas.width=d,this.compositeCanvas.height=f),this.compositeCtx&&this.compositeTexture){let t=i.get(g)||g.canvas.getBoundingClientRect(),n=Math.round((m.left-t.left)*p),r=Math.round((m.top-t.top)*p);this.compositeCtx.clearRect(0,0,d,f),this.compositeCtx.drawImage(g.canvas,n,r,d,f,0,0,d,f),e.bindTexture(e.TEXTURE_2D,this.compositeTexture),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_S,e.CLAMP_TO_EDGE),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_T,e.CLAMP_TO_EDGE),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_MIN_FILTER,e.LINEAR),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_MAG_FILTER,e.LINEAR),e.texImage2D(e.TEXTURE_2D,0,e.RGBA,e.RGBA,e.UNSIGNED_BYTE,this.compositeCanvas),this.uSrcComposite&&e.uniform1f(this.uSrcComposite,2)}else e.bindTexture(e.TEXTURE_2D,this.bgTexture),this.uSrcComposite&&e.uniform1f(this.uSrcComposite,-1)}else e.bindTexture(e.TEXTURE_2D,this.bgTexture),this.uSrcComposite&&e.uniform1f(this.uSrcComposite,-1);this.uSrc&&e.uniform1i(this.uSrc,0),o.curHover+=(o.targetHover-o.curHover)*.12,o.curMouseX+=(o.targetMouseX-o.curMouseX)*.14,o.curMouseY+=(o.targetMouseY-o.curMouseY)*.14;let _=o.getParams();if(!o.textMask&&!o.isAudioDeck){let e=_.frost>1?Math.round(_.frost*.25*10)/10:0,t=e>0?`blur(${e}px)`:``;l.style.backdropFilter!==t&&(l.style.backdropFilter=t,l.style.webkitBackdropFilter=t)}let v=as(l);this.uBgColor&&e.uniform3f(this.uBgColor,v[0],v[1],v[2]);let y=o.getRect?o.getRect():null,b=y?y[0]:0,x=y?y[1]:0,S=y?y[2]:d,C=y?y[3]:f;if(e.uniform2f(this.uResolution,d,f),e.uniform4f(this.uRect,b,x,S,C),e.uniform1f(this.uRadius,_.radius??C*.5),e.uniform1f(this.uUseBackdrop,0),this.uIsAudioDeck&&e.uniform1f(this.uIsAudioDeck,+!!o.isAudioDeck),this.uSwitchThumb){let t=o.getSwitchThumb?o.getSwitchThumb():null;if(t){let n=t[2],r=t.length>=4?t[3]:t[2];e.uniform4f(this.uSwitchThumb,t[0],t[1],n,r)}else e.uniform4f(this.uSwitchThumb,0,0,0,0)}if(o.textMask){this.textMaskCanvas||(this.textMaskCanvas=document.createElement(`canvas`),this.textMaskCtx=this.textMaskCanvas.getContext(`2d`,{willReadFrequently:!0}));let t=o.textFont||`800 ${Math.round(f*.72)}px sans-serif`,n=o.textLetterSpacing||`normal`,r=`${o.textMask}_${d}_${f}_${t}_${n}`,i=this.textMaskTextures.get(o.id);if(i||(i={tex:e.createTexture(),key:``},this.textMaskTextures.set(o.id,i)),i.key!==r&&this.textMaskCtx){i.key=r,(this.textMaskCanvas.width!==d||this.textMaskCanvas.height!==f)&&(this.textMaskCanvas.width=d,this.textMaskCanvas.height=f),this.textMaskCtx.font=t,`letterSpacing`in this.textMaskCtx&&(this.textMaskCtx.letterSpacing=n===`normal`?`0px`:n);let a=this.textMaskCtx.measureText(o.textMask),s=a.actualBoundingBoxLeft??0,c=a.actualBoundingBoxRight??a.width,l=a.actualBoundingBoxAscent??f*.36,u=a.actualBoundingBoxDescent??f*.1,p=Math.round(d*.5-(c-s)*.5),m=Math.round(f*.5+(l-u)*.5),h=cs(this.textMaskCtx,d,f,o.textMask,t,n,p,m);e.activeTexture(e.TEXTURE1),e.bindTexture(e.TEXTURE_2D,i.tex),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_MIN_FILTER,e.LINEAR),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_MAG_FILTER,e.LINEAR),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_S,e.CLAMP_TO_EDGE),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_T,e.CLAMP_TO_EDGE),e.texImage2D(e.TEXTURE_2D,0,e.RGBA,d,f,0,e.RGBA,e.UNSIGNED_BYTE,h)}else e.activeTexture(e.TEXTURE1),e.bindTexture(e.TEXTURE_2D,i.tex);this.uTextMask&&e.uniform1i(this.uTextMask,1),this.uIsText&&e.uniform1f(this.uIsText,1)}else this.uIsText&&e.uniform1f(this.uIsText,0);if(o.tilt&&(Math.abs(o.tilt.rotX)>.001||Math.abs(o.tilt.rotY)>.001||Math.abs(o.tilt.scale-1)>.001)){let t=o.tilt.rotX*Math.PI/180,n=o.tilt.rotY*Math.PI/180,r=o.tilt.scale||1,i=(o.tilt.focalLength||1e3)*p;this.uTilt&&e.uniform4f(this.uTilt,t,n,r,i)}else this.uTilt&&e.uniform4f(this.uTilt,0,0,1,0);e.uniform1f(this.uTime,r),e.uniform1f(this.uRefraction,_.refraction),e.uniform1f(this.uThickness,_.thickness),e.uniform1f(this.uBevelWidth,_.bevelWidth*p),e.uniform1f(this.uFrost,_.frost),e.uniform1f(this.uDispersion,_.dispersion),e.uniform1f(this.uSheen,_.sheen);let w=_.lightAngle??_.angle??24;e.uniform1f(this.uLightAngle,w*Math.PI/180),e.uniform1f(this.uDarkness,_.darkness),e.uniform1f(this.uRim,_.rim);let T=_.causticBright??_.fluidBright,E=_.causticSpeed??_.fluidSpeed,D=_.causticScale??_.fluidScale;e.uniform1f(this.uFluidBright,T),e.uniform1f(this.uFluidSpeed,E),e.uniform1f(this.uFluidScale,D),e.uniform1f(this.uFluidAuraWidth,(_.fluidAuraWidth??4)*p),e.uniform1f(this.uFluidCenter,_.fluidCenter??0),e.uniform1f(this.uAuroraFlow,_.auroraFlow??75),e.uniform2f(this.uMousePos,o.curMouseX,o.curMouseY),e.uniform1f(this.uHoverStrength,o.curHover),e.uniform1f(this.uLightTrack,_.lightTrack),e.uniform1f(this.uHoverBright,_.hoverBright),e.uniform2f(this.uClickPos,o.clickPos[0],o.clickPos[1]),e.uniform1f(this.uClickTime,o.clickTime),e.uniform1f(this.uClickWave,_.clickWave),e.clearColor(0,0,0,0),e.clear(e.COLOR_BUFFER_BIT),e.drawArrays(e.TRIANGLES,0,6),u.clearRect(0,0,d,f),u.drawImage(t,0,t.height-f,d,f,0,0,d,f)})}teardown(){this.stopLoop(),this.gl&&this.prog&&(this.textMaskTextures.forEach(e=>{var t;(t=this.gl)==null||t.deleteTexture(e.tex)}),this.textMaskTextures.clear(),this.gl.deleteProgram(this.prog),this.quadBuf&&this.gl.deleteBuffer(this.quadBuf),this.bgTexture&&this.gl.deleteTexture(this.bgTexture),this.compositeTexture&&this.gl.deleteTexture(this.compositeTexture),this.gl=null,this.prog=null,this.compositeTexture=null,this.compositeCanvas=null,this.compositeCtx=null),typeof window<`u`&&document.removeEventListener(`visibilitychange`,this.handleVisibilityChange)}},us=null;function ds(){return us||=new ls,us}var fs=({children:e,refraction:t,thickness:n,bevelWidth:r,frost:i,dispersion:a,sheen:o,lightAngle:s,darkness:c,rim:l,fluidBrightness:u,fluidSpeed:d,fluidScale:f,fluidAuraWidth:p,fluidCenter:m,auroraFlow:h,causticBrightness:g,causticSpeed:v,causticScale:y,hoverBrightness:b,trackCursorLight:x=!0,lightTrackingStrength:S,clickShockwave:C=!0,shockwaveStrength:w,overlayZIndex:T=2,className:E=``,style:D,...O})=>{let k=(0,_.useId)(),A=(0,_.useRef)(null),j=(0,_.useRef)(null),M=$o,N=(0,_.useRef)({radius:20,refraction:t??M.refraction,thickness:n??M.thickness,bevelWidth:r??M.bevelWidth,frost:i??M.frost,dispersion:a??M.dispersion,sheen:o??M.sheen,lightAngle:s??M.lightAngle,darkness:c??M.darkness,rim:l??M.rim,fluidBright:u??M.fluidBright,fluidSpeed:d??M.fluidSpeed,fluidScale:f??M.fluidScale,fluidAuraWidth:p??M.fluidAuraWidth,fluidCenter:m??M.fluidCenter,auroraFlow:h??M.auroraFlow,hoverBright:b??M.hoverBright,lightTrack:x?S??M.lightTrack:0,clickWave:C?w??M.clickWave:0});return(0,_.useEffect)(()=>{N.current={...N.current,refraction:t??M.refraction,thickness:n??M.thickness,bevelWidth:r??M.bevelWidth,frost:i??M.frost,dispersion:a??M.dispersion,sheen:o??M.sheen,lightAngle:s??M.lightAngle,darkness:c??M.darkness,rim:l??M.rim,fluidBright:g??u??M.fluidBright,fluidSpeed:v??d??M.fluidSpeed,fluidScale:y??f??M.fluidScale,fluidAuraWidth:p??M.fluidAuraWidth,fluidCenter:m??M.fluidCenter,auroraFlow:h??M.auroraFlow,causticBright:g??u??M.fluidBright,causticSpeed:v??d??M.fluidSpeed,causticScale:y??f??M.fluidScale,hoverBright:b??M.hoverBright,lightTrack:x?S??M.lightTrack:0,clickWave:C?w??M.clickWave:0}},[t,n,r,i,a,o,s,c,l,u,d,f,p,m,h,g,v,y,b,x,S,C,w]),(0,_.useEffect)(()=>{let e=A.current,t=j.current;if(!e||!t)return;let n=t.getContext(`2d`,{alpha:!0});if(!n)return;let r=ds(),i={id:k,canvas:t,ctx:n,getParams:()=>{if(!e)return N.current;let t=Math.min(window.devicePixelRatio||1,2),n=window.getComputedStyle(e),r=parseFloat(n.borderRadius),i=Math.min(e.offsetWidth,e.offsetHeight)*.5*t,a=!isNaN(r)&&r>=0?r*t:i;return N.current.radius=Math.min(a,i),N.current},getSwitchThumb:()=>{if(!e)return null;let t=e.querySelector(`.switch-thumb, [data-switch-thumb], .tabs-indicator, [data-tabs-indicator]`);if(!t)return null;let n=Math.min(window.devicePixelRatio||1,2),r=e.getBoundingClientRect(),i=t.getBoundingClientRect();return i.width<=0||i.height<=0?null:[(i.left+i.width*.5-(r.left+r.width*.5))*n,(r.top+r.height*.5-(i.top+i.height*.5))*n,i.width*.5*n,i.height*.5*n]},curHover:0,targetHover:0,curMouseX:0,curMouseY:0,targetMouseX:0,targetMouseY:0,clickPos:[-999,-999],clickTime:-999,visible:!0},a=()=>{let n=Math.min(window.devicePixelRatio||1,2),r=Math.round(e.offsetWidth*n),i=Math.round(e.offsetHeight*n);(t.width!==r||t.height!==i)&&(t.width=r,t.height=i)};a();let o=null;typeof ResizeObserver<`u`&&(o=new ResizeObserver(()=>a()),o.observe(e));let s=null;typeof IntersectionObserver<`u`&&(s=new IntersectionObserver(([e])=>{i.visible=e.isIntersecting}),s.observe(e));let c=t=>{let n=e.getBoundingClientRect(),r=n.left+n.width*.5,a=n.top+n.height*.5,o=Math.min(window.devicePixelRatio||1,2);i.targetMouseX=(t.clientX-r)*o,i.targetMouseY=(a-t.clientY)*o},l=e=>{i.targetHover=1,c(e)},u=e=>{i.targetHover=1,c(e)},d=()=>{i.targetHover=0},f=e=>{c(e),i.clickPos=[i.targetMouseX,i.targetMouseY],i.clickTime=r.getTime()};return e.addEventListener(`pointerenter`,l),e.addEventListener(`pointermove`,u),e.addEventListener(`pointerleave`,d),e.addEventListener(`pointerdown`,f),r.register(i),()=>{r.unregister(k),e.removeEventListener(`pointerenter`,l),e.removeEventListener(`pointermove`,u),e.removeEventListener(`pointerleave`,d),e.removeEventListener(`pointerdown`,f),o&&o.disconnect(),s&&s.disconnect()}},[k]),(0,H.jsxs)(`div`,{ref:A,className:`tactile-glass-fx ${E}`.trim(),style:{position:`relative`,display:`inline-flex`,overflow:`hidden`,WebkitTapHighlightColor:`transparent`,...D},...O,children:[(0,H.jsx)(`canvas`,{ref:j,"aria-hidden":`true`,style:{position:`absolute`,inset:0,width:`100%`,height:`100%`,pointerEvents:`none`,borderRadius:`inherit`,zIndex:T}}),(0,H.jsx)(`div`,{style:{position:`relative`,zIndex:T+1,width:`100%`,height:`100%`,display:`flex`,alignItems:`center`,justifyContent:`center`},children:e})]})};function ps(){try{return typeof window>`u`||!window.WebGL2RenderingContext||window.matchMedia&&window.matchMedia(`(prefers-reduced-motion: reduce)`).matches?!1:window.localStorage.getItem(`gabriel_glass_fx`)!==`0`}catch{return!1}}function ms({children:e,className:t=``,radius:n=28,...r}){return(0,_.useMemo)(ps,[])?(0,H.jsx)(fs,{className:`gv2-glassfx is-webgl ${t}`.trim(),style:{display:`block`,borderRadius:n},bevelWidth:0,hoverBrightness:138,...r,children:e}):(0,H.jsx)(`div`,{className:`gv2-glassfx ${t}`.trim(),children:e})}var hs=`gabriel_voice_id`,gs=1500,_s=null;function vs(e){return String(e||``).replace(/\*\*/g,``).replace(/\s+—\s+/g,`. `).replace(/\s+/g,` `).trim()}function ys(e){let t=e.match(/[^.!?…]+[.!?…]*\s*/g)||[e],n=[],r=``;for(let e of t)(r+e).length>gs&&r&&(n.push(r.trim()),r=``),r+=e;return r.trim()&&n.push(r.trim()),n}function bs({getText:e,label:t=`Écouter`,className:n=`gv2-psy-listen`,variant:r=`pill`,title:i=`Lecture à voix haute`}){let[a,o]=(0,_.useState)(`repos`),s=(0,_.useRef)(null),c=(0,_.useRef)(!1),l=(0,_.useRef)([]);function u(){c.current=!0;try{s.current?.pause()}catch{}s.current=null;try{window.speechSynthesis?.cancel()}catch{}l.current.forEach(e=>{try{URL.revokeObjectURL(e)}catch{}}),l.current=[]}(0,_.useEffect)(()=>()=>{u(),_s===d&&(_s=null)},[]);function d(){u(),o(`repos`)}async function f(e){window.speechSynthesis?(window.speechSynthesis.cancel(),o(`lit`),e.forEach((t,n)=>{let r=new SpeechSynthesisUtterance(t);r.lang=`fr-FR`,n===e.length-1&&(r.onend=()=>o(`repos`)),window.speechSynthesis.speak(r)})):o(`repos`)}async function p(){_s&&_s!==d&&_s(),_s=d,c.current=!1;let t=ys(vs(e()));if(!t.length)return;o(`prepare`);let n=``;try{n=window.localStorage.getItem(hs)||``}catch{}let r=async e=>{let t=await K(`/voice/speak`,{method:`POST`,headers:{"Content-Type":`application/json`},body:JSON.stringify({text:e,voice_id:n||void 0,pace:`measured`})});if(!t.ok)throw Error(`voix indisponible`);let r=URL.createObjectURL(await t.blob());return l.current.push(r),r};try{let e=r(t[0]);for(let n=0;n<t.length;n+=1){let i=await e;if(c.current||(e=n+1<t.length?r(t[n+1]):null,await new Promise((e,t)=>{let n=new Audio(i);s.current=n,n.onplay=()=>o(`lit`),n.onended=e,n.onerror=()=>t(Error(`lecture`)),n.play().catch(t)}),c.current))return}o(`repos`)}catch{if(c.current)return;await f(t)}}function m(){let e=s.current;if(e){a===`pause`?(e.play().catch(()=>{}),o(`lit`)):(e.pause(),o(`pause`));return}let t=window.speechSynthesis;t&&(a===`pause`?(t.resume(),o(`lit`)):(t.pause(),o(`pause`)))}if(a===`repos`)return(0,H.jsxs)(`button`,{type:`button`,className:n,onClick:p,children:[(0,H.jsx)(U,{name:`volume`,size:r===`player`?15:16}),r===`player`?``:` `,t]});if(r===`player`){let e=Array.from({length:44},(e,t)=>.16+(Math.sin(t*1.7)+1)/2*.84);return(0,H.jsx)(`div`,{className:`gv2-listen-player-row`,children:(0,H.jsx)(ms,{className:`gv2-ariane-glass`,children:(0,H.jsxs)(`div`,{className:`gv2-ariane-voice-card gv2-ariane-player`,role:`group`,"aria-label":`Lecture à voix haute`,children:[(0,H.jsx)(`button`,{type:`button`,className:`gv2-ariane-player-main`,onClick:a===`prepare`?void 0:m,disabled:a===`prepare`,"aria-label":a===`pause`?`Reprendre la lecture`:`Mettre en pause`,children:a===`prepare`?(0,H.jsx)(`span`,{className:`gv2-creator-submit-spinner`}):(0,H.jsx)(U,{name:a===`pause`?`play`:`pause`,size:22})}),(0,H.jsxs)(`div`,{className:`gv2-ariane-player-body`,children:[(0,H.jsx)(`span`,{className:`gv2-ariane-player-title`,children:a===`prepare`?`Préparation de la voix…`:i}),(0,H.jsx)(`div`,{className:`gv2-ariane-waveform`,"aria-hidden":`true`,style:{height:34},children:e.map((e,t)=>(0,H.jsx)(`span`,{style:{height:`${Math.max(3,e*34)}px`,opacity:a===`lit`?.35+e*.55:.22,animation:a===`lit`?`gv2-ariane-wave-bar ${.9+t%5*.16}s ease-in-out ${t*.045}s infinite`:`none`}},t))})]}),(0,H.jsx)(`button`,{type:`button`,className:`gv2-ariane-player-side`,onClick:d,"aria-label":`Arrêter la lecture`,title:`Arrêter`,children:(0,H.jsx)(U,{name:`square`,size:16})})]})})})}return(0,H.jsxs)(`span`,{className:`${n} is-active`,role:`group`,"aria-label":`Lecture à voix haute`,children:[a===`prepare`?(0,H.jsx)(`span`,{className:`gv2-psy-listen-wait`,children:`Préparation de la voix…`}):(0,H.jsx)(`button`,{type:`button`,className:`gv2-psy-listen-btn`,onClick:m,"aria-label":a===`pause`?`Reprendre la lecture`:`Mettre en pause`,children:(0,H.jsx)(U,{name:a===`pause`?`play`:`pause`,size:16})}),(0,H.jsxs)(`span`,{className:`gv2-psy-listen-bars`,"aria-hidden":`true`,"data-paused":a===`lit`?void 0:``,children:[(0,H.jsx)(`i`,{}),(0,H.jsx)(`i`,{}),(0,H.jsx)(`i`,{}),(0,H.jsx)(`i`,{})]}),(0,H.jsx)(`button`,{type:`button`,className:`gv2-psy-listen-btn`,onClick:d,"aria-label":`Arrêter la lecture`,children:(0,H.jsx)(U,{name:`square`,size:14})})]})}var xs=[{label:`Post LinkedIn`,format:`linkedin`,text:`Écris un post LinkedIn expert avec une conclusion actionnable autour de mon offre principale.`},{label:`Vidéo courte`,format:`script`,text:`Écris un script vidéo court qui traite l’objection principale de mon audience.`},{label:`Séquence email`,format:`email`,text:`Rédige une séquence email qui transforme l’intérêt en prise de rendez-vous.`}],Ss={script:`Script`,youtube:`Script YouTube`,tiktok:`TikTok / Reels`,linkedin:`Post LinkedIn`,post:`Thread`,email:`Séquence email`,sales_page:`Page de vente`},Cs=[{value:`linkedin`,label:`Post`},{value:`script`,label:`Script`},{value:`post`,label:`Thread`},{value:`email`,label:`Email`}];function ws(e,t,n={}){return{id:`${t}-${Date.now()}-${Math.random().toString(16).slice(2)}`,role:e,kind:t,...n}}function Ts(e){return typeof e==`string`?e.trim():[e?.full_text,e?.text,e?.content?.full_text,e?.content?.text,e?.content].find(e=>typeof e==`string`&&e.trim())?.trim()||``}function Es(e){return String(e||``).trim().split(/\s+/).filter(Boolean).length}var Ds=/^\[(?:[^\]\n]*(?:à vérifier|à insérer|à ajouter|à citer|à filmer|réel|réelle|nom du|nom de|lien|montant|pourcentage)[^\]\n]*)\]$/i;function Os(e,t){return String(e||``).split(/(\*\*[^*\n]+?\*\*|__[^_\n]+?__|`[^`\n]+?`|\*[^*\n]+?\*|_[^_\n]+?_|\[[^\]\n]{2,90}\])/g).map((e,n)=>{let r=`${t}-${n}`;return Ds.test(e)?(0,H.jsx)(`mark`,{className:`gv2-cdoc-placeholder`,title:`À compléter avec une donnée réelle avant publication`,children:e.slice(1,-1)},r):/^\*\*[^*]+\*\*$/.test(e)||/^__[^_]+__$/.test(e)?(0,H.jsx)(`strong`,{children:e.slice(2,-2)},r):/^`[^`]+`$/.test(e)?(0,H.jsx)(`code`,{children:e.slice(1,-1)},r):/^\*[^*]+\*$/.test(e)||/^_[^_]+_$/.test(e)?(0,H.jsx)(`em`,{children:e.slice(1,-1)},r):e})}function ks(e){return String(e||``).trim().split(/\n{2,}/).filter(Boolean).map((e,t)=>{let n=e.split(`
`).map(e=>e.trim()).filter(Boolean),r=n.length===1&&n[0].match(/^(#{1,3})\s+(.+)/),i=n.length>1&&n.every(e=>/^(?:[-–•])\s+/.test(e)),a=n.length>1&&n.every(e=>/^\d+[.)]\s+/.test(e)),o=n.length>0&&n.every(e=>/^>\s?/.test(e));if(n.length===1&&/^(?:---+|\*\*\*+|___+)$/.test(n[0]))return(0,H.jsx)(`hr`,{},t);if(r){let e=r[1].length===1?`h2`:`h3`;return(0,H.jsx)(e,{children:Os(r[2],`heading-${t}`)},t)}if(o)return(0,H.jsx)(`blockquote`,{children:(0,H.jsx)(`p`,{children:Os(n.map(e=>e.replace(/^>\s?/,``)).join(` `),`quote-${t}`)})},t);if(i)return(0,H.jsx)(`ul`,{children:n.map((e,n)=>(0,H.jsx)(`li`,{children:Os(e.replace(/^(?:[-–•])\s+/,``),`bullet-${t}-${n}`)},n))},t);if(a)return(0,H.jsx)(`ol`,{children:n.map((e,n)=>(0,H.jsx)(`li`,{children:Os(e.replace(/^\d+[.)]\s+/,``),`ordered-${t}-${n}`)},n))},t);if(n.some(e=>/^(?:[-–•])\s+/.test(e))){let e=[];return n.forEach(t=>{let n=/^(?:[-–•])\s+/.test(t),r=e[e.length-1];r&&r.puce===n?r.lignes.push(t):e.push({puce:n,lignes:[t]})}),(0,H.jsx)(_.Fragment,{children:e.map((e,n)=>e.puce?(0,H.jsx)(`ul`,{children:e.lignes.map((e,r)=>(0,H.jsx)(`li`,{children:Os(e.replace(/^(?:[-–•])\s+/,``),`mixed-${t}-${n}-${r}`)},r))},n):(0,H.jsx)(`p`,{children:Os(e.lignes.join(` `),`mixed-${t}-${n}`)},n))},t)}return(0,H.jsx)(`p`,{children:Os(n.join(` `),`paragraph-${t}`)},t)})}var As={angle_principal:`Angle`,angle_central:`Angle`,angle_fil_rouge:`Fil rouge`,angle_prioritaire:`Angle prioritaire`,fil_conducteur:`Fil conducteur`,emotion_cible:`Émotion visée`,emotion_fil:`Émotion`,emotion_activee:`Émotion activée`,emotion_visee:`Émotion visée`,hook_principal:`Accroche`,hook:`Accroche`,hook_ouverture:`Accroche d’ouverture`,accroche:`Accroche`,premiere_ligne:`Première ligne`,variante_hook:`Accroche alternative`,introduction:`Introduction`,insight_central:`Idée centrale`,conclusion:`Conclusion`,cta:`Appel à l’action`,cta_final:`Appel à l’action`,question_cta:`Question finale`,insight_chute:`Chute`,chute:`Chute`,corps:`Corps`,probleme:`Problème`,retournement:`Retournement`,direction:`Direction`,texte_a_lecran:`Texte à l’écran`,contexte:`Contexte`,climax:`Climax`,derniere_phrase:`Dernière phrase`,ouverture:`Ouverture`,sous_titre:`Sous-titre`,agitation:`Agitation`,solution:`Solution`,preuve:`Preuve`,offre_detail:`Offre`,garantie:`Garantie`,prix_et_cta:`Prix et appel à l’action`,objet:`Objet`,preview_text:`Aperçu`,objectif:`Objectif`,texte:`Texte`,contenu:`Contenu`,exemple:`Exemple`,transition:`Transition`,texte_principal:`Texte principal`,hook_visuel:`Accroche visuelle`,sous_titres:`Sous-titres`,reponse:`Réponse`,hook_exemple:`Exemple d’accroche`,tension_exploitee:`Tension exploitée`,pourquoi_ca_marche:`Pourquoi ça marche`,difficulte:`Difficulté`,canal:`Canal`,hashtags:`Hashtags`,persona_cible:`Persona`,clarte:`Clarté`,coherence_strategique:`Cohérence stratégique`,emotion:`Émotion`,note_globale:`Note globale`,originalite:`Originalité`,pertinence:`Pertinence`,persuasion:`Persuasion`,impact:`Impact`,note_realisateur:`Réalisation`,notes_montage:`Montage`,notes_orateur:`Notes de l’orateur`,notes_production:`Production`,note_strategique:`Note stratégique`,angle_utilise:`Angle`,angle:`Angle`},js={sections:`Séquences`,parties:`Parties`,posts:`Publications`,sequence:`Emails`,publicites:`Publicités`,hooks:`Accroches`,angles:`Angles`,faq:`Questions fréquentes`,chapitres:`Chapitres`},Ms=[`titre_video`,`headline`,`titre`,`titre_interne`],Ns=[`duree_estimee`,`duree`,`longueur_estimee`,`format_recommande`,`format`],Ps=[`angle_principal`,`angle_central`,`angle_fil_rouge`,`angle_prioritaire`,`fil_conducteur`,`emotion_cible`,`emotion_fil`,`emotion_activee`],Fs=[`hook_principal`,`hook_ouverture`,`hook`,`accroche`,`premiere_ligne`],Is=[`note_realisateur`,`notes_montage`,`notes_orateur`,`notes_production`,`note_strategique`,`pourquoi_ca_marche`],Ls=[`secondes`,`temps`,`duree`],Rs=[`section`,`titre`,`titre_interne`,`objet`,`question`,`type`,`format`],zs=new Set([`content_type`,`success`,`parse_error`,`refined`,`instruction`,`numero`]),Bs=e=>As[e]||e.replace(/_/g,` `).replace(/^./,e=>e.toUpperCase()),Vs=e=>Array.isArray(e)?e.map(e=>typeof e==`object`?JSON.stringify(e):String(e)).join(`
`):String(e??``);function Hs(e){return!!(e&&typeof e==`object`&&!Array.isArray(e)&&Object.keys(e).some(e=>js[e]||Ms.includes(e)||Fs.includes(e)))}function Us({name:e,value:t,keyPrefix:n}){if(t==null||t===``||Array.isArray(t)&&!t.length)return null;if(Array.isArray(t)&&t.every(e=>typeof e==`string`&&e.length<40))return(0,H.jsxs)(`div`,{className:`gv2-cdoc-field`,children:[(0,H.jsx)(`span`,{className:`gv2-cdoc-label`,children:Bs(e)}),(0,H.jsx)(`div`,{className:`gv2-cdoc-tokens`,children:t.map((e,t)=>(0,H.jsx)(`span`,{children:e},t))})]});let r=Is.includes(e);return(0,H.jsxs)(`div`,{className:`gv2-cdoc-field${r?` is-note`:``}`,children:[(0,H.jsx)(`span`,{className:`gv2-cdoc-label`,children:Bs(e)}),(0,H.jsx)(`div`,{className:`gv2-cdoc-body`,children:ks(Vs(t)).map((e,t)=>_.cloneElement(e,{key:`${n}-${t}`}))})]})}function Ws({content:e}){let t=new Set(zs),n=n=>n.find(n=>e[n]&&typeof e[n]==`string`&&!t.has(n)&&t.add(n)),r=n(Ms),i=Ns.filter(n=>typeof e[n]==`string`&&e[n]&&!t.has(n)&&t.add(n)),a=Ps.filter(n=>e[n]&&!t.has(n)&&t.add(n)),o=n(Fs),s=Object.keys(js).filter(n=>Array.isArray(e[n])&&e[n].length&&t.add(n)),c=Object.keys(e).filter(e=>!t.has(e)),l=[...c.filter(e=>!Is.includes(e)&&e!==`variante_hook`),...c.filter(e=>e===`variante_hook`),...c.filter(e=>Is.includes(e))];return(0,H.jsxs)(`div`,{className:`gv2-cdoc`,children:[(r||i.length>0)&&(0,H.jsxs)(`header`,{className:`gv2-cdoc-head`,children:[r&&(0,H.jsx)(`h2`,{children:Os(e[r],`titre`)}),i.length>0&&(0,H.jsx)(`div`,{className:`gv2-cdoc-meta`,children:i.map(t=>(0,H.jsx)(`span`,{children:e[t]},t))})]}),a.length>0&&(0,H.jsx)(`dl`,{className:`gv2-cdoc-context`,children:a.map(t=>(0,H.jsxs)(`div`,{children:[(0,H.jsx)(`dt`,{children:Bs(t)}),(0,H.jsx)(`dd`,{children:Os(Vs(e[t]),t)})]},t))}),o&&(0,H.jsxs)(`div`,{className:`gv2-cdoc-highlight`,children:[(0,H.jsx)(`span`,{className:`gv2-cdoc-label`,children:Bs(o)}),(0,H.jsx)(`p`,{children:Os(e[o],`accroche`)})]}),s.map(t=>(0,H.jsxs)(`section`,{className:`gv2-cdoc-list`,children:[(0,H.jsxs)(`h3`,{className:`gv2-cdoc-list-title`,children:[js[t],(0,H.jsx)(`span`,{children:e[t].length})]}),(0,H.jsx)(`ol`,{children:e[t].map((e,n)=>{if(typeof e!=`object`||!e)return(0,H.jsxs)(`li`,{className:`gv2-cdoc-item`,children:[(0,H.jsx)(`span`,{className:`gv2-cdoc-time`,children:String(n+1).padStart(2,`0`)}),(0,H.jsx)(`div`,{children:ks(String(e))})]},n);let r=Ls.find(t=>e[t]),i=Rs.find(t=>typeof e[t]==`string`&&e[t]),a=Object.keys(e).filter(e=>e!==r&&e!==i&&!zs.has(e)),o=[...a.filter(e=>!Is.includes(e)),...a.filter(e=>Is.includes(e))];return(0,H.jsxs)(`li`,{className:`gv2-cdoc-item`,children:[(0,H.jsx)(`span`,{className:`gv2-cdoc-time`,children:r?String(e[r]):String(e.numero||n+1).padStart(2,`0`)}),(0,H.jsxs)(`div`,{children:[i&&(0,H.jsx)(`strong`,{className:`gv2-cdoc-item-title`,children:Os(e[i],`${t}-${n}`)}),o.map(r=>[`texte`,`corps`,`contenu`,`texte_principal`,`reponse`].includes(r)&&typeof e[r]==`string`?(0,H.jsx)(`div`,{className:`gv2-cdoc-main`,children:ks(e[r])},r):(0,H.jsx)(Us,{name:r,value:e[r],keyPrefix:`${t}-${n}-${r}`},r))]})]},n)})})]},t)),l.map(t=>(0,H.jsx)(Us,{name:t,value:e[t],keyPrefix:t},t))]})}function Gs({sources:e,result:t}){let n=t?.auto_eval||{},r=Object.entries(n).filter(([,e])=>typeof e==`number`).slice(0,5),i=Array.isArray(t?.unverified_figures)?t.unverified_figures:[];return!e&&!r.length&&!i.length?null:(0,H.jsxs)(`div`,{className:`gv2-cdoc-sources`,children:[i.length>0&&(0,H.jsxs)(`p`,{className:`gv2-cdoc-verification`,role:`note`,children:[(0,H.jsxs)(`strong`,{children:[i.length,` chiffre`,i.length>1?`s`:``,` non vérifiable`,i.length>1?`s`:``,` retiré`,i.length>1?`s`:``,`.`]}),` `,`Gabriel n’invente aucun chiffre : ajoutez vos vrais résultats (prix, délais, pourcentages) dans votre demande pour qu’ils soient utilisés.`]}),e&&(0,H.jsxs)(`div`,{className:`gv2-cdoc-source-list`,children:[(0,H.jsx)(`span`,{className:e.use_psycho?`is-on`:``,children:e.use_psycho?`Analyse du Psychologue utilisée`:`Sans analyse du Psychologue`}),(0,H.jsx)(`span`,{className:e.use_strategy?`is-on`:``,children:e.use_strategy?`Stratégie d’Ariane utilisée`:`Sans stratégie d’Ariane`})]}),r.length>0&&(0,H.jsx)(`div`,{className:`gv2-cdoc-scores`,"aria-label":`Relecture de Gabriel`,children:r.map(([e,t])=>(0,H.jsxs)(`span`,{children:[(0,H.jsx)(`em`,{children:Bs(e)}),(0,H.jsx)(`strong`,{children:Math.round(t)})]},e))})]})}function Ks({messageId:e,result:t,sources:n,label:r=`Création terminée`,contentType:i,onCopy:a,onSave:o,onDownload:s,onPrepareRefinement:c,onRegenerate:l,saving:u,saved:d,copied:f}){let p=Ts(t),m=Es(p);return(0,H.jsxs)(`article`,{className:`gv2-creator-message gv2-creator-message--result`,children:[(0,H.jsxs)(`div`,{className:`gv2-creator-message-meta`,children:[(0,H.jsx)(`img`,{src:Ji.createur.portrait,alt:``}),(0,H.jsx)(`strong`,{children:`Le Créateur`}),(0,H.jsx)(`span`,{children:r})]}),(0,H.jsxs)(`div`,{className:`gv2-creator-result-card`,children:[(0,H.jsx)(`div`,{className:`gv2-creator-result-head`,children:(0,H.jsxs)(`div`,{children:[(0,H.jsx)(`span`,{children:r}),(0,H.jsx)(`strong`,{children:Ss[i]||`Contenu`})]})}),(0,H.jsxs)(`div`,{className:`gv2-creator-result-meta`,children:[(0,H.jsx)(`span`,{children:m?`${m} mots`:`Brouillon`}),(0,H.jsx)(`span`,{children:`Prêt à relire et affiner`})]}),Hs(t?.content)?(0,H.jsx)(Ws,{content:t.content}):(0,H.jsx)(`div`,{className:`gv2-creator-result-text`,children:p?ks(p):(0,H.jsx)(`p`,{children:`Le contenu généré est vide. Relancez une création.`})}),(0,H.jsx)(Gs,{sources:n,result:t}),(0,H.jsxs)(`div`,{className:`gv2-creator-result-actions`,role:`toolbar`,"aria-label":`Actions sur le contenu`,children:[(0,H.jsxs)(`button`,{type:`button`,onClick:()=>c(`Raccourcis le contenu sans perdre l’idée principale ni le ton.`),children:[(0,H.jsx)(U,{name:`scissors`,size:15}),`Raccourcir`]}),(0,H.jsxs)(`button`,{type:`button`,onClick:()=>c(`Propose une variante A/B avec un angle nettement différent, tout en gardant le même objectif.`),children:[(0,H.jsx)(U,{name:`split`,size:15}),`Variante A/B`]}),(0,H.jsxs)(`button`,{type:`button`,onClick:l,children:[(0,H.jsx)(U,{name:`refresh`,size:15}),`Régénérer`]}),(0,H.jsxs)(`button`,{type:`button`,onClick:()=>a(p,e),children:[(0,H.jsx)(U,{name:f?`check`:`copy`,size:15}),f?`Copié`:`Copier`]}),(0,H.jsx)(bs,{variant:`player`,className:`gv2-creator-listen`,label:`Écouter`,title:`Le Créateur vous lit le contenu`,getText:()=>p}),(0,H.jsxs)(`button`,{type:`button`,onClick:()=>s(p),children:[(0,H.jsx)(U,{name:`download`,size:15}),`Télécharger`]}),(0,H.jsxs)(`button`,{type:`button`,onClick:o,disabled:u||d,children:[(0,H.jsx)(U,{name:d?`check`:`file`,size:15}),u?`Sauvegarde…`:d?`Sauvegardé`:`Sauvegarder`]})]}),(0,H.jsxs)(`div`,{className:`gv2-creator-result-note`,children:[(0,H.jsx)(U,{name:`sparkle`,size:14}),(0,H.jsx)(`span`,{children:t?.writing_brief?`Le format, la tonalité et le contexte relié ont été pris en compte.`:`Affinez cette version avec une instruction courte dans le champ ci-dessous.`})]})]})]})}function qs({message:e,contentType:t,onCopy:n,onSave:r,onDownload:i,onPrepareRefinement:a,onRegenerate:o,onRetry:s,saving:c,saved:l,copied:u}){return e.kind===`intro`?(0,H.jsxs)(`article`,{className:`gv2-creator-message gv2-creator-message--intro`,children:[(0,H.jsxs)(`div`,{className:`gv2-creator-message-meta`,children:[(0,H.jsx)(`img`,{src:Ji.createur.portrait,alt:``}),(0,H.jsx)(`strong`,{children:`Le Créateur`})]}),(0,H.jsx)(`p`,{children:e.content})]}):e.kind===`status`?(0,H.jsxs)(`article`,{className:`gv2-creator-message gv2-creator-message--status`,children:[(0,H.jsx)(`span`,{className:`gv2-creator-pulse`}),(0,H.jsx)(`p`,{children:e.content})]}):e.kind===`result`?(0,H.jsx)(Ks,{messageId:e.id,result:e.result,sources:e.sources,label:e.label,contentType:t,onCopy:n,onSave:r,onDownload:i,onPrepareRefinement:a,onRegenerate:o,saving:c,saved:l,copied:u}):e.kind===`error`?(0,H.jsxs)(`article`,{className:`gv2-creator-message gv2-creator-message--error`,children:[(0,H.jsx)(`span`,{children:`!`}),(0,H.jsxs)(`div`,{children:[(0,H.jsx)(`p`,{children:e.content}),e.retryRequest&&s&&(0,H.jsxs)(`button`,{type:`button`,className:`gv2-creator-retry`,onClick:()=>s(e.retryRequest,e.id),children:[(0,H.jsx)(U,{name:`refresh`,size:14}),`Relancer la création`]})]})]}):(0,H.jsxs)(`article`,{className:`gv2-creator-message gv2-creator-message--user`,children:[(0,H.jsx)(`div`,{className:`gv2-creator-message-meta`,children:(0,H.jsx)(`span`,{className:`gv2-creator-user-mark`,children:`Vous`})}),(0,H.jsx)(`p`,{children:e.content})]})}function Js(e){return new Promise(t=>window.setTimeout(t,e))}var Ys=`gabriel_pending_creation`,Xs=9e5,Zs=2e3,Qs=8;function $s(){try{let e=JSON.parse(window.localStorage.getItem(Ys)||`null`);if(e?.id&&Date.now()-Number(e.t0||0)<Xs)return e}catch{}return null}function ec(e){try{window.localStorage.setItem(Ys,JSON.stringify(e))}catch{}}function tc(){try{window.localStorage.removeItem(Ys)}catch{}}function nc({workspace:e,lastAnalysis:t,creatorHandoff:n,settings:r,refinementRequest:i,onHasOutputChange:a,onWorkspaceChange:o,onSettingsChange:s,contextCollapsed:c,onShowContext:l}){let[u,d]=(0,_.useState)([]),[f,p]=(0,_.useState)(``),[m,h]=(0,_.useState)(null),[g,v]=(0,_.useState)(!1),[y,b]=(0,_.useState)(!0),[x,S]=(0,_.useState)(!1),[C,w]=(0,_.useState)(!1),[T,E]=(0,_.useState)(``),[D,O]=(0,_.useState)(!1),k=(0,_.useRef)(null),A=(0,_.useRef)(null),[j,M]=(0,_.useState)(null),N=(0,_.useRef)(null),[P,F]=(0,_.useState)(!0),[I,ee]=(0,_.useState)(!1),L=e?.analysis_id?{id:e.analysis_id,title:`Analyse de cet espace`}:t?.id?t:j,R=!!e?.strategy_id,z=n?.source===`stratege`&&n.folder_id===e?.folder_id&&n.strategy_id===e?.strategy_id;(0,_.useEffect)(()=>{ee(z)},[z,e?.folder_id,e?.strategy_id]),(0,_.useEffect)(()=>{if(e?.analysis_id||t?.id)return;let n=!0,r=K(`/history`);if(r&&typeof r.then==`function`)return r.then(async e=>{if(!e||!e.ok||W(e))return;let t=JSON.parse(await e.text()),r=(Array.isArray(t)?t:Array.isArray(t?.history)?t.history:[]).find(e=>e&&e.analysis_id);n&&r&&M({id:r.analysis_id,title:r.title||r.source||`Dernière analyse`})}).catch(()=>{}),()=>{n=!1}},[e?.analysis_id,t?.id]);function te(){let t=P&&!!L?.id,n=I&&R;return{use_psycho:t,use_strategy:n,analysis_id:t&&!L.cross?L.id:void 0,cross_analysis_id:t&&L.cross?L.id:void 0,strategy_id:n?e.strategy_id:void 0}}(0,_.useEffect)(()=>{let e=A.current;e&&e.scrollTo({top:e.scrollHeight,behavior:`smooth`})},[u,g]),(0,_.useEffect)(()=>{a(!!m)},[m,a]),(0,_.useEffect)(()=>{let t=!0;return d([]),h(null),p(``),b(!0),w(!1),e?.creator_output_id&&K(`/api/v2/jobs/${encodeURIComponent(e.creator_output_id)}`).then(async e=>{if(W(e))return window.location.assign(`/login`),null;let t=await G(e,`La création enregistrée`);return e.ok?t:null}).then(e=>{t&&e?.status===`done`&&e.data&&Ts(e.data)&&(h(e.data),b(!1),d([ws(`assistant`,`result`,{result:e.data,label:`Création enregistrée`})]))}).catch(()=>{}),()=>{t=!1}},[e?.folder_id,e?.creator_output_id]),(0,_.useEffect)(()=>{i?.id&&i.text&&m&&(p(i.text),window.requestAnimationFrame(()=>k.current?.focus()))},[i,m]),(0,_.useLayoutEffect)(()=>{let e=k.current;e&&(e.style.height=`auto`,e.style.height=`${Math.min(e.scrollHeight,210)}px`,e.style.overflowY=e.scrollHeight>210?`auto`:`hidden`)},[f]);function ne(e,t){d(n=>n.map(n=>n.id===e?t:n))}let re=(0,_.useRef)(!1);(0,_.useEffect)(()=>{if(re.current)return;let e=$s();if(!e)return;re.current=!0;let t=ws(`assistant`,`status`,{content:`Le Créateur retrouve votre création en cours…`});d(n=>[...n,ws(`user`,`request`,{content:e.request}),t]),v(!0),N.current=e.sources||N.current,ae(e.id,t.id,e.request,e.t0).catch(t=>ie(t.message||`Une erreur est survenue. Réessayez dans un instant.`,e.request)).finally(()=>v(!1))},[]);function ie(e,t){d(n=>[...n.filter(e=>e.kind!==`status`),ws(`assistant`,`error`,{content:e,retryRequest:t})])}async function ae(e,t,n,r=Date.now()){let i=0;for(;Date.now()-r<Xs;){await Js(Zs);let r,a;try{if(r=await K(`/api/v2/jobs/${encodeURIComponent(e)}`),W(r)){window.location.assign(`/login`);return}a=await G(r,`Le suivi de la création`),i=0}catch{if(i+=1,i>=Qs)throw tc(),Error(`La connexion au serveur est perdue. Relancez la création.`);continue}if(!r.ok||!a)throw tc(),Error(a?.error||`Le suivi de la création est indisponible.`);if(a.status===`done`){tc();let e=a.data||{};if(!Ts(e))throw Error(`La création ne contient aucun texte exploitable.`);h(e),w(!1),b(!1),ne(t,ws(`assistant`,`result`,{result:e,label:`Création terminée`,request:n,sources:N.current})),await o?.();return}if([`error`,`interrupted`,`not_found`].includes(a.status))throw tc(),Error(a.error||`La création a été interrompue.`);ne(t,{id:t,role:`assistant`,kind:`status`,content:a.step||`Le Créateur prépare votre contenu…`})}throw Error(`La création prend plus de temps que prévu et continue en arrière-plan. Rouvrez le Créateur dans quelques minutes pour la retrouver.`)}async function oe(t){let n=ws(`assistant`,`status`,{content:`Le Créateur relie votre demande au contexte du workspace…`});d(e=>[...e,n]);let i={content_type:r.contentType,channel:r.channel,tone:r.tone,emotion:r.emotion,creativity:r.creativity,objective:r.objective,generate_variant:r.generateVariant,user_request:t,folder_id:e?.folder_id||void 0,...te()};N.current={use_psycho:i.use_psycho,use_strategy:i.use_strategy};let a=await K(`/api/v2/agents/createur/generate`,{method:`POST`,headers:{"Content-Type":`application/json`},body:JSON.stringify(i)});if(W(a)){window.location.assign(`/login`);return}let s=await G(a,`Le Créateur`);if(!a.ok||s?.error)throw Error(s?.error||`La création n’a pas pu démarrer.`);if(s.job_id){let e=Date.now();ec({id:s.job_id,request:t,t0:e,sources:N.current}),await ae(s.job_id,n.id,t,e)}else{let e=s.data||s;if(!Ts(e))throw Error(`La création ne contient aucun texte exploitable.`);h(e),b(!1),ne(n.id,ws(`assistant`,`result`,{result:e,label:`Création terminée`,request:t,sources:N.current})),await o?.()}}async function se(t){let n=ws(`assistant`,`status`,{content:`Le Créateur applique votre modification sans repartir de zéro…`});d(e=>[...e,n]);let i=await K(`/api/v2/agents/createur/refine`,{method:`POST`,headers:{"Content-Type":`application/json`},body:JSON.stringify({original_content:m?.content||m||{},instruction:t,content_type:r.contentType,tone:r.tone,folder_id:e?.folder_id||void 0,...te()})});if(W(i)){window.location.assign(`/login`);return}let a=await G(i,`La modification du contenu`);if(!i.ok||a?.error)throw Error(a?.error||`La modification a échoué.`);let o=a.data||a;if(!Ts(o))throw Error(`La modification ne contient aucun texte exploitable.`);let s={...m||{},...o,content:o};h(s),w(!1),ne(n.id,ws(`assistant`,`result`,{result:s,label:`Modification appliquée`,sources:N.current}))}async function ce(){let e=f.trim();if(e&&!g){d(t=>[...t,ws(`user`,`request`,{content:e})]),p(``),v(!0);try{m?await se(e):await oe(e)}catch(t){ie(t.message||`Une erreur est survenue. Réessayez dans un instant.`,m?void 0:e)}finally{v(!1)}}}async function le(e,t){if(e&&!g){d(e=>e.filter(e=>e.id!==t)),v(!0);try{await oe(e)}catch(t){ie(t.message||`Une erreur est survenue. Réessayez dans un instant.`,e)}finally{v(!1)}}}async function ue(e,t){if(e)try{await navigator.clipboard?.writeText(e),E(t),window.setTimeout(()=>E(e=>e===t?``:e),1800)}catch{}}function B(e){if(!e)return;let t=new Blob([e],{type:`text/plain;charset=utf-8`}),n=window.URL.createObjectURL(t),i=document.createElement(`a`);i.href=n,i.download=`gabriel-${r.contentType||`creation`}.txt`,document.body.appendChild(i),i.click(),i.remove(),window.URL.revokeObjectURL(n)}function V(e){p(e),window.requestAnimationFrame(()=>k.current?.focus())}function de(){let e=window.SpeechRecognition||window.webkitSpeechRecognition;if(!e||D||g){k.current?.focus();return}let t=new e;t.lang=`fr-FR`,t.interimResults=!1,t.continuous=!1,t.onstart=()=>O(!0),t.onend=()=>O(!1),t.onerror=()=>O(!1),t.onresult=e=>{let t=e.results?.[0]?.[0]?.transcript?.trim();t&&p(e=>`${e}${e?` `:``}${t}`.slice(0,5e3))},t.start()}async function fe(){if(m&&!x){S(!0);try{let t=await K(`/api/v2/agents/createur/save`,{method:`POST`,headers:{"Content-Type":`application/json`},body:JSON.stringify({content_type:r.contentType,content:m?.content||m,full_text:Ts(m),analysis_id:e?.analysis_id||``,tone:r.tone,channel:r.channel})});if(W(t)){window.location.assign(`/login`);return}let n=await G(t,`La sauvegarde`);if(!t.ok||!n?.success)throw Error(n?.error||`La sauvegarde a échoué.`);w(!0)}catch(e){ie(e.message||`La sauvegarde a échoué.`)}finally{S(!1)}}}function pe(){h(null),w(!1),b(!0),p(``),d(e=>[...e,ws(`assistant`,`intro`,{content:`Très bien. Décrivez la nouvelle création que vous souhaitez préparer.`})]),window.requestAnimationFrame(()=>k.current?.focus())}return(0,H.jsxs)(`section`,{className:`gv2-creator-conversation${m?` has-result`:``}`,"aria-label":`Conversation avec le Créateur`,children:[(0,H.jsxs)(`header`,{className:`gv2-creator-header`,children:[(0,H.jsx)(`img`,{src:Ji.createur.portrait,alt:``}),(0,H.jsxs)(`div`,{children:[(0,H.jsx)(`h1`,{children:`Le Créateur`}),(0,H.jsx)(`p`,{children:`Rédaction et formats de conversion`})]}),(0,H.jsxs)(`div`,{className:`gv2-creator-header-actions`,children:[(0,H.jsxs)(`button`,{type:`button`,className:c?``:`is-active`,onClick:l,children:[(0,H.jsx)(U,{name:`settings`,size:14}),`Atelier`]}),m&&(0,H.jsxs)(`button`,{type:`button`,onClick:pe,children:[(0,H.jsx)(U,{name:`plus`,size:14}),`Nouvelle création`]})]})]}),(0,H.jsx)(`div`,{className:`gv2-creator-stream`,ref:A,children:(0,H.jsxs)(`div`,{className:`gv2-creator-thread`,children:[u.map(e=>(0,H.jsx)(qs,{message:e,contentType:r.contentType,onCopy:ue,onSave:fe,onDownload:B,onPrepareRefinement:V,onRetry:le,onRegenerate:()=>V(`Génère une nouvelle version avec un angle différent, en conservant l’objectif initial.`),saving:x,saved:C,copied:T===e.id},e.id)),!m&&y&&(0,H.jsxs)(`section`,{className:`gv2-creator-suggestions`,children:[(0,H.jsxs)(`div`,{children:[(0,H.jsx)(`span`,{children:`Points de départ`}),(0,H.jsx)(`button`,{type:`button`,onClick:()=>b(!1),children:`Masquer`})]}),(0,H.jsx)(`p`,{children:`Choisissez un format ou décrivez directement le résultat attendu.`}),(0,H.jsx)(`div`,{className:`gv2-creator-suggestion-list`,children:xs.map(e=>(0,H.jsxs)(`button`,{type:`button`,onClick:()=>{s?.({contentType:e.format}),p(e.text),k.current?.focus()},children:[(0,H.jsx)(`strong`,{children:e.label}),(0,H.jsx)(U,{name:`chevronRight`,size:15})]},e.label))})]})]})}),(0,H.jsxs)(`footer`,{className:`gv2-creator-composer-dock`,children:[(0,H.jsxs)(`div`,{className:`gv2-creator-composer-toolbar`,children:[(0,H.jsx)(`div`,{className:`gv2-creator-format-tabs`,role:`tablist`,"aria-label":`Format de création`,children:Cs.map(e=>(0,H.jsx)(`button`,{type:`button`,role:`tab`,"aria-selected":r.contentType===e.value,className:r.contentType===e.value?`is-active`:``,onClick:()=>s?.({contentType:e.value}),children:e.label},e.value))}),(0,H.jsxs)(`div`,{className:`gv2-creator-toolbar-actions`,children:[m&&(0,H.jsxs)(`button`,{type:`button`,className:`gv2-creator-new-trigger`,onClick:pe,children:[(0,H.jsx)(U,{name:`plus`,size:15}),`Nouvelle création`]}),(0,H.jsxs)(`button`,{type:`button`,className:`gv2-creator-atelier-trigger`,onClick:l,children:[(0,H.jsx)(U,{name:`settings`,size:16}),`Atelier`]})]})]}),(0,H.jsxs)(`div`,{className:`gv2-creator-sources`,role:`group`,"aria-label":`Contexte utilisé par le Créateur`,children:[(0,H.jsxs)(`button`,{type:`button`,className:`gv2-creator-source${P&&L?` is-on`:``}`,"aria-pressed":!!(P&&L),disabled:!L,onClick:()=>F(e=>!e),title:L?`Analyse utilisée : ${L.title}`:`Aucune analyse du Psychologue pour le moment`,children:[(0,H.jsx)(`img`,{src:Ji.psychologue.portrait,alt:``}),(0,H.jsxs)(`span`,{children:[(0,H.jsx)(`strong`,{children:`Analyse du Psychologue`}),(0,H.jsx)(`small`,{children:L?L.title:`Aucune analyse disponible`})]}),(0,H.jsx)(`i`,{"aria-hidden":`true`})]}),(0,H.jsxs)(`button`,{type:`button`,className:`gv2-creator-source${I&&R?` is-on`:``}`,"aria-pressed":!!(I&&R),disabled:!R,onClick:()=>ee(e=>!e),title:R?`Appuyer la création sur la stratégie d’Ariane`:`Aucune stratégie d’Ariane dans cet espace`,children:[(0,H.jsx)(`img`,{src:Ji.stratege.portrait,alt:``}),(0,H.jsxs)(`span`,{children:[(0,H.jsx)(`strong`,{children:`Stratégie d’Ariane`}),(0,H.jsx)(`small`,{children:R?I?z?`Activée depuis Ariane`:`Utilisée`:`Optionnelle`:`Aucune stratégie`})]}),(0,H.jsx)(`i`,{"aria-hidden":`true`})]})]}),(0,H.jsxs)(`form`,{className:`gv2-creator-composer${m?` is-refining`:``}`,onSubmit:e=>{e.preventDefault(),ce()},children:[(0,H.jsx)(`label`,{className:`gv2-visually-hidden`,htmlFor:`gv2-creator-request`,children:m?`Affiner cette version`:`Nouvelle création`}),(0,H.jsx)(`textarea`,{id:`gv2-creator-request`,ref:k,value:f,rows:`2`,maxLength:`5000`,disabled:g,onChange:e=>p(e.target.value),onKeyDown:e=>{e.key===`Enter`&&!e.shiftKey&&(e.preventDefault(),ce())},placeholder:m?`Décrivez la modification à appliquer…`:`Décrivez le contenu que vous souhaitez créer…`,"aria-label":m?`Demande de modification`:`Demande de création`}),(0,H.jsxs)(`div`,{className:`gv2-creator-composer-actions`,children:[(0,H.jsxs)(`div`,{children:[(0,H.jsx)(`button`,{type:`button`,className:`gv2-creator-composer-icon`,onClick:l,"aria-label":`Ajouter du contexte`,title:`Ajouter du contexte`,children:(0,H.jsx)(U,{name:`plus`,size:20})}),(0,H.jsxs)(`button`,{type:`button`,className:`gv2-creator-model-trigger`,onClick:l,children:[`Créateur 1.0`,(0,H.jsx)(U,{name:`chevronDown`,size:14})]}),(0,H.jsxs)(`span`,{children:[f.length,` / 5000`]})]}),(0,H.jsxs)(`div`,{children:[(0,H.jsx)(`button`,{type:`button`,className:`gv2-creator-composer-icon${D?` is-listening`:``}`,onClick:de,"aria-label":`Dicter la demande`,title:`Dicter la demande`,children:(0,H.jsx)(U,{name:`mic`,size:19})}),(0,H.jsx)(`button`,{type:`submit`,className:`gv2-creator-submit`,disabled:g||!f.trim(),"aria-label":g?`Création en cours`:m?`Appliquer la modification`:`Créer le contenu`,children:g?(0,H.jsx)(`span`,{className:`gv2-creator-submit-spinner`}):(0,H.jsx)(U,{name:`send`,size:21})})]})]})]})]})]})}var rc=e=>({size:t=16,strokeWidth:n=2,...r})=>(0,H.jsx)(`svg`,{width:t,height:t,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:n,strokeLinecap:`round`,strokeLinejoin:`round`,"aria-hidden":`true`,...r,children:e.map((e,t)=>(0,H.jsx)(`path`,{d:e},t))}),ic=rc([`M22 12h-2.48a2 2 0 0 0-1.93 1.46l-2.35 8.36a.25.25 0 0 1-.48 0L9.24 2.18a.25.25 0 0 0-.48 0l-2.35 8.36A2 2 0 0 1 4.49 12H2`]),ac=rc([`M12 19V5`,`m5 12 7-7 7 7`]),oc=rc([`M20 6 9 17l-5-5`]),sc=rc([`m6 9 6 6 6-6`]),cc=rc([`m15 18-6-6 6-6`]),lc=rc([`m9 18 6-6-6-6`]),uc=rc([`m21.44 11.05-9.19 9.19a6 6 0 0 1-8.49-8.49l8.57-8.57A4 4 0 1 1 18 8.84l-8.59 8.57a2 2 0 0 1-2.83-2.83l8.49-8.48`]),dc=rc([`M5 12h14`,`M12 5v14`]),fc=rc([`M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8`,`M21 3v5h-5`,`M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16`,`M8 16H3v5`]),pc=rc([`M18 6 6 18`,`m6 6 12 12`]),mc={placeholder:`Collez le lien d'une vidéo YouTube…`,labels:[`Lecture des commentaires`,`Détection des émotions`,`Repérage des objections`,`Construction des personas`],done:`Terminé`,failed:`Interrompue`,answerTitle:`Analyse prête`,answerBody:`Votre audience exprime surtout de la curiosité et un doute sur le prix. Ouvrez le rapport pour voir les émotions, les objections et les personas.`,reset:`Nouvelle analyse`,send:`Analyser`,greeting:`Que souhaitez-vous comprendre ?`,sub:`Le Psychologue lit votre audience et en tire ce qu'elle ressent vraiment.`,hint:`Un lien, des commentaires, ou un fichier`,report:`Ouvrir le rapport`},hc=60,gc=60,_c=132,vc=66,yc=220,bc=220,xc=138,Sc=()=>Math.min(640,window.innerWidth-32),Cc=()=>Math.min(400,window.innerWidth-32),wc=()=>(typeof document<`u`?document.querySelector(`.mo-root`)?.clientHeight:0)||window.innerHeight,Tc=()=>wc()*.14,Ec=e=>e<0?0:e>1?1:e,Dc=(e,t,n)=>e+(t-e)*n,Oc=e=>String(Math.round(e*1e4)/1e4),kc=Math.PI*2;function Ac(e){return function(){e|=0,e=e+1831565813|0;let t=Math.imul(e^e>>>15,1|e);return t=t+Math.imul(t^t>>>7,61|t)^t,((t^t>>>14)>>>0)/4294967296}}function jc(e,t,n,r){let i=3*e,a=3*(n-e)-i,o=1-i-a,s=3*t,c=3*(r-t)-s,l=1-s-c,u=e=>((o*e+a)*e+i)*e,d=e=>((l*e+c)*e+s)*e,f=e=>(3*o*e+2*a)*e+i,p=e=>{let t=e;for(let n=0;n<8;n++){let n=u(t)-e;if(Math.abs(n)<1e-6)return t;let r=f(t);if(Math.abs(r)<1e-6)break;t-=n/r}let n=0,r=1;t=e;for(let i=0;i<40;i++){let i=u(t);if(Math.abs(i-e)<1e-6)break;e>i?n=t:r=t,t=(r-n)/2+n}return t};return e=>e<=0?0:e>=1?1:d(p(e))}var J={out:jc(.22,1,.36,1),io:jc(.65,0,.35,1),in:jc(.4,0,1,1),fly:jc(.5,0,.1,1),grow:jc(.3,0,.2,1),vortex:jc(.6,0,.2,1),spring:jc(.34,1.4,.64,1),card:jc(.65,0,.2,1),lin:e=>e},Mc=(e,t,n,r)=>(1-e)*(1-e)*t+2*(1-e)*e*n+e*e*r,Y=(e,t,n,r,i,a=J.io)=>({ch:e,from:t,to:n,t0:r,t1:i,ease:a}),Nc=e=>[Y(`w`,e.pw,e.pw-12,0,100,J.out),Y(`oInput`,1,0,0,160,J.in),Y(`inScale`,1,.6,0,160,J.in),Y(`oGlow`,1,0,0,300,J.out),Y(`oAur`,1,0,0,300,J.out),Y(`w`,e.pw-12,gc,100,560,J.io),Y(`h`,hc,66,380,500,J.out),Y(`h`,66,gc,500,620,J.out),Y(`oPill`,1,0,300,560,J.out),Y(`oBall`,0,1,300,560,J.out),Y(`u`,0,1,620,1500,J.fly),Y(`w`,gc,xc,620,1300,J.grow),Y(`h`,gc,xc,620,1300,J.grow),Y(`w`,xc,_c,1300,1500,J.out),Y(`h`,xc,_c,1300,1500,J.out),Y(`cHalo`,0,.6,620,1500,J.out),Y(`trail`,0,1,700,800,J.out),Y(`trail`,1,0,1300,1500,J.in)],Pc=[Y(`oRing`,1,0,0,300,J.out),Y(`oBall`,1,0,0,260,J.out),Y(`orb.k`,0,1,0,800,J.out),Y(`orb.alpha`,0,1,0,800,J.out),Y(`orb.spin`,0,.9,0,800,J.out),Y(`orb.pop`,1,1.05,0,420,J.out),Y(`orb.pop`,1.05,1,420,800,J.io),Y(`sOp`,0,1,300,620,J.out),Y(`sTy`,6,0,300,620,J.out)],Fc=[Y(`orb.sweep`,0,1,0,700,J.io),Y(`orb.spin`,.9,.3,0,700,J.out),Y(`orb.gain`,1,0,0,700,J.out),Y(`orb.floor`,0,.95,400,900,J.out),Y(`orb.rad`,0,.15,400,900,J.out),Y(`orb.pop`,1,1.04,600,800,J.out),Y(`orb.pop`,1.04,1,800,900,J.out)],Ic=[Y(`orb.pop`,1,1.06,0,120,J.out),Y(`sOp`,1,0,0,160,J.in),Y(`sTy`,0,-6,0,160,J.in),Y(`orb.k`,1,0,120,640,J.vortex),Y(`orb.vortex`,0,1.6,120,640,J.vortex),Y(`oGreen`,0,1,260,700,J.spring),Y(`gs`,.55,1,260,700,J.spring),Y(`pulse`,0,1,320,760,J.out),Y(`oHalo`,0,.35,380,700,J.out),Y(`orb.alpha`,1,0,500,800,J.out)],Lc=(e,t)=>[Y(`w`,_c,124,0,90,J.in),Y(`h`,_c,124,0,90,J.in),Y(`w`,124,e.cw,90,700,J.card),Y(`h`,124,bc,90,700,J.out),Y(`r`,_c/2,20,90,700,J.io),Y(`oGreen`,1,0,200,560,J.out),Y(`oCard`,0,1,200,560,J.out),Y(`oHalo`,.35,0,300,700,J.out),Y(`cHalo`,.6,.22,300,700,J.out),Y(`hOp`,0,1,520,840,J.out),Y(`dotS`,0,1,520,840,J.spring),Y(`wp`,0,1,600,600+t,J.lin),Y(`bloom`,1,.625,700,1200,J.io)],Rc=[Y(`oInput`,1,0,0,140,J.out),Y(`oPill`,1,0,0,200,J.out),Y(`oGlow`,1,0,0,200,J.out),Y(`oAur`,1,0,0,200,J.out),Y(`oRing`,1,0,0,200,J.out)],zc=[Y(`orb.alpha`,0,1,0,200,J.out),Y(`sOp`,0,1,0,200,J.out),Y(`cHalo`,0,.6,0,200,J.out)],Bc=[Y(`orb.sweep`,0,1,0,250,J.io),Y(`orb.floor`,0,.95,0,250,J.out)],Vc=[Y(`oGreen`,0,1,0,250,J.out),Y(`orb.alpha`,1,0,0,250,J.out),Y(`sOp`,1,0,0,250,J.out)],Hc=[Y(`oGreen`,1,0,0,120,J.out)],Uc=e=>[Y(`oCard`,0,1,0,250,J.out),Y(`hOp`,0,1,0,250,J.out),Y(`wp`,0,1,0,e,J.lin),Y(`bloom`,1,.625,0,250,J.out)],Wc=[`oGlow`,`oAur`,`oPill`,`oBall`,`oGreen`,`oCard`,`oRing`,`oInput`,`oHalo`,`sOp`,`orb.alpha`,`trail`],Gc={h:hc,r:999,oGlow:1,oHalo:0,oPill:1,oBall:0,oGreen:0,oCard:0,oRing:1,oInput:1,inScale:1,oAur:1,gs:.55,cs:1,hOp:0,dotS:0,bloom:1,u:0,yOff:0,trail:0,pulse:-1,sOp:0,sTy:6,cHalo:0,wp:0,"orb.k":0,"orb.alpha":0,"orb.spin":0,"orb.pop":1,"orb.sweep":0,"orb.vortex":0,"orb.gain":1,"orb.floor":0,"orb.rad":0},Kc=Symbol(`abort`);function qc(e,t){return new Promise(n=>{if(t.aborted)return n();let r=0,i=()=>{window.clearTimeout(r),n()};r=window.setTimeout(()=>{t.removeEventListener(`abort`,i),n()},Math.max(0,e)),t.addEventListener(`abort`,i,{once:!0})})}function Jc(e,t){return new Promise(n=>{if(t.aborted)return n(void 0);let r=()=>n(void 0);t.addEventListener(`abort`,r,{once:!0}),e.then(e=>{t.removeEventListener(`abort`,r),n(e)},()=>{t.removeEventListener(`abort`,r),n(void 0)})})}var Yc=16,Xc=(()=>{let e=Ac(7),t=[];for(let n=0;n<Yc;n++){let r=1-(n+.5)/Yc*2,i=Math.sqrt(1-r*r),a=Math.max(4,Math.round(30*i));for(let o=0;o<a;o++){let s=o/a*kc+n*.35;t.push({x:Math.cos(s)*i,y:r,z:Math.sin(s)*i,u:(1-r)/2,seed:e()*6.283})}}return t})(),Zc=Xc.length,Qc=Float32Array.from(Xc,e=>e.x),$c=Float32Array.from(Xc,e=>e.y),el=Float32Array.from(Xc,e=>e.z),tl=Float32Array.from(Xc,e=>e.u),nl=Float32Array.from(Xc,e=>e.seed),rl=24,il=48,al=(()=>{let e=[];for(let t=0;t<=rl;t++){let n=t/rl,r=Math.round(Dc(150,113,n)),i=Math.round(Dc(156,128,n)),a=Math.round(Dc(152,120,n));for(let t=0;t<=il;t++)e.push(`rgba(${r},${i},${a},${(t/il).toFixed(3)})`)}return e})(),ol=(()=>{let e=[];for(let t=0;t<=rl;t++){let n=t/rl,r=Math.round(Dc(214,150,n)),i=Math.round(Dc(219,186,n)),a=Math.round(Dc(216,166,n));for(let t=0;t<=il;t++)e.push(`rgba(${r},${i},${a},${(t/il).toFixed(3)})`)}return e})(),sl=[`k`,`alpha`,`spin`,`sweep`,`pop`,`vortex`,`gain`,`floor`,`rad`];function cl(e,t,n){let r={k:0,alpha:0,spin:0,rot:0,sweep:0,pop:1,vortex:0,gain:1,floor:0,rad:0,prog:0},i=e.getContext(`2d`),a=new Float32Array(Zc),o=new Float32Array(Zc),s=new Float32Array(Zc),c=new Float32Array(Zc),l=new Float32Array(Zc),u=new Int16Array(Zc),d=[1,0,0,0],f=0,p=0,m=0,h=!1,g=()=>{r.k=0,r.alpha=0,r.spin=0,r.rot=0,r.sweep=0,r.pop=1,r.vortex=0,r.gain=1,r.floor=0,r.rad=0,r.prog=0,a.fill(0),d[0]=1,d[1]=0,d[2]=0,d[3]=0,f=n()?1.2:0};if(g(),!i)return{P:r,ensure(){},reset:g,destroy(){}};let _=Math.min(2,window.devicePixelRatio||1);e.width=Math.round(yc*_),e.height=Math.round(yc*_),i.setTransform(_,0,0,_,0,0);let v=Math.cos(.35),y=Math.sin(.35),b=yc/2,x=t=>{i.clearRect(0,0,yc,yc),f+=t,r.rot+=r.spin*t;let n=r.rot+r.vortex,p=Math.cos(n),m=Math.sin(n),h=t/.35;for(let e=0;e<4;e++){let t=+(e===r.prog)-d[e];d[e]+=Math.abs(t)<=h?t:t>0?h:-h}let g=Math.exp(-t/.5),_=f*300%Zc,x=f*480%Zc,S=f*.8,C=Math.sin(f*.5)*.9,w=Math.cos(C)*Math.cos(S),T=Math.sin(C),E=Math.cos(C)*Math.sin(S),D=f*.55+2.1,O=Math.cos(f*.42)*.9,k=Math.cos(O)*Math.cos(D),A=Math.sin(O),j=Math.cos(O)*Math.sin(D),M=Math.sin(f*2.2),N=r.vortex*1.5;for(let e=0;e<Zc;e++){let t=Qc[e],n=$c[e],i=el[e],h=tl[e],S=0;if(d[0]>.001){let t=Math.abs(e-_);t>Zc-t&&(t=Zc-t);let n=Math.max(0,1-t/16);S=Math.max(S,n*n*d[0])}if(d[1]>.001){let e=Math.max(0,(t*w+n*T+i*E-.72)/.28),r=Math.max(0,(t*k+n*A+i*j-.72)/.28),a=Math.max(e,r);S=Math.max(S,a*a*d[1])}if(d[2]>.001){let e=n-M,t=Math.max(0,1-e*e/.02);S=Math.max(S,t*t*d[2])}if(d[3]>.001){let t=Math.abs(e-x);t>Zc-t&&(t=Zc-t);let n=Math.max(0,1-t/22);S=Math.max(S,n*n*d[3])}let C=Math.max(a[e]*g,S*r.gain);a[e]=C;let D=Ec(r.k*1.6-.6*h);if(D<=.001){u[e]=-1;continue}let O=J.out(D),P=O*r.pop,F=t*p+i*m,I=-t*m+i*p,ee=n*v-I*y,L=n*y+I*v,R=2.8/(2.8-L),z=(L+1)/2,te=F*vc*P*R,ne=-ee*vc*P*R;if(N>.001){let e=(1-D)*N,t=Math.cos(e),n=Math.sin(e),r=te*t-ne*n;ne=te*n+ne*t,te=r}let re=Ec((r.sweep*1.4-h)/.4),ie=.1+.035*Math.sin(nl[e]+f*1.6)*(1-re)+.32*z*z+.75*C*(1-re)+re*(.55+.4*z)+2*re*(1-re);ie=Math.max(ie,r.floor*(.7+.3*z)),ie>1&&(ie=1),ie*=O*r.alpha,o[e]=b+te,s[e]=b+ne,l[e]=z,c[e]=(1.15*(.45+.75*z)*R+.9*C+re*.25)*(1+r.rad)*(.4+.6*O);let ae=Math.round(ie*il),oe=Math.round(re*rl);u[e]=ae<=0?-1:oe*49+ae}let P=e.closest(`.gv2-theme-dark`)?ol:al;for(let e=0;e<2;e++)for(let t=0;t<Zc;t++){let n=u[t];n<0||l[t]>=.5==(e===1)&&(i.fillStyle=P[n],i.beginPath(),i.arc(o[t],s[t],c[t],0,kc),i.fill())}},S=e=>{if(p=0,h)return;let a=n()?0:Math.max(0,Math.min(.05,(e-m)/1e3))*t();m=e,x(a),r.alpha>.002?p=requestAnimationFrame(S):i.clearRect(0,0,yc,yc)};return{P:r,ensure:()=>{p||h||r.alpha<=.002||(m=performance.now(),p=requestAnimationFrame(S))},reset:g,destroy:()=>{h=!0,p&&cancelAnimationFrame(p),p=0}}}function ll(e,t,n){let r=e.length,i=e=>{n.x=e.x,n.y=e.y,n.d=e.d};if(r===0)n.x=0,n.y=0,n.d=0;else{if(t<=e[0].t)return i(e[0]);for(let a=r-1;a>0;a--){let r=e[a-1],o=e[a];if(t>=r.t){if(t>=o.t)return i(o);let e=(t-r.t)/(o.t-r.t||1);n.x=Dc(r.x,o.x,e),n.y=Dc(r.y,o.y,e),n.d=Dc(r.d,o.d,e);return}}i(e[r-1])}}function ul(e){let{actor:t,mover:n,root:r,status:i,pulse:a,ghosts:o,form:s}=e,c=new AbortController,l={pw:Sc(),cw:Cc(),H:Tc(),dir:-1},u=cl(e.canvas,e.getSpeed,e.isReduced),d={},f=new Set,p={},m=null,h=null,g=!1,_=!1,v=0,y=0,b=0,x=gc,S=0,C=!1,w=45,T=320,E=[],D={t:0,x:0,y:0,d:0},O=()=>{let e=new AbortController;return c.signal.aborted?e.abort():c.signal.addEventListener(`abort`,()=>e.abort(),{once:!0}),e},k=()=>{if(S<=.001){C&&=(o.forEach(e=>e.style.opacity=`0`),!1);return}C=!0;let e=performance.now();for(let t=0;t<o.length;t++){ll(E,e-(t+1)*45,D);let n=D.d*(1-.08*(t+1))/100,r=o[t];r.style.transform=`translate3d(${(D.x-y).toFixed(2)}px,${(D.y-b).toFixed(2)}px,0) translate(-50%,-50%) scale(${n.toFixed(3)})`,r.style.opacity=(.28*(1-t/6)**1.5*S).toFixed(3)}},A=()=>{let e=d.u??0,t=l.H;y=Mc(e,0,l.dir*.3*t,0),b=Mc(e,t,.6*t,0)+(d.yOff??0),n.style.transform=`translate3d(${y.toFixed(2)}px,${b.toFixed(2)}px,0)`;let r=performance.now();for(E.push({t:r,x:y,y:b,d:x});E.length>2&&E[0].t<r-500;)E.shift();k()};[`oGlow`,`oHalo`,`oPill`,`oBall`,`oGreen`,`oCard`,`oRing`,`oInput`,`oAur`,`gs`,`cs`,`hOp`,`dotS`,`bloom`].forEach(e=>{p[e]=n=>t.style.setProperty(`--`+e,Oc(n))}),[`w`,`h`,`r`].forEach(e=>{p[e]=n=>{t.style.setProperty(`--`+e,Oc(n)+`px`),e===`w`&&(x=n)}}),p.inScale=e=>{t.style.setProperty(`--inScale`,Oc(e)),s.style.filter=e>=.999?`none`:`blur(${Oc((1-e)*15)}px)`},p.sOp=e=>i.style.setProperty(`--sOp`,Oc(e)),p.sTy=e=>i.style.setProperty(`--sTy`,Oc(e)),p.cHalo=e=>r.style.setProperty(`--oCenter`,Oc(e)),p.u=()=>A(),p.yOff=()=>A(),p.trail=e=>{S=e,k()},p.pulse=e=>{e<0?a.style.opacity=`0`:(a.style.opacity=Oc(.5*(1-e)),a.style.transform=`scale(${Oc(1+e)})`)},p.wp=t=>{let n=e.getBody();if(!n)return;let r=n.querySelectorAll(`.mo-w`),i=t*((r.length-1)*w+T),a=e.isReduced();r.forEach((e,t)=>{let n=J.out(Ec((i-t*w)/T));e.style.opacity=Oc(n),e.style.transform=n>=.999||a?`none`:`translateY(${Oc((1-n)*4)}px)`,e.style.filter=n>=.999||a?`none`:`blur(${Oc((1-n)*4)}px)`})},sl.forEach(e=>{p[`orb.`+e]=t=>{u.P[e]=t,e===`alpha`&&u.ensure()}});let j=(e,t)=>{d[e]=t,f.add(e)},M=()=>{f.forEach(e=>p[e]?.(d[e])),f.clear()},N=(e,t)=>{d[e]=t,p[e]?.(t)},P=()=>{N(`w`,l.pw);for(let e of Object.keys(Gc))N(e,Gc[e])},F=(t,n)=>new Promise(r=>{if(n.aborted)return r();let i=t.reduce((e,t)=>Math.max(e,t.t1),0),a=new Set,o=0,s=0,c=performance.now(),l=()=>{cancelAnimationFrame(o),r()},u=()=>{n.removeEventListener(`abort`,l),r()},d=n=>{let r=Math.max(0,Math.min(100,n-c));c=n,s+=r*e.getSpeed();for(let e of t){if(a.has(e)||s<e.t0)continue;let t=Math.min(1,(s-e.t0)/Math.max(1,e.t1-e.t0));j(e.ch,e.from+(e.to-e.from)*(e.ease??J.io)(t)),t===1&&a.add(e)}M(),s>=i?u():o=requestAnimationFrame(d)};n.addEventListener(`abort`,l,{once:!0}),o=requestAnimationFrame(d)}),I=async(t,n)=>{let r=0,i=``;for(;;){if(await qc((e.getStep()?300:1150)/e.getSpeed(),t),t.aborted||n.stop)return;let a=e.getStep();if(a){let t=e.getProgress();typeof t==`number`&&(u.P.prog=Math.min(3,Math.floor(Ec(t)*4))),a!==i&&(i=a,e.ui.swapLabel(a),e.ui.live(a))}else r=(r+1)%mc.labels.length,u.P.prog=r%4,e.ui.swapLabel(mc.labels[r])}},ee=async(t,n,r)=>{let i=e.isReduced(),a=async e=>{if(await F(e,n),n.aborted)throw Kc};try{e.ui.setPhase(`launch`),E.length=0,i?(await a(Rc),N(`u`,1),N(`w`,_c),N(`h`,_c),N(`r`,_c/2),N(`sTy`,0),N(`orb.k`,1),N(`orb.spin`,0),e.ui.setPhase(`assemble`),await a(zc)):(await a(Nc(l)),N(`r`,_c/2),e.ui.setPhase(`assemble`),await a(Pc)),e.ui.setPhase(`think`);let o=e.getStep();o&&e.ui.swapLabel(o),e.ui.live(o||mc.labels[0]);let s={stop:!1};I(n,s);let c=performance.now(),u=null,d=await Jc(Promise.resolve().then(()=>r.onSubmit(t)).then(e=>typeof e==`string`&&e.trim()?e:mc.answerBody,e=>(u=e&&e.message||`Une erreur est survenue.`,u)),n);if(n.aborted)throw Kc;let f=d??mc.answerBody;if(await qc(r.minThink/e.getSpeed()-(performance.now()-c),n),s.stop=!0,n.aborted)throw Kc;let p=f.split(/\s+/).filter(Boolean),m=Math.max(1,p.length);e.ui.setError(u);let h=u?mc.failed:mc.done;if(!i)e.ui.setPhase(`resolve`),e.ui.swapLabel(h),await a(Fc),e.ui.setPhase(`condense`),await a(Ic),e.ui.setPhase(`unfold`),T=320,w=m>1?Math.min(45,280/(m-1)):0,e.ui.setAnswer(f),await a(Lc(l,(m-1)*w+T));else{if(e.ui.setPhase(`resolve`),e.ui.swapLabel(h),await a(Bc),await qc(350/e.getSpeed(),n),n.aborted)throw Kc;e.ui.setPhase(`condense`),N(`gs`,1),await a(Vc),e.ui.setPhase(`unfold`),T=250,w=0,e.ui.setAnswer(f),await a(Hc),N(`w`,l.cw),N(`h`,bc),N(`r`,20),N(`dotS`,1),await a(Uc(T))}e.ui.setPhase(`answered`),e.ui.live((u?`Analyse interrompue : `:`Analyse prête : `)+f),e.ui.focusAnswer()}catch(e){if(e===Kc)return;R()}},L=async t=>{if(_)return;_=!0;let n=++v,r=O();h=r;let i=r.signal,a=t===`reset`?240:200,o=t===`reset`?420:200;e.ui.setPhase(`reset`);let s=[Y(`cHalo`,d.cHalo??0,0,0,a,J.out)];for(let e of Wc){let t=d[e]??0;t>.001&&s.push(Y(e,t,0,0,a,J.out))}if(t===`reset`&&s.push(Y(`cs`,1,.98,0,a,J.out)),await F(s,i),i.aborted||n!==v)return;N(`pulse`,-1),e.ui.setAnswer(``),e.ui.setError(null),e.ui.resetLabel(),e.ui.clearInput(),u.reset(),E.length=0,l.pw=Sc(),l.cw=Cc(),l.H=Tc(),P();let c=[`oPill`,`oInput`,`oGlow`,`oAur`,`oRing`];c.forEach(e=>N(e,0)),N(`yOff`,t===`reset`?8:0);let f=c.map(e=>Y(e,0,1,0,o,J.out));t===`reset`&&f.push(Y(`yOff`,8,0,0,o,J.out)),await F(f,i),i.aborted||n!==v||(P(),m=null,h=null,g=!1,_=!1,e.ui.lock(!1),e.ui.setPhase(`idle`),e.ui.idleReady())};function R(){v++,m?.abort(),m=null,h?.abort(),h=null,u.reset(),E.length=0,e.ui.setAnswer(``),e.ui.setError(null),e.ui.resetLabel(),l.pw=Sc(),l.cw=Cc(),l.H=Tc(),P(),N(`pulse`,-1),g=!1,_=!1,e.ui.lock(!1),e.ui.setPhase(`idle`),e.ui.idleReady()}return P(),{start(t,n){if(g)return!1;g=!0,l.pw=Sc(),l.cw=Cc(),l.H=Tc(),l.dir=-l.dir,u.reset(),N(`u`,0);let r=O();return m=r,e.ui.lock(!0),ee(t,r.signal,n),!0},escape(){g&&!_&&(m?.abort(),L(`esc`))},reset(){g&&!_&&L(`reset`)},hard:R,home(){g||(l.pw=Sc(),l.cw=Cc(),l.H=Tc(),N(`w`,l.pw),N(`u`,0))},busy:()=>g,destroy(){c.abort(),u.destroy()}}}var dl=typeof window<`u`?_.useLayoutEffect:_.useEffect;function fl(e){let[t,n]=(0,_.useState)(`idle`),[r,i]=(0,_.useState)(``),[a,o]=(0,_.useState)({cur:mc.labels[0],prev:null,n:0}),[s,c]=(0,_.useState)(``),[l,u]=(0,_.useState)(null),[d,f]=(0,_.useState)(1),[p,m]=(0,_.useState)(!1);(0,_.useEffect)(()=>{m(/[?&]debug(?:[=&]|$)/.test(window.location.search))},[]);let h=(0,_.useRef)(null),g=(0,_.useRef)(null),v=(0,_.useRef)(null),y=(0,_.useRef)(null),b=(0,_.useRef)(null),x=(0,_.useRef)(null),S=(0,_.useRef)(null),C=(0,_.useRef)(null),w=(0,_.useRef)(null),T=(0,_.useRef)(null),E=(0,_.useRef)(null),D=(0,_.useRef)([]),O=(0,_.useRef)(e);O.current=e;let k=(0,_.useRef)(1);k.current=Math.max(.05,(e.speed??1)*d);let A=(0,_.useRef)(`idle`),j=(0,_.useRef)(!1),M=(0,_.useRef)(null),N=(0,_.useRef)(``),P=(0,_.useRef)({});dl(()=>{let e=h.current,t=g.current,r=v.current,a=x.current,s=S.current,l=C.current,d=y.current,f=D.current.filter(e=>!!e);if(!e||!t||!r||!a||!s||!l||!d)return;let p=typeof window.matchMedia==`function`?window.matchMedia(`(prefers-reduced-motion: reduce)`):null;j.current=p?p.matches:!1;let m=e=>{j.current=e.matches};p?.addEventListener(`change`,m);let _=ul({root:e,mover:t,actor:r,form:d,ghosts:f,canvas:a,pulse:s,status:l,getBody:()=>T.current,getSpeed:()=>k.current,isReduced:()=>j.current,getStep:()=>O.current.stepLabel,getProgress:()=>O.current.progress,ui:{setError:e=>u(e),setPhase:e=>{A.current=e,n(e)},swapLabel:e=>o(t=>t.cur===e?t:{cur:e,prev:t.cur,n:t.n+1}),resetLabel:()=>o(e=>({cur:mc.labels[0],prev:null,n:e.n+1})),setAnswer:e=>c(e),clearInput:()=>i(``),live:e=>{E.current&&(E.current.textContent=e)},lock:e=>{d.toggleAttribute(`inert`,e)},idleReady:()=>{b.current?.focus({preventScroll:!0})},focusAnswer:()=>{w.current?.focus({preventScroll:!0})}}});M.current=_;let N=e=>{e.key===`Escape`&&A.current!==`idle`&&A.current!==`reset`&&(e.preventDefault(),_.escape())},F=()=>{A.current===`idle`&&!_.busy()&&_.home()};return window.addEventListener(`keydown`,N),window.addEventListener(`resize`,F),b.current?.focus({preventScroll:!0}),()=>{window.removeEventListener(`keydown`,N),window.removeEventListener(`resize`,F),p?.removeEventListener(`change`,m),window.clearTimeout(P.current.typing),window.clearTimeout(P.current.shake),window.clearTimeout(P.current.flash),_.destroy(),M.current=null}},[]);let F=()=>new Promise(e=>{window.setTimeout(()=>e(mc.answerBody),4600/k.current)}),I=()=>({onSubmit:O.current.onSubmit??F,minThink:O.current.minThinkMs??3450}),ee=()=>{let e=v.current;e&&(e.removeAttribute(`data-shake`),e.offsetWidth,e.setAttribute(`data-shake`,``),e.setAttribute(`data-flash`,``),window.clearTimeout(P.current.shake),window.clearTimeout(P.current.flash),P.current.shake=window.setTimeout(()=>e.removeAttribute(`data-shake`),260),P.current.flash=window.setTimeout(()=>e.removeAttribute(`data-flash`),200))},L=e=>{i(e.target.value);let t=v.current;t&&(t.setAttribute(`data-typing`,``),window.clearTimeout(P.current.typing),P.current.typing=window.setTimeout(()=>t.removeAttribute(`data-typing`),300))},R=e=>{e.key===`Enter`&&(e.shiftKey||e.nativeEvent.isComposing)&&e.preventDefault()};(0,_.useEffect)(()=>{O.current.onPhaseChange?.(t)},[t]);let z=e=>{e.preventDefault();let t=M.current;if(!t||t.busy()||A.current!==`idle`)return;if(O.current.onBarSubmit){let e=O.current.onBarSubmit();e&&(N.current=e,t.start(e,I()));return}let n=r.trim();n?(N.current=n,t.start(n,I())):ee()},te=()=>{A.current===`answered`&&M.current?.reset()},ne=()=>{let e=M.current;if(!e)return;let t=N.current||`https://youtu.be/exemple`;N.current=t,e.hard(),i(t),window.requestAnimationFrame(()=>{e.start(t,I())})},re=r.trim().length>0,ie=s.split(/\s+/).filter(Boolean),ae=e=>e===mc.done||e===mc.failed?(0,H.jsx)(`span`,{className:e===mc.done?`mo-lab-done`:`mo-lab-err`,children:e}):(0,H.jsxs)(H.Fragment,{children:[(0,H.jsx)(`span`,{className:`mo-lab-t`,children:e}),(0,H.jsxs)(`span`,{className:`mo-dots`,"aria-hidden":`true`,children:[(0,H.jsx)(`i`,{}),(0,H.jsx)(`i`,{}),(0,H.jsx)(`i`,{})]})]});return(0,H.jsxs)(`div`,{className:`mo-root`,"data-phase":t,"data-error":l?``:void 0,ref:h,children:[(0,H.jsxs)(`div`,{className:`mo-bg`,"aria-hidden":`true`,children:[(0,H.jsx)(`i`,{}),(0,H.jsx)(`i`,{}),(0,H.jsx)(`i`,{})]}),(0,H.jsx)(`div`,{className:`mo-halo`,"aria-hidden":`true`}),(0,H.jsxs)(`div`,{className:`mo-greet`,children:[(0,H.jsx)(`h1`,{children:e.greeting??mc.greeting}),e.sub===void 0?(0,H.jsx)(`p`,{children:mc.sub}):e.sub]}),(0,H.jsxs)(`div`,{className:`mo-mover`,ref:g,children:[Array.from({length:6}).map((e,t)=>(0,H.jsx)(`span`,{className:`mo-trail`,"aria-hidden":`true`,ref:e=>{D.current[t]=e}},t)),(0,H.jsxs)(`div`,{className:`mo-actor`,ref:v,children:[(0,H.jsx)(`div`,{className:`mo-underglow`,"aria-hidden":`true`}),(0,H.jsx)(`div`,{className:`mo-halo-green`,"aria-hidden":`true`}),(0,H.jsx)(`div`,{className:`mo-surface`,"aria-hidden":`true`,children:(0,H.jsxs)(`div`,{className:`mo-aurora`,children:[(0,H.jsx)(`i`,{}),(0,H.jsx)(`i`,{}),(0,H.jsx)(`i`,{}),(0,H.jsx)(`i`,{})]})}),(0,H.jsx)(`div`,{className:`mo-ball`,"aria-hidden":`true`}),(0,H.jsx)(`div`,{className:`mo-green`,"aria-hidden":`true`}),(0,H.jsx)(`div`,{className:`mo-card`,"aria-hidden":`true`}),(0,H.jsx)(`div`,{className:`mo-ring`,"aria-hidden":`true`}),(0,H.jsx)(`form`,{className:`mo-input`,ref:y,onSubmit:z,autoComplete:`off`,children:e.slot??(0,H.jsxs)(H.Fragment,{children:[(0,H.jsxs)(`svg`,{className:`mo-spark`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:`1.5`,strokeLinecap:`round`,strokeLinejoin:`round`,"aria-hidden":`true`,children:[(0,H.jsx)(`path`,{d:`M10 3.5l1.7 4.8 4.8 1.7-4.8 1.7L10 16.5l-1.7-4.8L3.5 10l4.8-1.7L10 3.5z`}),(0,H.jsx)(`path`,{d:`M18 14.5l.7 1.8 1.8.7-1.8.7-.7 1.8-.7-1.8-1.8-.7 1.8-.7.7-1.8z`})]}),(0,H.jsx)(`input`,{ref:b,className:`mo-field`,type:`text`,value:r,maxLength:200,placeholder:mc.placeholder,"aria-label":`Lien ou commentaires à analyser`,spellCheck:!1,onChange:L,onKeyDown:R}),(0,H.jsx)(`button`,{type:`submit`,className:`mo-send`,"aria-label":mc.send,"data-ready":re?``:void 0,children:(0,H.jsxs)(`svg`,{viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:`1.5`,strokeLinecap:`round`,strokeLinejoin:`round`,"aria-hidden":`true`,children:[(0,H.jsx)(`path`,{d:`M12 19V5`}),(0,H.jsx)(`path`,{d:`M5.5 11.5L12 5l6.5 6.5`})]})})]})}),(0,H.jsx)(`canvas`,{className:`mo-orb`,ref:x,"aria-hidden":`true`}),(0,H.jsx)(`div`,{className:`mo-pulse`,ref:S,"aria-hidden":`true`}),(0,H.jsxs)(`div`,{className:`mo-answer`,ref:w,tabIndex:-1,role:`group`,"aria-label":l?e.errorTitle??`Analyse interrompue`:e.answerTitle??mc.answerTitle,children:[(0,H.jsxs)(`div`,{className:`mo-a-head`,children:[(0,H.jsx)(`i`,{className:`mo-a-dot`,"aria-hidden":`true`}),(0,H.jsx)(`span`,{children:l?e.errorTitle??`Analyse interrompue`:e.answerTitle??mc.answerTitle})]}),(0,H.jsx)(`p`,{className:`mo-a-body`,ref:T,children:ie.map((e,t)=>(0,H.jsxs)(_.Fragment,{children:[(0,H.jsx)(`span`,{className:`mo-w`,children:e}),` `]},t))}),l?(0,H.jsx)(`button`,{type:`button`,className:`mo-report`,onClick:()=>{O.current.onRetry?.(),M.current?.reset()},children:e.retryLabel??`Réessayer`}):(0,H.jsx)(`button`,{type:`button`,className:`mo-report`,onClick:()=>O.current.onOpenReport?.(),children:e.reportLabel??mc.report})]})]})]}),e.hint!==null&&(0,H.jsx)(`p`,{className:`mo-hint`,children:e.hint??mc.hint}),(0,H.jsxs)(`div`,{className:`mo-status`,ref:C,"aria-hidden":`true`,children:[a.prev!==null&&(0,H.jsx)(`span`,{className:`mo-lab mo-out`,children:ae(a.prev)},`p`+a.n),(0,H.jsx)(`span`,{className:`mo-lab mo-in`,children:ae(a.cur)},`c`+a.n),typeof e.progress==`number`&&t===`think`&&(0,H.jsxs)(`span`,{className:`mo-pct`,children:[(0,H.jsx)(`span`,{className:`mo-track`,children:(0,H.jsx)(`i`,{style:{width:`${Math.round(Ec(e.progress)*100)}%`}})}),(0,H.jsxs)(`b`,{children:[Math.round(Ec(e.progress)*100),` %`]})]})]}),e.children,(0,H.jsx)(`button`,{type:`button`,className:`mo-reset`,onClick:te,children:mc.reset}),(0,H.jsx)(`div`,{className:`mo-live`,ref:E,role:`status`,"aria-live":`polite`}),p&&(0,H.jsxs)(`div`,{className:`mo-debug`,children:[(0,H.jsx)(`span`,{className:`mo-chip`,children:t}),(0,H.jsxs)(`label`,{children:[(0,H.jsxs)(`span`,{children:[d.toFixed(2),`×`]}),(0,H.jsx)(`input`,{type:`range`,min:.25,max:2,step:.05,value:d,"aria-label":`Vitesse`,onChange:e=>f(parseFloat(e.target.value))})]}),(0,H.jsx)(`button`,{type:`button`,onClick:ne,children:`Rejouer`})]})]})}var pl={youtube:{label:`YouTube`,mark:`▶`,placeholder:`Collez le lien de la vidéo YouTube ici…`,example:`Exemple : youtube.com/watch?v=…`},instagram:{label:`Instagram`,mark:`◎`,placeholder:`Collez le lien de la publication Instagram ici…`,example:`Exemple : instagram.com/reel/…`},tiktok:{label:`TikTok`,mark:`♪`,placeholder:`Collez le lien de la vidéo TikTok ici…`,example:`Exemple : tiktok.com/@compte/video/…`}};function ml(e){let t=String(e||``).trim();return t.match(/[?&]v=([\w-]{6,})/)?.[1]||t.match(/youtu\.be\/([\w-]{6,})/)?.[1]||t.match(/\/shorts\/([\w-]{6,})/)?.[1]||null}function hl(e,t){let n=String(e||``).trim();if(!n)return null;let r=pl[t];if(!r)return null;if(t===`youtube`){let e=ml(n);return e?{url:n,source:r.label,title:`Vidéo YouTube · ${e}`,subtitle:`Commentaires et discussions publiques`,thumbnail:`https://i.ytimg.com/vi/${e}/hqdefault.jpg`}:null}return/^(https?:\/\/)?[\w-]+(\.[\w-]+)+\S*$/i.test(n)?{url:n,source:r.label,title:r.label===`Instagram`?`Publication Instagram`:`Vidéo TikTok`,subtitle:`Commentaires et discussions publiques`,thumbnail:null}:null}function gl(e){if(e==null)return null;let t=Number(e);return Number.isFinite(t)?t>=1e6?(t/1e6).toFixed(t%1e6==0?0:1)+`M`:t>=1e3?(t/1e3).toFixed(t%1e3==0?0:1)+`k`:String(t):null}function _l(e){if(!e||typeof e!=`string`)return null;let t=e.match(/^PT(?:(\d+)H)?(?:(\d+)M)?(?:(\d+)S)?$/);if(!t||!t[1]&&!t[2]&&!t[3])return null;let n=parseInt(t[1]||`0`,10),r=parseInt(t[2]||`0`,10),i=parseInt(t[3]||`0`,10),a=e=>String(e).padStart(2,`0`);return n>0?`${n}:${a(r)}:${a(i)}`:`${r}:${a(i)}`}var vl=[{id:`audience`,mode:`link`,titre:`Comprendre une audience`,detail:`Émotions et motivations derrière les commentaires d’une vidéo YouTube, Instagram ou TikTok.`,action:`Coller un lien`},{id:`cross`,mode:`cross`,titre:`Comparer plusieurs audiences`,detail:`Ce que 2 à 5 communautés partagent, et ce qui les sépare.`,action:`Ajouter des audiences`},{id:`freins`,mode:`link`,titre:`Identifier peurs et objections`,detail:`Ce qui freine l’adhésion, avec les verbatims qui le montrent.`,action:`Coller un lien`},{id:`avis`,mode:`manual`,titre:`Analyser des avis clients`,detail:`Collez au moins 3 avis, réponses ou messages, un par ligne.`,action:`Coller des commentaires`},{id:`enquete`,mode:`file`,titre:`Importer une enquête ou un export`,detail:`Tableur, JSON ou texte brut, jusqu’à 5 Mo.`,action:`Choisir un fichier`},{id:`personas`,mode:`link`,titre:`Construire des personas`,detail:`Des profils issus des groupes réellement observés, avec leur fiabilité.`,action:`Coller un lien`}],yl=e=>e<35?0:e<70?1:2,bl=[`Collecte`,`Analyse`,`Interprétation`],xl=`Votre audience a été lue. Ouvrez le rapport pour voir ses émotions, ses objections et ses personas.`;function Sl(e){let{tab:t,onTabChange:n,platform:r,onPlatformChange:i,url:a,onUrlChange:o,manualText:s,onManualTextChange:c,checking:l,onCheck:u,statusMsg:d,statusTone:f,previewCount:p,file:m,onFilePick:h,onColumnChange:g,uploading:v,onLaunch:y,crossMode:b,crossSources:x,onToggleCross:S,onAddCrossSource:C,onRemoveCrossSource:w,onMoveCrossSource:T,onClearCrossSources:E,onLaunchCross:D,recentAnalyses:O=[],onOpenAnalysis:k,onSuggest:A,onNavigateAgent:j,status:M,progress:N,step:P,isCross:F,errorMessage:I,onRetry:ee,onOpenReport:L,onCancel:R,resultSummary:z,sourceDetails:te}=e,[ne,re]=(0,_.useState)(!1),[ie,ae]=(0,_.useState)(`idle`),oe=pl[r],se=!!oe&&p>0,ce=s.trim().split(`
`).filter(Boolean).length,le=t===`link`?se:t===`manual`?ce>=3:!!(m&&m.count>=3),ue=(0,_.useMemo)(()=>t===`link`?hl(a,r):null,[t,a,r]),B=!!(ue&&x.some(e=>e.url===ue.url)),V=!!(b&&ue&&!B&&x.length<5),de=b&&x.length>=2,fe=t===`manual`?`Commentaires`:t===`file`?`Fichier`:oe?.label||`Google`,pe=t===`manual`?`≡`:t===`file`?`↥`:oe?.mark||`G`,me=b?V||de&&!a.trim():t===`link`?!!(oe&&a.trim()):le,he=b?V?`Ajouter cette audience`:`Comparer ${x.length} audiences`:t===`link`&&!se?`Vérifier le lien`:`Lancer l'analyse`,ge=(0,_.useRef)(null),_e=()=>{let e,t,n=new Promise((n,r)=>{e=n,t=r});ge.current={res:e,rej:t,promise:n}};(0,_.useEffect)(()=>{let e=ge.current;e&&(M===`done`&&(e.res(z||xl),ge.current=null),M===`error`&&(e.rej(Error(I||`Une erreur est survenue.`)),ge.current=null))},[M,I,z]);let ve=()=>{ge.current=null,window.dispatchEvent(new KeyboardEvent(`keydown`,{key:`Escape`}))};(0,_.useEffect)(()=>{if(M!==`loading`||!R)return;let e=e=>{e.key===`Escape`&&(ge.current=null,R())};return window.addEventListener(`keydown`,e),()=>window.removeEventListener(`keydown`,e)},[M,R]);let ye=()=>{if(re(!1),b){if(V&&ue)C(ue);else if(de&&!a.trim())return _e(),D(),`cross`;return null}return t===`link`?se?(_e(),y(),a):(oe&&a.trim()&&u(),null):le?(_e(),y(),t):null},be=e=>{re(!1),e===`manual`||e===`file`?n(e):(n(`link`),i(e))},xe=l||v,Se=yl(N),Ce=F?x:[],we=_l(te?.duration),Te=gl(te?.viewCount),Ee=p>0?gl(p):null,De=(0,H.jsxs)(H.Fragment,{children:[(0,H.jsxs)(`div`,{className:`gv2-psy2-picker`,children:[(0,H.jsxs)(`button`,{type:`button`,className:`gv2-psy2-chip`,onClick:()=>re(e=>!e),"aria-haspopup":`listbox`,"aria-expanded":ne,"aria-label":`Source d'analyse : ${fe}. Changer de source`,children:[(0,H.jsx)(`span`,{className:`gv2-psy2-mark`,"aria-hidden":`true`,children:pe}),(0,H.jsx)(`span`,{className:`gv2-psy2-chip-label`,children:fe}),(0,H.jsx)(sc,{className:ne?`is-open`:``,size:15})]}),ne&&(0,H.jsxs)(`div`,{className:`gv2-psy2-menu`,role:`listbox`,"aria-label":`Choisir une source`,children:[Object.entries(pl).map(([e,n])=>(0,H.jsxs)(`button`,{type:`button`,role:`option`,"aria-selected":t===`link`&&r===e,onClick:()=>be(e),children:[(0,H.jsx)(`span`,{className:`gv2-psy2-mark`,"aria-hidden":`true`,children:n.mark}),n.label,t===`link`&&r===e&&(0,H.jsx)(oc,{size:15})]},e)),(0,H.jsx)(`hr`,{}),(0,H.jsxs)(`button`,{type:`button`,role:`option`,"aria-selected":t===`manual`,onClick:()=>be(`manual`),children:[(0,H.jsx)(`span`,{className:`gv2-psy2-mark`,"aria-hidden":`true`,children:`≡`}),`Commentaires`,t===`manual`&&(0,H.jsx)(oc,{size:15})]}),(0,H.jsxs)(`button`,{type:`button`,role:`option`,"aria-selected":t===`file`,onClick:()=>be(`file`),children:[(0,H.jsx)(`span`,{className:`gv2-psy2-mark`,"aria-hidden":`true`,children:`↥`}),`Fichier`,t===`file`&&(0,H.jsx)(oc,{size:15})]})]})]}),(0,H.jsxs)(`button`,{type:`button`,className:`gv2-psy2-chip gv2-psy2-cross${b?` is-active`:``}`,onClick:S,"aria-pressed":b,"aria-label":`Cross Analyse — comparer plusieurs audiences`,children:[(0,H.jsx)(ic,{size:15}),(0,H.jsxs)(`span`,{className:`gv2-psy2-chip-label`,children:[`Cross`,x.length?` ${x.length}`:``]})]}),t===`link`&&(0,H.jsx)(`input`,{className:`gv2-psy2-field`,type:`url`,value:a,disabled:!oe,onChange:e=>o(e.target.value),"aria-label":`Lien à analyser`,placeholder:b?`Ajoutez une audience à comparer…`:oe?`Collez le lien d'une vidéo…`:`La collecte Google arrive prochainement…`}),t===`manual`&&(0,H.jsx)(`textarea`,{className:`gv2-psy2-field gv2-psy2-textarea`,value:s,rows:1,"aria-label":`Commentaires à analyser`,onChange:e=>c(e.target.value),placeholder:`Collez vos commentaires ici, un par ligne…`}),t===`file`&&(0,H.jsxs)(`label`,{className:`gv2-psy2-field gv2-psy2-file`,children:[(0,H.jsx)(`input`,{type:`file`,accept:`.csv,.xlsx,.xls,.json,.txt`,hidden:!0,onChange:e=>h(e.target.files?.[0]??null)}),(0,H.jsx)(uc,{size:16}),(0,H.jsx)(`span`,{children:v?`Lecture du fichier…`:m?m.name:`Ajoutez un fichier de commentaires`})]}),t===`link`&&b&&ue&&(0,H.jsxs)(`span`,{className:`gv2-psy2-recognized${B?` is-duplicate`:``}`,children:[B?(0,H.jsx)(pc,{size:14}):(0,H.jsx)(oc,{size:14}),B?`Déjà ajoutée`:`Lien reconnu`]}),(0,H.jsx)(`button`,{type:`submit`,className:`mo-send`,"data-ready":me?``:void 0,disabled:xe||!me,"aria-label":he,title:he,children:xe?(0,H.jsx)(fc,{size:18,className:`gv2-psy2-spin`}):b&&V?(0,H.jsx)(dc,{size:18}):(0,H.jsx)(ac,{size:18})})]}),Oe=(0,H.jsxs)(`span`,{className:`gv2-psy2-title`,children:[(0,H.jsx)(`span`,{style:{"--i":0},children:`Psychologie`}),` `,(0,H.jsx)(`span`,{style:{"--i":1},children:`avancée.`})]}),ke=(0,H.jsx)(H.Fragment,{children:(0,H.jsxs)(`p`,{children:[`Découvrez `,(0,H.jsx)(`em`,{children:`le marché caché`}),`, `,(0,H.jsx)(`em`,{children:`les peurs`}),` et `,(0,H.jsx)(`em`,{children:`les aspirations`}),` de votre audience.`]})});return(0,H.jsxs)(fl,{onSubmit:()=>ge.current?.promise??Promise.resolve(z||xl),minThinkMs:1200,progress:M===`loading`?N/100:null,stepLabel:M===`loading`?P||`Gabriel analyse votre audience…`:null,slot:De,onBarSubmit:ye,onPhaseChange:ae,greeting:Oe,sub:ke,hint:null,answerTitle:F?`Cross Analyse prête`:`Analyse prête`,reportLabel:`Ouvrir le rapport`,errorTitle:`Analyse interrompue`,retryLabel:`Réessayer`,onRetry:ee,onOpenReport:L,children:[(0,H.jsxs)(`div`,{className:`gv2-psy2-above`,"data-show":ie===`idle`?``:void 0,children:[b&&x.length>0&&(0,H.jsxs)(`div`,{className:`gv2-psy2-queue`,"aria-label":`Audiences à comparer`,children:[x.map((e,t)=>(0,H.jsxs)(`div`,{className:`gv2-psy2-qchip`,children:[(0,H.jsx)(`span`,{className:`gv2-psy2-qnum`,children:t+1}),(0,H.jsx)(`span`,{className:`gv2-psy2-qtitle`,title:e.title||e.label||e.url,children:e.title||e.label||e.url}),(0,H.jsx)(`button`,{type:`button`,onClick:()=>T(t,-1),disabled:t===0,"aria-label":`Déplacer l’audience ${t+1} vers la gauche`,children:(0,H.jsx)(cc,{size:14})}),(0,H.jsx)(`button`,{type:`button`,onClick:()=>T(t,1),disabled:t===x.length-1,"aria-label":`Déplacer l’audience ${t+1} vers la droite`,children:(0,H.jsx)(lc,{size:14})}),(0,H.jsx)(`button`,{type:`button`,onClick:()=>w(t),"aria-label":`Retirer l’audience ${t+1}`,children:(0,H.jsx)(pc,{size:14})})]},e.url)),(0,H.jsx)(`button`,{type:`button`,className:`gv2-psy2-link`,onClick:E,children:`Tout effacer`})]}),ue&&(0,H.jsxs)(`div`,{className:`gv2-psy2-preview`,"aria-live":`polite`,children:[ue.thumbnail?(0,H.jsx)(`img`,{src:ue.thumbnail,alt:`Vignette de ${ue.title}`}):(0,H.jsx)(`span`,{className:`gv2-psy2-preview-fallback`,children:ue.source}),(0,H.jsxs)(`div`,{className:`gv2-psy2-preview-text`,children:[(0,H.jsx)(`strong`,{children:ue.title}),(0,H.jsx)(`span`,{children:[ue.source,te?.channel,we,Te&&`${Te} vues`,Ee&&`${Ee} commentaires`].filter(Boolean).join(` · `)||ue.subtitle})]}),se&&!b&&(0,H.jsxs)(`span`,{className:`gv2-psy2-ok`,children:[(0,H.jsx)(oc,{size:14}),`Prêt`]})]}),b&&x.length>0&&(0,H.jsxs)(`div`,{className:`gv2-psy2-crossready`,role:`status`,children:[(0,H.jsx)(`span`,{children:x.length<2?`Ajoutez encore ${2-x.length} audience pour lancer la Cross Analyse.`:`Cross Analyse prête — ${x.length} audiences à croiser.`}),de&&(0,H.jsxs)(`button`,{type:`button`,className:`gv2-psy2-cta`,onClick:()=>{document.querySelector(`.mo-input`)?.requestSubmit()},children:[`Comparer `,x.length,` audiences `,(0,H.jsx)(`span`,{"aria-hidden":`true`,children:`→`})]})]}),!ue&&!(b&&x.length)&&A&&(0,H.jsx)(`div`,{className:`gv2-psy2-intents`,"aria-label":`Que voulez-vous comprendre ?`,children:vl.map(e=>(0,H.jsx)(`button`,{type:`button`,className:`gv2-psy2-intent`,title:e.detail,onClick:()=>A(e.mode),children:e.titre},e.id))}),t===`file`&&m?.columns&&m.columns.length>1&&(0,H.jsxs)(`label`,{className:`gv2-psy2-column`,children:[(0,H.jsx)(`span`,{children:`Colonne à analyser`}),(0,H.jsx)(`select`,{value:m.column||``,onChange:e=>g(e.target.value),children:m.columns.map(e=>(0,H.jsx)(`option`,{value:e,children:e},e))})]})]}),(0,H.jsxs)(`div`,{className:`gv2-psy2-below`,"data-show":ie===`idle`?``:void 0,role:`status`,children:[t===`manual`&&(0,H.jsxs)(`span`,{className:`gv2-psy2-count`,"data-ok":ce>=3?``:void 0,children:[ce,` / 3 min.`]}),t===`file`&&(0,H.jsx)(`span`,{className:`gv2-psy2-count`,children:m?m.warning||`${m.count} commentaire${m.count===1?``:`s`} lu${m.count===1?``:`s`}`:`CSV, Excel, JSON ou TXT · 5 Mo maximum`}),(0,H.jsx)(`span`,{className:f?`gv2-psy2-status is-${f}`:`gv2-psy2-status`,children:t===`link`?d||`Aucune pensée devinée. Chaque lecture part de signaux observables.`:d||`Prêt à analyser votre audience.`}),!b&&(0,H.jsx)(`button`,{type:`button`,className:`gv2-psy2-link`,onClick:S,children:`Comparer plusieurs audiences →`})]}),(0,H.jsxs)(`div`,{className:`gv2-psy2-thinking`,"data-show":ie===`think`&&M===`loading`?``:void 0,"aria-label":`Étapes de l’analyse`,children:[(0,H.jsx)(`ol`,{className:`gv2-psy2-stages`,children:bl.map((e,t)=>(0,H.jsx)(`li`,{className:t===Se?`is-active`:t<Se?`is-complete`:``,children:e},e))}),Ce.length>0&&(0,H.jsx)(`div`,{className:`gv2-psy2-lsources`,children:Ce.map((e,t)=>(0,H.jsxs)(`span`,{children:[(0,H.jsx)(`b`,{children:t+1}),e.title||e.label||e.url]},e.url))}),R&&(0,H.jsx)(`button`,{type:`button`,className:`gv2-psy2-link`,onClick:ve,children:`Annuler l’analyse`})]}),M===`error`&&ie===`idle`&&(0,H.jsxs)(`div`,{className:`gv2-psy2-fallback`,role:`alert`,children:[(0,H.jsx)(`strong`,{children:`Analyse interrompue`}),(0,H.jsx)(`p`,{children:I||`Une erreur est survenue.`}),(0,H.jsx)(`button`,{type:`button`,className:`gv2-psy2-cta`,onClick:ee,children:`Réessayer`})]}),M===`loading`&&ie===`idle`&&(0,H.jsxs)(`div`,{className:`gv2-psy2-fallback`,role:`status`,"aria-live":`polite`,children:[(0,H.jsx)(`strong`,{children:P||`Gabriel analyse votre audience…`}),(0,H.jsx)(`div`,{className:`gv2-psy2-fallback-bar`,"aria-hidden":`true`,children:(0,H.jsx)(`i`,{style:{width:`${Math.max(4,Math.min(100,N))}%`}})}),(0,H.jsxs)(`p`,{children:[Math.round(N),` %`]})]}),j&&(0,H.jsxs)(`nav`,{className:`gv2-psy2-after`,"data-show":ie===`answered`&&M===`done`?``:void 0,"aria-label":`Prolonger l’analyse`,children:[(0,H.jsxs)(`button`,{type:`button`,onClick:()=>j(`stratege`),children:[`Transformer en stratégie `,(0,H.jsx)(`span`,{children:`Ariane`})]}),(0,H.jsxs)(`button`,{type:`button`,onClick:()=>j(`createur`),children:[`Transformer en contenu `,(0,H.jsx)(`span`,{children:`Le Créateur`})]})]})]})}var Cl=`gabriel_pending_job`,wl=12e5,Tl=24e5,El=24e4,Dl=6e5,Ol=3e3,kl=8,Al={youtube:{label:`YouTube`,mark:`▶`,placeholder:`Collez le lien de la vidéo YouTube ici…`,example:`Exemple : youtube.com/watch?v=…`},instagram:{label:`Instagram`,mark:`◎`,placeholder:`Collez le lien de la publication Instagram ici…`,example:`Exemple : instagram.com/reel/…`},tiktok:{label:`TikTok`,mark:`♪`,placeholder:`Collez le lien de la vidéo TikTok ici…`,example:`Exemple : tiktok.com/@compte/video/…`}},jl=2,Ml=5;function Nl(e){return new Promise(t=>window.setTimeout(t,e))}function Pl(e){return Array.isArray(e)?e.map(Pl).filter(Boolean).join(` · `):String(e??``).replace(/\*+/g,``)}function X(e){return(Array.isArray(e)?e.map(e=>Gl(e)).join(` · `):e&&typeof e==`object`?Gl(e):String(e??``)).replace(/\s*\((?:cross|signal|psy):[\w:.-]+\)/g,``).split(/(\*\*[^*\n]+?\*\*|\*[^*\n]+?\*)/g).map((e,t)=>/^\*\*[^*]+\*\*$/.test(e)?(0,H.jsx)(`strong`,{children:e.slice(2,-2)},t):/^\*[^*]+\*$/.test(e)?(0,H.jsx)(`em`,{children:e.slice(1,-1)},t):e.replace(/\*+/g,``))}var Fl={strong:{cls:`is-strong`,label:`Solide`},moderate:{cls:`is-moderate`,label:`Modérée`},exploratory:{cls:`is-exploratory`,label:`Exploratoire`},insufficient:{cls:`is-insufficient`,label:`Insuffisante`}};function Il(e){return Fl[e]||{cls:`is-exploratory`,label:e||`—`}}var Ll=40;function Rl({value:e,count:t,label:n,tone:r,ratio:i}){let a=Math.max(0,Math.min(1,Number.isFinite(i)?i:(parseFloat(String(e))||0)/100)),o=Math.round(a*Ll);return(0,H.jsxs)(`div`,{className:`gv2-psy-stat-chip${r?` is-${r}`:``}`,children:[(0,H.jsx)(`div`,{className:`gv2-psy-stat-lbl`,children:n}),(0,H.jsx)(`div`,{className:`gv2-psy-stat-val${r?` is-${r}`:``}`,children:e}),t!=null&&(0,H.jsx)(`div`,{className:`gv2-psy-stat-count`,children:t}),(0,H.jsx)(`div`,{className:`gv2-psy-ticks`,"aria-hidden":`true`,children:Array.from({length:Ll},(e,t)=>(0,H.jsx)(`i`,{className:t<o?`is-on`:``,style:{"--n":t}},t))})]})}function zl({label:e,pct:t,count:n,tone:r}){return(0,H.jsxs)(`div`,{className:`gv2-psy-bar-row is-${r||`neu`}`,children:[(0,H.jsx)(`span`,{className:`gv2-psy-bar-label`,children:Pl(e)}),(0,H.jsx)(`div`,{className:`gv2-psy-bar-track`,children:(0,H.jsx)(`div`,{className:`gv2-psy-bar-fill`,style:{width:`${Math.min(100,Math.max(0,t))}%`}})}),(0,H.jsxs)(`span`,{className:`gv2-psy-bar-pct`,children:[t,`%`]}),n!=null&&(0,H.jsxs)(`span`,{className:`gv2-psy-bar-count`,children:[n,` cmnt`]})]})}function Bl({hommes:e,femmes:t}){let n=Math.max(0,Number(e)||0),r=Math.max(0,Number(t)||0),i=n+r;return i?(0,H.jsxs)(`div`,{className:`gv2-psy-gender-bar`,children:[(0,H.jsxs)(`div`,{className:`gv2-psy-gender-track`,children:[(0,H.jsx)(`div`,{style:{width:`${n/i*100}%`,background:`var(--psy-pos)`}}),(0,H.jsx)(`div`,{style:{width:`${r/i*100}%`,background:`var(--champagne)`}})]}),(0,H.jsxs)(`div`,{className:`gv2-psy-gender-legend`,children:[(0,H.jsxs)(`span`,{children:[(0,H.jsx)(`i`,{style:{background:`var(--psy-pos)`}}),n,`% hommes`]}),(0,H.jsxs)(`span`,{children:[(0,H.jsx)(`i`,{style:{background:`var(--champagne)`}}),r,`% femmes`]})]})]}):null}var Vl=[`var(--champagne)`,`var(--psychologist-sage)`,`var(--strategist-slate)`,`var(--creator-terracotta)`,`var(--champagne-deep)`,`var(--rose)`,`var(--core-champagne)`,`var(--muted)`];function Hl(e,t,n,r,i){let a=e=>e*Math.PI/180,o=r=>[e+n*Math.cos(a(r)),t+n*Math.sin(a(r))],[s,c]=o(r),[l,u]=o(i);return`M ${s.toFixed(2)} ${c.toFixed(2)} A ${n} ${n} 0 ${+(Math.abs(i-r)>180)} 1 ${l.toFixed(2)} ${u.toFixed(2)}`}function Ul({slices:e,size:t=128,title:n,subtitle:r,defaultMode:i=`gauge`}){let[a,o]=(0,_.useState)(i),s=(Array.isArray(e)?e:[]).filter(e=>e&&typeof e.value==`number`&&e.value>0),c=s.reduce((e,t)=>e+t.value,0);if(!c)return null;let l=s.reduce((e,t)=>t.value>e.value?t:e,s[0]),u=Math.round(l.value/c*100),d=a===`gauge`?98:100,f=a===`gauge`?180:360,p=a===`gauge`?180:-90,m=15/2/78*(180/Math.PI),h=s.length>1?3.2:0,g=p,v=s.map((e,t)=>{let n=e.value/c*f,r=g+(s.length>1?m+h/2:0),i=g+n-(s.length>1?m+h/2:0);g+=n;let a=(r+i)/2;return{s:e,i:t,d:i-r>.8?Hl(100,d,78,r,i):Hl(100,d,78,a-.4,a+.4)}}),y=s.map(e=>`${e.label} ${Math.round(e.value/c*100)} %`).join(`, `);return(0,H.jsxs)(`div`,{className:`gv2-psy-gauge`,children:[(n||s.length>1)&&(0,H.jsxs)(`div`,{className:`gv2-psy-gauge-head`,children:[(0,H.jsxs)(`div`,{children:[n&&(0,H.jsx)(`strong`,{children:n}),r&&(0,H.jsx)(`span`,{children:r})]}),(0,H.jsxs)(`div`,{className:`gv2-psy-gauge-toggle`,role:`group`,"aria-label":`Type d'affichage`,children:[(0,H.jsx)(`button`,{type:`button`,"aria-pressed":a===`ring`,onClick:()=>o(`ring`),children:`Anneau`}),(0,H.jsx)(`button`,{type:`button`,"aria-pressed":a===`gauge`,onClick:()=>o(`gauge`),children:`Jauge`})]})]}),(0,H.jsxs)(`div`,{className:`gv2-psy-gauge-stage is-${a}`,children:[(0,H.jsxs)(`svg`,{viewBox:a===`gauge`?`0 0 200 112`:`0 0 200 200`,role:`img`,"aria-label":y,children:[a===`gauge`?(0,H.jsx)(`path`,{d:Hl(100,d,78,180,360),className:`gv2-psy-gauge-track`,strokeWidth:15}):(0,H.jsx)(`circle`,{cx:100,cy:d,r:78,className:`gv2-psy-gauge-track`,strokeWidth:15}),v.map(({s:e,i:t,d:n})=>(0,H.jsx)(`path`,{d:n,pathLength:`1`,className:`gv2-psy-gauge-seg`,strokeWidth:15,stroke:Vl[t%Vl.length],style:{animationDelay:`${t*90}ms`}},t))]},a),(0,H.jsxs)(`div`,{className:`gv2-psy-gauge-center`,children:[(0,H.jsxs)(`span`,{children:[`Dominante · `,Pl(l.label)]}),(0,H.jsxs)(`b`,{children:[u,(0,H.jsx)(`small`,{children:`%`})]})]})]}),(0,H.jsx)(`ul`,{className:`gv2-psy-donut-legend gv2-psy-gauge-legend`,children:s.map((e,t)=>(0,H.jsxs)(`li`,{children:[(0,H.jsx)(`i`,{style:{background:Vl[t%Vl.length]}}),(0,H.jsx)(`span`,{children:Pl(e.label)}),(0,H.jsxs)(`span`,{className:`gv2-psy-donut-pct`,children:[Math.round(e.value),`%`]})]},t))})]})}function Wl({title:e,hint:t,children:n}){return(0,H.jsxs)(`div`,{className:`gv2-psy-section`,children:[(0,H.jsx)(`div`,{className:`gv2-psy-section-title`,children:e}),t&&(0,H.jsx)(`p`,{className:`gv2-psy-section-hint`,children:t}),n]})}function Gl(e){if(e==null)return``;if(typeof e==`string`||typeof e==`number`)return String(e);if(Array.isArray(e))return e.map(Gl).filter(Boolean).join(` · `);let t=e.token||e.bigram||e.emotion||e.label||e.nom||e.name||e.signal||e.phrase||e.texte||e.text;return t?String(t):Object.values(e).map(Gl).filter(Boolean).join(` — `)}function Kl({items:e,tone:t}){let n=(Array.isArray(e)?e:[]).filter(Boolean);return n.length?(0,H.jsx)(`ul`,{className:`gv2-psy-traits${t?` is-${t}`:``}`,children:n.map((e,t)=>(0,H.jsx)(`li`,{children:X(Gl(e))},t))}):null}function ql({label:e,items:t,tone:n}){let r=(Array.isArray(t)?t:[]).filter(Boolean);return r.length?(0,H.jsxs)(`div`,{className:`gv2-psy-trait-group`,children:[(0,H.jsx)(`div`,{className:`gv2-psy-trait-label`,children:e}),(0,H.jsx)(Kl,{items:r,tone:n})]}):null}function Jl(e){if(e==null)return[];if(typeof e==`string`||typeof e==`number`){let t=String(e).trim();return t?[{texte:t}]:[]}return Array.isArray(e)?e.flatMap(Jl):typeof e==`object`?Object.entries(e).flatMap(([e,t])=>{let n=e.replace(/_/g,` `).replace(/^./,e=>e.toUpperCase());return Jl(t).map((e,t)=>t===0?{libelle:n,texte:e.texte}:e)}):[]}function Yl({label:e,text:t}){let n=Jl(t);return n.length?(0,H.jsxs)(`div`,{className:`gv2-psy-statement`,children:[(0,H.jsx)(`div`,{className:`gv2-psy-statement-label`,children:e}),(0,H.jsx)(`div`,{className:`gv2-psy-statement-body`,children:n.map((e,t)=>e.libelle?(0,H.jsxs)(`div`,{className:`gv2-psy-statement-row`,children:[(0,H.jsx)(`span`,{className:`gv2-psy-statement-key`,children:e.libelle}),(0,H.jsx)(`p`,{children:X(e.texte)})]},t):(0,H.jsx)(`p`,{children:X(e.texte)},t))})]}):null}function Xl({valeur:e}){let t=Jl(e);if(!t.length)return null;let[n,...r]=t;return(0,H.jsxs)(`div`,{className:`gv2-psy-central`,children:[(0,H.jsx)(`div`,{className:`gv2-psy-statement-label`,children:`Message central`}),(0,H.jsx)(`blockquote`,{className:`gv2-psy-central-main`,children:X(n.texte)}),r.length>0&&(0,H.jsx)(`div`,{className:`gv2-psy-central-beats`,children:r.map((e,t)=>(0,H.jsxs)(`div`,{className:`gv2-psy-central-beat`,children:[e.libelle&&(0,H.jsx)(`span`,{className:`gv2-psy-statement-key`,children:e.libelle}),(0,H.jsx)(`p`,{children:X(e.texte)})]},t))})]})}function Zl(e,t,n){return[n.qui||n.synthese,n.insight||n.insight_cle,...Jl(e.verite_de_l_audience).map(e=>e.texte),...Jl(e.message_central).map(e=>e.texte),...Jl(e.promesse_authentique).map(e=>e.texte),...Jl(e.insight_strategique_cle).map(e=>e.texte),...Jl(t.espoir_decu).map(e=>e.texte),...Jl(t.aspiration_nourrie).map(e=>e.texte)].filter(Boolean).join(`

`)}function Ql({title:e,data:t}){let n=t||{},r=String(n.main_insight||``).trim(),i=Array.isArray(n.detected_mechanisms)?n.detected_mechanisms:[];return!r&&!i.length&&!(n.fears||[]).length&&!(n.desires||[]).length&&!(n.beliefs||[]).length&&!(n.decision_drivers||[]).length&&!(n.group_dynamics||[]).length&&!(n.cultural_codes||[]).length&&!(n.social_tensions||[]).length&&!(n.collective_beliefs||[]).length&&!(n.community_markers||[]).length?null:(0,H.jsxs)(`div`,{className:`gv2-psy-card gv2-psy-interp`,children:[(0,H.jsxs)(`div`,{className:`gv2-psy-interp-head`,children:[(0,H.jsx)(`span`,{className:`gv2-psy-interp-title`,children:e}),typeof n.confidence_score==`number`&&(0,H.jsxs)(`span`,{className:`gv2-psy-interp-conf`,children:[`confiance `,Math.round(n.confidence_score*100),`%`]})]}),r&&(0,H.jsx)(`p`,{className:`gv2-psy-interp-insight`,children:X(r)}),i.length>0&&(0,H.jsx)(`div`,{className:`gv2-psy-mechanisms`,children:i.filter(e=>e&&e.mechanism).map((e,t)=>(0,H.jsxs)(`div`,{className:`gv2-psy-mechanism`,children:[(0,H.jsxs)(`div`,{className:`gv2-psy-mechanism-head`,children:[(0,H.jsx)(`strong`,{children:Pl(e.mechanism)}),typeof e.confidence==`number`&&(0,H.jsxs)(`span`,{children:[Math.round(e.confidence*100),`%`]})]}),e.evidence&&(0,H.jsx)(`p`,{children:X(e.evidence)})]},t))}),(0,H.jsxs)(`div`,{className:`gv2-psy-trait-cols`,children:[(0,H.jsx)(ql,{label:`Peurs`,items:n.fears,tone:`neg`}),(0,H.jsx)(ql,{label:`Désirs`,items:n.desires,tone:`pos`}),(0,H.jsx)(ql,{label:`Frustrations`,items:n.frustrations,tone:`neg`}),(0,H.jsx)(ql,{label:`Croyances actives`,items:n.beliefs}),(0,H.jsx)(ql,{label:`Facteurs de décision`,items:n.decision_drivers,tone:`pos`}),(0,H.jsx)(ql,{label:`Dynamiques de groupe`,items:n.group_dynamics}),(0,H.jsx)(ql,{label:`Codes culturels`,items:n.cultural_codes}),(0,H.jsx)(ql,{label:`Tensions sociales`,items:n.social_tensions,tone:`neg`}),(0,H.jsx)(ql,{label:`Croyances collectives`,items:n.collective_beliefs}),(0,H.jsx)(ql,{label:`Marqueurs communautaires`,items:n.community_markers})]})]})}function $l({label:e,value:t,hint:n,tone:r}){return t==null||t===``?null:(0,H.jsxs)(`div`,{className:`gv2-psy-metric`,children:[(0,H.jsx)(`div`,{className:`gv2-psy-metric-lbl`,children:e}),(0,H.jsx)(`div`,{className:`gv2-psy-metric-val${r?` is-${r}`:``}`,children:t}),n&&(0,H.jsx)(`div`,{className:`gv2-psy-metric-hint`,children:Pl(n)})]})}function eu({title:e,items:t,tone:n}){let r=Array.isArray(t)?t.filter(Boolean):[];return r.length?(0,H.jsxs)(`div`,{className:`gv2-psy-signal-col is-${n}`,children:[(0,H.jsx)(`div`,{className:`gv2-psy-signal-col-title`,children:e}),r.map((e,t)=>(0,H.jsxs)(`div`,{className:`gv2-psy-signal-item`,children:[(0,H.jsxs)(`div`,{className:`gv2-psy-signal-head`,children:[(0,H.jsx)(`span`,{children:Pl(e.signal||e.label||``)}),(0,H.jsxs)(`span`,{className:`gv2-psy-signal-num`,children:[e.pct==null?``:`${e.pct}%`,` `,e.count==null?``:`· ${e.count} cmnt`]})]}),(e.examples||[]).slice(0,1).map((e,t)=>(0,H.jsx)(`p`,{children:Pl(e)},t))]},t))]}):null}var tu=[`favorable`,`positif`,`admiration`,`enthousiasme`,`joie`,`gratitude`,`confiance`,`espoir`,`soulagement`,`fierte`],nu=[`oppose`,`opposé`,`negatif`,`négatif`,`colere`,`colère`,`frustration`,`peur`,`deception`,`déception`,`mepris`,`mépris`,`tristesse`,`anxiete`,`anxiété`,`doute`];function ru(e){let t=String(e||``).toLowerCase().trim();return tu.some(e=>t.includes(e))?`pos`:nu.some(e=>t.includes(e))?`neg`:`neu`}var iu={favorable:`Favorable`,oppose:`Opposé`,opposé:`Opposé`,neutre:`Neutre`,nuance:`Nuancé`,hors_sujet:`Hors sujet`,ironique:`Ironique`,positive:`Positif`,neutral:`Neutre`,negative:`Négatif`,colere:`Colère`,mefiance:`Méfiance`,curiosite:`Curiosité`,fierte:`Fierté`,deception:`Déception`,anxiete:`Anxiété`,mepris:`Mépris`,gratitude:`Gratitude`,alignement:`Alignement`,authenticite:`Authenticité`,engagement:`Engagement`,opportunite:`Opportunité`,persistance:`Persistance`,polarisation:`Polarisation`,preuve_demandee:`Preuve demandée`,preuve_demandée:`Preuve demandée`,desir:`Désir`,besoin:`Besoin`};function au(e){let t=String(e??``).trim(),n=iu[t.toLowerCase()];if(n)return n;let r=t.replace(/_/g,` `);return r.charAt(0).toUpperCase()+r.slice(1)}function ou(e){let t=Pl(e).trim().replace(/^[«"“\s]+|[»"”\s]+$/g,``);return t?`« ${t} »`:``}function su(e){return String(Array.isArray(e)?e[0]??``:e&&typeof e==`object`?e.mot||e.token||e.bigram||``:e??``)}function cu({getText:e,label:t=`Copier`,className:n=`gv2-psy-ghost-btn`}){let[r,i]=(0,_.useState)(``);async function a(){try{await navigator.clipboard.writeText(e()),i(`ok`)}catch{i(`echec`)}window.setTimeout(()=>i(``),2400)}return(0,H.jsx)(`button`,{type:`button`,className:n,onClick:a,"aria-live":`polite`,children:r===`ok`?`Copié ✓`:r===`echec`?`Copie impossible`:t})}function lu({nom:e,valeur:t}){let n=t&&typeof t==`object`?t:{score:t};if(typeof n.score!=`number`)return null;let r=n.variables&&typeof n.variables==`object`?Object.entries(n.variables).map(([e,t])=>`${e} = ${t}`).join(` · `):``;return(0,H.jsxs)(`div`,{className:`gv2-psy-kpi`,children:[(0,H.jsxs)(`div`,{className:`gv2-psy-kpi-top`,children:[(0,H.jsx)(`div`,{className:`gv2-psy-kpi-score`,children:Math.round(n.score)}),n.label&&(0,H.jsx)(`span`,{className:`gv2-psy-kpi-verdict`,children:Pl(String(n.label))})]}),(0,H.jsx)(`div`,{className:`gv2-psy-kpi-name`,children:au(e)}),(n.description||n.lecture)&&(0,H.jsx)(`p`,{children:Pl(String(n.description||n.lecture))}),(n.formule||n.interpretation)&&(0,H.jsxs)(`details`,{className:`gv2-psy-kpi-method`,children:[(0,H.jsx)(`summary`,{children:`Méthode de calcul`}),n.interpretation&&(0,H.jsx)(`p`,{children:Pl(String(n.interpretation))}),n.formule&&(0,H.jsx)(`code`,{children:String(n.formule)}),r&&(0,H.jsx)(`small`,{children:Pl(r)})]})]})}function uu({label:e,hint:t,onClick:n,primary:r}){return(0,H.jsxs)(`div`,{className:`gv2-psy-next`,children:[t&&(0,H.jsx)(`span`,{className:`gv2-psy-next-hint`,children:t}),(0,H.jsx)(`button`,{type:`button`,className:r?`gv2-psy-primary-btn`:`gv2-psy-ghost-btn`,onClick:n,children:e})]})}function du({nom:e,emotion:t,large:n}){let r=String(e||``).trim(),i=r.split(/\s+/).slice(0,2).map(e=>e[0]||``).join(``).toUpperCase()||`?`,a=0;for(let e=0;e<r.length;e+=1)a=(a*31+r.charCodeAt(e))%360;return(0,H.jsx)(`div`,{className:`gv2-psy-avatar is-${ru(t)}${n?` is-large`:``}`,"aria-hidden":`true`,style:{"--avatar-teinte":a},children:(0,H.jsx)(`span`,{children:i})})}function fu(e,t,n){let r=5381,i=`${e||``}${t}`;for(let e=0;e<i.length;e+=1)r=(r<<5)+r^i.charCodeAt(e);let a=Math.abs(r)%70;return`https://randomuser.me/api/portraits/${/femme|woman|^f$/i.test(String(n||``).trim())?`women`:`men`}/${a}.jpg`}function pu({nom:e,index:t,genre:n,emotion:r}){let[i,a]=(0,_.useState)(!1);return i?(0,H.jsx)(du,{nom:e,emotion:r,large:!0}):(0,H.jsx)(`img`,{className:`gv2-psy-portrait is-${ru(r)}`,alt:``,src:fu(e,t,n),onError:()=>a(!0)})}function mu({label:e,value:t}){return t?(0,H.jsxs)(`div`,{className:`gv2-psy-stat`,children:[(0,H.jsx)(`div`,{className:`gv2-psy-stat-lbl`,children:e}),(0,H.jsx)(`div`,{className:`gv2-psy-stat-val`,children:X(t)})]}):null}function hu({titre:e,items:t}){let n=Array.isArray(t)?t.filter(Boolean):[];return n.length===0?null:(0,H.jsxs)(`div`,{className:`gv2-psy-pc-block`,children:[(0,H.jsx)(`div`,{className:`gv2-psy-pc-ttl`,children:e}),n.map((e,t)=>(0,H.jsx)(`div`,{className:`gv2-psy-pc-li`,children:X(Gl(e))},t))]})}function gu(e,t){let n=(Array.isArray(t)?t:[]).map(Gl).filter(Boolean);return n.length?[`${e} :`,...n.map(e=>`- ${e}`)]:[]}function _u(e,t){let n=(e,t)=>t?[`${e} : ${Gl(t)}`]:[];return[`PERSONA — ${t}`,[e.age?`${e.age} ans`:``,e.genre,e.metier].filter(Boolean).join(` · `),...n(`Poids dans l'audience`,e.poids),...n(`Émotion dominante`,e.emotion_dominante_mesuree),...n(`Archétype`,e.archetype_jungien),...n(`Vision du monde`,e.vision_monde),...n(`Situation de vie`,e.situation_vie),...n(`État d'esprit`,e.etat_esprit),...n(`Ce qu'il écrirait`,e.langage_typique),...gu(`Frustrations`,e.frustrations),...gu(`Aspirations`,e.aspirations),...gu(`Peurs`,e.peurs),...gu(`Désirs cachés`,e.desirs),...gu(`Déclencheurs émotionnels`,e.declencheurs_emotionnels),...gu(`Messages qui le toucheraient`,e.messages_impactants),...gu(`Objections à lever`,e.objections_a_lever),...n(`Objection principale`,e.objection_principale),...n(`Preuve attendue`,e.preuve_attendue),...n(`Ce qui le ferait acheter`,e.ce_qui_le_ferait_acheter||e.ce_qui_la_ferait_acheter),...n(`Ce qui le ferait fuir`,e.ce_qui_le_ferait_fuir||e.ce_qui_la_ferait_fuir),...n(`Message à lui adresser`,e.message_a_lui_dire)].filter(Boolean).join(`
`)}function vu(e){let t=e.brief||{},n=e.recommandations||{},r=e.emotions||{},i=(e,t)=>t?[`${e} : ${Gl(t)}`]:[];return[`GABRIEL — SYNTHÈSE DU PSYCHOLOGUE`,...i(`Qui`,t.qui||t.synthese),...i(`Insight clé`,t.insight||t.insight_cle),...i(`Action prioritaire`,t.action||t.action_prioritaire),...i(`Vérité de l'audience`,n.verite_de_l_audience),...i(`Message central`,n.message_central),...i(`Promesse authentique`,n.promesse_authentique),...i(`Émotion dominante`,r.dominante),...i(`Espoir déçu`,r.espoir_decu),...i(`Aspiration nourrie`,r.aspiration_nourrie),...gu(`Actions prioritaires`,n.actions_prioritaires),...gu(`Prochaines étapes`,n.prochaines_etapes)].join(`
`)}function yu({persona:e,index:t}){let n=e.nom||`Persona ${t+1}`,r=Array.isArray(e.signaux_mesures)?e.signaux_mesures:[],i=typeof e.confiance==`number`?Math.round(e.confiance*100):null,a=e.ce_qui_le_ferait_acheter||e.ce_qui_la_ferait_acheter,o=e.ce_qui_le_ferait_fuir||e.ce_qui_la_ferait_fuir,s=Pl([e.age?`${e.age} ans`:``,e.genre,e.metier].filter(Boolean).join(` · `));return(0,H.jsxs)(`article`,{className:`gv2-psy-pc`,children:[(0,H.jsxs)(`div`,{className:`gv2-psy-pc-left`,children:[(0,H.jsx)(pu,{nom:n,index:t,genre:e.genre,emotion:e.emotion_dominante_mesuree}),(0,H.jsx)(`div`,{className:`gv2-psy-pc-name`,children:Pl(n)}),s&&(0,H.jsx)(`div`,{className:`gv2-psy-pc-meta`,children:s}),r.length>0&&(0,H.jsx)(`div`,{className:`gv2-psy-pc-sigs`,children:r.map((e,t)=>(0,H.jsx)(`span`,{children:Pl(Gl(e))},t))}),e.histoire_interieure&&(0,H.jsx)(`blockquote`,{className:`gv2-psy-pc-quote`,children:X(String(e.histoire_interieure))})]}),(0,H.jsxs)(`div`,{className:`gv2-psy-pc-center`,children:[e.archetype_jungien&&(0,H.jsx)(`div`,{className:`gv2-psy-pc-arch`,children:Pl(String(e.archetype_jungien))}),(0,H.jsxs)(`div`,{className:`gv2-psy-pc-chips`,children:[e.emotion_dominante_mesuree&&(0,H.jsx)(`span`,{className:`is-${ru(e.emotion_dominante_mesuree)}`,children:Pl(e.emotion_dominante_mesuree)}),e.poids&&(0,H.jsx)(`span`,{children:Pl(String(e.poids))})]}),e.vision_monde&&(0,H.jsx)(`p`,{className:`gv2-psy-pc-vision`,children:ou(e.vision_monde)}),e.etat_esprit&&(0,H.jsx)(Yl,{label:`État d'esprit`,text:e.etat_esprit}),e.situation_vie&&(0,H.jsx)(Yl,{label:`Situation de vie`,text:e.situation_vie}),e.langage_typique&&(0,H.jsxs)(`div`,{className:`gv2-psy-pc-lang`,children:[(0,H.jsx)(`div`,{className:`gv2-psy-pc-ttl`,children:`Ce qu'il écrirait en commentaire`}),(0,H.jsx)(`p`,{children:ou(e.langage_typique)})]}),(0,H.jsxs)(`div`,{className:`gv2-psy-pc-2col`,children:[(0,H.jsx)(hu,{titre:`Frustrations`,items:e.frustrations}),(0,H.jsx)(hu,{titre:`Aspirations`,items:e.aspirations}),(0,H.jsx)(hu,{titre:`Pain points`,items:e.peurs}),(0,H.jsx)(hu,{titre:`Désirs cachés`,items:e.desirs}),(0,H.jsx)(hu,{titre:`Déclencheurs émotionnels`,items:e.declencheurs_emotionnels}),(0,H.jsx)(hu,{titre:`Habitudes digitales`,items:e.habitudes_digitales}),(0,H.jsx)(hu,{titre:`Messages qui le toucheraient`,items:e.messages_impactants}),(0,H.jsx)(hu,{titre:`Objections à lever`,items:e.objections_a_lever})]}),e.rapport_autorite&&(0,H.jsx)(Yl,{label:`Rapport à l'autorité`,text:e.rapport_autorite}),e.message_a_lui_dire&&(0,H.jsxs)(`div`,{className:`gv2-psy-pc-msg`,children:[(0,H.jsx)(`div`,{className:`gv2-psy-pc-msg-lbl`,children:`Message à lui adresser`}),(0,H.jsx)(`p`,{children:ou(e.message_a_lui_dire)})]}),(0,H.jsx)(`div`,{className:`gv2-psy-pc-actions`,children:(0,H.jsx)(cu,{label:`Copier la fiche`,getText:()=>_u(e,n)})})]}),(0,H.jsxs)(`div`,{className:`gv2-psy-pc-right`,children:[i!==null&&(0,H.jsxs)(`div`,{className:`gv2-psy-stat is-wide`,children:[(0,H.jsx)(`div`,{className:`gv2-psy-stat-lbl`,children:`Fiabilité du persona`}),(0,H.jsxs)(`div`,{className:`gv2-psy-pc-conf`,children:[i,`%`]}),(0,H.jsx)(`div`,{className:`gv2-psy-conf-track`,children:(0,H.jsx)(`div`,{className:`gv2-psy-conf-fill`,style:{width:`${i}%`}})})]}),(0,H.jsx)(mu,{label:`Cluster source`,value:e.cluster_source}),(0,H.jsx)(mu,{label:`Ancrage dans les données`,value:e.cluster_grounding_reason}),(0,H.jsx)(mu,{label:`Tension existentielle`,value:e.tension_existentielle}),(0,H.jsx)(mu,{label:`Quête · Frankl`,value:e.quete_de_sens}),(0,H.jsx)(mu,{label:`Biais · Kahneman`,value:e.biais_cognitifs}),(0,H.jsx)(mu,{label:`Ombre · Jung`,value:e.ombre_jungienne}),(0,H.jsx)(mu,{label:`Objection principale`,value:e.objection_principale}),(0,H.jsx)(mu,{label:`Preuve attendue`,value:e.preuve_attendue}),(0,H.jsx)(mu,{label:`Déclencheur d'achat`,value:a}),(0,H.jsx)(mu,{label:`Mission cachée · Munroe`,value:e.mission_cachee}),(0,H.jsx)(mu,{label:`Potentiel bloqué · Munroe`,value:e.potentiel_non_exprime}),(0,H.jsx)(mu,{label:`Tribu aspirée`,value:e.besoin_d_appartenance}),(0,H.jsx)(mu,{label:`Désir de legacy`,value:e.desir_de_legacy}),(0,H.jsx)(mu,{label:`Rapport à l'argent`,value:e.rapport_argent}),(0,H.jsx)(mu,{label:`Repoussoir principal`,value:o})]})]})}function bu({groupe:e}){let t=Array.isArray(e.mots_cles)?e.mots_cles:Array.isArray(e.top_tokens)?e.top_tokens:[],n=Array.isArray(e.exemples)?e.exemples:Array.isArray(e.samples)?e.samples:[],r=e.taille??e.size,i=e.stance_dominante||e.stance,a=e.emotion_dominante||e.emotion;return(0,H.jsxs)(`div`,{className:`gv2-psy-group is-${ru(i)}`,children:[(0,H.jsxs)(`div`,{className:`gv2-psy-group-head`,children:[(0,H.jsx)(`span`,{className:`gv2-psy-group-pct`,children:e.pct==null?``:`${e.pct}%`}),(0,H.jsx)(`span`,{className:`gv2-psy-group-count`,children:r==null?``:`${r} commentaires`}),(0,H.jsxs)(`div`,{className:`gv2-psy-group-tags`,children:[e.likes_pct>0&&(0,H.jsxs)(`span`,{children:[`♥ `,e.likes_pct,`%`]}),i&&(0,H.jsx)(`span`,{className:`is-stance`,children:au(i)}),a&&(0,H.jsx)(`span`,{children:au(a)})]})]}),t.length>0&&(0,H.jsx)(`div`,{className:`gv2-psy-group-tokens`,children:t.map((e,t)=>(0,H.jsx)(`span`,{children:Pl(String(e))},t))}),n.slice(0,2).map((e,t)=>(0,H.jsx)(`blockquote`,{children:Pl(String(e))},t))]})}function xu({title:e,data:t}){let n=t||{},r=String(n.conclusion||``).trim();if(!r)return null;let i=Array.isArray(n.signaux)?n.signaux.filter(Boolean):[],a=typeof n.score_confiance==`number`?n.score_confiance:null;return(0,H.jsxs)(`div`,{className:`gv2-psy-card gv2-psy-insight`,children:[(0,H.jsx)(`div`,{className:`gv2-psy-insight-title`,children:e}),(0,H.jsx)(`p`,{className:`gv2-psy-insight-conclusion`,children:X(r)}),n.indicateur_statistique&&(0,H.jsxs)(`div`,{className:`gv2-psy-insight-row`,children:[(0,H.jsx)(`span`,{className:`gv2-psy-insight-key`,children:`Données`}),(0,H.jsx)(`span`,{children:Pl(String(n.indicateur_statistique))})]}),i.length>0&&(0,H.jsxs)(`div`,{className:`gv2-psy-insight-row`,children:[(0,H.jsx)(`span`,{className:`gv2-psy-insight-key`,children:`Signaux`}),(0,H.jsx)(`span`,{className:`gv2-psy-insight-tokens`,children:i.map((e,t)=>(0,H.jsx)(`span`,{children:Pl(String(e))},t))})]}),n.interpretation&&(0,H.jsxs)(`div`,{className:`gv2-psy-insight-row`,children:[(0,H.jsx)(`span`,{className:`gv2-psy-insight-key`,children:`Sens`}),(0,H.jsx)(`span`,{children:X(String(n.interpretation))})]}),a!=null&&(0,H.jsxs)(`div`,{className:`gv2-psy-conf`,children:[(0,H.jsx)(`span`,{children:`Confiance`}),(0,H.jsx)(`div`,{className:`gv2-psy-conf-track`,children:(0,H.jsx)(`div`,{className:`gv2-psy-conf-fill`,style:{width:`${Math.round(a*100)}%`}})}),(0,H.jsx)(`span`,{className:`gv2-psy-conf-val`,children:a.toFixed(2)})]})]})}function Su({label:e,data:t}){let n=t||{};return!n.observation&&!n.interpretation&&!n.implication?null:(0,H.jsxs)(`div`,{className:`gv2-psy-card gv2-psy-grid-entry`,children:[(0,H.jsx)(`div`,{className:`gv2-psy-grid-title`,children:e}),n.observation&&(0,H.jsxs)(`div`,{className:`gv2-psy-grid-row`,children:[(0,H.jsx)(`span`,{className:`gv2-psy-grid-key`,children:`Obs.`}),(0,H.jsx)(`span`,{children:X(String(n.observation))})]}),n.interpretation&&(0,H.jsxs)(`div`,{className:`gv2-psy-grid-row`,children:[(0,H.jsx)(`span`,{className:`gv2-psy-grid-key`,children:`Sens`}),(0,H.jsx)(`span`,{children:X(String(n.interpretation))})]}),n.implication&&(0,H.jsxs)(`div`,{className:`gv2-psy-grid-row`,children:[(0,H.jsx)(`span`,{className:`gv2-psy-grid-key`,children:`Action`}),(0,H.jsx)(`span`,{children:X(String(n.implication))})]})]})}function Cu({title:e,fields:t,data:n}){let r=n||{};return t.some(([e])=>r[e])?(0,H.jsxs)(`div`,{className:`gv2-psy-card gv2-psy-grid-entry`,children:[(0,H.jsx)(`div`,{className:`gv2-psy-grid-title`,children:e}),t.map(([e,t])=>(0,H.jsx)(Yl,{label:t,text:r[e]},e))]}):null}var wu=[[`lecture_sujet`,`Lecture du sujet`],[`ce_qui_rassemble`,`Ce qui rassemble`],[`ce_qui_divise`,`Ce qui divise`],[`tension_centrale`,`Tension centrale`],[`synthese_psychologique`,`Synthèse psychologique`]],Tu=[[`ce_qu_ils_ressentent`,`Ce qu'ils ressentent`],[`ce_qu_ils_veulent`,`Ce qu'ils veulent`],[`ce_qu_ils_refusent`,`Ce qu'ils refusent`],[`ce_qui_les_bloque`,`Ce qui les bloque`],[`ce_qui_les_rassure`,`Ce qui les rassure`],[`ce_qui_les_divise`,`Ce qui les divise`],[`ce_qui_les_unit`,`Ce qui les unit`],[`ce_qu_ils_valorisent`,`Ce qu'ils valorisent`],[`ce_qu_ils_attendent_comme_preuve`,`Preuve attendue`],[`quelle_opportunite_emerge`,`Opportunité émergente`]],Eu=[[`etat_actuel`,`État actuel`,[[`situation`,`Situation`],[`frustration_principale`,`Frustration principale`],[`croyance_bloquante`,`Croyance bloquante`],[`identite_actuelle`,`Identité actuelle`],[`conscience_du_probleme`,`Conscience du problème`]]],[`le_pont`,`Le pont`,[[`ce_dont_ils_ont_besoin`,`Ce dont ils ont besoin`],[`obstacle_principal`,`Obstacle principal`],[`declencheur_de_transition`,`Déclencheur de transition`],[`message_de_passage`,`Message de passage`]]],[`etat_desire`,`État désiré`,[[`transformation_visee`,`Transformation visée`],[`identite_aspiree`,`Identité aspirée`],[`vie_revelee`,`Vie révélée`],[`indicateur_de_succes`,`Indicateur de succès`]]]];function Du({active:e,onChange:t,tabs:n}){return(0,H.jsx)(`div`,{className:`gv2-psy-result-tabs`,role:`tablist`,children:n.map(n=>(0,H.jsx)(`button`,{type:`button`,role:`tab`,"aria-selected":e===n.id,className:e===n.id?`is-active`:``,onClick:()=>t(n.id),children:n.label},n.id))})}var Ou=[[`potentiel_bloque`,`Potentiel bloqué`],[`signal_de_purpose`,`Signal de purpose`],[`quete_de_signifiance`,`Quête de signifiance`],[`besoin_d_appartenance`,`Besoin d'appartenance`],[`desir_de_legacy`,`Désir de legacy`],[`besoin_de_transformation`,`Besoin de transformation`]],ku=[[`rapport_argent`,`Rapport à l'argent`],[`rapport_succes`,`Rapport au succès`],[`rapport_autorite`,`Rapport à l'autorité`],[`rapport_image`,`Rapport à l'image`],[`rapport_travail`,`Rapport au travail`],[`rapport_famille`,`Rapport à la famille`],[`rapport_spiritualite`,`Rapport à la spiritualité`]],Au=[[`repartition_camps`,`Répartition des camps`],[`positionnement_audience`,`Positionnement de l'audience`],[`carte_emotionnelle`,`Carte émotionnelle`],[`clusters_comportementaux`,`Clusters comportementaux`],[`signaux_lexicaux_dominants`,`Signaux lexicaux dominants`],[`distribution_relevance`,`Pertinence des commentaires`]];function ju({data:e,onReset:t,onGoToStratege:n,onGoToCreateur:r,partial:i=!1}){let[a,o]=(0,_.useState)(``),s=e.dashboard||{},c=e.meta||{},l=e.brief||{},u=e.emotions||{},d=e.psychologie||{},f=e.aspirations||{},p=e.marketing||{},m=e.interpretation||{},h=e.kpis||{},g=e.livrables_statistiques||{},v=e.grille_psychologique||{},y=e.recommandations||{},b=e.demographique||{},x=e.culturel||{},S=e.identitaire||{},C=e.transformation||{},w=e.marches_caches||{},T=s.signaux_frequents||{},E=Array.isArray(s.groupes)?s.groupes:[],D=Array.isArray(s.sujets_recurrents)?s.sujets_recurrents:[],O=s.lexique||{},k=Array.isArray(s.lexical_fields)?s.lexical_fields:[],A=s.polarisation_detail||{},j=s.fiabilite||{},M=s.weighted_sentiment||{},N=s.weighted_polarization||{},P=s.resonance_by_stance||{},F=Object.values(P).reduce((e,t)=>e+(t&&t.likes||0),0),I=s.argument_density||{},ee=s.mockery_signals||{},L=s.irony_signals||{},R=s.resume_tendances||{},z=R.tension_principale||s.tension_principale,te=R.tendance_dominante||s.tendance_dominante,ne=R.signal_dominant||s.signal_dominant,re=Array.isArray(e.top_comments)?e.top_comments:Array.isArray(s.top_comments)?s.top_comments:[],ie=Object.fromEntries(Object.entries(s.positions||{}).filter(([,e])=>e&&(e.count>0||e.pct>0))),ae=Array.isArray(s.emotion_distribution)?s.emotion_distribution:Object.entries(s.emotion_distribution||{}).map(([e,t])=>({emotion:e,pourcentage:t})),oe=s.sentiment_distribution||{},se=Array.isArray(e.personas)?e.personas:[],ce=l.qui||l.synthese||``,le=l.insight||l.insight_cle||``,ue=l.action||l.action_prioritaire||``,B=(Array.isArray(u.commentaires_revelateurs)?u.commentaires_revelateurs:[]).filter(Boolean),V=(Array.isArray(y.actions_prioritaires)?y.actions_prioritaires:[]).filter(Boolean),de=(Array.isArray(y.prochaines_etapes)?y.prochaines_etapes:[]).filter(Boolean),fe=Au.filter(([e])=>(g[e]||{}).conclusion),pe=!!(m.psychologique||m.socio_culturelle||Object.keys(d).length||Object.keys(f).length||Object.keys(C).length||Object.keys(x).length||Tu.some(([e])=>v[e])||wu.some(([e])=>(g[e]||{}).conclusion)),me=!!(y.verite_de_l_audience||y.message_central||y.promesse_authentique||y.insight_strategique_cle||y.ce_qu_ils_ne_disent_pas_mais_veulent_entendre||u.dominante||u.espoir_decu||u.aspiration_nourrie||V.length||de.length),he=!!(Object.keys(y).length||Object.keys(p).length||Object.keys(w).length||Object.keys(S).length),ge=[...me?[{id:`synthese`,label:`Synthèse`}]:[],{id:`dashboard`,label:`Tableau de bord`},...pe?[{id:`psychologie`,label:`Psychologie`}]:[],...he?[{id:`strategie`,label:`Stratégie`}]:[],...se.length?[{id:`personas`,label:`Personas (${se.length})`}]:[]],_e=ge.some(e=>e.id===a)?a:ge[0].id,ve=ge[ge.findIndex(e=>e.id===_e)+1];function ye(e){o(e);try{document.querySelector(`.gv2-psy-result-tabs`)?.scrollIntoView({behavior:`smooth`,block:`start`})}catch{}}let be=[e.source_label,c.total_commentaires==null?``:`${c.total_commentaires} commentaires collectés`,c.commentaires_analyses==null?``:`${c.commentaires_analyses} analysés`,j.label_confiance?`fiabilité : ${String(j.label_confiance).toLowerCase()}`:``].filter(Boolean).join(` · `),xe=ve?(0,H.jsx)(uu,{label:`Suite : ${ve.label} →`,hint:`Continuer la lecture`,onClick:()=>ye(ve.id)}):(0,H.jsxs)(`div`,{className:`gv2-psy-next is-final`,children:[(0,H.jsx)(`span`,{className:`gv2-psy-next-hint`,children:`Lecture terminée — passez à l'action.`}),(0,H.jsxs)(`div`,{className:`gv2-psy-next-actions`,children:[r&&(0,H.jsx)(`button`,{type:`button`,className:`gv2-psy-ghost-btn`,onClick:()=>r(e),children:`Passer au Créateur →`}),e.analysis_id&&(0,H.jsx)(`button`,{type:`button`,className:`gv2-psy-primary-btn`,onClick:()=>n(e),children:`Construire la stratégie →`})]})]});return(0,H.jsxs)(`section`,{className:`gv2-psy-result`,children:[(0,H.jsxs)(`div`,{className:`gv2-psy-result-head`,children:[(0,H.jsxs)(`div`,{children:[(0,H.jsx)(`span`,{className:`gv2-psy-eyebrow`,children:`Le Psychologue`}),(0,H.jsx)(`h1`,{children:`Résultats`}),be&&(0,H.jsx)(`p`,{className:`gv2-psy-source`,children:Pl(be)}),e.video_context&&(0,H.jsx)(`p`,{className:`gv2-psy-source is-context`,children:Pl(String(e.video_context))})]}),(0,H.jsxs)(`div`,{className:`gv2-psy-result-actions`,children:[(0,H.jsx)(`button`,{type:`button`,className:`gv2-psy-ghost-btn`,onClick:t,children:`← Nouvelle analyse`}),(0,H.jsx)(cu,{label:`Copier la synthèse`,getText:()=>vu(e)}),e.analysis_id&&(0,H.jsx)(`a`,{className:`gv2-psy-ghost-btn`,href:`/export/pdf/${encodeURIComponent(e.analysis_id)}`,download:!0,children:`Exporter en PDF`}),e.analysis_id&&!i&&(0,H.jsx)(`button`,{type:`button`,className:`gv2-psy-primary-btn`,onClick:()=>n(e),children:`Construire la stratégie →`})]})]}),i&&(0,H.jsxs)(`div`,{className:`gv2-psy-partial`,role:`status`,"aria-live":`polite`,children:[(0,H.jsx)(`span`,{className:`gv2-psy-partial-dot`,"aria-hidden":`true`}),(0,H.jsxs)(`div`,{children:[(0,H.jsx)(`strong`,{children:`Les premiers chiffres sont prêts.`}),(0,H.jsx)(`span`,{children:` L'interprétation psychologique, les personas et la stratégie arrivent petit à petit — cette page se complète toute seule.`})]})]}),ce&&(0,H.jsxs)(`div`,{className:`gv2-psy-hero`,children:[(0,H.jsx)(`div`,{className:`gv2-psy-hero-label`,children:`Ce que dit cette audience`}),(0,H.jsx)(`p`,{className:`gv2-psy-hero-text`,children:X(ce)}),(0,H.jsxs)(`div`,{className:`gv2-psy-hero-pills`,children:[le&&(0,H.jsxs)(`span`,{children:[(0,H.jsx)(`strong`,{children:`Insight ·`}),` `,X(le)]}),ue&&(0,H.jsxs)(`span`,{children:[(0,H.jsx)(`strong`,{children:`Action ·`}),` `,X(ue)]})]})]}),(0,H.jsxs)(`div`,{className:`gv2-psy-stats-grid`,children:[(0,H.jsx)(Rl,{value:c.total_commentaires||0,count:`${c.commentaires_analyses||0} qualifiés`,label:`Collectés`,ratio:c.total_commentaires?(c.commentaires_analyses||0)/c.total_commentaires:0}),(0,H.jsx)(Rl,{value:`${(ie.favorable||{}).pct||0}%`,count:`${(ie.favorable||{}).count||0} cmnt`,label:`Favorables`,tone:`pos`}),(0,H.jsx)(Rl,{value:`${(ie.oppose||{}).pct||0}%`,count:`${(ie.oppose||{}).count||0} cmnt`,label:`Opposés`,tone:`neg`}),(0,H.jsx)(Rl,{value:`${(ie.neutre||{}).pct||0}%`,count:`${(ie.neutre||{}).count||0} cmnt`,label:`Neutres`})]}),ge.length>1&&(0,H.jsx)(Du,{active:_e,onChange:ye,tabs:ge}),_e===`synthese`&&(0,H.jsxs)(H.Fragment,{children:[(0,H.jsx)(`div`,{className:`gv2-psy-listen-row`,children:(0,H.jsx)(bs,{label:`Écouter la synthèse`,getText:()=>Zl(y,u,l)})}),(y.verite_de_l_audience||y.message_central||y.promesse_authentique||y.insight_strategique_cle)&&(0,H.jsx)(Wl,{title:`Ce qu'il faut retenir`,hint:`La lecture stratégique en quatre phrases.`,children:(0,H.jsxs)(`div`,{className:`gv2-psy-card gv2-psy-card--plain gv2-psy-keypoints`,children:[(0,H.jsx)(Yl,{label:`Vérité de l'audience`,text:y.verite_de_l_audience}),(0,H.jsx)(Xl,{valeur:y.message_central}),(0,H.jsx)(Yl,{label:`Promesse authentique`,text:y.promesse_authentique}),(0,H.jsx)(Yl,{label:`Insight stratégique`,text:y.insight_strategique_cle})]})}),(u.dominante||u.intensite||u.espoir_decu||u.aspiration_nourrie||u.besoins_sous_jacents)&&(0,H.jsx)(Wl,{title:`Lecture émotionnelle`,hint:`Ce que l'audience ressent vraiment, derrière ce qu'elle écrit.`,children:(0,H.jsxs)(`div`,{className:`gv2-psy-card gv2-psy-card--plain`,children:[u.dominante&&(0,H.jsxs)(`div`,{className:`gv2-psy-emo-head`,children:[(0,H.jsx)(`span`,{className:`gv2-psy-emo-dominante is-${ru(u.dominante)}`,children:au(u.dominante)}),u.intensite&&(0,H.jsx)(`p`,{children:X(u.intensite)})]}),(0,H.jsxs)(`div`,{className:`gv2-psy-reco-cols`,children:[(0,H.jsx)(Yl,{label:`Espoir déçu — derrière les critiques`,text:u.espoir_decu}),(0,H.jsx)(Yl,{label:`Aspiration nourrie — derrière l'enthousiasme`,text:u.aspiration_nourrie})]}),(0,H.jsx)(Yl,{label:`Besoin sous-jacent`,text:u.besoins_sous_jacents})]})}),V.length>0&&(0,H.jsx)(Wl,{title:`Actions prioritaires`,hint:`Dans l'ordre où les engager.`,children:(0,H.jsx)(`ol`,{className:`gv2-psy-actions-list`,children:V.map((e,t)=>(0,H.jsxs)(`li`,{children:[(0,H.jsx)(`span`,{className:`gv2-psy-actions-num`,children:t+1}),(0,H.jsx)(`p`,{children:X(Gl(e))})]},t))})}),de.length>0&&(0,H.jsx)(Wl,{title:`Feuille de route`,children:(0,H.jsx)(`div`,{className:`gv2-psy-timeline`,children:de.map((e,t)=>{let n=typeof e==`string`?e:[e.horizon,e.action].filter(Boolean).join(` : `),[r,...i]=n.split(` : `);return(0,H.jsx)(`div`,{className:`gv2-psy-timeline-step`,children:i.length>0?(0,H.jsxs)(H.Fragment,{children:[(0,H.jsx)(`span`,{className:`gv2-psy-timeline-when`,children:Pl(r)}),(0,H.jsx)(`p`,{children:X(i.join(` : `))})]}):(0,H.jsx)(`p`,{children:X(n)})},t)})})}),y.ce_qu_ils_ne_disent_pas_mais_veulent_entendre&&(0,H.jsx)(Wl,{title:`Ce qu'ils ne disent pas, mais veulent entendre`,children:(0,H.jsx)(`blockquote`,{className:`gv2-psy-quote is-accent`,children:(0,H.jsx)(`p`,{children:X(y.ce_qu_ils_ne_disent_pas_mais_veulent_entendre)})})}),xe]}),_e===`dashboard`&&(0,H.jsxs)(H.Fragment,{children:[Object.keys(h).length>0&&(0,H.jsx)(Wl,{title:`Indicateurs`,hint:`Scores calculés sur les commentaires, sans IA. Ouvrez « Méthode de calcul » pour vérifier chaque chiffre.`,children:(0,H.jsx)(`div`,{className:`gv2-psy-kpis`,children:Object.entries(h).map(([e,t])=>(0,H.jsx)(lu,{nom:e,valeur:t},e))})}),Object.keys(b).length>0&&(0,H.jsxs)(Wl,{title:`Données démographiques`,hint:`Estimées à partir du vocabulaire, des références et du ton des commentaires.`,children:[(0,H.jsxs)(`div`,{className:`gv2-psy-lex-cols`,children:[b.genre&&(b.genre.hommes!=null||b.genre.femmes!=null)&&(0,H.jsxs)(`div`,{className:`gv2-psy-card gv2-psy-card--plain`,children:[(0,H.jsx)(`div`,{className:`gv2-psy-trait-label`,children:`Genre estimé`}),(0,H.jsx)(Bl,{hommes:b.genre.hommes,femmes:b.genre.femmes})]}),Array.isArray(b.tranches_age)&&b.tranches_age.length>0&&(0,H.jsxs)(`div`,{className:`gv2-psy-card gv2-psy-card--plain`,children:[(0,H.jsx)(`div`,{className:`gv2-psy-trait-label`,children:`Âge estimé`}),b.tranches_age.map((e,t)=>(0,H.jsx)(zl,{label:e.tranche,pct:Math.round(e.pourcentage||0)},t))]})]}),(0,H.jsxs)(`div`,{className:`gv2-psy-trait-cols`,children:[(0,H.jsx)(ql,{label:`Métiers probables`,items:b.metiers_probables}),(0,H.jsx)(ql,{label:`Centres d'intérêt`,items:b.centres_interet}),(0,H.jsx)(ql,{label:`Comportements digitaux`,items:b.comportements_digitaux}),b.localisation&&(0,H.jsx)(ql,{label:`Pays`,items:b.localisation.pays}),b.localisation&&(0,H.jsx)(ql,{label:`Villes / régions`,items:b.localisation.villes_regions})]}),(0,H.jsx)(Yl,{label:`Niveau social probable`,text:b.niveau_social_probable}),b.localisation&&(0,H.jsx)(Yl,{label:`Note (inférence)`,text:b.localisation.note})]}),ae.length>0&&(0,H.jsxs)(Wl,{title:`Émotions détectées`,children:[(0,H.jsx)(`div`,{className:`gv2-psy-card gv2-psy-card--plain`,children:(0,H.jsx)(Ul,{title:`Émotions exprimées`,subtitle:`Part des commentaires`,slices:ae.slice(0,8).map(e=>({label:au(e.emotion),value:Math.round(e.pourcentage||e.pct||0)}))})}),(u.signaux_authenticite||u.signaux_artificialite)&&(0,H.jsxs)(`div`,{className:`gv2-psy-reco-cols gv2-psy-mt`,children:[(0,H.jsx)(`div`,{className:`gv2-psy-card gv2-psy-card--plain`,children:(0,H.jsx)(Yl,{label:`Signaux d'authenticité`,text:u.signaux_authenticite})}),(0,H.jsx)(`div`,{className:`gv2-psy-card gv2-psy-card--plain`,children:(0,H.jsx)(Yl,{label:`Signaux d'artificialité`,text:u.signaux_artificialite})})]}),B.length>0&&(0,H.jsxs)(`div`,{className:`gv2-psy-mt`,children:[(0,H.jsx)(`div`,{className:`gv2-psy-trait-label`,children:`Commentaires révélateurs`}),(0,H.jsx)(`div`,{className:`gv2-psy-quotes`,children:B.map((e,t)=>(0,H.jsx)(`blockquote`,{className:`gv2-psy-quote`,children:(0,H.jsx)(`p`,{children:ou(Gl(e))})},t))})]})]}),(Object.keys(ie).length>0||Object.keys(oe).length>0)&&(0,H.jsxs)(Wl,{title:`Positions & sentiments`,children:[Object.keys(ie).length>0&&(0,H.jsx)(`div`,{className:`gv2-psy-card gv2-psy-card--plain`,children:Object.entries(ie).map(([e,t])=>(0,H.jsx)(zl,{label:au(e),tone:ru(e),pct:Math.round(t.pct||0),count:t.count},e))}),(0,H.jsxs)(`div`,{className:`gv2-psy-donuts-row`,children:[Object.keys(oe).length>0&&(0,H.jsxs)(`div`,{className:`gv2-psy-card gv2-psy-card--plain`,children:[(0,H.jsx)(`div`,{className:`gv2-psy-trait-label`,children:`Sentiments`}),(0,H.jsx)(Ul,{slices:Object.entries(oe).map(([e,t])=>({label:au(e),value:t}))})]}),Object.keys(ie).length>0&&(0,H.jsxs)(`div`,{className:`gv2-psy-card gv2-psy-card--plain`,children:[(0,H.jsx)(`div`,{className:`gv2-psy-trait-label`,children:`Positions`}),(0,H.jsx)(Ul,{slices:Object.entries(ie).map(([e,t])=>({label:au(e),value:t&&t.pct}))})]})]})]}),(z||te||s.dominant_desire||ne)&&(0,H.jsx)(Wl,{title:`Lecture d'ensemble`,children:(0,H.jsxs)(`div`,{className:`gv2-psy-card gv2-psy-card--plain`,children:[(0,H.jsx)(Yl,{label:`Tension principale`,text:z}),(0,H.jsx)(Yl,{label:`Tendance dominante`,text:te&&au(te)}),(0,H.jsx)(Yl,{label:`Désir dominant`,text:s.dominant_desire}),(0,H.jsx)(Yl,{label:`Signal dominant`,text:ne&&au(ne)})]})}),E.length>0&&(0,H.jsx)(Wl,{title:`Groupes détectés dans l'audience`,hint:`Des sous-ensembles qui parlent de la même chose, avec les mêmes mots.`,children:(0,H.jsx)(`div`,{className:`gv2-psy-groups`,children:E.map((e,t)=>(0,H.jsx)(bu,{groupe:e},t))})}),(T.frustrations||T.attentes||T.objections)&&(0,H.jsx)(Wl,{title:`Frustrations · Attentes · Objections`,hint:`Ce que l'audience exprime le plus souvent, avec ses mots.`,children:(0,H.jsxs)(`div`,{className:`gv2-psy-signal-cols`,children:[(0,H.jsx)(eu,{title:`Frustrations`,items:T.frustrations,tone:`neg`}),(0,H.jsx)(eu,{title:`Attentes & désirs`,items:T.attentes,tone:`pos`}),(0,H.jsx)(eu,{title:`Objections`,items:T.objections,tone:`neg`})]})}),D.length>0&&(0,H.jsx)(Wl,{title:`Sujets récurrents`,children:(0,H.jsx)(`div`,{className:`gv2-psy-card gv2-psy-card--plain`,children:D.map((e,t)=>(0,H.jsxs)(`div`,{className:`gv2-psy-topic`,children:[(0,H.jsxs)(`div`,{className:`gv2-psy-topic-id`,children:[(0,H.jsx)(`strong`,{children:Pl(String(e.theme||e.mot||``))}),(0,H.jsxs)(`span`,{children:[e.pct==null?``:`${e.pct}%`,` `,e.count==null?``:`· ${e.count} occurrences`]})]}),e.exemple&&(0,H.jsx)(`p`,{children:Pl(String(e.exemple))})]},t))})}),re.length>0&&(0,H.jsx)(Wl,{title:`Commentaires les plus amplifiés`,hint:`Classés par nombre de likes — ce que l'audience a elle-même mis en avant.`,children:(0,H.jsx)(`div`,{className:`gv2-psy-quotes`,children:re.slice(0,10).map((e,t)=>(0,H.jsxs)(`blockquote`,{className:`gv2-psy-quote`,children:[(0,H.jsx)(`p`,{children:Pl(typeof e==`string`?e:e.text||``)}),e&&(e.likes>0||e.author&&e.author!==`inconnu`)&&(0,H.jsxs)(`cite`,{children:[e.likes>0?`♥ ${e.likes}`:``,e.likes>0&&e.author&&e.author!==`inconnu`?` · `:``,e.author&&e.author!==`inconnu`?Pl(e.author):``]})]},t))})}),(Object.keys(M).length>0||Object.keys(N).length>0||Object.keys(j).length>0)&&(0,H.jsx)(Wl,{title:`Métriques pondérées par engagement`,hint:`Un commentaire très liké pèse plus qu'un commentaire isolé.`,children:(0,H.jsxs)(`div`,{className:`gv2-psy-metrics`,children:[(0,H.jsx)($l,{label:`Sentiment pondéré`,value:M.score,hint:M.interpretation,tone:`pos`}),(0,H.jsx)($l,{label:`Sentiment brut`,value:M.score_raw,hint:`non pondéré (moyenne)`}),(0,H.jsx)($l,{label:`Polarisation pondérée`,value:N.score,hint:N.label}),(0,H.jsx)($l,{label:`Likes analysés`,value:M.total_likes,hint:`engagement total mesuré`}),(0,H.jsx)($l,{label:`Confiance`,value:j.label_confiance,hint:j.commentaires_analyses==null?``:`${j.commentaires_analyses} commentaires retenus`}),(0,H.jsx)($l,{label:`Hors sujet`,value:j.pct_hors_sujet==null?null:`${j.pct_hors_sujet}%`,hint:`${j.commentaires_hors_sujet||0} écartés`}),(0,H.jsx)($l,{label:`Scepticisme`,value:s.skepticism_score,hint:`part de doute exprimé`}),(0,H.jsx)($l,{label:`Opportunité`,value:s.opportunity_score,hint:`potentiel de conversion mesuré`})]})}),Object.keys(P).length>0&&(0,H.jsx)(Wl,{title:F>0?`Résonance par camp & densité argumentative`:`Densité argumentative par camp`,hint:F>0?`Qui fait réagir, et qui argumente.`:`Ces commentaires n'ont pas de likes : seule la manière d'argumenter est mesurable.`,children:(0,H.jsx)(`div`,{className:`gv2-psy-card gv2-psy-card--plain`,children:Object.entries(P).map(([e,t])=>F>0?(0,H.jsxs)(`div`,{className:`gv2-psy-resonance`,children:[(0,H.jsx)(`span`,{className:`gv2-psy-resonance-camp`,children:au(e)}),(0,H.jsx)(`div`,{className:`gv2-psy-bar-track`,children:(0,H.jsx)(`div`,{className:`gv2-psy-bar-fill`,style:{width:`${Math.min(100,t.pct||0)}%`}})}),(0,H.jsxs)(`span`,{className:`gv2-psy-resonance-pct`,children:[t.pct,`%`]}),(0,H.jsxs)(`span`,{className:`gv2-psy-resonance-likes`,children:[t.likes,` ♥`]}),(0,H.jsx)(`span`,{className:`gv2-psy-resonance-words`,children:(I[e]||{}).avg_words==null?``:`${I[e].avg_words} mots · ${I[e].label||``}`})]},e):(0,H.jsxs)(`div`,{className:`gv2-psy-resonance is-sans-likes`,children:[(0,H.jsx)(`span`,{className:`gv2-psy-resonance-camp`,children:au(e)}),(0,H.jsx)(`span`,{className:`gv2-psy-resonance-words`,children:(I[e]||{}).avg_words==null?``:`${I[e].avg_words} mots · ${I[e].label||``}`})]},e))})}),Array.isArray(O.top_mots)&&O.top_mots.length>0&&(0,H.jsx)(Wl,{title:`Mots et expressions fréquents`,children:(0,H.jsxs)(`div`,{className:`gv2-psy-lex-cols`,children:[(0,H.jsxs)(`div`,{className:`gv2-psy-card gv2-psy-card--plain`,children:[(0,H.jsx)(`div`,{className:`gv2-psy-trait-label`,children:`Mots les plus significatifs`}),(0,H.jsx)(`div`,{className:`gv2-psy-tokens`,children:O.top_mots.slice(0,14).map((e,t)=>(0,H.jsx)(`span`,{children:Pl(su(e))},t))})]}),Array.isArray(O.top_bigrams)&&O.top_bigrams.length>0&&(0,H.jsxs)(`div`,{className:`gv2-psy-card gv2-psy-card--plain`,children:[(0,H.jsx)(`div`,{className:`gv2-psy-trait-label`,children:`Expressions fréquentes`}),(0,H.jsx)(`div`,{className:`gv2-psy-tokens`,children:O.top_bigrams.slice(0,12).map((e,t)=>{let n=e&&(e.count??e.freq);return(0,H.jsxs)(`span`,{children:[Pl(su(e)),n>1?` · ${n}`:``]},t)})})]})]})}),k.length>0&&(0,H.jsx)(Wl,{title:`Champs lexicaux détectés`,children:(0,H.jsx)(`div`,{className:`gv2-psy-fields`,children:k.map((e,t)=>{let n=Array.isArray(e.words)?e.words:Array.isArray(e.tokens)?e.tokens:[],r=e.exemple||(Array.isArray(e.examples)?e.examples[0]:``);return(0,H.jsxs)(`div`,{className:`gv2-psy-card gv2-psy-field`,children:[(0,H.jsx)(`strong`,{children:Pl(String(e.field||e.nom||``))}),(0,H.jsxs)(`div`,{className:`gv2-psy-field-meta`,children:[e.pct==null?``:`${e.pct}% des commentaires`,e.count==null?``:` · ${e.count} occurrences`]}),n.length>0&&(0,H.jsx)(`div`,{className:`gv2-psy-tokens`,children:n.slice(0,5).map((e,t)=>(0,H.jsx)(`span`,{children:Pl(String(e))},t))}),r&&(0,H.jsx)(`p`,{children:Pl(String(r))})]},t)})})}),(Object.keys(ee).length>0||Object.keys(L).length>0)&&(0,H.jsxs)(Wl,{title:`Signaux de moquerie & ironie`,hint:`Un enthousiasme ironique n'est pas de l'adhésion.`,children:[(0,H.jsxs)(`div`,{className:`gv2-psy-metrics`,children:[(0,H.jsx)($l,{label:`Moquerie`,value:`${ee.count||0} (${ee.pct||0}%)`,hint:ee.level}),(0,H.jsx)($l,{label:`Ironie`,value:`${L.count||0} (${L.pct||0}%)`,hint:L.level||(L.count?`détectée`:`absente`)})]}),[...ee.examples||[],...L.examples||[]].filter(Boolean).length>0&&(0,H.jsx)(`div`,{className:`gv2-psy-quotes gv2-psy-mt`,children:[...ee.examples||[],...L.examples||[]].filter(Boolean).slice(0,6).map((e,t)=>(0,H.jsx)(`blockquote`,{className:`gv2-psy-quote`,children:(0,H.jsx)(`p`,{children:ou(Gl(e))})},t))})]}),A.phrase&&(0,H.jsx)(Wl,{title:`Polarisation de l'audience`,children:(0,H.jsxs)(`div`,{className:`gv2-psy-card gv2-psy-card--plain`,children:[(0,H.jsx)(`p`,{className:`gv2-psy-polar-phrase`,children:X(String(A.phrase))}),A.label&&(0,H.jsxs)(`div`,{className:`gv2-psy-metric-hint`,children:[Pl(String(A.label)),A.score==null?``:` · score ${A.score}`]})]})}),fe.length>0&&(0,H.jsx)(Wl,{title:`Preuves statistiques`,hint:`Six lectures calculées sans IA, avec leur niveau de confiance.`,children:fe.map(([e,t])=>(0,H.jsx)(xu,{title:t,data:g[e]},e))}),xe]}),_e===`psychologie`&&(0,H.jsxs)(H.Fragment,{children:[wu.some(([e])=>(g[e]||{}).conclusion)&&(0,H.jsx)(Wl,{title:`Insights fondés sur données`,hint:`Chaque lecture s'appuie sur un chiffre mesuré, pas sur une impression.`,children:wu.map(([e,t])=>(0,H.jsx)(xu,{title:t,data:g[e]},e))}),(0,H.jsx)(Ql,{title:`Lecture psychologique`,data:m.psychologique}),(0,H.jsx)(Ql,{title:`Lecture socio-culturelle`,data:m.socio_culturelle}),Object.keys(d).length>0&&(0,H.jsx)(Wl,{title:`La réalité intérieure`,hint:`Ce que l'audience porte, au-delà de ce qu'elle dit.`,children:(0,H.jsxs)(`div`,{className:`gv2-psy-card gv2-psy-card--plain`,children:[(0,H.jsxs)(`div`,{className:`gv2-psy-trait-cols`,children:[(0,H.jsx)(ql,{label:`Frustrations`,items:d.frustrations,tone:`neg`}),(0,H.jsx)(ql,{label:`Peurs implicites`,items:d.peurs_implicites,tone:`neg`}),(0,H.jsx)(ql,{label:`Désirs cachés`,items:d.desirs_caches,tone:`pos`}),(0,H.jsx)(ql,{label:`Motivations profondes`,items:d.motivations_profondes,tone:`pos`}),(0,H.jsx)(ql,{label:`Croyances limitantes`,items:d.croyances_limitantes,tone:`neg`}),(0,H.jsx)(ql,{label:`Croyances mobilisatrices`,items:d.croyances_mobilisatrices,tone:`pos`}),(0,H.jsx)(ql,{label:`Valeurs dominantes`,items:d.valeurs_dominantes})]}),(0,H.jsx)(Yl,{label:`Mécanismes psychologiques`,text:d.mecanismes_psychologiques}),(0,H.jsx)(Yl,{label:`Tensions internes`,text:d.tensions_internes}),(0,H.jsx)(Yl,{label:`Besoins identitaires`,text:d.besoins_identitaires}),(0,H.jsx)(Yl,{label:`Système de valeurs`,text:d.systeme_de_valeurs}),(0,H.jsx)(Yl,{label:`Maturité émotionnelle`,text:d.maturite_emotionnelle})]})}),Ou.some(([e])=>d[e])&&(0,H.jsx)(Wl,{title:`Sens & potentiel`,hint:`La couche la plus profonde : ce qui est retenu, ce qui cherche à émerger (Munroe, Frankl).`,children:(0,H.jsx)(`div`,{className:`gv2-psy-grid`,children:Ou.map(([e,t])=>d[e]?(0,H.jsxs)(`div`,{className:`gv2-psy-card gv2-psy-grid-entry`,children:[(0,H.jsx)(`div`,{className:`gv2-psy-grid-title`,children:t}),(0,H.jsx)(`p`,{className:`gv2-psy-sens-text`,children:X(d[e])})]},e):null)})}),ku.some(([e])=>d[e])&&(0,H.jsx)(Wl,{title:`Rapports au monde`,hint:`Comment cette audience se situe face à ce qui structure une décision.`,children:(0,H.jsx)(`div`,{className:`gv2-psy-card gv2-psy-card--plain`,children:(0,H.jsx)(`div`,{className:`gv2-psy-reco-cols`,children:ku.map(([e,t])=>(0,H.jsx)(Yl,{label:t,text:d[e]},e))})})}),Tu.some(([e])=>v[e])&&(0,H.jsx)(Wl,{title:`Grille psychologique`,hint:`Dix angles, chacun de l'observation mesurée jusqu'à l'action qu'elle appelle.`,children:(0,H.jsx)(`div`,{className:`gv2-psy-grid`,children:Tu.map(([e,t])=>(0,H.jsx)(Su,{label:t,data:v[e]},e))})}),Object.keys(C).length>0&&(0,H.jsx)(Wl,{title:`Trajectoire de transformation`,hint:`D'où part cette audience, ce qui doit se passer, où elle veut arriver.`,children:(0,H.jsx)(`div`,{className:`gv2-psy-grid`,children:Eu.map(([e,t,n])=>(0,H.jsx)(Cu,{title:t,fields:n,data:C[e]},e))})}),Object.keys(f).length>0&&(0,H.jsx)(Wl,{title:`Aspirations`,hint:`Ce vers quoi cette audience tend, même sans le formuler.`,children:(0,H.jsxs)(`div`,{className:`gv2-psy-card gv2-psy-card--plain`,children:[(0,H.jsx)(Yl,{label:`Ce qu'ils veulent devenir`,text:f.ce_qu_ils_veulent_devenir}),(0,H.jsx)(Yl,{label:`Ce qu'ils veulent construire`,text:f.ce_qu_ils_veulent_construire}),(0,H.jsx)(Yl,{label:`Ce qu'ils veulent transmettre`,text:f.ce_qu_ils_veulent_transmettre}),(0,H.jsx)(Yl,{label:`Ce qu'ils veulent protéger`,text:f.ce_qu_ils_veulent_proteger}),(0,H.jsx)(Yl,{label:`Ce qu'ils veulent éviter`,text:f.ce_qu_ils_veulent_eviter}),(0,H.jsx)(Yl,{label:`Appel intérieur`,text:f.appel_interieur}),(0,H.jsx)(Yl,{label:`Vision de leur meilleur moi`,text:f.vision_de_leur_meilleur_moi}),(0,H.jsxs)(`div`,{className:`gv2-psy-trait-cols`,children:[(0,H.jsx)(ql,{label:`Ambitions`,items:f.ambitions,tone:`pos`}),(0,H.jsx)(ql,{label:`Freins`,items:f.freins_aux_aspirations,tone:`neg`})]})]})}),Object.keys(x).length>0&&(0,H.jsx)(Wl,{title:`Codes & dynamiques culturelles`,hint:`Les visions du monde, croyances et tensions qui traversent cette audience.`,children:(0,H.jsxs)(`div`,{className:`gv2-psy-card gv2-psy-card--plain`,children:[(0,H.jsxs)(`div`,{className:`gv2-psy-reco-cols`,children:[(0,H.jsx)(Yl,{label:`Visions du monde`,text:x.visions_du_monde}),(0,H.jsx)(Yl,{label:`Tensions culturelles`,text:x.tensions_culturelles}),(0,H.jsx)(Yl,{label:`Récits émergents`,text:x.recits_emergents}),(0,H.jsx)(Yl,{label:`Dynamique communautaire`,text:x.dynamique_communautaire})]}),(0,H.jsxs)(`div`,{className:`gv2-psy-trait-cols`,children:[(0,H.jsx)(ql,{label:`Croyances dominantes`,items:x.croyances_dominantes}),(0,H.jsx)(ql,{label:`Références culturelles`,items:x.references_culturelles}),(0,H.jsx)(ql,{label:`Signaux faibles`,items:x.signaux_faibles})]})]})}),xe]}),_e===`strategie`&&(0,H.jsxs)(H.Fragment,{children:[(y.positionnement||y.differenciation||y.strategie_contenu)&&(0,H.jsx)(Wl,{title:`Positionnement & différenciation`,children:(0,H.jsxs)(`div`,{className:`gv2-psy-card gv2-psy-card--plain`,children:[(0,H.jsx)(Yl,{label:`Positionnement recommandé`,text:y.positionnement}),(0,H.jsx)(Yl,{label:`Différenciation`,text:y.differenciation}),(0,H.jsx)(Yl,{label:`Stratégie de contenu`,text:y.strategie_contenu})]})}),((y.angles_narratifs||[]).length>0||(y.risques_strategiques||[]).length>0)&&(0,H.jsx)(Wl,{title:`Récits à porter & risques à éviter`,children:(0,H.jsx)(`div`,{className:`gv2-psy-card gv2-psy-card--plain`,children:(0,H.jsxs)(`div`,{className:`gv2-psy-trait-cols`,children:[(0,H.jsx)(ql,{label:`Angles narratifs`,items:y.angles_narratifs,tone:`pos`}),(0,H.jsx)(ql,{label:`Risques stratégiques`,items:y.risques_strategiques,tone:`neg`})]})})}),Object.keys(p).length>0&&(0,H.jsx)(Wl,{title:`Signaux exploitables`,hint:`Ce que cette lecture ouvre comme prises concrètes.`,children:(0,H.jsxs)(`div`,{className:`gv2-psy-card gv2-psy-card--plain`,children:[(0,H.jsx)(Yl,{label:`Positionnement marketing`,text:p.positionnement_recommande}),(0,H.jsxs)(`div`,{className:`gv2-psy-trait-cols`,children:[(0,H.jsx)(ql,{label:`Objections visibles`,items:p.objections_visibles,tone:`neg`}),(0,H.jsx)(ql,{label:`Objections invisibles`,items:p.objections_invisibles,tone:`neg`}),(0,H.jsx)(ql,{label:`Déclencheurs émotionnels`,items:p.declencheurs_emotionnels,tone:`pos`}),(0,H.jsx)(ql,{label:`Leviers de conversion`,items:p.leviers_de_conversion,tone:`pos`}),(0,H.jsx)(ql,{label:`Opportunités d'offre`,items:p.opportunites_offre,tone:`pos`}),(0,H.jsx)(ql,{label:`Opportunités de contenu`,items:p.opportunites_contenu,tone:`pos`}),(0,H.jsx)(ql,{label:`Angles de contenu`,items:p.angles_de_contenu,tone:`pos`}),(0,H.jsx)(ql,{label:`Sujets qui attirent`,items:p.sujets_qui_attirent}),(0,H.jsx)(ql,{label:`Sujets qui divisent`,items:p.sujets_qui_divisent,tone:`neg`}),(0,H.jsx)(ql,{label:`Risques de communication`,items:p.risques_communication,tone:`neg`})]}),(0,H.jsx)(ql,{label:`Accroches performantes`,items:p.hooks_performants,tone:`pos`}),(p.mots_cles||[]).length>0&&(0,H.jsxs)(`div`,{className:`gv2-psy-statement`,children:[(0,H.jsx)(`div`,{className:`gv2-psy-statement-label`,children:`Mots-clés de l'audience`}),(0,H.jsx)(`div`,{className:`gv2-psy-tokens`,children:p.mots_cles.map((e,t)=>(0,H.jsx)(`span`,{children:Pl(Gl(e))},t))})]})]})}),Object.keys(w).length>0&&(0,H.jsxs)(Wl,{title:`Marchés cachés & opportunités`,hint:`Des segments et opportunités que les données rendent visibles, pas encore exploités.`,children:[Array.isArray(w.segments_detectes)&&w.segments_detectes.length>0&&(0,H.jsx)(`div`,{className:`gv2-psy-fields`,children:w.segments_detectes.map((e,t)=>(0,H.jsxs)(`div`,{className:`gv2-psy-card gv2-psy-field`,children:[(0,H.jsx)(`strong`,{children:Pl(String(e.segment||``))}),e.taille_estimee&&(0,H.jsxs)(`div`,{className:`gv2-psy-field-meta`,children:[`Taille estimée : `,Pl(e.taille_estimee)]}),e.valeur_potentielle&&(0,H.jsx)(Yl,{label:`Valeur potentielle`,text:e.valeur_potentielle}),e.description&&(0,H.jsx)(`p`,{children:X(String(e.description))}),e.signaux&&(0,H.jsx)(`p`,{children:X(Gl(e.signaux))})]},t))}),(0,H.jsxs)(`div`,{className:`gv2-psy-trait-cols`,children:[(0,H.jsx)(ql,{label:`Besoins sous-exprimés`,items:w.besoins_sous_exprimes}),(0,H.jsx)(ql,{label:`Opportunités de niche`,items:w.opportunites_niche,tone:`pos`}),(0,H.jsx)(ql,{label:`Audiences adjacentes`,items:w.audiences_adjacentes})]}),w.angle_differentiant&&(0,H.jsxs)(`div`,{className:`gv2-psy-reco-message`,children:[(0,H.jsx)(`div`,{className:`gv2-psy-statement-label`,children:`Angle différentiant`}),(0,H.jsx)(`blockquote`,{children:X(w.angle_differentiant)})]})]}),Object.keys(S).length>0&&(0,H.jsx)(Wl,{title:`Cohérence & identité perçues`,hint:`Ce que ce contenu projette, et ce qui pourrait fragiliser sa crédibilité.`,children:(0,H.jsxs)(`div`,{className:`gv2-psy-card gv2-psy-card--plain`,children:[(0,H.jsxs)(`div`,{className:`gv2-psy-reco-cols`,children:[(0,H.jsx)(Yl,{label:`Cohérence perçue`,text:S.coherence_percue}),(0,H.jsx)(Yl,{label:`Authenticité perçue`,text:S.authenticite_percue}),(0,H.jsx)(Yl,{label:`Singularité`,text:S.singularite}),(0,H.jsx)(Yl,{label:`Crédibilité`,text:S.credibilite}),(0,H.jsx)(Yl,{label:`Confiance générée`,text:S.confiance_generee}),(0,H.jsx)(Yl,{label:`Incohérences détectées`,text:S.incaherences_detectees})]}),(0,H.jsxs)(`div`,{className:`gv2-psy-trait-cols`,children:[(0,H.jsx)(ql,{label:`Points de différenciation`,items:S.points_de_differenciation,tone:`pos`}),(0,H.jsx)(ql,{label:`Faiblesses narratives`,items:S.faiblesses_narratives,tone:`neg`})]}),(0,H.jsx)(Yl,{label:`Récit dominant`,text:S.recit_dominant})]})}),xe]}),_e===`personas`&&(0,H.jsxs)(H.Fragment,{children:[(0,H.jsx)(`div`,{className:`gv2-psy-pc-grid`,children:se.map((e,t)=>(0,H.jsx)(yu,{persona:e,index:t},t))}),xe]})]})}var Mu={emotions:`Émotions`,fears:`Peurs`,aspirations:`Aspirations`,frustrations:`Frustrations`,beliefs:`Croyances`,motivations:`Motivations`,objections:`Objections`,themes:`Centres d’intérêt`,behavioral_signals:`Comportements`},Nu=[`emotions`,`aspirations`,`fears`,`frustrations`,`motivations`,`beliefs`,`objections`,`themes`],Pu={strong:`solide`,moderate:`modérée`,exploratory:`exploratoire`,insufficient:`insuffisante`,high:`élevée`,medium:`moyenne`,low:`faible`},Fu={specifique:`Propre à`,oppose:`Opposé`,intensite:`Intensité différente`},Iu=new Set(`merci.video.videos.super.bravo.top.cool.bien.tres.trop.chaine.contenu.contenus.salut.bonjour.genial.excellent.moi.toi.comme.tout.fait.faire.vraiment.encore.question.questions.possible.serait.peut.suis.tes.mes.ton.mon`.split(`.`)),Lu=e=>String(e||``).toLowerCase().normalize(`NFD`).replace(/[\u0300-\u036f]/g,``).replace(/[^a-z0-9]+/g,` `).trim(),Ru=e=>!Lu(e).split(` `).some(e=>e.length>=3&&!Iu.has(e));function zu(e){let t=Array.isArray(e.source_profiles)?e.source_profiles:[],n=Array.isArray(e.sources)?e.sources:[];return(t.length?t:n.map((e,t)=>({source_id:e.source_id,position:t,letter:String.fromCharCode(65+t),title:(e.metadata||{}).title||`Audience ${t+1}`,channel:(e.metadata||{}).channel||``,url:(e.metadata||{}).canonical_url||``,analysis_id:e.analysis_id||``,comments:(e.dataset||{}).comments_retained||0,data_quality:(e.data_quality||{}).level||``,dimensions:{}}))).map((e,t)=>({...e,index:t,letter:e.letter||String.fromCharCode(65+t)}))}function Bu({aud:e,suffix:t}){return e?(0,H.jsxs)(`span`,{className:`gv2-cross-badge`,style:{"--aud":`var(--gv2-aud-${e.index%5})`},children:[e.letter,t?` · ${t}`:``]}):null}function Vu({audiences:e,values:t}){let n=Math.max(1,...Object.values(t).map(e=>Number(e)||0));return(0,H.jsx)(`div`,{className:`gv2-cross-meter`,children:e.map(e=>{let r=t[e.source_id],i=r!=null;return(0,H.jsxs)(`div`,{style:{"--aud":`var(--gv2-aud-${e.index%5})`},className:i?``:`is-absent`,children:[(0,H.jsx)(`span`,{children:e.letter}),(0,H.jsx)(`i`,{children:(0,H.jsx)(`b`,{style:{width:i?`${Math.max(4,Math.round((Number(r)||0)/n*100))}%`:`0%`}})}),(0,H.jsx)(`em`,{children:i?Number(r)>1.5?`${Math.round(Number(r))} %`:`présent`:`—`})]},e.source_id)})})}function Hu({dimension:e,label:t,badge:n,children:r,meter:i}){return(0,H.jsxs)(`div`,{className:`gv2-cross-row`,children:[(0,H.jsx)(`span`,{className:`gv2-cross-row-dim`,children:Mu[e]||e||``}),(0,H.jsxs)(`div`,{className:`gv2-cross-row-body`,children:[(0,H.jsxs)(`p`,{children:[X(t),n]}),r]}),i]})}function Uu({children:e}){return(0,H.jsx)(`p`,{className:`gv2-cross-empty`,children:e})}function Wu({aud:e,synthesis:t,specific:n}){let r=(t.rassemble||[]).filter(t=>t.per_source.some(t=>t.source_id===e.source_id)),i=(t.separe||[]).filter(t=>t.per_source.some(t=>t.source_id===e.source_id)),a=n.filter(t=>(t.sources||[]).some(t=>t.source_id===e.source_id)).slice(0,4);return!r.length&&!i.length&&!a.length?null:(0,H.jsxs)(`div`,{className:`gv2-cross-place`,children:[(0,H.jsx)(`span`,{className:`gv2-psy-mono-label`,children:`Place dans la comparaison`}),(0,H.jsxs)(`ul`,{children:[r.slice(0,4).map((e,t)=>(0,H.jsxs)(`li`,{children:[(0,H.jsx)(`span`,{className:`gv2-cross-tag is-common`,children:`Commun`}),X(e.label)]},`c${t}`)),i.slice(0,4).map((e,t)=>(0,H.jsxs)(`li`,{children:[(0,H.jsx)(`span`,{className:`gv2-cross-tag ${e.kind===`oppose`?`is-opposed`:`is-own`}`,children:e.kind===`oppose`?`Opposé`:`Propre`}),X(e.label)]},`p${t}`)),a.map((e,t)=>(0,H.jsxs)(`li`,{children:[(0,H.jsx)(`span`,{className:`gv2-cross-tag is-own`,children:`Propre`}),X(e.label)]},`m${t}`))]})]})}function Gu({aud:e,audiences:t,onSwitch:n,onBack:r,synthesis:i,specific:a,onNavigateAgent:o,onStratege:s,onCreateur:c}){let[l,u]=(0,_.useState)({loading:!0,data:null,error:``});return(0,_.useEffect)(()=>{let t=!0;if(u({loading:!0,data:null,error:``}),!e.analysis_id)u({loading:!1,data:null,error:`Cette audience n’a pas d’analyse enregistrée.`});else return K(`/history/${encodeURIComponent(e.analysis_id)}/load`).then(async n=>{let r=JSON.parse(await n.text());if(!n.ok||!r?.full_result)throw Error(r?.error||`introuvable`);t&&u({loading:!1,data:{...r.full_result,analysis_id:r.full_result.analysis_id||e.analysis_id},error:``})}).catch(()=>{t&&u({loading:!1,data:null,error:`L’analyse complète de cette audience n’a pas pu être chargée.`})}),()=>{t=!1}},[e.analysis_id]),(0,H.jsxs)(`div`,{className:`gv2-cross-audience`,style:{"--aud":`var(--gv2-aud-${e.index%5})`},children:[(0,H.jsxs)(`nav`,{className:`gv2-cross-crumb`,"aria-label":`Fil d’Ariane`,children:[(0,H.jsx)(`button`,{type:`button`,onClick:r,children:`← Synthèse croisée`}),(0,H.jsx)(`span`,{"aria-hidden":`true`,children:`/`}),(0,H.jsxs)(`span`,{children:[`Audience `,e.letter,` · `,e.title]}),(0,H.jsx)(`span`,{className:`gv2-cross-switch`,role:`group`,"aria-label":`Changer d’audience`,children:t.map(t=>(0,H.jsxs)(`button`,{type:`button`,"aria-pressed":t.source_id===e.source_id,style:{"--aud":`var(--gv2-aud-${t.index%5})`},onClick:()=>n(t.source_id),"aria-label":`Audience ${t.letter} · ${t.title}`,children:[(0,H.jsx)(`i`,{}),t.letter]},t.source_id))})]}),(0,H.jsx)(Wu,{aud:e,synthesis:i,specific:a}),l.loading&&(0,H.jsx)(`p`,{className:`gv2-cross-empty`,children:`Chargement de l’analyse complète…`}),l.error&&(0,H.jsx)(`p`,{className:`gv2-cross-empty`,children:l.error}),l.data&&(0,H.jsx)(ju,{data:l.data,onReset:r,onGoToStratege:s?e=>s(e||l.data):()=>o?.(`stratege`),onGoToCreateur:c?()=>c({id:e.analysis_id,title:e.title}):o?()=>o(`createur`):void 0})]})}function Ku({data:e,onReset:t,onNavigateAgent:n,onStrategeCross:r,onStrategeAudience:i,onCreateurAudience:a}){let o=e.result||{},s=e.status||``,c=zu(o),l=Object.fromEntries(c.map(e=>[e.source_id,e])),u=o.cross_synthesis&&o.cross_synthesis.status===`completed`?o.cross_synthesis:{rassemble:[],separe:[]},d=o.executive_summary||{},f=o.confidence||{},p=o.common_psychological_core||{},m=p.interpretation&&typeof p.interpretation==`object`?p.interpretation.interpretation:typeof p.interpretation==`string`?p.interpretation:``,h=new Set([...(u.rassemble||[]).flatMap(e=>[e.label,...e.per_source.map(e=>e.signal)]),...(u.separe||[]).flatMap(e=>[e.label,...e.per_source.map(e=>e.signal)])].map(Lu)),g=(Array.isArray(o.convergences)?o.convergences:[]).filter(e=>!Ru(e.label)&&!h.has(Lu(e.label))),v=(Array.isArray(o.divergences)?o.divergences:[]).filter(e=>!Ru(e.label)&&!h.has(Lu(e.label))),y=Array.isArray(o.oppositions)?o.oppositions:[],b=(Array.isArray(o.source_specific_signals)?o.source_specific_signals:[]).filter(e=>!Ru(e.label)),x=Array.isArray(o.failed_sources)?o.failed_sources:[],S=Array.isArray(o.cross_personas)?o.cross_personas:[],C=o.cross_interpretation||{},w=C.dialectic_review||{},T=f.total_comments||c.reduce((e,t)=>e+(Number(t.comments)||0),0),E=u.verdict||{},D=u.sujets_qui_resolvent||[],O=u.centres_interet||[],k=u.a_eviter||[],A=u.message_commun||{},[j,M]=(0,_.useState)(`synthese`),[N,P]=(0,_.useState)(``),F=[{id:`synthese`,label:`Synthèse croisée`},{id:`rassemble`,label:`Ce qui les rassemble`},{id:`separe`,label:`Ce qui les sépare`},{id:`carte`,label:`Carte des audiences`},...S.length?[{id:`personas`,label:`Personas`}]:[],...D.length||O.length||k.length||A.message?[{id:`sujets`,label:`Sujets & angles`}]:[],{id:`audiences`,label:`Chaque audience`}],I=F.some(e=>e.id===j)?j:`synthese`,ee=N&&l[N],L=(0,H.jsxs)(`div`,{className:`gv2-cross-head`,children:[(0,H.jsxs)(`div`,{children:[(0,H.jsx)(`span`,{className:`gv2-psy-eyebrow`,children:`Le Psychologue · Cross Analyse`}),(0,H.jsx)(`h1`,{children:`Salle Cross`}),(0,H.jsx)(`div`,{className:`gv2-cross-auds`,children:c.map(e=>(0,H.jsxs)(`button`,{type:`button`,className:`gv2-cross-aud${N===e.source_id?` is-open`:``}`,style:{"--aud":`var(--gv2-aud-${e.index%5})`},onClick:()=>P(e.source_id),"aria-label":`Ouvrir l’audience ${e.letter} · ${e.title}`,children:[(0,H.jsx)(`i`,{"aria-hidden":`true`}),(0,H.jsx)(`strong`,{children:e.letter}),(0,H.jsx)(`span`,{children:e.title}),e.comments?(0,H.jsxs)(`small`,{children:[e.comments,` comm.`]}):null,(0,H.jsx)(`em`,{"aria-hidden":`true`,children:`→`})]},e.source_id))})]}),(0,H.jsx)(`button`,{type:`button`,className:`gv2-psy-ghost-btn`,onClick:t,children:`← Nouvelle analyse`})]});if(ee)return(0,H.jsxs)(`section`,{className:`gv2-psy-result gv2-cross-room`,children:[L,(0,H.jsx)(Gu,{aud:ee,audiences:c,onSwitch:P,onBack:()=>P(``),synthesis:u,specific:b,onNavigateAgent:n,onStratege:i,onCreateur:a})]});let R=u.rassemble||[],z=u.separe||[],te=c.map(e=>({aud:e,items:b.filter(t=>(t.sources||[]).some(t=>t.source_id===e.source_id)).slice(0,6)}));return(0,H.jsxs)(`section`,{className:`gv2-psy-result gv2-cross-room`,children:[L,(s===`partial_success`||x.length>0)&&(0,H.jsxs)(`div`,{className:`gv2-psy-cross-warn`,children:[(0,H.jsx)(`strong`,{children:`Analyse partielle.`}),` `,x.length,` source`,x.length===1?``:`s`,` n'`,x.length===1?`a`:`ont`,` pas pu être analysée`,x.length===1?``:`s`,`. Les résultats portent sur `,c.length,` audience`,c.length===1?``:`s`,` exploitable`,c.length===1?``:`s`,`.`]}),(0,H.jsx)(Du,{active:I,onChange:M,tabs:F}),I===`synthese`&&(0,H.jsxs)(`div`,{className:`gv2-cross-pane`,children:[(0,H.jsxs)(`div`,{className:`gv2-cross-verdict`,children:[(0,H.jsxs)(`div`,{children:[(0,H.jsx)(`span`,{className:`gv2-psy-mono-label`,children:`Ce que ces audiences ont en commun`}),(0,H.jsx)(`p`,{className:`gv2-cross-verdict-text`,children:X(E.rassemble||d.text||m||`Analyse terminée.`)}),(0,H.jsxs)(`div`,{className:`gv2-cross-conf`,children:[f.score!=null&&(0,H.jsxs)(`span`,{children:[`Confiance `,(0,H.jsx)(`strong`,{children:Math.round(Number(f.score)||0)}),`/100`]}),(f.level||d.confidence_level)&&(0,H.jsx)(`span`,{className:`gv2-cross-pill`,children:Pu[d.confidence_level||f.level]||f.level}),T?(0,H.jsxs)(`span`,{children:[T,` commentaires`]}):null,(0,H.jsxs)(`span`,{children:[c.length,` audiences`]})]})]}),c.length===2&&(0,H.jsxs)(`div`,{className:`gv2-cross-venn`,role:`img`,"aria-label":`Noyau commun entre ${c[0].title} et ${c[1].title}`,children:[(0,H.jsx)(`span`,{className:`is-a`,style:{"--aud":`var(--gv2-aud-0)`},children:c[0].letter}),(0,H.jsx)(`span`,{className:`is-b`,style:{"--aud":`var(--gv2-aud-1)`},children:c[1].letter}),(0,H.jsx)(`strong`,{children:R[0]?R[0].label:g[0]?g[0].label:`Noyau commun`})]})]}),(0,H.jsxs)(`div`,{className:`gv2-cross-trio`,children:[(0,H.jsxs)(`div`,{children:[(0,H.jsx)(`span`,{className:`gv2-psy-mono-label`,children:`Les rassemble`}),(0,H.jsx)(`p`,{children:X(E.rassemble||m||`${g.length} signal${g.length>1?`aux`:``} partagé${g.length>1?`s`:``}.`)})]}),(0,H.jsxs)(`div`,{children:[(0,H.jsx)(`span`,{className:`gv2-psy-mono-label`,children:`Les sépare`}),(0,H.jsx)(`p`,{children:X(E.separe||`${v.length+y.length} différence${v.length+y.length>1?`s`:``} mesurée${v.length+y.length>1?`s`:``}.`)})]}),(0,H.jsxs)(`div`,{children:[(0,H.jsx)(`span`,{className:`gv2-psy-mono-label`,children:`À leur dire à toutes`}),(0,H.jsx)(`p`,{children:X(E.a_leur_dire||A.message||`Disponible après la synthèse croisée.`)})]})]}),Array.isArray(d.caveats)&&d.caveats.length>0&&(0,H.jsxs)(`div`,{className:`gv2-cross-caveats`,children:[(0,H.jsx)(`span`,{className:`gv2-psy-mono-label`,children:`Points de prudence`}),(0,H.jsx)(`ul`,{children:d.caveats.map((e,t)=>(0,H.jsx)(`li`,{children:X(e)},t))})]}),w.status===`completed`&&((w.challenges||[]).length>0||(w.alternative_hypotheses||[]).length>0||w.retained_conclusion)&&(0,H.jsxs)(`details`,{className:`gv2-cross-review`,children:[(0,H.jsx)(`summary`,{children:`Ce qui pourrait contredire cette lecture`}),(w.challenges||[]).length>0&&(0,H.jsx)(`ul`,{children:w.challenges.map((e,t)=>(0,H.jsxs)(`li`,{children:[(0,H.jsx)(`strong`,{children:X(e.claim)}),` — `,X(e.counter_evidence)]},t))}),(w.alternative_hypotheses||[]).length>0&&(0,H.jsxs)(H.Fragment,{children:[(0,H.jsx)(`span`,{className:`gv2-psy-mono-label`,children:`Autres lectures possibles`}),(0,H.jsx)(`ul`,{children:w.alternative_hypotheses.map((e,t)=>(0,H.jsx)(`li`,{children:X(e)},t))})]}),w.retained_conclusion&&(0,H.jsxs)(`p`,{children:[(0,H.jsx)(`strong`,{children:`Conclusion retenue après critique :`}),` `,X(w.retained_conclusion)]})]})]}),I===`rassemble`&&(0,H.jsxs)(`div`,{className:`gv2-cross-pane`,children:[R.length===0&&g.length===0&&(0,H.jsx)(Uu,{children:`Aucun point commun suffisamment étayé entre ces audiences.`}),(0,H.jsxs)(`div`,{className:`gv2-cross-rows`,children:[R.map((e,t)=>(0,H.jsxs)(Hu,{dimension:e.dimension,label:e.label,badge:(0,H.jsx)(`span`,{className:`gv2-cross-tag is-common`,children:`Commun`}),meter:(0,H.jsx)(Vu,{audiences:c,values:Object.fromEntries(e.per_source.map(e=>[e.source_id,e.weight]))}),children:[e.interpretation&&(0,H.jsx)(`p`,{className:`gv2-cross-interp`,children:X(e.interpretation)}),e.per_source.map((e,t)=>(0,H.jsxs)(`blockquote`,{style:{"--aud":`var(--gv2-aud-${(l[e.source_id]||{}).index%5})`},children:[(0,H.jsx)(Bu,{aud:l[e.source_id]}),` `,X(e.signal)]},t))]},`s${t}`)),g.map((e,t)=>{let n=(C.convergence_interpretations||[]).find(t=>t.insight_id===e.insight_id);return(0,H.jsx)(Hu,{dimension:e.category,label:e.category===`behavioral_signals`?au(e.label):e.label,badge:(0,H.jsxs)(`span`,{className:`gv2-cross-tag is-common`,children:[`Mesuré dans `,e.sources_count,` audiences`]}),meter:(0,H.jsx)(Vu,{audiences:c,values:Object.fromEntries((e.sources||[]).map(e=>[e.source_id,e.weight]))}),children:n&&(0,H.jsx)(`p`,{className:`gv2-cross-interp`,children:X(n.interpretation)})},`m${t}`)})]})]}),I===`separe`&&(0,H.jsxs)(`div`,{className:`gv2-cross-pane`,children:[(0,H.jsxs)(`div`,{className:`gv2-cross-rows`,children:[z.map((e,t)=>{let n=e.per_source.length===1?l[e.per_source[0].source_id]:null;return(0,H.jsxs)(Hu,{dimension:e.dimension,label:e.label,badge:e.kind===`oppose`?(0,H.jsx)(`span`,{className:`gv2-cross-tag is-opposed`,children:`Opposé`}):n?(0,H.jsx)(Bu,{aud:n,suffix:Fu.specifique}):(0,H.jsx)(`span`,{className:`gv2-cross-tag is-own`,children:Fu[e.kind]}),meter:(0,H.jsx)(Vu,{audiences:c,values:Object.fromEntries(e.per_source.map(e=>[e.source_id,e.weight]))}),children:[e.interpretation&&(0,H.jsx)(`p`,{className:`gv2-cross-interp`,children:X(e.interpretation)}),e.per_source.map((e,t)=>(0,H.jsxs)(`blockquote`,{style:{"--aud":`var(--gv2-aud-${(l[e.source_id]||{}).index%5})`},children:[(0,H.jsx)(Bu,{aud:l[e.source_id]}),` `,X(e.note||e.signal)]},t))]},`s${t}`)}),v.map((e,t)=>{let n=(C.divergence_interpretations||[]).find(t=>t.insight_id===e.insight_id);return(0,H.jsx)(Hu,{dimension:e.category,label:e.label,badge:(0,H.jsx)(`span`,{className:`gv2-cross-tag is-own`,children:`Intensité différente`}),meter:(0,H.jsx)(Vu,{audiences:c,values:Object.fromEntries((e.sources||[]).map(e=>[e.source_id,e.weight]))}),children:n&&(0,H.jsx)(`p`,{className:`gv2-cross-interp`,children:X(n.interpretation)})},`d${t}`)}),y.map((e,t)=>(0,H.jsx)(Hu,{dimension:`beliefs`,label:e.observation||`Positions opposées`,badge:(0,H.jsx)(`span`,{className:`gv2-cross-tag is-opposed`,children:`Opposé`}),meter:(0,H.jsx)(`div`,{className:`gv2-cross-meter`,children:(e.source_positions||[]).map((e,t)=>{let n=l[e.source_id];return n?(0,H.jsxs)(`div`,{style:{"--aud":`var(--gv2-aud-${n.index%5})`},children:[(0,H.jsx)(`span`,{children:n.letter}),(0,H.jsxs)(`em`,{children:[au(e.position),` `,Math.round(e.pct),` %`]})]},t):null})})},`o${t}`))]}),te.some(e=>e.items.length)&&(0,H.jsxs)(`div`,{className:`gv2-cross-own`,children:[(0,H.jsx)(`span`,{className:`gv2-psy-mono-label`,children:`Signaux propres à une seule audience`}),(0,H.jsx)(`div`,{className:`gv2-cross-own-grid`,children:te.filter(e=>e.items.length).map(e=>(0,H.jsxs)(`div`,{style:{"--aud":`var(--gv2-aud-${e.aud.index%5})`},children:[(0,H.jsx)(Bu,{aud:e.aud}),(0,H.jsx)(`strong`,{className:`gv2-cross-own-title`,children:e.aud.title}),(0,H.jsx)(`ul`,{children:e.items.map((e,t)=>(0,H.jsxs)(`li`,{children:[(0,H.jsx)(`em`,{children:Mu[e.category]||e.category}),X(e.category===`behavioral_signals`?au(e.label):e.label)]},t))})]},e.aud.source_id))})]}),z.length===0&&v.length===0&&y.length===0&&b.length===0&&(0,H.jsx)(Uu,{children:`Aucune différence mesurée : ces audiences se ressemblent fortement.`})]}),I===`carte`&&(0,H.jsxs)(`div`,{className:`gv2-cross-pane`,children:[(0,H.jsx)(`p`,{className:`gv2-cross-lede`,children:`La vue de l’analyste : pour chaque dimension, ce que chaque audience exprime le plus.`}),(0,H.jsx)(`div`,{className:`gv2-cross-map-scroll`,children:(0,H.jsxs)(`table`,{className:`gv2-cross-map`,children:[(0,H.jsx)(`thead`,{children:(0,H.jsxs)(`tr`,{children:[(0,H.jsx)(`th`,{scope:`col`,children:`Dimension`}),c.map(e=>(0,H.jsxs)(`th`,{scope:`col`,style:{"--aud":`var(--gv2-aud-${e.index%5})`},children:[(0,H.jsx)(Bu,{aud:e}),` `,e.title]},e.source_id))]})}),(0,H.jsx)(`tbody`,{children:Nu.filter(e=>c.some(t=>((t.dimensions||{})[e]||[]).length)).map(e=>(0,H.jsxs)(`tr`,{children:[(0,H.jsx)(`th`,{scope:`row`,children:Mu[e]}),c.map(t=>(0,H.jsxs)(`td`,{children:[((t.dimensions||{})[e]||[]).slice(0,3).map((e,t)=>(0,H.jsxs)(`div`,{className:`gv2-cross-map-cell`,children:[(0,H.jsx)(`span`,{children:X(e.label)}),e.weight>1.5&&(0,H.jsxs)(`small`,{children:[Math.round(e.weight),` %`]})]},t)),!((t.dimensions||{})[e]||[]).length&&(0,H.jsx)(`span`,{className:`gv2-cross-map-none`,children:`—`})]},t.source_id))]},e))})]})})]}),I===`personas`&&(0,H.jsxs)(`div`,{className:`gv2-cross-pane`,children:[(0,H.jsx)(`div`,{className:`gv2-cross-personas`,children:S.map((e,t)=>(0,H.jsxs)(`article`,{className:`gv2-cross-persona`,children:[(0,H.jsx)(`span`,{className:`gv2-psy-mono-label`,children:(e.source_ids||[]).length>1?`Persona croisé`:`Persona propre`}),(0,H.jsx)(`h3`,{children:e.name||`Persona`}),(0,H.jsxs)(`div`,{className:`gv2-cross-persona-auds`,children:[(e.source_ids||[]).map(e=>(0,H.jsx)(Bu,{aud:l[e]},e)),e.confidence_level&&(0,H.jsx)(`span`,{className:`gv2-cross-pill`,children:Pu[e.confidence_level]||e.confidence_level})]}),e.description&&(0,H.jsx)(`p`,{children:X(e.description)}),Array.isArray(e.signals)&&e.signals.length>0&&(0,H.jsx)(`div`,{className:`gv2-psy-tokens`,children:e.signals.map((e,t)=>(0,H.jsx)(`span`,{children:typeof e==`string`?e:e.label||``},t))})]},t))}),(0,H.jsx)(`p`,{className:`gv2-cross-lede`,children:`Les personas détaillés de chaque audience sont dans l’onglet « Chaque audience ».`})]}),I===`sujets`&&(0,H.jsxs)(`div`,{className:`gv2-cross-pane`,children:[A.message&&(0,H.jsxs)(`div`,{className:`gv2-cross-message`,children:[(0,H.jsx)(`span`,{className:`gv2-psy-mono-label`,children:`Un message pour toutes ces audiences`}),(0,H.jsx)(`p`,{children:X(A.message)}),(A.nuances||[]).length>0&&(0,H.jsx)(`ul`,{children:A.nuances.map((e,t)=>(0,H.jsxs)(`li`,{children:[(0,H.jsx)(Bu,{aud:l[e.source_id]}),` `,X(e.nuance)]},t))})]}),(0,H.jsxs)(`div`,{className:`gv2-cross-topics`,children:[D.length>0&&(0,H.jsxs)(`div`,{children:[(0,H.jsx)(`span`,{className:`gv2-psy-mono-label`,children:`Sujets qui résolvent un problème commun`}),(0,H.jsx)(`ol`,{children:D.map((e,t)=>(0,H.jsxs)(`li`,{children:[(0,H.jsx)(`strong`,{children:X(e.title)}),(0,H.jsx)(`small`,{children:X(e.why)}),(0,H.jsx)(`span`,{children:e.source_ids.map(e=>(0,H.jsx)(Bu,{aud:l[e]},e))})]},t))})]}),O.length>0&&(0,H.jsxs)(`div`,{children:[(0,H.jsx)(`span`,{className:`gv2-psy-mono-label`,children:`Centres d’intérêt`}),(0,H.jsx)(`ul`,{children:O.map((e,t)=>(0,H.jsxs)(`li`,{children:[(0,H.jsx)(`strong`,{children:X(e.label)}),(0,H.jsx)(`small`,{children:X(e.why)}),(0,H.jsx)(`span`,{children:e.source_ids.map(e=>(0,H.jsx)(Bu,{aud:l[e]},e))})]},t))})]}),k.length>0&&(0,H.jsxs)(`div`,{children:[(0,H.jsx)(`span`,{className:`gv2-psy-mono-label`,children:`À éviter`}),(0,H.jsx)(`ul`,{children:k.map((e,t)=>(0,H.jsxs)(`li`,{children:[(0,H.jsx)(`strong`,{children:X(e.label)}),(0,H.jsx)(`small`,{children:X(e.why)}),(0,H.jsx)(`span`,{children:e.source_ids.map(e=>(0,H.jsx)(Bu,{aud:l[e]},e))})]},t))})]})]}),n&&(0,H.jsxs)(`div`,{className:`gv2-psy-next is-final`,children:[(0,H.jsx)(`span`,{className:`gv2-psy-next-hint`,children:`Transformer cette lecture croisée`}),(0,H.jsxs)(`div`,{className:`gv2-psy-next-actions`,children:[(0,H.jsx)(`button`,{type:`button`,className:`gv2-psy-ghost-btn`,onClick:()=>n(`createur`),children:`Un message commun · Créateur →`}),(0,H.jsx)(`button`,{type:`button`,className:`gv2-psy-primary-btn`,onClick:()=>r?r(e):n(`stratege`),children:`Construire la stratégie · Ariane →`})]})]})]}),I===`audiences`&&(0,H.jsxs)(`div`,{className:`gv2-cross-pane`,children:[(0,H.jsx)(`p`,{className:`gv2-cross-lede`,children:`Chaque audience garde son analyse complète — synthèse, tableau de bord, psychologie, stratégie, personas — comme une analyse classique.`}),(0,H.jsx)(`div`,{className:`gv2-cross-solo`,children:c.map(e=>(0,H.jsxs)(`button`,{type:`button`,style:{"--aud":`var(--gv2-aud-${e.index%5})`},onClick:()=>P(e.source_id),children:[(0,H.jsx)(Bu,{aud:e,suffix:`Audience`}),(0,H.jsx)(`strong`,{children:e.title}),(0,H.jsx)(`span`,{children:[e.channel,e.comments?`${e.comments} commentaires`:``,e.data_quality?`qualité ${Il(e.data_quality).label.toLowerCase()}`:``].filter(Boolean).join(` · `)}),(0,H.jsx)(`em`,{children:`Ouvrir l’analyse complète →`})]},e.source_id))})]})]})}function qu({workspace:e,onWorkspaceChange:t,onNavigateAgent:n,openAnalysisRequest:r,onAnalysisReady:i}){let[a,o]=(0,_.useState)(`link`),[s,c]=(0,_.useState)(`youtube`),[l,u]=(0,_.useState)(``),[d,f]=(0,_.useState)(``),[p,m]=(0,_.useState)(null),[h,g]=(0,_.useState)(!1),[v,y]=(0,_.useState)(0),[b,x]=(0,_.useState)(!1),[S,C]=(0,_.useState)(`Collez le lien d’une vidéo YouTube.`),[w,T]=(0,_.useState)(``),[E,D]=(0,_.useState)(`input`),[O,k]=(0,_.useState)(`single`),[A,j]=(0,_.useState)(0),[M,N]=(0,_.useState)(``),[P,F]=(0,_.useState)(null),[I,ee]=(0,_.useState)(!1),[L,R]=(0,_.useState)(null),[z,te]=(0,_.useState)(``),ne=(0,_.useRef)(!1),re=(0,_.useRef)(!1),ie=(0,_.useRef)(!0);(0,_.useEffect)(()=>(ie.current=!0,()=>{ie.current=!1}),[]);let[ae,oe]=(0,_.useState)(!1),[se,ce]=(0,_.useState)([]);(0,_.useEffect)(()=>{let t=null;try{t=JSON.parse(window.localStorage.getItem(Cl)||`null`)}catch{t=null}if(t?.crossId){D(`loading`),k(`cross`),Se(t.crossId);return}if(t?.id){D(`loading`),k(`single`),de(t.id);return}let n=!0;return e?.analysis_id&&K(`/history/${encodeURIComponent(e.analysis_id)}/load`).then(async e=>{if(W(e))return window.location.assign(`/login`),null;let t=await G(e,`L’analyse enregistrée`);return e.ok&&t.success?t:null}).then(e=>{n&&e?.full_result&&(F(e.full_result),k(`single`),D(`result`))}).catch(()=>{}),()=>{n=!1}},[e?.folder_id,e?.analysis_id]);function le(t){let r=t.brief||{},i=t.psychologie||{},a=t.marketing||{},o=[],s=r.qui||r.synthese,c=r.insight||r.insight_cle,l=r.action||r.action_prioritaire,u=t.recommandations||{};s&&o.push(`Audience : `+s),c&&o.push(`Insight clé : `+c),l&&o.push(`Action : `+l),u.verite_de_l_audience&&o.push(`Vérité de l'audience : `+Gl(u.verite_de_l_audience)),u.message_central&&o.push(`Message central : `+Gl(u.message_central));let d=(i.motivations_profondes||[]).slice(0,2).map(e=>typeof e==`string`?e:JSON.stringify(e));d.length&&o.push(`Motivations : `+d.join(`, `));let f=(i.frustrations||[]).slice(0,2).map(e=>typeof e==`string`?e:JSON.stringify(e));f.length&&o.push(`Frustrations : `+f.join(`, `));let p=(a.hooks_performants||[]).slice(0,2);p.length&&o.push(`Hooks : `+p.join(` | `));try{window.sessionStorage.setItem(`gabriel_for_stratege`,JSON.stringify({schema_version:1,created_at:Date.now(),analysis_id:t.analysis_id,folder_id:e?.folder_id||``,psycho_brief:o.join(`
`),psycho_data:{brief:r,psychologie:i,emotions:t.emotions||{},marketing:a,kpis:t.kpis||{},aspirations:t.aspirations||{},personas:t.personas||[],distribution:t.distribution||{},recommandations:u,demographique:t.demographique||{}}}))}catch{}n?.(`stratege`)}function ue(t){let r=t?.result||{},i=(r.cross_synthesis||{}).verdict||{},a=((r.cross_synthesis||{}).message_commun||{}).message,o=zu(r),s=e=>String(e||``).replace(/\*+/g,``).trim(),c=[];o.length&&c.push(`Audiences comparées : `+o.map(e=>`${e.letter} = ${e.title}`).join(` ; `)),i.rassemble&&c.push(`Ce qui les rassemble : `+s(i.rassemble)),i.separe&&c.push(`Ce qui les sépare : `+s(i.separe)),i.a_leur_dire&&c.push(`À leur dire : `+s(i.a_leur_dire)),a&&c.push(`Message commun : `+s(a));try{window.sessionStorage.setItem(`gabriel_for_stratege`,JSON.stringify({schema_version:1,created_at:Date.now(),analysis_id:r.cross_analysis_id||t?.cross_analysis_id,folder_id:e?.folder_id||``,psycho_brief:c.join(`
`)}))}catch{}n?.(`stratege`)}function B(e){e?.id&&i?.(e),n?.(`createur`)}async function V(){let e=Al[s];if(!e)return;let t=l.trim();if(!t)C(`Collez d’abord le lien ${e.label}.`),T(`error`);else{x(!0),C(`Vérification du lien et détection des commentaires…`),T(`busy`);try{let e=await K(`/analyze`,{method:`POST`,headers:{"Content-Type":`application/json`},body:JSON.stringify({source:s,content:t,preview_only:!0})});if(W(e)){window.location.assign(`/login`);return}let n=await G(e,`La vérification du lien`);if(n.comments_preview){let e=Number(n.comments_count||n.comments_preview.length||0);y(e),C(`${e} commentaire${e===1?``:`s`} détecté${e===1?``:`s`}. Le lien est prêt à analyser.`),T(`success`)}else n.error?(C(n.error),T(`error`),y(0)):(C(`Lien enregistré. Vous pouvez lancer l’analyse.`),T(`success`))}catch{C(`Impossible de vérifier le lien. Vérifiez votre connexion.`),T(`error`)}finally{x(!1)}}}async function de(e){if(!ne.current){ne.current=!0;try{let n=Date.now(),r=0;for(;Date.now()-n<wl;){if(await Nl(Ol),!ie.current)return;let i;try{let t=await K(`/status/${encodeURIComponent(e)}`);if(W(t)){window.location.assign(`/login`);return}i=await G(t,`Le suivi de l’analyse`),r=0}catch{if(r+=1,r>=kl)throw Error(`La connexion au serveur est perdue. Relancez l’analyse.`);continue}if(i.status===`done`){ee(!1),F(i.data),k(`single`),D(`result`);try{window.localStorage.removeItem(Cl)}catch{}await t?.();return}if([`error`,`interrupted`,`not_found`].includes(i.status))throw Error(i.error||`L’analyse a été interrompue.`);j(Math.min(95,Math.round((Date.now()-n)/El*100))),i.step&&N(i.step);let a=i.partial||{};a.dashboard&&(F({...a.dashboard,...a.interpretation||{},...Array.isArray(a.personas)?{personas:a.personas}:{}}),k(`single`),ee(!0),D(`result`))}throw Error(`L’analyse prend plus de temps que prévu et continue en arrière-plan. Retrouvez-la dans le menu Analyses dans quelques minutes.`)}catch(e){try{window.localStorage.removeItem(Cl)}catch{}if(!ie.current)return;D(`error`),te(e.message||`Une erreur est survenue.`)}finally{ne.current=!1}}}function fe(e){if(o(e),e!==`link`&&oe(!1),e===`link`){let e=Al[s];C(e?`Collez le lien ${e.label}, puis vérifiez les commentaires disponibles.`:``)}else C(``);T(``)}function pe(e){c(e),e!==`youtube`&&oe(!1),u(``),y(0);let t=Al[e];t?(C(`Collez le lien ${t.label}, puis vérifiez les commentaires disponibles.`),T(``)):(C(`Google sera connecté dès que cette source sera disponible dans votre workspace.`),T(`busy`))}function me(e){if(u(e),y(0),T(``),ae){C(`Le lien est reconnu dès que son identifiant vidéo est complet.`);return}let t=Al[s];t&&C(`Collez le lien ${t.label}, puis vérifiez les commentaires disponibles.`)}function he(){let e=!ae;oe(e),o(`link`),c(`youtube`),u(``),y(0),T(``),C(e?`Ajoutez 2 à 5 audiences YouTube pour comparer leurs conversations.`:`Collez le lien d’une vidéo YouTube.`)}async function ge(e,t=null){if(e){g(!0),C(`Lecture du fichier…`),T(`busy`);try{let n=new FormData;n.append(`file`,e),t&&n.append(`column`,t);let r=await K(`/upload-comments-file`,{method:`POST`,body:n});if(W(r)){window.location.assign(`/login`);return}let i=await G(r,`L’import du fichier`);if(!r.ok||!i.success)throw Error(i.error||`Impossible de lire ce fichier.`);m({name:e.name,raw:e,count:i.comments_count||0,columns:i.detected_columns||[],column:i.selected_column||``,warning:i.warning||``,comments:i.normalized_comments||[]}),C(`${i.comments_count} commentaire${i.comments_count===1?``:`s`} lu${i.comments_count===1?``:`s`}.`),T(`success`)}catch(e){m(null),C(e.message||`Impossible de lire ce fichier.`),T(`error`)}finally{g(!1)}}}async function _e(){let t=d.split(`
`).map(e=>e.trim()).filter(Boolean);if(a===`manual`&&t.length<3){C(`Ajoutez au moins 3 commentaires.`),T(`error`);return}if(a===`link`&&v<=0){C(`Vérifiez d’abord le lien.`),T(`error`);return}if(a===`file`&&!(p&&p.count>=3)){C(`Importez d’abord un fichier d’au moins 3 commentaires.`),T(`error`);return}D(`loading`),k(`single`),j(0),N(`Lecture des réactions du marché…`),te(``);let n=e?.folder_id||void 0,r=a===`manual`?{source:`text`,content:d,comments:t,folder_id:n}:a===`file`?{source:`file`,content:p.name,comments:p.comments,folder_id:n}:{source:s,content:l.trim(),folder_id:n};try{let e=await K(`/analyze`,{method:`POST`,headers:{"Content-Type":`application/json`},body:JSON.stringify(r)});if(W(e)){window.location.assign(`/login`);return}let t=await G(e,`Le lancement de l’analyse`);if(!e.ok||t?.error)throw Error(t?.error||`Le lancement a échoué.`);try{window.localStorage.setItem(Cl,JSON.stringify({id:t.job_id,t0:Date.now()}))}catch{}await de(t.job_id)}catch(e){D(`error`),te(e.message||`Une erreur est survenue.`)}}function ve(e){!e||se.length>=Ml||se.some(t=>t.url===e.url)||(ce(t=>[...t,{...e,label:e.title}]),u(``),y(0),T(``),C(`Audience ajoutée. Collez une autre vidéo ou lancez la comparaison.`))}function ye(e){ce(t=>t.filter((t,n)=>n!==e))}function be(e,t){ce(n=>{let r=e+t;if(r<0||r>=n.length)return n;let i=n.slice();return[i[e],i[r]]=[i[r],i[e]],i})}function xe(){ce([]),u(``),y(0),T(``),C(`Ajoutez 2 à 5 audiences YouTube pour comparer leurs conversations.`)}async function Se(e){if(!re.current){re.current=!0;try{let n=Date.now(),r=0;for(;Date.now()-n<Tl;){if(await Nl(Ol),!ie.current)return;let i;try{let t=await K(`/api/v2/agents/psychologue/cross-analyses/${encodeURIComponent(e)}/status`);if(W(t)){window.location.assign(`/login`);return}i=await G(t,`Le suivi de la Cross Analyse`),r=0}catch{if(r+=1,r>=kl)throw Error(`La connexion au serveur est perdue. Relancez la Cross Analyse.`);continue}if(i.status===`completed`||i.status===`partial_success`){let n=await K(`/api/v2/agents/psychologue/cross-analyses/${encodeURIComponent(e)}`);if(W(n)){window.location.assign(`/login`);return}let r=await G(n,`Le résultat de la Cross Analyse`);if(!n.ok||!r.success||!r.result)throw Error(r.error||`Impossible de charger le résultat.`);R(r),k(`cross`),D(`result`);try{window.localStorage.removeItem(Cl)}catch{}await t?.();return}if([`error`,`failed`,`interrupted`].includes(i.status))throw Error(i.error||`La Cross Analyse a été interrompue.`);j(Math.min(95,Math.round((Date.now()-n)/Dl*100))),i.step&&N(i.step)}throw Error(`La Cross Analyse prend plus de temps que prévu et continue en arrière-plan. Retrouvez-la dans le menu Cross Analyses dans quelques minutes.`)}catch(e){try{window.localStorage.removeItem(Cl)}catch{}if(!ie.current)return;D(`error`),te(e.message||`Une erreur est survenue.`)}finally{re.current=!1}}}async function Ce(){let t=se.slice();if(!(t.length<jl||t.length>Ml)){D(`loading`),k(`cross`),j(0),N(`Lecture des réactions du marché…`),te(``);try{let n=await K(`/api/v2/agents/psychologue/cross-analyses`,{method:`POST`,headers:{"Content-Type":`application/json`},body:JSON.stringify({sources:t.map(e=>({url:e.url})),folder_id:e?.folder_id||void 0})});if(W(n)){window.location.assign(`/login`);return}let r=await G(n,`Le lancement de la Cross Analyse`);if(!n.ok||r?.error)throw Error(r?.error||`Le lancement a échoué.`);try{window.localStorage.setItem(Cl,JSON.stringify({id:r.job_id,crossId:r.cross_analysis_id,t0:Date.now()}))}catch{}await Se(r.cross_analysis_id)}catch(e){D(`error`),te(e.message||`Une erreur est survenue.`)}}}function we(){D(`input`),F(null),ee(!1),R(null),te(``),u(``),f(``),y(0),o(`link`),c(`youtube`),m(null),g(!1),C(`Collez le lien d’une vidéo YouTube.`),T(``),oe(!1),ce([])}let[Te,Ee]=(0,_.useState)([]);(0,_.useEffect)(()=>{let e=!0,t=K(`/history`);if(t&&typeof t.then==`function`)return t.then(async t=>{if(!t||!t.ok)return;let n=JSON.parse(await t.text()),r=Array.isArray(n)?n:Array.isArray(n?.history)?n.history:[];e&&Ee(r.filter(e=>e&&e.analysis_id))}).catch(()=>{}),()=>{e=!1}},[]);function De(e){K(`/history/${encodeURIComponent(e)}/load`).then(async t=>{let n=JSON.parse(await t.text());if(!t.ok||!n?.full_result)throw Error(n?.error||`introuvable`);F({...n.full_result,analysis_id:n.full_result.analysis_id||e}),k(`single`),D(`result`)}).catch(()=>{C(`Cette analyse n’a pas pu être rouverte. Réessayez dans un instant.`),T(`error`)})}(0,_.useEffect)(()=>{P?.analysis_id&&i&&i({id:P.analysis_id,title:String(P.video_context||P.source_label||`Dernière analyse`).slice(0,90)})},[P?.analysis_id]),(0,_.useEffect)(()=>{let e=L?.cross_analysis_id;e&&i&&[`completed`,`partial_success`].includes(L?.status)&&i({id:e,cross:!0,title:`Cross Analyse · ${zu(L.result||{}).map(e=>e.title).filter(Boolean).join(` × `)||e}`.slice(0,90)})},[L?.cross_analysis_id,L?.status]),(0,_.useEffect)(()=>{r?.id&&De(r.id),r?.crossId&&Oe(r.crossId),r?.startCross&&(we(),ae||he())},[r?.at]);function Oe(e){K(`/api/v2/agents/psychologue/cross-analyses/${encodeURIComponent(e)}`).then(async e=>{let t=JSON.parse(await e.text());if(!e.ok||!t?.success||!t.result)throw Error(t?.error||`introuvable`);R(t),k(`cross`),D(`result`)}).catch(()=>{C(`Cette Cross Analyse n’a pas pu être rouverte. Réessayez dans un instant.`),T(`error`)})}function ke(e){e===`cross`?(ae||he(),fe(`link`)):(ae&&he(),fe(e)),window.setTimeout(()=>{let e=document.querySelector(`.gv2-psy-composer-field`);e&&typeof e.focus==`function`&&e.focus(),e&&typeof e.scrollIntoView==`function`&&e.scrollIntoView({block:`center`,behavior:`smooth`})},0)}let Ae=(0,H.jsx)(Sl,{status:E===`loading`?`loading`:E===`error`?`error`:`input`,progress:A,step:M,isCross:O===`cross`,errorMessage:z,onRetry:we,tab:a,onTabChange:fe,platform:s,onPlatformChange:pe,url:l,onUrlChange:me,manualText:d,onManualTextChange:f,checking:b,onCheck:V,statusMsg:S,statusTone:w,previewCount:v,file:p,uploading:h,onFilePick:e=>ge(e),onColumnChange:e=>ge(p?.raw,e),onLaunch:_e,crossMode:ae,crossSources:se,onToggleCross:he,onAddCrossSource:ve,onRemoveCrossSource:ye,onMoveCrossSource:be,onClearCrossSources:xe,onLaunchCross:Ce,recentAnalyses:Te,onOpenAnalysis:De,onSuggest:ke,onNavigateAgent:n});return E===`result`&&O===`cross`&&L&&(Ae=(0,H.jsx)(Ku,{data:L,onReset:we,onNavigateAgent:n,onStrategeCross:ue,onStrategeAudience:le,onCreateurAudience:B})),E===`result`&&P&&(Ae=(0,H.jsx)(ju,{data:P,partial:I,onReset:we,onGoToStratege:le,onGoToCreateur:n?()=>n(`createur`):void 0})),(0,H.jsx)(`div`,{className:`gv2-psy-view`,children:Ae})}var Ju=`gabriel_voice_mode`,Yu=`gabriel_voice_id`;function Xu(e){return String(e).replace(/\*\*(.+?)\*\*/g,`$1`).replace(/(^|[\s(«'"])\*(?=\S)([^*\n]+?)\*(?=$|[\s).,;:!?»'"])/g,`$1$2`)}function Z(e){return e==null?``:typeof e==`object`?Array.isArray(e)?e.every(e=>typeof e!=`object`||!e)?Xu(String(e)):e.map(Z).filter(Boolean).join(` · `):Object.entries(e).map(([e,t])=>{let n=Z(t);return n?`${e.replace(/_/g,` `).replace(/^./,e=>e.toUpperCase())} : ${n}`:``}).filter(Boolean).join(` — `):Xu(e)}function Q({title:e,hint:t,children:n}){return(0,H.jsxs)(`div`,{className:`gv2-strat-section`,children:[(0,H.jsx)(`div`,{className:`gv2-strat-section-title`,children:e}),t&&(0,H.jsx)(`p`,{className:`gv2-strat-section-hint`,children:t}),n]})}function Zu({title:e,children:t,tone:n}){return(0,H.jsxs)(`div`,{className:`gv2-strat-card${n?` is-${n}`:``}`,children:[e&&(0,H.jsx)(`div`,{className:`gv2-strat-card-title`,children:e}),t]})}function $({label:e,value:t}){return t?(0,H.jsxs)(`div`,{className:`gv2-strat-row`,children:[(0,H.jsx)(`span`,{children:e}),(0,H.jsx)(`p`,{children:Z(t)})]}):null}function Qu({label:e,value:t,suffix:n}){return t==null||t===``?null:(0,H.jsxs)(`div`,{className:`gv2-strat-metric`,children:[(0,H.jsxs)(`div`,{className:`gv2-strat-metric-val`,children:[t,n]}),(0,H.jsx)(`div`,{className:`gv2-strat-metric-lbl`,children:e})]})}function $u({items:e,tone:t}){let n=(Array.isArray(e)?e:[]).filter(Boolean);return n.length?(0,H.jsx)(`div`,{className:`gv2-strat-chips${t?` is-${t}`:``}`,children:n.map((e,t)=>(0,H.jsx)(`span`,{children:Z(e)},t))}):null}function ed({active:e=!0,bars:t=26,height:n=26,minimal:r=!1}){let i=Array.from({length:r?Math.min(t,14):t});return(0,H.jsx)(`div`,{className:`gv2-ariane-waveform`,"aria-hidden":`true`,style:{height:n},children:i.map((t,i)=>{let a=(Math.sin(i*1.7)+1)/2,o=r?.18+a*.3:.16+a*.84;return(0,H.jsx)(`span`,{style:{height:`${Math.max(3,o*n)}px`,opacity:e?.35+o*.55:.22,animation:e?`gv2-ariane-wave-bar ${.9+i%5*.16}s ease-in-out ${i*.045}s infinite`:`none`}},i)})})}function td(e){return`${Math.floor(e/60).toString().padStart(2,`0`)}:${Math.floor(e%60).toString().padStart(2,`0`)}`}function nd({d:e}){let t=e.executive_decision||{},n=t.one_sentence_decision||e.decision_centrale||e.message_central||``,r=e.audience_psychology_used,i=r&&typeof r==`object`?[[`Problème principal`,r.main_problem],[`Désir principal`,r.main_desire],[`Peur principale`,r.main_fear],[`Frustration clé`,r.main_frustration],[`Objection principale`,r.main_objection],[`Valeurs recherchées`,r.values_sought]].filter(([,e])=>e):[],a=Number(t.confidence_score),o=Number.isFinite(a)?Math.round(a<=1?a*100:a):null,s=e.offre_recommandee;return(0,H.jsxs)(H.Fragment,{children:[n&&(0,H.jsx)(Q,{title:`Décision prioritaire`,children:(0,H.jsxs)(Zu,{tone:`priority`,children:[(0,H.jsx)(`p`,{className:`gv2-strat-hero-text`,children:Z(n)}),t.what_to_do_this_week&&(0,H.jsx)($,{label:`Cette semaine`,value:t.what_to_do_this_week})]})}),(o!==null||s&&s.prix_recommande||t.expected_business_impact)&&(0,H.jsx)(Q,{title:`Indicateurs`,children:(0,H.jsxs)(`div`,{className:`gv2-strat-metrics`,children:[(0,H.jsx)(Qu,{label:`Alignement audience`,value:o,suffix:`%`}),(0,H.jsx)(Qu,{label:`Prix recommandé`,value:s&&s.prix_recommande}),(0,H.jsx)(Qu,{label:`Impact attendu`,value:t.expected_business_impact})]})}),e.decision_centrale&&e.decision_centrale!==n&&(0,H.jsx)(Q,{title:`Décision centrale`,children:(0,H.jsx)(Zu,{children:(0,H.jsx)(`p`,{className:`gv2-strat-hero-text`,children:Z(e.decision_centrale)})})}),e.objectif_utilisateur_reformule&&(0,H.jsx)(Q,{title:`Objectif reformulé`,children:(0,H.jsx)(Zu,{children:(0,H.jsx)($,{label:``,value:e.objectif_utilisateur_reformule})})}),i.length>0&&(0,H.jsx)(Q,{title:`Psychologie audience · signaux actifs`,children:(0,H.jsxs)(Zu,{children:[(0,H.jsx)(`div`,{className:`gv2-strat-metrics gv2-strat-metrics--text`,children:i.map(([e,t])=>(0,H.jsxs)(`div`,{className:`gv2-strat-metric`,children:[(0,H.jsx)(`div`,{className:`gv2-strat-metric-val gv2-strat-metric-val--text`,children:Z(t)}),(0,H.jsx)(`div`,{className:`gv2-strat-metric-lbl`,children:e})]},e))}),(0,H.jsx)($u,{items:r.decision_drivers})]})})]})}function rd({d:e}){let t=e.value_to_create||{},n=t.core_value||t.why_this_value_matters||t.what_the_audience_is_really_buying||t.value_gap_in_current_business,r=e.message_central||e.angle_positionnel,i=e.offre_recommandee,a=e.pricing_logic,o=a&&(a.fourchette||a.valeur_percue||a.niveau_douleur||a.capacite_paiement||a.justification),s=e.immediate_monetization_plan,c=Array.isArray(e.opportunites_marche)?e.opportunites_marche:[];return(0,H.jsxs)(H.Fragment,{children:[(n||r)&&(0,H.jsx)(Q,{title:`Valeur à créer`,children:(0,H.jsxs)(Zu,{children:[t.core_value&&(0,H.jsx)(`p`,{className:`gv2-strat-hero-text`,children:Z(t.core_value)}),(0,H.jsx)($,{label:`Pourquoi cette valeur compte`,value:t.why_this_value_matters}),(0,H.jsx)($,{label:`Ce que l'audience achète vraiment`,value:t.what_the_audience_is_really_buying}),(0,H.jsx)($,{label:`Écart à combler`,value:t.value_gap_in_current_business}),(0,H.jsx)($,{label:`Message central`,value:e.message_central}),(0,H.jsx)($,{label:`Angle positionnel`,value:e.angle_positionnel})]})}),i&&typeof i==`object`&&(0,H.jsx)(Q,{title:`Offre recommandée`,children:(0,H.jsxs)(Zu,{tone:`priority`,children:[i.nom&&(0,H.jsx)(`p`,{className:`gv2-strat-hero-text`,children:Z(i.nom)}),(0,H.jsx)($,{label:`Cible précise`,value:i.cible_precise}),(0,H.jsx)($,{label:`Problème traité`,value:i.probleme_traite}),(0,H.jsx)($,{label:`Promesse`,value:i.promesse}),(0,H.jsx)($,{label:`Résultat attendu`,value:i.resultat_attendu}),(0,H.jsx)($,{label:`Format`,value:i.format}),Array.isArray(i.livrables)&&i.livrables.length>0&&(0,H.jsxs)(`div`,{className:`gv2-strat-row`,children:[(0,H.jsx)(`span`,{children:`Livrables`}),(0,H.jsx)(`ul`,{children:i.livrables.map((e,t)=>(0,H.jsx)(`li`,{children:Z(e)},t))})]}),(0,H.jsx)($,{label:`Message de vente`,value:i.message_de_vente}),i.prix_recommande&&(0,H.jsx)(`div`,{className:`gv2-strat-metrics`,children:(0,H.jsx)(Qu,{label:`Prix recommandé`,value:i.prix_recommande})}),(0,H.jsx)($,{label:`Justification prix`,value:i.justification_prix}),(0,H.jsx)($u,{items:i.canaux_acquisition}),(0,H.jsx)($u,{items:i.objections_a_traiter,tone:`neg`})]})}),o&&(0,H.jsx)(Q,{title:`Logique de prix`,children:(0,H.jsxs)(Zu,{children:[(0,H.jsx)($,{label:`Fourchette`,value:a.fourchette}),(0,H.jsxs)(`div`,{className:`gv2-strat-metrics`,children:[(0,H.jsx)(Qu,{label:`Valeur perçue`,value:a.valeur_percue}),(0,H.jsx)(Qu,{label:`Douleur marché`,value:a.niveau_douleur}),(0,H.jsx)(Qu,{label:`Budget cible`,value:a.capacite_paiement})]}),(0,H.jsx)($,{label:`Justification`,value:a.justification})]})}),s&&(s.next_24h_action||s.next_7_days_action)&&(0,H.jsx)(Q,{title:`Plan de monétisation immédiate`,children:(0,H.jsxs)(Zu,{tone:`priority`,children:[(0,H.jsx)($,{label:`24 h`,value:s.next_24h_action}),(0,H.jsx)($,{label:`7 jours`,value:s.next_7_days_action}),(0,H.jsx)($,{label:`Offre à tester`,value:s.first_offer_to_test}),(0,H.jsx)($,{label:`Call to action`,value:s.first_call_to_action}),(0,H.jsx)($,{label:`Métrique clé`,value:s.metric_to_watch})]})}),c.length>0&&(0,H.jsx)(Q,{title:`Opportunités de marché détectées`,children:c.map((e,t)=>e&&typeof e==`object`&&(0,H.jsxs)(Zu,{children:[(0,H.jsx)($,{label:`Décision recommandée`,value:e.recommandation}),(0,H.jsx)($,{label:`Action concrète`,value:e.action_concrete}),(0,H.jsx)($,{label:`Mesure de succès`,value:e.mesure_succes}),(0,H.jsx)($,{label:`Signal détecté`,value:e.signal}),(0,H.jsx)($,{label:`Lecture`,value:e.lecture_strategique})]},t))})]})}function id({d:e}){let t=e.social_media_decision,n=e.strategie_contenu;return(0,H.jsxs)(H.Fragment,{children:[t&&t.best_platform&&(0,H.jsx)(Q,{title:`Décision réseau social`,children:(0,H.jsxs)(Zu,{tone:`priority`,children:[(0,H.jsx)(`p`,{className:`gv2-strat-hero-text`,children:Z(t.best_platform)}),(0,H.jsx)($,{label:`Format`,value:t.best_content_format}),(0,H.jsx)($,{label:`Angle`,value:t.main_content_angle}),(0,H.jsx)($,{label:`Premier contenu à créer`,value:t.first_post_or_video_to_create}),(0,H.jsx)($,{label:`Priorité cette semaine`,value:t.posting_priority_this_week})]})}),n&&typeof n==`object`&&(0,H.jsx)(Q,{title:`Stratégie de contenu`,children:(0,H.jsxs)(Zu,{children:[(0,H.jsx)($,{label:`Format prioritaire`,value:n.format_prioritaire}),(0,H.jsx)($,{label:`Fréquence`,value:n.frequence}),(0,H.jsx)($,{label:`Tonalité`,value:n.tonalite}),(0,H.jsx)($u,{items:n.sujets_a_eviter,tone:`neg`})]})})]})}function ad({d:e}){let t=Array.isArray(e.recommandations_prioritaires)?e.recommandations_prioritaires:[],n=e.plan_90_jours,r=n&&typeof n==`object`?[[`phase_1`,`Phase 1`],[`phase_2`,`Phase 2`],[`phase_3`,`Phase 3`]].map(([e,t])=>[e,t,n[e]]).filter(([,,e])=>e):[];return(0,H.jsxs)(H.Fragment,{children:[t.length>0&&(0,H.jsx)(Q,{title:`Priorités, classées par impact`,children:t.map((e,t)=>{let n=typeof e==`object`&&e;return(0,H.jsxs)(Zu,{children:[(0,H.jsx)(`p`,{className:`gv2-strat-hero-text`,children:Z(n?e.action:e)}),n&&(0,H.jsx)($,{label:`Signal`,value:e.signal_source}),n&&(0,H.jsx)($,{label:`Impact`,value:e.impact}),n&&(0,H.jsx)($,{label:`Délai`,value:e.delai})]},t)})}),r.length>0&&(0,H.jsx)(Q,{title:`Plan d'action 90 jours`,children:r.map(([e,t,n])=>(0,H.jsxs)(Zu,{title:n.titre||t,children:[n.periode&&(0,H.jsx)(`p`,{className:`gv2-strat-phase-period`,children:Z(n.periode)}),Array.isArray(n.objectifs)&&n.objectifs.length>0&&(0,H.jsxs)(`div`,{className:`gv2-strat-row`,children:[(0,H.jsx)(`span`,{children:`Objectifs`}),(0,H.jsx)(`ul`,{children:n.objectifs.map((e,t)=>(0,H.jsx)(`li`,{children:Z(e)},t))})]}),Array.isArray(n.taches)&&n.taches.length>0&&(0,H.jsxs)(`div`,{className:`gv2-strat-row`,children:[(0,H.jsx)(`span`,{children:`Tâches`}),(0,H.jsx)(`ul`,{children:n.taches.map((e,t)=>(0,H.jsx)(`li`,{children:Z(e)},t))})]}),Array.isArray(n.livrables)&&n.livrables.length>0&&(0,H.jsxs)(`div`,{className:`gv2-strat-row`,children:[(0,H.jsx)(`span`,{children:`Livrables`}),(0,H.jsx)(`ul`,{children:n.livrables.map((e,t)=>(0,H.jsx)(`li`,{children:Z(e)},t))})]}),(0,H.jsx)($u,{items:n.kpis}),Array.isArray(n.decisions_cles)&&n.decisions_cles.length>0&&(0,H.jsxs)(`div`,{className:`gv2-strat-row`,children:[(0,H.jsx)(`span`,{children:`Décisions clés`}),(0,H.jsx)(`ul`,{children:n.decisions_cles.map((e,t)=>(0,H.jsx)(`li`,{children:Z(e)},t))})]})]},e))})]})}function od({d:e}){let t=e.executive_decision||{},n=e.critique_strategique,r=typeof t.confidence_score==`number`?Math.round(t.confidence_score*100):null,i=n&&typeof n.confidence_score_independant==`number`?Math.round(n.confidence_score_independant*100):null,a=Array.isArray(e.risques)?e.risques:[],o=Array.isArray(e.indicateurs_succes)?e.indicateurs_succes:[],s=Array.isArray(e.questions_a_clarifier)?e.questions_a_clarifier:[],c=(n&&n.verdict||``).toLowerCase(),l=c.includes(`fragile`)?`Fragile`:c.includes(`ajust`)?`À ajuster`:c?`Solide`:``;return(0,H.jsxs)(H.Fragment,{children:[(r!==null||i!==null)&&(0,H.jsx)(Q,{title:`Deux lectures de la même décision`,hint:`L'écart entre les deux comptent plus que le premier chiffre seul.`,children:(0,H.jsxs)(`div`,{className:`gv2-strat-metrics`,children:[(0,H.jsx)(Qu,{label:`Score du Stratège`,value:r,suffix:`%`}),(0,H.jsx)(Qu,{label:`Relecture critique indépendante`,value:i,suffix:`%`})]})}),n&&typeof n==`object`&&(n.point_faible_principal||n.angle_contrarien)&&(0,H.jsx)(Q,{title:`Regard critique · 2ᵉ avis indépendant`,children:(0,H.jsxs)(Zu,{tone:c.includes(`fragile`)?`neg`:void 0,children:[l&&(0,H.jsx)(`div`,{className:`gv2-strat-verdict`,children:l}),(0,H.jsx)($,{label:`Point faible principal`,value:n.point_faible_principal}),(0,H.jsx)($,{label:`Ce qu'un contrarien ferait`,value:n.angle_contrarien}),(0,H.jsx)($,{label:`Risque non couvert`,value:n.risque_non_couvert}),(0,H.jsx)($,{label:`Ajustement recommandé`,value:n.ajustement_recommande})]})}),a.length>0&&(0,H.jsx)(Q,{title:`Risques à surveiller`,children:a.map((e,t)=>{let n=typeof e==`object`&&e;return(0,H.jsxs)(Zu,{tone:`neg`,children:[(0,H.jsx)(`p`,{children:Z(n?e.risque:e)}),n&&e.mitigation&&(0,H.jsx)($,{label:`Mitigation`,value:e.mitigation})]},t)})}),o.length>0&&(0,H.jsx)(Q,{title:`Indicateurs de succès`,children:(0,H.jsx)(Zu,{children:(0,H.jsx)($u,{items:o})})}),s.length>0&&(0,H.jsx)(Q,{title:`Points à clarifier`,children:(0,H.jsx)(Zu,{children:s.map((e,t)=>(0,H.jsx)(`p`,{className:`gv2-strat-question`,children:Z(e)},t))})})]})}var sd=[{key:`synthese`,num:`01`,label:`Synthèse`,Comp:nd},{key:`marketing`,num:`02`,label:`Marketing`,Comp:rd},{key:`branding`,num:`03`,label:`Branding`,Comp:id},{key:`plan`,num:`04`,label:`Plan d'action`,Comp:ad},{key:`decision`,num:`05`,label:`Décision`,Comp:od}];function cd(e){let t=new Blob([JSON.stringify(e,null,2)],{type:`application/json;charset=utf-8`}),n=window.URL.createObjectURL(t),r=document.createElement(`a`);r.href=n,r.download=`strategie-gabriel.json`,document.body.appendChild(r),r.click(),r.remove(),window.URL.revokeObjectURL(n)}function ld({strategy:e,onGoToCreateur:t,onRestart:n}){let[r,i]=(0,_.useState)(sd[0].key),[a,o]=(0,_.useState)(0),s=(0,_.useRef)(null);return(0,_.useEffect)(()=>{let e=s.current;if(!e)return;function t(){let t=e.scrollHeight-e.clientHeight;o(t>0?Math.min(100,Math.max(0,e.scrollTop/t*100)):0)}return t(),e.addEventListener(`scroll`,t,{passive:!0}),()=>e.removeEventListener(`scroll`,t)},[]),(0,_.useEffect)(()=>{let e=s.current;if(!e||typeof IntersectionObserver>`u`)return;let t=new IntersectionObserver(e=>{let t=e.filter(e=>e.isIntersecting).sort((e,t)=>e.boundingClientRect.top-t.boundingClientRect.top)[0];t&&i(t.target.id.replace(`gv2-ariane-report-`,``))},{root:e,rootMargin:`-20% 0px -60% 0px`,threshold:0});return sd.forEach(n=>{let r=e.querySelector(`#gv2-ariane-report-${n.key}`);r&&t.observe(r)}),()=>t.disconnect()},[]),(0,H.jsxs)(`div`,{className:`gv2-ariane-report`,ref:s,children:[(0,H.jsx)(`div`,{className:`gv2-ariane-report-progress`,children:(0,H.jsx)(`div`,{style:{width:`${a}%`}})}),(0,H.jsxs)(`div`,{className:`gv2-ariane-report-wrap`,children:[(0,H.jsx)(`nav`,{className:`gv2-ariane-report-nav`,"aria-label":`Sections de votre stratégie`,children:(0,H.jsx)(`ul`,{children:sd.map(e=>(0,H.jsx)(`li`,{children:(0,H.jsxs)(`a`,{href:`#gv2-ariane-report-${e.key}`,className:r===e.key?`is-active`:``,onClick:t=>{t.preventDefault(),s.current?.querySelector(`#gv2-ariane-report-${e.key}`)?.scrollIntoView({behavior:`smooth`,block:`start`})},children:[(0,H.jsx)(`span`,{children:e.num}),(0,H.jsx)(`span`,{children:e.label})]})},e.key))})}),(0,H.jsxs)(`article`,{className:`gv2-ariane-report-article`,children:[(0,H.jsxs)(`header`,{className:`gv2-ariane-report-header`,children:[(0,H.jsxs)(`div`,{children:[(0,H.jsx)(`span`,{className:`gv2-ariane-label`,style:{color:`var(--muted)`},children:`Ariane · Restitution`}),(0,H.jsx)(`h1`,{children:`Votre stratégie`}),(0,H.jsx)(`p`,{children:`Diagnostic établi à partir de l'entretien stratégique conduit par Ariane.`})]}),(0,H.jsxs)(`div`,{className:`gv2-ariane-report-actions`,children:[(0,H.jsxs)(`button`,{type:`button`,onClick:()=>cd(e),children:[(0,H.jsx)(U,{name:`download`,size:14}),`Télécharger`]}),n&&(0,H.jsxs)(`button`,{type:`button`,onClick:n,children:[(0,H.jsx)(U,{name:`refresh`,size:14}),`Nouvelle analyse`]})]})]}),sd.map(t=>(0,H.jsxs)(`section`,{id:`gv2-ariane-report-${t.key}`,className:`gv2-ariane-report-section`,children:[(0,H.jsxs)(`div`,{className:`gv2-ariane-report-section-head`,children:[(0,H.jsx)(`span`,{children:t.num}),(0,H.jsx)(`h2`,{children:t.label})]}),(0,H.jsx)(t.Comp,{d:e})]},t.key)),t&&(0,H.jsx)(`div`,{className:`gv2-ariane-report-to-createur`,children:(0,H.jsx)(`button`,{type:`button`,className:`gv2-strat-to-createur`,onClick:t,children:`Le Créateur →`})})]})]})]})}function ud(e){return new Promise(t=>setTimeout(t,e))}var dd=6e5;function fd(e){try{let t=window.sessionStorage.getItem(`gabriel_for_stratege`);if(!t)return null;window.sessionStorage.removeItem(`gabriel_for_stratege`);let n=JSON.parse(t),r=Date.now()-Number(n?.created_at||0);return n?.schema_version===1&&n.analysis_id&&e&&n.folder_id===e&&r>=0&&r<=dd?n:null}catch{return null}}function pd({role:e,content:t,observation:n,hero:r}){let i=e===`user`,a=i?`Vous`:`Ariane`;return r?(0,H.jsx)(`div`,{className:`gv2-ariane-hero gv2-ariane-stream-in`,children:(0,H.jsx)(`h1`,{children:Z(t)})}):(0,H.jsxs)(`article`,{className:`gv2-strat-msg gv2-strat-msg--${i?`user`:`assistant`}`,children:[(0,H.jsx)(`header`,{className:`gv2-strat-msg-meta`,children:(0,H.jsx)(`strong`,{children:a})}),!i&&n&&(0,H.jsxs)(`aside`,{className:`gv2-strat-observation`,children:[(0,H.jsx)(`span`,{children:`Observation stratégique`}),(0,H.jsx)(`p`,{children:Z(n)})]}),(0,H.jsx)(`div`,{className:`gv2-strat-msg-body`,children:Z(t)})]})}function md({workspace:e,onWorkspaceChange:t,onNavigateAgent:n,onInterviewChange:r}){let[i,a]=(0,_.useState)(`loading`),[o,s]=(0,_.useState)(null),[c,l]=(0,_.useState)(e?.strategy_id||``),[u,d]=(0,_.useState)(``),[f,p]=(0,_.useState)(null),[m,h]=(0,_.useState)(0),[g,v]=(0,_.useState)([]),[y,b]=(0,_.useState)(null),[x,S]=(0,_.useState)(``),[C,w]=(0,_.useState)(!1),[T,E]=(0,_.useState)(null),[D,O]=(0,_.useState)(``),[k,A]=(0,_.useState)(!1),[j,M]=(0,_.useState)(null);(0,_.useEffect)(()=>{r?.({contextProgress:y,currentDimension:x,interviewReady:C,messages:g})},[r,y,x,C,g]);let[N,P]=(0,_.useState)(!1),[F,I]=(0,_.useState)(``),[ee,L]=(0,_.useState)(!1),[R,z]=(0,_.useState)(``),[te,ne]=(0,_.useState)(null),[re,ie]=(0,_.useState)(!1),[ae,oe]=(0,_.useState)(!1),[se,ce]=(0,_.useState)(0),le=(0,_.useRef)(null),ue=(0,_.useRef)(``),B=(0,_.useRef)(``),V=(0,_.useRef)(!1),de=(0,_.useRef)(null),fe=(0,_.useRef)([]),pe=(0,_.useRef)(null),me=(0,_.useRef)(null),he=(0,_.useRef)(!0),ge=(0,_.useRef)(!1),_e=(0,_.useRef)(null);(0,_.useEffect)(()=>(he.current=!0,()=>{he.current=!1}),[]),(0,_.useEffect)(()=>{e?.folder_id&&M(fd(e.folder_id))},[e?.folder_id]),(0,_.useEffect)(()=>{l(e?.strategy_id||``)},[e?.strategy_id]),(0,_.useEffect)(()=>{try{L(window.localStorage.getItem(Ju)===`1`),z(window.localStorage.getItem(Yu)||``)}catch{}},[]),(0,_.useEffect)(()=>()=>{let e=le.current;if(e)try{e.abort()}catch{}let t=de.current;t&&t.state!==`inactive`&&t.stop(),pe.current?.getTracks().forEach(e=>e.stop()),me.current?.pause()},[]),(0,_.useEffect)(()=>{ee&&te===null&&K(`/voice/voices`).then(async e=>{let t=await G(e,`Les voix disponibles`).catch(()=>null);ne(t?.available&&t.voices||[])}).catch(()=>ne([]))},[ee,te]),(0,_.useEffect)(()=>{if(!N){ce(0);return}let e=window.setInterval(()=>ce(e=>e+1),1e3);return()=>window.clearInterval(e)},[N]);function ve(){me.current?.pause(),oe(!0)}function ye(){me.current?.play().catch(()=>{}),oe(!1)}function be(){let e=me.current;e&&(e.currentTime=0,e.play().catch(()=>{}),oe(!1))}function xe(){L(e=>{let t=!e;try{window.localStorage.setItem(Ju,t?`1`:`0`)}catch{}return t})}function Se(e){z(e);try{window.localStorage.setItem(Yu,e)}catch{}}async function Ce(e,t){if(e&&ee)try{let n=await K(`/voice/speak`,{method:`POST`,headers:{"Content-Type":`application/json`},body:JSON.stringify({text:e,voice_id:R||void 0,pace:t||void 0})});if(!n.ok)return;let r=await n.blob(),i=new Audio(URL.createObjectURL(r));me.current=i,i.onplay=()=>{ie(!0),oe(!1)},i.onended=()=>{ie(!1),oe(!1)},i.onerror=()=>{ie(!1),oe(!1)},await i.play()}catch{ie(!1)}}function we(e,t){let n=String(t||``).trim();return n?`${e}${e&&!/\s$/.test(e)?` `:``}${n}`:e}function Te(e){let t=new e;ue.current=D,B.current=``,V.current=!1,t.lang=`fr-FR`,t.continuous=!0,t.interimResults=!0,t.maxAlternatives=1,t.onstart=()=>P(!0),t.onresult=e=>{let t=``;for(let n=e.resultIndex;n<e.results.length;n+=1){let r=e.results[n]?.[0]?.transcript||``;e.results[n].isFinal?B.current+=`${r} `:t+=r}let n=`${B.current}${t}`.trim();n&&(V.current=!0,O(we(ue.current,n)))},t.onerror=e=>{let t={"not-allowed":`Autorisez le microphone dans votre navigateur pour utiliser la dictée.`,"service-not-allowed":`La reconnaissance vocale est bloquée par votre navigateur.`,"audio-capture":`Aucun microphone n’a été détecté.`,network:`La reconnaissance vocale nécessite une connexion internet.`}[e.error]||(e.error===`no-speech`?`Je ne vous ai pas entendu. Réessayez en parlant un peu plus près du micro.`:`La dictée a été interrompue. Réessayez dans un instant.`);I(t)},t.onend=()=>{le.current===t&&(le.current=null),P(!1),V.current||I(e=>e||`Je ne vous ai pas entendu. Vérifiez votre microphone puis réessayez.`)},le.current=t;try{t.start()}catch{le.current=null,I(`La dictée ne peut pas démarrer. Réessayez dans un instant.`)}}async function Ee(){if(!navigator.mediaDevices?.getUserMedia||!window.MediaRecorder)I(`La dictée n’est pas disponible dans ce navigateur. Utilisez une version récente de Chrome, Edge ou Safari.`);else try{let e=await navigator.mediaDevices.getUserMedia({audio:!0}),t=[`audio/webm;codecs=opus`,`audio/webm`,`audio/mp4`].find(e=>window.MediaRecorder.isTypeSupported?.(e)),n=t?new MediaRecorder(e,{mimeType:t}):new MediaRecorder(e);pe.current=e,fe.current=[],n.ondataavailable=e=>{e.data?.size&&fe.current.push(e.data)},n.onerror=()=>{P(!1),I(`La dictée a été interrompue. Réessayez dans un instant.`)},n.onstop=async()=>{let e=n.mimeType||`audio/webm`,t=new Blob(fe.current,{type:e});if(pe.current?.getTracks().forEach(e=>e.stop()),pe.current=null,de.current=null,P(!1),!t.size)return;let r=new FormData;r.append(`audio`,t,`dictee-gabriel.${e.includes(`mp4`)?`m4a`:`webm`}`);try{let e=await K(`/voice/transcribe`,{method:`POST`,body:r});if(W(e)){window.location.assign(`/login`);return}let t=await G(e,`Le service de dictée`);if(!e.ok||!t?.text)throw Error(e.status===503?`La transcription serveur n’est pas disponible. Essayez depuis Chrome pour utiliser la dictée intégrée.`:t?.error||`La transcription est indisponible.`);O(e=>`${e}${e&&!/\s$/.test(e)?` `:``}${String(t.text).trim()}`)}catch(e){I(e.message||`La transcription est indisponible.`)}},de.current=n,n.start(250),P(!0)}catch(e){I(e?.name===`NotAllowedError`?`Autorisez le microphone dans votre navigateur pour utiliser la dictée.`:`Le microphone est indisponible. Vérifiez qu’il est connecté puis réessayez.`)}}function De(){I(``);let e=le.current;if(e){try{e.stop()}catch{}return}let t=de.current;if(t&&t.state!==`inactive`){t.stop();return}let n=window.SpeechRecognition||window.webkitSpeechRecognition;n?Te(n):Ee()}(0,_.useEffect)(()=>{let t=!0;async function n(){if(!e)a(`interview`);else{if(e.strategy_id){a(`loading`);try{let n=await K(`/strategies/${encodeURIComponent(e.strategy_id)}`);if(W(n)){window.location.assign(`/login`);return}let r=await G(n,`La stratégie`);if(!t)return;if(n.ok&&r?.success){l(e.strategy_id),s(r.strategy_result||{}),a(`result`);return}}catch{}}t&&(e.analysis_id?a(`need_analysis`):a(`interview`))}}return n(),()=>{t=!1}},[e?.folder_id,e?.strategy_id,e?.analysis_id]),(0,_.useEffect)(()=>{if(i!==`interview`||g.length>0)return;let t=!0;return(async()=>{try{let n=await K(`/business-context?folder_id=${encodeURIComponent(e?.folder_id||``)}`);if(W(n)){window.location.assign(`/login`);return}let r=await G(n,`L’entretien stratégique`);if(!t)return;v(Array.isArray(r.messages)?r.messages:[]),b(r.context_progress||null),S(r.current_dimension||``),w(!!r.is_ready),E(r.updated_context||{})}catch{t&&v([{role:`assistant`,content:`Parlez-moi de votre entreprise — je pose une question à la fois.`}])}})(),()=>{t=!1}},[i,e?.folder_id]),(0,_.useEffect)(()=>{if(i!==`interview`||!g.length)return;let e=()=>_e.current?.scrollIntoView?.({block:`nearest`,behavior:`smooth`});if(typeof window.requestAnimationFrame==`function`){let t=window.requestAnimationFrame(e);return()=>window.cancelAnimationFrame?.(t)}e()},[i,g.length,k]);async function Oe(){let e=D.trim();if(e&&!k){A(!0),O(``),v(t=>[...t,{role:`user`,content:e}]);try{let t=await K(`/context-chat`,{method:`POST`,headers:{"Content-Type":`application/json`},body:JSON.stringify({message:e})});if(W(t)){window.location.assign(`/login`);return}let n=await G(t,`L’entretien stratégique`);if(n?.error){v(e=>[...e,{role:`assistant`,content:n.error}]);return}let r=n.reply?.display_text||(typeof n.reply==`string`?n.reply:``);r&&v(e=>[...e,{role:`assistant`,content:r,observation:n.reply?.strategic_observation||``}]),Ce(n.reply?.speech_text||r,n.reply?.speech_profile?.pace),b(n.context_progress||null),S(n.current_dimension||``),w(!!n.is_ready),E(n.updated_context||{})}catch{v(e=>[...e,{role:`assistant`,content:`Erreur réseau — réessayez.`}])}finally{A(!1)}}}async function ke(e){if(!ge.current){ge.current=!0;try{for(let n=0;n<160;n+=1){if(await ud(3e3),!he.current)return;let r=await K(`/status/${encodeURIComponent(e)}`);if(W(r)){window.location.assign(`/login`);return}let i=await G(r,`Le suivi de la stratégie`);if(i.status===`done`){let e=i.data||{},n=e.data?.strategie||e;l(e.strategy_id||e.data?.strategy_id||``),s(n),a(`result`),await t?.();return}if([`error`,`interrupted`,`not_found`].includes(i.status))throw Error(i.error||`La génération a été interrompue.`);h(Math.min(95,Math.round((n+1)/160*100)))}throw Error(`La génération prend plus de temps que prévu.`)}catch(e){if(!he.current)return;a(`error`),d(e.message||`Une erreur est survenue.`)}finally{ge.current=!1}}}let Ae=(0,_.useRef)(null);async function je(e){a(`generating`),h(0),d(``),p(null);try{let n=await K(`/strategize`,{method:`POST`,headers:{"Content-Type":`application/json`},body:JSON.stringify(e)});if(W(n)){window.location.assign(`/login`);return}let r=await G(n,`La génération de la stratégie`);if(n.status===402||r?.error===`credits_insufficient`){a(`error`),d(`Il vous faut ${r.cost} crédits pour une stratégie — il vous en reste ${r.credits}.`);return}if(r?.missing_fields){p(r.missing_fields),a(`need_profile`);return}if(r?.error){a(`error`),d(r.error);return}if(r?.job_id){await ke(r.job_id);return}if(r?.success){l(r.strategy_id||``),s(r),a(`result`),await t?.();return}a(`error`),d(`Réponse inattendue du serveur.`)}catch(e){a(`error`),d(e.message||`Erreur réseau. Réessayez.`)}}function Me(){Ae.current=`classique`,je({analysis_id:e.analysis_id,folder_id:e.folder_id})}function Ne(){Ae.current=`entretien`,je(j?{analysis_id:j.analysis_id,brain_profile:T,folder_id:e?.folder_id}:{context:T,psycho_summary:j?.psycho_brief||``,folder_id:e?.folder_id})}function Pe(){Ae.current===`entretien`?Ne():Me()}if(i===`loading`)return(0,H.jsx)(`div`,{className:`gv2-strat-empty`,children:(0,H.jsx)(`p`,{children:`Chargement…`})});if(i===`need_analysis`)return(0,H.jsxs)(`div`,{className:`gv2-strat-empty is-calm`,children:[(0,H.jsx)(`span`,{className:`gv2-strat-empty-eyebrow`,children:`Ariane · Stratégie`}),(0,H.jsx)(`h2`,{children:`Une analyse est disponible pour ce dossier`}),(0,H.jsx)(`p`,{children:`Gabriel peut générer une stratégie à partir de l'analyse d'audience déjà réalisée et de votre profil business.`}),(0,H.jsxs)(`div`,{className:`gv2-strat-empty-actions`,children:[(0,H.jsx)(`button`,{type:`button`,className:`gv2-strat-primary`,onClick:Me,children:`Générer la stratégie`}),(0,H.jsx)(`button`,{type:`button`,className:`gv2-strat-secondary`,onClick:()=>a(`interview`),children:`Ou décrivez-moi votre activité maintenant →`})]})]});if(i===`need_profile`)return(0,H.jsxs)(`div`,{className:`gv2-strat-empty is-calm`,children:[(0,H.jsx)(`span`,{className:`gv2-strat-empty-eyebrow`,children:`Ariane · Stratégie`}),(0,H.jsx)(`h2`,{children:`Votre profil business est incomplet`}),(0,H.jsx)(`p`,{children:`Gabriel a besoin de ces informations pour générer une stratégie fiable :`}),(0,H.jsx)(`ul`,{className:`gv2-strat-missing`,children:(f||[]).map(e=>(0,H.jsx)(`li`,{children:e.label},e.field))}),(0,H.jsx)(`a`,{href:`/orchestrateur?section=settings`,children:`Compléter mon profil business`}),(0,H.jsx)(`button`,{type:`button`,className:`gv2-strat-secondary`,onClick:()=>a(`interview`),children:`Ou décrivez-moi votre activité maintenant`})]});if(i===`generating`){let e=[`Synthèse`,`Diagnostic`,`Priorités`,`Plan d'action`],t=e[Math.min(e.length-1,Math.floor(m/100*e.length))];return(0,H.jsxs)(`div`,{className:`gv2-ariane-generating`,children:[(0,H.jsxs)(`svg`,{viewBox:`0 0 240 60`,"aria-hidden":`true`,children:[(0,H.jsx)(`line`,{x1:`4`,y1:`30`,x2:`236`,y2:`30`,className:`gv2-ariane-generating-line`}),(0,H.jsx)(`line`,{x1:`4`,y1:`30`,x2:`236`,y2:`30`,className:`gv2-ariane-generating-line--fill`,style:{strokeDashoffset:240-m/100*240}}),[60,120,180].map(e=>(0,H.jsx)(`circle`,{cx:e,cy:`30`,r:`2`,fill:`var(--strategist-slate)`},e)),(0,H.jsx)(`circle`,{cx:`4`,cy:`30`,r:`3`,fill:`var(--ink)`})]}),(0,H.jsx)(`h2`,{children:`Ariane structure votre stratégie`}),(0,H.jsxs)(`p`,{className:`gv2-ariane-label gv2-ariane-generating-phase gv2-ariane-stream-in`,"aria-live":`polite`,children:[t,(0,H.jsx)(`span`,{className:`gv2-ariane-caret`,children:`_`})]},t)]})}if(i===`error`)return(0,H.jsxs)(`div`,{className:`gv2-strat-empty`,children:[(0,H.jsx)(`h2`,{children:`Un problème est survenu`}),(0,H.jsx)(`p`,{children:u}),(0,H.jsx)(`button`,{type:`button`,onClick:Pe,children:`Réessayer`})]});if(i===`interview`){let e=typeof window<`u`&&(window.SpeechRecognition||window.webkitSpeechRecognition||navigator.mediaDevices?.getUserMedia&&window.MediaRecorder),t=g.some(e=>e.role===`user`),n=N?`listening`:F?`error`:re?`speaking`:null;return(0,H.jsxs)(`div`,{className:`gv2-strat-interview${t?` has-replies`:` is-opening`}`,children:[j&&(0,H.jsx)(`div`,{className:`gv2-strat-banner`,children:`Analyse Psychologue détectée — elle sera prise en compte dans la stratégie.`}),(0,H.jsxs)(`div`,{className:`gv2-strat-chat`,role:`log`,"aria-live":`polite`,"aria-label":`Conversation avec Ariane`,children:[g.map((e,n)=>(0,H.jsx)(pd,{role:e.role,content:e.content,observation:e.observation||e.strategic_observation,hero:!t&&n===0&&e.role!==`user`},n)),k&&(0,H.jsx)(`article`,{className:`gv2-strat-msg gv2-strat-msg--assistant is-thinking`,children:(0,H.jsx)(`span`,{children:`Ariane structure votre réponse…`})}),!t&&e&&!n&&(0,H.jsx)(`div`,{className:`gv2-ariane-hero-actions`,children:(0,H.jsx)(`button`,{type:`button`,className:`gv2-ariane-hero-cta`,onClick:De,children:`Commencer l'entretien à la voix`})}),n===`listening`&&(0,H.jsxs)(`div`,{className:`gv2-ariane-voice-card gv2-ariane-stream-in`,children:[(0,H.jsxs)(`div`,{className:`gv2-ariane-voice-head`,children:[(0,H.jsx)(`span`,{className:`gv2-ariane-label`,style:{color:`var(--strategist-slate)`},children:`Ariane · Écoute`}),(0,H.jsx)(`span`,{className:`gv2-ariane-voice-timer`,children:td(se)})]}),(0,H.jsx)(ed,{active:!0}),(0,H.jsxs)(`p`,{className:`gv2-ariane-voice-transcript${D?``:` is-empty`}`,children:[D||`Parlez, je transcris au fil de l'eau…`,(0,H.jsx)(`span`,{className:`gv2-ariane-caret`,children:`▍`})]}),(0,H.jsxs)(`div`,{className:`gv2-ariane-voice-actions`,children:[(0,H.jsx)(`button`,{type:`button`,className:`gv2-ariane-voice-btn gv2-ariane-voice-btn--primary`,onClick:De,children:`Terminer`}),(0,H.jsx)(`button`,{type:`button`,className:`gv2-ariane-voice-btn`,onClick:()=>{De(),O(``)},children:`Annuler`})]})]}),n===`error`&&(0,H.jsxs)(`div`,{className:`gv2-ariane-voice-card is-error gv2-ariane-stream-in`,children:[(0,H.jsx)(`span`,{className:`gv2-ariane-label gv2-ariane-voice-eyebrow--error`,children:`Ariane · Micro indisponible`}),(0,H.jsx)(`p`,{className:`gv2-ariane-voice-transcript`,style:{marginTop:10},children:F}),(0,H.jsxs)(`div`,{className:`gv2-ariane-voice-actions`,children:[(0,H.jsx)(`button`,{type:`button`,className:`gv2-ariane-voice-btn`,onClick:De,children:`Réessayer le micro`}),(0,H.jsx)(`button`,{type:`button`,className:`gv2-ariane-voice-btn gv2-ariane-voice-btn--primary`,onClick:()=>I(``),children:`Continuer par écrit`})]})]}),n===`speaking`&&(0,H.jsx)(ms,{className:`gv2-ariane-glass`,children:(0,H.jsxs)(`div`,{className:`gv2-ariane-voice-card gv2-ariane-player gv2-ariane-stream-in`,role:`group`,"aria-label":`Lecture de la réponse d'Ariane`,children:[(0,H.jsx)(`button`,{type:`button`,className:`gv2-ariane-player-main`,onClick:ae?ye:ve,"aria-label":ae?`Reprendre`:`Pause`,title:ae?`Reprendre`:`Pause`,children:(0,H.jsx)(U,{name:ae?`play`:`pause`,size:22})}),(0,H.jsxs)(`div`,{className:`gv2-ariane-player-body`,children:[(0,H.jsx)(`span`,{className:`gv2-ariane-player-title`,children:`Ariane vous répond`}),(0,H.jsx)(ed,{active:!ae,bars:40,height:34})]}),(0,H.jsx)(`button`,{type:`button`,className:`gv2-ariane-player-side`,onClick:be,"aria-label":`Réécouter`,title:`Réécouter`,children:(0,H.jsx)(U,{name:`refresh`,size:18})})]})}),C&&(0,H.jsxs)(`div`,{className:`gv2-ariane-ready gv2-ariane-stream-in`,children:[(0,H.jsx)(`p`,{children:`Votre situation est suffisamment claire. Ariane peut maintenant produire votre diagnostic.`}),(0,H.jsx)(`button`,{type:`button`,className:`gv2-ariane-ready-cta`,onClick:Ne,children:`Générer mon diagnostic stratégique →`})]}),(0,H.jsx)(`div`,{ref:_e,"aria-hidden":`true`})]}),(0,H.jsxs)(`div`,{className:`gv2-strat-composer-zone`,children:[(0,H.jsxs)(`div`,{className:`gv2-strat-composer-tools`,children:[(0,H.jsxs)(`button`,{type:`button`,className:`gv2-strat-voice-toggle${ee?` is-active`:``}`,onClick:xe,"aria-pressed":ee,title:`Gabriel lit ses réponses à voix haute`,children:[(0,H.jsx)(`span`,{className:`gv2-strat-voice-dot`}),`Mode vocal`]}),ee&&te&&te.length>0&&(0,H.jsxs)(`select`,{className:`gv2-strat-voice-picker`,value:R,onChange:e=>Se(e.target.value),"aria-label":`Voix de Gabriel`,children:[(0,H.jsx)(`option`,{value:``,children:`Voix par défaut`}),te.map(e=>(0,H.jsx)(`option`,{value:e.id,children:e.label},e.id))]})]}),(0,H.jsxs)(`div`,{className:`gv2-strat-composer`,children:[e&&(0,H.jsx)(`button`,{type:`button`,className:`gv2-strat-mic${N?` is-recording`:``}`,onClick:De,disabled:k,"aria-label":N?`Arrêter la dictée`:`Répondre à la voix`,title:`Parler`,children:(0,H.jsx)(U,{name:N?`square`:`mic`,size:N?12:16})}),(0,H.jsx)(`textarea`,{rows:1,value:D,placeholder:n===`listening`?`Micro actif…`:`Écrivez votre réponse…`,disabled:k||n===`listening`,onChange:e=>O(e.target.value),onKeyDown:e=>{e.key===`Enter`&&!e.shiftKey&&(e.preventDefault(),Oe())}}),(0,H.jsx)(`button`,{type:`button`,className:`gv2-strat-send`,disabled:k||!D.trim(),onClick:Oe,"aria-label":`Envoyer`,children:`Envoyer`})]}),(0,H.jsxs)(`p`,{className:`gv2-strat-composer-hint`,children:[`Entrée pour envoyer `,(0,H.jsx)(`span`,{children:`·`}),` Maj + Entrée pour un saut de ligne`]})]})]})}return(0,H.jsx)(ld,{strategy:o||{},onGoToCreateur:c?()=>n?.(`createur`,{source:`stratege`,folder_id:e?.folder_id,strategy_id:c}):void 0,onRestart:()=>{s(null),v([]),b(null),w(!1),a(`interview`)}})}var hd={free:`Gratuit`,early_access:`Early Access`,standard:`Standard`,pme:`PME`},gd=[{id:`early_access`,badge:`🚀 Offre de lancement`,nom:`Early Access`,prix:`29 €`,desc:`Tarif verrouillé tant que l'offre de lancement est ouverte`,accent:`featured`,cta:`Rejoindre en Early Access — 29 €/mois`,fonctionnalites:[`Analyses illimitées`,`Dashboard psychologique complet`,`Personas détaillés (Jung · Frankl · Munroe)`,`Agent Stratège complet + entretien vocal`,`Agent Créateur — scripts & posts`,`Mémoire stratégique`,`Export PDF professionnel`,`Historique illimité`]},{id:`standard`,nom:`Standard`,prix:`49 €`,desc:`Tarif permanent pour les nouveaux clients`,cta:`Commencer — 49 €/mois`,fonctionnalites:[`Analyses illimitées`,`Dashboard psychologique complet`,`Personas détaillés (Jung · Frankl · Munroe)`,`Agent Stratège complet + entretien vocal`,`Agent Créateur — scripts & posts`,`Mémoire stratégique`,`Export PDF professionnel`,`Historique illimité`]},{id:`pme`,badge:`🏢 Équipe & besoins avancés`,nom:`PME`,prix:`99 €`,desc:`Pour un usage équipe ou des besoins avancés`,accent:`premium`,cta:`Commencer — 99 €/mois`,fonctionnalites:[`Tout de Standard`,`Volume d'usage pensé pour une équipe`,`Audit stratégique personnalisé à l'onboarding`,`Support prioritaire`]}];function _d({offre:e,actif:t,enCours:n,onChoisir:r}){return(0,H.jsxs)(`div`,{className:`gv2-tarifs-card${e.accent?` is-${e.accent}`:``}${t?` is-active`:``}`,children:[e.badge&&(0,H.jsx)(`div`,{className:`gv2-tarifs-badge`,children:e.badge}),(0,H.jsx)(`div`,{className:`gv2-tarifs-tier`,children:`Gabriel`}),(0,H.jsx)(`div`,{className:`gv2-tarifs-name`,children:e.nom}),(0,H.jsxs)(`div`,{className:`gv2-tarifs-price`,children:[e.prix,(0,H.jsx)(`span`,{children:`/mois`})]}),(0,H.jsx)(`p`,{className:`gv2-tarifs-desc`,children:e.desc}),(0,H.jsx)(`ul`,{className:`gv2-tarifs-features`,children:e.fonctionnalites.map(e=>(0,H.jsxs)(`li`,{children:[(0,H.jsx)(`span`,{"aria-hidden":`true`,children:`✓`}),e]},e))}),t?(0,H.jsx)(`div`,{className:`gv2-tarifs-current`,children:`Votre plan actuel`}):(0,H.jsx)(`button`,{type:`button`,className:`gv2-tarifs-cta`,disabled:n,onClick:()=>r(e.id),children:n?`Redirection…`:e.cta})]})}function vd(){let[e,t]=(0,_.useState)(null),[n,r]=(0,_.useState)(``),[i,a]=(0,_.useState)(``);(0,_.useEffect)(()=>{let e=!0;return K(`/usage`).then(async n=>{let r=await G(n,`Votre consommation`).catch(()=>null);e&&t(r||{})}).catch(()=>{e&&t({})}),()=>{e=!1}},[]);let o=e?.plan||`free`;async function s(e){r(e),a(``);try{let t=await K(`/stripe/checkout`,{method:`POST`,headers:{"Content-Type":`application/json`},body:JSON.stringify({plan:e})});if(W(t)){window.location.assign(`/login`);return}let n=await G(t,`Le paiement`).catch(()=>null);if(t.ok&&n?.url){window.location.assign(n.url);return}a(n?.error||`Erreur lors du paiement. Réessayez.`)}catch{a(`Erreur réseau. Réessayez.`)}r(``)}return(0,H.jsxs)(`div`,{className:`gv2-tarifs`,children:[(0,H.jsxs)(`header`,{className:`gv2-tarifs-hero`,children:[(0,H.jsx)(`h1`,{children:`Une offre simple, sans version gratuite permanente`}),(0,H.jsx)(`p`,{children:`Trois plans, un seul principe : Gabriel doit vous faire gagner du temps dès le premier jour, pas dans six mois.`}),o!==`free`&&(0,H.jsxs)(`div`,{className:`gv2-tarifs-current-badge`,children:[`Plan actuel : `,hd[o]||o]})]}),(0,H.jsx)(`div`,{className:`gv2-tarifs-grid`,children:gd.map(e=>(0,H.jsx)(_d,{offre:e,actif:e.id===o,enCours:n===e.id,onChoisir:s},e.id))}),i&&(0,H.jsx)(`p`,{className:`gv2-tarifs-error`,role:`alert`,children:i}),(0,H.jsxs)(`p`,{className:`gv2-tarifs-note`,children:[`Paiement sécurisé par Stripe · Annulable à tout moment · Sans engagement`,(0,H.jsx)(`br`,{}),`Vous hésitez encore ? `,(0,H.jsx)(`a`,{href:`mailto:gabrielaigithub@gmail.com?subject=Demande%20d'audit%20Gabriel`,children:`Demandez une démo gratuite ou un audit personnalisé`}),`.`]})]})}var yd=[{eyebrow:`Gabriel · Analyse du comportement humain`,title:`Comprenez ce que votre audience exprime vraiment.`,body:`Gabriel analyse les commentaires, avis et réactions de vos audiences, puis transforme cette compréhension en stratégie et en contenu.`},{eyebrow:`01 · Se repérer`,title:`Le Menu organise votre travail.`,body:`Vous y retrouvez vos workspaces, les agents disponibles, l’activité et les paramètres. Il peut rester fermé pour vous laisser toute la place nécessaire.`,action:`menu`,actionLabel:`Afficher le menu`},{eyebrow:`02 · Garder le cap`,title:`Les onglets indiquent où vous êtes.`,body:`Le Psychologue ouvre la barre supérieure. Ariane et le Créateur prolongent son analyse ; Conversation, Activité et Mémoire restent à portée de clic.`},{eyebrow:`03 · Avancer`,title:`Commencez par une analyse.`,body:`Collez le lien d’une vidéo, quelques avis ou un fichier. Le résultat s’ouvre sur une synthèse, puis se transmet à Ariane et au Créateur sans perdre le contexte.`},{eyebrow:`04 · Personnaliser`,title:`Adaptez l’espace à votre rythme.`,body:`Le mode sombre est disponible dans Menu › Paramètres. Vous pouvez également ajuster les panneaux et revenir au guide à tout moment depuis ce même menu.`}];function bd({onFinish:e,onOpenNavigation:t}){let[n,r]=(0,_.useState)(0),i=(0,_.useRef)(null),a=yd[n],o=n===yd.length-1;(0,_.useEffect)(()=>{i.current?.focus()},[n]),(0,_.useEffect)(()=>{let t=t=>{t.key===`Escape`&&e()};return window.addEventListener(`keydown`,t),()=>window.removeEventListener(`keydown`,t)},[e]);function s(){o?e():r(e=>e+1)}return(0,H.jsx)(`div`,{className:`gv2-onboarding`,role:`presentation`,children:(0,H.jsxs)(`section`,{className:`gv2-onboarding-card`,role:`dialog`,"aria-modal":`true`,"aria-labelledby":`gv2-onboarding-title`,"aria-describedby":`gv2-onboarding-copy`,children:[(0,H.jsxs)(`header`,{children:[(0,H.jsxs)(`div`,{className:`gv2-onboarding-progress`,children:[(0,H.jsx)(`span`,{children:`Guide rapide`}),(0,H.jsxs)(`strong`,{children:[n+1,` / `,yd.length]})]}),(0,H.jsx)(`button`,{type:`button`,onClick:e,"aria-label":`Passer le guide`,title:`Passer le guide`,children:(0,H.jsx)(U,{name:`close`,size:17})})]}),(0,H.jsxs)(`div`,{className:`gv2-onboarding-content`,children:[(0,H.jsx)(`p`,{children:a.eyebrow}),(0,H.jsx)(`h2`,{id:`gv2-onboarding-title`,children:a.title}),(0,H.jsx)(`div`,{id:`gv2-onboarding-copy`,children:a.body}),a.action===`menu`&&(0,H.jsxs)(`button`,{className:`gv2-onboarding-link`,type:`button`,onClick:t,children:[(0,H.jsx)(U,{name:`menu`,size:15}),a.actionLabel]})]}),(0,H.jsxs)(`footer`,{children:[(0,H.jsx)(`div`,{className:`gv2-onboarding-dots`,"aria-label":`Étape ${n+1} sur ${yd.length}`,children:yd.map((e,t)=>(0,H.jsx)(`i`,{className:t===n?`is-active`:``},e.title))}),(0,H.jsxs)(`div`,{className:`gv2-onboarding-actions`,children:[n>0&&(0,H.jsx)(`button`,{className:`gv2-onboarding-back`,type:`button`,onClick:()=>r(e=>e-1),children:`Précédent`}),(0,H.jsxs)(`button`,{className:`gv2-onboarding-next`,type:`button`,ref:i,onClick:s,children:[o?`Terminer`:`Suivant`,(0,H.jsx)(U,{name:`chevronRight`,size:16})]})]})]})]})})}function xd(){return new Intl.DateTimeFormat(`fr-FR`,{hour:`2-digit`,minute:`2-digit`}).format(new Date)}function Sd(e,t,n={}){return{id:`${e}-${Date.now()}-${Math.random().toString(16).slice(2)}`,role:e,content:t,createdAt:xd(),...n}}function Cd(e){return Sd(`assistant`,`Bonjour. Je suis Gabriel${e?.title?` dans « ${e.title} »`:``}.\nDécrivez ce que vous souhaitez accomplir : je vais clarifier votre besoin et orchestrer la suite.`)}function wd(e){return new Promise(t=>window.setTimeout(t,e))}var Td=264,Ed=238,Dd=300,Od=320,kd=240,Ad=460,jd=360,Md=280,Nd=560,Pd={contentType:`script`,channel:``,tone:`expert`,emotion:``,creativity:50,objective:``,generateVariant:!1},Fd=`gabriel-v2:onboarding-completed-2026`;function Id(e,t,n){return Math.max(t,Math.min(n,e))}function Ld(e,t,n,r){try{let i=Number(window.localStorage.getItem(e));return Number.isFinite(i)?Id(i,n,r):t}catch{return t}}function Rd(e,t=!1){try{let n=window.localStorage.getItem(e);return n===null?t:n===`true`}catch{return t}}function zd(){try{return!window.localStorage.getItem(Fd)}catch{return!1}}function Bd(e){let t=e?.credits??e?.credit_balance??e?.remaining_credits??e?.balance,n=Number(t);return Number.isFinite(n)&&n>=0?Math.floor(n):null}function Vd(e){return e===null?`—`:new Intl.NumberFormat(`fr-FR`).format(e)}function Hd(e){return`gabriel-v2:conversation:${e||`inbox`}`}function Ud(e,t,n={}){let r={ready:`selected`,running:`running`,completed:`completed`,failed:`failed`}[t]||`pending`;return{...e,...n,status:t,agents:(e.agents||[]).map(e=>({...e,status:r}))}}function Wd({icon:e,title:t,detail:n,complete:r=!1}){return(0,H.jsxs)(`article`,{className:`gv2-workspace-item${r?` is-complete`:``}`,children:[(0,H.jsx)(`span`,{children:(0,H.jsx)(U,{name:e,size:17})}),(0,H.jsxs)(`div`,{children:[(0,H.jsx)(`strong`,{children:t}),(0,H.jsx)(`p`,{children:n})]}),r&&(0,H.jsx)(U,{name:`check`,size:16})]})}function Gd({workspace:e,mission:t}){let n=!!e,r=!!e?.analysis_id,i=!!e?.strategy_id,a=!!e?.creator_output_id;return(0,H.jsxs)(`section`,{className:`gv2-workspace-overview`,"aria-label":`Activité du workspace`,children:[(0,H.jsxs)(`header`,{children:[(0,H.jsx)(`p`,{children:`Suivi du workspace`}),(0,H.jsx)(`h1`,{children:`Activité`}),(0,H.jsx)(`span`,{children:n?`Les étapes réellement enregistrées dans cette session.`:`Commencez une conversation pour créer votre première session.`})]}),t&&(0,H.jsxs)(`section`,{className:`gv2-workspace-mission gv2-workspace-mission--${t.status||`ready`}`,children:[(0,H.jsx)(U,{name:`sparkle`,size:17}),(0,H.jsxs)(`div`,{children:[(0,H.jsx)(`strong`,{children:t.title}),(0,H.jsx)(`p`,{children:t.status===`running`?`Mission en cours · ${t.progress||0}%`:t.status===`completed`?`Mission terminée`:t.objective||`Mission préparée par Gabriel`})]})]}),(0,H.jsxs)(`div`,{className:`gv2-workspace-item-list`,children:[(0,H.jsx)(Wd,{icon:`link`,title:`Source`,detail:e?.source_summary||(e?.source_type?`Source ${e.source_type} reliée au workspace.`:`Aucune source reliée pour le moment.`),complete:!!e?.source_type}),(0,H.jsx)(Wd,{icon:`knowledge`,title:`Analyse d’audience`,detail:r?`Analyse disponible dans le Psychologue.`:`Prête à être lancée quand une source est fournie.`,complete:r}),(0,H.jsx)(Wd,{icon:`sparkle`,title:`Décision stratégique`,detail:i?`Décision disponible dans le Stratège.`:`Disponible après l’analyse d’audience.`,complete:i}),(0,H.jsx)(Wd,{icon:`briefcase`,title:`Créations`,detail:a?`Contenu enregistré dans le Créateur.`:`Disponible quand une direction est validée.`,complete:a})]})]})}function Kd({workspace:e}){let t=!!e,n=[e?.objective&&{icon:`message`,title:`Objectif déclaré`,detail:e.objective},e?.source_summary&&{icon:`link`,title:`Source reliée`,detail:e.source_summary},e?.analysis_id&&{icon:`knowledge`,title:`Analyse d’audience`,detail:`Le Psychologue a enregistré une analyse dans cette session.`},e?.strategy_id&&{icon:`sparkle`,title:`Décision stratégique`,detail:`Le Stratège a enregistré une décision dans cette session.`},e?.creator_output_id&&{icon:`briefcase`,title:`Création`,detail:`Le Créateur a enregistré un contenu dans cette session.`}].filter(Boolean);return(0,H.jsxs)(`section`,{className:`gv2-workspace-overview`,"aria-label":`Mémoire du workspace`,children:[(0,H.jsxs)(`header`,{children:[(0,H.jsx)(`p`,{children:`Contexte conservé`}),(0,H.jsx)(`h1`,{children:`Mémoire`}),(0,H.jsx)(`span`,{children:t?`Gabriel ne réutilise ici que les éléments liés à ce workspace.`:`Aucun élément n’est encore associé à cette nouvelle conversation.`})]}),(0,H.jsx)(`div`,{className:`gv2-workspace-item-list`,children:n.length?n.map(e=>(0,H.jsx)(Wd,{...e,complete:!0},e.title)):(0,H.jsxs)(`div`,{className:`gv2-workspace-empty`,children:[(0,H.jsx)(U,{name:`archive`,size:20}),(0,H.jsx)(`p`,{children:`La mémoire se construit au fil de la conversation, des sources et des productions validées.`})]})})]})}function qd({bootstrap:e}){let[t,n]=(0,_.useState)(e.workspaces||[]),[r,i]=(0,_.useState)(e.selectedWorkspaceId||null),[a,o]=(0,_.useState)(()=>$i(window.location.href)),s=(0,_.useMemo)(()=>t.find(e=>e.folder_id===r)||null,[t,r]),[c,l]=(0,_.useState)(()=>[Cd(null)]),[u,d]=(0,_.useState)(null),[f,p]=(0,_.useState)(!1),[m,h]=(0,_.useState)(!1),[g,v]=(0,_.useState)(null),[y,b]=(0,_.useState)(``),[x,S]=(0,_.useState)(()=>Ld(`gabriel-v2:left-width`,Td,Ed,Dd)),[C,w]=(0,_.useState)(()=>Ld(`gabriel-v2:right-width`,Od,kd,Ad)),T=(0,_.useMemo)(()=>new URL(window.location.href).searchParams.get(`section`),[]),[E,D]=(0,_.useState)(()=>!T&&Rd(`gabriel-v2:sidebar-compact-spatial`,!0)),[O,k]=(0,_.useState)(()=>Rd(`gabriel-v2:context-collapsed`,!0)),[A,j]=(0,_.useState)(()=>Ld(`gabriel-v2:discussion-width`,jd,Md,Nd)),[M,N]=(0,_.useState)(()=>Rd(`gabriel-v2:discussion-collapsed`)),[P,F]=(0,_.useState)(null),[I,ee]=(0,_.useState)(null),[L,R]=(0,_.useState)(null),[z,te]=(0,_.useState)(()=>{try{return window.localStorage.getItem(`gabriel-v2:theme`)!==`light`}catch{return!0}}),[ne,re]=(0,_.useState)(zd),[ie,ae]=(0,_.useState)(Pd),[oe,se]=(0,_.useState)(!1),[ce,le]=(0,_.useState)(null),[ue,B]=(0,_.useState)(null),[V,de]=(0,_.useState)(!1),[fe,pe]=(0,_.useState)(!1),[me,he]=(0,_.useState)(!1),[ge,_e]=(0,_.useState)(()=>Bd(e.user)),[ve,ye]=(0,_.useState)(!1),[be,xe]=(0,_.useState)(``),Se=(0,_.useRef)(!0),Ce=(0,_.useRef)(null),we=(0,_.useRef)(null),Te=(0,_.useRef)(null),Ee=(0,_.useRef)(null),De=(0,_.useCallback)(async()=>{try{let e=await K(`/credits`);if(W(e)){window.location.assign(`/login`);return}if(!e.ok)return;let t=Bd(await G(e,`Vos crédits`));t!==null&&Se.current&&_e(t)}catch{}},[]),Oe=(0,_.useCallback)(async()=>{if(!r)return null;try{let e=await K(`/api/v2/workspaces/${encodeURIComponent(r)}`);if(W(e))return window.location.assign(`/login`),null;let t=await G(e,`Le workspace`);return!e.ok||!t?.workspace?null:(n(e=>e.map(e=>e.folder_id===t.workspace.folder_id?t.workspace:e)),t.workspace)}catch{return null}},[r]),ke=(0,_.useCallback)(async(e,t)=>{if(!e)return!1;let r=null;n(n=>n.map(n=>n.folder_id===e?(r=n,{...n,...t}):n));try{let n=await K(`/api/folders/${encodeURIComponent(e)}`,{method:`PATCH`,headers:{"Content-Type":`application/json`},body:JSON.stringify(t)});if(W(n))return window.location.assign(`/login`),!1;let r=await G(n,`La mise à jour du workspace`);if(!n.ok||!r?.success)throw Error(r?.error||``);return!0}catch{return r&&n(t=>t.map(t=>t.folder_id===e?r:t)),xe(`Cet objectif n’a pas pu être enregistré. Réessayez.`),!1}},[]);(0,_.useEffect)(()=>{try{window.localStorage.setItem(`gabriel-v2:left-width`,String(x)),window.localStorage.setItem(`gabriel-v2:right-width`,String(C)),window.localStorage.setItem(`gabriel-v2:sidebar-compact-spatial`,String(E)),window.localStorage.setItem(`gabriel-v2:context-collapsed`,String(O)),window.localStorage.setItem(`gabriel-v2:discussion-width`,String(A)),window.localStorage.setItem(`gabriel-v2:discussion-collapsed`,String(M))}catch{}},[x,C,E,O,A,M]),(0,_.useEffect)(()=>{try{window.localStorage.setItem(`gabriel-v2:theme`,z?`dark`:`light`)}catch{}document.documentElement.dataset.gabrielV2Theme=z?`dark`:`light`,document.documentElement.style.colorScheme=z?`dark`:`light`,document.querySelector(`meta[name="theme-color"]`)?.setAttribute(`content`,z?`#131313`:`#f5f5f7`)},[z]),(0,_.useLayoutEffect)(()=>{if(window.matchMedia(`(prefers-reduced-motion: reduce)`).matches||!Ce.current)return;let e=zi.context(()=>{zi.fromTo(`.gv2-sidebar, .gv2-main-column, .gv2-context-panel`,{autoAlpha:0,y:12},{autoAlpha:1,y:0,duration:.55,ease:`power2.out`,stagger:.07,clearProps:`transform`}),zi.fromTo(`.gv2-workspace-header, .gv2-composer`,{autoAlpha:0,y:8},{autoAlpha:1,y:0,duration:.42,delay:.16,ease:`power2.out`,stagger:.08,clearProps:`transform`})},Ce);return()=>e.revert()},[]),(0,_.useEffect)(()=>()=>{Se.current=!1},[]),(0,_.useEffect)(()=>{if(!V)return;let e=e=>{e.key!==`Escape`&&Te.current?.contains(e.target)||de(!1)};return document.addEventListener(`pointerdown`,e),document.addEventListener(`keydown`,e),()=>{document.removeEventListener(`pointerdown`,e),document.removeEventListener(`keydown`,e)}},[V]),(0,_.useEffect)(()=>{if(!me)return;let e=e=>{(e.key===`Escape`||e.type===`pointerdown`&&!Ee.current?.contains(e.target))&&he(!1)};return document.addEventListener(`pointerdown`,e),document.addEventListener(`keydown`,e),()=>{document.removeEventListener(`pointerdown`,e),document.removeEventListener(`keydown`,e)}},[me]),(0,_.useEffect)(()=>{De();let e=()=>{document.visibilityState===`visible`&&De()};return document.addEventListener(`visibilitychange`,e),()=>document.removeEventListener(`visibilitychange`,e)},[De]);async function Ae(e,t=null){let n=e===`createur`&&t?.source===`stratege`&&t.folder_id===r&&t.strategy_id===s?.strategy_id;if(R(n?{source:`stratege`,folder_id:t.folder_id,strategy_id:t.strategy_id}:null),Xi(e)&&!r)try{await ze(e===`psychologue`?`Nouvelle analyse`:`Nouvel espace de travail`,{openTab:e})}catch(e){xe(e.message||`Impossible de préparer cette session.`)}else o(e),window.history.replaceState({},``,ea(window.location.href,e))}function je(e,t){e===`left`?S(e=>Id(e+t,Ed,Dd)):w(e=>Id(e+t,kd,Ad))}function Me(e,t){if(window.matchMedia(`(max-width: 980px)`).matches)return;t.preventDefault();let n=t.clientX,r=e===`left`?x:C;document.body.classList.add(`gv2-is-resizing`);let i=t=>{let i=t.clientX-n,a=e===`left`?Id(r+i,Ed,Dd):Id(r-i,kd,Ad);e===`left`?S(a):w(a)},a=()=>{document.body.classList.remove(`gv2-is-resizing`),window.removeEventListener(`pointermove`,i),window.removeEventListener(`pointerup`,a),window.removeEventListener(`pointercancel`,a)};window.addEventListener(`pointermove`,i),window.addEventListener(`pointerup`,a),window.addEventListener(`pointercancel`,a)}function Ne(e,t){let n=e===`left`?t.key===`ArrowRight`:t.key===`ArrowLeft`,r=e===`left`?t.key===`ArrowLeft`:t.key===`ArrowRight`;(n||r)&&(t.preventDefault(),je(e,(n?1:-1)*(t.shiftKey?24:12)))}function Pe(e){if(window.matchMedia(`(max-width: 980px)`).matches||M)return;e.preventDefault();let t=e.clientX,n=A;document.body.classList.add(`gv2-is-resizing`);let r=e=>j(Id(n+e.clientX-t,Md,Nd)),i=()=>{document.body.classList.remove(`gv2-is-resizing`),window.removeEventListener(`pointermove`,r),window.removeEventListener(`pointerup`,i),window.removeEventListener(`pointercancel`,i)};window.addEventListener(`pointermove`,r),window.addEventListener(`pointerup`,i),window.addEventListener(`pointercancel`,i)}function Fe(e){if(e.key!==`ArrowLeft`&&e.key!==`ArrowRight`)return;e.preventDefault();let t=e.key===`ArrowRight`?1:-1;j(n=>Id(n+t*(e.shiftKey?24:12),Md,Nd))}(0,_.useEffect)(()=>{let e=!0,t=new URL(window.location.href).searchParams.get(`folder_id`);return K(t?`/api/v2/bootstrap?folder_id=${encodeURIComponent(t)}`:`/api/v2/bootstrap`).then(async e=>{if(W(e))return window.location.assign(`/login`),null;let t=await G(e,`Le chargement de Gabriel`);if(!e.ok||!t?.success)throw Error(t?.error||`Le backend Gabriel est indisponible.`);return t}).then(t=>{let r=Array.isArray(t?.workspaces)?t.workspaces:[];e&&t?.success&&(xe(``),n(r),i(e=>e||t.workspace?.folder_id||null))}).catch(t=>{e&&xe(t.message||`La connexion au backend Gabriel est indisponible.`)}),()=>{e=!1}},[]),(0,_.useEffect)(()=>{let e=!0;if(we.current?.workspaceId===r)return we.current=null,()=>{e=!1};l([Cd(s)]),d(null),v(null),se(!1),le(null),ye(!1);let t=``;try{t=window.localStorage.getItem(Hd(r))||``}catch{}if(!t)return()=>{e=!1};let n=r?`?folder_id=${encodeURIComponent(r)}`:``;return K(`/api/v2/conversations/${encodeURIComponent(t)}${n}`).then(async e=>{if(W(e))return window.location.assign(`/login`),null;let t=await G(e,`La restauration de la conversation`);return e.ok?t:null}).then(n=>{if(!e||!n?.success)return;let r=(n.messages||[]).filter(e=>e&&(e.role===`user`||e.role===`assistant`)&&typeof e.content==`string`).map(e=>Sd(e.role,e.content));r.length&&l(r),v(n.conversation_id||t);let i=Ki(n);i&&d(i)}).catch(()=>{}),()=>{e=!1}},[r]),(0,_.useEffect)(()=>{if(!r||!Xi(a))return;let e=!0,t=async()=>{e&&await Oe()};t();let n=window.setInterval(t,8e3);return()=>{e=!1,window.clearInterval(n)}},[r,Oe,a]);function Ie(e,{openConversation:t=!0}={}){i(e),t&&o(`conversation`);let n=new URL(window.location.href);e?n.searchParams.set(`folder_id`,e):n.searchParams.delete(`folder_id`),window.history.replaceState({},``,n)}function Le(e){Ie(e,{openConversation:!1}),!Xi(a)&&a!==`conversation`&&a!==`activity`&&a!==`memory`&&Ae(Zi)}function Re(){we.current=null,xe(``),Ie(null)}async function ze(e,{openTab:t=`conversation`}={}){let r=await K(`/api/v2/workspaces`,{method:`POST`,headers:{"Content-Type":`application/json`},body:JSON.stringify({title:e,folder_type:`workspace`})});if(W(r)){window.location.assign(`/login`);return}let i=await G(r,`La création du workspace`);if(!r.ok||!i?.success||!i.workspace)throw Error(i?.error||`Impossible de créer le workspace.`);return n(e=>[i.workspace,...e]),Ie(i.workspace.folder_id),o(t),i.workspace}async function Be(e){let t=e?.folder_id;if(!t||y)return;let i=e.title||`ce workspace`;if(window.confirm(`Supprimer « ${i} » de votre liste ?\n\nLes analyses et livrables déjà générés ne seront pas supprimés.`)){b(t),xe(``);try{let e=await K(`/api/folders/${encodeURIComponent(t)}`,{method:`DELETE`});if(W(e)){window.location.assign(`/login`);return}let i=await G(e,`La suppression du workspace`);if(!e.ok||!i?.success)throw Error(i?.error||`Impossible de supprimer ce workspace.`);n(e=>e.filter(e=>e.folder_id!==t)),r===t&&Re()}catch(e){xe(e.message||`Impossible de supprimer ce workspace.`)}finally{Se.current&&b(``)}}}async function Ve(e,t){if(f)return;let i=Sd(`user`,e),a=c.filter(e=>e.role===`user`||e.role===`assistant`).slice(-10).map(e=>({role:e.role,content:e.content}));p(!0);try{let o=null;if(t.length){if(t.length>1)throw Error(`Ajoutez un seul fichier de commentaires à la fois pour lancer une analyse fiable.`);let e=t[0],n=new FormData;n.append(`file`,e,e.name);let r=await K(`/upload-comments-file`,{method:`POST`,body:n});if(W(r)){window.location.assign(`/login`);return}let i=await G(r,`L’import du fichier`);if(!r.ok||!i?.success)throw Error(i?.error||`Le fichier ne contient pas de commentaires exploitables.`);o={filename:e.name,comments:Array.isArray(i.normalized_comments)?i.normalized_comments:[]}}l(e=>[...e,i]);let s=await K(`/api/v2/conversations/messages`,{method:`POST`,headers:{"Content-Type":`application/json`},body:JSON.stringify({message:e,history:a,folder_id:r,conversation_id:g,uploaded_source:o})});if(W(s))return window.location.assign(`/login`),!1;let c=await G(s,`La conversation`);if(!s.ok||c.error)throw Error(c.error||`Une erreur est survenue.`);let u=Ki(c),f=c.conversation_id||g,p=c.workspace?.folder_id||r;if(c.workspace?.folder_id&&c.workspace.folder_id!==r&&(we.current={workspaceId:c.workspace.folder_id},n(e=>[c.workspace,...e.filter(e=>e.folder_id!==c.workspace.folder_id)]),Ie(c.workspace.folder_id)),v(f),f)try{window.localStorage.setItem(Hd(p),f)}catch{}return l(e=>[...e,Sd(`assistant`,c.reply||`Je vous réponds dans un instant.`),...u?[Sd(`event`,``,{mission:u})]:[]]),u&&d(u),!0}catch(e){return l(t=>[...t,Sd(`error`,e.message||`Une erreur de connexion est survenue. Réessayez dans un instant.`)]),!1}finally{p(!1)}}async function He(e){if(!g||!e?.id)return e;let t=await K(`/api/v2/conversations/${encodeURIComponent(g)}/missions/${encodeURIComponent(e.id)}`,{method:`PATCH`,headers:{"Content-Type":`application/json`},body:JSON.stringify({conversation_id:g,folder_id:r,status:e.status,job_id:e.jobId||void 0,progress:e.progress||0,error:e.error||void 0})});if(W(t))throw window.location.assign(`/login`),Error(`Votre session a expiré.`);let n=await G(t,`La synchronisation de la mission`);if(!t.ok)throw Error(n?.error||`Impossible de synchroniser la mission.`);return Ki(n)||e}async function Ue(e,t,n={}){let r=Ud(e,t,n);Se.current&&d(r);try{let e=await He(r);return Se.current&&d(e),e}catch(e){return Se.current&&l(t=>[...t,Sd(`error`,e.message)]),r}}async function We(e){let t=e.jobId;for(let n=0;n<180&&Se.current;n+=1){await wd(2e3);let n=await K(`/api/v2/jobs/${encodeURIComponent(t)}`);if(W(n)){window.location.assign(`/login`);return}let r=await G(n,`Le suivi de la mission`).catch(e=>({error:e.message}));if(!n.ok||!r){await Ue(e,`failed`,{error:r?.error||`Le suivi de la mission est indisponible.`});return}if(r.status===`done`){await Ue(e,`completed`,{progress:100,error:``}),await Oe(),Se.current&&l(e=>[...e,Sd(`assistant`,`L’analyse est terminée et ses résultats sont enregistrés dans ce workspace. Je peux maintenant en faire la synthèse, construire la décision stratégique ou préparer les contenus qui en découlent.`)]);return}if(r.status===`error`||r.status===`interrupted`||r.status===`not_found`){await Ue(e,`failed`,{error:r.error||`La mission n’a pas pu être menée à terme.`});return}let i=Number.isFinite(r.progress)?r.progress:e.progress||0,a=Ud(e,`running`,{progress:i,jobId:t});if(Se.current&&d(a),e=a,i===0||i===100||i%10==0)try{await He(a)}catch{}}await Ue(e,`failed`,{error:`Le suivi a expiré. Le résultat reste disponible dans le workspace si le job a fini.`})}async function Ge(){let e=u;if(e?.execution&&!m){h(!0);try{let t=await K(e.execution.endpoint,{method:e.execution.method||`POST`,headers:{"Content-Type":`application/json`},body:JSON.stringify({...e.execution.payload,folder_id:r})});if(W(t)){window.location.assign(`/login`);return}let n=await G(t,`Le lancement de la mission`);if(!t.ok||!n?.job_id)throw Error(n?.error||`La mission n’a pas pu démarrer.`);let i=Ud(e,`running`,{jobId:n.job_id,progress:1,error:``});d(i),await He(i),await We(i)}catch(t){Se.current&&d(Ud(e,`failed`,{error:t.message||`La mission n’a pas pu démarrer.`}))}finally{Se.current&&h(!1)}}}let Ke=(e.user?.name||e.user?.email||`Nalay`).split(/[\s@]/)[0],qe=Vd(ge),Je=Yi(a),Ye=Ma[a]||`Workspace`,Xe=a===`conversation`&&!u&&!c.some(e=>e.role===`user`),Ze=!!u||[`stratege`,`createur`].includes(Je?.id),Qe=E,$e=Ze?O:!ve;function et(){D(e=>!e)}function tt(){D(!1)}function nt(){try{window.localStorage.setItem(Fd,`true`)}catch{}re(!1)}function rt(){Ze?k(e=>!e):ye(e=>!e)}return(0,_.useEffect)(()=>{pe(!1)},[a,P,r]),(0,_.useEffect)(()=>{if(!fe)return;let e=e=>{e.key===`Escape`&&pe(!1)};return window.addEventListener(`keydown`,e),()=>window.removeEventListener(`keydown`,e)},[fe]),(0,H.jsxs)(`main`,{className:`gv2-shell${fe?` is-mobile-menu-open`:``}${z?` gv2-theme-dark`:``}${Qe?` is-left-collapsed`:``}${$e?` is-right-collapsed`:``}${Xe?` is-landing`:``}`,ref:Ce,style:{"--gv2-left-width":`${Qe?0:x}px`,"--gv2-right-width":`${$e?0:C}px`,"--gv2-discussion-width":`${M?47:A}px`},children:[(0,H.jsx)(ka,{workspaces:t,activeWorkspaceId:r,activeWorkspace:s,activeTab:a,mission:u,onSelectWorkspace:Le,onCreateWorkspace:ze,onDeleteWorkspace:Be,deletingWorkspaceId:y,onSelectConversation:()=>Ae(`conversation`),onStartNewConversation:Re,onStartAnalysis:()=>Ae(Zi),onOpenAnalysis:e=>{F({id:e,at:Date.now()}),Ae(Zi)},onOpenCross:e=>{F({crossId:e,at:Date.now()}),Ae(Zi)},onStartCross:()=>{F({startCross:!0,at:Date.now()}),Ae(Zi)},onSelectAgent:Ae,user:e.user,collapsed:Qe&&!fe,onToggleCollapsed:et,darkMode:z,onToggleDarkMode:()=>te(e=>!e),onStartGuide:()=>re(!0),initialSection:T}),fe&&(0,H.jsx)(`button`,{type:`button`,className:`gv2-mobile-backdrop`,onClick:()=>pe(!1),"aria-label":`Fermer le menu de navigation`}),(0,H.jsxs)(`section`,{className:`gv2-main-column`,children:[(0,H.jsxs)(`header`,{className:`gv2-workspace-header`,children:[(0,H.jsxs)(`div`,{className:`gv2-topline`,children:[(0,H.jsx)(`button`,{type:`button`,className:`gv2-mobile-menu-button`,onClick:()=>pe(!0),"aria-label":`Ouvrir le menu de navigation`,"aria-expanded":fe,children:(0,H.jsx)(U,{name:`menu`,size:18})}),(0,H.jsxs)(`div`,{className:`gv2-workspace-heading`,ref:Te,children:[(0,H.jsxs)(`button`,{type:`button`,className:`gv2-workspace-title`,onClick:()=>de(e=>!e),"aria-expanded":V,"aria-controls":`gv2-workspace-switcher`,children:[(0,H.jsx)(`span`,{children:s?.title||`Nouvel espace de travail`}),(0,H.jsx)(U,{name:`chevronDown`,size:17})]}),V&&(0,H.jsxs)(`div`,{className:`gv2-workspace-switcher`,id:`gv2-workspace-switcher`,role:`menu`,"aria-label":`Choisir un espace de travail`,children:[(0,H.jsxs)(`button`,{type:`button`,className:`gv2-workspace-switcher-new`,role:`menuitem`,onClick:()=>{Re(),de(!1)},children:[(0,H.jsx)(U,{name:`plus`,size:15}),(0,H.jsx)(`span`,{children:`Nouvelle conversation`})]}),(0,H.jsx)(`p`,{children:`Vos espaces de travail`}),(0,H.jsx)(`div`,{children:t.length?t.map(e=>(0,H.jsxs)(`button`,{type:`button`,role:`menuitem`,className:e.folder_id===r?`is-current`:``,onClick:()=>{Le(e.folder_id),de(!1)},children:[(0,H.jsx)(`span`,{children:qi(e.title)}),(0,H.jsx)(`strong`,{children:e.title||`Espace sans titre`}),e.folder_id===r&&(0,H.jsx)(U,{name:`check`,size:14})]},e.folder_id)):(0,H.jsx)(`small`,{children:`Aucun espace de travail enregistré pour le moment.`})})]}),(0,H.jsxs)(`p`,{className:`gv2-navigation-trail`,"aria-label":`Vous êtes ici : ${Ye}`,children:[(0,H.jsx)(`span`,{children:`Espace de travail`}),(0,H.jsx)(U,{name:`chevronRight`,size:12}),(0,H.jsx)(`strong`,{children:Ye})]})]}),(0,H.jsxs)(`div`,{className:`gv2-header-actions`,children:[(0,H.jsx)(`button`,{className:`gv2-header-icon gv2-theme-toggle${z?` is-active`:``}`,type:`button`,onClick:()=>te(e=>!e),"aria-label":z?`Passer au mode clair`:`Passer au mode sombre`,title:z?`Passer au mode clair`:`Passer au mode sombre`,"aria-pressed":z,children:(0,H.jsx)(U,{name:z?`sun`:`moon`,size:18})}),Ze&&(0,H.jsx)(`button`,{className:`gv2-header-icon gv2-context-toggle${a===`createur`?` gv2-context-toggle--atelier`:``}`,type:`button`,onClick:rt,"aria-label":a===`createur`?$e?`Ouvrir l’Atelier`:`Fermer l’Atelier`:$e?`Afficher le contexte du workspace`:`Masquer le contexte du workspace`,title:a===`createur`?$e?`Ouvrir l’Atelier`:`Fermer l’Atelier`:$e?`Afficher le contexte du workspace`:`Masquer le contexte du workspace`,children:a===`createur`?(0,H.jsx)(`span`,{children:`Atelier`}):(0,H.jsx)(U,{name:`sparkle`,size:18})}),(0,H.jsxs)(`div`,{className:`gv2-account-menu-wrap`,ref:Ee,children:[(0,H.jsxs)(`button`,{className:`gv2-header-credit`,type:`button`,onClick:()=>he(e=>!e),"aria-label":`Vos crédits : ${qe}`,title:`Voir vos crédits et les offres`,children:[(0,H.jsx)(U,{name:`sparkle`,size:14}),(0,H.jsx)(`strong`,{children:qe}),(0,H.jsx)(`span`,{children:`crédits`})]}),(0,H.jsx)(`button`,{className:`gv2-header-avatar gv2-header-avatar--button`,type:`button`,onClick:()=>he(e=>!e),"aria-expanded":me,"aria-controls":`gv2-account-menu`,"aria-label":`Ouvrir le menu du compte`,children:qi(e.user?.name||e.user?.email||`Nalay`)}),me&&(0,H.jsxs)(`section`,{className:`gv2-account-menu`,id:`gv2-account-menu`,"aria-label":`Compte et crédits`,children:[(0,H.jsxs)(`header`,{children:[(0,H.jsx)(`span`,{children:qi(e.user?.name||e.user?.email||`Nalay`)}),(0,H.jsxs)(`div`,{children:[(0,H.jsx)(`strong`,{children:e.user?.name||Ke}),(0,H.jsx)(`small`,{children:e.user?.email||`Votre espace Gabriel`})]})]}),(0,H.jsxs)(`div`,{className:`gv2-account-credit-balance`,children:[(0,H.jsxs)(`div`,{children:[(0,H.jsx)(`span`,{children:`Crédits disponibles`}),(0,H.jsx)(`strong`,{children:qe})]}),(0,H.jsx)(`button`,{type:`button`,onClick:De,"aria-label":`Actualiser le solde de crédits`,title:`Actualiser`,children:(0,H.jsx)(U,{name:`refresh`,size:15})})]}),(0,H.jsx)(`p`,{children:`Utilisez-les pour mobiliser vos spécialistes et faire avancer vos dossiers.`}),(0,H.jsxs)(`div`,{className:`gv2-account-menu-actions`,children:[(0,H.jsxs)(`button`,{type:`button`,onClick:()=>{Ae(`tarifs`),he(!1)},children:[`Voir les tarifs`,(0,H.jsx)(U,{name:`chevronRight`,size:15})]}),(0,H.jsx)(`a`,{className:`is-primary`,href:`/upgrade`,children:`Mettre à niveau`})]})]})]})]})]}),(0,H.jsx)(ja,{currentTab:a,onChange:Ae})]}),be&&(0,H.jsx)(`p`,{className:`gv2-backend-notice`,role:`alert`,children:be}),a===`conversation`?(0,H.jsxs)(`section`,{className:`gv2-conversation-stage${Xe?` is-landing`:``}`,children:[(0,H.jsx)(ao,{items:c,firstName:Ke,isSubmitting:f,landing:Xe}),(0,H.jsx)(oo,{onSend:Ve,disabled:f,landing:Xe})]}):a===`createur`?(0,H.jsx)(nc,{workspace:s,lastAnalysis:I,creatorHandoff:L,settings:ie,refinementRequest:ce,onHasOutputChange:se,onWorkspaceChange:Oe,onSettingsChange:e=>ae(t=>({...t,...e})),contextCollapsed:$e,onShowContext:()=>k(!1)}):a===`psychologue`?(0,H.jsx)(qu,{workspace:s,onWorkspaceChange:Oe,onNavigateAgent:Ae,openAnalysisRequest:P,onAnalysisReady:ee}):a===`stratege`?(0,H.jsx)(md,{workspace:s,onWorkspaceChange:Oe,onNavigateAgent:Ae,onInterviewChange:B}):a===`tarifs`?(0,H.jsx)(vd,{}):Xi(a)?(0,H.jsx)(Xo,{agentId:a,agent:Je,workspace:s,items:c,firstName:Ke,isSubmitting:f,onSend:Ve,discussionCollapsed:M,onToggleDiscussion:()=>N(e=>!e),onResizeStart:Pe,onResizeKey:Fe,onResizeReset:()=>j(jd),onReturnToConversation:()=>Ae(`conversation`),onNavigateAgent:Ae,contextCollapsed:$e&&Ze,onShowContext:()=>k(!1),darkMode:z}):a===`activity`?(0,H.jsx)(Gd,{workspace:s,mission:u}):(0,H.jsx)(Kd,{workspace:s})]}),(0,H.jsx)(Eo,{mission:u,workspace:s,onUpdateWorkspace:ke,activeAgent:Je,onStartMission:Ge,isStartingMission:m,creatorSettings:ie,onCreatorSettingsChange:e=>ae(t=>({...t,...e})),creatorHasOutput:oe,onCreatorRefinement:e=>le({id:Date.now(),text:e}),onCreatorClose:()=>k(!0),strategeInterview:ue}),!Qe&&(0,H.jsx)(`button`,{className:`gv2-resize-handle gv2-resize-handle--left`,type:`button`,onPointerDown:e=>Me(`left`,e),onDoubleClick:()=>S(Td),onKeyDown:e=>Ne(`left`,e),"aria-label":`Redimensionner la navigation`,title:`Glisser pour redimensionner · double clic pour réinitialiser`}),!$e&&(0,H.jsx)(`button`,{className:`gv2-resize-handle gv2-resize-handle--right`,type:`button`,onPointerDown:e=>Me(`right`,e),onDoubleClick:()=>w(Od),onKeyDown:e=>Ne(`right`,e),"aria-label":`Redimensionner le contexte`,title:`Glisser pour redimensionner · double clic pour réinitialiser`}),ne&&(0,H.jsx)(bd,{onFinish:nt,onOpenNavigation:tt})]})}var Jd=window.__GABRIEL_V2__||{workspaces:[],selectedWorkspaceId:null,user:{}};(0,v.createRoot)(document.getElementById(`gabriel-v2-root`)).render((0,H.jsx)(qd,{bootstrap:Jd}));