(window.webpackJsonp=window.webpackJsonp||[]).push([[20],{1010:function(t,s,a){"use strict";a.r(s);var e=a(1),i=Object(e.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("p",[t._v("By installing and enableing this plugin, you can use more syntax in your Markdown files.")]),t._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[t._v("Tips")]),t._v(" "),a("p",[t._v("Don’t worry about the size of your site. If you don’t enable related features, the final code won’t include code for these features.")]),t._v(" "),a("p",[t._v("At the same time, VuePress itself adds some Markdown syntaxes. You can "),a("a",{attrs:{href:"https://v1.vuepress.vuejs.org/guide/markdown.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("view the official documentation"),a("OutboundLink")],1),t._v(".")])]),t._v(" "),a("h2",{attrs:{id:"enable-all"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#enable-all"}},[t._v("#")]),t._v(" Enable All")]),t._v(" "),a("p",[t._v("You can set "),a("code",[t._v("enableAll: true")]),t._v(" in plugin options to enable all features of this plugin.")]),t._v(" "),a("div",{staticClass:"custom-block danger"},[a("p",{staticClass:"custom-block-title"},[t._v("Warning")]),t._v(" "),a("p",[t._v("Please use this option ONLY for playing or testing.")]),t._v(" "),a("p",[t._v("As time grows, "),a("code",[t._v("vuepress-plugin-md-enhance")]),t._v(" is becoming more powerful. It’s adding lots of syntax to Markdown parser and more code to output.")]),t._v(" "),a("p",[t._v("Enabling features you don’t need will increase dev and build time. ("),a("code",[t._v("markdown-it")]),t._v(" has to check extra syntax)")]),t._v(" "),a("p",[t._v("Also, presentation feature will add a 700KB size chunk (mostly is "),a("code",[t._v("reveal.js")]),t._v(") to your output.")]),t._v(" "),a("p",[t._v("Please use the options below and enable ONLY the feature you want to use.")])]),t._v(" "),a("h2",{attrs:{id:"new-feature"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#new-feature"}},[t._v("#")]),t._v(" New Feature")]),t._v(" "),a("h3",{attrs:{id:"tabs"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#tabs"}},[t._v("#")]),t._v(" Tabs")]),t._v(" "),a("Tabs",{attrs:{data:[{title:"apple"},{title:"banana"},{title:"orange"}],"tab-id":"fruit"},scopedSlots:t._u([{key:"tab0",fn:function(s){s.title,s.value,s.isActive;return[a("p",[t._v("Apple")])]}},{key:"tab1",fn:function(s){s.title,s.value,s.isActive;return[a("p",[t._v("Banana")])]}},{key:"tab2",fn:function(s){s.title,s.value,s.isActive;return[a("p",[t._v("Orange")])]}}])}),t._v(" "),a("ul",[a("li",[a("RouterLink",{attrs:{to:"/guide/tabs.html"}},[t._v("View Detail")])],1)]),t._v(" "),a("h3",{attrs:{id:"code-tabs"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#code-tabs"}},[t._v("#")]),t._v(" Code Tabs")]),t._v(" "),a("CodeTabs",{attrs:{data:[{title:"pnpm"},{title:"yarn"},{title:"npm"}],active:2,"tab-id":"shell"},scopedSlots:t._u([{key:"tab0",fn:function(s){s.title,s.value,s.isActive;return[a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("pnpm")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("add")]),t._v(" -D vuepress-plugin-md-enhance@next\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br")])])]}},{key:"tab1",fn:function(s){s.title,s.value,s.isActive;return[a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("yarn")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("add")]),t._v(" -D vuepress-plugin-md-enhance@next\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br")])])]}},{key:"tab2",fn:function(s){s.title,s.value,s.isActive;return[a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("npm")]),t._v(" i -D vuepress-plugin-md-enhance@next\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br")])])]}}])}),t._v(" "),a("ul",[a("li",[a("RouterLink",{attrs:{to:"/guide/code-tabs.html"}},[t._v("View Detail")])],1)]),t._v(" "),a("h3",{attrs:{id:"superscript-and-subscript"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#superscript-and-subscript"}},[t._v("#")]),t._v(" Superscript and Subscript")]),t._v(" "),a("p",[t._v("19"),a("sup",[t._v("th")]),t._v(" H"),a("sub",[t._v("2")]),t._v("O")]),t._v(" "),a("ul",[a("li",[a("RouterLink",{attrs:{to:"/guide/sup-sub.html"}},[t._v("View Detail")])],1)]),t._v(" "),a("h3",{attrs:{id:"align"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#align"}},[t._v("#")]),t._v(" Align")]),t._v(" "),a("div",{staticStyle:{"text-align":"center"}},[a("p",[t._v("I am center")])]),t._v(" "),a("div",{staticStyle:{"text-align":"right"}},[a("p",[t._v("I am right align")])]),t._v(" "),a("ul",[a("li",[a("RouterLink",{attrs:{to:"/guide/align.html"}},[t._v("View Detail")])],1)]),t._v(" "),a("h3",{attrs:{id:"footnote"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#footnote"}},[t._v("#")]),t._v(" Footnote")]),t._v(" "),a("p",[t._v("This text has footnote"),a("sup",{staticClass:"footnote-ref"},[a("a",{attrs:{href:"#footnote1"}},[t._v("[1]")]),a("a",{staticClass:"footnote-anchor",attrs:{id:"footnote-ref1"}})]),t._v(".")]),t._v(" "),a("ul",[a("li",[a("RouterLink",{attrs:{to:"/guide/footnote.html"}},[t._v("View Detail")])],1)]),t._v(" "),a("h3",{attrs:{id:"mark"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#mark"}},[t._v("#")]),t._v(" Mark")]),t._v(" "),a("p",[t._v("You can mark "),a("mark",[t._v("important words")]),t._v(" .")]),t._v(" "),a("ul",[a("li",[a("RouterLink",{attrs:{to:"/guide/mark.html"}},[t._v("View Detail")])],1)]),t._v(" "),a("h3",{attrs:{id:"tasklist"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#tasklist"}},[t._v("#")]),t._v(" Tasklist")]),t._v(" "),a("ul",{staticClass:"task-list-container"},[a("li",{staticClass:"task-list-item"},[a("p",[a("input",{staticClass:"task-list-item-checkbox",attrs:{type:"checkbox",id:"task-item-0",checked:"checked",disabled:"disabled"}}),a("label",{staticClass:"task-list-item-label",attrs:{for:"task-item-0"}},[t._v(" Plan A")])])]),t._v(" "),a("li",{staticClass:"task-list-item"},[a("p",[a("input",{staticClass:"task-list-item-checkbox",attrs:{type:"checkbox",id:"task-item-1",disabled:"disabled"}}),a("label",{staticClass:"task-list-item-label",attrs:{for:"task-item-1"}},[t._v(" Plan B")])])]),t._v(" "),a("li",[a("p",[a("RouterLink",{attrs:{to:"/guide/tasklist.html"}},[t._v("View Detail")])],1)])]),t._v(" "),a("h3",{attrs:{id:"image-enhancement"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#image-enhancement"}},[t._v("#")]),t._v(" Image Enhancement")]),t._v(" "),a("p",[t._v("Support setting color scheme and size")]),t._v(" "),a("ul",[a("li",[a("RouterLink",{attrs:{to:"/guide/image.html"}},[t._v("View Detail")])],1)]),t._v(" "),a("h3",{attrs:{id:"chart"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#chart"}},[t._v("#")]),t._v(" Chart")]),t._v(" "),a("ChartJS",{attrs:{id:"chart-64a56efa",config:"%7B%0A%20%20%22type%22%3A%20%22scatter%22%2C%0A%20%20%22data%22%3A%20%7B%0A%20%20%20%20%22datasets%22%3A%20%5B%0A%20%20%20%20%20%20%7B%0A%20%20%20%20%20%20%20%20%22label%22%3A%20%22Scatter%20Dataset%22%2C%0A%20%20%20%20%20%20%20%20%22data%22%3A%20%5B%0A%20%20%20%20%20%20%20%20%20%20%7B%20%22x%22%3A%20-10%2C%20%22y%22%3A%200%20%7D%2C%0A%20%20%20%20%20%20%20%20%20%20%7B%20%22x%22%3A%200%2C%20%22y%22%3A%2010%20%7D%2C%0A%20%20%20%20%20%20%20%20%20%20%7B%20%22x%22%3A%2010%2C%20%22y%22%3A%205%20%7D%2C%0A%20%20%20%20%20%20%20%20%20%20%7B%20%22x%22%3A%200.5%2C%20%22y%22%3A%205.5%20%7D%0A%20%20%20%20%20%20%20%20%5D%2C%0A%20%20%20%20%20%20%20%20%22backgroundColor%22%3A%20%22rgb(255%2C%2099%2C%20132)%22%0A%20%20%20%20%20%20%7D%0A%20%20%20%20%5D%0A%20%20%7D%2C%0A%20%20%22options%22%3A%20%7B%0A%20%20%20%20%22scales%22%3A%20%7B%0A%20%20%20%20%20%20%22x%22%3A%20%7B%0A%20%20%20%20%20%20%20%20%22type%22%3A%20%22linear%22%2C%0A%20%20%20%20%20%20%20%20%22position%22%3A%20%22bottom%22%0A%20%20%20%20%20%20%7D%0A%20%20%20%20%7D%0A%20%20%7D%0A%7D%0A",title:"A%20Scatter%20Chart",type:"json"}}),a("ul",[a("li",[a("RouterLink",{attrs:{to:"/guide/chart.html"}},[t._v("View Detail")])],1)]),t._v(" "),a("h2",{attrs:{id:"echarts"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#echarts"}},[t._v("#")]),t._v(" Echarts")]),t._v(" "),a("ECharts",{attrs:{id:"echarts-64a56eb6",config:"%7B%0A%20%20%22xAxis%22%3A%20%7B%0A%20%20%20%20%22type%22%3A%20%22category%22%2C%0A%20%20%20%20%22data%22%3A%20%5B%22Mon%22%2C%20%22Tue%22%2C%20%22Wed%22%2C%20%22Thu%22%2C%20%22Fri%22%2C%20%22Sat%22%2C%20%22Sun%22%5D%0A%20%20%7D%2C%0A%20%20%22yAxis%22%3A%20%7B%0A%20%20%20%20%22type%22%3A%20%22value%22%0A%20%20%7D%2C%0A%20%20%22series%22%3A%20%5B%0A%20%20%20%20%7B%0A%20%20%20%20%20%20%22data%22%3A%20%5B150%2C%20230%2C%20224%2C%20218%2C%20135%2C%20147%2C%20260%5D%2C%0A%20%20%20%20%20%20%22type%22%3A%20%22line%22%0A%20%20%20%20%7D%0A%20%20%5D%0A%7D%0A",title:"A%20line%20chart",type:"json"}}),a("ul",[a("li",[a("RouterLink",{attrs:{to:"/guide/echarts.html"}},[t._v("View Detail")])],1)]),t._v(" "),a("h3",{attrs:{id:"flowchart"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#flowchart"}},[t._v("#")]),t._v(" Flowchart")]),t._v(" "),a("FlowChart",{attrs:{id:"flowchart-64a5695c",code:"cond%3D%3Econdition%3A%20Process%3F%0Aprocess%3D%3Eoperation%3A%20Process%0Ae%3D%3Eend%3A%20End%0A%0Acond(yes)-%3Eprocess-%3Ee%0Acond(no)-%3Ee%0A",preset:"vue"}}),a("ul",[a("li",[a("RouterLink",{attrs:{to:"/guide/flowchart.html"}},[t._v("View Detail")])],1)]),t._v(" "),a("h3",{attrs:{id:"mermaid"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#mermaid"}},[t._v("#")]),t._v(" Mermaid")]),t._v(" "),a("Mermaid",{attrs:{id:"mermaid-64a5691c",code:"flowchart%20TB%0A%20%20%20%20c1--%3Ea2%0A%20%20%20%20subgraph%20one%0A%20%20%20%20a1--%3Ea2%0A%20%20%20%20end%0A%20%20%20%20subgraph%20two%0A%20%20%20%20b1--%3Eb2%0A%20%20%20%20end%0A%20%20%20%20subgraph%20three%0A%20%20%20%20c1--%3Ec2%0A%20%20%20%20end%0A%20%20%20%20one%20--%3E%20two%0A%20%20%20%20three%20--%3E%20two%0A%20%20%20%20two%20--%3E%20c2%0A"}}),a("ul",[a("li",[a("RouterLink",{attrs:{to:"/guide/mermaid.html"}},[t._v("View Detail")])],1)]),t._v(" "),a("h3",{attrs:{id:"tex"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#tex"}},[t._v("#")]),t._v(" Tex")]),t._v(" "),a("p",{staticClass:"katex-block"},[a("span",{staticClass:"katex-display"},[a("span",{staticClass:"katex"},[a("span",{staticClass:"katex-mathml"},[a("math",{attrs:{xmlns:"http://www.w3.org/1998/Math/MathML",display:"block"}},[a("semantics",[a("mrow",[a("mfrac",[a("msup",[a("mi",{attrs:{mathvariant:"normal"}},[t._v("∂")]),a("mi",[t._v("r")])],1),a("mrow",[a("mi",{attrs:{mathvariant:"normal"}},[t._v("∂")]),a("msup",[a("mi",[t._v("ω")]),a("mi",[t._v("r")])],1)],1)],1),a("mrow",[a("mo",{attrs:{fence:"true"}},[t._v("(")]),a("mfrac",[a("msup",[a("mi",[t._v("y")]),a("mi",[t._v("ω")])],1),a("mi",[t._v("ω")])],1),a("mo",{attrs:{fence:"true"}},[t._v(")")])],1),a("mo",[t._v("=")]),a("mrow",[a("mo",{attrs:{fence:"true"}},[t._v("(")]),a("mfrac",[a("msup",[a("mi",[t._v("y")]),a("mi",[t._v("ω")])],1),a("mi",[t._v("ω")])],1),a("mo",{attrs:{fence:"true"}},[t._v(")")])],1),a("mrow",[a("mo",{attrs:{fence:"true"}},[t._v("{")]),a("mo",{attrs:{stretchy:"false"}},[t._v("(")]),a("mi",[t._v("log")]),a("mo",[t._v("⁡")]),a("mi",[t._v("y")]),a("msup",[a("mo",{attrs:{stretchy:"false"}},[t._v(")")]),a("mi",[t._v("r")])],1),a("mo",[t._v("+")]),a("munderover",[a("mo",[t._v("∑")]),a("mrow",[a("mi",[t._v("i")]),a("mo",[t._v("=")]),a("mn",[t._v("1")])],1),a("mi",[t._v("r")])],1),a("mfrac",[a("mrow",[a("mo",{attrs:{stretchy:"false"}},[t._v("(")]),a("mo",[t._v("−")]),a("mn",[t._v("1")]),a("msup",[a("mo",{attrs:{stretchy:"false"}},[t._v(")")]),a("mi",[t._v("i")])],1),a("mi",[t._v("r")]),a("mo",[t._v("⋯")]),a("mo",{attrs:{stretchy:"false"}},[t._v("(")]),a("mi",[t._v("r")]),a("mo",[t._v("−")]),a("mi",[t._v("i")]),a("mo",[t._v("+")]),a("mn",[t._v("1")]),a("mo",{attrs:{stretchy:"false"}},[t._v(")")]),a("mo",{attrs:{stretchy:"false"}},[t._v("(")]),a("mi",[t._v("log")]),a("mo",[t._v("⁡")]),a("mi",[t._v("y")]),a("msup",[a("mo",{attrs:{stretchy:"false"}},[t._v(")")]),a("mrow",[a("mi",[t._v("r")]),a("mo",[t._v("−")]),a("mi",[t._v("i")])],1)],1)],1),a("msup",[a("mi",[t._v("ω")]),a("mi",[t._v("i")])],1)],1),a("mo",{attrs:{fence:"true"}},[t._v("}")])],1)],1),a("annotation",{attrs:{encoding:"application/x-tex"}},[t._v("\\frac {\\partial^r} {\\partial \\omega^r} \\left(\\frac {y^{\\omega}} {\\omega}\\right)\n= \\left(\\frac {y^{\\omega}} {\\omega}\\right) \\left\\{(\\log y)^r + \\sum_{i=1}^r \\frac {(-1)^i r \\cdots (r-i+1) (\\log y)^{r-i}} {\\omega^i} \\right\\}\n")])],1)],1)],1),a("span",{staticClass:"katex-html",attrs:{"aria-hidden":"true"}},[a("span",{staticClass:"base"},[a("span",{staticClass:"strut",staticStyle:{height:"2.4em","vertical-align":"-0.95em"}}),a("span",{staticClass:"mord"},[a("span",{staticClass:"mopen nulldelimiter"}),a("span",{staticClass:"mfrac"},[a("span",{staticClass:"vlist-t vlist-t2"},[a("span",{staticClass:"vlist-r"},[a("span",{staticClass:"vlist",staticStyle:{height:"1.3714em"}},[a("span",{staticStyle:{top:"-2.314em"}},[a("span",{staticClass:"pstrut",staticStyle:{height:"3em"}}),a("span",{staticClass:"mord"},[a("span",{staticClass:"mord",staticStyle:{"margin-right":"0.05556em"}},[t._v("∂")]),a("span",{staticClass:"mord"},[a("span",{staticClass:"mord mathnormal",staticStyle:{"margin-right":"0.03588em"}},[t._v("ω")]),a("span",{staticClass:"msupsub"},[a("span",{staticClass:"vlist-t"},[a("span",{staticClass:"vlist-r"},[a("span",{staticClass:"vlist",staticStyle:{height:"0.5904em"}},[a("span",{staticStyle:{top:"-2.989em","margin-right":"0.05em"}},[a("span",{staticClass:"pstrut",staticStyle:{height:"2.7em"}}),a("span",{staticClass:"sizing reset-size6 size3 mtight"},[a("span",{staticClass:"mord mathnormal mtight",staticStyle:{"margin-right":"0.02778em"}},[t._v("r")])])])])])])])])])]),a("span",{staticStyle:{top:"-3.23em"}},[a("span",{staticClass:"pstrut",staticStyle:{height:"3em"}}),a("span",{staticClass:"frac-line",staticStyle:{"border-bottom-width":"0.04em"}})]),a("span",{staticStyle:{top:"-3.677em"}},[a("span",{staticClass:"pstrut",staticStyle:{height:"3em"}}),a("span",{staticClass:"mord"},[a("span",{staticClass:"mord"},[a("span",{staticClass:"mord",staticStyle:{"margin-right":"0.05556em"}},[t._v("∂")]),a("span",{staticClass:"msupsub"},[a("span",{staticClass:"vlist-t"},[a("span",{staticClass:"vlist-r"},[a("span",{staticClass:"vlist",staticStyle:{height:"0.6644em"}},[a("span",{staticStyle:{top:"-3.063em","margin-right":"0.05em"}},[a("span",{staticClass:"pstrut",staticStyle:{height:"2.7em"}}),a("span",{staticClass:"sizing reset-size6 size3 mtight"},[a("span",{staticClass:"mord mathnormal mtight",staticStyle:{"margin-right":"0.02778em"}},[t._v("r")])])])])])])])])])])]),a("span",{staticClass:"vlist-s"},[t._v("​")])]),a("span",{staticClass:"vlist-r"},[a("span",{staticClass:"vlist",staticStyle:{height:"0.686em"}},[a("span")])])])]),a("span",{staticClass:"mclose nulldelimiter"})]),a("span",{staticClass:"mspace",staticStyle:{"margin-right":"0.1667em"}}),a("span",{staticClass:"minner"},[a("span",{staticClass:"mopen delimcenter",staticStyle:{top:"0em"}},[a("span",{staticClass:"delimsizing size3"},[t._v("(")])]),a("span",{staticClass:"mord"},[a("span",{staticClass:"mopen nulldelimiter"}),a("span",{staticClass:"mfrac"},[a("span",{staticClass:"vlist-t vlist-t2"},[a("span",{staticClass:"vlist-r"},[a("span",{staticClass:"vlist",staticStyle:{height:"1.3414em"}},[a("span",{staticStyle:{top:"-2.314em"}},[a("span",{staticClass:"pstrut",staticStyle:{height:"3em"}}),a("span",{staticClass:"mord"},[a("span",{staticClass:"mord mathnormal",staticStyle:{"margin-right":"0.03588em"}},[t._v("ω")])])]),a("span",{staticStyle:{top:"-3.23em"}},[a("span",{staticClass:"pstrut",staticStyle:{height:"3em"}}),a("span",{staticClass:"frac-line",staticStyle:{"border-bottom-width":"0.04em"}})]),a("span",{staticStyle:{top:"-3.677em"}},[a("span",{staticClass:"pstrut",staticStyle:{height:"3em"}}),a("span",{staticClass:"mord"},[a("span",{staticClass:"mord"},[a("span",{staticClass:"mord mathnormal",staticStyle:{"margin-right":"0.03588em"}},[t._v("y")]),a("span",{staticClass:"msupsub"},[a("span",{staticClass:"vlist-t"},[a("span",{staticClass:"vlist-r"},[a("span",{staticClass:"vlist",staticStyle:{height:"0.6644em"}},[a("span",{staticStyle:{top:"-3.063em","margin-right":"0.05em"}},[a("span",{staticClass:"pstrut",staticStyle:{height:"2.7em"}}),a("span",{staticClass:"sizing reset-size6 size3 mtight"},[a("span",{staticClass:"mord mtight"},[a("span",{staticClass:"mord mathnormal mtight",staticStyle:{"margin-right":"0.03588em"}},[t._v("ω")])])])])])])])])])])])]),a("span",{staticClass:"vlist-s"},[t._v("​")])]),a("span",{staticClass:"vlist-r"},[a("span",{staticClass:"vlist",staticStyle:{height:"0.686em"}},[a("span")])])])]),a("span",{staticClass:"mclose nulldelimiter"})]),a("span",{staticClass:"mclose delimcenter",staticStyle:{top:"0em"}},[a("span",{staticClass:"delimsizing size3"},[t._v(")")])])]),a("span",{staticClass:"mspace",staticStyle:{"margin-right":"0.2778em"}}),a("span",{staticClass:"mrel"},[t._v("=")]),a("span",{staticClass:"mspace",staticStyle:{"margin-right":"0.2778em"}})]),a("span",{staticClass:"base"},[a("span",{staticClass:"strut",staticStyle:{height:"3.0277em","vertical-align":"-1.2777em"}}),a("span",{staticClass:"minner"},[a("span",{staticClass:"mopen delimcenter",staticStyle:{top:"0em"}},[a("span",{staticClass:"delimsizing size3"},[t._v("(")])]),a("span",{staticClass:"mord"},[a("span",{staticClass:"mopen nulldelimiter"}),a("span",{staticClass:"mfrac"},[a("span",{staticClass:"vlist-t vlist-t2"},[a("span",{staticClass:"vlist-r"},[a("span",{staticClass:"vlist",staticStyle:{height:"1.3414em"}},[a("span",{staticStyle:{top:"-2.314em"}},[a("span",{staticClass:"pstrut",staticStyle:{height:"3em"}}),a("span",{staticClass:"mord"},[a("span",{staticClass:"mord mathnormal",staticStyle:{"margin-right":"0.03588em"}},[t._v("ω")])])]),a("span",{staticStyle:{top:"-3.23em"}},[a("span",{staticClass:"pstrut",staticStyle:{height:"3em"}}),a("span",{staticClass:"frac-line",staticStyle:{"border-bottom-width":"0.04em"}})]),a("span",{staticStyle:{top:"-3.677em"}},[a("span",{staticClass:"pstrut",staticStyle:{height:"3em"}}),a("span",{staticClass:"mord"},[a("span",{staticClass:"mord"},[a("span",{staticClass:"mord mathnormal",staticStyle:{"margin-right":"0.03588em"}},[t._v("y")]),a("span",{staticClass:"msupsub"},[a("span",{staticClass:"vlist-t"},[a("span",{staticClass:"vlist-r"},[a("span",{staticClass:"vlist",staticStyle:{height:"0.6644em"}},[a("span",{staticStyle:{top:"-3.063em","margin-right":"0.05em"}},[a("span",{staticClass:"pstrut",staticStyle:{height:"2.7em"}}),a("span",{staticClass:"sizing reset-size6 size3 mtight"},[a("span",{staticClass:"mord mtight"},[a("span",{staticClass:"mord mathnormal mtight",staticStyle:{"margin-right":"0.03588em"}},[t._v("ω")])])])])])])])])])])])]),a("span",{staticClass:"vlist-s"},[t._v("​")])]),a("span",{staticClass:"vlist-r"},[a("span",{staticClass:"vlist",staticStyle:{height:"0.686em"}},[a("span")])])])]),a("span",{staticClass:"mclose nulldelimiter"})]),a("span",{staticClass:"mclose delimcenter",staticStyle:{top:"0em"}},[a("span",{staticClass:"delimsizing size3"},[t._v(")")])])]),a("span",{staticClass:"mspace",staticStyle:{"margin-right":"0.1667em"}}),a("span",{staticClass:"minner"},[a("span",{staticClass:"mopen delimcenter",staticStyle:{top:"0em"}},[a("span",{staticClass:"delimsizing size4"},[t._v("{")])]),a("span",{staticClass:"mopen"},[t._v("(")]),a("span",{staticClass:"mop"},[t._v("lo"),a("span",{staticStyle:{"margin-right":"0.01389em"}},[t._v("g")])]),a("span",{staticClass:"mspace",staticStyle:{"margin-right":"0.1667em"}}),a("span",{staticClass:"mord mathnormal",staticStyle:{"margin-right":"0.03588em"}},[t._v("y")]),a("span",{staticClass:"mclose"},[a("span",{staticClass:"mclose"},[t._v(")")]),a("span",{staticClass:"msupsub"},[a("span",{staticClass:"vlist-t"},[a("span",{staticClass:"vlist-r"},[a("span",{staticClass:"vlist",staticStyle:{height:"0.7144em"}},[a("span",{staticStyle:{top:"-3.113em","margin-right":"0.05em"}},[a("span",{staticClass:"pstrut",staticStyle:{height:"2.7em"}}),a("span",{staticClass:"sizing reset-size6 size3 mtight"},[a("span",{staticClass:"mord mathnormal mtight",staticStyle:{"margin-right":"0.02778em"}},[t._v("r")])])])])])])])]),a("span",{staticClass:"mspace",staticStyle:{"margin-right":"0.2222em"}}),a("span",{staticClass:"mbin"},[t._v("+")]),a("span",{staticClass:"mspace",staticStyle:{"margin-right":"0.2222em"}}),a("span",{staticClass:"mop op-limits"},[a("span",{staticClass:"vlist-t vlist-t2"},[a("span",{staticClass:"vlist-r"},[a("span",{staticClass:"vlist",staticStyle:{height:"1.6514em"}},[a("span",{staticStyle:{top:"-1.8723em","margin-left":"0em"}},[a("span",{staticClass:"pstrut",staticStyle:{height:"3.05em"}}),a("span",{staticClass:"sizing reset-size6 size3 mtight"},[a("span",{staticClass:"mord mtight"},[a("span",{staticClass:"mord mathnormal mtight"},[t._v("i")]),a("span",{staticClass:"mrel mtight"},[t._v("=")]),a("span",{staticClass:"mord mtight"},[t._v("1")])])])]),a("span",{staticStyle:{top:"-3.05em"}},[a("span",{staticClass:"pstrut",staticStyle:{height:"3.05em"}}),a("span",[a("span",{staticClass:"mop op-symbol large-op"},[t._v("∑")])])]),a("span",{staticStyle:{top:"-4.3em","margin-left":"0em"}},[a("span",{staticClass:"pstrut",staticStyle:{height:"3.05em"}}),a("span",{staticClass:"sizing reset-size6 size3 mtight"},[a("span",{staticClass:"mord mathnormal mtight",staticStyle:{"margin-right":"0.02778em"}},[t._v("r")])])])]),a("span",{staticClass:"vlist-s"},[t._v("​")])]),a("span",{staticClass:"vlist-r"},[a("span",{staticClass:"vlist",staticStyle:{height:"1.2777em"}},[a("span")])])])]),a("span",{staticClass:"mspace",staticStyle:{"margin-right":"0.1667em"}}),a("span",{staticClass:"mord"},[a("span",{staticClass:"mopen nulldelimiter"}),a("span",{staticClass:"mfrac"},[a("span",{staticClass:"vlist-t vlist-t2"},[a("span",{staticClass:"vlist-r"},[a("span",{staticClass:"vlist",staticStyle:{height:"1.5017em"}},[a("span",{staticStyle:{top:"-2.314em"}},[a("span",{staticClass:"pstrut",staticStyle:{height:"3em"}}),a("span",{staticClass:"mord"},[a("span",{staticClass:"mord"},[a("span",{staticClass:"mord mathnormal",staticStyle:{"margin-right":"0.03588em"}},[t._v("ω")]),a("span",{staticClass:"msupsub"},[a("span",{staticClass:"vlist-t"},[a("span",{staticClass:"vlist-r"},[a("span",{staticClass:"vlist",staticStyle:{height:"0.7507em"}},[a("span",{staticStyle:{top:"-2.989em","margin-right":"0.05em"}},[a("span",{staticClass:"pstrut",staticStyle:{height:"2.7em"}}),a("span",{staticClass:"sizing reset-size6 size3 mtight"},[a("span",{staticClass:"mord mathnormal mtight"},[t._v("i")])])])])])])])])])]),a("span",{staticStyle:{top:"-3.23em"}},[a("span",{staticClass:"pstrut",staticStyle:{height:"3em"}}),a("span",{staticClass:"frac-line",staticStyle:{"border-bottom-width":"0.04em"}})]),a("span",{staticStyle:{top:"-3.677em"}},[a("span",{staticClass:"pstrut",staticStyle:{height:"3em"}}),a("span",{staticClass:"mord"},[a("span",{staticClass:"mopen"},[t._v("(")]),a("span",{staticClass:"mord"},[t._v("−")]),a("span",{staticClass:"mord"},[t._v("1")]),a("span",{staticClass:"mclose"},[a("span",{staticClass:"mclose"},[t._v(")")]),a("span",{staticClass:"msupsub"},[a("span",{staticClass:"vlist-t"},[a("span",{staticClass:"vlist-r"},[a("span",{staticClass:"vlist",staticStyle:{height:"0.8247em"}},[a("span",{staticStyle:{top:"-3.063em","margin-right":"0.05em"}},[a("span",{staticClass:"pstrut",staticStyle:{height:"2.7em"}}),a("span",{staticClass:"sizing reset-size6 size3 mtight"},[a("span",{staticClass:"mord mathnormal mtight"},[t._v("i")])])])])])])])]),a("span",{staticClass:"mord mathnormal",staticStyle:{"margin-right":"0.02778em"}},[t._v("r")]),a("span",{staticClass:"mspace",staticStyle:{"margin-right":"0.1667em"}}),a("span",{staticClass:"minner"},[t._v("⋯")]),a("span",{staticClass:"mspace",staticStyle:{"margin-right":"0.1667em"}}),a("span",{staticClass:"mopen"},[t._v("(")]),a("span",{staticClass:"mord mathnormal",staticStyle:{"margin-right":"0.02778em"}},[t._v("r")]),a("span",{staticClass:"mspace",staticStyle:{"margin-right":"0.2222em"}}),a("span",{staticClass:"mbin"},[t._v("−")]),a("span",{staticClass:"mspace",staticStyle:{"margin-right":"0.2222em"}}),a("span",{staticClass:"mord mathnormal"},[t._v("i")]),a("span",{staticClass:"mspace",staticStyle:{"margin-right":"0.2222em"}}),a("span",{staticClass:"mbin"},[t._v("+")]),a("span",{staticClass:"mspace",staticStyle:{"margin-right":"0.2222em"}}),a("span",{staticClass:"mord"},[t._v("1")]),a("span",{staticClass:"mclose"},[t._v(")")]),a("span",{staticClass:"mopen"},[t._v("(")]),a("span",{staticClass:"mop"},[t._v("lo"),a("span",{staticStyle:{"margin-right":"0.01389em"}},[t._v("g")])]),a("span",{staticClass:"mspace",staticStyle:{"margin-right":"0.1667em"}}),a("span",{staticClass:"mord mathnormal",staticStyle:{"margin-right":"0.03588em"}},[t._v("y")]),a("span",{staticClass:"mclose"},[a("span",{staticClass:"mclose"},[t._v(")")]),a("span",{staticClass:"msupsub"},[a("span",{staticClass:"vlist-t"},[a("span",{staticClass:"vlist-r"},[a("span",{staticClass:"vlist",staticStyle:{height:"0.8247em"}},[a("span",{staticStyle:{top:"-3.063em","margin-right":"0.05em"}},[a("span",{staticClass:"pstrut",staticStyle:{height:"2.7em"}}),a("span",{staticClass:"sizing reset-size6 size3 mtight"},[a("span",{staticClass:"mord mtight"},[a("span",{staticClass:"mord mathnormal mtight",staticStyle:{"margin-right":"0.02778em"}},[t._v("r")]),a("span",{staticClass:"mbin mtight"},[t._v("−")]),a("span",{staticClass:"mord mathnormal mtight"},[t._v("i")])])])])])])])])])])])]),a("span",{staticClass:"vlist-s"},[t._v("​")])]),a("span",{staticClass:"vlist-r"},[a("span",{staticClass:"vlist",staticStyle:{height:"0.686em"}},[a("span")])])])]),a("span",{staticClass:"mclose nulldelimiter"})]),a("span",{staticClass:"mclose delimcenter",staticStyle:{top:"0em"}},[a("span",{staticClass:"delimsizing size4"},[t._v("}")])])])])])])])]),t._v(" "),a("ul",[a("li",[a("RouterLink",{attrs:{to:"/guide/tex.html"}},[t._v("View Detail")])],1)]),t._v(" "),a("h3",{attrs:{id:"include-files"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#include-files"}},[t._v("#")]),t._v(" Include files")]),t._v(" "),a("p",[t._v("File not found")]),t._v(" "),a("ul",[a("li",[a("RouterLink",{attrs:{to:"/guide/include.html"}},[t._v("View Detail")])],1)]),t._v(" "),a("h3",{attrs:{id:"code-demo"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#code-demo"}},[t._v("#")]),t._v(" Code Demo")]),t._v(" "),a("CodeDemo",{attrs:{id:"code-demo-531a6052",type:"normal",title:"A%20normal%20demo",code:"%7B%22html%22%3A%22%3Ch1%3EVuePress%20Theme%20Hope%3C%2Fh1%3E%5Cn%3Cp%3EIs%20%3Cspan%20id%3D%5C%22very%5C%22%3Every%3C%2Fspan%3E%20powerful!%3C%2Fp%3E%5Cn%22%2C%22js%22%3A%22document.querySelector(%5C%22%23very%5C%22).addEventListener(%5C%22click%5C%22%2C%20()%20%3D%3E%20%7B%5Cn%20%20alert(%5C%22Very%20powerful!%5C%22)%3B%5Cn%7D)%3B%5Cn%22%2C%22css%22%3A%22span%20%7B%5Cn%20%20color%3A%20red%3B%5Cn%7D%5Cn%22%7D"}},[a("div",{staticClass:"language-html line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-html"}},[a("code",[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("h1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("VuePress Theme Hope"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("h1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("p")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("Is "),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("span")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("id")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("very"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("very"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("span")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v(" powerful!"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("p")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br")])]),a("div",{staticClass:"language-js line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[t._v("document"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("querySelector")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"#very"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("addEventListener")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"click"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("alert")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Very powerful!"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br")])]),a("div",{staticClass:"language-css line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-css"}},[a("code",[a("span",{pre:!0,attrs:{class:"token selector"}},[t._v("span")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("color")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" red"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br")])])]),a("ul",[a("li",[a("RouterLink",{attrs:{to:"/guide/demo/"}},[t._v("View Detail")])],1)]),t._v(" "),a("h3",{attrs:{id:"presentation"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#presentation"}},[t._v("#")]),t._v(" Presentation")]),t._v(" "),a("Presentation",{attrs:{id:"presentation-64a567e6","data-code":"%0A%23%23%20Slide%201%0A%0AA%20paragraph%20with%20some%20text%20and%20a%20%5Blink%5D(https%3A%2F%2Fmrhope.site)%0A%0A---%0A%0A%23%23%20Slide%202%0A%0A-%20Item%201%0A-%20Item%202%0A%0A---%0A%0A%23%23%20Slide%203.1%0A%0A%60%60%60js%0Aconst%20a%20%3D%201%3B%0A%60%60%60%0A%0A--%0A%0A%23%23%20Slide%203.2%0A%0A%24%24%0AJ(%5Ctheta_0%2C%5Ctheta_1)%20%3D%20%5Csum_%7Bi%3D0%7D%0A%24%24%0A",theme:"auto"}}),a("ul",[a("li",[a("RouterLink",{attrs:{to:"/guide/presentation/"}},[t._v("View Detail")])],1)]),t._v(" "),a("h3",{attrs:{id:"stylize"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#stylize"}},[t._v("#")]),t._v(" Stylize")]),t._v(" "),a("p",[t._v("Setting this to a invalid stytax "),a("span",{staticStyle:{color:"red"}},[t._v("doesn't")]),t._v(" have any effect.")]),t._v(" "),a("ul",[a("li",[a("RouterLink",{attrs:{to:"/guide/stylize.html"}},[t._v("View Detail")])],1)]),t._v(" "),a("hr",{staticClass:"footnotes-sep"}),t._v(" "),a("section",{staticClass:"footnotes"},[a("ol",{staticClass:"footnotes-list"},[a("li",{staticClass:"footnote-item",attrs:{id:"footnote1"}},[a("p",[t._v("This is footnote content "),a("a",{staticClass:"footnote-backref",attrs:{href:"#footnote-ref1"}},[t._v("↩︎")])])])])])],1)}),[],!1,null,null,null);s.default=i.exports}}]);