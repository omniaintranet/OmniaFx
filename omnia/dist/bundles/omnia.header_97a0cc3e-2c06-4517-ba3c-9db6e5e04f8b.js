if("undefined"==typeof omniaLoader&&(globalThis.omniaLoader={}),omniaLoader["bb000000-0000-bbbb-0000-0000000000bb"]=omniaLoader["bb000000-0000-bbbb-0000-0000000000bb"]||{},omniaLoader["bb000000-0000-bbbb-0000-0000000000bb"]["97a0cc3e-2c06-4517-ba3c-9db6e5e04f8b"])throw new Error("Error, already loaded manifest 97a0cc3e-2c06-4517-ba3c-9db6e5e04f8b with service id bb000000-0000-bbbb-0000-0000000000bb");omniaLoader["bb000000-0000-bbbb-0000-0000000000bb"]["97a0cc3e-2c06-4517-ba3c-9db6e5e04f8b"]=function(){(()=>{var e={"./client/public/header/header.tsx":(e,b,o)=>{"use strict";o.r(b),o.d(b,{HeaderComponent:()=>m});var t=o("./node_modules/vue-class-component/dist/vue-class-component.esm.js"),r=o("./node_modules/@vue/composition-api/dist/vue-composition-api.mjs"),n=o("14a8d443-2e58-450b-a462-258bdaf69b49").setCurrentManifest("bb000000-0000-bbbb-0000-0000000000bb","97a0cc3e-2c06-4517-ba3c-9db6e5e04f8b"),a=o("d0a145a7-d1ef-4217-aa6f-85dd18c4231d"),s=o("d7327742-5647-4075-b7ab-4f9ca852addb").setCurrentManifest("bb000000-0000-bbbb-0000-0000000000bb","97a0cc3e-2c06-4517-ba3c-9db6e5e04f8b"),d=Object.defineProperty,i=Object.getOwnPropertyDescriptor,c=(e,b,o,t)=>{for(var r,n=t>1?void 0:t?i(b,o):b,a=e.length-1;a>=0;a--)(r=e[a])&&(n=(t?r(b,o,n):r(n))||n);return t&&n&&d(b,o,n),n};let m=class extends s.VueComponentBase{constructor(){super(...arguments),this.registeredComponents=[]}created(){this.subscriptionHandler.add(n.Topics.registerHeaderPlaceHolder.subscribe(this.subcribeRegisterToHeader))}beforeDestroy(){if(!this.omniaCtx.environment.isOmniaApp){let e=0;const b=()=>{setTimeout((()=>{const o=document.querySelector("#"+a.Constants.ux.html.selectors.omniaHeader);o?o.appendChild(document.createElement(a.Constants.ux.html.selectors.omniaHeader)):(e++,e<20&&b())}),100)};b()}}mounted(){n.WebComponentBootstrapper.registerElementInstance(this,this.$el)}subcribeRegisterToHeader(e){void 0===this.registeredComponents.find((b=>b.elementToRender===e.elementToRender))&&(this.registeredComponents.push(e),this.registeredComponents.sort(((e,b)=>e.weight-b.weight)))}renderElementTag(e){return(0,r.h)(e)}render(){return(0,r.h)("div",[this.registeredComponents.map((e=>this.renderElementTag(e.elementToRender)))])}};c([(0,n.Inject)(n.OmniaContext)],m.prototype,"omniaCtx",2),c([(0,n.Inject)(n.SubscriptionHandler)],m.prototype,"subscriptionHandler",2),m=c([t.default],m),n.WebComponentBootstrapper.registerElement((e=>{n.DisplayRules.IsPreviewMode()||document.querySelector("#"+a.Constants.ux.html.selectors.omniaHeader).appendChild(document.createElement(e.elementName)),(0,n.vueCustomElement)(e.elementName,m)}))},"./node_modules/@vue/composition-api/dist/vue-composition-api.mjs":(e,b,o)=>{e.exports=o("dll-reference md2")("./node_modules/@vue/composition-api/dist/vue-composition-api.mjs")},"./node_modules/vue-class-component/dist/vue-class-component.esm.js":(e,b,o)=>{e.exports=o("dll-reference md2")("./node_modules/vue-class-component/dist/vue-class-component.esm.js")},"14a8d443-2e58-450b-a462-258bdaf69b49":(e,b,o)=>{e.exports=o("dll-reference md10")("14a8d443-2e58-450b-a462-258bdaf69b49")},"d0a145a7-d1ef-4217-aa6f-85dd18c4231d":(e,b,o)=>{e.exports=o("dll-reference md9")("d0a145a7-d1ef-4217-aa6f-85dd18c4231d")},"d7327742-5647-4075-b7ab-4f9ca852addb":(e,b,o)=>{e.exports=o("dll-reference md66")("d7327742-5647-4075-b7ab-4f9ca852addb")},"dll-reference md2":e=>{"use strict";e.exports=omniaVendor},"dll-reference md9":e=>{"use strict";e.exports=omniaWebpackJsonp["bb000000-0000-bbbb-0000-0000000000bb"]["a2892051-fd9f-4056-ae8d-30d16d48417d"]},"dll-reference md10":e=>{"use strict";e.exports=omniaWebpackJsonp["bb000000-0000-bbbb-0000-0000000000bb"]["a5a89056-b5f5-475d-8518-a1f55090379d"]},"dll-reference md66":e=>{"use strict";e.exports=omniaWebpackJsonp["bb000000-0000-bbbb-0000-0000000000bb"]["dee030cc-4ab3-4158-bb06-8049f5c67542"]}};if("undefined"==typeof omniaWebpackJsonp&&(globalThis.omniaWebpackJsonp={}),globalThis.omniaWebpackJsonp["bb000000-0000-bbbb-0000-0000000000bb"]=globalThis.omniaWebpackJsonp["bb000000-0000-bbbb-0000-0000000000bb"]||{},globalThis.omniaWebpackJsonp["bb000000-0000-bbbb-0000-0000000000bb"]["97a0cc3e-2c06-4517-ba3c-9db6e5e04f8b"])throw new Error("Error, already loaded manifest 97a0cc3e-2c06-4517-ba3c-9db6e5e04f8b with service id bb000000-0000-bbbb-0000-0000000000bb");globalThis.omniaWebpackJsonp["bb000000-0000-bbbb-0000-0000000000bb"]["97a0cc3e-2c06-4517-ba3c-9db6e5e04f8b"]=o;var b={};function o(t){var r=b[t];if(void 0!==r)return r.exports;var n=b[t]={exports:{}};return e[t](n,n.exports,o),n.exports}o.d=(e,b)=>{for(var t in b)o.o(b,t)&&!o.o(e,t)&&Object.defineProperty(e,t,{enumerable:!0,get:b[t]})},o.o=(e,b)=>Object.prototype.hasOwnProperty.call(e,b),o.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})};o("./client/public/header/header.tsx")})()};