(this.webpackJsonplezione=this.webpackJsonplezione||[]).push([[7],{25:function(e,t,r){"use strict";function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}r.d(t,"a",(function(){return n}))},28:function(e,t,r){"use strict";r.d(t,"a",(function(){return o}));var n=r(25);function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){Object(n.a)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}},41:function(e,t,r){e.exports={boxLogin:"Login_boxLogin__2pM1R",formBtn:"Login_formBtn__2fsCp"}},45:function(e,t,r){"use strict";r.r(t);var n=r(4),a=r(25),o=r(28),c=r(0),s=r(41),u=r.n(s),i=r(1),p={username:"",password:""},l=function(e,t){return"update-input"===t.type?Object(o.a)(Object(o.a)({},e),{},Object(a.a)({},t.field,t.payload)):e};t.default=function(e){var t=Object(c.useReducer)(l,p),r=Object(n.a)(t,2),a=r[0],o=r[1],s=a.username;return Object(i.jsx)("div",{className:u.a.boxLogin,children:Object(i.jsxs)("form",{children:[Object(i.jsx)("label",{htmlFor:"username",children:"Username:"}),Object(i.jsx)("input",{value:a.userName,onChange:function(e){return o({type:"update-input",field:e.target.name,payload:e.target.value})},type:"text",name:"username",id:"username",placeholder:"Enter Username",required:!0}),Object(i.jsx)("label",{htmlFor:"password",children:"Password:"}),Object(i.jsx)("input",{value:a.password,onChange:function(e){return o({type:"update-input",field:e.target.name,payload:e.target.value})},type:"password",name:"password",id:"password",placeholder:"Enter Password",required:!0}),Object(i.jsx)("button",{type:"submit",onClick:function(t){t.preventDefault(),e.setNameUser(s)},className:u.a.formBtn,children:"LOGIN"})]})})}}}]);
//# sourceMappingURL=7.22725230.chunk.js.map