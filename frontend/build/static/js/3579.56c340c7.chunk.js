"use strict";(self.webpackChunk_coreui_coreui_free_react_admin_template=self.webpackChunk_coreui_coreui_free_react_admin_template||[]).push([[3579],{27676:function(e,t,s){function r(){var e="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6NywibmFtZSI6InRlc3QgbGFzdCIsImVtYWlsIjoidGVzdEB0ZXN0LmNvbSIsImlhdCI6MTY1MjY4Nzk1MH0.FKsgtAw1W-tT6aKxCHV5Ubj8VzkzP5vuzH8ANyy_-pc";return{Authorization:"Bearer "+e}}s.d(t,{Z:function(){return r}})},32279:function(e,t,s){var r=s(30426),a=s(27676),n={getAllNewsCategories:function(){return r.Z.get("/news/categories",{headers:(0,a.Z)()})},getAllNewsPosts:function(){return r.Z.get("/news/posts",{headers:(0,a.Z)()})},getNewsCategory:function(e){return r.Z.get("/news/categories/"+e,{headers:(0,a.Z)()})},getNewsPost:function(e){return r.Z.get("/news/posts/"+e,{headers:(0,a.Z)()})},postNewsCategory:function(e){return r.Z.post("/news/categories/",e,{headers:(0,a.Z)()})},postNewsPost:function(e){return r.Z.post("/news/posts/",e,{headers:(0,a.Z)()})},deleteNewsCategory:function(e){return r.Z.delete("/news/categories/"+e,{headers:(0,a.Z)()})},deleteNewsPost:function(e){return r.Z.delete("/news/posts/"+e,{headers:(0,a.Z)()})},editNewsCategory:function(e,t){return r.Z.put("/news/categories/"+e,t,{headers:(0,a.Z)()})},editNewsPost:function(e,t){return r.Z.put("/news/posts/"+e,t,{headers:(0,a.Z)()})},getNewsImagesList:function(e){return r.Z.get("/news/posts/"+e+"/images",{headers:(0,a.Z)()})},deleteImage:function(e){return r.Z.delete("/news/posts/images"+e,{headers:(0,a.Z)()})},postImage:function(e,t){return r.Z.post("/news/posts/"+e+"/images",t,{headers:(0,a.Z)(),"Content-Type":"multipart/form-data;"})}};t.Z=n},13579:function(e,t,s){s.r(t);var r=s(70885),a=s(47313),n=s(27998),i=(s(24896),s(97890)),o=s(32279),l=s(29085),c=(s(10310),s(46417));t.default=function(){var e=(0,a.useState)(""),t=(0,r.Z)(e,2),s=t[0],d=t[1],u=(0,a.useState)(""),g=(0,r.Z)(u,2),m=g[0],h=g[1],x=(0,a.useState)(""),p=(0,r.Z)(x,2),f=p[0],j=p[1],w=(0,a.useState)(""),Z=(0,r.Z)(w,2),y=Z[0],C=Z[1],v=(0,a.useState)(""),_=(0,r.Z)(v,2),N=_[0],b=_[1],I=(0,a.useState)(""),F=(0,r.Z)(I,2),T=F[0],S=F[1],k=(0,a.useState)("0"),L=(0,r.Z)(k,2),P=L[0],z=L[1],A=(0,l.p)(),E=A.quill,M=A.quillRef,H=(0,i.UO)(),R=(0,i.s0)();return a.useEffect((function(){E&&E.on("text-change",(function(e,t,s){j(M.current.firstChild.innerHTML)}))}),[E]),(0,a.useEffect)((function(){o.Z.getNewsCategory(H.id).then((function(e){e.data.category.title&&d(e.data.category.title),e.data.category.url_slug&&h(e.data.category.url_slug),e.data.category.description&&j(e.data.category.description),e.data.category.meta_title&&C(e.data.category.meta_title),e.data.category.meta_keywords&&b(e.data.category.meta_keywords),e.data.category.meta_desc&&S(e.data.category.meta_desc),e.data.category.is_active&&z(e.data.category.is_active),M.current.firstChild.innerHTML=e.data.category.description}))}),[]),(0,c.jsxs)(n.rb,{children:[(0,c.jsx)(n.b7,{xs:12,children:(0,c.jsxs)(n.xH,{className:"mb-4",children:[(0,c.jsxs)(n.bn,{children:[(0,c.jsx)("strong",{children:"Edit"})," ",(0,c.jsx)("small",{children:"Category Details"})]}),(0,c.jsx)(n.sl,{children:(0,c.jsxs)(n.lx,{className:"row g-3",children:[(0,c.jsxs)(n.b7,{md:6,children:[(0,c.jsx)(n.L8,{htmlFor:"inputEmail4",children:"Title"}),(0,c.jsx)(n.jO,{type:"text",value:s,id:"inputTitle",onChange:function(e){return d(e.target.value)}})]}),(0,c.jsxs)(n.b7,{md:6,children:[(0,c.jsx)(n.L8,{htmlFor:"inputPassword4",children:"Slug"}),(0,c.jsx)(n.jO,{type:"text",value:m,id:"inputSlug",onChange:function(e){return h(e.target.value)}})]}),(0,c.jsxs)("div",{className:"mb-3",children:[(0,c.jsx)(n.L8,{htmlFor:"exampleFormControlTextarea1",children:"Description"}),(0,c.jsx)("div",{children:(0,c.jsx)("div",{ref:M})})]})]})})]})}),(0,c.jsx)(n.b7,{xs:12,children:(0,c.jsxs)(n.xH,{className:"mb-4",children:[(0,c.jsxs)(n.bn,{children:[(0,c.jsx)("strong",{children:"SEO"})," ",(0,c.jsx)("small",{children:"Details"})]}),(0,c.jsx)(n.sl,{children:(0,c.jsxs)(n.lx,{children:[(0,c.jsxs)("div",{className:"mb-3",children:[(0,c.jsx)(n.L8,{htmlFor:"exampleFormControlTextarea1",children:"Meta Title"}),(0,c.jsx)(n.PB,{id:"exampleFormControlTextarea1",value:y,rows:"3",onChange:function(e){return C(e.target.value)}})]}),(0,c.jsxs)("div",{className:"mb-3",children:[(0,c.jsx)(n.L8,{htmlFor:"exampleFormControlTextarea1",children:"Meta Keywords"}),(0,c.jsx)(n.PB,{id:"exampleFormControlTextarea1",value:N,rows:"3",onChange:function(e){return b(e.target.value)}})]}),(0,c.jsxs)("div",{className:"mb-3",children:[(0,c.jsx)(n.L8,{htmlFor:"exampleFormControlTextarea1",children:"Meta Description"}),(0,c.jsx)(n.PB,{id:"exampleFormControlTextarea1",value:T,rows:"3",onChange:function(e){return S(e.target.value)}})]}),(0,c.jsxs)("fieldset",{className:"row mb-3",children:[(0,c.jsx)("legend",{className:"col-form-label col-sm-2 pt-0",children:"Is Active:"}),(0,c.jsxs)(n.b7,{sm:10,children:[(0,c.jsx)(n.EC,{type:"radio",name:"gridRadios",id:"gridRadios1",value:"option1",label:"In Active",onChange:function(){return z("0")},defaultChecked:!0}),(0,c.jsx)(n.EC,{type:"radio",name:"gridRadios",id:"gridRadios2",value:"option2",label:"Active",onChange:function(){return z("1")}})]})]}),(0,c.jsx)(n.u5,{type:"submit",onClick:function(){var e={title:s,url_slug:m,description:f,meta_title:y,meta_keywords:N,meta_description:T,language_id:1,is_active:P};o.Z.editNewsCategory(H.id,e).then((function(e){e&&R("/news/categories")}))},children:"Submit"})]})})]})})]})}}}]);