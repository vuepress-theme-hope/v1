if(!self.define){let s,e={};const a=(a,i)=>(a=new URL(a+".js",i).href,e[a]||new Promise((e=>{if("document"in self){const s=document.createElement("script");s.src=a,s.onload=e,document.head.appendChild(s)}else s=a,importScripts(a),e()})).then((()=>{let s=e[a];if(!s)throw new Error(`Module ${a} didn’t register its module`);return s})));self.define=(i,c)=>{const d=s||("document"in self?document.currentScript.src:"")||location.href;if(e[d])return;let o={};const r=s=>a(s,d),f={module:{uri:d},exports:o,require:r};e[d]=Promise.all(i.map((s=>f[s]||r(s)))).then((s=>(c(...s),o)))}}define(["./workbox-817a1d60"],(function(s){"use strict";s.setCacheNameDetails({prefix:"Share Plugin"}),self.addEventListener("message",(s=>{s.data&&"SKIP_WAITING"===s.data.type&&self.skipWaiting()})),s.clientsClaim(),s.precacheAndRoute([{url:"assets/css/0.styles.e5421c97.css",revision:"40eb576a16fbfd51330254628d3b6a35"},{url:"assets/img/danger-dark.86c63c40.svg",revision:"86c63c4006d5cd5f860cdef57310696a"},{url:"assets/img/danger.1c7d8a0f.svg",revision:"1c7d8a0f45b8bee5d5b92334a16e2711"},{url:"assets/img/default-skin.b257fa9c.svg",revision:"b257fa9c5ac8c515ac4d77a667ce2943"},{url:"assets/img/info-dark.a1decb69.svg",revision:"a1decb69db82fb8eebb48704dd74e649"},{url:"assets/img/info.6f2cfedb.svg",revision:"6f2cfedb8e6d19d1b24eb73943f7ff4e"},{url:"assets/img/note-dark.8668720f.svg",revision:"8668720f2e50ebd01173f11a89d9da6e"},{url:"assets/img/note.32319b2e.svg",revision:"32319b2e9c86860d8a4f1c8f660096cb"},{url:"assets/img/search.83621669.svg",revision:"83621669651b9a3d4bf64d1a670ad856"},{url:"assets/img/tip-dark.0d0028db.svg",revision:"0d0028db13caec45ac1527d8b673fae0"},{url:"assets/img/tip.a9004be5.svg",revision:"a9004be5a8a5a83cc9c77bba88c816ff"},{url:"assets/img/warning-dark.b995cb45.svg",revision:"b995cb45fa552ac10ad35fa7716af15b"},{url:"assets/img/warning.57a43d6d.svg",revision:"57a43d6dcdee07d8db78a5dd3d6137ba"},{url:"assets/js/17.ac62d48a.js",revision:"ad43e72081c09373a09a946245e0ff3a"},{url:"assets/js/18.85bb017f.js",revision:"5e5fe7bfd339b61f964c268c67f79bdd"},{url:"assets/js/19.dddb20bb.js",revision:"c94eeb07d1c5e54fc188f444ab7a03af"},{url:"assets/js/app.055379d1.js",revision:"287407570c6ec86d579fe23ce4771413"},{url:"assets/js/layout-Blog.24c465c7.js",revision:"921d057bffc36642f2211d52e3c1c204"},{url:"assets/js/layout-Blog~layout-Layout~layout-NotFound.50fdac05.js",revision:"9260d3cabef9b7d1793bcf6ca0931463"},{url:"assets/js/layout-Blog~layout-Layout~layout-NotFound~layout-Slide.95493256.js",revision:"ef7e546f405aeb778258d0e1b75685e1"},{url:"assets/js/layout-Layout.3ca77062.js",revision:"47e624148477760e2d7a9d5e0cb79aed"},{url:"assets/js/layout-NotFound.c00b6f4a.js",revision:"9972c374f56c3c7b0474e5052427c648"},{url:"assets/js/layout-Slide.c5b2c92d.js",revision:"0a4d130017242ca6c2a331f529570a53"},{url:"assets/js/page-Guide.70551fa4.js",revision:"e601a248485eb37735da7491aa950000"},{url:"assets/js/page-Home.785fde3a.js",revision:"793a121f63c04dbd5fb04ed7da33f875"},{url:"assets/js/page-Options.16d86c6a.js",revision:"25941dd0941a30e625a419c91e52dca4"},{url:"assets/js/page-主页.dad7da0b.js",revision:"b2f54c35889ab1c137975ad9adeea1e6"},{url:"assets/js/page-指南.a27012a0.js",revision:"545941ff6b4e1d4a77042c509b1b5f8a"},{url:"assets/js/page-插件选项.90df5c0b.js",revision:"e124fb6eb49f520a3ba32a5b8cf34517"},{url:"assets/js/vendors~layout-Blog~layout-Layout~layout-NotFound.2621edd7.js",revision:"69534349033f010c762b765ce3e6b146"},{url:"assets/js/vendors~photo-swipe.740f84f3.js",revision:"b60f811156cc2cfc760ca0cb3bf9ffe9"},{url:"assets/js/vendors~waline.f47e641d.js",revision:"2a9465c4b67173d37009232aeec195bd"},{url:"logo.svg",revision:"d0483448ea67f73718482e0f4163caff"},{url:"index.html",revision:"5bf9e38724a706346ba046780ac1f1d5"},{url:"404.html",revision:"3084c8ea7019c8b29260f1946fd60fd0"},{url:"assets/icon/apple-icon-152.png",revision:"8b700cd6ab3f7ff38a82ee491bf3c994"},{url:"assets/icon/chrome-192.png",revision:"6d4cd350c650faaed8da00eb05a2a966"},{url:"assets/icon/chrome-512.png",revision:"b08fe93ce982da9d3b0c7e74e0c4e359"},{url:"assets/icon/chrome-mask-192.png",revision:"a05b03eeb7b69dc96355f36f0766b310"},{url:"assets/icon/chrome-mask-512.png",revision:"3c4d57a60277792c6c005494657e1dce"},{url:"assets/icon/config-maskable.png",revision:"175b2683ceab0c9df7fba92edbb8f175"},{url:"assets/icon/config-monochrome.png",revision:"b5167d8ef45438c0e9e39ff89230435c"},{url:"assets/icon/guide-maskable.png",revision:"99cc77cf2bc792acd6b847b5e3e151e9"},{url:"assets/icon/guide-monochrome.png",revision:"699fa9b069f7f09ce3d52be1290ede20"},{url:"assets/icon/ms-icon-144.png",revision:"2fe199405e0366e50ac0442cc4f33a34"}],{}),s.cleanupOutdatedCaches()}));
//# sourceMappingURL=service-worker.js.map
