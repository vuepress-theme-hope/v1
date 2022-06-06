(window.webpackJsonp=window.webpackJsonp||[]).push([[44],{1199:function(t,e,a){"use strict";a.r(e);var s=a(1),n=Object(s.a)({},(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("p",[a("code",[t._v("vuepress-theme-hope")]),t._v(" provides footer feature for all pages "),a("Badge",{attrs:{text:"Support page config"}}),t._v(".")],1),t._v(" "),a("h2",{attrs:{id:"global-config"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#global-config"}},[t._v("#")]),t._v(" Global Config")]),t._v(" "),a("p",[t._v("In the themeConfig, "),a("code",[t._v("footer")]),t._v(" field is used to config footer globally. You can set "),a("code",[t._v("footer.content")]),t._v(" and "),a("code",[t._v("footer.copyright")]),t._v(" in "),a("code",[t._v("themeConfig")]),t._v(" to set the default footer content and copyright information globally.")]),t._v(" "),a("p",[t._v("The footer is not displayed on the page by default. To display the footer on every page, you need to set "),a("code",[t._v("themeConfig.footer.display")]),t._v(" to "),a("code",[t._v("true")]),t._v(".")]),t._v(" "),a("h2",{attrs:{id:"page-config"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#page-config"}},[t._v("#")]),t._v(" Page Config")]),t._v(" "),a("p",[t._v("You can configure the "),a("code",[t._v("footer")]),t._v(", "),a("code",[t._v("copyrightText")]),t._v(" and "),a("code",[t._v("medialink")]),t._v(" fields in the frontmatter of the page to set footer content of a specific page.")]),t._v(" "),a("h3",{attrs:{id:"footer"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#footer"}},[t._v("#")]),t._v(" footer")]),t._v(" "),a("ul",[a("li",[a("p",[t._v("When "),a("code",[t._v("themeConfig.footer.display")]),t._v(" is "),a("code",[t._v("true")]),t._v(", you can set "),a("code",[t._v("footer")]),t._v(" to "),a("code",[t._v("false")]),t._v(" in frontmatter to disable the footer of a specific page.")])]),t._v(" "),a("li",[a("p",[t._v("When the global display of footer is not enabled, setting "),a("code",[t._v("footer")]),t._v(" to "),a("code",[t._v("true")]),t._v(" will display the default footer text.")])]),t._v(" "),a("li",[a("p",[t._v("If you fill in a string, it will be inserted into the footer as the content of the footer with "),a("code",[t._v("v-html")]),t._v(" command, so you can fill in HTMLString.")])])]),t._v(" "),a("h3",{attrs:{id:"copyrighttext"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#copyrighttext"}},[t._v("#")]),t._v(" copyrightText")]),t._v(" "),a("p",[t._v("The "),a("code",[t._v("copyrightText")]),t._v(" field is used to set the copyright information of a specific page. It also supports HTMLString (useful when you cite an article and the article uses a specific license).")]),t._v(" "),a("p",[t._v("When "),a("code",[t._v("themeConfig.footer.display")]),t._v(" is "),a("code",[t._v("true")]),t._v(", you can also fill in "),a("code",[t._v("false")]),t._v(" to hide the copyright information of a specific page.")]),t._v(" "),a("h3",{attrs:{id:"medialink"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#medialink"}},[t._v("#")]),t._v(" medialink")]),t._v(" "),a("p",[t._v("This field is the same as "),a("code",[t._v("themeConfig.blog.links")]),t._v(" ("),a("RouterLink",{attrs:{to:"/guide/blog/intro.html"}},[t._v("see here for specific configuration")]),t._v("). You can configure it on a specific page to display different social media links. You can also fill in "),a("code",[t._v("false")]),t._v(" to hide it.")],1),t._v(" "),a("h2",{attrs:{id:"example"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#example"}},[t._v("#")]),t._v(" Example")]),t._v(" "),a("ul",[a("li",[a("p",[t._v("Enable the default footer text:")]),t._v(" "),a("div",{staticClass:"language-md line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-md"}},[a("code",[a("span",{pre:!0,attrs:{class:"token front-matter-block"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("---")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token front-matter yaml language-yaml"}},[a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("footer")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean important"}},[t._v("true")])]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("---")])]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br")])])]),t._v(" "),a("li",[a("p",[t._v("Customize footer text without displaying copyright information and media links:")]),t._v(" "),a("div",{staticClass:"language-md line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-md"}},[a("code",[a("span",{pre:!0,attrs:{class:"token front-matter-block"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("---")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token front-matter yaml language-yaml"}},[a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("footer")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" This website is served by GitHub Pages\n"),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("copyrightText")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean important"}},[t._v("false")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("medialink")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean important"}},[t._v("false")])]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("---")])]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br")])])]),t._v(" "),a("li",[a("p",[t._v("Custom footer content and copyright information and media links:")]),t._v(" "),a("div",{staticClass:"language-md line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-md"}},[a("code",[a("span",{pre:!0,attrs:{class:"token front-matter-block"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("---")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token front-matter yaml language-yaml"}},[a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("footer")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(' <a href="https'),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("//github.com/Mister"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v('Hope"'),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")]),t._v(" Mr.Hope </a"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("copyrightText")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" MIT LICENSE\n"),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("medialink")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("Zhihu")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" https"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("//zhihu.com")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("---")])]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br"),a("span",{staticClass:"line-number"},[t._v("6")]),a("br")])])]),t._v(" "),a("li",[a("p",[t._v("When you set "),a("code",[t._v("footer.display")]),t._v(" to true in the theme, you can also disable it locally:")]),t._v(" "),a("div",{staticClass:"language-md line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-md"}},[a("code",[a("span",{pre:!0,attrs:{class:"token front-matter-block"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("---")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token front-matter yaml language-yaml"}},[a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("footer")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean important"}},[t._v("false")])]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("---")])]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br")])])]),t._v(" "),a("li",[a("p",[t._v("To remove the default footer content while keeping social media and copyright information displayed, please use an empty string.")]),t._v(" "),a("div",{staticClass:"language-md line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-md"}},[a("code",[a("span",{pre:!0,attrs:{class:"token front-matter-block"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("---")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token front-matter yaml language-yaml"}},[a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("footer")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('""')])]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("---")])]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br")])])])])])}),[],!1,null,null,null);e.default=n.exports}}]);