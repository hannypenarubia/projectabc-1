webpackJsonp([32],{1012:function(t,a,e){var n=e(915);"string"==typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);e(301)("cd665132",n,!0)},1160:function(t,a,e){t.exports={render:function(){var t=this,a=t.$createElement,n=t._self._c||a;return n("div",{staticClass:"row"},[n("div",{staticClass:"col-md-6 col-lg-4 mx-auto signup-container"},[n("div",{staticClass:"signup-wrapper"},[n("div",{staticClass:"signup-header",staticStyle:{"margin-top":"50px"}},[n("img",{attrs:{src:e(387)},on:{click:function(a){t.redirect("/")}}})]),t._v(" "),t._m(0),t._v(" "),n("span",{staticClass:"options"},[n("button",{staticClass:"btn btn-default",class:{"btn-primary":"USER"===t.type},staticStyle:{"margin-right":"1%"},on:{click:function(a){t.type="USER"}}},[t._v("Register me as Customer")]),t._v(" "),n("button",{staticClass:"btn btn-default",class:{"btn-primary":"PARTNER"===t.type},staticStyle:{"margin-left":"1%"},on:{click:function(a){t.type="PARTNER"}}},[t._v("Register me as Partner")])]),t._v(" "),n("div",{staticClass:"signup-holder"},[""!=t.errorMessage?n("div",{staticClass:"login-message-holder login-spacer text-center"},[n("span",{staticClass:"text-danger text-center"},[n("b",[t._v("Oops!")]),t._v(" "+t._s(t.errorMessage))])]):t._e(),t._v(" "),n("div",[n("div",{staticClass:"input-group login-spacer"},[t._m(1),t._v(" "),n("input",{directives:[{name:"model",rawName:"v-model",value:t.username,expression:"username"}],staticClass:"form-control form-control-login",attrs:{type:"text",placeholder:"Username","aria-describedby":"addon-1"},domProps:{value:t.username},on:{input:function(a){a.target.composing||(t.username=a.target.value)}}})]),t._v(" "),n("div",{staticClass:"input-group login-spacer"},[t._m(2),t._v(" "),n("input",{directives:[{name:"model",rawName:"v-model",value:t.email,expression:"email"}],staticClass:"form-control form-control-login",attrs:{type:"text",placeholder:"Email","aria-describedby":"addon-1",disabled:""},domProps:{value:t.email},on:{input:function(a){a.target.composing||(t.email=a.target.value)}}})]),t._v(" "),n("div",{staticClass:"input-group login-spacer"},[t._m(3),t._v(" "),n("input",{directives:[{name:"model",rawName:"v-model",value:t.password,expression:"password"}],staticClass:"form-control form-control-login",attrs:{type:"password",placeholder:"Password","aria-describedby":"addon-2"},domProps:{value:t.password},on:{input:function(a){a.target.composing||(t.password=a.target.value)}}})]),t._v(" "),n("div",{staticClass:"input-group login-spacer"},[t._m(4),t._v(" "),n("input",{directives:[{name:"model",rawName:"v-model",value:t.cpassword,expression:"cpassword"}],staticClass:"form-control form-control-login",attrs:{type:"password",placeholder:"Confirm Password","aria-describedby":"addon-2"},domProps:{value:t.cpassword},on:{input:function(a){a.target.composing||(t.cpassword=a.target.value)}}})]),t._v(" "),n("button",{staticClass:"btn btn-primary btn-block login-spacer",on:{click:function(a){t.signUp()}}},[t._v("Register")])])])])])])},staticRenderFns:[function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("span",{staticStyle:{width:"100%",float:"left","text-align":"center","font-size":"20px","margin-bottom":"20px"}},[t._v("\n        Register to "),e("b",{staticClass:"text-primary"},[t._v("ID FACTORY")])])},function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("span",{staticClass:"input-group-addon",attrs:{id:"addon-1"}},[e("i",{staticClass:"fa fa-user"})])},function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("span",{staticClass:"input-group-addon",attrs:{id:"addon-1"}},[e("i",{staticClass:"fa fa-envelope"})])},function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("span",{staticClass:"input-group-addon",attrs:{id:"addon-2"}},[e("i",{staticClass:"fa fa-key"})])},function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("span",{staticClass:"input-group-addon",attrs:{id:"addon-2"}},[e("i",{staticClass:"fa fa-key"})])}]}},327:function(t,a,e){e(1012);var n=e(113)(e(805),e(1160),"data-v-809f51fc",null);t.exports=n.exports},387:function(t,a,e){t.exports=e.p+"static/img/logo.05b476b.png"},805:function(t,a,e){"use strict";Object.defineProperty(a,"__esModule",{value:!0});var n=e(68),r=e.n(n),i=e(19),s=e(33),o=e(27);a.default={mounted:function(){},data:function(){return{code:this.$route.params.code,username:"",email:this.$route.params.email,password:"",cpassword:"",type:"USER",errorMessage:"",user:s.a.user,tokenData:s.a.tokenData,flag:!1,schools:null,schoolIndex:null}},methods:{signUp:function(){var t=this;this.validate();var a={username:this.username,email:this.email,password:this.password,config:o.default,account_type:this.type,referral_code:this.code};!0===this.flag&&($("#loading").css({display:"block"}),this.APIRequest("accounts/create",a).then(function(a){if($("#loading").css({display:"none"}),null!==a.error)if(100===a.error.status){var e=a.error.message;void 0!==r()(e.username)&&void 0!==e.username?t.errorMessage=e.username[0]:void 0!==r()(e.email)&&void 0!==e.email&&(t.errorMessage=e.email[0])}else null!==a.data&&a.data>0&&t.login()}))},redirect:function(t){i.a.push(t)},validate:function(){this.username.length>=6&&null!==this.email&&null!==this.password&&0===this.password.localeCompare(this.cpassword)&&null!==this.type?this.flag=!0:this.username.length<6?this.errorMessage="Username must be atleast 6 characters.":this.password.length<6?this.errorMessage="Password must be atleast 6 characters":0!==this.password.localeCompare(this.cpassword)?this.errorMessage="Password did not matched":(this.errorMessage="Please fill in all required fields.",this.flag=!1)},login:function(){var t=this;s.a.authenticate(this.username,this.password,function(t){i.a.push("dashboard")},function(a,e){t.errorMessage=401===e?"Your username and password did not matched.":"Cannot log in? Contact us through email: support@idfactories.com"})}}}},915:function(t,a,e){a=t.exports=e(300)(),a.push([t.i,".signup-container[data-v-809f51fc]{margin-top:25px}.signup-header[data-v-809f51fc]{height:100px;color:#060;width:100%;float:left;text-align:center}.signup-header img[data-v-809f51fc]{height:100px!important;width:100px!important}.signup-header img[data-v-809f51fc]:hover{cursor:pointer}.header-title[data-v-809f51fc]{width:90%;margin:25px 5% 0;font-size:24px;font-weight:700px}.signup-holder[data-v-809f51fc]{width:90%;margin:0 5%;float:left}.input-holder[data-v-809f51fc]{width:90%;margin:0 5%}.form-control[data-v-809f51fc]{height:45px!important}.btn[data-v-809f51fc]{height:50px!important}.input-group[data-v-809f51fc]{margin-top:5px;margin-bottom:5px}.site-title[data-v-809f51fc]{margin-top:25px;width:100%;float:left}.site-title img[data-v-809f51fc]{width:50px;float:left;margin-right:10px}.site-title .app-name[data-v-809f51fc]{float:left}.account-type[data-v-809f51fc]{width:120px!important}.options[data-v-809f51fc]{width:90%;margin:0 5%;float:left}.options button[data-v-809f51fc]{width:49%!important;float:left!important;height:60px!important}@media (max-width:991px){.custom-holder[data-v-809f51fc]{box-shadow:0 0 0 0 #fff!important;margin-top:50px!important}}","",{version:3,sources:["C:/xampp/htdocs/projectabc/src/modules/home/referral.vue"],names:[],mappings:"AACA,mCACE,eAAiB,CAClB,AACD,gCACE,aAAc,AACd,WAAe,AACf,WAAY,AACZ,WAAY,AACZ,iBAAmB,CACpB,AACD,oCACE,uBAAyB,AACzB,qBAAwB,CACzB,AACD,0CACE,cAAgB,CACjB,AACD,+BACE,UAAW,AACX,iBAAsB,AACtB,eAAgB,AAChB,iBAAmB,CACpB,AACD,gCACE,UAAW,AACX,YAAkB,AAClB,UAAY,CACb,AACD,+BACE,UAAW,AACX,WAAmB,CACpB,AACD,+BACE,qBAAwB,CACzB,AACD,sBACE,qBAAwB,CACzB,AACD,8BACE,eAAgB,AAChB,iBAAmB,CACpB,AACD,6BACE,gBAAiB,AACjB,WAAY,AACZ,UAAY,CACb,AACD,iCAEE,WAAY,AACZ,WAAY,AACZ,iBAAmB,CACpB,AACD,uCACE,UAAY,CACb,AACD,+BACE,qBAAwB,CACzB,AACD,0BACE,UAAW,AACX,YAAmB,AACnB,UAAY,CACb,AACD,iCACE,oBAAsB,AACtB,qBAAuB,AACvB,qBAAwB,CACzB,AAED,yBACA,gCACI,kCAAoC,AACpC,yBAA4B,CAC/B,CACA",file:"referral.vue",sourcesContent:["\n.signup-container[data-v-809f51fc]{\r\n  margin-top: 25px;\n}\n.signup-header[data-v-809f51fc]{\r\n  height: 100px;\r\n  color: #006600;\r\n  width: 100%;\r\n  float: left;\r\n  text-align: center;\n}\n.signup-header img[data-v-809f51fc]{\r\n  height: 100px !important;\r\n  width: 100px !important;\n}\n.signup-header img[data-v-809f51fc]:hover{\r\n  cursor: pointer;\n}\n.header-title[data-v-809f51fc]{\r\n  width: 90%;\r\n  margin:  25px 5% 0 5%;\r\n  font-size: 24px;\r\n  font-weight: 700px;\n}\n.signup-holder[data-v-809f51fc]{\r\n  width: 90%;\r\n  margin: 0 5% 0 5%;\r\n  float: left;\n}\n.input-holder[data-v-809f51fc]{\r\n  width: 90%;\r\n  margin:  0 5% 0 5%;\n}\n.form-control[data-v-809f51fc]{\r\n  height: 45px !important;\n}\n.btn[data-v-809f51fc]{\r\n  height: 50px !important;\n}\n.input-group[data-v-809f51fc]{\r\n  margin-top: 5px;\r\n  margin-bottom: 5px;\n}\n.site-title[data-v-809f51fc]{\r\n  margin-top: 25px;\r\n  width: 100%;\r\n  float: left;\n}\n.site-title img[data-v-809f51fc]{\r\n  width: 50px;\r\n  width: 50px;\r\n  float: left;\r\n  margin-right: 10px;\n}\n.site-title .app-name[data-v-809f51fc]{\r\n  float: left;\n}\n.account-type[data-v-809f51fc]{\r\n  width: 120px !important;\n}\n.options[data-v-809f51fc]{\r\n  width: 90%;\r\n  margin:  0 5% 0 5%;\r\n  float: left;\n}\n.options button[data-v-809f51fc]{\r\n  width: 49% !important;\r\n  float: left !important;\r\n  height: 60px !important;\n}\r\n/*-------------- Extra Small Screen for Mobile Phones --------------*/\n@media (max-width: 991px){\n.custom-holder[data-v-809f51fc]{\r\n    box-shadow: 0 0 0 0 #fff !important;\r\n    margin-top: 50px !important;\n}\n}\r\n"],sourceRoot:""}])}});
//# sourceMappingURL=32.395347a49a3bc0fca5a6.js.map