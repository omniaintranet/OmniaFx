if("undefined"==typeof omniaLoader&&(globalThis.omniaLoader={}),omniaLoader["bb000000-0000-bbbb-0000-0000000000bb"]=omniaLoader["bb000000-0000-bbbb-0000-0000000000bb"]||{},omniaLoader["bb000000-0000-bbbb-0000-0000000000bb"]["1cb9cb57-345b-41c3-bae6-6e9bab8cf454"])throw new Error("Error, already loaded manifest 1cb9cb57-345b-41c3-bae6-6e9bab8cf454 with service id bb000000-0000-bbbb-0000-0000000000bb");omniaLoader["bb000000-0000-bbbb-0000-0000000000bb"]["1cb9cb57-345b-41c3-bae6-6e9bab8cf454"]=function(){(()=>{var e={"./client/fx/ux/enterpriseproperties/display/tagsproperty/tagspropertydisplay.tsx":(e,t,s)=>{"use strict";s.r(t),s.d(t,{TagsPropertyDisplayComponent:()=>g});var o=s("./node_modules/@vue/babel-helper-vue-jsx-merge-props/dist/helper.js"),r=s.n(o),a=s("./node_modules/@vue/composition-api/dist/vue-composition-api.mjs"),i=s("./node_modules/vue-class-component/dist/vue-class-component.esm.js"),n=s("./node_modules/vue-property-decorator/lib/vue-property-decorator.js"),l=s("d0a145a7-d1ef-4217-aa6f-85dd18c4231d"),p=s("14a8d443-2e58-450b-a462-258bdaf69b49").setCurrentManifest("bb000000-0000-bbbb-0000-0000000000bb","1cb9cb57-345b-41c3-bae6-6e9bab8cf454"),d=s("d7327742-5647-4075-b7ab-4f9ca852addb").setCurrentManifest("bb000000-0000-bbbb-0000-0000000000bb","1cb9cb57-345b-41c3-bae6-6e9bab8cf454"),b=s("e25b9dd8-6dd7-4437-8ddd-0b9fadba73ac"),c=s("./client/fx/ux/styleflow.js"),m=s("./client/fx/ux/models/index.js"),h=s("./node_modules/csx/lib.es2015/index.js");c.StyleFlow.define(m.TagsFieldDisplayStyles,{itemwrapper:{display:"flex",flexWrap:"wrap"},chip:d.Styles.chips.item(`${m.ChipStylesConst.chipHeight}px`,`${m.ChipStylesConst.fontSize}px`,{left:`${m.ChipStylesConst.chipPaddingLeftRight}px`,right:`${m.ChipStylesConst.chipPaddingLeftRight}px`},!0),chipIconWrapper:{},chipIcon:{},clickableIconWrapper:{paddingLeft:`${m.ChipStylesConst.chipPaddingLeftRight}px`,marginTop:"-2px",display:"flex",alignItems:"center"},clickableIcon:{fontSize:(0,h.important)(m.ChipStylesConst.fontSize-1+"px"),color:(0,h.important)("inherit")}});var u=Object.defineProperty,f=Object.getOwnPropertyDescriptor,y=(e,t,s,o)=>{for(var r,a=o>1?void 0:o?f(t,s):t,i=e.length-1;i>=0;i--)(r=e[i])&&(a=(o?r(t,s,a):r(a))||a);return o&&a&&u(t,s,a),a};let g=class extends d.VueComponentBase{constructor(){super(...arguments),this.tagsFieldDisplayClasses=d.StyleFlow.use(m.TagsFieldDisplayStyles)}created(){this.styles&&(this.tagsFieldDisplayClasses=d.StyleFlow.use(m.TagsFieldDisplayStyles,this.styles))}mounted(){p.WebComponentBootstrapper.registerElementInstance(this,this.$el)}internalOnTagClicked(e,t){e.preventDefault(),e.stopPropagation(),this.onTagClicked&&this.onTagClicked(t)}renderChip(e,t,s){if(this.onTagClicked){let o=null;return this.appendedTagContents&&(o=this.appendedTagContents[e.name]),o?(0,a.h)("v-tooltip",r()([{attrs:{top:!0}},this.transformVSlot({activator:i=>{const n={on:i.on};return[(0,a.h)("div",r()([{class:"mr-2"},n]),[(0,a.h)("v-chip",{class:this.tagsFieldDisplayClasses.chip,attrs:{dark:t,color:s,label:!0},on:{click:t=>this.internalOnTagClicked(t,e)}},["#",e.name,(0,a.h)("omfx-icon",{domProps:{valueBind:o.icon,styles:{container:Object.assign({},m.TagsFieldDisplayStyles.clickableIconWrapper,this.styles?.chipIconWrapper),i:Object.assign({},m.TagsFieldDisplayStyles.clickableIcon,this.styles?.clickableIcon)}}})])])]}})]),[(0,a.h)("span",[o.title])]):(0,a.h)("v-chip",{class:this.tagsFieldDisplayClasses.chip,attrs:{dark:t,color:s,label:!0},on:{click:t=>this.internalOnTagClicked(t,e)}},["#",e.name,(0,a.h)("omfx-icon",{domProps:{valueBind:this.clickableIcon?this.clickableIcon:new l.FontAwesomeIcon("fa-external-link"),styles:{container:Object.assign({},m.TagsFieldDisplayStyles.clickableIconWrapper,this.styles?.chipIconWrapper),i:Object.assign({},m.TagsFieldDisplayStyles.clickableIcon,this.styles?.clickableIcon)}}})])}return(0,a.h)("v-chip",{class:this.tagsFieldDisplayClasses.chip,attrs:{dark:t,color:s,label:!0}},["#",e.name])}rendertext(e){return(0,a.h)("div",["#",e.name])}renderContent(){if(!p.Utils.isArrayNullOrEmpty(this.valueBind)){const e=new Array,t=this.settings&&this.settings.textOnly;return this.valueBind.map((s=>{if(t)e.push(this.rendertext(s));else{let t=!0,o=m.ChipStylesConst.defaultChipColor;this.settings&&this.settings.contentColor&&""!==this.settings.contentColor.trim()&&(t=d.ThemeManager.isDarkColor(this.settings.contentColor),o=this.settings.contentColor),e.push(this.renderChip(s,t,o))}})),this.appendedElement&&e.push(this.appendedElement),(0,a.h)("div",{class:this.tagsFieldDisplayClasses.itemwrapper},[e])}return null}render(){return p.Utils.isFunction(this.wrapWithParentContent)&&this.property?this.wrapWithParentContent(this.property.internalName,this.renderContent()):this.renderContent()}};y([(0,n.Prop)()],g.prototype,"valueBind",2),y([(0,n.Prop)()],g.prototype,"property",2),y([(0,n.Prop)()],g.prototype,"settings",2),y([(0,n.Prop)()],g.prototype,"onTagClicked",2),y([(0,n.Prop)()],g.prototype,"wrapWithParentContent",2),y([(0,n.Prop)()],g.prototype,"multiple",2),y([(0,n.Prop)()],g.prototype,"disabled",2),y([(0,n.Prop)()],g.prototype,"label",2),y([(0,n.Prop)({default:!1})],g.prototype,"hideSelected",2),y([(0,n.Prop)()],g.prototype,"required",2),y([(0,n.Prop)()],g.prototype,"appendedElement",2),y([(0,n.Prop)()],g.prototype,"styles",2),y([(0,n.Prop)()],g.prototype,"clickableIcon",2),y([(0,n.Prop)()],g.prototype,"appendedTagContents",2),y([(0,p.Inject)(b.TagsService)],g.prototype,"tagsService",2),g=y([i.default],g),p.WebComponentBootstrapper.registerElement((e=>{(0,p.vueCustomElement)(e.elementName,g)}))},"./client/fx/ux/models/index.js":(e,t,s)=>{e.exports=s("dll-reference md66")("./client/fx/ux/models/index.js")},"./client/fx/ux/styleflow.js":(e,t,s)=>{e.exports=s("dll-reference md66")("./client/fx/ux/styleflow.js")},"./node_modules/@vue/babel-helper-vue-jsx-merge-props/dist/helper.js":(e,t,s)=>{e.exports=s("dll-reference md2")("./node_modules/@vue/babel-helper-vue-jsx-merge-props/dist/helper.js")},"./node_modules/@vue/composition-api/dist/vue-composition-api.mjs":(e,t,s)=>{e.exports=s("dll-reference md2")("./node_modules/@vue/composition-api/dist/vue-composition-api.mjs")},"./node_modules/csx/lib.es2015/index.js":(e,t,s)=>{e.exports=s("dll-reference md2")("./node_modules/csx/lib.es2015/index.js")},"./node_modules/vue-class-component/dist/vue-class-component.esm.js":(e,t,s)=>{e.exports=s("dll-reference md2")("./node_modules/vue-class-component/dist/vue-class-component.esm.js")},"./node_modules/vue-property-decorator/lib/vue-property-decorator.js":(e,t,s)=>{e.exports=s("dll-reference md2")("./node_modules/vue-property-decorator/lib/vue-property-decorator.js")},"14a8d443-2e58-450b-a462-258bdaf69b49":(e,t,s)=>{e.exports=s("dll-reference md10")("14a8d443-2e58-450b-a462-258bdaf69b49")},"d0a145a7-d1ef-4217-aa6f-85dd18c4231d":(e,t,s)=>{e.exports=s("dll-reference md9")("d0a145a7-d1ef-4217-aa6f-85dd18c4231d")},"d7327742-5647-4075-b7ab-4f9ca852addb":(e,t,s)=>{e.exports=s("dll-reference md66")("d7327742-5647-4075-b7ab-4f9ca852addb")},"e25b9dd8-6dd7-4437-8ddd-0b9fadba73ac":(e,t,s)=>{e.exports=s("dll-reference md10")("e25b9dd8-6dd7-4437-8ddd-0b9fadba73ac")},"dll-reference md2":e=>{"use strict";e.exports=omniaVendor},"dll-reference md9":e=>{"use strict";e.exports=omniaWebpackJsonp["bb000000-0000-bbbb-0000-0000000000bb"]["a2892051-fd9f-4056-ae8d-30d16d48417d"]},"dll-reference md10":e=>{"use strict";e.exports=omniaWebpackJsonp["bb000000-0000-bbbb-0000-0000000000bb"]["a5a89056-b5f5-475d-8518-a1f55090379d"]},"dll-reference md66":e=>{"use strict";e.exports=omniaWebpackJsonp["bb000000-0000-bbbb-0000-0000000000bb"]["dee030cc-4ab3-4158-bb06-8049f5c67542"]}};if("undefined"==typeof omniaWebpackJsonp&&(globalThis.omniaWebpackJsonp={}),globalThis.omniaWebpackJsonp["bb000000-0000-bbbb-0000-0000000000bb"]=globalThis.omniaWebpackJsonp["bb000000-0000-bbbb-0000-0000000000bb"]||{},globalThis.omniaWebpackJsonp["bb000000-0000-bbbb-0000-0000000000bb"]["1cb9cb57-345b-41c3-bae6-6e9bab8cf454"])throw new Error("Error, already loaded manifest 1cb9cb57-345b-41c3-bae6-6e9bab8cf454 with service id bb000000-0000-bbbb-0000-0000000000bb");globalThis.omniaWebpackJsonp["bb000000-0000-bbbb-0000-0000000000bb"]["1cb9cb57-345b-41c3-bae6-6e9bab8cf454"]=s;var t={};function s(o){var r=t[o];if(void 0!==r)return r.exports;var a=t[o]={exports:{}};return e[o](a,a.exports,s),a.exports}s.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return s.d(t,{a:t}),t},s.d=(e,t)=>{for(var o in t)s.o(t,o)&&!s.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:t[o]})},s.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),s.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})};s("./client/fx/ux/enterpriseproperties/display/tagsproperty/tagspropertydisplay.tsx")})()};