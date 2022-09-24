(window.webpackJsonp=window.webpackJsonp||[]).push([[26],{1165:function(e,t,n){"use strict";n.r(t);var s=n(1),a=Object(s.a)({},(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[n("p",[e._v("We welcome you to contribute! Here is a guide for you.")]),e._v(" "),n("h2",{attrs:{id:"clone-and-install-project"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#clone-and-install-project"}},[e._v("#")]),e._v(" Clone and Install project")]),e._v(" "),n("p",[e._v("Use Git to clone the project to the local, and use "),n("code",[e._v("yarn")]),e._v(" to install dependencies.")]),e._v(" "),n("div",{staticClass:"language-sh line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-sh"}},[n("code",[n("span",{pre:!0,attrs:{class:"token function"}},[e._v("git")]),e._v(" clone git@github.com:vuepress-theme-hope/vuepress-theme-hope.git\n\n"),n("span",{pre:!0,attrs:{class:"token function"}},[e._v("yarn")]),e._v("\n")])]),e._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[e._v("1")]),n("br"),n("span",{staticClass:"line-number"},[e._v("2")]),n("br"),n("span",{staticClass:"line-number"},[e._v("3")]),n("br")])]),n("div",{staticClass:"custom-block tip"},[n("p",{staticClass:"custom-block-title"},[e._v("Tips")]),e._v(" "),n("p",[e._v("If you have not installed yarn, please install it using "),n("code",[e._v("npm i -g yarn")]),e._v(".")])]),e._v(" "),n("h2",{attrs:{id:"project-file-structure"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#project-file-structure"}},[e._v("#")]),e._v(" Project File structure")]),e._v(" "),n("p",[e._v("The project is a monorepo, managed by "),n("code",[e._v("lerna")]),e._v(".")]),e._v(" "),n("ul",[n("li",[n("code",[e._v("docs")]),e._v(": place the documentation of each plugin and theme, each subfolder is a project")]),e._v(" "),n("li",[e._v("demo: theme demo project")]),e._v(" "),n("li",[e._v("packages: place the code of each plugin and theme, each subfolder is a project")])]),e._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v(".\n├── .github → Github config\n├── .husky → husky config\n│\n├── demo → Theme demo project\n│\n├── docs → document directory\n│ ├── active-hash → active-hash document\n│ ├── add-this → add-this document\n│ ├── comment → comment document\n│ ├── components → components document\n│ ├── copy-code → copy-code document\n│ ├── feed → feed document\n│ ├── git → git document\n│ ├── md-enhance → md-enhance document\n│ ├── photo-swipe → photo-swipe document\n│ ├── pwa → pwa document\n│ ├── reading-time → reading-time document\n│ ├── seo → seo document\n│ ├── sitemap → sitemap document\n│ └── theme → theme document\n│\n├── packages → project source code\n│ ├── active-hash → active-hash plugin\n│ ├── add-this → add-this plugin\n│ ├── comment → comment plugin\n│ ├── components → components plugin\n│ ├── copy-code → copy-code plugin\n│ ├── create → create-vuepress-theme-hope helper\n│ ├── feed → feed plugin\n│ ├── git → git plugin\n│ ├── md-enhance → md-enhance plugin\n│ ├── photo-swipe → photo-swipe plugin\n│ ├── pwa → pwa plugin\n│ ├── reading-time → reading-time plugin\n│ ├── seo → seo plugin\n│ ├── shared → shared file\n│ ├── smooth-scroll → smooth-scroll plugin\n│ ├── sitemap → sitemap plugin\n│ ├── theme → vuepress-theme-hope theme\n│ ├── theme-types → theme type definition\n│ └── vuepress-typings → vuepress type definition\n│\n├── scripts → command scripts\n│\n├── ... → some config files\n│\n├── LICENSE → License\n├── package.json → root package.json\n├── readme.md → project intro\n├── SECURITY.md → Security Policy\n│\n├── tsconfig.* → TypeScript config file\n│\n└── yarn.lock → yarn version lock file\n")])]),e._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[e._v("1")]),n("br"),n("span",{staticClass:"line-number"},[e._v("2")]),n("br"),n("span",{staticClass:"line-number"},[e._v("3")]),n("br"),n("span",{staticClass:"line-number"},[e._v("4")]),n("br"),n("span",{staticClass:"line-number"},[e._v("5")]),n("br"),n("span",{staticClass:"line-number"},[e._v("6")]),n("br"),n("span",{staticClass:"line-number"},[e._v("7")]),n("br"),n("span",{staticClass:"line-number"},[e._v("8")]),n("br"),n("span",{staticClass:"line-number"},[e._v("9")]),n("br"),n("span",{staticClass:"line-number"},[e._v("10")]),n("br"),n("span",{staticClass:"line-number"},[e._v("11")]),n("br"),n("span",{staticClass:"line-number"},[e._v("12")]),n("br"),n("span",{staticClass:"line-number"},[e._v("13")]),n("br"),n("span",{staticClass:"line-number"},[e._v("14")]),n("br"),n("span",{staticClass:"line-number"},[e._v("15")]),n("br"),n("span",{staticClass:"line-number"},[e._v("16")]),n("br"),n("span",{staticClass:"line-number"},[e._v("17")]),n("br"),n("span",{staticClass:"line-number"},[e._v("18")]),n("br"),n("span",{staticClass:"line-number"},[e._v("19")]),n("br"),n("span",{staticClass:"line-number"},[e._v("20")]),n("br"),n("span",{staticClass:"line-number"},[e._v("21")]),n("br"),n("span",{staticClass:"line-number"},[e._v("22")]),n("br"),n("span",{staticClass:"line-number"},[e._v("23")]),n("br"),n("span",{staticClass:"line-number"},[e._v("24")]),n("br"),n("span",{staticClass:"line-number"},[e._v("25")]),n("br"),n("span",{staticClass:"line-number"},[e._v("26")]),n("br"),n("span",{staticClass:"line-number"},[e._v("27")]),n("br"),n("span",{staticClass:"line-number"},[e._v("28")]),n("br"),n("span",{staticClass:"line-number"},[e._v("29")]),n("br"),n("span",{staticClass:"line-number"},[e._v("30")]),n("br"),n("span",{staticClass:"line-number"},[e._v("31")]),n("br"),n("span",{staticClass:"line-number"},[e._v("32")]),n("br"),n("span",{staticClass:"line-number"},[e._v("33")]),n("br"),n("span",{staticClass:"line-number"},[e._v("34")]),n("br"),n("span",{staticClass:"line-number"},[e._v("35")]),n("br"),n("span",{staticClass:"line-number"},[e._v("36")]),n("br"),n("span",{staticClass:"line-number"},[e._v("37")]),n("br"),n("span",{staticClass:"line-number"},[e._v("38")]),n("br"),n("span",{staticClass:"line-number"},[e._v("39")]),n("br"),n("span",{staticClass:"line-number"},[e._v("40")]),n("br"),n("span",{staticClass:"line-number"},[e._v("41")]),n("br"),n("span",{staticClass:"line-number"},[e._v("42")]),n("br"),n("span",{staticClass:"line-number"},[e._v("43")]),n("br"),n("span",{staticClass:"line-number"},[e._v("44")]),n("br"),n("span",{staticClass:"line-number"},[e._v("45")]),n("br"),n("span",{staticClass:"line-number"},[e._v("46")]),n("br"),n("span",{staticClass:"line-number"},[e._v("47")]),n("br"),n("span",{staticClass:"line-number"},[e._v("48")]),n("br"),n("span",{staticClass:"line-number"},[e._v("49")]),n("br"),n("span",{staticClass:"line-number"},[e._v("50")]),n("br"),n("span",{staticClass:"line-number"},[e._v("51")]),n("br"),n("span",{staticClass:"line-number"},[e._v("52")]),n("br"),n("span",{staticClass:"line-number"},[e._v("53")]),n("br"),n("span",{staticClass:"line-number"},[e._v("54")]),n("br"),n("span",{staticClass:"line-number"},[e._v("55")]),n("br")])]),n("h2",{attrs:{id:"document-modification"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#document-modification"}},[e._v("#")]),e._v(" Document modification")]),e._v(" "),n("p",[e._v("You can find the corresponding project in the docs folder so you can modify the corresponding Markdown directly.")]),e._v(" "),n("p",[e._v("After ensuring that the "),n("code",[e._v("yarn run lint")]),e._v(" and "),n("code",[e._v("yarn run lint:md")]),e._v(" commands emit no errors, you can commit to GitHub to open a PR.")]),e._v(" "),n("p",[e._v("To preview the project locally, since the docs are using local themes and plugins, you need to build the local project through "),n("code",[e._v("yarn run build")]),e._v(", and then start it with the corresponding command "),n("code",[e._v("yarn run docs/<project abbreviation>:serve")]),e._v(" in the root directory to start devServer.")]),e._v(" "),n("h2",{attrs:{id:"project-modification"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#project-modification"}},[e._v("#")]),e._v(" Project modification")]),e._v(" "),n("p",[e._v("The structure of each project is as follows:")]),e._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v(".\n├── lib → compiled output file\n│ │\n│ ├── client → client-side compiled code\n│ │\n│ ├── node → Node.js side compiled code\n│ │\n│ └── types → Type definition to be exported\n│\n└── src → source file\n  │\n  ├── client → client-side souce code\n  │\n  ├── node → Node.js side  soucecode\n  │\n  └── types → Type definition to be exported\n")])]),e._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[e._v("1")]),n("br"),n("span",{staticClass:"line-number"},[e._v("2")]),n("br"),n("span",{staticClass:"line-number"},[e._v("3")]),n("br"),n("span",{staticClass:"line-number"},[e._v("4")]),n("br"),n("span",{staticClass:"line-number"},[e._v("5")]),n("br"),n("span",{staticClass:"line-number"},[e._v("6")]),n("br"),n("span",{staticClass:"line-number"},[e._v("7")]),n("br"),n("span",{staticClass:"line-number"},[e._v("8")]),n("br"),n("span",{staticClass:"line-number"},[e._v("9")]),n("br"),n("span",{staticClass:"line-number"},[e._v("10")]),n("br"),n("span",{staticClass:"line-number"},[e._v("11")]),n("br"),n("span",{staticClass:"line-number"},[e._v("12")]),n("br"),n("span",{staticClass:"line-number"},[e._v("13")]),n("br"),n("span",{staticClass:"line-number"},[e._v("14")]),n("br"),n("span",{staticClass:"line-number"},[e._v("15")]),n("br"),n("span",{staticClass:"line-number"},[e._v("16")]),n("br")])]),n("p",[e._v("Since VuePress@v1 requires the client to export the plugin API through "),n("code",[e._v("module.exports")]),e._v(", we cannot export other types in the plugin entry file, so we point the type entrance to "),n("code",[e._v("lib/types")]),e._v(".")]),e._v(" "),n("p",[e._v("Besides, since the client side uses ES Module (import/export) and the Node.js side uses commonjs (require/exports), the code in the node and client folders cannot be cross-referenced.")]),e._v(" "),n("ul",[n("li",[n("code",[e._v("client")]),e._v(" folder stores the client code, compiled in esm format")]),e._v(" "),n("li",[n("code",[e._v("node")]),e._v(" folder stores the Node.js code, compiled in cjs format")]),e._v(" "),n("li",[n("code",[e._v("types")]),e._v(" folder can only store TypeScript types. It can be referenced by the client and node folders, and finally exported as a type definition to other packages.")])]),e._v(" "),n("h2",{attrs:{id:"project-operation-and-development"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#project-operation-and-development"}},[e._v("#")]),e._v(" Project operation and development")]),e._v(" "),n("h3",{attrs:{id:"how-to-build"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#how-to-build"}},[e._v("#")]),e._v(" How to build")]),e._v(" "),n("ul",[n("li",[e._v("Use "),n("code",[e._v("build")]),e._v(" and "),n("code",[e._v("watch")]),e._v(" commands provided by TypeScript to compile ts files, and output the compiled js file to the output directory.")]),e._v(" "),n("li",[e._v("Use "),n("code",[e._v("cpx")]),e._v(" package to copy and watch files in other formats from the source file to the output directory.")])]),e._v(" "),n("h3",{attrs:{id:"command"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#command"}},[e._v("#")]),e._v(" Command")]),e._v(" "),n("ol",[n("li",[n("p",[e._v("Build project: "),n("code",[e._v("yarn run build")])]),e._v(" "),n("p",[e._v("It will execute the two commands "),n("code",[e._v("yarn run build:copy")]),e._v(" and "),n("code",[e._v("yarn run build:ts")]),e._v(", corresponding to the two build steps.")])]),e._v(" "),n("li",[n("p",[e._v("Develop project: "),n("code",[e._v("yarn run dev")])]),e._v(" "),n("p",[e._v("It will execute the two commands "),n("code",[e._v("yarn run dev:copy")]),e._v(" and "),n("code",[e._v("yarn run dev:ts")]),e._v(", and execute and watch the two build steps.")])]),e._v(" "),n("li",[n("p",[e._v("Format project: "),n("code",[e._v("yarn run lint")])]),e._v(" "),n("p",[e._v("It will execute the two commands "),n("code",[e._v("yarn run lint:eslint")]),e._v(" and "),n("code",[e._v("yarn run lint:prettier")]),e._v(".")]),e._v(" "),n("p",[e._v("If you modify Markdown, you also need to run the "),n("code",[e._v("yarn run lint:md")]),e._v(" command.")])])]),e._v(" "),n("h2",{attrs:{id:"commit"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#commit"}},[e._v("#")]),e._v(" Commit")]),e._v(" "),n("p",[e._v("The project uses "),n("code",[e._v("husky")]),e._v(" and "),n("code",[e._v("lint-staged")]),e._v(" to add Git Hooks for verification:")]),e._v(" "),n("ul",[n("li",[n("p",[e._v("In "),n("code",[e._v("precommit")]),e._v(" stage: use "),n("code",[e._v("lint-staged")]),e._v(" to check the changed code with the corresponding Linter")]),e._v(" "),n("p",[e._v("This means that you need to ensure that your code is formatted by the project requirements and can pass Linter tests.")])]),e._v(" "),n("li",[n("p",[e._v("In "),n("code",[e._v("commit-msg")]),e._v(" stage: use "),n("code",[e._v("commitlint")]),e._v(" to verify the commit comment.")]),e._v(" "),n("p",[e._v("This means that you need to ensure that your commit comments comply with Semantic")])])]),e._v(" "),n("div",{staticClass:"custom-block tip"},[n("p",{staticClass:"custom-block-title"},[e._v("Tips")]),e._v(" "),n("p",[e._v("If you cannot pass the above Git Hooks, you will not be able to complete "),n("code",[e._v("git commit")]),e._v(".")]),e._v(" "),n("p",[e._v("If you have already contributed, but cannot complete the submission and don’t know how to fix it, you can add the "),n("code",[e._v("--no-verify")]),e._v(" flag when committing to bypass Git Hooks.")])])])}),[],!1,null,null,null);t.default=a.exports}}]);