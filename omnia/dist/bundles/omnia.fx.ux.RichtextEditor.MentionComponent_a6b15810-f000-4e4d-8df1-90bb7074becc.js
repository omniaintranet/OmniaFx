if("undefined"==typeof omniaLoader&&(globalThis.omniaLoader={}),omniaLoader["bb000000-0000-bbbb-0000-0000000000bb"]=omniaLoader["bb000000-0000-bbbb-0000-0000000000bb"]||{},omniaLoader["bb000000-0000-bbbb-0000-0000000000bb"]["a6b15810-f000-4e4d-8df1-90bb7074becc"])throw new Error("Error, already loaded manifest a6b15810-f000-4e4d-8df1-90bb7074becc with service id bb000000-0000-bbbb-0000-0000000000bb");omniaLoader["bb000000-0000-bbbb-0000-0000000000bb"]["a6b15810-f000-4e4d-8df1-90bb7074becc"]=function(){(()=>{var e={"./client/fx/ux/richtexteditor/mentioncomponent/mentioncomponent.tsx":(e,o,t)=>{"use strict";t.r(o),t.d(o,{MentionComponent:()=>x});var b=t("./node_modules/@vue/composition-api/dist/vue-composition-api.mjs"),r=t("./node_modules/vue-class-component/dist/vue-class-component.esm.js"),n=t("8610c059-395a-45c2-804a-8c236f4d60d9"),s=t("14a8d443-2e58-450b-a462-258bdaf69b49").setCurrentManifest("bb000000-0000-bbbb-0000-0000000000bb","a6b15810-f000-4e4d-8df1-90bb7074becc"),d=t("./node_modules/vue-property-decorator/lib/vue-property-decorator.js"),a=t("./client/fx/ux/styleflow.js"),i=t("./client/fx/ux/models/index.js"),l=t("d7327742-5647-4075-b7ab-4f9ca852addb").setCurrentManifest("bb000000-0000-bbbb-0000-0000000000bb","a6b15810-f000-4e4d-8df1-90bb7074becc"),c=t("d0a145a7-d1ef-4217-aa6f-85dd18c4231d"),p=t("./node_modules/csx/lib.es2015/index.js");a.StyleFlow.define(i.MentionStyles,{mentionWrapper:e=>{let o=e.body.text.color.base;return o||(o=e.body.bg.dark?e.body.bg.color.lighten5:e.body.bg.color.darken4),{$nest:{[`&.${c.Constants.ux.components.richTextEditor.RTEClass} a`]:{color:(0,p.important)(o),textDecoration:"inherit",fontStyle:"inherit"},[`&.${c.Constants.ux.components.richTextEditor.RTEClass} .v-btn`]:{color:(0,p.important)(o),textDecoration:"inherit",fontStyle:"inherit"}}}}});var m=Object.defineProperty,f=Object.getOwnPropertyDescriptor,u=(e,o,t,b)=>{for(var r,n=b>1?void 0:b?f(o,t):o,s=e.length-1;s>=0;s--)(r=e[s])&&(n=(b?r(o,t,n):r(n))||n);return b&&n&&m(o,t,n),n};let x=class extends n.VueComponentBase{constructor(){super(...arguments),this.mentionClasses=a.StyleFlow.use(i.MentionStyles)}created(){}mounted(){s.WebComponentBootstrapper.registerElementInstance(this,this.$el)}render(){return(0,b.h)("span",{class:[this.mentionClasses.mentionWrapper(this.theming),c.Constants.ux.components.richTextEditor.RTEClass]},[this.userName?(0,b.h)("omfx-profilecard",{domProps:{userName:this.userName},attrs:{tabindex:0,contentClass:["d-inline"],target:"_blank",href:this.url},scopedSlots:{renderChildren:()=>(0,b.h)("span",{style:{display:"inline-block",marginBottom:"5px"}},[this.userLabel])}}):(0,b.h)("a",{attrs:{target:"_blank",href:this.url}},[this.userLabel])])}};u([(0,d.Prop)()],x.prototype,"userName",2),u([(0,d.Prop)()],x.prototype,"userLabel",2),u([(0,d.Prop)()],x.prototype,"url",2),u([(0,s.Inject)(l.OmniaTheming)],x.prototype,"omniaTheming",2),x=u([r.default],x),s.WebComponentBootstrapper.registerElement((e=>{(0,s.vueCustomElement)(e.elementName,x,{destroyTimeout:1e3})}))},"./client/fx/ux/models/index.js":(e,o,t)=>{e.exports=t("dll-reference md66")("./client/fx/ux/models/index.js")},"./client/fx/ux/styleflow.js":(e,o,t)=>{e.exports=t("dll-reference md66")("./client/fx/ux/styleflow.js")},"./node_modules/@vue/composition-api/dist/vue-composition-api.mjs":(e,o,t)=>{e.exports=t("dll-reference md2")("./node_modules/@vue/composition-api/dist/vue-composition-api.mjs")},"./node_modules/csx/lib.es2015/index.js":(e,o,t)=>{e.exports=t("dll-reference md2")("./node_modules/csx/lib.es2015/index.js")},"./node_modules/vue-class-component/dist/vue-class-component.esm.js":(e,o,t)=>{e.exports=t("dll-reference md2")("./node_modules/vue-class-component/dist/vue-class-component.esm.js")},"./node_modules/vue-property-decorator/lib/vue-property-decorator.js":(e,o,t)=>{e.exports=t("dll-reference md2")("./node_modules/vue-property-decorator/lib/vue-property-decorator.js")},"14a8d443-2e58-450b-a462-258bdaf69b49":(e,o,t)=>{e.exports=t("dll-reference md10")("14a8d443-2e58-450b-a462-258bdaf69b49")},"8610c059-395a-45c2-804a-8c236f4d60d9":(e,o,t)=>{e.exports=t("dll-reference md66")("8610c059-395a-45c2-804a-8c236f4d60d9")},"d0a145a7-d1ef-4217-aa6f-85dd18c4231d":(e,o,t)=>{e.exports=t("dll-reference md9")("d0a145a7-d1ef-4217-aa6f-85dd18c4231d")},"d7327742-5647-4075-b7ab-4f9ca852addb":(e,o,t)=>{e.exports=t("dll-reference md66")("d7327742-5647-4075-b7ab-4f9ca852addb")},"dll-reference md2":e=>{"use strict";e.exports=omniaVendor},"dll-reference md9":e=>{"use strict";e.exports=omniaWebpackJsonp["bb000000-0000-bbbb-0000-0000000000bb"]["a2892051-fd9f-4056-ae8d-30d16d48417d"]},"dll-reference md10":e=>{"use strict";e.exports=omniaWebpackJsonp["bb000000-0000-bbbb-0000-0000000000bb"]["a5a89056-b5f5-475d-8518-a1f55090379d"]},"dll-reference md66":e=>{"use strict";e.exports=omniaWebpackJsonp["bb000000-0000-bbbb-0000-0000000000bb"]["dee030cc-4ab3-4158-bb06-8049f5c67542"]}};if("undefined"==typeof omniaWebpackJsonp&&(globalThis.omniaWebpackJsonp={}),globalThis.omniaWebpackJsonp["bb000000-0000-bbbb-0000-0000000000bb"]=globalThis.omniaWebpackJsonp["bb000000-0000-bbbb-0000-0000000000bb"]||{},globalThis.omniaWebpackJsonp["bb000000-0000-bbbb-0000-0000000000bb"]["a6b15810-f000-4e4d-8df1-90bb7074becc"])throw new Error("Error, already loaded manifest a6b15810-f000-4e4d-8df1-90bb7074becc with service id bb000000-0000-bbbb-0000-0000000000bb");globalThis.omniaWebpackJsonp["bb000000-0000-bbbb-0000-0000000000bb"]["a6b15810-f000-4e4d-8df1-90bb7074becc"]=t;var o={};function t(b){var r=o[b];if(void 0!==r)return r.exports;var n=o[b]={exports:{}};return e[b](n,n.exports,t),n.exports}t.d=(e,o)=>{for(var b in o)t.o(o,b)&&!t.o(e,b)&&Object.defineProperty(e,b,{enumerable:!0,get:o[b]})},t.o=(e,o)=>Object.prototype.hasOwnProperty.call(e,o),t.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})};t("./client/fx/ux/richtexteditor/mentioncomponent/mentioncomponent.tsx")})()};