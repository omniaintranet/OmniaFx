if("undefined"==typeof omniaLoader&&(globalThis.omniaLoader={}),omniaLoader["bb000000-0000-bbbb-0000-0000000000bb"]=omniaLoader["bb000000-0000-bbbb-0000-0000000000bb"]||{},omniaLoader["bb000000-0000-bbbb-0000-0000000000bb"]["d0ddeccd-c3bb-45f8-933b-3f61ec40157a"])throw new Error("Error, already loaded manifest d0ddeccd-c3bb-45f8-933b-3f61ec40157a with service id bb000000-0000-bbbb-0000-0000000000bb");omniaLoader["bb000000-0000-bbbb-0000-0000000000bb"]["d0ddeccd-c3bb-45f8-933b-3f61ec40157a"]=function(){(()=>{var e={"./client/fx/ux/app/apppropertiesprovider.js":(e,t,r)=>{"use strict";r.r(t),r.d(t,{AppPropertiesProvider:()=>P});var i=r("d0a145a7-d1ef-4217-aa6f-85dd18c4231d"),n=r("14a8d443-2e58-450b-a462-258bdaf69b49").setCurrentManifest("bb000000-0000-bbbb-0000-0000000000bb","d0ddeccd-c3bb-45f8-933b-3f61ec40157a"),o=r("d7327742-5647-4075-b7ab-4f9ca852addb").setCurrentManifest("bb000000-0000-bbbb-0000-0000000000bb","d0ddeccd-c3bb-45f8-933b-3f61ec40157a"),a=r("5e618f4d-d014-414e-a681-89e34cbeda0f"),p=r("./client/fx/ux/properties/app-property/apppropertydefinition.js"),s=Object.defineProperty,d=Object.getOwnPropertyDescriptor,b=(e,t,r,i)=>{for(var n,o=i>1?void 0:i?d(t,r):t,a=e.length-1;a>=0;a--)(n=e[a])&&(o=(i?n(t,r,o):n(o))||o);return i&&o&&s(t,r,o),o};let c=class{constructor(){this.id=i.Guid.empty,this.title=""}async getProperties(e){return new Promise((async(t,r)=>{await Promise.all([this.enterprisePropertyStore.actions.ensureLoadData.dispatch(),this.enterprisePropertyCategoryStore.actions.ensureLoadAllCategories.dispatch()]);const n=this.enterprisePropertyStore.getters.enterprisePropertyDefinitions(),o=this.enterprisePropertyCategoryStore.getters.enterprisePropertyCategories();if(n){const r=[];n.forEach((t=>{const n=new p.AppPropertyDefinition,a=this.multilingualStore.getters.stringValue(t.title),s=new i.PropertyBinding(new i.Guid(t.id.toString()),this.multilingualStore.getters.stringValue(t.title),n.id.toString()),d=o.find((e=>e.id==t.enterprisePropertyCategoryId)),b=new i.DataSourcePropertyBinding(e,s,a,d);r.push(b)})),t(r)}else t(null)}))}};b([(0,n.Inject)(n.OmniaContext)],c.prototype,"omniaContext",2),b([(0,n.Inject)(a.EnterprisePropertyStore)],c.prototype,"enterprisePropertyStore",2),b([(0,n.Inject)(a.MultilingualStore)],c.prototype,"multilingualStore",2),b([(0,n.Inject)(n.ServiceContainerContext)],c.prototype,"serviceContainerContext",2),b([(0,n.Inject)(a.EnterprisePropertyCategoryStore)],c.prototype,"enterprisePropertyCategoryStore",2),c=b([(0,n.Injectable)({lifetime:i.InstanceLifetimes.Transient})],c);var l=r("./client/fx/ux/properties/components/text/textpropertydefinition.js"),f=r("./client/fx/ux/properties/components/image/imagepropertydefinition.js"),m=r("e25b9dd8-6dd7-4437-8ddd-0b9fadba73ac"),y=Object.defineProperty,u=Object.getOwnPropertyDescriptor,g=(e,t,r,i)=>{for(var n,o=i>1?void 0:i?u(t,r):t,a=e.length-1;a>=0;a--)(n=e[a])&&(o=(i?n(t,r,o):n(o))||o);return i&&o&&y(t,r,o),o};let P=class extends o.PropertyDataSourceBase{constructor(){super(...arguments),this.id=i.Constants.properties.appPropertiesRegistrationId,this.title="$Localize:Omnia.Ux.App.AppPropertiesProvider.Name;"}supportsWriteback(e){return!1}onSavePropertyValue(e){throw new Error("Method not implemented.")}async getPropertyBinding(e){return new Promise((async(t,r)=>{0==P.properties.length&&await this.getProperties();const i=P.properties.find((t=>t.propertyBinding.bindingId.toString()==e.toString()));t(i?i.propertyBinding:null)}))}async getProperties(){return new Promise(((e,t)=>{P.properties=[];const r=new P;this.legacyEnterprisePropertiesProvider.getProperties(r).then((t=>{P.properties=t,P.builtInProperties.forEach((e=>{const t="["+this.localizationService.transform(e.title)+"]",n=new i.PropertyBinding(new i.Guid(e.id.toString()),t,e.definitionId.toString()),o=new i.PropertyCategory(i.Constants.propertyCategories.externalPropertyCategoryId,{"en-us":"",isMultilingualString:!0},1,!1),a=new i.DataSourcePropertyBinding(r,n,t,o);P.properties.push(a)})),e(P.properties)}))}))}async getPropertyValue(e){return new Promise((async(t,r)=>{const n={value:null,propertyConfigurationId:e.configurationId},o=this.omniaContext.appRoute?.appInstance;if(o){const t=P.builtInProperties.find((t=>t.id.toString()==e.propertyBindingId.toString()));if(t)t.definitionId.toString()==(new l.TextPropertyDefinition).id.toString()?n.value=this.multilingualStore.getters.stringValue(o[t.internalName]):n.value=o[t.internalName];else{const t=this.omniaContext.appRoute?.appInstance?.enterpriseProperties,r=this.enterprisePropertyStore.getters.enterprisePropertyDefinitions().find((t=>t.id==e.propertyBindingId));if(t&&r){if(Object.keys(t).find((e=>e.toLowerCase()===r.internalName.toLowerCase()))){const e=Object.keys(t).find((e=>e.toLowerCase()===r.internalName.toLowerCase()));e&&(n.value=t[e])}else switch(r.internalName){case i.BuiltInEnterprisePropertyInternalNames.Title:t[i.BuiltInEnterprisePropertyInternalNames.Title]=this.omniaContext.appRoute.appInstance.title;case i.BuiltInEnterprisePropertyInternalNames.CreatedAt:t[i.BuiltInEnterprisePropertyInternalNames.CreatedAt]=this.omniaContext.appRoute.appInstance.createdAt;break;case i.BuiltInEnterprisePropertyInternalNames.CreatedBy:t[i.BuiltInEnterprisePropertyInternalNames.CreatedBy]=this.omniaContext.appRoute.appInstance.createdBy;break;case i.BuiltInEnterprisePropertyInternalNames.ModifiedAt:t[i.BuiltInEnterprisePropertyInternalNames.ModifiedAt]=this.omniaContext.appRoute.appInstance.modifiedAt;break;case i.BuiltInEnterprisePropertyInternalNames.ModifiedBy:t[i.BuiltInEnterprisePropertyInternalNames.ModifiedBy]=this.omniaContext.appRoute.appInstance.modifiedBy}}}}t(n)}))}};P.properties=[],P.builtInProperties=[{id:new i.Guid("827150d8-30b4-48ad-82f3-0266c93116d4"),internalName:"title",title:"$Localize:Omnia.Ux.App.AppPropertiesProvider.TitleProperty;",definitionId:(new l.TextPropertyDefinition).id},{id:new i.Guid("60ba73ea-e64a-4a87-bae5-cba0ec1d3a8e"),internalName:"description",title:"$Localize:Omnia.Ux.App.AppPropertiesProvider.DescriptionProperty;",definitionId:(new l.TextPropertyDefinition).id},{id:new i.Guid("715ba8f2-6bab-4820-9aeb-2faa5eb0cda3"),internalName:"image",title:"$Localize:Omnia.Ux.App.AppPropertiesProvider.ImageProperty;",definitionId:(new f.ImagePropertyDefinition).id}],g([(0,n.Inject)(n.OmniaContext)],P.prototype,"omniaContext",2),g([(0,n.Inject)(a.EnterprisePropertyStore)],P.prototype,"enterprisePropertyStore",2),g([(0,n.Inject)(a.MultilingualStore)],P.prototype,"multilingualStore",2),g([(0,n.Inject)(c)],P.prototype,"legacyEnterprisePropertiesProvider",2),g([(0,n.Inject)(m.LocalizationService)],P.prototype,"localizationService",2),P=g([(0,n.Injectable)({lifetime:i.InstanceLifetimes.Transient})],P),(0,n.extendApi)((e=>e.fx.ux.properties.dataSources.registrations),(e=>{e.register(P)}));let I=class{render(e,t,r){this.omniaContext.user.then((r=>{const n=this.omniaContext.appRoute?.appInstance?.enterpriseProperties;if(n){const o=Object.keys(n).find((t=>t.toLowerCase()===e.internalName.toLowerCase()));if(o)t(e.enterprisePropertyDataType.uiOptions.displayModeElementName,{valueBind:n[o],property:e,settings:e.settings,lang:r.preferredLanguage});else{let o=!1;switch(e.internalName){case i.BuiltInEnterprisePropertyInternalNames.Title:o=!0,n[i.BuiltInEnterprisePropertyInternalNames.Title]=this.omniaContext.appRoute.appInstance.title;case i.BuiltInEnterprisePropertyInternalNames.CreatedAt:o=!0,n[i.BuiltInEnterprisePropertyInternalNames.CreatedAt]=this.omniaContext.appRoute.appInstance.createdAt;break;case i.BuiltInEnterprisePropertyInternalNames.CreatedBy:o=!0,n[i.BuiltInEnterprisePropertyInternalNames.CreatedBy]=this.omniaContext.appRoute.appInstance.createdBy;break;case i.BuiltInEnterprisePropertyInternalNames.ModifiedAt:o=!0,n[i.BuiltInEnterprisePropertyInternalNames.ModifiedAt]=this.omniaContext.appRoute.appInstance.modifiedAt;break;case i.BuiltInEnterprisePropertyInternalNames.ModifiedBy:o=!0,n[i.BuiltInEnterprisePropertyInternalNames.ModifiedBy]=this.omniaContext.appRoute.appInstance.modifiedBy}o&&t(e.enterprisePropertyDataType.uiOptions.displayModeElementName,{valueBind:n[e.internalName],property:e,settings:e.settings,lang:r.preferredLanguage})}}}))}};g([(0,n.Inject)(n.OmniaContext)],I.prototype,"omniaContext",2),I=g([(0,n.Injectable)({lifetime:i.InstanceLifetimes.Transient})],I),(0,n.extendApi)((e=>e.fx.ux.enterpriseProperties.dataSources.providers),(e=>e.register(new i.EnterprisePropertiesDataSourceProviderRegistration(i.Constants.properties.appPropertiesRegistrationId,I)))),(0,n.extendApi)((e=>e.fx.ux.enterpriseProperties.dataSources.registrations),(e=>{e.register({title:"$Localize:Omnia.Ux.App.AppPropertiesProvider.Name;",id:i.Constants.properties.appPropertiesRegistrationId,properties:[]})}))},"./client/fx/ux/properties/app-property/apppropertydefinition.js":(e,t,r)=>{e.exports=r("dll-reference md47")("./client/fx/ux/properties/app-property/apppropertydefinition.js")},"./client/fx/ux/properties/components/image/imagepropertydefinition.js":(e,t,r)=>{e.exports=r("dll-reference md53")("./client/fx/ux/properties/components/image/imagepropertydefinition.js")},"./client/fx/ux/properties/components/text/textpropertydefinition.js":(e,t,r)=>{e.exports=r("dll-reference md56")("./client/fx/ux/properties/components/text/textpropertydefinition.js")},"14a8d443-2e58-450b-a462-258bdaf69b49":(e,t,r)=>{e.exports=r("dll-reference md10")("14a8d443-2e58-450b-a462-258bdaf69b49")},"5e618f4d-d014-414e-a681-89e34cbeda0f":(e,t,r)=>{e.exports=r("dll-reference md10")("5e618f4d-d014-414e-a681-89e34cbeda0f")},"d0a145a7-d1ef-4217-aa6f-85dd18c4231d":(e,t,r)=>{e.exports=r("dll-reference md9")("d0a145a7-d1ef-4217-aa6f-85dd18c4231d")},"d7327742-5647-4075-b7ab-4f9ca852addb":(e,t,r)=>{e.exports=r("dll-reference md66")("d7327742-5647-4075-b7ab-4f9ca852addb")},"e25b9dd8-6dd7-4437-8ddd-0b9fadba73ac":(e,t,r)=>{e.exports=r("dll-reference md10")("e25b9dd8-6dd7-4437-8ddd-0b9fadba73ac")},"dll-reference md53":e=>{"use strict";e.exports=omniaWebpackJsonp["bb000000-0000-bbbb-0000-0000000000bb"]["204ef61b-239d-413d-a174-40fb794c04cd"]},"dll-reference md56":e=>{"use strict";e.exports=omniaWebpackJsonp["bb000000-0000-bbbb-0000-0000000000bb"]["437d478f-eb56-4884-bd67-0cdb49ec4dc4"]},"dll-reference md9":e=>{"use strict";e.exports=omniaWebpackJsonp["bb000000-0000-bbbb-0000-0000000000bb"]["a2892051-fd9f-4056-ae8d-30d16d48417d"]},"dll-reference md10":e=>{"use strict";e.exports=omniaWebpackJsonp["bb000000-0000-bbbb-0000-0000000000bb"]["a5a89056-b5f5-475d-8518-a1f55090379d"]},"dll-reference md66":e=>{"use strict";e.exports=omniaWebpackJsonp["bb000000-0000-bbbb-0000-0000000000bb"]["dee030cc-4ab3-4158-bb06-8049f5c67542"]},"dll-reference md47":e=>{"use strict";e.exports=omniaWebpackJsonp["bb000000-0000-bbbb-0000-0000000000bb"]["f65a953f-a258-4249-9032-945758f02adc"]}};if("undefined"==typeof omniaWebpackJsonp&&(globalThis.omniaWebpackJsonp={}),globalThis.omniaWebpackJsonp["bb000000-0000-bbbb-0000-0000000000bb"]=globalThis.omniaWebpackJsonp["bb000000-0000-bbbb-0000-0000000000bb"]||{},globalThis.omniaWebpackJsonp["bb000000-0000-bbbb-0000-0000000000bb"]["d0ddeccd-c3bb-45f8-933b-3f61ec40157a"])throw new Error("Error, already loaded manifest d0ddeccd-c3bb-45f8-933b-3f61ec40157a with service id bb000000-0000-bbbb-0000-0000000000bb");globalThis.omniaWebpackJsonp["bb000000-0000-bbbb-0000-0000000000bb"]["d0ddeccd-c3bb-45f8-933b-3f61ec40157a"]=r;var t={};function r(i){var n=t[i];if(void 0!==n)return n.exports;var o=t[i]={exports:{}};return e[i](o,o.exports,r),o.exports}r.d=(e,t)=>{for(var i in t)r.o(t,i)&&!r.o(e,i)&&Object.defineProperty(e,i,{enumerable:!0,get:t[i]})},r.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),r.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})};r("./client/fx/ux/app/apppropertiesprovider.js")})()};