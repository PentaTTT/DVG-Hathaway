var s=9007199254740991,A="[object Arguments]",O="[object Function]",m="[object GeneratorFunction]",w=/^(?:0|[1-9]\d*)$/;function I(n,r,t){switch(t.length){case 0:return n.call(r);case 1:return n.call(r,t[0]);case 2:return n.call(r,t[0],t[1]);case 3:return n.call(r,t[0],t[1],t[2])}return n.apply(r,t)}function x(n,r){for(var t=-1,i=Array(n);++t<n;)i[t]=r(t);return i}function v(n,r){return function(t){return n(r(t))}}var o=Object.prototype,c=o.hasOwnProperty,d=o.toString,T=o.propertyIsEnumerable,b=v(Object.keys,Object),p=Math.max;function E(n,r){var t=G(n)||C(n)?x(n.length,String):[],i=t.length,a=!!i;for(var e in n)(r||c.call(n,e))&&!(a&&(e=="length"||h(e,i)))&&t.push(e);return t}function L(n,r,t){var i=n[r];(!(c.call(n,r)&&y(i,t))||t===void 0&&!(r in n))&&(n[r]=t)}function F(n){if(!_(n))return b(n);var r=[];for(var t in Object(n))c.call(n,t)&&t!="constructor"&&r.push(t);return r}function P(n,r){return r=p(r===void 0?n.length-1:r,0),function(){for(var t=arguments,i=-1,a=p(t.length-r,0),e=Array(a);++i<a;)e[i]=t[r+i];i=-1;for(var f=Array(r+1);++i<r;)f[i]=t[i];return f[r]=e,I(n,this,f)}}function S(n,r,t,i){t||(t={});for(var a=-1,e=r.length;++a<e;){var f=r[a],u=i?i(t[f],n[f],f,t,n):void 0;L(t,f,u===void 0?n[f]:u)}return t}function K(n){return P(function(r,t){var i=-1,a=t.length,e=a>1?t[a-1]:void 0,f=a>2?t[2]:void 0;for(e=n.length>3&&typeof e=="function"?(a--,e):void 0,f&&M(t[0],t[1],f)&&(e=a<3?void 0:e,a=1),r=Object(r);++i<a;){var u=t[i];u&&n(r,u,i,e)}return r})}function h(n,r){return r=r??s,!!r&&(typeof n=="number"||w.test(n))&&n>-1&&n%1==0&&n<r}function M(n,r,t){if(!g(t))return!1;var i=typeof r;return(i=="number"?l(t)&&h(r,t.length):i=="string"&&r in t)?y(t[r],n):!1}function _(n){var r=n&&n.constructor,t=typeof r=="function"&&r.prototype||o;return n===t}function y(n,r){return n===r||n!==n&&r!==r}function C(n){return R(n)&&c.call(n,"callee")&&(!T.call(n,"callee")||d.call(n)==A)}var G=Array.isArray;function l(n){return n!=null&&N(n.length)&&!q(n)}function R(n){return U(n)&&l(n)}function q(n){var r=g(n)?d.call(n):"";return r==O||r==m}function N(n){return typeof n=="number"&&n>-1&&n%1==0&&n<=s}function g(n){var r=typeof n;return!!n&&(r=="object"||r=="function")}function U(n){return!!n&&typeof n=="object"}var V=K(function(n,r,t,i){S(r,W(r),n,i)});function W(n){return l(n)?E(n):F(n)}var X=V;export{X as l};
