if("undefined"==typeof omniaLoader&&(globalThis.omniaLoader={}),omniaLoader["bb000000-0000-bbbb-0000-0000000000bb"]=omniaLoader["bb000000-0000-bbbb-0000-0000000000bb"]||{},omniaLoader["bb000000-0000-bbbb-0000-0000000000bb"]["a9e65570-1cd2-49ac-a6b2-af56caea6630"])throw new Error("Error, already loaded manifest a9e65570-1cd2-49ac-a6b2-af56caea6630 with service id bb000000-0000-bbbb-0000-0000000000bb");omniaLoader["bb000000-0000-bbbb-0000-0000000000bb"]["a9e65570-1cd2-49ac-a6b2-af56caea6630"]=function(){(()=>{var e={"./client/fx/ux/timeperiodpicker/timeperiodpicker.tsx":(e,t,o)=>{"use strict";o.r(t),o.d(t,{default:()=>u});var a=o("./node_modules/@vue/composition-api/dist/vue-composition-api.mjs"),s=o("./node_modules/vue/dist/vue.esm.js"),i=o("./node_modules/vue-class-component/dist/vue-class-component.esm.js"),d=o("./node_modules/vue-property-decorator/lib/vue-property-decorator.js"),r=o("14a8d443-2e58-450b-a462-258bdaf69b49").setCurrentManifest("bb000000-0000-bbbb-0000-0000000000bb","a9e65570-1cd2-49ac-a6b2-af56caea6630"),n=o("./node_modules/typestyle/umd/typestyle.js"),l=o("d0a145a7-d1ef-4217-aa6f-85dd18c4231d"),b=o("./client/fx/ux/uxmodels.js"),p=Object.defineProperty,c=Object.getOwnPropertyDescriptor,m=(e,t,o,a)=>{for(var s,i=a>1?void 0:a?c(t,o):t,d=e.length-1;d>=0;d--)(s=e[d])&&(i=(a?s(t,o,i):s(i))||i);return a&&i&&p(t,o,i),i};let u=class extends s.default{constructor(){super(...arguments),this.internalModel=null,this.flexBasis0=(0,n.style)({flexBasis:"100px !important",width:"90px"}),this.numberWrapperStyle=(0,n.style)({width:"87px"}),this.periodTypes=[{id:l.TimePeriodTypes.Days,title:this.loc.Common.Days},{id:l.TimePeriodTypes.Months,title:this.loc.Common.Months},{id:l.TimePeriodTypes.Years,title:this.loc.Common.Years}]}onValueBindChanged(){this.valueBind&&JSON.stringify(this.valueBind)==JSON.stringify(this.internalModel)||this.init()}created(){this.init()}mounted(){r.WebComponentBootstrapper.registerElementInstance(this,this.$el)}init(){this.internalModel=Object.assign({value:this.min||0,type:l.TimePeriodTypes.Days},this.valueBind),this.update()}fixTimeValue(e){let t=e?Number.parseInt(e):null;const o=parseInt(this.min);return!isNaN(o)&&(null==t||t<=o)&&(t=o),t}update(){this.onValueChanged&&this.onValueChanged(Object.assign({},this.internalModel))}render(){return(0,a.h)("v-layout",[(0,a.h)("v-flex",{attrs:{grow:!0},class:this.numberWrapperStyle},[(0,a.h)("v-text-field",{attrs:{"hide-details":this.hideDetails,disabled:this.disabled,dark:this.dark,type:"number",label:this.label,min:this.min},on:{change:e=>{this.internalModel.value=this.fixTimeValue(e),this.update()}},model:{value:this.internalModel.value,callback:e=>{this.$set(this.internalModel,"value",e)}}})]),(0,a.h)("v-flex",{attrs:{shrink:!0},class:this.flexBasis0},[(0,a.h)("v-select",{attrs:{"hide-details":this.hideDetails,disabled:this.disabled,dark:this.dark,"item-value":"id","item-text":"title",items:this.periodTypes},on:{change:()=>{this.update()}},model:{value:this.internalModel.type,callback:e=>{this.$set(this.internalModel,"type",e)}}})])])}};m([(0,d.Prop)()],u.prototype,"dark",2),m([(0,d.Prop)()],u.prototype,"valueBind",2),m([(0,d.Prop)()],u.prototype,"onValueChanged",2),m([(0,d.Prop)()],u.prototype,"min",2),m([(0,d.Prop)()],u.prototype,"label",2),m([(0,d.Prop)()],u.prototype,"disabled",2),m([(0,d.Prop)()],u.prototype,"hideDetails",2),m([(0,r.Localize)(b.OmniaUxLocalizationNamespace)],u.prototype,"loc",2),m([(0,d.Watch)("valueBind",{deep:!0,immediate:!1})],u.prototype,"onValueBindChanged",1),u=m([i.default],u),r.WebComponentBootstrapper.registerElement((e=>{(0,r.vueCustomElement)(e.elementName,u)}))},"./client/fx/ux/uxmodels.js":(e,t,o)=>{e.exports=o("dll-reference md66")("./client/fx/ux/uxmodels.js")},"./node_modules/@vue/composition-api/dist/vue-composition-api.mjs":(e,t,o)=>{e.exports=o("dll-reference md2")("./node_modules/@vue/composition-api/dist/vue-composition-api.mjs")},"./node_modules/typestyle/umd/typestyle.js":(e,t,o)=>{e.exports=o("dll-reference md2")("./node_modules/typestyle/umd/typestyle.js")},"./node_modules/vue-class-component/dist/vue-class-component.esm.js":(e,t,o)=>{e.exports=o("dll-reference md2")("./node_modules/vue-class-component/dist/vue-class-component.esm.js")},"./node_modules/vue-property-decorator/lib/vue-property-decorator.js":(e,t,o)=>{e.exports=o("dll-reference md2")("./node_modules/vue-property-decorator/lib/vue-property-decorator.js")},"./node_modules/vue/dist/vue.esm.js":(e,t,o)=>{e.exports=o("dll-reference md2")("./node_modules/vue/dist/vue.esm.js")},"14a8d443-2e58-450b-a462-258bdaf69b49":(e,t,o)=>{e.exports=o("dll-reference md10")("14a8d443-2e58-450b-a462-258bdaf69b49")},"d0a145a7-d1ef-4217-aa6f-85dd18c4231d":(e,t,o)=>{e.exports=o("dll-reference md9")("d0a145a7-d1ef-4217-aa6f-85dd18c4231d")},"dll-reference md2":e=>{"use strict";e.exports=omniaVendor},"dll-reference md9":e=>{"use strict";e.exports=omniaWebpackJsonp["bb000000-0000-bbbb-0000-0000000000bb"]["a2892051-fd9f-4056-ae8d-30d16d48417d"]},"dll-reference md10":e=>{"use strict";e.exports=omniaWebpackJsonp["bb000000-0000-bbbb-0000-0000000000bb"]["a5a89056-b5f5-475d-8518-a1f55090379d"]},"dll-reference md66":e=>{"use strict";e.exports=omniaWebpackJsonp["bb000000-0000-bbbb-0000-0000000000bb"]["dee030cc-4ab3-4158-bb06-8049f5c67542"]}};if("undefined"==typeof omniaWebpackJsonp&&(globalThis.omniaWebpackJsonp={}),globalThis.omniaWebpackJsonp["bb000000-0000-bbbb-0000-0000000000bb"]=globalThis.omniaWebpackJsonp["bb000000-0000-bbbb-0000-0000000000bb"]||{},globalThis.omniaWebpackJsonp["bb000000-0000-bbbb-0000-0000000000bb"]["a9e65570-1cd2-49ac-a6b2-af56caea6630"])throw new Error("Error, already loaded manifest a9e65570-1cd2-49ac-a6b2-af56caea6630 with service id bb000000-0000-bbbb-0000-0000000000bb");globalThis.omniaWebpackJsonp["bb000000-0000-bbbb-0000-0000000000bb"]["a9e65570-1cd2-49ac-a6b2-af56caea6630"]=o;var t={};function o(a){var s=t[a];if(void 0!==s)return s.exports;var i=t[a]={exports:{}};return e[a](i,i.exports,o),i.exports}o.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return o.d(t,{a:t}),t},o.d=(e,t)=>{for(var a in t)o.o(t,a)&&!o.o(e,a)&&Object.defineProperty(e,a,{enumerable:!0,get:t[a]})},o.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),o.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})};o("./client/fx/ux/timeperiodpicker/timeperiodpicker.tsx")})()};