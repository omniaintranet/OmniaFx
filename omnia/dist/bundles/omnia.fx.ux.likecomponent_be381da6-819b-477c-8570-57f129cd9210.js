if("undefined"==typeof omniaLoader&&(globalThis.omniaLoader={}),omniaLoader["bb000000-0000-bbbb-0000-0000000000bb"]=omniaLoader["bb000000-0000-bbbb-0000-0000000000bb"]||{},omniaLoader["bb000000-0000-bbbb-0000-0000000000bb"]["be381da6-819b-477c-8570-57f129cd9210"])throw new Error("Error, already loaded manifest be381da6-819b-477c-8570-57f129cd9210 with service id bb000000-0000-bbbb-0000-0000000000bb");omniaLoader["bb000000-0000-bbbb-0000-0000000000bb"]["be381da6-819b-477c-8570-57f129cd9210"]=function(){(()=>{var e={"./client/fx/ux/social/like.tsx":(e,t,o)=>{"use strict";o.r(t),o.d(t,{LikeComponent:()=>k});var s=o("./node_modules/vue-class-component/dist/vue-class-component.esm.js"),i=o("./node_modules/vue-property-decorator/lib/vue-property-decorator.js"),r=o("./node_modules/@vue/composition-api/dist/vue-composition-api.mjs"),n=o("14a8d443-2e58-450b-a462-258bdaf69b49").setCurrentManifest("bb000000-0000-bbbb-0000-0000000000bb","be381da6-819b-477c-8570-57f129cd9210"),a=o("d0a145a7-d1ef-4217-aa6f-85dd18c4231d"),d=o("e25b9dd8-6dd7-4437-8ddd-0b9fadba73ac"),l=o("./client/fx/ux/social/loc/localize.js"),c=o("5e618f4d-d014-414e-a681-89e34cbeda0f"),b=o("5326a8ef-4e3c-49d6-b415-1ddf7fdcc830"),p=o("./client/fx/ux/styleflow.js"),m=o("./client/fx/ux/models/index.js");p.StyleFlow.define(m.LikeStyles,{likesToShow:{position:"relative",top:"1px"},underlineWhenHover:{textDecoration:"none",$nest:{"&:hover":{textDecoration:"underline"}}},buttonOutline:{$nest:{"&:focus":{outline:"-webkit-focus-ring-color auto"}}},personWrapper:{maxWidth:"100%",wordWrap:"break-word",display:"inline-block"},buttonPosition:{marginLeft:"-15px"}});var h=o("./node_modules/typestyle/umd/typestyle.js"),u=o("d7327742-5647-4075-b7ab-4f9ca852addb").setCurrentManifest("bb000000-0000-bbbb-0000-0000000000bb","be381da6-819b-477c-8570-57f129cd9210"),f=Object.defineProperty,y=Object.getOwnPropertyDescriptor,x=(e,t,o,s)=>{for(var i,r=s>1?void 0:s?y(t,o):t,n=e.length-1;n>=0;n--)(i=e[n])&&(r=(s?i(t,o,r):i(r))||r);return s&&r&&f(t,o,r),r};let k=class extends u.VueComponentBase{constructor(){super(...arguments),this.currentUser=null,this.showLikeListing=!1,this.likeClasses=p.StyleFlow.use(m.LikeStyles)}beforeDestroy(){}created(){if(this.likeClasses=p.StyleFlow.use(m.LikeStyles,this.styles),!this.topicId)throw"Topic Id cannot be empty for using Comment Like Component";this.userService.getCurrentUser().then((e=>{this.currentUser=e})),this.subscriptionHandler.add(this.omniaContext.onContextChanged().subscribe((e=>{})))}mounted(){n.WebComponentBootstrapper.registerElementInstance(this,this.$el)}onLikeClick(e){this.store.actions.toggleLike.dispatch(this.commentLikeService,this.topicId,"",e,this.currentUser)}getLikesToShow(e){const t=this.currentUser.uid.toLowerCase(),o=[];if(e&&e.length>0){const s=e.filter((e=>e.createdBy.toLowerCase()==t))[0];s&&o.push({userName:s.createdByUser.uid,displayName:this.commentLocalization.You,profileUrl:s.createdByUser.profileUrl,isCurrentUser:!0});const i=e.filter((e=>e.createdBy.toLowerCase()!=t))[0];if(i&&(i.createdByUser?o.push({userName:i.createdByUser.uid,displayName:i.createdByUser.displayName,profileUrl:i.createdByUser.profileUrl}):o.push({userName:i.createdBy,displayName:i.createdBy,profileUrl:""})),i&&!s){const t=e.filter((e=>e.createdBy.toLowerCase()!=i.createdBy.toLowerCase()))[0];t&&(t.createdByUser?o.push({userName:t.createdByUser.uid,displayName:t.createdByUser.displayName,profileUrl:t.createdByUser.profileUrl}):o.push({userName:t.createdBy,displayName:t.createdBy,profileUrl:""}))}}return o}renderUserLink(e){return e.profileUrl?(0,r.h)("omfx-profilecard",{domProps:{userName:e.userName},attrs:{tabindex:0,contentClass:[this.likeClasses.underlineWhenHover,this.theming.body.text.css],target:"_blank",href:e.profileUrl},scopedSlots:{renderChildren:()=>(0,r.h)("span",{style:{fontWeight:450,display:"inline-block",marginBottom:"3px"}},[e.displayName])}}):(0,r.h)("span",{class:this.theming.body.text.css,style:"font-weight:450"},[e.displayName])}renderLikedByTitle(e,t,o){const s=e?e.length-t.length:0;return 1===t.length?[this.renderUserLink(t[0]),(0,r.h)("span",{class:[this.theming.body.text.csslighter1,"mr-8"]},[" ",t[0].isCurrentUser?this.commentLocalization.LikeThis:this.commentLocalization.LikesThis])]:2===t.length&&0===s?[this.renderUserLink(t[0]),(0,r.h)("span",{class:[this.theming.body.text.csslighter1]},[" ",this.commentLocalization.And," "]),this.renderUserLink(t[1]),(0,r.h)("span",{class:[this.theming.body.text.csslighter1,"mr-8"]},[" ",this.commentLocalization.LikeThis])]:2===t.length&&s>0?[this.renderUserLink(t[0]),(0,r.h)("span",{class:[this.theming.body.text.csslighter1]},[", "]),this.renderUserLink(t[1]),(0,r.h)("span",[" ",this.commentLocalization.And," ",s]),(0,r.h)("a",{attrs:{tabindex:0},on:{click:()=>{this.showLikeListing=!0}}},[" ",s>1?this.commentLocalization.Others:this.commentLocalization.Other]),(0,r.h)("span",{class:[this.theming.body.text.csslighter1,"mr-8"]},[" ",this.commentLocalization.LikeThis])]:null}renderLikes(e){const t=this.getLikesToShow(e),o=t[0]&&t[0].isCurrentUser;return[(0,r.h)("div",[(0,r.h)("span",{class:(0,h.classes)("pb-2",this.likeClasses.likesToShow)},[this.renderLikedByTitle(e,t,o)]),(0,r.h)("omfx-button",{domProps:{onClick:()=>{this.onLikeClick(!o)},styles:{textColor:this.theming.body.text.color.base,bgColor:"rgba(0,0,0,0)"},mode:a.ButtonModes.flat,icon:{iconType:new a.FontAwesomeIcon("thumb_up"),small:!0},tooltip:{text:1==o?this.commentLocalization.Unlike:this.commentLocalization.Like,position:a.ButtonTooltipPosition.Left}},attrs:{plain:!0,text:1==o?this.commentLocalization.Unlike:this.commentLocalization.Like,contentClass:this.likeClasses.buttonPosition}}),this.extendComponents&&this.extendComponents.map((e=>(0,r.h)(e.elem,{domProps:{dynamicInput:e.dynamicInput},class:"px-2"})))]),this.showLikeListing?(0,r.h)(this.likeListingTemplate,{domProps:{likes:e,close:()=>{this.showLikeListing=!1}},style:{display:"none"}}):null]}render(){return(0,r.h)("div",[this.currentUser&&this.likes?this.renderLikes(this.likes):null])}};x([(0,n.Inject)(d.UserService)],k.prototype,"userService",2),x([(0,n.Inject)(c.CommentLikeStore)],k.prototype,"store",2),x([(0,n.Inject)(b.OmniaContext)],k.prototype,"omniaContext",2),x([(0,n.Inject)(n.SubscriptionHandler)],k.prototype,"subscriptionHandler",2),x([(0,n.Localize)(l.CommentLocalization.namespace)],k.prototype,"commentLocalization",2),x([(0,i.Prop)()],k.prototype,"topicId",2),x([(0,i.Prop)({default:"omfx-like-listing-template"})],k.prototype,"likeListingTemplate",2),x([(0,i.Prop)()],k.prototype,"extendComponents",2),x([(0,i.Prop)()],k.prototype,"likes",2),x([(0,i.Prop)()],k.prototype,"commentLikeService",2),x([(0,i.Prop)()],k.prototype,"styles",2),k=x([s.default],k),n.WebComponentBootstrapper.registerElement((e=>{(0,n.vueCustomElement)(e.elementName,k,{destroyTimeout:1e3})}))},"./client/fx/ux/models/index.js":(e,t,o)=>{e.exports=o("dll-reference md66")("./client/fx/ux/models/index.js")},"./client/fx/ux/social/loc/localize.js":(e,t,o)=>{e.exports=o("dll-reference md66")("./client/fx/ux/social/loc/localize.js")},"./client/fx/ux/styleflow.js":(e,t,o)=>{e.exports=o("dll-reference md66")("./client/fx/ux/styleflow.js")},"./node_modules/@vue/composition-api/dist/vue-composition-api.mjs":(e,t,o)=>{e.exports=o("dll-reference md2")("./node_modules/@vue/composition-api/dist/vue-composition-api.mjs")},"./node_modules/typestyle/umd/typestyle.js":(e,t,o)=>{e.exports=o("dll-reference md2")("./node_modules/typestyle/umd/typestyle.js")},"./node_modules/vue-class-component/dist/vue-class-component.esm.js":(e,t,o)=>{e.exports=o("dll-reference md2")("./node_modules/vue-class-component/dist/vue-class-component.esm.js")},"./node_modules/vue-property-decorator/lib/vue-property-decorator.js":(e,t,o)=>{e.exports=o("dll-reference md2")("./node_modules/vue-property-decorator/lib/vue-property-decorator.js")},"14a8d443-2e58-450b-a462-258bdaf69b49":(e,t,o)=>{e.exports=o("dll-reference md10")("14a8d443-2e58-450b-a462-258bdaf69b49")},"5326a8ef-4e3c-49d6-b415-1ddf7fdcc830":(e,t,o)=>{e.exports=o("dll-reference md8")("5326a8ef-4e3c-49d6-b415-1ddf7fdcc830")},"5e618f4d-d014-414e-a681-89e34cbeda0f":(e,t,o)=>{e.exports=o("dll-reference md10")("5e618f4d-d014-414e-a681-89e34cbeda0f")},"d0a145a7-d1ef-4217-aa6f-85dd18c4231d":(e,t,o)=>{e.exports=o("dll-reference md9")("d0a145a7-d1ef-4217-aa6f-85dd18c4231d")},"d7327742-5647-4075-b7ab-4f9ca852addb":(e,t,o)=>{e.exports=o("dll-reference md66")("d7327742-5647-4075-b7ab-4f9ca852addb")},"e25b9dd8-6dd7-4437-8ddd-0b9fadba73ac":(e,t,o)=>{e.exports=o("dll-reference md10")("e25b9dd8-6dd7-4437-8ddd-0b9fadba73ac")},"dll-reference md2":e=>{"use strict";e.exports=omniaVendor},"dll-reference md8":e=>{"use strict";e.exports=omniaWebpackJsonp["bb000000-0000-bbbb-0000-0000000000bb"]["a1602121-3070-4304-b4d8-0859e50c482b"]},"dll-reference md9":e=>{"use strict";e.exports=omniaWebpackJsonp["bb000000-0000-bbbb-0000-0000000000bb"]["a2892051-fd9f-4056-ae8d-30d16d48417d"]},"dll-reference md10":e=>{"use strict";e.exports=omniaWebpackJsonp["bb000000-0000-bbbb-0000-0000000000bb"]["a5a89056-b5f5-475d-8518-a1f55090379d"]},"dll-reference md66":e=>{"use strict";e.exports=omniaWebpackJsonp["bb000000-0000-bbbb-0000-0000000000bb"]["dee030cc-4ab3-4158-bb06-8049f5c67542"]}};if("undefined"==typeof omniaWebpackJsonp&&(globalThis.omniaWebpackJsonp={}),globalThis.omniaWebpackJsonp["bb000000-0000-bbbb-0000-0000000000bb"]=globalThis.omniaWebpackJsonp["bb000000-0000-bbbb-0000-0000000000bb"]||{},globalThis.omniaWebpackJsonp["bb000000-0000-bbbb-0000-0000000000bb"]["be381da6-819b-477c-8570-57f129cd9210"])throw new Error("Error, already loaded manifest be381da6-819b-477c-8570-57f129cd9210 with service id bb000000-0000-bbbb-0000-0000000000bb");globalThis.omniaWebpackJsonp["bb000000-0000-bbbb-0000-0000000000bb"]["be381da6-819b-477c-8570-57f129cd9210"]=o;var t={};function o(s){var i=t[s];if(void 0!==i)return i.exports;var r=t[s]={exports:{}};return e[s](r,r.exports,o),r.exports}o.d=(e,t)=>{for(var s in t)o.o(t,s)&&!o.o(e,s)&&Object.defineProperty(e,s,{enumerable:!0,get:t[s]})},o.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),o.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})};o("./client/fx/ux/social/like.tsx")})()};