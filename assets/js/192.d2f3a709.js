(window.webpackJsonp=window.webpackJsonp||[]).push([[192],{1130:function(t,e,s){"use strict";s.r(e);var o=s(0);const i={"/":{title:"V2 is ready",text:'We welcome you to switch to "Next" tag using the V2 version of the theme based on VuePress2. <br>The V2 version has been completely refactored, with richer functions and better outlook. The theme is based on Vue3, built with Vite by default, and the performance and startup speed have been greatly improved!"',button:"V2 Docs"},"/zh/":{title:"V2 版本已就绪",text:"欢迎你切换到 Next 频道以使用基于 VuePress2 的 V2 版本主题。<br>V2 版本进行了全新的重构，功能更加丰富样式更加美观。主题基于 Vue3, 默认使用 Vite 构建，性能和启动速度都有极大提升!",button:"V2 文档"}};var n=o.a.extend({name:"V2Notice",data:()=>({visible:!1}),mounted(){const t=sessionStorage.getItem("v2-notice");this.visible="true"!==t},computed:{locale(){return i[this.$localePath]}},methods:{close(){this.visible=!1,sessionStorage.setItem("v2-notice","true")},v2docs(){window.open("https://vuepress-theme-hope.github.io/v2"+this.$localePath),this.close()}}}),a=(s(800),s(1)),c=Object(a.a)(n,(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("transition",{attrs:{name:"fade"}},[t.visible?s("div",{staticClass:"v2-notice-wrapper"},[s("div",{staticClass:"title"},[s("span",[t._v("📢 "+t._s(t.locale.title))]),t._v(" "),s("svg",{staticClass:"icon-close",attrs:{viewBox:"0 0 1024 1024",xmlns:"http://www.w3.org/2000/svg"},on:{click:t.close}},[s("path",{attrs:{d:"M512 34.133a486.4 486.4 0 1 0 486.4 486.4A486.4 486.4 0 0 0 512 34.133zM721.485 666.94l-55.603 55.466-151.518-151.125-151.518 151.117-55.603-55.467L458.76 515.823 307.243 364.715l55.603-55.467 151.518 151.125 151.518-151.116 55.603 55.466-151.518 151.1zm0 0",fill:"currentColor"}})])]),t._v(" "),s("p",{staticClass:"content",domProps:{innerHTML:t._s(t.locale.text)}}),t._v(" "),s("hr"),t._v(" "),s("div",{staticClass:"footer"},[s("button",{staticClass:"action",domProps:{innerHTML:t._s(t.locale.button)},on:{click:t.v2docs}})])]):t._e()])}),[],!1,null,"71422fcc",null);e.default=c.exports},518:function(t,e,s){},800:function(t,e,s){"use strict";s(518)}}]);