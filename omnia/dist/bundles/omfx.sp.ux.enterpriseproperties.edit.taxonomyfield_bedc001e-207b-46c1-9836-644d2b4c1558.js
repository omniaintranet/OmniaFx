if("undefined"==typeof omniaLoader&&(globalThis.omniaLoader={}),omniaLoader["bb000000-0000-bbbb-0000-0000000000bb"]=omniaLoader["bb000000-0000-bbbb-0000-0000000000bb"]||{},omniaLoader["bb000000-0000-bbbb-0000-0000000000bb"]["bedc001e-207b-46c1-9836-644d2b4c1558"])throw new Error("Error, already loaded manifest bedc001e-207b-46c1-9836-644d2b4c1558 with service id bb000000-0000-bbbb-0000-0000000000bb");omniaLoader["bb000000-0000-bbbb-0000-0000000000bb"]["bedc001e-207b-46c1-9836-644d2b4c1558"]=function(){(()=>{var e={"./client/fx/sp/ux/enterpriseproperties/edit/taxonomyfield/taxonomyfieldedit.tsx":(e,t,o)=>{"use strict";o.r(t),o.d(t,{TaxonomyFieldEdit:()=>c});var r=o("./node_modules/@vue/composition-api/dist/vue-composition-api.mjs"),b=o("./node_modules/vue-class-component/dist/vue-class-component.esm.js"),i=o("./node_modules/vue-property-decorator/lib/vue-property-decorator.js"),s=o("14a8d443-2e58-450b-a462-258bdaf69b49").setCurrentManifest("bb000000-0000-bbbb-0000-0000000000bb","bedc001e-207b-46c1-9836-644d2b4c1558"),d=o("d7327742-5647-4075-b7ab-4f9ca852addb").setCurrentManifest("bb000000-0000-bbbb-0000-0000000000bb","bedc001e-207b-46c1-9836-644d2b4c1558"),n=o("5e618f4d-d014-414e-a681-89e34cbeda0f"),a=Object.defineProperty,p=Object.getOwnPropertyDescriptor,l=(e,t,o,r)=>{for(var b,i=r>1?void 0:r?p(t,o):t,s=e.length-1;s>=0;s--)(b=e[s])&&(i=(r?b(t,o,i):b(i))||i);return r&&i&&a(t,o,i),i};let c=class extends d.VueComponentBase{constructor(){super(...arguments),this.propertySettings={termSetId:null},this.isRequired=!1}mounted(){s.WebComponentBootstrapper.registerElementInstance(this,this.$el)}created(){this.valueBind[this.property.internalName]||(this.valueBind[this.property.internalName]=[]),this.property.settings&&(this.propertySettings=this.property.settings),this.isRequired=this.settings.required}beforeDestroy(){}onTermsSelectedHandler(e){this.valueBind[this.property.internalName]=e,this.onValueChanged&&this.onValueChanged(e),this.$forceUpdate()}render(){const e=s.EnterprisePropertyHandler.ensureEnterprisePropertiesLabel(this.property.multilingualTitle,this.isRequired,this.settings.showLabel,this.settings.customLabel);return(0,r.h)("div",[(0,r.h)("omfx-term-picker",{attrs:{allowCreateNewTerm:!0,disabled:this.disabled,label:e,multi:this.settings.allowMultipleValues,required:this.isRequired},domProps:{termSetId:this.propertySettings.termSetId,preSelectedTermIds:this.valueBind[this.property.internalName],lcid:this.lcid,onTermsSelected:this.onTermsSelectedHandler,validator:this.useValidator,description:this.multilingualStore.getters.stringValue(this.settings.description)}})])}};l([(0,i.Prop)()],c.prototype,"valueBind",2),l([(0,i.Prop)()],c.prototype,"onValueChanged",2),l([(0,i.Prop)()],c.prototype,"disabled",2),l([(0,i.Prop)()],c.prototype,"property",2),l([(0,i.Prop)({default:!1})],c.prototype,"dark",2),l([(0,i.Prop)()],c.prototype,"lcid",2),l([(0,i.Prop)({default:null})],c.prototype,"settings",2),l([(0,s.Inject)(n.MultilingualStore)],c.prototype,"multilingualStore",2),c=l([b.default],c),s.WebComponentBootstrapper.registerElement((e=>{(0,s.vueCustomElement)(e.elementName,c)}))},"./node_modules/@vue/composition-api/dist/vue-composition-api.mjs":(e,t,o)=>{e.exports=o("dll-reference md2")("./node_modules/@vue/composition-api/dist/vue-composition-api.mjs")},"./node_modules/vue-class-component/dist/vue-class-component.esm.js":(e,t,o)=>{e.exports=o("dll-reference md2")("./node_modules/vue-class-component/dist/vue-class-component.esm.js")},"./node_modules/vue-property-decorator/lib/vue-property-decorator.js":(e,t,o)=>{e.exports=o("dll-reference md2")("./node_modules/vue-property-decorator/lib/vue-property-decorator.js")},"14a8d443-2e58-450b-a462-258bdaf69b49":(e,t,o)=>{e.exports=o("dll-reference md10")("14a8d443-2e58-450b-a462-258bdaf69b49")},"5e618f4d-d014-414e-a681-89e34cbeda0f":(e,t,o)=>{e.exports=o("dll-reference md10")("5e618f4d-d014-414e-a681-89e34cbeda0f")},"d7327742-5647-4075-b7ab-4f9ca852addb":(e,t,o)=>{e.exports=o("dll-reference md66")("d7327742-5647-4075-b7ab-4f9ca852addb")},"dll-reference md2":e=>{"use strict";e.exports=omniaVendor},"dll-reference md10":e=>{"use strict";e.exports=omniaWebpackJsonp["bb000000-0000-bbbb-0000-0000000000bb"]["a5a89056-b5f5-475d-8518-a1f55090379d"]},"dll-reference md66":e=>{"use strict";e.exports=omniaWebpackJsonp["bb000000-0000-bbbb-0000-0000000000bb"]["dee030cc-4ab3-4158-bb06-8049f5c67542"]}};if("undefined"==typeof omniaWebpackJsonp&&(globalThis.omniaWebpackJsonp={}),globalThis.omniaWebpackJsonp["bb000000-0000-bbbb-0000-0000000000bb"]=globalThis.omniaWebpackJsonp["bb000000-0000-bbbb-0000-0000000000bb"]||{},globalThis.omniaWebpackJsonp["bb000000-0000-bbbb-0000-0000000000bb"]["bedc001e-207b-46c1-9836-644d2b4c1558"])throw new Error("Error, already loaded manifest bedc001e-207b-46c1-9836-644d2b4c1558 with service id bb000000-0000-bbbb-0000-0000000000bb");globalThis.omniaWebpackJsonp["bb000000-0000-bbbb-0000-0000000000bb"]["bedc001e-207b-46c1-9836-644d2b4c1558"]=o;var t={};function o(r){var b=t[r];if(void 0!==b)return b.exports;var i=t[r]={exports:{}};return e[r](i,i.exports,o),i.exports}o.d=(e,t)=>{for(var r in t)o.o(t,r)&&!o.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},o.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),o.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})};o("./client/fx/sp/ux/enterpriseproperties/edit/taxonomyfield/taxonomyfieldedit.tsx")})()};