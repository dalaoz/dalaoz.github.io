(window.webpackJsonp=window.webpackJsonp||[]).push([[43],{545:function(t,a,e){"use strict";e.r(a);var s=e(21),n=Object(s.a)({},(function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h1",{attrs:{id:"form-标签"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#form-标签"}},[t._v("#")]),t._v(" form 标签")]),t._v(" "),e("p",[e("code",[t._v("<form>")]),t._v("元素代表了表单，继承了 HTMLFormElement 接口。")]),t._v(" "),e("h2",{attrs:{id:"htmlformelement-的实例属性"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#htmlformelement-的实例属性"}},[t._v("#")]),t._v(" HTMLFormElement 的实例属性")]),t._v(" "),e("ul",[e("li",[e("code",[t._v("elements")]),t._v("：返回一个类似数组的对象，成员是属于该表单的所有控件元素。该属性只读。")]),t._v(" "),e("li",[e("code",[t._v("length")]),t._v("：返回一个整数，表示属于该表单的控件数量。该属性只读。")]),t._v(" "),e("li",[e("code",[t._v("name")]),t._v("：字符串，表示该表单的名称。")]),t._v(" "),e("li",[e("code",[t._v("method")]),t._v("：字符串，表示提交给服务器时所使用的 HTTP 方法。")]),t._v(" "),e("li",[e("code",[t._v("target")]),t._v("：字符串，表示表单提交后，服务器返回的数据的展示位置。")]),t._v(" "),e("li",[e("code",[t._v("action")]),t._v("：字符串，表示表单提交数据的 URL。")]),t._v(" "),e("li",[e("code",[t._v("enctype")]),t._v("（或"),e("code",[t._v("encoding")]),t._v("）：字符串，表示表单提交数据的编码方法，可能的值有"),e("code",[t._v("application/x-www-form-urlencoded")]),t._v("、"),e("code",[t._v("multipart/form-data")]),t._v("和"),e("code",[t._v("text/plain")]),t._v("。")]),t._v(" "),e("li",[e("code",[t._v("acceptCharset")]),t._v("：字符串，表示服务器所能接受的字符编码，多个编码格式之间使用逗号或空格分隔。")]),t._v(" "),e("li",[e("code",[t._v("autocomplete")]),t._v("：字符串"),e("code",[t._v("on")]),t._v("或"),e("code",[t._v("off")]),t._v("，表示浏览器是否要对"),e("code",[t._v("<input>")]),t._v("控件提供自动补全。")]),t._v(" "),e("li",[e("code",[t._v("noValidate")]),t._v("：布尔值，表示是否关闭表单的自动校验。")])]),t._v(" "),e("h2",{attrs:{id:"htmlformelement-的实例方法"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#htmlformelement-的实例方法"}},[t._v("#")]),t._v(" HTMLFormElement 的实例方法")]),t._v(" "),e("ul",[e("li",[e("code",[t._v("submit()")]),t._v("：提交表单，但是不会触发"),e("code",[t._v("submit")]),t._v("事件和表单的自动校验。")]),t._v(" "),e("li",[e("code",[t._v("reset()")]),t._v("：重置表单控件的值为默认值。")]),t._v(" "),e("li",[e("code",[t._v("checkValidity()")]),t._v("：如果控件能够通过自动校验，返回"),e("code",[t._v("true")]),t._v("，否则返回"),e("code",[t._v("false")]),t._v("，同时触发"),e("code",[t._v("invalid")]),t._v("事件。")])]),t._v(" "),e("p",[t._v("下面是一个创建表单并提交的例子。")]),t._v(" "),e("div",{staticClass:"language-javascript extra-class"},[e("pre",{pre:!0,attrs:{class:"language-javascript"}},[e("code",[e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" f "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" document"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("createElement")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'form'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\ndocument"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("body"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("appendChild")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("f"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nf"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("action "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'/cgi-bin/some.cgi'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nf"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("method "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'POST'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nf"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("submit")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])])])}),[],!1,null,null,null);a.default=n.exports}}]);