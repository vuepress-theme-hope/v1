(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{457:function(e,t,o){"use strict";o.r(t);var a=o(1),s=Object(a.a)({},(function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[o("p",[e._v("The plugin brings enhanced PWA support to VuePress "),o("sup",{staticClass:"footnote-ref"},[o("a",{attrs:{href:"#footnote1"}},[e._v("[1]")]),o("a",{staticClass:"footnote-anchor",attrs:{id:"footnote-ref1"}})]),e._v(".")]),e._v(" "),o("h2",{attrs:{id:"intro"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#intro"}},[e._v("#")]),e._v(" Intro")]),e._v(" "),o("p",[e._v("Service Worker "),o("sup",{staticClass:"footnote-ref"},[o("a",{attrs:{href:"#footnote2"}},[e._v("[2]")]),o("a",{staticClass:"footnote-anchor",attrs:{id:"footnote-ref2"}})]),e._v(" (SW for short) is mainly used to cache and proxy site content.")]),e._v(" "),o("p",[e._v("This plugin will automatically register Service Worker through "),o("code",[e._v("workbox-build")]),e._v(". To better control what the Service Worker can pre-cache, the plugin provides the following configurations.")]),e._v(" "),o("div",{staticClass:"custom-block tip"},[o("p",{staticClass:"custom-block-title"},[e._v("Tips")]),e._v(" "),o("p",[e._v("If you are an advanced user, you can also set "),o("code",[e._v("generateSwConfig")]),e._v(" directly to pass options to "),o("code",[e._v("workbox-build")]),e._v(".")])]),e._v(" "),o("h2",{attrs:{id:"cache-control"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#cache-control"}},[e._v("#")]),e._v(" Cache Control")]),e._v(" "),o("p",[e._v("Based on the requirement of installable "),o("sup",{staticClass:"footnote-ref"},[o("a",{attrs:{href:"#footnote3"}},[e._v("[3]")]),o("a",{staticClass:"footnote-anchor",attrs:{id:"footnote-ref3"}})]),e._v(", the plugin provides related options for cache control.")]),e._v(" "),o("h3",{attrs:{id:"default-cache"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#default-cache"}},[e._v("#")]),e._v(" Default cache")]),e._v(" "),o("p",[e._v("By default, the plugin will pre-cache all the "),o("code",[e._v("js")]),e._v(" "),o("code",[e._v("css")]),e._v(" and "),o("code",[e._v("svg")]),e._v(".And only homepage and 404 "),o("code",[e._v("html")]),e._v(" are cached.")]),e._v(" "),o("p",[e._v("At the same time, the plugin will cache font files: "),o("code",[e._v("**/*.{woff,woff2,eot,ttf,otf}")]),e._v(".")]),e._v(" "),o("h3",{attrs:{id:"image-cache"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#image-cache"}},[e._v("#")]),e._v(" Image Cache")]),e._v(" "),o("p",[e._v("You can cache site pictures by setting the "),o("code",[e._v("cachePic")]),e._v(" option to "),o("code",[e._v("true")]),e._v(".")]),e._v(" "),o("p",[e._v("If your site is not large and the pictures are mostly critical descriptions, and hope to be displayed in offline mode, please set this option to "),o("code",[e._v("true")]),e._v(".")]),e._v(" "),o("div",{staticClass:"custom-block info"},[o("p",{staticClass:"custom-block-title"},[e._v("Image recognition")]),e._v(" "),o("p",[e._v("We recognize images by file extension. Any files ending with "),o("code",[e._v(".png")]),e._v(", "),o("code",[e._v(".jpg")]),e._v(", "),o("code",[e._v(".jpeg")]),e._v(", "),o("code",[e._v(".gif")]),e._v(", "),o("code",[e._v(".bmp")]),e._v(", "),o("code",[e._v(".webp")]),e._v(" will be regarded as images.")])]),e._v(" "),o("h3",{attrs:{id:"html-cache"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#html-cache"}},[e._v("#")]),e._v(" HTML Cache")]),e._v(" "),o("p",[e._v("If you have small sites, and would like to make docusment fully offline available, you can set "),o("code",[e._v("cacheHTML")]),e._v(" to "),o("code",[e._v("true")]),e._v(" to cache all HTML files.")]),e._v(" "),o("div",{staticClass:"custom-block tip"},[o("p",{staticClass:"custom-block-title"},[e._v("Why only home and 404 page been cached by default?")]),e._v(" "),o("p",[e._v("Though VuePress generates HTML files through SSR"),o("sup",{staticClass:"footnote-ref"},[o("a",{attrs:{href:"#footnote4"}},[e._v("[4]")]),o("a",{staticClass:"footnote-anchor",attrs:{id:"footnote-ref4"}})]),e._v(" for all pages, these files are mainly used for SEO"),o("sup",{staticClass:"footnote-ref"},[o("a",{attrs:{href:"#footnote5"}},[e._v("[5]")]),o("a",{staticClass:"footnote-anchor",attrs:{id:"footnote-ref5"}})]),e._v(" and allow you to directly configure the backend without SPA"),o("sup",{staticClass:"footnote-ref"},[o("a",{attrs:{href:"#footnote6"}},[e._v("[6]")]),o("a",{staticClass:"footnote-anchor",attrs:{id:"footnote-ref6"}})]),e._v(" Visit any link.")]),e._v(" "),o("p",[e._v("VuePress is essentially a SPA. This means that you only need to cache the home page and enter from the home page to access all pages normally. Therefore, not caching other HTML by default can effectively reduce the cache size (40% smaller in size) and speed up the SW update speed.")]),e._v(" "),o("p",[e._v("But this also has the disadvantage. If the user enters the site directly from a non-home page, the HTML file for the first page still needs to be loaded from the internet. Also, in offline environment, users can only enter through the homepage and then navigate to the corresponding page by themselves. If they directly access a link, an inaccessible prompt will appear.")])]),e._v(" "),o("h3",{attrs:{id:"size-control"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#size-control"}},[e._v("#")]),e._v(" Size Control")]),e._v(" "),o("p",[e._v("To prevent large files from being included in the pre-cache list, any files larger than 2MB or pictures larger than 1MB will be deleted.")]),e._v(" "),o("p",[e._v("You can customize the maximum file size of the cache (unit: KB) with the "),o("code",[e._v("maxSize")]),e._v(" option, or change the size limit of the picture (unit: KB) with "),o("code",[e._v("maxPicSize")]),e._v(".")]),e._v(" "),o("h2",{attrs:{id:"update-control"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#update-control"}},[e._v("#")]),e._v(" Update Control")]),e._v(" "),o("p",[e._v("We provide the "),o("code",[e._v("update")]),e._v(" option to control how users receive updates.")]),e._v(" "),o("p",[e._v("The default value of the "),o("code",[e._v("update")]),e._v(" option is "),o("code",[e._v('"available"')]),e._v(", which means that when new content available, the new SW will be installed silently in the background, and a pop-up window will prompt the user that the new content is ready after SW finish installing. Users can choose whether to refresh immediately to view new content.")]),e._v(" "),o("p",[e._v("Under the default behavior, users will still read old content before the SW is ready and they will not be prompted. If your project is still in building stage and you want to alert the user that he may be reading outdated content, you can set this to "),o("code",[e._v('"hint"')]),e._v(". This allows users to be notified that new content has been published within seconds after visiting docs. But the negative effect of this is that if the user chooses to update before the new SW is ready, he will need to get all the resources of the page from the internet before the new SW installs and controls the page.")]),e._v(" "),o("p",[e._v("If your docs are stable, or you’re hosting a blog and don’t care much about users receiving the latest version right away, you can set this to "),o("code",[e._v('"disabled"')]),e._v(", which means that the new SW will be installed completely silently in the background and start waiting, when the pages controlled by the old version SW are all closed, the new SW will start to take control and provide users with new content the next time users visit. This setting can prevent users from being disturbed by the pop-up window in the bottom right corner during the visit.")]),e._v(" "),o("p",[e._v("To speed up user access under weak or no network conditions through SW, but also want users to always access new content, you can set this option to "),o("code",[e._v('"force"')]),e._v(". The behavior of this option is to unregister old SW as soon as a new SW is detected and refresh the page to ensure the user is browsing the latest content. But we strongly recommend not using this option unless necessary, as after a new SW is released, all users will experience unexpected sudden refresh within seconds after entering the site, and they will have to access the document over the internet and install the whole latest SW.")]),e._v(" "),o("h3",{attrs:{id:"update-prompt-popup"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#update-prompt-popup"}},[e._v("#")]),e._v(" Update Prompt Popup")]),e._v(" "),o("p",[e._v("When new content is detected (new SW detected), an update prompt popup will appear in the bottom right corner and allow the user to refresh and apply.")]),e._v(" "),o("div",{staticClass:"custom-block tip"},[o("p",{staticClass:"custom-block-title"},[e._v("custom popup")]),e._v(" "),o("p",[e._v("If you are not satisfied with the default popup, you can write your own component. You need to register your own popup component globally and pass the name of the component to the "),o("code",[e._v("hintComponent")]),e._v(" option.")])]),e._v(" "),o("h3",{attrs:{id:"update-ready-popup"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#update-ready-popup"}},[e._v("#")]),e._v(" Update Ready Popup")]),e._v(" "),o("p",[e._v("When the new content is ready (the new SW installed successfully and started waiting), the update ready popup will appear in the bottom right corner and allow the user to refresh and apply.")]),e._v(" "),o("div",{staticClass:"custom-block tip"},[o("p",{staticClass:"custom-block-title"},[e._v("custom popup")]),e._v(" "),o("p",[e._v("If you are not satisfied with the default popup, you can write your own component. You need to register your popup component globally and pass the name of the component to the "),o("code",[e._v("updateComponent")]),e._v(" option.")])]),e._v(" "),o("h2",{attrs:{id:"manifest-generation"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#manifest-generation"}},[e._v("#")]),e._v(" Manifest Generation")]),e._v(" "),o("p",[e._v("To ensure the installability of PWA, the site needs to generate a manifest file and declare a valid manifest file address "),o("sup",{staticClass:"footnote-ref"},[o("a",{attrs:{href:"#footnote7"}},[e._v("[7]")]),o("a",{staticClass:"footnote-anchor",attrs:{id:"footnote-ref7"}})]),e._v(" through "),o("code",[e._v("<link>")]),e._v(".")]),e._v(" "),o("p",[e._v("The plugin will automatically generate the Manifest file "),o("code",[e._v("manifest.webmanifest")]),e._v(" for you in the output directory, and will also add the manifest address statement to each HTML "),o("code",[e._v("<head>")]),e._v(".")]),e._v(" "),o("p",[e._v("If you already have a "),o("code",[e._v("manifest.webmanifest")]),e._v(" or "),o("code",[e._v("manifest.json")]),e._v(" in "),o("code",[e._v(".vuepress/public")]),e._v(", the plugin will read and merge it into the final manifest.")]),e._v(" "),o("h3",{attrs:{id:"automatic-generation"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#automatic-generation"}},[e._v("#")]),e._v(" Automatic Generation")]),e._v(" "),o("p",[e._v("The plugin will use the information from the VuePress plugin API and set the fallback for fields in manifest as much as possible. So you don’t need to set most of the manifest fields.")]),e._v(" "),o("p",[e._v("If the following fields are not set, they will try to fallback to the following preset values in order.")]),e._v(" "),o("table",[o("thead",[o("tr",[o("th",[e._v("Options")]),e._v(" "),o("th",[e._v("Default value")])])]),e._v(" "),o("tbody",[o("tr",[o("td",[e._v("name")]),e._v(" "),o("td",[o("code",[e._v("siteConfig.title")]),e._v(" || "),o("code",[e._v("siteConfig.locales['/'].title")]),e._v(" || "),o("code",[e._v('"Site"')])])]),e._v(" "),o("tr",[o("td",[e._v("short_name")]),e._v(" "),o("td",[o("code",[e._v("siteConfig.title")]),e._v(" || "),o("code",[e._v("siteConfig.locales['/'].title")]),e._v(" || "),o("code",[e._v('"Site"')])])]),e._v(" "),o("tr",[o("td",[e._v("description")]),e._v(" "),o("td",[o("code",[e._v("siteConfig.description")]),e._v(" || "),o("code",[e._v("siteConfig.locales['/'].description")]),e._v(" || "),o("code",[e._v('"A site built with vuepress"')])])]),e._v(" "),o("tr",[o("td",[e._v("lang")]),e._v(" "),o("td",[o("code",[e._v("siteConfig.locales['/'].lang")]),e._v(" || "),o("code",[e._v('"en-US"')])])]),e._v(" "),o("tr",[o("td",[e._v("start_url")]),e._v(" "),o("td",[o("code",[e._v("siteConfig.base")])])]),e._v(" "),o("tr",[o("td",[e._v("scope")]),e._v(" "),o("td",[o("code",[e._v("siteConfig.base")])])]),e._v(" "),o("tr",[o("td",[e._v("display")]),e._v(" "),o("td",[o("code",[e._v('"standalone"')])])]),e._v(" "),o("tr",[o("td",[e._v("theme_color")]),e._v(" "),o("td",[o("code",[e._v('"#46bd87"')])])]),e._v(" "),o("tr",[o("td",[e._v("background_color")]),e._v(" "),o("td",[o("code",[e._v('"#ffffff"')])])]),e._v(" "),o("tr",[o("td",[e._v("orientation")]),e._v(" "),o("td",[o("code",[e._v('"portrait-primary"')])])]),e._v(" "),o("tr",[o("td",[e._v("prefer_related_applications")]),e._v(" "),o("td",[o("code",[e._v("false")])])])])]),e._v(" "),o("p",[e._v("For complete configuration items, please see "),o("a",{attrs:{href:"https://github.com/vuepress-theme-hope/vuepress-theme-hope-v1/blob/main/packages/pwa2/src/shared/manifest.d.ts",target:"_blank",rel:"noopener noreferrer"}},[e._v("Manifest Type Definition File"),o("OutboundLink")],1),e._v(".")]),e._v(" "),o("h3",{attrs:{id:"manual-config"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#manual-config"}},[e._v("#")]),e._v(" Manual Config")]),e._v(" "),o("p",[e._v("You can manually specify the contents of the manifest in the "),o("code",[e._v("manifest")]),e._v(" option.")]),e._v(" "),o("div",{staticClass:"custom-block tip"},[o("p",{staticClass:"custom-block-title"},[e._v("Priority")]),e._v(" "),o("p",[o("code",[e._v("manifest")]),e._v(" option has the highest priority, followed by manifest files that may exist in the "),o("code",[e._v("public")]),e._v(" directory.")])]),e._v(" "),o("p",[o("strong",[e._v("You should at least set a valid icon through "),o("code",[e._v("manifest.icons")]),e._v(" or other icon related options in the PWA plugin.")])]),e._v(" "),o("div",{staticClass:"custom-block warning"},[o("p",{staticClass:"custom-block-title"},[e._v("Note")]),e._v(" "),o("p",[e._v("The installability "),o("sup",{staticClass:"footnote-ref"},[o("a",{attrs:{href:"#footnote3"}},[e._v("[3:1]")]),o("a",{staticClass:"footnote-anchor",attrs:{id:"footnote-ref3:1"}})]),e._v(" specification requires at least one valid icon to be declared in the manifest.")]),e._v(" "),o("p",[e._v("So if you do not configure "),o("code",[e._v("manifest.icons")]),e._v(", visitors can only enjoy the offline accessibility brought by the Service Worker cache, while cannot install your site as a PWA.")]),e._v(" "),o("p",[e._v("Besides the plugin does not process anything in the manifest by default, but outputs them as-is. This means that if you plan to deploy to a subdirectory, you should append the URL prefix to manifest Urls yourself.")]),e._v(" "),o("p",[e._v("If everything you need is all under "),o("code",[e._v("base")]),e._v(" directory, you can set "),o("code",[e._v("appendBase: true")]),e._v(" in plugin options to let the plugin append "),o("code",[e._v("base")]),e._v(" to any links in manifest.")])]),e._v(" "),o("h2",{attrs:{id:"other-options"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#other-options"}},[e._v("#")]),e._v(" Other Options")]),e._v(" "),o("p",[e._v("The plugin also provides other PWA-related options, such as Microsoft tile icon and color settings, Apple icon and so on.")]),e._v(" "),o("p",[e._v("You can set them as needed. For detailed options, please see "),o("RouterLink",{attrs:{to:"/config.html"}},[e._v("Configuration Page")]),e._v(".")],1),e._v(" "),o("h2",{attrs:{id:"further-reading"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#further-reading"}},[e._v("#")]),e._v(" Further Reading")]),e._v(" "),o("p",[e._v("For more details, please see:")]),e._v(" "),o("ul",[o("li",[o("a",{attrs:{href:"https://web.dev/progressive-web-apps/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Google PWA"),o("OutboundLink")],1)]),e._v(" "),o("li",[o("a",{attrs:{href:"https://developer.mozilla.org/en-US/docs/Web/Progressive_web_apps",target:"_blank",rel:"noopener noreferrer"}},[e._v("MDN PWA"),o("OutboundLink")],1)]),e._v(" "),o("li",[o("a",{attrs:{href:"https://w3c.github.io/manifest/",target:"_blank",rel:"noopener noreferrer"}},[e._v("W3C Manifest Specification"),o("OutboundLink")],1)])]),e._v(" "),o("hr",{staticClass:"footnotes-sep"}),e._v(" "),o("section",{staticClass:"footnotes"},[o("ol",{staticClass:"footnotes-list"},[o("li",{staticClass:"footnote-item",attrs:{id:"footnote1"}},[o("p",[o("strong",[e._v("PWA introduction")])]),e._v(" "),o("p",[e._v("PWA, full name Progressive Web app. PWA standard is stipulated by W3C.")]),e._v(" "),o("p",[e._v("It allows sites to install the site as an App on supported platform through a browser that supports this feature. "),o("a",{staticClass:"footnote-backref",attrs:{href:"#footnote-ref1"}},[e._v("↩︎")])])]),e._v(" "),o("li",{staticClass:"footnote-item",attrs:{id:"footnote2"}},[o("p",[o("strong",[e._v("Service Worker Introduction")])]),e._v(" "),o("ol",[o("li",[o("p",[e._v("The Service Worker will get and cache all the files registered in it during the registration process.")])]),e._v(" "),o("li",[o("p",[e._v("After the registration complete, the Service Worker is activated, and starts to proxy and control all your requests.")])]),e._v(" "),o("li",[o("p",[e._v("Whenever you want to initiate an access request through the browser, the Service Worker will check whether it exists in its own cache list, if it exists, it will directly return the cached result, otherwise it will call its own fetch method to get it. You can use a custom fetch method to fully control the result of the request for resources in the web page, such as providing a fallback web page when offline.")])]),e._v(" "),o("li",[o("p",[e._v("Every time the user reopens the site, the Service Worker will request to the link when it was registered. If a new version of Service Worker is detected, it will update itself and start caching the list of resources registered in the new Service Worker . After the content update is successfully obtained, the Service Worker will trigger the "),o("code",[e._v("update")]),e._v(" event. The user can be notified through this event, for example, a pop-up window will be displayed in the lower right corner, prompting the user that new content is available and allowing the user to trigger an update.")])])]),e._v(" "),o("a",{staticClass:"footnote-backref",attrs:{href:"#footnote-ref2"}},[e._v("↩︎")])]),e._v(" "),o("li",{staticClass:"footnote-item",attrs:{id:"footnote3"}},[o("p",[o("strong",[e._v("Installable")])]),e._v(" "),o("p",[e._v("To let the site be registered as a PWA, the site needs to successfully register a valid service worker by itself, and at the same time add a valid manifest file and declare it.")]),e._v(" "),o("p",[e._v("Each platform or browser has requirements for the size of the Service Worker cache. When the file size of the Service Worker cache is too large, the site will be marked as not installable. For Safari, the threshold is 50 MB, a few browsers will set less or more values (30MB, 70MB, 80MB), and Chrome will mark the threshold at 100 MB.")]),e._v(" "),o("p",[e._v("The manifest file should contain at least "),o("code",[e._v("name")]),e._v(" (or "),o("code",[e._v("short_name")]),e._v(") "),o("code",[e._v("icons")]),e._v(" "),o("code",[e._v("start_url")])]),e._v(" "),o("div",{staticClass:"custom-block note"},[o("p",{staticClass:"custom-block-title"},[e._v("Note")]),e._v(" "),o("p",[e._v("Starting from Chrome 93, Service Worker must contain effective fetch events to control offline requests.")]),e._v(" "),o("p",[e._v("However, currently the plugin does not contain relevant processing logic by default, so on Android devices with Chrome 93 or later, the site will not pop up an installation prompt.")])]),e._v(" "),o("a",{staticClass:"footnote-backref",attrs:{href:"#footnote-ref3"}},[e._v("↩︎")]),e._v(" "),o("a",{staticClass:"footnote-backref",attrs:{href:"#footnote-ref3:1"}},[e._v("↩︎")])]),e._v(" "),o("li",{staticClass:"footnote-item",attrs:{id:"footnote4"}},[o("p",[o("strong",[e._v("SSR")]),e._v(": "),o("strong",[e._v("S")]),e._v("erver "),o("strong",[e._v("S")]),e._v("ide "),o("strong",[e._v("R")]),e._v("endering, "),o("a",{staticClass:"footnote-backref",attrs:{href:"#footnote-ref4"}},[e._v("↩︎")])])]),e._v(" "),o("li",{staticClass:"footnote-item",attrs:{id:"footnote5"}},[o("p",[o("strong",[e._v("SEO")]),e._v(": "),o("strong",[e._v("S")]),e._v("earch "),o("strong",[e._v("E")]),e._v("ngine "),o("strong",[e._v("O")]),e._v("ptimization. "),o("a",{staticClass:"footnote-backref",attrs:{href:"#footnote-ref5"}},[e._v("↩︎")])])]),e._v(" "),o("li",{staticClass:"footnote-item",attrs:{id:"footnote6"}},[o("p",[o("strong",[e._v("SPA")]),e._v(": "),o("strong",[e._v("S")]),e._v("ingle "),o("strong",[e._v("P")]),e._v("age "),o("strong",[e._v("A")]),e._v("pplication, most of them only have the homepage, and use history mode to handle routing instead of actually navigating between pages. "),o("a",{staticClass:"footnote-backref",attrs:{href:"#footnote-ref6"}},[e._v("↩︎")])])]),e._v(" "),o("li",{staticClass:"footnote-item",attrs:{id:"footnote7"}},[o("p",[o("strong",[e._v("Manifest File")])]),e._v(" "),o("p",[e._v("The manifest file uses the JSON format and is responsible for declaring various information of the PWA, such as name, description, icon, and shortcut actions.")]),e._v(" "),o("p",[e._v("In order for your site to be registered as a PWA, you need to meet the basic specifications of the manifest to make the browser consider the site as an installable PWA and allow users to install it.")]),e._v(" "),o("div",{staticClass:"custom-block info"},[o("p",{staticClass:"custom-block-title"},[e._v("Info")]),e._v(" "),o("p",[e._v("For Manifest standards and specifications, please see "),o("a",{attrs:{href:"https://w3c.github.io/manifest/",target:"_blank",rel:"noopener noreferrer"}},[e._v("W3C Manifest"),o("OutboundLink")],1)])]),e._v(" "),o("a",{staticClass:"footnote-backref",attrs:{href:"#footnote-ref7"}},[e._v("↩︎")])])])])])}),[],!1,null,null,null);t.default=s.exports}}]);