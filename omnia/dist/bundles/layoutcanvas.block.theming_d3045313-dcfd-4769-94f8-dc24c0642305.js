if("undefined"==typeof omniaLoader&&(globalThis.omniaLoader={}),omniaLoader["bb000000-0000-bbbb-0000-0000000000bb"]=omniaLoader["bb000000-0000-bbbb-0000-0000000000bb"]||{},omniaLoader["bb000000-0000-bbbb-0000-0000000000bb"]["d3045313-dcfd-4769-94f8-dc24c0642305"])throw new Error("Error, already loaded manifest d3045313-dcfd-4769-94f8-dc24c0642305 with service id bb000000-0000-bbbb-0000-0000000000bb");omniaLoader["bb000000-0000-bbbb-0000-0000000000bb"]["d3045313-dcfd-4769-94f8-dc24c0642305"]=function(){(()=>{var e={"./client/fx/ux/layoutcanvas/editor/settings/block/theming.tsx":(e,t,i)=>{"use strict";i.r(t),i.d(t,{default:()=>l});var o=i("./node_modules/@vue/composition-api/dist/vue-composition-api.mjs"),n=i("./node_modules/vue-property-decorator/lib/vue-property-decorator.js"),s=i("d7327742-5647-4075-b7ab-4f9ca852addb").setCurrentManifest("bb000000-0000-bbbb-0000-0000000000bb","d3045313-dcfd-4769-94f8-dc24c0642305"),d=i("d0a145a7-d1ef-4217-aa6f-85dd18c4231d"),r=i("./client/fx/ux/layoutcanvas/index.js"),a=i("14a8d443-2e58-450b-a462-258bdaf69b49").setCurrentManifest("bb000000-0000-bbbb-0000-0000000000bb","d3045313-dcfd-4769-94f8-dc24c0642305"),b=i("5e618f4d-d014-414e-a681-89e34cbeda0f"),h=Object.defineProperty,m=Object.getOwnPropertyDescriptor,c=(e,t,i,o)=>{for(var n,s=o>1?void 0:o?m(t,i):t,d=e.length-1;d>=0;d--)(n=e[d])&&(s=(o?n(t,i,s):n(s))||s);return o&&s&&h(t,i,s),s};let l=class extends s.VueComponentBase{constructor(){super(...arguments),this.item={},this.settings={},this.editingThemedefinition=null}mounted(){a.WebComponentBootstrapper.registerElementInstance(this,this.$el)}created(){this.item=this.editorStore.selectedLayoutItem.state,this.item.settings=this.item.settings||{},this.settings=this.item.settings,this.settings.useCustomTheme&&this.settings.themeDefinition?this.editingThemedefinition=this.settings.themeDefinition:(this.editingThemedefinition=this.editorStore.themeManager.getDefaultPageThemeForBlockEditingWithFallback(!1),this.editingThemedefinition.id=this.item.id),this.hasCustomBackgroundSettings()&&(this.injectOldBackgroundSettingsInTheme(),this.onSetThemeOption(!0))}hasCustomBackgroundSettings(){return!!this.hasbGColors()||(!!this.hasElevation()||this.settings.chrome===d.ChromeTypes.boxed)}hasbGColors(){return!!this.item.settings.background&&(!!this.item.settings.background.colors&&(0!==this.item.settings.background.colors.length&&""!==this.item.settings.background.colors[0]))}hasElevation(){return!!this.item.settings.background&&this.item.settings.background.elevation>0}resetOldBackgroundSettingsInTheme(){this.hasbGColors()&&(this.item.settings.background.colors=[]),this.hasElevation()&&(this.item.settings.background.elevation=-1),this.settings.chrome===d.ChromeTypes.boxed&&(this.settings.chrome="")}injectOldBackgroundSettingsInTheme(){this.hasbGColors()&&(this.editingThemedefinition.body.bg=this.item.settings.background.colors[0]),this.hasElevation()&&(this.editingThemedefinition.body.border.elevation=this.item.settings.background.elevation),this.settings.chrome===d.ChromeTypes.boxed&&(this.editingThemedefinition.body.border||(this.editingThemedefinition.body.border={}),this.editingThemedefinition.body.border.width=1,this.editingThemedefinition.body.border.color="rgba(0,0,0,0.2)",this.editingThemedefinition.body.border.radiustop=2,this.editingThemedefinition.body.border.radiusbottom=2)}onThemingChange(e){this.resetOldBackgroundSettingsInTheme(),this.editingThemedefinition=e;const t=this.themeStore.getters.getThemingById(this.item.id);t&&t.setThemeDefinition(e),this.settings.themeDefinition=e}onSetThemeOption(e){this.settings.useCustomTheme=e,this.settings.useCustomTheme?(this.settings.themeDefinition=Object.assign({},this.editingThemedefinition),this.themingRenditionManager.registerBlockTheme(this.themeStore,this.item,this.editorStore.layout.state.definition.id)):this.settings.themeDefinition=null}render(){return(0,o.h)("div",[(0,o.h)("v-switch",{attrs:{dark:this.theming.body.bg.dark,color:this.theming.body.components.color.base,"input-value":this.settings.useCustomTheme,label:this.omniaUxLoc.LayoutEngine.Labels.CustomTheme,"true-value":!0,"false-value":!1},class:"mt-0",on:{change:e=>{this.onSetThemeOption(e)}}}),(0,o.h)("div",{directives:[{name:"show",value:this.settings.useCustomTheme}]},[(0,o.h)("omfx-themedefinition-editor",{domProps:{valueBind:this.editingThemedefinition,hideChromeSettings:!0,onValueChanged:this.onThemingChange}})])])}};c([(0,a.Inject)(b.BlockTitleSettingsStore)],l.prototype,"blockTitleSettingsStore",2),c([(0,a.Inject)(r.LayoutCanvasStore)],l.prototype,"editorStore",2),c([(0,a.Inject)(s.ThemeStore)],l.prototype,"themeStore",2),c([(0,a.Inject)(r.ThemingRenditionManager)],l.prototype,"themingRenditionManager",2),c([(0,a.Localize)(s.OmniaUxLocalizationNamespace)],l.prototype,"omniaUxLoc",2),l=c([n.Component],l),a.WebComponentBootstrapper.registerElement((e=>{(0,a.vueCustomElement)(e.elementName,l)}))},"./client/fx/ux/layoutcanvas/index.js":(e,t,i)=>{e.exports=i("dll-reference md66")("./client/fx/ux/layoutcanvas/index.js")},"./node_modules/@vue/composition-api/dist/vue-composition-api.mjs":(e,t,i)=>{e.exports=i("dll-reference md2")("./node_modules/@vue/composition-api/dist/vue-composition-api.mjs")},"./node_modules/vue-property-decorator/lib/vue-property-decorator.js":(e,t,i)=>{e.exports=i("dll-reference md2")("./node_modules/vue-property-decorator/lib/vue-property-decorator.js")},"14a8d443-2e58-450b-a462-258bdaf69b49":(e,t,i)=>{e.exports=i("dll-reference md10")("14a8d443-2e58-450b-a462-258bdaf69b49")},"5e618f4d-d014-414e-a681-89e34cbeda0f":(e,t,i)=>{e.exports=i("dll-reference md10")("5e618f4d-d014-414e-a681-89e34cbeda0f")},"d0a145a7-d1ef-4217-aa6f-85dd18c4231d":(e,t,i)=>{e.exports=i("dll-reference md9")("d0a145a7-d1ef-4217-aa6f-85dd18c4231d")},"d7327742-5647-4075-b7ab-4f9ca852addb":(e,t,i)=>{e.exports=i("dll-reference md66")("d7327742-5647-4075-b7ab-4f9ca852addb")},"dll-reference md2":e=>{"use strict";e.exports=omniaVendor},"dll-reference md9":e=>{"use strict";e.exports=omniaWebpackJsonp["bb000000-0000-bbbb-0000-0000000000bb"]["a2892051-fd9f-4056-ae8d-30d16d48417d"]},"dll-reference md10":e=>{"use strict";e.exports=omniaWebpackJsonp["bb000000-0000-bbbb-0000-0000000000bb"]["a5a89056-b5f5-475d-8518-a1f55090379d"]},"dll-reference md66":e=>{"use strict";e.exports=omniaWebpackJsonp["bb000000-0000-bbbb-0000-0000000000bb"]["dee030cc-4ab3-4158-bb06-8049f5c67542"]}};if("undefined"==typeof omniaWebpackJsonp&&(globalThis.omniaWebpackJsonp={}),globalThis.omniaWebpackJsonp["bb000000-0000-bbbb-0000-0000000000bb"]=globalThis.omniaWebpackJsonp["bb000000-0000-bbbb-0000-0000000000bb"]||{},globalThis.omniaWebpackJsonp["bb000000-0000-bbbb-0000-0000000000bb"]["d3045313-dcfd-4769-94f8-dc24c0642305"])throw new Error("Error, already loaded manifest d3045313-dcfd-4769-94f8-dc24c0642305 with service id bb000000-0000-bbbb-0000-0000000000bb");globalThis.omniaWebpackJsonp["bb000000-0000-bbbb-0000-0000000000bb"]["d3045313-dcfd-4769-94f8-dc24c0642305"]=i;var t={};function i(o){var n=t[o];if(void 0!==n)return n.exports;var s=t[o]={exports:{}};return e[o](s,s.exports,i),s.exports}i.d=(e,t)=>{for(var o in t)i.o(t,o)&&!i.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:t[o]})},i.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),i.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})};i("./client/fx/ux/layoutcanvas/editor/settings/block/theming.tsx")})()};