if(!self.define){let e,s={};const i=(i,n)=>(i=new URL(i+".js",n).href,s[i]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=i,e.onload=s,document.head.appendChild(e)}else e=i,importScripts(i),s()})).then((()=>{let e=s[i];if(!e)throw new Error(`Module ${i} didn’t register its module`);return e})));self.define=(n,r)=>{const l=e||("document"in self?document.currentScript.src:"")||location.href;if(s[l])return;let c={};const o=e=>i(e,l),t={module:{uri:l},exports:c,require:o};s[l]=Promise.all(n.map((e=>t[e]||o(e)))).then((e=>(r(...e),c)))}}define(["./workbox-7369c0e1"],(function(e){"use strict";self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"assets/delete-bf6c5db5.js",revision:null},{url:"assets/FavoriteScreen-7a8e52ad.js",revision:null},{url:"assets/HomeScreen-d2a13765.js",revision:null},{url:"assets/index-c5b94ba3.css",revision:null},{url:"assets/index-defdec06.js",revision:null},{url:"assets/Library-3fb43614.js",revision:null},{url:"assets/MapScreen-dd28919f.js",revision:null},{url:"assets/MyPageScreen-9d6e13f0.js",revision:null},{url:"index.html",revision:"8ec42550df1631c79af9754781cfca98"},{url:"registerSW.js",revision:"5ff7ff53dfc0ffd4ccdb68d8ad3885a1"},{url:"icon.png",revision:"e8c4c34cd888fc8246450687bb0478a0"},{url:"icon192.png",revision:"3708eb7c55c820b04df327bbda472845"},{url:"icon512.png",revision:"f7b0b8d6120806c39d3f225f64710018"},{url:"manifest.webmanifest",revision:"33122477449a32ce18edea1cee6cf3a7"}],{}),e.cleanupOutdatedCaches(),e.registerRoute(new e.NavigationRoute(e.createHandlerBoundToURL("index.html")))}));