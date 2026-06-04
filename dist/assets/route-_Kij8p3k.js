import{r as v,j as h,b as We}from"./jsx-runtime-DexIYAB0.js";import{c as Ce,a as $,b as q,d as F,t as b,I as ke,H as de,B as fe,T as Ye,n as he}from"./heading-BEaF19E3.js";import{D as Ge}from"./decoder-text-DMSlmy8-.js";import{D as Qe}from"./divider-DMFRNpwj.js";import{F as Ze}from"./footer-C9tjod-o.js";import{S as et}from"./section-C0KzTZcP.js";import{b as tt}from"./meta-8qEcoPB8.js";import{i as H,F as Z,G as rt,r as nt,H as at,m as ot,t as st,U as Y,E as it,J as lt,K as ut,g as ct}from"./index-D-yVsArm.js";import{g as dt,F as ft}from"./components-BBmB_d3F.js";import"./config-DtRDxmiS.js";/*!
 * cookie
 * Copyright(c) 2012-2014 Roman Shtylman
 * Copyright(c) 2015 Douglas Christopher Wilson
 * MIT Licensed
 */var ht=yt,mt=gt,pt=Object.prototype.toString,P=/^[\u0009\u0020-\u007e\u0080-\u00ff]+$/;function yt(e,t){if(typeof e!="string")throw new TypeError("argument str must be a string");for(var r={},n=t||{},a=n.decode||wt,o=0;o<e.length;){var s=e.indexOf("=",o);if(s===-1)break;var i=e.indexOf(";",o);if(i===-1)i=e.length;else if(i<s){o=e.lastIndexOf(";",s-1)+1;continue}var l=e.slice(o,s).trim();if(r[l]===void 0){var u=e.slice(s+1,i).trim();u.charCodeAt(0)===34&&(u=u.slice(1,-1)),r[l]=vt(u,a)}o=i+1}return r}function gt(e,t,r){var n=r||{},a=n.encode||bt;if(typeof a!="function")throw new TypeError("option encode is invalid");if(!P.test(e))throw new TypeError("argument name is invalid");var o=a(t);if(o&&!P.test(o))throw new TypeError("argument val is invalid");var s=e+"="+o;if(n.maxAge!=null){var i=n.maxAge-0;if(isNaN(i)||!isFinite(i))throw new TypeError("option maxAge is invalid");s+="; Max-Age="+Math.floor(i)}if(n.domain){if(!P.test(n.domain))throw new TypeError("option domain is invalid");s+="; Domain="+n.domain}if(n.path){if(!P.test(n.path))throw new TypeError("option path is invalid");s+="; Path="+n.path}if(n.expires){var l=n.expires;if(!_t(l)||isNaN(l.valueOf()))throw new TypeError("option expires is invalid");s+="; Expires="+l.toUTCString()}if(n.httpOnly&&(s+="; HttpOnly"),n.secure&&(s+="; Secure"),n.partitioned&&(s+="; Partitioned"),n.priority){var u=typeof n.priority=="string"?n.priority.toLowerCase():n.priority;switch(u){case"low":s+="; Priority=Low";break;case"medium":s+="; Priority=Medium";break;case"high":s+="; Priority=High";break;default:throw new TypeError("option priority is invalid")}}if(n.sameSite){var c=typeof n.sameSite=="string"?n.sameSite.toLowerCase():n.sameSite;switch(c){case!0:s+="; SameSite=Strict";break;case"lax":s+="; SameSite=Lax";break;case"strict":s+="; SameSite=Strict";break;case"none":s+="; SameSite=None";break;default:throw new TypeError("option sameSite is invalid")}}return s}function wt(e){return e.indexOf("%")!==-1?decodeURIComponent(e):e}function bt(e){return encodeURIComponent(e)}function _t(e){return pt.call(e)==="[object Date]"||e instanceof Date}function vt(e,t){try{return t(e)}catch{return e}}/**
 * @remix-run/server-runtime v2.7.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */const me={};function je(e,t){!e&&!me[t]&&(me[t]=!0,console.warn(t))}/**
 * @remix-run/server-runtime v2.7.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */const St=({sign:e,unsign:t})=>(r,n={})=>{let{secrets:a=[],...o}={path:"/",sameSite:"lax",...n};return jt(r,o.expires),{get name(){return r},get isSigned(){return a.length>0},get expires(){return typeof o.maxAge<"u"?new Date(Date.now()+o.maxAge*1e3):o.expires},async parse(s,i){if(!s)return null;let l=ht(s,{...o,...i});return r in l?l[r]===""?"":await Et(t,l[r],a):null},async serialize(s,i){return mt(r,s===""?"":await xt(e,s,a),{...o,...i})}}},ee=e=>e!=null&&typeof e.name=="string"&&typeof e.isSigned=="boolean"&&typeof e.parse=="function"&&typeof e.serialize=="function";async function xt(e,t,r){let n=Rt(t);return r.length>0&&(n=await e(n,r[0])),n}async function Et(e,t,r){if(r.length>0){for(let n of r){let a=await e(t,n);if(a!==!1)return pe(a)}return null}return pe(t)}function Rt(e){return btoa(kt(encodeURIComponent(JSON.stringify(e))))}function pe(e){try{return JSON.parse(decodeURIComponent(Ct(atob(e))))}catch{return{}}}function Ct(e){let t=e.toString(),r="",n=0,a,o;for(;n<t.length;)a=t.charAt(n++),/[\w*+\-./@]/.exec(a)?r+=a:(o=a.charCodeAt(0),o<256?r+="%"+ye(o,2):r+="%u"+ye(o,4).toUpperCase());return r}function ye(e,t){let r=e.toString(16);for(;r.length<t;)r="0"+r;return r}function kt(e){let t=e.toString(),r="",n=0,a,o;for(;n<t.length;){if(a=t.charAt(n++),a==="%"){if(t.charAt(n)==="u"){if(o=t.slice(n+1,n+5),/^[\da-f]{4}$/i.exec(o)){r+=String.fromCharCode(parseInt(o,16)),n+=5;continue}}else if(o=t.slice(n,n+2),/^[\da-f]{2}$/i.exec(o)){r+=String.fromCharCode(parseInt(o,16)),n+=2;continue}}r+=a}return r}function jt(e,t){je(!t,`The "${e}" cookie has an "expires" property set. This will cause the expires value to not be updated when the session is committed. Instead, you should set the expires value when serializing the cookie. You can use \`commitSession(session, { expires })\` if using a session storage object, or \`cookie.serialize("value", { expires })\` if you're using the cookie directly.`)}function z(e){const t=unescape(encodeURIComponent(e));return Uint8Array.from(t,(r,n)=>t.charCodeAt(n))}function Tt(e){const t=String.fromCharCode.apply(null,e);return decodeURIComponent(escape(t))}function L(...e){const t=new Uint8Array(e.reduce((n,a)=>n+a.length,0));let r=0;for(const n of e)t.set(n,r),r+=n.length;return t}function Dt(e,t){if(e.length!==t.length)return!1;for(let r=0;r<e.length;r++)if(e[r]!==t[r])return!1;return!0}function ge(e){return e instanceof Uint8Array?t=>e[t]:e}function K(e,t,r,n,a){const o=ge(e),s=ge(r);for(let i=0;i<a;++i)if(o(t+i)!==s(n+i))return!1;return!0}function Ot(e){const t=new Array(256).fill(e.length);if(e.length>1)for(let r=0;r<e.length-1;r++)t[e[r]]=e.length-1-r;return t}const E=Symbol("Match");class te{constructor(t){this._lookbehind=new Uint8Array,typeof t=="string"?this._needle=t=z(t):this._needle=t,this._lastChar=t[t.length-1],this._occ=Ot(t)}feed(t){let r=0,n;const a=[];for(;r!==t.length;)[r,...n]=this._feed(t,r),a.push(...n);return a}end(){const t=this._lookbehind;return this._lookbehind=new Uint8Array,t}_feed(t,r){const n=[];let a=-this._lookbehind.length;if(a<0){for(;a<0&&a<=t.length-this._needle.length;){const o=this._charAt(t,a+this._needle.length-1);if(o===this._lastChar&&this._memcmp(t,a,this._needle.length-1))return a>-this._lookbehind.length&&n.push(this._lookbehind.slice(0,this._lookbehind.length+a)),n.push(E),this._lookbehind=new Uint8Array,[a+this._needle.length,...n];a+=this._occ[o]}if(a<0)for(;a<0&&!this._memcmp(t,a,t.length-a);)a++;if(a>=0)n.push(this._lookbehind),this._lookbehind=new Uint8Array;else{const o=this._lookbehind.length+a;return o>0&&(n.push(this._lookbehind.slice(0,o)),this._lookbehind=this._lookbehind.slice(o)),this._lookbehind=Uint8Array.from(new Array(this._lookbehind.length+t.length),(s,i)=>this._charAt(t,i-this._lookbehind.length)),[t.length,...n]}}for(a+=r;a<=t.length-this._needle.length;){const o=t[a+this._needle.length-1];if(o===this._lastChar&&t[a]===this._needle[0]&&K(this._needle,0,t,a,this._needle.length-1))return a>r&&n.push(t.slice(r,a)),n.push(E),[a+this._needle.length,...n];a+=this._occ[o]}if(a<t.length){for(;a<t.length&&(t[a]!==this._needle[0]||!K(t,a,this._needle,0,t.length-a));)++a;a<t.length&&(this._lookbehind=t.slice(a))}return a>0&&n.push(t.slice(r,a<t.length?a:t.length)),[t.length,...n]}_charAt(t,r){return r<0?this._lookbehind[this._lookbehind.length+r]:t[r]}_memcmp(t,r,n){return K(this._charAt.bind(this,t),r,this._needle,0,n)}}class Mt{constructor(t,r){this._readableStream=r,this._search=new te(t)}async*[Symbol.asyncIterator](){const t=this._readableStream.getReader();try{for(;;){const n=await t.read();if(n.done)break;yield*this._search.feed(n.value)}const r=this._search.end();r.length&&(yield r)}finally{t.releaseLock()}}}const At=Function.prototype.apply.bind(L,void 0),Te=z("--"),A=z(`\r
`);function Ht(e){const t=e.split(";").map(n=>n.trim());if(t.shift()!=="form-data")throw new Error('malformed content-disposition header: missing "form-data" in `'+JSON.stringify(t)+"`");const r={};for(const n of t){const a=n.split("=",2);if(a.length!==2)throw new Error("malformed content-disposition header: key-value pair not found - "+n+" in `"+e+"`");const[o,s]=a;if(s[0]==='"'&&s[s.length-1]==='"')r[o]=s.slice(1,-1).replace(/\\"/g,'"');else if(s[0]!=='"'&&s[s.length-1]!=='"')r[o]=s;else if(s[0]==='"'&&s[s.length-1]!=='"'||s[0]!=='"'&&s[s.length-1]==='"')throw new Error("malformed content-disposition header: mismatched quotations in `"+e+"`")}if(!r.name)throw new Error("malformed content-disposition header: missing field name in `"+e+"`");return r}function Nt(e){const t=[];let r=!1,n;for(;typeof(n=e.shift())<"u";){const a=n.indexOf(":");if(a===-1)throw new Error("malformed multipart-form header: missing colon");const o=n.slice(0,a).trim().toLowerCase(),s=n.slice(a+1).trim();switch(o){case"content-disposition":r=!0,t.push(...Object.entries(Ht(s)));break;case"content-type":t.push(["contentType",s])}}if(!r)throw new Error("malformed multipart-form header: missing content-disposition");return Object.fromEntries(t)}async function Pt(e,t){let r=!0,n=!1;const a=[[]],o=new te(A);for(;;){const s=await e.next();if(s.done)throw new Error("malformed multipart-form data: unexpected end of stream");if(r&&s.value!==E&&Dt(s.value.slice(0,2),Te))return[void 0,new Uint8Array];let i;if(s.value!==E)i=s.value;else if(!n)i=t;else throw new Error("malformed multipart-form data: unexpected boundary");if(!i.length)continue;r&&(r=!1);const l=o.feed(i);for(const[u,c]of l.entries()){const d=c===E;if(!(!d&&!c.length)){if(n&&d)return l.push(o.end()),[a.filter(y=>y.length).map(At).map(Tt),L(...l.slice(u+1).map(y=>y===E?A:y))];(n=d)?a.push([]):a[a.length-1].push(c)}}}}async function*It(e,t){const r=L(Te,z(t)),n=new Mt(r,e)[Symbol.asyncIterator]();for(;;){const o=await n.next();if(o.done)return;if(o.value===E)break}const a=new te(A);for(;;){let u=function(f){const m=[];for(const g of a.feed(f))l&&m.push(A),(l=g===E)||m.push(g);return L(...m)};const[o,s]=await Pt(n,r);if(!o)return;async function i(){const f=await n.next();if(f.done)throw new Error("malformed multipart-form data: unexpected end of stream");return f}let l=!1,c=!1;async function d(){const f=await i();let m;if(f.value!==E)m=f.value;else if(!l)m=A;else return c=!0,{value:a.end()};return{value:u(m)}}const y=[{value:u(s)}];for(yield{...Nt(o),data:{[Symbol.asyncIterator](){return this},async next(){for(;;){const f=y.shift();if(!f)break;if(f.value.length>0)return f}for(;;){if(c)return{done:c,value:void 0};const f=await d();if(f.value.length>0)return f}}}};!c;)y.push(await d())}}/**
 * @remix-run/server-runtime v2.7.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Ut(...e){return async t=>{for(let r of e){let n=await r(t);if(typeof n<"u"&&n!==null)return n}}}async function qt(e,t){let r=e.headers.get("Content-Type")||"",[n,a]=r.split(/\s*;\s*boundary=/);if(!e.body||!a||n!=="multipart/form-data")throw new TypeError("Could not parse content as FormData.");let o=new FormData,s=It(e.body,a);for await(let i of s){if(i.done)break;typeof i.filename=="string"&&(i.filename=i.filename.split(/[/\\]/).pop());let l=await t(i);typeof l<"u"&&l!==null&&o.append(i.name,l)}return o}/**
 * @remix-run/server-runtime v2.7.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */let R=function(e){return e.Development="development",e.Production="production",e.Test="test",e}({});function Ft(e){return e===R.Development||e===R.Production||e===R.Test}/**
 * @remix-run/server-runtime v2.7.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function re(e,t){if(e instanceof Error&&t!==R.Development){let r=new Error("Unexpected Server Error");return r.stack=void 0,r}return e}function we(e,t){return Object.entries(e).reduce((r,[n,a])=>Object.assign(r,{[n]:re(a,t)}),{})}function V(e,t){let r=re(e,t);return{message:r.message,stack:r.stack}}function be(e,t){if(!e)return null;let r=Object.entries(e),n={};for(let[a,o]of r)if(H(o))n[a]={...o,__type:"RouteErrorResponse"};else if(o instanceof Error){let s=re(o,t);n[a]={message:s.message,stack:s.stack,__type:"Error",...s.name!=="Error"?{__subType:s.name}:{}}}else n[a]=o;return n}/**
 * @remix-run/server-runtime v2.7.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */const ne=(e,t={})=>Z(e,t),Lt=(e,t={})=>rt(e,t),De=(e,t=302)=>nt(e,t),$t=(e,t=302)=>at(e,t);function zt(e){let t=e;return t&&typeof t=="object"&&typeof t.data=="object"&&typeof t.subscribe=="function"&&typeof t.cancel=="function"&&typeof t.resolveData=="function"}function T(e){return e!=null&&typeof e.status=="number"&&typeof e.statusText=="string"&&typeof e.headers=="object"&&typeof e.body<"u"}const Vt=new Set([301,302,303,307,308]);function Oe(e){return Vt.has(e)}function Xt(e){return Oe(e.status)}function Bt(e){return e!=null&&typeof e.then=="function"&&e._tracked===!0}const Jt="__deferred_promise:";function Kt(e,t,r){let n=new TextEncoder;return new ReadableStream({async start(o){let s={},i=[];for(let[u,c]of Object.entries(e.data))Bt(c)?(s[u]=`${Jt}${u}`,(typeof c._data<"u"||typeof c._error<"u")&&i.push(u)):s[u]=c;o.enqueue(n.encode(JSON.stringify(s)+`

`));for(let u of i)_e(o,n,u,e.data[u],r);let l=e.subscribe((u,c)=>{c&&_e(o,n,c,e.data[c],r)});await e.resolveData(t),l(),o.close()}})}function _e(e,t,r,n,a){"_error"in n?e.enqueue(t.encode("error:"+JSON.stringify({[r]:n._error instanceof Error?V(n._error,a):n._error})+`

`)):e.enqueue(t.encode("data:"+JSON.stringify({[r]:n._data??null})+`

`))}/**
 * @remix-run/server-runtime v2.7.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Wt(e){return Object.keys(e).reduce((t,r)=>(t[r]=e[r].module,t),{})}var X={exports:{}},O={decodeValues:!0,map:!1,silent:!1};function G(e){return typeof e=="string"&&!!e.trim()}function Q(e,t){var r=e.split(";").filter(G),n=r.shift(),a=Yt(n),o=a.name,s=a.value;t=t?Object.assign({},O,t):O;try{s=t.decodeValues?decodeURIComponent(s):s}catch(l){console.error("set-cookie-parser encountered an error while decoding a cookie with value '"+s+"'. Set options.decodeValues to false to disable this feature.",l)}var i={name:o,value:s};return r.forEach(function(l){var u=l.split("="),c=u.shift().trimLeft().toLowerCase(),d=u.join("=");c==="expires"?i.expires=new Date(d):c==="max-age"?i.maxAge=parseInt(d,10):c==="secure"?i.secure=!0:c==="httponly"?i.httpOnly=!0:c==="samesite"?i.sameSite=d:i[c]=d}),i}function Yt(e){var t="",r="",n=e.split("=");return n.length>1?(t=n.shift(),r=n.join("=")):r=e,{name:t,value:r}}function Me(e,t){if(t=t?Object.assign({},O,t):O,!e)return t.map?{}:[];if(e.headers)if(typeof e.headers.getSetCookie=="function")e=e.headers.getSetCookie();else if(e.headers["set-cookie"])e=e.headers["set-cookie"];else{var r=e.headers[Object.keys(e.headers).find(function(a){return a.toLowerCase()==="set-cookie"})];!r&&e.headers.cookie&&!t.silent&&console.warn("Warning: set-cookie-parser appears to have been called on a request object. It is designed to parse Set-Cookie headers from responses, not Cookie headers from requests. Set the option {silent: true} to suppress this warning."),e=r}if(Array.isArray(e)||(e=[e]),t=t?Object.assign({},O,t):O,t.map){var n={};return e.filter(G).reduce(function(a,o){var s=Q(o,t);return a[s.name]=s,a},n)}else return e.filter(G).map(function(a){return Q(a,t)})}function Gt(e){if(Array.isArray(e))return e;if(typeof e!="string")return[];var t=[],r=0,n,a,o,s,i;function l(){for(;r<e.length&&/\s/.test(e.charAt(r));)r+=1;return r<e.length}function u(){return a=e.charAt(r),a!=="="&&a!==";"&&a!==","}for(;r<e.length;){for(n=r,i=!1;l();)if(a=e.charAt(r),a===","){for(o=r,r+=1,l(),s=r;r<e.length&&u();)r+=1;r<e.length&&e.charAt(r)==="="?(i=!0,r=s,t.push(e.substring(n,o)),n=r):r=o+1}else r+=1;(!i||r>=e.length)&&t.push(e.substring(n,e.length))}return t}X.exports=Me;X.exports.parse=Me;X.exports.parseString=Q;var Qt=X.exports.splitCookiesString=Gt;/**
 * @remix-run/server-runtime v2.7.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Zt(e,t){let r=t.errors?t.matches.findIndex(o=>t.errors[o.route.id]):-1,n=r>=0?t.matches.slice(0,r+1):t.matches,a;if(r>=0){let{actionHeaders:o,actionData:s,loaderHeaders:i,loaderData:l}=t;t.matches.slice(r).some(u=>{let c=u.route.id;return o[c]&&(!s||s[c]===void 0)?a=o[c]:i[c]&&l[c]===void 0&&(a=i[c]),a!=null})}return n.reduce((o,s,i)=>{let{id:l}=s.route,u=e.routes[l].module,c=t.loaderHeaders[l]||new Headers,d=t.actionHeaders[l]||new Headers,y=a!=null&&i===n.length-1,f=y&&a!==c&&a!==d;if(u.headers==null){let g=new Headers(o);return f&&k(a,g),k(d,g),k(c,g),g}let m=new Headers(u.headers?typeof u.headers=="function"?u.headers({loaderHeaders:c,parentHeaders:o,actionHeaders:d,errorHeaders:y?a:void 0}):u.headers:void 0);return f&&k(a,m),k(d,m),k(c,m),k(o,m),m},new Headers)}function k(e,t){let r=e.get("Set-Cookie");r&&Qt(r).forEach(a=>{t.append("Set-Cookie",a)})}/**
 * @remix-run/server-runtime v2.7.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function ve(e,t){if(e===!1||e===null||typeof e>"u")throw console.error("The following error is a bug in Remix; please open an issue! https://github.com/remix-run/remix/issues/new"),new Error(t)}/**
 * @remix-run/server-runtime v2.7.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function er(e,t,r){let n=ot(e,t,r);return n?n.map(a=>({params:a.params,pathname:a.pathname,route:a.route})):null}/**
 * @remix-run/server-runtime v2.7.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */async function tr({loadContext:e,action:t,params:r,request:n,routeId:a}){let o=await t({request:He(Ae(n)),context:e,params:r});if(o===void 0)throw new Error(`You defined an action for route "${a}" but didn't return anything from your \`action\` function. Please return a value or \`null\`.`);return T(o)?o:ne(o)}async function rr({loadContext:e,loader:t,params:r,request:n,routeId:a}){let o=await t({request:He(Ae(n)),context:e,params:r});if(o===void 0)throw new Error(`You defined a loader for route "${a}" but didn't return anything from your \`loader\` function. Please return a value or \`null\`.`);return zt(o)?o.init&&Oe(o.init.status||200)?De(new Headers(o.init.headers).get("Location"),o.init):o:T(o)?o:ne(o)}function Ae(e){let t=new URL(e.url),r=t.searchParams.getAll("index");t.searchParams.delete("index");let n=[];for(let o of r)o&&n.push(o);for(let o of n)t.searchParams.append("index",o);let a={method:e.method,body:e.body,headers:e.headers,signal:e.signal};return a.body&&(a.duplex="half"),new Request(t.href,a)}function He(e){let t=new URL(e.url);t.searchParams.delete("_data");let r={method:e.method,body:e.body,headers:e.headers,signal:e.signal};return r.body&&(r.duplex="half"),new Request(t.href,r)}/**
 * @remix-run/server-runtime v2.7.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Ne(e){let t={};return Object.values(e).forEach(r=>{let n=r.parentId||"";t[n]||(t[n]=[]),t[n].push(r)}),t}function Pe(e,t="",r=Ne(e)){return(r[t]||[]).map(n=>({...n,children:Pe(e,n.id,r)}))}function Ie(e,t,r="",n=Ne(e)){return(n[r]||[]).map(a=>{let o={hasErrorBoundary:a.id==="root"||a.module.ErrorBoundary!=null,id:a.id,path:a.path,loader:a.module.loader?s=>rr({request:s.request,params:s.params,loadContext:s.context,loader:a.module.loader,routeId:a.id}):void 0,action:a.module.action?s=>tr({request:s.request,params:s.params,loadContext:s.context,action:a.module.action,routeId:a.id}):void 0,handle:a.module.handle};return a.index?{index:!0,...o}:{caseSensitive:a.caseSensitive,children:Ie(e,t,a.id,n),...o}})}/**
 * @remix-run/server-runtime v2.7.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */const nr={"&":"\\u0026",">":"\\u003e","<":"\\u003c","\u2028":"\\u2028","\u2029":"\\u2029"},ar=/[&><\u2028\u2029]/g;function or(e){return e.replace(ar,t=>nr[t])}/**
 * @remix-run/server-runtime v2.7.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Se(e){return or(JSON.stringify(e))}var sr={};/**
 * @remix-run/server-runtime v2.7.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */async function ir(e,t){if(t??(t=sr.REMIX_DEV_ORIGIN),!t)throw Error("Dev server origin not set");let r=new URL(t);r.pathname="ping";let n=await fetch(r.href,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({buildHash:e.assets.version})}).catch(a=>{throw console.error(`Could not reach Remix dev server at ${r}`),a});if(!n.ok)throw console.error(`Could not reach Remix dev server at ${r} (${n.status})`),Error(await n.text())}function lr(e){console.log(`[REMIX DEV] ${e.assets.version} ready`)}const Ue="__remix_devServerHooks";function ur(e){globalThis[Ue]=e}function xe(){return globalThis[Ue]}/**
 * @remix-run/server-runtime v2.7.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Ee(e,t){var r,n;let a=Pe(e.routes),o=Ie(e.routes,e.future),s=Ft(t)?t:R.Production,i=ut(o,{basename:e.basename,future:{v7_relativeSplatPath:((r=e.future)===null||r===void 0?void 0:r.v3_relativeSplatPath)===!0,v7_throwAbortReason:((n=e.future)===null||n===void 0?void 0:n.v3_throwAbortReason)===!0}}),l=e.entry.module.handleError||((u,{request:c})=>{s!==R.Test&&!c.signal.aborted&&console.error(H(u)&&u.error?u.error:u)});return{routes:a,dataRoutes:o,serverMode:s,staticHandler:i,errorHandler:l}}const cr=(e,t)=>{let r,n,a,o,s;return async function(l,u={}){if(r=typeof e=="function"?await e():e,t??(t=r.mode),typeof e=="function"){let p=Ee(r,t);n=p.routes,a=p.serverMode,o=p.staticHandler,s=p.errorHandler}else if(!n||!a||!o||!s){let p=Ee(r,t);n=p.routes,a=p.serverMode,o=p.staticHandler,s=p.errorHandler}let c=new URL(l.url),d=er(n,c.pathname,r.basename),y=p=>{if(t===R.Development){var S,C;(S=xe())===null||S===void 0||(C=S.processRequestError)===null||C===void 0||C.call(S,p)}s(p,{context:u,params:d&&d.length>0?d[0].params:{},request:l})},f;if(c.searchParams.has("_data")){let p=c.searchParams.get("_data");if(f=await dr(a,r,o,p,l,u,y),r.entry.module.handleDataRequest){var m;f=await r.entry.module.handleDataRequest(f,{context:u,params:(d==null||(m=d.find(S=>S.route.id==p))===null||m===void 0?void 0:m.params)||{},request:l})}}else if(d&&d[d.length-1].route.module.default==null&&d[d.length-1].route.module.ErrorBoundary==null)f=await hr(a,o,d.slice(-1)[0].route.id,l,u,y);else{var g,_;let p=t===R.Development?await((g=xe())===null||g===void 0||(_=g.getCriticalCss)===null||_===void 0?void 0:_.call(g,r,c.pathname)):void 0;f=await fr(a,r,o,l,u,y,p)}return l.method==="HEAD"?new Response(null,{headers:f.headers,status:f.status,statusText:f.statusText}):f}};async function dr(e,t,r,n,a,o,s){try{let i=await r.queryRoute(a,{routeId:n,requestContext:o});if(Xt(i)){let l=new Headers(i.headers),u=l.get("Location");return l.set("X-Remix-Redirect",t.basename&&st(u,t.basename)||u),l.set("X-Remix-Status",i.status),l.delete("Location"),i.headers.get("Set-Cookie")!==null&&l.set("X-Remix-Revalidate","yes"),new Response(null,{status:204,headers:l})}if(Y in i){let l=i[Y],u=Kt(l,a.signal,e),c=l.init||{},d=new Headers(c.headers);return d.set("Content-Type","text/remix-deferred"),d.set("X-Remix-Response","yes"),c.headers=d,new Response(u,c)}return i.headers.set("X-Remix-Response","yes"),i}catch(i){if(T(i))return i.headers.set("X-Remix-Catch","yes"),i;if(H(i))return i&&s(i),qe(i,e);let l=i instanceof Error||i instanceof DOMException?i:new Error("Unexpected Server Error");return s(l),Z(V(l,e),{status:500,headers:{"X-Remix-Error":"yes"}})}}async function fr(e,t,r,n,a,o,s){let i;try{i=await r.query(n,{requestContext:a})}catch(d){return o(d),new Response(null,{status:500})}if(T(i))return i;i.errors&&(Object.values(i.errors).forEach(d=>{(!H(d)||d.error)&&o(d)}),i.errors=we(i.errors,e));let l=Zt(t,i),u={manifest:t.assets,routeModules:Wt(t.routes),staticHandlerContext:i,criticalCss:s,serverHandoffString:Se({url:i.location.pathname,basename:t.basename,criticalCss:s,state:{loaderData:i.loaderData,actionData:i.actionData,errors:be(i.errors,e)},future:t.future,isSpaMode:t.isSpaMode}),future:t.future,isSpaMode:t.isSpaMode,serializeError:d=>V(d,e)},c=t.entry.module.default;try{return await c(n,i.statusCode,l,u,a)}catch(d){o(d);let y=d;if(T(d)){let f;try{let m=d.headers.get("Content-Type");m&&/\bapplication\/json\b/.test(m)?d.body==null?f=null:f=await d.json():f=await d.text(),y=new it(d.status,d.statusText,f)}catch{}}i=lt(r.dataRoutes,i,y),i.errors&&(i.errors=we(i.errors,e)),u={...u,staticHandlerContext:i,serverHandoffString:Se({url:i.location.pathname,basename:t.basename,state:{loaderData:i.loaderData,actionData:i.actionData,errors:be(i.errors,e)},future:t.future,isSpaMode:t.isSpaMode})};try{return await c(n,i.statusCode,l,u,a)}catch(f){return o(f),Fe(f,e)}}}async function hr(e,t,r,n,a,o){try{let s=await t.queryRoute(n,{routeId:r,requestContext:a});return ve(!(Y in s),`You cannot return a \`defer()\` response from a Resource Route.  Did you forget to export a default UI component from the "${r}" route?`),ve(T(s),"Expected a Response to be returned from queryRoute"),s}catch(s){return T(s)?(s.headers.set("X-Remix-Catch","yes"),s):H(s)?(s&&o(s),qe(s,e)):(o(s),Fe(s,e))}}function qe(e,t){return Z(V(e.error||new Error("Unexpected Server Error"),t),{status:e.status,statusText:e.statusText,headers:{"X-Remix-Error":"yes"}})}function Fe(e,t){let r="Unexpected Server Error";return t!==R.Production&&(r+=`

${String(e)}`),new Response(r,{status:500,headers:{"Content-Type":"text/plain"}})}/**
 * @remix-run/server-runtime v2.7.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function W(e){return`__flash_${e}__`}const ae=(e={},t="")=>{let r=new Map(Object.entries(e));return{get id(){return t},get data(){return Object.fromEntries(r)},has(n){return r.has(n)||r.has(W(n))},get(n){if(r.has(n))return r.get(n);let a=W(n);if(r.has(a)){let o=r.get(a);return r.delete(a),o}},set(n,a){r.set(n,a)},flash(n,a){r.set(W(n),a)},unset(n){r.delete(n)}}},mr=e=>e!=null&&typeof e.id=="string"&&typeof e.data<"u"&&typeof e.has=="function"&&typeof e.get=="function"&&typeof e.set=="function"&&typeof e.flash=="function"&&typeof e.unset=="function",pr=e=>({cookie:t,createData:r,readData:n,updateData:a,deleteData:o})=>{let s=ee(t)?t:e((t==null?void 0:t.name)||"__session",t);return Le(s),{async getSession(i,l){let u=i&&await s.parse(i,l),c=u&&await n(u);return ae(c||{},u||"")},async commitSession(i,l){let{id:u,data:c}=i,d=(l==null?void 0:l.maxAge)!=null?new Date(Date.now()+l.maxAge*1e3):(l==null?void 0:l.expires)!=null?l.expires:s.expires;return u?await a(u,c,d):u=await r(c,d),s.serialize(u,l)},async destroySession(i,l){return await o(i.id),s.serialize("",{...l,maxAge:void 0,expires:new Date(0)})}}};function Le(e){je(e.isSigned,`The "${e.name}" cookie is not signed, but session cookies should be signed to prevent tampering on the client before they are sent back to the server. See https://remix.run/utils/cookies#signing-cookies for more information.`)}/**
 * @remix-run/server-runtime v2.7.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */const yr=e=>({cookie:t}={})=>{let r=ee(t)?t:e((t==null?void 0:t.name)||"__session",t);return Le(r),{async getSession(n,a){return ae(n&&await r.parse(n,a)||{})},async commitSession(n,a){let o=await r.serialize(n.data,a);if(o.length>4096)throw new Error("Cookie length will exceed browser maximum. Length: "+o.length);return o},async destroySession(n,a){return r.serialize("",{...a,maxAge:void 0,expires:new Date(0)})}}};/**
 * @remix-run/server-runtime v2.7.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */const gr=e=>({cookie:t}={})=>{let r=new Map;return e({cookie:t,async createData(n,a){let o=Math.random().toString(36).substring(2,10);return r.set(o,{data:n,expires:a}),o},async readData(n){if(r.has(n)){let{data:a,expires:o}=r.get(n);if(!o||o>new Date)return a;o&&r.delete(n)}return null},async updateData(n,a,o){r.set(n,{data:a,expires:o})},async deleteData(n){r.delete(n)}})};/**
 * @remix-run/server-runtime v2.7.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */class $e extends Error{constructor(t,r){super(`Field "${t}" exceeded upload size of ${r} bytes.`),this.field=t,this.maxBytes=r}}/**
 * @remix-run/server-runtime v2.7.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function wr({filter:e,maxPartSize:t=3e6}={}){return async({filename:r,contentType:n,name:a,data:o})=>{if(e&&!await e({filename:r,contentType:n,name:a}))return;let s=0,i=[];for await(let l of o){if(s+=l.byteLength,s>t)throw new $e(a,t);i.push(l)}return typeof r=="string"?new File(i,r,{type:n}):await new Blob(i,{type:n}).text()}}/**
 * @remix-run/server-runtime v2.7.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */const br=Object.freeze(Object.defineProperty({__proto__:null,MaxPartSizeExceededError:$e,broadcastDevReady:ir,createCookieFactory:St,createCookieSessionStorageFactory:yr,createMemorySessionStorageFactory:gr,createRequestHandler:cr,createSession:ae,createSessionStorageFactory:pr,defer:Lt,isCookie:ee,isSession:mr,json:ne,logDevReady:lr,redirect:De,redirectDocument:$t,unstable_composeUploadHandlers:Ut,unstable_createMemoryUploadHandler:wr,unstable_parseMultipartFormData:qt,unstable_setDevServerHooks:ur},Symbol.toStringTag,{value:"Module"}));function I(e=""){const[t,r]=v.useState(e),[n,a]=v.useState(),[o,s]=v.useState(!1);return{value:t,error:n,onChange:c=>{r(c.target.value),s(!0),n&&c.target.checkValidity()&&a(null)},onBlur:c=>{o&&c.target.checkValidity()},onInvalid:c=>{c.preventDefault(),a(c.target.validationMessage)}}}const _r="_textarea_1ly3z_2",vr={textarea:_r},Sr=({className:e,resize:t="none",value:r,onChange:n,minRows:a=1,maxRows:o,...s})=>{const[i,l]=v.useState(a),[u,c]=v.useState(),d=v.useRef();v.useEffect(()=>{const f=getComputedStyle(d.current),m=parseInt(f.lineHeight,10),g=parseInt(f.paddingTop,10)+parseInt(f.paddingBottom,10);c({lineHeight:m,paddingHeight:g})},[]);const y=f=>{n(f);const{lineHeight:m,paddingHeight:g}=u,_=f.target.rows;f.target.rows=a;const p=~~((f.target.scrollHeight-g)/m);p===_&&(f.target.rows=p),o&&p>=o&&(f.target.rows=o,f.target.scrollTop=f.target.scrollHeight),l(o&&p>o?o:p)};return h.jsx("textarea",{className:Ce(vr.textarea,e),ref:d,onChange:y,style:$({resize:t}),rows:i,value:r,...s})},xr="_container_1ukhq_2",Er="_content_1ukhq_16",Rr="_input_1ukhq_21",Cr="_root_1ukhq_1",kr="_underline_1ukhq_55",jr="_label_1ukhq_73",Tr="_error_1ukhq_95",Dr="_errorMessage_1ukhq_111",j={container:xr,content:Er,input:Rr,root:Cr,underline:kr,label:jr,error:Tr,errorMessage:Dr},M=({id:e,label:t,value:r,multiline:n,className:a,style:o,error:s,onBlur:i,autoComplete:l,required:u,maxLength:c,type:d,onChange:y,name:f,...m})=>{const[g,_]=v.useState(!1),p=v.useId(),S=v.useRef(),C=e||`${p}input`,le=`${C}-label`,ue=`${C}-error`,Be=n?Sr:"input",Je=N=>{_(!1),i&&i(N)};return h.jsxs("div",{className:Ce(j.container,a),"data-error":!!s,style:o,...m,children:[h.jsxs("div",{className:j.content,children:[h.jsx("label",{className:j.label,"data-focused":g,"data-filled":!!r,id:le,htmlFor:C,children:t}),h.jsx(Be,{className:j.input,id:C,"aria-labelledby":le,"aria-describedby":s?ue:void 0,onFocus:()=>_(!0),onBlur:Je,value:r,onChange:y,autoComplete:l,required:u,maxLength:c,type:d,name:f}),h.jsx("div",{className:j.underline,"data-focused":g})]}),h.jsx(q,{unmount:!0,in:s,timeout:F(b.base.durationM),children:({visible:N,nodeRef:Ke})=>{var ce;return h.jsx("div",{ref:Ke,className:j.error,"data-visible":N,id:ue,role:"alert",style:$({height:N?(ce=S.current)==null?void 0:ce.getBoundingClientRect().height:0}),children:h.jsxs("div",{className:j.errorMessage,ref:S,children:[h.jsx(ke,{icon:"error"}),s]})})}})]})};var Or={},oe={},D={};const ze=We(br);var B={};/**
 * @remix-run/cloudflare v2.7.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */Object.defineProperty(B,"__esModule",{value:!0});const se=new TextEncoder,Mr=async(e,t)=>{let r=await Ve(t,["sign"]),n=se.encode(e),a=await crypto.subtle.sign("HMAC",r,n),o=btoa(String.fromCharCode(...new Uint8Array(a))).replace(/=+$/,"");return e+"."+o},Ar=async(e,t)=>{let r=e.lastIndexOf("."),n=e.slice(0,r),a=e.slice(r+1),o=await Ve(t,["verify"]),s=se.encode(n),i=Hr(atob(a));return await crypto.subtle.verify("HMAC",o,i,s)?n:!1};async function Ve(e,t){return await crypto.subtle.importKey("raw",se.encode(e),{name:"HMAC",hash:"SHA-256"},!1,t)}function Hr(e){let t=new Uint8Array(e.length);for(let r=0;r<e.length;r++)t[r]=e.charCodeAt(r);return t}B.sign=Mr;B.unsign=Ar;/**
 * @remix-run/cloudflare v2.7.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */Object.defineProperty(D,"__esModule",{value:!0});var J=ze,Re=B;const ie=J.createCookieFactory({sign:Re.sign,unsign:Re.unsign}),Nr=J.createCookieSessionStorageFactory(ie),Xe=J.createSessionStorageFactory(ie),Pr=J.createMemorySessionStorageFactory(Xe);D.createCookie=ie;D.createCookieSessionStorage=Nr;D.createMemorySessionStorage=Pr;D.createSessionStorage=Xe;/**
 * @remix-run/cloudflare v2.7.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */Object.defineProperty(oe,"__esModule",{value:!0});var Ir=D;function Ur({cookie:e,kv:t}){return Ir.createSessionStorage({cookie:e,async createData(r,n){for(;;){let a=new Uint8Array(8);crypto.getRandomValues(a);let o=[...a].map(s=>s.toString(16).padStart(2,"0")).join("");if(!await t.get(o,"json"))return await t.put(o,JSON.stringify(r),{expiration:n?Math.round(n.getTime()/1e3):void 0}),o}},async readData(r){let n=await t.get(r);return n?JSON.parse(n):null},async updateData(r,n,a){await t.put(r,JSON.stringify(n),{expiration:a?Math.round(a.getTime()/1e3):void 0})},async deleteData(r){await t.delete(r)}})}oe.createWorkersKVSessionStorage=Ur;/**
 * @remix-run/cloudflare v2.7.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */(function(e){Object.defineProperty(e,"__esModule",{value:!0});var t=oe,r=D,n=ze;e.createWorkersKVSessionStorage=t.createWorkersKVSessionStorage,e.createCookie=r.createCookie,e.createCookieSessionStorage=r.createCookieSessionStorage,e.createMemorySessionStorage=r.createMemorySessionStorage,e.createSessionStorage=r.createSessionStorage,Object.defineProperty(e,"MaxPartSizeExceededError",{enumerable:!0,get:function(){return n.MaxPartSizeExceededError}}),Object.defineProperty(e,"broadcastDevReady",{enumerable:!0,get:function(){return n.broadcastDevReady}}),Object.defineProperty(e,"createRequestHandler",{enumerable:!0,get:function(){return n.createRequestHandler}}),Object.defineProperty(e,"createSession",{enumerable:!0,get:function(){return n.createSession}}),Object.defineProperty(e,"defer",{enumerable:!0,get:function(){return n.defer}}),Object.defineProperty(e,"isCookie",{enumerable:!0,get:function(){return n.isCookie}}),Object.defineProperty(e,"isSession",{enumerable:!0,get:function(){return n.isSession}}),Object.defineProperty(e,"json",{enumerable:!0,get:function(){return n.json}}),Object.defineProperty(e,"logDevReady",{enumerable:!0,get:function(){return n.logDevReady}}),Object.defineProperty(e,"redirect",{enumerable:!0,get:function(){return n.redirect}}),Object.defineProperty(e,"redirectDocument",{enumerable:!0,get:function(){return n.redirectDocument}}),Object.defineProperty(e,"unstable_composeUploadHandlers",{enumerable:!0,get:function(){return n.unstable_composeUploadHandlers}}),Object.defineProperty(e,"unstable_createMemoryUploadHandler",{enumerable:!0,get:function(){return n.unstable_createMemoryUploadHandler}}),Object.defineProperty(e,"unstable_parseMultipartFormData",{enumerable:!0,get:function(){return n.unstable_parseMultipartFormData}})})(Or);const qr="_contact_xvg9q_1",Fr="_form_xvg9q_18",Lr="_title_xvg9q_30",$r="_divider_xvg9q_60",zr="_input_xvg9q_98",Vr="_botkiller_xvg9q_140",Xr="_button_xvg9q_144",Br="_complete_xvg9q_204",Jr="_completeTitle_xvg9q_215",Kr="_completeText_xvg9q_234",Wr="_completeButton_xvg9q_253",Yr="_formError_xvg9q_279",Gr="_formErrorContent_xvg9q_291",Qr="_formErrorMessage_xvg9q_295",Zr="_formErrorIcon_xvg9q_303",en="_footer_xvg9q_308",w={contact:qr,form:Fr,title:Lr,divider:$r,input:zr,botkiller:Vr,button:Xr,complete:Br,completeTitle:Jr,completeText:Kr,completeButton:Wr,formError:Yr,formErrorContent:Gr,formErrorMessage:Qr,formErrorIcon:Zr,footer:en},hn=()=>tt({title:"Contact",description:"Send me a message if you’re interested in discussing a project or if you just want to say hi"}),U=512,tn=4096,mn=()=>{const e=v.useRef(),t=I(""),r=I(""),n=I(""),a=I(""),o=b.base.durationS,s=dt(),{state:i}=ct(),l=i==="submitting";return h.jsxs(et,{className:w.contact,children:[h.jsx(q,{unmount:!0,in:!(s!=null&&s.success),timeout:1600,children:({status:u,nodeRef:c})=>h.jsxs(ft,{unstable_viewTransition:!0,className:w.form,method:"post",ref:c,children:[h.jsx(de,{className:w.title,"data-status":u,level:3,as:"h1",style:x(b.base.durationXS,o,.3),children:h.jsx(Ge,{text:"Say hello",start:u!=="exited",delay:300})}),h.jsx(Qe,{className:w.divider,"data-status":u,style:x(b.base.durationXS,o,.4)}),h.jsx(M,{className:w.botkiller,label:"Name",name:"bot_name",maxLength:U}),h.jsx(M,{required:!0,className:w.input,"data-status":u,style:x(b.base.durationXS,o),autoComplete:"name",label:"Your name",type:"text",name:"name",maxLength:U,...t}),h.jsx(M,{required:!0,className:w.input,"data-status":u,style:x(b.base.durationXS,o),autoComplete:"tel",label:"Your phone number",type:"tel",name:"phone",maxLength:U,...r}),h.jsx(M,{required:!0,className:w.input,"data-status":u,style:x(b.base.durationXS,o),autoComplete:"email",label:"Your email",type:"email",name:"email",maxLength:U,...n}),h.jsx(M,{required:!0,multiline:!0,className:w.input,"data-status":u,style:x(b.base.durationS,o),autoComplete:"off",label:"Message",name:"message",maxLength:tn,...a}),h.jsx(q,{unmount:!0,in:!l&&(s==null?void 0:s.errors),timeout:F(b.base.durationM),children:({status:d,nodeRef:y})=>{var f,m,g,_;return h.jsx("div",{className:w.formError,ref:y,"data-status":d,style:$({height:d?(f=e.current)==null?void 0:f.offsetHeight:0}),children:h.jsx("div",{className:w.formErrorContent,ref:e,children:h.jsxs("div",{className:w.formErrorMessage,children:[h.jsx(ke,{className:w.formErrorIcon,icon:"error"}),(m=s==null?void 0:s.errors)==null?void 0:m.name,(g=s==null?void 0:s.errors)==null?void 0:g.email,(_=s==null?void 0:s.errors)==null?void 0:_.message]})})})}}),h.jsx(fe,{className:w.button,"data-status":u,"data-sending":l,style:x(b.base.durationM,o),disabled:l,loading:l,loadingText:"Sending...",icon:"send",type:"submit",children:"Send message"})]})}),h.jsx(q,{unmount:!0,in:s==null?void 0:s.success,children:({status:u,nodeRef:c})=>h.jsxs("div",{className:w.complete,"aria-live":"polite",ref:c,children:[h.jsx(de,{level:3,as:"h3",className:w.completeTitle,"data-status":u,children:"Message Sent"}),h.jsx(Ye,{size:"l",as:"p",className:w.completeText,"data-status":u,style:x(b.base.durationXS),children:"I’ll get back to you within a couple days, sit tight"}),h.jsx(fe,{secondary:!0,iconHoverShift:!0,className:w.completeButton,"data-status":u,style:x(b.base.durationM),href:"/",icon:"chevron-right",children:"Back to homepage"})]})}),h.jsx(Ze,{className:w.footer})]})};function x(e,t=he(0),r=1){const n=F(e)*r;return $({delay:he((F(t)+n).toFixed(0))})}export{mn as default,hn as meta};
