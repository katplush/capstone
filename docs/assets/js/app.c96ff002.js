(function(t){function e(e){for(var n,i,s=e[0],l=e[1],u=e[2],d=0,p=[];d<s.length;d++)i=s[d],a[i]&&p.push(a[i][0]),a[i]=0;for(n in l)Object.prototype.hasOwnProperty.call(l,n)&&(t[n]=l[n]);c&&c(e);while(p.length)p.shift()();return o.push.apply(o,u||[]),r()}function r(){for(var t,e=0;e<o.length;e++){for(var r=o[e],n=!0,s=1;s<r.length;s++){var l=r[s];0!==a[l]&&(n=!1)}n&&(o.splice(e--,1),t=i(i.s=r[0]))}return t}var n={},a={app:0},o=[];function i(e){if(n[e])return n[e].exports;var r=n[e]={i:e,l:!1,exports:{}};return t[e].call(r.exports,r,r.exports,i),r.l=!0,r.exports}i.m=t,i.c=n,i.d=function(t,e,r){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},i.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(i.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)i.d(r,n,function(e){return t[e]}.bind(null,n));return r},i.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],l=s.push.bind(s);s.push=e,s=s.slice();for(var u=0;u<s.length;u++)e(s[u]);var c=l;o.push([0,"chunk-vendors"]),r()})({0:function(t,e,r){t.exports=r("56d7")},"0261":function(t,e,r){},"034f":function(t,e,r){"use strict";var n=r("64a9"),a=r.n(n);a.a},"1bec":function(t,e,r){"use strict";var n=r("7e33"),a=r.n(n);a.a},"1e93":function(t,e,r){"use strict";var n=r("df46"),a=r.n(n);a.a},2044:function(t,e,r){},"47f8":function(t,e,r){t.exports=r.p+"assets/img/txt-only_edited_logo.b0317f08.jpg"},"56d7":function(t,e,r){"use strict";r.r(e);r("cadf"),r("551c"),r("f751"),r("097d");var n=r("a026"),a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("Navigation"),n("img",{staticClass:"logo",attrs:{alt:"Sync logo",src:r("47f8"),width:"250",height:"auto"}}),n("router-view")],1)},o=[],i=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("nav",{staticClass:"spacing"},t._l(t.links,function(e){return r("router-link",{key:e.id,staticClass:"spacing",attrs:{to:""+e.page}},[t._v(t._s(e.text))])}),1)])},s=[],l={name:"Navigation",data:function(){return{links:[{id:0,text:"Home",page:"/"},{id:1,text:"Shop",page:"/Shop"},{id:2,text:"About Us",page:"/About"}]}}},u=l,c=(r("9028"),r("2877")),d=Object(c["a"])(u,i,s,!1,null,null,null),p=d.exports,f={name:"app",components:{Navigation:p}},v=f,m=(r("034f"),Object(c["a"])(v,a,o,!1,null,null,null)),b=m.exports,h=r("5f5b"),g=(r("f9e3"),r("2dd8"),r("8c4f")),_=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("div",[r("b-img",{attrs:{src:"https://res.cloudinary.com/dlp1f5oxt/image/upload/v1566701832/IMG_Cover.jpg",fluid:"",alt:"Responsive image"}})],1),r("div",[r("b-card",{attrs:{"bg-variant":"light","text-variant":"dark",title:""}},[r("b-card-text",{attrs:{id:"shopUs"}},[t._v("\n    Picky dogs love us!\n  ")]),r("b-button",{attrs:{size:"lg",href:"#",variant:"dark"}},[t._v("SHOP")])],1)],1)])},y=[],x={name:"HelloWorld",props:{msg:String}},w=x,S=(r("1e93"),Object(c["a"])(w,_,y,!1,null,"1c25d489",null)),O=S.exports,j=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("b-container",{staticClass:"rounded-0",attrs:{fluid:""}},[r("div",{attrs:{id:"buy"}},[r("b-card",{staticClass:"overflow-hidden",staticStyle:{"max-width":"800px"},attrs:{"no-body":""}},[r("b-row",{attrs:{"no-gutters":""}},[r("b-col",{attrs:{md:"6"}},[r("b-card-img",{staticClass:"rounded-0",attrs:{src:"https://res.cloudinary.com/dlp1f5oxt/image/upload/v1566707685/IMG_Shop_Treat_rnlgem.jpg"}})],1),r("b-col",{attrs:{md:"6"}},[r("b-card-body",{attrs:{title:"Liver Treats"}},[r("b-card-text",[t._v("\r\n            Simple grass fed dehydrated beef liver treats. Spanning the history of our kinship, organ meat has been the main prize for our furry friends. Liver in particular offers a nutritious and delectable treat they are sure to crave. Specially sourced from grass fed cows and dehydrated to preserve taste and nutrition, these treats call back to the  relationship we’ve bred from time immemorial."),r("br"),t._v("8 oz. bag"),r("br"),r("b",[t._v("$9.99")])]),r("b-button",{directives:[{name:"b-popover",rawName:"v-b-popover.hover",value:"Online Store is not available at this time.",expression:"'Online Store is not available at this time.'",modifiers:{hover:!0}}],attrs:{size:"lg",variant:"outline-dark",title:"Sorry!"}},[t._v("Buy")])],1)],1)],1)],1)],1)])},k=[],C={name:"Shop"},M=C,E=(r("1bec"),Object(c["a"])(M,j,k,!1,null,null,null)),P=E.exports,$=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("div",{staticClass:"about"},[r("b-card",{attrs:{"border-variant":"white","img-src":"https://res.cloudinary.com/dlp1f5oxt/image/upload/c_scale,h_350/v1566713753/IMG_the_kids_l5wbf8.png","img-alt":"Card image","img-right":""}},[r("b-card-text",[t._v("\n      We love our animals. To us, they’re more that pets, they’re family. Like all families we want to do our best to provide for those we care about. It is with this in mind that we created our flagship dog treats.\n    ")])],1)],1),r("google-map")],1)},I=[],z=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"google-map"},[r("h1",[t._v(t._s(t.msg))]),r("div",{attrs:{id:"map"}})])},A=[],T="AIzaSyCAaKxarMELXClM-XK_jSSWyeI5bIxKuLE",L=r("a709"),H={name:"google-map",data:function(){return{msg:"Our favorite dog parks"}},mounted:function(){L({key:T}).then(function(t){new t.Map(document.querySelector("#map"),{center:{lat:47.69111,lng:-122.400389},zoom:17})}).catch(function(t){console.error(t)})}},N=H,W=(r("6e94"),Object(c["a"])(N,z,A,!1,null,"5b8b5d08",null)),G=W.exports,K={name:"About",components:{"google-map":G}},J=K,U=(r("e893"),Object(c["a"])(J,$,I,!1,null,"3f73b3c4",null)),X=U.exports;n["default"].use(g["a"]);var q=new g["a"]({routes:[{path:"/",name:"HelloWorld",component:O},{path:"/shop",name:"Shop",component:P},{path:"/about",name:"About",component:X}]});n["default"].use(h["a"]),n["default"].config.productionTip=!1,new n["default"]({render:function(t){return t(b)},router:q}).$mount("#app")},"64a9":function(t,e,r){},"6e94":function(t,e,r){"use strict";var n=r("0261"),a=r.n(n);a.a},"7e33":function(t,e,r){},9028:function(t,e,r){"use strict";var n=r("2044"),a=r.n(n);a.a},df46:function(t,e,r){},e1d0:function(t,e,r){},e893:function(t,e,r){"use strict";var n=r("e1d0"),a=r.n(n);a.a}});
//# sourceMappingURL=app.c96ff002.js.map