if("undefined"==typeof omniaLoader&&(globalThis.omniaLoader={}),omniaLoader["bb000000-0000-bbbb-0000-0000000000bb"]=omniaLoader["bb000000-0000-bbbb-0000-0000000000bb"]||{},omniaLoader["bb000000-0000-bbbb-0000-0000000000bb"]["cd42d83e-ed23-4ada-aea7-498795c701ee"])throw new Error("Error, already loaded manifest cd42d83e-ed23-4ada-aea7-498795c701ee with service id bb000000-0000-bbbb-0000-0000000000bb");omniaLoader["bb000000-0000-bbbb-0000-0000000000bb"]["cd42d83e-ed23-4ada-aea7-498795c701ee"]=function(){(()=>{var e={"./client/fx/ux/app/builders/blades/applayoutlistbladebuilder.tsx":(e,t,a)=>{"use strict";a.r(t),a.d(t,{AppLayoutListBladeBuilder:()=>x});var o=a("./node_modules/@vue/composition-api/dist/vue-composition-api.mjs"),i=a("d0a145a7-d1ef-4217-aa6f-85dd18c4231d"),s=a("./node_modules/vue-class-component/dist/vue-class-component.esm.js"),r=a("./node_modules/vue-property-decorator/lib/vue-property-decorator.js"),n=a("d7327742-5647-4075-b7ab-4f9ca852addb").setCurrentManifest("bb000000-0000-bbbb-0000-0000000000bb","cd42d83e-ed23-4ada-aea7-498795c701ee"),l=a("14a8d443-2e58-450b-a462-258bdaf69b49").setCurrentManifest("bb000000-0000-bbbb-0000-0000000000bb","cd42d83e-ed23-4ada-aea7-498795c701ee"),d=a("5e618f4d-d014-414e-a681-89e34cbeda0f"),u=a("./client/fx/ux/app/builders/core/index.js"),p=a("97786ea9-4861-48bd-8a57-eae9bbdb4892"),b=a("c041fe9f-1e14-443d-9407-5aa8829fbc21"),c=a("./client/fx/ux/uxmodels.js"),h=Object.defineProperty,m=Object.getOwnPropertyDescriptor,y=(e,t,a,o)=>{for(var i,s=o>1?void 0:o?m(t,a):t,r=e.length-1;r>=0;r--)(i=e[r])&&(s=(o?i(t,a,s):i(s))||s);return o&&s&&h(t,a,s),s};let f=class extends n.VueComponentBase{constructor(){super(...arguments),this.isSaving=!1,this.unexptedErrorMessage="",this.internalLayout=null}created(){this.formValidator=new n.FormValidator(this),this.setData()}onLayoutChanged(){this.internalLayout.id!=this.layout.id&&this.setData()}setData(){this.internalLayout=p.Utils.clone(this.layout)}save(){this.formValidator.validateAll()&&this.$confirm.open({title:this.loc.AppInstanceLayout.EditAlias,message:this.loc.AppInstanceLayout.EditAliasConfirmation}).then((e=>{e===n.ConfirmDialogResponse.Ok&&(this.isSaving=!0,this.appLayoutStore.actions.updateLayout.dispatch(this.internalLayout).then((()=>{this.journey().travelBack()})).catch((e=>{this.isSaving=!1,this.unexptedErrorMessage=e})))}))}render(){return(0,o.h)("v-card",[(0,o.h)("omfx-blade-header",{attrs:{journey:this.journey,title:this.multilingualStore.getters.stringValue(this.layout.title)}}),(0,o.h)("v-card-text",[(0,o.h)("omfx-app-layout-url-input",{attrs:{urlSegment:this.internalLayout.urlSegment,appInstanceId:this.layout.appInstanceId,ignoreFromLayoutId:this.layout.id,useValidator:this.formValidator},on:{urlSegmentChanged:e=>{this.internalLayout.urlSegment=e}}})]),(0,o.h)("v-card-actions",{class:"justify-end"},[(0,o.h)("omfx-button",{attrs:{loading:this.isSaving},domProps:{onClick:this.save,preset:n.ButtonPresets.text.save}})]),this.unexptedErrorMessage&&(0,o.h)("div",{class:"mt-2 subtitle-2"},[this.unexptedErrorMessage])])}};y([(0,r.Prop)()],f.prototype,"layout",2),y([(0,r.Prop)()],f.prototype,"journey",2),y([(0,b.Localize)(c.OmniaUxLocalizationNamespace)],f.prototype,"loc",2),y([(0,p.Inject)(d.AppLayoutStore)],f.prototype,"appLayoutStore",2),y([(0,p.Inject)(d.MultilingualStore)],f.prototype,"multilingualStore",2),y([(0,r.Watch)("layout",{deep:!1,immediate:!1})],f.prototype,"onLayoutChanged",1),f=y([s.default],f);var g=Object.defineProperty,v=Object.getOwnPropertyDescriptor,L=(e,t,a,o)=>{for(var i,s=o>1?void 0:o?v(t,a):t,r=e.length-1;r>=0;r--)(i=e[r])&&(s=(o?i(t,a,s):i(s))||s);return o&&s&&g(t,a,s),s};let x=class extends n.VueComponentBase{constructor(){super(...arguments),this.showCreationNewLayout=!1,this.isCreating=!1,this.layoutCreation={icon:{iconType:i.IconTypes.FontAwesome,faClass:"fal fa-th"},title:{isMultilingualString:!0},urlSegment:""}}created(){this.formValidator=new n.FormValidator(this)}mounted(){l.WebComponentBootstrapper.registerElementInstance(this,this.$el)}ensureAppLayoutBladeBuilder(e){this.journey().addOrUpdateBlade({id:u.AppBuilderBladeIds.appLayoutBuilder,size:i.BladeSizes.fillBesidesSmall,content:()=>(0,o.h)("omfx-app-layout-blade-builder",{attrs:{journey:this.journey,settings:this.settings,selectedLayout:e}})})}ensureLayoutAliasBlade(e){this.journey().addOrUpdateBlade({id:u.AppBuilderBladeIds.appLayoutAlias,size:i.BladeSizes.medium,content:()=>(0,o.h)(f,{attrs:{journey:this.journey,layout:e}})})}travelAppLayoutBladeBuilder(e){this.journey().visibleBlades.some((e=>e.id==u.AppBuilderBladeIds.appLayoutAlias))&&this.journey().travelBack(),this.ensureAppLayoutBladeBuilder(e),this.journey().travelToNext(u.AppBuilderBladeIds.appLayoutBuilder)}handleCreateLayout(){if(this.formValidator.validateAll()){this.isCreating=!0;const e=l.Utils.generateGuid(),t=new this.settings.layoutDefinition;if(t.layout={ownerLayoutItemsOverride:[],blockSettings:{},definition:{id:e,itemtype:i.LayoutItemTypes.layout,ownerLayoutId:e,items:[],settings:{}}},t.title=this.layoutCreation.title,this.settings.onBeforeCreate){const e=this.settings.onBeforeCreate(t);l.Utils.isPromise(e)?e.then((e=>{this.createNewLayout(e)}),this.closeCreateNewLayoutDialog):this.createNewLayout(e)}else this.createNewLayout(t)}}createNewLayout(e){return this.appInstanceLayoutStore.actions.create.dispatch(this.settings.appInstanceId,e,this.layoutCreation.urlSegment).then((e=>{this.isCreating=!1,this.layoutCreation.title={isMultilingualString:!0},this.layoutCreation.urlSegment="",this.closeCreateNewLayoutDialog(),this.ensureAppLayoutBladeBuilder(e.appInstanceLayout)}))}closeCreateNewLayoutDialog(){this.showCreationNewLayout=!1}travelToEditAlias(e){this.ensureLayoutAliasBlade(e),this.journey().travelToNext(u.AppBuilderBladeIds.appLayoutAlias)}renderCreateNewLayoutDialog(){return(0,o.h)("omfx-dialog",{attrs:{valueBind:{visible:this.showCreationNewLayout},width:"600px",persistent:!0,title:this.loc.CreateNewLayout,position:n.DialogPositions.Center,light:!this.theming.body.bg.dark,dark:this.theming.body.bg.dark},on:{close:()=>{this.closeCreateNewLayoutDialog()}}},[(0,o.h)("v-card",{attrs:{light:!this.theming.body.bg.dark,color:this.theming.body.bg.color.base,tile:!0,flat:!0}},[(0,o.h)("v-card-text",[(0,o.h)("omfx-multilingual-input",{attrs:{filled:!0,label:this.omniaLoc.Common.Title},domProps:{requiredWithValidator:this.formValidator,valueBind:this.layoutCreation.title,onValueChanged:e=>{this.layoutCreation.title=e;const t=this.multilingualStore.getters.stringValue(e);t&&(this.layoutCreation.urlSegment=l.Utils.makeFriendlyUrl(t))}}}),this.settings.enableAlias&&(0,o.h)("omfx-app-layout-url-input",{attrs:{filled:!0,urlSegment:this.layoutCreation.urlSegment,appInstanceId:this.settings.appInstanceId,useValidator:this.formValidator},on:{urlSegmentChanged:e=>{this.layoutCreation.urlSegment=e}}})]),(0,o.h)("v-card-actions",[(0,o.h)("v-spacer"),(0,o.h)("omfx-button",{attrs:{dark:this.theming.body.fg.dark,loading:this.isCreating,text:this.omniaLoc.Common.Buttons.Create},domProps:{styles:{bgColor:this.theming.body.fg.color.base},onClick:this.handleCreateLayout}}),(0,o.h)("omfx-button",{attrs:{disabled:this.isCreating},domProps:{preset:n.ButtonPresets.text.cancel,onClick:()=>{this.closeCreateNewLayoutDialog()}}})])])])}render(){let e=[];this.settings.layoutDefinition&&this.settings.appInstanceId&&(e=this.appInstanceLayoutStore.getters.getLayoutWithDefinition(this.settings.appInstanceId,this.settings.layoutDefinition));const t=this.journey().visibleBlades.find((e=>e.id==u.AppBuilderBladeIds.appLayoutBuilder));return(0,o.h)("div",{class:t&&"mt-12"},[(0,o.h)("omfx-blade-header",{attrs:{journey:this.journey,title:this.bladeTitle?this.bladeTitle:this.loc.Layouts,prependIcons:[(0,o.h)("omfx-button",{domProps:{onClick:()=>{this.showCreationNewLayout=!0},mode:i.ButtonModes.icon,icon:{iconType:new i.FontAwesomeIcon("add")}},attrs:{dark:this.theming.colors.primary.dark}})]}}),(0,o.h)("v-list",{attrs:{dense:!0},style:t&&{height:"calc(100vh - 162px)",overflowY:"auto"}},[(0,o.h)("v-list-item-group",[e.map((e=>(0,o.h)("v-list-item",{attrs:{ripple:!0},on:{click:()=>{this.travelAppLayoutBladeBuilder(e)}}},[(0,o.h)("v-list-item-icon",[(0,o.h)("omfx-icon",{domProps:{valueBind:new i.FontAwesomeIcon("fal fa-th")}})]),(0,o.h)("v-list-item-content",[(0,o.h)("v-list-item-title",{class:"text-subtitle-1",attrs:{color:this.theming.body.components.color.base}},[this.multilingualStore.getters.stringValue(e.title)])]),!t&&this.settings.enableAlias&&(0,o.h)("v-list-item-action",[(0,o.h)("v-icon",{attrs:{size:"24"},class:"mr-4",on:{click:t=>{t.stopPropagation(),t.preventDefault(),this.travelToEditAlias(e)}}},["fal fa-link"])])])))])]),this.showCreationNewLayout&&this.renderCreateNewLayoutDialog()])}};L([(0,r.Prop)()],x.prototype,"journey",2),L([(0,r.Prop)()],x.prototype,"settings",2),L([(0,r.Prop)()],x.prototype,"bladeTitle",2),L([(0,l.Inject)(d.AppLayoutStore)],x.prototype,"appInstanceLayoutStore",2),L([(0,l.Inject)(d.MultilingualStore)],x.prototype,"multilingualStore",2),L([(0,l.Localize)(n.OmniaUxLocalizationNamespace)],x.prototype,"omniaLoc",2),L([(0,l.Localize)(u.AppBladeBuilderLocalization.namespace)],x.prototype,"loc",2),x=L([s.default],x),l.WebComponentBootstrapper.registerElement((e=>{(0,l.vueCustomElement)(e.elementName,x)}))},"./client/fx/ux/app/builders/core/index.js":(e,t,a)=>{e.exports=a("dll-reference md31")("./client/fx/ux/app/builders/core/index.js")},"./client/fx/ux/uxmodels.js":(e,t,a)=>{e.exports=a("dll-reference md66")("./client/fx/ux/uxmodels.js")},"./node_modules/@vue/composition-api/dist/vue-composition-api.mjs":(e,t,a)=>{e.exports=a("dll-reference md2")("./node_modules/@vue/composition-api/dist/vue-composition-api.mjs")},"./node_modules/vue-class-component/dist/vue-class-component.esm.js":(e,t,a)=>{e.exports=a("dll-reference md2")("./node_modules/vue-class-component/dist/vue-class-component.esm.js")},"./node_modules/vue-property-decorator/lib/vue-property-decorator.js":(e,t,a)=>{e.exports=a("dll-reference md2")("./node_modules/vue-property-decorator/lib/vue-property-decorator.js")},"14a8d443-2e58-450b-a462-258bdaf69b49":(e,t,a)=>{e.exports=a("dll-reference md10")("14a8d443-2e58-450b-a462-258bdaf69b49")},"5e618f4d-d014-414e-a681-89e34cbeda0f":(e,t,a)=>{e.exports=a("dll-reference md10")("5e618f4d-d014-414e-a681-89e34cbeda0f")},"97786ea9-4861-48bd-8a57-eae9bbdb4892":(e,t,a)=>{e.exports=a("dll-reference md9")("97786ea9-4861-48bd-8a57-eae9bbdb4892")},"c041fe9f-1e14-443d-9407-5aa8829fbc21":(e,t,a)=>{e.exports=a("dll-reference md10")("c041fe9f-1e14-443d-9407-5aa8829fbc21")},"d0a145a7-d1ef-4217-aa6f-85dd18c4231d":(e,t,a)=>{e.exports=a("dll-reference md9")("d0a145a7-d1ef-4217-aa6f-85dd18c4231d")},"d7327742-5647-4075-b7ab-4f9ca852addb":(e,t,a)=>{e.exports=a("dll-reference md66")("d7327742-5647-4075-b7ab-4f9ca852addb")},"dll-reference md2":e=>{"use strict";e.exports=omniaVendor},"dll-reference md9":e=>{"use strict";e.exports=omniaWebpackJsonp["bb000000-0000-bbbb-0000-0000000000bb"]["a2892051-fd9f-4056-ae8d-30d16d48417d"]},"dll-reference md10":e=>{"use strict";e.exports=omniaWebpackJsonp["bb000000-0000-bbbb-0000-0000000000bb"]["a5a89056-b5f5-475d-8518-a1f55090379d"]},"dll-reference md31":e=>{"use strict";e.exports=omniaWebpackJsonp["bb000000-0000-bbbb-0000-0000000000bb"]["d3fc9400-4049-4fe0-9f26-6d03f825b4a6"]},"dll-reference md66":e=>{"use strict";e.exports=omniaWebpackJsonp["bb000000-0000-bbbb-0000-0000000000bb"]["dee030cc-4ab3-4158-bb06-8049f5c67542"]}};if("undefined"==typeof omniaWebpackJsonp&&(globalThis.omniaWebpackJsonp={}),globalThis.omniaWebpackJsonp["bb000000-0000-bbbb-0000-0000000000bb"]=globalThis.omniaWebpackJsonp["bb000000-0000-bbbb-0000-0000000000bb"]||{},globalThis.omniaWebpackJsonp["bb000000-0000-bbbb-0000-0000000000bb"]["cd42d83e-ed23-4ada-aea7-498795c701ee"])throw new Error("Error, already loaded manifest cd42d83e-ed23-4ada-aea7-498795c701ee with service id bb000000-0000-bbbb-0000-0000000000bb");globalThis.omniaWebpackJsonp["bb000000-0000-bbbb-0000-0000000000bb"]["cd42d83e-ed23-4ada-aea7-498795c701ee"]=a;var t={};function a(o){var i=t[o];if(void 0!==i)return i.exports;var s=t[o]={exports:{}};return e[o](s,s.exports,a),s.exports}a.d=(e,t)=>{for(var o in t)a.o(t,o)&&!a.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:t[o]})},a.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),a.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})};a("./client/fx/ux/app/builders/blades/applayoutlistbladebuilder.tsx")})()};