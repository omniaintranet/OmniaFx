if("undefined"==typeof omniaLoader&&(globalThis.omniaLoader={}),omniaLoader["bb000000-0000-bbbb-0000-0000000000bb"]=omniaLoader["bb000000-0000-bbbb-0000-0000000000bb"]||{},omniaLoader["bb000000-0000-bbbb-0000-0000000000bb"]["cd7c4844-7c9b-4635-90f2-c5612d3062ef"])throw new Error("Error, already loaded manifest cd7c4844-7c9b-4635-90f2-c5612d3062ef with service id bb000000-0000-bbbb-0000-0000000000bb");omniaLoader["bb000000-0000-bbbb-0000-0000000000bb"]["cd7c4844-7c9b-4635-90f2-c5612d3062ef"]=function(){(()=>{var e={"./client/fx/ux/app/builders/blades/appbladebuilder.tsx":(e,t,i)=>{"use strict";i.r(t);var o=i("./node_modules/@vue/composition-api/dist/vue-composition-api.mjs"),a=i("14a8d443-2e58-450b-a462-258bdaf69b49").setCurrentManifest("bb000000-0000-bbbb-0000-0000000000bb","cd7c4844-7c9b-4635-90f2-c5612d3062ef"),s=i("d0a145a7-d1ef-4217-aa6f-85dd18c4231d"),d=i("d7327742-5647-4075-b7ab-4f9ca852addb").setCurrentManifest("bb000000-0000-bbbb-0000-0000000000bb","cd7c4844-7c9b-4635-90f2-c5612d3062ef"),n=i("./node_modules/vue-class-component/dist/vue-class-component.esm.js"),r=i("./node_modules/vue-property-decorator/lib/vue-property-decorator.js"),l=i("./client/fx/ux/uxmodels.js"),p=i("./client/fx/ux/app/builders/core/index.js"),b=Object.defineProperty,c=Object.getOwnPropertyDescriptor,m=(e,t,i,o)=>{for(var a,s=o>1?void 0:o?c(t,i):t,d=e.length-1;d>=0;d--)(a=e[d])&&(s=(o?a(t,i,s):a(s))||s);return o&&s&&b(t,i,s),s};const u="62aee2b4-c5da-47df-8b3f-d3c9a484e407";let f=class extends d.VueComponentBase{constructor(){super(...arguments),this.homeBladeId="",this.items=[],this.ready=new s.Future(null)}created(){if(this.appConig=new p.AppBladeConfig(this),this.homeBladeId=this.journey().visibleBlades[this.journey().visibleBlades.length-1].id,this.getApi){const e=this.getApi(this);a.Utils.isPromise(e)?e.then((()=>{this.ready.resolve()})):this.ready.resolve()}this.ready.then((()=>{this.addDefaultMenuItems();if(location.href.indexOf("tab-pending")>=0){this.items.find((e=>e.id===u))&&this.journey().travelTo([this.homeBladeId,p.AppBuilderBladeIds.appList])}}))}mounted(){a.WebComponentBootstrapper.registerElementInstance(this,this.$el)}addMenuItems(e){return a.Utils.isArray(e)?this.items=this.items.concat(e):this.items.push(e),this}configure(){return this.appConig}addDefaultMenuItems(){this.appConig.appInstanceBladeSettings&&(this.items.push({id:u,title:this.loc.Apps,icon:new s.FontAwesomeIcon("fa fa-list"),onClick:(e,t)=>t.travelTo([this.homeBladeId,p.AppBuilderBladeIds.appList]),order:100}),this.journey().addOrUpdateBlade({id:p.AppBuilderBladeIds.appList,size:s.BladeSizes.large,content:()=>(0,o.h)("omfx-app-instance-blade-builder",{attrs:{journey:this.journey,settings:this.appConig.appInstanceBladeSettings}})})),this.appConig.appLayoutBladeSettings&&(this.items.push({id:new s.Guid("ee91cf7b-240b-41bc-a1f6-0d5fd59ee81f"),title:this.loc.Layouts,icon:new s.FontAwesomeIcon("fal fa-th"),onClick:(e,t)=>t.travelTo([this.homeBladeId,p.AppBuilderBladeIds.appLayoutList]),order:200}),this.journey().addOrUpdateBlade({id:p.AppBuilderBladeIds.appLayoutList,size:s.BladeSizes.small,content:()=>(0,o.h)("omfx-app-layout-list-blade-builder",{attrs:{journey:this.journey,settings:this.appConig.appLayoutBladeSettings}})})),this.appConig.appTemplateBladeSettings&&(this.items.push({id:new s.Guid("85d7f82a-1541-4523-a078-8cd945b94aea"),title:this.loc.Templates,icon:new s.FontAwesomeIcon("fal fa-clone"),onClick:(e,t)=>t.travelTo([this.homeBladeId,p.AppBuilderBladeIds.appTemplate]),order:300}),this.journey().addOrUpdateBlade({id:p.AppBuilderBladeIds.appTemplate,size:s.BladeSizes.small,content:()=>(0,o.h)("omfx-app-template-blade-builder",{attrs:{enableNamingPolicy:!0,journey:this.journey,settings:this.appConig.appTemplateBladeSettings}})})),this.appConig.appNamingPolicyBladeSettings&&(this.items.push({id:new s.Guid("208107fd-ce2c-4d87-9e12-9aa94e96cf0f"),title:this.omniaLoc.Apps.NamingPolicies.NamingPolicies,icon:new s.FontAwesomeIcon("far fa-edit"),onClick:(e,t)=>t.travelTo([this.homeBladeId,p.AppBuilderBladeIds.appNamingPolicy]),order:400}),this.journey().addOrUpdateBlade({id:p.AppBuilderBladeIds.appNamingPolicy,size:s.BladeSizes.small,content:()=>(0,o.h)("omfx-app-naming-policy-blade-builder",{attrs:{journey:this.journey,settings:this.appConig.appNamingPolicyBladeSettings}})})),this.items.sort(((e,t)=>(e.order||100)-(t.order||100)))}render(){return(0,o.h)("div",{style:{height:"100%"}},[(0,o.h)("v-list",{attrs:{dense:!0}},[(0,o.h)("v-list-item-group",[this.items.map((e=>(0,o.h)("v-list-item",{attrs:{ripple:!0},on:{click:()=>e.onClick(e,this.journey())}},[(0,o.h)("v-list-item-icon",[(0,o.h)("omfx-icon",{domProps:{valueBind:e.icon,iconAttrs:{color:this.theming.body.components.color.base}}})]),(0,o.h)("v-list-item-content",[(0,o.h)("v-list-item-title",{attrs:{color:this.theming.body.components.color.base}},[e.title])])])))])])])}};m([(0,r.Prop)()],f.prototype,"getApi",2),m([(0,r.Prop)()],f.prototype,"journey",2),m([(0,a.Localize)(p.AppBladeBuilderLocalization.namespace)],f.prototype,"loc",2),m([(0,a.Localize)(l.OmniaUxLocalizationNamespace)],f.prototype,"omniaLoc",2),f=m([n.default],f),a.WebComponentBootstrapper.registerElement((e=>{(0,a.vueCustomElement)(e.elementName,f)}))},"./client/fx/ux/app/builders/core/index.js":(e,t,i)=>{e.exports=i("dll-reference md31")("./client/fx/ux/app/builders/core/index.js")},"./client/fx/ux/uxmodels.js":(e,t,i)=>{e.exports=i("dll-reference md66")("./client/fx/ux/uxmodels.js")},"./node_modules/@vue/composition-api/dist/vue-composition-api.mjs":(e,t,i)=>{e.exports=i("dll-reference md2")("./node_modules/@vue/composition-api/dist/vue-composition-api.mjs")},"./node_modules/vue-class-component/dist/vue-class-component.esm.js":(e,t,i)=>{e.exports=i("dll-reference md2")("./node_modules/vue-class-component/dist/vue-class-component.esm.js")},"./node_modules/vue-property-decorator/lib/vue-property-decorator.js":(e,t,i)=>{e.exports=i("dll-reference md2")("./node_modules/vue-property-decorator/lib/vue-property-decorator.js")},"14a8d443-2e58-450b-a462-258bdaf69b49":(e,t,i)=>{e.exports=i("dll-reference md10")("14a8d443-2e58-450b-a462-258bdaf69b49")},"d0a145a7-d1ef-4217-aa6f-85dd18c4231d":(e,t,i)=>{e.exports=i("dll-reference md9")("d0a145a7-d1ef-4217-aa6f-85dd18c4231d")},"d7327742-5647-4075-b7ab-4f9ca852addb":(e,t,i)=>{e.exports=i("dll-reference md66")("d7327742-5647-4075-b7ab-4f9ca852addb")},"dll-reference md2":e=>{"use strict";e.exports=omniaVendor},"dll-reference md9":e=>{"use strict";e.exports=omniaWebpackJsonp["bb000000-0000-bbbb-0000-0000000000bb"]["a2892051-fd9f-4056-ae8d-30d16d48417d"]},"dll-reference md10":e=>{"use strict";e.exports=omniaWebpackJsonp["bb000000-0000-bbbb-0000-0000000000bb"]["a5a89056-b5f5-475d-8518-a1f55090379d"]},"dll-reference md31":e=>{"use strict";e.exports=omniaWebpackJsonp["bb000000-0000-bbbb-0000-0000000000bb"]["d3fc9400-4049-4fe0-9f26-6d03f825b4a6"]},"dll-reference md66":e=>{"use strict";e.exports=omniaWebpackJsonp["bb000000-0000-bbbb-0000-0000000000bb"]["dee030cc-4ab3-4158-bb06-8049f5c67542"]}};if("undefined"==typeof omniaWebpackJsonp&&(globalThis.omniaWebpackJsonp={}),globalThis.omniaWebpackJsonp["bb000000-0000-bbbb-0000-0000000000bb"]=globalThis.omniaWebpackJsonp["bb000000-0000-bbbb-0000-0000000000bb"]||{},globalThis.omniaWebpackJsonp["bb000000-0000-bbbb-0000-0000000000bb"]["cd7c4844-7c9b-4635-90f2-c5612d3062ef"])throw new Error("Error, already loaded manifest cd7c4844-7c9b-4635-90f2-c5612d3062ef with service id bb000000-0000-bbbb-0000-0000000000bb");globalThis.omniaWebpackJsonp["bb000000-0000-bbbb-0000-0000000000bb"]["cd7c4844-7c9b-4635-90f2-c5612d3062ef"]=i;var t={};function i(o){var a=t[o];if(void 0!==a)return a.exports;var s=t[o]={exports:{}};return e[o](s,s.exports,i),s.exports}i.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})};i("./client/fx/ux/app/builders/blades/appbladebuilder.tsx")})()};