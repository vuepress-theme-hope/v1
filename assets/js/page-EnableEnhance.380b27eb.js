(window.webpackJsonp=window.webpackJsonp||[]).push([[36],{1214:function(e,t,a){"use strict";a.r(t);var s=a(1),n=Object(s.a)({},(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("p",[e._v("Besides Markdown syntaxes VuePress itself adds, "),a("code",[e._v("vuepress-theme-hope")]),e._v(" enables more syntax in Markdown via "),a("a",{attrs:{href:"https://vuepress-theme-hope.github.io/v1/md-enhance/",target:"_blank",rel:"noopener noreferrer"}},[e._v("vuepress-plugin-md-enhance"),a("OutboundLink")],1),e._v(" plugin.")]),e._v(" "),a("h2",{attrs:{id:"built-in-enhancements"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#built-in-enhancements"}},[e._v("#")]),e._v(" Built-in enhancements")]),e._v(" "),a("p",[e._v("VuePress comes with GitHub-style tables, Emoji, TOC, code line numbers, specific line highlighting, etc. are all available out of the box.")]),e._v(" "),a("p",[e._v("For detailed syntax, please see "),a("RouterLink",{attrs:{to:"/basic/vuepress/markdown.html"}},[e._v("Built-in Markdown Enhance")]),e._v(".")],1),e._v(" "),a("h2",{attrs:{id:"enable-markdown-enhance"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#enable-markdown-enhance"}},[e._v("#")]),e._v(" Enable Markdown Enhance")]),e._v(" "),a("p",[a("code",[e._v("themeconfig.mdEnhance")]),e._v(" in "),a("code",[e._v(".vuepress/config.js")]),e._v(" will be passed directly to the plugin as a plugin option. Visit "),a("a",{attrs:{href:"https://vuepress-theme-hope.github.io/v1/md-enhance/",target:"_blank",rel:"noopener noreferrer"}},[e._v("md-enhance documentation"),a("OutboundLink")],1),e._v(" to see the usage.")]),e._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[e._v("Tips")]),e._v(" "),a("p",[e._v("Don’t worry about the size of your site. If you don’t enable related features, the final code won’t include code for these features.")])]),e._v(" "),a("h2",{attrs:{id:"enable-all"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#enable-all"}},[e._v("#")]),e._v(" Enable all")]),e._v(" "),a("p",[e._v("You can set "),a("code",[e._v("themeconfig.mdEnhance.enableAll")]),e._v(" to enable all features of the "),a("a",{attrs:{href:"https://vuepress-theme-hope.github.io/v1/md-enhance/",target:"_blank",rel:"noopener noreferrer"}},[e._v("md-enhance"),a("OutboundLink")],1),e._v(" plugin.")]),e._v(" "),a("div",{staticClass:"language-js line-numbers-mode"},[a("div",{staticClass:"highlight-lines"},[a("br"),a("br"),a("div",{staticClass:"highlighted"},[e._v(" ")]),a("div",{staticClass:"highlighted"},[e._v(" ")]),a("div",{staticClass:"highlighted"},[e._v(" ")]),a("br"),a("br"),a("br")]),a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[e._v("module"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(".")]),e._v("exports "),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{")]),e._v("\n  "),a("span",{pre:!0,attrs:{class:"token literal-property property"}},[e._v("themeConfig")]),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{")]),e._v("\n    "),a("span",{pre:!0,attrs:{class:"token literal-property property"}},[e._v("mdEnhance")]),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{")]),e._v("\n      "),a("span",{pre:!0,attrs:{class:"token literal-property property"}},[e._v("enableAll")]),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[e._v("true")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v("\n")])]),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br"),a("span",{staticClass:"line-number"},[e._v("2")]),a("br"),a("span",{staticClass:"line-number"},[e._v("3")]),a("br"),a("span",{staticClass:"line-number"},[e._v("4")]),a("br"),a("span",{staticClass:"line-number"},[e._v("5")]),a("br"),a("span",{staticClass:"line-number"},[e._v("6")]),a("br"),a("span",{staticClass:"line-number"},[e._v("7")]),a("br")])]),a("div",{staticClass:"custom-block danger"},[a("p",{staticClass:"custom-block-title"},[e._v("Warning")]),e._v(" "),a("p",[e._v("Please use this option ONLY for playing or testing.")]),e._v(" "),a("p",[e._v("As time grows,"),a("code",[e._v("vupress-plugin-md-enhance")]),e._v(" is becoming more powerful. It’s adding more syntax to Markdown parser and more code to output.")]),e._v(" "),a("p",[e._v("Enabling features you don’t need will increase dev and build time. ("),a("code",[e._v("markdown-it")]),e._v(" has to check for extra syntaxs)")]),e._v(" "),a("p",[e._v("Also, presentation feature will add a 700KB size chunk (mostly is "),a("code",[e._v("reveal.js")]),e._v(") to your output.")]),e._v(" "),a("p",[e._v("Please enable ONLY the feature you want to use.")])]),e._v(" "),a("h3",{attrs:{id:"enable-specific-syntax"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#enable-specific-syntax"}},[e._v("#")]),e._v(" Enable specific syntax")]),e._v(" "),a("p",[e._v("Specific syntax configuration items can be found in the corresponding instruction page or "),a("RouterLink",{attrs:{to:"/config/theme/plugin.html#mdEnhance"}},[e._v("Theme Plugin Config")]),e._v(".")],1)])}),[],!1,null,null,null);t.default=n.exports}}]);