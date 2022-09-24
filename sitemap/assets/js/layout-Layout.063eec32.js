(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{212:function(t,e,n){},213:function(t,e,n){"use strict";var a=n(0).a.extend({name:"MyTransition",props:{delay:{type:Number,default:0},duration:{type:Number,default:.25}},methods:{setStyle(t){t.style.transition=`transform ${this.duration}s ease-in-out ${this.delay}s, opacity ${this.duration}s ease-in-out ${this.delay}s`,t.style.transform="translateY(-20px)",t.style.opacity="0"},unsetStyle(t){t.style.transform="translateY(0)",t.style.opacity="1"}}}),r=(n(239),n(1)),s=Object(r.a)(a,(function(){var t=this.$createElement;return(this._self._c||t)("transition",{attrs:{name:"drop",appear:""},on:{appear:this.setStyle,"after-appear":this.unsetStyle,enter:this.setStyle,"after-enter":this.unsetStyle,"before-leave":this.setStyle}},[this._t("default")],2)}),[],!1,null,null,null);e.a=s.exports},239:function(t,e,n){"use strict";n(212)},242:function(t,e,n){"use strict";n.d(e,"a",(function(){return o}));var a=n(219),r=n(238);const s=(t,e)=>t&&"object"==typeof t.config?Object.keys(t.config).filter(t=>e.startsWith(t)).sort((t,e)=>e.length-t.length):[],o=r.a.extend({data:()=>({encryptPasswordConfig:{}}),computed:{pathEncryptMatchKeys(){return s(this.encryptOptions,this.$route.path)},isPathEncrypted(){if(0===this.pathEncryptMatchKeys.length)return!1;const{config:t}=this.encryptOptions;return this.pathEncryptMatchKeys.every(e=>{const n=t[e],r="string"==typeof n?[n]:n;return!this.encryptPasswordConfig[e]||r.every(t=>!Object(a.a)(this.encryptPasswordConfig[e],t))})}},mounted(){const t=localStorage.getItem("encryptConfig");t&&(this.encryptPasswordConfig=JSON.parse(t))},methods:{checkPathPassword(t){const{config:e}=this.$themeConfig.encrypt;for(const n of this.pathEncryptMatchKeys){const r=e[n];if(("string"==typeof r?[r]:r).filter(e=>Object(a.a)(t,e))){this.$set(this.encryptPasswordConfig,n,t),localStorage.setItem("encryptConfig",JSON.stringify(this.encryptPasswordConfig));break}}}}})},310:function(t,e,n){},311:function(t,e,n){},312:function(t,e,n){},313:function(t,e,n){},314:function(t,e,n){},315:function(t,e,n){},316:function(t,e,n){},317:function(t,e,n){},318:function(t,e,n){},319:function(t,e,n){},320:function(t,e,n){},426:function(t,e,n){"use strict";n(310)},427:function(t,e,n){"use strict";n(311)},428:function(t,e,n){"use strict";n(312)},429:function(t,e,n){"use strict";n(313)},430:function(t,e,n){"use strict";n(314)},431:function(t,e,n){"use strict";n(315)},432:function(t,e,n){"use strict";n(316)},433:function(t,e,n){"use strict";n(317)},434:function(t,e,n){"use strict";n(318)},435:function(t,e,n){"use strict";n(319)},436:function(t,e,n){"use strict";n(320)},444:function(t,e,n){"use strict";n.r(e);var a=n(0),r=n(2),s=n(240);var o=a.a.extend({name:"HomeFeatures",methods:{getIconType:(t="")=>t.match(/(?:https?:)?\/\//)?"link":t.startsWith("/")?"path":"class",navigate(t){((t,e,n)=>{if(t)if(t.startsWith("/"))n.path!==t&&e.push(t);else if(t.startsWith("http://")||t.startsWith("https://")||t.startsWith("mailto:"))window&&window.open(t);else{const a=n.path.slice(0,n.path.lastIndexOf("/"));e.push(`${a}/${encodeURI(t)}`)}})(t,this.$router,this.$route)}}}),i=(n(426),n(1)),c=Object(i.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return t.$frontmatter.features&&t.$frontmatter.features.length?n("div",{staticClass:"features"},[t._l(t.$frontmatter.features,(function(e,a){return[e.link?n("div",{key:a,staticClass:"feature link",class:"feature"+a%9,attrs:{tabindex:"0",role:"navigation"},on:{click:function(n){return t.navigate(e.link)}}},[e.icon?[e.icon.match(/(?:https?:)?\/\//)?n("img",{staticClass:"icon",attrs:{src:e.icon}}):e.icon.startsWith("/")?n("img",{staticClass:"icon",attrs:{src:t.$withBase(e.icon)}}):t._e(),t._v(" "),n("span",{class:"icon "+t.$themeConfig.iconPrefix+e.icon})]:t._e(),t._v(" "),n("h2",[t._v(t._s(e.title))]),t._v(" "),n("p",[t._v(t._s(e.details))])],2):n("div",{key:a,staticClass:"feature",class:"feature"+a%9},[n("h2",[t._v(t._s(e.title))]),t._v(" "),n("p",[t._v(t._s(e.details))])])]}))],2):t._e()}),[],!1,null,null,null).exports,l=n(204),u=n(213),h=a.a.extend({name:"HomeHero",components:{AutoLink:l.a,MyTransition:u.a},computed:{actionLinks(){const{action:t,actions:e=t}=this.$frontmatter;return Array.isArray(e)?e:[e]}}}),p=(n(427),Object(i.a)(h,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("header",{staticClass:"hero"},[n("MyTransition",[t.$frontmatter.heroImage?n("img",{key:"light",class:{light:Boolean(t.$frontmatter.darkHeroImage)},attrs:{src:t.$withBase(t.$frontmatter.heroImage),alt:t.$frontmatter.heroAlt||"HomeLogo"}}):t._e()]),t._v(" "),n("MyTransition",[t.$frontmatter.darkHeroImage?n("img",{key:"dark",staticClass:"dark",attrs:{src:t.$withBase(t.$frontmatter.darkHeroImage),alt:t.$frontmatter.heroAlt||"HomeLogo"}}):t._e()]),t._v(" "),n("div",{staticClass:"hero-info"},[n("MyTransition",{attrs:{delay:.04}},[!1!==t.$frontmatter.heroText?n("h1",{attrs:{id:"main-title"},domProps:{textContent:t._s(t.$frontmatter.heroText||t.$title||"Hello")}}):t._e()]),t._v(" "),n("MyTransition",{attrs:{delay:.08}},[n("p",{staticClass:"description",domProps:{textContent:t._s(t.$frontmatter.tagline||t.$description||"Welcome to your VuePress site")}})]),t._v(" "),n("MyTransition",{attrs:{delay:.12}},[t.$frontmatter.actions?n("p",{staticClass:"action"},t._l(t.actionLinks,(function(t){return n("AutoLink",{key:t.text,staticClass:"action-button",class:t.type||"",attrs:{config:t}})})),1):t._e()])],1)],1)}),[],!1,null,null,null).exports),d=a.a.extend({name:"Home",components:{HomeFeatures:c,HomeHero:p,MyTransition:u.a}}),f=(n(428),Object(i.a)(d,(function(){var t=this.$createElement,e=this._self._c||t;return e("main",{staticClass:"home project",attrs:{"aria-labelledby":null!==this.$frontmatter.heroText?"main-title":null}},[e("HomeHero"),this._v(" "),e("MyTransition",{attrs:{delay:.16}},[e("HomeFeatures")],1),this._v(" "),e("MyTransition",{attrs:{delay:.24}},[e("Content",{staticClass:"theme-default-content custom"})],1)],1)}),[],!1,null,null,null).exports),m=a.a.extend({name:"BreadCrumb",props:{show:{type:Boolean,default:!0},icon:{type:Boolean,default:!0},iconPrefix:{type:String,default:""}},computed:{enable(){const t=this.$page.frontmatter.breadcrumb;return(this.show&&!1!==t||!0===t)&&this.config.length>1},displayIcon(){const t=this.$page.frontmatter.breadcrumbIcon;return this.enable&&(this.icon&&!1!==t||!0===t)},config(){const t=[],{pages:e}=this.$site,n=this.getLinks(this.$route);for(let a=1;a<n.length;a++)for(let r=0;r<e.length;r++){const s=e[r];if(s.path===n[a]){t.push({title:s.title,...s.frontmatter.icon?{icon:s.frontmatter.icon}:{},url:s.path});break}}return t}},methods:{getLinks(t){const e=t.path.split("/"),n=[];let a="";return e.forEach((t,r)=>{r!==e.length-1?(a+=t+"/",n.push(a)):""!==t&&(a+=t,n.push(a))}),n}}}),g=(n(429),Object(i.a)(m,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("nav",{staticClass:"breadcrumb",class:{disable:!t.enable}},[t.enable?n("ol",{attrs:{vocab:"https://schema.org/",typeof:"BreadcrumbList"}},t._l(t.config,(function(e,a){return n("li",{key:e.url,class:{"is-active":t.config.length-1===a},attrs:{property:"itemListElement",typeof:"ListItem"}},[n("RouterLink",{attrs:{to:e.url,property:"item",typeof:"WebPage"}},[t.icon&&e.icon?n("i",{class:"iconfont "+t.iconPrefix+e.icon}):t._e(),t._v(" "),n("span",{attrs:{property:"name"}},[t._v(t._s(e.title))])]),t._v(" "),n("meta",{attrs:{property:"position",content:a+1}})],1)})),0):t._e()])}),[],!1,null,null,null).exports),v=n(27),y=Object(i.a)({},(function(){var t=this.$createElement,e=this._self._c||t;return e("svg",{staticClass:"icon author-icon",attrs:{viewBox:"0 0 1024 1024",xmlns:"http://www.w3.org/2000/svg"}},[e("path",{attrs:{d:"M649.6 633.6c86.4-48 147.2-144 147.2-249.6 0-160-128-288-288-288s-288 128-288 288c0 108.8 57.6 201.6 147.2 249.6-121.6 48-214.4 153.6-240 288-3.2 9.6 0 19.2 6.4 25.6 3.2 9.6 12.8 12.8 22.4 12.8h704c9.6 0 19.2-3.2 25.6-12.8 6.4-6.4 9.6-16 6.4-25.6-25.6-134.4-121.6-240-243.2-288z",fill:"currentColor"}})])}),[],!1,null,null,null).exports,_=a.a.extend({name:"AuthorInfo",components:{AuthorIcon:y},props:{defaultAuthor:{type:String,default:""}},computed:{author(){var t;const{author:e}=this.$frontmatter;return(null===(t=Object(v.d)(e)[0])||void 0===t?void 0:t.name)||this.defaultAuthor},hint(){return this.$themeLocaleConfig.metaLocales.author}}}),b=Object(i.a)(_,(function(){var t=this.$createElement,e=this._self._c||t;return this.author?e("span",{attrs:{"aria-label":this.hint,"data-balloon-pos":"down"}},[e("AuthorIcon"),this._v(" "),e("span",{attrs:{property:"author"},domProps:{textContent:this._s(this.author)}})],1):this._e()}),[],!1,null,null,null).exports,$=Object(i.a)({},(function(){var t=this.$createElement,e=this._self._c||t;return e("svg",{staticClass:"icon category-icon",attrs:{viewBox:"0 0 1024 1024",xmlns:"http://www.w3.org/2000/svg"}},[e("path",{attrs:{d:"M148.41 106.992h282.176c22.263 0 40.31 18.048 40.31 40.31V429.48c0 22.263-18.047 40.31-40.31 40.31H148.41c-22.263 0-40.311-18.047-40.311-40.31V147.302c0-22.263 18.048-40.31 40.311-40.31zm-.854 446.486H429.73c22.263 0 40.311 18.048 40.311 40.31v282.176c0 22.263-18.048 40.312-40.31 40.312H147.555c-22.263 0-40.311-18.049-40.311-40.312V593.79c0-22.263 18.048-40.311 40.31-40.311zm446.371-446.486h282.176c22.263 0 40.31 18.048 40.31 40.31V429.48c0 22.263-18.047 40.31-40.31 40.31H593.927c-22.263 0-40.311-18.047-40.311-40.31V147.302c0-22.263 18.048-40.31 40.31-40.31zm136.293 813.51H623.926c-40.925 0-74.22-33.388-74.22-74.425V623.992c0-41.038 33.387-74.424 74.425-74.424h222.085c41.038 0 74.424 33.226 74.424 74.067v114.233c0 10.244-8.304 18.548-18.547 18.548s-18.548-8.304-18.548-18.548V623.635c0-20.388-16.746-36.974-37.33-36.974H624.13c-20.585 0-37.331 16.747-37.331 37.33v222.086c0 20.585 16.654 37.331 37.126 37.331H730.22c10.243 0 18.547 8.304 18.547 18.547 0 10.244-8.304 18.547-18.547 18.547z",fill:"currentColor"}})])}),[],!1,null,null,null).exports,C=a.a.extend({name:"CategoryInfo",components:{CategoryIcon:$},props:{category:{type:String,default:""},categoryPath:{type:String,default:""}},computed:{name(){if(this.category)return Object(v.b)(this.category);const{category:t}=this.$frontmatter;return Array.isArray(t)?Object(v.b)(t[0]||""):t?Object(v.b)(t):""},path(){return this.categoryPath.replace(/\$category/g,decodeURI(this.name))},hint(){return this.$themeLocaleConfig.metaLocales.category}},methods:{navigate(){this.$route.path!==this.path&&this.$router.push(this.path)}}}),w=(n(430),Object(i.a)(C,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return t.name?n("span",{staticClass:"category-info",class:{enable:t.path},attrs:{role:t.path?"navigation":"","aria-label":t.hint,"data-balloon-pos":"down"},on:{click:t.navigate}},[n("CategoryIcon"),t._v(" "),n("span",{attrs:{property:"articleSection"},domProps:{textContent:t._s(t.name)}})],1):t._e()}),[],!1,null,null,null).exports),x=Object(i.a)({},(function(){var t=this.$createElement,e=this._self._c||t;return e("svg",{staticClass:"icon calendar-icon",attrs:{viewBox:"0 0 1030 1024",xmlns:"http://www.w3.org/2000/svg"}},[e("path",{attrs:{d:"M716.4 110.137c0-18.753-14.72-33.473-33.472-33.473-18.753 0-33.473 14.72-33.473 33.473v33.473h66.993v-33.473zm-334.87 0c0-18.753-14.72-33.473-33.473-33.473s-33.52 14.72-33.52 33.473v33.473h66.993v-33.473zm468.81 33.52H716.4v100.465c0 18.753-14.72 33.473-33.472 33.473a33.145 33.145 0 0 1-33.473-33.473V143.657H381.53v100.465c0 18.753-14.72 33.473-33.473 33.473a33.145 33.145 0 0 1-33.473-33.473V143.657H180.6A134.314 134.314 0 0 0 46.66 277.595v535.756A134.314 134.314 0 0 0 180.6 947.289h669.74a134.36 134.36 0 0 0 133.94-133.938V277.595a134.314 134.314 0 0 0-133.94-133.938zm33.473 267.877H147.126a33.145 33.145 0 0 1-33.473-33.473c0-18.752 14.72-33.473 33.473-33.473h736.687c18.752 0 33.472 14.72 33.472 33.473a33.145 33.145 0 0 1-33.472 33.473z",fill:"currentColor"}})])}),[],!1,null,null,null).exports,k=a.a.extend({name:"DateInfo",components:{CalendarIcon:x},computed:{time(){const{date:t,time:e=t}=this.$frontmatter;if("string"==typeof e){if(-1!==e.indexOf("T")){const[t,n]=e.split("T"),[a]=n.split(".");return`${t} ${"00:00:00"===a?"":a}`}return e}const{createTimeStamp:n}=this.$page;if(n){const t=new Date(n);return`${t.getFullYear()}-${t.getMonth()+1}-${t.getDate()}`}return""},hint(){return this.$themeLocaleConfig.metaLocales.date}}}),P=Object(i.a)(k,(function(){var t=this.$createElement,e=this._self._c||t;return this.time?e("span",{staticClass:"date-info",attrs:{"aria-label":this.hint,"data-balloon-pos":"down"}},[e("CalendarIcon"),this._v(" "),e("span",{attrs:{property:"datePublished"},domProps:{textContent:this._s(this.time)}})],1):this._e()}),[],!1,null,null,null).exports,I=Object(i.a)({},(function(){var t=this.$createElement,e=this._self._c||t;return e("svg",{staticClass:"icon eye-icon",attrs:{viewBox:"0 0 1024 1024",xmlns:"http://www.w3.org/2000/svg"}},[e("path",{attrs:{d:"M992 512.096c0-5.76-.992-10.592-1.28-11.136-.192-2.88-1.152-8.064-2.08-10.816-.256-.672-.544-1.376-.832-2.08-.48-1.568-1.024-3.104-1.6-4.32C897.664 290.112 707.104 160 512 160c-195.072 0-385.632 130.016-473.76 322.592-1.056 2.112-1.792 4.096-2.272 5.856a55.512 55.512 0 0 0-.64 1.6c-1.76 5.088-1.792 8.64-1.632 7.744-.832 3.744-1.568 11.168-1.568 11.168-.224 2.272-.224 4.032.032 6.304 0 0 .736 6.464 1.088 7.808.128 1.824.576 4.512 1.12 6.976h-.032c.448 2.08 1.12 4.096 1.984 6.08.48 1.536.992 2.976 1.472 4.032C126.432 733.856 316.992 864 512 864c195.136 0 385.696-130.048 473.216-321.696 1.376-2.496 2.24-4.832 2.848-6.912.256-.608.48-1.184.672-1.728 1.536-4.48 1.856-8.32 1.728-8.32l-.032.032c.608-3.104 1.568-7.744 1.568-13.28zM512 672c-88.224 0-160-71.776-160-160s71.776-160 160-160 160 71.776 160 160-71.776 160-160 160z",fill:"currentColor"}})])}),[],!1,null,null,null).exports,L=Object(i.a)({},(function(){var t=this.$createElement,e=this._self._c||t;return e("svg",{staticClass:"icon eye-icon",attrs:{viewBox:"0 0 1024 1024",xmlns:"http://www.w3.org/2000/svg"}},[e("path",{attrs:{d:"M726.4 201.6c-12.8-9.6-28.8-6.4-38.4 0-9.6 9.6-16 25.6-9.6 38.4 6.4 12.8 9.6 28.8 12.8 44.8C604.8 83.2 460.8 38.4 454.4 35.2c-9.6-3.2-22.4 0-28.8 6.4-9.6 6.4-12.8 19.2-9.6 28.8 12.8 86.4-25.6 188.8-115.2 310.4-6.4-25.6-16-51.2-32-80-9.6-9.6-22.4-16-35.2-12.8-16 3.2-25.6 12.8-25.6 28.8-3.2 48-25.6 92.8-51.2 140.8C134.4 499.2 112 544 102.4 592c-32 150.4 99.2 329.6 233.6 380.8 9.6 3.2 19.2 6.4 32 9.6-25.6-19.2-41.6-51.2-48-96C294.4 691.2 505.6 640 515.2 460.8c153.6 105.6 224 336 137.6 505.6 3.2 0 6.4-3.2 9.6-3.2 0 0 3.2 0 3.2-3.2 163.2-89.6 252.8-208 259.2-345.6 16-211.2-163.2-390.4-198.4-412.8z",fill:"currentColor"}})])}),[],!1,null,null,null).exports,T=a.a.extend({name:"PageViewInfo",components:{EyeIcon:I,FireIcon:L},props:{visitor:{type:Boolean,default:!1}},data:()=>({count:0}),computed:{visitorID(){const{base:t}=this.$site;return t?`${t.slice(0,t.length-1)}${this.$page.path}`:this.$page.path},hint(){return this.$themeLocaleConfig.metaLocales.views}},watch:{$route(t,e){t.path!==e.path&&setTimeout(()=>{this.getCount()},500)}},mounted(){setTimeout(()=>{this.getCount()},1500)},methods:{getCount(){const t=document.querySelector(".leancloud_visitors .leancloud-visitors-count");if(t){const e=t.textContent;e&&!isNaN(Number(e))?this.count=Number(e):setTimeout(()=>{this.getCount()},500)}}}}),O=Object(i.a)(T,(function(){var t=this.$createElement,e=this._self._c||t;return e("span",{staticClass:"pageview-info",attrs:{"aria-label":this.hint,"data-balloon-pos":"down"}},[this.count<1e3?e("EyeIcon"):e("FireIcon"),this._v(" "),e("span",{staticClass:"leancloud_visitors waline-visitor-count",attrs:{id:this.visitorID,"data-flag-title":this.$page.title}},[e("span",{staticClass:"waline-pageview-count leancloud-visitors-count",attrs:{"data-path":this.visitorID}},[this._v("...")])])],1)}),[],!1,null,null,null).exports,j=Object(i.a)({},(function(){var t=this.$createElement,e=this._self._c||t;return e("svg",{staticClass:"icon timer-icon",attrs:{viewBox:"0 0 1024 1024",xmlns:"http://www.w3.org/2000/svg"}},[e("path",{attrs:{d:"M799.387 122.15c4.402-2.978 7.38-7.897 7.38-13.463v-1.165c0-8.933-7.38-16.312-16.312-16.312H256.33c-8.933 0-16.311 7.38-16.311 16.312v1.165c0 5.825 2.977 10.874 7.637 13.592 4.143 194.44 97.22 354.963 220.201 392.763-122.204 37.542-214.893 196.511-220.2 389.397-4.661 5.049-7.638 11.651-7.638 19.03v5.825h566.49v-5.825c0-7.379-2.849-13.981-7.509-18.9-5.049-193.016-97.867-351.985-220.2-389.527 123.24-37.67 216.446-198.453 220.588-392.892zM531.16 450.445v352.632c117.674 1.553 211.787 40.778 211.787 88.676H304.097c0-48.286 95.149-87.382 213.728-88.676V450.445c-93.077-3.107-167.901-81.297-167.901-177.093 0-8.803 6.99-15.793 15.793-15.793 8.803 0 15.794 6.99 15.794 15.793 0 80.261 63.69 145.635 142.01 145.635s142.011-65.374 142.011-145.635c0-8.803 6.99-15.793 15.794-15.793s15.793 6.99 15.793 15.793c0 95.019-73.789 172.82-165.96 177.093z",fill:"currentColor"}})])}),[],!1,null,null,null).exports;const M={"/zh/":{word:"约 $word 字",less1Minute:"小于 1 分钟",time:"大约 $time 分钟"},"/":{word:"About $word words",less1Minute:"Less than 1 minute",time:"About $time min"}};var A=a.a.extend({name:"ReadingTimeInfo",components:{TimerIcon:j},computed:{readingTime(){return`PT${Math.max(Math.round(this.$page.readingTime.minutes),1)}M`},text(){const{less1Minute:t,time:e}=M[this.$localePath];return this.$page.readingTime.minutes<1?t:e.replace("$time",Math.round(this.$page.readingTime.minutes).toString())},hint(){return this.$themeLocaleConfig.metaLocales.readingTime}}}),E=Object(i.a)(A,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return t.text?n("span",{staticClass:"reading-time-info",attrs:{"aria-label":t.hint,"data-balloon-pos":"down"}},[n("TimerIcon"),t._v(" "),n("span",{domProps:{textContent:t._s(t.text)}}),t._v(" "),n("meta",{attrs:{property:"timeRequired",content:t.readingTime}})],1):t._e()}),[],!1,null,null,null).exports,S=Object(i.a)({},(function(){var t=this.$createElement,e=this._self._c||t;return e("svg",{staticClass:"icon tag-icon",attrs:{viewBox:"0 0 1024 1024",xmlns:"http://www.w3.org/2000/svg"}},[e("path",{attrs:{d:"M939.902 458.563 910.17 144.567c-1.507-16.272-14.465-29.13-30.737-30.737L565.438 84.098h-.402c-3.215 0-5.726 1.005-7.634 2.913l-470.39 470.39a10.004 10.004 0 0 0 0 14.164l365.423 365.424c1.909 1.908 4.42 2.913 7.132 2.913s5.223-1.005 7.132-2.913l470.39-470.39c2.01-2.11 3.014-5.023 2.813-8.036zm-240.067-72.121c-35.458 0-64.286-28.828-64.286-64.286s28.828-64.285 64.286-64.285 64.286 28.828 64.286 64.285-28.829 64.286-64.286 64.286z",fill:"currentColor"}})])}),[],!1,null,null,null).exports,H=a.a.extend({name:"TagInfo",components:{TagIcon:S},props:{tags:{type:Array,default:()=>[]},tagPath:{type:String,default:""}},computed:{items(){if(0!==this.tags.length)return this.tags;const{tags:t,tag:e=t}=this.$frontmatter;return"string"==typeof e?[Object(v.b)(e)]:Array.isArray(e)?e.map(t=>Object(v.b)(t)):[]},clickable(){return Boolean(this.tagPath)},hint(){return this.$themeLocaleConfig.metaLocales.tag}},methods:{navigate(t){const e=this.tagPath.replace(/\$tag/g,decodeURI(t));this.$route.path!==e&&this.$router.push(e)}}}),B=(n(431),Object(i.a)(H,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return 0!==t.items.length?n("span",{attrs:{"aria-label":t.hint,"data-balloon-pos":"down"}},[n("TagIcon"),t._v(" "),n("ul",{staticClass:"tags-wrapper"},t._l(t.items,(function(e,a){var r;return n("li",{key:e,staticClass:"tag",class:(r={clickable:t.clickable},r["tag"+a%9]=!0,r),on:{click:function(n){return t.navigate(e)}}},[n("span",{attrs:{role:t.clickable?"navigation":""},domProps:{textContent:t._s(e)}})])})),0),t._v(" "),n("meta",{attrs:{property:"keywords",content:t.items.join(",")}})],1):t._e()}),[],!1,null,null,null).exports),N=Object(i.a)({},(function(){var t=this.$createElement,e=this._self._c||t;return e("svg",{staticClass:"icon word-icon",attrs:{viewBox:"0 0 1024 1024",xmlns:"http://www.w3.org/2000/svg"}},[e("path",{attrs:{d:"M518.217 432.64V73.143A73.143 73.143 0 0 1 603.43 1.097a512 512 0 0 1 419.474 419.474 73.143 73.143 0 0 1-72.046 85.212H591.36a73.143 73.143 0 0 1-73.143-73.143z",fill:"currentColor"}}),this._v(" "),e("path",{attrs:{d:"M493.714 566.857h340.297a73.143 73.143 0 0 1 73.143 85.577A457.143 457.143 0 1 1 371.566 117.76a73.143 73.143 0 0 1 85.577 73.143v339.383a36.571 36.571 0 0 0 36.571 36.571z",fill:"currentColor"}})])}),[],!1,null,null,null).exports;const z={"/zh/":{word:"约 $word 字",less1Minute:"小于 1 分钟",time:"大约 $time 分钟"},"/":{word:"About $word words",less1Minute:"Less than 1 minute",time:"About $time min"}};var D=a.a.extend({name:"ReadTimeInfo",components:{WordIcon:N},computed:{words(){return z[this.$localePath].word.replace("$word",this.$page.readingTime.words.toString())},hint(){return this.$themeLocaleConfig.metaLocales.words}}}),V=Object(i.a)(D,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return t.words?n("span",{staticClass:"words-info",attrs:{"aria-label":t.hint,"data-balloon-pos":"down"}},[n("WordIcon"),t._v(" "),n("span",{domProps:{textContent:t._s(t.words)}}),t._v(" "),n("meta",{attrs:{property:"wordCount",content:t.$page.readingTime.words}})],1):t._e()}),[],!1,null,null,null).exports,R=a.a.extend({name:"PageInfo",components:{AuthorInfo:b,CategoryInfo:w,DateInfo:P,PageViewInfo:O,ReadingTimeInfo:E,TagInfo:B,WordInfo:V},props:{titleIcon:{type:Boolean,default:!0},titleIconPrefix:{type:String,default:""},items:{type:Array,default:()=>["Author","PageView","Date","Category","Tag","ReadingTime"]},defaultAuthor:{type:String,default:""},categoryPath:{type:String,default:""},tagPath:{type:String,default:""},visitor:{type:Boolean,default:!1}},computed:{config(){const t=this.$page.frontmatter.pageInfo;return!1!==t&&(Array.isArray(t)?t:this.items)},isOriginal(){return!0===this.$frontmatter.isOriginal},originText(){return this.$themeLocaleConfig.metaLocales.origin}}}),W=(n(432),Object(i.a)(R,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"page-title",attrs:{vocab:"https://schema.org/",typeof:"Article"}},[n("h1",[t.titleIcon&&t.$frontmatter.icon?n("i",{class:"iconfont "+(t.titleIconPrefix||"")+t.$frontmatter.icon}):t._e(),t._v(" "),n("span",{attrs:{property:"headline"}},[t._v(t._s(t.$page.title))])]),t._v(" "),t.config?n("div",{staticClass:"page-info"},[t.isOriginal?n("span",{staticClass:"origin",domProps:{textContent:t._s(t.originText)}}):t._e(),t._v(" "),t._l(t.config,(function(e){return n(e+"-info",t._b({key:t.$route.path+e,tag:"component"},"component",{defaultAuthor:t.defaultAuthor,categoryPath:t.categoryPath,tagPath:t.tagPath,visitor:t.visitor},!1))}))],2):t._e(),t._v(" "),t.$frontmatter.image?n("meta",{attrs:{property:"image",content:t.$withBase(t.$frontmatter.image)}}):t._e(),t._v(" "),n("hr")])}),[],!1,null,null,null).exports),F=n(205);const U=(t,e)=>{for(const n of t)"group"===n.type?U(n.children||[],e):e.push(n)};var J=a.a.extend({name:"PageNav",components:{AutoLink:l.a},props:{sidebarItems:{type:Array,default:()=>[]}},computed:{prevNavLink(){return this.getAutoLink("prev")},nextNavLink(){return this.getAutoLink("next")}},methods:{getAutoLink(t){const e=this.$themeConfig[t+"Links"],n=this.$frontmatter[t];if("object"==typeof n)return n;if(!1===n||!1===e&&!n)return!1;if("string"==typeof n){const t=Object(F.e)(n,this.$route.path);if(Object(v.f)(t))return{text:t,link:t};const e=Object(v.j)(t);for(const t of this.$site.pages)if(Object(v.j)(t.regularPath)===e)return{text:t.title,icon:t.frontmatter.icon||"",link:Object(F.a)(t.path)};return!1}const a=((t,e,n)=>{const a=[];U(e,a);for(let e=0;e<a.length;e++){const r=a[e];if("page"===r.type&&r.path===decodeURIComponent(t.path))return a[e+n]}return!1})(this.$page,this.sidebarItems,"prev"===t?-1:1);return!(!a||!("path"in a))&&{text:"title"in a?a.title:a.path,icon:"frontmatter"in a&&a.frontmatter.icon||"",link:a.path}}}}),K=(n(433),Object(i.a)(J,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return t.prevNavLink||t.nextNavLink?n("div",{staticClass:"page-nav"},[t.prevNavLink?n("AutoLink",{staticClass:"prev",attrs:{config:t.prevNavLink}},[n("div",{staticClass:"hint"},[n("span",{staticClass:"arrow left"}),t._v("Prev")]),t._v(" "),n("div",{staticClass:"link"},[n("FontIcon",{attrs:{icon:t.prevNavLink.icon}}),t._v(t._s(t.prevNavLink.text)+"\n    ")],1)]):t._e(),t._v(" "),t.nextNavLink?n("AutoLink",{staticClass:"next",attrs:{config:t.nextNavLink}},[n("div",{staticClass:"hint"},[t._v("Next"),n("span",{staticClass:"arrow right"})]),t._v(" "),n("div",{staticClass:"link"},[t._v("\n      "+t._s(t.nextNavLink.text)),n("FontIcon",{attrs:{icon:t.nextNavLink.icon}})],1)]):t._e()],1):t._e()}),[],!1,null,null,null).exports);const Y=t=>{const e=[];return t.forEach(t=>{var n,a;if(1!==t.level)if(2===t.level)e.push({...t});else if(3===t.level){const n=e[e.length-1];n&&(n.children=[...e[e.length-1].children||[],{...t}])}else if(4===t.level){const r=e[e.length-1];if(r){const s=null===(n=r.children)||void 0===n?void 0:n[(null===(a=r.children)||void 0===a?void 0:a.length)-1];s&&(s.children=[...e[e.length-1].children||[],{...t}])}}}),e},q=(t,{title:e,level:n,slug:r})=>t(a.a.component("RouterLink"),{props:{to:"#"+r},class:["toc-link","level"+n]},e),G=(t,{headers:e,route:n,headerDepth:a})=>e.length&&a>0?t("ul",{class:"toc-list"},e.map(e=>[t("li",{class:["toc-item",{active:Object(v.e)(n,"#"+e.slug)}]},[q(t,e)]),e.children?G(t,{headers:e.children,route:n,headerDepth:a-1}):[]])):null;var Q=a.a.extend({name:"TOC",props:{items:{type:Array,default:()=>[]},headerDepth:{type:Number,default:2}},computed:{headers(){return this.items.length?Y(this.items):Y(this.$page.headers||[])}},render(t){return t("div",{attrs:{class:"toc-place-holder"}},[t("aside",{attrs:{id:"toc"}},[t("div",{class:"toc-header"},this.$themeLocaleConfig.metaLocales.toc),t("div",{class:"toc-wrapper",ref:"toc"},[G(t,{headers:this.headers,route:this.$route,headerDepth:this.headerDepth})])])])}}),X=(n(434),Object(i.a)(Q,void 0,void 0,!1,null,null,null).exports),Z=n(241),tt=Object(i.a)({},(function(){var t=this.$createElement,e=this._self._c||t;return e("svg",{staticClass:"icon edit-icon",attrs:{viewBox:"0 0 1024 1024",xmlns:"http://www.w3.org/2000/svg"}},[e("path",{attrs:{d:"M430.818 653.65a60.46 60.46 0 0 1-50.96-93.281l71.69-114.012 7.773-10.365L816.038 80.138A60.46 60.46 0 0 1 859.225 62a60.46 60.46 0 0 1 43.186 18.138l43.186 43.186a60.46 60.46 0 0 1 0 86.373L588.879 565.55l-8.637 8.637-117.466 68.234a60.46 60.46 0 0 1-31.958 11.229z",fill:"currentColor"}}),this._v(" "),e("path",{attrs:{d:"M728.802 962H252.891A190.883 190.883 0 0 1 62.008 771.98V296.934a190.883 190.883 0 0 1 190.883-192.61h267.754a60.46 60.46 0 0 1 0 120.92H252.891a69.962 69.962 0 0 0-69.098 69.099V771.98a69.962 69.962 0 0 0 69.098 69.098h475.911A69.962 69.962 0 0 0 797.9 771.98V503.363a60.46 60.46 0 1 1 120.922 0V771.98A190.883 190.883 0 0 1 728.802 962z",fill:"currentColor"}})])}),[],!1,null,null,null).exports,et=a.a.extend({name:"PageMeta",components:{EditIcon:tt},computed:{locales(){return this.$themeLocaleConfig.metaLocales},contributors(){const t=this.$frontmatter.contributors,e=this.$themeLocaleConfig.contributors;return!1===t||!1===e&&!t?[]:this.$page.contributors||[]},contributorsText(){return this.locales.contributors},updateTime(){const t=this.$frontmatter.lastUpdated,e=this.$themeLocaleConfig.lastUpdated;return!1===t||!1===e&&!t?"":this.$page.updateTime||""},updateTimeText(){return this.locales.lastUpdated},editLink(){const t=!1!==this.$page.frontmatter.editLink&&!(!1===this.$themeConfig.editLinks&&!this.$page.frontmatter.editLink),{repo:e,docsRepo:n=e}=this.$themeConfig;return!!(t&&n&&this.$page.relativePath)&&this.createEditLink(n)},editLinkText(){return this.locales.editLink}},methods:{createEditLink(t){const{docsDir:e="",docsBranch:n="main"}=this.$themeConfig;if(/bitbucket.org/u.test(t))return`${Object(v.k)(t)}/src/${n}/${e?Object(v.k)(e)+"/":""}${this.$page.relativePath}?mode=edit&spa=0&at=${n}&fileviewer=file-view-default`;if(/gitlab.com/u.test(t))return`${Object(v.k)(t)}/-/edit/${n}/${e?Object(v.k)(e)+"/":""}${this.$page.relativePath}`;const a=F.d.test(t)?t:"https://github.com/"+t;return`${Object(v.k)(a)}/edit/${n}/${e?Object(v.k)(e)+"/":""}${this.$page.relativePath}`}}}),nt=(n(435),Object(i.a)(et,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("footer",{staticClass:"page-meta"},[t.editLink?n("div",{staticClass:"meta-item edit-link"},[n("EditIcon"),t._v(" "),n("a",{attrs:{href:t.editLink,target:"_blank",rel:"noopener noreferrer"}},[t._v(t._s(t.editLinkText))])],1):t._e(),t._v(" "),t.updateTime?n("div",{staticClass:"meta-item update-time"},[n("span",{staticClass:"label"},[t._v(t._s(t.updateTimeText)+":")]),t._v(" "),n("span",{staticClass:"info"},[t._v(t._s(t.updateTime))])]):t._e(),t._v(" "),t.contributors&&t.contributors.length?n("div",{staticClass:"meta-item contributors"},[n("span",{staticClass:"label"},[t._v(t._s(t.contributorsText)+": ")]),t._v(" "),n("span",{staticClass:"info"},[t._l(t.contributors,(function(e,a){return[n("span",{staticClass:"contributor",attrs:{title:"email: "+e.email}},[t._v("\n          "+t._s(e.name)+"\n        ")]),t._v("\n        "+t._s(a!==t.contributors.length-1?", ":"")+"\n      ")]}))],2)]):t._e()])}),[],!1,null,null,null).exports),at=n(242).a.extend({name:"Page",components:{BreadCrumb:g,MyTransition:u.a,PageInfo:W,PageMeta:nt,PageNav:K,Password:Z.a,TOC:X},props:{sidebarItems:{type:Array,default:()=>[]},headers:{type:Array,default:()=>[]}},data:()=>({password:""}),computed:{pagePassword(){const{password:t}=this.$frontmatter;return"number"==typeof t?t.toString():"string"==typeof t?t:""},pageDescrypted(){return this.password===this.pagePassword},pageInfoProps(){return{titleIcon:!0,titleIconPrefix:this.$themeConfig.iconPrefix,...this.$themeLocaleConfig.pageInfo?{items:this.$themeLocaleConfig.pageInfo}:{},categoryPath:"/category/$category/",tagPath:"/tag/$tag/",defaultAuthor:this.$themeConfig.author||""}}}}),rt=(n(436),Object(i.a)(at,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("main",{staticClass:"page"},[n("MyTransition",[n("BreadCrumb",{key:t.$route.path,attrs:{show:!1!==t.$themeConfig.breadcrumb,icon:!1!==t.$themeConfig.breadcrumbIcon,"icon-prefix":t.$themeConfig.iconPrefix}})],1),t._v(" "),t._t("top"),t._v(" "),n("MyTransition",{attrs:{delay:.04}},[n("PageInfo",t._b({key:t.$route.path},"PageInfo",t.pageInfoProps,!1))],1),t._v(" "),t.pagePassword&&!t.pageDescrypted?n("MyTransition",{attrs:{delay:.08}},[n("Password",{key:t.$route.path,attrs:{page:!0},on:{"password-verify":function(e){t.password=e}}})],1):t.isPathEncrypted?n("MyTransition",{attrs:{delay:.08}},[n("Password",{key:t.$route.path,attrs:{page:!0},on:{"password-verify":t.checkPathPassword}})],1):[n("MyTransition",{attrs:{delay:.12}},[n("TOC",{key:t.$route.path})],1),t._v(" "),!t.pagePassword||t.pageDescrypted?t._t("content-top"):t._e(),t._v(" "),n("MyTransition",{directives:[{name:"show",rawName:"v-show",value:!t.pagePassword||t.pageDescrypted,expression:"!pagePassword || pageDescrypted"}],attrs:{delay:.08}},[n("Content",{key:t.$route.path,staticClass:"theme-default-content"})],1),t._v(" "),!t.pagePassword||t.pageDescrypted?t._t("content-bottom"):t._e(),t._v(" "),n("MyTransition",{attrs:{delay:.12}},[n("PageMeta",{key:t.$route.path})],1),t._v(" "),n("MyTransition",{attrs:{delay:.14}},[n("PageNav",t._b({key:t.$route.path},"PageNav",{sidebarItems:t.sidebarItems},!1))],1),t._v(" "),n("MyTransition",{attrs:{delay:.16}},[t.$themeConfig.comment?n("CommentService",{key:t.$route.path}):t._e()],1)],t._v(" "),t._t("bottom")],2)}),[],!1,null,null,null).exports),st=a.a.extend({name:"Layout",components:{BlogInfo:r.a,BlogHome:r.a,Common:s.a,ContentBottom:r.a,ContentTop:r.a,Home:f,NavbarCenter:r.a,NavbarEnd:r.a,NavbarStart:r.a,Page:rt,PageBottom:r.a,PageTop:r.a,SidebarBottom:r.a,SidebarCenter:r.a,SidebarTop:r.a}}),ot=Object(i.a)(st,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("Common",{attrs:{sidebar:!0!==t.$frontmatter.blog},scopedSlots:t._u([{key:"navbar-start",fn:function(){return[t._t("navbar-start",(function(){return[n("NavbarStart"),t._v(" "),n("Content",{attrs:{"slot-key":"navbar-start"}})]}))]},proxy:!0},{key:"navbar-center",fn:function(){return[t._t("navbar-center",(function(){return[n("NavbarCenter"),t._v(" "),n("Content",{attrs:{"slot-key":"navbar-center"}})]}))]},proxy:!0},{key:"navbar-end",fn:function(){return[t._t("navbar-end",(function(){return[n("NavbarEnd"),t._v(" "),n("Content",{attrs:{"slot-key":"navbar-end"}})]}))]},proxy:!0},{key:"sidebar-top",fn:function(){return[t._t("sidebar-top",(function(){return[n("SidebarTop"),t._v(" "),n("Content",{attrs:{"slot-key":"sidebar-top"}})]}))]},proxy:!0},{key:"sidebar-center",fn:function(){return[t._t("sidebar-center",(function(){return[n("SidebarCenter"),t._v(" "),n("Content",{attrs:{"slot-key":"sidebar-center"}})]}))]},proxy:!0},{key:"sidebar-bottom",fn:function(){return[t._t("sidebar-bottom",(function(){return[n("SidebarBottom"),t._v(" "),n("Content",{attrs:{"slot-key":"sidebar-bottom"}})]}))]},proxy:!0},{key:"default",fn:function(e){return[t.$frontmatter.blog&&!1!==t.$themeConfig.blog?n("BlogHome"):t.$frontmatter.home?n("Home"):n("Page",{attrs:{headers:e.headers,"sidebar-items":e.sidebarItems},scopedSlots:t._u([{key:"top",fn:function(){return[t._t("page-top",(function(){return[n("PageTop"),t._v(" "),n("Content",{attrs:{"slot-key":"page-top"}})]}))]},proxy:!0},{key:"content-top",fn:function(){return[t._t("content-top",(function(){return[n("ContentTop"),t._v(" "),n("Content",{attrs:{"slot-key":"content-top"}})]}))]},proxy:!0},{key:"content-bottom",fn:function(){return[t._t("content-bottom",(function(){return[n("ContentBottom"),t._v(" "),n("Content",{attrs:{"slot-key":"content-bottom"}})]}))]},proxy:!0},{key:"bottom",fn:function(){return[t._t("page-bottom",(function(){return[n("PageBottom"),t._v(" "),n("Content",{attrs:{"slot-key":"page-bottom"}})]}))]},proxy:!0}],null,!0)})]}}],null,!0)})}),[],!1,null,null,null);e.default=ot.exports}}]);