"use strict";(self.webpackChunk_coreui_coreui_free_react_admin_template=self.webpackChunk_coreui_coreui_free_react_admin_template||[]).push([[7673],{27676:function(e,t,s){function n(){var e="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6NywibmFtZSI6InRlc3QgbGFzdCIsImVtYWlsIjoidGVzdEB0ZXN0LmNvbSIsImlhdCI6MTY1MjY4Nzk1MH0.FKsgtAw1W-tT6aKxCHV5Ubj8VzkzP5vuzH8ANyy_-pc";return{Authorization:"Bearer "+e}}s.d(t,{Z:function(){return n}})},54221:function(e,t,s){var n=s(30426),a=s(27676),r={getAllWatchCategories:function(){return n.Z.get("/watches/categories",{headers:(0,a.Z)()})},getAllWatchPosts:function(){return n.Z.get("/watches/posts",{headers:(0,a.Z)()})},getWatchCategory:function(e){return n.Z.get("/watches/categories/"+e,{headers:(0,a.Z)()})},getWatchPost:function(e){return n.Z.get("/watches/posts/"+e,{headers:(0,a.Z)()})},postWatchCategory:function(e){return n.Z.post("/watches/categories",e,{headers:(0,a.Z)()})},postWatchPost:function(e){return n.Z.post("/watches/posts",e,{headers:(0,a.Z)()})},deleteWatchCategory:function(e){return n.Z.delete("/watches/categories/"+e,{headers:(0,a.Z)()})},deleteWatchPost:function(e){return n.Z.delete("/watches/posts/"+e,{headers:(0,a.Z)()})},editWatchCategory:function(e){return n.Z.put("/watches/watches/"+e,{headers:(0,a.Z)()})},editWatchPost:function(e){return n.Z.put("/watches/posts/"+e,{headers:(0,a.Z)()})},getWatchesImagesList:function(e){return n.Z.get("/watches/posts/"+e+"/images",{headers:(0,a.Z)()})},deleteImage:function(e){return n.Z.delete("/watches/posts/images"+e,{headers:(0,a.Z)()})},postImage:function(e,t){return n.Z.post("/watches/posts/"+e+"/images",t,{headers:(0,a.Z)(),"Content-Type":"multipart/form-data;"})}};t.Z=r},87673:function(e,t,s){s.r(t);var n=s(70885),a=s(47313),r=s(97890),i=s(27998),c=(s(24896),s(54221)),o=s(46417);t.default=function(){var e=(0,a.useState)(""),t=(0,n.Z)(e,2),s=t[0],l=t[1],h=(0,a.useState)(),d=(0,n.Z)(h,2),u=d[0],g=d[1],m=(0,a.useState)("0"),p=(0,n.Z)(m,2),f=p[0],Z=p[1],x=(0,r.s0)(),j=(0,r.UO)();return(0,o.jsxs)(i.rb,{children:[(0,o.jsx)(i.b7,{xs:12,children:(0,o.jsxs)(i.xH,{className:"mb-4",children:[(0,o.jsxs)(i.bn,{children:[(0,o.jsx)("strong",{children:"Add"})," ",(0,o.jsx)("small",{children:"Image Details"})]}),(0,o.jsx)(i.sl,{children:(0,o.jsxs)(i.lx,{className:"row g-3",children:[(0,o.jsxs)(i.b7,{md:6,children:[(0,o.jsx)(i.L8,{htmlFor:"inputEmail4",children:"Caption"}),(0,o.jsx)(i.jO,{type:"text",id:"title",onChange:function(e){return l(e.target.value)}})]}),(0,o.jsxs)("div",{className:"mb-3",children:[(0,o.jsx)(i.L8,{htmlFor:"formFile",children:"Banner Image"}),(0,o.jsx)(i.jO,{type:"file",id:"formFile",onChange:function(e){return g(e.target.files[0])}})]})]})})]})}),(0,o.jsx)(i.b7,{xs:12,children:(0,o.jsxs)(i.xH,{className:"mb-4",children:[(0,o.jsxs)(i.bn,{children:[(0,o.jsx)("strong",{children:"Is Active"})," ",(0,o.jsx)("small",{})]}),(0,o.jsx)(i.sl,{children:(0,o.jsxs)(i.lx,{children:[(0,o.jsx)("fieldset",{className:"row mb-3",children:(0,o.jsxs)(i.b7,{sm:10,children:[(0,o.jsx)(i.EC,{type:"radio",name:"is active",id:"IsActive",value:"inactive",label:"In Active",onChange:function(){return Z("0")},defaultChecked:!0}),(0,o.jsx)(i.EC,{type:"radio",name:"is active",id:"IsActive",value:"active",label:"Active",onChange:function(){return Z("1")}})]})}),(0,o.jsx)(i.u5,{type:"submit",onClick:function(){console.log(u);var e=new FormData;e.append("image",u),e.append("caption",s),e.append("is_active",f),e.append("language_id",1),c.Z.postImage(j.id,e).then((function(e){e&&x("/watches/post-Images-list/"+j.id)}))},children:"Submit"})]})})]})})]})}}}]);