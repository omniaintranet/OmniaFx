if("undefined"==typeof omniaLoader&&(globalThis.omniaLoader={}),omniaLoader["bb000000-0000-bbbb-0000-0000000000bb"]=omniaLoader["bb000000-0000-bbbb-0000-0000000000bb"]||{},omniaLoader["bb000000-0000-bbbb-0000-0000000000bb"]["e95c4611-a455-48a7-9e4c-3984d8e5228d"])throw new Error("Error, already loaded manifest e95c4611-a455-48a7-9e4c-3984d8e5228d with service id bb000000-0000-bbbb-0000-0000000000bb");omniaLoader["bb000000-0000-bbbb-0000-0000000000bb"]["e95c4611-a455-48a7-9e4c-3984d8e5228d"]=function(){(()=>{var e={"./client/fx/ux/multilingualinput/multilingualinput.tsx":(e,t,i)=>{"use strict";i.r(t),i.d(t,{MultilingualInput:()=>k});var s=i("./node_modules/@vue/babel-helper-vue-jsx-merge-props/dist/helper.js"),n=i.n(s),a=i("./node_modules/@vue/composition-api/dist/vue-composition-api.mjs"),l=i("./node_modules/vue-class-component/dist/vue-class-component.esm.js"),o=i("./node_modules/vue-property-decorator/lib/vue-property-decorator.js"),r=i("14a8d443-2e58-450b-a462-258bdaf69b49").setCurrentManifest("bb000000-0000-bbbb-0000-0000000000bb","e95c4611-a455-48a7-9e4c-3984d8e5228d"),d=i("d0a145a7-d1ef-4217-aa6f-85dd18c4231d"),u=i("./client/fx/ux/styleflow.js"),h=i("./client/fx/ux/uxstyles.js"),g=i("./client/fx/ux/models/index.js"),c=i("./node_modules/csx/lib.es2015/index.js");u.StyleFlow.define(g.MultilingualInputStyles,{flag:{display:"inline-block",padding:"0 4px 2px 4px",cursor:"pointer",borderBottom:"2px solid transparent"},selectedFlag:e=>({borderColor:(0,c.important)(e.body.components.color.base)}),multilingualWrapper:{paddingBottom:"20px",marginTop:"4px"},multilingualBodyWrapper:{paddingBottom:"10px"},listViewWrapper:{paddingBottom:"10px"},listViewFlag:{marginRight:"10px"},fieldValidation:{color:(0,c.important)("#ff5252"),fontSize:"12px",marginTop:"8px"},inputPadding:{marginTop:"10px"},label:e=>({fontSize:"12px",color:e.body.bg.dark?h.Styles.darkColors.componentLabel:h.Styles.lightColors.componentLabel,transition:".3s cubic-bezier(.25,.8,.5,1)"}),disabledLabel:e=>({color:e.body.bg.dark?h.Styles.darkColors.disabledComponentLabel:h.Styles.lightColors.disabledComponentLabel}),focusedLabel:e=>({color:e.body.components.color.base}),icon:e=>({color:`${e.body.bg.dark?h.Styles.darkColors.componentLabel:h.Styles.lightColors.componentLabel} !important`})});var p,b=i("5e618f4d-d014-414e-a681-89e34cbeda0f"),f=i("c041fe9f-1e14-443d-9407-5aa8829fbc21");(p||(p={})).namespace="Omnia.Ux.MultilingualInput";var m=i("10407664-c0c5-438b-94b2-507d58d190af"),x=i("./client/fx/ux/multilingualcontext.js"),y=i("8610c059-395a-45c2-804a-8c236f4d60d9"),L=i("f37916a5-b801-4e3a-a1be-30a009bd2df2"),C=i("./client/fx/ux/inputlanguagepicker/stores/index.js"),v=Object.defineProperty,S=Object.getOwnPropertyDescriptor,M=(e,t,i,s)=>{for(var n,a=s>1?void 0:s?S(t,i):t,l=e.length-1;l>=0;l--)(n=e[l])&&(a=(s?n(t,i,a):n(a))||a);return s&&a&&v(t,i,a),a};let k=class extends y.VueComponentBase{constructor(){super(...arguments),this.internalModel={isMultilingualString:!0},this.internalDisabled=!1,this.isLoading=!1,this.languages=[],this.isListView=!1,this.timeWatchKey=r.Utils.generateGuid(),this.defaultLanguageCode="",this.editingLanguageCode="",this.showRequired=!1,this.editorKey="",this.focusMark={},this.previousInternalModelJson="",this.styles=u.StyleFlow.use(g.MultilingualInputStyles),this.computedStyleClasses={selectedFlag:"",label:"",disabledLabel:"",icon:"",focusedLabel:""},this.customRichTextMenuBarStyle={menubarLanguagePicker:{paddingRight:"45px",$nest:{".language-picker":{position:"absolute",top:"8px",right:"12px"}}}}}get forceOneLanguage(){let e=!1;return e=this.multilingualContext?this.multilingualContext.forceOneLanguage||!1:this.inheritedMultilingualContext.forceOneLanguage||!1,e}get forceTenantLanguages(){let e=!1;return e=this.multilingualContext?this.multilingualContext.forceTenantLanguages||!1:this.inheritedMultilingualContext.forceTenantLanguages||!1,e}onDisabledModelChange(){this.disabled!=this.internalDisabled&&(this.editorKey=r.Utils.generateGuid(),this.forceOneLanguage?this.initWithForceOneLanguage():this.init())}onValueBindChanged(){this.valueBind&&JSON.stringify(this.valueBind)==JSON.stringify(this.internalModel)||(this.forceOneLanguage?this.initWithForceOneLanguage():this.init())}onInternalModelChange(){this.onValueChanged&&r.Utils.timewatch(this.timeWatchKey,(()=>{this.flushModel()}),500)}mounted(){if(r.WebComponentBootstrapper.registerElementInstance(this,this.$el),this.requiredWithValidator){const e=this;this.requiredWithValidator.register(e)}}get selectedInputLanguage(){return this.inputLanguageStore.getters.getInputLanguage()}get darkValue(){return"boolean"==typeof this.dark?this.dark:this.theming.body.bg.dark}validate(){let e=!0;return this.isComponentStillValid()&&(this.showRequired=!1,this.internalModel&&this.internalModel[this.defaultLanguageCode]&&this.internalModel[this.defaultLanguageCode].trim()&&this.internalModel[this.defaultLanguageCode].replace("<p></p>","")||(this.showRequired=!0,this.editingLanguageCode=this.defaultLanguageCode,e=!1)),e}clearValidation(){this.showRequired=!1}created(){this.forceOneLanguage?this.initWithForceOneLanguage():(this.init(),this.subscriptionHandler.add(this.multilingualStringStore.getters.onLanguageSettingUpdated()((()=>{this.init()}))),this.subscriptionHandler.add(this.inputLanguageStore.getters.onInputLanguageUpdated()((()=>{this.editorKey=r.Utils.generateGuid(),this.init()})))),this.subscribeFlushMessage()}subscribeFlushMessage(){this.subscriptionHandler.add(m.InternalTopics.flushMultilingualInputModel.subscribe((()=>{this.isComponentStillValid()&&this.onValueChanged&&this.flushModel()})))}flushModel(){const e=JSON.stringify(this.internalModel);this.previousInternalModelJson!=e&&(this.previousInternalModelJson=e,this.onValueChanged(this.internalModel))}isComponentStillValid(){return!(!document.body.contains(this.$el)||this.$root._isDestroyed)}onConfigureExtensions(e,t,i){return this.richTextSettings&&this.richTextSettings.onConfigureExtensions&&(e=this.richTextSettings.onConfigureExtensions(e,t,i)),this.isListView||this.forceOneLanguage||e.push(new L.LanguagePickerEditorExtension({multilingualContext:{forceOneLanguage:this.forceOneLanguage,forceTenantLanguages:this.forceTenantLanguages}})),e}initWithForceOneLanguage(){this.showRequired=!1,this.editingLanguageCode="en-us",this.defaultLanguageCode="en-us",this.languages=[{displayName:"",lcid:1033,name:"en-us"}],this.initInternalModel()}init(){this.computedStyleClasses={selectedFlag:this.styles.selectedFlag(this.theming),label:this.styles.label(this.theming),disabledLabel:this.styles.disabledLabel(this.theming),icon:this.styles.icon(this.theming),focusedLabel:this.styles.focusedLabel(this.theming)},this.showRequired=!1;const e=this.multilingualStringStore.getters.languageSetting(this.forceTenantLanguages?d.MultilingualScopes.Tenant:d.MultilingualScopes.BusinessProfile);this.editingLanguageCode=e?e.defaultLanguageTag:"",this.defaultLanguageCode=e?e.defaultLanguageTag:"",this.languages=e?e.availableLanguages:[],null!=this.selectedInputLanguage&&(this.isListView=this.selectedInputLanguage.lcid<0,this.selectedInputLanguage.lcid>=0&&(this.editingLanguageCode=this.selectedInputLanguage.name)),this.initInternalModel()}initInternalModel(){if(this.internalDisabled=this.disabled,this.internalModel=Object.assign({},this.valueBind),this.previousInternalModelJson=JSON.stringify(this.internalModel),!this.internalModel[this.defaultLanguageCode]||!this.internalModel[this.defaultLanguageCode].trim()){const e=this.multilingualStringStore.getters.stringValue(this.internalModel);e&&e.trim()&&this.$set(this.internalModel,this.defaultLanguageCode,e)}Object.keys(this.internalModel).filter((e=>"boolean"!=typeof this.internalModel[e])).forEach((e=>{this.languages.find((t=>t.name==e))||delete this.internalModel[e]}))}onInput(e,t,i){void 0!==i&&(this.$set(e,t,i),this.valueBind=Object.assign({},e)),this.requiredWithValidator&&this.validate()}onBlur(e){this.$set(this.focusMark,e,!1),this.requiredWithValidator&&this.validate()}transformVSlot(e){const t=[];return Object.keys(e).forEach((i=>{let s=!1,n=i;0===n.indexOf("proxy-")&&(s=!0,n=n.replace("proxy-","")),t.push(s?{key:n,fn:e[i],proxy:!0}:{key:n,fn:e[i]})})),{scopedSlots:this._u(t)}}renderSingleLangualInput(){const e=r.ServiceLocator.replaceTokenWithDns(this.internalModel[this.editingLanguageCode]);return this.richTextSettings?(0,a.h)("div",[(0,a.h)("omfx-rich-text-editor",{domProps:{onContentChange:e=>{this.onInput(this.internalModel,this.editingLanguageCode,e)},styles:this.richTextSettings.styles},attrs:{initialContent:e,mode:this.richTextSettings.mode,bodyClass:this.richTextSettings.bodyClass,placeholder:this.richTextSettings.placeholder,"error-messages":this.showRequired?this.loc.SingleLanguageRequiredMessage:"",label:this.label,disabled:this.disabled},on:{configureExtensions:this.richTextSettings.onConfigureExtensions},key:this.editorKey}),this.showRequired?(0,a.h)("div",{class:this.styles.fieldValidation},[this.loc.SingleLanguageRequiredMessage]):null]):this.multipleLines?(0,a.h)("v-textarea",{attrs:{dark:this.darkValue,filled:this.filled,"auto-grow":!0,"error-messages":this.showRequired?this.loc.SingleLanguageRequiredMessage:"",disabled:this.disabled,label:this.label,value:e},on:{input:e=>{this.onInput(this.internalModel,this.editingLanguageCode,e)}}}):(0,a.h)("v-text-field",{attrs:{dark:this.darkValue,filled:this.filled,"error-messages":this.showRequired?this.loc.SingleLanguageRequiredMessage:"",label:this.label,disabled:this.disabled,value:e},on:{input:e=>{this.onInput(this.internalModel,this.editingLanguageCode,e)}}})}renderMultilingualInput(){return(0,a.h)("div",{class:this.styles.multilingualWrapper},[this.renderLabel(),this.isListView?this.renderListView():this.renderTabBody()])}renderLabel(){const e=!!Object.keys(this.focusMark).find((e=>this.focusMark[e])),t=this.disabled?this.computedStyleClasses.disabledLabel:e?this.computedStyleClasses.focusedLabel:"";return(0,a.h)("v-layout",{attrs:{row:!0,"align-center":!0},class:"ma-0"},[(0,a.h)("v-flex",{style:this.darkValue?"color:white!important":"",class:[this.computedStyleClasses.label,t]},[this.label]),this.isListView&&(0,a.h)("v-flex",{class:"text-right"},[(0,a.h)("v-tooltip",n()([{attrs:{top:!0}},this.transformVSlot({activator:e=>{const t={on:e.on};return[(0,a.h)("v-btn",n()([{attrs:{icon:!0,small:!0}},t,{on:{click:()=>{this.isListView=!this.isListView,this.inputLanguageStore.mutations.setInputLanguage(this.languages.find((e=>e.name==this.defaultLanguageCode)))}}}]),[(0,a.h)("v-icon",{style:this.darkValue?"color:white!important":"",attrs:{dark:this.darkValue},class:this.computedStyleClasses.icon},["filter_none"])])]}})]),[(0,a.h)("span",["back"])])])])}renderListView(){return(0,a.h)("div",{class:this.styles.listViewWrapper},[this.languages.map((e=>{if(null==e.name)return null;const t=this.showRequired&&e.name==this.defaultLanguageCode,i=r.ServiceLocator.replaceTokenWithDns(this.internalModel[e.name]);return(0,a.h)("v-layout",{class:"ma-0",attrs:{row:!0,"align-center":this.multipleLines||t||this.richTextSettings,"align-end":!this.multipleLines&&!t&&!this.richTextSettings}},[this.isListView&&(0,a.h)("v-flex",{attrs:{shrink:!0},class:this.styles.listViewFlag},[(0,a.h)("v-tooltip",n()([{attrs:{top:!0}},this.transformVSlot({activator:t=>{const i={on:t.on};return[(0,a.h)("i",n()([{},i,{class:["ma-0","omux-flag",`flag-${e.name.split("-")[1]}`]}]))]}})]),[(0,a.h)("span",[e.displayName])])]),(0,a.h)("v-flex",[this.richTextSettings?(0,a.h)("div",{class:this.styles.inputPadding},[(0,a.h)("omfx-rich-text-editor",{domProps:{onContentChange:t=>{this.onInput(this.internalModel,e.name,t)},styles:this.richTextSettings.styles},attrs:{initialContent:i,mode:this.richTextSettings.mode,bodyClass:this.richTextSettings.bodyClass,placeholder:this.richTextSettings.placeholder,"error-messages":this.showRequired?this.loc.DefaultLanguageRequiredMessage:"",label:this.label,disabled:this.disabled},on:{configureExtensions:this.onConfigureExtensions},key:this.editorKey}),t?(0,a.h)("div",{class:this.styles.fieldValidation},[this.loc.SingleLanguageRequiredMessage]):null]):this.multipleLines?(0,a.h)("v-textarea",{on:{focus:()=>{this.$set(this.focusMark,e.name,!0)},blur:()=>{this.onBlur(e.name)},input:t=>{this.onInput(this.internalModel,e.name,t)}},attrs:{dark:this.darkValue,filled:this.filled,"auto-grow":!0,"error-messages":t?this.loc.DefaultLanguageRequiredMessage:"",disabled:this.disabled,value:i,"hide-details":!t}}):(0,a.h)("v-text-field",{on:{focus:()=>{this.$set(this.focusMark,e.name,!0)},blur:()=>{this.onBlur(e.name)},input:t=>{this.onInput(this.internalModel,e.name,t)}},attrs:{dark:this.darkValue,filled:this.filled,"error-messages":t?this.loc.DefaultLanguageRequiredMessage:"",disabled:this.disabled,value:i,"hide-details":!t}})])])}))])}renderTabBody(){const e=this.showRequired&&this.editingLanguageCode==this.defaultLanguageCode,t=r.ServiceLocator.replaceTokenWithDns(this.internalModel[this.editingLanguageCode]),i=this.richTextSettings&&this.richTextSettings.styles?Object.assign(this.filled?this.customRichTextMenuBarStyle:null,this.richTextSettings.styles):this.filled?this.customRichTextMenuBarStyle:null;return(0,a.h)("div",{class:this.styles.multilingualBodyWrapper},[this.richTextSettings?(0,a.h)("div",[(0,a.h)("omfx-rich-text-editor",{domProps:{onContentChange:e=>{this.onInput(this.internalModel,this.editingLanguageCode,e)},styles:i},attrs:{initialContent:t,mode:this.richTextSettings.mode,bodyClass:this.richTextSettings.bodyClass,placeholder:this.richTextSettings.placeholder,"error-messages":this.showRequired?this.loc.DefaultLanguageRequiredMessage:"",label:this.label,disabled:this.disabled},on:{configureExtensions:this.onConfigureExtensions},key:this.editorKey}),e?(0,a.h)("div",{class:this.styles.fieldValidation},[this.loc.SingleLanguageRequiredMessage]):null]):this.multipleLines?(0,a.h)("v-textarea",{on:{focus:()=>{this.$set(this.focusMark,this.editingLanguageCode,!0)},blur:()=>{this.onBlur(this.editingLanguageCode)},input:e=>{this.onInput(this.internalModel,this.editingLanguageCode,e)}},attrs:{dark:this.darkValue,filled:this.filled,"auto-grow":!0,"error-messages":e?this.loc.DefaultLanguageRequiredMessage:"",disabled:this.disabled,value:t,"hide-details":!e}},[(0,a.h)("div",{slot:"append"},[(0,a.h)("omfx-input-language-picker",{domProps:{multilingualContext:{forceOneLanguage:this.forceOneLanguage,forceTenantLanguages:this.forceTenantLanguages}}})])]):(0,a.h)("v-text-field",{on:{focus:()=>{this.$set(this.focusMark,this.editingLanguageCode,!0)},blur:()=>{this.onBlur(this.editingLanguageCode)},input:e=>{this.onInput(this.internalModel,this.editingLanguageCode,e)}},attrs:{dark:this.darkValue,filled:this.filled,"error-messages":e?this.loc.DefaultLanguageRequiredMessage:"",disabled:this.disabled,value:t,"hide-details":!e}},[(0,a.h)("div",{slot:"append"},[(0,a.h)("omfx-input-language-picker",{domProps:{multilingualContext:{forceOneLanguage:this.forceOneLanguage,forceTenantLanguages:this.forceTenantLanguages}}})])])])}render(){return(0,a.h)("div",[this.isLoading||0==this.languages.length?null:1==this.languages.length?this.renderSingleLangualInput():[this.renderMultilingualInput()]])}};M([(0,o.Prop)()],k.prototype,"valueBind",2),M([(0,o.Prop)()],k.prototype,"dark",2),M([(0,o.Prop)()],k.prototype,"onValueChanged",2),M([(0,o.Prop)()],k.prototype,"multipleLines",2),M([(0,o.Prop)()],k.prototype,"richTextSettings",2),M([(0,o.Prop)()],k.prototype,"label",2),M([(0,o.Prop)()],k.prototype,"filled",2),M([(0,o.Prop)()],k.prototype,"disabled",2),M([(0,o.Prop)()],k.prototype,"multilingualContext",2),M([(0,o.Prop)()],k.prototype,"requiredWithValidator",2),M([(0,r.Inject)(x.MultilingualContext)],k.prototype,"inheritedMultilingualContext",2),M([(0,r.Inject)(r.OmniaContext)],k.prototype,"omniaCtx",2),M([(0,r.Inject)(b.MultilingualStore)],k.prototype,"multilingualStringStore",2),M([(0,r.Inject)(r.SubscriptionHandler)],k.prototype,"subscriptionHandler",2),M([(0,r.Inject)(C.InputLanguageStore)],k.prototype,"inputLanguageStore",2),M([(0,f.Localize)(p.namespace)],k.prototype,"loc",2),M([(0,o.Watch)("disabled",{deep:!0,immediate:!1})],k.prototype,"onDisabledModelChange",1),M([(0,o.Watch)("valueBind",{deep:!0,immediate:!1})],k.prototype,"onValueBindChanged",1),M([(0,o.Watch)("internalModel",{deep:!0,immediate:!1})],k.prototype,"onInternalModelChange",1),k=M([l.default],k),r.WebComponentBootstrapper.registerElement((e=>{(0,r.vueCustomElement)(e.elementName,k,{destroyTimeout:2e3})}))},"./client/fx/ux/inputlanguagepicker/stores/index.js":(e,t,i)=>{e.exports=i("dll-reference md66")("./client/fx/ux/inputlanguagepicker/stores/index.js")},"./client/fx/ux/models/index.js":(e,t,i)=>{e.exports=i("dll-reference md66")("./client/fx/ux/models/index.js")},"./client/fx/ux/multilingualcontext.js":(e,t,i)=>{e.exports=i("dll-reference md66")("./client/fx/ux/multilingualcontext.js")},"./client/fx/ux/styleflow.js":(e,t,i)=>{e.exports=i("dll-reference md66")("./client/fx/ux/styleflow.js")},"./client/fx/ux/uxstyles.js":(e,t,i)=>{e.exports=i("dll-reference md66")("./client/fx/ux/uxstyles.js")},"./node_modules/@vue/babel-helper-vue-jsx-merge-props/dist/helper.js":(e,t,i)=>{e.exports=i("dll-reference md2")("./node_modules/@vue/babel-helper-vue-jsx-merge-props/dist/helper.js")},"./node_modules/@vue/composition-api/dist/vue-composition-api.mjs":(e,t,i)=>{e.exports=i("dll-reference md2")("./node_modules/@vue/composition-api/dist/vue-composition-api.mjs")},"./node_modules/csx/lib.es2015/index.js":(e,t,i)=>{e.exports=i("dll-reference md2")("./node_modules/csx/lib.es2015/index.js")},"./node_modules/vue-class-component/dist/vue-class-component.esm.js":(e,t,i)=>{e.exports=i("dll-reference md2")("./node_modules/vue-class-component/dist/vue-class-component.esm.js")},"./node_modules/vue-property-decorator/lib/vue-property-decorator.js":(e,t,i)=>{e.exports=i("dll-reference md2")("./node_modules/vue-property-decorator/lib/vue-property-decorator.js")},"10407664-c0c5-438b-94b2-507d58d190af":(e,t,i)=>{e.exports=i("dll-reference md9")("10407664-c0c5-438b-94b2-507d58d190af")},"14a8d443-2e58-450b-a462-258bdaf69b49":(e,t,i)=>{e.exports=i("dll-reference md10")("14a8d443-2e58-450b-a462-258bdaf69b49")},"5e618f4d-d014-414e-a681-89e34cbeda0f":(e,t,i)=>{e.exports=i("dll-reference md10")("5e618f4d-d014-414e-a681-89e34cbeda0f")},"8610c059-395a-45c2-804a-8c236f4d60d9":(e,t,i)=>{e.exports=i("dll-reference md66")("8610c059-395a-45c2-804a-8c236f4d60d9")},"c041fe9f-1e14-443d-9407-5aa8829fbc21":(e,t,i)=>{e.exports=i("dll-reference md10")("c041fe9f-1e14-443d-9407-5aa8829fbc21")},"d0a145a7-d1ef-4217-aa6f-85dd18c4231d":(e,t,i)=>{e.exports=i("dll-reference md9")("d0a145a7-d1ef-4217-aa6f-85dd18c4231d")},"f37916a5-b801-4e3a-a1be-30a009bd2df2":(e,t,i)=>{e.exports=i("dll-reference md60")("f37916a5-b801-4e3a-a1be-30a009bd2df2")},"dll-reference md2":e=>{"use strict";e.exports=omniaVendor},"dll-reference md9":e=>{"use strict";e.exports=omniaWebpackJsonp["bb000000-0000-bbbb-0000-0000000000bb"]["a2892051-fd9f-4056-ae8d-30d16d48417d"]},"dll-reference md10":e=>{"use strict";e.exports=omniaWebpackJsonp["bb000000-0000-bbbb-0000-0000000000bb"]["a5a89056-b5f5-475d-8518-a1f55090379d"]},"dll-reference md60":e=>{"use strict";e.exports=omniaWebpackJsonp["bb000000-0000-bbbb-0000-0000000000bb"]["b46f7161-e941-4240-b573-a9cd83e9d132"]},"dll-reference md66":e=>{"use strict";e.exports=omniaWebpackJsonp["bb000000-0000-bbbb-0000-0000000000bb"]["dee030cc-4ab3-4158-bb06-8049f5c67542"]}};if("undefined"==typeof omniaWebpackJsonp&&(globalThis.omniaWebpackJsonp={}),globalThis.omniaWebpackJsonp["bb000000-0000-bbbb-0000-0000000000bb"]=globalThis.omniaWebpackJsonp["bb000000-0000-bbbb-0000-0000000000bb"]||{},globalThis.omniaWebpackJsonp["bb000000-0000-bbbb-0000-0000000000bb"]["e95c4611-a455-48a7-9e4c-3984d8e5228d"])throw new Error("Error, already loaded manifest e95c4611-a455-48a7-9e4c-3984d8e5228d with service id bb000000-0000-bbbb-0000-0000000000bb");globalThis.omniaWebpackJsonp["bb000000-0000-bbbb-0000-0000000000bb"]["e95c4611-a455-48a7-9e4c-3984d8e5228d"]=i;var t={};function i(s){var n=t[s];if(void 0!==n)return n.exports;var a=t[s]={exports:{}};return e[s](a,a.exports,i),a.exports}i.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return i.d(t,{a:t}),t},i.d=(e,t)=>{for(var s in t)i.o(t,s)&&!i.o(e,s)&&Object.defineProperty(e,s,{enumerable:!0,get:t[s]})},i.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),i.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})};i("./client/fx/ux/multilingualinput/multilingualinput.tsx")})()};