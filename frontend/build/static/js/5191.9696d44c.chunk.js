"use strict";(self.webpackChunk_coreui_coreui_free_react_admin_template=self.webpackChunk_coreui_coreui_free_react_admin_template||[]).push([[5191],{27676:function(e,t,a){function r(){var e="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6NywibmFtZSI6InRlc3QgbGFzdCIsImVtYWlsIjoidGVzdEB0ZXN0LmNvbSIsImlhdCI6MTY1MjY4Nzk1MH0.FKsgtAw1W-tT6aKxCHV5Ubj8VzkzP5vuzH8ANyy_-pc";return{Authorization:"Bearer "+e}}a.d(t,{Z:function(){return r}})},54221:function(e,t,a){var r=a(30426),s=a(27676),n={getAllWatchCategories:function(){return r.Z.get("/watches/categories",{headers:(0,s.Z)()})},getAllWatchPosts:function(){return r.Z.get("/watches/posts",{headers:(0,s.Z)()})},getWatchCategory:function(e){return r.Z.get("/watches/categories/"+e,{headers:(0,s.Z)()})},getWatchPost:function(e){return r.Z.get("/watches/posts/"+e,{headers:(0,s.Z)()})},postWatchCategory:function(e){return r.Z.post("/watches/categories",e,{headers:(0,s.Z)()})},postWatchPost:function(e){return r.Z.post("/watches/posts",e,{headers:(0,s.Z)()})},deleteWatchCategory:function(e){return r.Z.delete("/watches/categories/"+e,{headers:(0,s.Z)()})},deleteWatchPost:function(e){return r.Z.delete("/watches/posts/"+e,{headers:(0,s.Z)()})},editWatchCategory:function(e){return r.Z.put("/watches/watches/"+e,{headers:(0,s.Z)()})},editWatchPost:function(e){return r.Z.put("/watches/posts/"+e,{headers:(0,s.Z)()})},getWatchesImagesList:function(e){return r.Z.get("/watches/posts/"+e+"/images",{headers:(0,s.Z)()})},deleteImage:function(e){return r.Z.delete("/watches/posts/images"+e,{headers:(0,s.Z)()})},postImage:function(e,t){return r.Z.post("/watches/posts/"+e+"/images",t,{headers:(0,s.Z)(),"Content-Type":"multipart/form-data;"})}};t.Z=n},85191:function(e,t,a){a.r(t);var r=a(70885),s=a(47313),n=a(27998),i=(a(24896),a(54221)),c=a(97890),o=a(29085),l=(a(10310),a(46417));t.default=function(){var e=(0,s.useState)(""),t=(0,r.Z)(e,2),a=t[0],d=t[1],u=(0,s.useState)(""),h=(0,r.Z)(u,2),g=h[0],m=h[1],x=(0,s.useState)(""),p=(0,r.Z)(x,2),f=p[0],j=p[1],Z=(0,s.useState)(""),y=(0,r.Z)(Z,2),C=y[0],v=y[1],w=(0,s.useState)(""),_=(0,r.Z)(w,2),b=_[0],I=_[1],F=(0,s.useState)(""),N=(0,r.Z)(F,2),T=N[0],W=N[1],S=(0,s.useState)("0"),k=(0,r.Z)(S,2),L=k[0],P=k[1],z=(0,o.p)(),A=z.quill,E=z.quillRef,M=(0,c.UO)(),H=(0,c.s0)();return s.useEffect((function(){A&&A.on("text-change",(function(e,t,a){j(E.current.firstChild.innerHTML)}))}),[A]),(0,s.useEffect)((function(){i.Z.getWatchCategory(M.id).then((function(e){e.data.category.title&&d(e.data.category.title),e.data.category.url_slug&&m(e.data.category.url_slug),e.data.category.description&&j(e.data.category.description),e.data.category.meta_title&&v(e.data.category.meta_title),e.data.category.meta_keywords&&I(e.data.category.meta_keywords),e.data.category.meta_desc&&W(e.data.category.meta_desc),e.data.category.is_active&&P(e.data.category.is_active),E.current.firstChild.innerHTML=e.data.category.description}))}),[]),(0,l.jsxs)(n.rb,{children:[(0,l.jsx)(n.b7,{xs:12,children:(0,l.jsxs)(n.xH,{className:"mb-4",children:[(0,l.jsxs)(n.bn,{children:[(0,l.jsx)("strong",{children:"Edit"})," ",(0,l.jsx)("small",{children:"Category Details"})]}),(0,l.jsx)(n.sl,{children:(0,l.jsxs)(n.lx,{className:"row g-3",children:[(0,l.jsxs)(n.b7,{md:6,children:[(0,l.jsx)(n.L8,{htmlFor:"inputEmail4",children:"Title"}),(0,l.jsx)(n.jO,{type:"text",value:a,id:"inputTitle",onChange:function(e){return d(e.target.value)}})]}),(0,l.jsxs)(n.b7,{md:6,children:[(0,l.jsx)(n.L8,{htmlFor:"inputPassword4",children:"Slug"}),(0,l.jsx)(n.jO,{type:"text",value:g,id:"inputSlug",onChange:function(e){return m(e.target.value)}})]}),(0,l.jsxs)("div",{className:"mb-3",children:[(0,l.jsx)(n.L8,{htmlFor:"exampleFormControlTextarea1",children:"Description"}),(0,l.jsx)("div",{children:(0,l.jsx)("div",{ref:E})})]})]})})]})}),(0,l.jsx)(n.b7,{xs:12,children:(0,l.jsxs)(n.xH,{className:"mb-4",children:[(0,l.jsxs)(n.bn,{children:[(0,l.jsx)("strong",{children:"SEO"})," ",(0,l.jsx)("small",{children:"Details"})]}),(0,l.jsx)(n.sl,{children:(0,l.jsxs)(n.lx,{children:[(0,l.jsxs)("div",{className:"mb-3",children:[(0,l.jsx)(n.L8,{htmlFor:"exampleFormControlTextarea1",children:"Meta Title"}),(0,l.jsx)(n.PB,{id:"exampleFormControlTextarea1",value:C,rows:"3",onChange:function(e){return v(e.target.value)}})]}),(0,l.jsxs)("div",{className:"mb-3",children:[(0,l.jsx)(n.L8,{htmlFor:"exampleFormControlTextarea1",children:"Meta Keywords"}),(0,l.jsx)(n.PB,{id:"exampleFormControlTextarea1",value:b,rows:"3",onChange:function(e){return I(e.target.value)}})]}),(0,l.jsxs)("div",{className:"mb-3",children:[(0,l.jsx)(n.L8,{htmlFor:"exampleFormControlTextarea1",children:"Meta Description"}),(0,l.jsx)(n.PB,{id:"exampleFormControlTextarea1",value:T,rows:"3",onChange:function(e){return W(e.target.value)}})]}),(0,l.jsxs)("fieldset",{className:"row mb-3",children:[(0,l.jsx)("legend",{className:"col-form-label col-sm-2 pt-0",children:"Is Active:"}),(0,l.jsxs)(n.b7,{sm:10,children:[(0,l.jsx)(n.EC,{type:"radio",name:"gridRadios",id:"gridRadios1",value:"option1",label:"In Active",onChange:function(){return P("0")},defaultChecked:!0}),(0,l.jsx)(n.EC,{type:"radio",name:"gridRadios",id:"gridRadios2",value:"option2",label:"Active",onChange:function(){return P("1")}})]})]}),(0,l.jsx)(n.u5,{type:"submit",onClick:function(){var e={title:a,slug:g,description:f,meta_title:C,meta_keywords:b,meta_description:T,language_id:1,is_active:L};i.Z.editWatchCategory(M.id,e).then((function(e){e&&H("/watches/categories")}))},children:"Submit"})]})})]})})]})}}}]);