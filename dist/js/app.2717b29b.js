(function(e){function t(t){for(var i,l,c=t[0],u=t[1],a=t[2],m=0,f=[];m<c.length;m++)l=c[m],Object.prototype.hasOwnProperty.call(s,l)&&s[l]&&f.push(s[l][0]),s[l]=0;for(i in u)Object.prototype.hasOwnProperty.call(u,i)&&(e[i]=u[i]);r&&r(t);while(f.length)f.shift()();return o.push.apply(o,a||[]),n()}function n(){for(var e,t=0;t<o.length;t++){for(var n=o[t],i=!0,c=1;c<n.length;c++){var u=n[c];0!==s[u]&&(i=!1)}i&&(o.splice(t--,1),e=l(l.s=n[0]))}return e}var i={},s={app:0},o=[];function l(t){if(i[t])return i[t].exports;var n=i[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,l),n.l=!0,n.exports}l.m=e,l.c=i,l.d=function(e,t,n){l.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},l.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},l.t=function(e,t){if(1&t&&(e=l(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(l.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var i in e)l.d(n,i,function(t){return e[t]}.bind(null,i));return n},l.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return l.d(t,"a",t),t},l.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},l.p="";var c=window["webpackJsonp"]=window["webpackJsonp"]||[],u=c.push.bind(c);c.push=t,c=c.slice();for(var a=0;a<c.length;a++)t(c[a]);var r=u;o.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"034f":function(e,t,n){"use strict";n("85ec")},"56d7":function(e,t,n){"use strict";n.r(t);n("9d4c"),n("450d");var i=n("e450"),s=n.n(i),o=(n("b5d8"),n("f494")),l=n.n(o),c=(n("1f1a"),n("4e4b")),u=n.n(c),a=(n("a586"),n("7464")),r=n.n(a),m=(n("e260"),n("e6cf"),n("cca6"),n("a79d"),n("2b0e")),f=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("router-view")],1)},d=[],v={name:"App",data:function(){return{appbgc:"red"}}},p=v,h=(n("034f"),n("2877")),w=Object(h["a"])(p,f,d,!1,null,null,null),b=w.exports,g=n("8c4f"),y=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"home",style:{"background-color":e.appbgc},attrs:{oncontextmenu:"return false"}},[n("div",{staticClass:"times",on:{click:function(t){return e.closeView()}}},[n("div",{staticClass:"div-time year"},[e._v(" "+e._s(e.time.year.time)+"年 ")]),n("div",{staticClass:"div-time month"},[e._v(" "+e._s(e.time.month.time)+"月 ")]),n("div",{staticClass:"div-time day"},[e._v(" "+e._s(e.time.day.time)+"日 ")]),n("div",{staticClass:"div-time hour"},[e._v(" "+e._s(e.time.hour.time)+"点 ")]),n("div",{staticClass:"div-time minute"},[e._v(" "+e._s(e.time.minute.time)+"分 ")]),n("div",{staticClass:"div-time second"},[e._v(" "+e._s(e.time.second.time)+"秒 ")]),n("div",{staticClass:"div-time week"},[e._v(" "+e._s(e.time.week.time)+" ")])]),n("div",{staticClass:"set-view"},[e.fullf?[n("div",{staticClass:"view-item",on:{click:e.closeFull}},[e._v("退出全屏")])]:[n("div",{staticClass:"view-item",on:{click:e.full}},[e._v("全屏")])],e.setting?[n("div",{staticClass:"view-item",on:{click:e.settings}},[e._v("关闭设置")])]:[n("div",{staticClass:"view-item",on:{click:e.settings}},[e._v("设置")])]],2)])},_=[],F=n("6049"),k=n.n(F),C={name:"Home",components:{},data:function(){return{time:{year:{time:"",color:"",fontsize:""},month:{time:"",color:"",fontsize:""},day:{time:"",color:"",fontsize:""},hour:{time:"",color:"",fontsize:""},minute:{time:"",color:"",fontsize:""},second:{time:"",color:"",fontsize:""},week:{time:"",color:"",fontsize:""}},timeRule:"",weather:{},wi:200,setting:!1,fullf:!1,appbgc:"#000"}},methods:{settings:function(){this.setting=!this.setting,this.closeView()},closeView:function(){var e=document.getElementsByClassName("set-view")[0];e.style.display="none"},full:function(){this.launchFullscreen(document.documentElement),this.fullf=!0,this.closeView()},closeFull:function(){this.fullf=!1,this.exitFullscreen(),this.closeView()},launchFullscreen:function(e){e.requestFullscreen?e.requestFullscreen():e.mozRequestFullScreen?e.mozRequestFullScreen():e.webkitRequestFullscreen?e.webkitRequestFullscreen():e.msRequestFullscreen&&e.msRequestFullscreen()},exitFullscreen:function(){document.exitFullscreen?document.exitFullscreen():document.mozCancelFullScreen?document.mozCancelFullScreen():document.webkitExitFullscreen&&document.webkitExitFullscreen()}},created:function(){var e=this;document.addEventListener("mousedown",(function(e){if(3===e.which){var t=document.getElementsByClassName("set-view")[0];console.log(e.pageX,e.pageY),t.style.display="block",t.style.top="".concat(e.pageY,"px"),t.style.left="".concat(e.pageX,"px")}})),document.addEventListener("keydown",(function(t){"Escape"===t.code&&(e.fullf=!1,e.closeView())})),setInterval((function(){e.time.year.time=k.a.getDate("YY"),e.time.month.time=k.a.getDate("MM"),e.time.day.time=k.a.getDate("DD"),e.time.hour.time=k.a.getDate("hh"),e.time.minute.time=k.a.getDate("mm"),e.time.week.time=k.a.getDate("W"),e.time.second.time=k.a.getDate("ss")}),10)},mounted:function(){}},x=C,O=(n("ce45"),Object(h["a"])(x,y,_,!1,null,"d6596460",null)),j=O.exports,E=function(){var e=this,t=e.$createElement;e._self._c;return e._m(0)},z=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"about"},[n("h1",[e._v("This is an about page")])])}],S={},D=Object(h["a"])(S,E,z,!1,null,null,null),q=D.exports;m["default"].use(g["a"]);var P=[{path:"/",name:"Home",component:j},{path:"/about",name:"About",component:q}],R=new g["a"]({base:"",routes:P}),M=R,V=n("2f62");m["default"].use(V["a"]);var $=new V["a"].Store({state:{},mutations:{},actions:{},modules:{}});m["default"].use(r.a),m["default"].use(u.a),m["default"].use(l.a),m["default"].use(s.a),m["default"].config.productionTip=!1,new m["default"]({router:M,store:$,render:function(e){return e(b)}}).$mount("#app")},7885:function(e,t,n){},"85ec":function(e,t,n){},ce45:function(e,t,n){"use strict";n("7885")}});
//# sourceMappingURL=app.2717b29b.js.map