(window.webpackJsonp=window.webpackJsonp||[]).push([[191],{1129:function(r,t,e){"use strict";e.r(t);var a=e(798),o={name:"KatexPlayground",data:()=>({input:"\\frac {\\partial^r} {\\partial \\omega^r} \\left(\\frac {y^{\\omega}} {\\omega}\\right)\n= \\left(\\frac {y^{\\omega}} {\\omega}\\right) \\left\\{(\\log y)^r + \\sum_{i=1}^r \\frac {(-1)^ Ir \\cdots (r-i+1) (\\log y)^{ri}} {\\omega^i} \\right\\}",result:"",error:!1}),mounted(){try{this.result=Object(a.renderToString)(this.input,{displayMode:!0,throwOnError:!0})}catch(r){this.result=r.toString()}},watch:{input(r){try{this.result=Object(a.renderToString)(r,{displayMode:!0,throwOnError:!0}),this.error=!1}catch(r){this.result=r.toString(),this.error=!0}}}},n=(e(799),e(1)),i=Object(n.a)(o,(function(){var r=this,t=r.$createElement,e=r._self._c||t;return e("div",{staticClass:"katex-playground"},[e("textarea",{directives:[{name:"model",rawName:"v-model",value:r.input,expression:"input"}],attrs:{name:"katex-playground",id:"katex-playground",cols:"30",rows:"10",placeholder:"Input your tex here"},domProps:{value:r.input},on:{input:function(t){t.target.composing||(r.input=t.target.value)}}}),r._v(" "),e("p",{staticClass:"katex-block",class:{"katex-error":r.error},domProps:{innerHTML:r._s(r.result||"Here will be the render result")}})])}),[],!1,null,null,null);t.default=i.exports},517:function(r,t,e){},799:function(r,t,e){"use strict";e(517)}}]);