(window.webpackJsonp=window.webpackJsonp||[]).push([[31],{558:function(e,t,o){"use strict";o.r(t);var a=o(1),v=Object(a.a)({},(function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[o("h2",{attrs:{id:"serverurl"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#serverurl"}},[e._v("#")]),e._v(" serverURL")]),e._v(" "),o("ul",[o("li",[e._v("Type: "),o("code",[e._v("string")])]),e._v(" "),o("li",[e._v("Required: Yes")])]),e._v(" "),o("p",[e._v("Waline server address url")]),e._v(" "),o("h2",{attrs:{id:"emoji"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#emoji"}},[e._v("#")]),e._v(" emoji")]),e._v(" "),o("ul",[o("li",[e._v("Type: "),o("code",[e._v("(string | WalineEmojiInfo)[] | false")])]),e._v(" "),o("li",[e._v("Default: "),o("code",[e._v("['//unpkg.com/@waline/emojis@1.0.1/weibo']")])])]),e._v(" "),o("p",[e._v("Emoji settings, for details see "),o("a",{attrs:{href:"https://waline.js.org/en/guide/client/emoji.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("Custom Emoji"),o("OutboundLink")],1)]),e._v(" "),o("h2",{attrs:{id:"dark"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#dark"}},[e._v("#")]),e._v(" dark")]),e._v(" "),o("ul",[o("li",[e._v("Type: "),o("code",[e._v("string | boolean")])]),e._v(" "),o("li",[e._v("Default: "),o("code",[e._v("false")])])]),e._v(" "),o("p",[e._v("Darkmode support")]),e._v(" "),o("ul",[o("li",[e._v("Setting a boolean will set the dark mode according to its value.")]),e._v(" "),o("li",[e._v("Set it to "),o("code",[e._v("'auto'")]),e._v(" will display darkmode due to device settings.")]),e._v(" "),o("li",[e._v("Filling in a CSS selector will enable darkmode only when the selector match waline ancestor nodes.")])]),e._v(" "),o("div",{staticClass:"custom-block tip"},[o("p",{staticClass:"custom-block-title"},[e._v("Examples")]),e._v(" "),o("ul",[o("li",[o("p",[o("strong",[e._v("Docusaurus")]),e._v(": It will enable darkmode by setting "),o("code",[e._v('data-theme="dark"')]),e._v(" on the "),o("code",[e._v("<html>")]),e._v(" tag itself. So you need to set "),o("code",[e._v("'html[data-theme=\"dark\"]'")]),e._v(" as "),o("code",[e._v("dark")]),e._v(" option.")])]),e._v(" "),o("li",[o("p",[o("strong",[e._v("hexo-theme-fluid")]),e._v(": It will enable darkmode by setting "),o("code",[e._v('data-user-color-scheme="dark"')]),e._v(" on the "),o("code",[e._v("<html>")]),e._v(" tag itself. So you need to set "),o("code",[e._v("'html[data-user-color-scheme=\"dark\"]'")]),e._v(" as "),o("code",[e._v("dark")]),e._v(" option.")])]),e._v(" "),o("li",[o("p",[o("strong",[e._v("vuepress-theme-hope")]),e._v(": It will enable darkmode by setting "),o("code",[e._v("theme-dark")]),e._v(" class on the "),o("code",[e._v("<body>")]),e._v(" tag itself. So you need to set "),o("code",[e._v("'bodyhtml.dark'")]),e._v(" as "),o("code",[e._v("dark")]),e._v(" option.")])])])]),e._v(" "),o("p",[e._v("For details of custom style and darkmode, please see "),o("a",{attrs:{href:"https://waline.js.org/en/guide/client/style.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("Custom Style"),o("OutboundLink")],1),e._v(".")]),e._v(" "),o("h2",{attrs:{id:"meta"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#meta"}},[e._v("#")]),e._v(" meta")]),e._v(" "),o("ul",[o("li",[e._v("Type: "),o("code",[e._v("string[]")])]),e._v(" "),o("li",[e._v("Default: "),o("code",[e._v("['nick','mail','link']")])])]),e._v(" "),o("p",[e._v("Reviewer attributes. Optional values: "),o("code",[e._v("'nick'")]),e._v(", "),o("code",[e._v("'mail'")]),e._v(", "),o("code",[e._v("'link'")])]),e._v(" "),o("h2",{attrs:{id:"requiredmeta"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#requiredmeta"}},[e._v("#")]),e._v(" requiredMeta")]),e._v(" "),o("ul",[o("li",[e._v("Type: "),o("code",[e._v("string[]")])]),e._v(" "),o("li",[e._v("Default: "),o("code",[e._v("[]")])])]),e._v(" "),o("p",[e._v("Set required fields, default anonymous, optional values:")]),e._v(" "),o("ul",[o("li",[o("code",[e._v("[]")])]),e._v(" "),o("li",[o("code",[e._v("['nick']")])]),e._v(" "),o("li",[o("code",[e._v("['nick','mail']")])])]),e._v(" "),o("h2",{attrs:{id:"login"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#login"}},[e._v("#")]),e._v(" login")]),e._v(" "),o("ul",[o("li",[e._v("Type: "),o("code",[e._v("string")])]),e._v(" "),o("li",[e._v("Default value: "),o("code",[e._v("'enable'")])])]),e._v(" "),o("p",[e._v("Login mode status, optional values:")]),e._v(" "),o("ul",[o("li",[o("code",[e._v("'enable'")]),e._v(": enable login (default)")]),e._v(" "),o("li",[o("code",[e._v("'disable'")]),e._v(": Login is disabled, users should fill in infomation to comment")]),e._v(" "),o("li",[o("code",[e._v("'force'")]),e._v(": Forced login, users must login to comment")])]),e._v(" "),o("h2",{attrs:{id:"wordlimit"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#wordlimit"}},[e._v("#")]),e._v(" wordLimit")]),e._v(" "),o("ul",[o("li",[e._v("Type: "),o("code",[e._v("number | [number, number]")])]),e._v(" "),o("li",[e._v("Default: "),o("code",[e._v("0")])])]),e._v(" "),o("p",[e._v("Comment word s limit. When a single number is filled in, it 's the maximum number of comment words. No limit when set to "),o("code",[e._v("0")]),e._v(".")]),e._v(" "),o("h2",{attrs:{id:"pagesize"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#pagesize"}},[e._v("#")]),e._v(" pageSize")]),e._v(" "),o("ul",[o("li",[e._v("Type: "),o("code",[e._v("number")])]),e._v(" "),o("li",[e._v("Default: "),o("code",[e._v("10")])])]),e._v(" "),o("p",[e._v("number of comments per page.")]),e._v(" "),o("h2",{attrs:{id:"copyright"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#copyright"}},[e._v("#")]),e._v(" copyright")]),e._v(" "),o("ul",[o("li",[e._v("Type: "),o("code",[e._v("boolean")])]),e._v(" "),o("li",[e._v("Default: "),o("code",[e._v("true")])])]),e._v(" "),o("p",[e._v("Whether show copyright and version in footer.")]),e._v(" "),o("div",{staticClass:"custom-block tip"},[o("p",{staticClass:"custom-block-title"},[e._v("Tips")]),e._v(" "),o("p",[e._v("We hope you can keep it on to support Waline.")])])])}),[],!1,null,null,null);t.default=v.exports}}]);