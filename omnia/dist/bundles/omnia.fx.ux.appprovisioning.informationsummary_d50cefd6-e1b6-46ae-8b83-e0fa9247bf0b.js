if("undefined"==typeof omniaLoader&&(globalThis.omniaLoader={}),omniaLoader["bb000000-0000-bbbb-0000-0000000000bb"]=omniaLoader["bb000000-0000-bbbb-0000-0000000000bb"]||{},omniaLoader["bb000000-0000-bbbb-0000-0000000000bb"]["d50cefd6-e1b6-46ae-8b83-e0fa9247bf0b"])throw new Error("Error, already loaded manifest d50cefd6-e1b6-46ae-8b83-e0fa9247bf0b with service id bb000000-0000-bbbb-0000-0000000000bb");omniaLoader["bb000000-0000-bbbb-0000-0000000000bb"]["d50cefd6-e1b6-46ae-8b83-e0fa9247bf0b"]=function(){(()=>{var e={"./client/fx/ux/appprovisioning/summary/informationstepsummary.tsx":(e,t,a)=>{"use strict";a.r(t),a.d(t,{InformationStepSummary:()=>y});var o=a("./node_modules/vue-class-component/dist/vue-class-component.esm.js"),r=a("./node_modules/vue-property-decorator/lib/vue-property-decorator.js"),s=a("./node_modules/@vue/composition-api/dist/vue-composition-api.mjs"),b=a("d7327742-5647-4075-b7ab-4f9ca852addb").setCurrentManifest("bb000000-0000-bbbb-0000-0000000000bb","d50cefd6-e1b6-46ae-8b83-e0fa9247bf0b"),n=a("14a8d443-2e58-450b-a462-258bdaf69b49").setCurrentManifest("bb000000-0000-bbbb-0000-0000000000bb","d50cefd6-e1b6-46ae-8b83-e0fa9247bf0b"),i=a("97786ea9-4861-48bd-8a57-eae9bbdb4892"),d=a("d0a145a7-d1ef-4217-aa6f-85dd18c4231d"),p=a("8610c059-395a-45c2-804a-8c236f4d60d9"),l=a("./client/fx/ux/appprovisioning/components/summaryinfo/summaryinfostate.js"),c=a("e25b9dd8-6dd7-4437-8ddd-0b9fadba73ac"),m=a("5e618f4d-d014-414e-a681-89e34cbeda0f"),f=Object.defineProperty,u=Object.getOwnPropertyDescriptor,h=(e,t,a,o)=>{for(var r,s=o>1?void 0:o?u(t,a):t,b=e.length-1;b>=0;b--)(r=e[b])&&(s=(o?r(t,a,s):r(s))||s);return o&&s&&f(t,a,s),s};let y=class extends p.VueComponentBase{constructor(){super(...arguments),this.renderer=null,this.styles=b.StyleFlow.use(b.WizardStyles)}created(){this.renderer=this.summaryInfoState.getInformationSummaryRenderer()}mounted(){n.WebComponentBootstrapper.registerElementInstance(this,this.$el)}renderDefaultUI(){return(0,s.h)("div",{class:this.theming.body.text.css},[(0,s.h)("div",{class:[this.styles.summaryHeadingStyles,"subtitle-2"]},[this.omniaUxLoc.Common.Title]),(0,s.h)("div",{class:"mb-7"},[this.multilingualStore.getters.stringValue(this.appInstance.title,d.MultilingualScopes.BusinessProfile)]),this.appInstance.description&&[(0,s.h)("div",{class:[this.styles.summaryHeadingStyles,"subtitle-2 mt-2"]},[this.omniaUxLoc.Common.Description]),(0,s.h)("div",{class:"mb-7"},[this.multilingualStore.getters.stringValue(this.appInstance.title,d.MultilingualScopes.BusinessProfile)])],(0,s.h)("div",{class:[this.styles.summaryHeadingStyles,"subtitle-2 mt-2"]},[this.omniaUxLoc.Apps.ShowInPublicListings]),(0,s.h)("div",{class:"mb-7"},[this.appInstance.showInPublicListings?this.omniaUxLoc.Common.Yes:this.omniaUxLoc.Common.No])])}renderElement(e){return(0,s.h)(e,{domProps:{appInstance:this.appInstance,appTemplate:this.appTemplate}})}renderInformation(){return[this.renderer?.hideDefaultUI?null:this.renderDefaultUI(),this.renderer?.element?this.renderElement(this.renderer.element):null]}render(){return(0,s.h)("v-row",{attrs:{"no-gutters":!0}},[(0,s.h)("v-col",{attrs:{cols:this.wizardSize.cols},class:["py-0",12!==this.wizardSize.cols?"pr-8":""]},[this.renderInformation()]),this.appInstance.image&&(0,s.h)("v-col",{attrs:{cols:this.wizardSize.cols},class:["py-0",12!==this.wizardSize.cols?"pl-8":""]},[(0,s.h)("img",{style:{maxHeight:d.Constants.ux.apps.provisioningRenderingMaxHeight+"px"},attrs:{src:this.mediaPickerService.getImageUrl(this.appInstance.image),alt:this.appInstance.image.altText}})])])}};h([(0,r.Prop)()],y.prototype,"appInstance",2),h([(0,r.Prop)()],y.prototype,"appTemplate",2),h([(0,n.Localize)(b.OmniaUxLocalizationNamespace)],y.prototype,"omniaUxLoc",2),h([(0,i.Inject)(l.SummaryInfoState)],y.prototype,"summaryInfoState",2),h([(0,i.Inject)(b.WizardSize)],y.prototype,"wizardSize",2),h([(0,i.Inject)(c.MediaPickerService)],y.prototype,"mediaPickerService",2),h([(0,i.Inject)(m.MultilingualStore)],y.prototype,"multilingualStore",2),y=h([o.default],y),n.WebComponentBootstrapper.registerElement((e=>{(0,n.vueCustomElement)(e.elementName,y)}))},"./client/fx/ux/appprovisioning/components/summaryinfo/summaryinfostate.js":(e,t,a)=>{e.exports=a("dll-reference md32")("./client/fx/ux/appprovisioning/components/summaryinfo/summaryinfostate.js")},"./node_modules/@vue/composition-api/dist/vue-composition-api.mjs":(e,t,a)=>{e.exports=a("dll-reference md2")("./node_modules/@vue/composition-api/dist/vue-composition-api.mjs")},"./node_modules/vue-class-component/dist/vue-class-component.esm.js":(e,t,a)=>{e.exports=a("dll-reference md2")("./node_modules/vue-class-component/dist/vue-class-component.esm.js")},"./node_modules/vue-property-decorator/lib/vue-property-decorator.js":(e,t,a)=>{e.exports=a("dll-reference md2")("./node_modules/vue-property-decorator/lib/vue-property-decorator.js")},"14a8d443-2e58-450b-a462-258bdaf69b49":(e,t,a)=>{e.exports=a("dll-reference md10")("14a8d443-2e58-450b-a462-258bdaf69b49")},"5e618f4d-d014-414e-a681-89e34cbeda0f":(e,t,a)=>{e.exports=a("dll-reference md10")("5e618f4d-d014-414e-a681-89e34cbeda0f")},"8610c059-395a-45c2-804a-8c236f4d60d9":(e,t,a)=>{e.exports=a("dll-reference md66")("8610c059-395a-45c2-804a-8c236f4d60d9")},"97786ea9-4861-48bd-8a57-eae9bbdb4892":(e,t,a)=>{e.exports=a("dll-reference md9")("97786ea9-4861-48bd-8a57-eae9bbdb4892")},"d0a145a7-d1ef-4217-aa6f-85dd18c4231d":(e,t,a)=>{e.exports=a("dll-reference md9")("d0a145a7-d1ef-4217-aa6f-85dd18c4231d")},"d7327742-5647-4075-b7ab-4f9ca852addb":(e,t,a)=>{e.exports=a("dll-reference md66")("d7327742-5647-4075-b7ab-4f9ca852addb")},"e25b9dd8-6dd7-4437-8ddd-0b9fadba73ac":(e,t,a)=>{e.exports=a("dll-reference md10")("e25b9dd8-6dd7-4437-8ddd-0b9fadba73ac")},"dll-reference md2":e=>{"use strict";e.exports=omniaVendor},"dll-reference md32":e=>{"use strict";e.exports=omniaWebpackJsonp["bb000000-0000-bbbb-0000-0000000000bb"]["61540ff7-266a-4142-a42e-c62ba077f0b9"]},"dll-reference md9":e=>{"use strict";e.exports=omniaWebpackJsonp["bb000000-0000-bbbb-0000-0000000000bb"]["a2892051-fd9f-4056-ae8d-30d16d48417d"]},"dll-reference md10":e=>{"use strict";e.exports=omniaWebpackJsonp["bb000000-0000-bbbb-0000-0000000000bb"]["a5a89056-b5f5-475d-8518-a1f55090379d"]},"dll-reference md66":e=>{"use strict";e.exports=omniaWebpackJsonp["bb000000-0000-bbbb-0000-0000000000bb"]["dee030cc-4ab3-4158-bb06-8049f5c67542"]}};if("undefined"==typeof omniaWebpackJsonp&&(globalThis.omniaWebpackJsonp={}),globalThis.omniaWebpackJsonp["bb000000-0000-bbbb-0000-0000000000bb"]=globalThis.omniaWebpackJsonp["bb000000-0000-bbbb-0000-0000000000bb"]||{},globalThis.omniaWebpackJsonp["bb000000-0000-bbbb-0000-0000000000bb"]["d50cefd6-e1b6-46ae-8b83-e0fa9247bf0b"])throw new Error("Error, already loaded manifest d50cefd6-e1b6-46ae-8b83-e0fa9247bf0b with service id bb000000-0000-bbbb-0000-0000000000bb");globalThis.omniaWebpackJsonp["bb000000-0000-bbbb-0000-0000000000bb"]["d50cefd6-e1b6-46ae-8b83-e0fa9247bf0b"]=a;var t={};function a(o){var r=t[o];if(void 0!==r)return r.exports;var s=t[o]={exports:{}};return e[o](s,s.exports,a),s.exports}a.d=(e,t)=>{for(var o in t)a.o(t,o)&&!a.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:t[o]})},a.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),a.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})};a("./client/fx/ux/appprovisioning/summary/informationstepsummary.tsx")})()};