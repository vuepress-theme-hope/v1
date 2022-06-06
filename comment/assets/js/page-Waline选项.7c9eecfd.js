(window.webpackJsonp=window.webpackJsonp||[]).push([[32],{576:function(v,_,e){"use strict";e.r(_);var t=e(1),a=Object(t.a)({},(function(){var v=this,_=v.$createElement,e=v._self._c||_;return e("ContentSlotsDistributor",{attrs:{"slot-key":v.$parent.slotKey}},[e("h2",{attrs:{id:"serverurl"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#serverurl"}},[v._v("#")]),v._v(" serverURL")]),v._v(" "),e("ul",[e("li",[v._v("类型: "),e("code",[v._v("string")])]),v._v(" "),e("li",[v._v("必填: 是")])]),v._v(" "),e("p",[v._v("Waline 的服务端地址。")]),v._v(" "),e("h2",{attrs:{id:"emoji"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#emoji"}},[v._v("#")]),v._v(" emoji")]),v._v(" "),e("ul",[e("li",[v._v("类型: "),e("code",[v._v("(string | WalineEmojiInfo)[] | false")])]),v._v(" "),e("li",[v._v("默认值: "),e("code",[v._v("['//unpkg.com/@waline/emojis@1.0.1/weibo']")])])]),v._v(" "),e("p",[v._v("表情设置，详见 "),e("a",{attrs:{href:"https://waline.js.org/guide/client/emoji.html",target:"_blank",rel:"noopener noreferrer"}},[v._v("自定义表情"),e("OutboundLink")],1)]),v._v(" "),e("h2",{attrs:{id:"dark"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#dark"}},[v._v("#")]),v._v(" dark")]),v._v(" "),e("ul",[e("li",[v._v("类型: "),e("code",[v._v("string | boolean")])]),v._v(" "),e("li",[v._v("默认值: "),e("code",[v._v("false")])])]),v._v(" "),e("p",[v._v("暗黑模式适配。")]),v._v(" "),e("ul",[e("li",[v._v("设置布尔值会根据其值来设置暗黑模式。")]),v._v(" "),e("li",[v._v("设置 "),e("code",[v._v("'auto'")]),v._v(" 会根据设备暗黑模式自适应。")]),v._v(" "),e("li",[v._v("填入 CSS 选择器会在对应选择器生效时启用夜间模式。")])]),v._v(" "),e("div",{staticClass:"custom-block tip"},[e("p",{staticClass:"custom-block-title"},[v._v("针对不同主题的例子")]),v._v(" "),e("ul",[e("li",[e("p",[e("strong",[v._v("Docusaurus")]),v._v(": 它会在 "),e("code",[v._v("<html>")]),v._v(" 上通过设置 "),e("code",[v._v('data-theme="dark"')]),v._v(" 开启暗黑模式，那么你需要将 "),e("code",[v._v("dark")]),v._v(" 选项设置为 "),e("code",[v._v("'html[data-theme=\"dark\"]'")]),v._v("。")])]),v._v(" "),e("li",[e("p",[e("strong",[v._v("hexo-theme-fluid")]),v._v(": 它会在 "),e("code",[v._v("<html>")]),v._v(" 上通过设置 "),e("code",[v._v('data-user-color-scheme="dark"')]),v._v(" 开启暗黑模式。那么你需要将 "),e("code",[v._v("dark")]),v._v(" 选项设置为 "),e("code",[v._v("'html[data-user-color-scheme=\"dark\"]'")]),v._v("。")])]),v._v(" "),e("li",[e("p",[e("strong",[v._v("vuepress-theme-hope")]),v._v(": 它会在 "),e("code",[v._v("<body>")]),v._v(" 上添加"),e("code",[v._v("theme-dark")]),v._v(" class 来开启暗黑模式。那么你需要将 "),e("code",[v._v("dark")]),v._v(" 选项设置为 "),e("code",[v._v("bodyhtml.dark")]),v._v("。")])])])]),v._v(" "),e("p",[v._v("自定义样式与深色模式详见 "),e("a",{attrs:{href:"https://waline.js.org/guide/client/style.html",target:"_blank",rel:"noopener noreferrer"}},[v._v("自定义样式"),e("OutboundLink")],1),v._v("。")]),v._v(" "),e("h2",{attrs:{id:"meta"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#meta"}},[v._v("#")]),v._v(" meta")]),v._v(" "),e("ul",[e("li",[v._v("类型: "),e("code",[v._v("string[]")])]),v._v(" "),e("li",[v._v("默认值: "),e("code",[v._v("['nick', 'mail', 'link']")])])]),v._v(" "),e("p",[v._v("评论者相关属性。可选值: "),e("code",[v._v("'nick'")]),v._v(", "),e("code",[v._v("'mail'")]),v._v(", "),e("code",[v._v("'link'")])]),v._v(" "),e("h2",{attrs:{id:"requiredmeta"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#requiredmeta"}},[v._v("#")]),v._v(" requiredMeta")]),v._v(" "),e("ul",[e("li",[v._v("类型: "),e("code",[v._v("string[]")])]),v._v(" "),e("li",[v._v("默认值: "),e("code",[v._v("[]")])])]),v._v(" "),e("p",[v._v("设置"),e("strong",[v._v("必填项")]),v._v("，默认匿名，可选值:")]),v._v(" "),e("ul",[e("li",[e("code",[v._v("[]")])]),v._v(" "),e("li",[e("code",[v._v("['nick']")])]),v._v(" "),e("li",[e("code",[v._v("['nick', 'mail']")])])]),v._v(" "),e("h2",{attrs:{id:"login"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#login"}},[v._v("#")]),v._v(" login")]),v._v(" "),e("ul",[e("li",[v._v("类型: "),e("code",[v._v("string")])]),v._v(" "),e("li",[v._v("默认值: "),e("code",[v._v("'enable'")])])]),v._v(" "),e("p",[v._v("登录模式状态，可选值:")]),v._v(" "),e("ul",[e("li",[e("code",[v._v("'enable'")]),v._v(": 启用登录 (默认)")]),v._v(" "),e("li",[e("code",[v._v("'disable'")]),v._v(": 禁用登录，用户只能填写信息评论")]),v._v(" "),e("li",[e("code",[v._v("'force'")]),v._v(": 强制登录，用户必须注册并登录才可发布评论")])]),v._v(" "),e("h2",{attrs:{id:"wordlimit"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#wordlimit"}},[v._v("#")]),v._v(" wordLimit")]),v._v(" "),e("ul",[e("li",[v._v("类型: "),e("code",[v._v("number | [number, number]")])]),v._v(" "),e("li",[v._v("默认值: "),e("code",[v._v("0")])])]),v._v(" "),e("p",[v._v("评论字数限制。填入单个数字时为最大字数限制。设置为 "),e("code",[v._v("0")]),v._v(" 时无限制。")]),v._v(" "),e("h2",{attrs:{id:"pagesize"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#pagesize"}},[v._v("#")]),v._v(" pageSize")]),v._v(" "),e("ul",[e("li",[v._v("类型: "),e("code",[v._v("number")])]),v._v(" "),e("li",[v._v("默认值: "),e("code",[v._v("10")])])]),v._v(" "),e("p",[v._v("评论列表分页，每页条数。")]),v._v(" "),e("h2",{attrs:{id:"copyright"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#copyright"}},[v._v("#")]),v._v(" copyright")]),v._v(" "),e("ul",[e("li",[v._v("类型: "),e("code",[v._v("boolean")])]),v._v(" "),e("li",[v._v("默认值: "),e("code",[v._v("true")])]),v._v(" "),e("li",[v._v("必填: 否")])]),v._v(" "),e("p",[v._v("是否显示页脚版权信息。")]),v._v(" "),e("div",{staticClass:"custom-block tip"},[e("p",{staticClass:"custom-block-title"},[v._v("提示")]),v._v(" "),e("p",[v._v("我们希望你保持打开以支持 Waline。")])])])}),[],!1,null,null,null);_.default=a.exports}}]);