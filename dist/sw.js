if(!self.define){let e,s={};const i=(i,n)=>(i=new URL(i+".js",n).href,s[i]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=i,e.onload=s,document.head.appendChild(e)}else e=i,importScripts(i),s()})).then((()=>{let e=s[i];if(!e)throw new Error(`Module ${i} didn’t register its module`);return e})));self.define=(n,r)=>{const l=e||("document"in self?document.currentScript.src:"")||location.href;if(s[l])return;let t={};const o=e=>i(e,l),u={module:{uri:l},exports:t,require:o};s[l]=Promise.all(n.map((e=>u[e]||o(e)))).then((e=>(r(...e),t)))}}define(["./workbox-7369c0e1"],(function(e){"use strict";self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"assets/delete-bf6c5db5.js",revision:null},{url:"assets/FavoriteScreen-10ae75c2.js",revision:null},{url:"assets/HomeScreen-ae4a7b65.js",revision:null},{url:"assets/index-176eecf3.js",revision:null},{url:"assets/index-c5b94ba3.css",revision:null},{url:"assets/Library-3fb43614.js",revision:null},{url:"assets/MapScreen-b7220e17.js",revision:null},{url:"assets/MyPageScreen-31819dfe.js",revision:null},{url:"index.html",revision:"17370befde941b9f47e537666d806f28"},{url:"registerSW.js",revision:"5ff7ff53dfc0ffd4ccdb68d8ad3885a1"},{url:"icon.png",revision:"e8c4c34cd888fc8246450687bb0478a0"},{url:"manifest.webmanifest",revision:"51f00036f0f53904bb51abaaf876e897"}],{}),e.cleanupOutdatedCaches(),e.registerRoute(new e.NavigationRoute(e.createHandlerBoundToURL("index.html")))}));