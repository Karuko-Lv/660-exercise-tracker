(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))r(s);new MutationObserver(s=>{for(const i of s)if(i.type==="childList")for(const o of i.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(s){const i={};return s.integrity&&(i.integrity=s.integrity),s.referrerPolicy&&(i.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?i.credentials="include":s.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(s){if(s.ep)return;s.ep=!0;const i=n(s);fetch(s.href,i)}})();/**
* @vue/shared v3.5.32
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function Gc(t){const e=Object.create(null);for(const n of t.split(","))e[n]=1;return n=>n in e}const Ce={},ds=[],an=()=>{},B0=()=>!1,Ru=t=>t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&(t.charCodeAt(2)>122||t.charCodeAt(2)<97),Pu=t=>t.startsWith("onUpdate:"),ct=Object.assign,Qc=(t,e)=>{const n=t.indexOf(e);n>-1&&t.splice(n,1)},P_=Object.prototype.hasOwnProperty,ve=(t,e)=>P_.call(t,e),ie=Array.isArray,ps=t=>Yi(t)==="[object Map]",Fu=t=>Yi(t)==="[object Set]",of=t=>Yi(t)==="[object Date]",ae=t=>typeof t=="function",qe=t=>typeof t=="string",mn=t=>typeof t=="symbol",Ie=t=>t!==null&&typeof t=="object",q0=t=>(Ie(t)||ae(t))&&ae(t.then)&&ae(t.catch),j0=Object.prototype.toString,Yi=t=>j0.call(t),F_=t=>Yi(t).slice(8,-1),z0=t=>Yi(t)==="[object Object]",Jc=t=>qe(t)&&t!=="NaN"&&t[0]!=="-"&&""+parseInt(t,10)===t,_i=Gc(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),Nu=t=>{const e=Object.create(null);return n=>e[n]||(e[n]=t(n))},N_=/-\w/g,jt=Nu(t=>t.replace(N_,e=>e.slice(1).toUpperCase())),O_=/\B([A-Z])/g,$r=Nu(t=>t.replace(O_,"-$1").toLowerCase()),H0=Nu(t=>t.charAt(0).toUpperCase()+t.slice(1)),xa=Nu(t=>t?`on${H0(t)}`:""),sn=(t,e)=>!Object.is(t,e),Lo=(t,...e)=>{for(let n=0;n<t.length;n++)t[n](...e)},$0=(t,e,n,r=!1)=>{Object.defineProperty(t,e,{configurable:!0,enumerable:!1,writable:r,value:n})},Ou=t=>{const e=parseFloat(t);return isNaN(e)?t:e};let uf;const Vu=()=>uf||(uf=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function Di(t){if(ie(t)){const e={};for(let n=0;n<t.length;n++){const r=t[n],s=qe(r)?U_(r):Di(r);if(s)for(const i in s)e[i]=s[i]}return e}else if(qe(t)||Ie(t))return t}const V_=/;(?![^(]*\))/g,M_=/:([^]+)/,L_=/\/\*[^]*?\*\//g;function U_(t){const e={};return t.replace(L_,"").split(V_).forEach(n=>{if(n){const r=n.split(M_);r.length>1&&(e[r[0].trim()]=r[1].trim())}}),e}function ms(t){let e="";if(qe(t))e=t;else if(ie(t))for(let n=0;n<t.length;n++){const r=ms(t[n]);r&&(e+=r+" ")}else if(Ie(t))for(const n in t)t[n]&&(e+=n+" ");return e.trim()}const B_="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",q_=Gc(B_);function W0(t){return!!t||t===""}function j_(t,e){if(t.length!==e.length)return!1;let n=!0;for(let r=0;n&&r<t.length;r++)n=Xi(t[r],e[r]);return n}function Xi(t,e){if(t===e)return!0;let n=of(t),r=of(e);if(n||r)return n&&r?t.getTime()===e.getTime():!1;if(n=mn(t),r=mn(e),n||r)return t===e;if(n=ie(t),r=ie(e),n||r)return n&&r?j_(t,e):!1;if(n=Ie(t),r=Ie(e),n||r){if(!n||!r)return!1;const s=Object.keys(t).length,i=Object.keys(e).length;if(s!==i)return!1;for(const o in t){const u=t.hasOwnProperty(o),c=e.hasOwnProperty(o);if(u&&!c||!u&&c||!Xi(t[o],e[o]))return!1}}return String(t)===String(e)}function z_(t,e){return t.findIndex(n=>Xi(n,e))}const K0=t=>!!(t&&t.__v_isRef===!0),Te=t=>qe(t)?t:t==null?"":ie(t)||Ie(t)&&(t.toString===j0||!ae(t.toString))?K0(t)?Te(t.value):JSON.stringify(t,G0,2):String(t),G0=(t,e)=>K0(e)?G0(t,e.value):ps(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((n,[r,s],i)=>(n[ka(r,i)+" =>"]=s,n),{})}:Fu(e)?{[`Set(${e.size})`]:[...e.values()].map(n=>ka(n))}:mn(e)?ka(e):Ie(e)&&!ie(e)&&!z0(e)?String(e):e,ka=(t,e="")=>{var n;return mn(t)?`Symbol(${(n=t.description)!=null?n:e})`:t};/**
* @vue/reactivity v3.5.32
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let yt;class H_{constructor(e=!1){this.detached=e,this._active=!0,this._on=0,this.effects=[],this.cleanups=[],this._isPaused=!1,this.__v_skip=!0,this.parent=yt,!e&&yt&&(this.index=(yt.scopes||(yt.scopes=[])).push(this)-1)}get active(){return this._active}pause(){if(this._active){this._isPaused=!0;let e,n;if(this.scopes)for(e=0,n=this.scopes.length;e<n;e++)this.scopes[e].pause();for(e=0,n=this.effects.length;e<n;e++)this.effects[e].pause()}}resume(){if(this._active&&this._isPaused){this._isPaused=!1;let e,n;if(this.scopes)for(e=0,n=this.scopes.length;e<n;e++)this.scopes[e].resume();for(e=0,n=this.effects.length;e<n;e++)this.effects[e].resume()}}run(e){if(this._active){const n=yt;try{return yt=this,e()}finally{yt=n}}}on(){++this._on===1&&(this.prevScope=yt,yt=this)}off(){this._on>0&&--this._on===0&&(yt=this.prevScope,this.prevScope=void 0)}stop(e){if(this._active){this._active=!1;let n,r;for(n=0,r=this.effects.length;n<r;n++)this.effects[n].stop();for(this.effects.length=0,n=0,r=this.cleanups.length;n<r;n++)this.cleanups[n]();if(this.cleanups.length=0,this.scopes){for(n=0,r=this.scopes.length;n<r;n++)this.scopes[n].stop(!0);this.scopes.length=0}if(!this.detached&&this.parent&&!e){const s=this.parent.scopes.pop();s&&s!==this&&(this.parent.scopes[this.index]=s,s.index=this.index)}this.parent=void 0}}}function $_(){return yt}let ke;const Sa=new WeakSet;class Q0{constructor(e){this.fn=e,this.deps=void 0,this.depsTail=void 0,this.flags=5,this.next=void 0,this.cleanup=void 0,this.scheduler=void 0,yt&&yt.active&&yt.effects.push(this)}pause(){this.flags|=64}resume(){this.flags&64&&(this.flags&=-65,Sa.has(this)&&(Sa.delete(this),this.trigger()))}notify(){this.flags&2&&!(this.flags&32)||this.flags&8||Y0(this)}run(){if(!(this.flags&1))return this.fn();this.flags|=2,af(this),X0(this);const e=ke,n=zt;ke=this,zt=!0;try{return this.fn()}finally{Z0(this),ke=e,zt=n,this.flags&=-3}}stop(){if(this.flags&1){for(let e=this.deps;e;e=e.nextDep)Zc(e);this.deps=this.depsTail=void 0,af(this),this.onStop&&this.onStop(),this.flags&=-2}}trigger(){this.flags&64?Sa.add(this):this.scheduler?this.scheduler():this.runIfDirty()}runIfDirty(){uc(this)&&this.run()}get dirty(){return uc(this)}}let J0=0,yi,bi;function Y0(t,e=!1){if(t.flags|=8,e){t.next=bi,bi=t;return}t.next=yi,yi=t}function Yc(){J0++}function Xc(){if(--J0>0)return;if(bi){let e=bi;for(bi=void 0;e;){const n=e.next;e.next=void 0,e.flags&=-9,e=n}}let t;for(;yi;){let e=yi;for(yi=void 0;e;){const n=e.next;if(e.next=void 0,e.flags&=-9,e.flags&1)try{e.trigger()}catch(r){t||(t=r)}e=n}}if(t)throw t}function X0(t){for(let e=t.deps;e;e=e.nextDep)e.version=-1,e.prevActiveLink=e.dep.activeLink,e.dep.activeLink=e}function Z0(t){let e,n=t.depsTail,r=n;for(;r;){const s=r.prevDep;r.version===-1?(r===n&&(n=s),Zc(r),W_(r)):e=r,r.dep.activeLink=r.prevActiveLink,r.prevActiveLink=void 0,r=s}t.deps=e,t.depsTail=n}function uc(t){for(let e=t.deps;e;e=e.nextDep)if(e.dep.version!==e.version||e.dep.computed&&(ep(e.dep.computed)||e.dep.version!==e.version))return!0;return!!t._dirty}function ep(t){if(t.flags&4&&!(t.flags&16)||(t.flags&=-17,t.globalVersion===Ri)||(t.globalVersion=Ri,!t.isSSR&&t.flags&128&&(!t.deps&&!t._dirty||!uc(t))))return;t.flags|=2;const e=t.dep,n=ke,r=zt;ke=t,zt=!0;try{X0(t);const s=t.fn(t._value);(e.version===0||sn(s,t._value))&&(t.flags|=128,t._value=s,e.version++)}catch(s){throw e.version++,s}finally{ke=n,zt=r,Z0(t),t.flags&=-3}}function Zc(t,e=!1){const{dep:n,prevSub:r,nextSub:s}=t;if(r&&(r.nextSub=s,t.prevSub=void 0),s&&(s.prevSub=r,t.nextSub=void 0),n.subs===t&&(n.subs=r,!r&&n.computed)){n.computed.flags&=-5;for(let i=n.computed.deps;i;i=i.nextDep)Zc(i,!0)}!e&&!--n.sc&&n.map&&n.map.delete(n.key)}function W_(t){const{prevDep:e,nextDep:n}=t;e&&(e.nextDep=n,t.prevDep=void 0),n&&(n.prevDep=e,t.nextDep=void 0)}let zt=!0;const tp=[];function Fn(){tp.push(zt),zt=!1}function Nn(){const t=tp.pop();zt=t===void 0?!0:t}function af(t){const{cleanup:e}=t;if(t.cleanup=void 0,e){const n=ke;ke=void 0;try{e()}finally{ke=n}}}let Ri=0;class K_{constructor(e,n){this.sub=e,this.dep=n,this.version=n.version,this.nextDep=this.prevDep=this.nextSub=this.prevSub=this.prevActiveLink=void 0}}class el{constructor(e){this.computed=e,this.version=0,this.activeLink=void 0,this.subs=void 0,this.map=void 0,this.key=void 0,this.sc=0,this.__v_skip=!0}track(e){if(!ke||!zt||ke===this.computed)return;let n=this.activeLink;if(n===void 0||n.sub!==ke)n=this.activeLink=new K_(ke,this),ke.deps?(n.prevDep=ke.depsTail,ke.depsTail.nextDep=n,ke.depsTail=n):ke.deps=ke.depsTail=n,np(n);else if(n.version===-1&&(n.version=this.version,n.nextDep)){const r=n.nextDep;r.prevDep=n.prevDep,n.prevDep&&(n.prevDep.nextDep=r),n.prevDep=ke.depsTail,n.nextDep=void 0,ke.depsTail.nextDep=n,ke.depsTail=n,ke.deps===n&&(ke.deps=r)}return n}trigger(e){this.version++,Ri++,this.notify(e)}notify(e){Yc();try{for(let n=this.subs;n;n=n.prevSub)n.sub.notify()&&n.sub.dep.notify()}finally{Xc()}}}function np(t){if(t.dep.sc++,t.sub.flags&4){const e=t.dep.computed;if(e&&!t.dep.subs){e.flags|=20;for(let r=e.deps;r;r=r.nextDep)np(r)}const n=t.dep.subs;n!==t&&(t.prevSub=n,n&&(n.nextSub=t)),t.dep.subs=t}}const ac=new WeakMap,Or=Symbol(""),cc=Symbol(""),Pi=Symbol("");function ot(t,e,n){if(zt&&ke){let r=ac.get(t);r||ac.set(t,r=new Map);let s=r.get(n);s||(r.set(n,s=new el),s.map=r,s.key=n),s.track()}}function xn(t,e,n,r,s,i){const o=ac.get(t);if(!o){Ri++;return}const u=c=>{c&&c.trigger()};if(Yc(),e==="clear")o.forEach(u);else{const c=ie(t),l=c&&Jc(n);if(c&&n==="length"){const f=Number(r);o.forEach((p,g)=>{(g==="length"||g===Pi||!mn(g)&&g>=f)&&u(p)})}else switch((n!==void 0||o.has(void 0))&&u(o.get(n)),l&&u(o.get(Pi)),e){case"add":c?l&&u(o.get("length")):(u(o.get(Or)),ps(t)&&u(o.get(cc)));break;case"delete":c||(u(o.get(Or)),ps(t)&&u(o.get(cc)));break;case"set":ps(t)&&u(o.get(Or));break}}Xc()}function is(t){const e=Ee(t);return e===t?e:(ot(e,"iterate",Pi),Vt(t)?e:e.map($t))}function Mu(t){return ot(t=Ee(t),"iterate",Pi),t}function nn(t,e){return On(t)?Cs(Vr(t)?$t(e):e):$t(e)}const G_={__proto__:null,[Symbol.iterator](){return Da(this,Symbol.iterator,t=>nn(this,t))},concat(...t){return is(this).concat(...t.map(e=>ie(e)?is(e):e))},entries(){return Da(this,"entries",t=>(t[1]=nn(this,t[1]),t))},every(t,e){return Tn(this,"every",t,e,void 0,arguments)},filter(t,e){return Tn(this,"filter",t,e,n=>n.map(r=>nn(this,r)),arguments)},find(t,e){return Tn(this,"find",t,e,n=>nn(this,n),arguments)},findIndex(t,e){return Tn(this,"findIndex",t,e,void 0,arguments)},findLast(t,e){return Tn(this,"findLast",t,e,n=>nn(this,n),arguments)},findLastIndex(t,e){return Tn(this,"findLastIndex",t,e,void 0,arguments)},forEach(t,e){return Tn(this,"forEach",t,e,void 0,arguments)},includes(...t){return Ra(this,"includes",t)},indexOf(...t){return Ra(this,"indexOf",t)},join(t){return is(this).join(t)},lastIndexOf(...t){return Ra(this,"lastIndexOf",t)},map(t,e){return Tn(this,"map",t,e,void 0,arguments)},pop(){return oi(this,"pop")},push(...t){return oi(this,"push",t)},reduce(t,...e){return cf(this,"reduce",t,e)},reduceRight(t,...e){return cf(this,"reduceRight",t,e)},shift(){return oi(this,"shift")},some(t,e){return Tn(this,"some",t,e,void 0,arguments)},splice(...t){return oi(this,"splice",t)},toReversed(){return is(this).toReversed()},toSorted(t){return is(this).toSorted(t)},toSpliced(...t){return is(this).toSpliced(...t)},unshift(...t){return oi(this,"unshift",t)},values(){return Da(this,"values",t=>nn(this,t))}};function Da(t,e,n){const r=Mu(t),s=r[e]();return r!==t&&!Vt(t)&&(s._next=s.next,s.next=()=>{const i=s._next();return i.done||(i.value=n(i.value)),i}),s}const Q_=Array.prototype;function Tn(t,e,n,r,s,i){const o=Mu(t),u=o!==t&&!Vt(t),c=o[e];if(c!==Q_[e]){const p=c.apply(t,i);return u?$t(p):p}let l=n;o!==t&&(u?l=function(p,g){return n.call(this,nn(t,p),g,t)}:n.length>2&&(l=function(p,g){return n.call(this,p,g,t)}));const f=c.call(o,l,r);return u&&s?s(f):f}function cf(t,e,n,r){const s=Mu(t),i=s!==t&&!Vt(t);let o=n,u=!1;s!==t&&(i?(u=r.length===0,o=function(l,f,p){return u&&(u=!1,l=nn(t,l)),n.call(this,l,nn(t,f),p,t)}):n.length>3&&(o=function(l,f,p){return n.call(this,l,f,p,t)}));const c=s[e](o,...r);return u?nn(t,c):c}function Ra(t,e,n){const r=Ee(t);ot(r,"iterate",Pi);const s=r[e](...n);return(s===-1||s===!1)&&sl(n[0])?(n[0]=Ee(n[0]),r[e](...n)):s}function oi(t,e,n=[]){Fn(),Yc();const r=Ee(t)[e].apply(t,n);return Xc(),Nn(),r}const J_=Gc("__proto__,__v_isRef,__isVue"),rp=new Set(Object.getOwnPropertyNames(Symbol).filter(t=>t!=="arguments"&&t!=="caller").map(t=>Symbol[t]).filter(mn));function Y_(t){mn(t)||(t=String(t));const e=Ee(this);return ot(e,"has",t),e.hasOwnProperty(t)}class sp{constructor(e=!1,n=!1){this._isReadonly=e,this._isShallow=n}get(e,n,r){if(n==="__v_skip")return e.__v_skip;const s=this._isReadonly,i=this._isShallow;if(n==="__v_isReactive")return!s;if(n==="__v_isReadonly")return s;if(n==="__v_isShallow")return i;if(n==="__v_raw")return r===(s?i?uy:ap:i?up:op).get(e)||Object.getPrototypeOf(e)===Object.getPrototypeOf(r)?e:void 0;const o=ie(e);if(!s){let c;if(o&&(c=G_[n]))return c;if(n==="hasOwnProperty")return Y_}const u=Reflect.get(e,n,at(e)?e:r);if((mn(n)?rp.has(n):J_(n))||(s||ot(e,"get",n),i))return u;if(at(u)){const c=o&&Jc(n)?u:u.value;return s&&Ie(c)?hc(c):c}return Ie(u)?s?hc(u):nl(u):u}}class ip extends sp{constructor(e=!1){super(!1,e)}set(e,n,r,s){let i=e[n];const o=ie(e)&&Jc(n);if(!this._isShallow){const l=On(i);if(!Vt(r)&&!On(r)&&(i=Ee(i),r=Ee(r)),!o&&at(i)&&!at(r))return l||(i.value=r),!0}const u=o?Number(n)<e.length:ve(e,n),c=Reflect.set(e,n,r,at(e)?e:s);return e===Ee(s)&&(u?sn(r,i)&&xn(e,"set",n,r):xn(e,"add",n,r)),c}deleteProperty(e,n){const r=ve(e,n);e[n];const s=Reflect.deleteProperty(e,n);return s&&r&&xn(e,"delete",n,void 0),s}has(e,n){const r=Reflect.has(e,n);return(!mn(n)||!rp.has(n))&&ot(e,"has",n),r}ownKeys(e){return ot(e,"iterate",ie(e)?"length":Or),Reflect.ownKeys(e)}}class X_ extends sp{constructor(e=!1){super(!0,e)}set(e,n){return!0}deleteProperty(e,n){return!0}}const Z_=new ip,ey=new X_,ty=new ip(!0);const lc=t=>t,Co=t=>Reflect.getPrototypeOf(t);function ny(t,e,n){return function(...r){const s=this.__v_raw,i=Ee(s),o=ps(i),u=t==="entries"||t===Symbol.iterator&&o,c=t==="keys"&&o,l=s[t](...r),f=n?lc:e?Cs:$t;return!e&&ot(i,"iterate",c?cc:Or),ct(Object.create(l),{next(){const{value:p,done:g}=l.next();return g?{value:p,done:g}:{value:u?[f(p[0]),f(p[1])]:f(p),done:g}}})}}function xo(t){return function(...e){return t==="delete"?!1:t==="clear"?void 0:this}}function ry(t,e){const n={get(s){const i=this.__v_raw,o=Ee(i),u=Ee(s);t||(sn(s,u)&&ot(o,"get",s),ot(o,"get",u));const{has:c}=Co(o),l=e?lc:t?Cs:$t;if(c.call(o,s))return l(i.get(s));if(c.call(o,u))return l(i.get(u));i!==o&&i.get(s)},get size(){const s=this.__v_raw;return!t&&ot(Ee(s),"iterate",Or),s.size},has(s){const i=this.__v_raw,o=Ee(i),u=Ee(s);return t||(sn(s,u)&&ot(o,"has",s),ot(o,"has",u)),s===u?i.has(s):i.has(s)||i.has(u)},forEach(s,i){const o=this,u=o.__v_raw,c=Ee(u),l=e?lc:t?Cs:$t;return!t&&ot(c,"iterate",Or),u.forEach((f,p)=>s.call(i,l(f),l(p),o))}};return ct(n,t?{add:xo("add"),set:xo("set"),delete:xo("delete"),clear:xo("clear")}:{add(s){const i=Ee(this),o=Co(i),u=Ee(s),c=!e&&!Vt(s)&&!On(s)?u:s;return o.has.call(i,c)||sn(s,c)&&o.has.call(i,s)||sn(u,c)&&o.has.call(i,u)||(i.add(c),xn(i,"add",c,c)),this},set(s,i){!e&&!Vt(i)&&!On(i)&&(i=Ee(i));const o=Ee(this),{has:u,get:c}=Co(o);let l=u.call(o,s);l||(s=Ee(s),l=u.call(o,s));const f=c.call(o,s);return o.set(s,i),l?sn(i,f)&&xn(o,"set",s,i):xn(o,"add",s,i),this},delete(s){const i=Ee(this),{has:o,get:u}=Co(i);let c=o.call(i,s);c||(s=Ee(s),c=o.call(i,s)),u&&u.call(i,s);const l=i.delete(s);return c&&xn(i,"delete",s,void 0),l},clear(){const s=Ee(this),i=s.size!==0,o=s.clear();return i&&xn(s,"clear",void 0,void 0),o}}),["keys","values","entries",Symbol.iterator].forEach(s=>{n[s]=ny(s,t,e)}),n}function tl(t,e){const n=ry(t,e);return(r,s,i)=>s==="__v_isReactive"?!t:s==="__v_isReadonly"?t:s==="__v_raw"?r:Reflect.get(ve(n,s)&&s in r?n:r,s,i)}const sy={get:tl(!1,!1)},iy={get:tl(!1,!0)},oy={get:tl(!0,!1)};const op=new WeakMap,up=new WeakMap,ap=new WeakMap,uy=new WeakMap;function ay(t){switch(t){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function cy(t){return t.__v_skip||!Object.isExtensible(t)?0:ay(F_(t))}function nl(t){return On(t)?t:rl(t,!1,Z_,sy,op)}function ly(t){return rl(t,!1,ty,iy,up)}function hc(t){return rl(t,!0,ey,oy,ap)}function rl(t,e,n,r,s){if(!Ie(t)||t.__v_raw&&!(e&&t.__v_isReactive))return t;const i=cy(t);if(i===0)return t;const o=s.get(t);if(o)return o;const u=new Proxy(t,i===2?r:n);return s.set(t,u),u}function Vr(t){return On(t)?Vr(t.__v_raw):!!(t&&t.__v_isReactive)}function On(t){return!!(t&&t.__v_isReadonly)}function Vt(t){return!!(t&&t.__v_isShallow)}function sl(t){return t?!!t.__v_raw:!1}function Ee(t){const e=t&&t.__v_raw;return e?Ee(e):t}function hy(t){return!ve(t,"__v_skip")&&Object.isExtensible(t)&&$0(t,"__v_skip",!0),t}const $t=t=>Ie(t)?nl(t):t,Cs=t=>Ie(t)?hc(t):t;function at(t){return t?t.__v_isRef===!0:!1}function il(t){return fy(t,!1)}function fy(t,e){return at(t)?t:new dy(t,e)}class dy{constructor(e,n){this.dep=new el,this.__v_isRef=!0,this.__v_isShallow=!1,this._rawValue=n?e:Ee(e),this._value=n?e:$t(e),this.__v_isShallow=n}get value(){return this.dep.track(),this._value}set value(e){const n=this._rawValue,r=this.__v_isShallow||Vt(e)||On(e);e=r?e:Ee(e),sn(e,n)&&(this._rawValue=e,this._value=r?e:$t(e),this.dep.trigger())}}function py(t){return at(t)?t.value:t}const my={get:(t,e,n)=>e==="__v_raw"?t:py(Reflect.get(t,e,n)),set:(t,e,n,r)=>{const s=t[e];return at(s)&&!at(n)?(s.value=n,!0):Reflect.set(t,e,n,r)}};function cp(t){return Vr(t)?t:new Proxy(t,my)}class gy{constructor(e,n,r){this.fn=e,this.setter=n,this._value=void 0,this.dep=new el(this),this.__v_isRef=!0,this.deps=void 0,this.depsTail=void 0,this.flags=16,this.globalVersion=Ri-1,this.next=void 0,this.effect=this,this.__v_isReadonly=!n,this.isSSR=r}notify(){if(this.flags|=16,!(this.flags&8)&&ke!==this)return Y0(this,!0),!0}get value(){const e=this.dep.track();return ep(this),e&&(e.version=this.dep.version),this._value}set value(e){this.setter&&this.setter(e)}}function _y(t,e,n=!1){let r,s;return ae(t)?r=t:(r=t.get,s=t.set),new gy(r,s,n)}const ko={},Zo=new WeakMap;let Dr;function yy(t,e=!1,n=Dr){if(n){let r=Zo.get(n);r||Zo.set(n,r=[]),r.push(t)}}function by(t,e,n=Ce){const{immediate:r,deep:s,once:i,scheduler:o,augmentJob:u,call:c}=n,l=V=>s?V:Vt(V)||s===!1||s===0?kn(V,1):kn(V);let f,p,g,y,T=!1,R=!1;if(at(t)?(p=()=>t.value,T=Vt(t)):Vr(t)?(p=()=>l(t),T=!0):ie(t)?(R=!0,T=t.some(V=>Vr(V)||Vt(V)),p=()=>t.map(V=>{if(at(V))return V.value;if(Vr(V))return l(V);if(ae(V))return c?c(V,2):V()})):ae(t)?e?p=c?()=>c(t,2):t:p=()=>{if(g){Fn();try{g()}finally{Nn()}}const V=Dr;Dr=f;try{return c?c(t,3,[y]):t(y)}finally{Dr=V}}:p=an,e&&s){const V=p,K=s===!0?1/0:s;p=()=>kn(V(),K)}const F=$_(),$=()=>{f.stop(),F&&F.active&&Qc(F.effects,f)};if(i&&e){const V=e;e=(...K)=>{V(...K),$()}}let N=R?new Array(t.length).fill(ko):ko;const z=V=>{if(!(!(f.flags&1)||!f.dirty&&!V))if(e){const K=f.run();if(s||T||(R?K.some((Y,w)=>sn(Y,N[w])):sn(K,N))){g&&g();const Y=Dr;Dr=f;try{const w=[K,N===ko?void 0:R&&N[0]===ko?[]:N,y];N=K,c?c(e,3,w):e(...w)}finally{Dr=Y}}}else f.run()};return u&&u(z),f=new Q0(p),f.scheduler=o?()=>o(z,!1):z,y=V=>yy(V,!1,f),g=f.onStop=()=>{const V=Zo.get(f);if(V){if(c)c(V,4);else for(const K of V)K();Zo.delete(f)}},e?r?z(!0):N=f.run():o?o(z.bind(null,!0),!0):f.run(),$.pause=f.pause.bind(f),$.resume=f.resume.bind(f),$.stop=$,$}function kn(t,e=1/0,n){if(e<=0||!Ie(t)||t.__v_skip||(n=n||new Map,(n.get(t)||0)>=e))return t;if(n.set(t,e),e--,at(t))kn(t.value,e,n);else if(ie(t))for(let r=0;r<t.length;r++)kn(t[r],e,n);else if(Fu(t)||ps(t))t.forEach(r=>{kn(r,e,n)});else if(z0(t)){for(const r in t)kn(t[r],e,n);for(const r of Object.getOwnPropertySymbols(t))Object.prototype.propertyIsEnumerable.call(t,r)&&kn(t[r],e,n)}return t}/**
* @vue/runtime-core v3.5.32
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function Zi(t,e,n,r){try{return r?t(...r):t()}catch(s){Lu(s,e,n)}}function gn(t,e,n,r){if(ae(t)){const s=Zi(t,e,n,r);return s&&q0(s)&&s.catch(i=>{Lu(i,e,n)}),s}if(ie(t)){const s=[];for(let i=0;i<t.length;i++)s.push(gn(t[i],e,n,r));return s}}function Lu(t,e,n,r=!0){const s=e?e.vnode:null,{errorHandler:i,throwUnhandledErrorInProduction:o}=e&&e.appContext.config||Ce;if(e){let u=e.parent;const c=e.proxy,l=`https://vuejs.org/error-reference/#runtime-${n}`;for(;u;){const f=u.ec;if(f){for(let p=0;p<f.length;p++)if(f[p](t,c,l)===!1)return}u=u.parent}if(i){Fn(),Zi(i,null,10,[t,c,l]),Nn();return}}Ey(t,n,s,r,o)}function Ey(t,e,n,r=!0,s=!1){if(s)throw t;console.error(t)}const pt=[];let en=-1;const gs=[];let Qn=null,us=0;const lp=Promise.resolve();let eu=null;function hp(t){const e=eu||lp;return t?e.then(this?t.bind(this):t):e}function vy(t){let e=en+1,n=pt.length;for(;e<n;){const r=e+n>>>1,s=pt[r],i=Fi(s);i<t||i===t&&s.flags&2?e=r+1:n=r}return e}function ol(t){if(!(t.flags&1)){const e=Fi(t),n=pt[pt.length-1];!n||!(t.flags&2)&&e>=Fi(n)?pt.push(t):pt.splice(vy(e),0,t),t.flags|=1,fp()}}function fp(){eu||(eu=lp.then(pp))}function wy(t){ie(t)?gs.push(...t):Qn&&t.id===-1?Qn.splice(us+1,0,t):t.flags&1||(gs.push(t),t.flags|=1),fp()}function lf(t,e,n=en+1){for(;n<pt.length;n++){const r=pt[n];if(r&&r.flags&2){if(t&&r.id!==t.uid)continue;pt.splice(n,1),n--,r.flags&4&&(r.flags&=-2),r(),r.flags&4||(r.flags&=-2)}}}function dp(t){if(gs.length){const e=[...new Set(gs)].sort((n,r)=>Fi(n)-Fi(r));if(gs.length=0,Qn){Qn.push(...e);return}for(Qn=e,us=0;us<Qn.length;us++){const n=Qn[us];n.flags&4&&(n.flags&=-2),n.flags&8||n(),n.flags&=-2}Qn=null,us=0}}const Fi=t=>t.id==null?t.flags&2?-1:1/0:t.id;function pp(t){try{for(en=0;en<pt.length;en++){const e=pt[en];e&&!(e.flags&8)&&(e.flags&4&&(e.flags&=-2),Zi(e,e.i,e.i?15:14),e.flags&4||(e.flags&=-2))}}finally{for(;en<pt.length;en++){const e=pt[en];e&&(e.flags&=-2)}en=-1,pt.length=0,dp(),eu=null,(pt.length||gs.length)&&pp()}}let Ot=null,mp=null;function tu(t){const e=Ot;return Ot=t,mp=t&&t.type.__scopeId||null,e}function Ty(t,e=Ot,n){if(!e||t._n)return t;const r=(...s)=>{r._d&&vf(-1);const i=tu(e);let o;try{o=t(...s)}finally{tu(i),r._d&&vf(1)}return o};return r._n=!0,r._c=!0,r._d=!0,r}function Ct(t,e){if(Ot===null)return t;const n=ju(Ot),r=t.dirs||(t.dirs=[]);for(let s=0;s<e.length;s++){let[i,o,u,c=Ce]=e[s];i&&(ae(i)&&(i={mounted:i,updated:i}),i.deep&&kn(o),r.push({dir:i,instance:n,value:o,oldValue:void 0,arg:u,modifiers:c}))}return t}function kr(t,e,n,r){const s=t.dirs,i=e&&e.dirs;for(let o=0;o<s.length;o++){const u=s[o];i&&(u.oldValue=i[o].value);let c=u.dir[r];c&&(Fn(),gn(c,n,8,[t.el,u,t,e]),Nn())}}function Iy(t,e){if(mt){let n=mt.provides;const r=mt.parent&&mt.parent.provides;r===n&&(n=mt.provides=Object.create(r)),n[t]=e}}function Uo(t,e,n=!1){const r=I2();if(r||_s){let s=_s?_s._context.provides:r?r.parent==null||r.ce?r.vnode.appContext&&r.vnode.appContext.provides:r.parent.provides:void 0;if(s&&t in s)return s[t];if(arguments.length>1)return n&&ae(e)?e.call(r&&r.proxy):e}}const Ay=Symbol.for("v-scx"),Cy=()=>Uo(Ay);function Pa(t,e,n){return gp(t,e,n)}function gp(t,e,n=Ce){const{immediate:r,deep:s,flush:i,once:o}=n,u=ct({},n),c=e&&r||!e&&i!=="post";let l;if(Oi){if(i==="sync"){const y=Cy();l=y.__watcherHandles||(y.__watcherHandles=[])}else if(!c){const y=()=>{};return y.stop=an,y.resume=an,y.pause=an,y}}const f=mt;u.call=(y,T,R)=>gn(y,f,T,R);let p=!1;i==="post"?u.scheduler=y=>{_t(y,f&&f.suspense)}:i!=="sync"&&(p=!0,u.scheduler=(y,T)=>{T?y():ol(y)}),u.augmentJob=y=>{e&&(y.flags|=4),p&&(y.flags|=2,f&&(y.id=f.uid,y.i=f))};const g=by(t,e,u);return Oi&&(l?l.push(g):c&&g()),g}function xy(t,e,n){const r=this.proxy,s=qe(t)?t.includes(".")?_p(r,t):()=>r[t]:t.bind(r,r);let i;ae(e)?i=e:(i=e.handler,n=e);const o=eo(this),u=gp(s,i.bind(r),n);return o(),u}function _p(t,e){const n=e.split(".");return()=>{let r=t;for(let s=0;s<n.length&&r;s++)r=r[n[s]];return r}}const ky=Symbol("_vte"),Sy=t=>t.__isTeleport,Dy=Symbol("_leaveCb");function ul(t,e){t.shapeFlag&6&&t.component?(t.transition=e,ul(t.component.subTree,e)):t.shapeFlag&128?(t.ssContent.transition=e.clone(t.ssContent),t.ssFallback.transition=e.clone(t.ssFallback)):t.transition=e}function yp(t){t.ids=[t.ids[0]+t.ids[2]+++"-",0,0]}function hf(t,e){let n;return!!((n=Object.getOwnPropertyDescriptor(t,e))&&!n.configurable)}const nu=new WeakMap;function Ei(t,e,n,r,s=!1){if(ie(t)){t.forEach((R,F)=>Ei(R,e&&(ie(e)?e[F]:e),n,r,s));return}if(vi(r)&&!s){r.shapeFlag&512&&r.type.__asyncResolved&&r.component.subTree.component&&Ei(t,e,n,r.component.subTree);return}const i=r.shapeFlag&4?ju(r.component):r.el,o=s?null:i,{i:u,r:c}=t,l=e&&e.r,f=u.refs===Ce?u.refs={}:u.refs,p=u.setupState,g=Ee(p),y=p===Ce?B0:R=>hf(f,R)?!1:ve(g,R),T=(R,F)=>!(F&&hf(f,F));if(l!=null&&l!==c){if(ff(e),qe(l))f[l]=null,y(l)&&(p[l]=null);else if(at(l)){const R=e;T(l,R.k)&&(l.value=null),R.k&&(f[R.k]=null)}}if(ae(c))Zi(c,u,12,[o,f]);else{const R=qe(c),F=at(c);if(R||F){const $=()=>{if(t.f){const N=R?y(c)?p[c]:f[c]:T()||!t.k?c.value:f[t.k];if(s)ie(N)&&Qc(N,i);else if(ie(N))N.includes(i)||N.push(i);else if(R)f[c]=[i],y(c)&&(p[c]=f[c]);else{const z=[i];T(c,t.k)&&(c.value=z),t.k&&(f[t.k]=z)}}else R?(f[c]=o,y(c)&&(p[c]=o)):F&&(T(c,t.k)&&(c.value=o),t.k&&(f[t.k]=o))};if(o){const N=()=>{$(),nu.delete(t)};N.id=-1,nu.set(t,N),_t(N,n)}else ff(t),$()}}}function ff(t){const e=nu.get(t);e&&(e.flags|=8,nu.delete(t))}Vu().requestIdleCallback;Vu().cancelIdleCallback;const vi=t=>!!t.type.__asyncLoader,bp=t=>t.type.__isKeepAlive;function Ry(t,e){Ep(t,"a",e)}function Py(t,e){Ep(t,"da",e)}function Ep(t,e,n=mt){const r=t.__wdc||(t.__wdc=()=>{let s=n;for(;s;){if(s.isDeactivated)return;s=s.parent}return t()});if(Uu(e,r,n),n){let s=n.parent;for(;s&&s.parent;)bp(s.parent.vnode)&&Fy(r,e,n,s),s=s.parent}}function Fy(t,e,n,r){const s=Uu(e,t,r,!0);vp(()=>{Qc(r[e],s)},n)}function Uu(t,e,n=mt,r=!1){if(n){const s=n[t]||(n[t]=[]),i=e.__weh||(e.__weh=(...o)=>{Fn();const u=eo(n),c=gn(e,n,t,o);return u(),Nn(),c});return r?s.unshift(i):s.push(i),i}}const Bn=t=>(e,n=mt)=>{(!Oi||t==="sp")&&Uu(t,(...r)=>e(...r),n)},Ny=Bn("bm"),Oy=Bn("m"),Vy=Bn("bu"),My=Bn("u"),Ly=Bn("bum"),vp=Bn("um"),Uy=Bn("sp"),By=Bn("rtg"),qy=Bn("rtc");function jy(t,e=mt){Uu("ec",t,e)}const zy=Symbol.for("v-ndc");function ui(t,e,n,r){let s;const i=n,o=ie(t);if(o||qe(t)){const u=o&&Vr(t);let c=!1,l=!1;u&&(c=!Vt(t),l=On(t),t=Mu(t)),s=new Array(t.length);for(let f=0,p=t.length;f<p;f++)s[f]=e(c?l?Cs($t(t[f])):$t(t[f]):t[f],f,void 0,i)}else if(typeof t=="number"){s=new Array(t);for(let u=0;u<t;u++)s[u]=e(u+1,u,void 0,i)}else if(Ie(t))if(t[Symbol.iterator])s=Array.from(t,(u,c)=>e(u,c,void 0,i));else{const u=Object.keys(t);s=new Array(u.length);for(let c=0,l=u.length;c<l;c++){const f=u[c];s[c]=e(t[f],f,c,i)}}else s=[];return s}const fc=t=>t?jp(t)?ju(t):fc(t.parent):null,wi=ct(Object.create(null),{$:t=>t,$el:t=>t.vnode.el,$data:t=>t.data,$props:t=>t.props,$attrs:t=>t.attrs,$slots:t=>t.slots,$refs:t=>t.refs,$parent:t=>fc(t.parent),$root:t=>fc(t.root),$host:t=>t.ce,$emit:t=>t.emit,$options:t=>Tp(t),$forceUpdate:t=>t.f||(t.f=()=>{ol(t.update)}),$nextTick:t=>t.n||(t.n=hp.bind(t.proxy)),$watch:t=>xy.bind(t)}),Fa=(t,e)=>t!==Ce&&!t.__isScriptSetup&&ve(t,e),Hy={get({_:t},e){if(e==="__v_skip")return!0;const{ctx:n,setupState:r,data:s,props:i,accessCache:o,type:u,appContext:c}=t;if(e[0]!=="$"){const g=o[e];if(g!==void 0)switch(g){case 1:return r[e];case 2:return s[e];case 4:return n[e];case 3:return i[e]}else{if(Fa(r,e))return o[e]=1,r[e];if(s!==Ce&&ve(s,e))return o[e]=2,s[e];if(ve(i,e))return o[e]=3,i[e];if(n!==Ce&&ve(n,e))return o[e]=4,n[e];dc&&(o[e]=0)}}const l=wi[e];let f,p;if(l)return e==="$attrs"&&ot(t.attrs,"get",""),l(t);if((f=u.__cssModules)&&(f=f[e]))return f;if(n!==Ce&&ve(n,e))return o[e]=4,n[e];if(p=c.config.globalProperties,ve(p,e))return p[e]},set({_:t},e,n){const{data:r,setupState:s,ctx:i}=t;return Fa(s,e)?(s[e]=n,!0):r!==Ce&&ve(r,e)?(r[e]=n,!0):ve(t.props,e)||e[0]==="$"&&e.slice(1)in t?!1:(i[e]=n,!0)},has({_:{data:t,setupState:e,accessCache:n,ctx:r,appContext:s,props:i,type:o}},u){let c;return!!(n[u]||t!==Ce&&u[0]!=="$"&&ve(t,u)||Fa(e,u)||ve(i,u)||ve(r,u)||ve(wi,u)||ve(s.config.globalProperties,u)||(c=o.__cssModules)&&c[u])},defineProperty(t,e,n){return n.get!=null?t._.accessCache[e]=0:ve(n,"value")&&this.set(t,e,n.value,null),Reflect.defineProperty(t,e,n)}};function df(t){return ie(t)?t.reduce((e,n)=>(e[n]=null,e),{}):t}let dc=!0;function $y(t){const e=Tp(t),n=t.proxy,r=t.ctx;dc=!1,e.beforeCreate&&pf(e.beforeCreate,t,"bc");const{data:s,computed:i,methods:o,watch:u,provide:c,inject:l,created:f,beforeMount:p,mounted:g,beforeUpdate:y,updated:T,activated:R,deactivated:F,beforeDestroy:$,beforeUnmount:N,destroyed:z,unmounted:V,render:K,renderTracked:Y,renderTriggered:w,errorCaptured:_,serverPrefetch:v,expose:A,inheritAttrs:I,components:k,directives:E,filters:Me}=e;if(l&&Wy(l,r,null),o)for(const De in o){const _e=o[De];ae(_e)&&(r[De]=_e.bind(n))}if(s){const De=s.call(n,n);Ie(De)&&(t.data=nl(De))}if(dc=!0,i)for(const De in i){const _e=i[De],Dt=ae(_e)?_e.bind(n,n):ae(_e.get)?_e.get.bind(n,n):an,Zr=!ae(_e)&&ae(_e.set)?_e.set.bind(n):an,Jt=Hp({get:Dt,set:Zr});Object.defineProperty(r,De,{enumerable:!0,configurable:!0,get:()=>Jt.value,set:wt=>Jt.value=wt})}if(u)for(const De in u)wp(u[De],r,n,De);if(c){const De=ae(c)?c.call(n):c;Reflect.ownKeys(De).forEach(_e=>{Iy(_e,De[_e])})}f&&pf(f,t,"c");function je(De,_e){ie(_e)?_e.forEach(Dt=>De(Dt.bind(n))):_e&&De(_e.bind(n))}if(je(Ny,p),je(Oy,g),je(Vy,y),je(My,T),je(Ry,R),je(Py,F),je(jy,_),je(qy,Y),je(By,w),je(Ly,N),je(vp,V),je(Uy,v),ie(A))if(A.length){const De=t.exposed||(t.exposed={});A.forEach(_e=>{Object.defineProperty(De,_e,{get:()=>n[_e],set:Dt=>n[_e]=Dt,enumerable:!0})})}else t.exposed||(t.exposed={});K&&t.render===an&&(t.render=K),I!=null&&(t.inheritAttrs=I),k&&(t.components=k),E&&(t.directives=E),v&&yp(t)}function Wy(t,e,n=an){ie(t)&&(t=pc(t));for(const r in t){const s=t[r];let i;Ie(s)?"default"in s?i=Uo(s.from||r,s.default,!0):i=Uo(s.from||r):i=Uo(s),at(i)?Object.defineProperty(e,r,{enumerable:!0,configurable:!0,get:()=>i.value,set:o=>i.value=o}):e[r]=i}}function pf(t,e,n){gn(ie(t)?t.map(r=>r.bind(e.proxy)):t.bind(e.proxy),e,n)}function wp(t,e,n,r){let s=r.includes(".")?_p(n,r):()=>n[r];if(qe(t)){const i=e[t];ae(i)&&Pa(s,i)}else if(ae(t))Pa(s,t.bind(n));else if(Ie(t))if(ie(t))t.forEach(i=>wp(i,e,n,r));else{const i=ae(t.handler)?t.handler.bind(n):e[t.handler];ae(i)&&Pa(s,i,t)}}function Tp(t){const e=t.type,{mixins:n,extends:r}=e,{mixins:s,optionsCache:i,config:{optionMergeStrategies:o}}=t.appContext,u=i.get(e);let c;return u?c=u:!s.length&&!n&&!r?c=e:(c={},s.length&&s.forEach(l=>ru(c,l,o,!0)),ru(c,e,o)),Ie(e)&&i.set(e,c),c}function ru(t,e,n,r=!1){const{mixins:s,extends:i}=e;i&&ru(t,i,n,!0),s&&s.forEach(o=>ru(t,o,n,!0));for(const o in e)if(!(r&&o==="expose")){const u=Ky[o]||n&&n[o];t[o]=u?u(t[o],e[o]):e[o]}return t}const Ky={data:mf,props:gf,emits:gf,methods:li,computed:li,beforeCreate:dt,created:dt,beforeMount:dt,mounted:dt,beforeUpdate:dt,updated:dt,beforeDestroy:dt,beforeUnmount:dt,destroyed:dt,unmounted:dt,activated:dt,deactivated:dt,errorCaptured:dt,serverPrefetch:dt,components:li,directives:li,watch:Qy,provide:mf,inject:Gy};function mf(t,e){return e?t?function(){return ct(ae(t)?t.call(this,this):t,ae(e)?e.call(this,this):e)}:e:t}function Gy(t,e){return li(pc(t),pc(e))}function pc(t){if(ie(t)){const e={};for(let n=0;n<t.length;n++)e[t[n]]=t[n];return e}return t}function dt(t,e){return t?[...new Set([].concat(t,e))]:e}function li(t,e){return t?ct(Object.create(null),t,e):e}function gf(t,e){return t?ie(t)&&ie(e)?[...new Set([...t,...e])]:ct(Object.create(null),df(t),df(e??{})):e}function Qy(t,e){if(!t)return e;if(!e)return t;const n=ct(Object.create(null),t);for(const r in e)n[r]=dt(t[r],e[r]);return n}function Ip(){return{app:null,config:{isNativeTag:B0,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let Jy=0;function Yy(t,e){return function(r,s=null){ae(r)||(r=ct({},r)),s!=null&&!Ie(s)&&(s=null);const i=Ip(),o=new WeakSet,u=[];let c=!1;const l=i.app={_uid:Jy++,_component:r,_props:s,_container:null,_context:i,_instance:null,version:D2,get config(){return i.config},set config(f){},use(f,...p){return o.has(f)||(f&&ae(f.install)?(o.add(f),f.install(l,...p)):ae(f)&&(o.add(f),f(l,...p))),l},mixin(f){return i.mixins.includes(f)||i.mixins.push(f),l},component(f,p){return p?(i.components[f]=p,l):i.components[f]},directive(f,p){return p?(i.directives[f]=p,l):i.directives[f]},mount(f,p,g){if(!c){const y=l._ceVNode||cn(r,s);return y.appContext=i,g===!0?g="svg":g===!1&&(g=void 0),t(y,f,g),c=!0,l._container=f,f.__vue_app__=l,ju(y.component)}},onUnmount(f){u.push(f)},unmount(){c&&(gn(u,l._instance,16),t(null,l._container),delete l._container.__vue_app__)},provide(f,p){return i.provides[f]=p,l},runWithContext(f){const p=_s;_s=l;try{return f()}finally{_s=p}}};return l}}let _s=null;const Xy=(t,e)=>e==="modelValue"||e==="model-value"?t.modelModifiers:t[`${e}Modifiers`]||t[`${jt(e)}Modifiers`]||t[`${$r(e)}Modifiers`];function Zy(t,e,...n){if(t.isUnmounted)return;const r=t.vnode.props||Ce;let s=n;const i=e.startsWith("update:"),o=i&&Xy(r,e.slice(7));o&&(o.trim&&(s=n.map(f=>qe(f)?f.trim():f)),o.number&&(s=n.map(Ou)));let u,c=r[u=xa(e)]||r[u=xa(jt(e))];!c&&i&&(c=r[u=xa($r(e))]),c&&gn(c,t,6,s);const l=r[u+"Once"];if(l){if(!t.emitted)t.emitted={};else if(t.emitted[u])return;t.emitted[u]=!0,gn(l,t,6,s)}}const e2=new WeakMap;function Ap(t,e,n=!1){const r=n?e2:e.emitsCache,s=r.get(t);if(s!==void 0)return s;const i=t.emits;let o={},u=!1;if(!ae(t)){const c=l=>{const f=Ap(l,e,!0);f&&(u=!0,ct(o,f))};!n&&e.mixins.length&&e.mixins.forEach(c),t.extends&&c(t.extends),t.mixins&&t.mixins.forEach(c)}return!i&&!u?(Ie(t)&&r.set(t,null),null):(ie(i)?i.forEach(c=>o[c]=null):ct(o,i),Ie(t)&&r.set(t,o),o)}function Bu(t,e){return!t||!Ru(e)?!1:(e=e.slice(2).replace(/Once$/,""),ve(t,e[0].toLowerCase()+e.slice(1))||ve(t,$r(e))||ve(t,e))}function _f(t){const{type:e,vnode:n,proxy:r,withProxy:s,propsOptions:[i],slots:o,attrs:u,emit:c,render:l,renderCache:f,props:p,data:g,setupState:y,ctx:T,inheritAttrs:R}=t,F=tu(t);let $,N;try{if(n.shapeFlag&4){const V=s||r,K=V;$=rn(l.call(K,V,f,p,y,g,T)),N=u}else{const V=e;$=rn(V.length>1?V(p,{attrs:u,slots:o,emit:c}):V(p,null)),N=e.props?u:t2(u)}}catch(V){Ti.length=0,Lu(V,t,1),$=cn(cr)}let z=$;if(N&&R!==!1){const V=Object.keys(N),{shapeFlag:K}=z;V.length&&K&7&&(i&&V.some(Pu)&&(N=n2(N,i)),z=xs(z,N,!1,!0))}return n.dirs&&(z=xs(z,null,!1,!0),z.dirs=z.dirs?z.dirs.concat(n.dirs):n.dirs),n.transition&&ul(z,n.transition),$=z,tu(F),$}const t2=t=>{let e;for(const n in t)(n==="class"||n==="style"||Ru(n))&&((e||(e={}))[n]=t[n]);return e},n2=(t,e)=>{const n={};for(const r in t)(!Pu(r)||!(r.slice(9)in e))&&(n[r]=t[r]);return n};function r2(t,e,n){const{props:r,children:s,component:i}=t,{props:o,children:u,patchFlag:c}=e,l=i.emitsOptions;if(e.dirs||e.transition)return!0;if(n&&c>=0){if(c&1024)return!0;if(c&16)return r?yf(r,o,l):!!o;if(c&8){const f=e.dynamicProps;for(let p=0;p<f.length;p++){const g=f[p];if(Cp(o,r,g)&&!Bu(l,g))return!0}}}else return(s||u)&&(!u||!u.$stable)?!0:r===o?!1:r?o?yf(r,o,l):!0:!!o;return!1}function yf(t,e,n){const r=Object.keys(e);if(r.length!==Object.keys(t).length)return!0;for(let s=0;s<r.length;s++){const i=r[s];if(Cp(e,t,i)&&!Bu(n,i))return!0}return!1}function Cp(t,e,n){const r=t[n],s=e[n];return n==="style"&&Ie(r)&&Ie(s)?!Xi(r,s):r!==s}function s2({vnode:t,parent:e,suspense:n},r){for(;e;){const s=e.subTree;if(s.suspense&&s.suspense.activeBranch===t&&(s.suspense.vnode.el=s.el=r,t=s),s===t)(t=e.vnode).el=r,e=e.parent;else break}n&&n.activeBranch===t&&(n.vnode.el=r)}const xp={},kp=()=>Object.create(xp),Sp=t=>Object.getPrototypeOf(t)===xp;function i2(t,e,n,r=!1){const s={},i=kp();t.propsDefaults=Object.create(null),Dp(t,e,s,i);for(const o in t.propsOptions[0])o in s||(s[o]=void 0);n?t.props=r?s:ly(s):t.type.props?t.props=s:t.props=i,t.attrs=i}function o2(t,e,n,r){const{props:s,attrs:i,vnode:{patchFlag:o}}=t,u=Ee(s),[c]=t.propsOptions;let l=!1;if((r||o>0)&&!(o&16)){if(o&8){const f=t.vnode.dynamicProps;for(let p=0;p<f.length;p++){let g=f[p];if(Bu(t.emitsOptions,g))continue;const y=e[g];if(c)if(ve(i,g))y!==i[g]&&(i[g]=y,l=!0);else{const T=jt(g);s[T]=mc(c,u,T,y,t,!1)}else y!==i[g]&&(i[g]=y,l=!0)}}}else{Dp(t,e,s,i)&&(l=!0);let f;for(const p in u)(!e||!ve(e,p)&&((f=$r(p))===p||!ve(e,f)))&&(c?n&&(n[p]!==void 0||n[f]!==void 0)&&(s[p]=mc(c,u,p,void 0,t,!0)):delete s[p]);if(i!==u)for(const p in i)(!e||!ve(e,p))&&(delete i[p],l=!0)}l&&xn(t.attrs,"set","")}function Dp(t,e,n,r){const[s,i]=t.propsOptions;let o=!1,u;if(e)for(let c in e){if(_i(c))continue;const l=e[c];let f;s&&ve(s,f=jt(c))?!i||!i.includes(f)?n[f]=l:(u||(u={}))[f]=l:Bu(t.emitsOptions,c)||(!(c in r)||l!==r[c])&&(r[c]=l,o=!0)}if(i){const c=Ee(n),l=u||Ce;for(let f=0;f<i.length;f++){const p=i[f];n[p]=mc(s,c,p,l[p],t,!ve(l,p))}}return o}function mc(t,e,n,r,s,i){const o=t[n];if(o!=null){const u=ve(o,"default");if(u&&r===void 0){const c=o.default;if(o.type!==Function&&!o.skipFactory&&ae(c)){const{propsDefaults:l}=s;if(n in l)r=l[n];else{const f=eo(s);r=l[n]=c.call(null,e),f()}}else r=c;s.ce&&s.ce._setProp(n,r)}o[0]&&(i&&!u?r=!1:o[1]&&(r===""||r===$r(n))&&(r=!0))}return r}const u2=new WeakMap;function Rp(t,e,n=!1){const r=n?u2:e.propsCache,s=r.get(t);if(s)return s;const i=t.props,o={},u=[];let c=!1;if(!ae(t)){const f=p=>{c=!0;const[g,y]=Rp(p,e,!0);ct(o,g),y&&u.push(...y)};!n&&e.mixins.length&&e.mixins.forEach(f),t.extends&&f(t.extends),t.mixins&&t.mixins.forEach(f)}if(!i&&!c)return Ie(t)&&r.set(t,ds),ds;if(ie(i))for(let f=0;f<i.length;f++){const p=jt(i[f]);bf(p)&&(o[p]=Ce)}else if(i)for(const f in i){const p=jt(f);if(bf(p)){const g=i[f],y=o[p]=ie(g)||ae(g)?{type:g}:ct({},g),T=y.type;let R=!1,F=!0;if(ie(T))for(let $=0;$<T.length;++$){const N=T[$],z=ae(N)&&N.name;if(z==="Boolean"){R=!0;break}else z==="String"&&(F=!1)}else R=ae(T)&&T.name==="Boolean";y[0]=R,y[1]=F,(R||ve(y,"default"))&&u.push(p)}}const l=[o,u];return Ie(t)&&r.set(t,l),l}function bf(t){return t[0]!=="$"&&!_i(t)}const al=t=>t==="_"||t==="_ctx"||t==="$stable",cl=t=>ie(t)?t.map(rn):[rn(t)],a2=(t,e,n)=>{if(e._n)return e;const r=Ty((...s)=>cl(e(...s)),n);return r._c=!1,r},Pp=(t,e,n)=>{const r=t._ctx;for(const s in t){if(al(s))continue;const i=t[s];if(ae(i))e[s]=a2(s,i,r);else if(i!=null){const o=cl(i);e[s]=()=>o}}},Fp=(t,e)=>{const n=cl(e);t.slots.default=()=>n},Np=(t,e,n)=>{for(const r in e)(n||!al(r))&&(t[r]=e[r])},c2=(t,e,n)=>{const r=t.slots=kp();if(t.vnode.shapeFlag&32){const s=e._;s?(Np(r,e,n),n&&$0(r,"_",s,!0)):Pp(e,r)}else e&&Fp(t,e)},l2=(t,e,n)=>{const{vnode:r,slots:s}=t;let i=!0,o=Ce;if(r.shapeFlag&32){const u=e._;u?n&&u===1?i=!1:Np(s,e,n):(i=!e.$stable,Pp(e,s)),o=e}else e&&(Fp(t,e),o={default:1});if(i)for(const u in s)!al(u)&&o[u]==null&&delete s[u]},_t=m2;function h2(t){return f2(t)}function f2(t,e){const n=Vu();n.__VUE__=!0;const{insert:r,remove:s,patchProp:i,createElement:o,createText:u,createComment:c,setText:l,setElementText:f,parentNode:p,nextSibling:g,setScopeId:y=an,insertStaticContent:T}=t,R=(b,C,P,q=null,M=null,B=null,G=void 0,H=null,j=!!C.dynamicChildren)=>{if(b===C)return;b&&!ai(b,C)&&(q=qn(b),wt(b,M,B,!0),b=null),C.patchFlag===-2&&(j=!1,C.dynamicChildren=null);const{type:L,ref:te,shapeFlag:Q}=C;switch(L){case qu:F(b,C,P,q);break;case cr:$(b,C,P,q);break;case Bo:b==null&&N(C,P,q,G);break;case Et:k(b,C,P,q,M,B,G,H,j);break;default:Q&1?K(b,C,P,q,M,B,G,H,j):Q&6?E(b,C,P,q,M,B,G,H,j):(Q&64||Q&128)&&L.process(b,C,P,q,M,B,G,H,j,wr)}te!=null&&M?Ei(te,b&&b.ref,B,C||b,!C):te==null&&b&&b.ref!=null&&Ei(b.ref,null,B,b,!0)},F=(b,C,P,q)=>{if(b==null)r(C.el=u(C.children),P,q);else{const M=C.el=b.el;C.children!==b.children&&l(M,C.children)}},$=(b,C,P,q)=>{b==null?r(C.el=c(C.children||""),P,q):C.el=b.el},N=(b,C,P,q)=>{[b.el,b.anchor]=T(b.children,C,P,q,b.el,b.anchor)},z=({el:b,anchor:C},P,q)=>{let M;for(;b&&b!==C;)M=g(b),r(b,P,q),b=M;r(C,P,q)},V=({el:b,anchor:C})=>{let P;for(;b&&b!==C;)P=g(b),s(b),b=P;s(C)},K=(b,C,P,q,M,B,G,H,j)=>{if(C.type==="svg"?G="svg":C.type==="math"&&(G="mathml"),b==null)Y(C,P,q,M,B,G,H,j);else{const L=b.el&&b.el._isVueCE?b.el:null;try{L&&L._beginPatch(),v(b,C,M,B,G,H,j)}finally{L&&L._endPatch()}}},Y=(b,C,P,q,M,B,G,H)=>{let j,L;const{props:te,shapeFlag:Q,transition:Z,dirs:ne}=b;if(j=b.el=o(b.type,B,te&&te.is,te),Q&8?f(j,b.children):Q&16&&_(b.children,j,null,q,M,Na(b,B),G,H),ne&&kr(b,null,q,"created"),w(j,b,b.scopeId,G,q),te){for(const ye in te)ye!=="value"&&!_i(ye)&&i(j,ye,null,te[ye],B,q);"value"in te&&i(j,"value",null,te.value,B),(L=te.onVnodeBeforeMount)&&Zt(L,q,b)}ne&&kr(b,null,q,"beforeMount");const me=d2(M,Z);me&&Z.beforeEnter(j),r(j,C,P),((L=te&&te.onVnodeMounted)||me||ne)&&_t(()=>{try{L&&Zt(L,q,b),me&&Z.enter(j),ne&&kr(b,null,q,"mounted")}finally{}},M)},w=(b,C,P,q,M)=>{if(P&&y(b,P),q)for(let B=0;B<q.length;B++)y(b,q[B]);if(M){let B=M.subTree;if(C===B||Lp(B.type)&&(B.ssContent===C||B.ssFallback===C)){const G=M.vnode;w(b,G,G.scopeId,G.slotScopeIds,M.parent)}}},_=(b,C,P,q,M,B,G,H,j=0)=>{for(let L=j;L<b.length;L++){const te=b[L]=H?Cn(b[L]):rn(b[L]);R(null,te,C,P,q,M,B,G,H)}},v=(b,C,P,q,M,B,G)=>{const H=C.el=b.el;let{patchFlag:j,dynamicChildren:L,dirs:te}=C;j|=b.patchFlag&16;const Q=b.props||Ce,Z=C.props||Ce;let ne;if(P&&Sr(P,!1),(ne=Z.onVnodeBeforeUpdate)&&Zt(ne,P,C,b),te&&kr(C,b,P,"beforeUpdate"),P&&Sr(P,!0),(Q.innerHTML&&Z.innerHTML==null||Q.textContent&&Z.textContent==null)&&f(H,""),L?A(b.dynamicChildren,L,H,P,q,Na(C,M),B):G||_e(b,C,H,null,P,q,Na(C,M),B,!1),j>0){if(j&16)I(H,Q,Z,P,M);else if(j&2&&Q.class!==Z.class&&i(H,"class",null,Z.class,M),j&4&&i(H,"style",Q.style,Z.style,M),j&8){const me=C.dynamicProps;for(let ye=0;ye<me.length;ye++){const be=me[ye],Oe=Q[be],ze=Z[be];(ze!==Oe||be==="value")&&i(H,be,Oe,ze,M,P)}}j&1&&b.children!==C.children&&f(H,C.children)}else!G&&L==null&&I(H,Q,Z,P,M);((ne=Z.onVnodeUpdated)||te)&&_t(()=>{ne&&Zt(ne,P,C,b),te&&kr(C,b,P,"updated")},q)},A=(b,C,P,q,M,B,G)=>{for(let H=0;H<C.length;H++){const j=b[H],L=C[H],te=j.el&&(j.type===Et||!ai(j,L)||j.shapeFlag&198)?p(j.el):P;R(j,L,te,null,q,M,B,G,!0)}},I=(b,C,P,q,M)=>{if(C!==P){if(C!==Ce)for(const B in C)!_i(B)&&!(B in P)&&i(b,B,C[B],null,M,q);for(const B in P){if(_i(B))continue;const G=P[B],H=C[B];G!==H&&B!=="value"&&i(b,B,H,G,M,q)}"value"in P&&i(b,"value",C.value,P.value,M)}},k=(b,C,P,q,M,B,G,H,j)=>{const L=C.el=b?b.el:u(""),te=C.anchor=b?b.anchor:u("");let{patchFlag:Q,dynamicChildren:Z,slotScopeIds:ne}=C;ne&&(H=H?H.concat(ne):ne),b==null?(r(L,P,q),r(te,P,q),_(C.children||[],P,te,M,B,G,H,j)):Q>0&&Q&64&&Z&&b.dynamicChildren&&b.dynamicChildren.length===Z.length?(A(b.dynamicChildren,Z,P,M,B,G,H),(C.key!=null||M&&C===M.subTree)&&Op(b,C,!0)):_e(b,C,P,te,M,B,G,H,j)},E=(b,C,P,q,M,B,G,H,j)=>{C.slotScopeIds=H,b==null?C.shapeFlag&512?M.ctx.activate(C,P,q,G,j):Me(C,P,q,M,B,G,j):Ze(b,C,j)},Me=(b,C,P,q,M,B,G)=>{const H=b.component=T2(b,q,M);if(bp(b)&&(H.ctx.renderer=wr),A2(H,!1,G),H.asyncDep){if(M&&M.registerDep(H,je,G),!b.el){const j=H.subTree=cn(cr);$(null,j,C,P),b.placeholder=j.el}}else je(H,b,C,P,M,B,G)},Ze=(b,C,P)=>{const q=C.component=b.component;if(r2(b,C,P))if(q.asyncDep&&!q.asyncResolved){De(q,C,P);return}else q.next=C,q.update();else C.el=b.el,q.vnode=C},je=(b,C,P,q,M,B,G)=>{const H=()=>{if(b.isMounted){let{next:Q,bu:Z,u:ne,parent:me,vnode:ye}=b;{const It=Vp(b);if(It){Q&&(Q.el=ye.el,De(b,Q,G)),It.asyncDep.then(()=>{_t(()=>{b.isUnmounted||L()},M)});return}}let be=Q,Oe;Sr(b,!1),Q?(Q.el=ye.el,De(b,Q,G)):Q=ye,Z&&Lo(Z),(Oe=Q.props&&Q.props.onVnodeBeforeUpdate)&&Zt(Oe,me,Q,ye),Sr(b,!0);const ze=_f(b),Tt=b.subTree;b.subTree=ze,R(Tt,ze,p(Tt.el),qn(Tt),b,M,B),Q.el=ze.el,be===null&&s2(b,ze.el),ne&&_t(ne,M),(Oe=Q.props&&Q.props.onVnodeUpdated)&&_t(()=>Zt(Oe,me,Q,ye),M)}else{let Q;const{el:Z,props:ne}=C,{bm:me,m:ye,parent:be,root:Oe,type:ze}=b,Tt=vi(C);Sr(b,!1),me&&Lo(me),!Tt&&(Q=ne&&ne.onVnodeBeforeMount)&&Zt(Q,be,C),Sr(b,!0);{Oe.ce&&Oe.ce._hasShadowRoot()&&Oe.ce._injectChildStyle(ze,b.parent?b.parent.type:void 0);const It=b.subTree=_f(b);R(null,It,P,q,b,M,B),C.el=It.el}if(ye&&_t(ye,M),!Tt&&(Q=ne&&ne.onVnodeMounted)){const It=C;_t(()=>Zt(Q,be,It),M)}(C.shapeFlag&256||be&&vi(be.vnode)&&be.vnode.shapeFlag&256)&&b.a&&_t(b.a,M),b.isMounted=!0,C=P=q=null}};b.scope.on();const j=b.effect=new Q0(H);b.scope.off();const L=b.update=j.run.bind(j),te=b.job=j.runIfDirty.bind(j);te.i=b,te.id=b.uid,j.scheduler=()=>ol(te),Sr(b,!0),L()},De=(b,C,P)=>{C.component=b;const q=b.vnode.props;b.vnode=C,b.next=null,o2(b,C.props,q,P),l2(b,C.children,P),Fn(),lf(b),Nn()},_e=(b,C,P,q,M,B,G,H,j=!1)=>{const L=b&&b.children,te=b?b.shapeFlag:0,Q=C.children,{patchFlag:Z,shapeFlag:ne}=C;if(Z>0){if(Z&128){Zr(L,Q,P,q,M,B,G,H,j);return}else if(Z&256){Dt(L,Q,P,q,M,B,G,H,j);return}}ne&8?(te&16&&wn(L,M,B),Q!==L&&f(P,Q)):te&16?ne&16?Zr(L,Q,P,q,M,B,G,H,j):wn(L,M,B,!0):(te&8&&f(P,""),ne&16&&_(Q,P,q,M,B,G,H,j))},Dt=(b,C,P,q,M,B,G,H,j)=>{b=b||ds,C=C||ds;const L=b.length,te=C.length,Q=Math.min(L,te);let Z;for(Z=0;Z<Q;Z++){const ne=C[Z]=j?Cn(C[Z]):rn(C[Z]);R(b[Z],ne,P,null,M,B,G,H,j)}L>te?wn(b,M,B,!0,!1,Q):_(C,P,q,M,B,G,H,j,Q)},Zr=(b,C,P,q,M,B,G,H,j)=>{let L=0;const te=C.length;let Q=b.length-1,Z=te-1;for(;L<=Q&&L<=Z;){const ne=b[L],me=C[L]=j?Cn(C[L]):rn(C[L]);if(ai(ne,me))R(ne,me,P,null,M,B,G,H,j);else break;L++}for(;L<=Q&&L<=Z;){const ne=b[Q],me=C[Z]=j?Cn(C[Z]):rn(C[Z]);if(ai(ne,me))R(ne,me,P,null,M,B,G,H,j);else break;Q--,Z--}if(L>Q){if(L<=Z){const ne=Z+1,me=ne<te?C[ne].el:q;for(;L<=Z;)R(null,C[L]=j?Cn(C[L]):rn(C[L]),P,me,M,B,G,H,j),L++}}else if(L>Z)for(;L<=Q;)wt(b[L],M,B,!0),L++;else{const ne=L,me=L,ye=new Map;for(L=me;L<=Z;L++){const et=C[L]=j?Cn(C[L]):rn(C[L]);et.key!=null&&ye.set(et.key,L)}let be,Oe=0;const ze=Z-me+1;let Tt=!1,It=0;const Ut=new Array(ze);for(L=0;L<ze;L++)Ut[L]=0;for(L=ne;L<=Q;L++){const et=b[L];if(Oe>=ze){wt(et,M,B,!0);continue}let Ge;if(et.key!=null)Ge=ye.get(et.key);else for(be=me;be<=Z;be++)if(Ut[be-me]===0&&ai(et,C[be])){Ge=be;break}Ge===void 0?wt(et,M,B,!0):(Ut[Ge-me]=L+1,Ge>=It?It=Ge:Tt=!0,R(et,C[Ge],P,null,M,B,G,H,j),Oe++)}const ts=Tt?p2(Ut):ds;for(be=ts.length-1,L=ze-1;L>=0;L--){const et=me+L,Ge=C[et],$s=C[et+1],Tr=et+1<te?$s.el||Mp($s):q;Ut[L]===0?R(null,Ge,P,Tr,M,B,G,H,j):Tt&&(be<0||L!==ts[be]?Jt(Ge,P,Tr,2):be--)}}},Jt=(b,C,P,q,M=null)=>{const{el:B,type:G,transition:H,children:j,shapeFlag:L}=b;if(L&6){Jt(b.component.subTree,C,P,q);return}if(L&128){b.suspense.move(C,P,q);return}if(L&64){G.move(b,C,P,wr);return}if(G===Et){r(B,C,P);for(let Q=0;Q<j.length;Q++)Jt(j[Q],C,P,q);r(b.anchor,C,P);return}if(G===Bo){z(b,C,P);return}if(q!==2&&L&1&&H)if(q===0)H.beforeEnter(B),r(B,C,P),_t(()=>H.enter(B),M);else{const{leave:Q,delayLeave:Z,afterLeave:ne}=H,me=()=>{b.ctx.isUnmounted?s(B):r(B,C,P)},ye=()=>{B._isLeaving&&B[Dy](!0),Q(B,()=>{me(),ne&&ne()})};Z?Z(B,me,ye):ye()}else r(B,C,P)},wt=(b,C,P,q=!1,M=!1)=>{const{type:B,props:G,ref:H,children:j,dynamicChildren:L,shapeFlag:te,patchFlag:Q,dirs:Z,cacheIndex:ne,memo:me}=b;if(Q===-2&&(M=!1),H!=null&&(Fn(),Ei(H,null,P,b,!0),Nn()),ne!=null&&(C.renderCache[ne]=void 0),te&256){C.ctx.deactivate(b);return}const ye=te&1&&Z,be=!vi(b);let Oe;if(be&&(Oe=G&&G.onVnodeBeforeUnmount)&&Zt(Oe,C,b),te&6)zs(b.component,P,q);else{if(te&128){b.suspense.unmount(P,q);return}ye&&kr(b,null,C,"beforeUnmount"),te&64?b.type.remove(b,C,P,wr,q):L&&!L.hasOnce&&(B!==Et||Q>0&&Q&64)?wn(L,C,P,!1,!0):(B===Et&&Q&384||!M&&te&16)&&wn(j,C,P),q&&js(b)}const ze=me!=null&&ne==null;(be&&(Oe=G&&G.onVnodeUnmounted)||ye||ze)&&_t(()=>{Oe&&Zt(Oe,C,b),ye&&kr(b,null,C,"unmounted"),ze&&(b.el=null)},P)},js=b=>{const{type:C,el:P,anchor:q,transition:M}=b;if(C===Et){es(P,q);return}if(C===Bo){V(b);return}const B=()=>{s(P),M&&!M.persisted&&M.afterLeave&&M.afterLeave()};if(b.shapeFlag&1&&M&&!M.persisted){const{leave:G,delayLeave:H}=M,j=()=>G(P,B);H?H(b.el,B,j):j()}else B()},es=(b,C)=>{let P;for(;b!==C;)P=g(b),s(b),b=P;s(C)},zs=(b,C,P)=>{const{bum:q,scope:M,job:B,subTree:G,um:H,m:j,a:L}=b;Ef(j),Ef(L),q&&Lo(q),M.stop(),B&&(B.flags|=8,wt(G,b,C,P)),H&&_t(H,C),_t(()=>{b.isUnmounted=!0},C)},wn=(b,C,P,q=!1,M=!1,B=0)=>{for(let G=B;G<b.length;G++)wt(b[G],C,P,q,M)},qn=b=>{if(b.shapeFlag&6)return qn(b.component.subTree);if(b.shapeFlag&128)return b.suspense.next();const C=g(b.anchor||b.el),P=C&&C[ky];return P?g(P):C};let vr=!1;const Hs=(b,C,P)=>{let q;b==null?C._vnode&&(wt(C._vnode,null,null,!0),q=C._vnode.component):R(C._vnode||null,b,C,null,null,null,P),C._vnode=b,vr||(vr=!0,lf(q),dp(),vr=!1)},wr={p:R,um:wt,m:Jt,r:js,mt:Me,mc:_,pc:_e,pbc:A,n:qn,o:t};return{render:Hs,hydrate:void 0,createApp:Yy(Hs)}}function Na({type:t,props:e},n){return n==="svg"&&t==="foreignObject"||n==="mathml"&&t==="annotation-xml"&&e&&e.encoding&&e.encoding.includes("html")?void 0:n}function Sr({effect:t,job:e},n){n?(t.flags|=32,e.flags|=4):(t.flags&=-33,e.flags&=-5)}function d2(t,e){return(!t||t&&!t.pendingBranch)&&e&&!e.persisted}function Op(t,e,n=!1){const r=t.children,s=e.children;if(ie(r)&&ie(s))for(let i=0;i<r.length;i++){const o=r[i];let u=s[i];u.shapeFlag&1&&!u.dynamicChildren&&((u.patchFlag<=0||u.patchFlag===32)&&(u=s[i]=Cn(s[i]),u.el=o.el),!n&&u.patchFlag!==-2&&Op(o,u)),u.type===qu&&(u.patchFlag===-1&&(u=s[i]=Cn(u)),u.el=o.el),u.type===cr&&!u.el&&(u.el=o.el)}}function p2(t){const e=t.slice(),n=[0];let r,s,i,o,u;const c=t.length;for(r=0;r<c;r++){const l=t[r];if(l!==0){if(s=n[n.length-1],t[s]<l){e[r]=s,n.push(r);continue}for(i=0,o=n.length-1;i<o;)u=i+o>>1,t[n[u]]<l?i=u+1:o=u;l<t[n[i]]&&(i>0&&(e[r]=n[i-1]),n[i]=r)}}for(i=n.length,o=n[i-1];i-- >0;)n[i]=o,o=e[o];return n}function Vp(t){const e=t.subTree.component;if(e)return e.asyncDep&&!e.asyncResolved?e:Vp(e)}function Ef(t){if(t)for(let e=0;e<t.length;e++)t[e].flags|=8}function Mp(t){if(t.placeholder)return t.placeholder;const e=t.component;return e?Mp(e.subTree):null}const Lp=t=>t.__isSuspense;function m2(t,e){e&&e.pendingBranch?ie(t)?e.effects.push(...t):e.effects.push(t):wy(t)}const Et=Symbol.for("v-fgt"),qu=Symbol.for("v-txt"),cr=Symbol.for("v-cmt"),Bo=Symbol.for("v-stc"),Ti=[];let xt=null;function le(t=!1){Ti.push(xt=t?null:[])}function g2(){Ti.pop(),xt=Ti[Ti.length-1]||null}let Ni=1;function vf(t,e=!1){Ni+=t,t<0&&xt&&e&&(xt.hasOnce=!0)}function Up(t){return t.dynamicChildren=Ni>0?xt||ds:null,g2(),Ni>0&&xt&&xt.push(t),t}function he(t,e,n,r,s,i){return Up(x(t,e,n,r,s,i,!0))}function _2(t,e,n,r,s){return Up(cn(t,e,n,r,s,!0))}function Bp(t){return t?t.__v_isVNode===!0:!1}function ai(t,e){return t.type===e.type&&t.key===e.key}const qp=({key:t})=>t??null,qo=({ref:t,ref_key:e,ref_for:n})=>(typeof t=="number"&&(t=""+t),t!=null?qe(t)||at(t)||ae(t)?{i:Ot,r:t,k:e,f:!!n}:t:null);function x(t,e=null,n=null,r=0,s=null,i=t===Et?0:1,o=!1,u=!1){const c={__v_isVNode:!0,__v_skip:!0,type:t,props:e,key:e&&qp(e),ref:e&&qo(e),scopeId:mp,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetStart:null,targetAnchor:null,staticCount:0,shapeFlag:i,patchFlag:r,dynamicProps:s,dynamicChildren:null,appContext:null,ctx:Ot};return u?(ll(c,n),i&128&&t.normalize(c)):n&&(c.shapeFlag|=qe(n)?8:16),Ni>0&&!o&&xt&&(c.patchFlag>0||i&6)&&c.patchFlag!==32&&xt.push(c),c}const cn=y2;function y2(t,e=null,n=null,r=0,s=null,i=!1){if((!t||t===zy)&&(t=cr),Bp(t)){const u=xs(t,e,!0);return n&&ll(u,n),Ni>0&&!i&&xt&&(u.shapeFlag&6?xt[xt.indexOf(t)]=u:xt.push(u)),u.patchFlag=-2,u}if(S2(t)&&(t=t.__vccOpts),e){e=b2(e);let{class:u,style:c}=e;u&&!qe(u)&&(e.class=ms(u)),Ie(c)&&(sl(c)&&!ie(c)&&(c=ct({},c)),e.style=Di(c))}const o=qe(t)?1:Lp(t)?128:Sy(t)?64:Ie(t)?4:ae(t)?2:0;return x(t,e,n,r,s,o,i,!0)}function b2(t){return t?sl(t)||Sp(t)?ct({},t):t:null}function xs(t,e,n=!1,r=!1){const{props:s,ref:i,patchFlag:o,children:u,transition:c}=t,l=e?E2(s||{},e):s,f={__v_isVNode:!0,__v_skip:!0,type:t.type,props:l,key:l&&qp(l),ref:e&&e.ref?n&&i?ie(i)?i.concat(qo(e)):[i,qo(e)]:qo(e):i,scopeId:t.scopeId,slotScopeIds:t.slotScopeIds,children:u,target:t.target,targetStart:t.targetStart,targetAnchor:t.targetAnchor,staticCount:t.staticCount,shapeFlag:t.shapeFlag,patchFlag:e&&t.type!==Et?o===-1?16:o|16:o,dynamicProps:t.dynamicProps,dynamicChildren:t.dynamicChildren,appContext:t.appContext,dirs:t.dirs,transition:c,component:t.component,suspense:t.suspense,ssContent:t.ssContent&&xs(t.ssContent),ssFallback:t.ssFallback&&xs(t.ssFallback),placeholder:t.placeholder,el:t.el,anchor:t.anchor,ctx:t.ctx,ce:t.ce};return c&&r&&ul(f,c.clone(f)),f}function gc(t=" ",e=0){return cn(qu,null,t,e)}function Oa(t,e){const n=cn(Bo,null,t);return n.staticCount=e,n}function xe(t="",e=!1){return e?(le(),_2(cr,null,t)):cn(cr,null,t)}function rn(t){return t==null||typeof t=="boolean"?cn(cr):ie(t)?cn(Et,null,t.slice()):Bp(t)?Cn(t):cn(qu,null,String(t))}function Cn(t){return t.el===null&&t.patchFlag!==-1||t.memo?t:xs(t)}function ll(t,e){let n=0;const{shapeFlag:r}=t;if(e==null)e=null;else if(ie(e))n=16;else if(typeof e=="object")if(r&65){const s=e.default;s&&(s._c&&(s._d=!1),ll(t,s()),s._c&&(s._d=!0));return}else{n=32;const s=e._;!s&&!Sp(e)?e._ctx=Ot:s===3&&Ot&&(Ot.slots._===1?e._=1:(e._=2,t.patchFlag|=1024))}else ae(e)?(e={default:e,_ctx:Ot},n=32):(e=String(e),r&64?(n=16,e=[gc(e)]):n=8);t.children=e,t.shapeFlag|=n}function E2(...t){const e={};for(let n=0;n<t.length;n++){const r=t[n];for(const s in r)if(s==="class")e.class!==r.class&&(e.class=ms([e.class,r.class]));else if(s==="style")e.style=Di([e.style,r.style]);else if(Ru(s)){const i=e[s],o=r[s];o&&i!==o&&!(ie(i)&&i.includes(o))?e[s]=i?[].concat(i,o):o:o==null&&i==null&&!Pu(s)&&(e[s]=o)}else s!==""&&(e[s]=r[s])}return e}function Zt(t,e,n,r=null){gn(t,e,7,[n,r])}const v2=Ip();let w2=0;function T2(t,e,n){const r=t.type,s=(e?e.appContext:t.appContext)||v2,i={uid:w2++,vnode:t,type:r,parent:e,appContext:s,root:null,next:null,subTree:null,effect:null,update:null,job:null,scope:new H_(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(s.provides),ids:e?e.ids:["",0,0],accessCache:null,renderCache:[],components:null,directives:null,propsOptions:Rp(r,s),emitsOptions:Ap(r,s),emit:null,emitted:null,propsDefaults:Ce,inheritAttrs:r.inheritAttrs,ctx:Ce,data:Ce,props:Ce,attrs:Ce,slots:Ce,refs:Ce,setupState:Ce,setupContext:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return i.ctx={_:i},i.root=e?e.root:i,i.emit=Zy.bind(null,i),t.ce&&t.ce(i),i}let mt=null;const I2=()=>mt||Ot;let su,_c;{const t=Vu(),e=(n,r)=>{let s;return(s=t[n])||(s=t[n]=[]),s.push(r),i=>{s.length>1?s.forEach(o=>o(i)):s[0](i)}};su=e("__VUE_INSTANCE_SETTERS__",n=>mt=n),_c=e("__VUE_SSR_SETTERS__",n=>Oi=n)}const eo=t=>{const e=mt;return su(t),t.scope.on(),()=>{t.scope.off(),su(e)}},wf=()=>{mt&&mt.scope.off(),su(null)};function jp(t){return t.vnode.shapeFlag&4}let Oi=!1;function A2(t,e=!1,n=!1){e&&_c(e);const{props:r,children:s}=t.vnode,i=jp(t);i2(t,r,i,e),c2(t,s,n||e);const o=i?C2(t,e):void 0;return e&&_c(!1),o}function C2(t,e){const n=t.type;t.accessCache=Object.create(null),t.proxy=new Proxy(t.ctx,Hy);const{setup:r}=n;if(r){Fn();const s=t.setupContext=r.length>1?k2(t):null,i=eo(t),o=Zi(r,t,0,[t.props,s]),u=q0(o);if(Nn(),i(),(u||t.sp)&&!vi(t)&&yp(t),u){if(o.then(wf,wf),e)return o.then(c=>{Tf(t,c)}).catch(c=>{Lu(c,t,0)});t.asyncDep=o}else Tf(t,o)}else zp(t)}function Tf(t,e,n){ae(e)?t.type.__ssrInlineRender?t.ssrRender=e:t.render=e:Ie(e)&&(t.setupState=cp(e)),zp(t)}function zp(t,e,n){const r=t.type;t.render||(t.render=r.render||an);{const s=eo(t);Fn();try{$y(t)}finally{Nn(),s()}}}const x2={get(t,e){return ot(t,"get",""),t[e]}};function k2(t){const e=n=>{t.exposed=n||{}};return{attrs:new Proxy(t.attrs,x2),slots:t.slots,emit:t.emit,expose:e}}function ju(t){return t.exposed?t.exposeProxy||(t.exposeProxy=new Proxy(cp(hy(t.exposed)),{get(e,n){if(n in e)return e[n];if(n in wi)return wi[n](t)},has(e,n){return n in e||n in wi}})):t.proxy}function S2(t){return ae(t)&&"__vccOpts"in t}const Hp=(t,e)=>_y(t,e,Oi),D2="3.5.32";/**
* @vue/runtime-dom v3.5.32
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let yc;const If=typeof window<"u"&&window.trustedTypes;if(If)try{yc=If.createPolicy("vue",{createHTML:t=>t})}catch{}const $p=yc?t=>yc.createHTML(t):t=>t,R2="http://www.w3.org/2000/svg",P2="http://www.w3.org/1998/Math/MathML",An=typeof document<"u"?document:null,Af=An&&An.createElement("template"),F2={insert:(t,e,n)=>{e.insertBefore(t,n||null)},remove:t=>{const e=t.parentNode;e&&e.removeChild(t)},createElement:(t,e,n,r)=>{const s=e==="svg"?An.createElementNS(R2,t):e==="mathml"?An.createElementNS(P2,t):n?An.createElement(t,{is:n}):An.createElement(t);return t==="select"&&r&&r.multiple!=null&&s.setAttribute("multiple",r.multiple),s},createText:t=>An.createTextNode(t),createComment:t=>An.createComment(t),setText:(t,e)=>{t.nodeValue=e},setElementText:(t,e)=>{t.textContent=e},parentNode:t=>t.parentNode,nextSibling:t=>t.nextSibling,querySelector:t=>An.querySelector(t),setScopeId(t,e){t.setAttribute(e,"")},insertStaticContent(t,e,n,r,s,i){const o=n?n.previousSibling:e.lastChild;if(s&&(s===i||s.nextSibling))for(;e.insertBefore(s.cloneNode(!0),n),!(s===i||!(s=s.nextSibling)););else{Af.innerHTML=$p(r==="svg"?`<svg>${t}</svg>`:r==="mathml"?`<math>${t}</math>`:t);const u=Af.content;if(r==="svg"||r==="mathml"){const c=u.firstChild;for(;c.firstChild;)u.appendChild(c.firstChild);u.removeChild(c)}e.insertBefore(u,n)}return[o?o.nextSibling:e.firstChild,n?n.previousSibling:e.lastChild]}},N2=Symbol("_vtc");function O2(t,e,n){const r=t[N2];r&&(e=(e?[e,...r]:[...r]).join(" ")),e==null?t.removeAttribute("class"):n?t.setAttribute("class",e):t.className=e}const Cf=Symbol("_vod"),V2=Symbol("_vsh"),M2=Symbol(""),L2=/(?:^|;)\s*display\s*:/;function U2(t,e,n){const r=t.style,s=qe(n);let i=!1;if(n&&!s){if(e)if(qe(e))for(const o of e.split(";")){const u=o.slice(0,o.indexOf(":")).trim();n[u]==null&&jo(r,u,"")}else for(const o in e)n[o]==null&&jo(r,o,"");for(const o in n)o==="display"&&(i=!0),jo(r,o,n[o])}else if(s){if(e!==n){const o=r[M2];o&&(n+=";"+o),r.cssText=n,i=L2.test(n)}}else e&&t.removeAttribute("style");Cf in t&&(t[Cf]=i?r.display:"",t[V2]&&(r.display="none"))}const xf=/\s*!important$/;function jo(t,e,n){if(ie(n))n.forEach(r=>jo(t,e,r));else if(n==null&&(n=""),e.startsWith("--"))t.setProperty(e,n);else{const r=B2(t,e);xf.test(n)?t.setProperty($r(r),n.replace(xf,""),"important"):t[r]=n}}const kf=["Webkit","Moz","ms"],Va={};function B2(t,e){const n=Va[e];if(n)return n;let r=jt(e);if(r!=="filter"&&r in t)return Va[e]=r;r=H0(r);for(let s=0;s<kf.length;s++){const i=kf[s]+r;if(i in t)return Va[e]=i}return e}const Sf="http://www.w3.org/1999/xlink";function Df(t,e,n,r,s,i=q_(e)){r&&e.startsWith("xlink:")?n==null?t.removeAttributeNS(Sf,e.slice(6,e.length)):t.setAttributeNS(Sf,e,n):n==null||i&&!W0(n)?t.removeAttribute(e):t.setAttribute(e,i?"":mn(n)?String(n):n)}function Rf(t,e,n,r,s){if(e==="innerHTML"||e==="textContent"){n!=null&&(t[e]=e==="innerHTML"?$p(n):n);return}const i=t.tagName;if(e==="value"&&i!=="PROGRESS"&&!i.includes("-")){const u=i==="OPTION"?t.getAttribute("value")||"":t.value,c=n==null?t.type==="checkbox"?"on":"":String(n);(u!==c||!("_value"in t))&&(t.value=c),n==null&&t.removeAttribute(e),t._value=n;return}let o=!1;if(n===""||n==null){const u=typeof t[e];u==="boolean"?n=W0(n):n==null&&u==="string"?(n="",o=!0):u==="number"&&(n=0,o=!0)}try{t[e]=n}catch{}o&&t.removeAttribute(s||e)}function Pr(t,e,n,r){t.addEventListener(e,n,r)}function q2(t,e,n,r){t.removeEventListener(e,n,r)}const Pf=Symbol("_vei");function j2(t,e,n,r,s=null){const i=t[Pf]||(t[Pf]={}),o=i[e];if(r&&o)o.value=r;else{const[u,c]=z2(e);if(r){const l=i[e]=W2(r,s);Pr(t,u,l,c)}else o&&(q2(t,u,o,c),i[e]=void 0)}}const Ff=/(?:Once|Passive|Capture)$/;function z2(t){let e;if(Ff.test(t)){e={};let r;for(;r=t.match(Ff);)t=t.slice(0,t.length-r[0].length),e[r[0].toLowerCase()]=!0}return[t[2]===":"?t.slice(3):$r(t.slice(2)),e]}let Ma=0;const H2=Promise.resolve(),$2=()=>Ma||(H2.then(()=>Ma=0),Ma=Date.now());function W2(t,e){const n=r=>{if(!r._vts)r._vts=Date.now();else if(r._vts<=n.attached)return;gn(K2(r,n.value),e,5,[r])};return n.value=t,n.attached=$2(),n}function K2(t,e){if(ie(e)){const n=t.stopImmediatePropagation;return t.stopImmediatePropagation=()=>{n.call(t),t._stopped=!0},e.map(r=>s=>!s._stopped&&r&&r(s))}else return e}const Nf=t=>t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&t.charCodeAt(2)>96&&t.charCodeAt(2)<123,G2=(t,e,n,r,s,i)=>{const o=s==="svg";e==="class"?O2(t,r,o):e==="style"?U2(t,n,r):Ru(e)?Pu(e)||j2(t,e,n,r,i):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):Q2(t,e,r,o))?(Rf(t,e,r),!t.tagName.includes("-")&&(e==="value"||e==="checked"||e==="selected")&&Df(t,e,r,o,i,e!=="value")):t._isVueCE&&(J2(t,e)||t._def.__asyncLoader&&(/[A-Z]/.test(e)||!qe(r)))?Rf(t,jt(e),r,i,e):(e==="true-value"?t._trueValue=r:e==="false-value"&&(t._falseValue=r),Df(t,e,r,o))};function Q2(t,e,n,r){if(r)return!!(e==="innerHTML"||e==="textContent"||e in t&&Nf(e)&&ae(n));if(e==="spellcheck"||e==="draggable"||e==="translate"||e==="autocorrect"||e==="sandbox"&&t.tagName==="IFRAME"||e==="form"||e==="list"&&t.tagName==="INPUT"||e==="type"&&t.tagName==="TEXTAREA")return!1;if(e==="width"||e==="height"){const s=t.tagName;if(s==="IMG"||s==="VIDEO"||s==="CANVAS"||s==="SOURCE")return!1}return Nf(e)&&qe(n)?!1:e in t}function J2(t,e){const n=t._def.props;if(!n)return!1;const r=jt(e);return Array.isArray(n)?n.some(s=>jt(s)===r):Object.keys(n).some(s=>jt(s)===r)}const iu=t=>{const e=t.props["onUpdate:modelValue"]||!1;return ie(e)?n=>Lo(e,n):e};function Y2(t){t.target.composing=!0}function Of(t){const e=t.target;e.composing&&(e.composing=!1,e.dispatchEvent(new Event("input")))}const ys=Symbol("_assign");function Vf(t,e,n){return e&&(t=t.trim()),n&&(t=Ou(t)),t}const In={created(t,{modifiers:{lazy:e,trim:n,number:r}},s){t[ys]=iu(s);const i=r||s.props&&s.props.type==="number";Pr(t,e?"change":"input",o=>{o.target.composing||t[ys](Vf(t.value,n,i))}),(n||i)&&Pr(t,"change",()=>{t.value=Vf(t.value,n,i)}),e||(Pr(t,"compositionstart",Y2),Pr(t,"compositionend",Of),Pr(t,"change",Of))},mounted(t,{value:e}){t.value=e??""},beforeUpdate(t,{value:e,oldValue:n,modifiers:{lazy:r,trim:s,number:i}},o){if(t[ys]=iu(o),t.composing)return;const u=(i||t.type==="number")&&!/^0\d/.test(t.value)?Ou(t.value):t.value,c=e??"";if(u===c)return;const l=t.getRootNode();(l instanceof Document||l instanceof ShadowRoot)&&l.activeElement===t&&t.type!=="range"&&(r&&e===n||s&&t.value.trim()===c)||(t.value=c)}},So={deep:!0,created(t,{value:e,modifiers:{number:n}},r){const s=Fu(e);Pr(t,"change",()=>{const i=Array.prototype.filter.call(t.options,o=>o.selected).map(o=>n?Ou(ou(o)):ou(o));t[ys](t.multiple?s?new Set(i):i:i[0]),t._assigning=!0,hp(()=>{t._assigning=!1})}),t[ys]=iu(r)},mounted(t,{value:e}){Mf(t,e)},beforeUpdate(t,e,n){t[ys]=iu(n)},updated(t,{value:e}){t._assigning||Mf(t,e)}};function Mf(t,e){const n=t.multiple,r=ie(e);if(!(n&&!r&&!Fu(e))){for(let s=0,i=t.options.length;s<i;s++){const o=t.options[s],u=ou(o);if(n)if(r){const c=typeof u;c==="string"||c==="number"?o.selected=e.some(l=>String(l)===String(u)):o.selected=z_(e,u)>-1}else o.selected=e.has(u);else if(Xi(ou(o),e)){t.selectedIndex!==s&&(t.selectedIndex=s);return}}!n&&t.selectedIndex!==-1&&(t.selectedIndex=-1)}}function ou(t){return"_value"in t?t._value:t.value}const X2=["ctrl","shift","alt","meta"],Z2={stop:t=>t.stopPropagation(),prevent:t=>t.preventDefault(),self:t=>t.target!==t.currentTarget,ctrl:t=>!t.ctrlKey,shift:t=>!t.shiftKey,alt:t=>!t.altKey,meta:t=>!t.metaKey,left:t=>"button"in t&&t.button!==0,middle:t=>"button"in t&&t.button!==1,right:t=>"button"in t&&t.button!==2,exact:(t,e)=>X2.some(n=>t[`${n}Key`]&&!e.includes(n))},Lf=(t,e)=>{if(!t)return t;const n=t._withMods||(t._withMods={}),r=e.join(".");return n[r]||(n[r]=(s,...i)=>{for(let o=0;o<e.length;o++){const u=Z2[e[o]];if(u&&u(s,e))return}return t(s,...i)})},eb=ct({patchProp:G2},F2);let Uf;function tb(){return Uf||(Uf=h2(eb))}const nb=(...t)=>{const e=tb().createApp(...t),{mount:n}=e;return e.mount=r=>{const s=sb(r);if(!s)return;const i=e._component;!ae(i)&&!i.render&&!i.template&&(i.template=s.innerHTML),s.nodeType===1&&(s.textContent="");const o=n(s,!1,rb(s));return s instanceof Element&&(s.removeAttribute("v-cloak"),s.setAttribute("data-v-app","")),o},e};function rb(t){if(t instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&t instanceof MathMLElement)return"mathml"}function sb(t){return qe(t)?document.querySelector(t):t}const Bf={};function ib(t){let e=Bf[t];if(e)return e;e=Bf[t]=[];for(let n=0;n<128;n++){const r=String.fromCharCode(n);e.push(r)}for(let n=0;n<t.length;n++){const r=t.charCodeAt(n);e[r]="%"+("0"+r.toString(16).toUpperCase()).slice(-2)}return e}function ks(t,e){typeof e!="string"&&(e=ks.defaultChars);const n=ib(e);return t.replace(/(%[a-f0-9]{2})+/gi,function(r){let s="";for(let i=0,o=r.length;i<o;i+=3){const u=parseInt(r.slice(i+1,i+3),16);if(u<128){s+=n[u];continue}if((u&224)===192&&i+3<o){const c=parseInt(r.slice(i+4,i+6),16);if((c&192)===128){const l=u<<6&1984|c&63;l<128?s+="��":s+=String.fromCharCode(l),i+=3;continue}}if((u&240)===224&&i+6<o){const c=parseInt(r.slice(i+4,i+6),16),l=parseInt(r.slice(i+7,i+9),16);if((c&192)===128&&(l&192)===128){const f=u<<12&61440|c<<6&4032|l&63;f<2048||f>=55296&&f<=57343?s+="���":s+=String.fromCharCode(f),i+=6;continue}}if((u&248)===240&&i+9<o){const c=parseInt(r.slice(i+4,i+6),16),l=parseInt(r.slice(i+7,i+9),16),f=parseInt(r.slice(i+10,i+12),16);if((c&192)===128&&(l&192)===128&&(f&192)===128){let p=u<<18&1835008|c<<12&258048|l<<6&4032|f&63;p<65536||p>1114111?s+="����":(p-=65536,s+=String.fromCharCode(55296+(p>>10),56320+(p&1023))),i+=9;continue}}s+="�"}return s})}ks.defaultChars=";/?:@&=+$,#";ks.componentChars="";const qf={};function ob(t){let e=qf[t];if(e)return e;e=qf[t]=[];for(let n=0;n<128;n++){const r=String.fromCharCode(n);/^[0-9a-z]$/i.test(r)?e.push(r):e.push("%"+("0"+n.toString(16).toUpperCase()).slice(-2))}for(let n=0;n<t.length;n++)e[t.charCodeAt(n)]=t[n];return e}function to(t,e,n){typeof e!="string"&&(n=e,e=to.defaultChars),typeof n>"u"&&(n=!0);const r=ob(e);let s="";for(let i=0,o=t.length;i<o;i++){const u=t.charCodeAt(i);if(n&&u===37&&i+2<o&&/^[0-9a-f]{2}$/i.test(t.slice(i+1,i+3))){s+=t.slice(i,i+3),i+=2;continue}if(u<128){s+=r[u];continue}if(u>=55296&&u<=57343){if(u>=55296&&u<=56319&&i+1<o){const c=t.charCodeAt(i+1);if(c>=56320&&c<=57343){s+=encodeURIComponent(t[i]+t[i+1]),i++;continue}}s+="%EF%BF%BD";continue}s+=encodeURIComponent(t[i])}return s}to.defaultChars=";/?:@&=+$,-_.!~*'()#";to.componentChars="-_.!~*'()";function hl(t){let e="";return e+=t.protocol||"",e+=t.slashes?"//":"",e+=t.auth?t.auth+"@":"",t.hostname&&t.hostname.indexOf(":")!==-1?e+="["+t.hostname+"]":e+=t.hostname||"",e+=t.port?":"+t.port:"",e+=t.pathname||"",e+=t.search||"",e+=t.hash||"",e}function uu(){this.protocol=null,this.slashes=null,this.auth=null,this.port=null,this.hostname=null,this.hash=null,this.search=null,this.pathname=null}const ub=/^([a-z0-9.+-]+:)/i,ab=/:[0-9]*$/,cb=/^(\/\/?(?!\/)[^\?\s]*)(\?[^\s]*)?$/,lb=["<",">",'"',"`"," ","\r",`
`,"	"],hb=["{","}","|","\\","^","`"].concat(lb),fb=["'"].concat(hb),jf=["%","/","?",";","#"].concat(fb),zf=["/","?","#"],db=255,Hf=/^[+a-z0-9A-Z_-]{0,63}$/,pb=/^([+a-z0-9A-Z_-]{0,63})(.*)$/,$f={javascript:!0,"javascript:":!0},Wf={http:!0,https:!0,ftp:!0,gopher:!0,file:!0,"http:":!0,"https:":!0,"ftp:":!0,"gopher:":!0,"file:":!0};function fl(t,e){if(t&&t instanceof uu)return t;const n=new uu;return n.parse(t,e),n}uu.prototype.parse=function(t,e){let n,r,s,i=t;if(i=i.trim(),!e&&t.split("#").length===1){const l=cb.exec(i);if(l)return this.pathname=l[1],l[2]&&(this.search=l[2]),this}let o=ub.exec(i);if(o&&(o=o[0],n=o.toLowerCase(),this.protocol=o,i=i.substr(o.length)),(e||o||i.match(/^\/\/[^@\/]+@[^@\/]+/))&&(s=i.substr(0,2)==="//",s&&!(o&&$f[o])&&(i=i.substr(2),this.slashes=!0)),!$f[o]&&(s||o&&!Wf[o])){let l=-1;for(let T=0;T<zf.length;T++)r=i.indexOf(zf[T]),r!==-1&&(l===-1||r<l)&&(l=r);let f,p;l===-1?p=i.lastIndexOf("@"):p=i.lastIndexOf("@",l),p!==-1&&(f=i.slice(0,p),i=i.slice(p+1),this.auth=f),l=-1;for(let T=0;T<jf.length;T++)r=i.indexOf(jf[T]),r!==-1&&(l===-1||r<l)&&(l=r);l===-1&&(l=i.length),i[l-1]===":"&&l--;const g=i.slice(0,l);i=i.slice(l),this.parseHost(g),this.hostname=this.hostname||"";const y=this.hostname[0]==="["&&this.hostname[this.hostname.length-1]==="]";if(!y){const T=this.hostname.split(/\./);for(let R=0,F=T.length;R<F;R++){const $=T[R];if($&&!$.match(Hf)){let N="";for(let z=0,V=$.length;z<V;z++)$.charCodeAt(z)>127?N+="x":N+=$[z];if(!N.match(Hf)){const z=T.slice(0,R),V=T.slice(R+1),K=$.match(pb);K&&(z.push(K[1]),V.unshift(K[2])),V.length&&(i=V.join(".")+i),this.hostname=z.join(".");break}}}}this.hostname.length>db&&(this.hostname=""),y&&(this.hostname=this.hostname.substr(1,this.hostname.length-2))}const u=i.indexOf("#");u!==-1&&(this.hash=i.substr(u),i=i.slice(0,u));const c=i.indexOf("?");return c!==-1&&(this.search=i.substr(c),i=i.slice(0,c)),i&&(this.pathname=i),Wf[n]&&this.hostname&&!this.pathname&&(this.pathname=""),this};uu.prototype.parseHost=function(t){let e=ab.exec(t);e&&(e=e[0],e!==":"&&(this.port=e.substr(1)),t=t.substr(0,t.length-e.length)),t&&(this.hostname=t)};const mb=Object.freeze(Object.defineProperty({__proto__:null,decode:ks,encode:to,format:hl,parse:fl},Symbol.toStringTag,{value:"Module"})),Wp=/[\0-\uD7FF\uE000-\uFFFF]|[\uD800-\uDBFF][\uDC00-\uDFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF]/,Kp=/[\0-\x1F\x7F-\x9F]/,gb=/[\xAD\u0600-\u0605\u061C\u06DD\u070F\u0890\u0891\u08E2\u180E\u200B-\u200F\u202A-\u202E\u2060-\u2064\u2066-\u206F\uFEFF\uFFF9-\uFFFB]|\uD804[\uDCBD\uDCCD]|\uD80D[\uDC30-\uDC3F]|\uD82F[\uDCA0-\uDCA3]|\uD834[\uDD73-\uDD7A]|\uDB40[\uDC01\uDC20-\uDC7F]/,dl=/[!-#%-\*,-\/:;\?@\[-\]_\{\}\xA1\xA7\xAB\xB6\xB7\xBB\xBF\u037E\u0387\u055A-\u055F\u0589\u058A\u05BE\u05C0\u05C3\u05C6\u05F3\u05F4\u0609\u060A\u060C\u060D\u061B\u061D-\u061F\u066A-\u066D\u06D4\u0700-\u070D\u07F7-\u07F9\u0830-\u083E\u085E\u0964\u0965\u0970\u09FD\u0A76\u0AF0\u0C77\u0C84\u0DF4\u0E4F\u0E5A\u0E5B\u0F04-\u0F12\u0F14\u0F3A-\u0F3D\u0F85\u0FD0-\u0FD4\u0FD9\u0FDA\u104A-\u104F\u10FB\u1360-\u1368\u1400\u166E\u169B\u169C\u16EB-\u16ED\u1735\u1736\u17D4-\u17D6\u17D8-\u17DA\u1800-\u180A\u1944\u1945\u1A1E\u1A1F\u1AA0-\u1AA6\u1AA8-\u1AAD\u1B5A-\u1B60\u1B7D\u1B7E\u1BFC-\u1BFF\u1C3B-\u1C3F\u1C7E\u1C7F\u1CC0-\u1CC7\u1CD3\u2010-\u2027\u2030-\u2043\u2045-\u2051\u2053-\u205E\u207D\u207E\u208D\u208E\u2308-\u230B\u2329\u232A\u2768-\u2775\u27C5\u27C6\u27E6-\u27EF\u2983-\u2998\u29D8-\u29DB\u29FC\u29FD\u2CF9-\u2CFC\u2CFE\u2CFF\u2D70\u2E00-\u2E2E\u2E30-\u2E4F\u2E52-\u2E5D\u3001-\u3003\u3008-\u3011\u3014-\u301F\u3030\u303D\u30A0\u30FB\uA4FE\uA4FF\uA60D-\uA60F\uA673\uA67E\uA6F2-\uA6F7\uA874-\uA877\uA8CE\uA8CF\uA8F8-\uA8FA\uA8FC\uA92E\uA92F\uA95F\uA9C1-\uA9CD\uA9DE\uA9DF\uAA5C-\uAA5F\uAADE\uAADF\uAAF0\uAAF1\uABEB\uFD3E\uFD3F\uFE10-\uFE19\uFE30-\uFE52\uFE54-\uFE61\uFE63\uFE68\uFE6A\uFE6B\uFF01-\uFF03\uFF05-\uFF0A\uFF0C-\uFF0F\uFF1A\uFF1B\uFF1F\uFF20\uFF3B-\uFF3D\uFF3F\uFF5B\uFF5D\uFF5F-\uFF65]|\uD800[\uDD00-\uDD02\uDF9F\uDFD0]|\uD801\uDD6F|\uD802[\uDC57\uDD1F\uDD3F\uDE50-\uDE58\uDE7F\uDEF0-\uDEF6\uDF39-\uDF3F\uDF99-\uDF9C]|\uD803[\uDEAD\uDF55-\uDF59\uDF86-\uDF89]|\uD804[\uDC47-\uDC4D\uDCBB\uDCBC\uDCBE-\uDCC1\uDD40-\uDD43\uDD74\uDD75\uDDC5-\uDDC8\uDDCD\uDDDB\uDDDD-\uDDDF\uDE38-\uDE3D\uDEA9]|\uD805[\uDC4B-\uDC4F\uDC5A\uDC5B\uDC5D\uDCC6\uDDC1-\uDDD7\uDE41-\uDE43\uDE60-\uDE6C\uDEB9\uDF3C-\uDF3E]|\uD806[\uDC3B\uDD44-\uDD46\uDDE2\uDE3F-\uDE46\uDE9A-\uDE9C\uDE9E-\uDEA2\uDF00-\uDF09]|\uD807[\uDC41-\uDC45\uDC70\uDC71\uDEF7\uDEF8\uDF43-\uDF4F\uDFFF]|\uD809[\uDC70-\uDC74]|\uD80B[\uDFF1\uDFF2]|\uD81A[\uDE6E\uDE6F\uDEF5\uDF37-\uDF3B\uDF44]|\uD81B[\uDE97-\uDE9A\uDFE2]|\uD82F\uDC9F|\uD836[\uDE87-\uDE8B]|\uD83A[\uDD5E\uDD5F]/,Gp=/[\$\+<->\^`\|~\xA2-\xA6\xA8\xA9\xAC\xAE-\xB1\xB4\xB8\xD7\xF7\u02C2-\u02C5\u02D2-\u02DF\u02E5-\u02EB\u02ED\u02EF-\u02FF\u0375\u0384\u0385\u03F6\u0482\u058D-\u058F\u0606-\u0608\u060B\u060E\u060F\u06DE\u06E9\u06FD\u06FE\u07F6\u07FE\u07FF\u0888\u09F2\u09F3\u09FA\u09FB\u0AF1\u0B70\u0BF3-\u0BFA\u0C7F\u0D4F\u0D79\u0E3F\u0F01-\u0F03\u0F13\u0F15-\u0F17\u0F1A-\u0F1F\u0F34\u0F36\u0F38\u0FBE-\u0FC5\u0FC7-\u0FCC\u0FCE\u0FCF\u0FD5-\u0FD8\u109E\u109F\u1390-\u1399\u166D\u17DB\u1940\u19DE-\u19FF\u1B61-\u1B6A\u1B74-\u1B7C\u1FBD\u1FBF-\u1FC1\u1FCD-\u1FCF\u1FDD-\u1FDF\u1FED-\u1FEF\u1FFD\u1FFE\u2044\u2052\u207A-\u207C\u208A-\u208C\u20A0-\u20C0\u2100\u2101\u2103-\u2106\u2108\u2109\u2114\u2116-\u2118\u211E-\u2123\u2125\u2127\u2129\u212E\u213A\u213B\u2140-\u2144\u214A-\u214D\u214F\u218A\u218B\u2190-\u2307\u230C-\u2328\u232B-\u2426\u2440-\u244A\u249C-\u24E9\u2500-\u2767\u2794-\u27C4\u27C7-\u27E5\u27F0-\u2982\u2999-\u29D7\u29DC-\u29FB\u29FE-\u2B73\u2B76-\u2B95\u2B97-\u2BFF\u2CE5-\u2CEA\u2E50\u2E51\u2E80-\u2E99\u2E9B-\u2EF3\u2F00-\u2FD5\u2FF0-\u2FFF\u3004\u3012\u3013\u3020\u3036\u3037\u303E\u303F\u309B\u309C\u3190\u3191\u3196-\u319F\u31C0-\u31E3\u31EF\u3200-\u321E\u322A-\u3247\u3250\u3260-\u327F\u328A-\u32B0\u32C0-\u33FF\u4DC0-\u4DFF\uA490-\uA4C6\uA700-\uA716\uA720\uA721\uA789\uA78A\uA828-\uA82B\uA836-\uA839\uAA77-\uAA79\uAB5B\uAB6A\uAB6B\uFB29\uFBB2-\uFBC2\uFD40-\uFD4F\uFDCF\uFDFC-\uFDFF\uFE62\uFE64-\uFE66\uFE69\uFF04\uFF0B\uFF1C-\uFF1E\uFF3E\uFF40\uFF5C\uFF5E\uFFE0-\uFFE6\uFFE8-\uFFEE\uFFFC\uFFFD]|\uD800[\uDD37-\uDD3F\uDD79-\uDD89\uDD8C-\uDD8E\uDD90-\uDD9C\uDDA0\uDDD0-\uDDFC]|\uD802[\uDC77\uDC78\uDEC8]|\uD805\uDF3F|\uD807[\uDFD5-\uDFF1]|\uD81A[\uDF3C-\uDF3F\uDF45]|\uD82F\uDC9C|\uD833[\uDF50-\uDFC3]|\uD834[\uDC00-\uDCF5\uDD00-\uDD26\uDD29-\uDD64\uDD6A-\uDD6C\uDD83\uDD84\uDD8C-\uDDA9\uDDAE-\uDDEA\uDE00-\uDE41\uDE45\uDF00-\uDF56]|\uD835[\uDEC1\uDEDB\uDEFB\uDF15\uDF35\uDF4F\uDF6F\uDF89\uDFA9\uDFC3]|\uD836[\uDC00-\uDDFF\uDE37-\uDE3A\uDE6D-\uDE74\uDE76-\uDE83\uDE85\uDE86]|\uD838[\uDD4F\uDEFF]|\uD83B[\uDCAC\uDCB0\uDD2E\uDEF0\uDEF1]|\uD83C[\uDC00-\uDC2B\uDC30-\uDC93\uDCA0-\uDCAE\uDCB1-\uDCBF\uDCC1-\uDCCF\uDCD1-\uDCF5\uDD0D-\uDDAD\uDDE6-\uDE02\uDE10-\uDE3B\uDE40-\uDE48\uDE50\uDE51\uDE60-\uDE65\uDF00-\uDFFF]|\uD83D[\uDC00-\uDED7\uDEDC-\uDEEC\uDEF0-\uDEFC\uDF00-\uDF76\uDF7B-\uDFD9\uDFE0-\uDFEB\uDFF0]|\uD83E[\uDC00-\uDC0B\uDC10-\uDC47\uDC50-\uDC59\uDC60-\uDC87\uDC90-\uDCAD\uDCB0\uDCB1\uDD00-\uDE53\uDE60-\uDE6D\uDE70-\uDE7C\uDE80-\uDE88\uDE90-\uDEBD\uDEBF-\uDEC5\uDECE-\uDEDB\uDEE0-\uDEE8\uDEF0-\uDEF8\uDF00-\uDF92\uDF94-\uDFCA]/,Qp=/[ \xA0\u1680\u2000-\u200A\u2028\u2029\u202F\u205F\u3000]/,_b=Object.freeze(Object.defineProperty({__proto__:null,Any:Wp,Cc:Kp,Cf:gb,P:dl,S:Gp,Z:Qp},Symbol.toStringTag,{value:"Module"})),yb=new Uint16Array('ᵁ<Õıʊҝջאٵ۞ޢߖࠏ੊ઑඡ๭༉༦჊ረዡᐕᒝᓃᓟᔥ\0\0\0\0\0\0ᕫᛍᦍᰒᷝ὾⁠↰⊍⏀⏻⑂⠤⤒ⴈ⹈⿎〖㊺㘹㞬㣾㨨㩱㫠㬮ࠀEMabcfglmnoprstu\\bfms¦³¹ÈÏlig耻Æ䃆P耻&䀦cute耻Á䃁reve;䄂Āiyx}rc耻Â䃂;䐐r;쀀𝔄rave耻À䃀pha;䎑acr;䄀d;橓Āgp¡on;䄄f;쀀𝔸plyFunction;恡ing耻Å䃅Ācs¾Ãr;쀀𝒜ign;扔ilde耻Ã䃃ml耻Ä䃄ЀaceforsuåûþėĜĢħĪĀcrêòkslash;或Ŷöø;櫧ed;挆y;䐑ƀcrtąċĔause;戵noullis;愬a;䎒r;쀀𝔅pf;쀀𝔹eve;䋘còēmpeq;扎܀HOacdefhilorsuōőŖƀƞƢƵƷƺǜȕɳɸɾcy;䐧PY耻©䂩ƀcpyŝŢźute;䄆Ā;iŧŨ拒talDifferentialD;慅leys;愭ȀaeioƉƎƔƘron;䄌dil耻Ç䃇rc;䄈nint;戰ot;䄊ĀdnƧƭilla;䂸terDot;䂷òſi;䎧rcleȀDMPTǇǋǑǖot;抙inus;抖lus;投imes;抗oĀcsǢǸkwiseContourIntegral;戲eCurlyĀDQȃȏoubleQuote;思uote;怙ȀlnpuȞȨɇɕonĀ;eȥȦ户;橴ƀgitȯȶȺruent;扡nt;戯ourIntegral;戮ĀfrɌɎ;愂oduct;成nterClockwiseContourIntegral;戳oss;樯cr;쀀𝒞pĀ;Cʄʅ拓ap;才րDJSZacefiosʠʬʰʴʸˋ˗ˡ˦̳ҍĀ;oŹʥtrahd;椑cy;䐂cy;䐅cy;䐏ƀgrsʿ˄ˇger;怡r;憡hv;櫤Āayː˕ron;䄎;䐔lĀ;t˝˞戇a;䎔r;쀀𝔇Āaf˫̧Ācm˰̢riticalȀADGT̖̜̀̆cute;䂴oŴ̋̍;䋙bleAcute;䋝rave;䁠ilde;䋜ond;拄ferentialD;慆Ѱ̽\0\0\0͔͂\0Ѕf;쀀𝔻ƀ;DE͈͉͍䂨ot;惜qual;扐blèCDLRUVͣͲ΂ϏϢϸontourIntegraìȹoɴ͹\0\0ͻ»͉nArrow;懓Āeo·ΤftƀARTΐΖΡrrow;懐ightArrow;懔eåˊngĀLRΫτeftĀARγιrrow;柸ightArrow;柺ightArrow;柹ightĀATϘϞrrow;懒ee;抨pɁϩ\0\0ϯrrow;懑ownArrow;懕erticalBar;戥ǹABLRTaВЪаўѿͼrrowƀ;BUНОТ憓ar;椓pArrow;懵reve;䌑eft˒к\0ц\0ѐightVector;楐eeVector;楞ectorĀ;Bљњ憽ar;楖ightǔѧ\0ѱeeVector;楟ectorĀ;BѺѻ懁ar;楗eeĀ;A҆҇护rrow;憧ĀctҒҗr;쀀𝒟rok;䄐ࠀNTacdfglmopqstuxҽӀӄӋӞӢӧӮӵԡԯԶՒ՝ՠեG;䅊H耻Ð䃐cute耻É䃉ƀaiyӒӗӜron;䄚rc耻Ê䃊;䐭ot;䄖r;쀀𝔈rave耻È䃈ement;戈ĀapӺӾcr;䄒tyɓԆ\0\0ԒmallSquare;旻erySmallSquare;斫ĀgpԦԪon;䄘f;쀀𝔼silon;䎕uĀaiԼՉlĀ;TՂՃ橵ilde;扂librium;懌Āci՗՚r;愰m;橳a;䎗ml耻Ë䃋Āipժկsts;戃onentialE;慇ʀcfiosօֈ֍ֲ׌y;䐤r;쀀𝔉lledɓ֗\0\0֣mallSquare;旼erySmallSquare;斪Ͱֺ\0ֿ\0\0ׄf;쀀𝔽All;戀riertrf;愱cò׋؀JTabcdfgorstר׬ׯ׺؀ؒؖ؛؝أ٬ٲcy;䐃耻>䀾mmaĀ;d׷׸䎓;䏜reve;䄞ƀeiy؇،ؐdil;䄢rc;䄜;䐓ot;䄠r;쀀𝔊;拙pf;쀀𝔾eater̀EFGLSTصلَٖٛ٦qualĀ;Lؾؿ扥ess;招ullEqual;执reater;檢ess;扷lantEqual;橾ilde;扳cr;쀀𝒢;扫ЀAacfiosuڅڋږڛڞڪھۊRDcy;䐪Āctڐڔek;䋇;䁞irc;䄤r;愌lbertSpace;愋ǰگ\0ڲf;愍izontalLine;攀Āctۃۅòکrok;䄦mpńېۘownHumðįqual;扏܀EJOacdfgmnostuۺ۾܃܇܎ܚܞܡܨ݄ݸދޏޕcy;䐕lig;䄲cy;䐁cute耻Í䃍Āiyܓܘrc耻Î䃎;䐘ot;䄰r;愑rave耻Ì䃌ƀ;apܠܯܿĀcgܴܷr;䄪inaryI;慈lieóϝǴ݉\0ݢĀ;eݍݎ戬Āgrݓݘral;戫section;拂isibleĀCTݬݲomma;恣imes;恢ƀgptݿރވon;䄮f;쀀𝕀a;䎙cr;愐ilde;䄨ǫޚ\0ޞcy;䐆l耻Ï䃏ʀcfosuެ޷޼߂ߐĀiyޱ޵rc;䄴;䐙r;쀀𝔍pf;쀀𝕁ǣ߇\0ߌr;쀀𝒥rcy;䐈kcy;䐄΀HJacfosߤߨ߽߬߱ࠂࠈcy;䐥cy;䐌ppa;䎚Āey߶߻dil;䄶;䐚r;쀀𝔎pf;쀀𝕂cr;쀀𝒦րJTaceflmostࠥࠩࠬࡐࡣ঳সে্਷ੇcy;䐉耻<䀼ʀcmnpr࠷࠼ࡁࡄࡍute;䄹bda;䎛g;柪lacetrf;愒r;憞ƀaeyࡗ࡜ࡡron;䄽dil;䄻;䐛Āfsࡨ॰tԀACDFRTUVarࡾࢩࢱࣦ࣠ࣼयज़ΐ४Ānrࢃ࢏gleBracket;柨rowƀ;BR࢙࢚࢞憐ar;懤ightArrow;懆eiling;挈oǵࢷ\0ࣃbleBracket;柦nǔࣈ\0࣒eeVector;楡ectorĀ;Bࣛࣜ懃ar;楙loor;挊ightĀAV࣯ࣵrrow;憔ector;楎Āerँगeƀ;AVउऊऐ抣rrow;憤ector;楚iangleƀ;BEतथऩ抲ar;槏qual;抴pƀDTVषूौownVector;楑eeVector;楠ectorĀ;Bॖॗ憿ar;楘ectorĀ;B॥०憼ar;楒ightáΜs̀EFGLSTॾঋকঝঢভqualGreater;拚ullEqual;扦reater;扶ess;檡lantEqual;橽ilde;扲r;쀀𝔏Ā;eঽা拘ftarrow;懚idot;䄿ƀnpw৔ਖਛgȀLRlr৞৷ਂਐeftĀAR০৬rrow;柵ightArrow;柷ightArrow;柶eftĀarγਊightáοightáϊf;쀀𝕃erĀLRਢਬeftArrow;憙ightArrow;憘ƀchtਾੀੂòࡌ;憰rok;䅁;扪Ѐacefiosuਗ਼੝੠੷੼અઋ઎p;椅y;䐜Ādl੥੯iumSpace;恟lintrf;愳r;쀀𝔐nusPlus;戓pf;쀀𝕄cò੶;䎜ҀJacefostuણધભીଔଙඑ඗ඞcy;䐊cute;䅃ƀaey઴હાron;䅇dil;䅅;䐝ƀgswે૰଎ativeƀMTV૓૟૨ediumSpace;怋hiĀcn૦૘ë૙eryThiî૙tedĀGL૸ଆreaterGreateòٳessLesóੈLine;䀊r;쀀𝔑ȀBnptଢନଷ଺reak;恠BreakingSpace;䂠f;愕ڀ;CDEGHLNPRSTV୕ୖ୪୼஡௫ఄ౞಄ದ೘ൡඅ櫬Āou୛୤ngruent;扢pCap;扭oubleVerticalBar;戦ƀlqxஃஊ஛ement;戉ualĀ;Tஒஓ扠ilde;쀀≂̸ists;戄reater΀;EFGLSTஶஷ஽௉௓௘௥扯qual;扱ullEqual;쀀≧̸reater;쀀≫̸ess;批lantEqual;쀀⩾̸ilde;扵umpń௲௽ownHump;쀀≎̸qual;쀀≏̸eĀfsఊధtTriangleƀ;BEచఛడ拪ar;쀀⧏̸qual;括s̀;EGLSTవశ఼ౄోౘ扮qual;扰reater;扸ess;쀀≪̸lantEqual;쀀⩽̸ilde;扴estedĀGL౨౹reaterGreater;쀀⪢̸essLess;쀀⪡̸recedesƀ;ESಒಓಛ技qual;쀀⪯̸lantEqual;拠ĀeiಫಹverseElement;戌ghtTriangleƀ;BEೋೌ೒拫ar;쀀⧐̸qual;拭ĀquೝഌuareSuĀbp೨೹setĀ;E೰ೳ쀀⊏̸qual;拢ersetĀ;Eഃആ쀀⊐̸qual;拣ƀbcpഓതൎsetĀ;Eഛഞ쀀⊂⃒qual;抈ceedsȀ;ESTലള഻െ抁qual;쀀⪰̸lantEqual;拡ilde;쀀≿̸ersetĀ;E൘൛쀀⊃⃒qual;抉ildeȀ;EFT൮൯൵ൿ扁qual;扄ullEqual;扇ilde;扉erticalBar;戤cr;쀀𝒩ilde耻Ñ䃑;䎝܀Eacdfgmoprstuvලෂ෉෕ෛ෠෧෼ขภยา฿ไlig;䅒cute耻Ó䃓Āiy෎ීrc耻Ô䃔;䐞blac;䅐r;쀀𝔒rave耻Ò䃒ƀaei෮ෲ෶cr;䅌ga;䎩cron;䎟pf;쀀𝕆enCurlyĀDQฎบoubleQuote;怜uote;怘;橔Āclวฬr;쀀𝒪ash耻Ø䃘iŬื฼de耻Õ䃕es;樷ml耻Ö䃖erĀBP๋๠Āar๐๓r;怾acĀek๚๜;揞et;掴arenthesis;揜Ҁacfhilors๿ງຊຏຒດຝະ໼rtialD;戂y;䐟r;쀀𝔓i;䎦;䎠usMinus;䂱Āipຢອncareplanåڝf;愙Ȁ;eio຺ູ໠໤檻cedesȀ;EST່້໏໚扺qual;檯lantEqual;扼ilde;找me;怳Ādp໩໮uct;戏ortionĀ;aȥ໹l;戝Āci༁༆r;쀀𝒫;䎨ȀUfos༑༖༛༟OT耻"䀢r;쀀𝔔pf;愚cr;쀀𝒬؀BEacefhiorsu༾གྷཇའཱིྦྷྪྭ႖ႩႴႾarr;椐G耻®䂮ƀcnrཎནབute;䅔g;柫rĀ;tཛྷཝ憠l;椖ƀaeyཧཬཱron;䅘dil;䅖;䐠Ā;vླྀཹ愜erseĀEUྂྙĀlq྇ྎement;戋uilibrium;懋pEquilibrium;楯r»ཹo;䎡ghtЀACDFTUVa࿁࿫࿳ဢဨၛႇϘĀnr࿆࿒gleBracket;柩rowƀ;BL࿜࿝࿡憒ar;懥eftArrow;懄eiling;按oǵ࿹\0စbleBracket;柧nǔည\0နeeVector;楝ectorĀ;Bဝသ懂ar;楕loor;挋Āerိ၃eƀ;AVဵံြ抢rrow;憦ector;楛iangleƀ;BEၐၑၕ抳ar;槐qual;抵pƀDTVၣၮၸownVector;楏eeVector;楜ectorĀ;Bႂႃ憾ar;楔ectorĀ;B႑႒懀ar;楓Āpuႛ႞f;愝ndImplies;楰ightarrow;懛ĀchႹႼr;愛;憱leDelayed;槴ڀHOacfhimoqstuფჱჷჽᄙᄞᅑᅖᅡᅧᆵᆻᆿĀCcჩხHcy;䐩y;䐨FTcy;䐬cute;䅚ʀ;aeiyᄈᄉᄎᄓᄗ檼ron;䅠dil;䅞rc;䅜;䐡r;쀀𝔖ortȀDLRUᄪᄴᄾᅉownArrow»ОeftArrow»࢚ightArrow»࿝pArrow;憑gma;䎣allCircle;战pf;쀀𝕊ɲᅭ\0\0ᅰt;戚areȀ;ISUᅻᅼᆉᆯ斡ntersection;抓uĀbpᆏᆞsetĀ;Eᆗᆘ抏qual;抑ersetĀ;Eᆨᆩ抐qual;抒nion;抔cr;쀀𝒮ar;拆ȀbcmpᇈᇛሉላĀ;sᇍᇎ拐etĀ;Eᇍᇕqual;抆ĀchᇠህeedsȀ;ESTᇭᇮᇴᇿ扻qual;檰lantEqual;扽ilde;承Tháྌ;我ƀ;esሒሓሣ拑rsetĀ;Eሜም抃qual;抇et»ሓրHRSacfhiorsሾቄ቉ቕ቞ቱቶኟዂወዑORN耻Þ䃞ADE;愢ĀHc቎ቒcy;䐋y;䐦Ābuቚቜ;䀉;䎤ƀaeyብቪቯron;䅤dil;䅢;䐢r;쀀𝔗Āeiቻ኉ǲኀ\0ኇefore;戴a;䎘Ācn኎ኘkSpace;쀀  Space;怉ldeȀ;EFTካኬኲኼ戼qual;扃ullEqual;扅ilde;扈pf;쀀𝕋ipleDot;惛Āctዖዛr;쀀𝒯rok;䅦ૡዷጎጚጦ\0ጬጱ\0\0\0\0\0ጸጽ፷ᎅ\0᏿ᐄᐊᐐĀcrዻጁute耻Ú䃚rĀ;oጇገ憟cir;楉rǣጓ\0጖y;䐎ve;䅬Āiyጞጣrc耻Û䃛;䐣blac;䅰r;쀀𝔘rave耻Ù䃙acr;䅪Ādiፁ፩erĀBPፈ፝Āarፍፐr;䁟acĀekፗፙ;揟et;掵arenthesis;揝onĀ;P፰፱拃lus;抎Āgp፻፿on;䅲f;쀀𝕌ЀADETadps᎕ᎮᎸᏄϨᏒᏗᏳrrowƀ;BDᅐᎠᎤar;椒ownArrow;懅ownArrow;憕quilibrium;楮eeĀ;AᏋᏌ报rrow;憥ownáϳerĀLRᏞᏨeftArrow;憖ightArrow;憗iĀ;lᏹᏺ䏒on;䎥ing;䅮cr;쀀𝒰ilde;䅨ml耻Ü䃜ҀDbcdefosvᐧᐬᐰᐳᐾᒅᒊᒐᒖash;披ar;櫫y;䐒ashĀ;lᐻᐼ抩;櫦Āerᑃᑅ;拁ƀbtyᑌᑐᑺar;怖Ā;iᑏᑕcalȀBLSTᑡᑥᑪᑴar;戣ine;䁼eparator;杘ilde;所ThinSpace;怊r;쀀𝔙pf;쀀𝕍cr;쀀𝒱dash;抪ʀcefosᒧᒬᒱᒶᒼirc;䅴dge;拀r;쀀𝔚pf;쀀𝕎cr;쀀𝒲Ȁfiosᓋᓐᓒᓘr;쀀𝔛;䎞pf;쀀𝕏cr;쀀𝒳ҀAIUacfosuᓱᓵᓹᓽᔄᔏᔔᔚᔠcy;䐯cy;䐇cy;䐮cute耻Ý䃝Āiyᔉᔍrc;䅶;䐫r;쀀𝔜pf;쀀𝕐cr;쀀𝒴ml;䅸ЀHacdefosᔵᔹᔿᕋᕏᕝᕠᕤcy;䐖cute;䅹Āayᕄᕉron;䅽;䐗ot;䅻ǲᕔ\0ᕛoWidtè૙a;䎖r;愨pf;愤cr;쀀𝒵௡ᖃᖊᖐ\0ᖰᖶᖿ\0\0\0\0ᗆᗛᗫᙟ᙭\0ᚕ᚛ᚲᚹ\0ᚾcute耻á䃡reve;䄃̀;Ediuyᖜᖝᖡᖣᖨᖭ戾;쀀∾̳;房rc耻â䃢te肻´̆;䐰lig耻æ䃦Ā;r²ᖺ;쀀𝔞rave耻à䃠ĀepᗊᗖĀfpᗏᗔsym;愵èᗓha;䎱ĀapᗟcĀclᗤᗧr;䄁g;樿ɤᗰ\0\0ᘊʀ;adsvᗺᗻᗿᘁᘇ戧nd;橕;橜lope;橘;橚΀;elmrszᘘᘙᘛᘞᘿᙏᙙ戠;榤e»ᘙsdĀ;aᘥᘦ戡ѡᘰᘲᘴᘶᘸᘺᘼᘾ;榨;榩;榪;榫;榬;榭;榮;榯tĀ;vᙅᙆ戟bĀ;dᙌᙍ抾;榝Āptᙔᙗh;戢»¹arr;捼Āgpᙣᙧon;䄅f;쀀𝕒΀;Eaeiop዁ᙻᙽᚂᚄᚇᚊ;橰cir;橯;扊d;手s;䀧roxĀ;e዁ᚒñᚃing耻å䃥ƀctyᚡᚦᚨr;쀀𝒶;䀪mpĀ;e዁ᚯñʈilde耻ã䃣ml耻ä䃤Āciᛂᛈoninôɲnt;樑ࠀNabcdefiklnoprsu᛭ᛱᜰ᜼ᝃᝈ᝸᝽០៦ᠹᡐᜍ᤽᥈ᥰot;櫭Ācrᛶ᜞kȀcepsᜀᜅᜍᜓong;扌psilon;䏶rime;怵imĀ;e᜚᜛戽q;拍Ŷᜢᜦee;抽edĀ;gᜬᜭ挅e»ᜭrkĀ;t፜᜷brk;掶Āoyᜁᝁ;䐱quo;怞ʀcmprtᝓ᝛ᝡᝤᝨausĀ;eĊĉptyv;榰séᜌnoõēƀahwᝯ᝱ᝳ;䎲;愶een;扬r;쀀𝔟g΀costuvwឍឝឳេ៕៛៞ƀaiuបពរðݠrc;旯p»፱ƀdptឤឨឭot;樀lus;樁imes;樂ɱឹ\0\0ើcup;樆ar;昅riangleĀdu៍្own;施p;斳plus;樄eåᑄåᒭarow;植ƀako៭ᠦᠵĀcn៲ᠣkƀlst៺֫᠂ozenge;槫riangleȀ;dlr᠒᠓᠘᠝斴own;斾eft;旂ight;斸k;搣Ʊᠫ\0ᠳƲᠯ\0ᠱ;斒;斑4;斓ck;斈ĀeoᠾᡍĀ;qᡃᡆ쀀=⃥uiv;쀀≡⃥t;挐Ȁptwxᡙᡞᡧᡬf;쀀𝕓Ā;tᏋᡣom»Ꮜtie;拈؀DHUVbdhmptuvᢅᢖᢪᢻᣗᣛᣬ᣿ᤅᤊᤐᤡȀLRlrᢎᢐᢒᢔ;敗;敔;敖;敓ʀ;DUduᢡᢢᢤᢦᢨ敐;敦;敩;敤;敧ȀLRlrᢳᢵᢷᢹ;敝;敚;敜;教΀;HLRhlrᣊᣋᣍᣏᣑᣓᣕ救;敬;散;敠;敫;敢;敟ox;槉ȀLRlrᣤᣦᣨᣪ;敕;敒;攐;攌ʀ;DUduڽ᣷᣹᣻᣽;敥;敨;攬;攴inus;抟lus;択imes;抠ȀLRlrᤙᤛᤝ᤟;敛;敘;攘;攔΀;HLRhlrᤰᤱᤳᤵᤷ᤻᤹攂;敪;敡;敞;攼;攤;攜Āevģ᥂bar耻¦䂦Ȁceioᥑᥖᥚᥠr;쀀𝒷mi;恏mĀ;e᜚᜜lƀ;bhᥨᥩᥫ䁜;槅sub;柈Ŭᥴ᥾lĀ;e᥹᥺怢t»᥺pƀ;Eeįᦅᦇ;檮Ā;qۜۛೡᦧ\0᧨ᨑᨕᨲ\0ᨷᩐ\0\0᪴\0\0᫁\0\0ᬡᬮ᭍᭒\0᯽\0ᰌƀcpr᦭ᦲ᧝ute;䄇̀;abcdsᦿᧀᧄ᧊᧕᧙戩nd;橄rcup;橉Āau᧏᧒p;橋p;橇ot;橀;쀀∩︀Āeo᧢᧥t;恁îړȀaeiu᧰᧻ᨁᨅǰ᧵\0᧸s;橍on;䄍dil耻ç䃧rc;䄉psĀ;sᨌᨍ橌m;橐ot;䄋ƀdmnᨛᨠᨦil肻¸ƭptyv;榲t脀¢;eᨭᨮ䂢räƲr;쀀𝔠ƀceiᨽᩀᩍy;䑇ckĀ;mᩇᩈ朓ark»ᩈ;䏇r΀;Ecefms᩟᩠ᩢᩫ᪤᪪᪮旋;槃ƀ;elᩩᩪᩭ䋆q;扗eɡᩴ\0\0᪈rrowĀlr᩼᪁eft;憺ight;憻ʀRSacd᪒᪔᪖᪚᪟»ཇ;擈st;抛irc;抚ash;抝nint;樐id;櫯cir;槂ubsĀ;u᪻᪼晣it»᪼ˬ᫇᫔᫺\0ᬊonĀ;eᫍᫎ䀺Ā;qÇÆɭ᫙\0\0᫢aĀ;t᫞᫟䀬;䁀ƀ;fl᫨᫩᫫戁îᅠeĀmx᫱᫶ent»᫩eóɍǧ᫾\0ᬇĀ;dኻᬂot;橭nôɆƀfryᬐᬔᬗ;쀀𝕔oäɔ脀©;sŕᬝr;愗Āaoᬥᬩrr;憵ss;朗Ācuᬲᬷr;쀀𝒸Ābpᬼ᭄Ā;eᭁᭂ櫏;櫑Ā;eᭉᭊ櫐;櫒dot;拯΀delprvw᭠᭬᭷ᮂᮬᯔ᯹arrĀlr᭨᭪;椸;椵ɰ᭲\0\0᭵r;拞c;拟arrĀ;p᭿ᮀ憶;椽̀;bcdosᮏᮐᮖᮡᮥᮨ截rcap;橈Āauᮛᮞp;橆p;橊ot;抍r;橅;쀀∪︀Ȁalrv᮵ᮿᯞᯣrrĀ;mᮼᮽ憷;椼yƀevwᯇᯔᯘqɰᯎ\0\0ᯒreã᭳uã᭵ee;拎edge;拏en耻¤䂤earrowĀlrᯮ᯳eft»ᮀight»ᮽeäᯝĀciᰁᰇoninôǷnt;戱lcty;挭ঀAHabcdefhijlorstuwz᰸᰻᰿ᱝᱩᱵᲊᲞᲬᲷ᳻᳿ᴍᵻᶑᶫᶻ᷆᷍rò΁ar;楥Ȁglrs᱈ᱍ᱒᱔ger;怠eth;愸òᄳhĀ;vᱚᱛ怐»ऊūᱡᱧarow;椏aã̕Āayᱮᱳron;䄏;䐴ƀ;ao̲ᱼᲄĀgrʿᲁr;懊tseq;橷ƀglmᲑᲔᲘ耻°䂰ta;䎴ptyv;榱ĀirᲣᲨsht;楿;쀀𝔡arĀlrᲳᲵ»ࣜ»သʀaegsv᳂͸᳖᳜᳠mƀ;oș᳊᳔ndĀ;ș᳑uit;晦amma;䏝in;拲ƀ;io᳧᳨᳸䃷de脀÷;o᳧ᳰntimes;拇nø᳷cy;䑒cɯᴆ\0\0ᴊrn;挞op;挍ʀlptuwᴘᴝᴢᵉᵕlar;䀤f;쀀𝕕ʀ;emps̋ᴭᴷᴽᵂqĀ;d͒ᴳot;扑inus;戸lus;戔quare;抡blebarwedgåúnƀadhᄮᵝᵧownarrowóᲃarpoonĀlrᵲᵶefôᲴighôᲶŢᵿᶅkaro÷གɯᶊ\0\0ᶎrn;挟op;挌ƀcotᶘᶣᶦĀryᶝᶡ;쀀𝒹;䑕l;槶rok;䄑Ādrᶰᶴot;拱iĀ;fᶺ᠖斿Āah᷀᷃ròЩaòྦangle;榦Āci᷒ᷕy;䑟grarr;柿ऀDacdefglmnopqrstuxḁḉḙḸոḼṉṡṾấắẽỡἪἷὄ὎὚ĀDoḆᴴoôᲉĀcsḎḔute耻é䃩ter;橮ȀaioyḢḧḱḶron;䄛rĀ;cḭḮ扖耻ê䃪lon;払;䑍ot;䄗ĀDrṁṅot;扒;쀀𝔢ƀ;rsṐṑṗ檚ave耻è䃨Ā;dṜṝ檖ot;檘Ȁ;ilsṪṫṲṴ檙nters;揧;愓Ā;dṹṺ檕ot;檗ƀapsẅẉẗcr;䄓tyƀ;svẒẓẕ戅et»ẓpĀ1;ẝẤĳạả;怄;怅怃ĀgsẪẬ;䅋p;怂ĀgpẴẸon;䄙f;쀀𝕖ƀalsỄỎỒrĀ;sỊị拕l;槣us;橱iƀ;lvỚớở䎵on»ớ;䏵ȀcsuvỪỳἋἣĀioữḱrc»Ḯɩỹ\0\0ỻíՈantĀglἂἆtr»ṝess»Ṻƀaeiἒ἖Ἒls;䀽st;扟vĀ;DȵἠD;橸parsl;槥ĀDaἯἳot;打rr;楱ƀcdiἾὁỸr;愯oô͒ĀahὉὋ;䎷耻ð䃰Āmrὓὗl耻ë䃫o;悬ƀcipὡὤὧl;䀡sôծĀeoὬὴctatioîՙnentialåչৡᾒ\0ᾞ\0ᾡᾧ\0\0ῆῌ\0ΐ\0ῦῪ \0 ⁚llingdotseñṄy;䑄male;晀ƀilrᾭᾳ῁lig;耀ﬃɩᾹ\0\0᾽g;耀ﬀig;耀ﬄ;쀀𝔣lig;耀ﬁlig;쀀fjƀaltῙ῜ῡt;晭ig;耀ﬂns;斱of;䆒ǰ΅\0ῳf;쀀𝕗ĀakֿῷĀ;vῼ´拔;櫙artint;樍Āao‌⁕Ācs‑⁒α‚‰‸⁅⁈\0⁐β•‥‧‪‬\0‮耻½䂽;慓耻¼䂼;慕;慙;慛Ƴ‴\0‶;慔;慖ʴ‾⁁\0\0⁃耻¾䂾;慗;慜5;慘ƶ⁌\0⁎;慚;慝8;慞l;恄wn;挢cr;쀀𝒻ࢀEabcdefgijlnorstv₂₉₟₥₰₴⃰⃵⃺⃿℃ℒℸ̗ℾ⅒↞Ā;lٍ₇;檌ƀcmpₐₕ₝ute;䇵maĀ;dₜ᳚䎳;檆reve;䄟Āiy₪₮rc;䄝;䐳ot;䄡Ȁ;lqsؾق₽⃉ƀ;qsؾٌ⃄lanô٥Ȁ;cdl٥⃒⃥⃕c;檩otĀ;o⃜⃝檀Ā;l⃢⃣檂;檄Ā;e⃪⃭쀀⋛︀s;檔r;쀀𝔤Ā;gٳ؛mel;愷cy;䑓Ȁ;Eajٚℌℎℐ;檒;檥;檤ȀEaesℛℝ℩ℴ;扩pĀ;p℣ℤ檊rox»ℤĀ;q℮ℯ檈Ā;q℮ℛim;拧pf;쀀𝕘Āci⅃ⅆr;愊mƀ;el٫ⅎ⅐;檎;檐茀>;cdlqr׮ⅠⅪⅮⅳⅹĀciⅥⅧ;檧r;橺ot;拗Par;榕uest;橼ʀadelsↄⅪ←ٖ↛ǰ↉\0↎proø₞r;楸qĀlqؿ↖lesó₈ií٫Āen↣↭rtneqq;쀀≩︀Å↪ԀAabcefkosy⇄⇇⇱⇵⇺∘∝∯≨≽ròΠȀilmr⇐⇔⇗⇛rsðᒄf»․ilôکĀdr⇠⇤cy;䑊ƀ;cwࣴ⇫⇯ir;楈;憭ar;意irc;䄥ƀalr∁∎∓rtsĀ;u∉∊晥it»∊lip;怦con;抹r;쀀𝔥sĀew∣∩arow;椥arow;椦ʀamopr∺∾≃≞≣rr;懿tht;戻kĀlr≉≓eftarrow;憩ightarrow;憪f;쀀𝕙bar;怕ƀclt≯≴≸r;쀀𝒽asè⇴rok;䄧Ābp⊂⊇ull;恃hen»ᱛૡ⊣\0⊪\0⊸⋅⋎\0⋕⋳\0\0⋸⌢⍧⍢⍿\0⎆⎪⎴cute耻í䃭ƀ;iyݱ⊰⊵rc耻î䃮;䐸Ācx⊼⊿y;䐵cl耻¡䂡ĀfrΟ⋉;쀀𝔦rave耻ì䃬Ȁ;inoܾ⋝⋩⋮Āin⋢⋦nt;樌t;戭fin;槜ta;愩lig;䄳ƀaop⋾⌚⌝ƀcgt⌅⌈⌗r;䄫ƀelpܟ⌏⌓inåގarôܠh;䄱f;抷ed;䆵ʀ;cfotӴ⌬⌱⌽⍁are;愅inĀ;t⌸⌹戞ie;槝doô⌙ʀ;celpݗ⍌⍐⍛⍡al;抺Āgr⍕⍙eróᕣã⍍arhk;樗rod;樼Ȁcgpt⍯⍲⍶⍻y;䑑on;䄯f;쀀𝕚a;䎹uest耻¿䂿Āci⎊⎏r;쀀𝒾nʀ;EdsvӴ⎛⎝⎡ӳ;拹ot;拵Ā;v⎦⎧拴;拳Ā;iݷ⎮lde;䄩ǫ⎸\0⎼cy;䑖l耻ï䃯̀cfmosu⏌⏗⏜⏡⏧⏵Āiy⏑⏕rc;䄵;䐹r;쀀𝔧ath;䈷pf;쀀𝕛ǣ⏬\0⏱r;쀀𝒿rcy;䑘kcy;䑔Ѐacfghjos␋␖␢␧␭␱␵␻ppaĀ;v␓␔䎺;䏰Āey␛␠dil;䄷;䐺r;쀀𝔨reen;䄸cy;䑅cy;䑜pf;쀀𝕜cr;쀀𝓀஀ABEHabcdefghjlmnoprstuv⑰⒁⒆⒍⒑┎┽╚▀♎♞♥♹♽⚚⚲⛘❝❨➋⟀⠁⠒ƀart⑷⑺⑼rò৆òΕail;椛arr;椎Ā;gঔ⒋;檋ar;楢ॣ⒥\0⒪\0⒱\0\0\0\0\0⒵Ⓔ\0ⓆⓈⓍ\0⓹ute;䄺mptyv;榴raîࡌbda;䎻gƀ;dlࢎⓁⓃ;榑åࢎ;檅uo耻«䂫rЀ;bfhlpst࢙ⓞⓦⓩ⓫⓮⓱⓵Ā;f࢝ⓣs;椟s;椝ë≒p;憫l;椹im;楳l;憢ƀ;ae⓿─┄檫il;椙Ā;s┉┊檭;쀀⪭︀ƀabr┕┙┝rr;椌rk;杲Āak┢┬cĀek┨┪;䁻;䁛Āes┱┳;榋lĀdu┹┻;榏;榍Ȁaeuy╆╋╖╘ron;䄾Ādi═╔il;䄼ìࢰâ┩;䐻Ȁcqrs╣╦╭╽a;椶uoĀ;rนᝆĀdu╲╷har;楧shar;楋h;憲ʀ;fgqs▋▌উ◳◿扤tʀahlrt▘▤▷◂◨rrowĀ;t࢙□aé⓶arpoonĀdu▯▴own»њp»०eftarrows;懇ightƀahs◍◖◞rrowĀ;sࣴࢧarpoonó྘quigarro÷⇰hreetimes;拋ƀ;qs▋ও◺lanôবʀ;cdgsব☊☍☝☨c;檨otĀ;o☔☕橿Ā;r☚☛檁;檃Ā;e☢☥쀀⋚︀s;檓ʀadegs☳☹☽♉♋pproøⓆot;拖qĀgq♃♅ôউgtò⒌ôছiíলƀilr♕࣡♚sht;楼;쀀𝔩Ā;Eজ♣;檑š♩♶rĀdu▲♮Ā;l॥♳;楪lk;斄cy;䑙ʀ;achtੈ⚈⚋⚑⚖rò◁orneòᴈard;楫ri;旺Āio⚟⚤dot;䅀ustĀ;a⚬⚭掰che»⚭ȀEaes⚻⚽⛉⛔;扨pĀ;p⛃⛄檉rox»⛄Ā;q⛎⛏檇Ā;q⛎⚻im;拦Ѐabnoptwz⛩⛴⛷✚✯❁❇❐Ānr⛮⛱g;柬r;懽rëࣁgƀlmr⛿✍✔eftĀar০✇ightá৲apsto;柼ightá৽parrowĀlr✥✩efô⓭ight;憬ƀafl✶✹✽r;榅;쀀𝕝us;樭imes;樴š❋❏st;戗áፎƀ;ef❗❘᠀旊nge»❘arĀ;l❤❥䀨t;榓ʀachmt❳❶❼➅➇ròࢨorneòᶌarĀ;d྘➃;業;怎ri;抿̀achiqt➘➝ੀ➢➮➻quo;怹r;쀀𝓁mƀ;egল➪➬;檍;檏Ābu┪➳oĀ;rฟ➹;怚rok;䅂萀<;cdhilqrࠫ⟒☹⟜⟠⟥⟪⟰Āci⟗⟙;檦r;橹reå◲mes;拉arr;楶uest;橻ĀPi⟵⟹ar;榖ƀ;ef⠀भ᠛旃rĀdu⠇⠍shar;楊har;楦Āen⠗⠡rtneqq;쀀≨︀Å⠞܀Dacdefhilnopsu⡀⡅⢂⢎⢓⢠⢥⢨⣚⣢⣤ઃ⣳⤂Dot;戺Ȁclpr⡎⡒⡣⡽r耻¯䂯Āet⡗⡙;時Ā;e⡞⡟朠se»⡟Ā;sျ⡨toȀ;dluျ⡳⡷⡻owîҌefôएðᏑker;斮Āoy⢇⢌mma;権;䐼ash;怔asuredangle»ᘦr;쀀𝔪o;愧ƀcdn⢯⢴⣉ro耻µ䂵Ȁ;acdᑤ⢽⣀⣄sôᚧir;櫰ot肻·Ƶusƀ;bd⣒ᤃ⣓戒Ā;uᴼ⣘;横ţ⣞⣡p;櫛ò−ðઁĀdp⣩⣮els;抧f;쀀𝕞Āct⣸⣽r;쀀𝓂pos»ᖝƀ;lm⤉⤊⤍䎼timap;抸ఀGLRVabcdefghijlmoprstuvw⥂⥓⥾⦉⦘⧚⧩⨕⨚⩘⩝⪃⪕⪤⪨⬄⬇⭄⭿⮮ⰴⱧⱼ⳩Āgt⥇⥋;쀀⋙̸Ā;v⥐௏쀀≫⃒ƀelt⥚⥲⥶ftĀar⥡⥧rrow;懍ightarrow;懎;쀀⋘̸Ā;v⥻ే쀀≪⃒ightarrow;懏ĀDd⦎⦓ash;抯ash;抮ʀbcnpt⦣⦧⦬⦱⧌la»˞ute;䅄g;쀀∠⃒ʀ;Eiop඄⦼⧀⧅⧈;쀀⩰̸d;쀀≋̸s;䅉roø඄urĀ;a⧓⧔普lĀ;s⧓ସǳ⧟\0⧣p肻 ଷmpĀ;e௹ఀʀaeouy⧴⧾⨃⨐⨓ǰ⧹\0⧻;橃on;䅈dil;䅆ngĀ;dൾ⨊ot;쀀⩭̸p;橂;䐽ash;怓΀;Aadqsxஒ⨩⨭⨻⩁⩅⩐rr;懗rĀhr⨳⨶k;椤Ā;oᏲᏰot;쀀≐̸uiöୣĀei⩊⩎ar;椨í஘istĀ;s஠டr;쀀𝔫ȀEest௅⩦⩹⩼ƀ;qs஼⩭௡ƀ;qs஼௅⩴lanô௢ií௪Ā;rஶ⪁»ஷƀAap⪊⪍⪑rò⥱rr;憮ar;櫲ƀ;svྍ⪜ྌĀ;d⪡⪢拼;拺cy;䑚΀AEadest⪷⪺⪾⫂⫅⫶⫹rò⥦;쀀≦̸rr;憚r;急Ȁ;fqs఻⫎⫣⫯tĀar⫔⫙rro÷⫁ightarro÷⪐ƀ;qs఻⪺⫪lanôౕĀ;sౕ⫴»శiíౝĀ;rవ⫾iĀ;eచథiäඐĀpt⬌⬑f;쀀𝕟膀¬;in⬙⬚⬶䂬nȀ;Edvஉ⬤⬨⬮;쀀⋹̸ot;쀀⋵̸ǡஉ⬳⬵;拷;拶iĀ;vಸ⬼ǡಸ⭁⭃;拾;拽ƀaor⭋⭣⭩rȀ;ast୻⭕⭚⭟lleì୻l;쀀⫽⃥;쀀∂̸lint;樔ƀ;ceಒ⭰⭳uåಥĀ;cಘ⭸Ā;eಒ⭽ñಘȀAait⮈⮋⮝⮧rò⦈rrƀ;cw⮔⮕⮙憛;쀀⤳̸;쀀↝̸ghtarrow»⮕riĀ;eೋೖ΀chimpqu⮽⯍⯙⬄୸⯤⯯Ȁ;cerല⯆ഷ⯉uå൅;쀀𝓃ortɭ⬅\0\0⯖ará⭖mĀ;e൮⯟Ā;q൴൳suĀbp⯫⯭å೸åഋƀbcp⯶ⰑⰙȀ;Ees⯿ⰀഢⰄ抄;쀀⫅̸etĀ;eഛⰋqĀ;qണⰀcĀ;eലⰗñസȀ;EesⰢⰣൟⰧ抅;쀀⫆̸etĀ;e൘ⰮqĀ;qൠⰣȀgilrⰽⰿⱅⱇìௗlde耻ñ䃱çృiangleĀlrⱒⱜeftĀ;eచⱚñదightĀ;eೋⱥñ೗Ā;mⱬⱭ䎽ƀ;esⱴⱵⱹ䀣ro;愖p;怇ҀDHadgilrsⲏⲔⲙⲞⲣⲰⲶⳓⳣash;抭arr;椄p;쀀≍⃒ash;抬ĀetⲨⲬ;쀀≥⃒;쀀>⃒nfin;槞ƀAetⲽⳁⳅrr;椂;쀀≤⃒Ā;rⳊⳍ쀀<⃒ie;쀀⊴⃒ĀAtⳘⳜrr;椃rie;쀀⊵⃒im;쀀∼⃒ƀAan⳰⳴ⴂrr;懖rĀhr⳺⳽k;椣Ā;oᏧᏥear;椧ቓ᪕\0\0\0\0\0\0\0\0\0\0\0\0\0ⴭ\0ⴸⵈⵠⵥ⵲ⶄᬇ\0\0ⶍⶫ\0ⷈⷎ\0ⷜ⸙⸫⸾⹃Ācsⴱ᪗ute耻ó䃳ĀiyⴼⵅrĀ;c᪞ⵂ耻ô䃴;䐾ʀabios᪠ⵒⵗǈⵚlac;䅑v;樸old;榼lig;䅓Ācr⵩⵭ir;榿;쀀𝔬ͯ⵹\0\0⵼\0ⶂn;䋛ave耻ò䃲;槁Ābmⶈ෴ar;榵Ȁacitⶕ⶘ⶥⶨrò᪀Āir⶝ⶠr;榾oss;榻nå๒;槀ƀaeiⶱⶵⶹcr;䅍ga;䏉ƀcdnⷀⷅǍron;䎿;榶pf;쀀𝕠ƀaelⷔ⷗ǒr;榷rp;榹΀;adiosvⷪⷫⷮ⸈⸍⸐⸖戨rò᪆Ȁ;efmⷷⷸ⸂⸅橝rĀ;oⷾⷿ愴f»ⷿ耻ª䂪耻º䂺gof;抶r;橖lope;橗;橛ƀclo⸟⸡⸧ò⸁ash耻ø䃸l;折iŬⸯ⸴de耻õ䃵esĀ;aǛ⸺s;樶ml耻ö䃶bar;挽ૡ⹞\0⹽\0⺀⺝\0⺢⺹\0\0⻋ຜ\0⼓\0\0⼫⾼\0⿈rȀ;astЃ⹧⹲຅脀¶;l⹭⹮䂶leìЃɩ⹸\0\0⹻m;櫳;櫽y;䐿rʀcimpt⺋⺏⺓ᡥ⺗nt;䀥od;䀮il;怰enk;怱r;쀀𝔭ƀimo⺨⺰⺴Ā;v⺭⺮䏆;䏕maô੶ne;明ƀ;tv⺿⻀⻈䏀chfork»´;䏖Āau⻏⻟nĀck⻕⻝kĀ;h⇴⻛;愎ö⇴sҀ;abcdemst⻳⻴ᤈ⻹⻽⼄⼆⼊⼎䀫cir;樣ir;樢Āouᵀ⼂;樥;橲n肻±ຝim;樦wo;樧ƀipu⼙⼠⼥ntint;樕f;쀀𝕡nd耻£䂣Ԁ;Eaceinosu່⼿⽁⽄⽇⾁⾉⾒⽾⾶;檳p;檷uå໙Ā;c໎⽌̀;acens່⽙⽟⽦⽨⽾pproø⽃urlyeñ໙ñ໎ƀaes⽯⽶⽺pprox;檹qq;檵im;拨iíໟmeĀ;s⾈ຮ怲ƀEas⽸⾐⽺ð⽵ƀdfp໬⾙⾯ƀals⾠⾥⾪lar;挮ine;挒urf;挓Ā;t໻⾴ï໻rel;抰Āci⿀⿅r;쀀𝓅;䏈ncsp;怈̀fiopsu⿚⋢⿟⿥⿫⿱r;쀀𝔮pf;쀀𝕢rime;恗cr;쀀𝓆ƀaeo⿸〉〓tĀei⿾々rnionóڰnt;樖stĀ;e【】䀿ñἙô༔઀ABHabcdefhilmnoprstux぀けさすムㄎㄫㅇㅢㅲㆎ㈆㈕㈤㈩㉘㉮㉲㊐㊰㊷ƀartぇおがròႳòϝail;検aròᱥar;楤΀cdenqrtとふへみわゔヌĀeuねぱ;쀀∽̱te;䅕iãᅮmptyv;榳gȀ;del࿑らるろ;榒;榥å࿑uo耻»䂻rր;abcfhlpstw࿜ガクシスゼゾダッデナp;極Ā;f࿠ゴs;椠;椳s;椞ë≝ð✮l;楅im;楴l;憣;憝Āaiパフil;椚oĀ;nホボ戶aló༞ƀabrョリヮrò៥rk;杳ĀakンヽcĀekヹ・;䁽;䁝Āes㄂㄄;榌lĀduㄊㄌ;榎;榐Ȁaeuyㄗㄜㄧㄩron;䅙Ādiㄡㄥil;䅗ì࿲âヺ;䑀Ȁclqsㄴㄷㄽㅄa;椷dhar;楩uoĀ;rȎȍh;憳ƀacgㅎㅟངlȀ;ipsླྀㅘㅛႜnåႻarôྩt;断ƀilrㅩဣㅮsht;楽;쀀𝔯ĀaoㅷㆆrĀduㅽㅿ»ѻĀ;l႑ㆄ;楬Ā;vㆋㆌ䏁;䏱ƀgns㆕ㇹㇼht̀ahlrstㆤㆰ㇂㇘㇤㇮rrowĀ;t࿜ㆭaéトarpoonĀduㆻㆿowîㅾp»႒eftĀah㇊㇐rrowó࿪arpoonóՑightarrows;應quigarro÷ニhreetimes;拌g;䋚ingdotseñἲƀahm㈍㈐㈓rò࿪aòՑ;怏oustĀ;a㈞㈟掱che»㈟mid;櫮Ȁabpt㈲㈽㉀㉒Ānr㈷㈺g;柭r;懾rëဃƀafl㉇㉊㉎r;榆;쀀𝕣us;樮imes;樵Āap㉝㉧rĀ;g㉣㉤䀩t;榔olint;樒arò㇣Ȁachq㉻㊀Ⴜ㊅quo;怺r;쀀𝓇Ābu・㊊oĀ;rȔȓƀhir㊗㊛㊠reåㇸmes;拊iȀ;efl㊪ၙᠡ㊫方tri;槎luhar;楨;愞ൡ㋕㋛㋟㌬㌸㍱\0㍺㎤\0\0㏬㏰\0㐨㑈㑚㒭㒱㓊㓱\0㘖\0\0㘳cute;䅛quï➺Ԁ;Eaceinpsyᇭ㋳㋵㋿㌂㌋㌏㌟㌦㌩;檴ǰ㋺\0㋼;檸on;䅡uåᇾĀ;dᇳ㌇il;䅟rc;䅝ƀEas㌖㌘㌛;檶p;檺im;择olint;樓iíሄ;䑁otƀ;be㌴ᵇ㌵担;橦΀Aacmstx㍆㍊㍗㍛㍞㍣㍭rr;懘rĀhr㍐㍒ë∨Ā;oਸ਼਴t耻§䂧i;䀻war;椩mĀin㍩ðnuóñt;朶rĀ;o㍶⁕쀀𝔰Ȁacoy㎂㎆㎑㎠rp;景Āhy㎋㎏cy;䑉;䑈rtɭ㎙\0\0㎜iäᑤaraì⹯耻­䂭Āgm㎨㎴maƀ;fv㎱㎲㎲䏃;䏂Ѐ;deglnprካ㏅㏉㏎㏖㏞㏡㏦ot;橪Ā;q኱ኰĀ;E㏓㏔檞;檠Ā;E㏛㏜檝;檟e;扆lus;樤arr;楲aròᄽȀaeit㏸㐈㐏㐗Āls㏽㐄lsetmé㍪hp;樳parsl;槤Ādlᑣ㐔e;挣Ā;e㐜㐝檪Ā;s㐢㐣檬;쀀⪬︀ƀflp㐮㐳㑂tcy;䑌Ā;b㐸㐹䀯Ā;a㐾㐿槄r;挿f;쀀𝕤aĀdr㑍ЂesĀ;u㑔㑕晠it»㑕ƀcsu㑠㑹㒟Āau㑥㑯pĀ;sᆈ㑫;쀀⊓︀pĀ;sᆴ㑵;쀀⊔︀uĀbp㑿㒏ƀ;esᆗᆜ㒆etĀ;eᆗ㒍ñᆝƀ;esᆨᆭ㒖etĀ;eᆨ㒝ñᆮƀ;afᅻ㒦ְrť㒫ֱ»ᅼaròᅈȀcemt㒹㒾㓂㓅r;쀀𝓈tmîñiì㐕aræᆾĀar㓎㓕rĀ;f㓔ឿ昆Āan㓚㓭ightĀep㓣㓪psiloîỠhé⺯s»⡒ʀbcmnp㓻㕞ሉ㖋㖎Ҁ;Edemnprs㔎㔏㔑㔕㔞㔣㔬㔱㔶抂;櫅ot;檽Ā;dᇚ㔚ot;櫃ult;櫁ĀEe㔨㔪;櫋;把lus;檿arr;楹ƀeiu㔽㕒㕕tƀ;en㔎㕅㕋qĀ;qᇚ㔏eqĀ;q㔫㔨m;櫇Ābp㕚㕜;櫕;櫓c̀;acensᇭ㕬㕲㕹㕻㌦pproø㋺urlyeñᇾñᇳƀaes㖂㖈㌛pproø㌚qñ㌗g;晪ڀ123;Edehlmnps㖩㖬㖯ሜ㖲㖴㗀㗉㗕㗚㗟㗨㗭耻¹䂹耻²䂲耻³䂳;櫆Āos㖹㖼t;檾ub;櫘Ā;dሢ㗅ot;櫄sĀou㗏㗒l;柉b;櫗arr;楻ult;櫂ĀEe㗤㗦;櫌;抋lus;櫀ƀeiu㗴㘉㘌tƀ;enሜ㗼㘂qĀ;qሢ㖲eqĀ;q㗧㗤m;櫈Ābp㘑㘓;櫔;櫖ƀAan㘜㘠㘭rr;懙rĀhr㘦㘨ë∮Ā;oਫ਩war;椪lig耻ß䃟௡㙑㙝㙠ዎ㙳㙹\0㙾㛂\0\0\0\0\0㛛㜃\0㜉㝬\0\0\0㞇ɲ㙖\0\0㙛get;挖;䏄rë๟ƀaey㙦㙫㙰ron;䅥dil;䅣;䑂lrec;挕r;쀀𝔱Ȁeiko㚆㚝㚵㚼ǲ㚋\0㚑eĀ4fኄኁaƀ;sv㚘㚙㚛䎸ym;䏑Ācn㚢㚲kĀas㚨㚮pproø዁im»ኬsðኞĀas㚺㚮ð዁rn耻þ䃾Ǭ̟㛆⋧es膀×;bd㛏㛐㛘䃗Ā;aᤏ㛕r;樱;樰ƀeps㛡㛣㜀á⩍Ȁ;bcf҆㛬㛰㛴ot;挶ir;櫱Ā;o㛹㛼쀀𝕥rk;櫚á㍢rime;怴ƀaip㜏㜒㝤dåቈ΀adempst㜡㝍㝀㝑㝗㝜㝟ngleʀ;dlqr㜰㜱㜶㝀㝂斵own»ᶻeftĀ;e⠀㜾ñम;扜ightĀ;e㊪㝋ñၚot;旬inus;樺lus;樹b;槍ime;樻ezium;揢ƀcht㝲㝽㞁Āry㝷㝻;쀀𝓉;䑆cy;䑛rok;䅧Āio㞋㞎xô᝷headĀlr㞗㞠eftarro÷ࡏightarrow»ཝऀAHabcdfghlmoprstuw㟐㟓㟗㟤㟰㟼㠎㠜㠣㠴㡑㡝㡫㢩㣌㣒㣪㣶ròϭar;楣Ācr㟜㟢ute耻ú䃺òᅐrǣ㟪\0㟭y;䑞ve;䅭Āiy㟵㟺rc耻û䃻;䑃ƀabh㠃㠆㠋ròᎭlac;䅱aòᏃĀir㠓㠘sht;楾;쀀𝔲rave耻ù䃹š㠧㠱rĀlr㠬㠮»ॗ»ႃlk;斀Āct㠹㡍ɯ㠿\0\0㡊rnĀ;e㡅㡆挜r»㡆op;挏ri;旸Āal㡖㡚cr;䅫肻¨͉Āgp㡢㡦on;䅳f;쀀𝕦̀adhlsuᅋ㡸㡽፲㢑㢠ownáᎳarpoonĀlr㢈㢌efô㠭ighô㠯iƀ;hl㢙㢚㢜䏅»ᏺon»㢚parrows;懈ƀcit㢰㣄㣈ɯ㢶\0\0㣁rnĀ;e㢼㢽挝r»㢽op;挎ng;䅯ri;旹cr;쀀𝓊ƀdir㣙㣝㣢ot;拰lde;䅩iĀ;f㜰㣨»᠓Āam㣯㣲rò㢨l耻ü䃼angle;榧ހABDacdeflnoprsz㤜㤟㤩㤭㦵㦸㦽㧟㧤㧨㧳㧹㧽㨁㨠ròϷarĀ;v㤦㤧櫨;櫩asèϡĀnr㤲㤷grt;榜΀eknprst㓣㥆㥋㥒㥝㥤㦖appá␕othinçẖƀhir㓫⻈㥙opô⾵Ā;hᎷ㥢ïㆍĀiu㥩㥭gmá㎳Ābp㥲㦄setneqĀ;q㥽㦀쀀⊊︀;쀀⫋︀setneqĀ;q㦏㦒쀀⊋︀;쀀⫌︀Āhr㦛㦟etá㚜iangleĀlr㦪㦯eft»थight»ၑy;䐲ash»ံƀelr㧄㧒㧗ƀ;beⷪ㧋㧏ar;抻q;扚lip;拮Ābt㧜ᑨaòᑩr;쀀𝔳tré㦮suĀbp㧯㧱»ജ»൙pf;쀀𝕧roð໻tré㦴Ācu㨆㨋r;쀀𝓋Ābp㨐㨘nĀEe㦀㨖»㥾nĀEe㦒㨞»㦐igzag;榚΀cefoprs㨶㨻㩖㩛㩔㩡㩪irc;䅵Ādi㩀㩑Ābg㩅㩉ar;機eĀ;qᗺ㩏;扙erp;愘r;쀀𝔴pf;쀀𝕨Ā;eᑹ㩦atèᑹcr;쀀𝓌ૣណ㪇\0㪋\0㪐㪛\0\0㪝㪨㪫㪯\0\0㫃㫎\0㫘ៜ៟tré៑r;쀀𝔵ĀAa㪔㪗ròσrò৶;䎾ĀAa㪡㪤ròθrò৫að✓is;拻ƀdptឤ㪵㪾Āfl㪺ឩ;쀀𝕩imåឲĀAa㫇㫊ròώròਁĀcq㫒ីr;쀀𝓍Āpt៖㫜ré។Ѐacefiosu㫰㫽㬈㬌㬑㬕㬛㬡cĀuy㫶㫻te耻ý䃽;䑏Āiy㬂㬆rc;䅷;䑋n耻¥䂥r;쀀𝔶cy;䑗pf;쀀𝕪cr;쀀𝓎Ācm㬦㬩y;䑎l耻ÿ䃿Ԁacdefhiosw㭂㭈㭔㭘㭤㭩㭭㭴㭺㮀cute;䅺Āay㭍㭒ron;䅾;䐷ot;䅼Āet㭝㭡træᕟa;䎶r;쀀𝔷cy;䐶grarr;懝pf;쀀𝕫cr;쀀𝓏Ājn㮅㮇;怍j;怌'.split("").map(t=>t.charCodeAt(0))),bb=new Uint16Array("Ȁaglq	\x1Bɭ\0\0p;䀦os;䀧t;䀾t;䀼uot;䀢".split("").map(t=>t.charCodeAt(0)));var La;const Eb=new Map([[0,65533],[128,8364],[130,8218],[131,402],[132,8222],[133,8230],[134,8224],[135,8225],[136,710],[137,8240],[138,352],[139,8249],[140,338],[142,381],[145,8216],[146,8217],[147,8220],[148,8221],[149,8226],[150,8211],[151,8212],[152,732],[153,8482],[154,353],[155,8250],[156,339],[158,382],[159,376]]),vb=(La=String.fromCodePoint)!==null&&La!==void 0?La:function(t){let e="";return t>65535&&(t-=65536,e+=String.fromCharCode(t>>>10&1023|55296),t=56320|t&1023),e+=String.fromCharCode(t),e};function wb(t){var e;return t>=55296&&t<=57343||t>1114111?65533:(e=Eb.get(t))!==null&&e!==void 0?e:t}var Xe;(function(t){t[t.NUM=35]="NUM",t[t.SEMI=59]="SEMI",t[t.EQUALS=61]="EQUALS",t[t.ZERO=48]="ZERO",t[t.NINE=57]="NINE",t[t.LOWER_A=97]="LOWER_A",t[t.LOWER_F=102]="LOWER_F",t[t.LOWER_X=120]="LOWER_X",t[t.LOWER_Z=122]="LOWER_Z",t[t.UPPER_A=65]="UPPER_A",t[t.UPPER_F=70]="UPPER_F",t[t.UPPER_Z=90]="UPPER_Z"})(Xe||(Xe={}));const Tb=32;var nr;(function(t){t[t.VALUE_LENGTH=49152]="VALUE_LENGTH",t[t.BRANCH_LENGTH=16256]="BRANCH_LENGTH",t[t.JUMP_TABLE=127]="JUMP_TABLE"})(nr||(nr={}));function bc(t){return t>=Xe.ZERO&&t<=Xe.NINE}function Ib(t){return t>=Xe.UPPER_A&&t<=Xe.UPPER_F||t>=Xe.LOWER_A&&t<=Xe.LOWER_F}function Ab(t){return t>=Xe.UPPER_A&&t<=Xe.UPPER_Z||t>=Xe.LOWER_A&&t<=Xe.LOWER_Z||bc(t)}function Cb(t){return t===Xe.EQUALS||Ab(t)}var Je;(function(t){t[t.EntityStart=0]="EntityStart",t[t.NumericStart=1]="NumericStart",t[t.NumericDecimal=2]="NumericDecimal",t[t.NumericHex=3]="NumericHex",t[t.NamedEntity=4]="NamedEntity"})(Je||(Je={}));var Yn;(function(t){t[t.Legacy=0]="Legacy",t[t.Strict=1]="Strict",t[t.Attribute=2]="Attribute"})(Yn||(Yn={}));class xb{constructor(e,n,r){this.decodeTree=e,this.emitCodePoint=n,this.errors=r,this.state=Je.EntityStart,this.consumed=1,this.result=0,this.treeIndex=0,this.excess=1,this.decodeMode=Yn.Strict}startEntity(e){this.decodeMode=e,this.state=Je.EntityStart,this.result=0,this.treeIndex=0,this.excess=1,this.consumed=1}write(e,n){switch(this.state){case Je.EntityStart:return e.charCodeAt(n)===Xe.NUM?(this.state=Je.NumericStart,this.consumed+=1,this.stateNumericStart(e,n+1)):(this.state=Je.NamedEntity,this.stateNamedEntity(e,n));case Je.NumericStart:return this.stateNumericStart(e,n);case Je.NumericDecimal:return this.stateNumericDecimal(e,n);case Je.NumericHex:return this.stateNumericHex(e,n);case Je.NamedEntity:return this.stateNamedEntity(e,n)}}stateNumericStart(e,n){return n>=e.length?-1:(e.charCodeAt(n)|Tb)===Xe.LOWER_X?(this.state=Je.NumericHex,this.consumed+=1,this.stateNumericHex(e,n+1)):(this.state=Je.NumericDecimal,this.stateNumericDecimal(e,n))}addToNumericResult(e,n,r,s){if(n!==r){const i=r-n;this.result=this.result*Math.pow(s,i)+parseInt(e.substr(n,i),s),this.consumed+=i}}stateNumericHex(e,n){const r=n;for(;n<e.length;){const s=e.charCodeAt(n);if(bc(s)||Ib(s))n+=1;else return this.addToNumericResult(e,r,n,16),this.emitNumericEntity(s,3)}return this.addToNumericResult(e,r,n,16),-1}stateNumericDecimal(e,n){const r=n;for(;n<e.length;){const s=e.charCodeAt(n);if(bc(s))n+=1;else return this.addToNumericResult(e,r,n,10),this.emitNumericEntity(s,2)}return this.addToNumericResult(e,r,n,10),-1}emitNumericEntity(e,n){var r;if(this.consumed<=n)return(r=this.errors)===null||r===void 0||r.absenceOfDigitsInNumericCharacterReference(this.consumed),0;if(e===Xe.SEMI)this.consumed+=1;else if(this.decodeMode===Yn.Strict)return 0;return this.emitCodePoint(wb(this.result),this.consumed),this.errors&&(e!==Xe.SEMI&&this.errors.missingSemicolonAfterCharacterReference(),this.errors.validateNumericCharacterReference(this.result)),this.consumed}stateNamedEntity(e,n){const{decodeTree:r}=this;let s=r[this.treeIndex],i=(s&nr.VALUE_LENGTH)>>14;for(;n<e.length;n++,this.excess++){const o=e.charCodeAt(n);if(this.treeIndex=kb(r,s,this.treeIndex+Math.max(1,i),o),this.treeIndex<0)return this.result===0||this.decodeMode===Yn.Attribute&&(i===0||Cb(o))?0:this.emitNotTerminatedNamedEntity();if(s=r[this.treeIndex],i=(s&nr.VALUE_LENGTH)>>14,i!==0){if(o===Xe.SEMI)return this.emitNamedEntityData(this.treeIndex,i,this.consumed+this.excess);this.decodeMode!==Yn.Strict&&(this.result=this.treeIndex,this.consumed+=this.excess,this.excess=0)}}return-1}emitNotTerminatedNamedEntity(){var e;const{result:n,decodeTree:r}=this,s=(r[n]&nr.VALUE_LENGTH)>>14;return this.emitNamedEntityData(n,s,this.consumed),(e=this.errors)===null||e===void 0||e.missingSemicolonAfterCharacterReference(),this.consumed}emitNamedEntityData(e,n,r){const{decodeTree:s}=this;return this.emitCodePoint(n===1?s[e]&~nr.VALUE_LENGTH:s[e+1],r),n===3&&this.emitCodePoint(s[e+2],r),r}end(){var e;switch(this.state){case Je.NamedEntity:return this.result!==0&&(this.decodeMode!==Yn.Attribute||this.result===this.treeIndex)?this.emitNotTerminatedNamedEntity():0;case Je.NumericDecimal:return this.emitNumericEntity(0,2);case Je.NumericHex:return this.emitNumericEntity(0,3);case Je.NumericStart:return(e=this.errors)===null||e===void 0||e.absenceOfDigitsInNumericCharacterReference(this.consumed),0;case Je.EntityStart:return 0}}}function Jp(t){let e="";const n=new xb(t,r=>e+=vb(r));return function(s,i){let o=0,u=0;for(;(u=s.indexOf("&",u))>=0;){e+=s.slice(o,u),n.startEntity(i);const l=n.write(s,u+1);if(l<0){o=u+n.end();break}o=u+l,u=l===0?o+1:o}const c=e+s.slice(o);return e="",c}}function kb(t,e,n,r){const s=(e&nr.BRANCH_LENGTH)>>7,i=e&nr.JUMP_TABLE;if(s===0)return i!==0&&r===i?n:-1;if(i){const c=r-i;return c<0||c>=s?-1:t[n+c]-1}let o=n,u=o+s-1;for(;o<=u;){const c=o+u>>>1,l=t[c];if(l<r)o=c+1;else if(l>r)u=c-1;else return t[c+s]}return-1}const Sb=Jp(yb);Jp(bb);function Yp(t,e=Yn.Legacy){return Sb(t,e)}function Db(t){return Object.prototype.toString.call(t)}function pl(t){return Db(t)==="[object String]"}const Rb=Object.prototype.hasOwnProperty;function Pb(t,e){return Rb.call(t,e)}function zu(t){return Array.prototype.slice.call(arguments,1).forEach(function(n){if(n){if(typeof n!="object")throw new TypeError(n+"must be object");Object.keys(n).forEach(function(r){t[r]=n[r]})}}),t}function Xp(t,e,n){return[].concat(t.slice(0,e),n,t.slice(e+1))}function ml(t){return!(t>=55296&&t<=57343||t>=64976&&t<=65007||(t&65535)===65535||(t&65535)===65534||t>=0&&t<=8||t===11||t>=14&&t<=31||t>=127&&t<=159||t>1114111)}function au(t){if(t>65535){t-=65536;const e=55296+(t>>10),n=56320+(t&1023);return String.fromCharCode(e,n)}return String.fromCharCode(t)}const Zp=/\\([!"#$%&'()*+,\-./:;<=>?@[\\\]^_`{|}~])/g,Fb=/&([a-z#][a-z0-9]{1,31});/gi,Nb=new RegExp(Zp.source+"|"+Fb.source,"gi"),Ob=/^#((?:x[a-f0-9]{1,8}|[0-9]{1,8}))$/i;function Vb(t,e){if(e.charCodeAt(0)===35&&Ob.test(e)){const r=e[1].toLowerCase()==="x"?parseInt(e.slice(2),16):parseInt(e.slice(1),10);return ml(r)?au(r):t}const n=Yp(t);return n!==t?n:t}function Mb(t){return t.indexOf("\\")<0?t:t.replace(Zp,"$1")}function Ss(t){return t.indexOf("\\")<0&&t.indexOf("&")<0?t:t.replace(Nb,function(e,n,r){return n||Vb(e,r)})}const Lb=/[&<>"]/,Ub=/[&<>"]/g,Bb={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"};function qb(t){return Bb[t]}function lr(t){return Lb.test(t)?t.replace(Ub,qb):t}const jb=/[.?*+^$[\]\\(){}|-]/g;function zb(t){return t.replace(jb,"\\$&")}function Se(t){switch(t){case 9:case 32:return!0}return!1}function Vi(t){if(t>=8192&&t<=8202)return!0;switch(t){case 9:case 10:case 11:case 12:case 13:case 32:case 160:case 5760:case 8239:case 8287:case 12288:return!0}return!1}function Mi(t){return dl.test(t)||Gp.test(t)}function Li(t){switch(t){case 33:case 34:case 35:case 36:case 37:case 38:case 39:case 40:case 41:case 42:case 43:case 44:case 45:case 46:case 47:case 58:case 59:case 60:case 61:case 62:case 63:case 64:case 91:case 92:case 93:case 94:case 95:case 96:case 123:case 124:case 125:case 126:return!0;default:return!1}}function Hu(t){return t=t.trim().replace(/\s+/g," "),"ẞ".toLowerCase()==="Ṿ"&&(t=t.replace(/ẞ/g,"ß")),t.toLowerCase().toUpperCase()}const Hb={mdurl:mb,ucmicro:_b},$b=Object.freeze(Object.defineProperty({__proto__:null,arrayReplaceAt:Xp,assign:zu,escapeHtml:lr,escapeRE:zb,fromCodePoint:au,has:Pb,isMdAsciiPunct:Li,isPunctChar:Mi,isSpace:Se,isString:pl,isValidEntityCode:ml,isWhiteSpace:Vi,lib:Hb,normalizeReference:Hu,unescapeAll:Ss,unescapeMd:Mb},Symbol.toStringTag,{value:"Module"}));function Wb(t,e,n){let r,s,i,o;const u=t.posMax,c=t.pos;for(t.pos=e+1,r=1;t.pos<u;){if(i=t.src.charCodeAt(t.pos),i===93&&(r--,r===0)){s=!0;break}if(o=t.pos,t.md.inline.skipToken(t),i===91){if(o===t.pos-1)r++;else if(n)return t.pos=c,-1}}let l=-1;return s&&(l=t.pos),t.pos=c,l}function Kb(t,e,n){let r,s=e;const i={ok:!1,pos:0,str:""};if(t.charCodeAt(s)===60){for(s++;s<n;){if(r=t.charCodeAt(s),r===10||r===60)return i;if(r===62)return i.pos=s+1,i.str=Ss(t.slice(e+1,s)),i.ok=!0,i;if(r===92&&s+1<n){s+=2;continue}s++}return i}let o=0;for(;s<n&&(r=t.charCodeAt(s),!(r===32||r<32||r===127));){if(r===92&&s+1<n){if(t.charCodeAt(s+1)===32)break;s+=2;continue}if(r===40&&(o++,o>32))return i;if(r===41){if(o===0)break;o--}s++}return e===s||o!==0||(i.str=Ss(t.slice(e,s)),i.pos=s,i.ok=!0),i}function Gb(t,e,n,r){let s,i=e;const o={ok:!1,can_continue:!1,pos:0,str:"",marker:0};if(r)o.str=r.str,o.marker=r.marker;else{if(i>=n)return o;let u=t.charCodeAt(i);if(u!==34&&u!==39&&u!==40)return o;e++,i++,u===40&&(u=41),o.marker=u}for(;i<n;){if(s=t.charCodeAt(i),s===o.marker)return o.pos=i+1,o.str+=Ss(t.slice(e,i)),o.ok=!0,o;if(s===40&&o.marker===41)return o;s===92&&i+1<n&&i++,i++}return o.can_continue=!0,o.str+=Ss(t.slice(e,i)),o}const Qb=Object.freeze(Object.defineProperty({__proto__:null,parseLinkDestination:Kb,parseLinkLabel:Wb,parseLinkTitle:Gb},Symbol.toStringTag,{value:"Module"})),En={};En.code_inline=function(t,e,n,r,s){const i=t[e];return"<code"+s.renderAttrs(i)+">"+lr(i.content)+"</code>"};En.code_block=function(t,e,n,r,s){const i=t[e];return"<pre"+s.renderAttrs(i)+"><code>"+lr(t[e].content)+`</code></pre>
`};En.fence=function(t,e,n,r,s){const i=t[e],o=i.info?Ss(i.info).trim():"";let u="",c="";if(o){const f=o.split(/(\s+)/g);u=f[0],c=f.slice(2).join("")}let l;if(n.highlight?l=n.highlight(i.content,u,c)||lr(i.content):l=lr(i.content),l.indexOf("<pre")===0)return l+`
`;if(o){const f=i.attrIndex("class"),p=i.attrs?i.attrs.slice():[];f<0?p.push(["class",n.langPrefix+u]):(p[f]=p[f].slice(),p[f][1]+=" "+n.langPrefix+u);const g={attrs:p};return`<pre><code${s.renderAttrs(g)}>${l}</code></pre>
`}return`<pre><code${s.renderAttrs(i)}>${l}</code></pre>
`};En.image=function(t,e,n,r,s){const i=t[e];return i.attrs[i.attrIndex("alt")][1]=s.renderInlineAsText(i.children,n,r),s.renderToken(t,e,n)};En.hardbreak=function(t,e,n){return n.xhtmlOut?`<br />
`:`<br>
`};En.softbreak=function(t,e,n){return n.breaks?n.xhtmlOut?`<br />
`:`<br>
`:`
`};En.text=function(t,e){return lr(t[e].content)};En.html_block=function(t,e){return t[e].content};En.html_inline=function(t,e){return t[e].content};function Os(){this.rules=zu({},En)}Os.prototype.renderAttrs=function(e){let n,r,s;if(!e.attrs)return"";for(s="",n=0,r=e.attrs.length;n<r;n++)s+=" "+lr(e.attrs[n][0])+'="'+lr(e.attrs[n][1])+'"';return s};Os.prototype.renderToken=function(e,n,r){const s=e[n];let i="";if(s.hidden)return"";s.block&&s.nesting!==-1&&n&&e[n-1].hidden&&(i+=`
`),i+=(s.nesting===-1?"</":"<")+s.tag,i+=this.renderAttrs(s),s.nesting===0&&r.xhtmlOut&&(i+=" /");let o=!1;if(s.block&&(o=!0,s.nesting===1&&n+1<e.length)){const u=e[n+1];(u.type==="inline"||u.hidden||u.nesting===-1&&u.tag===s.tag)&&(o=!1)}return i+=o?`>
`:">",i};Os.prototype.renderInline=function(t,e,n){let r="";const s=this.rules;for(let i=0,o=t.length;i<o;i++){const u=t[i].type;typeof s[u]<"u"?r+=s[u](t,i,e,n,this):r+=this.renderToken(t,i,e)}return r};Os.prototype.renderInlineAsText=function(t,e,n){let r="";for(let s=0,i=t.length;s<i;s++)switch(t[s].type){case"text":r+=t[s].content;break;case"image":r+=this.renderInlineAsText(t[s].children,e,n);break;case"html_inline":case"html_block":r+=t[s].content;break;case"softbreak":case"hardbreak":r+=`
`;break}return r};Os.prototype.render=function(t,e,n){let r="";const s=this.rules;for(let i=0,o=t.length;i<o;i++){const u=t[i].type;u==="inline"?r+=this.renderInline(t[i].children,e,n):typeof s[u]<"u"?r+=s[u](t,i,e,n,this):r+=this.renderToken(t,i,e,n)}return r};function vt(){this.__rules__=[],this.__cache__=null}vt.prototype.__find__=function(t){for(let e=0;e<this.__rules__.length;e++)if(this.__rules__[e].name===t)return e;return-1};vt.prototype.__compile__=function(){const t=this,e=[""];t.__rules__.forEach(function(n){n.enabled&&n.alt.forEach(function(r){e.indexOf(r)<0&&e.push(r)})}),t.__cache__={},e.forEach(function(n){t.__cache__[n]=[],t.__rules__.forEach(function(r){r.enabled&&(n&&r.alt.indexOf(n)<0||t.__cache__[n].push(r.fn))})})};vt.prototype.at=function(t,e,n){const r=this.__find__(t),s=n||{};if(r===-1)throw new Error("Parser rule not found: "+t);this.__rules__[r].fn=e,this.__rules__[r].alt=s.alt||[],this.__cache__=null};vt.prototype.before=function(t,e,n,r){const s=this.__find__(t),i=r||{};if(s===-1)throw new Error("Parser rule not found: "+t);this.__rules__.splice(s,0,{name:e,enabled:!0,fn:n,alt:i.alt||[]}),this.__cache__=null};vt.prototype.after=function(t,e,n,r){const s=this.__find__(t),i=r||{};if(s===-1)throw new Error("Parser rule not found: "+t);this.__rules__.splice(s+1,0,{name:e,enabled:!0,fn:n,alt:i.alt||[]}),this.__cache__=null};vt.prototype.push=function(t,e,n){const r=n||{};this.__rules__.push({name:t,enabled:!0,fn:e,alt:r.alt||[]}),this.__cache__=null};vt.prototype.enable=function(t,e){Array.isArray(t)||(t=[t]);const n=[];return t.forEach(function(r){const s=this.__find__(r);if(s<0){if(e)return;throw new Error("Rules manager: invalid rule name "+r)}this.__rules__[s].enabled=!0,n.push(r)},this),this.__cache__=null,n};vt.prototype.enableOnly=function(t,e){Array.isArray(t)||(t=[t]),this.__rules__.forEach(function(n){n.enabled=!1}),this.enable(t,e)};vt.prototype.disable=function(t,e){Array.isArray(t)||(t=[t]);const n=[];return t.forEach(function(r){const s=this.__find__(r);if(s<0){if(e)return;throw new Error("Rules manager: invalid rule name "+r)}this.__rules__[s].enabled=!1,n.push(r)},this),this.__cache__=null,n};vt.prototype.getRules=function(t){return this.__cache__===null&&this.__compile__(),this.__cache__[t]||[]};function Gt(t,e,n){this.type=t,this.tag=e,this.attrs=null,this.map=null,this.nesting=n,this.level=0,this.children=null,this.content="",this.markup="",this.info="",this.meta=null,this.block=!1,this.hidden=!1}Gt.prototype.attrIndex=function(e){if(!this.attrs)return-1;const n=this.attrs;for(let r=0,s=n.length;r<s;r++)if(n[r][0]===e)return r;return-1};Gt.prototype.attrPush=function(e){this.attrs?this.attrs.push(e):this.attrs=[e]};Gt.prototype.attrSet=function(e,n){const r=this.attrIndex(e),s=[e,n];r<0?this.attrPush(s):this.attrs[r]=s};Gt.prototype.attrGet=function(e){const n=this.attrIndex(e);let r=null;return n>=0&&(r=this.attrs[n][1]),r};Gt.prototype.attrJoin=function(e,n){const r=this.attrIndex(e);r<0?this.attrPush([e,n]):this.attrs[r][1]=this.attrs[r][1]+" "+n};function em(t,e,n){this.src=t,this.env=n,this.tokens=[],this.inlineMode=!1,this.md=e}em.prototype.Token=Gt;const Jb=/\r\n?|\n/g,Yb=/\0/g;function Xb(t){let e;e=t.src.replace(Jb,`
`),e=e.replace(Yb,"�"),t.src=e}function Zb(t){let e;t.inlineMode?(e=new t.Token("inline","",0),e.content=t.src,e.map=[0,1],e.children=[],t.tokens.push(e)):t.md.block.parse(t.src,t.md,t.env,t.tokens)}function eE(t){const e=t.tokens;for(let n=0,r=e.length;n<r;n++){const s=e[n];s.type==="inline"&&t.md.inline.parse(s.content,t.md,t.env,s.children)}}function tE(t){return/^<a[>\s]/i.test(t)}function nE(t){return/^<\/a\s*>/i.test(t)}function rE(t){const e=t.tokens;if(t.md.options.linkify)for(let n=0,r=e.length;n<r;n++){if(e[n].type!=="inline"||!t.md.linkify.pretest(e[n].content))continue;let s=e[n].children,i=0;for(let o=s.length-1;o>=0;o--){const u=s[o];if(u.type==="link_close"){for(o--;s[o].level!==u.level&&s[o].type!=="link_open";)o--;continue}if(u.type==="html_inline"&&(tE(u.content)&&i>0&&i--,nE(u.content)&&i++),!(i>0)&&u.type==="text"&&t.md.linkify.test(u.content)){const c=u.content;let l=t.md.linkify.match(c);const f=[];let p=u.level,g=0;l.length>0&&l[0].index===0&&o>0&&s[o-1].type==="text_special"&&(l=l.slice(1));for(let y=0;y<l.length;y++){const T=l[y].url,R=t.md.normalizeLink(T);if(!t.md.validateLink(R))continue;let F=l[y].text;l[y].schema?l[y].schema==="mailto:"&&!/^mailto:/i.test(F)?F=t.md.normalizeLinkText("mailto:"+F).replace(/^mailto:/,""):F=t.md.normalizeLinkText(F):F=t.md.normalizeLinkText("http://"+F).replace(/^http:\/\//,"");const $=l[y].index;if($>g){const K=new t.Token("text","",0);K.content=c.slice(g,$),K.level=p,f.push(K)}const N=new t.Token("link_open","a",1);N.attrs=[["href",R]],N.level=p++,N.markup="linkify",N.info="auto",f.push(N);const z=new t.Token("text","",0);z.content=F,z.level=p,f.push(z);const V=new t.Token("link_close","a",-1);V.level=--p,V.markup="linkify",V.info="auto",f.push(V),g=l[y].lastIndex}if(g<c.length){const y=new t.Token("text","",0);y.content=c.slice(g),y.level=p,f.push(y)}e[n].children=s=Xp(s,o,f)}}}}const tm=/\+-|\.\.|\?\?\?\?|!!!!|,,|--/,sE=/\((c|tm|r)\)/i,iE=/\((c|tm|r)\)/ig,oE={c:"©",r:"®",tm:"™"};function uE(t,e){return oE[e.toLowerCase()]}function aE(t){let e=0;for(let n=t.length-1;n>=0;n--){const r=t[n];r.type==="text"&&!e&&(r.content=r.content.replace(iE,uE)),r.type==="link_open"&&r.info==="auto"&&e--,r.type==="link_close"&&r.info==="auto"&&e++}}function cE(t){let e=0;for(let n=t.length-1;n>=0;n--){const r=t[n];r.type==="text"&&!e&&tm.test(r.content)&&(r.content=r.content.replace(/\+-/g,"±").replace(/\.{2,}/g,"…").replace(/([?!])…/g,"$1..").replace(/([?!]){4,}/g,"$1$1$1").replace(/,{2,}/g,",").replace(/(^|[^-])---(?=[^-]|$)/mg,"$1—").replace(/(^|\s)--(?=\s|$)/mg,"$1–").replace(/(^|[^-\s])--(?=[^-\s]|$)/mg,"$1–")),r.type==="link_open"&&r.info==="auto"&&e--,r.type==="link_close"&&r.info==="auto"&&e++}}function lE(t){let e;if(t.md.options.typographer)for(e=t.tokens.length-1;e>=0;e--)t.tokens[e].type==="inline"&&(sE.test(t.tokens[e].content)&&aE(t.tokens[e].children),tm.test(t.tokens[e].content)&&cE(t.tokens[e].children))}const hE=/['"]/,Kf=/['"]/g,Gf="’";function Do(t,e,n){return t.slice(0,e)+n+t.slice(e+1)}function fE(t,e){let n;const r=[];for(let s=0;s<t.length;s++){const i=t[s],o=t[s].level;for(n=r.length-1;n>=0&&!(r[n].level<=o);n--);if(r.length=n+1,i.type!=="text")continue;let u=i.content,c=0,l=u.length;e:for(;c<l;){Kf.lastIndex=c;const f=Kf.exec(u);if(!f)break;let p=!0,g=!0;c=f.index+1;const y=f[0]==="'";let T=32;if(f.index-1>=0)T=u.charCodeAt(f.index-1);else for(n=s-1;n>=0&&!(t[n].type==="softbreak"||t[n].type==="hardbreak");n--)if(t[n].content){T=t[n].content.charCodeAt(t[n].content.length-1);break}let R=32;if(c<l)R=u.charCodeAt(c);else for(n=s+1;n<t.length&&!(t[n].type==="softbreak"||t[n].type==="hardbreak");n++)if(t[n].content){R=t[n].content.charCodeAt(0);break}const F=Li(T)||Mi(String.fromCharCode(T)),$=Li(R)||Mi(String.fromCharCode(R)),N=Vi(T),z=Vi(R);if(z?p=!1:$&&(N||F||(p=!1)),N?g=!1:F&&(z||$||(g=!1)),R===34&&f[0]==='"'&&T>=48&&T<=57&&(g=p=!1),p&&g&&(p=F,g=$),!p&&!g){y&&(i.content=Do(i.content,f.index,Gf));continue}if(g)for(n=r.length-1;n>=0;n--){let V=r[n];if(r[n].level<o)break;if(V.single===y&&r[n].level===o){V=r[n];let K,Y;y?(K=e.md.options.quotes[2],Y=e.md.options.quotes[3]):(K=e.md.options.quotes[0],Y=e.md.options.quotes[1]),i.content=Do(i.content,f.index,Y),t[V.token].content=Do(t[V.token].content,V.pos,K),c+=Y.length-1,V.token===s&&(c+=K.length-1),u=i.content,l=u.length,r.length=n;continue e}}p?r.push({token:s,pos:f.index,single:y,level:o}):g&&y&&(i.content=Do(i.content,f.index,Gf))}}}function dE(t){if(t.md.options.typographer)for(let e=t.tokens.length-1;e>=0;e--)t.tokens[e].type!=="inline"||!hE.test(t.tokens[e].content)||fE(t.tokens[e].children,t)}function pE(t){let e,n;const r=t.tokens,s=r.length;for(let i=0;i<s;i++){if(r[i].type!=="inline")continue;const o=r[i].children,u=o.length;for(e=0;e<u;e++)o[e].type==="text_special"&&(o[e].type="text");for(e=n=0;e<u;e++)o[e].type==="text"&&e+1<u&&o[e+1].type==="text"?o[e+1].content=o[e].content+o[e+1].content:(e!==n&&(o[n]=o[e]),n++);e!==n&&(o.length=n)}}const Ua=[["normalize",Xb],["block",Zb],["inline",eE],["linkify",rE],["replacements",lE],["smartquotes",dE],["text_join",pE]];function gl(){this.ruler=new vt;for(let t=0;t<Ua.length;t++)this.ruler.push(Ua[t][0],Ua[t][1])}gl.prototype.process=function(t){const e=this.ruler.getRules("");for(let n=0,r=e.length;n<r;n++)e[n](t)};gl.prototype.State=em;function vn(t,e,n,r){this.src=t,this.md=e,this.env=n,this.tokens=r,this.bMarks=[],this.eMarks=[],this.tShift=[],this.sCount=[],this.bsCount=[],this.blkIndent=0,this.line=0,this.lineMax=0,this.tight=!1,this.ddIndent=-1,this.listIndent=-1,this.parentType="root",this.level=0;const s=this.src;for(let i=0,o=0,u=0,c=0,l=s.length,f=!1;o<l;o++){const p=s.charCodeAt(o);if(!f)if(Se(p)){u++,p===9?c+=4-c%4:c++;continue}else f=!0;(p===10||o===l-1)&&(p!==10&&o++,this.bMarks.push(i),this.eMarks.push(o),this.tShift.push(u),this.sCount.push(c),this.bsCount.push(0),f=!1,u=0,c=0,i=o+1)}this.bMarks.push(s.length),this.eMarks.push(s.length),this.tShift.push(0),this.sCount.push(0),this.bsCount.push(0),this.lineMax=this.bMarks.length-1}vn.prototype.push=function(t,e,n){const r=new Gt(t,e,n);return r.block=!0,n<0&&this.level--,r.level=this.level,n>0&&this.level++,this.tokens.push(r),r};vn.prototype.isEmpty=function(e){return this.bMarks[e]+this.tShift[e]>=this.eMarks[e]};vn.prototype.skipEmptyLines=function(e){for(let n=this.lineMax;e<n&&!(this.bMarks[e]+this.tShift[e]<this.eMarks[e]);e++);return e};vn.prototype.skipSpaces=function(e){for(let n=this.src.length;e<n;e++){const r=this.src.charCodeAt(e);if(!Se(r))break}return e};vn.prototype.skipSpacesBack=function(e,n){if(e<=n)return e;for(;e>n;)if(!Se(this.src.charCodeAt(--e)))return e+1;return e};vn.prototype.skipChars=function(e,n){for(let r=this.src.length;e<r&&this.src.charCodeAt(e)===n;e++);return e};vn.prototype.skipCharsBack=function(e,n,r){if(e<=r)return e;for(;e>r;)if(n!==this.src.charCodeAt(--e))return e+1;return e};vn.prototype.getLines=function(e,n,r,s){if(e>=n)return"";const i=new Array(n-e);for(let o=0,u=e;u<n;u++,o++){let c=0;const l=this.bMarks[u];let f=l,p;for(u+1<n||s?p=this.eMarks[u]+1:p=this.eMarks[u];f<p&&c<r;){const g=this.src.charCodeAt(f);if(Se(g))g===9?c+=4-(c+this.bsCount[u])%4:c++;else if(f-l<this.tShift[u])c++;else break;f++}c>r?i[o]=new Array(c-r+1).join(" ")+this.src.slice(f,p):i[o]=this.src.slice(f,p)}return i.join("")};vn.prototype.Token=Gt;const mE=65536;function Ba(t,e){const n=t.bMarks[e]+t.tShift[e],r=t.eMarks[e];return t.src.slice(n,r)}function Qf(t){const e=[],n=t.length;let r=0,s=t.charCodeAt(r),i=!1,o=0,u="";for(;r<n;)s===124&&(i?(u+=t.substring(o,r-1),o=r):(e.push(u+t.substring(o,r)),u="",o=r+1)),i=s===92,r++,s=t.charCodeAt(r);return e.push(u+t.substring(o)),e}function gE(t,e,n,r){if(e+2>n)return!1;let s=e+1;if(t.sCount[s]<t.blkIndent||t.sCount[s]-t.blkIndent>=4)return!1;let i=t.bMarks[s]+t.tShift[s];if(i>=t.eMarks[s])return!1;const o=t.src.charCodeAt(i++);if(o!==124&&o!==45&&o!==58||i>=t.eMarks[s])return!1;const u=t.src.charCodeAt(i++);if(u!==124&&u!==45&&u!==58&&!Se(u)||o===45&&Se(u))return!1;for(;i<t.eMarks[s];){const V=t.src.charCodeAt(i);if(V!==124&&V!==45&&V!==58&&!Se(V))return!1;i++}let c=Ba(t,e+1),l=c.split("|");const f=[];for(let V=0;V<l.length;V++){const K=l[V].trim();if(!K){if(V===0||V===l.length-1)continue;return!1}if(!/^:?-+:?$/.test(K))return!1;K.charCodeAt(K.length-1)===58?f.push(K.charCodeAt(0)===58?"center":"right"):K.charCodeAt(0)===58?f.push("left"):f.push("")}if(c=Ba(t,e).trim(),c.indexOf("|")===-1||t.sCount[e]-t.blkIndent>=4)return!1;l=Qf(c),l.length&&l[0]===""&&l.shift(),l.length&&l[l.length-1]===""&&l.pop();const p=l.length;if(p===0||p!==f.length)return!1;if(r)return!0;const g=t.parentType;t.parentType="table";const y=t.md.block.ruler.getRules("blockquote"),T=t.push("table_open","table",1),R=[e,0];T.map=R;const F=t.push("thead_open","thead",1);F.map=[e,e+1];const $=t.push("tr_open","tr",1);$.map=[e,e+1];for(let V=0;V<l.length;V++){const K=t.push("th_open","th",1);f[V]&&(K.attrs=[["style","text-align:"+f[V]]]);const Y=t.push("inline","",0);Y.content=l[V].trim(),Y.children=[],t.push("th_close","th",-1)}t.push("tr_close","tr",-1),t.push("thead_close","thead",-1);let N,z=0;for(s=e+2;s<n&&!(t.sCount[s]<t.blkIndent);s++){let V=!1;for(let Y=0,w=y.length;Y<w;Y++)if(y[Y](t,s,n,!0)){V=!0;break}if(V||(c=Ba(t,s).trim(),!c)||t.sCount[s]-t.blkIndent>=4||(l=Qf(c),l.length&&l[0]===""&&l.shift(),l.length&&l[l.length-1]===""&&l.pop(),z+=p-l.length,z>mE))break;if(s===e+2){const Y=t.push("tbody_open","tbody",1);Y.map=N=[e+2,0]}const K=t.push("tr_open","tr",1);K.map=[s,s+1];for(let Y=0;Y<p;Y++){const w=t.push("td_open","td",1);f[Y]&&(w.attrs=[["style","text-align:"+f[Y]]]);const _=t.push("inline","",0);_.content=l[Y]?l[Y].trim():"",_.children=[],t.push("td_close","td",-1)}t.push("tr_close","tr",-1)}return N&&(t.push("tbody_close","tbody",-1),N[1]=s),t.push("table_close","table",-1),R[1]=s,t.parentType=g,t.line=s,!0}function _E(t,e,n){if(t.sCount[e]-t.blkIndent<4)return!1;let r=e+1,s=r;for(;r<n;){if(t.isEmpty(r)){r++;continue}if(t.sCount[r]-t.blkIndent>=4){r++,s=r;continue}break}t.line=s;const i=t.push("code_block","code",0);return i.content=t.getLines(e,s,4+t.blkIndent,!1)+`
`,i.map=[e,t.line],!0}function yE(t,e,n,r){let s=t.bMarks[e]+t.tShift[e],i=t.eMarks[e];if(t.sCount[e]-t.blkIndent>=4||s+3>i)return!1;const o=t.src.charCodeAt(s);if(o!==126&&o!==96)return!1;let u=s;s=t.skipChars(s,o);let c=s-u;if(c<3)return!1;const l=t.src.slice(u,s),f=t.src.slice(s,i);if(o===96&&f.indexOf(String.fromCharCode(o))>=0)return!1;if(r)return!0;let p=e,g=!1;for(;p++,!(p>=n||(s=u=t.bMarks[p]+t.tShift[p],i=t.eMarks[p],s<i&&t.sCount[p]<t.blkIndent));)if(t.src.charCodeAt(s)===o&&!(t.sCount[p]-t.blkIndent>=4)&&(s=t.skipChars(s,o),!(s-u<c)&&(s=t.skipSpaces(s),!(s<i)))){g=!0;break}c=t.sCount[e],t.line=p+(g?1:0);const y=t.push("fence","code",0);return y.info=f,y.content=t.getLines(e+1,p,c,!0),y.markup=l,y.map=[e,t.line],!0}function bE(t,e,n,r){let s=t.bMarks[e]+t.tShift[e],i=t.eMarks[e];const o=t.lineMax;if(t.sCount[e]-t.blkIndent>=4||t.src.charCodeAt(s)!==62)return!1;if(r)return!0;const u=[],c=[],l=[],f=[],p=t.md.block.ruler.getRules("blockquote"),g=t.parentType;t.parentType="blockquote";let y=!1,T;for(T=e;T<n;T++){const z=t.sCount[T]<t.blkIndent;if(s=t.bMarks[T]+t.tShift[T],i=t.eMarks[T],s>=i)break;if(t.src.charCodeAt(s++)===62&&!z){let K=t.sCount[T]+1,Y,w;t.src.charCodeAt(s)===32?(s++,K++,w=!1,Y=!0):t.src.charCodeAt(s)===9?(Y=!0,(t.bsCount[T]+K)%4===3?(s++,K++,w=!1):w=!0):Y=!1;let _=K;for(u.push(t.bMarks[T]),t.bMarks[T]=s;s<i;){const v=t.src.charCodeAt(s);if(Se(v))v===9?_+=4-(_+t.bsCount[T]+(w?1:0))%4:_++;else break;s++}y=s>=i,c.push(t.bsCount[T]),t.bsCount[T]=t.sCount[T]+1+(Y?1:0),l.push(t.sCount[T]),t.sCount[T]=_-K,f.push(t.tShift[T]),t.tShift[T]=s-t.bMarks[T];continue}if(y)break;let V=!1;for(let K=0,Y=p.length;K<Y;K++)if(p[K](t,T,n,!0)){V=!0;break}if(V){t.lineMax=T,t.blkIndent!==0&&(u.push(t.bMarks[T]),c.push(t.bsCount[T]),f.push(t.tShift[T]),l.push(t.sCount[T]),t.sCount[T]-=t.blkIndent);break}u.push(t.bMarks[T]),c.push(t.bsCount[T]),f.push(t.tShift[T]),l.push(t.sCount[T]),t.sCount[T]=-1}const R=t.blkIndent;t.blkIndent=0;const F=t.push("blockquote_open","blockquote",1);F.markup=">";const $=[e,0];F.map=$,t.md.block.tokenize(t,e,T);const N=t.push("blockquote_close","blockquote",-1);N.markup=">",t.lineMax=o,t.parentType=g,$[1]=t.line;for(let z=0;z<f.length;z++)t.bMarks[z+e]=u[z],t.tShift[z+e]=f[z],t.sCount[z+e]=l[z],t.bsCount[z+e]=c[z];return t.blkIndent=R,!0}function EE(t,e,n,r){const s=t.eMarks[e];if(t.sCount[e]-t.blkIndent>=4)return!1;let i=t.bMarks[e]+t.tShift[e];const o=t.src.charCodeAt(i++);if(o!==42&&o!==45&&o!==95)return!1;let u=1;for(;i<s;){const l=t.src.charCodeAt(i++);if(l!==o&&!Se(l))return!1;l===o&&u++}if(u<3)return!1;if(r)return!0;t.line=e+1;const c=t.push("hr","hr",0);return c.map=[e,t.line],c.markup=Array(u+1).join(String.fromCharCode(o)),!0}function Jf(t,e){const n=t.eMarks[e];let r=t.bMarks[e]+t.tShift[e];const s=t.src.charCodeAt(r++);if(s!==42&&s!==45&&s!==43)return-1;if(r<n){const i=t.src.charCodeAt(r);if(!Se(i))return-1}return r}function Yf(t,e){const n=t.bMarks[e]+t.tShift[e],r=t.eMarks[e];let s=n;if(s+1>=r)return-1;let i=t.src.charCodeAt(s++);if(i<48||i>57)return-1;for(;;){if(s>=r)return-1;if(i=t.src.charCodeAt(s++),i>=48&&i<=57){if(s-n>=10)return-1;continue}if(i===41||i===46)break;return-1}return s<r&&(i=t.src.charCodeAt(s),!Se(i))?-1:s}function vE(t,e){const n=t.level+2;for(let r=e+2,s=t.tokens.length-2;r<s;r++)t.tokens[r].level===n&&t.tokens[r].type==="paragraph_open"&&(t.tokens[r+2].hidden=!0,t.tokens[r].hidden=!0,r+=2)}function wE(t,e,n,r){let s,i,o,u,c=e,l=!0;if(t.sCount[c]-t.blkIndent>=4||t.listIndent>=0&&t.sCount[c]-t.listIndent>=4&&t.sCount[c]<t.blkIndent)return!1;let f=!1;r&&t.parentType==="paragraph"&&t.sCount[c]>=t.blkIndent&&(f=!0);let p,g,y;if((y=Yf(t,c))>=0){if(p=!0,o=t.bMarks[c]+t.tShift[c],g=Number(t.src.slice(o,y-1)),f&&g!==1)return!1}else if((y=Jf(t,c))>=0)p=!1;else return!1;if(f&&t.skipSpaces(y)>=t.eMarks[c])return!1;if(r)return!0;const T=t.src.charCodeAt(y-1),R=t.tokens.length;p?(u=t.push("ordered_list_open","ol",1),g!==1&&(u.attrs=[["start",g]])):u=t.push("bullet_list_open","ul",1);const F=[c,0];u.map=F,u.markup=String.fromCharCode(T);let $=!1;const N=t.md.block.ruler.getRules("list"),z=t.parentType;for(t.parentType="list";c<n;){i=y,s=t.eMarks[c];const V=t.sCount[c]+y-(t.bMarks[c]+t.tShift[c]);let K=V;for(;i<s;){const Ze=t.src.charCodeAt(i);if(Ze===9)K+=4-(K+t.bsCount[c])%4;else if(Ze===32)K++;else break;i++}const Y=i;let w;Y>=s?w=1:w=K-V,w>4&&(w=1);const _=V+w;u=t.push("list_item_open","li",1),u.markup=String.fromCharCode(T);const v=[c,0];u.map=v,p&&(u.info=t.src.slice(o,y-1));const A=t.tight,I=t.tShift[c],k=t.sCount[c],E=t.listIndent;if(t.listIndent=t.blkIndent,t.blkIndent=_,t.tight=!0,t.tShift[c]=Y-t.bMarks[c],t.sCount[c]=K,Y>=s&&t.isEmpty(c+1)?t.line=Math.min(t.line+2,n):t.md.block.tokenize(t,c,n,!0),(!t.tight||$)&&(l=!1),$=t.line-c>1&&t.isEmpty(t.line-1),t.blkIndent=t.listIndent,t.listIndent=E,t.tShift[c]=I,t.sCount[c]=k,t.tight=A,u=t.push("list_item_close","li",-1),u.markup=String.fromCharCode(T),c=t.line,v[1]=c,c>=n||t.sCount[c]<t.blkIndent||t.sCount[c]-t.blkIndent>=4)break;let Me=!1;for(let Ze=0,je=N.length;Ze<je;Ze++)if(N[Ze](t,c,n,!0)){Me=!0;break}if(Me)break;if(p){if(y=Yf(t,c),y<0)break;o=t.bMarks[c]+t.tShift[c]}else if(y=Jf(t,c),y<0)break;if(T!==t.src.charCodeAt(y-1))break}return p?u=t.push("ordered_list_close","ol",-1):u=t.push("bullet_list_close","ul",-1),u.markup=String.fromCharCode(T),F[1]=c,t.line=c,t.parentType=z,l&&vE(t,R),!0}function TE(t,e,n,r){let s=t.bMarks[e]+t.tShift[e],i=t.eMarks[e],o=e+1;if(t.sCount[e]-t.blkIndent>=4||t.src.charCodeAt(s)!==91)return!1;function u(N){const z=t.lineMax;if(N>=z||t.isEmpty(N))return null;let V=!1;if(t.sCount[N]-t.blkIndent>3&&(V=!0),t.sCount[N]<0&&(V=!0),!V){const w=t.md.block.ruler.getRules("reference"),_=t.parentType;t.parentType="reference";let v=!1;for(let A=0,I=w.length;A<I;A++)if(w[A](t,N,z,!0)){v=!0;break}if(t.parentType=_,v)return null}const K=t.bMarks[N]+t.tShift[N],Y=t.eMarks[N];return t.src.slice(K,Y+1)}let c=t.src.slice(s,i+1);i=c.length;let l=-1;for(s=1;s<i;s++){const N=c.charCodeAt(s);if(N===91)return!1;if(N===93){l=s;break}else if(N===10){const z=u(o);z!==null&&(c+=z,i=c.length,o++)}else if(N===92&&(s++,s<i&&c.charCodeAt(s)===10)){const z=u(o);z!==null&&(c+=z,i=c.length,o++)}}if(l<0||c.charCodeAt(l+1)!==58)return!1;for(s=l+2;s<i;s++){const N=c.charCodeAt(s);if(N===10){const z=u(o);z!==null&&(c+=z,i=c.length,o++)}else if(!Se(N))break}const f=t.md.helpers.parseLinkDestination(c,s,i);if(!f.ok)return!1;const p=t.md.normalizeLink(f.str);if(!t.md.validateLink(p))return!1;s=f.pos;const g=s,y=o,T=s;for(;s<i;s++){const N=c.charCodeAt(s);if(N===10){const z=u(o);z!==null&&(c+=z,i=c.length,o++)}else if(!Se(N))break}let R=t.md.helpers.parseLinkTitle(c,s,i);for(;R.can_continue;){const N=u(o);if(N===null)break;c+=N,s=i,i=c.length,o++,R=t.md.helpers.parseLinkTitle(c,s,i,R)}let F;for(s<i&&T!==s&&R.ok?(F=R.str,s=R.pos):(F="",s=g,o=y);s<i;){const N=c.charCodeAt(s);if(!Se(N))break;s++}if(s<i&&c.charCodeAt(s)!==10&&F)for(F="",s=g,o=y;s<i;){const N=c.charCodeAt(s);if(!Se(N))break;s++}if(s<i&&c.charCodeAt(s)!==10)return!1;const $=Hu(c.slice(1,l));return $?(r||(typeof t.env.references>"u"&&(t.env.references={}),typeof t.env.references[$]>"u"&&(t.env.references[$]={title:F,href:p}),t.line=o),!0):!1}const IE=["address","article","aside","base","basefont","blockquote","body","caption","center","col","colgroup","dd","details","dialog","dir","div","dl","dt","fieldset","figcaption","figure","footer","form","frame","frameset","h1","h2","h3","h4","h5","h6","head","header","hr","html","iframe","legend","li","link","main","menu","menuitem","nav","noframes","ol","optgroup","option","p","param","search","section","summary","table","tbody","td","tfoot","th","thead","title","tr","track","ul"],AE="[a-zA-Z_:][a-zA-Z0-9:._-]*",CE="[^\"'=<>`\\x00-\\x20]+",xE="'[^']*'",kE='"[^"]*"',SE="(?:"+CE+"|"+xE+"|"+kE+")",DE="(?:\\s+"+AE+"(?:\\s*=\\s*"+SE+")?)",nm="<[A-Za-z][A-Za-z0-9\\-]*"+DE+"*\\s*\\/?>",rm="<\\/[A-Za-z][A-Za-z0-9\\-]*\\s*>",RE="<!---?>|<!--(?:[^-]|-[^-]|--[^>])*-->",PE="<[?][\\s\\S]*?[?]>",FE="<![A-Za-z][^>]*>",NE="<!\\[CDATA\\[[\\s\\S]*?\\]\\]>",OE=new RegExp("^(?:"+nm+"|"+rm+"|"+RE+"|"+PE+"|"+FE+"|"+NE+")"),VE=new RegExp("^(?:"+nm+"|"+rm+")"),os=[[/^<(script|pre|style|textarea)(?=(\s|>|$))/i,/<\/(script|pre|style|textarea)>/i,!0],[/^<!--/,/-->/,!0],[/^<\?/,/\?>/,!0],[/^<![A-Z]/,/>/,!0],[/^<!\[CDATA\[/,/\]\]>/,!0],[new RegExp("^</?("+IE.join("|")+")(?=(\\s|/?>|$))","i"),/^$/,!0],[new RegExp(VE.source+"\\s*$"),/^$/,!1]];function ME(t,e,n,r){let s=t.bMarks[e]+t.tShift[e],i=t.eMarks[e];if(t.sCount[e]-t.blkIndent>=4||!t.md.options.html||t.src.charCodeAt(s)!==60)return!1;let o=t.src.slice(s,i),u=0;for(;u<os.length&&!os[u][0].test(o);u++);if(u===os.length)return!1;if(r)return os[u][2];let c=e+1;if(!os[u][1].test(o)){for(;c<n&&!(t.sCount[c]<t.blkIndent);c++)if(s=t.bMarks[c]+t.tShift[c],i=t.eMarks[c],o=t.src.slice(s,i),os[u][1].test(o)){o.length!==0&&c++;break}}t.line=c;const l=t.push("html_block","",0);return l.map=[e,c],l.content=t.getLines(e,c,t.blkIndent,!0),!0}function LE(t,e,n,r){let s=t.bMarks[e]+t.tShift[e],i=t.eMarks[e];if(t.sCount[e]-t.blkIndent>=4)return!1;let o=t.src.charCodeAt(s);if(o!==35||s>=i)return!1;let u=1;for(o=t.src.charCodeAt(++s);o===35&&s<i&&u<=6;)u++,o=t.src.charCodeAt(++s);if(u>6||s<i&&!Se(o))return!1;if(r)return!0;i=t.skipSpacesBack(i,s);const c=t.skipCharsBack(i,35,s);c>s&&Se(t.src.charCodeAt(c-1))&&(i=c),t.line=e+1;const l=t.push("heading_open","h"+String(u),1);l.markup="########".slice(0,u),l.map=[e,t.line];const f=t.push("inline","",0);f.content=t.src.slice(s,i).trim(),f.map=[e,t.line],f.children=[];const p=t.push("heading_close","h"+String(u),-1);return p.markup="########".slice(0,u),!0}function UE(t,e,n){const r=t.md.block.ruler.getRules("paragraph");if(t.sCount[e]-t.blkIndent>=4)return!1;const s=t.parentType;t.parentType="paragraph";let i=0,o,u=e+1;for(;u<n&&!t.isEmpty(u);u++){if(t.sCount[u]-t.blkIndent>3)continue;if(t.sCount[u]>=t.blkIndent){let y=t.bMarks[u]+t.tShift[u];const T=t.eMarks[u];if(y<T&&(o=t.src.charCodeAt(y),(o===45||o===61)&&(y=t.skipChars(y,o),y=t.skipSpaces(y),y>=T))){i=o===61?1:2;break}}if(t.sCount[u]<0)continue;let g=!1;for(let y=0,T=r.length;y<T;y++)if(r[y](t,u,n,!0)){g=!0;break}if(g)break}if(!i)return!1;const c=t.getLines(e,u,t.blkIndent,!1).trim();t.line=u+1;const l=t.push("heading_open","h"+String(i),1);l.markup=String.fromCharCode(o),l.map=[e,t.line];const f=t.push("inline","",0);f.content=c,f.map=[e,t.line-1],f.children=[];const p=t.push("heading_close","h"+String(i),-1);return p.markup=String.fromCharCode(o),t.parentType=s,!0}function BE(t,e,n){const r=t.md.block.ruler.getRules("paragraph"),s=t.parentType;let i=e+1;for(t.parentType="paragraph";i<n&&!t.isEmpty(i);i++){if(t.sCount[i]-t.blkIndent>3||t.sCount[i]<0)continue;let l=!1;for(let f=0,p=r.length;f<p;f++)if(r[f](t,i,n,!0)){l=!0;break}if(l)break}const o=t.getLines(e,i,t.blkIndent,!1).trim();t.line=i;const u=t.push("paragraph_open","p",1);u.map=[e,t.line];const c=t.push("inline","",0);return c.content=o,c.map=[e,t.line],c.children=[],t.push("paragraph_close","p",-1),t.parentType=s,!0}const Ro=[["table",gE,["paragraph","reference"]],["code",_E],["fence",yE,["paragraph","reference","blockquote","list"]],["blockquote",bE,["paragraph","reference","blockquote","list"]],["hr",EE,["paragraph","reference","blockquote","list"]],["list",wE,["paragraph","reference","blockquote"]],["reference",TE],["html_block",ME,["paragraph","reference","blockquote"]],["heading",LE,["paragraph","reference","blockquote"]],["lheading",UE],["paragraph",BE]];function $u(){this.ruler=new vt;for(let t=0;t<Ro.length;t++)this.ruler.push(Ro[t][0],Ro[t][1],{alt:(Ro[t][2]||[]).slice()})}$u.prototype.tokenize=function(t,e,n){const r=this.ruler.getRules(""),s=r.length,i=t.md.options.maxNesting;let o=e,u=!1;for(;o<n&&(t.line=o=t.skipEmptyLines(o),!(o>=n||t.sCount[o]<t.blkIndent));){if(t.level>=i){t.line=n;break}const c=t.line;let l=!1;for(let f=0;f<s;f++)if(l=r[f](t,o,n,!1),l){if(c>=t.line)throw new Error("block rule didn't increment state.line");break}if(!l)throw new Error("none of the block rules matched");t.tight=!u,t.isEmpty(t.line-1)&&(u=!0),o=t.line,o<n&&t.isEmpty(o)&&(u=!0,o++,t.line=o)}};$u.prototype.parse=function(t,e,n,r){if(!t)return;const s=new this.State(t,e,n,r);this.tokenize(s,s.line,s.lineMax)};$u.prototype.State=vn;function no(t,e,n,r){this.src=t,this.env=n,this.md=e,this.tokens=r,this.tokens_meta=Array(r.length),this.pos=0,this.posMax=this.src.length,this.level=0,this.pending="",this.pendingLevel=0,this.cache={},this.delimiters=[],this._prev_delimiters=[],this.backticks={},this.backticksScanned=!1,this.linkLevel=0}no.prototype.pushPending=function(){const t=new Gt("text","",0);return t.content=this.pending,t.level=this.pendingLevel,this.tokens.push(t),this.pending="",t};no.prototype.push=function(t,e,n){this.pending&&this.pushPending();const r=new Gt(t,e,n);let s=null;return n<0&&(this.level--,this.delimiters=this._prev_delimiters.pop()),r.level=this.level,n>0&&(this.level++,this._prev_delimiters.push(this.delimiters),this.delimiters=[],s={delimiters:this.delimiters}),this.pendingLevel=this.level,this.tokens.push(r),this.tokens_meta.push(s),r};no.prototype.scanDelims=function(t,e){const n=this.posMax,r=this.src.charCodeAt(t),s=t>0?this.src.charCodeAt(t-1):32;let i=t;for(;i<n&&this.src.charCodeAt(i)===r;)i++;const o=i-t,u=i<n?this.src.charCodeAt(i):32,c=Li(s)||Mi(String.fromCharCode(s)),l=Li(u)||Mi(String.fromCharCode(u)),f=Vi(s),p=Vi(u),g=!p&&(!l||f||c),y=!f&&(!c||p||l);return{can_open:g&&(e||!y||c),can_close:y&&(e||!g||l),length:o}};no.prototype.Token=Gt;function qE(t){switch(t){case 10:case 33:case 35:case 36:case 37:case 38:case 42:case 43:case 45:case 58:case 60:case 61:case 62:case 64:case 91:case 92:case 93:case 94:case 95:case 96:case 123:case 125:case 126:return!0;default:return!1}}function jE(t,e){let n=t.pos;for(;n<t.posMax&&!qE(t.src.charCodeAt(n));)n++;return n===t.pos?!1:(e||(t.pending+=t.src.slice(t.pos,n)),t.pos=n,!0)}const zE=/(?:^|[^a-z0-9.+-])([a-z][a-z0-9.+-]*)$/i;function HE(t,e){if(!t.md.options.linkify||t.linkLevel>0)return!1;const n=t.pos,r=t.posMax;if(n+3>r||t.src.charCodeAt(n)!==58||t.src.charCodeAt(n+1)!==47||t.src.charCodeAt(n+2)!==47)return!1;const s=t.pending.match(zE);if(!s)return!1;const i=s[1],o=t.md.linkify.matchAtStart(t.src.slice(n-i.length));if(!o)return!1;let u=o.url;if(u.length<=i.length)return!1;let c=u.length;for(;c>0&&u.charCodeAt(c-1)===42;)c--;c!==u.length&&(u=u.slice(0,c));const l=t.md.normalizeLink(u);if(!t.md.validateLink(l))return!1;if(!e){t.pending=t.pending.slice(0,-i.length);const f=t.push("link_open","a",1);f.attrs=[["href",l]],f.markup="linkify",f.info="auto";const p=t.push("text","",0);p.content=t.md.normalizeLinkText(u);const g=t.push("link_close","a",-1);g.markup="linkify",g.info="auto"}return t.pos+=u.length-i.length,!0}function $E(t,e){let n=t.pos;if(t.src.charCodeAt(n)!==10)return!1;const r=t.pending.length-1,s=t.posMax;if(!e)if(r>=0&&t.pending.charCodeAt(r)===32)if(r>=1&&t.pending.charCodeAt(r-1)===32){let i=r-1;for(;i>=1&&t.pending.charCodeAt(i-1)===32;)i--;t.pending=t.pending.slice(0,i),t.push("hardbreak","br",0)}else t.pending=t.pending.slice(0,-1),t.push("softbreak","br",0);else t.push("softbreak","br",0);for(n++;n<s&&Se(t.src.charCodeAt(n));)n++;return t.pos=n,!0}const _l=[];for(let t=0;t<256;t++)_l.push(0);"\\!\"#$%&'()*+,./:;<=>?@[]^_`{|}~-".split("").forEach(function(t){_l[t.charCodeAt(0)]=1});function WE(t,e){let n=t.pos;const r=t.posMax;if(t.src.charCodeAt(n)!==92||(n++,n>=r))return!1;let s=t.src.charCodeAt(n);if(s===10){for(e||t.push("hardbreak","br",0),n++;n<r&&(s=t.src.charCodeAt(n),!!Se(s));)n++;return t.pos=n,!0}let i=t.src[n];if(s>=55296&&s<=56319&&n+1<r){const u=t.src.charCodeAt(n+1);u>=56320&&u<=57343&&(i+=t.src[n+1],n++)}const o="\\"+i;if(!e){const u=t.push("text_special","",0);s<256&&_l[s]!==0?u.content=i:u.content=o,u.markup=o,u.info="escape"}return t.pos=n+1,!0}function KE(t,e){let n=t.pos;if(t.src.charCodeAt(n)!==96)return!1;const s=n;n++;const i=t.posMax;for(;n<i&&t.src.charCodeAt(n)===96;)n++;const o=t.src.slice(s,n),u=o.length;if(t.backticksScanned&&(t.backticks[u]||0)<=s)return e||(t.pending+=o),t.pos+=u,!0;let c=n,l;for(;(l=t.src.indexOf("`",c))!==-1;){for(c=l+1;c<i&&t.src.charCodeAt(c)===96;)c++;const f=c-l;if(f===u){if(!e){const p=t.push("code_inline","code",0);p.markup=o,p.content=t.src.slice(n,l).replace(/\n/g," ").replace(/^ (.+) $/,"$1")}return t.pos=c,!0}t.backticks[f]=l}return t.backticksScanned=!0,e||(t.pending+=o),t.pos+=u,!0}function GE(t,e){const n=t.pos,r=t.src.charCodeAt(n);if(e||r!==126)return!1;const s=t.scanDelims(t.pos,!0);let i=s.length;const o=String.fromCharCode(r);if(i<2)return!1;let u;i%2&&(u=t.push("text","",0),u.content=o,i--);for(let c=0;c<i;c+=2)u=t.push("text","",0),u.content=o+o,t.delimiters.push({marker:r,length:0,token:t.tokens.length-1,end:-1,open:s.can_open,close:s.can_close});return t.pos+=s.length,!0}function Xf(t,e){let n;const r=[],s=e.length;for(let i=0;i<s;i++){const o=e[i];if(o.marker!==126||o.end===-1)continue;const u=e[o.end];n=t.tokens[o.token],n.type="s_open",n.tag="s",n.nesting=1,n.markup="~~",n.content="",n=t.tokens[u.token],n.type="s_close",n.tag="s",n.nesting=-1,n.markup="~~",n.content="",t.tokens[u.token-1].type==="text"&&t.tokens[u.token-1].content==="~"&&r.push(u.token-1)}for(;r.length;){const i=r.pop();let o=i+1;for(;o<t.tokens.length&&t.tokens[o].type==="s_close";)o++;o--,i!==o&&(n=t.tokens[o],t.tokens[o]=t.tokens[i],t.tokens[i]=n)}}function QE(t){const e=t.tokens_meta,n=t.tokens_meta.length;Xf(t,t.delimiters);for(let r=0;r<n;r++)e[r]&&e[r].delimiters&&Xf(t,e[r].delimiters)}const sm={tokenize:GE,postProcess:QE};function JE(t,e){const n=t.pos,r=t.src.charCodeAt(n);if(e||r!==95&&r!==42)return!1;const s=t.scanDelims(t.pos,r===42);for(let i=0;i<s.length;i++){const o=t.push("text","",0);o.content=String.fromCharCode(r),t.delimiters.push({marker:r,length:s.length,token:t.tokens.length-1,end:-1,open:s.can_open,close:s.can_close})}return t.pos+=s.length,!0}function Zf(t,e){const n=e.length;for(let r=n-1;r>=0;r--){const s=e[r];if(s.marker!==95&&s.marker!==42||s.end===-1)continue;const i=e[s.end],o=r>0&&e[r-1].end===s.end+1&&e[r-1].marker===s.marker&&e[r-1].token===s.token-1&&e[s.end+1].token===i.token+1,u=String.fromCharCode(s.marker),c=t.tokens[s.token];c.type=o?"strong_open":"em_open",c.tag=o?"strong":"em",c.nesting=1,c.markup=o?u+u:u,c.content="";const l=t.tokens[i.token];l.type=o?"strong_close":"em_close",l.tag=o?"strong":"em",l.nesting=-1,l.markup=o?u+u:u,l.content="",o&&(t.tokens[e[r-1].token].content="",t.tokens[e[s.end+1].token].content="",r--)}}function YE(t){const e=t.tokens_meta,n=t.tokens_meta.length;Zf(t,t.delimiters);for(let r=0;r<n;r++)e[r]&&e[r].delimiters&&Zf(t,e[r].delimiters)}const im={tokenize:JE,postProcess:YE};function XE(t,e){let n,r,s,i,o="",u="",c=t.pos,l=!0;if(t.src.charCodeAt(t.pos)!==91)return!1;const f=t.pos,p=t.posMax,g=t.pos+1,y=t.md.helpers.parseLinkLabel(t,t.pos,!0);if(y<0)return!1;let T=y+1;if(T<p&&t.src.charCodeAt(T)===40){for(l=!1,T++;T<p&&(n=t.src.charCodeAt(T),!(!Se(n)&&n!==10));T++);if(T>=p)return!1;if(c=T,s=t.md.helpers.parseLinkDestination(t.src,T,t.posMax),s.ok){for(o=t.md.normalizeLink(s.str),t.md.validateLink(o)?T=s.pos:o="",c=T;T<p&&(n=t.src.charCodeAt(T),!(!Se(n)&&n!==10));T++);if(s=t.md.helpers.parseLinkTitle(t.src,T,t.posMax),T<p&&c!==T&&s.ok)for(u=s.str,T=s.pos;T<p&&(n=t.src.charCodeAt(T),!(!Se(n)&&n!==10));T++);}(T>=p||t.src.charCodeAt(T)!==41)&&(l=!0),T++}if(l){if(typeof t.env.references>"u")return!1;if(T<p&&t.src.charCodeAt(T)===91?(c=T+1,T=t.md.helpers.parseLinkLabel(t,T),T>=0?r=t.src.slice(c,T++):T=y+1):T=y+1,r||(r=t.src.slice(g,y)),i=t.env.references[Hu(r)],!i)return t.pos=f,!1;o=i.href,u=i.title}if(!e){t.pos=g,t.posMax=y;const R=t.push("link_open","a",1),F=[["href",o]];R.attrs=F,u&&F.push(["title",u]),t.linkLevel++,t.md.inline.tokenize(t),t.linkLevel--,t.push("link_close","a",-1)}return t.pos=T,t.posMax=p,!0}function ZE(t,e){let n,r,s,i,o,u,c,l,f="";const p=t.pos,g=t.posMax;if(t.src.charCodeAt(t.pos)!==33||t.src.charCodeAt(t.pos+1)!==91)return!1;const y=t.pos+2,T=t.md.helpers.parseLinkLabel(t,t.pos+1,!1);if(T<0)return!1;if(i=T+1,i<g&&t.src.charCodeAt(i)===40){for(i++;i<g&&(n=t.src.charCodeAt(i),!(!Se(n)&&n!==10));i++);if(i>=g)return!1;for(l=i,u=t.md.helpers.parseLinkDestination(t.src,i,t.posMax),u.ok&&(f=t.md.normalizeLink(u.str),t.md.validateLink(f)?i=u.pos:f=""),l=i;i<g&&(n=t.src.charCodeAt(i),!(!Se(n)&&n!==10));i++);if(u=t.md.helpers.parseLinkTitle(t.src,i,t.posMax),i<g&&l!==i&&u.ok)for(c=u.str,i=u.pos;i<g&&(n=t.src.charCodeAt(i),!(!Se(n)&&n!==10));i++);else c="";if(i>=g||t.src.charCodeAt(i)!==41)return t.pos=p,!1;i++}else{if(typeof t.env.references>"u")return!1;if(i<g&&t.src.charCodeAt(i)===91?(l=i+1,i=t.md.helpers.parseLinkLabel(t,i),i>=0?s=t.src.slice(l,i++):i=T+1):i=T+1,s||(s=t.src.slice(y,T)),o=t.env.references[Hu(s)],!o)return t.pos=p,!1;f=o.href,c=o.title}if(!e){r=t.src.slice(y,T);const R=[];t.md.inline.parse(r,t.md,t.env,R);const F=t.push("image","img",0),$=[["src",f],["alt",""]];F.attrs=$,F.children=R,F.content=r,c&&$.push(["title",c])}return t.pos=i,t.posMax=g,!0}const e3=/^([a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*)$/,t3=/^([a-zA-Z][a-zA-Z0-9+.-]{1,31}):([^<>\x00-\x20]*)$/;function n3(t,e){let n=t.pos;if(t.src.charCodeAt(n)!==60)return!1;const r=t.pos,s=t.posMax;for(;;){if(++n>=s)return!1;const o=t.src.charCodeAt(n);if(o===60)return!1;if(o===62)break}const i=t.src.slice(r+1,n);if(t3.test(i)){const o=t.md.normalizeLink(i);if(!t.md.validateLink(o))return!1;if(!e){const u=t.push("link_open","a",1);u.attrs=[["href",o]],u.markup="autolink",u.info="auto";const c=t.push("text","",0);c.content=t.md.normalizeLinkText(i);const l=t.push("link_close","a",-1);l.markup="autolink",l.info="auto"}return t.pos+=i.length+2,!0}if(e3.test(i)){const o=t.md.normalizeLink("mailto:"+i);if(!t.md.validateLink(o))return!1;if(!e){const u=t.push("link_open","a",1);u.attrs=[["href",o]],u.markup="autolink",u.info="auto";const c=t.push("text","",0);c.content=t.md.normalizeLinkText(i);const l=t.push("link_close","a",-1);l.markup="autolink",l.info="auto"}return t.pos+=i.length+2,!0}return!1}function r3(t){return/^<a[>\s]/i.test(t)}function s3(t){return/^<\/a\s*>/i.test(t)}function i3(t){const e=t|32;return e>=97&&e<=122}function o3(t,e){if(!t.md.options.html)return!1;const n=t.posMax,r=t.pos;if(t.src.charCodeAt(r)!==60||r+2>=n)return!1;const s=t.src.charCodeAt(r+1);if(s!==33&&s!==63&&s!==47&&!i3(s))return!1;const i=t.src.slice(r).match(OE);if(!i)return!1;if(!e){const o=t.push("html_inline","",0);o.content=i[0],r3(o.content)&&t.linkLevel++,s3(o.content)&&t.linkLevel--}return t.pos+=i[0].length,!0}const u3=/^&#((?:x[a-f0-9]{1,6}|[0-9]{1,7}));/i,a3=/^&([a-z][a-z0-9]{1,31});/i;function c3(t,e){const n=t.pos,r=t.posMax;if(t.src.charCodeAt(n)!==38||n+1>=r)return!1;if(t.src.charCodeAt(n+1)===35){const i=t.src.slice(n).match(u3);if(i){if(!e){const o=i[1][0].toLowerCase()==="x"?parseInt(i[1].slice(1),16):parseInt(i[1],10),u=t.push("text_special","",0);u.content=ml(o)?au(o):au(65533),u.markup=i[0],u.info="entity"}return t.pos+=i[0].length,!0}}else{const i=t.src.slice(n).match(a3);if(i){const o=Yp(i[0]);if(o!==i[0]){if(!e){const u=t.push("text_special","",0);u.content=o,u.markup=i[0],u.info="entity"}return t.pos+=i[0].length,!0}}}return!1}function ed(t){const e={},n=t.length;if(!n)return;let r=0,s=-2;const i=[];for(let o=0;o<n;o++){const u=t[o];if(i.push(0),(t[r].marker!==u.marker||s!==u.token-1)&&(r=o),s=u.token,u.length=u.length||0,!u.close)continue;e.hasOwnProperty(u.marker)||(e[u.marker]=[-1,-1,-1,-1,-1,-1]);const c=e[u.marker][(u.open?3:0)+u.length%3];let l=r-i[r]-1,f=l;for(;l>c;l-=i[l]+1){const p=t[l];if(p.marker===u.marker&&p.open&&p.end<0){let g=!1;if((p.close||u.open)&&(p.length+u.length)%3===0&&(p.length%3!==0||u.length%3!==0)&&(g=!0),!g){const y=l>0&&!t[l-1].open?i[l-1]+1:0;i[o]=o-l+y,i[l]=y,u.open=!1,p.end=o,p.close=!1,f=-1,s=-2;break}}}f!==-1&&(e[u.marker][(u.open?3:0)+(u.length||0)%3]=f)}}function l3(t){const e=t.tokens_meta,n=t.tokens_meta.length;ed(t.delimiters);for(let r=0;r<n;r++)e[r]&&e[r].delimiters&&ed(e[r].delimiters)}function h3(t){let e,n,r=0;const s=t.tokens,i=t.tokens.length;for(e=n=0;e<i;e++)s[e].nesting<0&&r--,s[e].level=r,s[e].nesting>0&&r++,s[e].type==="text"&&e+1<i&&s[e+1].type==="text"?s[e+1].content=s[e].content+s[e+1].content:(e!==n&&(s[n]=s[e]),n++);e!==n&&(s.length=n)}const qa=[["text",jE],["linkify",HE],["newline",$E],["escape",WE],["backticks",KE],["strikethrough",sm.tokenize],["emphasis",im.tokenize],["link",XE],["image",ZE],["autolink",n3],["html_inline",o3],["entity",c3]],ja=[["balance_pairs",l3],["strikethrough",sm.postProcess],["emphasis",im.postProcess],["fragments_join",h3]];function ro(){this.ruler=new vt;for(let t=0;t<qa.length;t++)this.ruler.push(qa[t][0],qa[t][1]);this.ruler2=new vt;for(let t=0;t<ja.length;t++)this.ruler2.push(ja[t][0],ja[t][1])}ro.prototype.skipToken=function(t){const e=t.pos,n=this.ruler.getRules(""),r=n.length,s=t.md.options.maxNesting,i=t.cache;if(typeof i[e]<"u"){t.pos=i[e];return}let o=!1;if(t.level<s){for(let u=0;u<r;u++)if(t.level++,o=n[u](t,!0),t.level--,o){if(e>=t.pos)throw new Error("inline rule didn't increment state.pos");break}}else t.pos=t.posMax;o||t.pos++,i[e]=t.pos};ro.prototype.tokenize=function(t){const e=this.ruler.getRules(""),n=e.length,r=t.posMax,s=t.md.options.maxNesting;for(;t.pos<r;){const i=t.pos;let o=!1;if(t.level<s){for(let u=0;u<n;u++)if(o=e[u](t,!1),o){if(i>=t.pos)throw new Error("inline rule didn't increment state.pos");break}}if(o){if(t.pos>=r)break;continue}t.pending+=t.src[t.pos++]}t.pending&&t.pushPending()};ro.prototype.parse=function(t,e,n,r){const s=new this.State(t,e,n,r);this.tokenize(s);const i=this.ruler2.getRules(""),o=i.length;for(let u=0;u<o;u++)i[u](s)};ro.prototype.State=no;function f3(t){const e={};t=t||{},e.src_Any=Wp.source,e.src_Cc=Kp.source,e.src_Z=Qp.source,e.src_P=dl.source,e.src_ZPCc=[e.src_Z,e.src_P,e.src_Cc].join("|"),e.src_ZCc=[e.src_Z,e.src_Cc].join("|");const n="[><｜]";return e.src_pseudo_letter="(?:(?!"+n+"|"+e.src_ZPCc+")"+e.src_Any+")",e.src_ip4="(?:(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\\.){3}(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)",e.src_auth="(?:(?:(?!"+e.src_ZCc+"|[@/\\[\\]()]).)+@)?",e.src_port="(?::(?:6(?:[0-4]\\d{3}|5(?:[0-4]\\d{2}|5(?:[0-2]\\d|3[0-5])))|[1-5]?\\d{1,4}))?",e.src_host_terminator="(?=$|"+n+"|"+e.src_ZPCc+")(?!"+(t["---"]?"-(?!--)|":"-|")+"_|:\\d|\\.-|\\.(?!$|"+e.src_ZPCc+"))",e.src_path="(?:[/?#](?:(?!"+e.src_ZCc+"|"+n+`|[()[\\]{}.,"'?!\\-;]).|\\[(?:(?!`+e.src_ZCc+"|\\]).)*\\]|\\((?:(?!"+e.src_ZCc+"|[)]).)*\\)|\\{(?:(?!"+e.src_ZCc+'|[}]).)*\\}|\\"(?:(?!'+e.src_ZCc+`|["]).)+\\"|\\'(?:(?!`+e.src_ZCc+"|[']).)+\\'|\\'(?="+e.src_pseudo_letter+"|[-])|\\.{2,}[a-zA-Z0-9%/&]|\\.(?!"+e.src_ZCc+"|[.]|$)|"+(t["---"]?"\\-(?!--(?:[^-]|$))(?:-*)|":"\\-+|")+",(?!"+e.src_ZCc+"|$)|;(?!"+e.src_ZCc+"|$)|\\!+(?!"+e.src_ZCc+"|[!]|$)|\\?(?!"+e.src_ZCc+"|[?]|$))+|\\/)?",e.src_email_name='[\\-;:&=\\+\\$,\\.a-zA-Z0-9_][\\-;:&=\\+\\$,\\"\\.a-zA-Z0-9_]*',e.src_xn="xn--[a-z0-9\\-]{1,59}",e.src_domain_root="(?:"+e.src_xn+"|"+e.src_pseudo_letter+"{1,63})",e.src_domain="(?:"+e.src_xn+"|(?:"+e.src_pseudo_letter+")|(?:"+e.src_pseudo_letter+"(?:-|"+e.src_pseudo_letter+"){0,61}"+e.src_pseudo_letter+"))",e.src_host="(?:(?:(?:(?:"+e.src_domain+")\\.)*"+e.src_domain+"))",e.tpl_host_fuzzy="(?:"+e.src_ip4+"|(?:(?:(?:"+e.src_domain+")\\.)+(?:%TLDS%)))",e.tpl_host_no_ip_fuzzy="(?:(?:(?:"+e.src_domain+")\\.)+(?:%TLDS%))",e.src_host_strict=e.src_host+e.src_host_terminator,e.tpl_host_fuzzy_strict=e.tpl_host_fuzzy+e.src_host_terminator,e.src_host_port_strict=e.src_host+e.src_port+e.src_host_terminator,e.tpl_host_port_fuzzy_strict=e.tpl_host_fuzzy+e.src_port+e.src_host_terminator,e.tpl_host_port_no_ip_fuzzy_strict=e.tpl_host_no_ip_fuzzy+e.src_port+e.src_host_terminator,e.tpl_host_fuzzy_test="localhost|www\\.|\\.\\d{1,3}\\.|(?:\\.(?:%TLDS%)(?:"+e.src_ZPCc+"|>|$))",e.tpl_email_fuzzy="(^|"+n+'|"|\\(|'+e.src_ZCc+")("+e.src_email_name+"@"+e.tpl_host_fuzzy_strict+")",e.tpl_link_fuzzy="(^|(?![.:/\\-_@])(?:[$+<=>^`|｜]|"+e.src_ZPCc+"))((?![$+<=>^`|｜])"+e.tpl_host_port_fuzzy_strict+e.src_path+")",e.tpl_link_no_ip_fuzzy="(^|(?![.:/\\-_@])(?:[$+<=>^`|｜]|"+e.src_ZPCc+"))((?![$+<=>^`|｜])"+e.tpl_host_port_no_ip_fuzzy_strict+e.src_path+")",e}function Ec(t){return Array.prototype.slice.call(arguments,1).forEach(function(n){n&&Object.keys(n).forEach(function(r){t[r]=n[r]})}),t}function Wu(t){return Object.prototype.toString.call(t)}function d3(t){return Wu(t)==="[object String]"}function p3(t){return Wu(t)==="[object Object]"}function m3(t){return Wu(t)==="[object RegExp]"}function td(t){return Wu(t)==="[object Function]"}function g3(t){return t.replace(/[.?*+^$[\]\\(){}|-]/g,"\\$&")}const om={fuzzyLink:!0,fuzzyEmail:!0,fuzzyIP:!1};function _3(t){return Object.keys(t||{}).reduce(function(e,n){return e||om.hasOwnProperty(n)},!1)}const y3={"http:":{validate:function(t,e,n){const r=t.slice(e);return n.re.http||(n.re.http=new RegExp("^\\/\\/"+n.re.src_auth+n.re.src_host_port_strict+n.re.src_path,"i")),n.re.http.test(r)?r.match(n.re.http)[0].length:0}},"https:":"http:","ftp:":"http:","//":{validate:function(t,e,n){const r=t.slice(e);return n.re.no_http||(n.re.no_http=new RegExp("^"+n.re.src_auth+"(?:localhost|(?:(?:"+n.re.src_domain+")\\.)+"+n.re.src_domain_root+")"+n.re.src_port+n.re.src_host_terminator+n.re.src_path,"i")),n.re.no_http.test(r)?e>=3&&t[e-3]===":"||e>=3&&t[e-3]==="/"?0:r.match(n.re.no_http)[0].length:0}},"mailto:":{validate:function(t,e,n){const r=t.slice(e);return n.re.mailto||(n.re.mailto=new RegExp("^"+n.re.src_email_name+"@"+n.re.src_host_strict,"i")),n.re.mailto.test(r)?r.match(n.re.mailto)[0].length:0}}},b3="a[cdefgilmnoqrstuwxz]|b[abdefghijmnorstvwyz]|c[acdfghiklmnoruvwxyz]|d[ejkmoz]|e[cegrstu]|f[ijkmor]|g[abdefghilmnpqrstuwy]|h[kmnrtu]|i[delmnoqrst]|j[emop]|k[eghimnprwyz]|l[abcikrstuvy]|m[acdeghklmnopqrstuvwxyz]|n[acefgilopruz]|om|p[aefghklmnrstwy]|qa|r[eosuw]|s[abcdeghijklmnortuvxyz]|t[cdfghjklmnortvwz]|u[agksyz]|v[aceginu]|w[fs]|y[et]|z[amw]",E3="biz|com|edu|gov|net|org|pro|web|xxx|aero|asia|coop|info|museum|name|shop|рф".split("|");function v3(t){t.__index__=-1,t.__text_cache__=""}function w3(t){return function(e,n){const r=e.slice(n);return t.test(r)?r.match(t)[0].length:0}}function nd(){return function(t,e){e.normalize(t)}}function cu(t){const e=t.re=f3(t.__opts__),n=t.__tlds__.slice();t.onCompile(),t.__tlds_replaced__||n.push(b3),n.push(e.src_xn),e.src_tlds=n.join("|");function r(u){return u.replace("%TLDS%",e.src_tlds)}e.email_fuzzy=RegExp(r(e.tpl_email_fuzzy),"i"),e.link_fuzzy=RegExp(r(e.tpl_link_fuzzy),"i"),e.link_no_ip_fuzzy=RegExp(r(e.tpl_link_no_ip_fuzzy),"i"),e.host_fuzzy_test=RegExp(r(e.tpl_host_fuzzy_test),"i");const s=[];t.__compiled__={};function i(u,c){throw new Error('(LinkifyIt) Invalid schema "'+u+'": '+c)}Object.keys(t.__schemas__).forEach(function(u){const c=t.__schemas__[u];if(c===null)return;const l={validate:null,link:null};if(t.__compiled__[u]=l,p3(c)){m3(c.validate)?l.validate=w3(c.validate):td(c.validate)?l.validate=c.validate:i(u,c),td(c.normalize)?l.normalize=c.normalize:c.normalize?i(u,c):l.normalize=nd();return}if(d3(c)){s.push(u);return}i(u,c)}),s.forEach(function(u){t.__compiled__[t.__schemas__[u]]&&(t.__compiled__[u].validate=t.__compiled__[t.__schemas__[u]].validate,t.__compiled__[u].normalize=t.__compiled__[t.__schemas__[u]].normalize)}),t.__compiled__[""]={validate:null,normalize:nd()};const o=Object.keys(t.__compiled__).filter(function(u){return u.length>0&&t.__compiled__[u]}).map(g3).join("|");t.re.schema_test=RegExp("(^|(?!_)(?:[><｜]|"+e.src_ZPCc+"))("+o+")","i"),t.re.schema_search=RegExp("(^|(?!_)(?:[><｜]|"+e.src_ZPCc+"))("+o+")","ig"),t.re.schema_at_start=RegExp("^"+t.re.schema_search.source,"i"),t.re.pretest=RegExp("("+t.re.schema_test.source+")|("+t.re.host_fuzzy_test.source+")|@","i"),v3(t)}function T3(t,e){const n=t.__index__,r=t.__last_index__,s=t.__text_cache__.slice(n,r);this.schema=t.__schema__.toLowerCase(),this.index=n+e,this.lastIndex=r+e,this.raw=s,this.text=s,this.url=s}function vc(t,e){const n=new T3(t,e);return t.__compiled__[n.schema].normalize(n,t),n}function St(t,e){if(!(this instanceof St))return new St(t,e);e||_3(t)&&(e=t,t={}),this.__opts__=Ec({},om,e),this.__index__=-1,this.__last_index__=-1,this.__schema__="",this.__text_cache__="",this.__schemas__=Ec({},y3,t),this.__compiled__={},this.__tlds__=E3,this.__tlds_replaced__=!1,this.re={},cu(this)}St.prototype.add=function(e,n){return this.__schemas__[e]=n,cu(this),this};St.prototype.set=function(e){return this.__opts__=Ec(this.__opts__,e),this};St.prototype.test=function(e){if(this.__text_cache__=e,this.__index__=-1,!e.length)return!1;let n,r,s,i,o,u,c,l,f;if(this.re.schema_test.test(e)){for(c=this.re.schema_search,c.lastIndex=0;(n=c.exec(e))!==null;)if(i=this.testSchemaAt(e,n[2],c.lastIndex),i){this.__schema__=n[2],this.__index__=n.index+n[1].length,this.__last_index__=n.index+n[0].length+i;break}}return this.__opts__.fuzzyLink&&this.__compiled__["http:"]&&(l=e.search(this.re.host_fuzzy_test),l>=0&&(this.__index__<0||l<this.__index__)&&(r=e.match(this.__opts__.fuzzyIP?this.re.link_fuzzy:this.re.link_no_ip_fuzzy))!==null&&(o=r.index+r[1].length,(this.__index__<0||o<this.__index__)&&(this.__schema__="",this.__index__=o,this.__last_index__=r.index+r[0].length))),this.__opts__.fuzzyEmail&&this.__compiled__["mailto:"]&&(f=e.indexOf("@"),f>=0&&(s=e.match(this.re.email_fuzzy))!==null&&(o=s.index+s[1].length,u=s.index+s[0].length,(this.__index__<0||o<this.__index__||o===this.__index__&&u>this.__last_index__)&&(this.__schema__="mailto:",this.__index__=o,this.__last_index__=u))),this.__index__>=0};St.prototype.pretest=function(e){return this.re.pretest.test(e)};St.prototype.testSchemaAt=function(e,n,r){return this.__compiled__[n.toLowerCase()]?this.__compiled__[n.toLowerCase()].validate(e,r,this):0};St.prototype.match=function(e){const n=[];let r=0;this.__index__>=0&&this.__text_cache__===e&&(n.push(vc(this,r)),r=this.__last_index__);let s=r?e.slice(r):e;for(;this.test(s);)n.push(vc(this,r)),s=s.slice(this.__last_index__),r+=this.__last_index__;return n.length?n:null};St.prototype.matchAtStart=function(e){if(this.__text_cache__=e,this.__index__=-1,!e.length)return null;const n=this.re.schema_at_start.exec(e);if(!n)return null;const r=this.testSchemaAt(e,n[2],n[0].length);return r?(this.__schema__=n[2],this.__index__=n.index+n[1].length,this.__last_index__=n.index+n[0].length+r,vc(this,0)):null};St.prototype.tlds=function(e,n){return e=Array.isArray(e)?e:[e],n?(this.__tlds__=this.__tlds__.concat(e).sort().filter(function(r,s,i){return r!==i[s-1]}).reverse(),cu(this),this):(this.__tlds__=e.slice(),this.__tlds_replaced__=!0,cu(this),this)};St.prototype.normalize=function(e){e.schema||(e.url="http://"+e.url),e.schema==="mailto:"&&!/^mailto:/i.test(e.url)&&(e.url="mailto:"+e.url)};St.prototype.onCompile=function(){};const bs=2147483647,on=36,yl=1,Ui=26,I3=38,A3=700,um=72,am=128,cm="-",C3=/^xn--/,x3=/[^\0-\x7F]/,k3=/[\x2E\u3002\uFF0E\uFF61]/g,S3={overflow:"Overflow: input needs wider integers to process","not-basic":"Illegal input >= 0x80 (not a basic code point)","invalid-input":"Invalid input"},za=on-yl,un=Math.floor,Ha=String.fromCharCode;function Jn(t){throw new RangeError(S3[t])}function D3(t,e){const n=[];let r=t.length;for(;r--;)n[r]=e(t[r]);return n}function lm(t,e){const n=t.split("@");let r="";n.length>1&&(r=n[0]+"@",t=n[1]),t=t.replace(k3,".");const s=t.split("."),i=D3(s,e).join(".");return r+i}function hm(t){const e=[];let n=0;const r=t.length;for(;n<r;){const s=t.charCodeAt(n++);if(s>=55296&&s<=56319&&n<r){const i=t.charCodeAt(n++);(i&64512)==56320?e.push(((s&1023)<<10)+(i&1023)+65536):(e.push(s),n--)}else e.push(s)}return e}const R3=t=>String.fromCodePoint(...t),P3=function(t){return t>=48&&t<58?26+(t-48):t>=65&&t<91?t-65:t>=97&&t<123?t-97:on},rd=function(t,e){return t+22+75*(t<26)-((e!=0)<<5)},fm=function(t,e,n){let r=0;for(t=n?un(t/A3):t>>1,t+=un(t/e);t>za*Ui>>1;r+=on)t=un(t/za);return un(r+(za+1)*t/(t+I3))},dm=function(t){const e=[],n=t.length;let r=0,s=am,i=um,o=t.lastIndexOf(cm);o<0&&(o=0);for(let u=0;u<o;++u)t.charCodeAt(u)>=128&&Jn("not-basic"),e.push(t.charCodeAt(u));for(let u=o>0?o+1:0;u<n;){const c=r;for(let f=1,p=on;;p+=on){u>=n&&Jn("invalid-input");const g=P3(t.charCodeAt(u++));g>=on&&Jn("invalid-input"),g>un((bs-r)/f)&&Jn("overflow"),r+=g*f;const y=p<=i?yl:p>=i+Ui?Ui:p-i;if(g<y)break;const T=on-y;f>un(bs/T)&&Jn("overflow"),f*=T}const l=e.length+1;i=fm(r-c,l,c==0),un(r/l)>bs-s&&Jn("overflow"),s+=un(r/l),r%=l,e.splice(r++,0,s)}return String.fromCodePoint(...e)},pm=function(t){const e=[];t=hm(t);const n=t.length;let r=am,s=0,i=um;for(const c of t)c<128&&e.push(Ha(c));const o=e.length;let u=o;for(o&&e.push(cm);u<n;){let c=bs;for(const f of t)f>=r&&f<c&&(c=f);const l=u+1;c-r>un((bs-s)/l)&&Jn("overflow"),s+=(c-r)*l,r=c;for(const f of t)if(f<r&&++s>bs&&Jn("overflow"),f===r){let p=s;for(let g=on;;g+=on){const y=g<=i?yl:g>=i+Ui?Ui:g-i;if(p<y)break;const T=p-y,R=on-y;e.push(Ha(rd(y+T%R,0))),p=un(T/R)}e.push(Ha(rd(p,0))),i=fm(s,l,u===o),s=0,++u}++s,++r}return e.join("")},F3=function(t){return lm(t,function(e){return C3.test(e)?dm(e.slice(4).toLowerCase()):e})},N3=function(t){return lm(t,function(e){return x3.test(e)?"xn--"+pm(e):e})},mm={version:"2.3.1",ucs2:{decode:hm,encode:R3},decode:dm,encode:pm,toASCII:N3,toUnicode:F3},O3={options:{html:!1,xhtmlOut:!1,breaks:!1,langPrefix:"language-",linkify:!1,typographer:!1,quotes:"“”‘’",highlight:null,maxNesting:100},components:{core:{},block:{},inline:{}}},V3={options:{html:!1,xhtmlOut:!1,breaks:!1,langPrefix:"language-",linkify:!1,typographer:!1,quotes:"“”‘’",highlight:null,maxNesting:20},components:{core:{rules:["normalize","block","inline","text_join"]},block:{rules:["paragraph"]},inline:{rules:["text"],rules2:["balance_pairs","fragments_join"]}}},M3={options:{html:!0,xhtmlOut:!0,breaks:!1,langPrefix:"language-",linkify:!1,typographer:!1,quotes:"“”‘’",highlight:null,maxNesting:20},components:{core:{rules:["normalize","block","inline","text_join"]},block:{rules:["blockquote","code","fence","heading","hr","html_block","lheading","list","reference","paragraph"]},inline:{rules:["autolink","backticks","emphasis","entity","escape","html_inline","image","link","newline","text"],rules2:["balance_pairs","emphasis","fragments_join"]}}},L3={default:O3,zero:V3,commonmark:M3},U3=/^(vbscript|javascript|file|data):/,B3=/^data:image\/(gif|png|jpeg|webp);/;function q3(t){const e=t.trim().toLowerCase();return U3.test(e)?B3.test(e):!0}const gm=["http:","https:","mailto:"];function j3(t){const e=fl(t,!0);if(e.hostname&&(!e.protocol||gm.indexOf(e.protocol)>=0))try{e.hostname=mm.toASCII(e.hostname)}catch{}return to(hl(e))}function z3(t){const e=fl(t,!0);if(e.hostname&&(!e.protocol||gm.indexOf(e.protocol)>=0))try{e.hostname=mm.toUnicode(e.hostname)}catch{}return ks(hl(e),ks.defaultChars+"%")}function Lt(t,e){if(!(this instanceof Lt))return new Lt(t,e);e||pl(t)||(e=t||{},t="default"),this.inline=new ro,this.block=new $u,this.core=new gl,this.renderer=new Os,this.linkify=new St,this.validateLink=q3,this.normalizeLink=j3,this.normalizeLinkText=z3,this.utils=$b,this.helpers=zu({},Qb),this.options={},this.configure(t),e&&this.set(e)}Lt.prototype.set=function(t){return zu(this.options,t),this};Lt.prototype.configure=function(t){const e=this;if(pl(t)){const n=t;if(t=L3[n],!t)throw new Error('Wrong `markdown-it` preset "'+n+'", check name')}if(!t)throw new Error("Wrong `markdown-it` preset, can't be empty");return t.options&&e.set(t.options),t.components&&Object.keys(t.components).forEach(function(n){t.components[n].rules&&e[n].ruler.enableOnly(t.components[n].rules),t.components[n].rules2&&e[n].ruler2.enableOnly(t.components[n].rules2)}),this};Lt.prototype.enable=function(t,e){let n=[];Array.isArray(t)||(t=[t]),["core","block","inline"].forEach(function(s){n=n.concat(this[s].ruler.enable(t,!0))},this),n=n.concat(this.inline.ruler2.enable(t,!0));const r=t.filter(function(s){return n.indexOf(s)<0});if(r.length&&!e)throw new Error("MarkdownIt. Failed to enable unknown rule(s): "+r);return this};Lt.prototype.disable=function(t,e){let n=[];Array.isArray(t)||(t=[t]),["core","block","inline"].forEach(function(s){n=n.concat(this[s].ruler.disable(t,!0))},this),n=n.concat(this.inline.ruler2.disable(t,!0));const r=t.filter(function(s){return n.indexOf(s)<0});if(r.length&&!e)throw new Error("MarkdownIt. Failed to disable unknown rule(s): "+r);return this};Lt.prototype.use=function(t){const e=[this].concat(Array.prototype.slice.call(arguments,1));return t.apply(t,e),this};Lt.prototype.parse=function(t,e){if(typeof t!="string")throw new Error("Input data should be a String");const n=new this.core.State(t,this,e);return this.core.process(n),n.tokens};Lt.prototype.render=function(t,e){return e=e||{},this.renderer.render(this.parse(t,e),this.options,e)};Lt.prototype.parseInline=function(t,e){const n=new this.core.State(t,this,e);return n.inlineMode=!0,this.core.process(n),n.tokens};Lt.prototype.renderInline=function(t,e){return e=e||{},this.renderer.render(this.parseInline(t,e),this.options,e)};const hr=il(null),sd=Hp(()=>!!hr.value);function $a(t,e){hr.value=t,localStorage.setItem("user",JSON.stringify(t))}function id(){hr.value=null,localStorage.removeItem("user")}const H3=()=>{};var od={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _m=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let s=t.charCodeAt(r);s<128?e[n++]=s:s<2048?(e[n++]=s>>6|192,e[n++]=s&63|128):(s&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(s=65536+((s&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=s>>18|240,e[n++]=s>>12&63|128,e[n++]=s>>6&63|128,e[n++]=s&63|128):(e[n++]=s>>12|224,e[n++]=s>>6&63|128,e[n++]=s&63|128)}return e},$3=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const s=t[n++];if(s<128)e[r++]=String.fromCharCode(s);else if(s>191&&s<224){const i=t[n++];e[r++]=String.fromCharCode((s&31)<<6|i&63)}else if(s>239&&s<365){const i=t[n++],o=t[n++],u=t[n++],c=((s&7)<<18|(i&63)<<12|(o&63)<<6|u&63)-65536;e[r++]=String.fromCharCode(55296+(c>>10)),e[r++]=String.fromCharCode(56320+(c&1023))}else{const i=t[n++],o=t[n++];e[r++]=String.fromCharCode((s&15)<<12|(i&63)<<6|o&63)}}return e.join("")},ym={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let s=0;s<t.length;s+=3){const i=t[s],o=s+1<t.length,u=o?t[s+1]:0,c=s+2<t.length,l=c?t[s+2]:0,f=i>>2,p=(i&3)<<4|u>>4;let g=(u&15)<<2|l>>6,y=l&63;c||(y=64,o||(g=64)),r.push(n[f],n[p],n[g],n[y])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(_m(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):$3(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let s=0;s<t.length;){const i=n[t.charAt(s++)],u=s<t.length?n[t.charAt(s)]:0;++s;const l=s<t.length?n[t.charAt(s)]:64;++s;const p=s<t.length?n[t.charAt(s)]:64;if(++s,i==null||u==null||l==null||p==null)throw new W3;const g=i<<2|u>>4;if(r.push(g),l!==64){const y=u<<4&240|l>>2;if(r.push(y),p!==64){const T=l<<6&192|p;r.push(T)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class W3 extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const K3=function(t){const e=_m(t);return ym.encodeByteArray(e,!0)},lu=function(t){return K3(t).replace(/\./g,"")},bm=function(t){try{return ym.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function G3(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Q3=()=>G3().__FIREBASE_DEFAULTS__,J3=()=>{if(typeof process>"u"||typeof od>"u")return;const t=od.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},Y3=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&bm(t[1]);return e&&JSON.parse(e)},Ku=()=>{try{return H3()||Q3()||J3()||Y3()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},Em=t=>{var e,n;return(n=(e=Ku())==null?void 0:e.emulatorHosts)==null?void 0:n[t]},X3=t=>{const e=Em(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),r]:[e.substring(0,n),r]},vm=()=>{var t;return(t=Ku())==null?void 0:t.config},wm=t=>{var e;return(e=Ku())==null?void 0:e[`_${t}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Z3{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,r))}}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ev(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=e||"demo-project",s=t.iat||0,i=t.sub||t.user_id;if(!i)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o={iss:`https://securetoken.google.com/${r}`,aud:r,iat:s,exp:s+3600,auth_time:s,sub:i,user_id:i,firebase:{sign_in_provider:"custom",identities:{}},...t};return[lu(JSON.stringify(n)),lu(JSON.stringify(o)),""].join(".")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function lt(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function tv(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(lt())}function nv(){var e;const t=(e=Ku())==null?void 0:e.forceEnvironment;if(t==="node")return!0;if(t==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function rv(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function Tm(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function sv(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function iv(){const t=lt();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function ov(){return!nv()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function Im(){try{return typeof indexedDB=="object"}catch{return!1}}function Am(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",s=self.indexedDB.open(r);s.onsuccess=()=>{s.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},s.onupgradeneeded=()=>{n=!1},s.onerror=()=>{var i;e(((i=s.error)==null?void 0:i.message)||"")}}catch(n){e(n)}})}function uv(){return!(typeof navigator>"u"||!navigator.cookieEnabled)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const av="FirebaseError";class Qt extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=av,Object.setPrototypeOf(this,Qt.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Wr.prototype.create)}}class Wr{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},s=`${this.service}/${e}`,i=this.errors[e],o=i?cv(i,r):"Error",u=`${this.serviceName}: ${o} (${s}).`;return new Qt(s,u,r)}}function cv(t,e){return t.replace(lv,(n,r)=>{const s=e[r];return s!=null?String(s):`<${r}?>`})}const lv=/\{\$([^}]+)}/g;function hv(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function fr(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const s of n){if(!r.includes(s))return!1;const i=t[s],o=e[s];if(ud(i)&&ud(o)){if(!fr(i,o))return!1}else if(i!==o)return!1}for(const s of r)if(!n.includes(s))return!1;return!0}function ud(t){return t!==null&&typeof t=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function so(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach(s=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(s))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function hi(t){const e={};return t.replace(/^\?/,"").split("&").forEach(r=>{if(r){const[s,i]=r.split("=");e[decodeURIComponent(s)]=decodeURIComponent(i)}}),e}function fi(t){const e=t.indexOf("?");if(!e)return"";const n=t.indexOf("#",e);return t.substring(e,n>0?n:void 0)}function fv(t,e){const n=new dv(t,e);return n.subscribe.bind(n)}class dv{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,r){let s;if(e===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");pv(e,["next","error","complete"])?s=e:s={next:e,error:n,complete:r},s.next===void 0&&(s.next=Wa),s.error===void 0&&(s.error=Wa),s.complete===void 0&&(s.complete=Wa);const i=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?s.error(this.finalError):s.complete()}catch{}}),this.observers.push(s),i}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function pv(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function Wa(){}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const mv=1e3,gv=2,_v=4*60*60*1e3,yv=.5;function ad(t,e=mv,n=gv){const r=e*Math.pow(n,t),s=Math.round(yv*r*(Math.random()-.5)*2);return Math.min(_v,r+s)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ht(t){return t&&t._delegate?t._delegate:t}/**
 * @license
 * Copyright 2025 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function io(t){try{return(t.startsWith("http://")||t.startsWith("https://")?new URL(t).hostname:t).endsWith(".cloudworkstations.dev")}catch{return!1}}async function Cm(t){return(await fetch(t,{credentials:"include"})).ok}class Wt{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Rr="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bv{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new Z3;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const s=this.getOrInitializeService({instanceIdentifier:n});s&&r.resolve(s)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){const n=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),r=(e==null?void 0:e.optional)??!1;if(this.isInitialized(n)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:n})}catch(s){if(r)return null;throw s}else{if(r)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(vv(e))try{this.getOrInitializeService({instanceIdentifier:Rr})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const s=this.normalizeInstanceIdentifier(n);try{const i=this.getOrInitializeService({instanceIdentifier:s});r.resolve(i)}catch{}}}}clearInstance(e=Rr){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Rr){return this.instances.has(e)}getOptions(e=Rr){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const s=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[i,o]of this.instancesDeferred.entries()){const u=this.normalizeInstanceIdentifier(i);r===u&&o.resolve(s)}return s}onInit(e,n){const r=this.normalizeInstanceIdentifier(n),s=this.onInitCallbacks.get(r)??new Set;s.add(e),this.onInitCallbacks.set(r,s);const i=this.instances.get(r);return i&&e(i,r),()=>{s.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(r)for(const s of r)try{s(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:Ev(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=Rr){return this.component?this.component.multipleInstances?e:Rr:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function Ev(t){return t===Rr?void 0:t}function vv(t){return t.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wv{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new bv(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var fe;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(fe||(fe={}));const Tv={debug:fe.DEBUG,verbose:fe.VERBOSE,info:fe.INFO,warn:fe.WARN,error:fe.ERROR,silent:fe.SILENT},Iv=fe.INFO,Av={[fe.DEBUG]:"log",[fe.VERBOSE]:"log",[fe.INFO]:"info",[fe.WARN]:"warn",[fe.ERROR]:"error"},Cv=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),s=Av[e];if(s)console[s](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Gu{constructor(e){this.name=e,this._logLevel=Iv,this._logHandler=Cv,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in fe))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?Tv[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,fe.DEBUG,...e),this._logHandler(this,fe.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,fe.VERBOSE,...e),this._logHandler(this,fe.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,fe.INFO,...e),this._logHandler(this,fe.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,fe.WARN,...e),this._logHandler(this,fe.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,fe.ERROR,...e),this._logHandler(this,fe.ERROR,...e)}}const xv=(t,e)=>e.some(n=>t instanceof n);let cd,ld;function kv(){return cd||(cd=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function Sv(){return ld||(ld=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const xm=new WeakMap,wc=new WeakMap,km=new WeakMap,Ka=new WeakMap,bl=new WeakMap;function Dv(t){const e=new Promise((n,r)=>{const s=()=>{t.removeEventListener("success",i),t.removeEventListener("error",o)},i=()=>{n(sr(t.result)),s()},o=()=>{r(t.error),s()};t.addEventListener("success",i),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&xm.set(n,t)}).catch(()=>{}),bl.set(e,t),e}function Rv(t){if(wc.has(t))return;const e=new Promise((n,r)=>{const s=()=>{t.removeEventListener("complete",i),t.removeEventListener("error",o),t.removeEventListener("abort",o)},i=()=>{n(),s()},o=()=>{r(t.error||new DOMException("AbortError","AbortError")),s()};t.addEventListener("complete",i),t.addEventListener("error",o),t.addEventListener("abort",o)});wc.set(t,e)}let Tc={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return wc.get(t);if(e==="objectStoreNames")return t.objectStoreNames||km.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return sr(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function Pv(t){Tc=t(Tc)}function Fv(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(Ga(this),e,...n);return km.set(r,e.sort?e.sort():[e]),sr(r)}:Sv().includes(t)?function(...e){return t.apply(Ga(this),e),sr(xm.get(this))}:function(...e){return sr(t.apply(Ga(this),e))}}function Nv(t){return typeof t=="function"?Fv(t):(t instanceof IDBTransaction&&Rv(t),xv(t,kv())?new Proxy(t,Tc):t)}function sr(t){if(t instanceof IDBRequest)return Dv(t);if(Ka.has(t))return Ka.get(t);const e=Nv(t);return e!==t&&(Ka.set(t,e),bl.set(e,t)),e}const Ga=t=>bl.get(t);function Sm(t,e,{blocked:n,upgrade:r,blocking:s,terminated:i}={}){const o=indexedDB.open(t,e),u=sr(o);return r&&o.addEventListener("upgradeneeded",c=>{r(sr(o.result),c.oldVersion,c.newVersion,sr(o.transaction),c)}),n&&o.addEventListener("blocked",c=>n(c.oldVersion,c.newVersion,c)),u.then(c=>{i&&c.addEventListener("close",()=>i()),s&&c.addEventListener("versionchange",l=>s(l.oldVersion,l.newVersion,l))}).catch(()=>{}),u}const Ov=["get","getKey","getAll","getAllKeys","count"],Vv=["put","add","delete","clear"],Qa=new Map;function hd(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(Qa.get(e))return Qa.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,s=Vv.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(s||Ov.includes(n)))return;const i=async function(o,...u){const c=this.transaction(o,s?"readwrite":"readonly");let l=c.store;return r&&(l=l.index(u.shift())),(await Promise.all([l[n](...u),s&&c.done]))[0]};return Qa.set(e,i),i}Pv(t=>({...t,get:(e,n,r)=>hd(e,n)||t.get(e,n,r),has:(e,n)=>!!hd(e,n)||t.has(e,n)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mv{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(Lv(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function Lv(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const Ic="@firebase/app",fd="0.14.10";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Vn=new Gu("@firebase/app"),Uv="@firebase/app-compat",Bv="@firebase/analytics-compat",qv="@firebase/analytics",jv="@firebase/app-check-compat",zv="@firebase/app-check",Hv="@firebase/auth",$v="@firebase/auth-compat",Wv="@firebase/database",Kv="@firebase/data-connect",Gv="@firebase/database-compat",Qv="@firebase/functions",Jv="@firebase/functions-compat",Yv="@firebase/installations",Xv="@firebase/installations-compat",Zv="@firebase/messaging",ew="@firebase/messaging-compat",tw="@firebase/performance",nw="@firebase/performance-compat",rw="@firebase/remote-config",sw="@firebase/remote-config-compat",iw="@firebase/storage",ow="@firebase/storage-compat",uw="@firebase/firestore",aw="@firebase/ai",cw="@firebase/firestore-compat",lw="firebase",hw="12.11.0";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ac="[DEFAULT]",fw={[Ic]:"fire-core",[Uv]:"fire-core-compat",[qv]:"fire-analytics",[Bv]:"fire-analytics-compat",[zv]:"fire-app-check",[jv]:"fire-app-check-compat",[Hv]:"fire-auth",[$v]:"fire-auth-compat",[Wv]:"fire-rtdb",[Kv]:"fire-data-connect",[Gv]:"fire-rtdb-compat",[Qv]:"fire-fn",[Jv]:"fire-fn-compat",[Yv]:"fire-iid",[Xv]:"fire-iid-compat",[Zv]:"fire-fcm",[ew]:"fire-fcm-compat",[tw]:"fire-perf",[nw]:"fire-perf-compat",[rw]:"fire-rc",[sw]:"fire-rc-compat",[iw]:"fire-gcs",[ow]:"fire-gcs-compat",[uw]:"fire-fst",[cw]:"fire-fst-compat",[aw]:"fire-vertex","fire-js":"fire-js",[lw]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hu=new Map,dw=new Map,Cc=new Map;function dd(t,e){try{t.container.addComponent(e)}catch(n){Vn.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function _n(t){const e=t.name;if(Cc.has(e))return Vn.debug(`There were multiple attempts to register component ${e}.`),!1;Cc.set(e,t);for(const n of hu.values())dd(n,t);for(const n of dw.values())dd(n,t);return!0}function Kr(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}function Pt(t){return t==null?!1:t.settings!==void 0}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const pw={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},ir=new Wr("app","Firebase",pw);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mw{constructor(e,n,r){this._isDeleted=!1,this._options={...e},this._config={...n},this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new Wt("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw ir.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Vs=hw;function Dm(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const r={name:Ac,automaticDataCollectionEnabled:!0,...e},s=r.name;if(typeof s!="string"||!s)throw ir.create("bad-app-name",{appName:String(s)});if(n||(n=vm()),!n)throw ir.create("no-options");const i=hu.get(s);if(i){if(fr(n,i.options)&&fr(r,i.config))return i;throw ir.create("duplicate-app",{appName:s})}const o=new wv(s);for(const c of Cc.values())o.addComponent(c);const u=new mw(n,r,o);return hu.set(s,u),u}function El(t=Ac){const e=hu.get(t);if(!e&&t===Ac&&vm())return Dm();if(!e)throw ir.create("no-app",{appName:t});return e}function Mt(t,e,n){let r=fw[t]??t;n&&(r+=`-${n}`);const s=r.match(/\s|\//),i=e.match(/\s|\//);if(s||i){const o=[`Unable to register library "${r}" with version "${e}":`];s&&o.push(`library name "${r}" contains illegal characters (whitespace or "/")`),s&&i&&o.push("and"),i&&o.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Vn.warn(o.join(" "));return}_n(new Wt(`${r}-version`,()=>({library:r,version:e}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gw="firebase-heartbeat-database",_w=1,Bi="firebase-heartbeat-store";let Ja=null;function Rm(){return Ja||(Ja=Sm(gw,_w,{upgrade:(t,e)=>{switch(e){case 0:try{t.createObjectStore(Bi)}catch(n){console.warn(n)}}}}).catch(t=>{throw ir.create("idb-open",{originalErrorMessage:t.message})})),Ja}async function yw(t){try{const n=(await Rm()).transaction(Bi),r=await n.objectStore(Bi).get(Pm(t));return await n.done,r}catch(e){if(e instanceof Qt)Vn.warn(e.message);else{const n=ir.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});Vn.warn(n.message)}}}async function pd(t,e){try{const r=(await Rm()).transaction(Bi,"readwrite");await r.objectStore(Bi).put(e,Pm(t)),await r.done}catch(n){if(n instanceof Qt)Vn.warn(n.message);else{const r=ir.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});Vn.warn(r.message)}}}function Pm(t){return`${t.name}!${t.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const bw=1024,Ew=30;class vw{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new Tw(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var e,n;try{const s=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),i=md();if(((e=this._heartbeatsCache)==null?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)==null?void 0:n.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===i||this._heartbeatsCache.heartbeats.some(o=>o.date===i))return;if(this._heartbeatsCache.heartbeats.push({date:i,agent:s}),this._heartbeatsCache.heartbeats.length>Ew){const o=Iw(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(o,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(r){Vn.warn(r)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)==null?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=md(),{heartbeatsToSend:r,unsentEntries:s}=ww(this._heartbeatsCache.heartbeats),i=lu(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=n,s.length>0?(this._heartbeatsCache.heartbeats=s,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}catch(n){return Vn.warn(n),""}}}function md(){return new Date().toISOString().substring(0,10)}function ww(t,e=bw){const n=[];let r=t.slice();for(const s of t){const i=n.find(o=>o.agent===s.agent);if(i){if(i.dates.push(s.date),gd(n)>e){i.dates.pop();break}}else if(n.push({agent:s.agent,dates:[s.date]}),gd(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class Tw{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return Im()?Am().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await yw(this.app);return n!=null&&n.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){if(await this._canUseIndexedDBPromise){const r=await this.read();return pd(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??r.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){if(await this._canUseIndexedDBPromise){const r=await this.read();return pd(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??r.lastSentHeartbeatDate,heartbeats:[...r.heartbeats,...e.heartbeats]})}else return}}function gd(t){return lu(JSON.stringify({version:2,heartbeats:t})).length}function Iw(t){if(t.length===0)return-1;let e=0,n=t[0].date;for(let r=1;r<t.length;r++)t[r].date<n&&(n=t[r].date,e=r);return e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Aw(t){_n(new Wt("platform-logger",e=>new Mv(e),"PRIVATE")),_n(new Wt("heartbeat",e=>new vw(e),"PRIVATE")),Mt(Ic,fd,t),Mt(Ic,fd,"esm2020"),Mt("fire-js","")}Aw("");var Cw="firebase",xw="12.11.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Mt(Cw,xw,"app");var _d=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var or,Fm;(function(){var t;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(w,_){function v(){}v.prototype=_.prototype,w.F=_.prototype,w.prototype=new v,w.prototype.constructor=w,w.D=function(A,I,k){for(var E=Array(arguments.length-2),Me=2;Me<arguments.length;Me++)E[Me-2]=arguments[Me];return _.prototype[I].apply(A,E)}}function n(){this.blockSize=-1}function r(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.C=Array(this.blockSize),this.o=this.h=0,this.u()}e(r,n),r.prototype.u=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function s(w,_,v){v||(v=0);const A=Array(16);if(typeof _=="string")for(var I=0;I<16;++I)A[I]=_.charCodeAt(v++)|_.charCodeAt(v++)<<8|_.charCodeAt(v++)<<16|_.charCodeAt(v++)<<24;else for(I=0;I<16;++I)A[I]=_[v++]|_[v++]<<8|_[v++]<<16|_[v++]<<24;_=w.g[0],v=w.g[1],I=w.g[2];let k=w.g[3],E;E=_+(k^v&(I^k))+A[0]+3614090360&4294967295,_=v+(E<<7&4294967295|E>>>25),E=k+(I^_&(v^I))+A[1]+3905402710&4294967295,k=_+(E<<12&4294967295|E>>>20),E=I+(v^k&(_^v))+A[2]+606105819&4294967295,I=k+(E<<17&4294967295|E>>>15),E=v+(_^I&(k^_))+A[3]+3250441966&4294967295,v=I+(E<<22&4294967295|E>>>10),E=_+(k^v&(I^k))+A[4]+4118548399&4294967295,_=v+(E<<7&4294967295|E>>>25),E=k+(I^_&(v^I))+A[5]+1200080426&4294967295,k=_+(E<<12&4294967295|E>>>20),E=I+(v^k&(_^v))+A[6]+2821735955&4294967295,I=k+(E<<17&4294967295|E>>>15),E=v+(_^I&(k^_))+A[7]+4249261313&4294967295,v=I+(E<<22&4294967295|E>>>10),E=_+(k^v&(I^k))+A[8]+1770035416&4294967295,_=v+(E<<7&4294967295|E>>>25),E=k+(I^_&(v^I))+A[9]+2336552879&4294967295,k=_+(E<<12&4294967295|E>>>20),E=I+(v^k&(_^v))+A[10]+4294925233&4294967295,I=k+(E<<17&4294967295|E>>>15),E=v+(_^I&(k^_))+A[11]+2304563134&4294967295,v=I+(E<<22&4294967295|E>>>10),E=_+(k^v&(I^k))+A[12]+1804603682&4294967295,_=v+(E<<7&4294967295|E>>>25),E=k+(I^_&(v^I))+A[13]+4254626195&4294967295,k=_+(E<<12&4294967295|E>>>20),E=I+(v^k&(_^v))+A[14]+2792965006&4294967295,I=k+(E<<17&4294967295|E>>>15),E=v+(_^I&(k^_))+A[15]+1236535329&4294967295,v=I+(E<<22&4294967295|E>>>10),E=_+(I^k&(v^I))+A[1]+4129170786&4294967295,_=v+(E<<5&4294967295|E>>>27),E=k+(v^I&(_^v))+A[6]+3225465664&4294967295,k=_+(E<<9&4294967295|E>>>23),E=I+(_^v&(k^_))+A[11]+643717713&4294967295,I=k+(E<<14&4294967295|E>>>18),E=v+(k^_&(I^k))+A[0]+3921069994&4294967295,v=I+(E<<20&4294967295|E>>>12),E=_+(I^k&(v^I))+A[5]+3593408605&4294967295,_=v+(E<<5&4294967295|E>>>27),E=k+(v^I&(_^v))+A[10]+38016083&4294967295,k=_+(E<<9&4294967295|E>>>23),E=I+(_^v&(k^_))+A[15]+3634488961&4294967295,I=k+(E<<14&4294967295|E>>>18),E=v+(k^_&(I^k))+A[4]+3889429448&4294967295,v=I+(E<<20&4294967295|E>>>12),E=_+(I^k&(v^I))+A[9]+568446438&4294967295,_=v+(E<<5&4294967295|E>>>27),E=k+(v^I&(_^v))+A[14]+3275163606&4294967295,k=_+(E<<9&4294967295|E>>>23),E=I+(_^v&(k^_))+A[3]+4107603335&4294967295,I=k+(E<<14&4294967295|E>>>18),E=v+(k^_&(I^k))+A[8]+1163531501&4294967295,v=I+(E<<20&4294967295|E>>>12),E=_+(I^k&(v^I))+A[13]+2850285829&4294967295,_=v+(E<<5&4294967295|E>>>27),E=k+(v^I&(_^v))+A[2]+4243563512&4294967295,k=_+(E<<9&4294967295|E>>>23),E=I+(_^v&(k^_))+A[7]+1735328473&4294967295,I=k+(E<<14&4294967295|E>>>18),E=v+(k^_&(I^k))+A[12]+2368359562&4294967295,v=I+(E<<20&4294967295|E>>>12),E=_+(v^I^k)+A[5]+4294588738&4294967295,_=v+(E<<4&4294967295|E>>>28),E=k+(_^v^I)+A[8]+2272392833&4294967295,k=_+(E<<11&4294967295|E>>>21),E=I+(k^_^v)+A[11]+1839030562&4294967295,I=k+(E<<16&4294967295|E>>>16),E=v+(I^k^_)+A[14]+4259657740&4294967295,v=I+(E<<23&4294967295|E>>>9),E=_+(v^I^k)+A[1]+2763975236&4294967295,_=v+(E<<4&4294967295|E>>>28),E=k+(_^v^I)+A[4]+1272893353&4294967295,k=_+(E<<11&4294967295|E>>>21),E=I+(k^_^v)+A[7]+4139469664&4294967295,I=k+(E<<16&4294967295|E>>>16),E=v+(I^k^_)+A[10]+3200236656&4294967295,v=I+(E<<23&4294967295|E>>>9),E=_+(v^I^k)+A[13]+681279174&4294967295,_=v+(E<<4&4294967295|E>>>28),E=k+(_^v^I)+A[0]+3936430074&4294967295,k=_+(E<<11&4294967295|E>>>21),E=I+(k^_^v)+A[3]+3572445317&4294967295,I=k+(E<<16&4294967295|E>>>16),E=v+(I^k^_)+A[6]+76029189&4294967295,v=I+(E<<23&4294967295|E>>>9),E=_+(v^I^k)+A[9]+3654602809&4294967295,_=v+(E<<4&4294967295|E>>>28),E=k+(_^v^I)+A[12]+3873151461&4294967295,k=_+(E<<11&4294967295|E>>>21),E=I+(k^_^v)+A[15]+530742520&4294967295,I=k+(E<<16&4294967295|E>>>16),E=v+(I^k^_)+A[2]+3299628645&4294967295,v=I+(E<<23&4294967295|E>>>9),E=_+(I^(v|~k))+A[0]+4096336452&4294967295,_=v+(E<<6&4294967295|E>>>26),E=k+(v^(_|~I))+A[7]+1126891415&4294967295,k=_+(E<<10&4294967295|E>>>22),E=I+(_^(k|~v))+A[14]+2878612391&4294967295,I=k+(E<<15&4294967295|E>>>17),E=v+(k^(I|~_))+A[5]+4237533241&4294967295,v=I+(E<<21&4294967295|E>>>11),E=_+(I^(v|~k))+A[12]+1700485571&4294967295,_=v+(E<<6&4294967295|E>>>26),E=k+(v^(_|~I))+A[3]+2399980690&4294967295,k=_+(E<<10&4294967295|E>>>22),E=I+(_^(k|~v))+A[10]+4293915773&4294967295,I=k+(E<<15&4294967295|E>>>17),E=v+(k^(I|~_))+A[1]+2240044497&4294967295,v=I+(E<<21&4294967295|E>>>11),E=_+(I^(v|~k))+A[8]+1873313359&4294967295,_=v+(E<<6&4294967295|E>>>26),E=k+(v^(_|~I))+A[15]+4264355552&4294967295,k=_+(E<<10&4294967295|E>>>22),E=I+(_^(k|~v))+A[6]+2734768916&4294967295,I=k+(E<<15&4294967295|E>>>17),E=v+(k^(I|~_))+A[13]+1309151649&4294967295,v=I+(E<<21&4294967295|E>>>11),E=_+(I^(v|~k))+A[4]+4149444226&4294967295,_=v+(E<<6&4294967295|E>>>26),E=k+(v^(_|~I))+A[11]+3174756917&4294967295,k=_+(E<<10&4294967295|E>>>22),E=I+(_^(k|~v))+A[2]+718787259&4294967295,I=k+(E<<15&4294967295|E>>>17),E=v+(k^(I|~_))+A[9]+3951481745&4294967295,w.g[0]=w.g[0]+_&4294967295,w.g[1]=w.g[1]+(I+(E<<21&4294967295|E>>>11))&4294967295,w.g[2]=w.g[2]+I&4294967295,w.g[3]=w.g[3]+k&4294967295}r.prototype.v=function(w,_){_===void 0&&(_=w.length);const v=_-this.blockSize,A=this.C;let I=this.h,k=0;for(;k<_;){if(I==0)for(;k<=v;)s(this,w,k),k+=this.blockSize;if(typeof w=="string"){for(;k<_;)if(A[I++]=w.charCodeAt(k++),I==this.blockSize){s(this,A),I=0;break}}else for(;k<_;)if(A[I++]=w[k++],I==this.blockSize){s(this,A),I=0;break}}this.h=I,this.o+=_},r.prototype.A=function(){var w=Array((this.h<56?this.blockSize:this.blockSize*2)-this.h);w[0]=128;for(var _=1;_<w.length-8;++_)w[_]=0;_=this.o*8;for(var v=w.length-8;v<w.length;++v)w[v]=_&255,_/=256;for(this.v(w),w=Array(16),_=0,v=0;v<4;++v)for(let A=0;A<32;A+=8)w[_++]=this.g[v]>>>A&255;return w};function i(w,_){var v=u;return Object.prototype.hasOwnProperty.call(v,w)?v[w]:v[w]=_(w)}function o(w,_){this.h=_;const v=[];let A=!0;for(let I=w.length-1;I>=0;I--){const k=w[I]|0;A&&k==_||(v[I]=k,A=!1)}this.g=v}var u={};function c(w){return-128<=w&&w<128?i(w,function(_){return new o([_|0],_<0?-1:0)}):new o([w|0],w<0?-1:0)}function l(w){if(isNaN(w)||!isFinite(w))return p;if(w<0)return F(l(-w));const _=[];let v=1;for(let A=0;w>=v;A++)_[A]=w/v|0,v*=4294967296;return new o(_,0)}function f(w,_){if(w.length==0)throw Error("number format error: empty string");if(_=_||10,_<2||36<_)throw Error("radix out of range: "+_);if(w.charAt(0)=="-")return F(f(w.substring(1),_));if(w.indexOf("-")>=0)throw Error('number format error: interior "-" character');const v=l(Math.pow(_,8));let A=p;for(let k=0;k<w.length;k+=8){var I=Math.min(8,w.length-k);const E=parseInt(w.substring(k,k+I),_);I<8?(I=l(Math.pow(_,I)),A=A.j(I).add(l(E))):(A=A.j(v),A=A.add(l(E)))}return A}var p=c(0),g=c(1),y=c(16777216);t=o.prototype,t.m=function(){if(R(this))return-F(this).m();let w=0,_=1;for(let v=0;v<this.g.length;v++){const A=this.i(v);w+=(A>=0?A:4294967296+A)*_,_*=4294967296}return w},t.toString=function(w){if(w=w||10,w<2||36<w)throw Error("radix out of range: "+w);if(T(this))return"0";if(R(this))return"-"+F(this).toString(w);const _=l(Math.pow(w,6));var v=this;let A="";for(;;){const I=V(v,_).g;v=$(v,I.j(_));let k=((v.g.length>0?v.g[0]:v.h)>>>0).toString(w);if(v=I,T(v))return k+A;for(;k.length<6;)k="0"+k;A=k+A}},t.i=function(w){return w<0?0:w<this.g.length?this.g[w]:this.h};function T(w){if(w.h!=0)return!1;for(let _=0;_<w.g.length;_++)if(w.g[_]!=0)return!1;return!0}function R(w){return w.h==-1}t.l=function(w){return w=$(this,w),R(w)?-1:T(w)?0:1};function F(w){const _=w.g.length,v=[];for(let A=0;A<_;A++)v[A]=~w.g[A];return new o(v,~w.h).add(g)}t.abs=function(){return R(this)?F(this):this},t.add=function(w){const _=Math.max(this.g.length,w.g.length),v=[];let A=0;for(let I=0;I<=_;I++){let k=A+(this.i(I)&65535)+(w.i(I)&65535),E=(k>>>16)+(this.i(I)>>>16)+(w.i(I)>>>16);A=E>>>16,k&=65535,E&=65535,v[I]=E<<16|k}return new o(v,v[v.length-1]&-2147483648?-1:0)};function $(w,_){return w.add(F(_))}t.j=function(w){if(T(this)||T(w))return p;if(R(this))return R(w)?F(this).j(F(w)):F(F(this).j(w));if(R(w))return F(this.j(F(w)));if(this.l(y)<0&&w.l(y)<0)return l(this.m()*w.m());const _=this.g.length+w.g.length,v=[];for(var A=0;A<2*_;A++)v[A]=0;for(A=0;A<this.g.length;A++)for(let I=0;I<w.g.length;I++){const k=this.i(A)>>>16,E=this.i(A)&65535,Me=w.i(I)>>>16,Ze=w.i(I)&65535;v[2*A+2*I]+=E*Ze,N(v,2*A+2*I),v[2*A+2*I+1]+=k*Ze,N(v,2*A+2*I+1),v[2*A+2*I+1]+=E*Me,N(v,2*A+2*I+1),v[2*A+2*I+2]+=k*Me,N(v,2*A+2*I+2)}for(w=0;w<_;w++)v[w]=v[2*w+1]<<16|v[2*w];for(w=_;w<2*_;w++)v[w]=0;return new o(v,0)};function N(w,_){for(;(w[_]&65535)!=w[_];)w[_+1]+=w[_]>>>16,w[_]&=65535,_++}function z(w,_){this.g=w,this.h=_}function V(w,_){if(T(_))throw Error("division by zero");if(T(w))return new z(p,p);if(R(w))return _=V(F(w),_),new z(F(_.g),F(_.h));if(R(_))return _=V(w,F(_)),new z(F(_.g),_.h);if(w.g.length>30){if(R(w)||R(_))throw Error("slowDivide_ only works with positive integers.");for(var v=g,A=_;A.l(w)<=0;)v=K(v),A=K(A);var I=Y(v,1),k=Y(A,1);for(A=Y(A,2),v=Y(v,2);!T(A);){var E=k.add(A);E.l(w)<=0&&(I=I.add(v),k=E),A=Y(A,1),v=Y(v,1)}return _=$(w,I.j(_)),new z(I,_)}for(I=p;w.l(_)>=0;){for(v=Math.max(1,Math.floor(w.m()/_.m())),A=Math.ceil(Math.log(v)/Math.LN2),A=A<=48?1:Math.pow(2,A-48),k=l(v),E=k.j(_);R(E)||E.l(w)>0;)v-=A,k=l(v),E=k.j(_);T(k)&&(k=g),I=I.add(k),w=$(w,E)}return new z(I,w)}t.B=function(w){return V(this,w).h},t.and=function(w){const _=Math.max(this.g.length,w.g.length),v=[];for(let A=0;A<_;A++)v[A]=this.i(A)&w.i(A);return new o(v,this.h&w.h)},t.or=function(w){const _=Math.max(this.g.length,w.g.length),v=[];for(let A=0;A<_;A++)v[A]=this.i(A)|w.i(A);return new o(v,this.h|w.h)},t.xor=function(w){const _=Math.max(this.g.length,w.g.length),v=[];for(let A=0;A<_;A++)v[A]=this.i(A)^w.i(A);return new o(v,this.h^w.h)};function K(w){const _=w.g.length+1,v=[];for(let A=0;A<_;A++)v[A]=w.i(A)<<1|w.i(A-1)>>>31;return new o(v,w.h)}function Y(w,_){const v=_>>5;_%=32;const A=w.g.length-v,I=[];for(let k=0;k<A;k++)I[k]=_>0?w.i(k+v)>>>_|w.i(k+v+1)<<32-_:w.i(k+v);return new o(I,w.h)}r.prototype.digest=r.prototype.A,r.prototype.reset=r.prototype.u,r.prototype.update=r.prototype.v,Fm=r,o.prototype.add=o.prototype.add,o.prototype.multiply=o.prototype.j,o.prototype.modulo=o.prototype.B,o.prototype.compare=o.prototype.l,o.prototype.toNumber=o.prototype.m,o.prototype.toString=o.prototype.toString,o.prototype.getBits=o.prototype.i,o.fromNumber=l,o.fromString=f,or=o}).apply(typeof _d<"u"?_d:typeof self<"u"?self:typeof window<"u"?window:{});var Po=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Nm,di,Om,zo,xc,Vm,Mm,Lm;(function(){var t,e=Object.defineProperty;function n(a){a=[typeof globalThis=="object"&&globalThis,a,typeof window=="object"&&window,typeof self=="object"&&self,typeof Po=="object"&&Po];for(var h=0;h<a.length;++h){var d=a[h];if(d&&d.Math==Math)return d}throw Error("Cannot find global object")}var r=n(this);function s(a,h){if(h)e:{var d=r;a=a.split(".");for(var m=0;m<a.length-1;m++){var S=a[m];if(!(S in d))break e;d=d[S]}a=a[a.length-1],m=d[a],h=h(m),h!=m&&h!=null&&e(d,a,{configurable:!0,writable:!0,value:h})}}s("Symbol.dispose",function(a){return a||Symbol("Symbol.dispose")}),s("Array.prototype.values",function(a){return a||function(){return this[Symbol.iterator]()}}),s("Object.entries",function(a){return a||function(h){var d=[],m;for(m in h)Object.prototype.hasOwnProperty.call(h,m)&&d.push([m,h[m]]);return d}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var i=i||{},o=this||self;function u(a){var h=typeof a;return h=="object"&&a!=null||h=="function"}function c(a,h,d){return a.call.apply(a.bind,arguments)}function l(a,h,d){return l=c,l.apply(null,arguments)}function f(a,h){var d=Array.prototype.slice.call(arguments,1);return function(){var m=d.slice();return m.push.apply(m,arguments),a.apply(this,m)}}function p(a,h){function d(){}d.prototype=h.prototype,a.Z=h.prototype,a.prototype=new d,a.prototype.constructor=a,a.Ob=function(m,S,D){for(var W=Array(arguments.length-2),ce=2;ce<arguments.length;ce++)W[ce-2]=arguments[ce];return h.prototype[S].apply(m,W)}}var g=typeof AsyncContext<"u"&&typeof AsyncContext.Snapshot=="function"?a=>a&&AsyncContext.Snapshot.wrap(a):a=>a;function y(a){const h=a.length;if(h>0){const d=Array(h);for(let m=0;m<h;m++)d[m]=a[m];return d}return[]}function T(a,h){for(let m=1;m<arguments.length;m++){const S=arguments[m];var d=typeof S;if(d=d!="object"?d:S?Array.isArray(S)?"array":d:"null",d=="array"||d=="object"&&typeof S.length=="number"){d=a.length||0;const D=S.length||0;a.length=d+D;for(let W=0;W<D;W++)a[d+W]=S[W]}else a.push(S)}}class R{constructor(h,d){this.i=h,this.j=d,this.h=0,this.g=null}get(){let h;return this.h>0?(this.h--,h=this.g,this.g=h.next,h.next=null):h=this.i(),h}}function F(a){o.setTimeout(()=>{throw a},0)}function $(){var a=w;let h=null;return a.g&&(h=a.g,a.g=a.g.next,a.g||(a.h=null),h.next=null),h}class N{constructor(){this.h=this.g=null}add(h,d){const m=z.get();m.set(h,d),this.h?this.h.next=m:this.g=m,this.h=m}}var z=new R(()=>new V,a=>a.reset());class V{constructor(){this.next=this.g=this.h=null}set(h,d){this.h=h,this.g=d,this.next=null}reset(){this.next=this.g=this.h=null}}let K,Y=!1,w=new N,_=()=>{const a=Promise.resolve(void 0);K=()=>{a.then(v)}};function v(){for(var a;a=$();){try{a.h.call(a.g)}catch(d){F(d)}var h=z;h.j(a),h.h<100&&(h.h++,a.next=h.g,h.g=a)}Y=!1}function A(){this.u=this.u,this.C=this.C}A.prototype.u=!1,A.prototype.dispose=function(){this.u||(this.u=!0,this.N())},A.prototype[Symbol.dispose]=function(){this.dispose()},A.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function I(a,h){this.type=a,this.g=this.target=h,this.defaultPrevented=!1}I.prototype.h=function(){this.defaultPrevented=!0};var k=function(){if(!o.addEventListener||!Object.defineProperty)return!1;var a=!1,h=Object.defineProperty({},"passive",{get:function(){a=!0}});try{const d=()=>{};o.addEventListener("test",d,h),o.removeEventListener("test",d,h)}catch{}return a}();function E(a){return/^[\s\xa0]*$/.test(a)}function Me(a,h){I.call(this,a?a.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,a&&this.init(a,h)}p(Me,I),Me.prototype.init=function(a,h){const d=this.type=a.type,m=a.changedTouches&&a.changedTouches.length?a.changedTouches[0]:null;this.target=a.target||a.srcElement,this.g=h,h=a.relatedTarget,h||(d=="mouseover"?h=a.fromElement:d=="mouseout"&&(h=a.toElement)),this.relatedTarget=h,m?(this.clientX=m.clientX!==void 0?m.clientX:m.pageX,this.clientY=m.clientY!==void 0?m.clientY:m.pageY,this.screenX=m.screenX||0,this.screenY=m.screenY||0):(this.clientX=a.clientX!==void 0?a.clientX:a.pageX,this.clientY=a.clientY!==void 0?a.clientY:a.pageY,this.screenX=a.screenX||0,this.screenY=a.screenY||0),this.button=a.button,this.key=a.key||"",this.ctrlKey=a.ctrlKey,this.altKey=a.altKey,this.shiftKey=a.shiftKey,this.metaKey=a.metaKey,this.pointerId=a.pointerId||0,this.pointerType=a.pointerType,this.state=a.state,this.i=a,a.defaultPrevented&&Me.Z.h.call(this)},Me.prototype.h=function(){Me.Z.h.call(this);const a=this.i;a.preventDefault?a.preventDefault():a.returnValue=!1};var Ze="closure_listenable_"+(Math.random()*1e6|0),je=0;function De(a,h,d,m,S){this.listener=a,this.proxy=null,this.src=h,this.type=d,this.capture=!!m,this.ha=S,this.key=++je,this.da=this.fa=!1}function _e(a){a.da=!0,a.listener=null,a.proxy=null,a.src=null,a.ha=null}function Dt(a,h,d){for(const m in a)h.call(d,a[m],m,a)}function Zr(a,h){for(const d in a)h.call(void 0,a[d],d,a)}function Jt(a){const h={};for(const d in a)h[d]=a[d];return h}const wt="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function js(a,h){let d,m;for(let S=1;S<arguments.length;S++){m=arguments[S];for(d in m)a[d]=m[d];for(let D=0;D<wt.length;D++)d=wt[D],Object.prototype.hasOwnProperty.call(m,d)&&(a[d]=m[d])}}function es(a){this.src=a,this.g={},this.h=0}es.prototype.add=function(a,h,d,m,S){const D=a.toString();a=this.g[D],a||(a=this.g[D]=[],this.h++);const W=wn(a,h,m,S);return W>-1?(h=a[W],d||(h.fa=!1)):(h=new De(h,this.src,D,!!m,S),h.fa=d,a.push(h)),h};function zs(a,h){const d=h.type;if(d in a.g){var m=a.g[d],S=Array.prototype.indexOf.call(m,h,void 0),D;(D=S>=0)&&Array.prototype.splice.call(m,S,1),D&&(_e(h),a.g[d].length==0&&(delete a.g[d],a.h--))}}function wn(a,h,d,m){for(let S=0;S<a.length;++S){const D=a[S];if(!D.da&&D.listener==h&&D.capture==!!d&&D.ha==m)return S}return-1}var qn="closure_lm_"+(Math.random()*1e6|0),vr={};function Hs(a,h,d,m,S){if(Array.isArray(h)){for(let D=0;D<h.length;D++)Hs(a,h[D],d,m,S);return null}return d=G(d),a&&a[Ze]?a.J(h,d,u(m)?!!m.capture:!1,S):wr(a,h,d,!1,m,S)}function wr(a,h,d,m,S,D){if(!h)throw Error("Invalid event type");const W=u(S)?!!S.capture:!!S;let ce=M(a);if(ce||(a[qn]=ce=new es(a)),d=ce.add(h,d,m,W,D),d.proxy)return d;if(m=gh(),d.proxy=m,m.src=a,m.listener=d,a.addEventListener)k||(S=W),S===void 0&&(S=!1),a.addEventListener(h.toString(),m,S);else if(a.attachEvent)a.attachEvent(P(h.toString()),m);else if(a.addListener&&a.removeListener)a.addListener(m);else throw Error("addEventListener and attachEvent are unavailable.");return d}function gh(){function a(d){return h.call(a.src,a.listener,d)}const h=q;return a}function b(a,h,d,m,S){if(Array.isArray(h))for(var D=0;D<h.length;D++)b(a,h[D],d,m,S);else m=u(m)?!!m.capture:!!m,d=G(d),a&&a[Ze]?(a=a.i,D=String(h).toString(),D in a.g&&(h=a.g[D],d=wn(h,d,m,S),d>-1&&(_e(h[d]),Array.prototype.splice.call(h,d,1),h.length==0&&(delete a.g[D],a.h--)))):a&&(a=M(a))&&(h=a.g[h.toString()],a=-1,h&&(a=wn(h,d,m,S)),(d=a>-1?h[a]:null)&&C(d))}function C(a){if(typeof a!="number"&&a&&!a.da){var h=a.src;if(h&&h[Ze])zs(h.i,a);else{var d=a.type,m=a.proxy;h.removeEventListener?h.removeEventListener(d,m,a.capture):h.detachEvent?h.detachEvent(P(d),m):h.addListener&&h.removeListener&&h.removeListener(m),(d=M(h))?(zs(d,a),d.h==0&&(d.src=null,h[qn]=null)):_e(a)}}}function P(a){return a in vr?vr[a]:vr[a]="on"+a}function q(a,h){if(a.da)a=!0;else{h=new Me(h,this);const d=a.listener,m=a.ha||a.src;a.fa&&C(a),a=d.call(m,h)}return a}function M(a){return a=a[qn],a instanceof es?a:null}var B="__closure_events_fn_"+(Math.random()*1e9>>>0);function G(a){return typeof a=="function"?a:(a[B]||(a[B]=function(h){return a.handleEvent(h)}),a[B])}function H(){A.call(this),this.i=new es(this),this.M=this,this.G=null}p(H,A),H.prototype[Ze]=!0,H.prototype.removeEventListener=function(a,h,d,m){b(this,a,h,d,m)};function j(a,h){var d,m=a.G;if(m)for(d=[];m;m=m.G)d.push(m);if(a=a.M,m=h.type||h,typeof h=="string")h=new I(h,a);else if(h instanceof I)h.target=h.target||a;else{var S=h;h=new I(m,a),js(h,S)}S=!0;let D,W;if(d)for(W=d.length-1;W>=0;W--)D=h.g=d[W],S=L(D,m,!0,h)&&S;if(D=h.g=a,S=L(D,m,!0,h)&&S,S=L(D,m,!1,h)&&S,d)for(W=0;W<d.length;W++)D=h.g=d[W],S=L(D,m,!1,h)&&S}H.prototype.N=function(){if(H.Z.N.call(this),this.i){var a=this.i;for(const h in a.g){const d=a.g[h];for(let m=0;m<d.length;m++)_e(d[m]);delete a.g[h],a.h--}}this.G=null},H.prototype.J=function(a,h,d,m){return this.i.add(String(a),h,!1,d,m)},H.prototype.K=function(a,h,d,m){return this.i.add(String(a),h,!0,d,m)};function L(a,h,d,m){if(h=a.i.g[String(h)],!h)return!0;h=h.concat();let S=!0;for(let D=0;D<h.length;++D){const W=h[D];if(W&&!W.da&&W.capture==d){const ce=W.listener,He=W.ha||W.src;W.fa&&zs(a.i,W),S=ce.call(He,m)!==!1&&S}}return S&&!m.defaultPrevented}function te(a,h){if(typeof a!="function")if(a&&typeof a.handleEvent=="function")a=l(a.handleEvent,a);else throw Error("Invalid listener argument");return Number(h)>2147483647?-1:o.setTimeout(a,h||0)}function Q(a){a.g=te(()=>{a.g=null,a.i&&(a.i=!1,Q(a))},a.l);const h=a.h;a.h=null,a.m.apply(null,h)}class Z extends A{constructor(h,d){super(),this.m=h,this.l=d,this.h=null,this.i=!1,this.g=null}j(h){this.h=arguments,this.g?this.i=!0:Q(this)}N(){super.N(),this.g&&(o.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function ne(a){A.call(this),this.h=a,this.g={}}p(ne,A);var me=[];function ye(a){Dt(a.g,function(h,d){this.g.hasOwnProperty(d)&&C(h)},a),a.g={}}ne.prototype.N=function(){ne.Z.N.call(this),ye(this)},ne.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var be=o.JSON.stringify,Oe=o.JSON.parse,ze=class{stringify(a){return o.JSON.stringify(a,void 0)}parse(a){return o.JSON.parse(a,void 0)}};function Tt(){}function It(){}var Ut={OPEN:"a",hb:"b",ERROR:"c",tb:"d"};function ts(){I.call(this,"d")}p(ts,I);function et(){I.call(this,"c")}p(et,I);var Ge={},$s=null;function Tr(){return $s=$s||new H}Ge.Ia="serverreachability";function _h(a){I.call(this,Ge.Ia,a)}p(_h,I);function Ws(a){const h=Tr();j(h,new _h(h))}Ge.STAT_EVENT="statevent";function yh(a,h){I.call(this,Ge.STAT_EVENT,a),this.stat=h}p(yh,I);function ft(a){const h=Tr();j(h,new yh(h,a))}Ge.Ja="timingevent";function bh(a,h){I.call(this,Ge.Ja,a),this.size=h}p(bh,I);function Ks(a,h){if(typeof a!="function")throw Error("Fn must not be null and must be a function");return o.setTimeout(function(){a()},h)}function Gs(){this.g=!0}Gs.prototype.ua=function(){this.g=!1};function l_(a,h,d,m,S,D){a.info(function(){if(a.g)if(D){var W="",ce=D.split("&");for(let Ae=0;Ae<ce.length;Ae++){var He=ce[Ae].split("=");if(He.length>1){const Qe=He[0];He=He[1];const Xt=Qe.split("_");W=Xt.length>=2&&Xt[1]=="type"?W+(Qe+"="+He+"&"):W+(Qe+"=redacted&")}}}else W=null;else W=D;return"XMLHTTP REQ ("+m+") [attempt "+S+"]: "+h+`
`+d+`
`+W})}function h_(a,h,d,m,S,D,W){a.info(function(){return"XMLHTTP RESP ("+m+") [ attempt "+S+"]: "+h+`
`+d+`
`+D+" "+W})}function ns(a,h,d,m){a.info(function(){return"XMLHTTP TEXT ("+h+"): "+d_(a,d)+(m?" "+m:"")})}function f_(a,h){a.info(function(){return"TIMEOUT: "+h})}Gs.prototype.info=function(){};function d_(a,h){if(!a.g)return h;if(!h)return null;try{const D=JSON.parse(h);if(D){for(a=0;a<D.length;a++)if(Array.isArray(D[a])){var d=D[a];if(!(d.length<2)){var m=d[1];if(Array.isArray(m)&&!(m.length<1)){var S=m[0];if(S!="noop"&&S!="stop"&&S!="close")for(let W=1;W<m.length;W++)m[W]=""}}}}return be(D)}catch{return h}}var go={NO_ERROR:0,cb:1,qb:2,pb:3,kb:4,ob:5,rb:6,Ga:7,TIMEOUT:8,ub:9},Eh={ib:"complete",Fb:"success",ERROR:"error",Ga:"abort",xb:"ready",yb:"readystatechange",TIMEOUT:"timeout",sb:"incrementaldata",wb:"progress",lb:"downloadprogress",Nb:"uploadprogress"},vh;function da(){}p(da,Tt),da.prototype.g=function(){return new XMLHttpRequest},vh=new da;function Qs(a){return encodeURIComponent(String(a))}function p_(a){var h=1;a=a.split(":");const d=[];for(;h>0&&a.length;)d.push(a.shift()),h--;return a.length&&d.push(a.join(":")),d}function jn(a,h,d,m){this.j=a,this.i=h,this.l=d,this.S=m||1,this.V=new ne(this),this.H=45e3,this.J=null,this.o=!1,this.u=this.B=this.A=this.M=this.F=this.T=this.D=null,this.G=[],this.g=null,this.C=0,this.m=this.v=null,this.X=-1,this.K=!1,this.P=0,this.O=null,this.W=this.L=this.U=this.R=!1,this.h=new wh}function wh(){this.i=null,this.g="",this.h=!1}var Th={},pa={};function ma(a,h,d){a.M=1,a.A=yo(Yt(h)),a.u=d,a.R=!0,Ih(a,null)}function Ih(a,h){a.F=Date.now(),_o(a),a.B=Yt(a.A);var d=a.B,m=a.S;Array.isArray(m)||(m=[String(m)]),Mh(d.i,"t",m),a.C=0,d=a.j.L,a.h=new wh,a.g=tf(a.j,d?h:null,!a.u),a.P>0&&(a.O=new Z(l(a.Y,a,a.g),a.P)),h=a.V,d=a.g,m=a.ba;var S="readystatechange";Array.isArray(S)||(S&&(me[0]=S.toString()),S=me);for(let D=0;D<S.length;D++){const W=Hs(d,S[D],m||h.handleEvent,!1,h.h||h);if(!W)break;h.g[W.key]=W}h=a.J?Jt(a.J):{},a.u?(a.v||(a.v="POST"),h["Content-Type"]="application/x-www-form-urlencoded",a.g.ea(a.B,a.v,a.u,h)):(a.v="GET",a.g.ea(a.B,a.v,null,h)),Ws(),l_(a.i,a.v,a.B,a.l,a.S,a.u)}jn.prototype.ba=function(a){a=a.target;const h=this.O;h&&$n(a)==3?h.j():this.Y(a)},jn.prototype.Y=function(a){try{if(a==this.g)e:{const ce=$n(this.g),He=this.g.ya(),Ae=this.g.ca();if(!(ce<3)&&(ce!=3||this.g&&(this.h.h||this.g.la()||Hh(this.g)))){this.K||ce!=4||He==7||(He==8||Ae<=0?Ws(3):Ws(2)),ga(this);var h=this.g.ca();this.X=h;var d=m_(this);if(this.o=h==200,h_(this.i,this.v,this.B,this.l,this.S,ce,h),this.o){if(this.U&&!this.L){t:{if(this.g){var m,S=this.g;if((m=S.g?S.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!E(m)){var D=m;break t}}D=null}if(a=D)ns(this.i,this.l,a,"Initial handshake response via X-HTTP-Initial-Response"),this.L=!0,_a(this,a);else{this.o=!1,this.m=3,ft(12),Ir(this),Js(this);break e}}if(this.R){a=!0;let Qe;for(;!this.K&&this.C<d.length;)if(Qe=g_(this,d),Qe==pa){ce==4&&(this.m=4,ft(14),a=!1),ns(this.i,this.l,null,"[Incomplete Response]");break}else if(Qe==Th){this.m=4,ft(15),ns(this.i,this.l,d,"[Invalid Chunk]"),a=!1;break}else ns(this.i,this.l,Qe,null),_a(this,Qe);if(Ah(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),ce!=4||d.length!=0||this.h.h||(this.m=1,ft(16),a=!1),this.o=this.o&&a,!a)ns(this.i,this.l,d,"[Invalid Chunked Response]"),Ir(this),Js(this);else if(d.length>0&&!this.W){this.W=!0;var W=this.j;W.g==this&&W.aa&&!W.P&&(W.j.info("Great, no buffering proxy detected. Bytes received: "+d.length),Aa(W),W.P=!0,ft(11))}}else ns(this.i,this.l,d,null),_a(this,d);ce==4&&Ir(this),this.o&&!this.K&&(ce==4?Yh(this.j,this):(this.o=!1,_o(this)))}else D_(this.g),h==400&&d.indexOf("Unknown SID")>0?(this.m=3,ft(12)):(this.m=0,ft(13)),Ir(this),Js(this)}}}catch{}finally{}};function m_(a){if(!Ah(a))return a.g.la();const h=Hh(a.g);if(h==="")return"";let d="";const m=h.length,S=$n(a.g)==4;if(!a.h.i){if(typeof TextDecoder>"u")return Ir(a),Js(a),"";a.h.i=new o.TextDecoder}for(let D=0;D<m;D++)a.h.h=!0,d+=a.h.i.decode(h[D],{stream:!(S&&D==m-1)});return h.length=0,a.h.g+=d,a.C=0,a.h.g}function Ah(a){return a.g?a.v=="GET"&&a.M!=2&&a.j.Aa:!1}function g_(a,h){var d=a.C,m=h.indexOf(`
`,d);return m==-1?pa:(d=Number(h.substring(d,m)),isNaN(d)?Th:(m+=1,m+d>h.length?pa:(h=h.slice(m,m+d),a.C=m+d,h)))}jn.prototype.cancel=function(){this.K=!0,Ir(this)};function _o(a){a.T=Date.now()+a.H,Ch(a,a.H)}function Ch(a,h){if(a.D!=null)throw Error("WatchDog timer not null");a.D=Ks(l(a.aa,a),h)}function ga(a){a.D&&(o.clearTimeout(a.D),a.D=null)}jn.prototype.aa=function(){this.D=null;const a=Date.now();a-this.T>=0?(f_(this.i,this.B),this.M!=2&&(Ws(),ft(17)),Ir(this),this.m=2,Js(this)):Ch(this,this.T-a)};function Js(a){a.j.I==0||a.K||Yh(a.j,a)}function Ir(a){ga(a);var h=a.O;h&&typeof h.dispose=="function"&&h.dispose(),a.O=null,ye(a.V),a.g&&(h=a.g,a.g=null,h.abort(),h.dispose())}function _a(a,h){try{var d=a.j;if(d.I!=0&&(d.g==a||ya(d.h,a))){if(!a.L&&ya(d.h,a)&&d.I==3){try{var m=d.Ba.g.parse(h)}catch{m=null}if(Array.isArray(m)&&m.length==3){var S=m;if(S[0]==0){e:if(!d.v){if(d.g)if(d.g.F+3e3<a.F)To(d),vo(d);else break e;Ia(d),ft(18)}}else d.xa=S[1],0<d.xa-d.K&&S[2]<37500&&d.F&&d.A==0&&!d.C&&(d.C=Ks(l(d.Va,d),6e3));Sh(d.h)<=1&&d.ta&&(d.ta=void 0)}else Cr(d,11)}else if((a.L||d.g==a)&&To(d),!E(h))for(S=d.Ba.g.parse(h),h=0;h<S.length;h++){let Ae=S[h];const Qe=Ae[0];if(!(Qe<=d.K))if(d.K=Qe,Ae=Ae[1],d.I==2)if(Ae[0]=="c"){d.M=Ae[1],d.ba=Ae[2];const Xt=Ae[3];Xt!=null&&(d.ka=Xt,d.j.info("VER="+d.ka));const xr=Ae[4];xr!=null&&(d.za=xr,d.j.info("SVER="+d.za));const Wn=Ae[5];Wn!=null&&typeof Wn=="number"&&Wn>0&&(m=1.5*Wn,d.O=m,d.j.info("backChannelRequestTimeoutMs_="+m)),m=d;const Kn=a.g;if(Kn){const Ao=Kn.g?Kn.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(Ao){var D=m.h;D.g||Ao.indexOf("spdy")==-1&&Ao.indexOf("quic")==-1&&Ao.indexOf("h2")==-1||(D.j=D.l,D.g=new Set,D.h&&(ba(D,D.h),D.h=null))}if(m.G){const Ca=Kn.g?Kn.g.getResponseHeader("X-HTTP-Session-Id"):null;Ca&&(m.wa=Ca,Re(m.J,m.G,Ca))}}d.I=3,d.l&&d.l.ra(),d.aa&&(d.T=Date.now()-a.F,d.j.info("Handshake RTT: "+d.T+"ms")),m=d;var W=a;if(m.na=ef(m,m.L?m.ba:null,m.W),W.L){Dh(m.h,W);var ce=W,He=m.O;He&&(ce.H=He),ce.D&&(ga(ce),_o(ce)),m.g=W}else Qh(m);d.i.length>0&&wo(d)}else Ae[0]!="stop"&&Ae[0]!="close"||Cr(d,7);else d.I==3&&(Ae[0]=="stop"||Ae[0]=="close"?Ae[0]=="stop"?Cr(d,7):Ta(d):Ae[0]!="noop"&&d.l&&d.l.qa(Ae),d.A=0)}}Ws(4)}catch{}}var __=class{constructor(a,h){this.g=a,this.map=h}};function xh(a){this.l=a||10,o.PerformanceNavigationTiming?(a=o.performance.getEntriesByType("navigation"),a=a.length>0&&(a[0].nextHopProtocol=="hq"||a[0].nextHopProtocol=="h2")):a=!!(o.chrome&&o.chrome.loadTimes&&o.chrome.loadTimes()&&o.chrome.loadTimes().wasFetchedViaSpdy),this.j=a?this.l:1,this.g=null,this.j>1&&(this.g=new Set),this.h=null,this.i=[]}function kh(a){return a.h?!0:a.g?a.g.size>=a.j:!1}function Sh(a){return a.h?1:a.g?a.g.size:0}function ya(a,h){return a.h?a.h==h:a.g?a.g.has(h):!1}function ba(a,h){a.g?a.g.add(h):a.h=h}function Dh(a,h){a.h&&a.h==h?a.h=null:a.g&&a.g.has(h)&&a.g.delete(h)}xh.prototype.cancel=function(){if(this.i=Rh(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const a of this.g.values())a.cancel();this.g.clear()}};function Rh(a){if(a.h!=null)return a.i.concat(a.h.G);if(a.g!=null&&a.g.size!==0){let h=a.i;for(const d of a.g.values())h=h.concat(d.G);return h}return y(a.i)}var Ph=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function y_(a,h){if(a){a=a.split("&");for(let d=0;d<a.length;d++){const m=a[d].indexOf("=");let S,D=null;m>=0?(S=a[d].substring(0,m),D=a[d].substring(m+1)):S=a[d],h(S,D?decodeURIComponent(D.replace(/\+/g," ")):"")}}}function zn(a){this.g=this.o=this.j="",this.u=null,this.m=this.h="",this.l=!1;let h;a instanceof zn?(this.l=a.l,Ys(this,a.j),this.o=a.o,this.g=a.g,Xs(this,a.u),this.h=a.h,Ea(this,Lh(a.i)),this.m=a.m):a&&(h=String(a).match(Ph))?(this.l=!1,Ys(this,h[1]||"",!0),this.o=Zs(h[2]||""),this.g=Zs(h[3]||"",!0),Xs(this,h[4]),this.h=Zs(h[5]||"",!0),Ea(this,h[6]||"",!0),this.m=Zs(h[7]||"")):(this.l=!1,this.i=new ti(null,this.l))}zn.prototype.toString=function(){const a=[];var h=this.j;h&&a.push(ei(h,Fh,!0),":");var d=this.g;return(d||h=="file")&&(a.push("//"),(h=this.o)&&a.push(ei(h,Fh,!0),"@"),a.push(Qs(d).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),d=this.u,d!=null&&a.push(":",String(d))),(d=this.h)&&(this.g&&d.charAt(0)!="/"&&a.push("/"),a.push(ei(d,d.charAt(0)=="/"?v_:E_,!0))),(d=this.i.toString())&&a.push("?",d),(d=this.m)&&a.push("#",ei(d,T_)),a.join("")},zn.prototype.resolve=function(a){const h=Yt(this);let d=!!a.j;d?Ys(h,a.j):d=!!a.o,d?h.o=a.o:d=!!a.g,d?h.g=a.g:d=a.u!=null;var m=a.h;if(d)Xs(h,a.u);else if(d=!!a.h){if(m.charAt(0)!="/")if(this.g&&!this.h)m="/"+m;else{var S=h.h.lastIndexOf("/");S!=-1&&(m=h.h.slice(0,S+1)+m)}if(S=m,S==".."||S==".")m="";else if(S.indexOf("./")!=-1||S.indexOf("/.")!=-1){m=S.lastIndexOf("/",0)==0,S=S.split("/");const D=[];for(let W=0;W<S.length;){const ce=S[W++];ce=="."?m&&W==S.length&&D.push(""):ce==".."?((D.length>1||D.length==1&&D[0]!="")&&D.pop(),m&&W==S.length&&D.push("")):(D.push(ce),m=!0)}m=D.join("/")}else m=S}return d?h.h=m:d=a.i.toString()!=="",d?Ea(h,Lh(a.i)):d=!!a.m,d&&(h.m=a.m),h};function Yt(a){return new zn(a)}function Ys(a,h,d){a.j=d?Zs(h,!0):h,a.j&&(a.j=a.j.replace(/:$/,""))}function Xs(a,h){if(h){if(h=Number(h),isNaN(h)||h<0)throw Error("Bad port number "+h);a.u=h}else a.u=null}function Ea(a,h,d){h instanceof ti?(a.i=h,I_(a.i,a.l)):(d||(h=ei(h,w_)),a.i=new ti(h,a.l))}function Re(a,h,d){a.i.set(h,d)}function yo(a){return Re(a,"zx",Math.floor(Math.random()*2147483648).toString(36)+Math.abs(Math.floor(Math.random()*2147483648)^Date.now()).toString(36)),a}function Zs(a,h){return a?h?decodeURI(a.replace(/%25/g,"%2525")):decodeURIComponent(a):""}function ei(a,h,d){return typeof a=="string"?(a=encodeURI(a).replace(h,b_),d&&(a=a.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),a):null}function b_(a){return a=a.charCodeAt(0),"%"+(a>>4&15).toString(16)+(a&15).toString(16)}var Fh=/[#\/\?@]/g,E_=/[#\?:]/g,v_=/[#\?]/g,w_=/[#\?@]/g,T_=/#/g;function ti(a,h){this.h=this.g=null,this.i=a||null,this.j=!!h}function Ar(a){a.g||(a.g=new Map,a.h=0,a.i&&y_(a.i,function(h,d){a.add(decodeURIComponent(h.replace(/\+/g," ")),d)}))}t=ti.prototype,t.add=function(a,h){Ar(this),this.i=null,a=rs(this,a);let d=this.g.get(a);return d||this.g.set(a,d=[]),d.push(h),this.h+=1,this};function Nh(a,h){Ar(a),h=rs(a,h),a.g.has(h)&&(a.i=null,a.h-=a.g.get(h).length,a.g.delete(h))}function Oh(a,h){return Ar(a),h=rs(a,h),a.g.has(h)}t.forEach=function(a,h){Ar(this),this.g.forEach(function(d,m){d.forEach(function(S){a.call(h,S,m,this)},this)},this)};function Vh(a,h){Ar(a);let d=[];if(typeof h=="string")Oh(a,h)&&(d=d.concat(a.g.get(rs(a,h))));else for(a=Array.from(a.g.values()),h=0;h<a.length;h++)d=d.concat(a[h]);return d}t.set=function(a,h){return Ar(this),this.i=null,a=rs(this,a),Oh(this,a)&&(this.h-=this.g.get(a).length),this.g.set(a,[h]),this.h+=1,this},t.get=function(a,h){return a?(a=Vh(this,a),a.length>0?String(a[0]):h):h};function Mh(a,h,d){Nh(a,h),d.length>0&&(a.i=null,a.g.set(rs(a,h),y(d)),a.h+=d.length)}t.toString=function(){if(this.i)return this.i;if(!this.g)return"";const a=[],h=Array.from(this.g.keys());for(let m=0;m<h.length;m++){var d=h[m];const S=Qs(d);d=Vh(this,d);for(let D=0;D<d.length;D++){let W=S;d[D]!==""&&(W+="="+Qs(d[D])),a.push(W)}}return this.i=a.join("&")};function Lh(a){const h=new ti;return h.i=a.i,a.g&&(h.g=new Map(a.g),h.h=a.h),h}function rs(a,h){return h=String(h),a.j&&(h=h.toLowerCase()),h}function I_(a,h){h&&!a.j&&(Ar(a),a.i=null,a.g.forEach(function(d,m){const S=m.toLowerCase();m!=S&&(Nh(this,m),Mh(this,S,d))},a)),a.j=h}function A_(a,h){const d=new Gs;if(o.Image){const m=new Image;m.onload=f(Hn,d,"TestLoadImage: loaded",!0,h,m),m.onerror=f(Hn,d,"TestLoadImage: error",!1,h,m),m.onabort=f(Hn,d,"TestLoadImage: abort",!1,h,m),m.ontimeout=f(Hn,d,"TestLoadImage: timeout",!1,h,m),o.setTimeout(function(){m.ontimeout&&m.ontimeout()},1e4),m.src=a}else h(!1)}function C_(a,h){const d=new Gs,m=new AbortController,S=setTimeout(()=>{m.abort(),Hn(d,"TestPingServer: timeout",!1,h)},1e4);fetch(a,{signal:m.signal}).then(D=>{clearTimeout(S),D.ok?Hn(d,"TestPingServer: ok",!0,h):Hn(d,"TestPingServer: server error",!1,h)}).catch(()=>{clearTimeout(S),Hn(d,"TestPingServer: error",!1,h)})}function Hn(a,h,d,m,S){try{S&&(S.onload=null,S.onerror=null,S.onabort=null,S.ontimeout=null),m(d)}catch{}}function x_(){this.g=new ze}function va(a){this.i=a.Sb||null,this.h=a.ab||!1}p(va,Tt),va.prototype.g=function(){return new bo(this.i,this.h)};function bo(a,h){H.call(this),this.H=a,this.o=h,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.A=new Headers,this.h=null,this.F="GET",this.D="",this.g=!1,this.B=this.j=this.l=null,this.v=new AbortController}p(bo,H),t=bo.prototype,t.open=function(a,h){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.F=a,this.D=h,this.readyState=1,ri(this)},t.send=function(a){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");if(this.v.signal.aborted)throw this.abort(),Error("Request was aborted.");this.g=!0;const h={headers:this.A,method:this.F,credentials:this.m,cache:void 0,signal:this.v.signal};a&&(h.body=a),(this.H||o).fetch(new Request(this.D,h)).then(this.Pa.bind(this),this.ga.bind(this))},t.abort=function(){this.response=this.responseText="",this.A=new Headers,this.status=0,this.v.abort(),this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),this.readyState>=1&&this.g&&this.readyState!=4&&(this.g=!1,ni(this)),this.readyState=0},t.Pa=function(a){if(this.g&&(this.l=a,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=a.headers,this.readyState=2,ri(this)),this.g&&(this.readyState=3,ri(this),this.g)))if(this.responseType==="arraybuffer")a.arrayBuffer().then(this.Na.bind(this),this.ga.bind(this));else if(typeof o.ReadableStream<"u"&&"body"in a){if(this.j=a.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.B=new TextDecoder;Uh(this)}else a.text().then(this.Oa.bind(this),this.ga.bind(this))};function Uh(a){a.j.read().then(a.Ma.bind(a)).catch(a.ga.bind(a))}t.Ma=function(a){if(this.g){if(this.o&&a.value)this.response.push(a.value);else if(!this.o){var h=a.value?a.value:new Uint8Array(0);(h=this.B.decode(h,{stream:!a.done}))&&(this.response=this.responseText+=h)}a.done?ni(this):ri(this),this.readyState==3&&Uh(this)}},t.Oa=function(a){this.g&&(this.response=this.responseText=a,ni(this))},t.Na=function(a){this.g&&(this.response=a,ni(this))},t.ga=function(){this.g&&ni(this)};function ni(a){a.readyState=4,a.l=null,a.j=null,a.B=null,ri(a)}t.setRequestHeader=function(a,h){this.A.append(a,h)},t.getResponseHeader=function(a){return this.h&&this.h.get(a.toLowerCase())||""},t.getAllResponseHeaders=function(){if(!this.h)return"";const a=[],h=this.h.entries();for(var d=h.next();!d.done;)d=d.value,a.push(d[0]+": "+d[1]),d=h.next();return a.join(`\r
`)};function ri(a){a.onreadystatechange&&a.onreadystatechange.call(a)}Object.defineProperty(bo.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(a){this.m=a?"include":"same-origin"}});function Bh(a){let h="";return Dt(a,function(d,m){h+=m,h+=":",h+=d,h+=`\r
`}),h}function wa(a,h,d){e:{for(m in d){var m=!1;break e}m=!0}m||(d=Bh(d),typeof a=="string"?d!=null&&Qs(d):Re(a,h,d))}function Ve(a){H.call(this),this.headers=new Map,this.L=a||null,this.h=!1,this.g=null,this.D="",this.o=0,this.l="",this.j=this.B=this.v=this.A=!1,this.m=null,this.F="",this.H=!1}p(Ve,H);var k_=/^https?$/i,S_=["POST","PUT"];t=Ve.prototype,t.Fa=function(a){this.H=a},t.ea=function(a,h,d,m){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+a);h=h?h.toUpperCase():"GET",this.D=a,this.l="",this.o=0,this.A=!1,this.h=!0,this.g=this.L?this.L.g():vh.g(),this.g.onreadystatechange=g(l(this.Ca,this));try{this.B=!0,this.g.open(h,String(a),!0),this.B=!1}catch(D){qh(this,D);return}if(a=d||"",d=new Map(this.headers),m)if(Object.getPrototypeOf(m)===Object.prototype)for(var S in m)d.set(S,m[S]);else if(typeof m.keys=="function"&&typeof m.get=="function")for(const D of m.keys())d.set(D,m.get(D));else throw Error("Unknown input type for opt_headers: "+String(m));m=Array.from(d.keys()).find(D=>D.toLowerCase()=="content-type"),S=o.FormData&&a instanceof o.FormData,!(Array.prototype.indexOf.call(S_,h,void 0)>=0)||m||S||d.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[D,W]of d)this.g.setRequestHeader(D,W);this.F&&(this.g.responseType=this.F),"withCredentials"in this.g&&this.g.withCredentials!==this.H&&(this.g.withCredentials=this.H);try{this.m&&(clearTimeout(this.m),this.m=null),this.v=!0,this.g.send(a),this.v=!1}catch(D){qh(this,D)}};function qh(a,h){a.h=!1,a.g&&(a.j=!0,a.g.abort(),a.j=!1),a.l=h,a.o=5,jh(a),Eo(a)}function jh(a){a.A||(a.A=!0,j(a,"complete"),j(a,"error"))}t.abort=function(a){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.o=a||7,j(this,"complete"),j(this,"abort"),Eo(this))},t.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),Eo(this,!0)),Ve.Z.N.call(this)},t.Ca=function(){this.u||(this.B||this.v||this.j?zh(this):this.Xa())},t.Xa=function(){zh(this)};function zh(a){if(a.h&&typeof i<"u"){if(a.v&&$n(a)==4)setTimeout(a.Ca.bind(a),0);else if(j(a,"readystatechange"),$n(a)==4){a.h=!1;try{const D=a.ca();e:switch(D){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var h=!0;break e;default:h=!1}var d;if(!(d=h)){var m;if(m=D===0){let W=String(a.D).match(Ph)[1]||null;!W&&o.self&&o.self.location&&(W=o.self.location.protocol.slice(0,-1)),m=!k_.test(W?W.toLowerCase():"")}d=m}if(d)j(a,"complete"),j(a,"success");else{a.o=6;try{var S=$n(a)>2?a.g.statusText:""}catch{S=""}a.l=S+" ["+a.ca()+"]",jh(a)}}finally{Eo(a)}}}}function Eo(a,h){if(a.g){a.m&&(clearTimeout(a.m),a.m=null);const d=a.g;a.g=null,h||j(a,"ready");try{d.onreadystatechange=null}catch{}}}t.isActive=function(){return!!this.g};function $n(a){return a.g?a.g.readyState:0}t.ca=function(){try{return $n(this)>2?this.g.status:-1}catch{return-1}},t.la=function(){try{return this.g?this.g.responseText:""}catch{return""}},t.La=function(a){if(this.g){var h=this.g.responseText;return a&&h.indexOf(a)==0&&(h=h.substring(a.length)),Oe(h)}};function Hh(a){try{if(!a.g)return null;if("response"in a.g)return a.g.response;switch(a.F){case"":case"text":return a.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in a.g)return a.g.mozResponseArrayBuffer}return null}catch{return null}}function D_(a){const h={};a=(a.g&&$n(a)>=2&&a.g.getAllResponseHeaders()||"").split(`\r
`);for(let m=0;m<a.length;m++){if(E(a[m]))continue;var d=p_(a[m]);const S=d[0];if(d=d[1],typeof d!="string")continue;d=d.trim();const D=h[S]||[];h[S]=D,D.push(d)}Zr(h,function(m){return m.join(", ")})}t.ya=function(){return this.o},t.Ha=function(){return typeof this.l=="string"?this.l:String(this.l)};function si(a,h,d){return d&&d.internalChannelParams&&d.internalChannelParams[a]||h}function $h(a){this.za=0,this.i=[],this.j=new Gs,this.ba=this.na=this.J=this.W=this.g=this.wa=this.G=this.H=this.u=this.U=this.o=null,this.Ya=this.V=0,this.Sa=si("failFast",!1,a),this.F=this.C=this.v=this.m=this.l=null,this.X=!0,this.xa=this.K=-1,this.Y=this.A=this.D=0,this.Qa=si("baseRetryDelayMs",5e3,a),this.Za=si("retryDelaySeedMs",1e4,a),this.Ta=si("forwardChannelMaxRetries",2,a),this.va=si("forwardChannelRequestTimeoutMs",2e4,a),this.ma=a&&a.xmlHttpFactory||void 0,this.Ua=a&&a.Rb||void 0,this.Aa=a&&a.useFetchStreams||!1,this.O=void 0,this.L=a&&a.supportsCrossDomainXhr||!1,this.M="",this.h=new xh(a&&a.concurrentRequestLimit),this.Ba=new x_,this.S=a&&a.fastHandshake||!1,this.R=a&&a.encodeInitMessageHeaders||!1,this.S&&this.R&&(this.R=!1),this.Ra=a&&a.Pb||!1,a&&a.ua&&this.j.ua(),a&&a.forceLongPolling&&(this.X=!1),this.aa=!this.S&&this.X&&a&&a.detectBufferingProxy||!1,this.ia=void 0,a&&a.longPollingTimeout&&a.longPollingTimeout>0&&(this.ia=a.longPollingTimeout),this.ta=void 0,this.T=0,this.P=!1,this.ja=this.B=null}t=$h.prototype,t.ka=8,t.I=1,t.connect=function(a,h,d,m){ft(0),this.W=a,this.H=h||{},d&&m!==void 0&&(this.H.OSID=d,this.H.OAID=m),this.F=this.X,this.J=ef(this,null,this.W),wo(this)};function Ta(a){if(Wh(a),a.I==3){var h=a.V++,d=Yt(a.J);if(Re(d,"SID",a.M),Re(d,"RID",h),Re(d,"TYPE","terminate"),ii(a,d),h=new jn(a,a.j,h),h.M=2,h.A=yo(Yt(d)),d=!1,o.navigator&&o.navigator.sendBeacon)try{d=o.navigator.sendBeacon(h.A.toString(),"")}catch{}!d&&o.Image&&(new Image().src=h.A,d=!0),d||(h.g=tf(h.j,null),h.g.ea(h.A)),h.F=Date.now(),_o(h)}Zh(a)}function vo(a){a.g&&(Aa(a),a.g.cancel(),a.g=null)}function Wh(a){vo(a),a.v&&(o.clearTimeout(a.v),a.v=null),To(a),a.h.cancel(),a.m&&(typeof a.m=="number"&&o.clearTimeout(a.m),a.m=null)}function wo(a){if(!kh(a.h)&&!a.m){a.m=!0;var h=a.Ea;K||_(),Y||(K(),Y=!0),w.add(h,a),a.D=0}}function R_(a,h){return Sh(a.h)>=a.h.j-(a.m?1:0)?!1:a.m?(a.i=h.G.concat(a.i),!0):a.I==1||a.I==2||a.D>=(a.Sa?0:a.Ta)?!1:(a.m=Ks(l(a.Ea,a,h),Xh(a,a.D)),a.D++,!0)}t.Ea=function(a){if(this.m)if(this.m=null,this.I==1){if(!a){this.V=Math.floor(Math.random()*1e5),a=this.V++;const S=new jn(this,this.j,a);let D=this.o;if(this.U&&(D?(D=Jt(D),js(D,this.U)):D=this.U),this.u!==null||this.R||(S.J=D,D=null),this.S)e:{for(var h=0,d=0;d<this.i.length;d++){t:{var m=this.i[d];if("__data__"in m.map&&(m=m.map.__data__,typeof m=="string")){m=m.length;break t}m=void 0}if(m===void 0)break;if(h+=m,h>4096){h=d;break e}if(h===4096||d===this.i.length-1){h=d+1;break e}}h=1e3}else h=1e3;h=Gh(this,S,h),d=Yt(this.J),Re(d,"RID",a),Re(d,"CVER",22),this.G&&Re(d,"X-HTTP-Session-Id",this.G),ii(this,d),D&&(this.R?h="headers="+Qs(Bh(D))+"&"+h:this.u&&wa(d,this.u,D)),ba(this.h,S),this.Ra&&Re(d,"TYPE","init"),this.S?(Re(d,"$req",h),Re(d,"SID","null"),S.U=!0,ma(S,d,null)):ma(S,d,h),this.I=2}}else this.I==3&&(a?Kh(this,a):this.i.length==0||kh(this.h)||Kh(this))};function Kh(a,h){var d;h?d=h.l:d=a.V++;const m=Yt(a.J);Re(m,"SID",a.M),Re(m,"RID",d),Re(m,"AID",a.K),ii(a,m),a.u&&a.o&&wa(m,a.u,a.o),d=new jn(a,a.j,d,a.D+1),a.u===null&&(d.J=a.o),h&&(a.i=h.G.concat(a.i)),h=Gh(a,d,1e3),d.H=Math.round(a.va*.5)+Math.round(a.va*.5*Math.random()),ba(a.h,d),ma(d,m,h)}function ii(a,h){a.H&&Dt(a.H,function(d,m){Re(h,m,d)}),a.l&&Dt({},function(d,m){Re(h,m,d)})}function Gh(a,h,d){d=Math.min(a.i.length,d);const m=a.l?l(a.l.Ka,a.l,a):null;e:{var S=a.i;let ce=-1;for(;;){const He=["count="+d];ce==-1?d>0?(ce=S[0].g,He.push("ofs="+ce)):ce=0:He.push("ofs="+ce);let Ae=!0;for(let Qe=0;Qe<d;Qe++){var D=S[Qe].g;const Xt=S[Qe].map;if(D-=ce,D<0)ce=Math.max(0,S[Qe].g-100),Ae=!1;else try{D="req"+D+"_"||"";try{var W=Xt instanceof Map?Xt:Object.entries(Xt);for(const[xr,Wn]of W){let Kn=Wn;u(Wn)&&(Kn=be(Wn)),He.push(D+xr+"="+encodeURIComponent(Kn))}}catch(xr){throw He.push(D+"type="+encodeURIComponent("_badmap")),xr}}catch{m&&m(Xt)}}if(Ae){W=He.join("&");break e}}W=void 0}return a=a.i.splice(0,d),h.G=a,W}function Qh(a){if(!a.g&&!a.v){a.Y=1;var h=a.Da;K||_(),Y||(K(),Y=!0),w.add(h,a),a.A=0}}function Ia(a){return a.g||a.v||a.A>=3?!1:(a.Y++,a.v=Ks(l(a.Da,a),Xh(a,a.A)),a.A++,!0)}t.Da=function(){if(this.v=null,Jh(this),this.aa&&!(this.P||this.g==null||this.T<=0)){var a=4*this.T;this.j.info("BP detection timer enabled: "+a),this.B=Ks(l(this.Wa,this),a)}},t.Wa=function(){this.B&&(this.B=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.P=!0,ft(10),vo(this),Jh(this))};function Aa(a){a.B!=null&&(o.clearTimeout(a.B),a.B=null)}function Jh(a){a.g=new jn(a,a.j,"rpc",a.Y),a.u===null&&(a.g.J=a.o),a.g.P=0;var h=Yt(a.na);Re(h,"RID","rpc"),Re(h,"SID",a.M),Re(h,"AID",a.K),Re(h,"CI",a.F?"0":"1"),!a.F&&a.ia&&Re(h,"TO",a.ia),Re(h,"TYPE","xmlhttp"),ii(a,h),a.u&&a.o&&wa(h,a.u,a.o),a.O&&(a.g.H=a.O);var d=a.g;a=a.ba,d.M=1,d.A=yo(Yt(h)),d.u=null,d.R=!0,Ih(d,a)}t.Va=function(){this.C!=null&&(this.C=null,vo(this),Ia(this),ft(19))};function To(a){a.C!=null&&(o.clearTimeout(a.C),a.C=null)}function Yh(a,h){var d=null;if(a.g==h){To(a),Aa(a),a.g=null;var m=2}else if(ya(a.h,h))d=h.G,Dh(a.h,h),m=1;else return;if(a.I!=0){if(h.o)if(m==1){d=h.u?h.u.length:0,h=Date.now()-h.F;var S=a.D;m=Tr(),j(m,new bh(m,d)),wo(a)}else Qh(a);else if(S=h.m,S==3||S==0&&h.X>0||!(m==1&&R_(a,h)||m==2&&Ia(a)))switch(d&&d.length>0&&(h=a.h,h.i=h.i.concat(d)),S){case 1:Cr(a,5);break;case 4:Cr(a,10);break;case 3:Cr(a,6);break;default:Cr(a,2)}}}function Xh(a,h){let d=a.Qa+Math.floor(Math.random()*a.Za);return a.isActive()||(d*=2),d*h}function Cr(a,h){if(a.j.info("Error code "+h),h==2){var d=l(a.bb,a),m=a.Ua;const S=!m;m=new zn(m||"//www.google.com/images/cleardot.gif"),o.location&&o.location.protocol=="http"||Ys(m,"https"),yo(m),S?A_(m.toString(),d):C_(m.toString(),d)}else ft(2);a.I=0,a.l&&a.l.pa(h),Zh(a),Wh(a)}t.bb=function(a){a?(this.j.info("Successfully pinged google.com"),ft(2)):(this.j.info("Failed to ping google.com"),ft(1))};function Zh(a){if(a.I=0,a.ja=[],a.l){const h=Rh(a.h);(h.length!=0||a.i.length!=0)&&(T(a.ja,h),T(a.ja,a.i),a.h.i.length=0,y(a.i),a.i.length=0),a.l.oa()}}function ef(a,h,d){var m=d instanceof zn?Yt(d):new zn(d);if(m.g!="")h&&(m.g=h+"."+m.g),Xs(m,m.u);else{var S=o.location;m=S.protocol,h=h?h+"."+S.hostname:S.hostname,S=+S.port;const D=new zn(null);m&&Ys(D,m),h&&(D.g=h),S&&Xs(D,S),d&&(D.h=d),m=D}return d=a.G,h=a.wa,d&&h&&Re(m,d,h),Re(m,"VER",a.ka),ii(a,m),m}function tf(a,h,d){if(h&&!a.L)throw Error("Can't create secondary domain capable XhrIo object.");return h=a.Aa&&!a.ma?new Ve(new va({ab:d})):new Ve(a.ma),h.Fa(a.L),h}t.isActive=function(){return!!this.l&&this.l.isActive(this)};function nf(){}t=nf.prototype,t.ra=function(){},t.qa=function(){},t.pa=function(){},t.oa=function(){},t.isActive=function(){return!0},t.Ka=function(){};function Io(){}Io.prototype.g=function(a,h){return new At(a,h)};function At(a,h){H.call(this),this.g=new $h(h),this.l=a,this.h=h&&h.messageUrlParams||null,a=h&&h.messageHeaders||null,h&&h.clientProtocolHeaderRequired&&(a?a["X-Client-Protocol"]="webchannel":a={"X-Client-Protocol":"webchannel"}),this.g.o=a,a=h&&h.initMessageHeaders||null,h&&h.messageContentType&&(a?a["X-WebChannel-Content-Type"]=h.messageContentType:a={"X-WebChannel-Content-Type":h.messageContentType}),h&&h.sa&&(a?a["X-WebChannel-Client-Profile"]=h.sa:a={"X-WebChannel-Client-Profile":h.sa}),this.g.U=a,(a=h&&h.Qb)&&!E(a)&&(this.g.u=a),this.A=h&&h.supportsCrossDomainXhr||!1,this.v=h&&h.sendRawJson||!1,(h=h&&h.httpSessionIdParam)&&!E(h)&&(this.g.G=h,a=this.h,a!==null&&h in a&&(a=this.h,h in a&&delete a[h])),this.j=new ss(this)}p(At,H),At.prototype.m=function(){this.g.l=this.j,this.A&&(this.g.L=!0),this.g.connect(this.l,this.h||void 0)},At.prototype.close=function(){Ta(this.g)},At.prototype.o=function(a){var h=this.g;if(typeof a=="string"){var d={};d.__data__=a,a=d}else this.v&&(d={},d.__data__=be(a),a=d);h.i.push(new __(h.Ya++,a)),h.I==3&&wo(h)},At.prototype.N=function(){this.g.l=null,delete this.j,Ta(this.g),delete this.g,At.Z.N.call(this)};function rf(a){ts.call(this),a.__headers__&&(this.headers=a.__headers__,this.statusCode=a.__status__,delete a.__headers__,delete a.__status__);var h=a.__sm__;if(h){e:{for(const d in h){a=d;break e}a=void 0}(this.i=a)&&(a=this.i,h=h!==null&&a in h?h[a]:void 0),this.data=h}else this.data=a}p(rf,ts);function sf(){et.call(this),this.status=1}p(sf,et);function ss(a){this.g=a}p(ss,nf),ss.prototype.ra=function(){j(this.g,"a")},ss.prototype.qa=function(a){j(this.g,new rf(a))},ss.prototype.pa=function(a){j(this.g,new sf)},ss.prototype.oa=function(){j(this.g,"b")},Io.prototype.createWebChannel=Io.prototype.g,At.prototype.send=At.prototype.o,At.prototype.open=At.prototype.m,At.prototype.close=At.prototype.close,Lm=function(){return new Io},Mm=function(){return Tr()},Vm=Ge,xc={jb:0,mb:1,nb:2,Hb:3,Mb:4,Jb:5,Kb:6,Ib:7,Gb:8,Lb:9,PROXY:10,NOPROXY:11,Eb:12,Ab:13,Bb:14,zb:15,Cb:16,Db:17,fb:18,eb:19,gb:20},go.NO_ERROR=0,go.TIMEOUT=8,go.HTTP_ERROR=6,zo=go,Eh.COMPLETE="complete",Om=Eh,It.EventType=Ut,Ut.OPEN="a",Ut.CLOSE="b",Ut.ERROR="c",Ut.MESSAGE="d",H.prototype.listen=H.prototype.J,di=It,Ve.prototype.listenOnce=Ve.prototype.K,Ve.prototype.getLastError=Ve.prototype.Ha,Ve.prototype.getLastErrorCode=Ve.prototype.ya,Ve.prototype.getStatus=Ve.prototype.ca,Ve.prototype.getResponseJson=Ve.prototype.La,Ve.prototype.getResponseText=Ve.prototype.la,Ve.prototype.send=Ve.prototype.ea,Ve.prototype.setWithCredentials=Ve.prototype.Fa,Nm=Ve}).apply(typeof Po<"u"?Po:typeof self<"u"?self:typeof window<"u"?window:{});/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class it{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}it.UNAUTHENTICATED=new it(null),it.GOOGLE_CREDENTIALS=new it("google-credentials-uid"),it.FIRST_PARTY=new it("first-party-uid"),it.MOCK_USER=new it("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Ms="12.11.0";function kw(t){Ms=t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Lr=new Gu("@firebase/firestore");function as(){return Lr.logLevel}function J(t,...e){if(Lr.logLevel<=fe.DEBUG){const n=e.map(vl);Lr.debug(`Firestore (${Ms}): ${t}`,...n)}}function Mn(t,...e){if(Lr.logLevel<=fe.ERROR){const n=e.map(vl);Lr.error(`Firestore (${Ms}): ${t}`,...n)}}function Ur(t,...e){if(Lr.logLevel<=fe.WARN){const n=e.map(vl);Lr.warn(`Firestore (${Ms}): ${t}`,...n)}}function vl(t){if(typeof t=="string")return t;try{return function(n){return JSON.stringify(n)}(t)}catch{return t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function se(t,e,n){let r="Unexpected state";typeof e=="string"?r=e:n=e,Um(t,r,n)}function Um(t,e,n){let r=`FIRESTORE (${Ms}) INTERNAL ASSERTION FAILED: ${e} (ID: ${t.toString(16)})`;if(n!==void 0)try{r+=" CONTEXT: "+JSON.stringify(n)}catch{r+=" CONTEXT: "+n}throw Mn(r),new Error(r)}function we(t,e,n,r){let s="Unexpected state";typeof n=="string"?s=n:r=n,t||Um(e,s,r)}function ue(t,e){return t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const U={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class X extends Qt{constructor(e,n){super(e,n),this.code=e,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ur{constructor(){this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bm{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class Sw{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable(()=>n(it.UNAUTHENTICATED))}shutdown(){}}class Dw{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,n){this.changeListener=n,e.enqueueRetryable(()=>n(this.token.user))}shutdown(){this.changeListener=null}}class Rw{constructor(e){this.t=e,this.currentUser=it.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){we(this.o===void 0,42304);let r=this.i;const s=c=>this.i!==r?(r=this.i,n(c)):Promise.resolve();let i=new ur;this.o=()=>{this.i++,this.currentUser=this.u(),i.resolve(),i=new ur,e.enqueueRetryable(()=>s(this.currentUser))};const o=()=>{const c=i;e.enqueueRetryable(async()=>{await c.promise,await s(this.currentUser)})},u=c=>{J("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=c,this.o&&(this.auth.addAuthTokenListener(this.o),o())};this.t.onInit(c=>u(c)),setTimeout(()=>{if(!this.auth){const c=this.t.getImmediate({optional:!0});c?u(c):(J("FirebaseAuthCredentialsProvider","Auth not yet detected"),i.resolve(),i=new ur)}},0),o()}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(r=>this.i!==e?(J("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(we(typeof r.accessToken=="string",31837,{l:r}),new Bm(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const e=this.auth&&this.auth.getUid();return we(e===null||typeof e=="string",2055,{h:e}),new it(e)}}class Pw{constructor(e,n,r){this.P=e,this.T=n,this.I=r,this.type="FirstParty",this.user=it.FIRST_PARTY,this.R=new Map}A(){return this.I?this.I():null}get headers(){this.R.set("X-Goog-AuthUser",this.P);const e=this.A();return e&&this.R.set("Authorization",e),this.T&&this.R.set("X-Goog-Iam-Authorization-Token",this.T),this.R}}class Fw{constructor(e,n,r){this.P=e,this.T=n,this.I=r}getToken(){return Promise.resolve(new Pw(this.P,this.T,this.I))}start(e,n){e.enqueueRetryable(()=>n(it.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class yd{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class Nw{constructor(e,n){this.V=n,this.forceRefresh=!1,this.appCheck=null,this.m=null,this.p=null,Pt(e)&&e.settings.appCheckToken&&(this.p=e.settings.appCheckToken)}start(e,n){we(this.o===void 0,3512);const r=i=>{i.error!=null&&J("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${i.error.message}`);const o=i.token!==this.m;return this.m=i.token,J("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?n(i.token):Promise.resolve()};this.o=i=>{e.enqueueRetryable(()=>r(i))};const s=i=>{J("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=i,this.o&&this.appCheck.addTokenListener(this.o)};this.V.onInit(i=>s(i)),setTimeout(()=>{if(!this.appCheck){const i=this.V.getImmediate({optional:!0});i?s(i):J("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){if(this.p)return Promise.resolve(new yd(this.p));const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(n=>n?(we(typeof n.token=="string",44558,{tokenResult:n}),this.m=n.token,new yd(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ow(t){const e=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(n);else for(let r=0;r<t;r++)n[r]=Math.floor(256*Math.random());return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wl{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=62*Math.floor(4.129032258064516);let r="";for(;r.length<20;){const s=Ow(40);for(let i=0;i<s.length;++i)r.length<20&&s[i]<n&&(r+=e.charAt(s[i]%62))}return r}}function de(t,e){return t<e?-1:t>e?1:0}function kc(t,e){const n=Math.min(t.length,e.length);for(let r=0;r<n;r++){const s=t.charAt(r),i=e.charAt(r);if(s!==i)return Ya(s)===Ya(i)?de(s,i):Ya(s)?1:-1}return de(t.length,e.length)}const Vw=55296,Mw=57343;function Ya(t){const e=t.charCodeAt(0);return e>=Vw&&e<=Mw}function Ds(t,e,n){return t.length===e.length&&t.every((r,s)=>n(r,e[s]))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const bd="__name__";class tn{constructor(e,n,r){n===void 0?n=0:n>e.length&&se(637,{offset:n,range:e.length}),r===void 0?r=e.length-n:r>e.length-n&&se(1746,{length:r,range:e.length-n}),this.segments=e,this.offset=n,this.len=r}get length(){return this.len}isEqual(e){return tn.comparator(this,e)===0}child(e){const n=this.segments.slice(this.offset,this.limit());return e instanceof tn?e.forEach(r=>{n.push(r)}):n.push(e),this.construct(n)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}forEach(e){for(let n=this.offset,r=this.limit();n<r;n++)e(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,n){const r=Math.min(e.length,n.length);for(let s=0;s<r;s++){const i=tn.compareSegments(e.get(s),n.get(s));if(i!==0)return i}return de(e.length,n.length)}static compareSegments(e,n){const r=tn.isNumericId(e),s=tn.isNumericId(n);return r&&!s?-1:!r&&s?1:r&&s?tn.extractNumericId(e).compare(tn.extractNumericId(n)):kc(e,n)}static isNumericId(e){return e.startsWith("__id")&&e.endsWith("__")}static extractNumericId(e){return or.fromString(e.substring(4,e.length-2))}}class Pe extends tn{construct(e,n,r){return new Pe(e,n,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const n=[];for(const r of e){if(r.indexOf("//")>=0)throw new X(U.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);n.push(...r.split("/").filter(s=>s.length>0))}return new Pe(n)}static emptyPath(){return new Pe([])}}const Lw=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class nt extends tn{construct(e,n,r){return new nt(e,n,r)}static isValidIdentifier(e){return Lw.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),nt.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)===bd}static keyField(){return new nt([bd])}static fromServerFormat(e){const n=[];let r="",s=0;const i=()=>{if(r.length===0)throw new X(U.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(r),r=""};let o=!1;for(;s<e.length;){const u=e[s];if(u==="\\"){if(s+1===e.length)throw new X(U.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const c=e[s+1];if(c!=="\\"&&c!=="."&&c!=="`")throw new X(U.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);r+=c,s+=2}else u==="`"?(o=!o,s++):u!=="."||o?(r+=u,s++):(i(),s++)}if(i(),o)throw new X(U.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new nt(n)}static emptyPath(){return new nt([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ee{constructor(e){this.path=e}static fromPath(e){return new ee(Pe.fromString(e))}static fromName(e){return new ee(Pe.fromString(e).popFirst(5))}static empty(){return new ee(Pe.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&Pe.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,n){return Pe.comparator(e.path,n.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new ee(new Pe(e.slice()))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function qm(t,e,n){if(!n)throw new X(U.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function Uw(t,e,n,r){if(e===!0&&r===!0)throw new X(U.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function Ed(t){if(!ee.isDocumentKey(t))throw new X(U.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function vd(t){if(ee.isDocumentKey(t))throw new X(U.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${t} has ${t.length}.`)}function jm(t){return typeof t=="object"&&t!==null&&(Object.getPrototypeOf(t)===Object.prototype||Object.getPrototypeOf(t)===null)}function Tl(t){if(t===void 0)return"undefined";if(t===null)return"null";if(typeof t=="string")return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if(typeof t=="number"||typeof t=="boolean")return""+t;if(typeof t=="object"){if(t instanceof Array)return"an array";{const e=function(r){return r.constructor?r.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return typeof t=="function"?"a function":se(12329,{type:typeof t})}function qi(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new X(U.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=Tl(t);throw new X(U.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}/**
 * @license
 * Copyright 2025 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Be(t,e){const n={typeString:t};return e&&(n.value=e),n}function oo(t,e){if(!jm(t))throw new X(U.INVALID_ARGUMENT,"JSON must be an object");let n;for(const r in e)if(e[r]){const s=e[r].typeString,i="value"in e[r]?{value:e[r].value}:void 0;if(!(r in t)){n=`JSON missing required field: '${r}'`;break}const o=t[r];if(s&&typeof o!==s){n=`JSON field '${r}' must be a ${s}.`;break}if(i!==void 0&&o!==i.value){n=`Expected '${r}' field to equal '${i.value}'`;break}}if(n)throw new X(U.INVALID_ARGUMENT,n);return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wd=-62135596800,Td=1e6;class Fe{static now(){return Fe.fromMillis(Date.now())}static fromDate(e){return Fe.fromMillis(e.getTime())}static fromMillis(e){const n=Math.floor(e/1e3),r=Math.floor((e-1e3*n)*Td);return new Fe(n,r)}constructor(e,n){if(this.seconds=e,this.nanoseconds=n,n<0)throw new X(U.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new X(U.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(e<wd)throw new X(U.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new X(U.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/Td}_compareTo(e){return this.seconds===e.seconds?de(this.nanoseconds,e.nanoseconds):de(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{type:Fe._jsonSchemaVersion,seconds:this.seconds,nanoseconds:this.nanoseconds}}static fromJSON(e){if(oo(e,Fe._jsonSchema))return new Fe(e.seconds,e.nanoseconds)}valueOf(){const e=this.seconds-wd;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}Fe._jsonSchemaVersion="firestore/timestamp/1.0",Fe._jsonSchema={type:Be("string",Fe._jsonSchemaVersion),seconds:Be("number"),nanoseconds:Be("number")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oe{static fromTimestamp(e){return new oe(e)}static min(){return new oe(new Fe(0,0))}static max(){return new oe(new Fe(253402300799,999999999))}constructor(e){this.timestamp=e}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ji=-1;function Bw(t,e){const n=t.toTimestamp().seconds,r=t.toTimestamp().nanoseconds+1,s=oe.fromTimestamp(r===1e9?new Fe(n+1,0):new Fe(n,r));return new dr(s,ee.empty(),e)}function qw(t){return new dr(t.readTime,t.key,ji)}class dr{constructor(e,n,r){this.readTime=e,this.documentKey=n,this.largestBatchId=r}static min(){return new dr(oe.min(),ee.empty(),ji)}static max(){return new dr(oe.max(),ee.empty(),ji)}}function jw(t,e){let n=t.readTime.compareTo(e.readTime);return n!==0?n:(n=ee.comparator(t.documentKey,e.documentKey),n!==0?n:de(t.largestBatchId,e.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zw="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class Hw{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ls(t){if(t.code!==U.FAILED_PRECONDITION||t.message!==zw)throw t;J("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class O{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)},n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)})}catch(e){return this.next(void 0,e)}next(e,n){return this.callbackAttached&&se(59440),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(e,this.result):new O((r,s)=>{this.nextCallback=i=>{this.wrapSuccess(e,i).next(r,s)},this.catchCallback=i=>{this.wrapFailure(n,i).next(r,s)}})}toPromise(){return new Promise((e,n)=>{this.next(e,n)})}wrapUserFunction(e){try{const n=e();return n instanceof O?n:O.resolve(n)}catch(n){return O.reject(n)}}wrapSuccess(e,n){return e?this.wrapUserFunction(()=>e(n)):O.resolve(n)}wrapFailure(e,n){return e?this.wrapUserFunction(()=>e(n)):O.reject(n)}static resolve(e){return new O((n,r)=>{n(e)})}static reject(e){return new O((n,r)=>{r(e)})}static waitFor(e){return new O((n,r)=>{let s=0,i=0,o=!1;e.forEach(u=>{++s,u.next(()=>{++i,o&&i===s&&n()},c=>r(c))}),o=!0,i===s&&n()})}static or(e){let n=O.resolve(!1);for(const r of e)n=n.next(s=>s?O.resolve(s):r());return n}static forEach(e,n){const r=[];return e.forEach((s,i)=>{r.push(n.call(this,s,i))}),this.waitFor(r)}static mapArray(e,n){return new O((r,s)=>{const i=e.length,o=new Array(i);let u=0;for(let c=0;c<i;c++){const l=c;n(e[l]).next(f=>{o[l]=f,++u,u===i&&r(o)},f=>s(f))}})}static doWhile(e,n){return new O((r,s)=>{const i=()=>{e()===!0?n().next(()=>{i()},s):r()};i()})}}function $w(t){const e=t.match(/Android ([\d.]+)/i),n=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(n)}function Us(t){return t.name==="IndexedDbTransactionError"}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qu{constructor(e,n){this.previousValue=e,n&&(n.sequenceNumberHandler=r=>this.ae(r),this.ue=r=>n.writeSequenceNumber(r))}ae(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.ue&&this.ue(e),e}}Qu.ce=-1;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Il=-1;function Ju(t){return t==null}function fu(t){return t===0&&1/t==-1/0}function Ww(t){return typeof t=="number"&&Number.isInteger(t)&&!fu(t)&&t<=Number.MAX_SAFE_INTEGER&&t>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zm="";function Kw(t){let e="";for(let n=0;n<t.length;n++)e.length>0&&(e=Id(e)),e=Gw(t.get(n),e);return Id(e)}function Gw(t,e){let n=e;const r=t.length;for(let s=0;s<r;s++){const i=t.charAt(s);switch(i){case"\0":n+="";break;case zm:n+="";break;default:n+=i}}return n}function Id(t){return t+zm+""}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ad(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function Gr(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function Hm(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ne{constructor(e,n){this.comparator=e,this.root=n||tt.EMPTY}insert(e,n){return new Ne(this.comparator,this.root.insert(e,n,this.comparator).copy(null,null,tt.BLACK,null,null))}remove(e){return new Ne(this.comparator,this.root.remove(e,this.comparator).copy(null,null,tt.BLACK,null,null))}get(e){let n=this.root;for(;!n.isEmpty();){const r=this.comparator(e,n.key);if(r===0)return n.value;r<0?n=n.left:r>0&&(n=n.right)}return null}indexOf(e){let n=0,r=this.root;for(;!r.isEmpty();){const s=this.comparator(e,r.key);if(s===0)return n+r.left.size;s<0?r=r.left:(n+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((n,r)=>(e(n,r),!1))}toString(){const e=[];return this.inorderTraversal((n,r)=>(e.push(`${n}:${r}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new Fo(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new Fo(this.root,e,this.comparator,!1)}getReverseIterator(){return new Fo(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new Fo(this.root,e,this.comparator,!0)}}class Fo{constructor(e,n,r,s){this.isReverse=s,this.nodeStack=[];let i=1;for(;!e.isEmpty();)if(i=n?r(e.key,n):1,n&&s&&(i*=-1),i<0)e=this.isReverse?e.left:e.right;else{if(i===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const n={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class tt{constructor(e,n,r,s,i){this.key=e,this.value=n,this.color=r??tt.RED,this.left=s??tt.EMPTY,this.right=i??tt.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,n,r,s,i){return new tt(e??this.key,n??this.value,r??this.color,s??this.left,i??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,r){let s=this;const i=r(e,s.key);return s=i<0?s.copy(null,null,null,s.left.insert(e,n,r),null):i===0?s.copy(null,n,null,null,null):s.copy(null,null,null,null,s.right.insert(e,n,r)),s.fixUp()}removeMin(){if(this.left.isEmpty())return tt.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,n){let r,s=this;if(n(e,s.key)<0)s.left.isEmpty()||s.left.isRed()||s.left.left.isRed()||(s=s.moveRedLeft()),s=s.copy(null,null,null,s.left.remove(e,n),null);else{if(s.left.isRed()&&(s=s.rotateRight()),s.right.isEmpty()||s.right.isRed()||s.right.left.isRed()||(s=s.moveRedRight()),n(e,s.key)===0){if(s.right.isEmpty())return tt.EMPTY;r=s.right.min(),s=s.copy(r.key,r.value,null,null,s.right.removeMin())}s=s.copy(null,null,null,null,s.right.remove(e,n))}return s.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,tt.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,tt.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed())throw se(43730,{key:this.key,value:this.value});if(this.right.isRed())throw se(14113,{key:this.key,value:this.value});const e=this.left.check();if(e!==this.right.check())throw se(27949);return e+(this.isRed()?0:1)}}tt.EMPTY=null,tt.RED=!0,tt.BLACK=!1;tt.EMPTY=new class{constructor(){this.size=0}get key(){throw se(57766)}get value(){throw se(16141)}get color(){throw se(16727)}get left(){throw se(29726)}get right(){throw se(36894)}copy(e,n,r,s,i){return this}insert(e,n,r){return new tt(e,n)}remove(e,n){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ke{constructor(e){this.comparator=e,this.data=new Ne(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((n,r)=>(e(n),!1))}forEachInRange(e,n){const r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){const s=r.getNext();if(this.comparator(s.key,e[1])>=0)return;n(s.key)}}forEachWhile(e,n){let r;for(r=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){const n=this.data.getIteratorFrom(e);return n.hasNext()?n.getNext().key:null}getIterator(){return new Cd(this.data.getIterator())}getIteratorFrom(e){return new Cd(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let n=this;return n.size<e.size&&(n=e,e=this),e.forEach(r=>{n=n.add(r)}),n}isEqual(e){if(!(e instanceof Ke)||this.size!==e.size)return!1;const n=this.data.getIterator(),r=e.data.getIterator();for(;n.hasNext();){const s=n.getNext().key,i=r.getNext().key;if(this.comparator(s,i)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(n=>{e.push(n)}),e}toString(){const e=[];return this.forEach(n=>e.push(n)),"SortedSet("+e.toString()+")"}copy(e){const n=new Ke(this.comparator);return n.data=e,n}}class Cd{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bt{constructor(e){this.fields=e,e.sort(nt.comparator)}static empty(){return new Bt([])}unionWith(e){let n=new Ke(nt.comparator);for(const r of this.fields)n=n.add(r);for(const r of e)n=n.add(r);return new Bt(n.toArray())}covers(e){for(const n of this.fields)if(n.isPrefixOf(e))return!0;return!1}isEqual(e){return Ds(this.fields,e.fields,(n,r)=>n.isEqual(r))}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $m extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rt{constructor(e){this.binaryString=e}static fromBase64String(e){const n=function(s){try{return atob(s)}catch(i){throw typeof DOMException<"u"&&i instanceof DOMException?new $m("Invalid base64 string: "+i):i}}(e);return new rt(n)}static fromUint8Array(e){const n=function(s){let i="";for(let o=0;o<s.length;++o)i+=String.fromCharCode(s[o]);return i}(e);return new rt(n)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(n){return btoa(n)}(this.binaryString)}toUint8Array(){return function(n){const r=new Uint8Array(n.length);for(let s=0;s<n.length;s++)r[s]=n.charCodeAt(s);return r}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return de(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}rt.EMPTY_BYTE_STRING=new rt("");const Qw=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function pr(t){if(we(!!t,39018),typeof t=="string"){let e=0;const n=Qw.exec(t);if(we(!!n,46558,{timestamp:t}),n[1]){let s=n[1];s=(s+"000000000").substr(0,9),e=Number(s)}const r=new Date(t);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:Le(t.seconds),nanos:Le(t.nanos)}}function Le(t){return typeof t=="number"?t:typeof t=="string"?Number(t):0}function mr(t){return typeof t=="string"?rt.fromBase64String(t):rt.fromUint8Array(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Wm="server_timestamp",Km="__type__",Gm="__previous_value__",Qm="__local_write_time__";function Al(t){var n,r;return((r=(((n=t==null?void 0:t.mapValue)==null?void 0:n.fields)||{})[Km])==null?void 0:r.stringValue)===Wm}function Yu(t){const e=t.mapValue.fields[Gm];return Al(e)?Yu(e):e}function zi(t){const e=pr(t.mapValue.fields[Qm].timestampValue);return new Fe(e.seconds,e.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jw{constructor(e,n,r,s,i,o,u,c,l,f,p){this.databaseId=e,this.appId=n,this.persistenceKey=r,this.host=s,this.ssl=i,this.forceLongPolling=o,this.autoDetectLongPolling=u,this.longPollingOptions=c,this.useFetchStreams=l,this.isUsingEmulator=f,this.apiKey=p}}const du="(default)";class Hi{constructor(e,n){this.projectId=e,this.database=n||du}static empty(){return new Hi("","")}get isDefaultDatabase(){return this.database===du}isEqual(e){return e instanceof Hi&&e.projectId===this.projectId&&e.database===this.database}}function Yw(t,e){if(!Object.prototype.hasOwnProperty.apply(t.options,["projectId"]))throw new X(U.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Hi(t.options.projectId,e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Jm="__type__",Xw="__max__",No={mapValue:{}},Ym="__vector__",pu="value";function gr(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?Al(t)?4:eT(t)?9007199254740991:Zw(t)?10:11:se(28295,{value:t})}function yn(t,e){if(t===e)return!0;const n=gr(t);if(n!==gr(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return zi(t).isEqual(zi(e));case 3:return function(s,i){if(typeof s.timestampValue=="string"&&typeof i.timestampValue=="string"&&s.timestampValue.length===i.timestampValue.length)return s.timestampValue===i.timestampValue;const o=pr(s.timestampValue),u=pr(i.timestampValue);return o.seconds===u.seconds&&o.nanos===u.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(s,i){return mr(s.bytesValue).isEqual(mr(i.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(s,i){return Le(s.geoPointValue.latitude)===Le(i.geoPointValue.latitude)&&Le(s.geoPointValue.longitude)===Le(i.geoPointValue.longitude)}(t,e);case 2:return function(s,i){if("integerValue"in s&&"integerValue"in i)return Le(s.integerValue)===Le(i.integerValue);if("doubleValue"in s&&"doubleValue"in i){const o=Le(s.doubleValue),u=Le(i.doubleValue);return o===u?fu(o)===fu(u):isNaN(o)&&isNaN(u)}return!1}(t,e);case 9:return Ds(t.arrayValue.values||[],e.arrayValue.values||[],yn);case 10:case 11:return function(s,i){const o=s.mapValue.fields||{},u=i.mapValue.fields||{};if(Ad(o)!==Ad(u))return!1;for(const c in o)if(o.hasOwnProperty(c)&&(u[c]===void 0||!yn(o[c],u[c])))return!1;return!0}(t,e);default:return se(52216,{left:t})}}function $i(t,e){return(t.values||[]).find(n=>yn(n,e))!==void 0}function Rs(t,e){if(t===e)return 0;const n=gr(t),r=gr(e);if(n!==r)return de(n,r);switch(n){case 0:case 9007199254740991:return 0;case 1:return de(t.booleanValue,e.booleanValue);case 2:return function(i,o){const u=Le(i.integerValue||i.doubleValue),c=Le(o.integerValue||o.doubleValue);return u<c?-1:u>c?1:u===c?0:isNaN(u)?isNaN(c)?0:-1:1}(t,e);case 3:return xd(t.timestampValue,e.timestampValue);case 4:return xd(zi(t),zi(e));case 5:return kc(t.stringValue,e.stringValue);case 6:return function(i,o){const u=mr(i),c=mr(o);return u.compareTo(c)}(t.bytesValue,e.bytesValue);case 7:return function(i,o){const u=i.split("/"),c=o.split("/");for(let l=0;l<u.length&&l<c.length;l++){const f=de(u[l],c[l]);if(f!==0)return f}return de(u.length,c.length)}(t.referenceValue,e.referenceValue);case 8:return function(i,o){const u=de(Le(i.latitude),Le(o.latitude));return u!==0?u:de(Le(i.longitude),Le(o.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return kd(t.arrayValue,e.arrayValue);case 10:return function(i,o){var g,y,T,R;const u=i.fields||{},c=o.fields||{},l=(g=u[pu])==null?void 0:g.arrayValue,f=(y=c[pu])==null?void 0:y.arrayValue,p=de(((T=l==null?void 0:l.values)==null?void 0:T.length)||0,((R=f==null?void 0:f.values)==null?void 0:R.length)||0);return p!==0?p:kd(l,f)}(t.mapValue,e.mapValue);case 11:return function(i,o){if(i===No.mapValue&&o===No.mapValue)return 0;if(i===No.mapValue)return 1;if(o===No.mapValue)return-1;const u=i.fields||{},c=Object.keys(u),l=o.fields||{},f=Object.keys(l);c.sort(),f.sort();for(let p=0;p<c.length&&p<f.length;++p){const g=kc(c[p],f[p]);if(g!==0)return g;const y=Rs(u[c[p]],l[f[p]]);if(y!==0)return y}return de(c.length,f.length)}(t.mapValue,e.mapValue);default:throw se(23264,{he:n})}}function xd(t,e){if(typeof t=="string"&&typeof e=="string"&&t.length===e.length)return de(t,e);const n=pr(t),r=pr(e),s=de(n.seconds,r.seconds);return s!==0?s:de(n.nanos,r.nanos)}function kd(t,e){const n=t.values||[],r=e.values||[];for(let s=0;s<n.length&&s<r.length;++s){const i=Rs(n[s],r[s]);if(i)return i}return de(n.length,r.length)}function Ps(t){return Sc(t)}function Sc(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(n){const r=pr(n);return`time(${r.seconds},${r.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?function(n){return mr(n).toBase64()}(t.bytesValue):"referenceValue"in t?function(n){return ee.fromName(n).toString()}(t.referenceValue):"geoPointValue"in t?function(n){return`geo(${n.latitude},${n.longitude})`}(t.geoPointValue):"arrayValue"in t?function(n){let r="[",s=!0;for(const i of n.values||[])s?s=!1:r+=",",r+=Sc(i);return r+"]"}(t.arrayValue):"mapValue"in t?function(n){const r=Object.keys(n.fields||{}).sort();let s="{",i=!0;for(const o of r)i?i=!1:s+=",",s+=`${o}:${Sc(n.fields[o])}`;return s+"}"}(t.mapValue):se(61005,{value:t})}function Ho(t){switch(gr(t)){case 0:case 1:return 4;case 2:return 8;case 3:case 8:return 16;case 4:const e=Yu(t);return e?16+Ho(e):16;case 5:return 2*t.stringValue.length;case 6:return mr(t.bytesValue).approximateByteSize();case 7:return t.referenceValue.length;case 9:return function(r){return(r.values||[]).reduce((s,i)=>s+Ho(i),0)}(t.arrayValue);case 10:case 11:return function(r){let s=0;return Gr(r.fields,(i,o)=>{s+=i.length+Ho(o)}),s}(t.mapValue);default:throw se(13486,{value:t})}}function Dc(t){return!!t&&"integerValue"in t}function Cl(t){return!!t&&"arrayValue"in t}function Sd(t){return!!t&&"nullValue"in t}function Dd(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function $o(t){return!!t&&"mapValue"in t}function Zw(t){var n,r;return((r=(((n=t==null?void 0:t.mapValue)==null?void 0:n.fields)||{})[Jm])==null?void 0:r.stringValue)===Ym}function Ii(t){if(t.geoPointValue)return{geoPointValue:{...t.geoPointValue}};if(t.timestampValue&&typeof t.timestampValue=="object")return{timestampValue:{...t.timestampValue}};if(t.mapValue){const e={mapValue:{fields:{}}};return Gr(t.mapValue.fields,(n,r)=>e.mapValue.fields[n]=Ii(r)),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=Ii(t.arrayValue.values[n]);return e}return{...t}}function eT(t){return(((t.mapValue||{}).fields||{}).__type__||{}).stringValue===Xw}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ft{constructor(e){this.value=e}static empty(){return new Ft({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let n=this.value;for(let r=0;r<e.length-1;++r)if(n=(n.mapValue.fields||{})[e.get(r)],!$o(n))return null;return n=(n.mapValue.fields||{})[e.lastSegment()],n||null}}set(e,n){this.getFieldsMap(e.popLast())[e.lastSegment()]=Ii(n)}setAll(e){let n=nt.emptyPath(),r={},s=[];e.forEach((o,u)=>{if(!n.isImmediateParentOf(u)){const c=this.getFieldsMap(n);this.applyChanges(c,r,s),r={},s=[],n=u.popLast()}o?r[u.lastSegment()]=Ii(o):s.push(u.lastSegment())});const i=this.getFieldsMap(n);this.applyChanges(i,r,s)}delete(e){const n=this.field(e.popLast());$o(n)&&n.mapValue.fields&&delete n.mapValue.fields[e.lastSegment()]}isEqual(e){return yn(this.value,e.value)}getFieldsMap(e){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let r=0;r<e.length;++r){let s=n.mapValue.fields[e.get(r)];$o(s)&&s.mapValue.fields||(s={mapValue:{fields:{}}},n.mapValue.fields[e.get(r)]=s),n=s}return n.mapValue.fields}applyChanges(e,n,r){Gr(n,(s,i)=>e[s]=i);for(const s of r)delete e[s]}clone(){return new Ft(Ii(this.value))}}function Xm(t){const e=[];return Gr(t.fields,(n,r)=>{const s=new nt([n]);if($o(r)){const i=Xm(r.mapValue).fields;if(i.length===0)e.push(s);else for(const o of i)e.push(s.child(o))}else e.push(s)}),new Bt(e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ut{constructor(e,n,r,s,i,o,u){this.key=e,this.documentType=n,this.version=r,this.readTime=s,this.createTime=i,this.data=o,this.documentState=u}static newInvalidDocument(e){return new ut(e,0,oe.min(),oe.min(),oe.min(),Ft.empty(),0)}static newFoundDocument(e,n,r,s){return new ut(e,1,n,oe.min(),r,s,0)}static newNoDocument(e,n){return new ut(e,2,n,oe.min(),oe.min(),Ft.empty(),0)}static newUnknownDocument(e,n){return new ut(e,3,n,oe.min(),oe.min(),Ft.empty(),2)}convertToFoundDocument(e,n){return!this.createTime.isEqual(oe.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=Ft.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=Ft.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=oe.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof ut&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new ut(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mu{constructor(e,n){this.position=e,this.inclusive=n}}function Rd(t,e,n){let r=0;for(let s=0;s<t.position.length;s++){const i=e[s],o=t.position[s];if(i.field.isKeyField()?r=ee.comparator(ee.fromName(o.referenceValue),n.key):r=Rs(o,n.data.field(i.field)),i.dir==="desc"&&(r*=-1),r!==0)break}return r}function Pd(t,e){if(t===null)return e===null;if(e===null||t.inclusive!==e.inclusive||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!yn(t.position[n],e.position[n]))return!1;return!0}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gu{constructor(e,n="asc"){this.field=e,this.dir=n}}function tT(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zm{}class $e extends Zm{constructor(e,n,r){super(),this.field=e,this.op=n,this.value=r}static create(e,n,r){return e.isKeyField()?n==="in"||n==="not-in"?this.createKeyFieldInFilter(e,n,r):new rT(e,n,r):n==="array-contains"?new oT(e,r):n==="in"?new uT(e,r):n==="not-in"?new aT(e,r):n==="array-contains-any"?new cT(e,r):new $e(e,n,r)}static createKeyFieldInFilter(e,n,r){return n==="in"?new sT(e,r):new iT(e,r)}matches(e){const n=e.data.field(this.field);return this.op==="!="?n!==null&&n.nullValue===void 0&&this.matchesComparison(Rs(n,this.value)):n!==null&&gr(this.value)===gr(n)&&this.matchesComparison(Rs(n,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return se(47266,{operator:this.op})}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class bn extends Zm{constructor(e,n){super(),this.filters=e,this.op=n,this.Pe=null}static create(e,n){return new bn(e,n)}matches(e){return eg(this)?this.filters.find(n=>!n.matches(e))===void 0:this.filters.find(n=>n.matches(e))!==void 0}getFlattenedFilters(){return this.Pe!==null||(this.Pe=this.filters.reduce((e,n)=>e.concat(n.getFlattenedFilters()),[])),this.Pe}getFilters(){return Object.assign([],this.filters)}}function eg(t){return t.op==="and"}function tg(t){return nT(t)&&eg(t)}function nT(t){for(const e of t.filters)if(e instanceof bn)return!1;return!0}function Rc(t){if(t instanceof $e)return t.field.canonicalString()+t.op.toString()+Ps(t.value);if(tg(t))return t.filters.map(e=>Rc(e)).join(",");{const e=t.filters.map(n=>Rc(n)).join(",");return`${t.op}(${e})`}}function ng(t,e){return t instanceof $e?function(r,s){return s instanceof $e&&r.op===s.op&&r.field.isEqual(s.field)&&yn(r.value,s.value)}(t,e):t instanceof bn?function(r,s){return s instanceof bn&&r.op===s.op&&r.filters.length===s.filters.length?r.filters.reduce((i,o,u)=>i&&ng(o,s.filters[u]),!0):!1}(t,e):void se(19439)}function rg(t){return t instanceof $e?function(n){return`${n.field.canonicalString()} ${n.op} ${Ps(n.value)}`}(t):t instanceof bn?function(n){return n.op.toString()+" {"+n.getFilters().map(rg).join(" ,")+"}"}(t):"Filter"}class rT extends $e{constructor(e,n,r){super(e,n,r),this.key=ee.fromName(r.referenceValue)}matches(e){const n=ee.comparator(e.key,this.key);return this.matchesComparison(n)}}class sT extends $e{constructor(e,n){super(e,"in",n),this.keys=sg("in",n)}matches(e){return this.keys.some(n=>n.isEqual(e.key))}}class iT extends $e{constructor(e,n){super(e,"not-in",n),this.keys=sg("not-in",n)}matches(e){return!this.keys.some(n=>n.isEqual(e.key))}}function sg(t,e){var n;return(((n=e.arrayValue)==null?void 0:n.values)||[]).map(r=>ee.fromName(r.referenceValue))}class oT extends $e{constructor(e,n){super(e,"array-contains",n)}matches(e){const n=e.data.field(this.field);return Cl(n)&&$i(n.arrayValue,this.value)}}class uT extends $e{constructor(e,n){super(e,"in",n)}matches(e){const n=e.data.field(this.field);return n!==null&&$i(this.value.arrayValue,n)}}class aT extends $e{constructor(e,n){super(e,"not-in",n)}matches(e){if($i(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=e.data.field(this.field);return n!==null&&n.nullValue===void 0&&!$i(this.value.arrayValue,n)}}class cT extends $e{constructor(e,n){super(e,"array-contains-any",n)}matches(e){const n=e.data.field(this.field);return!(!Cl(n)||!n.arrayValue.values)&&n.arrayValue.values.some(r=>$i(this.value.arrayValue,r))}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lT{constructor(e,n=null,r=[],s=[],i=null,o=null,u=null){this.path=e,this.collectionGroup=n,this.orderBy=r,this.filters=s,this.limit=i,this.startAt=o,this.endAt=u,this.Te=null}}function Fd(t,e=null,n=[],r=[],s=null,i=null,o=null){return new lT(t,e,n,r,s,i,o)}function xl(t){const e=ue(t);if(e.Te===null){let n=e.path.canonicalString();e.collectionGroup!==null&&(n+="|cg:"+e.collectionGroup),n+="|f:",n+=e.filters.map(r=>Rc(r)).join(","),n+="|ob:",n+=e.orderBy.map(r=>function(i){return i.field.canonicalString()+i.dir}(r)).join(","),Ju(e.limit)||(n+="|l:",n+=e.limit),e.startAt&&(n+="|lb:",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(r=>Ps(r)).join(",")),e.endAt&&(n+="|ub:",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(r=>Ps(r)).join(",")),e.Te=n}return e.Te}function kl(t,e){if(t.limit!==e.limit||t.orderBy.length!==e.orderBy.length)return!1;for(let n=0;n<t.orderBy.length;n++)if(!tT(t.orderBy[n],e.orderBy[n]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let n=0;n<t.filters.length;n++)if(!ng(t.filters[n],e.filters[n]))return!1;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!Pd(t.startAt,e.startAt)&&Pd(t.endAt,e.endAt)}function Pc(t){return ee.isDocumentKey(t.path)&&t.collectionGroup===null&&t.filters.length===0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xu{constructor(e,n=null,r=[],s=[],i=null,o="F",u=null,c=null){this.path=e,this.collectionGroup=n,this.explicitOrderBy=r,this.filters=s,this.limit=i,this.limitType=o,this.startAt=u,this.endAt=c,this.Ee=null,this.Ie=null,this.Re=null,this.startAt,this.endAt}}function hT(t,e,n,r,s,i,o,u){return new Xu(t,e,n,r,s,i,o,u)}function Sl(t){return new Xu(t)}function Nd(t){return t.filters.length===0&&t.limit===null&&t.startAt==null&&t.endAt==null&&(t.explicitOrderBy.length===0||t.explicitOrderBy.length===1&&t.explicitOrderBy[0].field.isKeyField())}function fT(t){return ee.isDocumentKey(t.path)&&t.collectionGroup===null&&t.filters.length===0}function dT(t){return t.collectionGroup!==null}function Ai(t){const e=ue(t);if(e.Ee===null){e.Ee=[];const n=new Set;for(const i of e.explicitOrderBy)e.Ee.push(i),n.add(i.field.canonicalString());const r=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(o){let u=new Ke(nt.comparator);return o.filters.forEach(c=>{c.getFlattenedFilters().forEach(l=>{l.isInequality()&&(u=u.add(l.field))})}),u})(e).forEach(i=>{n.has(i.canonicalString())||i.isKeyField()||e.Ee.push(new gu(i,r))}),n.has(nt.keyField().canonicalString())||e.Ee.push(new gu(nt.keyField(),r))}return e.Ee}function ln(t){const e=ue(t);return e.Ie||(e.Ie=pT(e,Ai(t))),e.Ie}function pT(t,e){if(t.limitType==="F")return Fd(t.path,t.collectionGroup,e,t.filters,t.limit,t.startAt,t.endAt);{e=e.map(s=>{const i=s.dir==="desc"?"asc":"desc";return new gu(s.field,i)});const n=t.endAt?new mu(t.endAt.position,t.endAt.inclusive):null,r=t.startAt?new mu(t.startAt.position,t.startAt.inclusive):null;return Fd(t.path,t.collectionGroup,e,t.filters,t.limit,n,r)}}function Fc(t,e,n){return new Xu(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function Zu(t,e){return kl(ln(t),ln(e))&&t.limitType===e.limitType}function ig(t){return`${xl(ln(t))}|lt:${t.limitType}`}function cs(t){return`Query(target=${function(n){let r=n.path.canonicalString();return n.collectionGroup!==null&&(r+=" collectionGroup="+n.collectionGroup),n.filters.length>0&&(r+=`, filters: [${n.filters.map(s=>rg(s)).join(", ")}]`),Ju(n.limit)||(r+=", limit: "+n.limit),n.orderBy.length>0&&(r+=`, orderBy: [${n.orderBy.map(s=>function(o){return`${o.field.canonicalString()} (${o.dir})`}(s)).join(", ")}]`),n.startAt&&(r+=", startAt: ",r+=n.startAt.inclusive?"b:":"a:",r+=n.startAt.position.map(s=>Ps(s)).join(",")),n.endAt&&(r+=", endAt: ",r+=n.endAt.inclusive?"a:":"b:",r+=n.endAt.position.map(s=>Ps(s)).join(",")),`Target(${r})`}(ln(t))}; limitType=${t.limitType})`}function ea(t,e){return e.isFoundDocument()&&function(r,s){const i=s.key.path;return r.collectionGroup!==null?s.key.hasCollectionId(r.collectionGroup)&&r.path.isPrefixOf(i):ee.isDocumentKey(r.path)?r.path.isEqual(i):r.path.isImmediateParentOf(i)}(t,e)&&function(r,s){for(const i of Ai(r))if(!i.field.isKeyField()&&s.data.field(i.field)===null)return!1;return!0}(t,e)&&function(r,s){for(const i of r.filters)if(!i.matches(s))return!1;return!0}(t,e)&&function(r,s){return!(r.startAt&&!function(o,u,c){const l=Rd(o,u,c);return o.inclusive?l<=0:l<0}(r.startAt,Ai(r),s)||r.endAt&&!function(o,u,c){const l=Rd(o,u,c);return o.inclusive?l>=0:l>0}(r.endAt,Ai(r),s))}(t,e)}function mT(t){return t.collectionGroup||(t.path.length%2==1?t.path.lastSegment():t.path.get(t.path.length-2))}function og(t){return(e,n)=>{let r=!1;for(const s of Ai(t)){const i=gT(s,e,n);if(i!==0)return i;r=r||s.field.isKeyField()}return 0}}function gT(t,e,n){const r=t.field.isKeyField()?ee.comparator(e.key,n.key):function(i,o,u){const c=o.data.field(i),l=u.data.field(i);return c!==null&&l!==null?Rs(c,l):se(42886)}(t.field,e,n);switch(t.dir){case"asc":return r;case"desc":return-1*r;default:return se(19790,{direction:t.dir})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qr{constructor(e,n){this.mapKeyFn=e,this.equalsFn=n,this.inner={},this.innerSize=0}get(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r!==void 0){for(const[s,i]of r)if(this.equalsFn(s,e))return i}}has(e){return this.get(e)!==void 0}set(e,n){const r=this.mapKeyFn(e),s=this.inner[r];if(s===void 0)return this.inner[r]=[[e,n]],void this.innerSize++;for(let i=0;i<s.length;i++)if(this.equalsFn(s[i][0],e))return void(s[i]=[e,n]);s.push([e,n]),this.innerSize++}delete(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r===void 0)return!1;for(let s=0;s<r.length;s++)if(this.equalsFn(r[s][0],e))return r.length===1?delete this.inner[n]:r.splice(s,1),this.innerSize--,!0;return!1}forEach(e){Gr(this.inner,(n,r)=>{for(const[s,i]of r)e(s,i)})}isEmpty(){return Hm(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _T=new Ne(ee.comparator);function Ln(){return _T}const ug=new Ne(ee.comparator);function pi(...t){let e=ug;for(const n of t)e=e.insert(n.key,n);return e}function ag(t){let e=ug;return t.forEach((n,r)=>e=e.insert(n,r.overlayedDocument)),e}function Fr(){return Ci()}function cg(){return Ci()}function Ci(){return new Qr(t=>t.toString(),(t,e)=>t.isEqual(e))}const yT=new Ne(ee.comparator),bT=new Ke(ee.comparator);function pe(...t){let e=bT;for(const n of t)e=e.add(n);return e}const ET=new Ke(de);function vT(){return ET}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Dl(t,e){if(t.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:fu(e)?"-0":e}}function lg(t){return{integerValue:""+t}}function wT(t,e){return Ww(e)?lg(e):Dl(t,e)}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ta{constructor(){this._=void 0}}function TT(t,e,n){return t instanceof Wi?function(s,i){const o={fields:{[Km]:{stringValue:Wm},[Qm]:{timestampValue:{seconds:s.seconds,nanos:s.nanoseconds}}}};return i&&Al(i)&&(i=Yu(i)),i&&(o.fields[Gm]=i),{mapValue:o}}(n,e):t instanceof Ki?fg(t,e):t instanceof Gi?dg(t,e):function(s,i){const o=hg(s,i),u=Od(o)+Od(s.Ae);return Dc(o)&&Dc(s.Ae)?lg(u):Dl(s.serializer,u)}(t,e)}function IT(t,e,n){return t instanceof Ki?fg(t,e):t instanceof Gi?dg(t,e):n}function hg(t,e){return t instanceof _u?function(r){return Dc(r)||function(i){return!!i&&"doubleValue"in i}(r)}(e)?e:{integerValue:0}:null}class Wi extends ta{}class Ki extends ta{constructor(e){super(),this.elements=e}}function fg(t,e){const n=pg(e);for(const r of t.elements)n.some(s=>yn(s,r))||n.push(r);return{arrayValue:{values:n}}}class Gi extends ta{constructor(e){super(),this.elements=e}}function dg(t,e){let n=pg(e);for(const r of t.elements)n=n.filter(s=>!yn(s,r));return{arrayValue:{values:n}}}class _u extends ta{constructor(e,n){super(),this.serializer=e,this.Ae=n}}function Od(t){return Le(t.integerValue||t.doubleValue)}function pg(t){return Cl(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class AT{constructor(e,n){this.field=e,this.transform=n}}function CT(t,e){return t.field.isEqual(e.field)&&function(r,s){return r instanceof Ki&&s instanceof Ki||r instanceof Gi&&s instanceof Gi?Ds(r.elements,s.elements,yn):r instanceof _u&&s instanceof _u?yn(r.Ae,s.Ae):r instanceof Wi&&s instanceof Wi}(t.transform,e.transform)}class xT{constructor(e,n){this.version=e,this.transformResults=n}}class Rn{constructor(e,n){this.updateTime=e,this.exists=n}static none(){return new Rn}static exists(e){return new Rn(void 0,e)}static updateTime(e){return new Rn(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function Wo(t,e){return t.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(t.updateTime):t.exists===void 0||t.exists===e.isFoundDocument()}class na{}function mg(t,e){if(!t.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return t.isNoDocument()?new _g(t.key,Rn.none()):new uo(t.key,t.data,Rn.none());{const n=t.data,r=Ft.empty();let s=new Ke(nt.comparator);for(let i of e.fields)if(!s.has(i)){let o=n.field(i);o===null&&i.length>1&&(i=i.popLast(),o=n.field(i)),o===null?r.delete(i):r.set(i,o),s=s.add(i)}return new Jr(t.key,r,new Bt(s.toArray()),Rn.none())}}function kT(t,e,n){t instanceof uo?function(s,i,o){const u=s.value.clone(),c=Md(s.fieldTransforms,i,o.transformResults);u.setAll(c),i.convertToFoundDocument(o.version,u).setHasCommittedMutations()}(t,e,n):t instanceof Jr?function(s,i,o){if(!Wo(s.precondition,i))return void i.convertToUnknownDocument(o.version);const u=Md(s.fieldTransforms,i,o.transformResults),c=i.data;c.setAll(gg(s)),c.setAll(u),i.convertToFoundDocument(o.version,c).setHasCommittedMutations()}(t,e,n):function(s,i,o){i.convertToNoDocument(o.version).setHasCommittedMutations()}(0,e,n)}function xi(t,e,n,r){return t instanceof uo?function(i,o,u,c){if(!Wo(i.precondition,o))return u;const l=i.value.clone(),f=Ld(i.fieldTransforms,c,o);return l.setAll(f),o.convertToFoundDocument(o.version,l).setHasLocalMutations(),null}(t,e,n,r):t instanceof Jr?function(i,o,u,c){if(!Wo(i.precondition,o))return u;const l=Ld(i.fieldTransforms,c,o),f=o.data;return f.setAll(gg(i)),f.setAll(l),o.convertToFoundDocument(o.version,f).setHasLocalMutations(),u===null?null:u.unionWith(i.fieldMask.fields).unionWith(i.fieldTransforms.map(p=>p.field))}(t,e,n,r):function(i,o,u){return Wo(i.precondition,o)?(o.convertToNoDocument(o.version).setHasLocalMutations(),null):u}(t,e,n)}function ST(t,e){let n=null;for(const r of t.fieldTransforms){const s=e.data.field(r.field),i=hg(r.transform,s||null);i!=null&&(n===null&&(n=Ft.empty()),n.set(r.field,i))}return n||null}function Vd(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!function(r,s){return r===void 0&&s===void 0||!(!r||!s)&&Ds(r,s,(i,o)=>CT(i,o))}(t.fieldTransforms,e.fieldTransforms)&&(t.type===0?t.value.isEqual(e.value):t.type!==1||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}class uo extends na{constructor(e,n,r,s=[]){super(),this.key=e,this.value=n,this.precondition=r,this.fieldTransforms=s,this.type=0}getFieldMask(){return null}}class Jr extends na{constructor(e,n,r,s,i=[]){super(),this.key=e,this.data=n,this.fieldMask=r,this.precondition=s,this.fieldTransforms=i,this.type=1}getFieldMask(){return this.fieldMask}}function gg(t){const e=new Map;return t.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const r=t.data.field(n);e.set(n,r)}}),e}function Md(t,e,n){const r=new Map;we(t.length===n.length,32656,{Ve:n.length,de:t.length});for(let s=0;s<n.length;s++){const i=t[s],o=i.transform,u=e.data.field(i.field);r.set(i.field,IT(o,u,n[s]))}return r}function Ld(t,e,n){const r=new Map;for(const s of t){const i=s.transform,o=n.data.field(s.field);r.set(s.field,TT(i,o,e))}return r}class _g extends na{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class DT extends na{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class RT{constructor(e,n,r,s){this.batchId=e,this.localWriteTime=n,this.baseMutations=r,this.mutations=s}applyToRemoteDocument(e,n){const r=n.mutationResults;for(let s=0;s<this.mutations.length;s++){const i=this.mutations[s];i.key.isEqual(e.key)&&kT(i,e,r[s])}}applyToLocalView(e,n){for(const r of this.baseMutations)r.key.isEqual(e.key)&&(n=xi(r,e,n,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(e.key)&&(n=xi(r,e,n,this.localWriteTime));return n}applyToLocalDocumentSet(e,n){const r=cg();return this.mutations.forEach(s=>{const i=e.get(s.key),o=i.overlayedDocument;let u=this.applyToLocalView(o,i.mutatedFields);u=n.has(s.key)?null:u;const c=mg(o,u);c!==null&&r.set(s.key,c),o.isValidDocument()||o.convertToNoDocument(oe.min())}),r}keys(){return this.mutations.reduce((e,n)=>e.add(n.key),pe())}isEqual(e){return this.batchId===e.batchId&&Ds(this.mutations,e.mutations,(n,r)=>Vd(n,r))&&Ds(this.baseMutations,e.baseMutations,(n,r)=>Vd(n,r))}}class Rl{constructor(e,n,r,s){this.batch=e,this.commitVersion=n,this.mutationResults=r,this.docVersions=s}static from(e,n,r){we(e.mutations.length===r.length,58842,{me:e.mutations.length,fe:r.length});let s=function(){return yT}();const i=e.mutations;for(let o=0;o<i.length;o++)s=s.insert(i[o].key,r[o].version);return new Rl(e,n,r,s)}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class PT{constructor(e,n){this.largestBatchId=e,this.mutation=n}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class FT{constructor(e,n){this.count=e,this.unchangedNames=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Ue,ge;function NT(t){switch(t){case U.OK:return se(64938);case U.CANCELLED:case U.UNKNOWN:case U.DEADLINE_EXCEEDED:case U.RESOURCE_EXHAUSTED:case U.INTERNAL:case U.UNAVAILABLE:case U.UNAUTHENTICATED:return!1;case U.INVALID_ARGUMENT:case U.NOT_FOUND:case U.ALREADY_EXISTS:case U.PERMISSION_DENIED:case U.FAILED_PRECONDITION:case U.ABORTED:case U.OUT_OF_RANGE:case U.UNIMPLEMENTED:case U.DATA_LOSS:return!0;default:return se(15467,{code:t})}}function yg(t){if(t===void 0)return Mn("GRPC error has no .code"),U.UNKNOWN;switch(t){case Ue.OK:return U.OK;case Ue.CANCELLED:return U.CANCELLED;case Ue.UNKNOWN:return U.UNKNOWN;case Ue.DEADLINE_EXCEEDED:return U.DEADLINE_EXCEEDED;case Ue.RESOURCE_EXHAUSTED:return U.RESOURCE_EXHAUSTED;case Ue.INTERNAL:return U.INTERNAL;case Ue.UNAVAILABLE:return U.UNAVAILABLE;case Ue.UNAUTHENTICATED:return U.UNAUTHENTICATED;case Ue.INVALID_ARGUMENT:return U.INVALID_ARGUMENT;case Ue.NOT_FOUND:return U.NOT_FOUND;case Ue.ALREADY_EXISTS:return U.ALREADY_EXISTS;case Ue.PERMISSION_DENIED:return U.PERMISSION_DENIED;case Ue.FAILED_PRECONDITION:return U.FAILED_PRECONDITION;case Ue.ABORTED:return U.ABORTED;case Ue.OUT_OF_RANGE:return U.OUT_OF_RANGE;case Ue.UNIMPLEMENTED:return U.UNIMPLEMENTED;case Ue.DATA_LOSS:return U.DATA_LOSS;default:return se(39323,{code:t})}}(ge=Ue||(Ue={}))[ge.OK=0]="OK",ge[ge.CANCELLED=1]="CANCELLED",ge[ge.UNKNOWN=2]="UNKNOWN",ge[ge.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",ge[ge.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",ge[ge.NOT_FOUND=5]="NOT_FOUND",ge[ge.ALREADY_EXISTS=6]="ALREADY_EXISTS",ge[ge.PERMISSION_DENIED=7]="PERMISSION_DENIED",ge[ge.UNAUTHENTICATED=16]="UNAUTHENTICATED",ge[ge.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",ge[ge.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",ge[ge.ABORTED=10]="ABORTED",ge[ge.OUT_OF_RANGE=11]="OUT_OF_RANGE",ge[ge.UNIMPLEMENTED=12]="UNIMPLEMENTED",ge[ge.INTERNAL=13]="INTERNAL",ge[ge.UNAVAILABLE=14]="UNAVAILABLE",ge[ge.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function OT(){return new TextEncoder}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const VT=new or([4294967295,4294967295],0);function Ud(t){const e=OT().encode(t),n=new Fm;return n.update(e),new Uint8Array(n.digest())}function Bd(t){const e=new DataView(t.buffer),n=e.getUint32(0,!0),r=e.getUint32(4,!0),s=e.getUint32(8,!0),i=e.getUint32(12,!0);return[new or([n,r],0),new or([s,i],0)]}class Pl{constructor(e,n,r){if(this.bitmap=e,this.padding=n,this.hashCount=r,n<0||n>=8)throw new mi(`Invalid padding: ${n}`);if(r<0)throw new mi(`Invalid hash count: ${r}`);if(e.length>0&&this.hashCount===0)throw new mi(`Invalid hash count: ${r}`);if(e.length===0&&n!==0)throw new mi(`Invalid padding when bitmap length is 0: ${n}`);this.ge=8*e.length-n,this.pe=or.fromNumber(this.ge)}ye(e,n,r){let s=e.add(n.multiply(or.fromNumber(r)));return s.compare(VT)===1&&(s=new or([s.getBits(0),s.getBits(1)],0)),s.modulo(this.pe).toNumber()}we(e){return!!(this.bitmap[Math.floor(e/8)]&1<<e%8)}mightContain(e){if(this.ge===0)return!1;const n=Ud(e),[r,s]=Bd(n);for(let i=0;i<this.hashCount;i++){const o=this.ye(r,s,i);if(!this.we(o))return!1}return!0}static create(e,n,r){const s=e%8==0?0:8-e%8,i=new Uint8Array(Math.ceil(e/8)),o=new Pl(i,s,n);return r.forEach(u=>o.insert(u)),o}insert(e){if(this.ge===0)return;const n=Ud(e),[r,s]=Bd(n);for(let i=0;i<this.hashCount;i++){const o=this.ye(r,s,i);this.Se(o)}}Se(e){const n=Math.floor(e/8),r=e%8;this.bitmap[n]|=1<<r}}class mi extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ra{constructor(e,n,r,s,i){this.snapshotVersion=e,this.targetChanges=n,this.targetMismatches=r,this.documentUpdates=s,this.resolvedLimboDocuments=i}static createSynthesizedRemoteEventForCurrentChange(e,n,r){const s=new Map;return s.set(e,ao.createSynthesizedTargetChangeForCurrentChange(e,n,r)),new ra(oe.min(),s,new Ne(de),Ln(),pe())}}class ao{constructor(e,n,r,s,i){this.resumeToken=e,this.current=n,this.addedDocuments=r,this.modifiedDocuments=s,this.removedDocuments=i}static createSynthesizedTargetChangeForCurrentChange(e,n,r){return new ao(r,n,pe(),pe(),pe())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ko{constructor(e,n,r,s){this.be=e,this.removedTargetIds=n,this.key=r,this.De=s}}class bg{constructor(e,n){this.targetId=e,this.Ce=n}}class Eg{constructor(e,n,r=rt.EMPTY_BYTE_STRING,s=null){this.state=e,this.targetIds=n,this.resumeToken=r,this.cause=s}}class qd{constructor(){this.ve=0,this.Fe=jd(),this.Me=rt.EMPTY_BYTE_STRING,this.xe=!1,this.Oe=!0}get current(){return this.xe}get resumeToken(){return this.Me}get Ne(){return this.ve!==0}get Be(){return this.Oe}Le(e){e.approximateByteSize()>0&&(this.Oe=!0,this.Me=e)}ke(){let e=pe(),n=pe(),r=pe();return this.Fe.forEach((s,i)=>{switch(i){case 0:e=e.add(s);break;case 2:n=n.add(s);break;case 1:r=r.add(s);break;default:se(38017,{changeType:i})}}),new ao(this.Me,this.xe,e,n,r)}qe(){this.Oe=!1,this.Fe=jd()}Ke(e,n){this.Oe=!0,this.Fe=this.Fe.insert(e,n)}Ue(e){this.Oe=!0,this.Fe=this.Fe.remove(e)}$e(){this.ve+=1}We(){this.ve-=1,we(this.ve>=0,3241,{ve:this.ve})}Qe(){this.Oe=!0,this.xe=!0}}class MT{constructor(e){this.Ge=e,this.ze=new Map,this.je=Ln(),this.Je=Oo(),this.He=Oo(),this.Ze=new Ne(de)}Xe(e){for(const n of e.be)e.De&&e.De.isFoundDocument()?this.Ye(n,e.De):this.et(n,e.key,e.De);for(const n of e.removedTargetIds)this.et(n,e.key,e.De)}tt(e){this.forEachTarget(e,n=>{const r=this.nt(n);switch(e.state){case 0:this.rt(n)&&r.Le(e.resumeToken);break;case 1:r.We(),r.Ne||r.qe(),r.Le(e.resumeToken);break;case 2:r.We(),r.Ne||this.removeTarget(n);break;case 3:this.rt(n)&&(r.Qe(),r.Le(e.resumeToken));break;case 4:this.rt(n)&&(this.it(n),r.Le(e.resumeToken));break;default:se(56790,{state:e.state})}})}forEachTarget(e,n){e.targetIds.length>0?e.targetIds.forEach(n):this.ze.forEach((r,s)=>{this.rt(s)&&n(s)})}st(e){const n=e.targetId,r=e.Ce.count,s=this.ot(n);if(s){const i=s.target;if(Pc(i))if(r===0){const o=new ee(i.path);this.et(n,o,ut.newNoDocument(o,oe.min()))}else we(r===1,20013,{expectedCount:r});else{const o=this._t(n);if(o!==r){const u=this.ut(e),c=u?this.ct(u,e,o):1;if(c!==0){this.it(n);const l=c===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Ze=this.Ze.insert(n,l)}}}}}ut(e){const n=e.Ce.unchangedNames;if(!n||!n.bits)return null;const{bits:{bitmap:r="",padding:s=0},hashCount:i=0}=n;let o,u;try{o=mr(r).toUint8Array()}catch(c){if(c instanceof $m)return Ur("Decoding the base64 bloom filter in existence filter failed ("+c.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw c}try{u=new Pl(o,s,i)}catch(c){return Ur(c instanceof mi?"BloomFilter error: ":"Applying bloom filter failed: ",c),null}return u.ge===0?null:u}ct(e,n,r){return n.Ce.count===r-this.Pt(e,n.targetId)?0:2}Pt(e,n){const r=this.Ge.getRemoteKeysForTarget(n);let s=0;return r.forEach(i=>{const o=this.Ge.ht(),u=`projects/${o.projectId}/databases/${o.database}/documents/${i.path.canonicalString()}`;e.mightContain(u)||(this.et(n,i,null),s++)}),s}Tt(e){const n=new Map;this.ze.forEach((i,o)=>{const u=this.ot(o);if(u){if(i.current&&Pc(u.target)){const c=new ee(u.target.path);this.Et(c).has(o)||this.It(o,c)||this.et(o,c,ut.newNoDocument(c,e))}i.Be&&(n.set(o,i.ke()),i.qe())}});let r=pe();this.He.forEach((i,o)=>{let u=!0;o.forEachWhile(c=>{const l=this.ot(c);return!l||l.purpose==="TargetPurposeLimboResolution"||(u=!1,!1)}),u&&(r=r.add(i))}),this.je.forEach((i,o)=>o.setReadTime(e));const s=new ra(e,n,this.Ze,this.je,r);return this.je=Ln(),this.Je=Oo(),this.He=Oo(),this.Ze=new Ne(de),s}Ye(e,n){if(!this.rt(e))return;const r=this.It(e,n.key)?2:0;this.nt(e).Ke(n.key,r),this.je=this.je.insert(n.key,n),this.Je=this.Je.insert(n.key,this.Et(n.key).add(e)),this.He=this.He.insert(n.key,this.Rt(n.key).add(e))}et(e,n,r){if(!this.rt(e))return;const s=this.nt(e);this.It(e,n)?s.Ke(n,1):s.Ue(n),this.He=this.He.insert(n,this.Rt(n).delete(e)),this.He=this.He.insert(n,this.Rt(n).add(e)),r&&(this.je=this.je.insert(n,r))}removeTarget(e){this.ze.delete(e)}_t(e){const n=this.nt(e).ke();return this.Ge.getRemoteKeysForTarget(e).size+n.addedDocuments.size-n.removedDocuments.size}$e(e){this.nt(e).$e()}nt(e){let n=this.ze.get(e);return n||(n=new qd,this.ze.set(e,n)),n}Rt(e){let n=this.He.get(e);return n||(n=new Ke(de),this.He=this.He.insert(e,n)),n}Et(e){let n=this.Je.get(e);return n||(n=new Ke(de),this.Je=this.Je.insert(e,n)),n}rt(e){const n=this.ot(e)!==null;return n||J("WatchChangeAggregator","Detected inactive target",e),n}ot(e){const n=this.ze.get(e);return n&&n.Ne?null:this.Ge.At(e)}it(e){this.ze.set(e,new qd),this.Ge.getRemoteKeysForTarget(e).forEach(n=>{this.et(e,n,null)})}It(e,n){return this.Ge.getRemoteKeysForTarget(e).has(n)}}function Oo(){return new Ne(ee.comparator)}function jd(){return new Ne(ee.comparator)}const LT={asc:"ASCENDING",desc:"DESCENDING"},UT={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},BT={and:"AND",or:"OR"};class qT{constructor(e,n){this.databaseId=e,this.useProto3Json=n}}function Nc(t,e){return t.useProto3Json||Ju(e)?e:{value:e}}function yu(t,e){return t.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function vg(t,e){return t.useProto3Json?e.toBase64():e.toUint8Array()}function jT(t,e){return yu(t,e.toTimestamp())}function hn(t){return we(!!t,49232),oe.fromTimestamp(function(n){const r=pr(n);return new Fe(r.seconds,r.nanos)}(t))}function Fl(t,e){return Oc(t,e).canonicalString()}function Oc(t,e){const n=function(s){return new Pe(["projects",s.projectId,"databases",s.database])}(t).child("documents");return e===void 0?n:n.child(e)}function wg(t){const e=Pe.fromString(t);return we(xg(e),10190,{key:e.toString()}),e}function Vc(t,e){return Fl(t.databaseId,e.path)}function Xa(t,e){const n=wg(e);if(n.get(1)!==t.databaseId.projectId)throw new X(U.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new X(U.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new ee(Ig(n))}function Tg(t,e){return Fl(t.databaseId,e)}function zT(t){const e=wg(t);return e.length===4?Pe.emptyPath():Ig(e)}function Mc(t){return new Pe(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function Ig(t){return we(t.length>4&&t.get(4)==="documents",29091,{key:t.toString()}),t.popFirst(5)}function zd(t,e,n){return{name:Vc(t,e),fields:n.value.mapValue.fields}}function HT(t,e){let n;if("targetChange"in e){e.targetChange;const r=function(l){return l==="NO_CHANGE"?0:l==="ADD"?1:l==="REMOVE"?2:l==="CURRENT"?3:l==="RESET"?4:se(39313,{state:l})}(e.targetChange.targetChangeType||"NO_CHANGE"),s=e.targetChange.targetIds||[],i=function(l,f){return l.useProto3Json?(we(f===void 0||typeof f=="string",58123),rt.fromBase64String(f||"")):(we(f===void 0||f instanceof Buffer||f instanceof Uint8Array,16193),rt.fromUint8Array(f||new Uint8Array))}(t,e.targetChange.resumeToken),o=e.targetChange.cause,u=o&&function(l){const f=l.code===void 0?U.UNKNOWN:yg(l.code);return new X(f,l.message||"")}(o);n=new Eg(r,s,i,u||null)}else if("documentChange"in e){e.documentChange;const r=e.documentChange;r.document,r.document.name,r.document.updateTime;const s=Xa(t,r.document.name),i=hn(r.document.updateTime),o=r.document.createTime?hn(r.document.createTime):oe.min(),u=new Ft({mapValue:{fields:r.document.fields}}),c=ut.newFoundDocument(s,i,o,u),l=r.targetIds||[],f=r.removedTargetIds||[];n=new Ko(l,f,c.key,c)}else if("documentDelete"in e){e.documentDelete;const r=e.documentDelete;r.document;const s=Xa(t,r.document),i=r.readTime?hn(r.readTime):oe.min(),o=ut.newNoDocument(s,i),u=r.removedTargetIds||[];n=new Ko([],u,o.key,o)}else if("documentRemove"in e){e.documentRemove;const r=e.documentRemove;r.document;const s=Xa(t,r.document),i=r.removedTargetIds||[];n=new Ko([],i,s,null)}else{if(!("filter"in e))return se(11601,{Vt:e});{e.filter;const r=e.filter;r.targetId;const{count:s=0,unchangedNames:i}=r,o=new FT(s,i),u=r.targetId;n=new bg(u,o)}}return n}function $T(t,e){let n;if(e instanceof uo)n={update:zd(t,e.key,e.value)};else if(e instanceof _g)n={delete:Vc(t,e.key)};else if(e instanceof Jr)n={update:zd(t,e.key,e.data),updateMask:e6(e.fieldMask)};else{if(!(e instanceof DT))return se(16599,{dt:e.type});n={verify:Vc(t,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map(r=>function(i,o){const u=o.transform;if(u instanceof Wi)return{fieldPath:o.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(u instanceof Ki)return{fieldPath:o.field.canonicalString(),appendMissingElements:{values:u.elements}};if(u instanceof Gi)return{fieldPath:o.field.canonicalString(),removeAllFromArray:{values:u.elements}};if(u instanceof _u)return{fieldPath:o.field.canonicalString(),increment:u.Ae};throw se(20930,{transform:o.transform})}(0,r))),e.precondition.isNone||(n.currentDocument=function(s,i){return i.updateTime!==void 0?{updateTime:jT(s,i.updateTime)}:i.exists!==void 0?{exists:i.exists}:se(27497)}(t,e.precondition)),n}function WT(t,e){return t&&t.length>0?(we(e!==void 0,14353),t.map(n=>function(s,i){let o=s.updateTime?hn(s.updateTime):hn(i);return o.isEqual(oe.min())&&(o=hn(i)),new xT(o,s.transformResults||[])}(n,e))):[]}function KT(t,e){return{documents:[Tg(t,e.path)]}}function GT(t,e){const n={structuredQuery:{}},r=e.path;let s;e.collectionGroup!==null?(s=r,n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(s=r.popLast(),n.structuredQuery.from=[{collectionId:r.lastSegment()}]),n.parent=Tg(t,s);const i=function(l){if(l.length!==0)return Cg(bn.create(l,"and"))}(e.filters);i&&(n.structuredQuery.where=i);const o=function(l){if(l.length!==0)return l.map(f=>function(g){return{field:ls(g.field),direction:YT(g.dir)}}(f))}(e.orderBy);o&&(n.structuredQuery.orderBy=o);const u=Nc(t,e.limit);return u!==null&&(n.structuredQuery.limit=u),e.startAt&&(n.structuredQuery.startAt=function(l){return{before:l.inclusive,values:l.position}}(e.startAt)),e.endAt&&(n.structuredQuery.endAt=function(l){return{before:!l.inclusive,values:l.position}}(e.endAt)),{ft:n,parent:s}}function QT(t){let e=zT(t.parent);const n=t.structuredQuery,r=n.from?n.from.length:0;let s=null;if(r>0){we(r===1,65062);const f=n.from[0];f.allDescendants?s=f.collectionId:e=e.child(f.collectionId)}let i=[];n.where&&(i=function(p){const g=Ag(p);return g instanceof bn&&tg(g)?g.getFilters():[g]}(n.where));let o=[];n.orderBy&&(o=function(p){return p.map(g=>function(T){return new gu(hs(T.field),function(F){switch(F){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(T.direction))}(g))}(n.orderBy));let u=null;n.limit&&(u=function(p){let g;return g=typeof p=="object"?p.value:p,Ju(g)?null:g}(n.limit));let c=null;n.startAt&&(c=function(p){const g=!!p.before,y=p.values||[];return new mu(y,g)}(n.startAt));let l=null;return n.endAt&&(l=function(p){const g=!p.before,y=p.values||[];return new mu(y,g)}(n.endAt)),hT(e,s,o,i,u,"F",c,l)}function JT(t,e){const n=function(s){switch(s){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return se(28987,{purpose:s})}}(e.purpose);return n==null?null:{"goog-listen-tags":n}}function Ag(t){return t.unaryFilter!==void 0?function(n){switch(n.unaryFilter.op){case"IS_NAN":const r=hs(n.unaryFilter.field);return $e.create(r,"==",{doubleValue:NaN});case"IS_NULL":const s=hs(n.unaryFilter.field);return $e.create(s,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const i=hs(n.unaryFilter.field);return $e.create(i,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const o=hs(n.unaryFilter.field);return $e.create(o,"!=",{nullValue:"NULL_VALUE"});case"OPERATOR_UNSPECIFIED":return se(61313);default:return se(60726)}}(t):t.fieldFilter!==void 0?function(n){return $e.create(hs(n.fieldFilter.field),function(s){switch(s){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";case"OPERATOR_UNSPECIFIED":return se(58110);default:return se(50506)}}(n.fieldFilter.op),n.fieldFilter.value)}(t):t.compositeFilter!==void 0?function(n){return bn.create(n.compositeFilter.filters.map(r=>Ag(r)),function(s){switch(s){case"AND":return"and";case"OR":return"or";default:return se(1026)}}(n.compositeFilter.op))}(t):se(30097,{filter:t})}function YT(t){return LT[t]}function XT(t){return UT[t]}function ZT(t){return BT[t]}function ls(t){return{fieldPath:t.canonicalString()}}function hs(t){return nt.fromServerFormat(t.fieldPath)}function Cg(t){return t instanceof $e?function(n){if(n.op==="=="){if(Dd(n.value))return{unaryFilter:{field:ls(n.field),op:"IS_NAN"}};if(Sd(n.value))return{unaryFilter:{field:ls(n.field),op:"IS_NULL"}}}else if(n.op==="!="){if(Dd(n.value))return{unaryFilter:{field:ls(n.field),op:"IS_NOT_NAN"}};if(Sd(n.value))return{unaryFilter:{field:ls(n.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:ls(n.field),op:XT(n.op),value:n.value}}}(t):t instanceof bn?function(n){const r=n.getFilters().map(s=>Cg(s));return r.length===1?r[0]:{compositeFilter:{op:ZT(n.op),filters:r}}}(t):se(54877,{filter:t})}function e6(t){const e=[];return t.fields.forEach(n=>e.push(n.canonicalString())),{fieldPaths:e}}function xg(t){return t.length>=4&&t.get(0)==="projects"&&t.get(2)==="databases"}function kg(t){return!!t&&typeof t._toProto=="function"&&t._protoValueType==="ProtoValue"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rr{constructor(e,n,r,s,i=oe.min(),o=oe.min(),u=rt.EMPTY_BYTE_STRING,c=null){this.target=e,this.targetId=n,this.purpose=r,this.sequenceNumber=s,this.snapshotVersion=i,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=u,this.expectedCount=c}withSequenceNumber(e){return new rr(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,n){return new rr(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new rr(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new rr(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class t6{constructor(e){this.yt=e}}function n6(t){const e=QT({parent:t.parent,structuredQuery:t.structuredQuery});return t.limitType==="LAST"?Fc(e,e.limit,"L"):e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class r6{constructor(){this.bn=new s6}addToCollectionParentIndex(e,n){return this.bn.add(n),O.resolve()}getCollectionParents(e,n){return O.resolve(this.bn.getEntries(n))}addFieldIndex(e,n){return O.resolve()}deleteFieldIndex(e,n){return O.resolve()}deleteAllFieldIndexes(e){return O.resolve()}createTargetIndexes(e,n){return O.resolve()}getDocumentsMatchingTarget(e,n){return O.resolve(null)}getIndexType(e,n){return O.resolve(0)}getFieldIndexes(e,n){return O.resolve([])}getNextCollectionGroupToUpdate(e){return O.resolve(null)}getMinOffset(e,n){return O.resolve(dr.min())}getMinOffsetFromCollectionGroup(e,n){return O.resolve(dr.min())}updateCollectionGroup(e,n,r){return O.resolve()}updateIndexEntries(e,n){return O.resolve()}}class s6{constructor(){this.index={}}add(e){const n=e.lastSegment(),r=e.popLast(),s=this.index[n]||new Ke(Pe.comparator),i=!s.has(r);return this.index[n]=s.add(r),i}has(e){const n=e.lastSegment(),r=e.popLast(),s=this.index[n];return s&&s.has(r)}getEntries(e){return(this.index[e]||new Ke(Pe.comparator)).toArray()}}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Hd={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0},Sg=41943040;class bt{static withCacheSize(e){return new bt(e,bt.DEFAULT_COLLECTION_PERCENTILE,bt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}constructor(e,n,r){this.cacheSizeCollectionThreshold=e,this.percentileToCollect=n,this.maximumSequenceNumbersToCollect=r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */bt.DEFAULT_COLLECTION_PERCENTILE=10,bt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,bt.DEFAULT=new bt(Sg,bt.DEFAULT_COLLECTION_PERCENTILE,bt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),bt.DISABLED=new bt(-1,0,0);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fs{constructor(e){this.sr=e}next(){return this.sr+=2,this.sr}static _r(){return new Fs(0)}static ar(){return new Fs(-1)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $d="LruGarbageCollector",i6=1048576;function Wd([t,e],[n,r]){const s=de(t,n);return s===0?de(e,r):s}class o6{constructor(e){this.Pr=e,this.buffer=new Ke(Wd),this.Tr=0}Er(){return++this.Tr}Ir(e){const n=[e,this.Er()];if(this.buffer.size<this.Pr)this.buffer=this.buffer.add(n);else{const r=this.buffer.last();Wd(n,r)<0&&(this.buffer=this.buffer.delete(r).add(n))}}get maxValue(){return this.buffer.last()[0]}}class u6{constructor(e,n,r){this.garbageCollector=e,this.asyncQueue=n,this.localStore=r,this.Rr=null}start(){this.garbageCollector.params.cacheSizeCollectionThreshold!==-1&&this.Ar(6e4)}stop(){this.Rr&&(this.Rr.cancel(),this.Rr=null)}get started(){return this.Rr!==null}Ar(e){J($d,`Garbage collection scheduled in ${e}ms`),this.Rr=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",e,async()=>{this.Rr=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(n){Us(n)?J($d,"Ignoring IndexedDB error during garbage collection: ",n):await Ls(n)}await this.Ar(3e5)})}}class a6{constructor(e,n){this.Vr=e,this.params=n}calculateTargetCount(e,n){return this.Vr.dr(e).next(r=>Math.floor(n/100*r))}nthSequenceNumber(e,n){if(n===0)return O.resolve(Qu.ce);const r=new o6(n);return this.Vr.forEachTarget(e,s=>r.Ir(s.sequenceNumber)).next(()=>this.Vr.mr(e,s=>r.Ir(s))).next(()=>r.maxValue)}removeTargets(e,n,r){return this.Vr.removeTargets(e,n,r)}removeOrphanedDocuments(e,n){return this.Vr.removeOrphanedDocuments(e,n)}collect(e,n){return this.params.cacheSizeCollectionThreshold===-1?(J("LruGarbageCollector","Garbage collection skipped; disabled"),O.resolve(Hd)):this.getCacheSize(e).next(r=>r<this.params.cacheSizeCollectionThreshold?(J("LruGarbageCollector",`Garbage collection skipped; Cache size ${r} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),Hd):this.gr(e,n))}getCacheSize(e){return this.Vr.getCacheSize(e)}gr(e,n){let r,s,i,o,u,c,l;const f=Date.now();return this.calculateTargetCount(e,this.params.percentileToCollect).next(p=>(p>this.params.maximumSequenceNumbersToCollect?(J("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${p}`),s=this.params.maximumSequenceNumbersToCollect):s=p,o=Date.now(),this.nthSequenceNumber(e,s))).next(p=>(r=p,u=Date.now(),this.removeTargets(e,r,n))).next(p=>(i=p,c=Date.now(),this.removeOrphanedDocuments(e,r))).next(p=>(l=Date.now(),as()<=fe.DEBUG&&J("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${o-f}ms
	Determined least recently used ${s} in `+(u-o)+`ms
	Removed ${i} targets in `+(c-u)+`ms
	Removed ${p} documents in `+(l-c)+`ms
Total Duration: ${l-f}ms`),O.resolve({didRun:!0,sequenceNumbersCollected:s,targetsRemoved:i,documentsRemoved:p})))}}function c6(t,e){return new a6(t,e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class l6{constructor(){this.changes=new Qr(e=>e.toString(),(e,n)=>e.isEqual(n)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,n){this.assertNotApplied(),this.changes.set(e,ut.newInvalidDocument(e).setReadTime(n))}getEntry(e,n){this.assertNotApplied();const r=this.changes.get(n);return r!==void 0?O.resolve(r):this.getFromCache(e,n)}getEntries(e,n){return this.getAllFromCache(e,n)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class h6{constructor(e,n){this.overlayedDocument=e,this.mutatedFields=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class f6{constructor(e,n,r,s){this.remoteDocumentCache=e,this.mutationQueue=n,this.documentOverlayCache=r,this.indexManager=s}getDocument(e,n){let r=null;return this.documentOverlayCache.getOverlay(e,n).next(s=>(r=s,this.remoteDocumentCache.getEntry(e,n))).next(s=>(r!==null&&xi(r.mutation,s,Bt.empty(),Fe.now()),s))}getDocuments(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.getLocalViewOfDocuments(e,r,pe()).next(()=>r))}getLocalViewOfDocuments(e,n,r=pe()){const s=Fr();return this.populateOverlays(e,s,n).next(()=>this.computeViews(e,n,s,r).next(i=>{let o=pi();return i.forEach((u,c)=>{o=o.insert(u,c.overlayedDocument)}),o}))}getOverlayedDocuments(e,n){const r=Fr();return this.populateOverlays(e,r,n).next(()=>this.computeViews(e,n,r,pe()))}populateOverlays(e,n,r){const s=[];return r.forEach(i=>{n.has(i)||s.push(i)}),this.documentOverlayCache.getOverlays(e,s).next(i=>{i.forEach((o,u)=>{n.set(o,u)})})}computeViews(e,n,r,s){let i=Ln();const o=Ci(),u=function(){return Ci()}();return n.forEach((c,l)=>{const f=r.get(l.key);s.has(l.key)&&(f===void 0||f.mutation instanceof Jr)?i=i.insert(l.key,l):f!==void 0?(o.set(l.key,f.mutation.getFieldMask()),xi(f.mutation,l,f.mutation.getFieldMask(),Fe.now())):o.set(l.key,Bt.empty())}),this.recalculateAndSaveOverlays(e,i).next(c=>(c.forEach((l,f)=>o.set(l,f)),n.forEach((l,f)=>u.set(l,new h6(f,o.get(l)??null))),u))}recalculateAndSaveOverlays(e,n){const r=Ci();let s=new Ne((o,u)=>o-u),i=pe();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,n).next(o=>{for(const u of o)u.keys().forEach(c=>{const l=n.get(c);if(l===null)return;let f=r.get(c)||Bt.empty();f=u.applyToLocalView(l,f),r.set(c,f);const p=(s.get(u.batchId)||pe()).add(c);s=s.insert(u.batchId,p)})}).next(()=>{const o=[],u=s.getReverseIterator();for(;u.hasNext();){const c=u.getNext(),l=c.key,f=c.value,p=cg();f.forEach(g=>{if(!i.has(g)){const y=mg(n.get(g),r.get(g));y!==null&&p.set(g,y),i=i.add(g)}}),o.push(this.documentOverlayCache.saveOverlays(e,l,p))}return O.waitFor(o)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.recalculateAndSaveOverlays(e,r))}getDocumentsMatchingQuery(e,n,r,s){return fT(n)?this.getDocumentsMatchingDocumentQuery(e,n.path):dT(n)?this.getDocumentsMatchingCollectionGroupQuery(e,n,r,s):this.getDocumentsMatchingCollectionQuery(e,n,r,s)}getNextDocuments(e,n,r,s){return this.remoteDocumentCache.getAllFromCollectionGroup(e,n,r,s).next(i=>{const o=s-i.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,n,r.largestBatchId,s-i.size):O.resolve(Fr());let u=ji,c=i;return o.next(l=>O.forEach(l,(f,p)=>(u<p.largestBatchId&&(u=p.largestBatchId),i.get(f)?O.resolve():this.remoteDocumentCache.getEntry(e,f).next(g=>{c=c.insert(f,g)}))).next(()=>this.populateOverlays(e,l,i)).next(()=>this.computeViews(e,c,l,pe())).next(f=>({batchId:u,changes:ag(f)})))})}getDocumentsMatchingDocumentQuery(e,n){return this.getDocument(e,new ee(n)).next(r=>{let s=pi();return r.isFoundDocument()&&(s=s.insert(r.key,r)),s})}getDocumentsMatchingCollectionGroupQuery(e,n,r,s){const i=n.collectionGroup;let o=pi();return this.indexManager.getCollectionParents(e,i).next(u=>O.forEach(u,c=>{const l=function(p,g){return new Xu(g,null,p.explicitOrderBy.slice(),p.filters.slice(),p.limit,p.limitType,p.startAt,p.endAt)}(n,c.child(i));return this.getDocumentsMatchingCollectionQuery(e,l,r,s).next(f=>{f.forEach((p,g)=>{o=o.insert(p,g)})})}).next(()=>o))}getDocumentsMatchingCollectionQuery(e,n,r,s){let i;return this.documentOverlayCache.getOverlaysForCollection(e,n.path,r.largestBatchId).next(o=>(i=o,this.remoteDocumentCache.getDocumentsMatchingQuery(e,n,r,i,s))).next(o=>{i.forEach((c,l)=>{const f=l.getKey();o.get(f)===null&&(o=o.insert(f,ut.newInvalidDocument(f)))});let u=pi();return o.forEach((c,l)=>{const f=i.get(c);f!==void 0&&xi(f.mutation,l,Bt.empty(),Fe.now()),ea(n,l)&&(u=u.insert(c,l))}),u})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class d6{constructor(e){this.serializer=e,this.Nr=new Map,this.Br=new Map}getBundleMetadata(e,n){return O.resolve(this.Nr.get(n))}saveBundleMetadata(e,n){return this.Nr.set(n.id,function(s){return{id:s.id,version:s.version,createTime:hn(s.createTime)}}(n)),O.resolve()}getNamedQuery(e,n){return O.resolve(this.Br.get(n))}saveNamedQuery(e,n){return this.Br.set(n.name,function(s){return{name:s.name,query:n6(s.bundledQuery),readTime:hn(s.readTime)}}(n)),O.resolve()}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class p6{constructor(){this.overlays=new Ne(ee.comparator),this.Lr=new Map}getOverlay(e,n){return O.resolve(this.overlays.get(n))}getOverlays(e,n){const r=Fr();return O.forEach(n,s=>this.getOverlay(e,s).next(i=>{i!==null&&r.set(s,i)})).next(()=>r)}saveOverlays(e,n,r){return r.forEach((s,i)=>{this.St(e,n,i)}),O.resolve()}removeOverlaysForBatchId(e,n,r){const s=this.Lr.get(r);return s!==void 0&&(s.forEach(i=>this.overlays=this.overlays.remove(i)),this.Lr.delete(r)),O.resolve()}getOverlaysForCollection(e,n,r){const s=Fr(),i=n.length+1,o=new ee(n.child("")),u=this.overlays.getIteratorFrom(o);for(;u.hasNext();){const c=u.getNext().value,l=c.getKey();if(!n.isPrefixOf(l.path))break;l.path.length===i&&c.largestBatchId>r&&s.set(c.getKey(),c)}return O.resolve(s)}getOverlaysForCollectionGroup(e,n,r,s){let i=new Ne((l,f)=>l-f);const o=this.overlays.getIterator();for(;o.hasNext();){const l=o.getNext().value;if(l.getKey().getCollectionGroup()===n&&l.largestBatchId>r){let f=i.get(l.largestBatchId);f===null&&(f=Fr(),i=i.insert(l.largestBatchId,f)),f.set(l.getKey(),l)}}const u=Fr(),c=i.getIterator();for(;c.hasNext()&&(c.getNext().value.forEach((l,f)=>u.set(l,f)),!(u.size()>=s)););return O.resolve(u)}St(e,n,r){const s=this.overlays.get(r.key);if(s!==null){const o=this.Lr.get(s.largestBatchId).delete(r.key);this.Lr.set(s.largestBatchId,o)}this.overlays=this.overlays.insert(r.key,new PT(n,r));let i=this.Lr.get(n);i===void 0&&(i=pe(),this.Lr.set(n,i)),this.Lr.set(n,i.add(r.key))}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class m6{constructor(){this.sessionToken=rt.EMPTY_BYTE_STRING}getSessionToken(e){return O.resolve(this.sessionToken)}setSessionToken(e,n){return this.sessionToken=n,O.resolve()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nl{constructor(){this.kr=new Ke(Ye.qr),this.Kr=new Ke(Ye.Ur)}isEmpty(){return this.kr.isEmpty()}addReference(e,n){const r=new Ye(e,n);this.kr=this.kr.add(r),this.Kr=this.Kr.add(r)}$r(e,n){e.forEach(r=>this.addReference(r,n))}removeReference(e,n){this.Wr(new Ye(e,n))}Qr(e,n){e.forEach(r=>this.removeReference(r,n))}Gr(e){const n=new ee(new Pe([])),r=new Ye(n,e),s=new Ye(n,e+1),i=[];return this.Kr.forEachInRange([r,s],o=>{this.Wr(o),i.push(o.key)}),i}zr(){this.kr.forEach(e=>this.Wr(e))}Wr(e){this.kr=this.kr.delete(e),this.Kr=this.Kr.delete(e)}jr(e){const n=new ee(new Pe([])),r=new Ye(n,e),s=new Ye(n,e+1);let i=pe();return this.Kr.forEachInRange([r,s],o=>{i=i.add(o.key)}),i}containsKey(e){const n=new Ye(e,0),r=this.kr.firstAfterOrEqual(n);return r!==null&&e.isEqual(r.key)}}class Ye{constructor(e,n){this.key=e,this.Jr=n}static qr(e,n){return ee.comparator(e.key,n.key)||de(e.Jr,n.Jr)}static Ur(e,n){return de(e.Jr,n.Jr)||ee.comparator(e.key,n.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class g6{constructor(e,n){this.indexManager=e,this.referenceDelegate=n,this.mutationQueue=[],this.Yn=1,this.Hr=new Ke(Ye.qr)}checkEmpty(e){return O.resolve(this.mutationQueue.length===0)}addMutationBatch(e,n,r,s){const i=this.Yn;this.Yn++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new RT(i,n,r,s);this.mutationQueue.push(o);for(const u of s)this.Hr=this.Hr.add(new Ye(u.key,i)),this.indexManager.addToCollectionParentIndex(e,u.key.path.popLast());return O.resolve(o)}lookupMutationBatch(e,n){return O.resolve(this.Zr(n))}getNextMutationBatchAfterBatchId(e,n){const r=n+1,s=this.Xr(r),i=s<0?0:s;return O.resolve(this.mutationQueue.length>i?this.mutationQueue[i]:null)}getHighestUnacknowledgedBatchId(){return O.resolve(this.mutationQueue.length===0?Il:this.Yn-1)}getAllMutationBatches(e){return O.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,n){const r=new Ye(n,0),s=new Ye(n,Number.POSITIVE_INFINITY),i=[];return this.Hr.forEachInRange([r,s],o=>{const u=this.Zr(o.Jr);i.push(u)}),O.resolve(i)}getAllMutationBatchesAffectingDocumentKeys(e,n){let r=new Ke(de);return n.forEach(s=>{const i=new Ye(s,0),o=new Ye(s,Number.POSITIVE_INFINITY);this.Hr.forEachInRange([i,o],u=>{r=r.add(u.Jr)})}),O.resolve(this.Yr(r))}getAllMutationBatchesAffectingQuery(e,n){const r=n.path,s=r.length+1;let i=r;ee.isDocumentKey(i)||(i=i.child(""));const o=new Ye(new ee(i),0);let u=new Ke(de);return this.Hr.forEachWhile(c=>{const l=c.key.path;return!!r.isPrefixOf(l)&&(l.length===s&&(u=u.add(c.Jr)),!0)},o),O.resolve(this.Yr(u))}Yr(e){const n=[];return e.forEach(r=>{const s=this.Zr(r);s!==null&&n.push(s)}),n}removeMutationBatch(e,n){we(this.ei(n.batchId,"removed")===0,55003),this.mutationQueue.shift();let r=this.Hr;return O.forEach(n.mutations,s=>{const i=new Ye(s.key,n.batchId);return r=r.delete(i),this.referenceDelegate.markPotentiallyOrphaned(e,s.key)}).next(()=>{this.Hr=r})}nr(e){}containsKey(e,n){const r=new Ye(n,0),s=this.Hr.firstAfterOrEqual(r);return O.resolve(n.isEqual(s&&s.key))}performConsistencyCheck(e){return this.mutationQueue.length,O.resolve()}ei(e,n){return this.Xr(e)}Xr(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Zr(e){const n=this.Xr(e);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _6{constructor(e){this.ti=e,this.docs=function(){return new Ne(ee.comparator)}(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,n){const r=n.key,s=this.docs.get(r),i=s?s.size:0,o=this.ti(n);return this.docs=this.docs.insert(r,{document:n.mutableCopy(),size:o}),this.size+=o-i,this.indexManager.addToCollectionParentIndex(e,r.path.popLast())}removeEntry(e){const n=this.docs.get(e);n&&(this.docs=this.docs.remove(e),this.size-=n.size)}getEntry(e,n){const r=this.docs.get(n);return O.resolve(r?r.document.mutableCopy():ut.newInvalidDocument(n))}getEntries(e,n){let r=Ln();return n.forEach(s=>{const i=this.docs.get(s);r=r.insert(s,i?i.document.mutableCopy():ut.newInvalidDocument(s))}),O.resolve(r)}getDocumentsMatchingQuery(e,n,r,s){let i=Ln();const o=n.path,u=new ee(o.child("__id-9223372036854775808__")),c=this.docs.getIteratorFrom(u);for(;c.hasNext();){const{key:l,value:{document:f}}=c.getNext();if(!o.isPrefixOf(l.path))break;l.path.length>o.length+1||jw(qw(f),r)<=0||(s.has(f.key)||ea(n,f))&&(i=i.insert(f.key,f.mutableCopy()))}return O.resolve(i)}getAllFromCollectionGroup(e,n,r,s){se(9500)}ni(e,n){return O.forEach(this.docs,r=>n(r))}newChangeBuffer(e){return new y6(this)}getSize(e){return O.resolve(this.size)}}class y6 extends l6{constructor(e){super(),this.Mr=e}applyChanges(e){const n=[];return this.changes.forEach((r,s)=>{s.isValidDocument()?n.push(this.Mr.addEntry(e,s)):this.Mr.removeEntry(r)}),O.waitFor(n)}getFromCache(e,n){return this.Mr.getEntry(e,n)}getAllFromCache(e,n){return this.Mr.getEntries(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class b6{constructor(e){this.persistence=e,this.ri=new Qr(n=>xl(n),kl),this.lastRemoteSnapshotVersion=oe.min(),this.highestTargetId=0,this.ii=0,this.si=new Nl,this.targetCount=0,this.oi=Fs._r()}forEachTarget(e,n){return this.ri.forEach((r,s)=>n(s)),O.resolve()}getLastRemoteSnapshotVersion(e){return O.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return O.resolve(this.ii)}allocateTargetId(e){return this.highestTargetId=this.oi.next(),O.resolve(this.highestTargetId)}setTargetsMetadata(e,n,r){return r&&(this.lastRemoteSnapshotVersion=r),n>this.ii&&(this.ii=n),O.resolve()}lr(e){this.ri.set(e.target,e);const n=e.targetId;n>this.highestTargetId&&(this.oi=new Fs(n),this.highestTargetId=n),e.sequenceNumber>this.ii&&(this.ii=e.sequenceNumber)}addTargetData(e,n){return this.lr(n),this.targetCount+=1,O.resolve()}updateTargetData(e,n){return this.lr(n),O.resolve()}removeTargetData(e,n){return this.ri.delete(n.target),this.si.Gr(n.targetId),this.targetCount-=1,O.resolve()}removeTargets(e,n,r){let s=0;const i=[];return this.ri.forEach((o,u)=>{u.sequenceNumber<=n&&r.get(u.targetId)===null&&(this.ri.delete(o),i.push(this.removeMatchingKeysForTargetId(e,u.targetId)),s++)}),O.waitFor(i).next(()=>s)}getTargetCount(e){return O.resolve(this.targetCount)}getTargetData(e,n){const r=this.ri.get(n)||null;return O.resolve(r)}addMatchingKeys(e,n,r){return this.si.$r(n,r),O.resolve()}removeMatchingKeys(e,n,r){this.si.Qr(n,r);const s=this.persistence.referenceDelegate,i=[];return s&&n.forEach(o=>{i.push(s.markPotentiallyOrphaned(e,o))}),O.waitFor(i)}removeMatchingKeysForTargetId(e,n){return this.si.Gr(n),O.resolve()}getMatchingKeysForTargetId(e,n){const r=this.si.jr(n);return O.resolve(r)}containsKey(e,n){return O.resolve(this.si.containsKey(n))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dg{constructor(e,n){this._i={},this.overlays={},this.ai=new Qu(0),this.ui=!1,this.ui=!0,this.ci=new m6,this.referenceDelegate=e(this),this.li=new b6(this),this.indexManager=new r6,this.remoteDocumentCache=function(s){return new _6(s)}(r=>this.referenceDelegate.hi(r)),this.serializer=new t6(n),this.Pi=new d6(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.ui=!1,Promise.resolve()}get started(){return this.ui}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let n=this.overlays[e.toKey()];return n||(n=new p6,this.overlays[e.toKey()]=n),n}getMutationQueue(e,n){let r=this._i[e.toKey()];return r||(r=new g6(n,this.referenceDelegate),this._i[e.toKey()]=r),r}getGlobalsCache(){return this.ci}getTargetCache(){return this.li}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Pi}runTransaction(e,n,r){J("MemoryPersistence","Starting transaction:",e);const s=new E6(this.ai.next());return this.referenceDelegate.Ti(),r(s).next(i=>this.referenceDelegate.Ei(s).next(()=>i)).toPromise().then(i=>(s.raiseOnCommittedEvent(),i))}Ii(e,n){return O.or(Object.values(this._i).map(r=>()=>r.containsKey(e,n)))}}class E6 extends Hw{constructor(e){super(),this.currentSequenceNumber=e}}class Ol{constructor(e){this.persistence=e,this.Ri=new Nl,this.Ai=null}static Vi(e){return new Ol(e)}get di(){if(this.Ai)return this.Ai;throw se(60996)}addReference(e,n,r){return this.Ri.addReference(r,n),this.di.delete(r.toString()),O.resolve()}removeReference(e,n,r){return this.Ri.removeReference(r,n),this.di.add(r.toString()),O.resolve()}markPotentiallyOrphaned(e,n){return this.di.add(n.toString()),O.resolve()}removeTarget(e,n){this.Ri.Gr(n.targetId).forEach(s=>this.di.add(s.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(e,n.targetId).next(s=>{s.forEach(i=>this.di.add(i.toString()))}).next(()=>r.removeTargetData(e,n))}Ti(){this.Ai=new Set}Ei(e){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return O.forEach(this.di,r=>{const s=ee.fromPath(r);return this.mi(e,s).next(i=>{i||n.removeEntry(s,oe.min())})}).next(()=>(this.Ai=null,n.apply(e)))}updateLimboDocument(e,n){return this.mi(e,n).next(r=>{r?this.di.delete(n.toString()):this.di.add(n.toString())})}hi(e){return 0}mi(e,n){return O.or([()=>O.resolve(this.Ri.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(e,n),()=>this.persistence.Ii(e,n)])}}class bu{constructor(e,n){this.persistence=e,this.fi=new Qr(r=>Kw(r.path),(r,s)=>r.isEqual(s)),this.garbageCollector=c6(this,n)}static Vi(e,n){return new bu(e,n)}Ti(){}Ei(e){return O.resolve()}forEachTarget(e,n){return this.persistence.getTargetCache().forEachTarget(e,n)}dr(e){const n=this.pr(e);return this.persistence.getTargetCache().getTargetCount(e).next(r=>n.next(s=>r+s))}pr(e){let n=0;return this.mr(e,r=>{n++}).next(()=>n)}mr(e,n){return O.forEach(this.fi,(r,s)=>this.wr(e,r,s).next(i=>i?O.resolve():n(s)))}removeTargets(e,n,r){return this.persistence.getTargetCache().removeTargets(e,n,r)}removeOrphanedDocuments(e,n){let r=0;const s=this.persistence.getRemoteDocumentCache(),i=s.newChangeBuffer();return s.ni(e,o=>this.wr(e,o,n).next(u=>{u||(r++,i.removeEntry(o,oe.min()))})).next(()=>i.apply(e)).next(()=>r)}markPotentiallyOrphaned(e,n){return this.fi.set(n,e.currentSequenceNumber),O.resolve()}removeTarget(e,n){const r=n.withSequenceNumber(e.currentSequenceNumber);return this.persistence.getTargetCache().updateTargetData(e,r)}addReference(e,n,r){return this.fi.set(r,e.currentSequenceNumber),O.resolve()}removeReference(e,n,r){return this.fi.set(r,e.currentSequenceNumber),O.resolve()}updateLimboDocument(e,n){return this.fi.set(n,e.currentSequenceNumber),O.resolve()}hi(e){let n=e.key.toString().length;return e.isFoundDocument()&&(n+=Ho(e.data.value)),n}wr(e,n,r){return O.or([()=>this.persistence.Ii(e,n),()=>this.persistence.getTargetCache().containsKey(e,n),()=>{const s=this.fi.get(n);return O.resolve(s!==void 0&&s>r)}])}getCacheSize(e){return this.persistence.getRemoteDocumentCache().getSize(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vl{constructor(e,n,r,s){this.targetId=e,this.fromCache=n,this.Ts=r,this.Es=s}static Is(e,n){let r=pe(),s=pe();for(const i of n.docChanges)switch(i.type){case 0:r=r.add(i.doc.key);break;case 1:s=s.add(i.doc.key)}return new Vl(e,n.fromCache,r,s)}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class v6{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class w6{constructor(){this.Rs=!1,this.As=!1,this.Vs=100,this.ds=function(){return ov()?8:$w(lt())>0?6:4}()}initialize(e,n){this.fs=e,this.indexManager=n,this.Rs=!0}getDocumentsMatchingQuery(e,n,r,s){const i={result:null};return this.gs(e,n).next(o=>{i.result=o}).next(()=>{if(!i.result)return this.ps(e,n,s,r).next(o=>{i.result=o})}).next(()=>{if(i.result)return;const o=new v6;return this.ys(e,n,o).next(u=>{if(i.result=u,this.As)return this.ws(e,n,o,u.size)})}).next(()=>i.result)}ws(e,n,r,s){return r.documentReadCount<this.Vs?(as()<=fe.DEBUG&&J("QueryEngine","SDK will not create cache indexes for query:",cs(n),"since it only creates cache indexes for collection contains","more than or equal to",this.Vs,"documents"),O.resolve()):(as()<=fe.DEBUG&&J("QueryEngine","Query:",cs(n),"scans",r.documentReadCount,"local documents and returns",s,"documents as results."),r.documentReadCount>this.ds*s?(as()<=fe.DEBUG&&J("QueryEngine","The SDK decides to create cache indexes for query:",cs(n),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,ln(n))):O.resolve())}gs(e,n){if(Nd(n))return O.resolve(null);let r=ln(n);return this.indexManager.getIndexType(e,r).next(s=>s===0?null:(n.limit!==null&&s===1&&(n=Fc(n,null,"F"),r=ln(n)),this.indexManager.getDocumentsMatchingTarget(e,r).next(i=>{const o=pe(...i);return this.fs.getDocuments(e,o).next(u=>this.indexManager.getMinOffset(e,r).next(c=>{const l=this.Ss(n,u);return this.bs(n,l,o,c.readTime)?this.gs(e,Fc(n,null,"F")):this.Ds(e,l,n,c)}))})))}ps(e,n,r,s){return Nd(n)||s.isEqual(oe.min())?O.resolve(null):this.fs.getDocuments(e,r).next(i=>{const o=this.Ss(n,i);return this.bs(n,o,r,s)?O.resolve(null):(as()<=fe.DEBUG&&J("QueryEngine","Re-using previous result from %s to execute query: %s",s.toString(),cs(n)),this.Ds(e,o,n,Bw(s,ji)).next(u=>u))})}Ss(e,n){let r=new Ke(og(e));return n.forEach((s,i)=>{ea(e,i)&&(r=r.add(i))}),r}bs(e,n,r,s){if(e.limit===null)return!1;if(r.size!==n.size)return!0;const i=e.limitType==="F"?n.last():n.first();return!!i&&(i.hasPendingWrites||i.version.compareTo(s)>0)}ys(e,n,r){return as()<=fe.DEBUG&&J("QueryEngine","Using full collection scan to execute query:",cs(n)),this.fs.getDocumentsMatchingQuery(e,n,dr.min(),r)}Ds(e,n,r,s){return this.fs.getDocumentsMatchingQuery(e,r,s).next(i=>(n.forEach(o=>{i=i.insert(o.key,o)}),i))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ml="LocalStore",T6=3e8;class I6{constructor(e,n,r,s){this.persistence=e,this.Cs=n,this.serializer=s,this.vs=new Ne(de),this.Fs=new Qr(i=>xl(i),kl),this.Ms=new Map,this.xs=e.getRemoteDocumentCache(),this.li=e.getTargetCache(),this.Pi=e.getBundleCache(),this.Os(r)}Os(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new f6(this.xs,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.xs.setIndexManager(this.indexManager),this.Cs.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>e.collect(n,this.vs))}}function A6(t,e,n,r){return new I6(t,e,n,r)}async function Rg(t,e){const n=ue(t);return await n.persistence.runTransaction("Handle user change","readonly",r=>{let s;return n.mutationQueue.getAllMutationBatches(r).next(i=>(s=i,n.Os(e),n.mutationQueue.getAllMutationBatches(r))).next(i=>{const o=[],u=[];let c=pe();for(const l of s){o.push(l.batchId);for(const f of l.mutations)c=c.add(f.key)}for(const l of i){u.push(l.batchId);for(const f of l.mutations)c=c.add(f.key)}return n.localDocuments.getDocuments(r,c).next(l=>({Ns:l,removedBatchIds:o,addedBatchIds:u}))})})}function C6(t,e){const n=ue(t);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",r=>{const s=e.batch.keys(),i=n.xs.newChangeBuffer({trackRemovals:!0});return function(u,c,l,f){const p=l.batch,g=p.keys();let y=O.resolve();return g.forEach(T=>{y=y.next(()=>f.getEntry(c,T)).next(R=>{const F=l.docVersions.get(T);we(F!==null,48541),R.version.compareTo(F)<0&&(p.applyToRemoteDocument(R,l),R.isValidDocument()&&(R.setReadTime(l.commitVersion),f.addEntry(R)))})}),y.next(()=>u.mutationQueue.removeMutationBatch(c,p))}(n,r,e,i).next(()=>i.apply(r)).next(()=>n.mutationQueue.performConsistencyCheck(r)).next(()=>n.documentOverlayCache.removeOverlaysForBatchId(r,s,e.batch.batchId)).next(()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,function(u){let c=pe();for(let l=0;l<u.mutationResults.length;++l)u.mutationResults[l].transformResults.length>0&&(c=c.add(u.batch.mutations[l].key));return c}(e))).next(()=>n.localDocuments.getDocuments(r,s))})}function Pg(t){const e=ue(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",n=>e.li.getLastRemoteSnapshotVersion(n))}function x6(t,e){const n=ue(t),r=e.snapshotVersion;let s=n.vs;return n.persistence.runTransaction("Apply remote event","readwrite-primary",i=>{const o=n.xs.newChangeBuffer({trackRemovals:!0});s=n.vs;const u=[];e.targetChanges.forEach((f,p)=>{const g=s.get(p);if(!g)return;u.push(n.li.removeMatchingKeys(i,f.removedDocuments,p).next(()=>n.li.addMatchingKeys(i,f.addedDocuments,p)));let y=g.withSequenceNumber(i.currentSequenceNumber);e.targetMismatches.get(p)!==null?y=y.withResumeToken(rt.EMPTY_BYTE_STRING,oe.min()).withLastLimboFreeSnapshotVersion(oe.min()):f.resumeToken.approximateByteSize()>0&&(y=y.withResumeToken(f.resumeToken,r)),s=s.insert(p,y),function(R,F,$){return R.resumeToken.approximateByteSize()===0||F.snapshotVersion.toMicroseconds()-R.snapshotVersion.toMicroseconds()>=T6?!0:$.addedDocuments.size+$.modifiedDocuments.size+$.removedDocuments.size>0}(g,y,f)&&u.push(n.li.updateTargetData(i,y))});let c=Ln(),l=pe();if(e.documentUpdates.forEach(f=>{e.resolvedLimboDocuments.has(f)&&u.push(n.persistence.referenceDelegate.updateLimboDocument(i,f))}),u.push(k6(i,o,e.documentUpdates).next(f=>{c=f.Bs,l=f.Ls})),!r.isEqual(oe.min())){const f=n.li.getLastRemoteSnapshotVersion(i).next(p=>n.li.setTargetsMetadata(i,i.currentSequenceNumber,r));u.push(f)}return O.waitFor(u).next(()=>o.apply(i)).next(()=>n.localDocuments.getLocalViewOfDocuments(i,c,l)).next(()=>c)}).then(i=>(n.vs=s,i))}function k6(t,e,n){let r=pe(),s=pe();return n.forEach(i=>r=r.add(i)),e.getEntries(t,r).next(i=>{let o=Ln();return n.forEach((u,c)=>{const l=i.get(u);c.isFoundDocument()!==l.isFoundDocument()&&(s=s.add(u)),c.isNoDocument()&&c.version.isEqual(oe.min())?(e.removeEntry(u,c.readTime),o=o.insert(u,c)):!l.isValidDocument()||c.version.compareTo(l.version)>0||c.version.compareTo(l.version)===0&&l.hasPendingWrites?(e.addEntry(c),o=o.insert(u,c)):J(Ml,"Ignoring outdated watch update for ",u,". Current version:",l.version," Watch version:",c.version)}),{Bs:o,Ls:s}})}function S6(t,e){const n=ue(t);return n.persistence.runTransaction("Get next mutation batch","readonly",r=>(e===void 0&&(e=Il),n.mutationQueue.getNextMutationBatchAfterBatchId(r,e)))}function D6(t,e){const n=ue(t);return n.persistence.runTransaction("Allocate target","readwrite",r=>{let s;return n.li.getTargetData(r,e).next(i=>i?(s=i,O.resolve(s)):n.li.allocateTargetId(r).next(o=>(s=new rr(e,o,"TargetPurposeListen",r.currentSequenceNumber),n.li.addTargetData(r,s).next(()=>s))))}).then(r=>{const s=n.vs.get(r.targetId);return(s===null||r.snapshotVersion.compareTo(s.snapshotVersion)>0)&&(n.vs=n.vs.insert(r.targetId,r),n.Fs.set(e,r.targetId)),r})}async function Lc(t,e,n){const r=ue(t),s=r.vs.get(e),i=n?"readwrite":"readwrite-primary";try{n||await r.persistence.runTransaction("Release target",i,o=>r.persistence.referenceDelegate.removeTarget(o,s))}catch(o){if(!Us(o))throw o;J(Ml,`Failed to update sequence numbers for target ${e}: ${o}`)}r.vs=r.vs.remove(e),r.Fs.delete(s.target)}function Kd(t,e,n){const r=ue(t);let s=oe.min(),i=pe();return r.persistence.runTransaction("Execute query","readwrite",o=>function(c,l,f){const p=ue(c),g=p.Fs.get(f);return g!==void 0?O.resolve(p.vs.get(g)):p.li.getTargetData(l,f)}(r,o,ln(e)).next(u=>{if(u)return s=u.lastLimboFreeSnapshotVersion,r.li.getMatchingKeysForTargetId(o,u.targetId).next(c=>{i=c})}).next(()=>r.Cs.getDocumentsMatchingQuery(o,e,n?s:oe.min(),n?i:pe())).next(u=>(R6(r,mT(e),u),{documents:u,ks:i})))}function R6(t,e,n){let r=t.Ms.get(e)||oe.min();n.forEach((s,i)=>{i.readTime.compareTo(r)>0&&(r=i.readTime)}),t.Ms.set(e,r)}class Gd{constructor(){this.activeTargetIds=vT()}Qs(e){this.activeTargetIds=this.activeTargetIds.add(e)}Gs(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Ws(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class P6{constructor(){this.vo=new Gd,this.Fo={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,n,r){}addLocalQueryTarget(e,n=!0){return n&&this.vo.Qs(e),this.Fo[e]||"not-current"}updateQueryState(e,n,r){this.Fo[e]=n}removeLocalQueryTarget(e){this.vo.Gs(e)}isLocalQueryTarget(e){return this.vo.activeTargetIds.has(e)}clearQueryState(e){delete this.Fo[e]}getAllActiveQueryTargets(){return this.vo.activeTargetIds}isActiveQueryTarget(e){return this.vo.activeTargetIds.has(e)}start(){return this.vo=new Gd,Promise.resolve()}handleUserChange(e,n,r){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class F6{Mo(e){}shutdown(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Qd="ConnectivityMonitor";class Jd{constructor(){this.xo=()=>this.Oo(),this.No=()=>this.Bo(),this.Lo=[],this.ko()}Mo(e){this.Lo.push(e)}shutdown(){window.removeEventListener("online",this.xo),window.removeEventListener("offline",this.No)}ko(){window.addEventListener("online",this.xo),window.addEventListener("offline",this.No)}Oo(){J(Qd,"Network connectivity changed: AVAILABLE");for(const e of this.Lo)e(0)}Bo(){J(Qd,"Network connectivity changed: UNAVAILABLE");for(const e of this.Lo)e(1)}static v(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Vo=null;function Uc(){return Vo===null?Vo=function(){return 268435456+Math.round(2147483648*Math.random())}():Vo++,"0x"+Vo.toString(16)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Za="RestConnection",N6={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery",ExecutePipeline:"executePipeline"};class O6{get qo(){return!1}constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const n=e.ssl?"https":"http",r=encodeURIComponent(this.databaseId.projectId),s=encodeURIComponent(this.databaseId.database);this.Ko=n+"://"+e.host,this.Uo=`projects/${r}/databases/${s}`,this.$o=this.databaseId.database===du?`project_id=${r}`:`project_id=${r}&database_id=${s}`}Wo(e,n,r,s,i){const o=Uc(),u=this.Qo(e,n.toUriEncodedString());J(Za,`Sending RPC '${e}' ${o}:`,u,r);const c={"google-cloud-resource-prefix":this.Uo,"x-goog-request-params":this.$o};this.Go(c,s,i);const{host:l}=new URL(u),f=io(l);return this.zo(e,u,c,r,f).then(p=>(J(Za,`Received RPC '${e}' ${o}: `,p),p),p=>{throw Ur(Za,`RPC '${e}' ${o} failed with error: `,p,"url: ",u,"request:",r),p})}jo(e,n,r,s,i,o){return this.Wo(e,n,r,s,i)}Go(e,n,r){e["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+Ms}(),e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),n&&n.headers.forEach((s,i)=>e[i]=s),r&&r.headers.forEach((s,i)=>e[i]=s)}Qo(e,n){const r=N6[e];let s=`${this.Ko}/v1/${n}:${r}`;return this.databaseInfo.apiKey&&(s=`${s}?key=${encodeURIComponent(this.databaseInfo.apiKey)}`),s}terminate(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class V6{constructor(e){this.Jo=e.Jo,this.Ho=e.Ho}Zo(e){this.Xo=e}Yo(e){this.e_=e}t_(e){this.n_=e}onMessage(e){this.r_=e}close(){this.Ho()}send(e){this.Jo(e)}i_(){this.Xo()}s_(){this.e_()}o_(e){this.n_(e)}__(e){this.r_(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const st="WebChannelConnection",ci=(t,e,n)=>{t.listen(e,r=>{try{n(r)}catch(s){setTimeout(()=>{throw s},0)}})};class Es extends O6{constructor(e){super(e),this.a_=[],this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}static u_(){if(!Es.c_){const e=Mm();ci(e,Vm.STAT_EVENT,n=>{n.stat===xc.PROXY?J(st,"STAT_EVENT: detected buffering proxy"):n.stat===xc.NOPROXY&&J(st,"STAT_EVENT: detected no buffering proxy")}),Es.c_=!0}}zo(e,n,r,s,i){const o=Uc();return new Promise((u,c)=>{const l=new Nm;l.setWithCredentials(!0),l.listenOnce(Om.COMPLETE,()=>{try{switch(l.getLastErrorCode()){case zo.NO_ERROR:const p=l.getResponseJson();J(st,`XHR for RPC '${e}' ${o} received:`,JSON.stringify(p)),u(p);break;case zo.TIMEOUT:J(st,`RPC '${e}' ${o} timed out`),c(new X(U.DEADLINE_EXCEEDED,"Request time out"));break;case zo.HTTP_ERROR:const g=l.getStatus();if(J(st,`RPC '${e}' ${o} failed with status:`,g,"response text:",l.getResponseText()),g>0){let y=l.getResponseJson();Array.isArray(y)&&(y=y[0]);const T=y==null?void 0:y.error;if(T&&T.status&&T.message){const R=function($){const N=$.toLowerCase().replace(/_/g,"-");return Object.values(U).indexOf(N)>=0?N:U.UNKNOWN}(T.status);c(new X(R,T.message))}else c(new X(U.UNKNOWN,"Server responded with status "+l.getStatus()))}else c(new X(U.UNAVAILABLE,"Connection failed."));break;default:se(9055,{l_:e,streamId:o,h_:l.getLastErrorCode(),P_:l.getLastError()})}}finally{J(st,`RPC '${e}' ${o} completed.`)}});const f=JSON.stringify(s);J(st,`RPC '${e}' ${o} sending request:`,s),l.send(n,"POST",f,r,15)})}T_(e,n,r){const s=Uc(),i=[this.Ko,"/","google.firestore.v1.Firestore","/",e,"/channel"],o=this.createWebChannelTransport(),u={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},c=this.longPollingOptions.timeoutSeconds;c!==void 0&&(u.longPollingTimeout=Math.round(1e3*c)),this.useFetchStreams&&(u.useFetchStreams=!0),this.Go(u.initMessageHeaders,n,r),u.encodeInitMessageHeaders=!0;const l=i.join("");J(st,`Creating RPC '${e}' stream ${s}: ${l}`,u);const f=o.createWebChannel(l,u);this.E_(f);let p=!1,g=!1;const y=new V6({Jo:T=>{g?J(st,`Not sending because RPC '${e}' stream ${s} is closed:`,T):(p||(J(st,`Opening RPC '${e}' stream ${s} transport.`),f.open(),p=!0),J(st,`RPC '${e}' stream ${s} sending:`,T),f.send(T))},Ho:()=>f.close()});return ci(f,di.EventType.OPEN,()=>{g||(J(st,`RPC '${e}' stream ${s} transport opened.`),y.i_())}),ci(f,di.EventType.CLOSE,()=>{g||(g=!0,J(st,`RPC '${e}' stream ${s} transport closed`),y.o_(),this.I_(f))}),ci(f,di.EventType.ERROR,T=>{g||(g=!0,Ur(st,`RPC '${e}' stream ${s} transport errored. Name:`,T.name,"Message:",T.message),y.o_(new X(U.UNAVAILABLE,"The operation could not be completed")))}),ci(f,di.EventType.MESSAGE,T=>{var R;if(!g){const F=T.data[0];we(!!F,16349);const $=F,N=($==null?void 0:$.error)||((R=$[0])==null?void 0:R.error);if(N){J(st,`RPC '${e}' stream ${s} received error:`,N);const z=N.status;let V=function(w){const _=Ue[w];if(_!==void 0)return yg(_)}(z),K=N.message;z==="NOT_FOUND"&&K.includes("database")&&K.includes("does not exist")&&K.includes(this.databaseId.database)&&Ur(`Database '${this.databaseId.database}' not found. Please check your project configuration.`),V===void 0&&(V=U.INTERNAL,K="Unknown error status: "+z+" with message "+N.message),g=!0,y.o_(new X(V,K)),f.close()}else J(st,`RPC '${e}' stream ${s} received:`,F),y.__(F)}}),Es.u_(),setTimeout(()=>{y.s_()},0),y}terminate(){this.a_.forEach(e=>e.close()),this.a_=[]}E_(e){this.a_.push(e)}I_(e){this.a_=this.a_.filter(n=>n===e)}Go(e,n,r){super.Go(e,n,r),this.databaseInfo.apiKey&&(e["x-goog-api-key"]=this.databaseInfo.apiKey)}createWebChannelTransport(){return Lm()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function M6(t){return new Es(t)}function ec(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function sa(t){return new qT(t,!0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Es.c_=!1;class Fg{constructor(e,n,r=1e3,s=1.5,i=6e4){this.Ci=e,this.timerId=n,this.R_=r,this.A_=s,this.V_=i,this.d_=0,this.m_=null,this.f_=Date.now(),this.reset()}reset(){this.d_=0}g_(){this.d_=this.V_}p_(e){this.cancel();const n=Math.floor(this.d_+this.y_()),r=Math.max(0,Date.now()-this.f_),s=Math.max(0,n-r);s>0&&J("ExponentialBackoff",`Backing off for ${s} ms (base delay: ${this.d_} ms, delay with jitter: ${n} ms, last attempt: ${r} ms ago)`),this.m_=this.Ci.enqueueAfterDelay(this.timerId,s,()=>(this.f_=Date.now(),e())),this.d_*=this.A_,this.d_<this.R_&&(this.d_=this.R_),this.d_>this.V_&&(this.d_=this.V_)}w_(){this.m_!==null&&(this.m_.skipDelay(),this.m_=null)}cancel(){this.m_!==null&&(this.m_.cancel(),this.m_=null)}y_(){return(Math.random()-.5)*this.d_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Yd="PersistentStream";class Ng{constructor(e,n,r,s,i,o,u,c){this.Ci=e,this.S_=r,this.b_=s,this.connection=i,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=u,this.listener=c,this.state=0,this.D_=0,this.C_=null,this.v_=null,this.stream=null,this.F_=0,this.M_=new Fg(e,n)}x_(){return this.state===1||this.state===5||this.O_()}O_(){return this.state===2||this.state===3}start(){this.F_=0,this.state!==4?this.auth():this.N_()}async stop(){this.x_()&&await this.close(0)}B_(){this.state=0,this.M_.reset()}L_(){this.O_()&&this.C_===null&&(this.C_=this.Ci.enqueueAfterDelay(this.S_,6e4,()=>this.k_()))}q_(e){this.K_(),this.stream.send(e)}async k_(){if(this.O_())return this.close(0)}K_(){this.C_&&(this.C_.cancel(),this.C_=null)}U_(){this.v_&&(this.v_.cancel(),this.v_=null)}async close(e,n){this.K_(),this.U_(),this.M_.cancel(),this.D_++,e!==4?this.M_.reset():n&&n.code===U.RESOURCE_EXHAUSTED?(Mn(n.toString()),Mn("Using maximum backoff delay to prevent overloading the backend."),this.M_.g_()):n&&n.code===U.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.W_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.t_(n)}W_(){}auth(){this.state=1;const e=this.Q_(this.D_),n=this.D_;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,s])=>{this.D_===n&&this.G_(r,s)},r=>{e(()=>{const s=new X(U.UNKNOWN,"Fetching auth token failed: "+r.message);return this.z_(s)})})}G_(e,n){const r=this.Q_(this.D_);this.stream=this.j_(e,n),this.stream.Zo(()=>{r(()=>this.listener.Zo())}),this.stream.Yo(()=>{r(()=>(this.state=2,this.v_=this.Ci.enqueueAfterDelay(this.b_,1e4,()=>(this.O_()&&(this.state=3),Promise.resolve())),this.listener.Yo()))}),this.stream.t_(s=>{r(()=>this.z_(s))}),this.stream.onMessage(s=>{r(()=>++this.F_==1?this.J_(s):this.onNext(s))})}N_(){this.state=5,this.M_.p_(async()=>{this.state=0,this.start()})}z_(e){return J(Yd,`close with error: ${e}`),this.stream=null,this.close(4,e)}Q_(e){return n=>{this.Ci.enqueueAndForget(()=>this.D_===e?n():(J(Yd,"stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class L6 extends Ng{constructor(e,n,r,s,i,o){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,r,s,o),this.serializer=i}j_(e,n){return this.connection.T_("Listen",e,n)}J_(e){return this.onNext(e)}onNext(e){this.M_.reset();const n=HT(this.serializer,e),r=function(i){if(!("targetChange"in i))return oe.min();const o=i.targetChange;return o.targetIds&&o.targetIds.length?oe.min():o.readTime?hn(o.readTime):oe.min()}(e);return this.listener.H_(n,r)}Z_(e){const n={};n.database=Mc(this.serializer),n.addTarget=function(i,o){let u;const c=o.target;if(u=Pc(c)?{documents:KT(i,c)}:{query:GT(i,c).ft},u.targetId=o.targetId,o.resumeToken.approximateByteSize()>0){u.resumeToken=vg(i,o.resumeToken);const l=Nc(i,o.expectedCount);l!==null&&(u.expectedCount=l)}else if(o.snapshotVersion.compareTo(oe.min())>0){u.readTime=yu(i,o.snapshotVersion.toTimestamp());const l=Nc(i,o.expectedCount);l!==null&&(u.expectedCount=l)}return u}(this.serializer,e);const r=JT(this.serializer,e);r&&(n.labels=r),this.q_(n)}X_(e){const n={};n.database=Mc(this.serializer),n.removeTarget=e,this.q_(n)}}class U6 extends Ng{constructor(e,n,r,s,i,o){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",n,r,s,o),this.serializer=i}get Y_(){return this.F_>0}start(){this.lastStreamToken=void 0,super.start()}W_(){this.Y_&&this.ea([])}j_(e,n){return this.connection.T_("Write",e,n)}J_(e){return we(!!e.streamToken,31322),this.lastStreamToken=e.streamToken,we(!e.writeResults||e.writeResults.length===0,55816),this.listener.ta()}onNext(e){we(!!e.streamToken,12678),this.lastStreamToken=e.streamToken,this.M_.reset();const n=WT(e.writeResults,e.commitTime),r=hn(e.commitTime);return this.listener.na(r,n)}ra(){const e={};e.database=Mc(this.serializer),this.q_(e)}ea(e){const n={streamToken:this.lastStreamToken,writes:e.map(r=>$T(this.serializer,r))};this.q_(n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class B6{}class q6 extends B6{constructor(e,n,r,s){super(),this.authCredentials=e,this.appCheckCredentials=n,this.connection=r,this.serializer=s,this.ia=!1}sa(){if(this.ia)throw new X(U.FAILED_PRECONDITION,"The client has already been terminated.")}Wo(e,n,r,s){return this.sa(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([i,o])=>this.connection.Wo(e,Oc(n,r),s,i,o)).catch(i=>{throw i.name==="FirebaseError"?(i.code===U.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),i):new X(U.UNKNOWN,i.toString())})}jo(e,n,r,s,i){return this.sa(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([o,u])=>this.connection.jo(e,Oc(n,r),s,o,u,i)).catch(o=>{throw o.name==="FirebaseError"?(o.code===U.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),o):new X(U.UNKNOWN,o.toString())})}terminate(){this.ia=!0,this.connection.terminate()}}function j6(t,e,n,r){return new q6(t,e,n,r)}class z6{constructor(e,n){this.asyncQueue=e,this.onlineStateHandler=n,this.state="Unknown",this.oa=0,this._a=null,this.aa=!0}ua(){this.oa===0&&(this.ca("Unknown"),this._a=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this._a=null,this.la("Backend didn't respond within 10 seconds."),this.ca("Offline"),Promise.resolve())))}ha(e){this.state==="Online"?this.ca("Unknown"):(this.oa++,this.oa>=1&&(this.Pa(),this.la(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.ca("Offline")))}set(e){this.Pa(),this.oa=0,e==="Online"&&(this.aa=!1),this.ca(e)}ca(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}la(e){const n=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.aa?(Mn(n),this.aa=!1):J("OnlineStateTracker",n)}Pa(){this._a!==null&&(this._a.cancel(),this._a=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Br="RemoteStore";class H6{constructor(e,n,r,s,i){this.localStore=e,this.datastore=n,this.asyncQueue=r,this.remoteSyncer={},this.Ta=[],this.Ea=new Map,this.Ia=new Set,this.Ra=[],this.Aa=i,this.Aa.Mo(o=>{r.enqueueAndForget(async()=>{Yr(this)&&(J(Br,"Restarting streams for network reachability change."),await async function(c){const l=ue(c);l.Ia.add(4),await co(l),l.Va.set("Unknown"),l.Ia.delete(4),await ia(l)}(this))})}),this.Va=new z6(r,s)}}async function ia(t){if(Yr(t))for(const e of t.Ra)await e(!0)}async function co(t){for(const e of t.Ra)await e(!1)}function Og(t,e){const n=ue(t);n.Ea.has(e.targetId)||(n.Ea.set(e.targetId,e),ql(n)?Bl(n):Bs(n).O_()&&Ul(n,e))}function Ll(t,e){const n=ue(t),r=Bs(n);n.Ea.delete(e),r.O_()&&Vg(n,e),n.Ea.size===0&&(r.O_()?r.L_():Yr(n)&&n.Va.set("Unknown"))}function Ul(t,e){if(t.da.$e(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(oe.min())>0){const n=t.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(n)}Bs(t).Z_(e)}function Vg(t,e){t.da.$e(e),Bs(t).X_(e)}function Bl(t){t.da=new MT({getRemoteKeysForTarget:e=>t.remoteSyncer.getRemoteKeysForTarget(e),At:e=>t.Ea.get(e)||null,ht:()=>t.datastore.serializer.databaseId}),Bs(t).start(),t.Va.ua()}function ql(t){return Yr(t)&&!Bs(t).x_()&&t.Ea.size>0}function Yr(t){return ue(t).Ia.size===0}function Mg(t){t.da=void 0}async function $6(t){t.Va.set("Online")}async function W6(t){t.Ea.forEach((e,n)=>{Ul(t,e)})}async function K6(t,e){Mg(t),ql(t)?(t.Va.ha(e),Bl(t)):t.Va.set("Unknown")}async function G6(t,e,n){if(t.Va.set("Online"),e instanceof Eg&&e.state===2&&e.cause)try{await async function(s,i){const o=i.cause;for(const u of i.targetIds)s.Ea.has(u)&&(await s.remoteSyncer.rejectListen(u,o),s.Ea.delete(u),s.da.removeTarget(u))}(t,e)}catch(r){J(Br,"Failed to remove targets %s: %s ",e.targetIds.join(","),r),await Eu(t,r)}else if(e instanceof Ko?t.da.Xe(e):e instanceof bg?t.da.st(e):t.da.tt(e),!n.isEqual(oe.min()))try{const r=await Pg(t.localStore);n.compareTo(r)>=0&&await function(i,o){const u=i.da.Tt(o);return u.targetChanges.forEach((c,l)=>{if(c.resumeToken.approximateByteSize()>0){const f=i.Ea.get(l);f&&i.Ea.set(l,f.withResumeToken(c.resumeToken,o))}}),u.targetMismatches.forEach((c,l)=>{const f=i.Ea.get(c);if(!f)return;i.Ea.set(c,f.withResumeToken(rt.EMPTY_BYTE_STRING,f.snapshotVersion)),Vg(i,c);const p=new rr(f.target,c,l,f.sequenceNumber);Ul(i,p)}),i.remoteSyncer.applyRemoteEvent(u)}(t,n)}catch(r){J(Br,"Failed to raise snapshot:",r),await Eu(t,r)}}async function Eu(t,e,n){if(!Us(e))throw e;t.Ia.add(1),await co(t),t.Va.set("Offline"),n||(n=()=>Pg(t.localStore)),t.asyncQueue.enqueueRetryable(async()=>{J(Br,"Retrying IndexedDB access"),await n(),t.Ia.delete(1),await ia(t)})}function Lg(t,e){return e().catch(n=>Eu(t,n,e))}async function oa(t){const e=ue(t),n=_r(e);let r=e.Ta.length>0?e.Ta[e.Ta.length-1].batchId:Il;for(;Q6(e);)try{const s=await S6(e.localStore,r);if(s===null){e.Ta.length===0&&n.L_();break}r=s.batchId,J6(e,s)}catch(s){await Eu(e,s)}Ug(e)&&Bg(e)}function Q6(t){return Yr(t)&&t.Ta.length<10}function J6(t,e){t.Ta.push(e);const n=_r(t);n.O_()&&n.Y_&&n.ea(e.mutations)}function Ug(t){return Yr(t)&&!_r(t).x_()&&t.Ta.length>0}function Bg(t){_r(t).start()}async function Y6(t){_r(t).ra()}async function X6(t){const e=_r(t);for(const n of t.Ta)e.ea(n.mutations)}async function Z6(t,e,n){const r=t.Ta.shift(),s=Rl.from(r,e,n);await Lg(t,()=>t.remoteSyncer.applySuccessfulWrite(s)),await oa(t)}async function eI(t,e){e&&_r(t).Y_&&await async function(r,s){if(function(o){return NT(o)&&o!==U.ABORTED}(s.code)){const i=r.Ta.shift();_r(r).B_(),await Lg(r,()=>r.remoteSyncer.rejectFailedWrite(i.batchId,s)),await oa(r)}}(t,e),Ug(t)&&Bg(t)}async function Xd(t,e){const n=ue(t);n.asyncQueue.verifyOperationInProgress(),J(Br,"RemoteStore received new credentials");const r=Yr(n);n.Ia.add(3),await co(n),r&&n.Va.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n.Ia.delete(3),await ia(n)}async function tI(t,e){const n=ue(t);e?(n.Ia.delete(2),await ia(n)):e||(n.Ia.add(2),await co(n),n.Va.set("Unknown"))}function Bs(t){return t.ma||(t.ma=function(n,r,s){const i=ue(n);return i.sa(),new L6(r,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,s)}(t.datastore,t.asyncQueue,{Zo:$6.bind(null,t),Yo:W6.bind(null,t),t_:K6.bind(null,t),H_:G6.bind(null,t)}),t.Ra.push(async e=>{e?(t.ma.B_(),ql(t)?Bl(t):t.Va.set("Unknown")):(await t.ma.stop(),Mg(t))})),t.ma}function _r(t){return t.fa||(t.fa=function(n,r,s){const i=ue(n);return i.sa(),new U6(r,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,s)}(t.datastore,t.asyncQueue,{Zo:()=>Promise.resolve(),Yo:Y6.bind(null,t),t_:eI.bind(null,t),ta:X6.bind(null,t),na:Z6.bind(null,t)}),t.Ra.push(async e=>{e?(t.fa.B_(),await oa(t)):(await t.fa.stop(),t.Ta.length>0&&(J(Br,`Stopping write stream with ${t.Ta.length} pending writes`),t.Ta=[]))})),t.fa}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jl{constructor(e,n,r,s,i){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=r,this.op=s,this.removalCallback=i,this.deferred=new ur,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}get promise(){return this.deferred.promise}static createAndSchedule(e,n,r,s,i){const o=Date.now()+r,u=new jl(e,n,o,s,i);return u.start(r),u}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new X(U.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function zl(t,e){if(Mn("AsyncQueue",`${e}: ${t}`),Us(t))return new X(U.UNAVAILABLE,`${e}: ${t}`);throw t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vs{static emptySet(e){return new vs(e.comparator)}constructor(e){this.comparator=e?(n,r)=>e(n,r)||ee.comparator(n.key,r.key):(n,r)=>ee.comparator(n.key,r.key),this.keyedMap=pi(),this.sortedSet=new Ne(this.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const n=this.keyedMap.get(e);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((n,r)=>(e(n),!1))}add(e){const n=this.delete(e.key);return n.copy(n.keyedMap.insert(e.key,e),n.sortedSet.insert(e,null))}delete(e){const n=this.get(e);return n?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(n)):this}isEqual(e){if(!(e instanceof vs)||this.size!==e.size)return!1;const n=this.sortedSet.getIterator(),r=e.sortedSet.getIterator();for(;n.hasNext();){const s=n.getNext().key,i=r.getNext().key;if(!s.isEqual(i))return!1}return!0}toString(){const e=[];return this.forEach(n=>{e.push(n.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,n){const r=new vs;return r.comparator=this.comparator,r.keyedMap=e,r.sortedSet=n,r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zd{constructor(){this.ga=new Ne(ee.comparator)}track(e){const n=e.doc.key,r=this.ga.get(n);r?e.type!==0&&r.type===3?this.ga=this.ga.insert(n,e):e.type===3&&r.type!==1?this.ga=this.ga.insert(n,{type:r.type,doc:e.doc}):e.type===2&&r.type===2?this.ga=this.ga.insert(n,{type:2,doc:e.doc}):e.type===2&&r.type===0?this.ga=this.ga.insert(n,{type:0,doc:e.doc}):e.type===1&&r.type===0?this.ga=this.ga.remove(n):e.type===1&&r.type===2?this.ga=this.ga.insert(n,{type:1,doc:r.doc}):e.type===0&&r.type===1?this.ga=this.ga.insert(n,{type:2,doc:e.doc}):se(63341,{Vt:e,pa:r}):this.ga=this.ga.insert(n,e)}ya(){const e=[];return this.ga.inorderTraversal((n,r)=>{e.push(r)}),e}}class Ns{constructor(e,n,r,s,i,o,u,c,l){this.query=e,this.docs=n,this.oldDocs=r,this.docChanges=s,this.mutatedKeys=i,this.fromCache=o,this.syncStateChanged=u,this.excludesMetadataChanges=c,this.hasCachedResults=l}static fromInitialDocuments(e,n,r,s,i){const o=[];return n.forEach(u=>{o.push({type:0,doc:u})}),new Ns(e,n,vs.emptySet(n),o,r,s,!0,!1,i)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&Zu(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const n=this.docChanges,r=e.docChanges;if(n.length!==r.length)return!1;for(let s=0;s<n.length;s++)if(n[s].type!==r[s].type||!n[s].doc.isEqual(r[s].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nI{constructor(){this.wa=void 0,this.Sa=[]}ba(){return this.Sa.some(e=>e.Da())}}class rI{constructor(){this.queries=e0(),this.onlineState="Unknown",this.Ca=new Set}terminate(){(function(n,r){const s=ue(n),i=s.queries;s.queries=e0(),i.forEach((o,u)=>{for(const c of u.Sa)c.onError(r)})})(this,new X(U.ABORTED,"Firestore shutting down"))}}function e0(){return new Qr(t=>ig(t),Zu)}async function sI(t,e){const n=ue(t);let r=3;const s=e.query;let i=n.queries.get(s);i?!i.ba()&&e.Da()&&(r=2):(i=new nI,r=e.Da()?0:1);try{switch(r){case 0:i.wa=await n.onListen(s,!0);break;case 1:i.wa=await n.onListen(s,!1);break;case 2:await n.onFirstRemoteStoreListen(s)}}catch(o){const u=zl(o,`Initialization of query '${cs(e.query)}' failed`);return void e.onError(u)}n.queries.set(s,i),i.Sa.push(e),e.va(n.onlineState),i.wa&&e.Fa(i.wa)&&Hl(n)}async function iI(t,e){const n=ue(t),r=e.query;let s=3;const i=n.queries.get(r);if(i){const o=i.Sa.indexOf(e);o>=0&&(i.Sa.splice(o,1),i.Sa.length===0?s=e.Da()?0:1:!i.ba()&&e.Da()&&(s=2))}switch(s){case 0:return n.queries.delete(r),n.onUnlisten(r,!0);case 1:return n.queries.delete(r),n.onUnlisten(r,!1);case 2:return n.onLastRemoteStoreUnlisten(r);default:return}}function oI(t,e){const n=ue(t);let r=!1;for(const s of e){const i=s.query,o=n.queries.get(i);if(o){for(const u of o.Sa)u.Fa(s)&&(r=!0);o.wa=s}}r&&Hl(n)}function uI(t,e,n){const r=ue(t),s=r.queries.get(e);if(s)for(const i of s.Sa)i.onError(n);r.queries.delete(e)}function Hl(t){t.Ca.forEach(e=>{e.next()})}var Bc,t0;(t0=Bc||(Bc={})).Ma="default",t0.Cache="cache";class aI{constructor(e,n,r){this.query=e,this.xa=n,this.Oa=!1,this.Na=null,this.onlineState="Unknown",this.options=r||{}}Fa(e){if(!this.options.includeMetadataChanges){const r=[];for(const s of e.docChanges)s.type!==3&&r.push(s);e=new Ns(e.query,e.docs,e.oldDocs,r,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let n=!1;return this.Oa?this.Ba(e)&&(this.xa.next(e),n=!0):this.La(e,this.onlineState)&&(this.ka(e),n=!0),this.Na=e,n}onError(e){this.xa.error(e)}va(e){this.onlineState=e;let n=!1;return this.Na&&!this.Oa&&this.La(this.Na,e)&&(this.ka(this.Na),n=!0),n}La(e,n){if(!e.fromCache||!this.Da())return!0;const r=n!=="Offline";return(!this.options.qa||!r)&&(!e.docs.isEmpty()||e.hasCachedResults||n==="Offline")}Ba(e){if(e.docChanges.length>0)return!0;const n=this.Na&&this.Na.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}ka(e){e=Ns.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.Oa=!0,this.xa.next(e)}Da(){return this.options.source!==Bc.Cache}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qg{constructor(e){this.key=e}}class jg{constructor(e){this.key=e}}class cI{constructor(e,n){this.query=e,this.Za=n,this.Xa=null,this.hasCachedResults=!1,this.current=!1,this.Ya=pe(),this.mutatedKeys=pe(),this.eu=og(e),this.tu=new vs(this.eu)}get nu(){return this.Za}ru(e,n){const r=n?n.iu:new Zd,s=n?n.tu:this.tu;let i=n?n.mutatedKeys:this.mutatedKeys,o=s,u=!1;const c=this.query.limitType==="F"&&s.size===this.query.limit?s.last():null,l=this.query.limitType==="L"&&s.size===this.query.limit?s.first():null;if(e.inorderTraversal((f,p)=>{const g=s.get(f),y=ea(this.query,p)?p:null,T=!!g&&this.mutatedKeys.has(g.key),R=!!y&&(y.hasLocalMutations||this.mutatedKeys.has(y.key)&&y.hasCommittedMutations);let F=!1;g&&y?g.data.isEqual(y.data)?T!==R&&(r.track({type:3,doc:y}),F=!0):this.su(g,y)||(r.track({type:2,doc:y}),F=!0,(c&&this.eu(y,c)>0||l&&this.eu(y,l)<0)&&(u=!0)):!g&&y?(r.track({type:0,doc:y}),F=!0):g&&!y&&(r.track({type:1,doc:g}),F=!0,(c||l)&&(u=!0)),F&&(y?(o=o.add(y),i=R?i.add(f):i.delete(f)):(o=o.delete(f),i=i.delete(f)))}),this.query.limit!==null)for(;o.size>this.query.limit;){const f=this.query.limitType==="F"?o.last():o.first();o=o.delete(f.key),i=i.delete(f.key),r.track({type:1,doc:f})}return{tu:o,iu:r,bs:u,mutatedKeys:i}}su(e,n){return e.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(e,n,r,s){const i=this.tu;this.tu=e.tu,this.mutatedKeys=e.mutatedKeys;const o=e.iu.ya();o.sort((f,p)=>function(y,T){const R=F=>{switch(F){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return se(20277,{Vt:F})}};return R(y)-R(T)}(f.type,p.type)||this.eu(f.doc,p.doc)),this.ou(r),s=s??!1;const u=n&&!s?this._u():[],c=this.Ya.size===0&&this.current&&!s?1:0,l=c!==this.Xa;return this.Xa=c,o.length!==0||l?{snapshot:new Ns(this.query,e.tu,i,o,e.mutatedKeys,c===0,l,!1,!!r&&r.resumeToken.approximateByteSize()>0),au:u}:{au:u}}va(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({tu:this.tu,iu:new Zd,mutatedKeys:this.mutatedKeys,bs:!1},!1)):{au:[]}}uu(e){return!this.Za.has(e)&&!!this.tu.has(e)&&!this.tu.get(e).hasLocalMutations}ou(e){e&&(e.addedDocuments.forEach(n=>this.Za=this.Za.add(n)),e.modifiedDocuments.forEach(n=>{}),e.removedDocuments.forEach(n=>this.Za=this.Za.delete(n)),this.current=e.current)}_u(){if(!this.current)return[];const e=this.Ya;this.Ya=pe(),this.tu.forEach(r=>{this.uu(r.key)&&(this.Ya=this.Ya.add(r.key))});const n=[];return e.forEach(r=>{this.Ya.has(r)||n.push(new jg(r))}),this.Ya.forEach(r=>{e.has(r)||n.push(new qg(r))}),n}cu(e){this.Za=e.ks,this.Ya=pe();const n=this.ru(e.documents);return this.applyChanges(n,!0)}lu(){return Ns.fromInitialDocuments(this.query,this.tu,this.mutatedKeys,this.Xa===0,this.hasCachedResults)}}const $l="SyncEngine";class lI{constructor(e,n,r){this.query=e,this.targetId=n,this.view=r}}class hI{constructor(e){this.key=e,this.hu=!1}}class fI{constructor(e,n,r,s,i,o){this.localStore=e,this.remoteStore=n,this.eventManager=r,this.sharedClientState=s,this.currentUser=i,this.maxConcurrentLimboResolutions=o,this.Pu={},this.Tu=new Qr(u=>ig(u),Zu),this.Eu=new Map,this.Iu=new Set,this.Ru=new Ne(ee.comparator),this.Au=new Map,this.Vu=new Nl,this.du={},this.mu=new Map,this.fu=Fs.ar(),this.onlineState="Unknown",this.gu=void 0}get isPrimaryClient(){return this.gu===!0}}async function dI(t,e,n=!0){const r=Gg(t);let s;const i=r.Tu.get(e);return i?(r.sharedClientState.addLocalQueryTarget(i.targetId),s=i.view.lu()):s=await zg(r,e,n,!0),s}async function pI(t,e){const n=Gg(t);await zg(n,e,!0,!1)}async function zg(t,e,n,r){const s=await D6(t.localStore,ln(e)),i=s.targetId,o=t.sharedClientState.addLocalQueryTarget(i,n);let u;return r&&(u=await mI(t,e,i,o==="current",s.resumeToken)),t.isPrimaryClient&&n&&Og(t.remoteStore,s),u}async function mI(t,e,n,r,s){t.pu=(p,g,y)=>async function(R,F,$,N){let z=F.view.ru($);z.bs&&(z=await Kd(R.localStore,F.query,!1).then(({documents:w})=>F.view.ru(w,z)));const V=N&&N.targetChanges.get(F.targetId),K=N&&N.targetMismatches.get(F.targetId)!=null,Y=F.view.applyChanges(z,R.isPrimaryClient,V,K);return r0(R,F.targetId,Y.au),Y.snapshot}(t,p,g,y);const i=await Kd(t.localStore,e,!0),o=new cI(e,i.ks),u=o.ru(i.documents),c=ao.createSynthesizedTargetChangeForCurrentChange(n,r&&t.onlineState!=="Offline",s),l=o.applyChanges(u,t.isPrimaryClient,c);r0(t,n,l.au);const f=new lI(e,n,o);return t.Tu.set(e,f),t.Eu.has(n)?t.Eu.get(n).push(e):t.Eu.set(n,[e]),l.snapshot}async function gI(t,e,n){const r=ue(t),s=r.Tu.get(e),i=r.Eu.get(s.targetId);if(i.length>1)return r.Eu.set(s.targetId,i.filter(o=>!Zu(o,e))),void r.Tu.delete(e);r.isPrimaryClient?(r.sharedClientState.removeLocalQueryTarget(s.targetId),r.sharedClientState.isActiveQueryTarget(s.targetId)||await Lc(r.localStore,s.targetId,!1).then(()=>{r.sharedClientState.clearQueryState(s.targetId),n&&Ll(r.remoteStore,s.targetId),qc(r,s.targetId)}).catch(Ls)):(qc(r,s.targetId),await Lc(r.localStore,s.targetId,!0))}async function _I(t,e){const n=ue(t),r=n.Tu.get(e),s=n.Eu.get(r.targetId);n.isPrimaryClient&&s.length===1&&(n.sharedClientState.removeLocalQueryTarget(r.targetId),Ll(n.remoteStore,r.targetId))}async function yI(t,e,n){const r=AI(t);try{const s=await function(o,u){const c=ue(o),l=Fe.now(),f=u.reduce((y,T)=>y.add(T.key),pe());let p,g;return c.persistence.runTransaction("Locally write mutations","readwrite",y=>{let T=Ln(),R=pe();return c.xs.getEntries(y,f).next(F=>{T=F,T.forEach(($,N)=>{N.isValidDocument()||(R=R.add($))})}).next(()=>c.localDocuments.getOverlayedDocuments(y,T)).next(F=>{p=F;const $=[];for(const N of u){const z=ST(N,p.get(N.key).overlayedDocument);z!=null&&$.push(new Jr(N.key,z,Xm(z.value.mapValue),Rn.exists(!0)))}return c.mutationQueue.addMutationBatch(y,l,$,u)}).next(F=>{g=F;const $=F.applyToLocalDocumentSet(p,R);return c.documentOverlayCache.saveOverlays(y,F.batchId,$)})}).then(()=>({batchId:g.batchId,changes:ag(p)}))}(r.localStore,e);r.sharedClientState.addPendingMutation(s.batchId),function(o,u,c){let l=o.du[o.currentUser.toKey()];l||(l=new Ne(de)),l=l.insert(u,c),o.du[o.currentUser.toKey()]=l}(r,s.batchId,n),await lo(r,s.changes),await oa(r.remoteStore)}catch(s){const i=zl(s,"Failed to persist write");n.reject(i)}}async function Hg(t,e){const n=ue(t);try{const r=await x6(n.localStore,e);e.targetChanges.forEach((s,i)=>{const o=n.Au.get(i);o&&(we(s.addedDocuments.size+s.modifiedDocuments.size+s.removedDocuments.size<=1,22616),s.addedDocuments.size>0?o.hu=!0:s.modifiedDocuments.size>0?we(o.hu,14607):s.removedDocuments.size>0&&(we(o.hu,42227),o.hu=!1))}),await lo(n,r,e)}catch(r){await Ls(r)}}function n0(t,e,n){const r=ue(t);if(r.isPrimaryClient&&n===0||!r.isPrimaryClient&&n===1){const s=[];r.Tu.forEach((i,o)=>{const u=o.view.va(e);u.snapshot&&s.push(u.snapshot)}),function(o,u){const c=ue(o);c.onlineState=u;let l=!1;c.queries.forEach((f,p)=>{for(const g of p.Sa)g.va(u)&&(l=!0)}),l&&Hl(c)}(r.eventManager,e),s.length&&r.Pu.H_(s),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function bI(t,e,n){const r=ue(t);r.sharedClientState.updateQueryState(e,"rejected",n);const s=r.Au.get(e),i=s&&s.key;if(i){let o=new Ne(ee.comparator);o=o.insert(i,ut.newNoDocument(i,oe.min()));const u=pe().add(i),c=new ra(oe.min(),new Map,new Ne(de),o,u);await Hg(r,c),r.Ru=r.Ru.remove(i),r.Au.delete(e),Wl(r)}else await Lc(r.localStore,e,!1).then(()=>qc(r,e,n)).catch(Ls)}async function EI(t,e){const n=ue(t),r=e.batch.batchId;try{const s=await C6(n.localStore,e);Wg(n,r,null),$g(n,r),n.sharedClientState.updateMutationState(r,"acknowledged"),await lo(n,s)}catch(s){await Ls(s)}}async function vI(t,e,n){const r=ue(t);try{const s=await function(o,u){const c=ue(o);return c.persistence.runTransaction("Reject batch","readwrite-primary",l=>{let f;return c.mutationQueue.lookupMutationBatch(l,u).next(p=>(we(p!==null,37113),f=p.keys(),c.mutationQueue.removeMutationBatch(l,p))).next(()=>c.mutationQueue.performConsistencyCheck(l)).next(()=>c.documentOverlayCache.removeOverlaysForBatchId(l,f,u)).next(()=>c.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(l,f)).next(()=>c.localDocuments.getDocuments(l,f))})}(r.localStore,e);Wg(r,e,n),$g(r,e),r.sharedClientState.updateMutationState(e,"rejected",n),await lo(r,s)}catch(s){await Ls(s)}}function $g(t,e){(t.mu.get(e)||[]).forEach(n=>{n.resolve()}),t.mu.delete(e)}function Wg(t,e,n){const r=ue(t);let s=r.du[r.currentUser.toKey()];if(s){const i=s.get(e);i&&(n?i.reject(n):i.resolve(),s=s.remove(e)),r.du[r.currentUser.toKey()]=s}}function qc(t,e,n=null){t.sharedClientState.removeLocalQueryTarget(e);for(const r of t.Eu.get(e))t.Tu.delete(r),n&&t.Pu.yu(r,n);t.Eu.delete(e),t.isPrimaryClient&&t.Vu.Gr(e).forEach(r=>{t.Vu.containsKey(r)||Kg(t,r)})}function Kg(t,e){t.Iu.delete(e.path.canonicalString());const n=t.Ru.get(e);n!==null&&(Ll(t.remoteStore,n),t.Ru=t.Ru.remove(e),t.Au.delete(n),Wl(t))}function r0(t,e,n){for(const r of n)r instanceof qg?(t.Vu.addReference(r.key,e),wI(t,r)):r instanceof jg?(J($l,"Document no longer in limbo: "+r.key),t.Vu.removeReference(r.key,e),t.Vu.containsKey(r.key)||Kg(t,r.key)):se(19791,{wu:r})}function wI(t,e){const n=e.key,r=n.path.canonicalString();t.Ru.get(n)||t.Iu.has(r)||(J($l,"New document in limbo: "+n),t.Iu.add(r),Wl(t))}function Wl(t){for(;t.Iu.size>0&&t.Ru.size<t.maxConcurrentLimboResolutions;){const e=t.Iu.values().next().value;t.Iu.delete(e);const n=new ee(Pe.fromString(e)),r=t.fu.next();t.Au.set(r,new hI(n)),t.Ru=t.Ru.insert(n,r),Og(t.remoteStore,new rr(ln(Sl(n.path)),r,"TargetPurposeLimboResolution",Qu.ce))}}async function lo(t,e,n){const r=ue(t),s=[],i=[],o=[];r.Tu.isEmpty()||(r.Tu.forEach((u,c)=>{o.push(r.pu(c,e,n).then(l=>{var f;if((l||n)&&r.isPrimaryClient){const p=l?!l.fromCache:(f=n==null?void 0:n.targetChanges.get(c.targetId))==null?void 0:f.current;r.sharedClientState.updateQueryState(c.targetId,p?"current":"not-current")}if(l){s.push(l);const p=Vl.Is(c.targetId,l);i.push(p)}}))}),await Promise.all(o),r.Pu.H_(s),await async function(c,l){const f=ue(c);try{await f.persistence.runTransaction("notifyLocalViewChanges","readwrite",p=>O.forEach(l,g=>O.forEach(g.Ts,y=>f.persistence.referenceDelegate.addReference(p,g.targetId,y)).next(()=>O.forEach(g.Es,y=>f.persistence.referenceDelegate.removeReference(p,g.targetId,y)))))}catch(p){if(!Us(p))throw p;J(Ml,"Failed to update sequence numbers: "+p)}for(const p of l){const g=p.targetId;if(!p.fromCache){const y=f.vs.get(g),T=y.snapshotVersion,R=y.withLastLimboFreeSnapshotVersion(T);f.vs=f.vs.insert(g,R)}}}(r.localStore,i))}async function TI(t,e){const n=ue(t);if(!n.currentUser.isEqual(e)){J($l,"User change. New user:",e.toKey());const r=await Rg(n.localStore,e);n.currentUser=e,function(i,o){i.mu.forEach(u=>{u.forEach(c=>{c.reject(new X(U.CANCELLED,o))})}),i.mu.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,r.removedBatchIds,r.addedBatchIds),await lo(n,r.Ns)}}function II(t,e){const n=ue(t),r=n.Au.get(e);if(r&&r.hu)return pe().add(r.key);{let s=pe();const i=n.Eu.get(e);if(!i)return s;for(const o of i){const u=n.Tu.get(o);s=s.unionWith(u.view.nu)}return s}}function Gg(t){const e=ue(t);return e.remoteStore.remoteSyncer.applyRemoteEvent=Hg.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=II.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=bI.bind(null,e),e.Pu.H_=oI.bind(null,e.eventManager),e.Pu.yu=uI.bind(null,e.eventManager),e}function AI(t){const e=ue(t);return e.remoteStore.remoteSyncer.applySuccessfulWrite=EI.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=vI.bind(null,e),e}class vu{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(e){this.serializer=sa(e.databaseInfo.databaseId),this.sharedClientState=this.Du(e),this.persistence=this.Cu(e),await this.persistence.start(),this.localStore=this.vu(e),this.gcScheduler=this.Fu(e,this.localStore),this.indexBackfillerScheduler=this.Mu(e,this.localStore)}Fu(e,n){return null}Mu(e,n){return null}vu(e){return A6(this.persistence,new w6,e.initialUser,this.serializer)}Cu(e){return new Dg(Ol.Vi,this.serializer)}Du(e){return new P6}async terminate(){var e,n;(e=this.gcScheduler)==null||e.stop(),(n=this.indexBackfillerScheduler)==null||n.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}vu.provider={build:()=>new vu};class CI extends vu{constructor(e){super(),this.cacheSizeBytes=e}Fu(e,n){we(this.persistence.referenceDelegate instanceof bu,46915);const r=this.persistence.referenceDelegate.garbageCollector;return new u6(r,e.asyncQueue,n)}Cu(e){const n=this.cacheSizeBytes!==void 0?bt.withCacheSize(this.cacheSizeBytes):bt.DEFAULT;return new Dg(r=>bu.Vi(r,n),this.serializer)}}class jc{async initialize(e,n){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>n0(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=TI.bind(null,this.syncEngine),await tI(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return function(){return new rI}()}createDatastore(e){const n=sa(e.databaseInfo.databaseId),r=M6(e.databaseInfo);return j6(e.authCredentials,e.appCheckCredentials,r,n)}createRemoteStore(e){return function(r,s,i,o,u){return new H6(r,s,i,o,u)}(this.localStore,this.datastore,e.asyncQueue,n=>n0(this.syncEngine,n,0),function(){return Jd.v()?new Jd:new F6}())}createSyncEngine(e,n){return function(s,i,o,u,c,l,f){const p=new fI(s,i,o,u,c,l);return f&&(p.gu=!0),p}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,n)}async terminate(){var e,n;await async function(s){const i=ue(s);J(Br,"RemoteStore shutting down."),i.Ia.add(5),await co(i),i.Aa.shutdown(),i.Va.set("Unknown")}(this.remoteStore),(e=this.datastore)==null||e.terminate(),(n=this.eventManager)==null||n.terminate()}}jc.provider={build:()=>new jc};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xI{constructor(e){this.observer=e,this.muted=!1}next(e){this.muted||this.observer.next&&this.Ou(this.observer.next,e)}error(e){this.muted||(this.observer.error?this.Ou(this.observer.error,e):Mn("Uncaught Error in snapshot listener:",e.toString()))}Nu(){this.muted=!0}Ou(e,n){setTimeout(()=>{this.muted||e(n)},0)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const yr="FirestoreClient";class kI{constructor(e,n,r,s,i){this.authCredentials=e,this.appCheckCredentials=n,this.asyncQueue=r,this._databaseInfo=s,this.user=it.UNAUTHENTICATED,this.clientId=wl.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=i,this.authCredentials.start(r,async o=>{J(yr,"Received user=",o.uid),await this.authCredentialListener(o),this.user=o}),this.appCheckCredentials.start(r,o=>(J(yr,"Received new app check token=",o),this.appCheckCredentialListener(o,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this._databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}terminate(){this.asyncQueue.enterRestrictedMode();const e=new ur;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(n){const r=zl(n,"Failed to shutdown persistence");e.reject(r)}}),e.promise}}async function tc(t,e){t.asyncQueue.verifyOperationInProgress(),J(yr,"Initializing OfflineComponentProvider");const n=t.configuration;await e.initialize(n);let r=n.initialUser;t.setCredentialChangeListener(async s=>{r.isEqual(s)||(await Rg(e.localStore,s),r=s)}),e.persistence.setDatabaseDeletedListener(()=>t.terminate()),t._offlineComponents=e}async function s0(t,e){t.asyncQueue.verifyOperationInProgress();const n=await SI(t);J(yr,"Initializing OnlineComponentProvider"),await e.initialize(n,t.configuration),t.setCredentialChangeListener(r=>Xd(e.remoteStore,r)),t.setAppCheckTokenChangeListener((r,s)=>Xd(e.remoteStore,s)),t._onlineComponents=e}async function SI(t){if(!t._offlineComponents)if(t._uninitializedComponentsProvider){J(yr,"Using user provided OfflineComponentProvider");try{await tc(t,t._uninitializedComponentsProvider._offline)}catch(e){const n=e;if(!function(s){return s.name==="FirebaseError"?s.code===U.FAILED_PRECONDITION||s.code===U.UNIMPLEMENTED:!(typeof DOMException<"u"&&s instanceof DOMException)||s.code===22||s.code===20||s.code===11}(n))throw n;Ur("Error using user provided cache. Falling back to memory cache: "+n),await tc(t,new vu)}}else J(yr,"Using default OfflineComponentProvider"),await tc(t,new CI(void 0));return t._offlineComponents}async function Qg(t){return t._onlineComponents||(t._uninitializedComponentsProvider?(J(yr,"Using user provided OnlineComponentProvider"),await s0(t,t._uninitializedComponentsProvider._online)):(J(yr,"Using default OnlineComponentProvider"),await s0(t,new jc))),t._onlineComponents}function DI(t){return Qg(t).then(e=>e.syncEngine)}async function RI(t){const e=await Qg(t),n=e.eventManager;return n.onListen=dI.bind(null,e.syncEngine),n.onUnlisten=gI.bind(null,e.syncEngine),n.onFirstRemoteStoreListen=pI.bind(null,e.syncEngine),n.onLastRemoteStoreUnlisten=_I.bind(null,e.syncEngine),n}function PI(t,e,n={}){const r=new ur;return t.asyncQueue.enqueueAndForget(async()=>function(i,o,u,c,l){const f=new xI({next:g=>{f.Nu(),o.enqueueAndForget(()=>iI(i,p));const y=g.docs.has(u);!y&&g.fromCache?l.reject(new X(U.UNAVAILABLE,"Failed to get document because the client is offline.")):y&&g.fromCache&&c&&c.source==="server"?l.reject(new X(U.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):l.resolve(g)},error:g=>l.reject(g)}),p=new aI(Sl(u.path),f,{includeMetadataChanges:!0,qa:!0});return sI(i,p)}(await RI(t),t.asyncQueue,e,n,r)),r.promise}function FI(t,e){const n=new ur;return t.asyncQueue.enqueueAndForget(async()=>yI(await DI(t),e,n)),n.promise}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Jg(t){const e={};return t.timeoutSeconds!==void 0&&(e.timeoutSeconds=t.timeoutSeconds),e}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const NI="ComponentProvider",i0=new Map;function OI(t,e,n,r,s){return new Jw(t,e,n,s.host,s.ssl,s.experimentalForceLongPolling,s.experimentalAutoDetectLongPolling,Jg(s.experimentalLongPollingOptions),s.useFetchStreams,s.isUsingEmulator,r)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Yg="firestore.googleapis.com",o0=!0;class u0{constructor(e){if(e.host===void 0){if(e.ssl!==void 0)throw new X(U.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host=Yg,this.ssl=o0}else this.host=e.host,this.ssl=e.ssl??o0;if(this.isUsingEmulator=e.emulatorOptions!==void 0,this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=Sg;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<i6)throw new X(U.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}Uw("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=Jg(e.experimentalLongPollingOptions??{}),function(r){if(r.timeoutSeconds!==void 0){if(isNaN(r.timeoutSeconds))throw new X(U.INVALID_ARGUMENT,`invalid long polling timeout: ${r.timeoutSeconds} (must not be NaN)`);if(r.timeoutSeconds<5)throw new X(U.INVALID_ARGUMENT,`invalid long polling timeout: ${r.timeoutSeconds} (minimum allowed value is 5)`);if(r.timeoutSeconds>30)throw new X(U.INVALID_ARGUMENT,`invalid long polling timeout: ${r.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(r,s){return r.timeoutSeconds===s.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class ua{constructor(e,n,r,s){this._authCredentials=e,this._appCheckCredentials=n,this._databaseId=r,this._app=s,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new u0({}),this._settingsFrozen=!1,this._emulatorOptions={},this._terminateTask="notTerminated"}get app(){if(!this._app)throw new X(U.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new X(U.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new u0(e),this._emulatorOptions=e.emulatorOptions||{},e.credentials!==void 0&&(this._authCredentials=function(r){if(!r)return new Sw;switch(r.type){case"firstParty":return new Fw(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new X(U.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_getEmulatorOptions(){return this._emulatorOptions}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(n){const r=i0.get(n);r&&(J(NI,"Removing Datastore"),i0.delete(n),r.terminate())}(this),Promise.resolve()}}function VI(t,e,n,r={}){var l;t=qi(t,ua);const s=io(e),i=t._getSettings(),o={...i,emulatorOptions:t._getEmulatorOptions()},u=`${e}:${n}`;s&&Cm(`https://${u}`),i.host!==Yg&&i.host!==u&&Ur("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used.");const c={...i,host:u,ssl:s,emulatorOptions:r};if(!fr(c,o)&&(t._setSettings(c),r.mockUserToken)){let f,p;if(typeof r.mockUserToken=="string")f=r.mockUserToken,p=it.MOCK_USER;else{f=ev(r.mockUserToken,(l=t._app)==null?void 0:l.options.projectId);const g=r.mockUserToken.sub||r.mockUserToken.user_id;if(!g)throw new X(U.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");p=new it(g)}t._authCredentials=new Dw(new Bm(f,p))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kl{constructor(e,n,r){this.converter=n,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new Kl(this.firestore,e,this._query)}}class We{constructor(e,n,r){this.converter=n,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new ar(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new We(this.firestore,e,this._key)}toJSON(){return{type:We._jsonSchemaVersion,referencePath:this._key.toString()}}static fromJSON(e,n,r){if(oo(n,We._jsonSchema))return new We(e,r||null,new ee(Pe.fromString(n.referencePath)))}}We._jsonSchemaVersion="firestore/documentReference/1.0",We._jsonSchema={type:Be("string",We._jsonSchemaVersion),referencePath:Be("string")};class ar extends Kl{constructor(e,n,r){super(e,n,Sl(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new We(this.firestore,null,new ee(e))}withConverter(e){return new ar(this.firestore,e,this._path)}}function Xg(t,e,...n){if(t=ht(t),qm("collection","path",e),t instanceof ua){const r=Pe.fromString(e,...n);return vd(r),new ar(t,null,r)}{if(!(t instanceof We||t instanceof ar))throw new X(U.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(Pe.fromString(e,...n));return vd(r),new ar(t.firestore,null,r)}}function Zg(t,e,...n){if(t=ht(t),arguments.length===1&&(e=wl.newId()),qm("doc","path",e),t instanceof ua){const r=Pe.fromString(e,...n);return Ed(r),new We(t,null,new ee(r))}{if(!(t instanceof We||t instanceof ar))throw new X(U.INVALID_ARGUMENT,"Expected first argument to doc() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(Pe.fromString(e,...n));return Ed(r),new We(t.firestore,t instanceof ar?t.converter:null,new ee(r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const a0="AsyncQueue";class c0{constructor(e=Promise.resolve()){this.Yu=[],this.ec=!1,this.tc=[],this.nc=null,this.rc=!1,this.sc=!1,this.oc=[],this.M_=new Fg(this,"async_queue_retry"),this._c=()=>{const r=ec();r&&J(a0,"Visibility state changed to "+r.visibilityState),this.M_.w_()},this.ac=e;const n=ec();n&&typeof n.addEventListener=="function"&&n.addEventListener("visibilitychange",this._c)}get isShuttingDown(){return this.ec}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.uc(),this.cc(e)}enterRestrictedMode(e){if(!this.ec){this.ec=!0,this.sc=e||!1;const n=ec();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this._c)}}enqueue(e){if(this.uc(),this.ec)return new Promise(()=>{});const n=new ur;return this.cc(()=>this.ec&&this.sc?Promise.resolve():(e().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Yu.push(e),this.lc()))}async lc(){if(this.Yu.length!==0){try{await this.Yu[0](),this.Yu.shift(),this.M_.reset()}catch(e){if(!Us(e))throw e;J(a0,"Operation failed with retryable error: "+e)}this.Yu.length>0&&this.M_.p_(()=>this.lc())}}cc(e){const n=this.ac.then(()=>(this.rc=!0,e().catch(r=>{throw this.nc=r,this.rc=!1,Mn("INTERNAL UNHANDLED ERROR: ",l0(r)),r}).then(r=>(this.rc=!1,r))));return this.ac=n,n}enqueueAfterDelay(e,n,r){this.uc(),this.oc.indexOf(e)>-1&&(n=0);const s=jl.createAndSchedule(this,e,n,r,i=>this.hc(i));return this.tc.push(s),s}uc(){this.nc&&se(47125,{Pc:l0(this.nc)})}verifyOperationInProgress(){}async Tc(){let e;do e=this.ac,await e;while(e!==this.ac)}Ec(e){for(const n of this.tc)if(n.timerId===e)return!0;return!1}Ic(e){return this.Tc().then(()=>{this.tc.sort((n,r)=>n.targetTimeMs-r.targetTimeMs);for(const n of this.tc)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.Tc()})}Rc(e){this.oc.push(e)}hc(e){const n=this.tc.indexOf(e);this.tc.splice(n,1)}}function l0(t){let e=t.message||"";return t.stack&&(e=t.stack.includes(t.message)?t.stack:t.message+`
`+t.stack),e}class Gl extends ua{constructor(e,n,r,s){super(e,n,r,s),this.type="firestore",this._queue=new c0,this._persistenceKey=(s==null?void 0:s.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new c0(e),this._firestoreClient=void 0,await e}}}function MI(t,e){const n=typeof t=="object"?t:El(),r=typeof t=="string"?t:du,s=Kr(n,"firestore").getImmediate({identifier:r});if(!s._initialized){const i=X3("firestore");i&&VI(s,...i)}return s}function e1(t){if(t._terminated)throw new X(U.FAILED_PRECONDITION,"The client has already been terminated.");return t._firestoreClient||LI(t),t._firestoreClient}function LI(t){var r,s,i,o;const e=t._freezeSettings(),n=OI(t._databaseId,((r=t._app)==null?void 0:r.options.appId)||"",t._persistenceKey,(s=t._app)==null?void 0:s.options.apiKey,e);t._componentsProvider||(i=e.localCache)!=null&&i._offlineComponentProvider&&((o=e.localCache)!=null&&o._onlineComponentProvider)&&(t._componentsProvider={_offline:e.localCache._offlineComponentProvider,_online:e.localCache._onlineComponentProvider}),t._firestoreClient=new kI(t._authCredentials,t._appCheckCredentials,t._queue,n,t._componentsProvider&&function(c){const l=c==null?void 0:c._online.build();return{_offline:c==null?void 0:c._offline.build(l),_online:l}}(t._componentsProvider))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nt{constructor(e){this._byteString=e}static fromBase64String(e){try{return new Nt(rt.fromBase64String(e))}catch(n){throw new X(U.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(e){return new Nt(rt.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}toJSON(){return{type:Nt._jsonSchemaVersion,bytes:this.toBase64()}}static fromJSON(e){if(oo(e,Nt._jsonSchema))return Nt.fromBase64String(e.bytes)}}Nt._jsonSchemaVersion="firestore/bytes/1.0",Nt._jsonSchema={type:Be("string",Nt._jsonSchemaVersion),bytes:Be("string")};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class t1{constructor(...e){for(let n=0;n<e.length;++n)if(e[n].length===0)throw new X(U.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new nt(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ql{constructor(e){this._methodName=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fn{constructor(e,n){if(!isFinite(e)||e<-90||e>90)throw new X(U.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(n)||n<-180||n>180)throw new X(U.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=e,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}_compareTo(e){return de(this._lat,e._lat)||de(this._long,e._long)}toJSON(){return{latitude:this._lat,longitude:this._long,type:fn._jsonSchemaVersion}}static fromJSON(e){if(oo(e,fn._jsonSchema))return new fn(e.latitude,e.longitude)}}fn._jsonSchemaVersion="firestore/geoPoint/1.0",fn._jsonSchema={type:Be("string",fn._jsonSchemaVersion),latitude:Be("number"),longitude:Be("number")};/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ht{constructor(e){this._values=(e||[]).map(n=>n)}toArray(){return this._values.map(e=>e)}isEqual(e){return function(r,s){if(r.length!==s.length)return!1;for(let i=0;i<r.length;++i)if(r[i]!==s[i])return!1;return!0}(this._values,e._values)}toJSON(){return{type:Ht._jsonSchemaVersion,vectorValues:this._values}}static fromJSON(e){if(oo(e,Ht._jsonSchema)){if(Array.isArray(e.vectorValues)&&e.vectorValues.every(n=>typeof n=="number"))return new Ht(e.vectorValues);throw new X(U.INVALID_ARGUMENT,"Expected 'vectorValues' field to be a number array")}}}Ht._jsonSchemaVersion="firestore/vectorValue/1.0",Ht._jsonSchema={type:Be("string",Ht._jsonSchemaVersion),vectorValues:Be("object")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const UI=/^__.*__$/;class BI{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return this.fieldMask!==null?new Jr(e,this.data,this.fieldMask,n,this.fieldTransforms):new uo(e,this.data,n,this.fieldTransforms)}}function n1(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw se(40011,{dataSource:t})}}class Jl{constructor(e,n,r,s,i,o){this.settings=e,this.databaseId=n,this.serializer=r,this.ignoreUndefinedProperties=s,i===void 0&&this.Ac(),this.fieldTransforms=i||[],this.fieldMask=o||[]}get path(){return this.settings.path}get dataSource(){return this.settings.dataSource}i(e){return new Jl({...this.settings,...e},this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}dc(e){var s;const n=(s=this.path)==null?void 0:s.child(e),r=this.i({path:n,arrayElement:!1});return r.mc(e),r}fc(e){var s;const n=(s=this.path)==null?void 0:s.child(e),r=this.i({path:n,arrayElement:!1});return r.Ac(),r}gc(e){return this.i({path:void 0,arrayElement:!0})}yc(e){return wu(e,this.settings.methodName,this.settings.hasConverter||!1,this.path,this.settings.targetDoc)}contains(e){return this.fieldMask.find(n=>e.isPrefixOf(n))!==void 0||this.fieldTransforms.find(n=>e.isPrefixOf(n.field))!==void 0}Ac(){if(this.path)for(let e=0;e<this.path.length;e++)this.mc(this.path.get(e))}mc(e){if(e.length===0)throw this.yc("Document fields must not be empty");if(n1(this.dataSource)&&UI.test(e))throw this.yc('Document fields cannot begin and end with "__"')}}class qI{constructor(e,n,r){this.databaseId=e,this.ignoreUndefinedProperties=n,this.serializer=r||sa(e)}A(e,n,r,s=!1){return new Jl({dataSource:e,methodName:n,targetDoc:r,path:nt.emptyPath(),arrayElement:!1,hasConverter:s},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function jI(t){const e=t._freezeSettings(),n=sa(t._databaseId);return new qI(t._databaseId,!!e.ignoreUndefinedProperties,n)}function zI(t,e,n,r,s,i={}){const o=t.A(i.merge||i.mergeFields?2:0,e,n,s);o1("Data must be an object, but it was:",o,r);const u=s1(r,o);let c,l;if(i.merge)c=new Bt(o.fieldMask),l=o.fieldTransforms;else if(i.mergeFields){const f=[];for(const p of i.mergeFields){const g=Xl(e,p,n);if(!o.contains(g))throw new X(U.INVALID_ARGUMENT,`Field '${g}' is specified in your field mask but missing from your input data.`);WI(f,g)||f.push(g)}c=new Bt(f),l=o.fieldTransforms.filter(p=>c.covers(p.field))}else c=null,l=o.fieldTransforms;return new BI(new Ft(u),c,l)}class Yl extends Ql{_toFieldTransform(e){return new AT(e.path,new Wi)}isEqual(e){return e instanceof Yl}}function r1(t,e){if(i1(t=ht(t)))return o1("Unsupported field value:",e,t),s1(t,e);if(t instanceof Ql)return function(r,s){if(!n1(s.dataSource))throw s.yc(`${r._methodName}() can only be used with update() and set()`);if(!s.path)throw s.yc(`${r._methodName}() is not currently supported inside arrays`);const i=r._toFieldTransform(s);i&&s.fieldTransforms.push(i)}(t,e),null;if(t===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.arrayElement&&e.dataSource!==4)throw e.yc("Nested arrays are not supported");return function(r,s){const i=[];let o=0;for(const u of r){let c=r1(u,s.gc(o));c==null&&(c={nullValue:"NULL_VALUE"}),i.push(c),o++}return{arrayValue:{values:i}}}(t,e)}return function(r,s){if((r=ht(r))===null)return{nullValue:"NULL_VALUE"};if(typeof r=="number")return wT(s.serializer,r);if(typeof r=="boolean")return{booleanValue:r};if(typeof r=="string")return{stringValue:r};if(r instanceof Date){const i=Fe.fromDate(r);return{timestampValue:yu(s.serializer,i)}}if(r instanceof Fe){const i=new Fe(r.seconds,1e3*Math.floor(r.nanoseconds/1e3));return{timestampValue:yu(s.serializer,i)}}if(r instanceof fn)return{geoPointValue:{latitude:r.latitude,longitude:r.longitude}};if(r instanceof Nt)return{bytesValue:vg(s.serializer,r._byteString)};if(r instanceof We){const i=s.databaseId,o=r.firestore._databaseId;if(!o.isEqual(i))throw s.yc(`Document reference is for database ${o.projectId}/${o.database} but should be for database ${i.projectId}/${i.database}`);return{referenceValue:Fl(r.firestore._databaseId||s.databaseId,r._key.path)}}if(r instanceof Ht)return function(o,u){const c=o instanceof Ht?o.toArray():o;return{mapValue:{fields:{[Jm]:{stringValue:Ym},[pu]:{arrayValue:{values:c.map(f=>{if(typeof f!="number")throw u.yc("VectorValues must only contain numeric values.");return Dl(u.serializer,f)})}}}}}}(r,s);if(kg(r))return r._toProto(s.serializer);throw s.yc(`Unsupported field value: ${Tl(r)}`)}(t,e)}function s1(t,e){const n={};return Hm(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):Gr(t,(r,s)=>{const i=r1(s,e.dc(r));i!=null&&(n[r]=i)}),{mapValue:{fields:n}}}function i1(t){return!(typeof t!="object"||t===null||t instanceof Array||t instanceof Date||t instanceof Fe||t instanceof fn||t instanceof Nt||t instanceof We||t instanceof Ql||t instanceof Ht||kg(t))}function o1(t,e,n){if(!i1(n)||!jm(n)){const r=Tl(n);throw r==="an object"?e.yc(t+" a custom object"):e.yc(t+" "+r)}}function Xl(t,e,n){if((e=ht(e))instanceof t1)return e._internalPath;if(typeof e=="string")return $I(t,e);throw wu("Field path arguments must be of type string or ",t,!1,void 0,n)}const HI=new RegExp("[~\\*/\\[\\]]");function $I(t,e,n){if(e.search(HI)>=0)throw wu(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new t1(...e.split("."))._internalPath}catch{throw wu(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function wu(t,e,n,r,s){const i=r&&!r.isEmpty(),o=s!==void 0;let u=`Function ${e}() called with invalid data`;n&&(u+=" (via `toFirestore()`)"),u+=". ";let c="";return(i||o)&&(c+=" (found",i&&(c+=` in field ${r}`),o&&(c+=` in document ${s}`),c+=")"),new X(U.INVALID_ARGUMENT,u+t+c)}function WI(t,e){return t.some(n=>n.isEqual(e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class KI{convertValue(e,n="none"){switch(gr(e)){case 0:return null;case 1:return e.booleanValue;case 2:return Le(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,n);case 5:return e.stringValue;case 6:return this.convertBytes(mr(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,n);case 11:return this.convertObject(e.mapValue,n);case 10:return this.convertVectorValue(e.mapValue);default:throw se(62114,{value:e})}}convertObject(e,n){return this.convertObjectMap(e.fields,n)}convertObjectMap(e,n="none"){const r={};return Gr(e,(s,i)=>{r[s]=this.convertValue(i,n)}),r}convertVectorValue(e){var r,s,i;const n=(i=(s=(r=e.fields)==null?void 0:r[pu].arrayValue)==null?void 0:s.values)==null?void 0:i.map(o=>Le(o.doubleValue));return new Ht(n)}convertGeoPoint(e){return new fn(Le(e.latitude),Le(e.longitude))}convertArray(e,n){return(e.values||[]).map(r=>this.convertValue(r,n))}convertServerTimestamp(e,n){switch(n){case"previous":const r=Yu(e);return r==null?null:this.convertValue(r,n);case"estimate":return this.convertTimestamp(zi(e));default:return null}}convertTimestamp(e){const n=pr(e);return new Fe(n.seconds,n.nanos)}convertDocumentKey(e,n){const r=Pe.fromString(e);we(xg(r),9688,{name:e});const s=new Hi(r.get(1),r.get(3)),i=new ee(r.popFirst(5));return s.isEqual(n)||Mn(`Document ${i} contains a document reference within a different database (${s.projectId}/${s.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),i}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class GI extends KI{constructor(e){super(),this.firestore=e}convertBytes(e){return new Nt(e)}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return new We(this.firestore,null,n)}}function QI(){return new Yl("serverTimestamp")}const h0="@firebase/firestore",f0="4.13.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class u1{constructor(e,n,r,s,i){this._firestore=e,this._userDataWriter=n,this._key=r,this._document=s,this._converter=i}get id(){return this._key.path.lastSegment()}get ref(){return new We(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new JI(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}_fieldsProto(){var e;return((e=this._document)==null?void 0:e.data.clone().value.mapValue.fields)??void 0}get(e){if(this._document){const n=this._document.data.field(Xl("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n)}}}class JI extends u1{data(){return super.data()}}function YI(t,e,n){let r;return r=t?n&&(n.merge||n.mergeFields)?t.toFirestore(e,n):t.toFirestore(e):e,r}class gi{constructor(e,n){this.hasPendingWrites=e,this.fromCache=n}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class Mr extends u1{constructor(e,n,r,s,i,o){super(e,n,r,s,o),this._firestore=e,this._firestoreImpl=e,this.metadata=i}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const n=new Go(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,n={}){if(this._document){const r=this._document.data.field(Xl("DocumentSnapshot.get",e));if(r!==null)return this._userDataWriter.convertValue(r,n.serverTimestamps)}}toJSON(){if(this.metadata.hasPendingWrites)throw new X(U.FAILED_PRECONDITION,"DocumentSnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e=this._document,n={};return n.type=Mr._jsonSchemaVersion,n.bundle="",n.bundleSource="DocumentSnapshot",n.bundleName=this._key.toString(),!e||!e.isValidDocument()||!e.isFoundDocument()?n:(this._userDataWriter.convertObjectMap(e.data.value.mapValue.fields,"previous"),n.bundle=(this._firestore,this.ref.path,"NOT SUPPORTED"),n)}}Mr._jsonSchemaVersion="firestore/documentSnapshot/1.0",Mr._jsonSchema={type:Be("string",Mr._jsonSchemaVersion),bundleSource:Be("string","DocumentSnapshot"),bundleName:Be("string"),bundle:Be("string")};class Go extends Mr{data(e={}){return super.data(e)}}class ki{constructor(e,n,r,s){this._firestore=e,this._userDataWriter=n,this._snapshot=s,this.metadata=new gi(s.hasPendingWrites,s.fromCache),this.query=r}get docs(){const e=[];return this.forEach(n=>e.push(n)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,n){this._snapshot.docs.forEach(r=>{e.call(n,new Go(this._firestore,this._userDataWriter,r.key,r,new gi(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const n=!!e.includeMetadataChanges;if(n&&this._snapshot.excludesMetadataChanges)throw new X(U.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===n||(this._cachedChanges=function(s,i){if(s._snapshot.oldDocs.isEmpty()){let o=0;return s._snapshot.docChanges.map(u=>{const c=new Go(s._firestore,s._userDataWriter,u.doc.key,u.doc,new gi(s._snapshot.mutatedKeys.has(u.doc.key),s._snapshot.fromCache),s.query.converter);return u.doc,{type:"added",doc:c,oldIndex:-1,newIndex:o++}})}{let o=s._snapshot.oldDocs;return s._snapshot.docChanges.filter(u=>i||u.type!==3).map(u=>{const c=new Go(s._firestore,s._userDataWriter,u.doc.key,u.doc,new gi(s._snapshot.mutatedKeys.has(u.doc.key),s._snapshot.fromCache),s.query.converter);let l=-1,f=-1;return u.type!==0&&(l=o.indexOf(u.doc.key),o=o.delete(u.doc.key)),u.type!==1&&(o=o.add(u.doc),f=o.indexOf(u.doc.key)),{type:XI(u.type),doc:c,oldIndex:l,newIndex:f}})}}(this,n),this._cachedChangesIncludeMetadataChanges=n),this._cachedChanges}toJSON(){if(this.metadata.hasPendingWrites)throw new X(U.FAILED_PRECONDITION,"QuerySnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e={};e.type=ki._jsonSchemaVersion,e.bundleSource="QuerySnapshot",e.bundleName=wl.newId(),this._firestore._databaseId.database,this._firestore._databaseId.projectId;const n=[],r=[],s=[];return this.docs.forEach(i=>{i._document!==null&&(n.push(i._document),r.push(this._userDataWriter.convertObjectMap(i._document.data.value.mapValue.fields,"previous")),s.push(i.ref.path))}),e.bundle=(this._firestore,this.query._query,e.bundleName,"NOT SUPPORTED"),e}}function XI(t){switch(t){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return se(61501,{type:t})}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ki._jsonSchemaVersion="firestore/querySnapshot/1.0",ki._jsonSchema={type:Be("string",ki._jsonSchemaVersion),bundleSource:Be("string","QuerySnapshot"),bundleName:Be("string"),bundle:Be("string")};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ZI(t){t=qi(t,We);const e=qi(t.firestore,Gl),n=e1(e);return PI(n,t._key).then(r=>nA(e,t,r))}function eA(t,e,n){t=qi(t,We);const r=qi(t.firestore,Gl),s=YI(t.converter,e,n),i=jI(r);return tA(r,[zI(i,"setDoc",t._key,s,t.converter!==null,n).toMutation(t._key,Rn.none())])}function tA(t,e){const n=e1(t);return FI(n,e)}function nA(t,e,n){const r=n.docs.get(e._key),s=new GI(t);return new Mr(t,s,e._key,r,new gi(n.hasPendingWrites,n.fromCache),e.converter)}(function(e,n=!0){kw(Vs),_n(new Wt("firestore",(r,{instanceIdentifier:s,options:i})=>{const o=r.getProvider("app").getImmediate(),u=new Gl(new Rw(r.getProvider("auth-internal")),new Nw(o,r.getProvider("app-check-internal")),Yw(o,s),o);return i={useFetchStreams:n,...i},u._setSettings(i),u},"PUBLIC").setMultipleInstances(!0)),Mt(h0,f0,e),Mt(h0,f0,"esm2020")})();function a1(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const rA=a1,c1=new Wr("auth","Firebase",a1());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Tu=new Gu("@firebase/auth");function sA(t,...e){Tu.logLevel<=fe.WARN&&Tu.warn(`Auth (${Vs}): ${t}`,...e)}function Qo(t,...e){Tu.logLevel<=fe.ERROR&&Tu.error(`Auth (${Vs}): ${t}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Kt(t,...e){throw Zl(t,...e)}function dn(t,...e){return Zl(t,...e)}function l1(t,e,n){const r={...rA(),[e]:n};return new Wr("auth","Firebase",r).create(e,{appName:t.name})}function Pn(t){return l1(t,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function Zl(t,...e){if(typeof t!="string"){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return c1.create(t,...e)}function re(t,e,...n){if(!t)throw Zl(e,...n)}function Sn(t){const e="INTERNAL ASSERTION FAILED: "+t;throw Qo(e),new Error(e)}function Un(t,e){t||Sn(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function zc(){var t;return typeof self<"u"&&((t=self.location)==null?void 0:t.href)||""}function iA(){return d0()==="http:"||d0()==="https:"}function d0(){var t;return typeof self<"u"&&((t=self.location)==null?void 0:t.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function oA(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(iA()||Tm()||"connection"in navigator)?navigator.onLine:!0}function uA(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ho{constructor(e,n){this.shortDelay=e,this.longDelay=n,Un(n>e,"Short delay should be less than long delay!"),this.isMobile=tv()||sv()}get(){return oA()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function eh(t,e){Un(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class h1{static initialize(e,n,r){this.fetchImpl=e,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;Sn("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;Sn("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;Sn("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const aA={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const cA=["/v1/accounts:signInWithCustomToken","/v1/accounts:signInWithEmailLink","/v1/accounts:signInWithIdp","/v1/accounts:signInWithPassword","/v1/accounts:signInWithPhoneNumber","/v1/token"],lA=new ho(3e4,6e4);function br(t,e){return t.tenantId&&!e.tenantId?{...e,tenantId:t.tenantId}:e}async function Er(t,e,n,r,s={}){return f1(t,s,async()=>{let i={},o={};r&&(e==="GET"?o=r:i={body:JSON.stringify(r)});const u=so({key:t.config.apiKey,...o}).slice(1),c=await t._getAdditionalHeaders();c["Content-Type"]="application/json",t.languageCode&&(c["X-Firebase-Locale"]=t.languageCode);const l={method:e,headers:c,...i};return rv()||(l.referrerPolicy="no-referrer"),t.emulatorConfig&&io(t.emulatorConfig.host)&&(l.credentials="include"),h1.fetch()(await d1(t,t.config.apiHost,n,u),l)})}async function f1(t,e,n){t._canInitEmulator=!1;const r={...aA,...e};try{const s=new fA(t),i=await Promise.race([n(),s.promise]);s.clearNetworkTimeout();const o=await i.json();if("needConfirmation"in o)throw Mo(t,"account-exists-with-different-credential",o);if(i.ok&&!("errorMessage"in o))return o;{const u=i.ok?o.errorMessage:o.error.message,[c,l]=u.split(" : ");if(c==="FEDERATED_USER_ID_ALREADY_LINKED")throw Mo(t,"credential-already-in-use",o);if(c==="EMAIL_EXISTS")throw Mo(t,"email-already-in-use",o);if(c==="USER_DISABLED")throw Mo(t,"user-disabled",o);const f=r[c]||c.toLowerCase().replace(/[_\s]+/g,"-");if(l)throw l1(t,f,l);Kt(t,f)}}catch(s){if(s instanceof Qt)throw s;Kt(t,"network-request-failed",{message:String(s)})}}async function fo(t,e,n,r,s={}){const i=await Er(t,e,n,r,s);return"mfaPendingCredential"in i&&Kt(t,"multi-factor-auth-required",{_serverResponse:i}),i}async function d1(t,e,n,r){const s=`${e}${n}?${r}`,i=t,o=i.config.emulator?eh(t.config,s):`${t.config.apiScheme}://${s}`;return cA.includes(n)&&(await i._persistenceManagerAvailable,i._getPersistenceType()==="COOKIE")?i._getPersistence()._getFinalTarget(o).toString():o}function hA(t){switch(t){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class fA{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(dn(this.auth,"network-request-failed")),lA.get())})}}function Mo(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const s=dn(t,e,r);return s.customData._tokenResponse=n,s}function p0(t){return t!==void 0&&t.enterprise!==void 0}class dA{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const n of this.recaptchaEnforcementState)if(n.provider&&n.provider===e)return hA(n.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}isAnyProviderEnabled(){return this.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")||this.isProviderEnabled("PHONE_PROVIDER")}}async function pA(t,e){return Er(t,"GET","/v2/recaptchaConfig",br(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function mA(t,e){return Er(t,"POST","/v1/accounts:delete",e)}async function Iu(t,e){return Er(t,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Si(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function gA(t,e=!1){const n=ht(t),r=await n.getIdToken(e),s=th(r);re(s&&s.exp&&s.auth_time&&s.iat,n.auth,"internal-error");const i=typeof s.firebase=="object"?s.firebase:void 0,o=i==null?void 0:i.sign_in_provider;return{claims:s,token:r,authTime:Si(nc(s.auth_time)),issuedAtTime:Si(nc(s.iat)),expirationTime:Si(nc(s.exp)),signInProvider:o||null,signInSecondFactor:(i==null?void 0:i.sign_in_second_factor)||null}}function nc(t){return Number(t)*1e3}function th(t){const[e,n,r]=t.split(".");if(e===void 0||n===void 0||r===void 0)return Qo("JWT malformed, contained fewer than 3 sections"),null;try{const s=bm(n);return s?JSON.parse(s):(Qo("Failed to decode base64 JWT payload"),null)}catch(s){return Qo("Caught error parsing JWT payload as JSON",s==null?void 0:s.toString()),null}}function m0(t){const e=th(t);return re(e,"internal-error"),re(typeof e.exp<"u","internal-error"),re(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Qi(t,e,n=!1){if(n)return e;try{return await e}catch(r){throw r instanceof Qt&&_A(r)&&t.auth.currentUser===t&&await t.auth.signOut(),r}}function _A({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yA{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){if(e){const n=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),n}else{this.errorBackoff=3e4;const r=(this.user.stsTokenManager.expirationTime??0)-Date.now()-3e5;return Math.max(0,r)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hc{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=Si(this.lastLoginAt),this.creationTime=Si(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Au(t){var p;const e=t.auth,n=await t.getIdToken(),r=await Qi(t,Iu(e,{idToken:n}));re(r==null?void 0:r.users.length,e,"internal-error");const s=r.users[0];t._notifyReloadListener(s);const i=(p=s.providerUserInfo)!=null&&p.length?p1(s.providerUserInfo):[],o=EA(t.providerData,i),u=t.isAnonymous,c=!(t.email&&s.passwordHash)&&!(o!=null&&o.length),l=u?c:!1,f={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:o,metadata:new Hc(s.createdAt,s.lastLoginAt),isAnonymous:l};Object.assign(t,f)}async function bA(t){const e=ht(t);await Au(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function EA(t,e){return[...t.filter(r=>!e.some(s=>s.providerId===r.providerId)),...e]}function p1(t){return t.map(({providerId:e,...n})=>({providerId:e,uid:n.rawId||"",displayName:n.displayName||null,email:n.email||null,phoneNumber:n.phoneNumber||null,photoURL:n.photoUrl||null}))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function vA(t,e){const n=await f1(t,{},async()=>{const r=so({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:s,apiKey:i}=t.config,o=await d1(t,s,"/v1/token",`key=${i}`),u=await t._getAdditionalHeaders();u["Content-Type"]="application/x-www-form-urlencoded";const c={method:"POST",headers:u,body:r};return t.emulatorConfig&&io(t.emulatorConfig.host)&&(c.credentials="include"),h1.fetch()(o,c)});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function wA(t,e){return Er(t,"POST","/v2/accounts:revokeToken",br(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ws{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){re(e.idToken,"internal-error"),re(typeof e.idToken<"u","internal-error"),re(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):m0(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}updateFromIdToken(e){re(e.length!==0,"internal-error");const n=m0(e);this.updateTokensAndExpiration(e,null,n)}async getToken(e,n=!1){return!n&&this.accessToken&&!this.isExpired?this.accessToken:(re(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:r,refreshToken:s,expiresIn:i}=await vA(e,n);this.updateTokensAndExpiration(r,s,Number(i))}updateTokensAndExpiration(e,n,r){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,n){const{refreshToken:r,accessToken:s,expirationTime:i}=n,o=new ws;return r&&(re(typeof r=="string","internal-error",{appName:e}),o.refreshToken=r),s&&(re(typeof s=="string","internal-error",{appName:e}),o.accessToken=s),i&&(re(typeof i=="number","internal-error",{appName:e}),o.expirationTime=i),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new ws,this.toJSON())}_performRefresh(){return Sn("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Gn(t,e){re(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class qt{constructor({uid:e,auth:n,stsTokenManager:r,...s}){this.providerId="firebase",this.proactiveRefresh=new yA(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=e,this.auth=n,this.stsTokenManager=r,this.accessToken=r.accessToken,this.displayName=s.displayName||null,this.email=s.email||null,this.emailVerified=s.emailVerified||!1,this.phoneNumber=s.phoneNumber||null,this.photoURL=s.photoURL||null,this.isAnonymous=s.isAnonymous||!1,this.tenantId=s.tenantId||null,this.providerData=s.providerData?[...s.providerData]:[],this.metadata=new Hc(s.createdAt||void 0,s.lastLoginAt||void 0)}async getIdToken(e){const n=await Qi(this,this.stsTokenManager.getToken(this.auth,e));return re(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return gA(this,e)}reload(){return bA(this)}_assign(e){this!==e&&(re(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>({...n})),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new qt({...this,auth:e,stsTokenManager:this.stsTokenManager._clone()});return n.metadata._copy(this.metadata),n}_onReload(e){re(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),n&&await Au(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(Pt(this.auth.app))return Promise.reject(Pn(this.auth));const e=await this.getIdToken();return await Qi(this,mA(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return{uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>({...e})),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId,...this.metadata.toJSON(),apiKey:this.auth.config.apiKey,appName:this.auth.name}}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){const r=n.displayName??void 0,s=n.email??void 0,i=n.phoneNumber??void 0,o=n.photoURL??void 0,u=n.tenantId??void 0,c=n._redirectEventId??void 0,l=n.createdAt??void 0,f=n.lastLoginAt??void 0,{uid:p,emailVerified:g,isAnonymous:y,providerData:T,stsTokenManager:R}=n;re(p&&R,e,"internal-error");const F=ws.fromJSON(this.name,R);re(typeof p=="string",e,"internal-error"),Gn(r,e.name),Gn(s,e.name),re(typeof g=="boolean",e,"internal-error"),re(typeof y=="boolean",e,"internal-error"),Gn(i,e.name),Gn(o,e.name),Gn(u,e.name),Gn(c,e.name),Gn(l,e.name),Gn(f,e.name);const $=new qt({uid:p,auth:e,email:s,emailVerified:g,displayName:r,isAnonymous:y,photoURL:o,phoneNumber:i,tenantId:u,stsTokenManager:F,createdAt:l,lastLoginAt:f});return T&&Array.isArray(T)&&($.providerData=T.map(N=>({...N}))),c&&($._redirectEventId=c),$}static async _fromIdTokenResponse(e,n,r=!1){const s=new ws;s.updateFromServerResponse(n);const i=new qt({uid:n.localId,auth:e,stsTokenManager:s,isAnonymous:r});return await Au(i),i}static async _fromGetAccountInfoResponse(e,n,r){const s=n.users[0];re(s.localId!==void 0,"internal-error");const i=s.providerUserInfo!==void 0?p1(s.providerUserInfo):[],o=!(s.email&&s.passwordHash)&&!(i!=null&&i.length),u=new ws;u.updateFromIdToken(r);const c=new qt({uid:s.localId,auth:e,stsTokenManager:u,isAnonymous:o}),l={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:i,metadata:new Hc(s.createdAt,s.lastLoginAt),isAnonymous:!(s.email&&s.passwordHash)&&!(i!=null&&i.length)};return Object.assign(c,l),c}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const g0=new Map;function Dn(t){Un(t instanceof Function,"Expected a class definition");let e=g0.get(t);return e?(Un(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,g0.set(t,e),e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class m1{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}m1.type="NONE";const _0=m1;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Jo(t,e,n){return`firebase:${t}:${e}:${n}`}class Ts{constructor(e,n,r){this.persistence=e,this.auth=n,this.userKey=r;const{config:s,name:i}=this.auth;this.fullUserKey=Jo(this.userKey,s.apiKey,i),this.fullPersistenceKey=Jo("persistence",s.apiKey,i),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);if(!e)return null;if(typeof e=="string"){const n=await Iu(this.auth,{idToken:e}).catch(()=>{});return n?qt._fromGetAccountInfoResponse(this.auth,n,e):null}return qt._fromJSON(this.auth,e)}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,r="authUser"){if(!n.length)return new Ts(Dn(_0),e,r);const s=(await Promise.all(n.map(async l=>{if(await l._isAvailable())return l}))).filter(l=>l);let i=s[0]||Dn(_0);const o=Jo(r,e.config.apiKey,e.name);let u=null;for(const l of n)try{const f=await l._get(o);if(f){let p;if(typeof f=="string"){const g=await Iu(e,{idToken:f}).catch(()=>{});if(!g)break;p=await qt._fromGetAccountInfoResponse(e,g,f)}else p=qt._fromJSON(e,f);l!==i&&(u=p),i=l;break}}catch{}const c=s.filter(l=>l._shouldAllowMigration);return!i._shouldAllowMigration||!c.length?new Ts(i,e,r):(i=c[0],u&&await i._set(o,u.toJSON()),await Promise.all(n.map(async l=>{if(l!==i)try{await l._remove(o)}catch{}})),new Ts(i,e,r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function y0(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(b1(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(g1(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(v1(e))return"Blackberry";if(w1(e))return"Webos";if(_1(e))return"Safari";if((e.includes("chrome/")||y1(e))&&!e.includes("edge/"))return"Chrome";if(E1(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=t.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function g1(t=lt()){return/firefox\//i.test(t)}function _1(t=lt()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function y1(t=lt()){return/crios\//i.test(t)}function b1(t=lt()){return/iemobile/i.test(t)}function E1(t=lt()){return/android/i.test(t)}function v1(t=lt()){return/blackberry/i.test(t)}function w1(t=lt()){return/webos/i.test(t)}function nh(t=lt()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function TA(t=lt()){var e;return nh(t)&&!!((e=window.navigator)!=null&&e.standalone)}function IA(){return iv()&&document.documentMode===10}function T1(t=lt()){return nh(t)||E1(t)||w1(t)||v1(t)||/windows phone/i.test(t)||b1(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function I1(t,e=[]){let n;switch(t){case"Browser":n=y0(lt());break;case"Worker":n=`${y0(lt())}-${t}`;break;default:n=t}const r=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${Vs}/${r}`}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class AA{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const r=i=>new Promise((o,u)=>{try{const c=e(i);o(c)}catch(c){u(c)}});r.onAbort=n,this.queue.push(r);const s=this.queue.length-1;return()=>{this.queue[s]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const r of this.queue)await r(e),r.onAbort&&n.push(r.onAbort)}catch(r){n.reverse();for(const s of n)try{s()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function CA(t,e={}){return Er(t,"GET","/v2/passwordPolicy",br(t,e))}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xA=6;class kA{constructor(e){var r;const n=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=n.minPasswordLength??xA,n.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=n.maxPasswordLength),n.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=n.containsLowercaseCharacter),n.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=n.containsUppercaseCharacter),n.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=n.containsNumericCharacter),n.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=n.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=((r=e.allowedNonAlphanumericCharacters)==null?void 0:r.join(""))??"",this.forceUpgradeOnSignin=e.forceUpgradeOnSignin??!1,this.schemaVersion=e.schemaVersion}validatePassword(e){const n={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,n),this.validatePasswordCharacterOptions(e,n),n.isValid&&(n.isValid=n.meetsMinPasswordLength??!0),n.isValid&&(n.isValid=n.meetsMaxPasswordLength??!0),n.isValid&&(n.isValid=n.containsLowercaseLetter??!0),n.isValid&&(n.isValid=n.containsUppercaseLetter??!0),n.isValid&&(n.isValid=n.containsNumericCharacter??!0),n.isValid&&(n.isValid=n.containsNonAlphanumericCharacter??!0),n}validatePasswordLengthOptions(e,n){const r=this.customStrengthOptions.minPasswordLength,s=this.customStrengthOptions.maxPasswordLength;r&&(n.meetsMinPasswordLength=e.length>=r),s&&(n.meetsMaxPasswordLength=e.length<=s)}validatePasswordCharacterOptions(e,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let r;for(let s=0;s<e.length;s++)r=e.charAt(s),this.updatePasswordCharacterOptionsStatuses(n,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(e,n,r,s,i){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=s)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=i))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class SA{constructor(e,n,r,s){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=r,this.config=s,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new b0(this),this.idTokenSubscription=new b0(this),this.beforeStateQueue=new AA(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=c1,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this._resolvePersistenceManagerAvailable=void 0,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=s.sdkClientVersion,this._persistenceManagerAvailable=new Promise(i=>this._resolvePersistenceManagerAvailable=i)}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=Dn(n)),this._initializationPromise=this.queue(async()=>{var r,s,i;if(!this._deleted&&(this.persistenceManager=await Ts.create(this,e),(r=this._resolvePersistenceManagerAvailable)==null||r.call(this),!this._deleted)){if((s=this._popupRedirectResolver)!=null&&s._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((i=this.currentUser)==null?void 0:i.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const n=await Iu(this,{idToken:e}),r=await qt._fromGetAccountInfoResponse(this,n,e);await this.directlySetCurrentUser(r)}catch(n){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",n),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var i;if(Pt(this.app)){const o=this.app.settings.authIdToken;return o?new Promise(u=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(o).then(u,u))}):this.directlySetCurrentUser(null)}const n=await this.assertedPersistence.getCurrentUser();let r=n,s=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(i=this.redirectUser)==null?void 0:i._redirectEventId,u=r==null?void 0:r._redirectEventId,c=await this.tryRedirectSignIn(e);(!o||o===u)&&(c!=null&&c.user)&&(r=c.user,s=!0)}if(!r)return this.directlySetCurrentUser(null);if(!r._redirectEventId){if(s)try{await this.beforeStateQueue.runMiddleware(r)}catch(o){r=n,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return r?this.reloadAndSetCurrentUserOrClear(r):this.directlySetCurrentUser(null)}return re(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===r._redirectEventId?this.directlySetCurrentUser(r):this.reloadAndSetCurrentUserOrClear(r)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await Au(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=uA()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(Pt(this.app))return Promise.reject(Pn(this));const n=e?ht(e):null;return n&&re(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&re(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return Pt(this.app)?Promise.reject(Pn(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return Pt(this.app)?Promise.reject(Pn(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(Dn(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await CA(this),n=new kA(e);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistenceType(){return this.assertedPersistence.persistence.type}_getPersistence(){return this.assertedPersistence.persistence}_updateErrorMap(e){this._errorFactory=new Wr("auth","Firebase",e())}onAuthStateChanged(e,n,r){return this.registerStateListener(this.authStateSubscription,e,n,r)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,r){return this.registerStateListener(this.idTokenSubscription,e,n,r)}authStateReady(){return new Promise((e,n)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},n)}})}async revokeAccessToken(e){if(this.currentUser){const n=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:n};this.tenantId!=null&&(r.tenantId=this.tenantId),await wA(this,r)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)==null?void 0:e.toJSON()}}async _setRedirectUser(e,n){const r=await this.getOrInitRedirectPersistenceManager(n);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&Dn(e)||this._popupRedirectResolver;re(n,this,"argument-error"),this.redirectPersistenceManager=await Ts.create(this,[Dn(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)==null?void 0:n._redirectEventId)===e?this._currentUser:((r=this.redirectUser)==null?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const e=((n=this.currentUser)==null?void 0:n.uid)??null;this.lastNotifiedUid!==e&&(this.lastNotifiedUid=e,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,r,s){if(this._deleted)return()=>{};const i=typeof n=="function"?n:n.next.bind(n);let o=!1;const u=this._isInitialized?Promise.resolve():this._initializationPromise;if(re(u,this,"internal-error"),u.then(()=>{o||i(this.currentUser)}),typeof n=="function"){const c=e.addObserver(n,r,s);return()=>{o=!0,c()}}else{const c=e.addObserver(n);return()=>{o=!0,c()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return re(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=I1(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var s;const e={"X-Client-Version":this.clientVersion};this.app.options.appId&&(e["X-Firebase-gmpid"]=this.app.options.appId);const n=await((s=this.heartbeatServiceProvider.getImmediate({optional:!0}))==null?void 0:s.getHeartbeatsHeader());n&&(e["X-Firebase-Client"]=n);const r=await this._getAppCheckToken();return r&&(e["X-Firebase-AppCheck"]=r),e}async _getAppCheckToken(){var n;if(Pt(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const e=await((n=this.appCheckServiceProvider.getImmediate({optional:!0}))==null?void 0:n.getToken());return e!=null&&e.error&&sA(`Error while retrieving App Check token: ${e.error}`),e==null?void 0:e.token}}function Xr(t){return ht(t)}class b0{constructor(e){this.auth=e,this.observer=null,this.addObserver=fv(n=>this.observer=n)}get next(){return re(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let aa={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function DA(t){aa=t}function A1(t){return aa.loadJS(t)}function RA(){return aa.recaptchaEnterpriseScript}function PA(){return aa.gapiScript}function FA(t){return`__${t}${Math.floor(Math.random()*1e6)}`}class NA{constructor(){this.enterprise=new OA}ready(e){e()}execute(e,n){return Promise.resolve("token")}render(e,n){return""}}class OA{ready(e){e()}execute(e,n){return Promise.resolve("token")}render(e,n){return""}}const VA="recaptcha-enterprise",C1="NO_RECAPTCHA";class MA{constructor(e){this.type=VA,this.auth=Xr(e)}async verify(e="verify",n=!1){async function r(i){if(!n){if(i.tenantId==null&&i._agentRecaptchaConfig!=null)return i._agentRecaptchaConfig.siteKey;if(i.tenantId!=null&&i._tenantRecaptchaConfigs[i.tenantId]!==void 0)return i._tenantRecaptchaConfigs[i.tenantId].siteKey}return new Promise(async(o,u)=>{pA(i,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(c=>{if(c.recaptchaKey===void 0)u(new Error("recaptcha Enterprise site key undefined"));else{const l=new dA(c);return i.tenantId==null?i._agentRecaptchaConfig=l:i._tenantRecaptchaConfigs[i.tenantId]=l,o(l.siteKey)}}).catch(c=>{u(c)})})}function s(i,o,u){const c=window.grecaptcha;p0(c)?c.enterprise.ready(()=>{c.enterprise.execute(i,{action:e}).then(l=>{o(l)}).catch(()=>{o(C1)})}):u(Error("No reCAPTCHA enterprise script loaded."))}return this.auth.settings.appVerificationDisabledForTesting?new NA().execute("siteKey",{action:"verify"}):new Promise((i,o)=>{r(this.auth).then(u=>{if(!n&&p0(window.grecaptcha))s(u,i,o);else{if(typeof window>"u"){o(new Error("RecaptchaVerifier is only supported in browser"));return}let c=RA();c.length!==0&&(c+=u),A1(c).then(()=>{s(u,i,o)}).catch(l=>{o(l)})}}).catch(u=>{o(u)})})}}async function E0(t,e,n,r=!1,s=!1){const i=new MA(t);let o;if(s)o=C1;else try{o=await i.verify(n)}catch{o=await i.verify(n,!0)}const u={...e};if(n==="mfaSmsEnrollment"||n==="mfaSmsSignIn"){if("phoneEnrollmentInfo"in u){const c=u.phoneEnrollmentInfo.phoneNumber,l=u.phoneEnrollmentInfo.recaptchaToken;Object.assign(u,{phoneEnrollmentInfo:{phoneNumber:c,recaptchaToken:l,captchaResponse:o,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}else if("phoneSignInInfo"in u){const c=u.phoneSignInInfo.recaptchaToken;Object.assign(u,{phoneSignInInfo:{recaptchaToken:c,captchaResponse:o,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}return u}return r?Object.assign(u,{captchaResp:o}):Object.assign(u,{captchaResponse:o}),Object.assign(u,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(u,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),u}async function $c(t,e,n,r,s){var i;if((i=t._getRecaptchaConfig())!=null&&i.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const o=await E0(t,e,n,n==="getOobCode");return r(t,o)}else return r(t,e).catch(async o=>{if(o.code==="auth/missing-recaptcha-token"){console.log(`${n} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const u=await E0(t,e,n,n==="getOobCode");return r(t,u)}else return Promise.reject(o)})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function LA(t,e){const n=Kr(t,"auth");if(n.isInitialized()){const s=n.getImmediate(),i=n.getOptions();if(fr(i,e??{}))return s;Kt(s,"already-initialized")}return n.initialize({options:e})}function UA(t,e){const n=(e==null?void 0:e.persistence)||[],r=(Array.isArray(n)?n:[n]).map(Dn);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}function BA(t,e,n){const r=Xr(t);re(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const s=!1,i=x1(e),{host:o,port:u}=qA(e),c=u===null?"":`:${u}`,l={url:`${i}//${o}${c}/`},f=Object.freeze({host:o,port:u,protocol:i.replace(":",""),options:Object.freeze({disableWarnings:s})});if(!r._canInitEmulator){re(r.config.emulator&&r.emulatorConfig,r,"emulator-config-failed"),re(fr(l,r.config.emulator)&&fr(f,r.emulatorConfig),r,"emulator-config-failed");return}r.config.emulator=l,r.emulatorConfig=f,r.settings.appVerificationDisabledForTesting=!0,io(o)?Cm(`${i}//${o}${c}`):jA()}function x1(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function qA(t){const e=x1(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",s=/^(\[[^\]]+\])(:|$)/.exec(r);if(s){const i=s[1];return{host:i,port:v0(r.substr(i.length+1))}}else{const[i,o]=r.split(":");return{host:i,port:v0(o)}}}function v0(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function jA(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rh{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return Sn("not implemented")}_getIdTokenResponse(e){return Sn("not implemented")}_linkToIdToken(e,n){return Sn("not implemented")}_getReauthenticationResolver(e){return Sn("not implemented")}}async function zA(t,e){return Er(t,"POST","/v1/accounts:signUp",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function HA(t,e){return fo(t,"POST","/v1/accounts:signInWithPassword",br(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function $A(t,e){return fo(t,"POST","/v1/accounts:signInWithEmailLink",br(t,e))}async function WA(t,e){return fo(t,"POST","/v1/accounts:signInWithEmailLink",br(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ji extends rh{constructor(e,n,r,s=null){super("password",r),this._email=e,this._password=n,this._tenantId=s}static _fromEmailAndPassword(e,n){return new Ji(e,n,"password")}static _fromEmailAndCode(e,n,r=null){return new Ji(e,n,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;if(n!=null&&n.email&&(n!=null&&n.password)){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":const n={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return $c(e,n,"signInWithPassword",HA);case"emailLink":return $A(e,{email:this._email,oobCode:this._password});default:Kt(e,"internal-error")}}async _linkToIdToken(e,n){switch(this.signInMethod){case"password":const r={idToken:n,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return $c(e,r,"signUpPassword",zA);case"emailLink":return WA(e,{idToken:n,email:this._email,oobCode:this._password});default:Kt(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Is(t,e){return fo(t,"POST","/v1/accounts:signInWithIdp",br(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const KA="http://localhost";class qr extends rh{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new qr(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):Kt("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:s,...i}=n;if(!r||!s)return null;const o=new qr(r,s);return o.idToken=i.idToken||void 0,o.accessToken=i.accessToken||void 0,o.secret=i.secret,o.nonce=i.nonce,o.pendingToken=i.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return Is(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,Is(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,Is(e,n)}buildRequest(){const e={requestUri:KA,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=so(n)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function GA(t){switch(t){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function QA(t){const e=hi(fi(t)).link,n=e?hi(fi(e)).deep_link_id:null,r=hi(fi(t)).deep_link_id;return(r?hi(fi(r)).link:null)||r||n||e||t}class sh{constructor(e){const n=hi(fi(e)),r=n.apiKey??null,s=n.oobCode??null,i=GA(n.mode??null);re(r&&s&&i,"argument-error"),this.apiKey=r,this.operation=i,this.code=s,this.continueUrl=n.continueUrl??null,this.languageCode=n.lang??null,this.tenantId=n.tenantId??null}static parseLink(e){const n=QA(e);try{return new sh(n)}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qs{constructor(){this.providerId=qs.PROVIDER_ID}static credential(e,n){return Ji._fromEmailAndPassword(e,n)}static credentialWithLink(e,n){const r=sh.parseLink(n);return re(r,"argument-error"),Ji._fromEmailAndCode(e,r.code,r.tenantId)}}qs.PROVIDER_ID="password";qs.EMAIL_PASSWORD_SIGN_IN_METHOD="password";qs.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class k1{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class po extends k1{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xn extends po{constructor(){super("facebook.com")}static credential(e){return qr._fromParams({providerId:Xn.PROVIDER_ID,signInMethod:Xn.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Xn.credentialFromTaggedObject(e)}static credentialFromError(e){return Xn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Xn.credential(e.oauthAccessToken)}catch{return null}}}Xn.FACEBOOK_SIGN_IN_METHOD="facebook.com";Xn.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zn extends po{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return qr._fromParams({providerId:Zn.PROVIDER_ID,signInMethod:Zn.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return Zn.credentialFromTaggedObject(e)}static credentialFromError(e){return Zn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r}=e;if(!n&&!r)return null;try{return Zn.credential(n,r)}catch{return null}}}Zn.GOOGLE_SIGN_IN_METHOD="google.com";Zn.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class er extends po{constructor(){super("github.com")}static credential(e){return qr._fromParams({providerId:er.PROVIDER_ID,signInMethod:er.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return er.credentialFromTaggedObject(e)}static credentialFromError(e){return er.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return er.credential(e.oauthAccessToken)}catch{return null}}}er.GITHUB_SIGN_IN_METHOD="github.com";er.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tr extends po{constructor(){super("twitter.com")}static credential(e,n){return qr._fromParams({providerId:tr.PROVIDER_ID,signInMethod:tr.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return tr.credentialFromTaggedObject(e)}static credentialFromError(e){return tr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=e;if(!n||!r)return null;try{return tr.credential(n,r)}catch{return null}}}tr.TWITTER_SIGN_IN_METHOD="twitter.com";tr.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function JA(t,e){return fo(t,"POST","/v1/accounts:signUp",br(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jr{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,r,s=!1){const i=await qt._fromIdTokenResponse(e,r,s),o=w0(r);return new jr({user:i,providerId:o,_tokenResponse:r,operationType:n})}static async _forOperation(e,n,r){await e._updateTokensIfNecessary(r,!0);const s=w0(r);return new jr({user:e,providerId:s,_tokenResponse:r,operationType:n})}}function w0(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cu extends Qt{constructor(e,n,r,s){super(n.code,n.message),this.operationType=r,this.user=s,Object.setPrototypeOf(this,Cu.prototype),this.customData={appName:e.name,tenantId:e.tenantId??void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,n,r,s){return new Cu(e,n,r,s)}}function S1(t,e,n,r){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(i=>{throw i.code==="auth/multi-factor-auth-required"?Cu._fromErrorAndOperation(t,i,e,r):i})}async function YA(t,e,n=!1){const r=await Qi(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return jr._forOperation(t,"link",r)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function XA(t,e,n=!1){const{auth:r}=t;if(Pt(r.app))return Promise.reject(Pn(r));const s="reauthenticate";try{const i=await Qi(t,S1(r,s,e,t),n);re(i.idToken,r,"internal-error");const o=th(i.idToken);re(o,r,"internal-error");const{sub:u}=o;return re(t.uid===u,r,"user-mismatch"),jr._forOperation(t,s,i)}catch(i){throw(i==null?void 0:i.code)==="auth/user-not-found"&&Kt(r,"user-mismatch"),i}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function D1(t,e,n=!1){if(Pt(t.app))return Promise.reject(Pn(t));const r="signIn",s=await S1(t,r,e),i=await jr._fromIdTokenResponse(t,r,s);return n||await t._updateCurrentUser(i.user),i}async function ZA(t,e){return D1(Xr(t),e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function R1(t){const e=Xr(t);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}async function e4(t,e,n){if(Pt(t.app))return Promise.reject(Pn(t));const r=Xr(t),o=await $c(r,{returnSecureToken:!0,email:e,password:n,clientType:"CLIENT_TYPE_WEB"},"signUpPassword",JA).catch(c=>{throw c.code==="auth/password-does-not-meet-requirements"&&R1(t),c}),u=await jr._fromIdTokenResponse(r,"signIn",o);return await r._updateCurrentUser(u.user),u}function t4(t,e,n){return Pt(t.app)?Promise.reject(Pn(t)):ZA(ht(t),qs.credential(e,n)).catch(async r=>{throw r.code==="auth/password-does-not-meet-requirements"&&R1(t),r})}function n4(t,e,n,r){return ht(t).onIdTokenChanged(e,n,r)}function r4(t,e,n){return ht(t).beforeAuthStateChanged(e,n)}function s4(t,e,n,r){return ht(t).onAuthStateChanged(e,n,r)}const xu="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class P1{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(xu,"1"),this.storage.removeItem(xu),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const i4=1e3,o4=10;class F1 extends P1{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=T1(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),s=this.localCache[n];r!==s&&e(n,s,r)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,u,c)=>{this.notifyListeners(o,c)});return}const r=e.key;n?this.detachListener():this.stopPolling();const s=()=>{const o=this.storage.getItem(r);!n&&this.localCache[r]===o||this.notifyListeners(r,o)},i=this.storage.getItem(r);IA()&&i!==e.newValue&&e.newValue!==e.oldValue?setTimeout(s,o4):s()}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:r}),!0)})},i4)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}F1.type="LOCAL";const u4=F1;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class N1 extends P1{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}N1.type="SESSION";const O1=N1;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function a4(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ca{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(s=>s.isListeningto(e));if(n)return n;const r=new ca(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:r,eventType:s,data:i}=n.data,o=this.handlersMap[s];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:s});const u=Array.from(o).map(async l=>l(n.origin,i)),c=await a4(u);n.ports[0].postMessage({status:"done",eventId:r,eventType:s,response:c})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}ca.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ih(t="",e=10){let n="";for(let r=0;r<e;r++)n+=Math.floor(Math.random()*10);return t+n}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class c4{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,r=50){const s=typeof MessageChannel<"u"?new MessageChannel:null;if(!s)throw new Error("connection_unavailable");let i,o;return new Promise((u,c)=>{const l=ih("",20);s.port1.start();const f=setTimeout(()=>{c(new Error("unsupported_event"))},r);o={messageChannel:s,onMessage(p){const g=p;if(g.data.eventId===l)switch(g.data.status){case"ack":clearTimeout(f),i=setTimeout(()=>{c(new Error("timeout"))},3e3);break;case"done":clearTimeout(i),u(g.data.response);break;default:clearTimeout(f),clearTimeout(i),c(new Error("invalid_response"));break}}},this.handlers.add(o),s.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:l,data:n},[s.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function pn(){return window}function l4(t){pn().location.href=t}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function V1(){return typeof pn().WorkerGlobalScope<"u"&&typeof pn().importScripts=="function"}async function h4(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function f4(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)==null?void 0:t.controller)||null}function d4(){return V1()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const M1="firebaseLocalStorageDb",p4=1,ku="firebaseLocalStorage",L1="fbase_key";class mo{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function la(t,e){return t.transaction([ku],e?"readwrite":"readonly").objectStore(ku)}function m4(){const t=indexedDB.deleteDatabase(M1);return new mo(t).toPromise()}function Wc(){const t=indexedDB.open(M1,p4);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const r=t.result;try{r.createObjectStore(ku,{keyPath:L1})}catch(s){n(s)}}),t.addEventListener("success",async()=>{const r=t.result;r.objectStoreNames.contains(ku)?e(r):(r.close(),await m4(),e(await Wc()))})})}async function T0(t,e,n){const r=la(t,!0).put({[L1]:e,value:n});return new mo(r).toPromise()}async function g4(t,e){const n=la(t,!1).get(e),r=await new mo(n).toPromise();return r===void 0?null:r.value}function I0(t,e){const n=la(t,!0).delete(e);return new mo(n).toPromise()}const _4=800,y4=3;class U1{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Wc(),this.db)}async _withRetries(e){let n=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(n++>y4)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return V1()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=ca._getInstance(d4()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var n,r;if(this.activeServiceWorker=await h4(),!this.activeServiceWorker)return;this.sender=new c4(this.activeServiceWorker);const e=await this.sender._send("ping",{},800);e&&(n=e[0])!=null&&n.fulfilled&&(r=e[0])!=null&&r.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||f4()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await Wc();return await T0(e,xu,"1"),await I0(e,xu),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>T0(r,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(r=>g4(r,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>I0(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(s=>{const i=la(s,!1).getAll();return new mo(i).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;if(e.length!==0)for(const{fbase_key:s,value:i}of e)r.add(s),JSON.stringify(this.localCache[s])!==JSON.stringify(i)&&(this.notifyListeners(s,i),n.push(s));for(const s of Object.keys(this.localCache))this.localCache[s]&&!r.has(s)&&(this.notifyListeners(s,null),n.push(s));return n}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),_4)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}U1.type="LOCAL";const b4=U1;new ho(3e4,6e4);/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function E4(t,e){return e?Dn(e):(re(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oh extends rh{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return Is(e,this._buildIdpRequest())}_linkToIdToken(e,n){return Is(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return Is(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function v4(t){return D1(t.auth,new oh(t),t.bypassAuthState)}function w4(t){const{auth:e,user:n}=t;return re(n,e,"internal-error"),XA(n,new oh(t),t.bypassAuthState)}async function T4(t){const{auth:e,user:n}=t;return re(n,e,"internal-error"),YA(n,new oh(t),t.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class B1{constructor(e,n,r,s,i=!1){this.auth=e,this.resolver=r,this.user=s,this.bypassAuthState=i,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:r,postBody:s,tenantId:i,error:o,type:u}=e;if(o){this.reject(o);return}const c={auth:this.auth,requestUri:n,sessionId:r,tenantId:i||void 0,postBody:s||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(u)(c))}catch(l){this.reject(l)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return v4;case"linkViaPopup":case"linkViaRedirect":return T4;case"reauthViaPopup":case"reauthViaRedirect":return w4;default:Kt(this.auth,"internal-error")}}resolve(e){Un(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){Un(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const I4=new ho(2e3,1e4);class fs extends B1{constructor(e,n,r,s,i){super(e,n,s,i),this.provider=r,this.authWindow=null,this.pollId=null,fs.currentPopupAction&&fs.currentPopupAction.cancel(),fs.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return re(e,this.auth,"internal-error"),e}async onExecution(){Un(this.filter.length===1,"Popup operations only handle one event");const e=ih();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(dn(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)==null?void 0:e.associatedEvent)||null}cancel(){this.reject(dn(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,fs.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,r;if((r=(n=this.authWindow)==null?void 0:n.window)!=null&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(dn(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,I4.get())};e()}}fs.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const A4="pendingRedirect",Yo=new Map;class C4 extends B1{constructor(e,n,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let e=Yo.get(this.auth._key());if(!e){try{const r=await x4(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(n){e=()=>Promise.reject(n)}Yo.set(this.auth._key(),e)}return this.bypassAuthState||Yo.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function x4(t,e){const n=D4(e),r=S4(t);if(!await r._isAvailable())return!1;const s=await r._get(n)==="true";return await r._remove(n),s}function k4(t,e){Yo.set(t._key(),e)}function S4(t){return Dn(t._redirectPersistence)}function D4(t){return Jo(A4,t.config.apiKey,t.name)}async function R4(t,e,n=!1){if(Pt(t.app))return Promise.reject(Pn(t));const r=Xr(t),s=E4(r,e),o=await new C4(r,s,n).execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,e)),o}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const P4=10*60*1e3;class F4{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(n=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!N4(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var r;if(e.error&&!q1(e)){const s=((r=e.error.code)==null?void 0:r.split("auth/")[1])||"internal-error";n.onError(dn(this.auth,s))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const r=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=P4&&this.cachedEventUids.clear(),this.cachedEventUids.has(A0(e))}saveEventToCache(e){this.cachedEventUids.add(A0(e)),this.lastProcessedEventTime=Date.now()}}function A0(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function q1({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function N4(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return q1(t);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function O4(t,e={}){return Er(t,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const V4=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,M4=/^https?/;async function L4(t){if(t.config.emulator)return;const{authorizedDomains:e}=await O4(t);for(const n of e)try{if(U4(n))return}catch{}Kt(t,"unauthorized-domain")}function U4(t){const e=zc(),{protocol:n,hostname:r}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&r===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===r}if(!M4.test(n))return!1;if(V4.test(t))return r===t;const s=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+s+"|"+s+")$","i").test(r)}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const B4=new ho(3e4,6e4);function C0(){const t=pn().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function q4(t){return new Promise((e,n)=>{var s,i,o;function r(){C0(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{C0(),n(dn(t,"network-request-failed"))},timeout:B4.get()})}if((i=(s=pn().gapi)==null?void 0:s.iframes)!=null&&i.Iframe)e(gapi.iframes.getContext());else if((o=pn().gapi)!=null&&o.load)r();else{const u=FA("iframefcb");return pn()[u]=()=>{gapi.load?r():n(dn(t,"network-request-failed"))},A1(`${PA()}?onload=${u}`).catch(c=>n(c))}}).catch(e=>{throw Xo=null,e})}let Xo=null;function j4(t){return Xo=Xo||q4(t),Xo}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const z4=new ho(5e3,15e3),H4="__/auth/iframe",$4="emulator/auth/iframe",W4={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},K4=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function G4(t){const e=t.config;re(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?eh(e,$4):`https://${t.config.authDomain}/${H4}`,r={apiKey:e.apiKey,appName:t.name,v:Vs},s=K4.get(t.config.apiHost);s&&(r.eid=s);const i=t._getFrameworks();return i.length&&(r.fw=i.join(",")),`${n}?${so(r).slice(1)}`}async function Q4(t){const e=await j4(t),n=pn().gapi;return re(n,t,"internal-error"),e.open({where:document.body,url:G4(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:W4,dontclear:!0},r=>new Promise(async(s,i)=>{await r.restyle({setHideOnLeave:!1});const o=dn(t,"network-request-failed"),u=pn().setTimeout(()=>{i(o)},z4.get());function c(){pn().clearTimeout(u),s(r)}r.ping(c).then(c,()=>{i(o)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const J4={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},Y4=500,X4=600,Z4="_blank",eC="http://localhost";class x0{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function tC(t,e,n,r=Y4,s=X4){const i=Math.max((window.screen.availHeight-s)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let u="";const c={...J4,width:r.toString(),height:s.toString(),top:i,left:o},l=lt().toLowerCase();n&&(u=y1(l)?Z4:n),g1(l)&&(e=e||eC,c.scrollbars="yes");const f=Object.entries(c).reduce((g,[y,T])=>`${g}${y}=${T},`,"");if(TA(l)&&u!=="_self")return nC(e||"",u),new x0(null);const p=window.open(e||"",u,f);re(p,t,"popup-blocked");try{p.focus()}catch{}return new x0(p)}function nC(t,e){const n=document.createElement("a");n.href=t,n.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const rC="__/auth/handler",sC="emulator/auth/handler",iC=encodeURIComponent("fac");async function k0(t,e,n,r,s,i){re(t.config.authDomain,t,"auth-domain-config-required"),re(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:r,v:Vs,eventId:s};if(e instanceof k1){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",hv(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[f,p]of Object.entries({}))o[f]=p}if(e instanceof po){const f=e.getScopes().filter(p=>p!=="");f.length>0&&(o.scopes=f.join(","))}t.tenantId&&(o.tid=t.tenantId);const u=o;for(const f of Object.keys(u))u[f]===void 0&&delete u[f];const c=await t._getAppCheckToken(),l=c?`#${iC}=${encodeURIComponent(c)}`:"";return`${oC(t)}?${so(u).slice(1)}${l}`}function oC({config:t}){return t.emulator?eh(t,sC):`https://${t.authDomain}/${rC}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const rc="webStorageSupport";class uC{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=O1,this._completeRedirectFn=R4,this._overrideRedirectResult=k4}async _openPopup(e,n,r,s){var o;Un((o=this.eventManagers[e._key()])==null?void 0:o.manager,"_initialize() not called before _openPopup()");const i=await k0(e,n,r,zc(),s);return tC(e,i,ih())}async _openRedirect(e,n,r,s){await this._originValidation(e);const i=await k0(e,n,r,zc(),s);return l4(i),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:s,promise:i}=this.eventManagers[n];return s?Promise.resolve(s):(Un(i,"If manager is not set, promise should be"),i)}const r=this.initAndGetManager(e);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(e){const n=await Q4(e),r=new F4(e);return n.register("authEvent",s=>(re(s==null?void 0:s.authEvent,e,"invalid-auth-event"),{status:r.onEvent(s.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=n,r}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(rc,{type:rc},s=>{var o;const i=(o=s==null?void 0:s[0])==null?void 0:o[rc];i!==void 0&&n(!!i),Kt(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=L4(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return T1()||_1()||nh()}}const aC=uC;var S0="@firebase/auth",D0="1.12.2";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cC{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)==null?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){re(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function lC(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function hC(t){_n(new Wt("auth",(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),s=e.getProvider("heartbeat"),i=e.getProvider("app-check-internal"),{apiKey:o,authDomain:u}=r.options;re(o&&!o.includes(":"),"invalid-api-key",{appName:r.name});const c={apiKey:o,authDomain:u,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:I1(t)},l=new SA(r,s,i,c);return UA(l,n),l},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,r)=>{e.getProvider("auth-internal").initialize()})),_n(new Wt("auth-internal",e=>{const n=Xr(e.getProvider("auth").getImmediate());return(r=>new cC(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),Mt(S0,D0,lC(t)),Mt(S0,D0,"esm2020")}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fC=5*60,dC=wm("authIdTokenMaxAge")||fC;let R0=null;const pC=t=>async e=>{const n=e&&await e.getIdTokenResult(),r=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>dC)return;const s=n==null?void 0:n.token;R0!==s&&(R0=s,await fetch(t,{method:s?"POST":"DELETE",headers:s?{Authorization:`Bearer ${s}`}:{}}))};function mC(t=El()){const e=Kr(t,"auth");if(e.isInitialized())return e.getImmediate();const n=LA(t,{popupRedirectResolver:aC,persistence:[b4,u4,O1]}),r=wm("authTokenSyncURL");if(r&&typeof isSecureContext=="boolean"&&isSecureContext){const i=new URL(r,location.origin);if(location.origin===i.origin){const o=pC(i.toString());r4(n,o,()=>o(n.currentUser)),n4(n,u=>o(u))}}const s=Em("auth");return s&&BA(n,`http://${s}`),n}function gC(){var t;return((t=document.getElementsByTagName("head"))==null?void 0:t[0])??document}DA({loadJS(t){return new Promise((e,n)=>{const r=document.createElement("script");r.setAttribute("src",t),r.onload=e,r.onerror=s=>{const i=dn("internal-error");i.customData=s,n(i)},r.type="text/javascript",r.charset="UTF-8",gC().appendChild(r)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});hC("Browser");const j1="@firebase/installations",uh="0.6.21";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const z1=1e4,H1=`w:${uh}`,$1="FIS_v2",_C="https://firebaseinstallations.googleapis.com/v1",yC=60*60*1e3,bC="installations",EC="Installations";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vC={"missing-app-config-values":'Missing App configuration value: "{$valueName}"',"not-registered":"Firebase Installation is not registered.","installation-not-found":"Firebase Installation not found.","request-failed":'{$requestName} request failed with error "{$serverCode} {$serverStatus}: {$serverMessage}"',"app-offline":"Could not process request. Application offline.","delete-pending-registration":"Can't delete installation while there is a pending registration request."},zr=new Wr(bC,EC,vC);function W1(t){return t instanceof Qt&&t.code.includes("request-failed")}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function K1({projectId:t}){return`${_C}/projects/${t}/installations`}function G1(t){return{token:t.token,requestStatus:2,expiresIn:TC(t.expiresIn),creationTime:Date.now()}}async function Q1(t,e){const r=(await e.json()).error;return zr.create("request-failed",{requestName:t,serverCode:r.code,serverMessage:r.message,serverStatus:r.status})}function J1({apiKey:t}){return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":t})}function wC(t,{refreshToken:e}){const n=J1(t);return n.append("Authorization",IC(e)),n}async function Y1(t){const e=await t();return e.status>=500&&e.status<600?t():e}function TC(t){return Number(t.replace("s","000"))}function IC(t){return`${$1} ${t}`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function AC({appConfig:t,heartbeatServiceProvider:e},{fid:n}){const r=K1(t),s=J1(t),i=e.getImmediate({optional:!0});if(i){const l=await i.getHeartbeatsHeader();l&&s.append("x-firebase-client",l)}const o={fid:n,authVersion:$1,appId:t.appId,sdkVersion:H1},u={method:"POST",headers:s,body:JSON.stringify(o)},c=await Y1(()=>fetch(r,u));if(c.ok){const l=await c.json();return{fid:l.fid||n,registrationStatus:2,refreshToken:l.refreshToken,authToken:G1(l.authToken)}}else throw await Q1("Create Installation",c)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function X1(t){return new Promise(e=>{setTimeout(e,t)})}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function CC(t){return btoa(String.fromCharCode(...t)).replace(/\+/g,"-").replace(/\//g,"_")}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xC=/^[cdef][\w-]{21}$/,Kc="";function kC(){try{const t=new Uint8Array(17);(self.crypto||self.msCrypto).getRandomValues(t),t[0]=112+t[0]%16;const n=SC(t);return xC.test(n)?n:Kc}catch{return Kc}}function SC(t){return CC(t).substr(0,22)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ha(t){return`${t.appName}!${t.appId}`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Z1=new Map;function e_(t,e){const n=ha(t);t_(n,e),DC(n,e)}function t_(t,e){const n=Z1.get(t);if(n)for(const r of n)r(e)}function DC(t,e){const n=RC();n&&n.postMessage({key:t,fid:e}),PC()}let Nr=null;function RC(){return!Nr&&"BroadcastChannel"in self&&(Nr=new BroadcastChannel("[Firebase] FID Change"),Nr.onmessage=t=>{t_(t.data.key,t.data.fid)}),Nr}function PC(){Z1.size===0&&Nr&&(Nr.close(),Nr=null)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const FC="firebase-installations-database",NC=1,Hr="firebase-installations-store";let sc=null;function ah(){return sc||(sc=Sm(FC,NC,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(Hr)}}})),sc}async function Su(t,e){const n=ha(t),s=(await ah()).transaction(Hr,"readwrite"),i=s.objectStore(Hr),o=await i.get(n);return await i.put(e,n),await s.done,(!o||o.fid!==e.fid)&&e_(t,e.fid),e}async function n_(t){const e=ha(t),r=(await ah()).transaction(Hr,"readwrite");await r.objectStore(Hr).delete(e),await r.done}async function fa(t,e){const n=ha(t),s=(await ah()).transaction(Hr,"readwrite"),i=s.objectStore(Hr),o=await i.get(n),u=e(o);return u===void 0?await i.delete(n):await i.put(u,n),await s.done,u&&(!o||o.fid!==u.fid)&&e_(t,u.fid),u}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ch(t){let e;const n=await fa(t.appConfig,r=>{const s=OC(r),i=VC(t,s);return e=i.registrationPromise,i.installationEntry});return n.fid===Kc?{installationEntry:await e}:{installationEntry:n,registrationPromise:e}}function OC(t){const e=t||{fid:kC(),registrationStatus:0};return r_(e)}function VC(t,e){if(e.registrationStatus===0){if(!navigator.onLine){const s=Promise.reject(zr.create("app-offline"));return{installationEntry:e,registrationPromise:s}}const n={fid:e.fid,registrationStatus:1,registrationTime:Date.now()},r=MC(t,n);return{installationEntry:n,registrationPromise:r}}else return e.registrationStatus===1?{installationEntry:e,registrationPromise:LC(t)}:{installationEntry:e}}async function MC(t,e){try{const n=await AC(t,e);return Su(t.appConfig,n)}catch(n){throw W1(n)&&n.customData.serverCode===409?await n_(t.appConfig):await Su(t.appConfig,{fid:e.fid,registrationStatus:0}),n}}async function LC(t){let e=await P0(t.appConfig);for(;e.registrationStatus===1;)await X1(100),e=await P0(t.appConfig);if(e.registrationStatus===0){const{installationEntry:n,registrationPromise:r}=await ch(t);return r||n}return e}function P0(t){return fa(t,e=>{if(!e)throw zr.create("installation-not-found");return r_(e)})}function r_(t){return UC(t)?{fid:t.fid,registrationStatus:0}:t}function UC(t){return t.registrationStatus===1&&t.registrationTime+z1<Date.now()}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function BC({appConfig:t,heartbeatServiceProvider:e},n){const r=qC(t,n),s=wC(t,n),i=e.getImmediate({optional:!0});if(i){const l=await i.getHeartbeatsHeader();l&&s.append("x-firebase-client",l)}const o={installation:{sdkVersion:H1,appId:t.appId}},u={method:"POST",headers:s,body:JSON.stringify(o)},c=await Y1(()=>fetch(r,u));if(c.ok){const l=await c.json();return G1(l)}else throw await Q1("Generate Auth Token",c)}function qC(t,{fid:e}){return`${K1(t)}/${e}/authTokens:generate`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function lh(t,e=!1){let n;const r=await fa(t.appConfig,i=>{if(!s_(i))throw zr.create("not-registered");const o=i.authToken;if(!e&&HC(o))return i;if(o.requestStatus===1)return n=jC(t,e),i;{if(!navigator.onLine)throw zr.create("app-offline");const u=WC(i);return n=zC(t,u),u}});return n?await n:r.authToken}async function jC(t,e){let n=await F0(t.appConfig);for(;n.authToken.requestStatus===1;)await X1(100),n=await F0(t.appConfig);const r=n.authToken;return r.requestStatus===0?lh(t,e):r}function F0(t){return fa(t,e=>{if(!s_(e))throw zr.create("not-registered");const n=e.authToken;return KC(n)?{...e,authToken:{requestStatus:0}}:e})}async function zC(t,e){try{const n=await BC(t,e),r={...e,authToken:n};return await Su(t.appConfig,r),n}catch(n){if(W1(n)&&(n.customData.serverCode===401||n.customData.serverCode===404))await n_(t.appConfig);else{const r={...e,authToken:{requestStatus:0}};await Su(t.appConfig,r)}throw n}}function s_(t){return t!==void 0&&t.registrationStatus===2}function HC(t){return t.requestStatus===2&&!$C(t)}function $C(t){const e=Date.now();return e<t.creationTime||t.creationTime+t.expiresIn<e+yC}function WC(t){const e={requestStatus:1,requestTime:Date.now()};return{...t,authToken:e}}function KC(t){return t.requestStatus===1&&t.requestTime+z1<Date.now()}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function GC(t){const e=t,{installationEntry:n,registrationPromise:r}=await ch(e);return r?r.catch(console.error):lh(e).catch(console.error),n.fid}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function QC(t,e=!1){const n=t;return await JC(n),(await lh(n,e)).token}async function JC(t){const{registrationPromise:e}=await ch(t);e&&await e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function YC(t){if(!t||!t.options)throw ic("App Configuration");if(!t.name)throw ic("App Name");const e=["projectId","apiKey","appId"];for(const n of e)if(!t.options[n])throw ic(n);return{appName:t.name,projectId:t.options.projectId,apiKey:t.options.apiKey,appId:t.options.appId}}function ic(t){return zr.create("missing-app-config-values",{valueName:t})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const i_="installations",XC="installations-internal",ZC=t=>{const e=t.getProvider("app").getImmediate(),n=YC(e),r=Kr(e,"heartbeat");return{app:e,appConfig:n,heartbeatServiceProvider:r,_delete:()=>Promise.resolve()}},ex=t=>{const e=t.getProvider("app").getImmediate(),n=Kr(e,i_).getImmediate();return{getId:()=>GC(n),getToken:s=>QC(n,s)}};function tx(){_n(new Wt(i_,ZC,"PUBLIC")),_n(new Wt(XC,ex,"PRIVATE"))}tx();Mt(j1,uh);Mt(j1,uh,"esm2020");/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Du="analytics",nx="firebase_id",rx="origin",sx=60*1e3,ix="https://firebase.googleapis.com/v1alpha/projects/-/apps/{app-id}/webConfig",hh="https://www.googletagmanager.com/gtag/js";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gt=new Gu("@firebase/analytics");/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ox={"already-exists":"A Firebase Analytics instance with the appId {$id}  already exists. Only one Firebase Analytics instance can be created for each appId.","already-initialized":"initializeAnalytics() cannot be called again with different options than those it was initially called with. It can be called again with the same options to return the existing instance, or getAnalytics() can be used to get a reference to the already-initialized instance.","already-initialized-settings":"Firebase Analytics has already been initialized.settings() must be called before initializing any Analytics instanceor it will have no effect.","interop-component-reg-failed":"Firebase Analytics Interop Component failed to instantiate: {$reason}","invalid-analytics-context":"Firebase Analytics is not supported in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","indexeddb-unavailable":"IndexedDB unavailable or restricted in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","fetch-throttle":"The config fetch request timed out while in an exponential backoff state. Unix timestamp in milliseconds when fetch request throttling ends: {$throttleEndTimeMillis}.","config-fetch-failed":"Dynamic config fetch failed: [{$httpStatus}] {$responseMessage}","no-api-key":'The "apiKey" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid API key.',"no-app-id":'The "appId" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid app ID.',"no-client-id":'The "client_id" field is empty.',"invalid-gtag-resource":"Trusted Types detected an invalid gtag resource: {$gtagURL}."},kt=new Wr("analytics","Analytics",ox);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ux(t){if(!t.startsWith(hh)){const e=kt.create("invalid-gtag-resource",{gtagURL:t});return gt.warn(e.message),""}return t}function o_(t){return Promise.all(t.map(e=>e.catch(n=>n)))}function ax(t,e){let n;return window.trustedTypes&&(n=window.trustedTypes.createPolicy(t,e)),n}function cx(t,e){const n=ax("firebase-js-sdk-policy",{createScriptURL:ux}),r=document.createElement("script"),s=`${hh}?l=${t}&id=${e}`;r.src=n?n==null?void 0:n.createScriptURL(s):s,r.async=!0,document.head.appendChild(r)}function lx(t){let e=[];return Array.isArray(window[t])?e=window[t]:window[t]=e,e}async function hx(t,e,n,r,s,i){const o=r[s];try{if(o)await e[o];else{const c=(await o_(n)).find(l=>l.measurementId===s);c&&await e[c.appId]}}catch(u){gt.error(u)}t("config",s,i)}async function fx(t,e,n,r,s){try{let i=[];if(s&&s.send_to){let o=s.send_to;Array.isArray(o)||(o=[o]);const u=await o_(n);for(const c of o){const l=u.find(p=>p.measurementId===c),f=l&&e[l.appId];if(f)i.push(f);else{i=[];break}}}i.length===0&&(i=Object.values(e)),await Promise.all(i),t("event",r,s||{})}catch(i){gt.error(i)}}function dx(t,e,n,r){async function s(i,...o){try{if(i==="event"){const[u,c]=o;await fx(t,e,n,u,c)}else if(i==="config"){const[u,c]=o;await hx(t,e,n,r,u,c)}else if(i==="consent"){const[u,c]=o;t("consent",u,c)}else if(i==="get"){const[u,c,l]=o;t("get",u,c,l)}else if(i==="set"){const[u]=o;t("set",u)}else t(i,...o)}catch(u){gt.error(u)}}return s}function px(t,e,n,r,s){let i=function(...o){window[r].push(arguments)};return window[s]&&typeof window[s]=="function"&&(i=window[s]),window[s]=dx(i,t,e,n),{gtagCore:i,wrappedGtag:window[s]}}function mx(t){const e=window.document.getElementsByTagName("script");for(const n of Object.values(e))if(n.src&&n.src.includes(hh)&&n.src.includes(t))return n;return null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gx=30,_x=1e3;class yx{constructor(e={},n=_x){this.throttleMetadata=e,this.intervalMillis=n}getThrottleMetadata(e){return this.throttleMetadata[e]}setThrottleMetadata(e,n){this.throttleMetadata[e]=n}deleteThrottleMetadata(e){delete this.throttleMetadata[e]}}const u_=new yx;function bx(t){return new Headers({Accept:"application/json","x-goog-api-key":t})}async function Ex(t){var o;const{appId:e,apiKey:n}=t,r={method:"GET",headers:bx(n)},s=ix.replace("{app-id}",e),i=await fetch(s,r);if(i.status!==200&&i.status!==304){let u="";try{const c=await i.json();(o=c.error)!=null&&o.message&&(u=c.error.message)}catch{}throw kt.create("config-fetch-failed",{httpStatus:i.status,responseMessage:u})}return i.json()}async function vx(t,e=u_,n){const{appId:r,apiKey:s,measurementId:i}=t.options;if(!r)throw kt.create("no-app-id");if(!s){if(i)return{measurementId:i,appId:r};throw kt.create("no-api-key")}const o=e.getThrottleMetadata(r)||{backoffCount:0,throttleEndTimeMillis:Date.now()},u=new Ix;return setTimeout(async()=>{u.abort()},sx),a_({appId:r,apiKey:s,measurementId:i},o,u,e)}async function a_(t,{throttleEndTimeMillis:e,backoffCount:n},r,s=u_){var u;const{appId:i,measurementId:o}=t;try{await wx(r,e)}catch(c){if(o)return gt.warn(`Timed out fetching this Firebase app's measurement ID from the server. Falling back to the measurement ID ${o} provided in the "measurementId" field in the local Firebase config. [${c==null?void 0:c.message}]`),{appId:i,measurementId:o};throw c}try{const c=await Ex(t);return s.deleteThrottleMetadata(i),c}catch(c){const l=c;if(!Tx(l)){if(s.deleteThrottleMetadata(i),o)return gt.warn(`Failed to fetch this Firebase app's measurement ID from the server. Falling back to the measurement ID ${o} provided in the "measurementId" field in the local Firebase config. [${l==null?void 0:l.message}]`),{appId:i,measurementId:o};throw c}const f=Number((u=l==null?void 0:l.customData)==null?void 0:u.httpStatus)===503?ad(n,s.intervalMillis,gx):ad(n,s.intervalMillis),p={throttleEndTimeMillis:Date.now()+f,backoffCount:n+1};return s.setThrottleMetadata(i,p),gt.debug(`Calling attemptFetch again in ${f} millis`),a_(t,p,r,s)}}function wx(t,e){return new Promise((n,r)=>{const s=Math.max(e-Date.now(),0),i=setTimeout(n,s);t.addEventListener(()=>{clearTimeout(i),r(kt.create("fetch-throttle",{throttleEndTimeMillis:e}))})})}function Tx(t){if(!(t instanceof Qt)||!t.customData)return!1;const e=Number(t.customData.httpStatus);return e===429||e===500||e===503||e===504}class Ix{constructor(){this.listeners=[]}addEventListener(e){this.listeners.push(e)}abort(){this.listeners.forEach(e=>e())}}async function Ax(t,e,n,r,s){if(s&&s.global){t("event",n,r);return}else{const i=await e,o={...r,send_to:i};t("event",n,o)}}async function Cx(t,e,n,r){if(r&&r.global){const s={};for(const i of Object.keys(n))s[`user_properties.${i}`]=n[i];return t("set",s),Promise.resolve()}else{const s=await e;t("config",s,{update:!0,user_properties:n})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function xx(){if(Im())try{await Am()}catch(t){return gt.warn(kt.create("indexeddb-unavailable",{errorInfo:t==null?void 0:t.toString()}).message),!1}else return gt.warn(kt.create("indexeddb-unavailable",{errorInfo:"IndexedDB is not available in this environment."}).message),!1;return!0}async function kx(t,e,n,r,s,i,o){const u=vx(t);u.then(g=>{n[g.measurementId]=g.appId,t.options.measurementId&&g.measurementId!==t.options.measurementId&&gt.warn(`The measurement ID in the local Firebase config (${t.options.measurementId}) does not match the measurement ID fetched from the server (${g.measurementId}). To ensure analytics events are always sent to the correct Analytics property, update the measurement ID field in the local config or remove it from the local config.`)}).catch(g=>gt.error(g)),e.push(u);const c=xx().then(g=>{if(g)return r.getId()}),[l,f]=await Promise.all([u,c]);mx(i)||cx(i,l.measurementId),s("js",new Date);const p=(o==null?void 0:o.config)??{};return p[rx]="firebase",p.update=!0,f!=null&&(p[nx]=f),s("config",l.measurementId,p),l.measurementId}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sx{constructor(e){this.app=e}_delete(){return delete As[this.app.options.appId],Promise.resolve()}}let As={},N0=[];const O0={};let oc="dataLayer",Dx="gtag",V0,fh,M0=!1;function Rx(){const t=[];if(Tm()&&t.push("This is a browser extension environment."),uv()||t.push("Cookies are not available."),t.length>0){const e=t.map((r,s)=>`(${s+1}) ${r}`).join(" "),n=kt.create("invalid-analytics-context",{errorInfo:e});gt.warn(n.message)}}function Px(t,e,n){Rx();const r=t.options.appId;if(!r)throw kt.create("no-app-id");if(!t.options.apiKey)if(t.options.measurementId)gt.warn(`The "apiKey" field is empty in the local Firebase config. This is needed to fetch the latest measurement ID for this Firebase app. Falling back to the measurement ID ${t.options.measurementId} provided in the "measurementId" field in the local Firebase config.`);else throw kt.create("no-api-key");if(As[r]!=null)throw kt.create("already-exists",{id:r});if(!M0){lx(oc);const{wrappedGtag:i,gtagCore:o}=px(As,N0,O0,oc,Dx);fh=i,V0=o,M0=!0}return As[r]=kx(t,N0,O0,e,V0,oc,n),new Sx(t)}function Fx(t=El()){t=ht(t);const e=Kr(t,Du);return e.isInitialized()?e.getImmediate():Nx(t)}function Nx(t,e={}){const n=Kr(t,Du);if(n.isInitialized()){const s=n.getImmediate();if(fr(e,n.getOptions()))return s;throw kt.create("already-initialized")}return n.initialize({options:e})}function Ox(t,e,n){t=ht(t),Cx(fh,As[t.app.options.appId],e,n).catch(r=>gt.error(r))}function Vx(t,e,n,r){t=ht(t),Ax(fh,As[t.app.options.appId],e,n,r).catch(s=>gt.error(s))}const L0="@firebase/analytics",U0="0.10.21";function Mx(){_n(new Wt(Du,(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),s=e.getProvider("installations-internal").getImmediate();return Px(r,s,n)},"PUBLIC")),_n(new Wt("analytics-internal",t,"PRIVATE")),Mt(L0,U0),Mt(L0,U0,"esm2020");function t(e){try{const n=e.getProvider(Du).getImmediate();return{logEvent:(r,s,i)=>Vx(n,r,s,i),setUserProperties:(r,s)=>Ox(n,r,s)}}catch(n){throw kt.create("interop-component-reg-failed",{reason:n})}}}Mx();const Lx={apiKey:"AIzaSyB27BvWgAtil7oOS5Z3fNqeqw41qLdyalU",authDomain:"exercise-tracker-ee724.firebaseapp.com",databaseURL:"https://exercise-tracker-ee724-default-rtdb.firebaseio.com",projectId:"exercise-tracker-ee724",storageBucket:"exercise-tracker-ee724.firebasestorage.app",messagingSenderId:"688508143601",appId:"1:688508143601:web:d70f0e3577fa936093e650",measurementId:"G-1JS50M5762"},dh=Dm(Lx),c_=MI(dh),ph=mC(dh);Fx(dh);async function Ux(t,e){try{const n=await e4(ph,t,e);return{user:{id:n.user.uid,email:n.user.email},token:await n.user.getIdToken()}}catch(n){throw n.message}}async function Bx(t,e){try{const n=await t4(ph,t,e);return{user:{id:n.user.uid,email:n.user.email},token:await n.user.getIdToken()}}catch(n){throw n.message}}async function qx(t,e){try{const n=Zg(Xg(c_,"users"),t);return await eA(n,{questions:e,lastUpdated:QI()},{merge:!0}),{success:!0}}catch(n){throw n.message}}async function jx(t){try{const e=Zg(Xg(c_,"users"),t),n=await ZI(e);return n.exists()?{questions:n.data().questions||[],lastUpdated:n.data().lastUpdated}:{questions:[],lastUpdated:null}}catch(e){throw e.message}}const Rt=il("idle"),mh=il(null);async function zx(t){if(!(Rt.value==="syncing"||!hr.value)){Rt.value="syncing";try{await qx(hr.value.id,t),mh.value=new Date,Rt.value="success",setTimeout(()=>{Rt.value="idle"},2e3)}catch(e){console.error("同步失败:",e),Rt.value="error",setTimeout(()=>{Rt.value="idle"},2e3)}}}async function Hx(){if(!hr.value)throw new Error("请先登录");Rt.value="syncing";try{const t=await jx(hr.value.id);return mh.value=new Date,Rt.value="success",setTimeout(()=>{Rt.value="idle"},2e3),t}catch(t){throw console.error("同步失败:",t),Rt.value="error",setTimeout(()=>{Rt.value="idle"},2e3),t}}const $x=(t,e)=>{const n=t.__vccOpts||t;for(const[r,s]of e)n[r]=s;return n},Wx=new Lt({breaks:!0,linkify:!0}),Kx={data(){return{questions:[],filterStatus:"",filterDifficulty:"",searchNumber:"",showUploadModal:!1,showPreviewModal:!1,showNoteModal:!1,showClearDataModal:!1,showUserModal:!1,showEditUserModal:!1,showAuthModal:!1,showRegisterModal:!1,currentQuestionNumber:null,previewImageData:null,currentNote:"",saveTimeout:null,storageKey:"660QuestionsUsers",backupKey:"660QuestionsUsersBackup",dataVersion:"1.2",usersData:{currentUser:null,users:{}},newUserName:"",editingUserId:null,editingUserName:"",authForm:{email:"",password:"",username:""},authError:"",authLoading:!1,syncStatus:Rt,lastSyncTime:mh}},computed:{filteredQuestions(){let t=this.questions;if(this.filterStatus&&(t=t.filter(e=>e.status===this.filterStatus)),this.filterDifficulty&&(t=t.filter(e=>e.difficulty===parseInt(this.filterDifficulty))),this.searchNumber){const e=parseInt(this.searchNumber);t=t.filter(n=>n.number===e)}return t},completedCount(){return this.questions.filter(t=>t.status).length},progressPercentage(){return this.completedCount/660*100},statusStats(){const t={掌握:0,粗心:0,概念模糊:0,没思路:0,其他:0};return this.questions.forEach(e=>{e.status&&t[e.status]!==void 0&&t[e.status]++}),t},difficultyStats(){const t={1:0,2:0,3:0,4:0,5:0};return this.questions.forEach(e=>{e.difficulty>0&&t[e.difficulty]!==void 0&&t[e.difficulty]++}),t},photoCount(){return this.questions.filter(t=>t.image).length},photoPercentage(){return this.completedCount>0?this.photoCount/this.completedCount*100:0},averageDifficulty(){const t=this.questions.filter(n=>n.difficulty>0);return t.length===0?0:t.reduce((n,r)=>n+r.difficulty,0)/t.length},currentUserName(){return this.usersData.currentUser&&this.usersData.users[this.usersData.currentUser]?this.usersData.users[this.usersData.currentUser].name:"未登录"},users(){return this.usersData.users},currentUserId(){return this.usersData.currentUser},isAuthenticated(){return sd.value},currentAuthUser(){return hr.value},syncStatusText(){switch(this.syncStatus.value){case"syncing":return"同步中...";case"success":return"同步成功";case"error":return"同步失败";default:return"空闲"}}},mounted(){this.initializeData(),s4(ph,t=>{if(t){const e={id:t.uid,email:t.email};$a(e),this.syncData()}else id()})},methods:{initializeData(){try{const t=localStorage.getItem(this.storageKey);if(t)try{const e=JSON.parse(t);e.version===this.dataVersion?this.usersData={currentUser:e.currentUser,users:e.users}:this.usersData=this.migrateUserData(e),this.loadUserData()}catch(e){console.error("解析用户数据失败，尝试从备份恢复:",e),this.loadUsersFromBackup()}else this.loadUsersFromBackup()}catch(t){console.error("加载用户数据失败:",t),this.checkForOldData()}},loadUsersFromBackup(){try{const t=localStorage.getItem(this.backupKey);if(t){const e=JSON.parse(t);this.usersData={currentUser:e.currentUser,users:e.users},this.loadUserData(),console.log("从备份恢复用户数据成功")}else this.createDefaultUser()}catch(t){console.error("从备份恢复用户数据失败:",t),this.createDefaultUser()}},createDefaultUser(){const t="user_"+Date.now();this.usersData={currentUser:t,users:{[t]:{name:"默认用户",createdAt:Date.now(),data:{version:this.dataVersion,timestamp:Date.now(),questions:this.initializeDefaultQuestions()}}}},this.loadUserData(),this.saveUsersData()},initializeDefaultQuestions(){return Array.from({length:660},(t,e)=>({number:e+1,status:"",difficulty:0,image:null,note:""}))},ensureQuestionFields(t){return t.forEach(e=>{e.note===void 0&&(e.note=""),e.image===void 0&&(e.image=null),e.status===void 0&&(e.status=""),e.difficulty===void 0&&(e.difficulty=0)}),t},migrateUserData(t){const e={currentUser:t.currentUser,users:{}};return t.users&&Object.keys(t.users).forEach(n=>{var s;const r=t.users[n];e.users[n]={name:r.name,createdAt:r.createdAt||Date.now(),data:{version:this.dataVersion,timestamp:Date.now(),questions:this.ensureQuestionFields(((s=r.data)==null?void 0:s.questions)||this.initializeDefaultQuestions())}}}),Object.keys(e.users).length===0?(this.createDefaultUser(),this.usersData):e},checkForOldData(){const t=localStorage.getItem("660Questions");if(t)try{const e=JSON.parse(t),n="user_"+Date.now();this.usersData={currentUser:n,users:{[n]:{name:"默认用户",createdAt:Date.now(),data:{version:this.dataVersion,timestamp:Date.now(),questions:this.ensureQuestionFields(e.questions||this.initializeDefaultQuestions())}}}},this.loadUserData(),this.saveUsersData(),localStorage.removeItem("660Questions"),localStorage.removeItem("660QuestionsBackup"),console.log("旧数据迁移成功")}catch(e){console.error("旧数据迁移失败:",e),this.createDefaultUser()}else this.createDefaultUser()},loadUserData(){if(this.usersData.currentUser&&this.usersData.users[this.usersData.currentUser]){const t=this.usersData.users[this.usersData.currentUser];t&&t.data&&(this.questions=this.ensureQuestionFields(t.data.questions||this.initializeDefaultQuestions()))}},saveData(){clearTimeout(this.saveTimeout),this.saveTimeout=setTimeout(()=>{this.saveUserData(),sd.value&&zx(this.questions)},300)},saveUserData(){if(this.usersData.currentUser&&this.usersData.users[this.usersData.currentUser]){const t=this.usersData.users[this.usersData.currentUser];t.data.questions=this.questions,t.data.timestamp=Date.now(),this.saveUsersData()}},saveUsersData(){try{const t={version:this.dataVersion,timestamp:Date.now(),currentUser:this.usersData.currentUser,users:this.usersData.users};localStorage.setItem(this.backupKey,JSON.stringify(t)),localStorage.setItem(this.storageKey,JSON.stringify(t)),console.log("用户数据保存成功")}catch(t){console.error("保存用户数据失败:",t);try{sessionStorage.setItem(this.storageKey,JSON.stringify(this.usersData)),console.log("使用sessionStorage保存用户数据")}catch(e){console.error("sessionStorage也保存失败:",e),alert("数据保存失败，部分功能可能受限")}}},setDifficulty(t,e){const n=this.questions.find(r=>r.number===t);n&&(n.difficulty=e,this.saveData())},openImageUpload(t){this.currentQuestionNumber=t,this.previewImageData=null,this.showUploadModal=!0},triggerFileInput(){this.$refs.fileInput.click()},handleFileSelect(t){const e=t.target.files[0];e&&this.previewFile(e)},handleDrop(t){const e=t.dataTransfer.files[0];e&&this.previewFile(e)},previewFile(t){if(!t.type.match("image.*")){alert("请上传图片文件");return}const e=new FileReader;e.onload=n=>{this.previewImageData=n.target.result},e.readAsDataURL(t)},confirmUpload(){if(this.previewImageData&&this.currentQuestionNumber){const t=this.questions.find(e=>e.number===this.currentQuestionNumber);t&&(t.image=this.previewImageData,this.saveData(),this.showUploadModal=!1,this.previewImageData=null)}},previewImage(t){this.previewImageData=t,this.showPreviewModal=!0},clearSearch(){this.searchNumber=""},exportData(t){t==="json"?this.exportJSON():t==="csv"&&this.exportCSV()},exportJSON(){const t=JSON.stringify(this.questions,null,2),e=new Blob([t],{type:"application/json"});this.downloadFile(e,"660_questions.json")},exportCSV(){const t=["题号","状态","难度","是否有照片","笔记"],e=this.questions.map(s=>[s.number,s.status||"未标记",s.difficulty,s.image?"是":"否",s.note||""]),n=[t.join(","),...e.map(s=>s.map(i=>`"${String(i).replace(/"/g,'""')}"`).join(","))].join(`
`),r=new Blob([n],{type:"text/csv;charset=utf-8;"});this.downloadFile(r,"660_questions.csv")},downloadFile(t,e){const n=URL.createObjectURL(t),r=document.createElement("a");r.href=n,r.download=e,document.body.appendChild(r),r.click(),document.body.removeChild(r),URL.revokeObjectURL(n)},getDifficultyPercentage(t){const e=Math.max(...Object.values(this.difficultyStats));return e>0?this.difficultyStats[t]/e*100:0},openNoteModal(t){this.currentQuestionNumber=t;const e=this.questions.find(n=>n.number===t);this.currentNote=e&&e.note||"",this.showNoteModal=!0},saveNote(){if(this.currentQuestionNumber){const t=this.questions.find(e=>e.number===this.currentQuestionNumber);t&&(t.note=this.currentNote,this.saveData(),this.showNoteModal=!1)}},renderMarkdown(t){return t?Wx.render(t):""},clearAllData(){if(confirm("确定要清除当前用户的所有数据吗？此操作无法恢复！"))try{this.usersData.currentUser&&this.usersData.users[this.usersData.currentUser]&&(this.usersData.users[this.usersData.currentUser].data.questions=this.initializeDefaultQuestions(),this.questions=this.initializeDefaultQuestions(),this.saveUsersData()),this.showClearDataModal=!1,console.log("数据清除成功"),alert("数据已成功清除")}catch(t){console.error("清除数据失败:",t),alert("清除数据失败，请重试")}},createUser(){if(this.newUserName.trim()){const t="user_"+Date.now();this.usersData.users[t]={name:this.newUserName.trim(),createdAt:Date.now(),data:{version:this.dataVersion,timestamp:Date.now(),questions:this.initializeDefaultQuestions()}},this.usersData.currentUser=t,this.loadUserData(),this.saveUsersData(),this.newUserName="",this.showUserModal=!1,console.log("用户创建成功")}else alert("请输入用户名")},switchUser(t){const e=t.target.value;this.usersData.users[e]&&(this.usersData.currentUser=e,this.loadUserData(),this.saveUsersData(),console.log("用户切换成功"))},deleteUser(t){if(confirm("确定要删除此用户吗？此操作无法恢复！"))if(Object.keys(this.usersData.users).length>1){if(delete this.usersData.users[t],this.usersData.currentUser===t){const e=Object.keys(this.usersData.users);e.length>0&&(this.usersData.currentUser=e[0],this.loadUserData())}this.saveUsersData(),console.log("用户删除成功")}else alert("至少需要保留一个用户")},editUser(t){this.editingUserId=t,this.editingUserName=this.usersData.users[t].name,this.showEditUserModal=!0},saveEditUser(){this.editingUserName.trim()&&this.editingUserId?(this.usersData.users[this.editingUserId].name=this.editingUserName.trim(),this.saveUsersData(),this.showEditUserModal=!1,this.editingUserId=null,this.editingUserName="",console.log("用户编辑成功")):alert("请输入用户名")},async handleLogin(){this.authLoading=!0,this.authError="";try{const t=await Bx(this.authForm.email,this.authForm.password);$a(t.user,t.token),this.showAuthModal=!1,this.authForm={email:"",password:"",username:""},this.syncData(),console.log("登录成功")}catch(t){this.authError=t,console.error("登录失败:",t)}finally{this.authLoading=!1}},async handleRegister(){this.authLoading=!0,this.authError="";try{const t=await Ux(this.authForm.username,this.authForm.email,this.authForm.password);$a(t.user,t.token),this.showRegisterModal=!1,this.authForm={email:"",password:"",username:""},this.syncData(),console.log("注册成功")}catch(t){this.authError=t,console.error("注册失败:",t)}finally{this.authLoading=!1}},async handleLogout(){try{await id(),console.log("登出成功")}catch(t){console.error("登出失败:",t)}},async syncData(){try{const t=await Hx();t&&t.questions&&(this.questions=t.questions,this.saveData(),console.log("同步成功"))}catch(t){console.error("同步失败:",t),alert("同步失败，请检查网络连接")}}}},Gx={class:"app"},Qx={class:"header"},Jx={class:"user-section"},Yx={class:"current-user"},Xx=["value"],Zx={key:1,class:"auth-user"},ek={class:"header-actions"},tk={key:0,class:"sync-status"},nk=["disabled"],rk={class:"analysis-section"},sk={class:"analysis-grid"},ik={class:"analysis-card"},ok={class:"progress-bar"},uk={class:"analysis-card"},ak={class:"status-stats"},ck={class:"stat-item"},lk={class:"stat-value",style:{color:"#4CAF50"}},hk={class:"stat-item"},fk={class:"stat-value",style:{color:"#FF9800"}},dk={class:"stat-item"},pk={class:"stat-value",style:{color:"#FF5722"}},mk={class:"stat-item"},gk={class:"stat-value",style:{color:"#F44336"}},_k={class:"stat-item"},yk={class:"stat-value",style:{color:"#9C27B0"}},bk={class:"analysis-card"},Ek={class:"difficulty-stats"},vk={class:"difficulty-label"},wk={class:"difficulty-bar"},Tk={class:"difficulty-count"},Ik={class:"analysis-card"},Ak={class:"photo-stats"},Ck={class:"stat-item"},xk={class:"stat-value"},kk={class:"stat-item"},Sk={class:"stat-value"},Dk={class:"analysis-card analysis-suggestions"},Rk={class:"suggestions"},Pk={key:0,class:"suggestion-item warning"},Fk={key:1,class:"suggestion-item warning"},Nk={key:2,class:"suggestion-item info"},Ok={key:3,class:"suggestion-item success"},Vk={key:4,class:"suggestion-item info"},Mk={key:5,class:"suggestion-item success"},Lk={key:6,class:"suggestion-item success"},Uk={key:7,class:"suggestion-item info"},Bk={class:"filter-section"},qk={class:"search-box"},jk={class:"filter-options"},zk={class:"questions-grid"},Hk={class:"question-header"},$k={class:"question-number"},Wk={class:"question-actions"},Kk=["onClick"],Gk=["onClick"],Qk=["onClick"],Jk={class:"question-status"},Yk=["onUpdate:modelValue"],Xk={class:"question-difficulty"},Zk={class:"difficulty-stars"},eS=["onClick"],tS={key:0,class:"question-note-preview"},nS=["innerHTML"],rS={key:0,class:"modal"},sS={class:"modal-content"},iS={class:"modal-header"},oS={key:0,class:"image-preview"},uS=["src"],aS={key:1,class:"modal"},cS={class:"modal-content preview-modal"},lS={class:"modal-header"},hS={class:"preview-area"},fS=["src"],dS={key:2,class:"modal"},pS={class:"modal-content note-modal"},mS={class:"modal-header"},gS={class:"note-editor"},_S={class:"note-actions"},yS={key:3,class:"modal"},bS={class:"modal-content"},ES={class:"modal-header"},vS={class:"note-actions"},wS={key:4,class:"modal"},TS={class:"modal-content user-modal"},IS={class:"modal-header"},AS={class:"user-management"},CS={class:"add-user"},xS={class:"user-list"},kS={class:"user-info"},SS={class:"user-name"},DS={key:0,class:"user-status"},RS={class:"user-actions"},PS=["onClick"],FS=["onClick","disabled"],NS={key:5,class:"modal"},OS={class:"modal-content"},VS={class:"modal-header"},MS={class:"edit-user-content"},LS={class:"note-actions"},US={key:6,class:"modal"},BS={class:"modal-content auth-modal"},qS={class:"modal-header"},jS={class:"auth-content"},zS={key:0,class:"error-message"},HS={class:"form-group"},$S={class:"form-group"},WS=["disabled"],KS={class:"auth-switch"},GS={key:7,class:"modal"},QS={class:"modal-content auth-modal"},JS={class:"modal-header"},YS={class:"auth-content"},XS={key:0,class:"error-message"},ZS={class:"form-group"},eD={class:"form-group"},tD={class:"form-group"},nD=["disabled"],rD={class:"auth-switch"};function sD(t,e,n,r,s,i){var o;return le(),he("div",Gx,[x("header",Qx,[x("div",Jx,[x("div",Yx,[i.isAuthenticated?(le(),he("div",Zx,[x("span",null,Te((o=i.currentAuthUser)==null?void 0:o.username),1),x("button",{onClick:e[2]||(e[2]=(...u)=>i.handleLogout&&i.handleLogout(...u)),class:"btn btn-sm"},"登出")])):Ct((le(),he("select",{key:0,"onUpdate:modelValue":e[0]||(e[0]=u=>s.usersData.currentUser=u),onChange:e[1]||(e[1]=(...u)=>i.switchUser&&i.switchUser(...u)),class:"user-select"},[(le(!0),he(Et,null,ui(i.users,(u,c)=>(le(),he("option",{key:c,value:c},Te(u.name),9,Xx))),128))],544)),[[So,s.usersData.currentUser]]),i.isAuthenticated?xe("",!0):(le(),he("button",{key:2,onClick:e[3]||(e[3]=u=>s.showUserModal=!0),class:"btn btn-sm"},"管理用户"))])]),e[49]||(e[49]=x("h1",null,"26版660习题集记录",-1)),x("div",ek,[i.isAuthenticated?(le(),he("div",tk,[e[48]||(e[48]=x("span",{class:"sync-label"},"同步状态:",-1)),x("span",{class:ms(["sync-indicator",s.syncStatus.value])},Te(i.syncStatusText),3),x("button",{onClick:e[4]||(e[4]=(...u)=>i.syncData&&i.syncData(...u)),class:"btn btn-sm",disabled:s.syncStatus.value==="syncing"}," 手动同步 ",8,nk)])):xe("",!0),i.isAuthenticated?xe("",!0):(le(),he("button",{key:1,onClick:e[5]||(e[5]=u=>s.showAuthModal=!0),class:"btn"},"登录")),i.isAuthenticated?xe("",!0):(le(),he("button",{key:2,onClick:e[6]||(e[6]=u=>s.showRegisterModal=!0),class:"btn"},"注册")),x("button",{onClick:e[7]||(e[7]=u=>i.exportData("csv")),class:"btn"},"导出CSV"),x("button",{onClick:e[8]||(e[8]=u=>i.exportData("json")),class:"btn"},"导出JSON"),x("button",{onClick:e[9]||(e[9]=u=>s.showClearDataModal=!0),class:"btn btn-danger"},"清除数据")])]),x("div",rk,[x("div",sk,[x("div",ik,[e[50]||(e[50]=x("h3",null,"完成进度",-1)),x("div",ok,[x("div",{class:"progress-fill",style:Di({width:`${i.progressPercentage}%`})},null,4)]),x("p",null,Te(i.completedCount)+" / 660 题 ("+Te(i.progressPercentage.toFixed(1))+"%)",1)]),x("div",uk,[e[56]||(e[56]=x("h3",null,"状态分布",-1)),x("div",ak,[x("div",ck,[e[51]||(e[51]=x("span",{class:"stat-label"},"掌握:",-1)),x("span",lk,Te(i.statusStats.掌握)+" 题",1)]),x("div",hk,[e[52]||(e[52]=x("span",{class:"stat-label"},"粗心:",-1)),x("span",fk,Te(i.statusStats.粗心)+" 题",1)]),x("div",dk,[e[53]||(e[53]=x("span",{class:"stat-label"},"概念模糊:",-1)),x("span",pk,Te(i.statusStats.概念模糊)+" 题",1)]),x("div",mk,[e[54]||(e[54]=x("span",{class:"stat-label"},"没思路:",-1)),x("span",gk,Te(i.statusStats.没思路)+" 题",1)]),x("div",_k,[e[55]||(e[55]=x("span",{class:"stat-label"},"其他:",-1)),x("span",yk,Te(i.statusStats.其他)+" 题",1)])])]),x("div",bk,[e[57]||(e[57]=x("h3",null,"难度分布",-1)),x("div",Ek,[(le(),he(Et,null,ui(5,u=>x("div",{key:u,class:"difficulty-item"},[x("span",vk,Te(u)+"级:",1),x("div",wk,[x("div",{class:"difficulty-fill",style:Di({width:`${i.getDifficultyPercentage(u)}%`})},null,4)]),x("span",Tk,Te(i.difficultyStats[u])+" 题",1)])),64))])]),x("div",Ik,[e[60]||(e[60]=x("h3",null,"照片统计",-1)),x("div",Ak,[x("div",Ck,[e[58]||(e[58]=x("span",{class:"stat-label"},"已上传照片:",-1)),x("span",xk,Te(i.photoCount)+" 题",1)]),x("div",kk,[e[59]||(e[59]=x("span",{class:"stat-label"},"照片覆盖率:",-1)),x("span",Sk,Te(i.photoPercentage.toFixed(1))+"%",1)])])]),x("div",Dk,[e[61]||(e[61]=x("h3",null,"学习建议",-1)),x("div",Rk,[i.statusStats.没思路>0?(le(),he("div",Pk," ⚠️ 有 "+Te(i.statusStats.没思路)+' 道题"没思路"，建议重点复习相关知识点 ',1)):xe("",!0),i.statusStats.概念模糊>0?(le(),he("div",Fk," ⚠️ 有 "+Te(i.statusStats.概念模糊)+' 道题"概念模糊"，需要加强基础概念理解 ',1)):xe("",!0),i.statusStats.粗心>0?(le(),he("div",Nk," 💡 有 "+Te(i.statusStats.粗心)+' 道题"粗心"，做题时请更加仔细 ',1)):xe("",!0),i.statusStats.掌握>50?(le(),he("div",Ok," 🎉 已掌握 "+Te(i.statusStats.掌握)+" 道题，继续保持！ ",1)):xe("",!0),i.completedCount===0?(le(),he("div",Vk," 📚 还没有开始做题，建议从简单题目开始 ")):xe("",!0),i.progressPercentage>=80?(le(),he("div",Mk," 🏆 完成度超过80%，非常棒！ ")):xe("",!0),i.averageDifficulty>=4&&i.completedCount>0?(le(),he("div",Lk," 💪 平均难度达到"+Te(i.averageDifficulty.toFixed(1))+"级，挑战能力很强！ ",1)):xe("",!0),i.photoCount<i.completedCount*.5&&i.completedCount>10?(le(),he("div",Uk," 📷 建议多上传错题照片，便于复习 ")):xe("",!0)])])])]),x("div",Bk,[x("div",qk,[Ct(x("input",{type:"number","onUpdate:modelValue":e[10]||(e[10]=u=>s.searchNumber=u),placeholder:"输入题号搜索",class:"search-input",min:"1",max:"660"},null,512),[[In,s.searchNumber]]),x("button",{onClick:e[11]||(e[11]=(...u)=>i.clearSearch&&i.clearSearch(...u)),class:"btn btn-secondary"},"清除")]),x("div",jk,[Ct(x("select",{"onUpdate:modelValue":e[12]||(e[12]=u=>s.filterStatus=u),class:"filter-select"},[...e[62]||(e[62]=[Oa('<option value="" data-v-eb5f9d61>所有状态</option><option value="掌握" data-v-eb5f9d61>掌握</option><option value="粗心" data-v-eb5f9d61>粗心</option><option value="概念模糊" data-v-eb5f9d61>概念模糊</option><option value="没思路" data-v-eb5f9d61>没思路</option><option value="其他" data-v-eb5f9d61>其他</option>',6)])],512),[[So,s.filterStatus]]),Ct(x("select",{"onUpdate:modelValue":e[13]||(e[13]=u=>s.filterDifficulty=u),class:"filter-select"},[...e[63]||(e[63]=[Oa('<option value="" data-v-eb5f9d61>所有难度</option><option value="1" data-v-eb5f9d61>1级</option><option value="2" data-v-eb5f9d61>2级</option><option value="3" data-v-eb5f9d61>3级</option><option value="4" data-v-eb5f9d61>4级</option><option value="5" data-v-eb5f9d61>5级</option>',6)])],512),[[So,s.filterDifficulty]])])]),x("div",zk,[(le(!0),he(Et,null,ui(i.filteredQuestions,u=>(le(),he("div",{key:u.number,class:ms(["question-card",{completed:u.status}])},[x("div",Hk,[x("span",$k,Te(u.number),1),x("div",Wk,[x("button",{onClick:c=>i.openNoteModal(u.number),class:"btn btn-sm",title:"编辑笔记"}," 📝 ",8,Kk),x("button",{onClick:c=>i.openImageUpload(u.number),class:"btn btn-sm",title:"上传照片"}," 📷 ",8,Gk),u.image?(le(),he("button",{key:0,onClick:c=>i.previewImage(u.image),class:"btn btn-sm",title:"预览照片"}," 👁️ ",8,Qk)):xe("",!0)])]),x("div",Jk,[Ct(x("select",{"onUpdate:modelValue":c=>u.status=c,onChange:e[14]||(e[14]=(...c)=>i.saveData&&i.saveData(...c)),class:"status-select"},[...e[64]||(e[64]=[Oa('<option value="" data-v-eb5f9d61>未标记</option><option value="掌握" data-v-eb5f9d61>掌握</option><option value="粗心" data-v-eb5f9d61>粗心</option><option value="概念模糊" data-v-eb5f9d61>概念模糊</option><option value="没思路" data-v-eb5f9d61>没思路</option><option value="其他" data-v-eb5f9d61>其他</option>',6)])],40,Yk),[[So,u.status]])]),x("div",Xk,[e[65]||(e[65]=x("span",null,"难度:",-1)),x("div",Zk,[(le(),he(Et,null,ui(5,c=>x("button",{key:c,onClick:l=>i.setDifficulty(u.number,c),class:ms(["star-btn",{active:u.difficulty>=c}])}," ★ ",10,eS)),64))])]),u.note?(le(),he("div",tS,[x("div",{class:"note-preview-text",innerHTML:i.renderMarkdown(u.note.substring(0,100))},null,8,nS)])):xe("",!0)],2))),128))]),s.showUploadModal?(le(),he("div",rS,[x("div",sS,[x("div",iS,[x("h3",null,"上传第 "+Te(s.currentQuestionNumber)+" 题照片",1),x("button",{onClick:e[15]||(e[15]=u=>s.showUploadModal=!1),class:"close-btn"},"×")]),x("div",{class:"upload-area",onDragover:e[17]||(e[17]=Lf(()=>{},["prevent"])),onDrop:e[18]||(e[18]=Lf((...u)=>i.handleDrop&&i.handleDrop(...u),["prevent"])),onClick:e[19]||(e[19]=(...u)=>i.triggerFileInput&&i.triggerFileInput(...u))},[x("input",{ref:"fileInput",type:"file",accept:"image/jpeg,image/png",onChange:e[16]||(e[16]=(...u)=>i.handleFileSelect&&i.handleFileSelect(...u)),style:{display:"none"}},null,544),e[66]||(e[66]=x("p",null,"点击或拖拽图片到此处上传",-1)),e[67]||(e[67]=x("p",null,"支持 JPG、PNG 格式",-1))],32),s.previewImageData?(le(),he("div",oS,[x("img",{src:s.previewImageData,alt:"预览"},null,8,uS),x("button",{onClick:e[20]||(e[20]=(...u)=>i.confirmUpload&&i.confirmUpload(...u)),class:"btn"},"确认上传"),x("button",{onClick:e[21]||(e[21]=u=>s.previewImageData=null),class:"btn btn-secondary"},"取消")])):xe("",!0)])])):xe("",!0),s.showPreviewModal?(le(),he("div",aS,[x("div",cS,[x("div",lS,[x("h3",null,"第 "+Te(s.currentQuestionNumber)+" 题照片",1),x("button",{onClick:e[22]||(e[22]=u=>s.showPreviewModal=!1),class:"close-btn"},"×")]),x("div",hS,[x("img",{src:s.previewImageData,alt:"预览"},null,8,fS)])])])):xe("",!0),s.showNoteModal?(le(),he("div",dS,[x("div",pS,[x("div",mS,[x("h3",null,"第 "+Te(s.currentQuestionNumber)+" 题笔记",1),x("button",{onClick:e[23]||(e[23]=u=>s.showNoteModal=!1),class:"close-btn"},"×")]),x("div",gS,[Ct(x("textarea",{"onUpdate:modelValue":e[24]||(e[24]=u=>s.currentNote=u),class:"note-textarea",placeholder:"在此输入笔记内容，支持Markdown格式：\\n# 标题\\n- 列表\\n**粗体**\\n*斜体*\\n[链接](url)\\n```代码```",rows:"10"},null,512),[[In,s.currentNote]])]),x("div",_S,[x("button",{onClick:e[25]||(e[25]=(...u)=>i.saveNote&&i.saveNote(...u)),class:"btn"},"保存笔记"),x("button",{onClick:e[26]||(e[26]=u=>s.showNoteModal=!1),class:"btn btn-secondary"},"取消")])])])):xe("",!0),s.showClearDataModal?(le(),he("div",yS,[x("div",bS,[x("div",ES,[e[68]||(e[68]=x("h3",null,"清除数据",-1)),x("button",{onClick:e[27]||(e[27]=u=>s.showClearDataModal=!1),class:"close-btn"},"×")]),e[69]||(e[69]=x("div",{class:"clear-data-content"},[x("p",{class:"warning-text"},"⚠️ 警告：此操作将清除当前用户的所有做题记录、照片和笔记，且无法恢复！"),x("p",null,"确定要清除当前用户的所有数据吗？")],-1)),x("div",vS,[x("button",{onClick:e[28]||(e[28]=(...u)=>i.clearAllData&&i.clearAllData(...u)),class:"btn btn-danger"},"确定清除"),x("button",{onClick:e[29]||(e[29]=u=>s.showClearDataModal=!1),class:"btn btn-secondary"},"取消")])])])):xe("",!0),s.showUserModal?(le(),he("div",wS,[x("div",TS,[x("div",IS,[e[70]||(e[70]=x("h3",null,"用户管理",-1)),x("button",{onClick:e[30]||(e[30]=u=>s.showUserModal=!1),class:"close-btn"},"×")]),x("div",AS,[x("div",CS,[Ct(x("input",{"onUpdate:modelValue":e[31]||(e[31]=u=>s.newUserName=u),placeholder:"输入用户名",class:"user-input"},null,512),[[In,s.newUserName]]),x("button",{onClick:e[32]||(e[32]=(...u)=>i.createUser&&i.createUser(...u)),class:"btn"},"添加用户")]),x("div",xS,[(le(!0),he(Et,null,ui(i.users,(u,c)=>(le(),he("div",{key:c,class:"user-item"},[x("div",kS,[x("span",SS,Te(u.name),1),c===i.currentUserId?(le(),he("span",DS,"当前用户")):xe("",!0)]),x("div",RS,[x("button",{onClick:l=>i.editUser(c),class:"btn btn-sm"},"编辑",8,PS),x("button",{onClick:l=>i.deleteUser(c),class:"btn btn-sm btn-danger",disabled:c===i.currentUserId||Object.keys(i.users).length<=1},"删除",8,FS)])]))),128))])])])])):xe("",!0),s.showEditUserModal?(le(),he("div",NS,[x("div",OS,[x("div",VS,[e[71]||(e[71]=x("h3",null,"编辑用户",-1)),x("button",{onClick:e[33]||(e[33]=u=>s.showEditUserModal=!1),class:"close-btn"},"×")]),x("div",MS,[Ct(x("input",{"onUpdate:modelValue":e[34]||(e[34]=u=>s.editingUserName=u),placeholder:"输入用户名",class:"user-input"},null,512),[[In,s.editingUserName]])]),x("div",LS,[x("button",{onClick:e[35]||(e[35]=(...u)=>i.saveEditUser&&i.saveEditUser(...u)),class:"btn"},"保存"),x("button",{onClick:e[36]||(e[36]=u=>s.showEditUserModal=!1),class:"btn btn-secondary"},"取消")])])])):xe("",!0),s.showAuthModal?(le(),he("div",US,[x("div",BS,[x("div",qS,[e[72]||(e[72]=x("h3",null,"登录",-1)),x("button",{onClick:e[37]||(e[37]=u=>s.showAuthModal=!1),class:"close-btn"},"×")]),x("div",jS,[s.authError?(le(),he("div",zS,Te(s.authError),1)):xe("",!0),x("div",HS,[e[73]||(e[73]=x("label",null,"邮箱",-1)),Ct(x("input",{type:"email","onUpdate:modelValue":e[38]||(e[38]=u=>s.authForm.email=u),required:"",class:"auth-input"},null,512),[[In,s.authForm.email]])]),x("div",$S,[e[74]||(e[74]=x("label",null,"密码",-1)),Ct(x("input",{type:"password","onUpdate:modelValue":e[39]||(e[39]=u=>s.authForm.password=u),required:"",class:"auth-input"},null,512),[[In,s.authForm.password]])]),x("button",{onClick:e[40]||(e[40]=(...u)=>i.handleLogin&&i.handleLogin(...u)),class:"btn",disabled:s.authLoading},Te(s.authLoading?"登录中...":"登录"),9,WS),x("div",KS,[e[75]||(e[75]=gc(" 还没有账户？ ",-1)),x("button",{onClick:e[41]||(e[41]=u=>{s.showAuthModal=!1,s.showRegisterModal=!0}),class:"link-btn"}," 注册 ")])])])])):xe("",!0),s.showRegisterModal?(le(),he("div",GS,[x("div",QS,[x("div",JS,[e[76]||(e[76]=x("h3",null,"注册",-1)),x("button",{onClick:e[42]||(e[42]=u=>s.showRegisterModal=!1),class:"close-btn"},"×")]),x("div",YS,[s.authError?(le(),he("div",XS,Te(s.authError),1)):xe("",!0),x("div",ZS,[e[77]||(e[77]=x("label",null,"用户名",-1)),Ct(x("input",{type:"text","onUpdate:modelValue":e[43]||(e[43]=u=>s.authForm.username=u),required:"",class:"auth-input"},null,512),[[In,s.authForm.username]])]),x("div",eD,[e[78]||(e[78]=x("label",null,"邮箱",-1)),Ct(x("input",{type:"email","onUpdate:modelValue":e[44]||(e[44]=u=>s.authForm.email=u),required:"",class:"auth-input"},null,512),[[In,s.authForm.email]])]),x("div",tD,[e[79]||(e[79]=x("label",null,"密码",-1)),Ct(x("input",{type:"password","onUpdate:modelValue":e[45]||(e[45]=u=>s.authForm.password=u),required:"",class:"auth-input"},null,512),[[In,s.authForm.password]])]),x("button",{onClick:e[46]||(e[46]=(...u)=>i.handleRegister&&i.handleRegister(...u)),class:"btn",disabled:s.authLoading},Te(s.authLoading?"注册中...":"注册"),9,nD),x("div",rD,[e[80]||(e[80]=gc(" 已有账户？ ",-1)),x("button",{onClick:e[47]||(e[47]=u=>{s.showRegisterModal=!1,s.showAuthModal=!0}),class:"link-btn"}," 登录 ")])])])])):xe("",!0)])}const iD=$x(Kx,[["render",sD],["__scopeId","data-v-eb5f9d61"]]);nb(iD).mount("#app");
