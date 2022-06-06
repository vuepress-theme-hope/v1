(window.webpackJsonp=window.webpackJsonp||[]).push([[21],{566:function(e,t,r){"use strict";r.r(t);var n=r(1),o=Object(n.a)({},(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[r("p",[e._v("A concise, safe and free static site commenting system, based on "),r("a",{attrs:{href:"https://curl.qcloud.com/KnnJtUom",target:"_blank",rel:"noopener noreferrer"}},[e._v("Tencent Cloud Development"),r("OutboundLink")],1),e._v(".")]),e._v(" "),r("h2",{attrs:{id:"getting-started"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#getting-started"}},[e._v("#")]),e._v(" Getting started")]),e._v(" "),r("h3",{attrs:{id:"vercel-deployment"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#vercel-deployment"}},[e._v("#")]),e._v(" Vercel Deployment")]),e._v(" "),r("ol",[r("li",[r("p",[e._v("Apply for "),r("a",{attrs:{href:"https://www.mongodb.com/cloud/atlas/register",target:"_blank",rel:"noopener noreferrer"}},[e._v("MongoDB"),r("OutboundLink")],1),e._v(" account")])]),e._v(" "),r("li",[r("p",[e._v("Create a free MongoDB database, the recommended region is "),r("code",[e._v("AWS / N. Virginia (us-east-1)")])])]),e._v(" "),r("li",[r("p",[e._v("Click CONNECT on the Clusters page, follow the steps to allow connections from all IP addresses ("),r("a",{attrs:{href:"https://vercel.com/support/articles/how-to-allowlist-deployment-ip-address",target:"_blank",rel:"noopener noreferrer"}},[e._v("Why?"),r("OutboundLink")],1),e._v("), create Database user, and record the database connection string, please change the "),r("code",[e._v("<password>")]),e._v(" in the connection string to the database password")])]),e._v(" "),r("li",[r("p",[e._v("Sign up for a "),r("a",{attrs:{href:"https://vercel.com/signup",target:"_blank",rel:"noopener noreferrer"}},[e._v("Vercel"),r("OutboundLink")],1),e._v(" account")])]),e._v(" "),r("li",[r("p",[e._v("Click the button below to deploy Twikoo to Vercel in one click")]),e._v(" "),r("p",[r("a",{attrs:{href:"https://vercel.com/import/project?template=https://github.com/imaegoo/twikoo/tree/dev/src/vercel-min",target:"_blank",rel:"noopener noreferrer"}},[r("img",{attrs:{src:"https://vercel.com/button",alt:"Vercel"}}),r("OutboundLink")],1)])]),e._v(" "),r("li",[r("p",[e._v("Go to Settings - Environment Variables, add the environment variable "),r("code",[e._v("MONGODB_URI")]),e._v(", the value is the database connection string in step 3")])]),e._v(" "),r("li",[r("p",[e._v('Go to Overview, click the link under Domains, if the environment configuration is correct, you can see the prompt "Twikoo cloud function is running normally"')])]),e._v(" "),r("li",[r("p",[e._v("Vercel Domains (with "),r("code",[e._v("https://")]),e._v(" prefix, eg "),r("code",[e._v("https://xxx.vercel.app")]),e._v(") is your environment ID")])])])])}),[],!1,null,null,null);t.default=o.exports},584:function(e,t,r){"use strict";r.r(t);var n=r(1),o=Object(n.a)({},(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[r("p",[e._v("一个简洁、安全、免费的静态网站评论系统，基于 "),r("a",{attrs:{href:"https://curl.qcloud.com/KnnJtUom",target:"_blank",rel:"noopener noreferrer"}},[e._v("腾讯云开发"),r("OutboundLink")],1),e._v("。")]),e._v(" "),r("h2",{attrs:{id:"快速上手"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#快速上手"}},[e._v("#")]),e._v(" 快速上手")]),e._v(" "),r("p",[e._v("部署共有四种方式。")]),e._v(" "),r("table",[r("thead",[r("tr",[r("th",[e._v("部署方式")]),e._v(" "),r("th",[e._v("描述")])])]),e._v(" "),r("tbody",[r("tr",[r("td",[r("a",{attrs:{href:"#%E4%B8%80%E9%94%AE%E9%83%A8%E7%BD%B2"}},[e._v("一键部署")])]),e._v(" "),r("td",[e._v("[不建议] 虽然方便，但是仅支持按量计费环境——也就是说，"),r("strong",[e._v("一键部署的环境，当免费资源用尽后，将会产生费用")]),e._v("。且按量计费环境无法切换为包年包月环境。免费额度数据库读操作数只有 500 次 / 天，"),r("strong",[e._v("无法支撑 Twikoo 的运行需求")]),e._v("。")])]),e._v(" "),r("tr",[r("td",[r("a",{attrs:{href:"#%E6%89%8B%E5%8A%A8%E9%83%A8%E7%BD%B2"}},[e._v("手动部署")])]),e._v(" "),r("td",[e._v("[建议] 手动部署到腾讯云云开发环境，在中国大陆访问速度较快。由于基础版 1 已从 0 元涨价至 6.9 元 / 月，需要付费购买环境才能部署。")])]),e._v(" "),r("tr",[r("td",[r("a",{attrs:{href:"#%E5%91%BD%E4%BB%A4%E8%A1%8C%E9%83%A8%E7%BD%B2"}},[e._v("命令行部署")])]),e._v(" "),r("td",[e._v("[不建议] 仅针对有 Node.js 经验的开发者。")])]),e._v(" "),r("tr",[r("td",[r("a",{attrs:{href:"#vercel-%E9%83%A8%E7%BD%B2"}},[e._v("Vercel 部署")])]),e._v(" "),r("td",[e._v("[建议] 适用于想要免费部署的用户，在中国大陆访问速度较慢。")])])])]),e._v(" "),r("h3",{attrs:{id:"一键部署"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#一键部署"}},[e._v("#")]),e._v(" 一键部署")]),e._v(" "),r("ol",[r("li",[r("p",[e._v("点击以下按钮将 Twikoo 一键部署到云开发")]),e._v(" "),r("p",[r("a",{attrs:{href:"https://console.cloud.tencent.com/tcb/env/index?action=CreateAndDeployCloudBaseProject&appUrl=https%3A%2F%2Fgithub.com%2Fimaegoo%2Ftwikoo&branch=dev",target:"_blank",rel:"noopener noreferrer"}},[r("img",{attrs:{src:"https://main.qcloudimg.com/raw/67f5a389f1ac6f3b4d04c7256438e44f.svg",alt:"部署到云开发"}}),r("OutboundLink")],1)])]),e._v(" "),r("li",[r("p",[e._v("进入"),r("a",{attrs:{href:"https://console.cloud.tencent.com/tcb/env/login",target:"_blank",rel:"noopener noreferrer"}},[e._v("环境 - 登录授权"),r("OutboundLink")],1),e._v("，启用“匿名登录”")])]),e._v(" "),r("li",[r("p",[e._v("进入"),r("a",{attrs:{href:"https://console.cloud.tencent.com/tcb/env/safety",target:"_blank",rel:"noopener noreferrer"}},[e._v("环境 - 安全配置"),r("OutboundLink")],1),e._v("，将网站域名添加到“WEB 安全域名”")])])]),e._v(" "),r("h3",{attrs:{id:"手动部署"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#手动部署"}},[e._v("#")]),e._v(" 手动部署")]),e._v(" "),r("p",[e._v("如果你打算部署到一个现有的云开发环境，请直接从第 3 步开始。")]),e._v(" "),r("ol",[r("li",[r("p",[e._v("进入"),r("a",{attrs:{href:"https://curl.qcloud.com/KnnJtUom",target:"_blank",rel:"noopener noreferrer"}},[e._v("云开发 CloudBase"),r("OutboundLink")],1),e._v("活动页面，滚动到“新用户专享”部分，选择适合的套餐，点击“立即购买”，按提示创建好环境。")]),e._v(" "),r("div",{staticClass:"custom-block tip"},[r("p",{staticClass:"custom-block-title"},[e._v("提示")]),e._v(" "),r("ul",[r("li",[e._v("推荐创建上海环境。如选择广州环境，需要在 "),r("code",[e._v("twikoo.init()")]),e._v(" 时额外指定环境 "),r("code",[e._v('region: "ap-guangzhou"')])]),e._v(" "),r("li",[e._v("环境名称自由填写")]),e._v(" "),r("li",[e._v("推荐选择计费方式"),r("code",[e._v("包年包月")]),e._v("，套餐版本"),r("code",[e._v("基础版 1")]),e._v("，超出免费额度不会收费")]),e._v(" "),r("li",[e._v("如果提示选择“应用模板”，请选择“空模板”")])])])]),e._v(" "),r("li",[r("p",[e._v("进入"),r("a",{attrs:{href:"https://console.cloud.tencent.com/tcb/",target:"_blank",rel:"noopener noreferrer"}},[e._v("云开发控制台"),r("OutboundLink")],1),r("br")])]),e._v(" "),r("li",[r("p",[e._v("进入"),r("a",{attrs:{href:"https://console.cloud.tencent.com/tcb/env/login",target:"_blank",rel:"noopener noreferrer"}},[e._v("环境-登录授权"),r("OutboundLink")],1),e._v("，启用“匿名登录”")])]),e._v(" "),r("li",[r("p",[e._v("进入"),r("a",{attrs:{href:"https://console.cloud.tencent.com/tcb/env/safety",target:"_blank",rel:"noopener noreferrer"}},[e._v("环境-安全配置"),r("OutboundLink")],1),e._v("，将网站域名添加到“WEB 安全域名”")])]),e._v(" "),r("li",[r("p",[e._v("进入"),r("a",{attrs:{href:"https://console.cloud.tencent.com/tcb/scf/index",target:"_blank",rel:"noopener noreferrer"}},[e._v("环境-云函数"),r("OutboundLink")],1),e._v("，点击“新建云函数”")])]),e._v(" "),r("li",[r("p",[e._v("函数名称请填写 "),r("code",[e._v("twikoo")]),e._v("，创建方式请选择 "),r("code",[e._v("空白函数")]),e._v("，运行环境请选择 "),r("code",[e._v("Nodejs 10.15")]),e._v("，函数内存请选择 "),r("code",[e._v("128MB")]),e._v("，点击“下一步”")])]),e._v(" "),r("li",[r("p",[e._v("清空输入框中的示例代码，复制以下代码、粘贴到“函数代码”输入框中，点击“确定”")]),e._v(" "),r("div",{staticClass:"language-js line-numbers-mode"},[r("pre",{pre:!0,attrs:{class:"language-js"}},[r("code",[e._v("exports"),r("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(".")]),e._v("main "),r("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v(" "),r("span",{pre:!0,attrs:{class:"token function"}},[e._v("require")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),r("span",{pre:!0,attrs:{class:"token string"}},[e._v('"twikoo-func"')]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(".")]),e._v("main"),r("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v("\n")])]),e._v(" "),r("div",{staticClass:"line-numbers-wrapper"},[r("span",{staticClass:"line-number"},[e._v("1")]),r("br")])])]),e._v(" "),r("li",[r("p",[e._v("创建完成后，点击“twikoo”进入云函数详情页，进入“函数代码”标签，点击“文件 - 新建文件”，输入 "),r("code",[e._v("package.json")]),e._v("，回车")])]),e._v(" "),r("li",[r("p",[e._v("复制以下代码、粘贴到代码框中，点击“保存并安装依赖”")]),e._v(" "),r("div",{staticClass:"language-json line-numbers-mode"},[r("pre",{pre:!0,attrs:{class:"language-json"}},[r("code",[r("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{")]),e._v(" "),r("span",{pre:!0,attrs:{class:"token property"}},[e._v('"dependencies"')]),r("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v(" "),r("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{")]),e._v(" "),r("span",{pre:!0,attrs:{class:"token property"}},[e._v('"twikoo-func"')]),r("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v(" "),r("span",{pre:!0,attrs:{class:"token string"}},[e._v('"1.5.0"')]),e._v(" "),r("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("}")]),e._v(" "),r("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("}")]),e._v("\n")])]),e._v(" "),r("div",{staticClass:"line-numbers-wrapper"},[r("span",{staticClass:"line-number"},[e._v("1")]),r("br")])])])]),e._v(" "),r("h3",{attrs:{id:"命令行部署"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#命令行部署"}},[e._v("#")]),e._v(" 命令行部署")]),e._v(" "),r("div",{staticClass:"custom-block warning"},[r("p",{staticClass:"custom-block-title"},[e._v("注意")]),e._v(" "),r("ul",[r("li",[e._v("请确保你已经安装了 "),r("a",{attrs:{href:"https://nodejs.org/en/download/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Node.js"),r("OutboundLink")],1)]),e._v(" "),r("li",[e._v("请将命令、代码中“你的环境 ID”替换为你自己的环境 ID")]),e._v(" "),r("li",[e._v("第 7 步会弹出浏览器要求授权，需在有图形界面的系统下进行")]),e._v(" "),r("li",[e._v("请勿在 Termux 下操作。虽然可以部署成功，但是使用时会报错 "),r("code",[e._v("[FUNCTIONS_EXECUTE_FAIL] Error: EACCES: permission denied, open '/var/user/index.js'")])])])]),e._v(" "),r("p",[e._v("如果你打算部署到一个现有的云开发环境，请直接从第 3 步开始。")]),e._v(" "),r("ol",[r("li",[r("p",[e._v("进入"),r("a",{attrs:{href:"https://curl.qcloud.com/KnnJtUom",target:"_blank",rel:"noopener noreferrer"}},[e._v("云开发 CloudBase"),r("OutboundLink")],1),e._v("活动页面，滚动到“新用户专享”部分，选择适合的套餐 (一般 0 元套餐即可) ，点击“立即购买”，按提示创建好环境。")])]),e._v(" "),r("li",[r("p",[e._v("进入"),r("a",{attrs:{href:"https://console.cloud.tencent.com/tcb/",target:"_blank",rel:"noopener noreferrer"}},[e._v("云开发控制台"),r("OutboundLink")],1)])]),e._v(" "),r("li",[r("p",[e._v("进入"),r("a",{attrs:{href:"https://console.cloud.tencent.com/tcb/env/login",target:"_blank",rel:"noopener noreferrer"}},[e._v("环境 - 登录授权"),r("OutboundLink")],1),e._v("，启用“匿名登录”")])]),e._v(" "),r("li",[r("p",[e._v("进入"),r("a",{attrs:{href:"https://console.cloud.tencent.com/tcb/env/safety",target:"_blank",rel:"noopener noreferrer"}},[e._v("环境 - 安全配置"),r("OutboundLink")],1),e._v("，将网站域名添加到“WEB 安全域名”")])]),e._v(" "),r("li",[r("p",[e._v("克隆本仓库")]),e._v(" "),r("div",{staticClass:"language-sh line-numbers-mode"},[r("pre",{pre:!0,attrs:{class:"language-sh"}},[r("code",[r("span",{pre:!0,attrs:{class:"token function"}},[e._v("git")]),e._v(" clone https://github.com/imaegoo/twikoo.git "),r("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# 或 git clone https://e.coding.net/imaegoo/twikoo/twikoo.git")]),e._v("\n"),r("span",{pre:!0,attrs:{class:"token builtin class-name"}},[e._v("cd")]),e._v(" twikoo\n")])]),e._v(" "),r("div",{staticClass:"line-numbers-wrapper"},[r("span",{staticClass:"line-number"},[e._v("1")]),r("br"),r("span",{staticClass:"line-number"},[e._v("2")]),r("br")])]),r("blockquote",[r("p",[e._v("如果你没有安装 Git，也可以从 "),r("a",{attrs:{href:"https://github.com/imaegoo/twikoo/releases",target:"_blank",rel:"noopener noreferrer"}},[e._v("Release"),r("OutboundLink")],1),e._v(" 页面下载最新的 Source code")]),e._v(" "),r("p",[e._v("如果你所在的地区访问 GitHub 速度慢，也可以尝试另一个仓库地址: "),r("a",{attrs:{href:"https://imaegoo.coding.net/public/twikoo/twikoo/git",target:"_blank",rel:"noopener noreferrer"}},[e._v("https://imaegoo.coding.net/public/twikoo/twikoo/git"),r("OutboundLink")],1)])])]),e._v(" "),r("li",[r("p",[e._v("安装依赖项")]),e._v(" "),r("div",{staticClass:"language-sh line-numbers-mode"},[r("pre",{pre:!0,attrs:{class:"language-sh"}},[r("code",[r("span",{pre:!0,attrs:{class:"token function"}},[e._v("npm")]),e._v(" "),r("span",{pre:!0,attrs:{class:"token function"}},[e._v("install")]),e._v(" -g "),r("span",{pre:!0,attrs:{class:"token function"}},[e._v("yarn")]),e._v(" "),r("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# 如 yarn 已安装，可以跳过此步")]),e._v("\n"),r("span",{pre:!0,attrs:{class:"token function"}},[e._v("yarn")]),e._v(" "),r("span",{pre:!0,attrs:{class:"token function"}},[e._v("install")]),e._v("\n")])]),e._v(" "),r("div",{staticClass:"line-numbers-wrapper"},[r("span",{staticClass:"line-number"},[e._v("1")]),r("br"),r("span",{staticClass:"line-number"},[e._v("2")]),r("br")])])]),e._v(" "),r("li",[r("p",[e._v("授权云开发环境 (此命令会弹出浏览器要求授权，需在有图形界面的系统下进行)")]),e._v(" "),r("div",{staticClass:"language-sh line-numbers-mode"},[r("pre",{pre:!0,attrs:{class:"language-sh"}},[r("code",[r("span",{pre:!0,attrs:{class:"token function"}},[e._v("yarn")]),e._v(" run login\n")])]),e._v(" "),r("div",{staticClass:"line-numbers-wrapper"},[r("span",{staticClass:"line-number"},[e._v("1")]),r("br")])])]),e._v(" "),r("li",[r("p",[e._v("自动部署")]),e._v(" "),r("div",{staticClass:"language-sh line-numbers-mode"},[r("pre",{pre:!0,attrs:{class:"language-sh"}},[r("code",[r("span",{pre:!0,attrs:{class:"token function"}},[e._v("yarn")]),e._v(" deploy -e 你的环境id\n")])]),e._v(" "),r("div",{staticClass:"line-numbers-wrapper"},[r("span",{staticClass:"line-number"},[e._v("1")]),r("br")])])])]),e._v(" "),r("h3",{attrs:{id:"vercel-部署"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#vercel-部署"}},[e._v("#")]),e._v(" Vercel 部署")]),e._v(" "),r("p",[r("a",{attrs:{href:"https://www.bilibili.com/video/BV1Fh411e7ZH",target:"_blank",rel:"noopener noreferrer"}},[e._v("查看视频教程"),r("OutboundLink")],1)]),e._v(" "),r("ol",[r("li",[r("p",[e._v("申请 "),r("a",{attrs:{href:"https://www.mongodb.com/cloud/atlas/register",target:"_blank",rel:"noopener noreferrer"}},[e._v("MongoDB"),r("OutboundLink")],1),e._v(" 账号")])]),e._v(" "),r("li",[r("p",[e._v("创建免费 MongoDB 数据库，区域推荐选择 "),r("code",[e._v("AWS / N. Virginia (us-east-1)")])])]),e._v(" "),r("li",[r("p",[e._v("在 Clusters 页面点击 CONNECT，按步骤设置允许所有 IP 地址的连接 ("),r("a",{attrs:{href:"https://vercel.com/support/articles/how-to-allowlist-deployment-ip-address",target:"_blank",rel:"noopener noreferrer"}},[e._v("为什么？"),r("OutboundLink")],1),e._v(") ，创建数据库用户，并记录数据库连接字符串，请将连接字符串中的 "),r("code",[e._v("<password>")]),e._v(" 修改为数据库密码")])]),e._v(" "),r("li",[r("p",[e._v("申请 "),r("a",{attrs:{href:"https://vercel.com/signup",target:"_blank",rel:"noopener noreferrer"}},[e._v("Vercel"),r("OutboundLink")],1),e._v(" 账号")])]),e._v(" "),r("li",[r("p",[e._v("点击以下按钮将 Twikoo 一键部署到 Vercel")]),e._v(" "),r("p",[r("a",{attrs:{href:"https://vercel.com/import/project?template=https://github.com/imaegoo/twikoo/tree/dev/src/vercel-min",target:"_blank",rel:"noopener noreferrer"}},[r("img",{attrs:{src:"https://vercel.com/button",alt:"Vercel"}}),r("OutboundLink")],1)])]),e._v(" "),r("li",[r("p",[e._v("进入 Settings - Environment Variables，添加环境变量 "),r("code",[e._v("MONGODB_URI")]),e._v("，值为第 3 步的数据库连接字符串")])]),e._v(" "),r("li",[r("p",[e._v("进入 Overview，点击 Domains 下方的链接，如果环境配置正确，可以看到 “Twikoo 云函数运行正常” 的提示")])]),e._v(" "),r("li",[r("p",[e._v("Vercel Domains (包含 "),r("code",[e._v("https://")]),e._v(" 前缀，例如 "),r("code",[e._v("https://xxx.vercel.app")]),e._v(") 即为你的环境 ID")])])])])}),[],!1,null,null,null);t.default=o.exports}}]);