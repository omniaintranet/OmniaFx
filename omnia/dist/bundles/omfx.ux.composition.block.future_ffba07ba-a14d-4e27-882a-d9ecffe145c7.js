if("undefined"==typeof omniaLoader&&(globalThis.omniaLoader={}),omniaLoader["bb000000-0000-bbbb-0000-0000000000bb"]=omniaLoader["bb000000-0000-bbbb-0000-0000000000bb"]||{},omniaLoader["bb000000-0000-bbbb-0000-0000000000bb"]["ffba07ba-a14d-4e27-882a-d9ecffe145c7"])throw new Error("Error, already loaded manifest ffba07ba-a14d-4e27-882a-d9ecffe145c7 with service id bb000000-0000-bbbb-0000-0000000000bb");omniaLoader["bb000000-0000-bbbb-0000-0000000000bb"]["ffba07ba-a14d-4e27-882a-d9ecffe145c7"]=function(){(()=>{var e={"./client/fx/ux/compositiontests/compositionblockfuture.tsx":(e,o,b)=>{"use strict";b.r(o),b.d(o,{default:()=>l});var i=b("./node_modules/vue/dist/vue.esm.js"),t=b("14a8d443-2e58-450b-a462-258bdaf69b49").setCurrentManifest("bb000000-0000-bbbb-0000-0000000000bb","ffba07ba-a14d-4e27-882a-d9ecffe145c7"),a=b("d7327742-5647-4075-b7ab-4f9ca852addb").setCurrentManifest("bb000000-0000-bbbb-0000-0000000000bb","ffba07ba-a14d-4e27-882a-d9ecffe145c7"),d=b("e25b9dd8-6dd7-4437-8ddd-0b9fadba73ac"),s=b("./node_modules/@vue/composition-api/dist/vue-composition-api.mjs"),n=b("97786ea9-4861-48bd-8a57-eae9bbdb4892"),r=b("./client/fx/ux/compositiontests/models/index.js"),c=b("./client/fx/ux/compositiontests/services/index.js");const l=(0,a.defineVueWebComponent)({props:{title:String,name:{type:String,required:!0}},setup(e){(0,n.useProvide)(new r.SharedContext("Block Future Shared Context")),(0,n.useProvide)(new c.TestCompositionService("Block Future Service"));const o=(0,s.reactive)({title:"Andii",counter:0,visibleOmfxDialog:!1,visbibleVDialog:!1}),b=(0,s.reactive)({id:"e1dca2bb-36a6-441c-8445-7779cdb98dc6"}),{theming:l}=(0,a.useTheme)(),f=(0,a.useCurrentVueInstance)();return(0,s.onMounted)((async()=>{const e=(0,t.useInject)(d.SecurityService);await e.getAllOmniaRoles()})),setTimeout((()=>{b.id="bd59a70c-7e80-4f5f-bf46-2bd4e46f3623"}),5e3),()=>(0,s.h)("div",[(0,s.h)("h1",{style:{color:l.colors.primary.base}},["Hello"]),(0,s.h)("p",[o.counter]),(0,s.h)("div",["Bla"]),(0,s.h)("v-btn",{on:{click:()=>{o.counter++}}},["Count"]),(0,s.h)("v-btn",{on:{click:()=>{o.visibleOmfxDialog=!0}}},["Open Omfx Dialog"]),(0,s.h)("v-btn",{on:{click:()=>{o.visbibleVDialog=!0}}},["Open v-dialog"]),(0,s.h)("omfx-dialog",{attrs:{width:800,title:"Test Provide & Inject inside omfx-dialog",valueBind:{visible:o.visibleOmfxDialog},dark:l.body.components.color.dark,position:a.DialogPositions.Center},on:{close:()=>{o.visibleOmfxDialog=!1}}},[(0,s.h)("omfx-composition-inject-component",{attrs:{themeDefinitionId:b.id}})]),(0,s.h)("v-dialog",{attrs:{persistent:!0,"content-class":"v-application",width:800,dark:l.body.components.color.dark},model:{value:o.visbibleVDialog,callback:e=>{i.default.set(o,"visbibleVDialog",e)}}},[(0,s.h)("omfx-wc-hierarchy",{attrs:{parent:f,renderBody:(0,s.h)("div",[(0,s.h)("h1",["Test Provide & Inject inside v-dialog"]),(0,s.h)("omfx-button",{domProps:{onClick:()=>{o.visbibleVDialog=!1},preset:a.ButtonPresets.icons.close},attrs:{dark:l.chrome.bg.dark}}),(0,s.h)("omfx-composition-inject-component",{attrs:{themeDefinitionId:b.id}})])}})])])}});(0,s.h)("div",[(0,s.h)("omfx-test-2",{attrs:{title:"",name:""}}),(0,s.h)("omfx-composition-inject-component"),(0,s.h)("keep-alive")])},"./client/fx/ux/compositiontests/models/index.js":(e,o,b)=>{e.exports=b("dll-reference md33")("./client/fx/ux/compositiontests/models/index.js")},"./client/fx/ux/compositiontests/services/index.js":(e,o,b)=>{e.exports=b("dll-reference md33")("./client/fx/ux/compositiontests/services/index.js")},"./node_modules/@vue/composition-api/dist/vue-composition-api.mjs":(e,o,b)=>{e.exports=b("dll-reference md2")("./node_modules/@vue/composition-api/dist/vue-composition-api.mjs")},"./node_modules/vue/dist/vue.esm.js":(e,o,b)=>{e.exports=b("dll-reference md2")("./node_modules/vue/dist/vue.esm.js")},"14a8d443-2e58-450b-a462-258bdaf69b49":(e,o,b)=>{e.exports=b("dll-reference md10")("14a8d443-2e58-450b-a462-258bdaf69b49")},"97786ea9-4861-48bd-8a57-eae9bbdb4892":(e,o,b)=>{e.exports=b("dll-reference md9")("97786ea9-4861-48bd-8a57-eae9bbdb4892")},"d7327742-5647-4075-b7ab-4f9ca852addb":(e,o,b)=>{e.exports=b("dll-reference md66")("d7327742-5647-4075-b7ab-4f9ca852addb")},"e25b9dd8-6dd7-4437-8ddd-0b9fadba73ac":(e,o,b)=>{e.exports=b("dll-reference md10")("e25b9dd8-6dd7-4437-8ddd-0b9fadba73ac")},"dll-reference md2":e=>{"use strict";e.exports=omniaVendor},"dll-reference md33":e=>{"use strict";e.exports=omniaWebpackJsonp["bb000000-0000-bbbb-0000-0000000000bb"]["9a04acc8-ffcb-437f-8903-a0fa41f65ab1"]},"dll-reference md9":e=>{"use strict";e.exports=omniaWebpackJsonp["bb000000-0000-bbbb-0000-0000000000bb"]["a2892051-fd9f-4056-ae8d-30d16d48417d"]},"dll-reference md10":e=>{"use strict";e.exports=omniaWebpackJsonp["bb000000-0000-bbbb-0000-0000000000bb"]["a5a89056-b5f5-475d-8518-a1f55090379d"]},"dll-reference md66":e=>{"use strict";e.exports=omniaWebpackJsonp["bb000000-0000-bbbb-0000-0000000000bb"]["dee030cc-4ab3-4158-bb06-8049f5c67542"]}};if("undefined"==typeof omniaWebpackJsonp&&(globalThis.omniaWebpackJsonp={}),globalThis.omniaWebpackJsonp["bb000000-0000-bbbb-0000-0000000000bb"]=globalThis.omniaWebpackJsonp["bb000000-0000-bbbb-0000-0000000000bb"]||{},globalThis.omniaWebpackJsonp["bb000000-0000-bbbb-0000-0000000000bb"]["ffba07ba-a14d-4e27-882a-d9ecffe145c7"])throw new Error("Error, already loaded manifest ffba07ba-a14d-4e27-882a-d9ecffe145c7 with service id bb000000-0000-bbbb-0000-0000000000bb");globalThis.omniaWebpackJsonp["bb000000-0000-bbbb-0000-0000000000bb"]["ffba07ba-a14d-4e27-882a-d9ecffe145c7"]=b;var o={};function b(i){var t=o[i];if(void 0!==t)return t.exports;var a=o[i]={exports:{}};return e[i](a,a.exports,b),a.exports}b.d=(e,o)=>{for(var i in o)b.o(o,i)&&!b.o(e,i)&&Object.defineProperty(e,i,{enumerable:!0,get:o[i]})},b.o=(e,o)=>Object.prototype.hasOwnProperty.call(e,o),b.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})};b("./client/fx/ux/compositiontests/compositionblockfuture.tsx")})()};