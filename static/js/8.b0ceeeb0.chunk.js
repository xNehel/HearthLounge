webpackJsonp([8],{1817:function(e,n,t){"use strict";function r(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}function o(e,n){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!n||"object"!==typeof n&&"function"!==typeof n?e:n}function s(e,n){if("function"!==typeof n&&null!==n)throw new TypeError("Super expression must either be null or a function, not "+typeof n);e.prototype=Object.create(n&&n.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),n&&(Object.setPrototypeOf?Object.setPrototypeOf(e,n):e.__proto__=n)}Object.defineProperty(n,"__esModule",{value:!0});var l=t(0),i=t.n(l),a=t(10),A=t(12),c=t(31),u=t(23),p=t(582),C=t(1884),f=(t.n(C),function(){function e(e,n){for(var t=0;t<n.length;t++){var r=n[t];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(n,t,r){return t&&e(n.prototype,t),r&&e(n,r),n}}()),x=function(e){function n(){var e,t,s,l;r(this,n);for(var a=arguments.length,c=Array(a),C=0;C<a;C++)c[C]=arguments[C];return t=s=o(this,(e=n.__proto__||Object.getPrototypeOf(n)).call.apply(e,[this].concat(c))),s.mapExtensions=function(e){return e.slice(4).map(function(e,n){var t=Object(p.a)(e);return i.a.createElement("li",{key:e,id:t,className:t,"data-extensiontype":n<4?"adventures":"expansions"},i.a.createElement(u.a,{to:"/extensions/"+t+"/overview",className:t},i.a.createElement(A.a,{name:t,className:t,type:"set"}),i.a.createElement("p",null,e)))})},l=t,o(s,l)}return s(n,e),f(n,[{key:"render",value:function(){var e=this.props.info,n=e.loading,t=JSON.parse(localStorage.hearthloungeGameInfo).wild;return i.a.createElement("div",{className:"container__page container__page--oneSided extensions-selection extensions"},i.a.createElement("h3",null,"Select Extension"),n&&!t&&i.a.createElement(c.a,null),(!n&&e.wild&&!t||t)&&i.a.createElement("ul",null,this.mapExtensions(e.wild||t)),!n&&!e.wild&&!t&&i.a.createElement("div",null,"Could't load extensions. Try again later."))}}]),n}(l.Component),m=function(e){return{info:e.info}};n.default=Object(a.b)(m)(x)},1884:function(e,n,t){var r=t(1885);"string"===typeof r&&(r=[[e.i,r,""]]);var o={hmr:!1};o.transform=void 0;t(1812)(r,o);r.locals&&(e.exports=r.locals)},1885:function(e,n,t){n=e.exports=t(1811)(!0),n.push([e.i,'.extensions-selection{background:#474143;margin:0 1vh;display:grid;grid-template-rows:5.5vh calc(100% - 5.5vh);grid-template-columns:100%;-ms-flex-align:center;align-items:center;justify-items:center}.extensions-selection h3{color:#e7e2da;position:relative}.extensions-selection h3:after{content:"";position:absolute;bottom:-5px;left:-30%;height:1px;width:150%;background-color:#e7e2da}.extensions-selection ul{display:-ms-flexbox;display:flex;-ms-flex-wrap:wrap;flex-wrap:wrap;height:calc(100% - 2vh);margin:1vh;overflow:auto;-ms-flex-pack:space-evenly;justify-content:space-evenly;-ms-flex-line-pack:space-evenly;align-content:space-evenly}.extensions-selection ul::-webkit-scrollbar{width:8px}.extensions-selection ul::-webkit-scrollbar-thumb{background-color:hsla(37,21%,88%,.2);border-radius:4px}.extensions-selection ul::-webkit-scrollbar-thumb:hover{background-color:#e7e2da}.extensions-selection ul::-webkit-scrollbar-track{background-color:transparent}.extensions-selection ul li{margin:20px;-webkit-transition:all .4s ease;-o-transition:all ease .4s;transition:all .4s ease}.extensions-selection ul li a{width:100%;height:100%;display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column;-ms-flex-align:center;align-items:center;padding:1vh}.extensions-selection ul li a span{padding:10px;font-size:3em}.extensions-selection ul li:hover a p,.extensions-selection ul li:hover a span{color:#474143}',"",{version:3,sources:["C:/Users/Sebastian/webstormprojects/hearthlounge/src/containers/pages/extensions/styles/styles.css"],names:[],mappings:"AAAA,sBACE,mBAAoB,AACpB,aAAc,AACd,aAAc,AACd,4CAA6C,AAC7C,2BAA4B,AAC5B,sBAAuB,AACnB,mBAAoB,AACxB,oBAAsB,CAAE,AACxB,yBACE,cAAe,AACf,iBAAmB,CAAE,AACrB,+BACE,WAAY,AACZ,kBAAmB,AACnB,YAAa,AACb,UAAW,AACX,WAAY,AACZ,WAAY,AACZ,wBAA0B,CAAE,AAChC,yBACE,oBAAqB,AACrB,aAAc,AACd,mBAAoB,AAChB,eAAgB,AACpB,wBAAyB,AACzB,WAAY,AACZ,cAAe,AACf,2BAA4B,AACxB,6BAA8B,AAClC,gCAAiC,AAC7B,0BAA4B,CAAE,AAClC,4CACE,SAAW,CAAE,AACf,kDACE,qCAA2C,AAC3C,iBAAmB,CAAE,AACvB,wDACE,wBAA0B,CAAE,AAC9B,kDACE,4BAA8B,CAAE,AAClC,4BACE,YAAa,AACb,gCAAkC,AAClC,2BAA6B,AAC7B,uBAA0B,CAAE,AAC5B,8BACE,WAAY,AACZ,YAAa,AACb,oBAAqB,AACrB,aAAc,AACd,0BAA2B,AACvB,sBAAuB,AAC3B,sBAAuB,AACnB,mBAAoB,AACxB,WAAa,CAAE,AACf,mCACE,aAAc,AACd,aAAe,CAAE,AAGrB,+EACE,aAAe,CAAE",file:"styles.css",sourcesContent:['.extensions-selection {\r\n  background: #474143;\r\n  margin: 0 1vh;\r\n  display: grid;\r\n  grid-template-rows: 5.5vh calc(100% - 5.5vh);\r\n  grid-template-columns: 100%;\r\n  -ms-flex-align: center;\r\n      align-items: center;\r\n  justify-items: center; }\r\n  .extensions-selection h3 {\r\n    color: #E7E2DA;\r\n    position: relative; }\r\n    .extensions-selection h3:after {\r\n      content: "";\r\n      position: absolute;\r\n      bottom: -5px;\r\n      left: -30%;\r\n      height: 1px;\r\n      width: 150%;\r\n      background-color: #E7E2DA; }\r\n  .extensions-selection ul {\r\n    display: -ms-flexbox;\r\n    display: flex;\r\n    -ms-flex-wrap: wrap;\r\n        flex-wrap: wrap;\r\n    height: calc(100% - 2vh);\r\n    margin: 1vh;\r\n    overflow: auto;\r\n    -ms-flex-pack: space-evenly;\r\n        justify-content: space-evenly;\r\n    -ms-flex-line-pack: space-evenly;\r\n        align-content: space-evenly; }\r\n    .extensions-selection ul::-webkit-scrollbar {\r\n      width: 8px; }\r\n    .extensions-selection ul::-webkit-scrollbar-thumb {\r\n      background-color: rgba(231, 226, 218, 0.2);\r\n      border-radius: 4px; }\r\n    .extensions-selection ul::-webkit-scrollbar-thumb:hover {\r\n      background-color: #E7E2DA; }\r\n    .extensions-selection ul::-webkit-scrollbar-track {\r\n      background-color: transparent; }\r\n    .extensions-selection ul li {\r\n      margin: 20px;\r\n      -webkit-transition: all ease 0.4s;\r\n      -o-transition: all ease 0.4s;\r\n      transition: all ease 0.4s; }\r\n      .extensions-selection ul li a {\r\n        width: 100%;\r\n        height: 100%;\r\n        display: -ms-flexbox;\r\n        display: flex;\r\n        -ms-flex-direction: column;\r\n            flex-direction: column;\r\n        -ms-flex-align: center;\r\n            align-items: center;\r\n        padding: 1vh; }\r\n        .extensions-selection ul li a span {\r\n          padding: 10px;\r\n          font-size: 3em; }\r\n      .extensions-selection ul li:hover a span {\r\n        color: #474143; }\r\n      .extensions-selection ul li:hover a p {\r\n        color: #474143; }\r\n'],sourceRoot:""}])}});
//# sourceMappingURL=8.b0ceeeb0.chunk.js.map