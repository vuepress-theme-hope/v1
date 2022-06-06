(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{458:function(t,s,e){"use strict";e.r(s);var a=e(1),n=Object(a.a)({},(function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("p",[t._v("You can have individual control over each feed item generation by configuring Frontmatter for each page.")]),t._v(" "),e("h2",{attrs:{id:"addition-and-removement"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#addition-and-removement"}},[t._v("#")]),t._v(" Addition and Removement")]),t._v(" "),e("p",[t._v("By default, all articles are added to the feed stream. To remove specific pages from the feed, you can set "),e("code",[t._v("feed: false")]),t._v(" in frontmatter.")]),t._v(" "),e("h2",{attrs:{id:"information-read-by-default"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#information-read-by-default"}},[t._v("#")]),t._v(" Information read by default")]),t._v(" "),e("p",[e("code",[t._v("page.except")]),t._v(" and the original content of the page are read during feed item generation.")]),t._v(" "),e("p",[t._v("The frontmatter options read in feed item generation and their corresponding meanings are as follows:")]),t._v(" "),e("h3",{attrs:{id:"title"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#title"}},[t._v("#")]),t._v(" title")]),t._v(" "),e("ul",[e("li",[t._v("Type: "),e("code",[t._v("string")])])]),t._v(" "),e("p",[t._v("Automatically generated by VuePress, defaults to the h1 content of the page")]),t._v(" "),e("h3",{attrs:{id:"description"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#description"}},[t._v("#")]),t._v(" description")]),t._v(" "),e("ul",[e("li",[t._v("Type: "),e("code",[t._v("string")])])]),t._v(" "),e("p",[t._v("Description of the page")]),t._v(" "),e("h3",{attrs:{id:"date"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#date"}},[t._v("#")]),t._v(" date")]),t._v(" "),e("ul",[e("li",[t._v("Type: "),e("code",[t._v("Date")])])]),t._v(" "),e("p",[t._v("Date when the page was published")]),t._v(" "),e("h3",{attrs:{id:"article"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#article"}},[t._v("#")]),t._v(" article")]),t._v(" "),e("ul",[e("li",[t._v("Type: "),e("code",[t._v("boolean")])])]),t._v(" "),e("p",[t._v("Whether the page is an article")]),t._v(" "),e("blockquote",[e("p",[t._v("If this is set to "),e("code",[t._v("false")]),t._v(", the page will not be included in the final feed.")])]),t._v(" "),e("h3",{attrs:{id:"copyright"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#copyright"}},[t._v("#")]),t._v(" copyright")]),t._v(" "),e("ul",[e("li",[t._v("Type: "),e("code",[t._v("string")])])]),t._v(" "),e("p",[t._v("Page copyright information")]),t._v(" "),e("h3",{attrs:{id:"image"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#image"}},[t._v("#")]),t._v(" image")]),t._v(" "),e("ul",[e("li",[t._v("Type: "),e("code",[t._v("string")])])]),t._v(" "),e("p",[t._v("Page cover/share image, should be full link or absolute link.")]),t._v(" "),e("h2",{attrs:{id:"frontmatter-options"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#frontmatter-options"}},[t._v("#")]),t._v(" FrontMatter Options")]),t._v(" "),e("h3",{attrs:{id:"feed-title"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#feed-title"}},[t._v("#")]),t._v(" feed.title")]),t._v(" "),e("ul",[e("li",[t._v("Type: "),e("code",[t._v("string")])])]),t._v(" "),e("p",[t._v("The title of the feed item")]),t._v(" "),e("h3",{attrs:{id:"feed-description"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#feed-description"}},[t._v("#")]),t._v(" feed.description")]),t._v(" "),e("ul",[e("li",[t._v("Type: "),e("code",[t._v("string")])])]),t._v(" "),e("p",[t._v("Description of the feed item")]),t._v(" "),e("h3",{attrs:{id:"feed-content"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#feed-content"}},[t._v("#")]),t._v(" feed.content")]),t._v(" "),e("ul",[e("li",[t._v("Type: "),e("code",[t._v("string")])])]),t._v(" "),e("p",[t._v("The content of the feed item")]),t._v(" "),e("h3",{attrs:{id:"feed-author"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#feed-author"}},[t._v("#")]),t._v(" feed.author")]),t._v(" "),e("ul",[e("li",[t._v("Type: "),e("code",[t._v("FeedAuthor[] | FeedAuthor")])])]),t._v(" "),e("p",[t._v("The author of the feed item")]),t._v(" "),e("details",{staticClass:"custom-block details"},[e("summary",[t._v("FeedAuthor format")]),t._v(" "),e("div",{staticClass:"language-ts line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-ts"}},[e("code",[e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("interface")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("FeedAuthor")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/**\n   * Author name\n   */")]),t._v("\n  name"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("?")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("string")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n  "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/**\n   * Author email\n   */")]),t._v("\n  email"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("?")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("string")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n  "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/**\n   * Author site\n   *\n   * @description json format only\n   */")]),t._v("\n  url"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("?")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("string")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n  "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/**\n   * Author avatar\n   *\n   * @description json format only\n   */")]),t._v("\n  avatar"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("?")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("string")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),t._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[t._v("1")]),e("br"),e("span",{staticClass:"line-number"},[t._v("2")]),e("br"),e("span",{staticClass:"line-number"},[t._v("3")]),e("br"),e("span",{staticClass:"line-number"},[t._v("4")]),e("br"),e("span",{staticClass:"line-number"},[t._v("5")]),e("br"),e("span",{staticClass:"line-number"},[t._v("6")]),e("br"),e("span",{staticClass:"line-number"},[t._v("7")]),e("br"),e("span",{staticClass:"line-number"},[t._v("8")]),e("br"),e("span",{staticClass:"line-number"},[t._v("9")]),e("br"),e("span",{staticClass:"line-number"},[t._v("10")]),e("br"),e("span",{staticClass:"line-number"},[t._v("11")]),e("br"),e("span",{staticClass:"line-number"},[t._v("12")]),e("br"),e("span",{staticClass:"line-number"},[t._v("13")]),e("br"),e("span",{staticClass:"line-number"},[t._v("14")]),e("br"),e("span",{staticClass:"line-number"},[t._v("15")]),e("br"),e("span",{staticClass:"line-number"},[t._v("16")]),e("br"),e("span",{staticClass:"line-number"},[t._v("17")]),e("br"),e("span",{staticClass:"line-number"},[t._v("18")]),e("br"),e("span",{staticClass:"line-number"},[t._v("19")]),e("br"),e("span",{staticClass:"line-number"},[t._v("20")]),e("br"),e("span",{staticClass:"line-number"},[t._v("21")]),e("br"),e("span",{staticClass:"line-number"},[t._v("22")]),e("br"),e("span",{staticClass:"line-number"},[t._v("23")]),e("br"),e("span",{staticClass:"line-number"},[t._v("24")]),e("br"),e("span",{staticClass:"line-number"},[t._v("25")]),e("br")])])]),t._v(" "),e("h3",{attrs:{id:"feed-contributor"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#feed-contributor"}},[t._v("#")]),t._v(" feed.contributor")]),t._v(" "),e("ul",[e("li",[t._v("Type: "),e("code",[t._v("FeedContributor[] | FeedContributor")])])]),t._v(" "),e("p",[t._v("Contributors to feed item")]),t._v(" "),e("details",{staticClass:"custom-block details"},[e("summary",[t._v("FeedContributor format")]),t._v(" "),e("div",{staticClass:"language-ts line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-ts"}},[e("code",[e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("interface")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("FeedContributor")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/**\n   * Author name\n   */")]),t._v("\n  name"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("?")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("string")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n  "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/**\n   * Author email\n   */")]),t._v("\n  email"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("?")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("string")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n  "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/**\n   * Author site\n   *\n   * @description json format only\n   */")]),t._v("\n  url"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("?")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("string")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n  "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/**\n   * Author avatar\n   *\n   * @description json format only\n   */")]),t._v("\n  avatar"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("?")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("string")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),t._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[t._v("1")]),e("br"),e("span",{staticClass:"line-number"},[t._v("2")]),e("br"),e("span",{staticClass:"line-number"},[t._v("3")]),e("br"),e("span",{staticClass:"line-number"},[t._v("4")]),e("br"),e("span",{staticClass:"line-number"},[t._v("5")]),e("br"),e("span",{staticClass:"line-number"},[t._v("6")]),e("br"),e("span",{staticClass:"line-number"},[t._v("7")]),e("br"),e("span",{staticClass:"line-number"},[t._v("8")]),e("br"),e("span",{staticClass:"line-number"},[t._v("9")]),e("br"),e("span",{staticClass:"line-number"},[t._v("10")]),e("br"),e("span",{staticClass:"line-number"},[t._v("11")]),e("br"),e("span",{staticClass:"line-number"},[t._v("12")]),e("br"),e("span",{staticClass:"line-number"},[t._v("13")]),e("br"),e("span",{staticClass:"line-number"},[t._v("14")]),e("br"),e("span",{staticClass:"line-number"},[t._v("15")]),e("br"),e("span",{staticClass:"line-number"},[t._v("16")]),e("br"),e("span",{staticClass:"line-number"},[t._v("17")]),e("br"),e("span",{staticClass:"line-number"},[t._v("18")]),e("br"),e("span",{staticClass:"line-number"},[t._v("19")]),e("br"),e("span",{staticClass:"line-number"},[t._v("20")]),e("br"),e("span",{staticClass:"line-number"},[t._v("21")]),e("br"),e("span",{staticClass:"line-number"},[t._v("22")]),e("br"),e("span",{staticClass:"line-number"},[t._v("23")]),e("br"),e("span",{staticClass:"line-number"},[t._v("24")]),e("br"),e("span",{staticClass:"line-number"},[t._v("25")]),e("br")])])]),t._v(" "),e("h3",{attrs:{id:"feed-guid"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#feed-guid"}},[t._v("#")]),t._v(" feed.guid")]),t._v(" "),e("ul",[e("li",[t._v("Type: "),e("code",[t._v("string")])])]),t._v(" "),e("p",[t._v("The identifier of feed item, used to identify the feed item.")]),t._v(" "),e("div",{staticClass:"custom-block note"},[e("p",{staticClass:"custom-block-title"},[t._v("Note")]),t._v(" "),e("p",[t._v("You should make sure this is globally unique.")])])])}),[],!1,null,null,null);s.default=n.exports}}]);