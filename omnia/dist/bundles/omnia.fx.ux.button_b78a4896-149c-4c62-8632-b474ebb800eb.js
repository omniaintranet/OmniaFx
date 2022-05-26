if("undefined"==typeof omniaLoader&&(globalThis.omniaLoader={}),omniaLoader["bb000000-0000-bbbb-0000-0000000000bb"]=omniaLoader["bb000000-0000-bbbb-0000-0000000000bb"]||{},omniaLoader["bb000000-0000-bbbb-0000-0000000000bb"]["b78a4896-149c-4c62-8632-b474ebb800eb"])throw new Error("Error, already loaded manifest b78a4896-149c-4c62-8632-b474ebb800eb with service id bb000000-0000-bbbb-0000-0000000000bb");omniaLoader["bb000000-0000-bbbb-0000-0000000000bb"]["b78a4896-149c-4c62-8632-b474ebb800eb"]=function(){(()=>{var t={"./client/fx/ux/button/button.tsx":(t,e,o)=>{"use strict";o.r(e),o.d(e,{Button:()=>f});var i=o("./node_modules/@vue/babel-helper-vue-jsx-merge-props/dist/helper.js"),s=o.n(i),r=o("./node_modules/@vue/composition-api/dist/vue-composition-api.mjs"),l=o("./node_modules/vue-class-component/dist/vue-class-component.esm.js"),n=o("./node_modules/vue-property-decorator/lib/vue-property-decorator.js"),b=o("14a8d443-2e58-450b-a462-258bdaf69b49").setCurrentManifest("bb000000-0000-bbbb-0000-0000000000bb","b78a4896-149c-4c62-8632-b474ebb800eb"),d=o("d0a145a7-d1ef-4217-aa6f-85dd18c4231d"),a=o("d7327742-5647-4075-b7ab-4f9ca852addb").setCurrentManifest("bb000000-0000-bbbb-0000-0000000000bb","b78a4896-149c-4c62-8632-b474ebb800eb"),p=o("./node_modules/csx/lib.es2015/index.js"),c=o("./client/fx/ux/models/index.js");a.StyleFlow.define(c.ButtonWrapperStyles,{textColor:t=>({color:(0,p.important)(t)})},"omfx-button");var h=o("e25b9dd8-6dd7-4437-8ddd-0b9fadba73ac"),u=Object.defineProperty,m=Object.getOwnPropertyDescriptor,y=(t,e,o,i)=>{for(var s,r=i>1?void 0:i?m(e,o):e,l=t.length-1;l>=0;l--)(s=t[l])&&(r=(i?s(e,o,r):s(r))||r);return i&&r&&u(e,o,r),r};let f=class extends a.VueComponentBase{constructor(){super(...arguments),this.buttonClasses=a.StyleFlow.use(c.ButtonWrapperStyles),this.useAccessibilityFeature=!1,this.tooltipModel=!1,this.timeout=null,this.isFunction=t=>t&&("[object Function]"===Object.prototype.toString.call(t)||"function"==typeof t||t instanceof Function)}created(){window.addEventListener("keydown",this.closeTooltipByKey),this.init()}beforeDestroy(){window.removeEventListener("keydown",this.closeTooltipByKey)}mounted(){b.WebComponentBootstrapper.registerElementInstance(this,this.$el)}init(){this.omniaContext.user.then((t=>{const e=t.propertyBag.getModel(d.UserAccessibilitySettings);e&&(this.useAccessibilityFeature=e.useAccessibilityFeature)}))}get dataForPreset(){return this.preset&&this.setproperty(this.preset),null}setproperty(t){t.icon&&!this.icon&&(this.icon=t.icon),t.tooltip&&!this.tooltip&&(this.tooltip=t.tooltip),t.size&&!this.size&&(this.size=t.size),t.mode&&!this.mode&&(this.mode=t.mode),t.styles&&!this.styles&&(this.styles=t.styles),t.loading&&!this.loading&&(this.loading=t.loading),t.disabled&&!this.disabled&&(this.disabled=t.disabled),t.round&&!this.round&&(this.round=t.round),t.outline&&!this.outline&&(this.outline=t.outline),t.block&&!this.block&&(this.block=t.block),t.dark&&!this.dark&&(this.dark=t.dark),t.tile&&!this.tile&&(this.tile=t.tile),t.onClick&&!this.onClick&&(this.onClick=t.onClick),t.text&&!this.text&&(this.text=t.text),t.absolute&&!this.text&&(this.absolute=t.absolute),t.contentClass&&!this.contentClass&&(this.contentClass=t.contentClass),t.fab&&!this.fab&&(this.fab=t.fab),t.role&&!this.role&&(this.role=t.role)}closeTooltipByKey(t){27===t.keyCode&&(this.tooltipModel=!1)}hideTooltip(t){this.useAccessibilityFeature?this.tooltipModel&&setTimeout((()=>{this.tooltipModel=!1}),1e3):this.tooltipModel=!1}showTooltip(t){this.tooltipModel=!0}validateIconValue(t){return!b.Utils.isNullOrEmpty(t)}getLinkUrl(t){return b.Utils.fixUrl(t)}renderIcon(t){let e=this.icon.position!=d.ButtonIconPosition.Left&&this.icon.position?"ml-2":"mr-2";if(!this.icon.iconType)return null;if(t.iconType!==d.IconTypes.Custom){this.text||(e="");let o="";switch(t.iconType){case d.IconTypes.FontAwesome:o=t.faClass;break;case d.IconTypes.Fabric:o=t.fabClass;break;case d.IconTypes.Flag:o=t.flagClass}return b.Utils.isNullOrEmpty(o)?null:(0,r.h)("v-icon",{attrs:{small:this.icon.small},class:e},[" ",o])}{const e=t,o=e.customValue,i=o&&o.omniaImageId?this.mediaPickerService.getImageUrl(o):e.customValue,s=o&&o.altText?o.altText:"";return!b.Utils.isNullOrEmpty(i)&&(0,r.h)("img",{attrs:{src:i,alt:s},domProps:{role:t.role}})}}render(){return(0,r.h)("v-tooltip",s()([{attrs:{"open-on-hover":!this.useAccessibilityFeature,disabled:!this.tooltip||b.Utils.isNullOrEmpty(this.tooltip.text),left:this.tooltip&&(this.tooltip.position==d.ButtonTooltipPosition.Left||!this.tooltip.position),top:this.tooltip&&this.tooltip.position==d.ButtonTooltipPosition.Top,right:this.tooltip&&this.tooltip.position==d.ButtonTooltipPosition.Right,bottom:this.tooltip&&this.tooltip.position==d.ButtonTooltipPosition.Bottom,value:this.tooltipModel}},this.transformVSlot({activator:t=>{const e={on:t.on};return[(0,r.h)("v-btn",s()([{},e,{on:{click:t=>{this.isFunction(this.onClick)&&this.onClick(t)},mouseenter:t=>{this.showTooltip(t)},mouseleave:t=>{this.hideTooltip(t)}},attrs:{icon:this.mode===d.ButtonModes.icon,fab:this.fab,small:this.size===d.ButtonSizes.small,large:this.size===d.ButtonSizes.large,text:this.mode===d.ButtonModes.flat,depressed:this.mode===d.ButtonModes.depressed,rounded:this.round,outlined:this.outline,absolute:this.absolute,block:this.block,dark:this.dark,tile:this.tile,plain:this.plain,disabled:this.disabled,loading:this.loading,color:this.styles&&this.styles.bgColor,"aria-label":this.tooltip&&this.tooltip.text||this.text,role:this.role,href:this.href},class:[this.contentClass,this.styles&&this.styles.textColor&&this.buttonClasses.textColor(this.styles.textColor)]}]),[this.icon&&this.icon.position!==d.ButtonIconPosition.Right&&this.renderIcon(this.icon.iconType),(0,r.h)(b.VueWebComponentSlot,{attrs:{providedBy:this}}),this.text&&(0,r.h)("span",[this.text]),this.icon&&this.icon.position===d.ButtonIconPosition.Right&&this.renderIcon(this.icon.iconType),(0,r.h)(b.VueWebComponentSlot,{attrs:{wcSlot:"activator",providedBy:this}})])]}})]),[(0,r.h)("div",[this.dataForPreset]),this.tooltip?this.tooltip.element?this.tooltip.element:(0,r.h)("span",[this.tooltip.text]):null])}};y([(0,b.Inject)(b.OmniaContext)],f.prototype,"omniaContext",2),y([(0,b.Inject)(h.MediaPickerService)],f.prototype,"mediaPickerService",2),y([(0,n.Prop)()],f.prototype,"preset",2),y([(0,n.Prop)()],f.prototype,"icon",2),y([(0,n.Prop)()],f.prototype,"tooltip",2),y([(0,n.Prop)()],f.prototype,"size",2),y([(0,n.Prop)()],f.prototype,"mode",2),y([(0,n.Prop)()],f.prototype,"styles",2),y([(0,n.Prop)()],f.prototype,"loading",2),y([(0,n.Prop)()],f.prototype,"disabled",2),y([(0,n.Prop)()],f.prototype,"round",2),y([(0,n.Prop)()],f.prototype,"outline",2),y([(0,n.Prop)()],f.prototype,"block",2),y([(0,n.Prop)()],f.prototype,"fab",2),y([(0,n.Prop)()],f.prototype,"absolute",2),y([(0,n.Prop)()],f.prototype,"plain",2),y([(0,n.Prop)()],f.prototype,"dark",2),y([(0,n.Prop)()],f.prototype,"tile",2),y([(0,n.Prop)()],f.prototype,"href",2),y([(0,n.Prop)()],f.prototype,"role",2),y([(0,n.Prop)()],f.prototype,"onClick",2),y([(0,n.Prop)()],f.prototype,"text",2),y([(0,n.Prop)()],f.prototype,"contentClass",2),f=y([l.default],f),b.WebComponentBootstrapper.registerElement((t=>{(0,b.vueCustomElement)(t.elementName,f)}))},"./client/fx/ux/models/index.js":(t,e,o)=>{t.exports=o("dll-reference md66")("./client/fx/ux/models/index.js")},"./node_modules/@vue/babel-helper-vue-jsx-merge-props/dist/helper.js":(t,e,o)=>{t.exports=o("dll-reference md2")("./node_modules/@vue/babel-helper-vue-jsx-merge-props/dist/helper.js")},"./node_modules/@vue/composition-api/dist/vue-composition-api.mjs":(t,e,o)=>{t.exports=o("dll-reference md2")("./node_modules/@vue/composition-api/dist/vue-composition-api.mjs")},"./node_modules/csx/lib.es2015/index.js":(t,e,o)=>{t.exports=o("dll-reference md2")("./node_modules/csx/lib.es2015/index.js")},"./node_modules/vue-class-component/dist/vue-class-component.esm.js":(t,e,o)=>{t.exports=o("dll-reference md2")("./node_modules/vue-class-component/dist/vue-class-component.esm.js")},"./node_modules/vue-property-decorator/lib/vue-property-decorator.js":(t,e,o)=>{t.exports=o("dll-reference md2")("./node_modules/vue-property-decorator/lib/vue-property-decorator.js")},"14a8d443-2e58-450b-a462-258bdaf69b49":(t,e,o)=>{t.exports=o("dll-reference md10")("14a8d443-2e58-450b-a462-258bdaf69b49")},"d0a145a7-d1ef-4217-aa6f-85dd18c4231d":(t,e,o)=>{t.exports=o("dll-reference md9")("d0a145a7-d1ef-4217-aa6f-85dd18c4231d")},"d7327742-5647-4075-b7ab-4f9ca852addb":(t,e,o)=>{t.exports=o("dll-reference md66")("d7327742-5647-4075-b7ab-4f9ca852addb")},"e25b9dd8-6dd7-4437-8ddd-0b9fadba73ac":(t,e,o)=>{t.exports=o("dll-reference md10")("e25b9dd8-6dd7-4437-8ddd-0b9fadba73ac")},"dll-reference md2":t=>{"use strict";t.exports=omniaVendor},"dll-reference md9":t=>{"use strict";t.exports=omniaWebpackJsonp["bb000000-0000-bbbb-0000-0000000000bb"]["a2892051-fd9f-4056-ae8d-30d16d48417d"]},"dll-reference md10":t=>{"use strict";t.exports=omniaWebpackJsonp["bb000000-0000-bbbb-0000-0000000000bb"]["a5a89056-b5f5-475d-8518-a1f55090379d"]},"dll-reference md66":t=>{"use strict";t.exports=omniaWebpackJsonp["bb000000-0000-bbbb-0000-0000000000bb"]["dee030cc-4ab3-4158-bb06-8049f5c67542"]}};if("undefined"==typeof omniaWebpackJsonp&&(globalThis.omniaWebpackJsonp={}),globalThis.omniaWebpackJsonp["bb000000-0000-bbbb-0000-0000000000bb"]=globalThis.omniaWebpackJsonp["bb000000-0000-bbbb-0000-0000000000bb"]||{},globalThis.omniaWebpackJsonp["bb000000-0000-bbbb-0000-0000000000bb"]["b78a4896-149c-4c62-8632-b474ebb800eb"])throw new Error("Error, already loaded manifest b78a4896-149c-4c62-8632-b474ebb800eb with service id bb000000-0000-bbbb-0000-0000000000bb");globalThis.omniaWebpackJsonp["bb000000-0000-bbbb-0000-0000000000bb"]["b78a4896-149c-4c62-8632-b474ebb800eb"]=o;var e={};function o(i){var s=e[i];if(void 0!==s)return s.exports;var r=e[i]={exports:{}};return t[i](r,r.exports,o),r.exports}o.n=t=>{var e=t&&t.__esModule?()=>t.default:()=>t;return o.d(e,{a:e}),e},o.d=(t,e)=>{for(var i in e)o.o(e,i)&&!o.o(t,i)&&Object.defineProperty(t,i,{enumerable:!0,get:e[i]})},o.o=(t,e)=>Object.prototype.hasOwnProperty.call(t,e),o.r=t=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})};o("./client/fx/ux/button/button.tsx")})()};