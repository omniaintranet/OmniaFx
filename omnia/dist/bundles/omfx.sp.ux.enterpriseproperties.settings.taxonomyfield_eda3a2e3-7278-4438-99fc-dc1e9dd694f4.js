if("undefined"==typeof omniaLoader&&(globalThis.omniaLoader={}),omniaLoader["bb000000-0000-bbbb-0000-0000000000bb"]=omniaLoader["bb000000-0000-bbbb-0000-0000000000bb"]||{},omniaLoader["bb000000-0000-bbbb-0000-0000000000bb"]["eda3a2e3-7278-4438-99fc-dc1e9dd694f4"])throw new Error("Error, already loaded manifest eda3a2e3-7278-4438-99fc-dc1e9dd694f4 with service id bb000000-0000-bbbb-0000-0000000000bb");omniaLoader["bb000000-0000-bbbb-0000-0000000000bb"]["eda3a2e3-7278-4438-99fc-dc1e9dd694f4"]=function(){(()=>{var e={"./client/fx/sp/ux/enterpriseproperties/settings/taxonomyfield/taxonomyfieldsettings.tsx":(e,t,o)=>{"use strict";o.r(t),o.d(t,{TaxonomyFieldSettings:()=>y});var r=o("./node_modules/@vue/composition-api/dist/vue-composition-api.mjs"),s=o("./node_modules/vue-class-component/dist/vue-class-component.esm.js"),d=o("./node_modules/vue-property-decorator/lib/vue-property-decorator.js"),a=o("d7327742-5647-4075-b7ab-4f9ca852addb").setCurrentManifest("bb000000-0000-bbbb-0000-0000000000bb","eda3a2e3-7278-4438-99fc-dc1e9dd694f4"),b=o("bf86b3f8-7274-47e4-9e27-87ae1cf65a23");a.StyleFlow.define(b.TaxonomyFieldSettingsStyles,{active:e=>({color:e})});var i,n=o("14a8d443-2e58-450b-a462-258bdaf69b49").setCurrentManifest("bb000000-0000-bbbb-0000-0000000000bb","eda3a2e3-7278-4438-99fc-dc1e9dd694f4"),p=o("d0a145a7-d1ef-4217-aa6f-85dd18c4231d"),l=o("./client/fx/sp/stores/index.js");(i||(i={})).namespace="Omnia.Ux.EnterpriseProperties.Settings.Taxonomy";var c=o("5e618f4d-d014-414e-a681-89e34cbeda0f"),m=Object.defineProperty,f=Object.getOwnPropertyDescriptor,u=(e,t,o,r)=>{for(var s,d=r>1?void 0:r?f(t,o):t,a=e.length-1;a>=0;a--)(s=e[a])&&(d=(r?s(t,o,d):s(d))||d);return r&&d&&m(t,o,d),d};let y=class extends d.Vue{constructor(){super(...arguments),this.taxonomyFieldClasses=a.StyleFlow.use(b.TaxonomyFieldSettingsStyles),this.settings={termSetId:null},this.originalSettings=null}mounted(){n.WebComponentBootstrapper.registerElementInstance(this,this.$el)}created(){this.taxonomyFieldClasses=a.StyleFlow.use(b.TaxonomyFieldSettingsStyles,this.styles);const e=this.propertyStore.getters.enterprisePropertyDefinitions().find((e=>e.id==this.property.id&&e.enterprisePropertyDataType.indexedType==p.PropertyIndexedType.Taxonomy));e.settings&&(this.originalSettings=e.settings),this.property.settings&&(this.settings=this.property.settings)}onTermSetChanged(e){this.settings.termSetId=e?e.toString():null,this.property.settings=this.settings}renderTermSetTreeview(){const e=this.disabled&&this.originalSettings&&null!=this.originalSettings.termSetId&&this.originalSettings.termSetId!=p.Guid.empty;return(0,r.h)("div",[(0,r.h)("omfx-termset-picker",{attrs:{scrollableMaxHeight:300,label:this.loc.TermSet,disabled:e},domProps:{termSetId:this.settings.termSetId,onChanged:e=>{this.onTermSetChanged(e)}}}),!e&&(0,r.h)("omfx-field-validation",{domProps:{useValidator:this.useValidator,checkValue:this.settings.termSetId,rules:(new a.FieldValueValidation).IsRequired().getRules()}})])}render(){return(0,r.h)("div",[(0,r.h)("v-flex",{attrs:{xs12:!0}},[this.renderTermSetTreeview()])])}};u([(0,d.Prop)()],y.prototype,"property",2),u([(0,d.Prop)()],y.prototype,"disabled",2),u([(0,d.Prop)({default:!1})],y.prototype,"dark",2),u([(0,d.Prop)()],y.prototype,"styles",2),u([(0,d.Prop)({default:null})],y.prototype,"useValidator",2),u([(0,n.Localize)(i.namespace)],y.prototype,"loc",2),u([(0,n.Inject)(a.OmniaTheming)],y.prototype,"omniaTheming",2),u([(0,n.Inject)(l.TermStore)],y.prototype,"termStore",2),u([(0,n.Inject)(c.EnterprisePropertyStore)],y.prototype,"propertyStore",2),y=u([s.default],y),n.WebComponentBootstrapper.registerElement((e=>{(0,n.vueCustomElement)(e.elementName,y)}))},"./client/fx/sp/stores/index.js":(e,t,o)=>{e.exports=o("dll-reference md20")("./client/fx/sp/stores/index.js")},"./node_modules/@vue/composition-api/dist/vue-composition-api.mjs":(e,t,o)=>{e.exports=o("dll-reference md2")("./node_modules/@vue/composition-api/dist/vue-composition-api.mjs")},"./node_modules/vue-class-component/dist/vue-class-component.esm.js":(e,t,o)=>{e.exports=o("dll-reference md2")("./node_modules/vue-class-component/dist/vue-class-component.esm.js")},"./node_modules/vue-property-decorator/lib/vue-property-decorator.js":(e,t,o)=>{e.exports=o("dll-reference md2")("./node_modules/vue-property-decorator/lib/vue-property-decorator.js")},"14a8d443-2e58-450b-a462-258bdaf69b49":(e,t,o)=>{e.exports=o("dll-reference md10")("14a8d443-2e58-450b-a462-258bdaf69b49")},"5e618f4d-d014-414e-a681-89e34cbeda0f":(e,t,o)=>{e.exports=o("dll-reference md10")("5e618f4d-d014-414e-a681-89e34cbeda0f")},"bf86b3f8-7274-47e4-9e27-87ae1cf65a23":(e,t,o)=>{e.exports=o("dll-reference md19")("bf86b3f8-7274-47e4-9e27-87ae1cf65a23")},"d0a145a7-d1ef-4217-aa6f-85dd18c4231d":(e,t,o)=>{e.exports=o("dll-reference md9")("d0a145a7-d1ef-4217-aa6f-85dd18c4231d")},"d7327742-5647-4075-b7ab-4f9ca852addb":(e,t,o)=>{e.exports=o("dll-reference md66")("d7327742-5647-4075-b7ab-4f9ca852addb")},"dll-reference md2":e=>{"use strict";e.exports=omniaVendor},"dll-reference md19":e=>{"use strict";e.exports=omniaWebpackJsonp["bb000000-0000-bbbb-0000-0000000000bb"]["93b0c582-b7e3-4b47-9b22-4412bd7df9e5"]},"dll-reference md9":e=>{"use strict";e.exports=omniaWebpackJsonp["bb000000-0000-bbbb-0000-0000000000bb"]["a2892051-fd9f-4056-ae8d-30d16d48417d"]},"dll-reference md10":e=>{"use strict";e.exports=omniaWebpackJsonp["bb000000-0000-bbbb-0000-0000000000bb"]["a5a89056-b5f5-475d-8518-a1f55090379d"]},"dll-reference md66":e=>{"use strict";e.exports=omniaWebpackJsonp["bb000000-0000-bbbb-0000-0000000000bb"]["dee030cc-4ab3-4158-bb06-8049f5c67542"]},"dll-reference md20":e=>{"use strict";e.exports=omniaWebpackJsonp["bb000000-0000-bbbb-0000-0000000000bb"]["fa502cf2-bcf9-4dc0-b4f9-13dc63c04bfc"]}};if("undefined"==typeof omniaWebpackJsonp&&(globalThis.omniaWebpackJsonp={}),globalThis.omniaWebpackJsonp["bb000000-0000-bbbb-0000-0000000000bb"]=globalThis.omniaWebpackJsonp["bb000000-0000-bbbb-0000-0000000000bb"]||{},globalThis.omniaWebpackJsonp["bb000000-0000-bbbb-0000-0000000000bb"]["eda3a2e3-7278-4438-99fc-dc1e9dd694f4"])throw new Error("Error, already loaded manifest eda3a2e3-7278-4438-99fc-dc1e9dd694f4 with service id bb000000-0000-bbbb-0000-0000000000bb");globalThis.omniaWebpackJsonp["bb000000-0000-bbbb-0000-0000000000bb"]["eda3a2e3-7278-4438-99fc-dc1e9dd694f4"]=o;var t={};function o(r){var s=t[r];if(void 0!==s)return s.exports;var d=t[r]={exports:{}};return e[r](d,d.exports,o),d.exports}o.d=(e,t)=>{for(var r in t)o.o(t,r)&&!o.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},o.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),o.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})};o("./client/fx/sp/ux/enterpriseproperties/settings/taxonomyfield/taxonomyfieldsettings.tsx")})()};