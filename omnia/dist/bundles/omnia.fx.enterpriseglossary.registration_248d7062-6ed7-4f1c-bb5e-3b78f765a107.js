if("undefined"==typeof omniaLoader&&(globalThis.omniaLoader={}),omniaLoader["bb000000-0000-bbbb-0000-0000000000bb"]=omniaLoader["bb000000-0000-bbbb-0000-0000000000bb"]||{},omniaLoader["bb000000-0000-bbbb-0000-0000000000bb"]["248d7062-6ed7-4f1c-bb5e-3b78f765a107"])throw new Error("Error, already loaded manifest 248d7062-6ed7-4f1c-bb5e-3b78f765a107 with service id bb000000-0000-bbbb-0000-0000000000bb");omniaLoader["bb000000-0000-bbbb-0000-0000000000bb"]["248d7062-6ed7-4f1c-bb5e-3b78f765a107"]=function(){(()=>{var e={"./client/fx/apis/enterpriseglossaryapi.js":(e,r,b)=>{"use strict";b.r(r);var o=b("14a8d443-2e58-450b-a462-258bdaf69b49").setCurrentManifest("bb000000-0000-bbbb-0000-0000000000bb","248d7062-6ed7-4f1c-bb5e-3b78f765a107"),a=b("97786ea9-4861-48bd-8a57-eae9bbdb4892"),i=b("d0a145a7-d1ef-4217-aa6f-85dd18c4231d");class s{constructor(){this.providers=[]}registerEnterpriseGlossaryProvider(e){this.providers=Array.from(new Set(this.providers).add(e))}getEnterpriseGlossaryProviders(){return this.providers}}class d{constructor(){this._resolveProviders={}}registerInformationProvider(e){if(!(0,a.isInjectable)(e.provider))throw`Enterprise Glossary Provider > The @Injectable attribute is required but seems to be missing on the following type ${e.provider}`;const r=e.typeId.toString();this._resolveProviders[r]||(this._resolveProviders[r]=new i.Future(null)),this._resolveProviders[r].resolve(e.provider)}getInformationProvider(e){return this._resolveProviders[e.toString()]||(this._resolveProviders[e.toString()]=new i.Future(null),o.ApiHelper.loadExtendApiManifest((e=>e.fx.enterpriseGlossary.providers),(r=>r.find((r=>r.configuration===e))?.manifest))),this._resolveProviders[e.toString()]}}(0,a.registerApi)((e=>e.fx.enterpriseGlossary.registrations),(e=>e(new s))),(0,a.registerApi)((e=>e.fx.enterpriseGlossary.providers),(e=>e(new d)))},"14a8d443-2e58-450b-a462-258bdaf69b49":(e,r,b)=>{e.exports=b("dll-reference md10")("14a8d443-2e58-450b-a462-258bdaf69b49")},"97786ea9-4861-48bd-8a57-eae9bbdb4892":(e,r,b)=>{e.exports=b("dll-reference md9")("97786ea9-4861-48bd-8a57-eae9bbdb4892")},"d0a145a7-d1ef-4217-aa6f-85dd18c4231d":(e,r,b)=>{e.exports=b("dll-reference md9")("d0a145a7-d1ef-4217-aa6f-85dd18c4231d")},"dll-reference md9":e=>{"use strict";e.exports=omniaWebpackJsonp["bb000000-0000-bbbb-0000-0000000000bb"]["a2892051-fd9f-4056-ae8d-30d16d48417d"]},"dll-reference md10":e=>{"use strict";e.exports=omniaWebpackJsonp["bb000000-0000-bbbb-0000-0000000000bb"]["a5a89056-b5f5-475d-8518-a1f55090379d"]}};if("undefined"==typeof omniaWebpackJsonp&&(globalThis.omniaWebpackJsonp={}),globalThis.omniaWebpackJsonp["bb000000-0000-bbbb-0000-0000000000bb"]=globalThis.omniaWebpackJsonp["bb000000-0000-bbbb-0000-0000000000bb"]||{},globalThis.omniaWebpackJsonp["bb000000-0000-bbbb-0000-0000000000bb"]["248d7062-6ed7-4f1c-bb5e-3b78f765a107"])throw new Error("Error, already loaded manifest 248d7062-6ed7-4f1c-bb5e-3b78f765a107 with service id bb000000-0000-bbbb-0000-0000000000bb");globalThis.omniaWebpackJsonp["bb000000-0000-bbbb-0000-0000000000bb"]["248d7062-6ed7-4f1c-bb5e-3b78f765a107"]=b;var r={};function b(o){var a=r[o];if(void 0!==a)return a.exports;var i=r[o]={exports:{}};return e[o](i,i.exports,b),i.exports}b.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})};b("./client/fx/apis/enterpriseglossaryapi.js")})()};