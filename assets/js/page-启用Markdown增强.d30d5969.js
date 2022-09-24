(window.webpackJsonp=window.webpackJsonp||[]).push([[135],{1305:function(t,e,s){"use strict";s.r(e);var a=s(1),n=Object(a.a)({},(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("p",[t._v("除了 VuePress 本身新增了一些 Markdown 语法外，"),s("code",[t._v("vuepress-theme-hope")]),t._v(" 通过 "),s("a",{attrs:{href:"https://vuepress-theme-hope.github.io/v1/md-enhance/",target:"_blank",rel:"noopener noreferrer"}},[t._v("vuepress-plugin-md-enhance"),s("OutboundLink")],1),t._v("，在 Markdown 中启用了更多的语法与新功能。")]),t._v(" "),s("h2",{attrs:{id:"内置增强"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#内置增强"}},[t._v("#")]),t._v(" 内置增强")]),t._v(" "),s("p",[t._v("VuePress 自带的 GitHub 风格的表格，Emoji、TOC、代码行号、特定行高亮等都是开箱即用的。")]),t._v(" "),s("p",[t._v("详细语法详见 "),s("RouterLink",{attrs:{to:"/zh/basic/vuepress/markdown.html"}},[t._v("内置 Markdown 扩展")]),t._v("。")],1),t._v(" "),s("h2",{attrs:{id:"启用-markdown-增强"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#启用-markdown-增强"}},[t._v("#")]),t._v(" 启用 Markdown 增强")]),t._v(" "),s("p",[s("code",[t._v(".vuepress/config.js")]),t._v(" 中的 "),s("code",[t._v("themeconfig.mdEnhance")]),t._v(" 会直接传递给插件作为插件选项。所以你也可以直接阅读 "),s("a",{attrs:{href:"https://vuepress-theme-hope.github.io/v1/md-enhance/",target:"_blank",rel:"noopener noreferrer"}},[t._v("vuepress-plugin-md-enhance 文档"),s("OutboundLink")],1),t._v(" 查看用法。")]),t._v(" "),s("div",{staticClass:"custom-block tip"},[s("p",{staticClass:"custom-block-title"},[t._v("提示")]),t._v(" "),s("p",[t._v("请不用担心你的网站大小，如果你不启用相关功能，最终代码不会包含这些功能相关的代码。")])]),t._v(" "),s("h3",{attrs:{id:"一键启用"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#一键启用"}},[t._v("#")]),t._v(" 一键启用")]),t._v(" "),s("p",[t._v("你可以设置 "),s("code",[t._v("themeconfig.mdEnhance.enableAll")]),t._v(" 启用 "),s("a",{attrs:{href:"https://vuepress-theme-hope.github.io/v1/md-enhance/",target:"_blank",rel:"noopener noreferrer"}},[t._v("md-enhance"),s("OutboundLink")],1),t._v(" 插件的所有功能。")]),t._v(" "),s("div",{staticClass:"language-js line-numbers-mode"},[s("div",{staticClass:"highlight-lines"},[s("br"),s("br"),s("div",{staticClass:"highlighted"},[t._v(" ")]),s("div",{staticClass:"highlighted"},[t._v(" ")]),s("div",{staticClass:"highlighted"},[t._v(" ")]),s("br"),s("br"),s("br")]),s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[t._v("module"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("exports "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("themeConfig")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("mdEnhance")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("enableAll")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])]),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br"),s("span",{staticClass:"line-number"},[t._v("4")]),s("br"),s("span",{staticClass:"line-number"},[t._v("5")]),s("br"),s("span",{staticClass:"line-number"},[t._v("6")]),s("br"),s("span",{staticClass:"line-number"},[t._v("7")]),s("br")])]),s("div",{staticClass:"custom-block danger"},[s("p",{staticClass:"custom-block-title"},[t._v("警告")]),t._v(" "),s("p",[t._v("请仅将此选项用于体验或测试。随着时间的增长，"),s("code",[t._v("vuepress-plugin-md-enhance")]),t._v(" 变得越来越强大。它为 Markdown 解析器添加了更多语法，并输出了更多代码。")]),t._v(" "),s("p",[t._v("启用不需要的功能将增加开发和构建时间。 ("),s("code",[t._v("markdown-it")]),t._v(" 必须检查额外的语法)")]),t._v(" "),s("p",[t._v("同样，幻灯片演示功能将在输出中添加 700KB 大小的代码 (主要是 "),s("code",[t._v("reveal.js")]),t._v(")。")]),t._v(" "),s("p",[t._v("因此，请仅启用需要的功能。")])]),t._v(" "),s("h3",{attrs:{id:"启用特定的语法"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#启用特定的语法"}},[t._v("#")]),t._v(" 启用特定的语法")]),t._v(" "),s("p",[t._v("特定语法的配置项可以在对应的说明页或者 "),s("RouterLink",{attrs:{to:"/zh/config/theme/plugin.html#mdEnhance"}},[t._v("主题插件配置")]),t._v(" 中找到。")],1)])}),[],!1,null,null,null);e.default=n.exports}}]);