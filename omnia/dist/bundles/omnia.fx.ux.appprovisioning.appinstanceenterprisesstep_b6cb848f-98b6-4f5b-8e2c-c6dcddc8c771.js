if("undefined"==typeof omniaLoader&&(globalThis.omniaLoader={}),omniaLoader["bb000000-0000-bbbb-0000-0000000000bb"]=omniaLoader["bb000000-0000-bbbb-0000-0000000000bb"]||{},omniaLoader["bb000000-0000-bbbb-0000-0000000000bb"]["b6cb848f-98b6-4f5b-8e2c-c6dcddc8c771"])throw new Error("Error, already loaded manifest b6cb848f-98b6-4f5b-8e2c-c6dcddc8c771 with service id bb000000-0000-bbbb-0000-0000000000bb");omniaLoader["bb000000-0000-bbbb-0000-0000000000bb"]["b6cb848f-98b6-4f5b-8e2c-c6dcddc8c771"]=function(){(()=>{var e={"./client/fx/ux/appprovisioning/appprovisioningsteps/appinstanceenterprisepropertiesstep/appinstanceenterprisepropertiesstep.tsx":(e,b,t)=>{"use strict";t.r(b),t.d(b,{AppInstanceEnterprisePropertiesStep:()=>m});var o=t("./node_modules/@vue/composition-api/dist/vue-composition-api.mjs"),a=t("./node_modules/vue-class-component/dist/vue-class-component.esm.js"),n=t("14a8d443-2e58-450b-a462-258bdaf69b49").setCurrentManifest("bb000000-0000-bbbb-0000-0000000000bb","b6cb848f-98b6-4f5b-8e2c-c6dcddc8c771"),s=t("d7327742-5647-4075-b7ab-4f9ca852addb").setCurrentManifest("bb000000-0000-bbbb-0000-0000000000bb","b6cb848f-98b6-4f5b-8e2c-c6dcddc8c771"),r=t("./client/fx/ux/appprovisioning/components/index.js"),i=t("eff19cad-5557-434b-a477-1e1e2a70a2a0"),d=t("97786ea9-4861-48bd-8a57-eae9bbdb4892"),p=Object.defineProperty,c=Object.getOwnPropertyDescriptor,l=(e,b,t,o)=>{for(var a,n=o>1?void 0:o?c(b,t):b,s=e.length-1;s>=0;s--)(a=e[s])&&(n=(o?a(b,t,n):a(n))||n);return o&&n&&p(b,t,n),n};let m=class extends r.AppProvisioningStepComponentBase{constructor(){super(...arguments),this.renderKey=d.Utils.generateGuid(),this.styles=s.StyleFlow.use(s.WizardStyles)}created(){super.created(),this.appNamingPolicyValidationState.validationState&&this.subscriptionHandler.add(this.appNamingPolicyValidationState.onValidationStateChanged.subscribe((()=>{this.renderKey=d.Utils.generateGuid()})))}mounted(){n.WebComponentBootstrapper.registerElementInstance(this,this.$el),super.mounted()}render(){return(0,o.h)("div",{class:this.styles.textFieldStyles},[(0,o.h)(r.AppInstanceEnterprisePropertiesVueComponent,{key:this.renderKey,attrs:{appInstance:this.context.appInstance,useValidator:this.formValidator}})])}};l([(0,n.Localize)(s.OmniaUxLocalizationNamespace)],m.prototype,"omniaUxLoc",2),l([(0,n.Inject)(i.AppNamingPolicyValidationState)],m.prototype,"appNamingPolicyValidationState",2),l([(0,n.Inject)(d.SubscriptionHandler)],m.prototype,"subscriptionHandler",2),m=l([a.default],m),n.WebComponentBootstrapper.registerElement((e=>{(0,n.vueCustomElement)(e.elementName,m)}))},"./client/fx/ux/appprovisioning/components/index.js":(e,b,t)=>{e.exports=t("dll-reference md32")("./client/fx/ux/appprovisioning/components/index.js")},"./node_modules/@vue/composition-api/dist/vue-composition-api.mjs":(e,b,t)=>{e.exports=t("dll-reference md2")("./node_modules/@vue/composition-api/dist/vue-composition-api.mjs")},"./node_modules/vue-class-component/dist/vue-class-component.esm.js":(e,b,t)=>{e.exports=t("dll-reference md2")("./node_modules/vue-class-component/dist/vue-class-component.esm.js")},"14a8d443-2e58-450b-a462-258bdaf69b49":(e,b,t)=>{e.exports=t("dll-reference md10")("14a8d443-2e58-450b-a462-258bdaf69b49")},"97786ea9-4861-48bd-8a57-eae9bbdb4892":(e,b,t)=>{e.exports=t("dll-reference md9")("97786ea9-4861-48bd-8a57-eae9bbdb4892")},"d7327742-5647-4075-b7ab-4f9ca852addb":(e,b,t)=>{e.exports=t("dll-reference md66")("d7327742-5647-4075-b7ab-4f9ca852addb")},"eff19cad-5557-434b-a477-1e1e2a70a2a0":(e,b,t)=>{e.exports=t("dll-reference md20")("eff19cad-5557-434b-a477-1e1e2a70a2a0")},"dll-reference md2":e=>{"use strict";e.exports=omniaVendor},"dll-reference md32":e=>{"use strict";e.exports=omniaWebpackJsonp["bb000000-0000-bbbb-0000-0000000000bb"]["61540ff7-266a-4142-a42e-c62ba077f0b9"]},"dll-reference md9":e=>{"use strict";e.exports=omniaWebpackJsonp["bb000000-0000-bbbb-0000-0000000000bb"]["a2892051-fd9f-4056-ae8d-30d16d48417d"]},"dll-reference md10":e=>{"use strict";e.exports=omniaWebpackJsonp["bb000000-0000-bbbb-0000-0000000000bb"]["a5a89056-b5f5-475d-8518-a1f55090379d"]},"dll-reference md66":e=>{"use strict";e.exports=omniaWebpackJsonp["bb000000-0000-bbbb-0000-0000000000bb"]["dee030cc-4ab3-4158-bb06-8049f5c67542"]},"dll-reference md20":e=>{"use strict";e.exports=omniaWebpackJsonp["bb000000-0000-bbbb-0000-0000000000bb"]["fa502cf2-bcf9-4dc0-b4f9-13dc63c04bfc"]}};if("undefined"==typeof omniaWebpackJsonp&&(globalThis.omniaWebpackJsonp={}),globalThis.omniaWebpackJsonp["bb000000-0000-bbbb-0000-0000000000bb"]=globalThis.omniaWebpackJsonp["bb000000-0000-bbbb-0000-0000000000bb"]||{},globalThis.omniaWebpackJsonp["bb000000-0000-bbbb-0000-0000000000bb"]["b6cb848f-98b6-4f5b-8e2c-c6dcddc8c771"])throw new Error("Error, already loaded manifest b6cb848f-98b6-4f5b-8e2c-c6dcddc8c771 with service id bb000000-0000-bbbb-0000-0000000000bb");globalThis.omniaWebpackJsonp["bb000000-0000-bbbb-0000-0000000000bb"]["b6cb848f-98b6-4f5b-8e2c-c6dcddc8c771"]=t;var b={};function t(o){var a=b[o];if(void 0!==a)return a.exports;var n=b[o]={exports:{}};return e[o](n,n.exports,t),n.exports}t.d=(e,b)=>{for(var o in b)t.o(b,o)&&!t.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:b[o]})},t.o=(e,b)=>Object.prototype.hasOwnProperty.call(e,b),t.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})};t("./client/fx/ux/appprovisioning/appprovisioningsteps/appinstanceenterprisepropertiesstep/appinstanceenterprisepropertiesstep.tsx")})()};