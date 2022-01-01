(window.webpackJsonp=window.webpackJsonp||[]).push([[94],{597:function(t,s,a){"use strict";a.r(s);var e=a(21),r=Object(e.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h2",{attrs:{id:"whistle-官网"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#whistle-官网"}},[t._v("#")]),t._v(" Whistle 官网")]),t._v(" "),a("ul",[a("li",[a("p",[t._v("Whistle 官网："),a("a",{attrs:{href:"https://wproxy.org/whistle/",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://wproxy.org/whistle/"),a("OutboundLink")],1)])]),t._v(" "),a("li",[a("p",[t._v("Whistle 的 GitHub："),a("a",{attrs:{href:"https://github.com/avwo/whistle",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://github.com/avwo/whistle"),a("OutboundLink")],1)])])]),t._v(" "),a("h2",{attrs:{id:"whistle-安装启动"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#whistle-安装启动"}},[t._v("#")]),t._v(" Whistle 安装启动")]),t._v(" "),a("h3",{attrs:{id:"_1、whistle-安装"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1、whistle-安装"}},[t._v("#")]),t._v(" 1、Whistle 安装")]),t._v(" "),a("p",[t._v("（1）通过 npm 安装 Whistle")]),t._v(" "),a("h3",{attrs:{id:"_2、启动-whistle"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2、启动-whistle"}},[t._v("#")]),t._v(" 2、启动 whistle")]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[t._v("w2 start\n")])])]),a("p",[t._v("然后在浏览器输入"),a("code",[t._v("http://127.0.0.1:8899/")]),t._v(" 即可打开代理配置的页面。")]),t._v(" "),a("h3",{attrs:{id:"_3、配置代理"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3、配置代理"}},[t._v("#")]),t._v(" 3、配置代理")]),t._v(" "),a("p",[a("strong",[t._v("chrome 浏览器配置代理")]),t._v("：")]),t._v(" "),a("p",[t._v("可参考官方文档。")]),t._v(" "),a("p",[a("strong",[t._v("Firefox 浏览器配置代理")]),t._v("：")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://img.smyhvae.com/20200420_1357.png",alt:""}})]),t._v(" "),a("h3",{attrs:{id:"_4、安装证书并添加信任"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_4、安装证书并添加信任"}},[t._v("#")]),t._v(" 4、安装证书并添加信任：")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://img.smyhvae.com/20200420_0922.png",alt:""}})]),t._v(" "),a("h3",{attrs:{id:"手机设置代理"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#手机设置代理"}},[t._v("#")]),t._v(" 手机设置代理")]),t._v(" "),a("p",[t._v("连接好指定的 wifi 后，点击那个 wifi 里的设置，将「代理」那一项，设置为手动，然后输入 ip（电脑上的 ip）、端口号（8899）。然后就可以通过电脑上的 whistle 工具，查看手机的网页请求。")]),t._v(" "),a("p",[t._v("注意，要保证手机和电脑在同一个网络下。")]),t._v(" "),a("p",[t._v("另外，还需要在手机的浏览器，地址栏输入"),a("code",[t._v("rootca.pro")]),t._v("，给手机安装证书。")]),t._v(" "),a("h2",{attrs:{id:"捕获和拦截-https-请求"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#捕获和拦截-https-请求"}},[t._v("#")]),t._v(" 捕获和拦截 https 请求")]),t._v(" "),a("p",[t._v("whistle 安装证书后，可以拦截 https 请求。但是，我现在又不想拦截 https 请求了，该怎么卸载证书呢？")]),t._v(" "),a("p",[t._v("我发现，证书无法卸载，正确的操作是：")]),t._v(" "),a("p",[a("img",{attrs:{src:"http://img.smyhvae.com/20180426_1621.png",alt:""}})]),t._v(" "),a("p",[t._v("上图中，把红框部分，去掉勾选，就不捕获 https 了。谢谢 azh 童鞋。")]),t._v(" "),a("p",[t._v("参考链接：")]),t._v(" "),a("ul",[a("li",[a("p",[a("a",{attrs:{href:"https://www.zhihu.com/question/21474174",target:"_blank",rel:"noopener noreferrer"}},[t._v("Android 手机如何设置 http 代理？"),a("OutboundLink")],1)])]),t._v(" "),a("li",[a("p",[a("a",{attrs:{href:"http://zhuscat.com/2017/09/20/https-proxy-on-ios/",target:"_blank",rel:"noopener noreferrer"}},[t._v("使用 Whistle 对 iOS HTTPS 进行抓包"),a("OutboundLink")],1)])])]),t._v(" "),a("h2",{attrs:{id:"移动端调试神器-eruda"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#移动端调试神器-eruda"}},[t._v("#")]),t._v(" 移动端调试神器:eruda")]),t._v(" "),a("blockquote",[a("p",[t._v("手机连接代理时，如何看 console.log 的日志信息?")])]),t._v(" "),a("blockquote",[a("p",[t._v("现在，代码里有 console.log，如果是在电脑浏览器上看，可以直接在控制台查看 console.log 的内容。但是，如果手机连接代理，在手机上打开网页的话，要怎么查看 console.log 的内容呢？具体做法如下：")])]),t._v(" "),a("p",[t._v("（1）在 whistle 中，新建一个名叫"),a("code",[t._v("Eruda H5")]),t._v("的代理，代理中的内容是：")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("http://xxx.com htmlAppend://{eruda.html}\n")])])]),a("p",[t._v("(2)新建一个 values，里面的内容是：")]),t._v(" "),a("div",{staticClass:"language-html extra-class"},[a("pre",{pre:!0,attrs:{class:"language-html"}},[a("code",[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("script")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("src")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("//cdn.bootcss.com/eruda/1.4.3/eruda.min.js"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),a("span",{pre:!0,attrs:{class:"token script"}}),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("script")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("script")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),a("span",{pre:!0,attrs:{class:"token script"}},[a("span",{pre:!0,attrs:{class:"token language-javascript"}},[t._v("\n  eruda"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("init")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])]),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("script")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])])]),a("p",[t._v("然后就 OK 了。")])])}),[],!1,null,null,null);s.default=r.exports}}]);