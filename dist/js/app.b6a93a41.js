(function(t){function e(e){for(var n,o,i=e[0],u=e[1],c=e[2],l=0,f=[];l<i.length;l++)o=i[l],Object.prototype.hasOwnProperty.call(a,o)&&a[o]&&f.push(a[o][0]),a[o]=0;for(n in u)Object.prototype.hasOwnProperty.call(u,n)&&(t[n]=u[n]);p&&p(e);while(f.length)f.shift()();return s.push.apply(s,c||[]),r()}function r(){for(var t,e=0;e<s.length;e++){for(var r=s[e],n=!0,o=1;o<r.length;o++){var u=r[o];0!==a[u]&&(n=!1)}n&&(s.splice(e--,1),t=i(i.s=r[0]))}return t}var n={},a={app:0},s=[];function o(t){return i.p+"js/"+({about:"about"}[t]||t)+"."+{about:"95e5d3f5"}[t]+".js"}function i(e){if(n[e])return n[e].exports;var r=n[e]={i:e,l:!1,exports:{}};return t[e].call(r.exports,r,r.exports,i),r.l=!0,r.exports}i.e=function(t){var e=[],r=a[t];if(0!==r)if(r)e.push(r[2]);else{var n=new Promise((function(e,n){r=a[t]=[e,n]}));e.push(r[2]=n);var s,u=document.createElement("script");u.charset="utf-8",u.timeout=120,i.nc&&u.setAttribute("nonce",i.nc),u.src=o(t);var c=new Error;s=function(e){u.onerror=u.onload=null,clearTimeout(l);var r=a[t];if(0!==r){if(r){var n=e&&("load"===e.type?"missing":e.type),s=e&&e.target&&e.target.src;c.message="Loading chunk "+t+" failed.\n("+n+": "+s+")",c.name="ChunkLoadError",c.type=n,c.request=s,r[1](c)}a[t]=void 0}};var l=setTimeout((function(){s({type:"timeout",target:u})}),12e4);u.onerror=u.onload=s,document.head.appendChild(u)}return Promise.all(e)},i.m=t,i.c=n,i.d=function(t,e,r){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},i.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(i.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)i.d(r,n,function(e){return t[e]}.bind(null,n));return r},i.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="/repository_management/",i.oe=function(t){throw console.error(t),t};var u=window["webpackJsonp"]=window["webpackJsonp"]||[],c=u.push.bind(u);u.push=e,u=u.slice();for(var l=0;l<u.length;l++)e(u[l]);var p=c;s.push([0,"chunk-vendors"]),r()})({0:function(t,e,r){t.exports=r("56d7")},"0ae5":function(t,e,r){},"30d6":function(t,e,r){"use strict";var n=r("bed1"),a=r.n(n);a.a},"3a4a":function(t,e,r){"use strict";var n=r("5a52"),a=r.n(n);a.a},"3c67":function(t,e,r){"use strict";var n=r("0ae5"),a=r.n(n);a.a},"4e4e":function(t,e,r){},"56d7":function(t,e,r){"use strict";r.r(e);r("e260"),r("e6cf"),r("cca6"),r("a79d");var n=r("2b0e"),a=(r("d3b7"),r("bc3a")),s=r.n(a),o={},i=s.a.create(o);i.interceptors.request.use((function(t){return t}),(function(t){return Promise.reject(t)})),i.interceptors.response.use((function(t){return t}),(function(t){return Promise.reject(t)})),Plugin.install=function(t,e){t.axios=i,window.axios=i,Object.defineProperties(t.prototype,{axios:{get:function(){return i}},$axios:{get:function(){return i}}})},n["a"].use(Plugin);Plugin;var u=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-app",[r("AppHeader"),r("v-content",{staticClass:"app-content"},[r("UserMeta"),r("RepositoriesList")],1)],1)},c=[],l=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-container",[n("v-layout",{attrs:{"text-center":"",wrap:""}},[n("v-flex",{attrs:{xs12:""}},[n("v-img",{staticClass:"my-3",attrs:{src:r("9b19"),contain:"",height:"200"}})],1),n("v-flex",{attrs:{"mb-4":""}},[n("h1",{staticClass:"display-2 font-weight-bold mb-3"},[t._v(" Welcome to Vuetify ")]),n("p",{staticClass:"subheading font-weight-regular"},[t._v(" For help and collaboration with other Vuetify developers, "),n("br"),t._v("please join our online "),n("a",{attrs:{href:"https://community.vuetifyjs.com",target:"_blank"}},[t._v("Discord Community")])])]),n("v-flex",{attrs:{"mb-5":"",xs12:""}},[n("h2",{staticClass:"headline font-weight-bold mb-3"},[t._v("What's next?")]),n("v-layout",{attrs:{"justify-center":""}},t._l(t.whatsNext,(function(e,r){return n("a",{key:r,staticClass:"subheading mx-3",attrs:{href:e.href,target:"_blank"}},[t._v(" "+t._s(e.text)+" ")])})),0)],1),n("v-flex",{attrs:{xs12:"","mb-5":""}},[n("h2",{staticClass:"headline font-weight-bold mb-3"},[t._v("Important Links")]),n("v-layout",{attrs:{"justify-center":""}},t._l(t.importantLinks,(function(e,r){return n("a",{key:r,staticClass:"subheading mx-3",attrs:{href:e.href,target:"_blank"}},[t._v(" "+t._s(e.text)+" ")])})),0)],1),n("v-flex",{attrs:{xs12:"","mb-5":""}},[n("h2",{staticClass:"headline font-weight-bold mb-3"},[t._v("Ecosystem")]),n("v-layout",{attrs:{"justify-center":""}},t._l(t.ecosystem,(function(e,r){return n("a",{key:r,staticClass:"subheading mx-3",attrs:{href:e.href,target:"_blank"}},[t._v(" "+t._s(e.text)+" ")])})),0)],1)],1)],1)},p=[],f={name:"HelloWorld",data:function(){return{ecosystem:[{text:"vuetify-loader",href:"https://github.com/vuetifyjs/vuetify-loader"},{text:"github",href:"https://github.com/vuetifyjs/vuetify"},{text:"awesome-vuetify",href:"https://github.com/vuetifyjs/awesome-vuetify"}],importantLinks:[{text:"Documentation",href:"https://vuetifyjs.com"},{text:"Chat",href:"https://community.vuetifyjs.com"},{text:"Made with Vuetify",href:"https://madewithvuejs.com/vuetify"},{text:"Twitter",href:"https://twitter.com/vuetifyjs"},{text:"Articles",href:"https://medium.com/vuetify"}],whatsNext:[{text:"Explore components",href:"https://vuetifyjs.com/components/api-explorer"},{text:"Select a layout",href:"https://vuetifyjs.com/layout/pre-defined"},{text:"Frequently Asked Questions",href:"https://vuetifyjs.com/getting-started/frequently-asked-questions"}]}}},g=f,d=r("2877"),h=r("6544"),m=r.n(h),v=r("a523"),y=r("0e8f"),b=r("adda"),x=r("a722"),_=Object(d["a"])(g,l,p,!1,null,null,null),P=_.exports;m()(_,{VContainer:v["a"],VFlex:y["a"],VImg:b["a"],VLayout:x["a"]});var w=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-app-bar",{attrs:{app:""}},[r("SearchUser"),r("v-spacer"),r("LoadingProcess")],1)},j=[],S=function(){var t=this,e=t.$createElement,r=t._self._c||e;return t.showLoading?r("div",{staticClass:"pa-0 ma-0"},[r("v-progress-circular",{attrs:{rotate:360,size:50,width:5,indeterminate:"",color:"teal"}})],1):t._e()},z=[],L={computed:{showLoading:function(){return this.$store.getters["loading/isLoading"]},value:function(){return this.$store.getters["loading/progress"]}}},R=L,O=r("490a"),k=Object(d["a"])(R,S,z,!1,null,null,null),A=k.exports;m()(k,{VProgressCircular:O["a"]});var $=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-layout",{staticClass:"ma-0 pa-0",attrs:{row:""}},[r("v-text-field",{attrs:{placeholder:"Input Github Account"},model:{value:t.txtSearch,callback:function(e){t.txtSearch=e},expression:"txtSearch"}}),r("v-btn",{attrs:{disabled:t.disableBtn,text:"",icon:""},on:{click:function(e){return t.getUser()}}},[r("v-icon",[t._v("mdi-television")])],1)],1)},C=[],E=(r("96cf"),{data:function(){return{txtSearch:""}},computed:{disableBtn:function(){return this.$store.getters["loading/isLoading"]}},methods:{getUser:function(){var t;return regeneratorRuntime.async((function(e){while(1)switch(e.prev=e.next){case 0:return t=this.txtSearch,e.next=3,regeneratorRuntime.awrap(this.$store.dispatch("user/getUser",t));case 3:return this.$store.commit("repository/CLEAR_PAGE"),e.next=6,regeneratorRuntime.awrap(this.$store.dispatch("repository/getRepositoriesByPage"));case 6:case"end":return e.stop()}}),null,this)}}}),V=E,I=r("8336"),U=r("132d"),B=r("8654"),M=Object(d["a"])(V,$,C,!1,null,null,null),T=M.exports;m()(M,{VBtn:I["a"],VIcon:U["a"],VLayout:x["a"],VTextField:B["a"]});var N={components:{LoadingProcess:A,SearchUser:T},computed:{}},F=N,H=r("40dc"),D=r("2fa4"),G=Object(d["a"])(F,w,j,!1,null,null,null),W=G.exports;m()(G,{VAppBar:H["a"],VSpacer:D["a"]});var q=function(){var t=this,e=t.$createElement,r=t._self._c||e;return t.hasUser?r("v-layout",{staticClass:"user-meta",attrs:{row:""}},[r("v-flex",{attrs:{xs6:""}},[t._v(t._s(t.username))]),r("v-flex",{attrs:{xs3:""}},[t._v("total : "+t._s(t.totalRepo))]),r("v-flex",{attrs:{xs3:""}},[t._v("seen : "+t._s(t.seenRepo))])],1):t._e()},J=[],Q={data:function(){return{}},computed:{hasUser:function(){return this.$store.getters["user/hasUser"]},username:function(){return this.$store.getters["user/username"]},totalRepo:function(){return this.$store.getters["repository/totalRepo"]},seenRepo:function(){return this.$store.getters["repository/noRepo"]}}},Y=Q,K=(r("9fac"),Object(d["a"])(Y,q,J,!1,null,"148bd047",null)),X=K.exports;m()(K,{VFlex:y["a"],VLayout:x["a"]});var Z=function(){var t=this,e=t.$createElement,r=t._self._c||e;return t.hasUser?r("div",{staticClass:"pa-0 ma-0"},[t._l(t.listRepo,(function(t,e){return[r("RepositoryItem",{key:t.id,attrs:{repository:t,index:e+1}})]})),t.canAddMoreRepo?r("v-btn",{attrs:{block:"",disabled:t.disabledBtn,loading:t.repoIsLoading},on:{click:function(e){return t.getNextRepoPage()}}},[t._v("Load more")]):t._e()],2):t._e()},tt=[],et=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"repo-item"},[r("RepositoryMeta",{attrs:{repository:t.repository,index:t.index}}),r("StargazersList",{attrs:{repository:t.repository}})],1)},rt=[],nt=(r("a9e3"),function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-layout",{staticClass:"repo-meta",attrs:{row:""}},[r("v-flex",{attrs:{xs6:""}},[t._v("("+t._s(t.index)+") : "+t._s(t.repository.name))]),r("v-flex",{attrs:{xs3:""}},[t._v("stargazers : "+t._s(t.repository.totalStargazers))]),r("v-flex",{attrs:{xs3:""}},[t.repository.totalStargazers>0?r("v-btn",{attrs:{disabled:t.disableBtn},on:{click:function(e){return t.listStar()}}},[t._v("List stargazers")]):t._e()],1)],1)}),at=[],st={props:{repository:Object,index:Number},data:function(){return{}},computed:{disableBtn:function(){return this.$store.getters["loading/isLoading"]}},methods:{listStar:function(){return regeneratorRuntime.async((function(t){while(1)switch(t.prev=t.next){case 0:return this.repository.clearPage(),t.next=3,regeneratorRuntime.awrap(this.$store.dispatch("stargazer/getStargazersByPage",this.repository));case 3:case"end":return t.stop()}}),null,this)}}},ot=st,it=(r("30d6"),Object(d["a"])(ot,nt,at,!1,null,"7c6b1c90",null)),ut=it.exports;m()(it,{VBtn:I["a"],VFlex:y["a"],VLayout:x["a"]});var ct=function(){var t=this,e=t.$createElement,r=t._self._c||e;return t.hasStar?r("div",{staticClass:"star-list"},[t._l(t.repository.stargazers,(function(t,e){return[r("StargazerMeta",{key:t.id,attrs:{stargazer:t,index:e+1}})]})),t.canAddMoreStar?r("v-btn",{attrs:{block:"",text:"",loading:t.repository.stargazersLoading,disabled:t.disabledBtn},on:{click:function(e){return t.getNextStarPage()}}},[t._v("Load More Stargazers")]):t._e()],2):t._e()},lt=[],pt=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"star-meta"},[r("span",[t._v(t._s(t.index)+". name : "+t._s(t.stargazer.name))])])},ft=[],gt={props:{stargazer:Object,index:Number}},dt=gt,ht=(r("d823"),Object(d["a"])(dt,pt,ft,!1,null,"6dc54fde",null)),mt=ht.exports,vt={components:{StargazerMeta:mt},props:{repository:Object},computed:{disabledBtn:function(){return this.$store.getters["loading/isLoading"]},canAddMoreStar:function(){return this.repository.stargazers.length<this.repository.totalStargazers},hasStar:function(){return this.repository.stargazers.length>0}},methods:{getNextStarPage:function(){return regeneratorRuntime.async((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,regeneratorRuntime.awrap(this.$store.dispatch("stargazer/getStargazersByPage",this.repository));case 2:case"end":return t.stop()}}),null,this)}}},yt=vt,bt=(r("3c67"),Object(d["a"])(yt,ct,lt,!1,null,"08ab7bb5",null)),xt=bt.exports;m()(bt,{VBtn:I["a"]});var _t={components:{RepositoryMeta:ut,StargazersList:xt},props:{repository:Object,index:Number}},Pt=_t,wt=(r("6d2f"),Object(d["a"])(Pt,et,rt,!1,null,"3ad2e93e",null)),jt=wt.exports,St=(r("99af"),r("b0c0"),r("9f12")),zt=r("53fe"),Lt=function(){function t(e){Object(St["a"])(this,t),this.login=e.login,this.id=e.id}return Object(zt["a"])(t,[{key:"name",get:function(){return this.login}}]),t}(),Rt=r("2ef0"),Ot=r.n(Rt),kt=function(){function t(e){Object(St["a"])(this,t),this.id=e.id,this.name=e.name,this.full_name=e.full_name,this.stargazers_count=e.stargazers_count,this.stargazersPage=0,this.stargazers=[],this.stargazersLoading=!1}return Object(zt["a"])(t,[{key:"addStargazer",value:function(t){var e=new Lt(t);this.stargazers.push(e)}},{key:"clearPage",value:function(){this.stargazersPage=0,this.stargazers=[]}},{key:"addStargazerPage",value:function(t){this.stargazers=Ot.a.concat(this.stargazers,t),this.stargazersPage++}},{key:"noStargazers",get:function(){return this.stargazers.length}},{key:"totalStargazers",get:function(){return this.stargazers_count}},{key:"nextPage",get:function(){return this.stargazersPage+1}},{key:"isLastPage",get:function(){return this.stargazers.length>=this.stargazers_count}}]),t}(),At={components:{RepositoryItem:jt},computed:{disabledBtn:function(){return this.$store.getters["loading/isLoading"]},hasUser:function(){return this.$store.getters["user/hasUser"]},listRepo:function(){return this.$store.getters["repository/repositories"]},canAddMoreRepo:function(){return!this.$store.getters["repository/isLastPage"]},repoIsLoading:function(){return this.$store.getters["repository/isLoading"]}},methods:{getNextRepoPage:function(){return regeneratorRuntime.async((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,regeneratorRuntime.awrap(this.$store.dispatch("repository/getRepositoriesByPage"));case 2:case"end":return t.stop()}}),null,this)}}},$t=At,Ct=Object(d["a"])($t,Z,tt,!1,null,null,null),Et=Ct.exports;m()(Ct,{VBtn:I["a"]});var Vt={name:"App",components:{HelloWorld:P,AppHeader:W,UserMeta:X,RepositoriesList:Et},data:function(){return{}}},It=Vt,Ut=(r("3a4a"),r("7496")),Bt=r("a75b"),Mt=Object(d["a"])(It,u,c,!1,null,"13c33de9",null),Tt=Mt.exports;m()(Mt,{VApp:Ut["a"],VContent:Bt["a"]});var Nt=r("8c4f"),Ft=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"home"},[n("img",{attrs:{alt:"Vue logo",src:r("cf05")}}),n("HelloWorld",{attrs:{msg:"Welcome to Your Vue.js App"}})],1)},Ht=[],Dt={name:"home",components:{HelloWorld:P}},Gt=Dt,Wt=Object(d["a"])(Gt,Ft,Ht,!1,null,null,null),qt=Wt.exports;n["a"].use(Nt["a"]);var Jt=[{path:"/",name:"home",component:qt},{path:"/about",name:"about",component:function(){return r.e("about").then(r.bind(null,"f820"))}}],Qt=new Nt["a"]({mode:"history",base:"/repository_management/",routes:Jt}),Yt=Qt,Kt=r("2f62"),Xt=(r("4160"),r("159b"),{backendEndpoint:"https://api.github.com",timeoutDefault:6e4,itemPerPage:30});function Zt(t){var e={Accept:"application/json","Content-Type":"application/json"};t&&(e=t);var r=s.a.create({baseURL:Xt.backendEndpoint,headers:e,timeout:Xt.timeoutDefault});return r}function te(t,e){var r=Zt(e),n=r.get(t,{onDownloadProgress:function(t){}});return n}var ee={getCaller:Zt,sendGetApi:te},re={getStarPage:function(t,e){var r="/repos/".concat(t,"/stargazers?page=").concat(e,"&per_page=").concat(Xt.itemPerPage);return ee.sendGetApi(r)}},ne={namespaced:!0,state:{},getters:{},mutations:{},actions:{getStargazersByPage:function(t,e){var r,n,a;return regeneratorRuntime.async((function(s){while(1)switch(s.prev=s.next){case 0:if(!e.isLastPage){s.next=2;break}return s.abrupt("return",new Promise);case 2:return r=[],t.commit("loading/LOAD_API",void 0,{root:!0}),e.stargazersLoading=!0,n=re.getStarPage(e.full_name,e.nextPage),a=n.then((function(t){t.data&&t.data.forEach((function(t){var e=new Lt(t);r.push(e)})),e.addStargazerPage(r)})),a.finally((function(){t.commit("loading/FINISH_API",void 0,{root:!0}),e.stargazersLoading=!1})),s.abrupt("return",a);case 9:case"end":return s.stop()}}))}}},ae={getRepoPage:function(t,e){var r="users/".concat(t,"/repos?page=").concat(e,"&per_page=").concat(Xt.itemPerPage);return ee.sendGetApi(r)}},se={namespaced:!0,state:{totalRepos:0,repositories:[],page:0,loading:!1},getters:{repositories:function(t){return t.repositories},noRepo:function(t){return t.repositories.length},totalRepo:function(t){return t.totalRepos},isLastPage:function(t){return t.repositories.length>=t.totalRepos},isLoading:function(t){return t.loading}},mutations:{SET_TOTAL_REPOS:function(t,e){t.totalRepos=e},CLEAR_PAGE:function(t){t.page=0}},actions:{getRepositoriesByPage:function(t){var e,r,n,a,s;return regeneratorRuntime.async((function(o){while(1)switch(o.prev=o.next){case 0:if(!t.getters["isLastPage"]){o.next=2;break}return o.abrupt("return",new Promise);case 2:return e=t.rootGetters["user/login"],r=t.state.page+1,n=[],t.commit("loading/LOAD_API",void 0,{root:!0}),t.state.loading=!0,a=ae.getRepoPage(e,r),s=a.then((function(e){e.data&&e.data.forEach((function(t){var e=new kt(t);n.push(e)})),t.state.repositories=Ot.a.concat(t.state.repositories,n),t.state.page++})),s.finally((function(){t.commit("loading/FINISH_API",void 0,{root:!0}),t.state.loading=!1})),o.abrupt("return",s);case 11:case"end":return o.stop()}}))}}},oe={getUser:function(t){var e="users/".concat(t);return ee.sendGetApi(e)}},ie=function(){function t(e){Object(St["a"])(this,t),this.id=e.id,this.login=e.login,this.name=e.name,this.public_repos=e.public_repos}return Object(zt["a"])(t,[{key:"totalRepos",get:function(){return this.public_repos}}]),t}(),ue={namespaced:!0,state:{user:{},hasUser:!1},getters:{user:function(t){return t.user},username:function(t){return t.user.name},login:function(t){return t.user.login},hasUser:function(t){return t.hasUser}},mutations:{},actions:{getUser:function(t,e){var r,n;return regeneratorRuntime.async((function(a){while(1)switch(a.prev=a.next){case 0:return t.commit("loading/LOAD_API",void 0,{root:!0}),r=oe.getUser(e),n=r.then((function(e){var r=new ie(e.data);t.commit("repository/SET_TOTAL_REPOS",r.totalRepos,{root:!0}),t.state.hasUser=!0,t.state.user=r})),n.finally((function(){t.commit("loading/FINISH_API",void 0,{root:!0})})),a.abrupt("return",n);case 5:case"end":return a.stop()}}))}}},ce={namespaced:!0,state:{loading:!1,progress:0},getters:{isLoading:function(t){return t.loading},progress:function(t){return t.progress}},mutations:{LOAD_API:function(t){t.loading=!0},FINISH_API:function(t){t.loading=!1,t.progress=0}},actions:{}};n["a"].use(Kt["a"]);var le=new Kt["a"].Store({state:{},mutations:{},actions:{},modules:{stargazer:ne,repository:se,user:ue,loading:ce}}),pe=r("f309");n["a"].use(pe["a"]);var fe=new pe["a"]({});n["a"].config.productionTip=!1,new n["a"]({router:Yt,store:le,vuetify:fe,render:function(t){return t(Tt)}}).$mount("#app")},"5a52":function(t,e,r){},"6d2f":function(t,e,r){"use strict";var n=r("6fa5"),a=r.n(n);a.a},"6fa5":function(t,e,r){},"9b19":function(t,e,r){t.exports=r.p+"img/logo.63a7d78d.svg"},"9fac":function(t,e,r){"use strict";var n=r("4e4e"),a=r.n(n);a.a},bed1:function(t,e,r){},cf05:function(t,e,r){t.exports=r.p+"img/logo.82b9c7a5.png"},d823:function(t,e,r){"use strict";var n=r("f591"),a=r.n(n);a.a},f591:function(t,e,r){}});
//# sourceMappingURL=app.b6a93a41.js.map