webpackJsonp([2],{1820:function(e,t,n){"use strict";function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!==typeof t&&"function"!==typeof t?e:t}function o(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var i=n(0),s=n.n(i),c=n(10),l=n(580),u=n(23),p=n(1911),f=n(1913),m=n(1926),A=n(1930),d=(n.n(A),n(1932)),b=(n.n(d),function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}()),h=function(e){function t(){return r(this,t),a(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return o(t,e),b(t,[{key:"componentWillUnmount",value:function(){(0,this.props.updateFormProperty)({signIn_password:"",signUp_firstStep:"",signUp_secondStep:"",signUp_confirmEmail:"",signUp_password:"",signUp_confirmPassword:"",signUp_avatar:"",tos:!1})}},{key:"render",value:function(){var e=this.props.windowWidth;return s.a.createElement("div",{className:"container__page container__page--oneSided entry "+(e<=1365?"mobile":void 0)},s.a.createElement("div",{className:"wrapper"},s.a.createElement(p.a,null),s.a.createElement("div",{className:"breakline v-breakline"}),s.a.createElement("div",{className:"container__page--inner container__page--right"},s.a.createElement("div",{className:"topbar"},s.a.createElement(u.b,{to:"/sign-in",activeClassName:"active"},s.a.createElement("p",null,"Sign In")),s.a.createElement(u.b,{to:"/sign-up",activeClassName:"active"},s.a.createElement("p",null,"Sign Up"))),s.a.createElement(l.b,null,s.a.createElement(l.a,{path:"/sign-in",component:m.a}),s.a.createElement(l.a,{path:"/sign-up",component:f.a})))))}}]),t}(i.PureComponent),y=function(e){return{windowWidth:e.app.windowSize.windowWidth}},g=function(e){return{updateFormProperty:function(t){return e({type:"EDIT_FORM_PROPERTY",props:t})}}};t.default=Object(c.b)(y,g)(h)},1836:function(e,t,n){"use strict";n.d(t,"a",function(){return r});var r=[{text:"Create your own decks and share with HearthLounge community!",icon:"create-deck",dot:"\u25c8"},{text:"Participate in the forum discussion!",icon:"bubbles2",dot:"\u25c8"},{text:"Struggling in Arena? Check our Arena Helper/Picker",icon:"arena-picker",dot:"\u25c8"},{text:"Check one of our Adventure guides or write your own!",icon:"adventures",dot:"\u25c8"}]},1837:function(e,t,n){"use strict";var r=n(0),a=n.n(r),o=n(13),i=n.n(o),s=n(27),c=n.n(s),l=n(1915),u=n(1917),p=(n.n(u),function(e){var t=e.id,n=e.type,r=e.placeholder,o=e.handleInputChange,s=e.value,u=e.pattern,p=e.error,f=e.siblingValue,m=i.a.startCase(i.a.trimStart(t,"signUp")),A=!i.a.isEmpty(f)&&!i.a.isEmpty(s)&&f===s;return a.a.createElement("div",{className:"input-wrapper"},a.a.createElement("label",{htmlFor:t},m,":",a.a.createElement("div",{className:"input-wrapper"},a.a.createElement(c.a,{overlayClassName:"form-tooltip "+(A?"display-none":void 0),title:function(){return p||(f&&f.length===s.length&&f!==s?i.a.startCase(n)+"s don't match!":a.a.createElement(l.a,{id:t,label:m}))}(),placement:"right",trigger:"focus"},a.a.createElement("input",{id:t,type:n,placeholder:r||null,onChange:function(e){return o(e)},className:function(){if(f)if(f){if(f.length===s.length)return f!==s?"siblings-not-matched":"siblings-matched"}else;}(),value:s,pattern:u})))))});t.a=p},1911:function(e,t,n){"use strict";function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!==typeof t&&"function"!==typeof t?e:t}function o(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}n.d(t,"a",function(){return p});var i=n(0),s=n.n(i),c=n(1912),l=n(1836),u=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),p=function(e){function t(e){r(this,t);var n=a(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n.state={current_dot:0},n}return o(t,e),u(t,[{key:"handleCurrentDotChange",value:function(e){this.setState({current_dot:e})}},{key:"dots",value:function(){var e=this;return s.a.createElement("ul",null,l.a.map(function(t,n){return s.a.createElement("li",{key:n,className:e.state.current_dot===n?"active":n},t.dot)}))}},{key:"render",value:function(){return s.a.createElement("div",{className:"container__page--inner container__page--left"},s.a.createElement("div",{className:"topbar"},this.dots()),s.a.createElement(c.a,{handleCurrentDotChange:this.handleCurrentDotChange.bind(this)}))}}]),t}(i.Component)},1912:function(e,t,n){"use strict";function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!==typeof t&&"function"!==typeof t?e:t}function o(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}n.d(t,"a",function(){return p});var i=n(0),s=n.n(i),c=n(1836),l=n(12),u=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),p=function(e){function t(e){r(this,t);var n=a(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n.state={},n}return o(t,e),u(t,[{key:"componentDidMount",value:function(){function e(e){t[r].className="slide",r=(r+1)%t.length,e(r),t[r].className="slide active"}var t=document.querySelectorAll(".slides .slide"),n=this.props.handleCurrentDotChange,r=0;t[0].className="slide active";var a=setInterval(function(){return e(n)},5e3);this.setState({interval:a})}},{key:"componentWillUnmount",value:function(){clearInterval(this.state.interval)}},{key:"render",value:function(){return s.a.createElement("div",{className:"carousel"},s.a.createElement("ul",{className:"slides"},c.a.map(function(e,t){return s.a.createElement("li",{className:"slide",key:t},s.a.createElement("p",null,e.text),s.a.createElement(l.a,{name:e.icon}))})))}}]),t}(i.Component)},1913:function(e,t,n){"use strict";function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!==typeof t&&"function"!==typeof t?e:t}function i(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var s=n(0),c=n.n(s),l=n(10),u=n(13),p=n.n(u),f=n(580),m=n(1914),A=n(1921),d=n(292),b=n(1922),h=n(1925),y=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),g=p.a.debounce(function(e,t){Object(d.c)(e,function(e){return t(e)})},500),v=function(e){function t(){var e,n,i,s;a(this,t);for(var c=arguments.length,l=Array(c),u=0;u<c;u++)l[u]=arguments[u];return n=i=o(this,(e=t.__proto__||Object.getPrototypeOf(t)).call.apply(e,[this].concat(l))),i.handleInputChange=function(e){var t=i.props,n=t.updateFormProperty,a=t.updateUsernameExistStatus,o=e.target,s=o.id,c=o.value;n(r({},s,c)),"signUp_username"===s&&g(c,a)},s=n,o(i,s)}return i(t,e),y(t,[{key:"render",value:function(){var e=this,t=this.props,n=t.signUp_firstStep,r=t.signUp_secondStep;return c.a.createElement("div",{className:"sign sign-up active"},c.a.createElement(A.a,{signUp_firstStep:n,signUp_secondStep:r}),c.a.createElement(f.b,null,c.a.createElement(f.a,{exact:!0,path:"/sign-up",render:function(){return c.a.createElement(m.a,{handleInputChange:e.handleInputChange})}}),c.a.createElement(f.a,{exact:!0,path:"/sign-up/update-profile",render:function(){return c.a.createElement(b.a,{handleInputChange:e.handleInputChange})}}),c.a.createElement(f.a,{exact:!0,path:"/sign-up/update-profile/complete",component:h.a})))}}]),t}(s.Component),E=function(e){var t=e.entry;return{signUp_firstStep:t.signUp_firstStep,signUp_secondStep:t.signUp_secondStep}},C=function(e){return{updateFormProperty:function(t){return e({type:"EDIT_FORM_PROPERTY",props:t})},updateUsernameExistStatus:function(t){return e({type:"UPDATE_USERNAME_EXIST_STATUS",usernameFree:t})}}};t.a=Object(l.b)(E,C)(v)},1914:function(e,t,n){"use strict";function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!==typeof t&&"function"!==typeof t?e:t}function o(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var i=n(0),s=n.n(i),c=n(10),l=n(13),u=n.n(l),p=n(23),f=n(1837),m=n(49),A=n(1919),d=n(29),b=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),h=function(e){function t(){var e,n,o,i;r(this,t);for(var s=arguments.length,c=Array(s),l=0;l<s;l++)c[l]=arguments[l];return n=o=a(this,(e=t.__proto__||Object.getPrototypeOf(t)).call.apply(e,[this].concat(c))),o.handleCheckboxClick=function(e){(0,o.props.updateFormProperty)({tos:e.target.checked})},o.validate=function(){var e=o.props,t=e.entry,n=e.updateSignUpStatus,r=e.updateActiveUser,a=t.signUp_email,i=t.signUp_password,s=t.signUp_confirmEmail,c=t.signUp_confirmPassword,l=t.tos;!u.a.isEmpty(a)&&i.length>=8&&l?Object(A.a)(a,i,n,r):((u.a.isEmpty(a)||u.a.isEmpty(i))&&Object(d.a)("Email and password can't be empty"),a!==s&&Object(d.a)("Email and Confirm Email must match"),i!==c&&Object(d.a)("Password and Confirm Password must match"),l||Object(d.a)("You have to agree to Terms of Service"))},o.handleFormSubmit=function(e){e.preventDefault(),o.validate()},i=n,a(o,i)}return o(t,e),b(t,[{key:"componentDidMount",value:function(){document.title="Sign Up"}},{key:"componentWillUnmount",value:function(){this.props.updateFormProperty({signUp_password:"",signUp_confirmPassword:""})}},{key:"render",value:function(){var e=this.props,t=e.entry,n=e.handleInputChange,r=t.signUp_email,a=t.signUp_confirmEmail,o=t.signUp_password,i=t.signUp_confirmPassword,c=t.tos;return s.a.createElement("form",{onSubmit:this.handleFormSubmit},s.a.createElement(f.a,{id:"signUp_email",type:"email",placeholder:"hearth@lounge.com",handleInputChange:n,siblingValue:a,value:r}),s.a.createElement(f.a,{id:"signUp_confirmEmail",type:"email",placeholder:"hearth@lounge.com",handleInputChange:n,siblingValue:r,value:a}),s.a.createElement(f.a,{id:"signUp_password",type:"password",handleInputChange:n,siblingValue:i,value:o}),s.a.createElement(f.a,{id:"signUp_confirmPassword",type:"password",handleInputChange:n,siblingValue:o,value:i}),s.a.createElement("div",{className:"input-wrapper"},s.a.createElement("div",{className:"tos"},s.a.createElement("input",{onChange:this.handleCheckboxClick,id:"tos",checked:c,type:"checkbox"}),s.a.createElement("label",{htmlFor:"tos"},"I agree to the ",s.a.createElement(p.a,{to:"terms-of-service"},"terms of service")))),s.a.createElement("div",{className:"button-wrapper"},s.a.createElement(m.a,{text:"Submit",type:"submit--light",requiresAuth:!1}),s.a.createElement(p.a,{to:"/sign-up/update-profile"},"redirect")))}}]),t}(i.Component),y=function(e){return{entry:e.entry}},g=function(e){return{updateFormProperty:function(t){return e({type:"EDIT_FORM_PROPERTY",props:t})},updateSignUpStatus:function(t,n){return e({type:"UPDATE_SIGN_UP_STATUS",signUp_firstStep:t,signUp_secondStep:n})},updateActiveUser:function(t,n){return e({type:"UPDATE_ACTIVE_USER",authenticated:t,activeUser:n})}}};t.a=Object(c.b)(y,g)(h)},1915:function(e,t,n){"use strict";var r=n(0),a=n.n(r),o=n(1916),i=function(e){var t=function(e){return o.a[e].map(function(e,t){return a.a.createElement("li",{key:t},a.a.createElement("i",null,o.a.list_symbol),a.a.createElement("p",null,e))})},n=function(e,n){return a.a.createElement("div",null,a.a.createElement("p",{className:"tooltip-label"},n," should:"),a.a.createElement("ul",{className:"input-tooltip-list"},t(e)))};return a.a.createElement("div",{className:"tooltip-text"},function(e,t){switch(e){case e:return n(e,t);default:return null}}(e.id,e.label))};t.a=i},1916:function(e,t,n){"use strict";n.d(t,"a",function(){return r});var r={list_symbol:"\u25c7",signUp_username:["contain only [A-Za-z0-9] characters","be between 3-10 characters"],signUp_email:["have proper e-mail format (hearth@lounge.com)"],signUp_confirmEmail:["be the same as e-mail address written above"],signUp_password:["have at least 8 characters"],signUp_confirmPassword:["be the same as password written above"],signUp_avatar:["contain secure URL (https)","fixed width and height (be a square), since it will be resized to that shape","NOT contain content that violates our Terms of Service"]}},1917:function(e,t,n){var r=n(1918);"string"===typeof r&&(r=[[e.i,r,""]]);var a={hmr:!1};a.transform=void 0;n(1812)(r,a);r.locals&&(e.exports=r.locals)},1918:function(e,t,n){t=e.exports=n(1811)(!0),t.push([e.i,'input[type=checkbox]{height:0;font-size:10px;visibility:hidden;margin-bottom:0;padding:0}input[type=checkbox],input[type=checkbox]:after{-ms-flex-pack:center;justify-content:center;-ms-flex-align:center;align-items:center}input[type=checkbox]:after{content:" ";background-color:transparent;color:#a69e9d;border:1px solid #a69e9d;width:14px;height:14px;padding:2px;visibility:visible;display:-ms-flexbox;display:flex}input[type=checkbox]:checked:after{content:"\\2714";color:#e7e2da;border-color:#e7e2da}',"",{version:3,sources:["C:/Users/Sebastian/webstormprojects/hearthlounge/src/components/inputs/input-styles.css"],names:[],mappings:"AAAA,qBACE,SAAU,AACV,eAAgB,AAChB,kBAAmB,AACnB,gBAAiB,AACjB,SAAW,CAIe,AAC1B,gDAJA,qBAAsB,AAClB,uBAAwB,AAC5B,sBAAuB,AACnB,kBAAoB,CAeI,AAd5B,2BACE,YAAa,AACb,6BAA8B,AAC9B,cAAe,AACf,yBAA0B,AAC1B,WAAY,AACZ,YAAa,AACb,YAAa,AACb,mBAAoB,AACpB,oBAAqB,AACrB,YAAc,CAIY,AAC5B,mCACE,gBAAiB,AACjB,cAAe,AACf,oBAAsB,CAAE",file:"input-styles.css",sourcesContent:["input[type=checkbox] {\r\n  height: 0;\r\n  font-size: 10px;\r\n  visibility: hidden;\r\n  margin-bottom: 0;\r\n  padding: 0;\r\n  -ms-flex-pack: center;\r\n      justify-content: center;\r\n  -ms-flex-align: center;\r\n      align-items: center; }\r\n  input[type=checkbox]:after {\r\n    content: \" \";\r\n    background-color: transparent;\r\n    color: #A69E9D;\r\n    border: 1px solid #A69E9D;\r\n    width: 14px;\r\n    height: 14px;\r\n    padding: 2px;\r\n    visibility: visible;\r\n    display: -ms-flexbox;\r\n    display: flex;\r\n    -ms-flex-pack: center;\r\n        justify-content: center;\r\n    -ms-flex-align: center;\r\n        align-items: center; }\r\n  input[type=checkbox]:checked:after {\r\n    content: '\\2714';\r\n    color: #E7E2DA;\r\n    border-color: #E7E2DA; }\r\n"],sourceRoot:""}])},1919:function(e,t,n){"use strict";var r=n(1920);n.d(t,"a",function(){return r.a})},1920:function(e,t,n){"use strict";function r(e){if(e){var t=e.email,n=e.uid,r={updatedProfile:!1,rank:1,role:3,username:t,email:t,uid:n},o={};return o["users/"+n]=r,a.g.update(o)}}var a=n(14),o=n(29),i=n(50);t.a=function(e,t,n,s){Object(a.e)().createUserWithEmailAndPassword(e,t).then(function(e){n("success",null),s(!0,{username:e.email,email:e.email,uid:e.uid,updatedProfile:!1,rank:1,role:"user"}),i.a.push("/sign-up/update-profile"),r(e)}).catch(function(e){n("failure",null),Object(o.a)("Couldn't save user. "+e.message)})}},1921:function(e,t,n){"use strict";var r=n(0),a=n.n(r),o=n(1),i=n.n(o),s=function(e){var t=e.signUp_firstStep,n=e.signUp_secondStep,r=function(){switch(t){case"success":return"step-1-success";case"failure":return"step-1-failure";default:return"step"}},o=function(){switch(n){case"success":return"step-2-success";case"failure":return"step-2-failure";default:return"step-2"}};return a.a.createElement("ul",{className:"step-progress-bar "+function(){return"success"===t?o():r()}()},a.a.createElement("li",null,function(){switch(t){case"success":return a.a.createElement("span",null,"\u2713");case"failure":return a.a.createElement("span",null,"x");default:return"1"}}()),a.a.createElement("li",null,function(){switch(n){case"success":return a.a.createElement("span",null,"\u2713");case"failure":return a.a.createElement("span",null,"x");default:return"2"}}()))};t.a=s,s.propTypes={signUp_firstStep:i.a.string.isRequired,signUp_secondStep:i.a.string}},1922:function(e,t,n){"use strict";function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!==typeof t&&"function"!==typeof t?e:t}function o(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var i=n(0),s=n.n(i),c=n(10),l=n(1837),u=n(1923),p=n(49),f=n(583),m=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),A=function(e){function t(){var e,n,o,i;r(this,t);for(var s=arguments.length,c=Array(s),l=0;l<s;l++)c[l]=arguments[l];return n=o=a(this,(e=t.__proto__||Object.getPrototypeOf(t)).call.apply(e,[this].concat(c))),o.handleUpdateProfileFormSubmit=function(e){e.preventDefault();var t=o.props,n=t.activeUser,r=t.signUp_username,a=t.signUp_avatar,i=t.updateSignUpStatus;Object(f.d)(n,r,a,i)},i=n,a(o,i)}return o(t,e),m(t,[{key:"componentDidMount",value:function(){document.title="Sign Up - Update Profile",this.props.updateSignUpStatus("success","")}},{key:"render",value:function(){var e=this.props,t=e.signUp_username,n=e.signUp_avatar,r=e.handleInputChange,a=e.usernameFree;return s.a.createElement("form",{onSubmit:this.handleUpdateProfileFormSubmit},s.a.createElement("div",{className:"divider"},s.a.createElement("span",null,"Required")),s.a.createElement("div",{className:"username-wrapper"},s.a.createElement(l.a,{id:"signUp_username",type:"text",placeholder:"Joe",handleInputChange:r,value:t}),Object(u.a)(t,a)),s.a.createElement("div",{className:"divider"},s.a.createElement("span",null,"Optional")),s.a.createElement("div",{className:"username-wrapper"},s.a.createElement(l.a,{id:"signUp_avatar",type:"text",placeholder:"https://imgur...",handleInputChange:r,value:n})),s.a.createElement("div",{className:"button-wrapper"},s.a.createElement(p.a,{text:"Complete registration",type:"submit--light"})))}}]),t}(i.Component),d=function(e){var t=e.entry;return{signUp_username:t.signUp_username,signUp_avatar:t.signUp_avatar,usernameFree:t.usernameFree,activeUser:e.users.activeUser}},b=function(e){return{updateSignUpStatus:function(t,n){return e({type:"UPDATE_SIGN_UP_STATUS",signUp_firstStep:t,signUp_secondStep:n})}}};t.a=Object(c.b)(d,b)(A)},1923:function(e,t,n){"use strict";var r=n(1924);n.d(t,"a",function(){return r.a})},1924:function(e,t,n){"use strict";var r=n(0),a=n.n(r);t.a=function(e,t){return!t&&(e.length<3||e.length>10)||t&&(e.length<3||e.length>10)?null:t&&e.length>=3?a.a.createElement("span",null,"x"):!t&&e.length>=3?a.a.createElement("span",null,"\u2713"):void 0}},1925:function(e,t,n){"use strict";function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!==typeof t&&"function"!==typeof t?e:t}function o(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var i=n(0),s=n.n(i),c=n(10),l=n(23),u=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),p=function(e){function t(){return r(this,t),a(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return o(t,e),u(t,[{key:"componentDidMount",value:function(){document.title="Registration Complete!",this.props.updateSignUpStatus("success","success")}},{key:"render",value:function(){return s.a.createElement("div",{className:"summary"},s.a.createElement("p",null,"Sign Up Complete!"),s.a.createElement("br",null),s.a.createElement("p",null,"On your ",s.a.createElement(l.a,{to:"/dashboard"},"profile page")," you can edit your user info."))}}]),t}(i.PureComponent),f=function(e){return{updateSignUpStatus:function(t,n){return e({type:"UPDATE_SIGN_UP_STATUS",signUp_firstStep:t,signUp_secondStep:n})}}};t.a=Object(c.b)(null,f)(p)},1926:function(e,t,n){"use strict";function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!==typeof t&&"function"!==typeof t?e:t}function i(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var s=n(0),c=n.n(s),l=n(10),u=n(580),p=n(1927),f=n(1928),m=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),A=function(e){function t(){var e,n,i,s;a(this,t);for(var c=arguments.length,l=Array(c),u=0;u<c;u++)l[u]=arguments[u];return n=i=o(this,(e=t.__proto__||Object.getPrototypeOf(t)).call.apply(e,[this].concat(l))),i.handleInputChange=function(e){var t=i.props.updateFormProperty,n=e.target;t(r({},n.id,n.value))},s=n,o(i,s)}return i(t,e),m(t,[{key:"render",value:function(){var e=this;return c.a.createElement("div",{className:"sign sign-in"},c.a.createElement(u.b,null,c.a.createElement(u.a,{exact:!0,path:"/sign-in",render:function(){return c.a.createElement(f.a,{handleInputChange:e.handleInputChange})}}),c.a.createElement(u.a,{exact:!0,path:"/sign-in/reset-password",render:function(){return c.a.createElement(p.a,{handleInputChange:e.handleInputChange})}})))}}]),t}(s.Component),d=function(e){return{resetPasswordView:e.entry.resetPasswordView}},b=function(e){return{toggleResetPasswordView:function(t){return e({type:"TOGGLE_RESET_PASSWORD_VIEW",resetPasswordView:t})},updateFormProperty:function(t){return e({type:"EDIT_FORM_PROPERTY",props:t})}}};t.a=Object(l.b)(d,b)(A)},1927:function(e,t,n){"use strict";function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!==typeof t&&"function"!==typeof t?e:t}function o(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var i=n(0),s=n.n(i),c=n(10),l=n(49),u=n(23),p=n(586),f=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),m=function(e){function t(){var e,n,o,i;r(this,t);for(var s=arguments.length,c=Array(s),l=0;l<s;l++)c[l]=arguments[l];return n=o=a(this,(e=t.__proto__||Object.getPrototypeOf(t)).call.apply(e,[this].concat(c))),o.handleResetPassword=function(e){e.preventDefault();var t=o.props;(0,t.resetPassword)(t.resetPass_email)},i=n,a(o,i)}return o(t,e),f(t,[{key:"componentDidMount",value:function(){document.title="Restore Password"}},{key:"render",value:function(){var e=this,t=this.props,n=t.handleInputChange,r=t.resetPass_email;return s.a.createElement("form",{action:""},s.a.createElement("div",{className:"input-wrapper"},s.a.createElement("label",{htmlFor:"resetPass_email"},"E-mail:"),s.a.createElement("input",{id:"resetPass_email",type:"text",onChange:n,value:r})),s.a.createElement("div",{className:"button-wrapper"},s.a.createElement(l.a,{text:"Reset password",handleClick:function(t){return e.handleResetPassword(t,r)},requiresAuth:!1,type:"submit--light"}),s.a.createElement(u.a,{to:"/sign-in"},"Cancel")))}}]),t}(i.Component),A=function(e){return{resetPass_email:e.entry.resetPass_email}},d=function(e){return{resetPassword:function(t){return e(Object(p.b)(t))}}};t.a=Object(c.b)(A,d)(m)},1928:function(e,t,n){"use strict";function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!==typeof t&&"function"!==typeof t?e:t}function o(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var i=n(0),s=n.n(i),c=n(10),l=n(49),u=n(23),p=n(1929),f=n(585),m=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),A=function(e){function t(){var e,n,o,i;r(this,t);for(var s=arguments.length,c=Array(s),l=0;l<s;l++)c[l]=arguments[l];return n=o=a(this,(e=t.__proto__||Object.getPrototypeOf(t)).call.apply(e,[this].concat(c))),o.handleSignIn=function(e){e.preventDefault();var t=o.props,n=t.signIn_email;(0,t.updateSignInStatus)({email:n,pass:Object(p.a)("signIn_password")})},i=n,a(o,i)}return o(t,e),m(t,[{key:"componentDidMount",value:function(){document.title="Sign In"}},{key:"render",value:function(){var e=this,t=this.props,n=t.handleInputChange,r=t.signIn_email;return s.a.createElement("form",{onSubmit:function(t){return e.handleSignIn(t,r)}},s.a.createElement("div",{className:"input-wrapper"},s.a.createElement("label",{htmlFor:"signIn_email"},"E-mail:"),s.a.createElement("input",{id:"signIn_email",type:"text",onChange:n,value:r})),s.a.createElement("div",{className:"input-wrapper"},s.a.createElement("label",{htmlFor:"signIn_password"},"Password:"),s.a.createElement("input",{id:"signIn_password",type:"password"})),s.a.createElement("div",{className:"button-wrapper"},s.a.createElement(l.a,{text:"Submit",type:"submit",requiresAuth:!1}),s.a.createElement(u.a,{to:"/sign-in/reset-password",className:"btn btn__default"},"Forgot password?")))}}]),t}(i.Component),d=function(e){var t=e.entry;return{signIn_email:t.signIn_email,signIn_password:t.signIn_password}},b=function(e){return{updateSignInStatus:function(t){return e(Object(f.b)(t))}}};t.a=Object(c.b)(d,b)(A)},1929:function(e,t,n){"use strict";t.a=function(e){var t=document.getElementById(e);if(t)return t.value}},1930:function(e,t,n){var r=n(1931);"string"===typeof r&&(r=[[e.i,r,""]]);var a={hmr:!1};a.transform=void 0;n(1812)(r,a);r.locals&&(e.exports=r.locals)},1931:function(e,t,n){t=e.exports=n(1811)(!0),t.push([e.i,'form.inline .input-wrapper input,form.inline .input-wrapper label{display:-ms-flexbox;display:flex;color:#e7e2da}form .input-wrapper{position:relative}form .input-wrapper input,form .input-wrapper label{display:block;color:#e7e2da}form .input-wrapper input{-webkit-transition:all .4s ease;-o-transition:all ease .4s;transition:all .4s ease;margin-bottom:2vh;padding:5px;background:transparent;width:60%;color:#00a99c;border-bottom:1px solid #a69e9d}form .input-wrapper input:focus{border-bottom:1px solid #e7e2da}form .input-wrapper input.siblings-not-matched{border-color:#c41f3b;color:#c41f3b}form .input-wrapper input.siblings-not-matched:focus{border-color:#c41f3b}form .input-wrapper input.siblings-matched{border-color:#7cb342;color:#7cb342}form .input-wrapper input.siblings-matched:focus{border-color:#7cb342}form .input-wrapper .tos{display:-ms-flexbox;display:flex;-ms-flex-pack:start;justify-content:flex-start;-ms-flex-align:center;align-items:center;font-size:12px;color:#a69e9d;margin-bottom:20px}form .input-wrapper .tos input{display:-ms-flexbox;display:flex;margin-bottom:0;width:30px}form .input-wrapper .tos label a{color:#e7e2da;text-decoration:underline}form .button-wrapper{display:-ms-flexbox;display:flex;-ms-flex-pack:start;justify-content:flex-start}form .divider{width:inherit;text-align:center;color:#a69e9d;position:relative;font-size:12px;margin:20px 0}form .divider span{position:relative;padding:0 10px;background:#474143}form .divider:before{position:absolute;content:"";width:100%;height:1px;top:50%;left:0;background-color:#a69e9d}',"",{version:3,sources:["C:/Users/Sebastian/webstormprojects/hearthlounge/src/containers/pages/entry/styles/entry-styles.css"],names:[],mappings:"AAAA,kEACE,oBAAqB,AACrB,aAAc,AACd,aAAe,CAAE,AACnB,oBACE,iBAAmB,CAAE,AACrB,oDACE,cAAe,AACf,aAAe,CAAE,AACnB,0BACE,gCAAkC,AAClC,2BAA6B,AAC7B,wBAA0B,AAC1B,kBAAmB,AACnB,YAAa,AACb,uBAAwB,AACxB,UAAW,AACX,cAAe,AACf,+BAAiC,CAAE,AACnC,gCACE,+BAAiC,CAAE,AACrC,+CACE,qBAAsB,AACtB,aAAe,CAAE,AACjB,qDACE,oBAAsB,CAAE,AAC5B,2CACE,qBAAsB,AACtB,aAAe,CAAE,AACjB,iDACE,oBAAsB,CAAE,AAC9B,yBACE,oBAAqB,AACrB,aAAc,AACd,oBAAqB,AACjB,2BAA4B,AAChC,sBAAuB,AACnB,mBAAoB,AACxB,eAAgB,AAChB,cAAe,AACf,kBAAoB,CAAE,AACtB,+BACE,oBAAqB,AACrB,aAAc,AACd,gBAAiB,AACjB,UAAY,CAAE,AAChB,iCACE,cAAe,AACf,yBAA2B,CAAE,AACnC,qBACE,oBAAqB,AACrB,aAAc,AACd,oBAAqB,AACjB,0BAA4B,CAAE,AACpC,cACE,cAAe,AACf,kBAAmB,AACnB,cAAe,AACf,kBAAmB,AACnB,eAAgB,AAChB,aAAe,CAAE,AACjB,mBACE,kBAAmB,AACnB,eAAgB,AAChB,kBAAoB,CAAE,AACxB,qBACE,kBAAmB,AACnB,WAAY,AACZ,WAAY,AACZ,WAAY,AACZ,QAAS,AACT,OAAQ,AACR,wBAA0B,CAAE",file:"entry-styles.css",sourcesContent:['form.inline .input-wrapper label, form.inline .input-wrapper input {\r\n  display: -ms-flexbox;\r\n  display: flex;\r\n  color: #E7E2DA; }\r\nform .input-wrapper {\r\n  position: relative; }\r\n  form .input-wrapper label, form .input-wrapper input {\r\n    display: block;\r\n    color: #E7E2DA; }\r\n  form .input-wrapper input {\r\n    -webkit-transition: all ease 0.4s;\r\n    -o-transition: all ease 0.4s;\r\n    transition: all ease 0.4s;\r\n    margin-bottom: 2vh;\r\n    padding: 5px;\r\n    background: transparent;\r\n    width: 60%;\r\n    color: #00a99c;\r\n    border-bottom: 1px solid #A69E9D; }\r\n    form .input-wrapper input:focus {\r\n      border-bottom: 1px solid #E7E2DA; }\r\n    form .input-wrapper input.siblings-not-matched {\r\n      border-color: #C41F3B;\r\n      color: #C41F3B; }\r\n      form .input-wrapper input.siblings-not-matched:focus {\r\n        border-color: #C41F3B; }\r\n    form .input-wrapper input.siblings-matched {\r\n      border-color: #7cb342;\r\n      color: #7cb342; }\r\n      form .input-wrapper input.siblings-matched:focus {\r\n        border-color: #7cb342; }\r\n  form .input-wrapper .tos {\r\n    display: -ms-flexbox;\r\n    display: flex;\r\n    -ms-flex-pack: start;\r\n        justify-content: flex-start;\r\n    -ms-flex-align: center;\r\n        align-items: center;\r\n    font-size: 12px;\r\n    color: #A69E9D;\r\n    margin-bottom: 20px; }\r\n    form .input-wrapper .tos input {\r\n      display: -ms-flexbox;\r\n      display: flex;\r\n      margin-bottom: 0;\r\n      width: 30px; }\r\n    form .input-wrapper .tos label a {\r\n      color: #E7E2DA;\r\n      text-decoration: underline; }\r\nform .button-wrapper {\r\n  display: -ms-flexbox;\r\n  display: flex;\r\n  -ms-flex-pack: start;\r\n      justify-content: flex-start; }\r\nform .divider {\r\n  width: inherit;\r\n  text-align: center;\r\n  color: #A69E9D;\r\n  position: relative;\r\n  font-size: 12px;\r\n  margin: 20px 0; }\r\n  form .divider span {\r\n    position: relative;\r\n    padding: 0 10px;\r\n    background: #474143; }\r\n  form .divider:before {\r\n    position: absolute;\r\n    content: "";\r\n    width: 100%;\r\n    height: 1px;\r\n    top: 50%;\r\n    left: 0;\r\n    background-color: #A69E9D; }\r\n'],sourceRoot:""}])},1932:function(e,t,n){var r=n(1933);"string"===typeof r&&(r=[[e.i,r,""]]);var a={hmr:!1};a.transform=void 0;n(1812)(r,a);r.locals&&(e.exports=r.locals)},1933:function(e,t,n){t=e.exports=n(1811)(!0),t.push([e.i,"#container .entry.mobile{grid-template-columns:100%}#container .entry.mobile .wrapper{margin:1vh;width:calc(100% - 2vh);height:calc(100% - 2vh)}#container .entry.mobile form .input-wrapper input{width:100%}#container .entry.mobile form .input-wrapper input[type=checkbox]{width:20%}#container .entry.mobile form .input-wrapper .tos label{text-align:center}","",{version:3,sources:["C:/Users/Sebastian/webstormprojects/hearthlounge/src/containers/pages/entry/styles/entry-mobile-styles.css"],names:[],mappings:"AAAA,yBACE,0BAA4B,CAAE,AAC9B,kCACE,WAAY,AACZ,uBAAwB,AACxB,uBAAyB,CAAE,AAC7B,mDACE,UAAY,CAAE,AACd,kEACE,SAAW,CAAE,AACjB,wDACE,iBAAmB,CAAE",file:"entry-mobile-styles.css",sourcesContent:["#container .entry.mobile {\r\n  grid-template-columns: 100%; }\r\n  #container .entry.mobile .wrapper {\r\n    margin: 1vh;\r\n    width: calc(100% - 2vh);\r\n    height: calc(100% - 2vh); }\r\n  #container .entry.mobile form .input-wrapper input {\r\n    width: 100%; }\r\n    #container .entry.mobile form .input-wrapper input[type=checkbox] {\r\n      width: 20%; }\r\n  #container .entry.mobile form .input-wrapper .tos label {\r\n    text-align: center; }\r\n"],sourceRoot:""}])}});
//# sourceMappingURL=2.fdfa981a.chunk.js.map