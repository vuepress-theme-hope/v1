(window.webpackJsonp=window.webpackJsonp||[]).push([[1],{288:function(e,t,s){"use strict";const o=e=>"function"==typeof e.value||(console.warn("[Vue-click-outside:] provided expression",e.expression,"is not a function."),!1),n=e=>void 0!==e.componentInstance&&e.componentInstance.$isServer;t.a={bind:(e,t,s)=>{if(!o(t))return;const c=t=>{if(!s.context)return;const o=t.path||(t.composedPath?t.composedPath():[]);o&&o.length>0&&o.unshift(t.target),e.contains(t.target)||((e,t)=>{if(!e||!t)return!1;for(let s=0,o=t.length;s<o;s++)try{if(e.contains(t[s]))return!0;if(t[s].contains(e))return!1}catch(e){return!1}return!1})(s.context.popupItem,o)||e.$vueClickOutside&&e.$vueClickOutside.callback(t)};e.$vueClickOutside={handler:c,callback:t.value};const a="ontouchstart"in document.documentElement?"touchstart":"click";n(s)||document.addEventListener(a,c)},update:(e,t)=>{o(t)&&e.$vueClickOutside&&(e.$vueClickOutside.callback=t.value)},unbind:(e,t,s)=>{const o="ontouchstart"in document.documentElement?"touchstart":"click";!n(s)&&e.$vueClickOutside&&document.removeEventListener(o,e.$vueClickOutside.handler),delete e.$vueClickOutside}}},289:function(e,t,s){},291:function(e,t,s){},292:function(e,t,s){},293:function(e,t,s){},320:function(e,t,s){"use strict";var o=s(0),n=s(288),c=s(1),a=Object(c.a)({},(function(){var e=this.$createElement,t=this._self._c||e;return t("svg",{staticClass:"icon auto-icon",attrs:{viewBox:"0 0 1024 1024",xmlns:"http://www.w3.org/2000/svg"}},[t("path",{attrs:{d:"M460.864 539.072H564.8L510.592 376l-49.728 163.072zM872 362.368V149.504H659.648L510.528 0l-149.12 149.504H149.12v212.928L0 511.872l149.12 149.504v212.928h212.352l149.12 149.504 149.12-149.504h212.352V661.376l149.12-149.504L872 362.368zM614.464 693.12l-31.616-90.624H438.272l-31.616 90.624h-85.888l144.576-407.68h90.368l144.576 407.68h-85.824zm0 0",fill:"currentColor"}})])}),[],!1,null,null,null).exports,i=Object(c.a)({},(function(){var e=this.$createElement,t=this._self._c||e;return t("svg",{staticClass:"icon dark-icon",attrs:{viewBox:"0 0 1024 1024",xmlns:"http://www.w3.org/2000/svg"}},[t("path",{attrs:{d:"M935.539 630.402c-11.43-11.432-28.674-14.739-43.531-8.354-46.734 20.103-96.363 30.297-147.508 30.297-99.59 0-193.221-38.784-263.64-109.203-108.637-108.637-139.61-270.022-78.908-411.148a39.497 39.497 0 0 0-51.886-51.887c-52.637 22.64-100.017 54.81-140.826 95.616-85.346 85.346-132.346 198.821-132.346 319.52 0 120.7 47.001 234.172 132.347 319.519S408.063 947.11 528.76 947.11c120.7 0 234.172-47.003 319.52-132.351 40.809-40.81 72.978-88.19 95.616-140.826a39.497 39.497 0 0 0-8.356-43.532z",fill:"currentColor"}})])}),[],!1,null,null,null).exports,l=Object(c.a)({},(function(){var e=this.$createElement,t=this._self._c||e;return t("svg",{staticClass:"icon light-icon",attrs:{viewBox:"0 0 1024 1024",xmlns:"http://www.w3.org/2000/svg"}},[t("path",{attrs:{d:"M512 256a42.667 42.667 0 0 0 42.667-42.667V128a42.667 42.667 0 0 0-85.334 0v85.333A42.667 42.667 0 0 0 512 256zm384 213.333h-85.333a42.667 42.667 0 0 0 0 85.334H896a42.667 42.667 0 0 0 0-85.334zM256 512a42.667 42.667 0 0 0-42.667-42.667H128a42.667 42.667 0 0 0 0 85.334h85.333A42.667 42.667 0 0 0 256 512zm9.387-298.667a42.667 42.667 0 0 0-59.307 62.72l61.44 59.307a42.667 42.667 0 0 0 31.147 11.947 42.667 42.667 0 0 0 30.72-13.227 42.667 42.667 0 0 0 0-60.16zm459.946 133.974a42.667 42.667 0 0 0 29.44-11.947l61.44-59.307a42.667 42.667 0 0 0-57.6-62.72l-61.44 60.587a42.667 42.667 0 0 0 0 60.16 42.667 42.667 0 0 0 28.16 13.227zM512 768a42.667 42.667 0 0 0-42.667 42.667V896a42.667 42.667 0 0 0 85.334 0v-85.333A42.667 42.667 0 0 0 512 768zm244.48-79.36a42.667 42.667 0 0 0-59.307 61.44l61.44 60.587a42.667 42.667 0 0 0 29.44 11.946 42.667 42.667 0 0 0 30.72-12.8 42.667 42.667 0 0 0 0-60.586zm-488.96 0-61.44 59.307a42.667 42.667 0 0 0 0 60.586 42.667 42.667 0 0 0 30.72 12.8 42.667 42.667 0 0 0 28.587-10.666l61.44-59.307a42.667 42.667 0 0 0-59.307-61.44zM512 341.333A170.667 170.667 0 1 0 682.667 512 170.667 170.667 0 0 0 512 341.333z",fill:"currentColor"}})])}),[],!1,null,null,null).exports;const r=(e,t,s)=>{const o=[];e.remove(...s),e.forEach(e=>{o.push(e)}),e.value="",e.add(...t,...o)};var d=o.a.extend({name:"DarkmodeSwitch",components:{AutoIcon:a,DarkIcon:i,LightIcon:l},data:()=>({darkmode:"auto"}),computed:{darkmodeConfig(){return this.$themeConfig.darkmode||"auto-switch"}},mounted(){this.darkmode=localStorage.getItem("darkmode")||"auto","auto-switch"===this.darkmodeConfig?"auto"===this.darkmode?this.setDarkmode("auto"):this.setDarkmode(this.darkmode):"auto"===this.darkmodeConfig?this.setDarkmode("auto"):"switch"===this.darkmodeConfig?this.setDarkmode(this.darkmode):this.setDarkmode("off")},methods:{setDarkmode(e){if("on"===e)this.toggleDarkmode(!0);else if("off"===e)this.toggleDarkmode(!1);else{const e=window.matchMedia("(prefers-color-scheme: dark)").matches,t=window.matchMedia("(prefers-color-scheme: light)").matches;if(window.matchMedia("(prefers-color-scheme: dark)").addEventListener("change",e=>{e.matches&&this.toggleDarkmode(!0)}),window.matchMedia("(prefers-color-scheme: light)").addEventListener("change",e=>{e.matches&&this.toggleDarkmode(!1)}),e)this.toggleDarkmode(!0);else if(t)this.toggleDarkmode(!1);else{const e=(new Date).getHours();this.toggleDarkmode(e<6||e>=18)}}this.darkmode=e,localStorage.setItem("darkmode",e)},toggleDarkmode(e){const t=document.querySelector("html").classList;e?r(t,["dark"],["light"]):r(t,["light"],["dark"])}}}),u=(s(406),Object(c.a)(d,(function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"darkmode-switch"},["auto-switch"===e.darkmodeConfig?[s("div",{staticClass:"item day",class:{active:"off"===e.darkmode},on:{click:function(t){return e.setDarkmode("off")}}},[s("LightIcon")],1),e._v(" "),s("div",{staticClass:"item auto",class:{active:"auto"===e.darkmode},on:{click:function(t){return e.setDarkmode("auto")}}},[s("AutoIcon")],1),e._v(" "),s("div",{staticClass:"item night",class:{active:"on"===e.darkmode},on:{click:function(t){return e.setDarkmode("on")}}},[s("DarkIcon")],1)]:"switch"===e.darkmodeConfig?s("div",{staticClass:"switch"},[s("input",{staticClass:"switch-input",attrs:{id:"switch",type:"checkbox"},domProps:{checked:"on"!==e.darkmode},on:{click:function(t){return e.setDarkmode("on"===e.darkmode?"off":"on")}}}),e._v(" "),e._m(0)]):e._e()],2)}),[function(){var e=this.$createElement,t=this._self._c||e;return t("label",{staticClass:"label",attrs:{for:"switch"}},[t("span",{staticClass:"label-content"})])}],!1,null,null,null).exports),h=s(290),m=o.a.extend({name:"ScreenFull",props:{enable:{type:Boolean,default:!0}},data:()=>({canFullscreen:!1,isFullscreen:!1}),mounted(){this.canFullscreen=h.isEnabled&&this.enable},methods:{click(){h.isEnabled&&h.toggle().then(()=>{this.isFullscreen=h.isFullscreen})}}}),k=(s(407),Object(c.a)(m,(function(){var e=this.$createElement,t=this._self._c||e;return this.canFullscreen?t("button",{class:this.isFullscreen?"cancel-full-screen":"full-screen",attrs:{"aria-pressed":this.isFullscreen},on:{click:this.click}},[t("svg",{attrs:{viewBox:"0 0 1024 1024",xmlns:"http://www.w3.org/2000/svg"}},[this.isFullscreen?t("path",{attrs:{d:"M778.46755555 78.62044445H247.92177778c-102.51377778 0-186.02666667 83.51288889-186.02666667 186.02666666v530.432c0 102.51377778 83.51288889 186.02666667 186.02666667 186.02666667h530.432c102.51377778 0 186.70933333-83.51288889 186.02666667-186.02666667V264.64711111c0.11377778-102.62755555-83.39911111-186.02666667-185.9128889-186.02666666zM250.88 574.35022222h171.12177778c23.32444445 0 43.12177778 19.11466667 43.80444444 43.80444445v171.12177778c0 24.00711111-19.11466667 43.12177778-43.12177777 43.12177777-12.06044445 0-22.64177778-5.00622222-30.37866667-12.74311111s-12.74311111-19.11466667-12.74311111-30.37866666v-66.44622223L224.59733333 877.90933333c-16.95288889 16.95288889-44.60088889 16.95288889-61.55377778 0-16.95288889-16.95288889-16.95288889-44.60088889 0-61.55377778l154.96533334-154.96533333h-66.44622222c-24.00711111 0-43.12177778-19.11466667-43.12177778-43.12177777 0-24.12088889 18.432-43.91822222 42.43911111-43.91822223z m521.89866667-98.87288889H601.65688889c-23.32444445 0-43.12177778-19.11466667-43.80444444-43.80444444V260.55111111c0-24.00711111 19.11466667-43.12177778 43.12177777-43.12177778 12.06044445 0 22.64177778 5.00622222 30.37866667 12.74311112s12.74311111 19.11466667 12.74311111 30.37866666v66.44622222l154.96533333-154.96533333c16.95288889-16.95288889 44.60088889-16.95288889 61.55377778 0 16.95288889 16.95288889 16.95288889 44.60088889 0 61.55377778L705.536 388.55111111h66.44622222c24.00711111 0 43.12177778 19.11466667 43.12177778 43.12177778 0.11377778 24.00711111-18.31822222 43.80444445-42.32533333 43.80444444z"}}):t("path",{attrs:{d:"M762.77333333 90.24H265.49333333c-96.10666667 0-174.4 78.29333333-174.4 174.4v497.28c0 96.10666667 78.29333333 174.4 174.4 174.4h497.28c96.10666667 0 175.04-78.29333333 174.4-174.4V264.64c0-96.21333333-78.18666667-174.4-174.4-174.4z m-387.2 761.17333333H215.04c-21.86666667 0-40.42666667-17.92-41.06666667-41.06666666V649.92c0-22.50666667 17.92-40.42666667 40.42666667-40.42666667 11.30666667 0 21.22666667 4.69333333 28.48 11.94666667 7.25333333 7.25333333 11.94666667 17.92 11.94666667 28.48v62.29333333l145.28-145.28c15.89333333-15.89333333 41.81333333-15.89333333 57.70666666 0 15.89333333 15.89333333 15.89333333 41.81333333 0 57.70666667L312.53333333 769.92h62.29333334c22.50666667 0 40.42666667 17.92 40.42666666 40.42666667s-17.17333333 41.06666667-39.68 41.06666666z m274.66666667-685.65333333H810.66666667c21.86666667 0 40.42666667 17.92 41.06666666 41.06666667v160.42666666c0 22.50666667-17.92 40.42666667-40.42666666 40.42666667-11.30666667 0-21.22666667-4.69333333-28.48-11.94666667-7.25333333-7.25333333-11.94666667-17.92-11.94666667-28.48V305.06666667L625.6 450.34666667c-15.89333333 15.89333333-41.81333333 15.89333333-57.70666667 0-15.89333333-15.89333333-15.89333333-41.81333333 0-57.70666667l145.28-145.28h-62.29333333c-22.50666667 0-40.42666667-17.92-40.42666667-40.42666667s17.17333333-41.17333333 39.78666667-41.17333333z"}})])]):this._e()}),[],!1,null,null,null).exports);const f={red:"#e74c3c",blue:"#3498db",green:"#3eaf7c",orange:"#f39c12",purple:"#8e44ad"};var v=o.a.extend({name:"ThemeOptions",components:{DarkmodeSwitch:u,ScreenFull:k},data:()=>({themeColor:{},isDarkmode:!1}),computed:{locale(){return this.$themeLocaleConfig.outlookLocales},themeColorEnabled(){return!1!==this.$themeConfig.themeColor},switchEnabled(){return"disable"!==this.$themeConfig.darkmode&&"auto"!==this.$themeConfig.darkmode}},mounted(){const e=localStorage.getItem("theme");this.themeColor={list:this.$themeConfig.themeColor?Object.keys(this.$themeConfig.themeColor):Object.keys(f),picker:this.$themeConfig.themeColor||f},e&&this.setTheme(e)},methods:{setTheme(e){const t=document.body.classList,s=this.themeColor.list.map(e=>"theme-"+e);if(!e)return localStorage.removeItem("theme"),void t.remove(...s);t.remove(...s.filter(t=>t!=="theme-"+e)),t.add("theme-"+e),localStorage.setItem("theme",e)}}}),g=(s(408),Object(c.a)(v,(function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"theme-options"},[e.themeColorEnabled?s("ul",{staticClass:"themecolor-select"},[s("label",{attrs:{for:"themecolor-select"},domProps:{textContent:e._s(e.locale.themeColor+":")}}),e._v(" "),s("li",[s("span",{staticClass:"default-theme",on:{click:function(t){return e.setTheme()}}})]),e._v(" "),e._l(e.themeColor.list,(function(t){return s("li",{key:t},[s("span",{style:{background:e.themeColor.picker[t]},on:{click:function(s){return e.setTheme(t)}}})])}))],2):e._e(),e._v(" "),e.switchEnabled?s("div",{staticClass:"darkmode-toggle"},[s("label",{staticClass:"desc",attrs:{for:"darkmode-toggle"},domProps:{textContent:e._s(e.locale.darkmode+":")}}),e._v(" "),s("DarkmodeSwitch"),e._v(" "),s("ScreenFull",{attrs:{enable:!1!==e.$themeConfig.fullscreen}})],1):e._e()])}),[],!1,null,null,null).exports),p=o.a.extend({name:"ThemeColor",directives:{"click-outside":n.a},components:{ThemeOptions:g},data:()=>({showMenu:!1}),methods:{clickOutside(){this.showMenu=!1}}}),C=(s(409),Object(c.a)(p,(function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("button",{directives:[{name:"click-outside",rawName:"v-click-outside",value:e.clickOutside,expression:"clickOutside"}],staticClass:"color-button",class:{select:e.showMenu},attrs:{tabindex:"-1","aria-hidden":"true"},on:{click:function(t){e.showMenu=!e.showMenu}}},[s("svg",{staticClass:"skin-icon",attrs:{viewBox:"0 0 1024 1024",xmlns:"http://www.w3.org/2000/svg"}},[s("path",{attrs:{d:"M224 800c0 9.6 3.2 44.8 6.4 54.4 6.4 48-48 76.8-48 76.8s80 41.6 147.2 0 134.4-134.4\n        38.4-195.2c-22.4-12.8-41.6-19.2-57.6-19.2C259.2 716.8 227.2 761.6 224 800zM560 675.2l-32\n        51.2c-51.2 51.2-83.2 32-83.2 32 25.6 67.2 0 112-12.8 128 25.6 6.4 51.2 9.6 80 9.6 54.4 0\n        102.4-9.6 150.4-32l0 0c3.2 0 3.2-3.2 3.2-3.2 22.4-16 12.8-35.2\n        6.4-44.8-9.6-12.8-12.8-25.6-12.8-41.6 0-54.4 60.8-99.2 137.6-99.2 6.4 0 12.8 0 22.4\n        0 12.8 0 38.4 9.6 48-25.6 0-3.2 0-3.2 3.2-6.4 0-3.2 3.2-6.4 3.2-6.4 6.4-16 6.4-16 6.4-19.2\n        9.6-35.2 16-73.6 16-115.2 0-105.6-41.6-198.4-108.8-268.8C704 396.8 560 675.2 560 675.2zM224\n        419.2c0-28.8 22.4-51.2 51.2-51.2 28.8 0 51.2 22.4 51.2 51.2 0 28.8-22.4 51.2-51.2 51.2C246.4\n        470.4 224 448 224 419.2zM320 284.8c0-22.4 19.2-41.6 41.6-41.6 22.4 0 41.6 19.2 41.6 41.6 0\n        22.4-19.2 41.6-41.6 41.6C339.2 326.4 320 307.2 320 284.8zM457.6 208c0-12.8 12.8-25.6 25.6-25.6\n        12.8 0 25.6 12.8 25.6 25.6 0 12.8-12.8 25.6-25.6 25.6C470.4 233.6 457.6 220.8 457.6 208zM128\n        505.6C128 592 153.6 672 201.6 736c28.8-60.8 112-60.8 124.8-60.8-16-51.2 16-99.2\n        16-99.2l316.8-422.4c-48-19.2-99.2-32-150.4-32C297.6 118.4 128 291.2 128 505.6zM764.8\n        86.4c-22.4 19.2-390.4 518.4-390.4 518.4-22.4 28.8-12.8 76.8 22.4 99.2l9.6 6.4c35.2 22.4\n        80 12.8 99.2-25.6 0 0 6.4-12.8 9.6-19.2 54.4-105.6 275.2-524.8 288-553.6\n        6.4-19.2-3.2-32-19.2-32C777.6 76.8 771.2 80 764.8 86.4z"}})]),e._v(" "),s("transition",{attrs:{mode:"out-in",name:"menu-transition"}},[s("div",{directives:[{name:"show",rawName:"v-show",value:e.showMenu,expression:"showMenu"}],staticClass:"color-picker-menu"},[s("ThemeOptions")],1)])],1)}),[],!1,null,null,null));t.a=C.exports},406:function(e,t,s){"use strict";s(289)},407:function(e,t,s){"use strict";s(291)},408:function(e,t,s){"use strict";s(292)},409:function(e,t,s){"use strict";s(293)}}]);