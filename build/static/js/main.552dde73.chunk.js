(this.webpackJsonpbeerdb=this.webpackJsonpbeerdb||[]).push([[0],{20:function(e,t,a){e.exports={container:"app_container__3pLuu"}},26:function(e,t,a){},3:function(e,t,a){e.exports={beerList:"beerList_beerList__3skii",listItem:"beerList_listItem__1XLQF",secondary:"beerList_secondary__3gloD",thumbnail:"beerList_thumbnail__3WwdB",listItemText:"beerList_listItemText__273of"}},45:function(e,t,a){"use strict";a.r(t);var n=a(0),s=a(1),c=a.n(s),r=a(19),i=a.n(r),o=(a(26),a(5)),l=a.n(o),u=a(9),h=a(4),b=a(10),j=a.n(b),d=a(7),p=a.n(d),m=function(e){var t=e.handleSearch;return Object(n.jsxs)("div",{className:p.a.header,children:[Object(n.jsx)("div",{children:Object(n.jsx)("span",{className:p.a.logo,children:"Pitcher"})}),Object(n.jsx)("div",{className:p.a.search,children:Object(n.jsx)("input",{onChange:t,placeholder:"Search..."})})]})},g=a(3),x=a.n(g),O=function(e){var t=e.paginatedBeerData,a=e.beerImages,s=e.getImage;return Object(n.jsx)(n.Fragment,{children:Object(n.jsx)("div",{className:x.a.beerList,children:t&&a?t.length>0?t.map((function(e,t){return Object(n.jsxs)("div",{className:x.a.listItem,children:[Object(n.jsx)("div",{className:x.a.thumbnail,children:Object(n.jsx)("img",{src:s(t),alt:e.name})}),Object(n.jsxs)("div",{className:x.a.listItemText,children:[e.name&&Object(n.jsx)("h3",{children:e.name}),e.style&&Object(n.jsx)("p",{children:e.style}),e.abv&&Object(n.jsxs)("p",{className:x.a.secondary,children:[e.abv," Alcohol by volume"]}),e.ibu&&Object(n.jsxs)("p",{className:x.a.secondary,title:"International Bitterness Unit",children:[e.ibu," IBU"]}),e.ounces&&Object(n.jsxs)("p",{className:x.a.secondary,children:[e.ounces," ounces"]})]})]},e.id)})):Object(n.jsx)("h1",{children:"No data to be shown"}):Object(n.jsx)("em",{children:"Loading..."})})})},f=a(20),v=a.n(f),_=a(6),N=a.n(_),w=function(e){var t=e.handlePrevious,a=e.currentPage,s=e.handleNext,c=e.totalPages;return Object(n.jsx)(n.Fragment,{children:Object(n.jsxs)("div",{className:N.a.paginationContainer,children:[Object(n.jsx)("button",{onClick:t,className:N.a.navButton,title:"Previous",children:"<"}),Object(n.jsxs)("p",{className:N.a.pageTag,title:"Current Page",children:["Page - ",a," of ",c]}),Object(n.jsx)("button",{onClick:s,className:N.a.navButton,title:"Next",children:">"})]})})},L=function(){var e=Object(s.useState)(),t=Object(h.a)(e,2),a=t[0],c=t[1],r=Object(s.useState)(),i=Object(h.a)(r,2),o=i[0],b=i[1],d=Object(s.useState)(),p=Object(h.a)(d,2),g=p[0],x=p[1],f=Object(s.useState)(),_=Object(h.a)(f,2),N=_[0],L=_[1],y=Object(s.useState)(1),I=Object(h.a)(y,2),C=I[0],k=I[1],B=function(e){b(e),L(e.slice(0,20))},P=function(){var e=Object(u.a)(l.a.mark((function e(){var t,a;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return"https://s3-ap-southeast-1.amazonaws.com/he-public-data/beercraft5bac38c.json",t={"Content-Type":"application/json"},e.prev=2,e.next=5,j.a.get("https://s3-ap-southeast-1.amazonaws.com/he-public-data/beercraft5bac38c.json",{headers:t});case 5:a=e.sent,c(a.data),B(a.data),e.next=13;break;case 10:throw e.prev=10,e.t0=e.catch(2),e.t0;case 13:case"end":return e.stop()}}),e,null,[[2,10]])})));return function(){return e.apply(this,arguments)}}(),S=function(){var e=Object(u.a)(l.a.mark((function e(){var t,a;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return"https://s3-ap-southeast-1.amazonaws.com/he-public-data/beerimages7e0480d.json",t={"Content-Type":"application/json"},e.prev=2,e.next=5,j.a.get("https://s3-ap-southeast-1.amazonaws.com/he-public-data/beerimages7e0480d.json",{headers:t});case 5:a=e.sent,x(a.data),e.next=12;break;case 9:throw e.prev=9,e.t0=e.catch(2),e.t0;case 12:case"end":return e.stop()}}),e,null,[[2,9]])})));return function(){return e.apply(this,arguments)}}();Object(s.useEffect)((function(){P(),S()}),[]);return Object(n.jsx)(n.Fragment,{children:Object(n.jsxs)("div",{className:v.a.container,children:[Object(n.jsx)(m,{handleSearch:function(e){var t=e.target.value,n=a.filter((function(e){return e.name.toLowerCase().includes(t.toLowerCase())}));B(n),k(1)}}),Object(n.jsx)(O,{paginatedBeerData:N,beerImages:g,getImage:function(e){return g[e%5].image}}),N&&N.length>0&&Object(n.jsx)(w,{currentPage:C,totalPages:Math.ceil(o.length/20),handlePrevious:function(){if(C>1){var e=20*(C-1)-20;L(o.slice(e,20*(C-1))),k(C-1)}},handleNext:function(){if(Math.ceil(o.length/20)>=C+1){var e=20*(C+1)-20;L(o.slice(e,(C+1)*Math.min(20,o.length-(20*C-20)))),k(C+1)}}})]})})};i.a.render(Object(n.jsx)(c.a.StrictMode,{children:Object(n.jsx)(L,{})}),document.getElementById("root"))},6:function(e,t,a){e.exports={paginationContainer:"pagination_paginationContainer__1u5uN",navButton:"pagination_navButton__3OVWb",pageTag:"pagination_pageTag__8krbr"}},7:function(e,t,a){e.exports={header:"header_header__3fn4i",logo:"header_logo__14tHM",search:"header_search__Dw7LC"}}},[[45,1,2]]]);
//# sourceMappingURL=main.552dde73.chunk.js.map