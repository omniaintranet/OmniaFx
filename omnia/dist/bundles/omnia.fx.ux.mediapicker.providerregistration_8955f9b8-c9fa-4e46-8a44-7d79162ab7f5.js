if("undefined"==typeof omniaLoader&&(globalThis.omniaLoader={}),omniaLoader["bb000000-0000-bbbb-0000-0000000000bb"]=omniaLoader["bb000000-0000-bbbb-0000-0000000000bb"]||{},omniaLoader["bb000000-0000-bbbb-0000-0000000000bb"]["8955f9b8-c9fa-4e46-8a44-7d79162ab7f5"])throw new Error("Error, already loaded manifest 8955f9b8-c9fa-4e46-8a44-7d79162ab7f5 with service id bb000000-0000-bbbb-0000-0000000000bb");omniaLoader["bb000000-0000-bbbb-0000-0000000000bb"]["8955f9b8-c9fa-4e46-8a44-7d79162ab7f5"]=function(){(()=>{var e={"./client/fx/ux/mediapickerproviders/apis/registration.js":(e,r,a)=>{"use strict";a.r(r);var b=a("97786ea9-4861-48bd-8a57-eae9bbdb4892"),i=a("d0a145a7-d1ef-4217-aa6f-85dd18c4231d"),d=a("5326a8ef-4e3c-49d6-b415-1ddf7fdcc830"),t=a("5e618f4d-d014-414e-a681-89e34cbeda0f");const o=b.ServiceContainer.createInstance(d.OmniaContext),s=b.ServiceContainer.createInstance(t.FeatureStore),n=b.ServiceContainer.createInstance(t.MediaPickerStore);class c{constructor(){if(this.providers=[],s.getters.isAnyFeaturesActivated(["fe272e4d-d4f9-4c95-8c70-9621d8b30a2b"])&&this.registerProviders(new i.MediaPickerBingProvider),s.getters.isAnyFeaturesActivated(["cf268acf-a37a-421c-8a21-01546ac67ff6"])&&this.registerProviders(new i.MediaPickerPexelProvider),s.getters.isAnyFeaturesActivated(["395b4841-c627-413d-ac95-8bdf1c7af9ef"])){const e=new i.MediaPickerMyComputerProvider;this.registerProviders(e),n.mutations.registerMediaPickerConfigurationHook.commit((r=>{const a=r.findIndex((r=>r.id==e.id));if(a>0){const e=r.splice(a,1)[0];r.unshift(e)}return r}))}if(s.getters.isAnyFeaturesActivated(["295068f7-9025-4a63-93a1-b4bd305c9ca9"])&&this.registerProviders(new i.MediaPickerYoutubeProvider),s.getters.isAnyFeaturesActivated(["1b1455f1-4e1c-4dea-a6da-8d2274aa4a2d"])&&this.registerProviders(new i.MediaPickerMicrosoftStreamProvider),o.businessProfile){const e=o.businessProfile.propertyBag.getModel(i.BusinessProfileMediaPicker);e&&e.centralImageLocationSettings&&e.centralImageLocationSettings.forEach((e=>{this.registerProviders([new i.MediaPickerCentralImageLocationProvider(e,e.title)])}))}}getAllProviders(){return this.providers}registerProviders(e){b.Utils.isArray(e)?this.providers=this.providers.concat(e):this.providers.push(e)}}(0,b.registerApi)((e=>e.fx.ux.mediaPicker.registration),(e=>e(new c)))},"5326a8ef-4e3c-49d6-b415-1ddf7fdcc830":(e,r,a)=>{e.exports=a("dll-reference md8")("5326a8ef-4e3c-49d6-b415-1ddf7fdcc830")},"5e618f4d-d014-414e-a681-89e34cbeda0f":(e,r,a)=>{e.exports=a("dll-reference md10")("5e618f4d-d014-414e-a681-89e34cbeda0f")},"97786ea9-4861-48bd-8a57-eae9bbdb4892":(e,r,a)=>{e.exports=a("dll-reference md9")("97786ea9-4861-48bd-8a57-eae9bbdb4892")},"d0a145a7-d1ef-4217-aa6f-85dd18c4231d":(e,r,a)=>{e.exports=a("dll-reference md9")("d0a145a7-d1ef-4217-aa6f-85dd18c4231d")},"dll-reference md8":e=>{"use strict";e.exports=omniaWebpackJsonp["bb000000-0000-bbbb-0000-0000000000bb"]["a1602121-3070-4304-b4d8-0859e50c482b"]},"dll-reference md9":e=>{"use strict";e.exports=omniaWebpackJsonp["bb000000-0000-bbbb-0000-0000000000bb"]["a2892051-fd9f-4056-ae8d-30d16d48417d"]},"dll-reference md10":e=>{"use strict";e.exports=omniaWebpackJsonp["bb000000-0000-bbbb-0000-0000000000bb"]["a5a89056-b5f5-475d-8518-a1f55090379d"]}};if("undefined"==typeof omniaWebpackJsonp&&(globalThis.omniaWebpackJsonp={}),globalThis.omniaWebpackJsonp["bb000000-0000-bbbb-0000-0000000000bb"]=globalThis.omniaWebpackJsonp["bb000000-0000-bbbb-0000-0000000000bb"]||{},globalThis.omniaWebpackJsonp["bb000000-0000-bbbb-0000-0000000000bb"]["8955f9b8-c9fa-4e46-8a44-7d79162ab7f5"])throw new Error("Error, already loaded manifest 8955f9b8-c9fa-4e46-8a44-7d79162ab7f5 with service id bb000000-0000-bbbb-0000-0000000000bb");globalThis.omniaWebpackJsonp["bb000000-0000-bbbb-0000-0000000000bb"]["8955f9b8-c9fa-4e46-8a44-7d79162ab7f5"]=a;var r={};function a(b){var i=r[b];if(void 0!==i)return i.exports;var d=r[b]={exports:{}};return e[b](d,d.exports,a),d.exports}a.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})};a("./client/fx/ux/mediapickerproviders/apis/registration.js")})()};