webpackJsonp([36],{316:function(n,e,i){i(883);var r=i(113)(i(751),i(990),null,null);n.exports=r.exports},751:function(n,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=i(33),a=i(27);i(19);e.default={mounted:function(){},data:function(){return{user:r.a.user,config:a.default,activeItem:"",activeSubItem:"",menu:[{id:2,users:"ALL",parent_id:0,description:"Templates",icon:"fas fa-file",path:"templates"},{id:3,users:"ALL",parent_id:0,description:"Data Entries",icon:"fas fa-users",path:"data_entries"},{id:4,users:"ALL",parent_id:0,description:"Images",icon:"fas fa-image",path:"images"},{id:5,users:"ALL",parent_id:0,description:"Marketplace",icon:"fas fa-store",path:"marketplace"},{id:6,users:"PARTNER",parent_id:0,description:"Pricings",icon:"fas fa-money",path:"pricings"},{id:7,users:"USER",parent_id:0,description:"Find Printing",icon:"fas fa-print",path:"printings"},{id:21,users:"PARTNER",parent_id:0,description:"Products",icon:"fa fa-shopping-cart",path:"products"},{id:22,users:"PARTNER",parent_id:0,description:"Orders",icon:"fa fa-shopping-cart",path:"orders"},{id:23,users:"PARTNER",parent_id:0,description:"Coupons",icon:"fa fa-tags",path:"coupons"}],toggleSidebar:"fa fa-toggle-on",toggleSidebarFlag:!0,hide:"",toggleOnClick:"",alignAtHide:"pull-right",search:"",flag:!1,confirmation:{message:null,action:null}}},methods:{getMenu:function(){var n=this,e={sort:{id:"asc"}};this.APIRequest("modules/retrieve",e).then(function(e){n.menu=e.data})},isActive:function(n){return this.activeItem===n},setActive:function(n){this.activeItem=n;var e=parseInt(n),i=parseInt(this.activeSubItem);this.activeSubItem=i<e+10&&i>e?this.activeSubItem:""},isSubActive:function(n){return this.activeSubItem===n},setSubActive:function(n){this.activeSubItem=n,this.activeItem=""},navigateTo:function(n,e){this.toggleOnClick=!0===e?"collapse":"",r.a.redirect("/"+n)},changeToggleSidebarIcon:function(){this.toggleSidebarFlag=!this.toggleSidebarFlag,this.hide=!0===this.toggleSidebarFlag?"":"hidden",this.alignAtHide=!1===this.toggleSidebarFlag?"text-center":"pull-right";var n=!0===this.toggleSidebarFlag?"on":"off";this.toggleSidebar="fa fa-toggle-"+n}},computed:{filteredModules:function(){var n=new RegExp(this.search.toLowerCase());return this.menu.filter(function(e){return e.description.toLowerCase().match(n)})}}}},808:function(n,e,i){e=n.exports=i(300)(),e.push([n.i,".content-holder,.main-sidebar{min-height:92vh;overflow:hidden;transition:all 1s ease 0s;z-index:1;margin-top:8vh}.main-sidebar{position:fixed;overflow-y:auto}.main-sidebar i{padding:0 10px}.sidebar-menu .header{font-weight:700;padding:15px 2%;color:#000;text-align:center}.sidebar-menu,.sidebar-menu ul{list-style:none;margin:0;padding:0;color:#000}.header .input-group{width:80%;float:left}.header .input-group div{width:15%;float:left;font-size:10px;padding:0;background:#fff!important}.header .input-group div i{padding:0;font-size:12px}.header .switch{float:left;width:20%}.header i{font-size:24px;color:#22b173}.header i:hover{cursor:pointer;color:#028170}.profile-photo{float:left;width:100%;height:100px;margin-top:20px}.profile-image-holder{width:100%;float:left;height:80px;text-align:center}.profile-image-holder img{width:80px;height:80px;border-radius:5px}.profile-photo .profile-icon{float:left;font-size:80px;width:100%;height:80px;margin-bottom:10px}.profile-photo .profile-status{font-size:12px!important;padding-left:0!important;padding-right:0!important}.sidebar-menu li{min-height:40px;overflow-x:hidden;vertical-align:middle;border-bottom:1px solid #eee}.sidebar-menu ul li{min-height:30px;overflow-x:hidden}.sidebar-menu li,.sidebar-menu ul>li{position:relative;margin:0;padding:0}.sidebar-menu li>a{display:block;padding:13px 2%}.sidebar-menu ul li>a{padding:10px 5% 10px 3%;display:block}.sidebar-menu li>a:hover,.sidebar-menu ul li>a :hover{cursor:pointer;background:#eaeaea}.appActive,.appSubActive{background:#eaeaea}.appActive ul{background:#f4f4f4}@media (min-width:1200px){.main-sidebar{width:18%;float:left}.sidebar-collapse,.sidebar-menu .header span{display:block}.content-holder{width:81%;margin:60px 0 0 19%;float:left}.main-sidebar.hidden{margin-left:-14%}.content-holder.hidden{width:94%;margin:60px 0 0 6%;float:left}}@media screen (min-width:992px),screen and (max-width:1199px){.main-sidebar{width:23%;float:left}.content-holder{width:72%;margin:60px 0 0 25%;float:left}.main-sidebar.active{padding-left:15%}.sidebar-collapse,.sidebar-menu .header span{display:block}.main-sidebar.hidden{margin-left:-18%}.content-holder.hidden{width:94%;margin:60px 0 0 6%;float:left}}@media (max-width:991px){.main-sidebar{width:100%;position:absolute;top:0;left:0;z-index:10;background-color:rgba(0,0,0,.5);margin-top:50px}.content-holder{width:10px;min-width:96%;overflow-y:hidden;margin:60px 2% 0;float:left}.main-sidebar ul{background:#fff;width:90%;min-height:84.5vh}.sm-title{text-align:center}.sidebar-menu .header span{display:none}.main-sidebar.hidden{margin-left:0}.header .input-group{width:90%;margin:0 5%}#toggleIcon,.force-collapse{display:none}.collapse{display:none!important}.collapse.show{display:block!important}}@media (max-width:239px){.collapse{display:none!important}.collapse.show{display:block!important}.main-sidebar{width:90%;position:absolute;top:0;left:0;z-index:10;background:#fff;margin-top:100px}.content-holder{width:96%;margin:60px 2% 0;float:left}.header,.sm-title{display:none}.sidebar-menu li>a{padding:15px 20px 15px 15px;display:block}.sidebar-menu ul li>a{padding:10px 15px 10px 25px;display:block}.sidebar-menu .header span{display:none}.main-sidebar.hidden{margin-left:0}.header .input-group{width:90%;margin:0 5%}#toggleIcon,.force-collapse{display:none}}","",{version:3,sources:["C:/xampp/htdocs/projectabc/src/modules/frame/Sidebar.vue"],names:[],mappings:"AACA,8BACE,gBAAiB,AACjB,gBAAiB,AACjB,0BAA2B,AAC3B,UAAW,AACX,cAAgB,CACjB,AACD,cACE,eAAgB,AAChB,eAAiB,CAClB,AACD,gBACE,cAAsB,CACvB,AACD,sBACE,gBAAiB,AACjB,gBAAyB,AACzB,WAAY,AACZ,iBAAmB,CACpB,AACD,+BACE,gBAAiB,AACjB,SAAU,AACV,UAAW,AACX,UAAY,CACb,AACD,qBACE,UAAW,AACX,UAAY,CACb,AACD,yBACE,UAAW,AACX,WAAY,AACZ,eAAgB,AAChB,UAAW,AACX,yBAA4B,CAC7B,AACD,2BACE,UAAW,AACX,cAAgB,CACjB,AACD,gBACE,WAAY,AACZ,SAAW,CACZ,AACD,UACE,eAAgB,AAChB,aAAe,CAChB,AACD,gBACE,eAAgB,AAChB,aAAe,CAChB,AACD,eACE,WAAY,AACZ,WAAY,AACZ,aAAc,AACd,eAAiB,CAClB,AACD,sBACE,WAAY,AACZ,WAAY,AACZ,YAAa,AACb,iBAAmB,CACpB,AACD,0BACE,WAAY,AACZ,YAAa,AACb,iBAAmB,CACpB,AACD,6BACE,WAAY,AACZ,eAAgB,AAChB,WAAY,AACZ,YAAa,AACb,kBAAoB,CACrB,AACD,+BACE,yBAA2B,AAC3B,yBAA6B,AAC7B,yBAA8B,CAC/B,AAID,iBACE,gBAAiB,AACjB,kBAAmB,AACnB,sBAAuB,AACvB,4BAA8B,CAC/B,AACD,oBACE,gBAAiB,AACjB,iBAAmB,CACpB,AACD,qCACE,kBAAmB,AACnB,SAAU,AACV,SAAW,CACZ,AAGD,mBACE,cAAe,AACf,eAAyB,CAC1B,AAGD,sBACE,wBAAyB,AACzB,aAAe,CAChB,AACD,sDACI,eAAgB,AAChB,kBAAoB,CACvB,AACD,yBACE,kBAAoB,CACrB,AACD,cACE,kBAAoB,CACrB,AAQD,0BACA,cACI,UAAU,AACV,UAAY,CACf,AAID,6CACI,aAAe,CAClB,AACD,gBACI,UAAW,AACX,oBAAsB,AACtB,UAAY,CACf,AAED,qBACI,gBAAkB,CACrB,AACD,uBACI,UAAW,AACX,mBAAqB,AACrB,UAAY,CACf,CACA,AAGD,8DACA,cACI,UAAW,AACX,UAAY,CACf,AACD,gBACI,UAAW,AACX,oBAAsB,AACtB,UAAY,CACf,AACD,qBACI,gBAAiB,CACpB,AAID,6CACI,aAAe,CAClB,AAGD,qBACI,gBAAkB,CACrB,AACD,uBACI,UAAW,AACX,mBAAqB,AACrB,UAAY,CACf,CACA,AAqCD,yBACA,cACI,WAAY,AACZ,kBAAmB,AACnB,MAAM,AACN,OAAQ,AACR,WAAY,AACZ,gCAAkC,AAClC,eAAiB,CACpB,AACD,gBACI,WAAY,AACZ,cAAe,AACf,kBAAmB,AACnB,iBAAqB,AACrB,UAAY,CACf,AACD,iBACI,gBAAiB,AACjB,UAAW,AACX,iBAAmB,CACtB,AACD,UACI,iBAAmB,CACtB,AACD,2BACI,YAAc,CACjB,AACD,qBACI,aAAe,CAClB,AACD,qBACI,UAAW,AACX,WAAkB,CACrB,AAID,4BACI,YAAc,CACjB,AACD,UACI,sBAAyB,CAC5B,AACD,eACI,uBAA0B,CAC7B,CACA,AACD,yBACA,UACI,sBAAyB,CAC5B,AACD,eACI,uBAA0B,CAC7B,AACD,cACI,UAAW,AACX,kBAAmB,AACnB,MAAM,AACN,OAAQ,AACR,WAAY,AACZ,gBAAiB,AACjB,gBAAkB,CACrB,AACD,gBACI,UAAW,AACX,iBAAqB,AACrB,UAAY,CACf,AACD,kBACI,YAAc,CACjB,AACD,mBACE,4BAA6B,AAC7B,aAAe,CAChB,AACD,sBACE,4BAA6B,AAC7B,aAAe,CAChB,AACD,2BACI,YAAc,CACjB,AACD,qBACI,aAAe,CAClB,AACD,qBACI,UAAW,AACX,WAAkB,CACrB,AAID,4BACI,YAAc,CACjB,CACA",file:"Sidebar.vue",sourcesContent:["\n.main-sidebar, .content-holder{  \r\n  min-height: 92vh;\r\n  overflow: hidden;\r\n  transition: all 1s ease 0s;\r\n  z-index: 1;\r\n  margin-top: 8vh;\n}\n.main-sidebar{\r\n  position: fixed;\r\n  overflow-y: auto;\n}\n.main-sidebar i{\r\n  padding:0 10px 0 10px;\n}\n.sidebar-menu .header{\r\n  font-weight: 700; \r\n  padding: 15px 2% 15px 2%;\r\n  color: #000;\r\n  text-align: center;\n}\n.sidebar-menu, .sidebar-menu  ul {\r\n  list-style: none;\r\n  margin: 0;\r\n  padding: 0;\r\n  color: #000;\n}\n.header .input-group{\r\n  width: 80%;\r\n  float: left;\n}\n.header .input-group div{\r\n  width: 15%;\r\n  float: left;\r\n  font-size: 10px;\r\n  padding: 0;\r\n  background: #fff !important;\n}\n.header .input-group div i{\r\n  padding: 0;\r\n  font-size: 12px;\n}\n.header .switch{\r\n  float: left;\r\n  width: 20%;\n}\n.header i{\r\n  font-size: 24px;\r\n  color: #22b173;\n}/*-- toggle-sidebar i --*/\n.header i:hover{\r\n  cursor: pointer;\r\n  color: #028170;\n}\n.profile-photo{\r\n  float: left;\r\n  width: 100%;\r\n  height: 100px;\r\n  margin-top: 20px;\n}\n.profile-image-holder{\r\n  width: 100%;\r\n  float: left;\r\n  height: 80px;\r\n  text-align: center;\n}\n.profile-image-holder img{\r\n  width: 80px;\r\n  height: 80px;\r\n  border-radius: 5px;\n}\n.profile-photo .profile-icon{\r\n  float: left;\r\n  font-size: 80px;\r\n  width: 100%;\r\n  height: 80px;\r\n  margin-bottom: 10px;\n}\n.profile-photo .profile-status{\r\n  font-size: 12px !important;\r\n  padding-left: 0px !important;\r\n  padding-right: 0px !important;\n}\r\n\r\n\r\n/*-- .toggle-sidebar i:hover --*/\n.sidebar-menu li{\r\n  min-height: 40px;\r\n  overflow-x: hidden;\r\n  vertical-align: middle;\r\n  border-bottom: solid #eee 1px;\n}\n.sidebar-menu ul li{\r\n  min-height: 30px;\r\n  overflow-x: hidden;\n}\n.sidebar-menu li, .sidebar-menu ul > li {\r\n  position: relative;\r\n  margin: 0;\r\n  padding: 0;\n}\r\n\r\n/*padding: 13px 2% 13px 5%;*/\n.sidebar-menu  li > a{\r\n  display: block;\r\n  padding: 13px 2% 13px 2%;\n}\r\n\r\n/*padding: 10px 20px 10px 50px;*/\n.sidebar-menu  ul li > a{\r\n  padding: 10px 5% 10px 3%;\r\n  display: block;\n}\n.sidebar-menu li > a:hover,.sidebar-menu ul li > a :hover{\r\n    cursor: pointer;\r\n    background: #eaeaea;\n}\n.appActive, .appSubActive{\r\n  background: #eaeaea;\n}/*-- app-active --*/\n.appActive ul{\r\n  background: #f4f4f4;\n}\r\n\r\n/*---------------------------------------------------------          \r\n\r\n                  RESPONSIVE HANDLER\r\n\r\n-----------------------------------------------------------*/\r\n/*-------------- Large Screens for Desktop --------------*/\n@media (min-width: 1200px){\n.main-sidebar{\r\n    width:18%;\r\n    float: left;\n}\n.sidebar-collapse{\r\n    display: block;\n}\n.sidebar-menu .header span{\r\n    display: block;\n}\n.content-holder{\r\n    width: 81%;\r\n    margin: 60px 0% 0 19%;\r\n    float: left;\n}\r\n  /*  Change with Menu Toggled */\n.main-sidebar.hidden{\r\n    margin-left: -14%;\n}\n.content-holder.hidden{\r\n    width: 94%;\r\n    margin: 60px 0% 0 6%;\r\n    float: left;\n}\n}\r\n\r\n/*-------------- Medium Screen for Tablets  --------------*/\n@media screen (min-width: 992px), screen and (max-width: 1199px){\n.main-sidebar{\r\n    width: 23%;\r\n    float: left;\n}\n.content-holder{\r\n    width: 72%;\r\n    margin: 60px 0% 0 25%;\r\n    float: left;\n}\n.main-sidebar.active{\r\n    padding-left:15%;\n}\n.sidebar-collapse{\r\n    display: block;\n}\n.sidebar-menu .header span{\r\n    display: block;\n}\r\n\r\n  /*  Change with Menu Toggled */\n.main-sidebar.hidden{\r\n    margin-left: -18%;\n}\n.content-holder.hidden{\r\n    width: 94%;\r\n    margin: 60px 0% 0 6%;\r\n    float: left;\n}\n}\r\n/*-------------- Small Screen for Mobile Phones  --------------*/\r\n/*@media screen (min-width: 768px), screen and (max-width: 991px){\r\n  .main-sidebar{\r\n    width: 90%;\r\n    position: absolute;\r\n    top:0;\r\n    left: 0;\r\n    z-index: 10;\r\n    background: #fff;\r\n  }\r\n  .content-holder{\r\n    width: 96%;\r\n    margin: 60px 2% 0 2%;\r\n  }\r\n  .sm-title{\r\n    text-align: center;\r\n  }\r\n   .sidebar-collapse{\r\n    display: none;\r\n  }\r\n  .sidebar-menu .header span{\r\n    display: none;\r\n  }\r\n  \r\n  .main-sidebar.hidden{\r\n     margin-left: 0;\r\n  }\r\n  #toggleIcon{\r\n    display: none;\r\n  }\r\n  .force-collapse{\r\n    display: none;\r\n  }\r\n}*/\r\n\r\n/*-------------- Extra Small Screen for Mobile Phones --------------*/\n@media (max-width: 991px){\n.main-sidebar{\r\n    width: 100%;\r\n    position: absolute;\r\n    top:0;\r\n    left: 0;\r\n    z-index: 10;\r\n    background-color: rgba(0,0,0,0.5);\r\n    margin-top: 50px;\n}\n.content-holder{\r\n    width: 10px;\r\n    min-width: 96%;\r\n    overflow-y: hidden;\r\n    margin: 60px 2% 0 2%;\r\n    float: left;\n}\n.main-sidebar ul{\r\n    background: #fff;\r\n    width: 90%;\r\n    min-height: 84.5vh;\n}\n.sm-title{\r\n    text-align: center;\n}\n.sidebar-menu .header span{\r\n    display: none;\n}\n.main-sidebar.hidden{\r\n    margin-left: 0;\n}\n.header .input-group{\r\n    width: 90%;\r\n    margin: 0 5% 0 5%;\n}\n#toggleIcon{\r\n    display: none;\n}\n.force-collapse{\r\n    display: none;\n}\n.collapse{\r\n    display: none !important;\n}\n.collapse.show{\r\n    display: block !important;\n}\n}\n@media (max-width: 239px){\n.collapse{\r\n    display: none !important;\n}\n.collapse.show{\r\n    display: block !important;\n}\n.main-sidebar{\r\n    width: 90%;\r\n    position: absolute;\r\n    top:0;\r\n    left: 0;\r\n    z-index: 10;\r\n    background: #fff;\r\n    margin-top: 100px;\n}\n.content-holder{\r\n    width: 96%;\r\n    margin: 60px 2% 0 2%;\r\n    float: left;\n}\n.sm-title,.header{\r\n    display: none;\n}\n.sidebar-menu  li > a{\r\n  padding: 15px 20px 15px 15px;\r\n  display: block;\n}\n.sidebar-menu  ul li > a{\r\n  padding: 10px 15px 10px 25px;\r\n  display: block;\n}\n.sidebar-menu .header span{\r\n    display: none;\n}\n.main-sidebar.hidden{\r\n    margin-left: 0;\n}\n.header .input-group{\r\n    width: 90%;\r\n    margin: 0 5% 0 5%;\n}\n#toggleIcon{\r\n    display: none;\n}\n.force-collapse{\r\n    display: none;\n}\n}\r\n"],sourceRoot:""}])},883:function(n,e,i){var r=i(808);"string"==typeof r&&(r=[[n.i,r,""]]),r.locals&&(n.exports=r.locals);i(301)("eb5bae18",r,!0)},990:function(n,e){n.exports={render:function(){var n=this,e=n.$createElement,i=n._self._c||e;return i("div",{staticClass:"system-body"},[i("div",{staticClass:"main-sidebar sidebar-collapse navbar-collapse collapse",class:n.hide+" "+n.toggleOnClick,attrs:{id:"ClassWorx"}},[i("div",{staticClass:"sidebar"},[i("ul",{staticClass:"sidebar-menu"},[i("li",{staticClass:"header"},[!0===n.toggleSidebarFlag?i("span",{staticClass:"profile-photo"},[null!==n.user.profile?i("span",{staticClass:"profile-image-holder"},[i("img",{attrs:{src:n.config.BACKEND_URL+n.user.profile.profile_url}})]):i("i",{staticClass:"fa fa-user-circle-o profile-icon"}),n._v(" "),"VERIFIED"===n.user.status?i("i",{staticClass:"fas fa-check text-primary profile-status"}):n._e(),n._v("\n                Hi "+n._s(n.user.username)+"!\n              ")]):n._e(),n._v(" "),i("i",{class:n.toggleSidebar+" pull-right",attrs:{"aria-hidden":"true",id:"toggleIcon"},on:{click:function(e){n.changeToggleSidebarIcon()}}})]),n._v(" "),n._l(n.menu,function(e,r){return(e.users===n.user.type||"ALL"===e.users)&&"ADMIN"!==n.user.type||"ADMIN"===n.user.type?i("li",{class:{appActive:n.isActive(e.id)},attrs:{"data-toggle":"collapse","data-target":"#ClassWorx","aria-expanded":"false","aria-label":"Toggle navigation"},on:{click:function(i){n.setActive(e.id)}}},[i("a",{class:n.hide,on:{click:function(i){n.navigateTo(e.path,!0)}}},[i("i"),n._v(" "),i("span",{class:"sm-title"},[n._v(n._s(e.description)+"\n                ")]),n._v(" "),i("span",{class:"pull-right-container"},[i("i",{class:e.icon+" pull-right"})])])]):n._e()})],2)])]),n._v(" "),null!==n.confirmation.message?i("div",{staticClass:"modal",attrs:{id:"timerModal"}},[i("div",{staticClass:"modal-dialog"},[i("div",{staticClass:"modal-content"},[n._m(0),n._v(" "),i("div",{staticClass:"modal-body"},[n._v("\n            "+n._s(n.confirmation.message)+"\n          ")]),n._v(" "),n._m(1)])])]):n._e(),n._v(" "),i("div",{staticClass:"content-holder",class:n.hide},[i("transition",[i("router-view")],1)],1)])},staticRenderFns:[function(){var n=this,e=n.$createElement,i=n._self._c||e;return i("div",{staticClass:"modal-header"},[i("h4",{staticClass:"modal-title"},[i("i",{staticClass:"fa fa-warning text-danger"}),n._v(" Confirmation!")]),n._v(" "),i("button",{staticClass:"close",attrs:{type:"button","data-dismiss":"modal"}},[n._v("×")])])},function(){var n=this,e=n.$createElement,i=n._self._c||e;return i("div",{staticClass:"modal-footer"},[i("button",{staticClass:"btn btn-primary",attrs:{type:"button","data-dismiss":"modal"}},[n._v("Ok")])])}]}}});
//# sourceMappingURL=36.23ed632b9947f8eb5656.js.map