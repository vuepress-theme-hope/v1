(window.webpackJsonp=window.webpackJsonp||[]).push([[148],{1296:function(s,t,e){"use strict";e.r(t);var a=e(1),n=Object(a.a)({},(function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("p",[a("code",[s._v("vuepress-theme-hope")]),s._v(" 允许你添加幻灯片页面。")]),s._v(" "),a("p",[s._v("你需要在相应的页面的 frontmatter 中，设置 "),a("code",[s._v("layout: Slide")]),s._v(" 来开启幻灯片风格。")]),s._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[s._v("提示")]),s._v(" "),a("p",[s._v("你应该通过设置 "),a("code",[s._v("themeConfig.mdEnhance.enableAll")]),s._v(" 或 "),a("code",[s._v("themeConfig.mdEnhance.presentation")]),s._v(" 在 "),a("code",[s._v("vuepress-plugin-md-enhance")]),s._v(" 中启用幻灯片功能，否则幻灯片无法正确加载。")])]),s._v(" "),a("p",[a("img",{attrs:{src:e(774),alt:"幻灯片页截图",loading:"lazy"}})]),s._v(" "),a("p",[a("a",{attrs:{href:"https://vuepress-theme-hope-demo.mrhope.site/zh/slides/",target:"_blank",rel:"noopener noreferrer"}},[s._v("这里"),a("OutboundLink")],1),s._v(" 有一个展示了所有幻灯片功能的案例.")]),s._v(" "),a("p",[s._v("你应该仅在该页面包含一个单一的幻灯片语法，以避免其他问题。")]),s._v(" "),a("div",{staticClass:"language-md line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-md"}},[a("code",[s._v("@slidestart [your theme]\n\n// your slides\n\n@slideend\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br")])])])}),[],!1,null,null,null);t.default=n.exports},1309:function(s,t,e){"use strict";e.r(t);var a=e(1),n=Object(a.a)({},(function(){var s=this,t=s.$createElement,e=s._self._c||t;return e("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[e("p",[s._v("让你的 VuePress 站点中的 Markdown 文件支持幻灯片。")]),s._v(" "),e("p",[s._v("本插件利用了 "),e("a",{attrs:{href:"https://revealjs.com/",target:"_blank",rel:"noopener noreferrer"}},[s._v("reveal.js"),e("OutboundLink")],1),s._v(" 来支持这一功能。")]),s._v(" "),e("h2",{attrs:{id:"配置"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#配置"}},[s._v("#")]),s._v(" 配置")]),s._v(" "),e("div",{staticClass:"language-js line-numbers-mode"},[e("div",{staticClass:"highlight-lines"},[e("br"),e("br"),e("br"),e("div",{staticClass:"highlighted"},[s._v(" ")]),e("br"),e("br"),e("br"),e("br")]),e("pre",{pre:!0,attrs:{class:"language-js"}},[e("code",[s._v("module"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("exports "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  "),e("span",{pre:!0,attrs:{class:"token literal-property property"}},[s._v("themeConfig")]),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),e("span",{pre:!0,attrs:{class:"token literal-property property"}},[s._v("mdEnhance")]),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n      "),e("span",{pre:!0,attrs:{class:"token literal-property property"}},[s._v("presentation")]),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("true")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n    "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n  "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])]),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br"),e("span",{staticClass:"line-number"},[s._v("6")]),e("br"),e("span",{staticClass:"line-number"},[s._v("7")]),e("br")])]),e("h2",{attrs:{id:"语法"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#语法"}},[s._v("#")]),s._v(" 语法")]),s._v(" "),e("ul",[e("li",[s._v("使用 "),e("code",[s._v("---")]),s._v(" 分割幻灯片")]),s._v(" "),e("li",[s._v("使用 "),e("code",[s._v("--")]),s._v(" 对幻灯片进行二次分割(垂直显示)")])]),s._v(" "),e("div",{staticClass:"language-md line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-md"}},[e("code",[s._v("@slidestart [theme]\n\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("\x3c!-- slide1 --\x3e")]),s._v("\n\n"),e("span",{pre:!0,attrs:{class:"token hr punctuation"}},[s._v("---")]),s._v("\n\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("\x3c!-- slide2 --\x3e")]),s._v("\n\n"),e("span",{pre:!0,attrs:{class:"token hr punctuation"}},[s._v("---")]),s._v("\n\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("\x3c!-- slide3 --\x3e")]),s._v("\n\n@slideend\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br"),e("span",{staticClass:"line-number"},[s._v("6")]),e("br"),e("span",{staticClass:"line-number"},[s._v("7")]),e("br"),e("span",{staticClass:"line-number"},[s._v("8")]),e("br"),e("span",{staticClass:"line-number"},[s._v("9")]),e("br"),e("span",{staticClass:"line-number"},[s._v("10")]),e("br"),e("span",{staticClass:"line-number"},[s._v("11")]),e("br"),e("span",{staticClass:"line-number"},[s._v("12")]),e("br"),e("span",{staticClass:"line-number"},[s._v("13")]),e("br")])]),e("p",[s._v("目前可用的主题(请使用它们直接替换 "),e("code",[s._v("[theme]")]),s._v("):")]),s._v(" "),e("ul",[e("li",[e("code",[s._v("auto")]),s._v(" (默认)")]),s._v(" "),e("li",[e("code",[s._v("black")])]),s._v(" "),e("li",[e("code",[s._v("white")])]),s._v(" "),e("li",[e("code",[s._v("league")])]),s._v(" "),e("li",[e("code",[s._v("beige")])]),s._v(" "),e("li",[e("code",[s._v("sky")])]),s._v(" "),e("li",[e("code",[s._v("night")])]),s._v(" "),e("li",[e("code",[s._v("serif")])]),s._v(" "),e("li",[e("code",[s._v("simple")])]),s._v(" "),e("li",[e("code",[s._v("solarized")])]),s._v(" "),e("li",[e("code",[s._v("blood")])]),s._v(" "),e("li",[e("code",[s._v("moon")])])]),s._v(" "),e("p",[s._v("主题演示，请详见 "),e("a",{attrs:{href:"https://vuepress-theme-hope.github.io/v1/md-enhance/zh/guide/presentation/themes.html",target:"_blank",rel:"noopener noreferrer"}},[s._v("幻灯片主题"),e("OutboundLink")],1)]),s._v(" "),e("h2",{attrs:{id:"演示"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#演示"}},[s._v("#")]),s._v(" 演示")]),s._v(" "),e("Presentation",{attrs:{id:"presentation-382ee246","data-code":"%0A%23%23%20%E5%B9%BB%E7%81%AF%E7%89%87%201%0A%0A%E4%B8%80%E4%B8%AA%E6%9C%89%E6%96%87%E5%AD%97%E5%92%8C%20%5B%E9%93%BE%E6%8E%A5%5D(https%3A%2F%2Fmrhope.site)%20%E7%9A%84%E6%AE%B5%E8%90%BD%0A%0A---%0A%0A%23%23%20%E5%B9%BB%E7%81%AF%E7%89%87%202%0A%0A-%20%E9%A1%B9%E7%9B%AE%201%0A-%20%E9%A1%B9%E7%9B%AE%202%0A%0A---%0A%0A%23%23%20%E5%B9%BB%E7%81%AF%E7%89%87%203.1%0A%0A%60%60%60js%0Aconst%20a%20%3D%201%3B%0A%60%60%60%0A%0A--%0A%0A%23%23%20%E5%B9%BB%E7%81%AF%E7%89%87%203.2%0A%0A%24%24%0AJ(%5Ctheta_0%2C%5Ctheta_1)%20%3D%20%5Csum_%7Bi%3D0%7D%0A%24%24%0A",theme:"auto"}}),e("div",{staticClass:"language-md line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-md"}},[e("code",[s._v("@slidestart\n\n"),e("span",{pre:!0,attrs:{class:"token title important"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("##")]),s._v(" 幻灯片 1")]),s._v("\n\n一个有文字和 "),e("span",{pre:!0,attrs:{class:"token url"}},[s._v("["),e("span",{pre:!0,attrs:{class:"token content"}},[s._v("链接")]),s._v("]("),e("span",{pre:!0,attrs:{class:"token url"}},[s._v("https://mrhope.site")]),s._v(")")]),s._v(" 的段落\n\n"),e("span",{pre:!0,attrs:{class:"token hr punctuation"}},[s._v("---")]),s._v("\n\n"),e("span",{pre:!0,attrs:{class:"token title important"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("##")]),s._v(" 幻灯片 2")]),s._v("\n\n"),e("span",{pre:!0,attrs:{class:"token list punctuation"}},[s._v("-")]),s._v(" 项目 1\n"),e("span",{pre:!0,attrs:{class:"token list punctuation"}},[s._v("-")]),s._v(" 项目 2\n\n"),e("span",{pre:!0,attrs:{class:"token hr punctuation"}},[s._v("---")]),s._v("\n\n"),e("span",{pre:!0,attrs:{class:"token title important"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("##")]),s._v(" 幻灯片 3.1")]),s._v("\n\n"),e("span",{pre:!0,attrs:{class:"token code"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("```")]),e("span",{pre:!0,attrs:{class:"token code-language"}},[s._v("js")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token code-block language-js language-js"}},[e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("const")]),s._v(" a "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")])]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("```")])]),s._v("\n\n--\n\n"),e("span",{pre:!0,attrs:{class:"token title important"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("##")]),s._v(" 幻灯片 3.2")]),s._v("\n\n$$\nJ(\\theta_0,\\theta_1) = \\sum_{i=0}\n$$\n\n@slideend\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br"),e("span",{staticClass:"line-number"},[s._v("6")]),e("br"),e("span",{staticClass:"line-number"},[s._v("7")]),e("br"),e("span",{staticClass:"line-number"},[s._v("8")]),e("br"),e("span",{staticClass:"line-number"},[s._v("9")]),e("br"),e("span",{staticClass:"line-number"},[s._v("10")]),e("br"),e("span",{staticClass:"line-number"},[s._v("11")]),e("br"),e("span",{staticClass:"line-number"},[s._v("12")]),e("br"),e("span",{staticClass:"line-number"},[s._v("13")]),e("br"),e("span",{staticClass:"line-number"},[s._v("14")]),e("br"),e("span",{staticClass:"line-number"},[s._v("15")]),e("br"),e("span",{staticClass:"line-number"},[s._v("16")]),e("br"),e("span",{staticClass:"line-number"},[s._v("17")]),e("br"),e("span",{staticClass:"line-number"},[s._v("18")]),e("br"),e("span",{staticClass:"line-number"},[s._v("19")]),e("br"),e("span",{staticClass:"line-number"},[s._v("20")]),e("br"),e("span",{staticClass:"line-number"},[s._v("21")]),e("br"),e("span",{staticClass:"line-number"},[s._v("22")]),e("br"),e("span",{staticClass:"line-number"},[s._v("23")]),e("br"),e("span",{staticClass:"line-number"},[s._v("24")]),e("br"),e("span",{staticClass:"line-number"},[s._v("25")]),e("br"),e("span",{staticClass:"line-number"},[s._v("26")]),e("br"),e("span",{staticClass:"line-number"},[s._v("27")]),e("br"),e("span",{staticClass:"line-number"},[s._v("28")]),e("br"),e("span",{staticClass:"line-number"},[s._v("29")]),e("br"),e("span",{staticClass:"line-number"},[s._v("30")]),e("br")])]),e("p",[s._v("详细与完整的演示详见 "),e("a",{attrs:{href:"https://vuepress-theme-hope.github.io/v1/md-enhance/zh/guide/presentation/demo.html",target:"_blank",rel:"noopener noreferrer"}},[s._v("幻灯片演示"),e("OutboundLink")],1)]),s._v(" "),e("h2",{attrs:{id:"选项"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#选项"}},[s._v("#")]),s._v(" 选项")]),s._v(" "),e("p",[s._v("你可以在 Frontmatter 设置 "),e("code",[s._v("reveal")]),s._v(" 以设置特定页面的 reveal.js 选项，也可以在插件选项中设置 "),e("code",[s._v("presentation")]),s._v(" 以全局设置 reveal.js。")]),s._v(" "),e("p",[s._v("更多选项，请参见"),e("a",{attrs:{href:"https://revealjs.com/config/",target:"_blank",rel:"noopener noreferrer"}},[s._v("reveal.js config"),e("OutboundLink")],1),s._v("，更多用法，请参阅 "),e("a",{attrs:{href:"https://revealjs.com/",target:"_blank",rel:"noopener noreferrer"}},[s._v("reveal.js 文档"),e("OutboundLink")],1),s._v("。")])],1)}),[],!1,null,null,null);t.default=n.exports},774:function(s,t,e){s.exports=e.p+"assets/img/slides.941e6b3f.png"}}]);