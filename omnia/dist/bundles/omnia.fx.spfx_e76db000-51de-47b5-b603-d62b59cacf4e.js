if("undefined"==typeof omniaLoader&&(globalThis.omniaLoader={}),omniaLoader["bb000000-0000-bbbb-0000-0000000000bb"]=omniaLoader["bb000000-0000-bbbb-0000-0000000000bb"]||{},omniaLoader["bb000000-0000-bbbb-0000-0000000000bb"]["e76db000-51de-47b5-b603-d62b59cacf4e"])throw new Error("Error, already loaded manifest e76db000-51de-47b5-b603-d62b59cacf4e with service id bb000000-0000-bbbb-0000-0000000000bb");omniaLoader["bb000000-0000-bbbb-0000-0000000000bb"]["e76db000-51de-47b5-b603-d62b59cacf4e"]=function(){(()=>{var e={"ca7d3d00-4da5-41c8-8417-17d94d818927cls":(e,b,t)=>{"use strict";t.r(b),t.d(b,{SpfxContext:()=>o,WebpartItemStyles:()=>a.WebpartItemStyles,WebpartSelectorStyles:()=>a.WebpartSelectorStyles});var a=t("./client/fx/spfx/models/index.js"),r=t("97786ea9-4861-48bd-8a57-eae9bbdb4892"),i=t("d0a145a7-d1ef-4217-aa6f-85dd18c4231d"),n=Object.defineProperty,s=Object.getOwnPropertyDescriptor;let o=class{constructor(){}get applicationCustomizerContext(){return window.omnia.sharepoint.applicationCustomizerContext}};o=((e,b,t,a)=>{for(var r,i=a>1?void 0:a?s(b,t):b,o=e.length-1;o>=0;o--)(r=e[o])&&(i=(a?r(b,t,i):r(i))||i);return a&&i&&n(b,t,i),i})([(0,r.Injectable)({lifetime:i.InstanceLifetimes.Transient})],o)}
//! <omnia-transform-resource path="ca7d3d00-4da5-41c8-8417-17d94d818927cls" />
,"./client/fx/spfx/messagebus/internal/internaltopics.js":(e,b,t)=>{"use strict";t.r(b),t.d(b,{InternalTopics:()=>i,SpfxSettingsActionType:()=>r});var a=t("14a8d443-2e58-450b-a462-258bdaf69b49").setCurrentManifest("bb000000-0000-bbbb-0000-0000000000bb","e76db000-51de-47b5-b603-d62b59cacf4e"),r=(e=>(e[e.Get=0]="Get",e[e.Set=1]="Set",e))(r||{});class i{}i.spfxWebPartSettingTopic=e=>{const b={namespace:"omnia.fx.spfx",name:"settings.provider."+e};return new a.MessageBusTopicMediator(b,{caching:{size:Number.MAX_SAFE_INTEGER}})}},"./client/fx/spfx/models/index.js":(e,b,t)=>{"use strict";t.r(b),t.d(b,{WebpartItemStyles:()=>r,WebpartSelectorStyles:()=>a});const a={},r={}},"./client/fx/spfx/services/spfxwpsettingprovider.js":(e,b,t)=>{"use strict";t.r(b),t.d(b,{OmniaSpfxSettingsProvider:()=>o});var a=t("./client/fx/spfx/messagebus/internal/internaltopics.js"),r=t("97786ea9-4861-48bd-8a57-eae9bbdb4892"),i=t("d0a145a7-d1ef-4217-aa6f-85dd18c4231d"),n=Object.defineProperty,s=Object.getOwnPropertyDescriptor;let o=class{constructor(){this.protectKeyWithSecurityRole=e=>{},this.getValue=e=>new Promise(((b,t)=>{a.InternalTopics.spfxWebPartSettingTopic(e).publish({action:a.SpfxSettingsActionType.Get,callBack:b})})),this.canSetValue=e=>new Promise(((e,b)=>{})),this.setValue=(e,b)=>new Promise(((t,r)=>{a.InternalTopics.spfxWebPartSettingTopic(e).publish({action:a.SpfxSettingsActionType.Set,callBack:t,value:b})})),this.ensureMigration=(e,b,t,a)=>new Promise(((e,b)=>{e(!0)}))}};o=((e,b,t,a)=>{for(var r,i=a>1?void 0:a?s(b,t):b,o=e.length-1;o>=0;o--)(r=e[o])&&(i=(a?r(b,t,i):r(i))||i);return a&&i&&n(b,t,i),i})([(0,r.Injectable)({lifetime:i.InstanceLifetimes.Transient})],o)},"14a8d443-2e58-450b-a462-258bdaf69b49":(e,b,t)=>{e.exports=t("dll-reference md10")("14a8d443-2e58-450b-a462-258bdaf69b49")},"97786ea9-4861-48bd-8a57-eae9bbdb4892":(e,b,t)=>{e.exports=t("dll-reference md9")("97786ea9-4861-48bd-8a57-eae9bbdb4892")},"d0a145a7-d1ef-4217-aa6f-85dd18c4231d":(e,b,t)=>{e.exports=t("dll-reference md9")("d0a145a7-d1ef-4217-aa6f-85dd18c4231d")},"dll-reference md9":e=>{"use strict";e.exports=omniaWebpackJsonp["bb000000-0000-bbbb-0000-0000000000bb"]["a2892051-fd9f-4056-ae8d-30d16d48417d"]},"dll-reference md10":e=>{"use strict";e.exports=omniaWebpackJsonp["bb000000-0000-bbbb-0000-0000000000bb"]["a5a89056-b5f5-475d-8518-a1f55090379d"]}};if("undefined"==typeof omniaWebpackJsonp&&(globalThis.omniaWebpackJsonp={}),globalThis.omniaWebpackJsonp["bb000000-0000-bbbb-0000-0000000000bb"]=globalThis.omniaWebpackJsonp["bb000000-0000-bbbb-0000-0000000000bb"]||{},globalThis.omniaWebpackJsonp["bb000000-0000-bbbb-0000-0000000000bb"]["e76db000-51de-47b5-b603-d62b59cacf4e"])throw new Error("Error, already loaded manifest e76db000-51de-47b5-b603-d62b59cacf4e with service id bb000000-0000-bbbb-0000-0000000000bb");globalThis.omniaWebpackJsonp["bb000000-0000-bbbb-0000-0000000000bb"]["e76db000-51de-47b5-b603-d62b59cacf4e"]=t;var b={};function t(a){var r=b[a];if(void 0!==r)return r.exports;var i=b[a]={exports:{}};return e[a](i,i.exports,t),i.exports}t.d=(e,b)=>{for(var a in b)t.o(b,a)&&!t.o(e,a)&&Object.defineProperty(e,a,{enumerable:!0,get:b[a]})},t.o=(e,b)=>Object.prototype.hasOwnProperty.call(e,b),t.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},t("./client/fx/spfx/models/index.js"),t("ca7d3d00-4da5-41c8-8417-17d94d818927cls"),t("./client/fx/spfx/messagebus/internal/internaltopics.js");t("./client/fx/spfx/services/spfxwpsettingprovider.js")})()};