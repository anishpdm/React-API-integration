(this["webpackJsonpmy-learn-app2"]=this["webpackJsonpmy-learn-app2"]||[]).push([[0],{68:function(t,e,a){},91:function(t,e,a){"use strict";a.r(e);var n=a(0),c=a.n(n),s=a(9),i=a.n(s),o=(a(68),a(33)),r=a(12),l=a(13),d=a(15),j=a(14),b=a(119),h=a(131),u=a(123),p=a(18),x=a.n(p),O=a(4),m=(n.Component,a(124)),g=(n.Component,n.Component,n.Component,n.Component,n.Component,a(125)),f=a(126),v=a(132),C=a(127),y=a(128),S=a(129),w=a(38),k=a(130),D=function(t){Object(d.a)(a,t);var e=Object(j.a)(a);function a(t){var n;return Object(r.a)(this,a),(n=e.call(this,t)).state={news:[],loadStatus:!1},n.getData=function(){n.setState({loadStatus:!0}),x.a.get("https://newsapi.org/v2/top-headlines?country=in&apiKey=9b6ac262eea44bcbbf80ae1b064f631d").then((function(t){console.log(t.data.articles),n.setState({news:t.data.articles,loadStatus:!1}),console.log(n.course)}))},n.root={maxWidth:345},n.media={height:0,paddingTop:"56.25%"},n.getData(),n}return Object(l.a)(a,[{key:"render",value:function(){var t=this;return Object(O.jsxs)("div",{children:[Object(O.jsx)(u.a,{onClick:this.getData,children:"Get Courses"}),Object(O.jsx)(b.a,{container:!0,children:Object(O.jsx)(b.a,{item:!0,xs:12,sm:6,md:4})}),this.state.loadStatus?Object(O.jsx)(m.a,{color:"secondary"}):Object(O.jsxs)(b.a,{container:!0,children:["    ",this.state.news.map((function(e,a){return Object(O.jsxs)("div",{children:["  ",Object(O.jsx)(b.a,{item:!0,xs:12,sm:12,md:12,children:Object(O.jsxs)(g.a,{style:t.root,children:[Object(O.jsx)(f.a,{avatar:Object(O.jsx)(v.a,{"aria-label":"recipe",style:t.avatar,children:"R"}),action:Object(O.jsx)(C.a,{"aria-label":"settings"}),title:e.title,subheader:e.publishedAt}),Object(O.jsx)(y.a,{image:e.urlToImage,title:"Paella dish"}),Object(O.jsx)(S.a,{children:Object(O.jsx)(w.a,{variant:"body2",color:"textSecondary",component:"p",children:e.description})}),Object(O.jsx)(k.a,{disableSpacing:!0,children:Object(O.jsx)(C.a,{"aria-label":"add to favorites"})})]})}),"    "]})})),"  "]})]})}}]),a}(n.Component);var F=function(){return Object(O.jsx)("div",{className:"App",children:Object(O.jsx)(D,{})})},T=function(t){t&&t instanceof Function&&a.e(3).then(a.bind(null,134)).then((function(e){var a=e.getCLS,n=e.getFID,c=e.getFCP,s=e.getLCP,i=e.getTTFB;a(t),n(t),c(t),s(t),i(t)}))};i.a.render(Object(O.jsx)(c.a.StrictMode,{children:Object(O.jsx)(F,{})}),document.getElementById("root")),T()}},[[91,1,2]]]);
//# sourceMappingURL=main.694e5ffa.chunk.js.map