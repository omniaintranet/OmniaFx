if("undefined"==typeof omniaLoader&&(globalThis.omniaLoader={}),omniaLoader["bb000000-0000-bbbb-0000-0000000000bb"]=omniaLoader["bb000000-0000-bbbb-0000-0000000000bb"]||{},omniaLoader["bb000000-0000-bbbb-0000-0000000000bb"]["08384c02-36f8-4071-9ee3-d8e018718e68"])throw new Error("Error, already loaded manifest 08384c02-36f8-4071-9ee3-d8e018718e68 with service id bb000000-0000-bbbb-0000-0000000000bb");omniaLoader["bb000000-0000-bbbb-0000-0000000000bb"]["08384c02-36f8-4071-9ee3-d8e018718e68"]=function(){(()=>{var e={"./client/fx/ux/layoutcanvas/editor/settings/section/style.tsx":(e,t,o)=>{"use strict";o.r(t),o.d(t,{default:()=>f});var s=o("./node_modules/@vue/composition-api/dist/vue-composition-api.mjs"),n=o("./node_modules/vue-property-decorator/lib/vue-property-decorator.js"),i=o("d0a145a7-d1ef-4217-aa6f-85dd18c4231d"),a=o("./client/fx/ux/layoutcanvas/index.js"),r=o("14a8d443-2e58-450b-a462-258bdaf69b49").setCurrentManifest("bb000000-0000-bbbb-0000-0000000000bb","08384c02-36f8-4071-9ee3-d8e018718e68"),l=o("d7327742-5647-4075-b7ab-4f9ca852addb").setCurrentManifest("bb000000-0000-bbbb-0000-0000000000bb","08384c02-36f8-4071-9ee3-d8e018718e68"),c=o("./node_modules/vue-class-component/dist/vue-class-component.esm.js"),d=Object.defineProperty,b=Object.getOwnPropertyDescriptor,h=(e,t,o,s)=>{for(var n,i=s>1?void 0:s?b(t,o):t,a=e.length-1;a>=0;a--)(n=e[a])&&(i=(s?n(t,o,i):n(i))||i);return s&&i&&d(t,o,i),i};let m=class extends l.VueComponentBase{onSetAlignment(e){this.section.settings.tabAlignment=e}onSetIconAlignment(e){this.section.settings.iconPosition=e}renderAlignment(){return this.section.settings.type===i.SectionTypes.Accordion?null:(0,s.h)("div",[(0,s.h)("v-divider"),(0,s.h)("div",{class:"mt-3 mb-3"},[this.omniaUxLoc.LayoutEngine.Panels.TabSettings.TabAlignment]),(0,s.h)("div",{class:"mb-5"},[(0,s.h)("omfx-button",{attrs:{contentClass:"mr-4",elevation:"0",dark:this.section.settings.tabAlignment===i.HorizontalAlignments.left,fab:!0},domProps:{onClick:()=>this.onSetAlignment(i.HorizontalAlignments.left),size:i.ButtonSizes.small,mode:i.ButtonModes.depressed,styles:{textColor:this.section.settings.tabAlignment===i.HorizontalAlignments.left?this.theming.body.components.text.color.base:"",bgColor:this.section.settings.tabAlignment===i.HorizontalAlignments.left?this.theming.body.components.color.base:"rgba(0,0,0,0.1)"},icon:{iconType:new i.FontAwesomeIcon("format_align_left")}}}),(0,s.h)("omfx-button",{attrs:{contentClass:"mr-4",elevation:"0",dark:this.section.settings.tabAlignment===i.HorizontalAlignments.center,fab:!0},domProps:{onClick:()=>this.onSetAlignment(i.HorizontalAlignments.center),size:i.ButtonSizes.small,mode:i.ButtonModes.depressed,styles:{textColor:this.section.settings.tabAlignment===i.HorizontalAlignments.center?this.theming.body.components.text.color.base:"",bgColor:this.section.settings.tabAlignment===i.HorizontalAlignments.center?this.theming.body.components.color.base:"rgba(0,0,0,0.1)"},icon:{iconType:new i.FontAwesomeIcon("format_align_center")}}}),(0,s.h)("omfx-button",{attrs:{contentClass:"mr-4",elevation:"0",dark:this.section.settings.tabAlignment===i.HorizontalAlignments.right,fab:!0},domProps:{onClick:()=>this.onSetAlignment(i.HorizontalAlignments.right),size:i.ButtonSizes.small,mode:i.ButtonModes.depressed,styles:{textColor:this.section.settings.tabAlignment===i.HorizontalAlignments.right?this.theming.body.components.text.color.base:"",bgColor:this.section.settings.tabAlignment===i.HorizontalAlignments.right?this.theming.body.components.color.base:"rgba(0,0,0,0.1)"},icon:{iconType:new i.FontAwesomeIcon("format_align_right")}}})])])}renderIconAlignment(){return(0,s.h)("div",[(0,s.h)("v-divider"),(0,s.h)("div",{class:"mt-3 mb-3"},[this.omniaUxLoc.LayoutEngine.Panels.TabSettings.IconAlignment]),(0,s.h)("div",{class:"mb-5"},[(0,s.h)("omfx-button",{attrs:{contentClass:"mr-4",elevation:"0",dark:this.section.settings.iconPosition===i.TabbedIconPositions.Left,fab:!0},domProps:{onClick:()=>this.onSetIconAlignment(i.TabbedIconPositions.Left),size:i.ButtonSizes.small,mode:i.ButtonModes.depressed,styles:{textColor:this.section.settings.iconPosition===i.TabbedIconPositions.Left?this.theming.body.components.text.color.base:"",bgColor:this.section.settings.iconPosition===i.TabbedIconPositions.Left?this.theming.body.components.color.base:"rgba(0,0,0,0.1)"},icon:{iconType:new i.FontAwesomeIcon("border_left")}}}),(0,s.h)("omfx-button",{attrs:{contentClass:"mr-4",elevation:"0",dark:this.section.settings.iconPosition===i.TabbedIconPositions.Top,fab:!0},domProps:{onClick:()=>this.onSetIconAlignment(i.TabbedIconPositions.Top),size:i.ButtonSizes.small,mode:i.ButtonModes.depressed,styles:{textColor:this.section.settings.iconPosition===i.TabbedIconPositions.Top?this.theming.body.components.text.color.base:"",bgColor:this.section.settings.iconPosition===i.TabbedIconPositions.Top?this.theming.body.components.color.base:"rgba(0,0,0,0.1)"},icon:{iconType:new i.FontAwesomeIcon("border_top")}}}),(0,s.h)("omfx-button",{attrs:{contentClass:"mr-4",elevation:"0",dark:this.section.settings.iconPosition===i.TabbedIconPositions.Right,fab:!0},domProps:{onClick:()=>this.onSetIconAlignment(i.TabbedIconPositions.Right),size:i.ButtonSizes.small,mode:i.ButtonModes.depressed,styles:{textColor:this.section.settings.iconPosition===i.TabbedIconPositions.Right?this.theming.body.components.text.color.base:"",bgColor:this.section.settings.iconPosition===i.TabbedIconPositions.Right?this.theming.body.components.color.base:"rgba(0,0,0,0.1)"},icon:{iconType:new i.FontAwesomeIcon("border_right")}}})])])}renderAccordionSettings(){if(this.section.settings.type===i.SectionTypes.Accordion)return(0,s.h)("div",[(0,s.h)("v-divider"),(0,s.h)("v-switch",{attrs:{dark:this.theming.body.bg.dark,color:this.theming.body.components.color.base,"input-value":this.section.settings.collapsed,label:this.omniaUxLoc.LayoutEngine.Panels.TabSettings.Collapsed,"true-value":!0,"false-value":!1},on:{change:e=>{this.section.settings.collapsed=e}}}),(0,s.h)("v-switch",{attrs:{dark:this.theming.body.bg.dark,color:this.theming.body.components.color.base,"input-value":this.section.settings.flatHeader,label:this.omniaUxLoc.LayoutEngine.Panels.TabSettings.Flat,"true-value":!0,"false-value":!1},on:{change:e=>{this.section.settings.flatHeader=e}}}),(0,s.h)("v-switch",{attrs:{dark:this.theming.body.bg.dark,color:this.theming.body.components.color.base,"input-value":this.section.settings.singleSelect,label:this.omniaUxLoc.LayoutEngine.Panels.TabSettings.SingleSelect,"true-value":!0,"false-value":!1},on:{change:e=>{this.section.settings.singleSelect=e}}})])}renderCustomSize(){return this.section.settings.type!==i.SectionTypes.Tab?null:(0,s.h)("div",[(0,s.h)("div",{class:"py-0"},[(0,s.h)("v-divider"),(0,s.h)("v-switch",{attrs:{dark:this.theming.body.bg.dark,color:this.theming.body.components.color.base,"input-value":this.section.settings.customSize,label:this.omniaUxLoc.LayoutEngine.Panels.TabSettings.CustomSize,"true-value":!0,"false-value":!1},on:{change:e=>{this.section.settings.customSize=e}}})]),(0,s.h)("div",{class:"ma-0 pa-0",directives:[{name:"show",value:this.section.settings.customSize}]},[(0,s.h)("div",{class:"mt-0 pb-6"},[this.omniaUxLoc.LayoutEngine.Panels.TabSettings.MinHeight]),(0,s.h)("div",{class:"mb-0 mt-4 pb-0"},[(0,s.h)("v-slider",{attrs:{step:"1",min:"30",max:"300",ticks:!0,"thumb-label":"always",color:this.theming.body.components.slider.color,"track-color":this.theming.body.components.slider.trackColor,"inverse-label":!0},on:{change:e=>{this.section.settings.tabMinHeight=e}},model:{value:this.section.settings.tabMinHeight,callback:e=>{this.$set(this.section.settings,"tabMinHeight",e)}}})]),(0,s.h)("div",{class:"mt-0 pb-6"},[this.omniaUxLoc.LayoutEngine.Panels.TabSettings.MinWidth]),(0,s.h)("div",{class:"mb-0 mt-4 pb-0"},[(0,s.h)("v-slider",{attrs:{step:"1",min:"30",max:"300",ticks:!0,"thumb-label":"always",color:this.theming.body.components.slider.color,"track-color":this.theming.body.components.slider.trackColor,"inverse-label":!0},on:{change:e=>{this.section.settings.tabMinWidth=e}},model:{value:this.section.settings.tabMinWidth,callback:e=>{this.$set(this.section.settings,"tabMinWidth",e)}}})])]),(0,s.h)("v-divider",{class:"mb-5"}),(0,s.h)("div",{class:"mt-0 pb-6"},[this.omniaUxLoc.LayoutEngine.Panels.TabSettings.BorderRadius]),(0,s.h)("div",{class:"mb-0 mt-4 pb-0"},[(0,s.h)("v-slider",{attrs:{step:"1",min:"0",max:"50",ticks:!0,"thumb-label":"always",color:this.theming.body.components.slider.color,"track-color":this.theming.body.components.slider.trackColor,"inverse-label":!0},on:{change:e=>{this.section.settings.borderRadius=e}},model:{value:this.section.settings.borderRadius,callback:e=>{this.$set(this.section.settings,"borderRadius",e)}}}),(0,s.h)("v-switch",{attrs:{dark:this.theming.body.bg.dark,color:this.theming.body.components.color.base,"input-value":this.section.settings.borderRadiusAll,label:this.omniaUxLoc.LayoutEngine.Panels.TabSettings.BorderRadiusOnAllTabs,"true-value":!0,"false-value":!1},class:"pt-0 mt-0",directives:[{name:"show",value:this.section.settings.borderRadius>0}],on:{change:e=>{this.section.settings.borderRadiusAll=e}}})])])}renderColorPanel(){return(0,s.h)("div",[(0,s.h)("div",{class:"pb-3"},[(0,s.h)("omfx-color-picker",{attrs:{label:this.omniaUxLoc.LayoutEngine.Panels.TabSettings.TextColor},domProps:{valueBind:{color:this.section.settings.labelColor},onValueChanged:e=>{this.section.settings.labelColor=e.color}}})]),(0,s.h)("div",{class:"pb-3"},[(0,s.h)("omfx-color-picker",{attrs:{label:this.omniaUxLoc.LayoutEngine.Panels.TabSettings.SelectedTextColor},domProps:{valueBind:{color:this.section.settings.activeLabelColor},onValueChanged:e=>{this.section.settings.activeLabelColor=e.color}}})]),(0,s.h)("div",{class:"pb-3"},[(0,s.h)("omfx-color-picker",{attrs:{label:this.omniaUxLoc.LayoutEngine.Panels.TabSettings.IconColor},domProps:{valueBind:{color:this.section.settings.iconColor},onValueChanged:e=>{this.section.settings.iconColor=e.color}}})]),(0,s.h)("div",{class:"pb-3"},[(0,s.h)("omfx-color-picker",{attrs:{label:this.omniaUxLoc.LayoutEngine.Panels.TabSettings.SelectedIconColor},domProps:{valueBind:{color:this.section.settings.activeIconColor},onValueChanged:e=>{this.section.settings.activeIconColor=e.color}}})]),(0,s.h)("div",{class:"pb-3"},[(0,s.h)("omfx-color-picker",{attrs:{label:this.omniaUxLoc.LayoutEngine.Panels.TabSettings.TabColor},domProps:{valueBind:{color:this.section.settings.tabColor},onValueChanged:e=>{this.section.settings.tabColor=e.color}}})]),(0,s.h)("div",{class:"pb-3"},[(0,s.h)("omfx-color-picker",{attrs:{label:this.omniaUxLoc.LayoutEngine.Panels.TabSettings.SelectedTabColor},domProps:{valueBind:{color:this.section.settings.activeTabColor},onValueChanged:e=>{this.section.settings.activeTabColor=e.color}}})]),(0,s.h)("div",{class:"pb-3",directives:[{name:"show",value:this.section.settings.type===i.SectionTypes.Tab}]},[(0,s.h)("omfx-color-picker",{attrs:{label:this.omniaUxLoc.LayoutEngine.Panels.ColumnSettings.BackgroundColor},domProps:{valueBind:{color:this.section.settings.bgColor},onValueChanged:e=>{this.section.settings.bgColor=e.color}}})]),(0,s.h)("div",{class:"pb-3",directives:[{name:"show",value:this.section.settings.type===i.SectionTypes.Tab&&this.section.settings.showSlider}]},[(0,s.h)("omfx-color-picker",{attrs:{label:this.omniaUxLoc.LayoutEngine.Panels.TabSettings.SliderColor},domProps:{valueBind:{color:this.section.settings.sliderColor},onValueChanged:e=>{this.section.settings.sliderColor=e.color}}})])])}renderGeneralPanel(){return(0,s.h)("div",[(0,s.h)("div",{directives:[{name:"show",value:this.section.settings.type===i.SectionTypes.Tab}]},[(0,s.h)("v-divider",{class:"mt-1"}),(0,s.h)("v-switch",{attrs:{dark:this.theming.body.bg.dark,color:this.theming.body.components.color.base,"input-value":this.section.settings.displayMode,label:this.omniaUxLoc.LayoutEngine.Panels.TabSettings.Vertical,"true-value":i.TabbedDisplayModes.Vertical,"false-value":i.TabbedDisplayModes.Horizontal},on:{change:e=>{this.section.settings.displayMode=e}}}),(0,s.h)("v-switch",{attrs:{dark:this.theming.body.bg.dark,color:this.theming.body.components.color.base,"input-value":this.section.settings.showSlider,label:this.omniaUxLoc.LayoutEngine.Panels.TabSettings.ShowActiveTabSlider,"true-value":!0,"false-value":!1},on:{change:e=>{this.section.settings.showSlider=e}}}),(0,s.h)("v-switch",{attrs:{dark:this.theming.body.bg.dark,color:this.theming.body.components.color.base,"input-value":this.section.settings.grow,label:this.omniaUxLoc.LayoutEngine.Panels.TabSettings.FillSpace,"true-value":!0,"false-value":!1},on:{change:e=>{this.section.settings.grow=e}}}),(0,s.h)("v-divider",{class:"mt-1"}),this.renderAlignment(),this.renderIconAlignment()]),this.renderCustomSize(),this.renderAccordionSettings()])}render(){return(0,s.h)("v-tabs",{attrs:{dark:this.theming.body.bg.dark,color:this.theming.body.components.color.base,"slider-color":this.theming.body.components.color.base,"background-color":this.theming.body.bg.color.base,"icons-and-text":!0}},[(0,s.h)("v-tab",[this.omniaUxLoc.LayoutEngine.Panels.SectionSettings.General,(0,s.h)("v-icon",{attrs:{dark:this.theming.body.bg.dark}},["fal fa-sliders-v"])]),(0,s.h)("v-tab",[this.omniaUxLoc.LayoutEngine.Panels.TabSettings.Color,(0,s.h)("v-icon",{attrs:{dark:this.theming.body.bg.dark}},["fal fa-palette"])]),(0,s.h)("v-tab-item",{class:"mt-5"},[this.renderGeneralPanel()]),(0,s.h)("v-tab-item",{class:"mt-5"},[this.renderColorPanel()])])}};h([(0,n.Prop)()],m.prototype,"section",2),h([(0,r.Inject)(a.LayoutCanvasStore)],m.prototype,"editorStore",2),h([(0,r.Localize)(l.OmniaUxLocalizationNamespace)],m.prototype,"omniaUxLoc",2),m=h([c.default],m);var g=o("c041fe9f-1e14-443d-9407-5aa8829fbc21"),p=o("./client/fx/ux/uxmodels.js"),u=Object.defineProperty,v=Object.getOwnPropertyDescriptor,y=(e,t,o,s)=>{for(var n,i=s>1?void 0:s?v(t,o):t,a=e.length-1;a>=0;a--)(n=e[a])&&(i=(s?n(t,o,i):n(i))||i);return s&&i&&u(t,o,i),i};let f=class extends l.VueComponentBase{constructor(){super(...arguments),this.model={minHeight:0}}mounted(){r.WebComponentBootstrapper.registerElementInstance(this,this.$el)}created(){this.subscriptionHandler.add(this.editorStore.selectedLayoutItem.onMutated(this.onSectionChange)),this.section=this.editorStore.selectedLayoutItem.state}onSectionChange(){this.section=this.editorStore.selectedLayoutItem.state,this.section&&(this.section.itemtype,i.LayoutItemTypes.section)}render(){return(0,s.h)("div",[(this.section.settings.type===i.SectionTypes.Tab||this.section.settings.type===i.SectionTypes.Accordion)&&[(0,s.h)(m,{attrs:{section:this.section}}),(0,s.h)("div",{class:"mb-3"},[(0,s.h)("v-divider")])],(0,s.h)("omfx-layout-background-settings",{attrs:{allowOverflow:!0,enableImageInPageProperty:!0,settings:this.section.settings.background}})])}};y([(0,r.Inject)(a.LayoutCanvasStore)],f.prototype,"editorStore",2),y([(0,r.Inject)(r.SubscriptionHandler)],f.prototype,"subscriptionHandler",2),y([(0,g.Localize)(p.OmniaUxLocalizationNamespace)],f.prototype,"omniaUxLoc",2),f=y([n.Component],f),r.WebComponentBootstrapper.registerElement((e=>{(0,r.vueCustomElement)(e.elementName,f)}))},"./client/fx/ux/layoutcanvas/index.js":(e,t,o)=>{e.exports=o("dll-reference md66")("./client/fx/ux/layoutcanvas/index.js")},"./client/fx/ux/uxmodels.js":(e,t,o)=>{e.exports=o("dll-reference md66")("./client/fx/ux/uxmodels.js")},"./node_modules/@vue/composition-api/dist/vue-composition-api.mjs":(e,t,o)=>{e.exports=o("dll-reference md2")("./node_modules/@vue/composition-api/dist/vue-composition-api.mjs")},"./node_modules/vue-class-component/dist/vue-class-component.esm.js":(e,t,o)=>{e.exports=o("dll-reference md2")("./node_modules/vue-class-component/dist/vue-class-component.esm.js")},"./node_modules/vue-property-decorator/lib/vue-property-decorator.js":(e,t,o)=>{e.exports=o("dll-reference md2")("./node_modules/vue-property-decorator/lib/vue-property-decorator.js")},"14a8d443-2e58-450b-a462-258bdaf69b49":(e,t,o)=>{e.exports=o("dll-reference md10")("14a8d443-2e58-450b-a462-258bdaf69b49")},"c041fe9f-1e14-443d-9407-5aa8829fbc21":(e,t,o)=>{e.exports=o("dll-reference md10")("c041fe9f-1e14-443d-9407-5aa8829fbc21")},"d0a145a7-d1ef-4217-aa6f-85dd18c4231d":(e,t,o)=>{e.exports=o("dll-reference md9")("d0a145a7-d1ef-4217-aa6f-85dd18c4231d")},"d7327742-5647-4075-b7ab-4f9ca852addb":(e,t,o)=>{e.exports=o("dll-reference md66")("d7327742-5647-4075-b7ab-4f9ca852addb")},"dll-reference md2":e=>{"use strict";e.exports=omniaVendor},"dll-reference md9":e=>{"use strict";e.exports=omniaWebpackJsonp["bb000000-0000-bbbb-0000-0000000000bb"]["a2892051-fd9f-4056-ae8d-30d16d48417d"]},"dll-reference md10":e=>{"use strict";e.exports=omniaWebpackJsonp["bb000000-0000-bbbb-0000-0000000000bb"]["a5a89056-b5f5-475d-8518-a1f55090379d"]},"dll-reference md66":e=>{"use strict";e.exports=omniaWebpackJsonp["bb000000-0000-bbbb-0000-0000000000bb"]["dee030cc-4ab3-4158-bb06-8049f5c67542"]}};if("undefined"==typeof omniaWebpackJsonp&&(globalThis.omniaWebpackJsonp={}),globalThis.omniaWebpackJsonp["bb000000-0000-bbbb-0000-0000000000bb"]=globalThis.omniaWebpackJsonp["bb000000-0000-bbbb-0000-0000000000bb"]||{},globalThis.omniaWebpackJsonp["bb000000-0000-bbbb-0000-0000000000bb"]["08384c02-36f8-4071-9ee3-d8e018718e68"])throw new Error("Error, already loaded manifest 08384c02-36f8-4071-9ee3-d8e018718e68 with service id bb000000-0000-bbbb-0000-0000000000bb");globalThis.omniaWebpackJsonp["bb000000-0000-bbbb-0000-0000000000bb"]["08384c02-36f8-4071-9ee3-d8e018718e68"]=o;var t={};function o(s){var n=t[s];if(void 0!==n)return n.exports;var i=t[s]={exports:{}};return e[s](i,i.exports,o),i.exports}o.d=(e,t)=>{for(var s in t)o.o(t,s)&&!o.o(e,s)&&Object.defineProperty(e,s,{enumerable:!0,get:t[s]})},o.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),o.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})};o("./client/fx/ux/layoutcanvas/editor/settings/section/style.tsx")})()};