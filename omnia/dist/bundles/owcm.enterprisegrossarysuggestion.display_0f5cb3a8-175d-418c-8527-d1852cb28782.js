if("undefined"==typeof omniaLoader&&(globalThis.omniaLoader={}),omniaLoader["bb000000-0000-bbbb-0000-0000000000bb"]=omniaLoader["bb000000-0000-bbbb-0000-0000000000bb"]||{},omniaLoader["bb000000-0000-bbbb-0000-0000000000bb"]["0f5cb3a8-175d-418c-8527-d1852cb28782"])throw new Error("Error, already loaded manifest 0f5cb3a8-175d-418c-8527-d1852cb28782 with service id bb000000-0000-bbbb-0000-0000000000bb");omniaLoader["bb000000-0000-bbbb-0000-0000000000bb"]["0f5cb3a8-175d-418c-8527-d1852cb28782"]=function(){(()=>{var e={"./client/fx/ux/richtexteditor/extensions/enterpriseglossarylink/components/suggestioncomponent.tsx":(e,r,t)=>{"use strict";t.r(r),t.d(r,{SuggestionComponent:()=>c});var o=t("./node_modules/vue-class-component/dist/vue-class-component.esm.js"),s=t("./node_modules/vue-property-decorator/lib/vue-property-decorator.js"),b=t("14a8d443-2e58-450b-a462-258bdaf69b49").setCurrentManifest("bb000000-0000-bbbb-0000-0000000000bb","0f5cb3a8-175d-418c-8527-d1852cb28782"),n=t("d7327742-5647-4075-b7ab-4f9ca852addb").setCurrentManifest("bb000000-0000-bbbb-0000-0000000000bb","0f5cb3a8-175d-418c-8527-d1852cb28782"),a=t("d0a145a7-d1ef-4217-aa6f-85dd18c4231d"),d=t("5e618f4d-d014-414e-a681-89e34cbeda0f"),i=Object.defineProperty,p=Object.getOwnPropertyDescriptor,l=(e,r,t,o)=>{for(var s,b=o>1?void 0:o?p(r,t):r,n=e.length-1;n>=0;n--)(s=e[n])&&(b=(o?s(r,t,b):s(b))||b);return o&&b&&i(r,t,b),b};let c=class extends n.VueComponentBase{constructor(){super(...arguments),this.enterpriseGlossaryMapping={id:a.Guid.empty,enterpriseGlossaryId:0,name:"",value:null}}onMappingChanged(){this.init()}mounted(){b.WebComponentBootstrapper.registerElementInstance(this,this.$el)}created(){this.init()}init(){this.enterpriseGlossaryMappingId&&this.enterpriseGlossaryStore.actions.ensureEnterpriseGlossaryMapping.dispatch(this.enterpriseGlossaryMappingId).then((()=>{this.enterpriseGlossaryMapping=this.enterpriseGlossaryStore.getters.getEnterpriseGlossaryMapping(this.enterpriseGlossaryMappingId)}))}render(){if(!this.enterpriseGlossaryMapping||this.enterpriseGlossaryMapping.id===a.Guid.empty)return null;const e=this.enterpriseGlossaryMapping.value.displayManifestId;return this.createElementByManifestId(e,null,{domProps:{enterpriseGlossaryMappingId:this.enterpriseGlossaryMappingId}})}};l([(0,b.Inject)(d.MultilingualStore)],c.prototype,"multilingualStore",2),l([(0,b.Inject)(d.EnterpriseGlossaryStore)],c.prototype,"enterpriseGlossaryStore",2),l([(0,s.Prop)()],c.prototype,"enterpriseGlossaryMappingId",2),l([(0,s.Watch)("enterpriseGlossaryMappingId",{immediate:!1,deep:!0})],c.prototype,"onMappingChanged",1),c=l([o.default],c),b.WebComponentBootstrapper.registerElement((e=>{(0,b.vueCustomElement)(e.elementName,c,{destroyTimeout:1e3})}))},"./node_modules/vue-class-component/dist/vue-class-component.esm.js":(e,r,t)=>{e.exports=t("dll-reference md2")("./node_modules/vue-class-component/dist/vue-class-component.esm.js")},"./node_modules/vue-property-decorator/lib/vue-property-decorator.js":(e,r,t)=>{e.exports=t("dll-reference md2")("./node_modules/vue-property-decorator/lib/vue-property-decorator.js")},"14a8d443-2e58-450b-a462-258bdaf69b49":(e,r,t)=>{e.exports=t("dll-reference md10")("14a8d443-2e58-450b-a462-258bdaf69b49")},"5e618f4d-d014-414e-a681-89e34cbeda0f":(e,r,t)=>{e.exports=t("dll-reference md10")("5e618f4d-d014-414e-a681-89e34cbeda0f")},"d0a145a7-d1ef-4217-aa6f-85dd18c4231d":(e,r,t)=>{e.exports=t("dll-reference md9")("d0a145a7-d1ef-4217-aa6f-85dd18c4231d")},"d7327742-5647-4075-b7ab-4f9ca852addb":(e,r,t)=>{e.exports=t("dll-reference md66")("d7327742-5647-4075-b7ab-4f9ca852addb")},"dll-reference md2":e=>{"use strict";e.exports=omniaVendor},"dll-reference md9":e=>{"use strict";e.exports=omniaWebpackJsonp["bb000000-0000-bbbb-0000-0000000000bb"]["a2892051-fd9f-4056-ae8d-30d16d48417d"]},"dll-reference md10":e=>{"use strict";e.exports=omniaWebpackJsonp["bb000000-0000-bbbb-0000-0000000000bb"]["a5a89056-b5f5-475d-8518-a1f55090379d"]},"dll-reference md66":e=>{"use strict";e.exports=omniaWebpackJsonp["bb000000-0000-bbbb-0000-0000000000bb"]["dee030cc-4ab3-4158-bb06-8049f5c67542"]}};if("undefined"==typeof omniaWebpackJsonp&&(globalThis.omniaWebpackJsonp={}),globalThis.omniaWebpackJsonp["bb000000-0000-bbbb-0000-0000000000bb"]=globalThis.omniaWebpackJsonp["bb000000-0000-bbbb-0000-0000000000bb"]||{},globalThis.omniaWebpackJsonp["bb000000-0000-bbbb-0000-0000000000bb"]["0f5cb3a8-175d-418c-8527-d1852cb28782"])throw new Error("Error, already loaded manifest 0f5cb3a8-175d-418c-8527-d1852cb28782 with service id bb000000-0000-bbbb-0000-0000000000bb");globalThis.omniaWebpackJsonp["bb000000-0000-bbbb-0000-0000000000bb"]["0f5cb3a8-175d-418c-8527-d1852cb28782"]=t;var r={};function t(o){var s=r[o];if(void 0!==s)return s.exports;var b=r[o]={exports:{}};return e[o](b,b.exports,t),b.exports}t.d=(e,r)=>{for(var o in r)t.o(r,o)&&!t.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:r[o]})},t.o=(e,r)=>Object.prototype.hasOwnProperty.call(e,r),t.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})};t("./client/fx/ux/richtexteditor/extensions/enterpriseglossarylink/components/suggestioncomponent.tsx")})()};