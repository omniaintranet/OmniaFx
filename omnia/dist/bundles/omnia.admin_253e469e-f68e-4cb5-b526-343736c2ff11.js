if("undefined"==typeof omniaLoader&&(globalThis.omniaLoader={}),omniaLoader["bb000000-0000-bbbb-0000-0000000000bb"]=omniaLoader["bb000000-0000-bbbb-0000-0000000000bb"]||{},omniaLoader["bb000000-0000-bbbb-0000-0000000000bb"]["253e469e-f68e-4cb5-b526-343736c2ff11"])throw new Error("Error, already loaded manifest 253e469e-f68e-4cb5-b526-343736c2ff11 with service id bb000000-0000-bbbb-0000-0000000000bb");omniaLoader["bb000000-0000-bbbb-0000-0000000000bb"]["253e469e-f68e-4cb5-b526-343736c2ff11"]=function(){(()=>{var e={"./client/fx/ux/admin/chrome/adminchrome.tsx":(e,t,i)=>{"use strict";i.r(t),i.d(t,{default:()=>N});var s=i("./node_modules/@vue/composition-api/dist/vue-composition-api.mjs"),n=i("5e618f4d-d014-414e-a681-89e34cbeda0f"),o=i("./node_modules/csx/lib.es2015/index.js"),a=i("./node_modules/typestyle/umd/typestyle.js"),r=i("./node_modules/vue/dist/vue.esm.js"),d=i("./node_modules/vue-class-component/dist/vue-class-component.esm.js"),l=i("0111486e-5dc8-4705-8247-d91fb2aba33d"),m=i("14a8d443-2e58-450b-a462-258bdaf69b49").setCurrentManifest("bb000000-0000-bbbb-0000-0000000000bb","253e469e-f68e-4cb5-b526-343736c2ff11"),c=i("97786ea9-4861-48bd-8a57-eae9bbdb4892"),h=i("d0a145a7-d1ef-4217-aa6f-85dd18c4231d"),p=i("ff061abc-7f0e-444b-b2b9-7ff71c5842c5"),b=i("e25b9dd8-6dd7-4437-8ddd-0b9fadba73ac"),u=i("d7327742-5647-4075-b7ab-4f9ca852addb").setCurrentManifest("bb000000-0000-bbbb-0000-0000000000bb","253e469e-f68e-4cb5-b526-343736c2ff11"),f=i("./client/fx/ux/inputlanguagepicker/stores/index.js"),g=i("./client/fx/ux/admin/store/adminstore.js"),v=i("./client/fx/ux/models/index.js");i("./client/fx/ux/styleflow.js").StyleFlow.define(v.AdminChromeStyles,{container:{position:"fixed",top:0,bottom:0,left:0,right:0,zIndex:200,boxShadow:"-5px 20px 20px 1px rgba(0, 0, 0, 0.5)"},appWrapper:{height:"100%",$nest:{">.application--wrap":{minHeight:"auto",height:"100%"}}},nodeTitleWrapper:{},zIndex:{zIndex:999},appBar:{},icon:{width:"20px",marginRight:(0,o.important)("18px"),marginLeft:(0,o.important)("10px")},content:(e,t,i)=>({background:(0,o.important)(e),height:"100%",paddingRight:"0 !important",paddingTop:i?"0px !important":"64px !important",paddingLeft:t?"0 !important":"",$nest:{"> .v-main__wrap":{overflow:t?"hidden":"auto"}}}),menuContent:{$nest:{"> .v-expansion-panel-content__wrap":{padding:0}}},journeyContainer:{minHeight:"calc(100vh - 64px)",display:"flex",flex:"1 1 100%"},headerIcon:{width:"27px",position:(0,o.important)("relative"),top:"-2px",left:"0px"},toolbarTitle:{marginRight:"10px",paddingRight:"10px",borderRight:"1px solid #757575"},listItemBg:e=>({$nest:{"&:before":{opacity:e?(0,o.important)(.12):(0,o.important)(0)}}}),textOverflow:{textOverflow:"ellipsis",overflow:"hidden",whiteSpace:"nowrap"}});var x=Object.defineProperty,y=Object.getOwnPropertyDescriptor,C=(e,t,i,s)=>{for(var n,o=s>1?void 0:s?y(t,i):t,a=e.length-1;a>=0;a--)(n=e[a])&&(o=(s?n(t,i,o):n(o))||o);return s&&o&&x(t,i,o),o};let N=class extends u.VueComponentBase{constructor(){super(...arguments),this.htmlToRender="",this.authorizedNodes=new Array,this.adminChromeClasses=u.StyleFlow.use(u.AdminChromeStyles),this.selectedElement="",this.classToFixVExpansionPanelZIndexIssue="v-dialog__content--active",this.adminContentId="uxAdminContentContainer",this.tenantInfoSettings=null,this.displayLeftNav=!0,this.checkGlobalPermissionResolvablePromise=null,this.checkedNodePermissionState={},this.nodeReactiveStates={}}beforeCreate(){this.$vuetify=Object.assign({},this.$vuetify),this.$vuetify.application.application={bar:{},top:{},left:{},insetFooter:{},right:{},bottom:{},footer:{}},this.$vuetify.application.top=0}created(){this.adminChromeInstance=r.default.observable(this.adminChromeInstance),this.checkGlobalPermissionResolvablePromise=this.checkGlobalPermissions(),this.directionStore.mutations.setDirectionRule(h.DirectionRules.ltr),g.AdminStore.getters.getNavigationNodes().forEach((e=>{this.handleNavigationNode(e)})),this.subscriptionHandler.add(this.permissionService.onPermissionContextChanged.subscribe((()=>{this.checkGlobalPermissionResolvablePromise.then((()=>{this.tenantAdministrator||(this.checkGlobalPermissionResolvablePromise.resolved||this.checkGlobalPermissionResolvablePromise.rejected||this.checkGlobalPermissionResolvablePromise.reject("Invalidate checking on old permission context"),this.checkGlobalPermissionResolvablePromise=this.checkGlobalPermissions()),g.AdminStore.getters.getNavigationNodes().forEach((e=>{this.handleNavigationNode(e)}))}))}))),this.subscriptionHandler.add(g.AdminStore.mutations.addNavigationNode.onCommited((e=>{(c.Utils.isArray(e)?e:[e]).forEach((e=>{e=g.AdminStore.getters.getNavigationNodes().find((t=>this.isNodeEquals(t,e))),this.handleNavigationNode(e)}))}))),this.renderSelectedElement(),this.subscriptionHandler.add(l.AdminRouter.onNavigate.subscribe((e=>{this.renderSelectedElement(),this.$forceUpdate()}))),this.initTenantInfoSettings(),this.subscriptionHandler.add(this.omniaContext.onContextChanged().subscribe((e=>{this.setTheme(),this.$forceUpdate()})))}mounted(){m.WebComponentBootstrapper.registerElementInstance(this,this.$el),this.setTheme()}checkGlobalPermissions(){const e=new h.Future(null);this.tenantAdministrator=null,this.bpAdministrator=null,this.appInstanceAdministrator=null;const t=this.permissionService.hasPermissionForRole(b.SecurityRoles.Tenant.Admin).then((e=>{this.tenantAdministrator=e})),i=this.permissionService.hasPermissionForRole(b.SecurityRoles.BusinessProfile.Admin).then((e=>{this.bpAdministrator=e})),s=this.permissionService.hasPermissionForRole(b.SecurityRoles.AppInstance.Admin).then((e=>{this.appInstanceAdministrator=e}));return Promise.all([t,i,s]).then((()=>{e.resolve()})).catch((t=>{e.reject(t)})),e}checkNodeTrack(e){if(e.elementToRender===this.selectedElement){if(c.Utils.isNullOrEmpty(e.customUrlSegment))return!0;if(l.AdminRouter.routeContext&&l.AdminRouter.routeContext.path&&l.AdminRouter.routeContext.path.value.indexOf(e.customUrlSegment)>-1)return!0}return!1}handleNavigationNode(e){const t=this.getIdentityNode(e),i=this.checkGlobalPermissionResolvablePromise;i.then((()=>{this.checkNodePermission(e).then((s=>{if(i==this.checkGlobalPermissionResolvablePromise){const i=this.authorizedNodes.some((t=>this.isNodeEquals(t,e)));!i&&s?(this.authorizedNodes=[...this.authorizedNodes,e],this.authorizedNodes.sort(((e,t)=>e.weight>t.weight?1:e.weight<t.weight?-1:0))):!s&&i&&(this.authorizedNodes=this.authorizedNodes.filter((t=>!this.isNodeEquals(t,e))),this.authorizedNodes.sort(((e,t)=>e.weight>t.weight?1:e.weight<t.weight?-1:0))),this.checkedNodePermissionState[t]||this.$set(this.checkedNodePermissionState,t,!0),e.customInitializer&&(this.nodeReactiveStates[t]||this.$set(this.nodeReactiveStates,t,{hidden:!0}),c.Extend.fx.ux.admin.events.initializeNavigationNode.then((i=>{i.publish({key:e.key,state:this.nodeReactiveStates[t]})})))}}))}))}checkNodePermission(e){return new Promise(((t,i)=>{this.tenantAdministrator||e.category===h.AdminNavigationBuiltInCategory.BusinessProfile&&this.bpAdministrator||e.category===h.AdminNavigationBuiltInCategory.AppInstance&&this.appInstanceAdministrator||"AlwaysAuthorized"===e.securityRole?t(!0):e.securityRole?this.permissionService.hasPermissionForRole(e.securityRole).then((e=>{t(e)})):t(!1)}))}setTheme(){const e=this.omniaContext.theming;this.theme.primary=e.primary,this.theme.secondary=e.secondary}renderSelectedElement(){const e=l.AdminRouter.routeContext.route&&l.AdminRouter.routeContext.route.manifestId?l.AdminRouter.routeContext.route.manifestId.toString():"";if(h.Guid.isValid(e)){const t=p.ManifestResourceLoader.getManifestById(e);if(!t)throw`Cant find a manifest matching the id ${e}`;this.htmlToRender=`<${t.elementName}></${t.elementName}>`,this.selectedElement=t.elementName}else this.selectedElement="",this.htmlToRender=""}getIdentityNode(e){return e.key||e.elementToRender}isNodeEquals(e,t){return null!=e&&null!=t&&this.getIdentityNode(e)===this.getIdentityNode(t)}toggleLefNav(){this.displayLeftNav=!this.displayLeftNav}onNodeClick(e){if(!e.elementToRender)throw"The node.elementToRender cant be null";const t=this.getSelectedNode();if(this.isNodeEquals(t,e))return;const i=document.createElement(e.elementToRender),s=p.ManifestByElementLoader.getManifestByElement(i);if(!s)throw`Cant find a manifest matching the element with name ${i.tagName}`;l.AdminRouter.navigateRoot(e.title,s.resourceId,e.customUrlSegment)}closeOmniaAdmin(){Mousetrap.trigger("shift+o shift+a")}setIconColor(){const e=this.omniaTheming.promoted.body.dark?this.omniaTheming.system.grey.darken1:this.omniaTheming.system.grey.darken2;return(0,a.style)({$nest:{i:{fontSize:(0,o.important)("20px"),color:(0,o.important)(e)}}})}groupBy(e,t){const i=new Map;return e.forEach((e=>{const s=t(e),n=i.get(s);n?n.push(e):i.set(s,[e])})),i}initTenantInfoSettings(){this.tenantInfoSettings=this.omniaContext.tenant.propertyBag.getModel(h.TenantInfoSettings)}getSelectedNode(){return g.AdminStore.getters.getNavigationNodes().find((e=>this.checkNodeTrack(e)))}handleScroll(){const e=document.querySelector(`#${this.adminContentId} > div`);e&&(e.style.overflow=this.adminChromeInstance.lockContentArea?"hidden":"auto")}renderAppBar(){return this.adminChromeInstance.hideAppBar?null:(0,s.h)("v-app-bar",{attrs:{app:!0,fixed:!0,"clipped-left":!0,dark:this.omniaTheming.chrome.dark,width:"100%"},class:(0,a.classes)(this.omniaTheming.chrome.class)},[this.adminChromeInstance.lockContentArea?null:(0,s.h)("v-app-bar-nav-icon",{on:{click:this.toggleLefNav}}),(0,s.h)("v-toolbar-title",[(0,s.h)("span",{class:this.adminChromeClasses.toolbarTitle},["Omnia"]),(0,s.h)("span",{class:"subtitle-1"},[this.omniaUxLocalization.OmniaAdmin.Administration])]),(0,s.h)("v-spacer"),(0,s.h)("omfx-button",{attrs:{dark:this.omniaTheming.chrome.dark},domProps:{onClick:()=>{this.closeOmniaAdmin()},icon:{iconType:new h.FontAwesomeIcon("fal fa-times")},mode:h.ButtonModes.icon}})])}getValidNodes(){return this.authorizedNodes.filter((e=>{let t=!0;if(e.customInitializer){const i=this.getIdentityNode(e);t=!this.nodeReactiveStates[i].hidden}return t}))}render(){this.handleScroll();const e=!this.adminChromeInstance.lockContentArea&&this.displayLeftNav,t=this.getValidNodes(),i=this.getSelectedNode();let n=!1,o=!1;const r=g.AdminStore.getters.getCategories();let d=r&&r.length>1?r.length-1:0;return null!=i&&(this.checkedNodePermissionState[this.getIdentityNode(i)]&&(o=!0),n=t.some((e=>this.isNodeEquals(i,e))),d=r.indexOf(i.category)),(0,s.h)("div",{class:[this.adminChromeClasses.container,this.classToFixVExpansionPanelZIndexIssue],attrs:{"data-omfx":!0}},[(0,s.h)("v-app",{class:(0,a.classes)(this.adminChromeClasses.appWrapper,this.omniaTheming.chrome.class),attrs:{id:"inspire",dark:this.omniaTheming.chrome.dark}},[this.renderAppBar(),(0,s.h)("v-navigation-drawer",{attrs:{clipped:!0,fixed:!0,app:!0,width:300,"disable-resize-watcher":this.adminChromeInstance.lockContentArea,value:e},style:{top:"64px"},class:(0,a.classes)(this.omniaTheming.chrome.class,this.adminChromeClasses.zIndex)},[(0,s.h)("v-list",{attrs:{dense:!0},class:this.omniaTheming.chrome.class},[(0,s.h)("v-expansion-panels",{attrs:{dark:this.omniaTheming.chrome.dark,value:d,accordion:!0}},[[...r.map((e=>this.renderCategory(t,e,i)))]])])]),(0,s.h)("v-content",{attrs:{id:this.adminContentId},class:this.adminChromeClasses.content(this.omniaTheming.system.grey.base,this.adminChromeInstance.lockContentArea,this.adminChromeInstance.hideAppBar)},[(0,s.h)("v-container",{class:"pl-0 pt-0 pb-0",attrs:{fluid:!0}},[(0,s.h)("v-layout",[i&&o?n?(0,s.h)("div",{attrs:{id:"uxAdminJourneyContainer"},class:this.adminChromeClasses.journeyContainer,key:this.selectedElement,domProps:{innerHTML:this.htmlToRender}}):(0,s.h)("div",[this.renderAccessDeny()]):null])])])])])}renderListItem(e,t){return(0,s.h)("v-list-item",{class:this.adminChromeClasses.listItemBg(this.isNodeEquals(e,t)),attrs:{ripple:!0},on:{click:()=>{this.onNodeClick(t)}}},[(0,s.h)("v-list-item-icon",{class:this.adminChromeClasses.icon},[(0,s.h)("omfx-icon",{domProps:{valueBind:t.icon},class:(0,a.classes)(this.setIconColor())})]),(0,s.h)("v-list-item-content",{attrs:{color:this.omniaTheming.promoted.body.onComponent.base}},[(0,s.h)("v-list-item-title",{class:this.adminChromeClasses.nodeTitleWrapper},[t.title])])])}renderCategory(e,t,i){let n=t,o=null;switch(t){case h.AdminNavigationBuiltInCategory.Tenant:n=this.multilingualStore.getters.stringValue(this.tenantInfoSettings?.title)||this.omniaUxLocalization.Common.Tenant,o="fal fa-globe";break;case h.AdminNavigationBuiltInCategory.BusinessProfile:n=this.multilingualStore.getters.stringValue(this.omniaContext.businessProfile.name),o="fal fa-map";break;case h.AdminNavigationBuiltInCategory.AppInstance:{const e=this.multilingualStore.getters.stringValue(this.omniaContext.appRoute.appInstance.title,h.MultilingualScopes.BusinessProfile);n=`${e[0].toLocaleUpperCase()+e.slice(1)} ${this.localizationService.transform(this.omniaUxLocalization.Common.AppInstance)}`,o="fal fa-pen-alt";break}}return(0,s.h)("v-expansion-panel",{class:this.omniaTheming.chrome.class},[(0,s.h)("v-expansion-panel-header",[(0,s.h)("h4",{class:[this.adminChromeClasses.textOverflow,"subtitle-1"]},[o&&(0,s.h)("v-icon",{class:["mr-4",this.adminChromeClasses.headerIcon]},[o]),n])]),(0,s.h)("v-expansion-panel-content",{attrs:{eager:!0},class:(0,a.classes)(this.omniaTheming.chrome.class,this.adminChromeClasses.menuContent)},[(0,s.h)("v-list",[(0,s.h)("v-list-item-group",[e.map((e=>e.category===t?this.renderListItem(i,e):null))])])])])}renderAccessDeny(){return(0,s.h)("v-card",{attrs:{width:"600px",height:"calc(100vh - 64px)",dark:this.omniaTheming.promoted.body.dark},class:this.omniaTheming.promoted.body.class},[(0,s.h)("v-app-bar",{attrs:{flat:!0,dark:this.omniaTheming.promoted.header.dark,color:this.omniaTheming.promoted.header.background.base}},[(0,s.h)("v-toolbar-title"),(0,s.h)("v-spacer")]),(0,s.h)("v-divider"),(0,s.h)("div",[(0,s.h)("omfx-status-message-overlay",{attrs:{overlay:h.StatusMessageOverlayType.Normal,statusCode:h.HttpStatusCode.Unauthorized}})])])}};C([(0,m.Inject)(m.OmniaContext)],N.prototype,"omniaContext",2),C([(0,m.Inject)(b.LocalizationService)],N.prototype,"localizationService",2),C([(0,m.Inject)(b.PermissionService)],N.prototype,"permissionService",2),C([(0,m.Inject)(u.OmniaTheming)],N.prototype,"omniaTheming",2),C([(0,m.Inject)(m.SubscriptionHandler)],N.prototype,"subscriptionHandler",2),C([(0,m.Inject)(n.DirectionRuleStore)],N.prototype,"directionStore",2),C([(0,m.Inject)(n.MultilingualStore)],N.prototype,"multilingualStore",2),C([(0,m.Provide)(l.AdminChromeInstance)],N.prototype,"adminChromeInstance",2),C([(0,m.Provide)(f.InputLanguageStore)],N.prototype,"inputLanguageStore",2),C([(0,m.Localize)("Omnia.Ux")],N.prototype,"omniaUxLocalization",2),N=C([d.default],N),m.WebComponentBootstrapper.registerElement((e=>{(0,m.vueCustomElement)(e.elementName,N)}))},"./client/fx/ux/admin/store/adminstore.js":(e,t,i)=>{e.exports=i("dll-reference md66")("./client/fx/ux/admin/store/adminstore.js")},"./client/fx/ux/inputlanguagepicker/stores/index.js":(e,t,i)=>{e.exports=i("dll-reference md66")("./client/fx/ux/inputlanguagepicker/stores/index.js")},"./client/fx/ux/models/index.js":(e,t,i)=>{e.exports=i("dll-reference md66")("./client/fx/ux/models/index.js")},"./client/fx/ux/styleflow.js":(e,t,i)=>{e.exports=i("dll-reference md66")("./client/fx/ux/styleflow.js")},"./node_modules/@vue/composition-api/dist/vue-composition-api.mjs":(e,t,i)=>{e.exports=i("dll-reference md2")("./node_modules/@vue/composition-api/dist/vue-composition-api.mjs")},"./node_modules/csx/lib.es2015/index.js":(e,t,i)=>{e.exports=i("dll-reference md2")("./node_modules/csx/lib.es2015/index.js")},"./node_modules/typestyle/umd/typestyle.js":(e,t,i)=>{e.exports=i("dll-reference md2")("./node_modules/typestyle/umd/typestyle.js")},"./node_modules/vue-class-component/dist/vue-class-component.esm.js":(e,t,i)=>{e.exports=i("dll-reference md2")("./node_modules/vue-class-component/dist/vue-class-component.esm.js")},"./node_modules/vue/dist/vue.esm.js":(e,t,i)=>{e.exports=i("dll-reference md2")("./node_modules/vue/dist/vue.esm.js")},"0111486e-5dc8-4705-8247-d91fb2aba33d":(e,t,i)=>{e.exports=i("dll-reference md66")("0111486e-5dc8-4705-8247-d91fb2aba33d")},"14a8d443-2e58-450b-a462-258bdaf69b49":(e,t,i)=>{e.exports=i("dll-reference md10")("14a8d443-2e58-450b-a462-258bdaf69b49")},"5e618f4d-d014-414e-a681-89e34cbeda0f":(e,t,i)=>{e.exports=i("dll-reference md10")("5e618f4d-d014-414e-a681-89e34cbeda0f")},"97786ea9-4861-48bd-8a57-eae9bbdb4892":(e,t,i)=>{e.exports=i("dll-reference md9")("97786ea9-4861-48bd-8a57-eae9bbdb4892")},"d0a145a7-d1ef-4217-aa6f-85dd18c4231d":(e,t,i)=>{e.exports=i("dll-reference md9")("d0a145a7-d1ef-4217-aa6f-85dd18c4231d")},"d7327742-5647-4075-b7ab-4f9ca852addb":(e,t,i)=>{e.exports=i("dll-reference md66")("d7327742-5647-4075-b7ab-4f9ca852addb")},"e25b9dd8-6dd7-4437-8ddd-0b9fadba73ac":(e,t,i)=>{e.exports=i("dll-reference md10")("e25b9dd8-6dd7-4437-8ddd-0b9fadba73ac")},"ff061abc-7f0e-444b-b2b9-7ff71c5842c5":(e,t,i)=>{e.exports=i("dll-reference md9")("ff061abc-7f0e-444b-b2b9-7ff71c5842c5")},"dll-reference md2":e=>{"use strict";e.exports=omniaVendor},"dll-reference md9":e=>{"use strict";e.exports=omniaWebpackJsonp["bb000000-0000-bbbb-0000-0000000000bb"]["a2892051-fd9f-4056-ae8d-30d16d48417d"]},"dll-reference md10":e=>{"use strict";e.exports=omniaWebpackJsonp["bb000000-0000-bbbb-0000-0000000000bb"]["a5a89056-b5f5-475d-8518-a1f55090379d"]},"dll-reference md66":e=>{"use strict";e.exports=omniaWebpackJsonp["bb000000-0000-bbbb-0000-0000000000bb"]["dee030cc-4ab3-4158-bb06-8049f5c67542"]}};if("undefined"==typeof omniaWebpackJsonp&&(globalThis.omniaWebpackJsonp={}),globalThis.omniaWebpackJsonp["bb000000-0000-bbbb-0000-0000000000bb"]=globalThis.omniaWebpackJsonp["bb000000-0000-bbbb-0000-0000000000bb"]||{},globalThis.omniaWebpackJsonp["bb000000-0000-bbbb-0000-0000000000bb"]["253e469e-f68e-4cb5-b526-343736c2ff11"])throw new Error("Error, already loaded manifest 253e469e-f68e-4cb5-b526-343736c2ff11 with service id bb000000-0000-bbbb-0000-0000000000bb");globalThis.omniaWebpackJsonp["bb000000-0000-bbbb-0000-0000000000bb"]["253e469e-f68e-4cb5-b526-343736c2ff11"]=i;var t={};function i(s){var n=t[s];if(void 0!==n)return n.exports;var o=t[s]={exports:{}};return e[s](o,o.exports,i),o.exports}i.d=(e,t)=>{for(var s in t)i.o(t,s)&&!i.o(e,s)&&Object.defineProperty(e,s,{enumerable:!0,get:t[s]})},i.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),i.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})};i("./client/fx/ux/admin/chrome/adminchrome.tsx")})()};