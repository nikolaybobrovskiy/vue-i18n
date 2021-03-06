(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{190:function(t,s,a){"use strict";a.r(s);var n=a(0),e=Object(n.a)({},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"content"},[t._m(0),t._v(" "),t._m(1),t._v(" "),a("div",{staticClass:"warning custom-block"},[a("p",{staticClass:"custom-block-title"},[t._v("Notice")]),t._v(" "),a("p",[t._v("⚠️ Dynamically localization arbitrary HTML on your website can be very dangerous because it can easily lead to XSS vulnerabilities. Only use HTML interpolation on trusted content and never on user-provided content.")]),t._v(" "),a("p",[t._v("We recommended that use "),a("router-link",{attrs:{to:"./interpolation.html"}},[t._v("component interpolation")]),t._v(" feature.")],1)]),t._v(" "),a("p",[t._v("In some cases you might want to rendered your translation as an HTML message and not a static string.")]),t._v(" "),t._m(2),a("p",[t._v("Template the below:")]),t._v(" "),t._m(3),a("p",[t._v("Output the below (instead of the message pre formatted)")]),t._v(" "),t._m(4),t._m(5),t._v(" "),a("p",[t._v("Locale messages the below:")]),t._v(" "),t._m(6),a("p",[t._v("Template the below:")]),t._v(" "),t._m(7),a("p",[t._v("Output the below:")]),t._v(" "),t._m(8),t._m(9),t._v(" "),a("p",[t._v("Locale messages the below:")]),t._v(" "),t._m(10),a("p",[t._v("Template the below:")]),t._v(" "),t._m(11),a("p",[t._v("Output the below:")]),t._v(" "),t._m(12),a("p",[t._v("List formatting also accepts array-like object:")]),t._v(" "),t._m(13),a("p",[t._v("Output the below:")]),t._v(" "),t._m(14),t._m(15),t._v(" "),a("p",[t._v("Locale messages the below:")]),t._v(" "),t._m(16),a("p",[t._v("Template the below:")]),t._v(" "),t._m(17),a("p",[t._v("Output the below:")]),t._v(" "),t._m(18),t._m(19),t._v(" "),a("p",[t._v("Sometimes, you maybe need to translate with custom formatting (e.g. "),a("a",{attrs:{href:"http://userguide.icu-project.org/formatparse/messages",target:"_blank",rel:"noopener noreferrer"}},[t._v("ICU message syntax"),a("OutboundLink")],1),t._v(").")]),t._v(" "),a("p",[t._v("You can realize with custom formatter that implement "),a("a",{attrs:{href:"https://github.com/kazupon/vue-i18n/blob/dev/decls/i18n.js#L41-L43",target:"_blank",rel:"noopener noreferrer"}},[t._v("Formatter Interface"),a("OutboundLink")],1),t._v(".")]),t._v(" "),a("p",[t._v("The following custom formatter with ES2015 class syntax:")]),t._v(" "),t._m(20),a("p",[t._v("You can check "),a("a",{attrs:{href:"https://github.com/kazupon/vue-i18n/tree/dev/examples/formatting/custom",target:"_blank",rel:"noopener noreferrer"}},[t._v("the custom formatter official example"),a("OutboundLink")],1),t._v(".")])])},[function(){var t=this.$createElement,s=this._self._c||t;return s("h1",{attrs:{id:"formatting"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#formatting","aria-hidden":"true"}},[this._v("#")]),this._v(" Formatting")])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"html-formatting"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#html-formatting","aria-hidden":"true"}},[this._v("#")]),this._v(" HTML formatting")])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{attrs:{class:"token keyword"}},[t._v("const")]),t._v(" messages "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  en"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    message"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      hello"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v("'hello <br> world'")]),t._v("\n    "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"language-html extra-class"},[a("pre",{pre:!0,attrs:{class:"language-html"}},[a("code",[a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token punctuation"}},[t._v("<")]),t._v("p")]),t._v(" "),a("span",{attrs:{class:"token attr-name"}},[t._v("v-html")]),a("span",{attrs:{class:"token attr-value"}},[a("span",{attrs:{class:"token punctuation"}},[t._v("=")]),a("span",{attrs:{class:"token punctuation"}},[t._v('"')]),t._v("$t("),a("span",{attrs:{class:"token punctuation"}},[t._v("'")]),t._v("message.hello"),a("span",{attrs:{class:"token punctuation"}},[t._v("'")]),t._v(")"),a("span",{attrs:{class:"token punctuation"}},[t._v('"')])]),a("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token punctuation"}},[t._v("</")]),t._v("p")]),a("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])])])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"language-html extra-class"},[a("pre",{pre:!0,attrs:{class:"language-html"}},[a("code",[a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token punctuation"}},[t._v("<")]),t._v("p")]),a("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("hello\n"),a("span",{attrs:{class:"token comment"}},[t._v("\x3c!--<br> exists but is rendered as html and not a string--\x3e")]),t._v("\nworld"),a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token punctuation"}},[t._v("</")]),t._v("p")]),a("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"named-formatting"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#named-formatting","aria-hidden":"true"}},[this._v("#")]),this._v(" Named formatting")])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{attrs:{class:"token keyword"}},[t._v("const")]),t._v(" messages "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  en"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    message"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      hello"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v("'{msg} world'")]),t._v("\n    "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"language-html extra-class"},[a("pre",{pre:!0,attrs:{class:"language-html"}},[a("code",[a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token punctuation"}},[t._v("<")]),t._v("p")]),a("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("{{ $t('message.hello', { msg: 'hello' }) }}"),a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token punctuation"}},[t._v("</")]),t._v("p")]),a("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])])])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"language-html extra-class"},[a("pre",{pre:!0,attrs:{class:"language-html"}},[a("code",[a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token punctuation"}},[t._v("<")]),t._v("p")]),a("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("hello world"),a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token punctuation"}},[t._v("</")]),t._v("p")]),a("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"list-formatting"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#list-formatting","aria-hidden":"true"}},[this._v("#")]),this._v(" List formatting")])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{attrs:{class:"token keyword"}},[t._v("const")]),t._v(" messages "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  en"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    message"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      hello"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v("'{0} world'")]),t._v("\n    "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"language-html extra-class"},[a("pre",{pre:!0,attrs:{class:"language-html"}},[a("code",[a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token punctuation"}},[t._v("<")]),t._v("p")]),a("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("{{ $t('message.hello', ['hello']) }}"),a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token punctuation"}},[t._v("</")]),t._v("p")]),a("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])])])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"language-html extra-class"},[a("pre",{pre:!0,attrs:{class:"language-html"}},[a("code",[a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token punctuation"}},[t._v("<")]),t._v("p")]),a("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("hello world"),a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token punctuation"}},[t._v("</")]),t._v("p")]),a("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])])])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"language-html extra-class"},[a("pre",{pre:!0,attrs:{class:"language-html"}},[a("code",[a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token punctuation"}},[t._v("<")]),t._v("p")]),a("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("{{ $t('message.hello', {'0': 'hello'}) }}"),a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token punctuation"}},[t._v("</")]),t._v("p")]),a("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])])])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"language-html extra-class"},[a("pre",{pre:!0,attrs:{class:"language-html"}},[a("code",[a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token punctuation"}},[t._v("<")]),t._v("p")]),a("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("hello world"),a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token punctuation"}},[t._v("</")]),t._v("p")]),a("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"support-ruby-on-rails-i18n-format"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#support-ruby-on-rails-i18n-format","aria-hidden":"true"}},[this._v("#")]),this._v(" Support ruby on rails i18n format")])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{attrs:{class:"token keyword"}},[t._v("const")]),t._v(" messages "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  en"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    message"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      hello"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v("'%{msg} world'")]),t._v("\n    "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"language-html extra-class"},[a("pre",{pre:!0,attrs:{class:"language-html"}},[a("code",[a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token punctuation"}},[t._v("<")]),t._v("p")]),a("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("{{ $t('message.hello', { msg: 'hello' }) }}"),a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token punctuation"}},[t._v("</")]),t._v("p")]),a("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])])])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"language-html extra-class"},[a("pre",{pre:!0,attrs:{class:"language-html"}},[a("code",[a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token punctuation"}},[t._v("<")]),t._v("p")]),a("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("hello world"),a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token punctuation"}},[t._v("</")]),t._v("p")]),a("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"custom-formatting"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#custom-formatting","aria-hidden":"true"}},[this._v("#")]),this._v(" Custom formatting")])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{attrs:{class:"token comment"}},[t._v("// Custom Formatter implementation")]),t._v("\n"),a("span",{attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),a("span",{attrs:{class:"token class-name"}},[t._v("CustomFormatter")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n     "),a("span",{attrs:{class:"token function"}},[t._v("constructor")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("options"),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n       "),a("span",{attrs:{class:"token comment"}},[t._v("// ...")]),t._v("\n     "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    \n     "),a("span",{attrs:{class:"token comment"}},[t._v("//")]),t._v("\n     "),a("span",{attrs:{class:"token comment"}},[t._v("// interpolate")]),t._v("\n     "),a("span",{attrs:{class:"token comment"}},[t._v("//")]),t._v("\n     "),a("span",{attrs:{class:"token comment"}},[t._v("// @param {string} message")]),t._v("\n     "),a("span",{attrs:{class:"token comment"}},[t._v("//   string of list or named format.")]),t._v("\n     "),a("span",{attrs:{class:"token comment"}},[t._v("//   e.g.")]),t._v("\n     "),a("span",{attrs:{class:"token comment"}},[t._v("//   - named formatting: 'Hi {name}'")]),t._v("\n     "),a("span",{attrs:{class:"token comment"}},[t._v("//   - list formatting: 'Hi {0}'")]),t._v("\n     "),a("span",{attrs:{class:"token comment"}},[t._v("//")]),t._v("\n     "),a("span",{attrs:{class:"token comment"}},[t._v("// @param {Object | Array} values")]),t._v("\n     "),a("span",{attrs:{class:"token comment"}},[t._v("//   values of `message` interpolation.")]),t._v("\n     "),a("span",{attrs:{class:"token comment"}},[t._v("//   passed values with `$t`, `$tc` and `i18n` functional component.")]),t._v("\n     "),a("span",{attrs:{class:"token comment"}},[t._v("//   e.g. ")]),t._v("\n     "),a("span",{attrs:{class:"token comment"}},[t._v("//   - $t('hello', { name: 'kazupon' }) -> passed values: Object `{ name: 'kazupon' }` ")]),t._v("\n     "),a("span",{attrs:{class:"token comment"}},[t._v("//   - $t('hello', ['kazupon']) -> passed values: Array `['kazupon']`")]),t._v("\n     "),a("span",{attrs:{class:"token comment"}},[t._v("//   - `i18n` functional component (component interpolation)")]),t._v("\n     "),a("span",{attrs:{class:"token comment"}},[t._v('//     <i18n path="hello">')]),t._v("\n     "),a("span",{attrs:{class:"token comment"}},[t._v("//       <p>kazupon</p>")]),t._v("\n     "),a("span",{attrs:{class:"token comment"}},[t._v("//       <p>how are you?</p>")]),t._v("\n     "),a("span",{attrs:{class:"token comment"}},[t._v("//     </i18n>")]),t._v("\n     "),a("span",{attrs:{class:"token comment"}},[t._v("//     -> passed values: Array (included VNode):")]),t._v("\n     "),a("span",{attrs:{class:"token comment"}},[t._v("//        `[VNode{ tag: 'p', text: 'kazupon', ...}, VNode{ tag: 'p', text: 'how are you?', ...}]`")]),t._v("\n     "),a("span",{attrs:{class:"token comment"}},[t._v("//")]),t._v("\n     "),a("span",{attrs:{class:"token comment"}},[t._v("// @return {Array<any>}")]),t._v("\n     "),a("span",{attrs:{class:"token comment"}},[t._v("//   interpolated values. you need to return the following:")]),t._v("\n     "),a("span",{attrs:{class:"token comment"}},[t._v("//   - array of string, when is using `$t` or `$tc`.")]),t._v("\n     "),a("span",{attrs:{class:"token comment"}},[t._v("//   - array included VNode object, when is using `i18n` functional component.")]),t._v("\n     "),a("span",{attrs:{class:"token comment"}},[t._v("// ")]),t._v("\n     "),a("span",{attrs:{class:"token function"}},[t._v("interpolate")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("message"),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" values"),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n       "),a("span",{attrs:{class:"token comment"}},[t._v("// implement interpolation logic here")]),t._v("\n       "),a("span",{attrs:{class:"token comment"}},[t._v("// ...")]),t._v("\n    \n       "),a("span",{attrs:{class:"token comment"}},[t._v("// return the interpolated array")]),t._v("\n       "),a("span",{attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{attrs:{class:"token string"}},[t._v("'resolved message string'")]),a("span",{attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n     "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    \n"),a("span",{attrs:{class:"token comment"}},[t._v("// register with `formatter` option")]),t._v("\n"),a("span",{attrs:{class:"token keyword"}},[t._v("const")]),t._v(" i18n "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),a("span",{attrs:{class:"token class-name"}},[t._v("VueI18n")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  locale"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v("'en-US'")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  formatter"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),a("span",{attrs:{class:"token class-name"}},[t._v("CustomFormatter")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token comment"}},[t._v("/* here the constructor options */")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  messages"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{attrs:{class:"token string"}},[t._v("'en-US'")]),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      "),a("span",{attrs:{class:"token comment"}},[t._v("// ...")]),t._v("\n    "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{attrs:{class:"token comment"}},[t._v("// ...")]),t._v("\n  "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    \n"),a("span",{attrs:{class:"token comment"}},[t._v("// Run!")]),t._v("\n"),a("span",{attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),a("span",{attrs:{class:"token class-name"}},[t._v("Vue")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" i18n "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function"}},[t._v("$mount")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token string"}},[t._v("'#app'")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])])}],!1,null,null,null);e.options.__file="formatting.md";s.default=e.exports}}]);