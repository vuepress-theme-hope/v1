(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{456:function(e,t,a){"use strict";a.r(t);var n=a(1),s=Object(n.a)({},(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("p",[e._v("The channel option is used to config the feed channel. The configurable options and default value are as follows:")]),e._v(" "),a("h2",{attrs:{id:"channel-title"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#channel-title"}},[e._v("#")]),e._v(" channel.title")]),e._v(" "),a("ul",[a("li",[e._v("Type: "),a("code",[e._v("string")])]),e._v(" "),a("li",[e._v("Default: "),a("code",[e._v("SiteConfig.title")])])]),e._v(" "),a("p",[e._v("Channel title")]),e._v(" "),a("h2",{attrs:{id:"channel-link"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#channel-link"}},[e._v("#")]),e._v(" channel.link")]),e._v(" "),a("ul",[a("li",[e._v("Type: "),a("code",[e._v("string")])]),e._v(" "),a("li",[e._v("Default: Deployment link (generated by "),a("code",[e._v("options.hostname")]),e._v(" and "),a("code",[e._v("context.base")]),e._v(")")])]),e._v(" "),a("p",[e._v("Channel address")]),e._v(" "),a("h2",{attrs:{id:"channel-desciption"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#channel-desciption"}},[e._v("#")]),e._v(" channel.desciption")]),e._v(" "),a("ul",[a("li",[e._v("Type: "),a("code",[e._v("string")])]),e._v(" "),a("li",[e._v("Default: "),a("code",[e._v("SiteConfig.description")])])]),e._v(" "),a("p",[e._v("Channel description")]),e._v(" "),a("h2",{attrs:{id:"channel-language"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#channel-language"}},[e._v("#")]),e._v(" channel.language")]),e._v(" "),a("ul",[a("li",[a("p",[e._v("Type: "),a("code",[e._v("string")])])]),e._v(" "),a("li",[a("p",[e._v("Default:")]),e._v(" "),a("ul",[a("li",[a("code",[e._v("siteConfig.locales['/'].lang")])]),e._v(" "),a("li",[e._v("If the above is not provided, fall back to "),a("code",[e._v('"en-US"')])])])])]),e._v(" "),a("p",[e._v("The language of the channel")]),e._v(" "),a("h2",{attrs:{id:"channel-copyright"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#channel-copyright"}},[e._v("#")]),e._v(" channel.copyright")]),e._v(" "),a("ul",[a("li",[a("p",[e._v("Type: "),a("code",[e._v("string")])])]),e._v(" "),a("li",[a("p",[e._v("Default:")]),e._v(" "),a("ul",[a("li",[e._v("Try to read the "),a("code",[e._v("author.name")]),e._v(" in channel options, and fall back to "),a("code",[e._v("Copyright by $author")])])])]),e._v(" "),a("li",[a("p",[e._v("Recommended to set manually: "),a("strong",[e._v("Yes")])])])]),e._v(" "),a("p",[e._v("Channel copyright information")]),e._v(" "),a("h2",{attrs:{id:"channel-pubdate"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#channel-pubdate"}},[e._v("#")]),e._v(" channel.pubDate")]),e._v(" "),a("ul",[a("li",[e._v("Type: "),a("code",[e._v("string")]),e._v(" (must be a valid Date ISOString)")]),e._v(" "),a("li",[e._v("Default: time when the plugin is called each time")]),e._v(" "),a("li",[e._v("Recommended to set manually: "),a("strong",[e._v("Yes")])])]),e._v(" "),a("p",[e._v("Publish date of the Channe")]),e._v(" "),a("h2",{attrs:{id:"channel-lastupdated"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#channel-lastupdated"}},[e._v("#")]),e._v(" channel.lastUpdated")]),e._v(" "),a("ul",[a("li",[e._v("Type: "),a("code",[e._v("string")]),e._v(" (must be a valid Date ISOString)")]),e._v(" "),a("li",[e._v("Default: time when the plugin is called each time")])]),e._v(" "),a("p",[e._v("Last update time of channel content")]),e._v(" "),a("h2",{attrs:{id:"channel-ttl"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#channel-ttl"}},[e._v("#")]),e._v(" channel.ttl")]),e._v(" "),a("ul",[a("li",[e._v("Type: "),a("code",[e._v("number")])]),e._v(" "),a("li",[e._v("Recommended to set manually: "),a("strong",[e._v("Yes")])])]),e._v(" "),a("p",[e._v("The effective time of the content. It’s the time to keep the cache after request without making new requests.")]),e._v(" "),a("h2",{attrs:{id:"channel-image"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#channel-image"}},[e._v("#")]),e._v(" channel.image")]),e._v(" "),a("ul",[a("li",[e._v("Type: "),a("code",[e._v("string")])]),e._v(" "),a("li",[e._v("Recommended to set manually: "),a("strong",[e._v("Yes")])])]),e._v(" "),a("p",[e._v("A picture presenting the channel. A square picture with a size not smaller than 512×512 is recommended.")]),e._v(" "),a("h2",{attrs:{id:"channel-icon"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#channel-icon"}},[e._v("#")]),e._v(" channel.icon")]),e._v(" "),a("ul",[a("li",[e._v("Type: "),a("code",[e._v("string")])]),e._v(" "),a("li",[e._v("Recommended to set manually: "),a("strong",[e._v("Yes")])])]),e._v(" "),a("p",[e._v("An icon representing a channel, a square picture, with not less than 128×128 in size, and transparent background color is recommended .")]),e._v(" "),a("h2",{attrs:{id:"channel-author"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#channel-author"}},[e._v("#")]),e._v(" channel.author")]),e._v(" "),a("ul",[a("li",[e._v("Type: "),a("code",[e._v("FeedAuthor")])]),e._v(" "),a("li",[e._v("Recommended to set manually: "),a("strong",[e._v("Yes")])])]),e._v(" "),a("p",[e._v("The author of the channel.")]),e._v(" "),a("details",{staticClass:"custom-block details"},[a("summary",[e._v("FeedAuthor format")]),e._v(" "),a("div",{staticClass:"language-ts line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-ts"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("interface")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[e._v("FeedAuthor")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{")]),e._v("\n  "),a("span",{pre:!0,attrs:{class:"token comment"}},[e._v("/** Author name */")]),e._v("\n  name"),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token builtin"}},[e._v("string")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v("\n  "),a("span",{pre:!0,attrs:{class:"token comment"}},[e._v("/** Author’s email */")]),e._v("\n  email"),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("?")]),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token builtin"}},[e._v("string")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v("\n  "),a("span",{pre:!0,attrs:{class:"token comment"}},[e._v("/** Author’s site */")]),e._v("\n  url"),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("?")]),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token builtin"}},[e._v("string")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v("\n  "),a("span",{pre:!0,attrs:{class:"token comment"}},[e._v("/**\n   * Author’s avatar address\n   *\n   * Square, preferably not less than 128×128 with transparent background\n   */")]),e._v("\n  avator"),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("?")]),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token builtin"}},[e._v("string")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("}")]),e._v("\n")])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br"),a("span",{staticClass:"line-number"},[e._v("2")]),a("br"),a("span",{staticClass:"line-number"},[e._v("3")]),a("br"),a("span",{staticClass:"line-number"},[e._v("4")]),a("br"),a("span",{staticClass:"line-number"},[e._v("5")]),a("br"),a("span",{staticClass:"line-number"},[e._v("6")]),a("br"),a("span",{staticClass:"line-number"},[e._v("7")]),a("br"),a("span",{staticClass:"line-number"},[e._v("8")]),a("br"),a("span",{staticClass:"line-number"},[e._v("9")]),a("br"),a("span",{staticClass:"line-number"},[e._v("10")]),a("br"),a("span",{staticClass:"line-number"},[e._v("11")]),a("br"),a("span",{staticClass:"line-number"},[e._v("12")]),a("br"),a("span",{staticClass:"line-number"},[e._v("13")]),a("br"),a("span",{staticClass:"line-number"},[e._v("14")]),a("br")])]),a("h2",{attrs:{id:"channel-hub"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#channel-hub"}},[e._v("#")]),e._v(" channel.hub")]),e._v(" "),a("ul",[a("li",[e._v("Type: "),a("code",[e._v("string")])])]),e._v(" "),a("p",[e._v("Link to Websub. Websub requires a server backend, which is inconsistent with VuePress, so ignore it if there is no special need.")]),e._v(" "),a("div",{staticClass:"custom-block info"},[a("p",{staticClass:"custom-block-title"},[e._v("WebSub")]),e._v(" "),a("p",[e._v("For details, see "),a("a",{attrs:{href:"https://w3c.github.io/websub/#subscription-migration",target:"_blank",rel:"noopener noreferrer"}},[e._v("Websub"),a("OutboundLink")],1),e._v(".")])])])])}),[],!1,null,null,null);t.default=s.exports}}]);