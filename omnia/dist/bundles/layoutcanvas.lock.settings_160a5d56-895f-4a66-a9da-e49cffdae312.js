if("undefined"==typeof omniaLoader&&(globalThis.omniaLoader={}),omniaLoader["bb000000-0000-bbbb-0000-0000000000bb"]=omniaLoader["bb000000-0000-bbbb-0000-0000000000bb"]||{},omniaLoader["bb000000-0000-bbbb-0000-0000000000bb"]["160a5d56-895f-4a66-a9da-e49cffdae312"])throw new Error("Error, already loaded manifest 160a5d56-895f-4a66-a9da-e49cffdae312 with service id bb000000-0000-bbbb-0000-0000000000bb");omniaLoader["bb000000-0000-bbbb-0000-0000000000bb"]["160a5d56-895f-4a66-a9da-e49cffdae312"]=function(){(()=>{var e={"./client/fx/ux/layoutcanvas/editor/settings/lock/lock.tsx":(e,t,o)=>{"use strict";o.r(t),o.d(t,{default:()=>p});var a=o("./node_modules/@vue/composition-api/dist/vue-composition-api.mjs"),b=o("14a8d443-2e58-450b-a462-258bdaf69b49").setCurrentManifest("bb000000-0000-bbbb-0000-0000000000bb","160a5d56-895f-4a66-a9da-e49cffdae312"),r=o("d7327742-5647-4075-b7ab-4f9ca852addb").setCurrentManifest("bb000000-0000-bbbb-0000-0000000000bb","160a5d56-895f-4a66-a9da-e49cffdae312"),n=o("./node_modules/vue-property-decorator/lib/vue-property-decorator.js"),s=o("./client/fx/ux/layoutcanvas/index.js"),i=o("97786ea9-4861-48bd-8a57-eae9bbdb4892"),d=Object.defineProperty,l=Object.getOwnPropertyDescriptor,c=(e,t,o,a)=>{for(var b,r=a>1?void 0:a?l(t,o):t,n=e.length-1;n>=0;n--)(b=e[n])&&(r=(a?b(t,o,r):b(r))||r);return a&&r&&d(t,o,r),r};let p=class extends r.VueComponentBase{constructor(){super(...arguments),this.layoutItem=null}mounted(){b.WebComponentBootstrapper.registerElementInstance(this,this.$el)}created(){this.subscriptionHandler.add(this.editorStore.selectedLayoutItem.onMutated(this.setLayoutItem)),this.setLayoutItem()}setLayoutItem(){this.layoutItem=this.editorStore.selectedLayoutItem.state,this.layoutItem&&this.ensureDefaultLockSettings()}ensureDefaultLockSettings(){this.layoutItem.settings.lockSettings||this.$set(this.layoutItem.settings,(0,i.propertyPath)()("lockSettings"),s.LayoutItemFactory.getDefaultLockSettings())}render(){return this.layoutItem?(0,a.h)("div",[(0,a.h)("v-switch",{attrs:{dark:this.theming.body.bg.dark,"persistent-hint":!0,label:this.omniaUxLoc.LayoutEngine.Panels.Lock.LockedByDefaut,"input-value":this.layoutItem.settings.lockSettings.lockedByDefault},on:{change:e=>{this.layoutItem.settings.lockSettings.lockedByDefault=e}}}),(0,a.h)("v-switch",{attrs:{dark:this.theming.body.bg.dark,"persistent-hint":!0,label:this.omniaUxLoc.LayoutEngine.Panels.Lock.LockCanBeEdited,"input-value":this.layoutItem.settings.lockSettings.lockCanBeEdited},on:{change:e=>{this.layoutItem.settings.lockSettings.lockCanBeEdited=e}}})]):null}};c([(0,b.Inject)(s.LayoutCanvasStore)],p.prototype,"editorStore",2),c([(0,b.Inject)(b.SubscriptionHandler)],p.prototype,"subscriptionHandler",2),c([(0,b.Localize)(r.OmniaUxLocalizationNamespace)],p.prototype,"omniaUxLoc",2),p=c([n.Component],p),b.WebComponentBootstrapper.registerElement((e=>{(0,b.vueCustomElement)(e.elementName,p)}))},"./client/fx/ux/layoutcanvas/index.js":(e,t,o)=>{e.exports=o("dll-reference md66")("./client/fx/ux/layoutcanvas/index.js")},"./node_modules/@vue/composition-api/dist/vue-composition-api.mjs":(e,t,o)=>{e.exports=o("dll-reference md2")("./node_modules/@vue/composition-api/dist/vue-composition-api.mjs")},"./node_modules/vue-property-decorator/lib/vue-property-decorator.js":(e,t,o)=>{e.exports=o("dll-reference md2")("./node_modules/vue-property-decorator/lib/vue-property-decorator.js")},"14a8d443-2e58-450b-a462-258bdaf69b49":(e,t,o)=>{e.exports=o("dll-reference md10")("14a8d443-2e58-450b-a462-258bdaf69b49")},"97786ea9-4861-48bd-8a57-eae9bbdb4892":(e,t,o)=>{e.exports=o("dll-reference md9")("97786ea9-4861-48bd-8a57-eae9bbdb4892")},"d7327742-5647-4075-b7ab-4f9ca852addb":(e,t,o)=>{e.exports=o("dll-reference md66")("d7327742-5647-4075-b7ab-4f9ca852addb")},"dll-reference md2":e=>{"use strict";e.exports=omniaVendor},"dll-reference md9":e=>{"use strict";e.exports=omniaWebpackJsonp["bb000000-0000-bbbb-0000-0000000000bb"]["a2892051-fd9f-4056-ae8d-30d16d48417d"]},"dll-reference md10":e=>{"use strict";e.exports=omniaWebpackJsonp["bb000000-0000-bbbb-0000-0000000000bb"]["a5a89056-b5f5-475d-8518-a1f55090379d"]},"dll-reference md66":e=>{"use strict";e.exports=omniaWebpackJsonp["bb000000-0000-bbbb-0000-0000000000bb"]["dee030cc-4ab3-4158-bb06-8049f5c67542"]}};if("undefined"==typeof omniaWebpackJsonp&&(globalThis.omniaWebpackJsonp={}),globalThis.omniaWebpackJsonp["bb000000-0000-bbbb-0000-0000000000bb"]=globalThis.omniaWebpackJsonp["bb000000-0000-bbbb-0000-0000000000bb"]||{},globalThis.omniaWebpackJsonp["bb000000-0000-bbbb-0000-0000000000bb"]["160a5d56-895f-4a66-a9da-e49cffdae312"])throw new Error("Error, already loaded manifest 160a5d56-895f-4a66-a9da-e49cffdae312 with service id bb000000-0000-bbbb-0000-0000000000bb");globalThis.omniaWebpackJsonp["bb000000-0000-bbbb-0000-0000000000bb"]["160a5d56-895f-4a66-a9da-e49cffdae312"]=o;var t={};function o(a){var b=t[a];if(void 0!==b)return b.exports;var r=t[a]={exports:{}};return e[a](r,r.exports,o),r.exports}o.d=(e,t)=>{for(var a in t)o.o(t,a)&&!o.o(e,a)&&Object.defineProperty(e,a,{enumerable:!0,get:t[a]})},o.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),o.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})};o("./client/fx/ux/layoutcanvas/editor/settings/lock/lock.tsx")})()};