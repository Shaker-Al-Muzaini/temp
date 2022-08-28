"use strict";(self.webpackChunk_coreui_coreui_free_react_admin_template=self.webpackChunk_coreui_coreui_free_react_admin_template||[]).push([[4701],{27676:function(e,t,s){function r(){var e="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6NywibmFtZSI6InRlc3QgbGFzdCIsImVtYWlsIjoidGVzdEB0ZXN0LmNvbSIsImlhdCI6MTY1MjY4Nzk1MH0.FKsgtAw1W-tT6aKxCHV5Ubj8VzkzP5vuzH8ANyy_-pc";return{Authorization:"Bearer "+e}}s.d(t,{Z:function(){return r}})},55008:function(e,t,s){var r=s(30426),i=s(27676),n="/celebrities",a={getAllCelebritiesCategories:function(){return r.Z.get(n+"/categories",{headers:(0,i.Z)()})},getAllCelebritiesPosts:function(){return r.Z.get(n+"/posts",{headers:(0,i.Z)()})},getCelebritiesCategory:function(e){return r.Z.get(n+"/categories/"+e,{headers:(0,i.Z)()})},getCelebritiesPost:function(e){return r.Z.get(n+"/posts/"+e,{headers:(0,i.Z)()})},postCelebritiesCategory:function(e){return r.Z.post(n,e,{headers:(0,i.Z)()})},postCelebritiesPost:function(e){return r.Z.post(n,e,{headers:(0,i.Z)()})},deleteCelebritiesCategory:function(e){return r.Z.delete(n+"/categories/"+e,{headers:(0,i.Z)()})},deleteCelebritiesPost:function(e){return r.Z.delete(n+"/posts/"+e,{headers:(0,i.Z)()})},editCelebritiesCategory:function(e,t){return r.Z.put(n+"/categories/"+e,t,{headers:(0,i.Z)()})},editCelebritiesPost:function(e,t){return r.Z.put(n+"/posts/"+e,t,{headers:(0,i.Z)()})},getCelebrityImagesList:function(e){return r.Z.get(n+"/posts/"+e+"/images",{headers:(0,i.Z)()})},deleteImage:function(e){return r.Z.delete(n+"/posts/images"+e,{headers:(0,i.Z)()})},postImage:function(e,t){return r.Z.post(n+"/posts/"+e+"/images",t,{headers:(0,i.Z)(),"Content-Type":"multipart/form-data;"})}};t.Z=a},94701:function(e,t,s){s.r(t);var r=s(70885),i=s(47313),n=s(27998),a=(s(24896),s(55008)),l=s(29085),o=(s(10310),s(46417));t.default=function(){var e=(0,i.useState)(""),t=(0,r.Z)(e,2),s=t[0],c=t[1],d=(0,i.useState)(""),u=(0,r.Z)(d,2),h=u[0],m=u[1],x=(0,i.useState)(""),g=(0,r.Z)(x,2),j=g[0],f=g[1],p=(0,i.useState)(""),C=(0,r.Z)(p,2),b=C[0],Z=C[1],v=(0,i.useState)(null),I=(0,r.Z)(v,2),y=I[0],_=I[1],F=(0,i.useState)(""),N=(0,r.Z)(F,2),S=N[0],w=N[1],P=(0,i.useState)(""),A=(0,r.Z)(P,2),L=A[0],T=A[1],k=(0,i.useState)(""),z=(0,r.Z)(k,2),M=z[0],B=z[1],D=(0,i.useState)(!1),E=(0,r.Z)(D,2),H=E[0],O=E[1],V=(0,l.p)(),J=V.quill,K=V.quillRef;return i.useEffect((function(){J&&J.on("text-change",(function(e,t,s){Z(K.current.firstChild.innerHTML)}))}),[J]),(0,o.jsxs)(n.rb,{children:[(0,o.jsx)(n.b7,{xs:12,children:(0,o.jsxs)(n.xH,{className:"mb-4",children:[(0,o.jsxs)(n.bn,{children:[(0,o.jsx)("strong",{children:"Add"})," ",(0,o.jsx)("small",{children:"Post Details"})]}),(0,o.jsx)(n.sl,{children:(0,o.jsxs)(n.lx,{className:"row g-3",children:[(0,o.jsxs)(n.b7,{md:6,children:[(0,o.jsx)(n.L8,{htmlFor:"inputEmail4",children:"Title"}),(0,o.jsx)(n.jO,{type:"text",id:"title",onChange:function(e){return c(e.target.value)}})]}),(0,o.jsxs)(n.b7,{md:6,children:[(0,o.jsx)(n.L8,{htmlFor:"inputPassword4",children:"Slug"}),(0,o.jsx)(n.jO,{type:"text",id:"slug",onChange:function(e){return m(e.target.value)}})]}),(0,o.jsxs)(n.b7,{md:12,children:[(0,o.jsx)(n.L8,{htmlFor:"inputPassword4",children:"Short Description"}),(0,o.jsx)(n.jO,{type:"text",id:"description",onChange:function(e){return f(e.target.value)}})]}),(0,o.jsxs)("div",{className:"mb-3",children:[(0,o.jsx)(n.L8,{htmlFor:"exampleFormControlTextarea1",children:"Description"}),(0,o.jsx)("div",{children:(0,o.jsx)("div",{ref:K})})]}),(0,o.jsxs)("div",{className:"mb-3",children:[(0,o.jsx)(n.L8,{htmlFor:"formFile",children:"Banner Image"}),(0,o.jsx)(n.jO,{type:"file",id:"formFile",onChange:function(e){return _(e.target.files[0])}})]})]})})]})}),(0,o.jsx)(n.b7,{xs:12,children:(0,o.jsxs)(n.xH,{className:"mb-4",children:[(0,o.jsxs)(n.bn,{children:[(0,o.jsx)("strong",{children:"SEO"})," ",(0,o.jsx)("small",{children:"Details"})]}),(0,o.jsx)(n.sl,{children:(0,o.jsxs)(n.lx,{children:[(0,o.jsxs)("div",{className:"mb-3",children:[(0,o.jsx)(n.L8,{htmlFor:"exampleFormControlTextarea1",children:"Meta Title"}),(0,o.jsx)(n.PB,{id:"metaTitle",rows:"3",onChange:function(e){return w(e.target.value)}})]}),(0,o.jsxs)("div",{className:"mb-3",children:[(0,o.jsx)(n.L8,{htmlFor:"exampleFormControlTextarea1",children:"Meta Keywords"}),(0,o.jsx)(n.PB,{id:"metaKeywords",rows:"3",onChange:function(e){return T(e.target.value)}})]}),(0,o.jsxs)("div",{className:"mb-3",children:[(0,o.jsx)(n.L8,{htmlFor:"exampleFormControlTextarea1",children:"Meta Description"}),(0,o.jsx)(n.PB,{id:"metaDescription",rows:"3",onChange:function(e){return B(e.target.value)}})]}),(0,o.jsxs)("fieldset",{className:"row mb-3",children:[(0,o.jsx)("legend",{className:"col-form-label col-sm-2 pt-0",children:"Is Active:"}),(0,o.jsxs)(n.b7,{sm:10,children:[(0,o.jsx)(n.EC,{type:"radio",name:"is active",id:"IsActive",value:"inactive",label:"In Active",onChange:function(){return O(!1)},defaultChecked:!0}),(0,o.jsx)(n.EC,{type:"radio",name:"is active",id:"IsActive",value:"active",label:"Active",onChange:function(){return O(!0)}})]})]}),(0,o.jsxs)(n.u5,{type:"submit",onClick:function(){var e={title:s,slug:h,short_description:j,description:b,banner_image:y,meta_title:S,meta_keywords:L,meta_desc:M,language_id:1,is_active:H};a.Z.postCelebritiesPost(e)},children:[" ","Submit"]})]})})]})})]})}}}]);