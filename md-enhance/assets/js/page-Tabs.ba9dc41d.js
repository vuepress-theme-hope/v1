(window.webpackJsonp=window.webpackJsonp||[]).push([[33],{1033:function(s,a,t){"use strict";t.r(a);var n=t(1),e=Object(n.a)({},(function(){var s=this,a=s.$createElement,t=s._self._c||a;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("p",[s._v("Let the Markdown file in your VuePress site support tabs.")]),s._v(" "),t("div",{staticClass:"custom-block warning"},[t("p",{staticClass:"custom-block-title"},[s._v("Note")]),s._v(" "),t("p",[s._v("This feature requires "),t("code",[s._v("vue@2.7+")]),s._v(", and it's not stable.")])]),s._v(" "),t("h2",{attrs:{id:"config"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#config"}},[s._v("#")]),s._v(" Config")]),s._v(" "),t("div",{staticClass:"language-js line-numbers-mode"},[t("div",{staticClass:"highlight-lines"},[t("br"),t("br"),t("br"),t("br"),t("br"),t("br"),t("div",{staticClass:"highlighted"},[s._v(" ")]),t("br"),t("div",{staticClass:"highlighted"},[s._v(" ")]),t("br"),t("br"),t("br")]),t("pre",{pre:!0,attrs:{class:"language-js"}},[t("code",[s._v("module"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("exports "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token literal-property property"}},[s._v("plugins")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("\n      "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"md-enhance"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n      "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n        "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// adds tabs support")]),s._v("\n        "),t("span",{pre:!0,attrs:{class:"token literal-property property"}},[s._v("tabs")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("true")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n      "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])]),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br")])]),t("h2",{attrs:{id:"usage"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#usage"}},[s._v("#")]),s._v(" Usage")]),s._v(" "),t("p",[s._v("You need to wrap your tabs in "),t("code",[s._v("tabs")]),s._v(" container.")]),s._v(" "),t("p",[s._v("You can add an id suffix in "),t("code",[s._v("tabs")]),s._v(" container, which will be used as tab id. All tabs with same id will share same switch event.")]),s._v(" "),t("div",{staticClass:"language-md line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-md"}},[t("code",[s._v("::: tabs#fruit\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("\x3c!-- here, fruit will be used as id, it's optional --\x3e")]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("\x3c!-- tabs content --\x3e")]),s._v("\n\n:::\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br")])]),t("p",[s._v("Inside this container, you should use "),t("code",[s._v("@tab")]),s._v(" marker to mark and sperate tab contents.")]),s._v(" "),t("p",[s._v("Behind "),t("code",[s._v("@tab")]),s._v(" marker, you can add text "),t("code",[s._v(":active")]),s._v(" to activate the tab by default, and the text will be resolved as tab title.")]),s._v(" "),t("div",{staticClass:"language-md line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-md"}},[t("code",[s._v("::: tabs\n\n@tab title 1\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("\x3c!-- tab 1 content --\x3e")]),s._v("\n\n@tab title 2\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("\x3c!-- tab 2 content --\x3e")]),s._v("\n\n@tab:active title 3\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("\x3c!-- tab 3 will be activated by default --\x3e")]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("\x3c!-- tab 3 content --\x3e")]),s._v("\n\n:::\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br"),t("span",{staticClass:"line-number"},[s._v("12")]),t("br"),t("span",{staticClass:"line-number"},[s._v("13")]),t("br"),t("span",{staticClass:"line-number"},[s._v("14")]),t("br"),t("span",{staticClass:"line-number"},[s._v("15")]),t("br"),t("span",{staticClass:"line-number"},[s._v("16")]),t("br"),t("span",{staticClass:"line-number"},[s._v("17")]),t("br")])]),t("p",[s._v("By default, the title will be used as value of tab, but you can override it using id suffix.")]),s._v(" "),t("div",{staticClass:"language-md line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-md"}},[t("code",[s._v("::: tabs\n\n@tab title 1\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v('\x3c!-- here, tab 1\'s title "title 1" will be used as value. --\x3e')]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("\x3c!-- tab 1 content --\x3e")]),s._v("\n\n@tab title 2#value2\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v('\x3c!-- here, tab 2\'s title will be "title 2", but it will bind a value with "value2" --\x3e')]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("\x3c!-- tab 2 content --\x3e")]),s._v("\n\n:::\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br"),t("span",{staticClass:"line-number"},[s._v("12")]),t("br"),t("span",{staticClass:"line-number"},[s._v("13")]),t("br"),t("span",{staticClass:"line-number"},[s._v("14")]),t("br"),t("span",{staticClass:"line-number"},[s._v("15")]),t("br")])]),t("div",{staticClass:"custom-block info"},[t("p",{staticClass:"custom-block-title"},[s._v("Switching together and persisting choise")]),s._v(" "),t("p",[s._v("If you want to make some tab groups switch together, you can use same tab id to bind them.")]),s._v(" "),t("p",[s._v("Also, your choise with that tab id will be stored and persisted.")]),s._v(" "),t("p",[s._v("Here is an exmple:")]),s._v(" "),t("p",[s._v("Choose a package manager:")]),s._v(" "),t("Tabs",{attrs:{data:[{title:"npm"},{title:"pnpm"}],"tab-id":"shell"},scopedSlots:s._u([{key:"tab0",fn:function(a){a.title,a.value,a.isActive;return[t("p",[s._v("npm should be installed with Node.js.")])]}},{key:"tab1",fn:function(a){a.title,a.value,a.isActive;return[t("p",[s._v("If you are using Node.js v16+, you can use corepack to enable pnpm:")]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[s._v("corepack prepare pnpm@7.1.6 --activated\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("p",[s._v("Otherwise, you can install it with npm:")]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[s._v("npm")]),s._v(" i -g "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("pnpm")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])])]}}])}),s._v(" "),t("p",[s._v("Install "),t("code",[s._v("vuepress-plugin-md-enhance")]),s._v(":")]),s._v(" "),t("Tabs",{attrs:{data:[{title:"Using npm",value:"npm"},{title:"Using pnpm",value:"pnpm"}],"tab-id":"shell"},scopedSlots:s._u([{key:"tab0",fn:function(a){a.title,a.value,a.isActive;return[t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[s._v("npm")]),s._v(" i -D vuepress-plugin-md-enhance@next\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])])]}},{key:"tab1",fn:function(a){a.title,a.value,a.isActive;return[t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[s._v("pnpm")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("add")]),s._v(" -D vuepress-plugin-md-enhance@next\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])])]}}])})],1),s._v(" "),t("h2",{attrs:{id:"demo"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#demo"}},[s._v("#")]),s._v(" Demo")]),s._v(" "),t("p",[s._v("A tab of fruit:")]),s._v(" "),t("Tabs",{attrs:{data:[{title:"apple",value:"apple"},{title:"banana",value:"banana"}],"tab-id":"fruit"},scopedSlots:s._u([{key:"tab0",fn:function(a){a.title,a.value,a.isActive;return[t("p",[s._v("Apple")])]}},{key:"tab1",fn:function(a){a.title,a.value,a.isActive;return[t("p",[s._v("Banana")])]}}])}),s._v(" "),t("div",{staticClass:"language-md line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-md"}},[t("code",[s._v("::: tabs#fruit\n\n@tab apple#apple\n\nApple\n\n@tab banana#banana\n\nBanana\n\n:::\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br")])]),t("p",[s._v("Another tab of fruit:")]),s._v(" "),t("Tabs",{attrs:{data:[{title:"apple"},{title:"banana"},{title:"orange"}],"tab-id":"fruit"},scopedSlots:s._u([{key:"tab0",fn:function(a){a.title,a.value,a.isActive;return[t("p",[s._v("Apple")])]}},{key:"tab1",fn:function(a){a.title,a.value,a.isActive;return[t("p",[s._v("Banana")])]}},{key:"tab2",fn:function(a){a.title,a.value,a.isActive;return[t("p",[s._v("Orange")])]}}])}),s._v(" "),t("div",{staticClass:"language-md line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-md"}},[t("code",[s._v("::: tabs#fruit\n\n@tab apple\n\nApple\n\n@tab banana\n\nBanana\n\n@tab orange\n\nOrange\n\n:::\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br"),t("span",{staticClass:"line-number"},[s._v("12")]),t("br"),t("span",{staticClass:"line-number"},[s._v("13")]),t("br"),t("span",{staticClass:"line-number"},[s._v("14")]),t("br"),t("span",{staticClass:"line-number"},[s._v("15")]),t("br")])]),t("p",[s._v("A tab of fruit without id:")]),s._v(" "),t("Tabs",{attrs:{data:[{title:"apple"},{title:"banana"},{title:"orange"}]},scopedSlots:s._u([{key:"tab0",fn:function(a){a.title,a.value,a.isActive;return[t("p",[s._v("Apple")])]}},{key:"tab1",fn:function(a){a.title,a.value,a.isActive;return[t("p",[s._v("Banana")])]}},{key:"tab2",fn:function(a){a.title,a.value,a.isActive;return[t("p",[s._v("Orange")])]}}])}),s._v(" "),t("div",{staticClass:"language-md line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-md"}},[t("code",[s._v("::: tabs\n\n@tab apple\n\nApple\n\n@tab banana\n\nBanana\n\n@tab orange\n\nOrange\n\n:::\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br"),t("span",{staticClass:"line-number"},[s._v("12")]),t("br"),t("span",{staticClass:"line-number"},[s._v("13")]),t("br"),t("span",{staticClass:"line-number"},[s._v("14")]),t("br"),t("span",{staticClass:"line-number"},[s._v("15")]),t("br")])])],1)}),[],!1,null,null,null);a.default=e.exports}}]);