(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{1125:function(e,n,t){"use strict";t.r(n);var s=t(0),l=t(464),r=t(606),o=s.a.extend({name:"Slide",components:{ThemeColor:r.a},directives:{"click-outside":l.a},data:()=>({showMenu:!1}),destroyed(){document.querySelector("html").classList.remove("reveal-full-page"),document.body.classList.remove("reveal-viewport"),document.body.style.removeProperty("--slide-width"),document.body.style.removeProperty("--slide-height")},methods:{toggle(){this.showMenu=!this.showMenu},back(){window.history.go(-1),this.showMenu=!1},home(){this.$router.push("/"),this.showMenu=!1},clickOutside(){this.showMenu=!1}}}),i=(t(740),t(1)),c=Object(i.a)(o,(function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",{staticClass:"presentation"},[t("ThemeColor",{directives:[{name:"show",rawName:"v-show",value:!1,expression:"false"}]}),e._v(" "),t("Content",{key:e.$route.path,staticClass:"presentation-content"}),e._v(" "),t("div",{directives:[{name:"click-outside",rawName:"v-click-outside",value:e.clickOutside,expression:"clickOutside"}],staticClass:"menu",class:{active:e.showMenu}},[t("button",{staticClass:"menu-button",on:{click:e.toggle}},[t("span",{staticClass:"icon"})]),e._v(" "),t("button",{staticClass:"back-button",on:{click:e.back}},[t("svg",{attrs:{viewBox:"0 0 1024 1024",xmlns:"http://www.w3.org/2000/svg"}},[t("path",{attrs:{d:"M1014.749 449.156v125.688H260.626l345.64 345.64-89.239 89.237L19.307 512l497.72-497.721 89.238 89.238-345.64 345.64h754.124z"}})])]),e._v(" "),t("button",{staticClass:"home-button",on:{click:e.home}},[t("svg",{attrs:{viewBox:"0 0 1024 1024",xmlns:"http://www.w3.org/2000/svg"}},[t("path",{attrs:{d:"M780.106 420.978L506.994 147.866 233.882 420.978h.045v455.11H780.06v-455.11h.046zm90.977 90.976V876.09a91.022 91.022 0 01-91.023 91.022H233.927a91.022 91.022 0 01-91.022-91.022V511.954l-67.22 67.175-64.307-64.307 431.309-431.31c35.498-35.498 93.115-35.498 128.614 0l431.309 431.31-64.307 64.307L871.083 512z"}})])])])],1)}),[],!1,null,null,null);n.default=c.exports},466:function(e,n,t){
/*!
* screenfull
* v5.2.0 - 2021-11-03
* (c) Sindre Sorhus; MIT License
*/
!function(){"use strict";var n="undefined"!=typeof window&&void 0!==window.document?window.document:{},t=e.exports,s=function(){for(var e,t=[["requestFullscreen","exitFullscreen","fullscreenElement","fullscreenEnabled","fullscreenchange","fullscreenerror"],["webkitRequestFullscreen","webkitExitFullscreen","webkitFullscreenElement","webkitFullscreenEnabled","webkitfullscreenchange","webkitfullscreenerror"],["webkitRequestFullScreen","webkitCancelFullScreen","webkitCurrentFullScreenElement","webkitCancelFullScreen","webkitfullscreenchange","webkitfullscreenerror"],["mozRequestFullScreen","mozCancelFullScreen","mozFullScreenElement","mozFullScreenEnabled","mozfullscreenchange","mozfullscreenerror"],["msRequestFullscreen","msExitFullscreen","msFullscreenElement","msFullscreenEnabled","MSFullscreenChange","MSFullscreenError"]],s=0,l=t.length,r={};s<l;s++)if((e=t[s])&&e[1]in n){for(s=0;s<e.length;s++)r[t[0][s]]=e[s];return r}return!1}(),l={change:s.fullscreenchange,error:s.fullscreenerror},r={request:function(e,t){return new Promise(function(l,r){var o=function(){this.off("change",o),l()}.bind(this);this.on("change",o);var i=(e=e||n.documentElement)[s.requestFullscreen](t);i instanceof Promise&&i.then(o).catch(r)}.bind(this))},exit:function(){return new Promise(function(e,t){if(this.isFullscreen){var l=function(){this.off("change",l),e()}.bind(this);this.on("change",l);var r=n[s.exitFullscreen]();r instanceof Promise&&r.then(l).catch(t)}else e()}.bind(this))},toggle:function(e,n){return this.isFullscreen?this.exit():this.request(e,n)},onchange:function(e){this.on("change",e)},onerror:function(e){this.on("error",e)},on:function(e,t){var s=l[e];s&&n.addEventListener(s,t,!1)},off:function(e,t){var s=l[e];s&&n.removeEventListener(s,t,!1)},raw:s};s?(Object.defineProperties(r,{isFullscreen:{get:function(){return Boolean(n[s.fullscreenElement])}},element:{enumerable:!0,get:function(){return n[s.fullscreenElement]}},isEnabled:{enumerable:!0,get:function(){return Boolean(n[s.fullscreenEnabled])}}}),t?e.exports=r:window.screenfull=r):t?e.exports={isEnabled:!1}:window.screenfull={isEnabled:!1}}()},505:function(e,n,t){},740:function(e,n,t){"use strict";t(505)}}]);