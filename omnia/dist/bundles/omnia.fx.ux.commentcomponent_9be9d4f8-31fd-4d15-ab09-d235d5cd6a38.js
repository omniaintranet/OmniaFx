if("undefined"==typeof omniaLoader&&(globalThis.omniaLoader={}),omniaLoader["bb000000-0000-bbbb-0000-0000000000bb"]=omniaLoader["bb000000-0000-bbbb-0000-0000000000bb"]||{},omniaLoader["bb000000-0000-bbbb-0000-0000000000bb"]["9be9d4f8-31fd-4d15-ab09-d235d5cd6a38"])throw new Error("Error, already loaded manifest 9be9d4f8-31fd-4d15-ab09-d235d5cd6a38 with service id bb000000-0000-bbbb-0000-0000000000bb");omniaLoader["bb000000-0000-bbbb-0000-0000000000bb"]["9be9d4f8-31fd-4d15-ab09-d235d5cd6a38"]=function(){(()=>{var e={"./client/fx/ux/social/comment.tsx":(e,t,s)=>{"use strict";s.r(t),s.d(t,{CommentComponent:()=>C});var o=s("./node_modules/vue-class-component/dist/vue-class-component.esm.js"),r=s("./node_modules/vue-property-decorator/lib/vue-property-decorator.js"),i=s("./node_modules/@vue/composition-api/dist/vue-composition-api.mjs"),n=s("14a8d443-2e58-450b-a462-258bdaf69b49").setCurrentManifest("bb000000-0000-bbbb-0000-0000000000bb","9be9d4f8-31fd-4d15-ab09-d235d5cd6a38"),d=s("d0a145a7-d1ef-4217-aa6f-85dd18c4231d"),a=s("e25b9dd8-6dd7-4437-8ddd-0b9fadba73ac"),l=s("./client/fx/ux/social/loc/localize.js"),c=s("./client/fx/ux/styleflow.js"),m=s("./client/fx/ux/models/index.js"),h=s("./node_modules/csx/lib.es2015/index.js");c.StyleFlow.define(m.CommentStyles,{commentCountWrapper:{textAlign:"end",fontSize:"14px",fontWeight:400},slimSpacing:{marginBottom:"1px"},commentWrapper:{minHeight:"50px",display:"flex",position:"relative",$nest:{"&:last-child":{borderLeft:"none"}}},commentWrapperDialog:{display:"none"},replyCommentWrapper:{paddingLeft:"78px"},topCommentAvatarWrapper:e=>({position:(0,h.important)("absolute"),borderRadius:"50%",left:e?null:"0px",right:e?"0px":null,top:"0px",background:"transparent"}),replyCommentAvatarWrapper:{height:"36px",width:"36px",position:"absolute",borderRadius:"50%",left:"38px",background:"transparent"},connectLine:{position:"absolute",height:"1px",width:"24px",background:"#d6d6d6",top:"24px",left:0},topCommentShowMoreAction:{fontSize:"14px",fontWeight:450},repliedCommentShowMoreAction:{fontSize:"14px",fontWeight:450},showMoreExtraSpacing:{marginLeft:"50px"},showMoreExtraSpacingReply:{marginLeft:"72px"},smallBadge:{$nest:{".v-badge__badge":{padding:(0,h.important)("0px"),height:(0,h.important)("13px"),minWidth:(0,h.important)("13px"),$nest:{".v-icon":{fontSize:(0,h.important)("8px")}}}}},commentEditor:{width:"100%"}});var p=s("./node_modules/typestyle/umd/typestyle.js"),b=s("d7327742-5647-4075-b7ab-4f9ca852addb").setCurrentManifest("bb000000-0000-bbbb-0000-0000000000bb","9be9d4f8-31fd-4d15-ab09-d235d5cd6a38"),u=(e=>(e[e.OldestTop=0]="OldestTop",e[e.NewestTop=1]="NewestTop",e))(u||{}),y=s("5e618f4d-d014-414e-a681-89e34cbeda0f"),f=Object.defineProperty,S=Object.getOwnPropertyDescriptor,g=(e,t,s,o)=>{for(var r,i=o>1?void 0:o?S(t,s):t,n=e.length-1;n>=0;n--)(r=e[n])&&(i=(o?r(t,s,i):r(i))||i);return o&&i&&f(t,s,i),i};let C=class extends b.VueComponentBase{constructor(){super(...arguments),this.reverseSortOrder=!1,this.isLoading=!0,this.showOnlyBestReply=!1,this.currentUser=null,this.commentAddingHashKey="",this.commentsReplyingHashKey={},this.commentsHashKey={},this.commentAdding=null,this.commentsReplying={},this.currentShowMoreSize={},this.userInfo=null,this.commentClasses=c.StyleFlow.use(b.CommentStyles),this.minIndexToShow=0,this.topComments=[],this.templateSettings={canMarkBestReply:!1,enableBestReply:!1,enableMention:!1,richTextSettings:{}},this.isRightToLeft=!1,this.onCommentAdded=(e,t,s=null)=>{s?(e&&!t?this.extendCurrentShowMoreSize(s.id,1):t&&(this.commentsHashKey[t]=n.Utils.generateGuid()),this.commentsReplying={}):(this.initCommentAdding(),this.extendCurrentShowMoreSize(this.topicId,1),t&&(this.commentsHashKey[t]=n.Utils.generateGuid()))}}onTopicIdChange(e,t){const s=this.currentShowMoreSize[this.topicId]||this.showMoreSize;this.reverseSortOrder=this.sortOrder===u.NewestTop,this.reverseSortOrder?this.topComments=this.comments.filter((e=>!e.structureParentId)).sort(((e,t)=>e.createdAt<t.createdAt?1:-1)):this.topComments=this.comments.filter((e=>!e.structureParentId)).sort(((e,t)=>e.createdAt>t.createdAt?1:-1)),this.minIndexToShow=this.topComments.length-s}created(){if(this.reverseSortOrder=this.sortOrder===u.NewestTop,this.commentClasses=c.StyleFlow.use(b.CommentStyles,this.styles),!this.topicId)throw"Topic Id cannot be empty for using Comment Like Component";(!Number.isInteger(this.showMoreSize)||this.showMoreSize<0)&&(this.showMoreSize=10),this.userService.getCurrentUser().then((e=>{this.currentUser=e,this.initCommentAdding()})),this.showOnlyBestReply=this.enableBestReply&&this.comments&&this.comments.some((e=>!e.deletedBy&&e.bestReply)),this.isRightToLeft=this.directionStore.getters.getDirectionRule()===d.DirectionRules.rtl}mounted(){const e=this.reverseSortOrder?this.comments.filter((e=>!e.structureParentId)).sort(((e,t)=>e.createdAt<t.createdAt?1:-1)):this.comments.filter((e=>!e.structureParentId)).sort(((e,t)=>e.createdAt>t.createdAt?1:-1)),t=[];this.comments.forEach((e=>{e.createdByUser&&t.push(e.createdByUser.objectId)})),this.userStore.actions.ensureUsersPresence.dispatch(t),this.topComments=[...e];const s=this.currentShowMoreSize[this.topicId]||this.showMoreSize;this.minIndexToShow=this.topComments.length-s,this.templateSettings={enableMention:this.enableMention,richTextSettings:this.richTextSettings,enableBestReply:this.enableBestReply,canMarkBestReply:this.canMarkBestReply},n.WebComponentBootstrapper.registerElementInstance(this,this.$el)}beforeUpdate(){this.templateSettings={enableMention:this.enableMention,richTextSettings:this.richTextSettings,enableBestReply:this.enableBestReply,canMarkBestReply:this.canMarkBestReply}}initCommentAdding(){this.commentAdding={topicId:this.topicId,createdBy:this.currentUser.uid,createdByUser:this.currentUser,bestReply:!1,id:null,content:"",createdAt:null,mentionedUsers:[]},this.userStore.actions.ensureUsersPresence.dispatch([this.commentAdding.createdByUser.objectId])}extendCurrentShowMoreSize(e,t){let s=this.currentShowMoreSize[e]||this.showMoreSize;if(t)s+=t;else{s+=this.showMoreSize;const e=this.reverseSortOrder?this.comments.filter((e=>!e.structureParentId)).sort(((e,t)=>e.createdAt<t.createdAt?1:-1)):this.comments.filter((e=>!e.structureParentId)).sort(((e,t)=>e.createdAt>t.createdAt?1:-1));this.topComments=[...e],this.minIndexToShow=this.topComments.length-s}this.currentShowMoreSize[e]=s}onCancelReply(e){this.commentsReplying[e.structureParentId]=null}onOpenReply(e){this.showOnlyBestReply=!1;const t=e.structureParentId||e.id;this.commentsReplyingHashKey[t]=n.Utils.generateGuid(),e.deletedBy?delete this.commentsReplying[t]:(this.commentsReplying[t]={topicId:this.topicId,content:"",id:"",bestReply:!1,parentId:e.id,createdBy:this.currentUser.uid,createdByUser:this.currentUser,structureParentId:t,createdAt:null,mentionedUsers:[]},setTimeout((()=>{const e=Zepto(`#${this.commentsReplyingHashKey[t]}`)[0];e&&!this.isElementInViewport(e)&&e.scrollIntoView&&n.Utils.isFunction(e.scrollIntoView)&&e.scrollIntoView(!1)}),100)),this.$forceUpdate()}isElementInViewport(e){const t=e.getBoundingClientRect();return t.top>=0&&t.left>=0&&t.bottom<=(window.innerHeight||document.documentElement.clientHeight)&&t.right<=(window.innerWidth||document.documentElement.clientWidth)}getCommentsCountLabel(e){switch(e){case 0:return this.commentLoc.CommentCountLabel.ZeroComment;case 1:return this.commentLoc.CommentCountLabel.OneComment;default:return this.commentLoc.CommentCountLabel.MoreThanOneComment}}renderTopicComments(){const e=this.comments.filter((e=>!e.deletedBy)).length,t=this.getCommentsCountLabel(e),s=this.currentShowMoreSize[this.topicId]||this.showMoreSize;return this.userInfo=this.userStore.getters.resolvedPresenceUser(this.commentAdding.createdByUser.objectId.toString()),this.comments&&(0,i.h)("div",[(0,i.h)("div",{class:(0,p.classes)("pb-1",this.theming.body.text.css,this.commentClasses.commentCountWrapper)},[e," ",t]),(0,i.h)("div",[this.reverseSortOrder?(0,i.h)("omfx-security-trimer",{domProps:{roles:[d.RoleDefinitions.AppInstanceContributor],content:this.renderMainCommentComponent(this.commentAdding,!0)}}):null]),this.minIndexToShow>0&&!this.reverseSortOrder&&this.renderTopCommentShowMoreOption(this.topicId),this.topComments.map(((e,t)=>this.reverseSortOrder&&t>=s||!this.reverseSortOrder&&t<this.minIndexToShow?null:[this.renderMainCommentComponent(e,!1),this.renderCommentsWithChildren(e)])),s<this.topComments.length&&this.reverseSortOrder&&this.renderTopCommentShowMoreOption(this.topicId),(0,i.h)("div",[this.reverseSortOrder?null:(0,i.h)("omfx-security-trimer",{domProps:{roles:[d.RoleDefinitions.AppInstanceContributor],content:this.renderMainCommentComponent(this.commentAdding,!0)}})])])}renderTopCommentShowMoreOption(e){return(0,i.h)("div",{class:e===this.topicId?(0,p.classes)(this.commentClasses.topCommentShowMoreAction,"pb-4",this.reverseSortOrder?this.commentClasses.showMoreExtraSpacing:null):(0,p.classes)(this.commentClasses.repliedCommentShowMoreAction,"pl-4 pb-3",this.reverseSortOrder?this.commentClasses.showMoreExtraSpacingReply:"ml-6")},[(0,i.h)("a",{class:this.theming.body.text.css,attrs:{tabindex:0},on:{click:()=>{this.extendCurrentShowMoreSize(e)}}},[this.reverseSortOrder?this.commentLoc.ViewMoreComments:this.commentLoc.ViewPreviousComments])])}renderShowAllOption(e){return(0,i.h)("div",{class:e===this.topicId?(0,p.classes)(this.commentClasses.topCommentShowMoreAction):(0,p.classes)(this.commentClasses.repliedCommentShowMoreAction,"pl-4","ml-6")},[(0,i.h)("a",{class:this.theming.body.text.css,attrs:{tabindex:0},on:{click:()=>{this.showOnlyBestReply=!1}}},[this.commentLoc.ViewAllComments])])}renderAvailabilityBadge(e,t){const s=this.userStore.getUserPresenceIconName(t.availability,t.activity),o=this.userStore.getUserPresenceIconColor(t.availability,t.activity),r=this.userStore.getUserPresenceStatusName(t.activity);return(0,i.h)("div",{class:this.commentClasses.smallBadge},[(0,i.h)("v-badge",{attrs:{avatar:!0,title:r,bordered:!0,bottom:!0,overlap:!0,color:o,icon:s,"offset-x":"20","offset-y":"-5"}},[(0,i.h)("v-avatar",{attrs:{size:8}})])])}renderMainCommentComponent(e,t){const s=e.id;let o=null;return e.createdByUser&&(o=this.userStore.getters.resolvedPresenceUser(e.createdByUser.objectId.toString())),(0,i.h)("div",{class:(0,p.classes)(this.commentClasses.commentWrapper,t?this.commentClasses.slimSpacing:"pb-2",this.isRightToLeft?"pr-10":"pl-10")},[e.createdByUser?(0,i.h)("div",[(0,i.h)("v-img",{class:(0,p.classes)(this.commentClasses.topCommentAvatarWrapper(this.isRightToLeft)),attrs:{width:"36px",height:"36px",src:e.createdByUser.avatar}}),o&&o.availability?this.renderAvailabilityBadge(i.h,o):null]):(0,i.h)("v-icon",{class:(0,p.classes)(this.commentClasses.topCommentAvatarWrapper(this.isRightToLeft))},["fa-question"]),(0,i.h)("div",{class:(0,p.classes)(this.commentClasses.commentEditor)},[(0,i.h)(this.template,{domProps:{canShowEditDialogOnLoad:!1,cancelReply:this.onCancelReply,comment:e,currentUser:this.currentUser,canLike:this.allowLikes,openReply:this.onOpenReply,dynamicInput:this.dynamicInput,templateSettings:this.templateSettings,refresh:e=>{this.onCommentAdded(e,s)},additionalRoles:this.additionalRoles,cardStyle:this.cardStyle,hideEdit:this.hideEdit}})])])}renderCommentsWithChildren(e){let t=[];const s=this.commentsReplying[e.id];let o=this.comments.filter((t=>t.structureParentId===e.id));o&&(o=this.reverseSortOrder?o.sort(((e,t)=>e.createdAt<t.createdAt?1:-1)):o.sort(((e,t)=>e.createdAt>t.createdAt?1:-1)),t=o);const r=this.currentShowMoreSize[e.id]||this.showMoreSize,d=t.length-r,a=r;return s&&""===s.id&&""===s.content&&(this.reverseSortOrder?t.unshift(s):t.push(s)),(0,i.h)("div",[d>0&&!this.reverseSortOrder&&this.renderTopCommentShowMoreOption(e.id),t.map(((t,s)=>{const o=window.outerWidth<=500&&n.Utils.isNullOrEmpty(t.content);if(!this.reverseSortOrder&&s<=d)return;if(this.reverseSortOrder&&s>=a)return;const r=t.id,l=r?this.commentsHashKey[r]||r:this.commentsReplyingHashKey[e.id];let c=null;return t.createdByUser&&(c=this.userStore.getters.resolvedPresenceUser(t.createdByUser.objectId.toString())),(0,i.h)("div",[(0,i.h)("div",{class:[(0,p.classes)(this.commentClasses.commentWrapper,"pb-2"),this.commentClasses.replyCommentWrapper,o?this.commentClasses.commentWrapperDialog:null]},[t.createdByUser?(0,i.h)("div",[(0,i.h)("img",{class:(0,p.classes)(this.commentClasses.replyCommentAvatarWrapper),attrs:{src:t.createdByUser.avatar}}),c&&c.availability?this.renderAvailabilityBadge(i.h,c):null]):(0,i.h)("v-icon",{class:(0,p.classes)(this.commentClasses.replyCommentAvatarWrapper)},["fa-question"]),(0,i.h)("div",{class:(0,p.classes)(this.commentClasses.commentEditor)},[(0,i.h)(this.template,{domProps:{canShowEditDialogOnLoad:!0,cancelReply:this.onCancelReply,comment:t,currentUser:this.currentUser,openReply:this.onOpenReply,dynamicInput:this.dynamicInput,canLike:this.allowLikes,templateSettings:this.templateSettings,refresh:t=>{this.onCommentAdded(t,r,e)},additionalRoles:this.additionalRoles,cardStyle:this.cardStyle,hideEdit:this.hideEdit},attrs:{id:l}})])]),(0,i.h)("div",[this.renderCommentsWithChildren(t)])])})),a<t.length&&this.reverseSortOrder&&this.renderTopCommentShowMoreOption(e.id)])}renderBestReply(){if(!this.comments)return;const e=this.comments.filter((e=>!e.deletedBy&&e.bestReply))[0];if(e){const t=[],s=this.comments.filter((e=>!e.deletedBy)).length,o=this.getCommentsCountLabel(s);return t.push((0,i.h)("div",{class:(0,p.classes)("pb-1",this.theming.body.text.css)})),t.push((0,i.h)("v-row",{attrs:{"no-gutter":!0}},[(0,i.h)("v-col",{attrs:{cols:"6"},class:"pt-1"},[this.renderShowAllOption(this.topicId)]),(0,i.h)("v-col",{attrs:{cols:"6"},class:[this.theming.body.text.css,this.commentClasses.commentCountWrapper,"pt-1"]},[s," ",o])])),t.push(this.renderMainCommentComponent(e,!1)),t}return this.renderTopicComments()}render(){return this.currentUser&&(0,i.h)("div",[" ",this.enableBestReply&&this.showOnlyBestReply?this.renderBestReply():this.renderTopicComments()," "])}};g([(0,n.Inject)(a.UserService)],C.prototype,"userService",2),g([(0,n.Inject)(y.UserStore)],C.prototype,"userStore",2),g([(0,n.Inject)(a.AzureAdService)],C.prototype,"userAzureAdService",2),g([(0,n.Inject)(y.DirectionRuleStore)],C.prototype,"directionStore",2),g([(0,n.Inject)(y.FeatureStore)],C.prototype,"featureStore",2),g([(0,n.Localize)(l.CommentLocalization.namespace)],C.prototype,"commentLoc",2),g([(0,r.Prop)({default:10})],C.prototype,"showMoreSize",2),g([(0,r.Prop)({default:"omfx-comment-like-template"})],C.prototype,"template",2),g([(0,r.Prop)()],C.prototype,"comments",2),g([(0,r.Prop)()],C.prototype,"topicId",2),g([(0,r.Prop)()],C.prototype,"richTextSettings",2),g([(0,r.Prop)()],C.prototype,"enableBestReply",2),g([(0,r.Prop)()],C.prototype,"enableMention",2),g([(0,r.Prop)()],C.prototype,"canMarkBestReply",2),g([(0,r.Prop)()],C.prototype,"dynamicInput",2),g([(0,r.Prop)()],C.prototype,"styles",2),g([(0,r.Prop)()],C.prototype,"additionalRoles",2),g([(0,r.Prop)()],C.prototype,"sortOrder",2),g([(0,r.Prop)()],C.prototype,"allowLikes",2),g([(0,r.Prop)()],C.prototype,"cardStyle",2),g([(0,r.Prop)({default:!1})],C.prototype,"hideEdit",2),g([(0,r.Watch)("comments",{immediate:!1})],C.prototype,"onTopicIdChange",1),C=g([o.default],C),n.WebComponentBootstrapper.registerElement((e=>{(0,n.vueCustomElement)(e.elementName,C,{destroyTimeout:1e3})}))},"./client/fx/ux/models/index.js":(e,t,s)=>{e.exports=s("dll-reference md66")("./client/fx/ux/models/index.js")},"./client/fx/ux/social/loc/localize.js":(e,t,s)=>{e.exports=s("dll-reference md66")("./client/fx/ux/social/loc/localize.js")},"./client/fx/ux/styleflow.js":(e,t,s)=>{e.exports=s("dll-reference md66")("./client/fx/ux/styleflow.js")},"./node_modules/@vue/composition-api/dist/vue-composition-api.mjs":(e,t,s)=>{e.exports=s("dll-reference md2")("./node_modules/@vue/composition-api/dist/vue-composition-api.mjs")},"./node_modules/csx/lib.es2015/index.js":(e,t,s)=>{e.exports=s("dll-reference md2")("./node_modules/csx/lib.es2015/index.js")},"./node_modules/typestyle/umd/typestyle.js":(e,t,s)=>{e.exports=s("dll-reference md2")("./node_modules/typestyle/umd/typestyle.js")},"./node_modules/vue-class-component/dist/vue-class-component.esm.js":(e,t,s)=>{e.exports=s("dll-reference md2")("./node_modules/vue-class-component/dist/vue-class-component.esm.js")},"./node_modules/vue-property-decorator/lib/vue-property-decorator.js":(e,t,s)=>{e.exports=s("dll-reference md2")("./node_modules/vue-property-decorator/lib/vue-property-decorator.js")},"14a8d443-2e58-450b-a462-258bdaf69b49":(e,t,s)=>{e.exports=s("dll-reference md10")("14a8d443-2e58-450b-a462-258bdaf69b49")},"5e618f4d-d014-414e-a681-89e34cbeda0f":(e,t,s)=>{e.exports=s("dll-reference md10")("5e618f4d-d014-414e-a681-89e34cbeda0f")},"d0a145a7-d1ef-4217-aa6f-85dd18c4231d":(e,t,s)=>{e.exports=s("dll-reference md9")("d0a145a7-d1ef-4217-aa6f-85dd18c4231d")},"d7327742-5647-4075-b7ab-4f9ca852addb":(e,t,s)=>{e.exports=s("dll-reference md66")("d7327742-5647-4075-b7ab-4f9ca852addb")},"e25b9dd8-6dd7-4437-8ddd-0b9fadba73ac":(e,t,s)=>{e.exports=s("dll-reference md10")("e25b9dd8-6dd7-4437-8ddd-0b9fadba73ac")},"dll-reference md2":e=>{"use strict";e.exports=omniaVendor},"dll-reference md9":e=>{"use strict";e.exports=omniaWebpackJsonp["bb000000-0000-bbbb-0000-0000000000bb"]["a2892051-fd9f-4056-ae8d-30d16d48417d"]},"dll-reference md10":e=>{"use strict";e.exports=omniaWebpackJsonp["bb000000-0000-bbbb-0000-0000000000bb"]["a5a89056-b5f5-475d-8518-a1f55090379d"]},"dll-reference md66":e=>{"use strict";e.exports=omniaWebpackJsonp["bb000000-0000-bbbb-0000-0000000000bb"]["dee030cc-4ab3-4158-bb06-8049f5c67542"]}};if("undefined"==typeof omniaWebpackJsonp&&(globalThis.omniaWebpackJsonp={}),globalThis.omniaWebpackJsonp["bb000000-0000-bbbb-0000-0000000000bb"]=globalThis.omniaWebpackJsonp["bb000000-0000-bbbb-0000-0000000000bb"]||{},globalThis.omniaWebpackJsonp["bb000000-0000-bbbb-0000-0000000000bb"]["9be9d4f8-31fd-4d15-ab09-d235d5cd6a38"])throw new Error("Error, already loaded manifest 9be9d4f8-31fd-4d15-ab09-d235d5cd6a38 with service id bb000000-0000-bbbb-0000-0000000000bb");globalThis.omniaWebpackJsonp["bb000000-0000-bbbb-0000-0000000000bb"]["9be9d4f8-31fd-4d15-ab09-d235d5cd6a38"]=s;var t={};function s(o){var r=t[o];if(void 0!==r)return r.exports;var i=t[o]={exports:{}};return e[o](i,i.exports,s),i.exports}s.d=(e,t)=>{for(var o in t)s.o(t,o)&&!s.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:t[o]})},s.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),s.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})};s("./client/fx/ux/social/comment.tsx")})()};