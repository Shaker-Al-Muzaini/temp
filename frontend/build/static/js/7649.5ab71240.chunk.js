"use strict";(self.webpackChunk_coreui_coreui_free_react_admin_template=self.webpackChunk_coreui_coreui_free_react_admin_template||[]).push([[7649],{27676:function(e,t,s){function n(){var e="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6NywibmFtZSI6InRlc3QgbGFzdCIsImVtYWlsIjoidGVzdEB0ZXN0LmNvbSIsImlhdCI6MTY1MjY4Nzk1MH0.FKsgtAw1W-tT6aKxCHV5Ubj8VzkzP5vuzH8ANyy_-pc";return{Authorization:"Bearer "+e}}s.d(t,{Z:function(){return n}})},32279:function(e,t,s){var n=s(30426),r=s(27676),a={getAllNewsCategories:function(){return n.Z.get("/news/categories",{headers:(0,r.Z)()})},getAllNewsPosts:function(){return n.Z.get("/news/posts",{headers:(0,r.Z)()})},getNewsCategory:function(e){return n.Z.get("/news/categories/"+e,{headers:(0,r.Z)()})},getNewsPost:function(e){return n.Z.get("/news/posts/"+e,{headers:(0,r.Z)()})},postNewsCategory:function(e){return n.Z.post("/news/categories/",e,{headers:(0,r.Z)()})},postNewsPost:function(e){return n.Z.post("/news/posts/",e,{headers:(0,r.Z)()})},deleteNewsCategory:function(e){return n.Z.delete("/news/categories/"+e,{headers:(0,r.Z)()})},deleteNewsPost:function(e){return n.Z.delete("/news/posts/"+e,{headers:(0,r.Z)()})},editNewsCategory:function(e,t){return n.Z.put("/news/categories/"+e,t,{headers:(0,r.Z)()})},editNewsPost:function(e,t){return n.Z.put("/news/posts/"+e,t,{headers:(0,r.Z)()})},getNewsImagesList:function(e){return n.Z.get("/news/posts/"+e+"/images",{headers:(0,r.Z)()})},deleteImage:function(e){return n.Z.delete("/news/posts/images"+e,{headers:(0,r.Z)()})},postImage:function(e,t){return n.Z.post("/news/posts/"+e+"/images",t,{headers:(0,r.Z)(),"Content-Type":"multipart/form-data;"})}};t.Z=a},87649:function(e,t,s){s.r(t);var n=s(70885),r=s(47313),a=s(97890),i=s(27998),o=(s(24896),s(32279)),l=s(29085),d=(s(10310),s(46417));t.default=function(){var e=(0,r.useState)(""),t=(0,n.Z)(e,2),s=t[0],c=(t[1],(0,r.useState)("")),u=(0,n.Z)(c,2),h=u[0],p=u[1],m=(0,r.useState)(""),x=(0,n.Z)(m,2),g=x[0],j=x[1],f=(0,r.useState)(""),Z=(0,n.Z)(f,2),w=Z[0],v=Z[1],C=(0,r.useState)(""),b=(0,n.Z)(C,2),N=b[0],I=b[1],F=(0,r.useState)(""),_=(0,n.Z)(F,2),y=_[0],S=_[1],P=(0,r.useState)(""),L=(0,n.Z)(P,2),A=L[0],T=L[1],k=(0,r.useState)(null),D=(0,n.Z)(k,2),O=D[0],z=D[1],B=(0,r.useState)(""),M=(0,n.Z)(B,2),E=M[0],H=M[1],V=(0,r.useState)(""),J=(0,n.Z)(V,2),K=J[0],G=J[1],R=(0,r.useState)(""),Y=(0,n.Z)(R,2),q=Y[0],U=Y[1],W=(0,r.useState)(""),X=(0,n.Z)(W,2),Q=X[0],$=X[1],ee=(0,r.useState)("0"),te=(0,n.Z)(ee,2),se=te[0],ne=te[1],re=(0,l.p)(),ae=re.quill,ie=re.quillRef,oe=(0,a.s0)();return r.useEffect((function(){ae&&ae.on("text-change",(function(e,t,s){I(ie.current.firstChild.innerHTML)}))}),[ae]),(0,d.jsxs)(i.rb,{children:[(0,d.jsx)(i.b7,{xs:12,children:(0,d.jsxs)(i.xH,{className:"mb-4",children:[(0,d.jsxs)(i.bn,{children:[(0,d.jsx)("strong",{children:"Add"})," ",(0,d.jsx)("small",{children:"Post Details"})]}),(0,d.jsx)(i.sl,{children:(0,d.jsxs)(i.lx,{className:"row g-3",children:[(0,d.jsxs)(i.b7,{md:6,children:[(0,d.jsx)(i.L8,{htmlFor:"inputEmail4",children:"Title"}),(0,d.jsx)(i.jO,{type:"text",id:"title",onChange:function(e){return p(e.target.value)}})]}),(0,d.jsxs)(i.b7,{md:6,children:[(0,d.jsx)(i.L8,{htmlFor:"inputPassword4",children:"Slug"}),(0,d.jsx)(i.jO,{type:"text",id:"slug",onChange:function(e){return j(e.target.value)}})]}),(0,d.jsxs)(i.b7,{md:6,children:[(0,d.jsx)(i.L8,{htmlFor:"inputPassword4",children:"Short Description"}),(0,d.jsx)(i.jO,{type:"text",id:"slug",onChange:function(e){return v(e.target.value)}})]}),(0,d.jsxs)("div",{className:"mb-3",children:[(0,d.jsx)(i.L8,{htmlFor:"exampleFormControlTextarea1",children:"Description"}),(0,d.jsx)("div",{children:(0,d.jsx)("div",{ref:ie})})]}),(0,d.jsxs)("div",{className:"mb-3",children:[(0,d.jsx)(i.L8,{htmlFor:"exampleFormControlTextarea1",children:"Additional Description"}),(0,d.jsx)(i.PB,{id:"descriptionTextArea",rows:"3",onChange:function(e){return S(e.target.value)}})]}),(0,d.jsxs)(i.b7,{md:6,children:[(0,d.jsx)(i.L8,{htmlFor:"inputPassword4",children:"Date"}),(0,d.jsx)(i.jO,{type:"text",id:"slug",onChange:function(e){return T(e.target.value)}})]}),(0,d.jsxs)("div",{className:"mb-3",children:[(0,d.jsx)(i.L8,{htmlFor:"formFile",children:"Banner Image"}),(0,d.jsx)(i.jO,{type:"file",id:"formFile",onChange:function(e){return z(e.target.files[0])}})]})]})})]})}),(0,d.jsx)(i.b7,{xs:12,children:(0,d.jsxs)(i.xH,{className:"mb-4",children:[(0,d.jsxs)(i.bn,{children:[(0,d.jsx)("strong",{children:"SEO"})," ",(0,d.jsx)("small",{children:"Details"})]}),(0,d.jsx)(i.sl,{children:(0,d.jsxs)(i.lx,{children:[(0,d.jsxs)("div",{className:"mb-3",children:[(0,d.jsx)(i.L8,{htmlFor:"exampleFormControlTextarea1",children:"Meta Title"}),(0,d.jsx)(i.PB,{id:"metaTitle",rows:"3",onChange:function(e){return H(e.target.value)}})]}),(0,d.jsxs)("div",{className:"mb-3",children:[(0,d.jsx)(i.L8,{htmlFor:"exampleFormControlTextarea1",children:"Meta Keywords"}),(0,d.jsx)(i.PB,{id:"metaKeywords",rows:"3",onChange:function(e){return G(e.target.value)}})]}),(0,d.jsxs)("div",{className:"mb-3",children:[(0,d.jsx)(i.L8,{htmlFor:"exampleFormControlTextarea1",children:"Meta Description"}),(0,d.jsx)(i.PB,{id:"metaDescription",rows:"3",onChange:function(e){return U(e.target.value)}})]}),(0,d.jsxs)("fieldset",{className:"row mb-3",children:[(0,d.jsx)("legend",{className:"col-form-label col-sm-2 pt-0",children:"Is Active:"}),(0,d.jsxs)(i.b7,{sm:10,children:[(0,d.jsx)(i.EC,{type:"radio",name:"is active",id:"IsActive",value:"inactive",label:"In Active",onChange:function(){return ne("0")},defaultChecked:!0}),(0,d.jsx)(i.EC,{type:"radio",name:"is active",id:"IsActive",value:"active",label:"Active",onChange:function(){return ne("1")}})]})]}),(0,d.jsxs)(i.b7,{md:6,children:[(0,d.jsx)(i.L8,{htmlFor:"inputPassword4",children:"Sort Order"}),(0,d.jsx)(i.jO,{type:"text",id:"slug",onChange:function(e){return $(e.target.value)}})]}),(0,d.jsx)("br",{}),(0,d.jsx)(i.u5,{type:"submit",onClick:function(){var e=new FormData;e.append("categories",s),e.append("title",h),e.append("slug",g),e.append("short_description",w),e.append("description",N),e.append("additional_description",y),e.append("banner_image",O),e.append("date",A),e.append("meta_title",E),e.append("meta_tags",K),e.append("meta_description",q),e.append("sort_order",Q),e.append("language_id",1),e.append("is_active",se),o.Z.postNewsPost(e).then((function(e){e&&oe("/news/posts")}))},children:"Submit"})]})})]})})]})}}}]);