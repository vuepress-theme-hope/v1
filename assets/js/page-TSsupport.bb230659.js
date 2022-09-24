(window.webpackJsonp=window.webpackJsonp||[]).push([[89],{1187:function(s,t,e){"use strict";e.r(t);var a=e(1),n=Object(a.a)({},(function(){var s=this,t=s.$createElement,e=s._self._c||t;return e("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[e("p",[s._v("Most of the files of vuepress-theme-hope are written using TypeScript, so vuepress-theme-hope can also bring native TypeScript support to your VuePress project, you only need to set "),e("code",[s._v("themeConfig.typescript")]),s._v(" to "),e("code",[s._v("true")]),s._v(" so that support for "),e("code",[s._v("typescript")]),s._v(" can be turned on.")]),s._v(" "),e("p",[s._v("This means you can use "),e("code",[s._v("enhanceAppFiles.ts")]),s._v(" and use TypeScript in both your vue components and Markdown files.")]),s._v(" "),e("p",[s._v("To pass some custom options to ts-loader, you can also set "),e("code",[s._v("themeConfig.typescript")]),s._v(" with an Object to pass it to ts-loader.")]),s._v(" "),e("div",{staticClass:"custom-block tip"},[e("p",{staticClass:"custom-block-title"},[s._v("Tips")]),s._v(" "),e("p",[s._v("After enabling this theme, you no longer need to require and enable "),e("code",[s._v("@vuepress/plugin-typescript")]),s._v(".")])]),s._v(" "),e("h2",{attrs:{id:"precautions"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#precautions"}},[s._v("#")]),s._v(" Precautions")]),s._v(" "),e("p",[s._v("If your project does not use typescript, you may also need to install typescript:")]),s._v(" "),e("CodeGroup",[e("CodeGroupItem",{attrs:{title:" yarn"}},[e("div",{staticClass:"language-bash line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[e("span",{pre:!0,attrs:{class:"token function"}},[s._v("yarn")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("add")]),s._v(" -D typescript\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])])]),s._v(" "),e("CodeGroupItem",{attrs:{title:" npm"}},[e("div",{staticClass:"language-bash line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[e("span",{pre:!0,attrs:{class:"token function"}},[s._v("npm")]),s._v(" i -D typescript\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])])])],1),s._v(" "),e("p",[s._v("At the same time, you need to ensure that your workspace contains a valid "),e("code",[s._v("tsconfig.json")]),s._v(". One of the simplest "),e("code",[s._v("tsconfig.json")]),s._v(" is as follows:")]),s._v(" "),e("div",{staticClass:"language-json line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-json"}},[e("code",[e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  "),e("span",{pre:!0,attrs:{class:"token property"}},[s._v('"compilerOptions"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),e("span",{pre:!0,attrs:{class:"token property"}},[s._v('"target"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[s._v('"ES6"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// Any target not lower than 'es6'")]),s._v("\n    "),e("span",{pre:!0,attrs:{class:"token property"}},[s._v('"allowSyntheticDefaultImports"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("true")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// Avoiding some issues related to vuepress-typings")]),s._v("\n    "),e("span",{pre:!0,attrs:{class:"token property"}},[s._v('"experimentalDecorators"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("true")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// TypeScript files for '.vue' needs this option")]),s._v("\n    "),e("span",{pre:!0,attrs:{class:"token property"}},[s._v('"module"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[s._v('"commonjs"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// Avoiding some issues related to vuepress-typings")]),s._v("\n    "),e("span",{pre:!0,attrs:{class:"token property"}},[s._v('"types"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),e("span",{pre:!0,attrs:{class:"token string"}},[s._v('"@mr-hope/vuepress-theme-types"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n  "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n  "),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// At least one ts file should be included in the project (empty files are also acceptable)")]),s._v("\n  "),e("span",{pre:!0,attrs:{class:"token property"}},[s._v('"include"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("\n    "),e("span",{pre:!0,attrs:{class:"token string"}},[s._v('"src/.vuepress/enhanceApp.ts"')]),s._v(" "),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// replace `src` with your doc folder")]),s._v("\n  "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br"),e("span",{staticClass:"line-number"},[s._v("6")]),e("br"),e("span",{staticClass:"line-number"},[s._v("7")]),e("br"),e("span",{staticClass:"line-number"},[s._v("8")]),e("br"),e("span",{staticClass:"line-number"},[s._v("9")]),e("br"),e("span",{staticClass:"line-number"},[s._v("10")]),e("br"),e("span",{staticClass:"line-number"},[s._v("11")]),e("br"),e("span",{staticClass:"line-number"},[s._v("12")]),e("br"),e("span",{staticClass:"line-number"},[s._v("13")]),e("br")])]),e("p",[s._v("If you already have "),e("code",[s._v("tsconfig.json")]),s._v(", then you only need to add the type definition file package of vuepress-theme-hope "),e("code",[s._v('"@mr-hope/vuepress-theme-types"')]),s._v(" to "),e("code",[s._v("compilerOptions.types")]),s._v(".")]),s._v(" "),e("p",[s._v("You should also create a ts file in your project and add it in the "),e("code",[s._v("include")]),s._v(" option of "),e("code",[s._v("tsconfig.json")]),s._v(". You can create an empty enhanceApp.ts and import it.")]),s._v(" "),e("div",{staticClass:"custom-block warning"},[e("p",{staticClass:"custom-block-title"},[s._v("Note")]),s._v(" "),e("p",[e("code",[s._v("ts-loader")]),s._v(" requires "),e("code",[s._v("tsconfig.json")]),s._v(" to hit at least one valid ts file, so the easiest way is to create or convert (if you already have "),e("code",[s._v("enhanceAppFiles.js")]),s._v(") an "),e("code",[s._v("enhanceAppFiles.ts")]),s._v(" and add it in the "),e("code",[s._v("include")]),s._v(" option")])])],1)}),[],!1,null,null,null);t.default=n.exports}}]);