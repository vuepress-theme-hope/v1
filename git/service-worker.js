if(!self.define){let s,e={};const a=(a,c)=>(a=new URL(a+".js",c).href,e[a]||new Promise((e=>{if("document"in self){const s=document.createElement("script");s.src=a,s.onload=e,document.head.appendChild(s)}else s=a,importScripts(a),e()})).then((()=>{let s=e[a];if(!s)throw new Error(`Module ${a} didn’t register its module`);return s})));self.define=(c,i)=>{const d=s||("document"in self?document.currentScript.src:"")||location.href;if(e[d])return;let o={};const r=s=>a(s,d),b={module:{uri:d},exports:o,require:r};e[d]=Promise.all(c.map((s=>b[s]||r(s)))).then((s=>(i(...s),o)))}}define(["./workbox-34e8bd20"],(function(s){"use strict";s.setCacheNameDetails({prefix:"Git-based info plugin"}),self.addEventListener("message",(s=>{s.data&&"SKIP_WAITING"===s.data.type&&self.skipWaiting()})),s.clientsClaim(),s.precacheAndRoute([{url:"assets/css/0.styles.504edc8a.css",revision:"85fe49974193c8ab7361adb67c961232"},{url:"assets/img/danger-dark.86c63c40.svg",revision:"86c63c4006d5cd5f860cdef57310696a"},{url:"assets/img/danger.1c7d8a0f.svg",revision:"1c7d8a0f45b8bee5d5b92334a16e2711"},{url:"assets/img/default-skin.b257fa9c.svg",revision:"b257fa9c5ac8c515ac4d77a667ce2943"},{url:"assets/img/info-dark.a1decb69.svg",revision:"a1decb69db82fb8eebb48704dd74e649"},{url:"assets/img/info.6f2cfedb.svg",revision:"6f2cfedb8e6d19d1b24eb73943f7ff4e"},{url:"assets/img/note-dark.8668720f.svg",revision:"8668720f2e50ebd01173f11a89d9da6e"},{url:"assets/img/note.32319b2e.svg",revision:"32319b2e9c86860d8a4f1c8f660096cb"},{url:"assets/img/search.83621669.svg",revision:"83621669651b9a3d4bf64d1a670ad856"},{url:"assets/img/tip-dark.0d0028db.svg",revision:"0d0028db13caec45ac1527d8b673fae0"},{url:"assets/img/tip.a9004be5.svg",revision:"a9004be5a8a5a83cc9c77bba88c816ff"},{url:"assets/img/warning-dark.b995cb45.svg",revision:"b995cb45fa552ac10ad35fa7716af15b"},{url:"assets/img/warning.57a43d6d.svg",revision:"57a43d6dcdee07d8db78a5dd3d6137ba"},{url:"assets/js/12.d458a24d.js",revision:"590ec0e3dc491d7164a7a5529a67fbb5"},{url:"assets/js/13.250107c8.js",revision:"919473da0ba56193386adc1e1f15b92b"},{url:"assets/js/app.828311c1.js",revision:"d406acd42bd5d39653f0711bc338142c"},{url:"assets/js/layout-Blog.0265b822.js",revision:"4227345c1543e9d7be8bb65c1c454d47"},{url:"assets/js/layout-Blog~layout-Layout~layout-NotFound.82a00a7e.js",revision:"b378c4fc0d0b6d6770929d5cdfab1131"},{url:"assets/js/layout-Blog~layout-Layout~layout-NotFound~layout-Slide.bb417beb.js",revision:"237c947b77a8767fdd12e4929235c7dc"},{url:"assets/js/layout-Layout.7344cf8f.js",revision:"efb364fc8914f9d152526ec2d3773b7a"},{url:"assets/js/layout-NotFound.9418e0b7.js",revision:"6ccbf87bb5d278dfca69b3c14800ded0"},{url:"assets/js/layout-Slide.86c9f49e.js",revision:"3a20aabc33ce54b244e46b0d02ab5b8a"},{url:"assets/js/page-Home.7d868ff3.js",revision:"93693e2be3ade298c1cc37d6704a32ab"},{url:"assets/js/page-主页.d81b62f1.js",revision:"d8f9112c463ff3be17fbc6a61f5e5df1"},{url:"assets/js/vendors~layout-Blog~layout-Layout~layout-NotFound.0ca63c86.js",revision:"4138501052785027c3160cebcad97839"},{url:"assets/js/vendors~photo-swipe.96b8f1cc.js",revision:"5173c60d71b81fbcac4e0ffd4bb35a58"},{url:"logo.svg",revision:"d0483448ea67f73718482e0f4163caff"},{url:"index.html",revision:"85850c4c4fcb5998595e0cc4695abfae"},{url:"404.html",revision:"a096aa61473617f3e90a649b884b3a93"},{url:"assets/icon/apple-icon-152.png",revision:"8b700cd6ab3f7ff38a82ee491bf3c994"},{url:"assets/icon/chrome-192.png",revision:"6d4cd350c650faaed8da00eb05a2a966"},{url:"assets/icon/chrome-512.png",revision:"b08fe93ce982da9d3b0c7e74e0c4e359"},{url:"assets/icon/chrome-mask-192.png",revision:"a05b03eeb7b69dc96355f36f0766b310"},{url:"assets/icon/chrome-mask-512.png",revision:"3c4d57a60277792c6c005494657e1dce"},{url:"assets/icon/ms-icon-144.png",revision:"2fe199405e0366e50ac0442cc4f33a34"},{url:"assets/img/hero.b62ddd9c.jpg",revision:"b62ddd9c4a72085202b5218e4c98fd68"}],{}),s.cleanupOutdatedCaches()}));
//# sourceMappingURL=service-worker.js.map
