"use strict";(self.webpackChunk_coreui_coreui_free_react_admin_template=self.webpackChunk_coreui_coreui_free_react_admin_template||[]).push([[4670,8951],{27676:function(e,t,s){function r(){var e="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6NywibmFtZSI6InRlc3QgbGFzdCIsImVtYWlsIjoidGVzdEB0ZXN0LmNvbSIsImlhdCI6MTY1MjY4Nzk1MH0.FKsgtAw1W-tT6aKxCHV5Ubj8VzkzP5vuzH8ANyy_-pc";return{Authorization:"Bearer "+e}}s.d(t,{Z:function(){return r}})},86374:function(e,t,s){var r=s(30426),i=s(27676),n="/photoshoots",o={getAllPhotoshoots:function(){return r.Z.get(n,{headers:(0,i.Z)()})},getPhotoshoots:function(e){return r.Z.get(n+"/"+e,{headers:(0,i.Z)()})},postPhotoshoots:function(e){return r.Z.post(n,e,{headers:(0,i.Z)()})},deletePhotoshoots:function(e){return r.Z.delete(n+"/"+e,{headers:(0,i.Z)()})},editPhotoshoots:function(e,t){return r.Z.put(n+"/"+e,t,{headers:(0,i.Z)()})},getPhotoshootImagesList:function(e){return r.Z.get(n+"/posts/"+e+"/images",{headers:(0,i.Z)()})},deleteImage:function(e){return r.Z.delete(n+"/posts/images"+e,{headers:(0,i.Z)()})},postImage:function(e,t){return r.Z.post(n+"/posts/"+e+"/images",t,{headers:(0,i.Z)(),"Content-Type":"multipart/form-data;"})}};t.Z=o},94670:function(e,t,s){s.r(t);var r=s(70885),i=s(47313),n=s(27998),o=(s(24896),s(97890)),l=(s(98951),s(86374)),c=s(29085),a=(s(10310),s(46417));t.default=function(){var e=(0,i.useState)(""),t=(0,r.Z)(e,2),s=t[0],h=t[1],d=(0,i.useState)(""),u=(0,r.Z)(d,2),m=u[0],x=u[1],j=(0,i.useState)(""),p=(0,r.Z)(j,2),f=p[0],g=p[1],v=(0,i.useState)(""),Z=(0,r.Z)(v,2),C=(Z[0],Z[1]),y=(0,i.useState)(null),N=(0,r.Z)(y,2),b=N[0],I=N[1],_=(0,i.useState)(""),w=(0,r.Z)(_,2),H=w[0],S=w[1],A=(0,i.useState)(""),F=(0,r.Z)(A,2),L=F[0],P=F[1],M=(0,i.useState)(""),V=(0,r.Z)(M,2),k=V[0],T=V[1],z=(0,i.useState)(""),E=(0,r.Z)(z,2),D=E[0],O=E[1],B=(0,i.useState)("0"),J=(0,r.Z)(B,2),K=J[0],R=J[1],G=(0,c.p)(),Y=G.quill,q=G.quillRef,U=(0,o.s0)();return i.useEffect((function(){Y&&Y.on("text-change",(function(e,t,s){g(q.current.firstChild.innerHTML)}))}),[Y]),(0,a.jsxs)(n.rb,{children:[(0,a.jsx)(n.b7,{xs:12,children:(0,a.jsxs)(n.xH,{className:"mb-4",children:[(0,a.jsxs)(n.bn,{children:[(0,a.jsx)("strong",{children:"Add"})," ",(0,a.jsx)("small",{children:"Photoshoot Details"})]}),(0,a.jsx)(n.sl,{children:(0,a.jsxs)(n.lx,{className:"row g-3",children:[(0,a.jsxs)(n.b7,{md:6,children:[(0,a.jsx)(n.L8,{htmlFor:"inputEmail4",children:"Title"}),(0,a.jsx)(n.jO,{type:"text",id:"title",onChange:function(e){return h(e.target.value)}})]}),(0,a.jsxs)(n.b7,{md:6,children:[(0,a.jsx)(n.L8,{htmlFor:"inputPassword4",children:"Slug"}),(0,a.jsx)(n.jO,{type:"text",id:"slug",onChange:function(e){return x(e.target.value)}})]}),(0,a.jsxs)("div",{className:"mb-3",children:[(0,a.jsx)(n.L8,{htmlFor:"exampleFormControlTextarea1",children:"Description"}),(0,a.jsx)("div",{children:(0,a.jsx)("div",{ref:q})})]}),(0,a.jsxs)(n.b7,{md:6,children:[(0,a.jsx)(n.L8,{htmlFor:"inputPassword4",children:"City Name"}),(0,a.jsx)(n.jO,{type:"text",id:"slug",onChange:function(e){return C(e.target.value)}})]}),(0,a.jsxs)("div",{className:"mb-3",children:[(0,a.jsx)(n.L8,{htmlFor:"formFile",children:"Banner Image"}),(0,a.jsx)(n.jO,{type:"file",id:"formFile",onChange:function(e){return I(e.target.files[0])}})]}),(0,a.jsxs)(n.b7,{md:6,children:[(0,a.jsx)(n.L8,{htmlFor:"inputPassword4",children:"Event Date"}),(0,a.jsx)(n.jO,{type:"text",id:"slug",onChange:function(e){return S(e.target.value)}})]})]})})]})}),(0,a.jsx)(n.b7,{xs:12,children:(0,a.jsxs)(n.xH,{className:"mb-4",children:[(0,a.jsxs)(n.bn,{children:[(0,a.jsx)("strong",{children:"SEO"})," ",(0,a.jsx)("small",{children:"Details"})]}),(0,a.jsx)(n.sl,{children:(0,a.jsxs)(n.lx,{children:[(0,a.jsxs)("div",{className:"mb-3",children:[(0,a.jsx)(n.L8,{htmlFor:"exampleFormControlTextarea1",children:"Meta Title"}),(0,a.jsx)(n.PB,{id:"metaTitle",rows:"3",onChange:function(e){return P(e.target.value)}})]}),(0,a.jsxs)("div",{className:"mb-3",children:[(0,a.jsx)(n.L8,{htmlFor:"exampleFormControlTextarea1",children:"Meta Keywords"}),(0,a.jsx)(n.PB,{id:"metaKeywords",rows:"3",onChange:function(e){return T(e.target.value)}})]}),(0,a.jsxs)("div",{className:"mb-3",children:[(0,a.jsx)(n.L8,{htmlFor:"exampleFormControlTextarea1",children:"Meta Description"}),(0,a.jsx)(n.PB,{id:"metaDescription",rows:"3",onChange:function(e){return O(e.target.value)}})]}),(0,a.jsxs)("fieldset",{className:"row mb-3",children:[(0,a.jsx)("h6",{children:"Status"}),(0,a.jsx)("legend",{className:"col-form-label col-sm-2 pt-0",children:"Is Active:"}),(0,a.jsxs)(n.b7,{sm:10,children:[(0,a.jsx)(n.EC,{type:"radio",name:"is active",id:"IsActive",value:"inactive",label:"In Active",onChange:function(){return R("0")},defaultChecked:!0}),(0,a.jsx)(n.EC,{type:"radio",name:"is active",id:"IsActive",value:"active",label:"Active",onChange:function(){return R("1")}})]})]}),(0,a.jsxs)(n.u5,{type:"submit",onClick:function(){var e={title:s,classified_slug:m,description:f,event_data:H,banner_image:b,meta_title:L,meta_keywords:k,meta_desc:D,language_id:1,isActive:K};l.Z.postPhotoshoots(e).then((function(e){e&&U("/photoshoot/photoshoot-list")}))},children:[" ","Submit"]})]})})]})})]})}},98951:function(e,t,s){s.r(t);var r=s(70885),i=s(47313),n=s(27998),o=(s(24896),s(22370)),l=s(7052),c=s(10094),a=s(45498),h=s(97890),d=s(86374),u=s(46417);t.default=function(){var e=(0,i.useState)([]),t=(0,r.Z)(e,2),s=t[0],m=t[1],x=(0,h.s0)();function j(){d.Z.getAllPhotoshoots().then((function(e){m(e.data.photoshoots)}))}return(0,i.useEffect)((function(){j()}),[]),(0,u.jsx)(n.b7,{xs:12,children:(0,u.jsxs)(n.xH,{className:"mb-4",children:[(0,u.jsxs)(n.bn,{children:[(0,u.jsx)("strong",{children:"Photoshoot"})," ",(0,u.jsx)("small",{children:" List"})]}),(0,u.jsx)(n.sl,{children:(0,u.jsxs)(n.Sx,{children:[(0,u.jsx)(n.V,{children:(0,u.jsxs)(n.T6,{children:[(0,u.jsx)(n.is,{scope:"col",children:"No #"}),(0,u.jsx)(n.is,{scope:"col",style:{width:"20%"},children:"Title"}),(0,u.jsx)(n.is,{scope:"col",children:"Images"}),(0,u.jsx)(n.is,{scope:"col",children:"Created Date"}),(0,u.jsx)(n.is,{scope:"col",children:"Status"}),(0,u.jsx)(n.is,{scope:"col",children:"Action"})]})}),(0,u.jsx)(n.NR,{children:s.map((function(e,t){return(0,u.jsxs)(n.T6,{children:[(0,u.jsx)(n.is,{scope:"row",children:e.id}),(0,u.jsx)(n.NN,{children:e.title}),(0,u.jsxs)(n.NN,{children:[" ",(0,u.jsxs)(n.u5,{color:"link",onClick:function(){return x("/photoshoot/post-images-list/"+e.id)},children:[(0,u.jsx)(o.Z,{icon:l.z,className:"me-2"}),"Image List"]})]}),"                  ",(0,u.jsx)(n.NN,{children:e.created_date_time}),(0,u.jsx)(n.NN,{children:"1"==e.is_active?"Active":"In Active"}),(0,u.jsxs)(n.NN,{children:[(0,u.jsxs)(n.u5,{onClick:function(){x("/photoshoot/edit-photoshoot/"+e.id)},color:"primary",className:"me-2",children:[(0,u.jsx)(o.Z,{icon:c.l,className:"me-2"}),"Edit"]}),(0,u.jsxs)(n.u5,{onClick:function(){var t;t=e.id,console.log(t),d.Z.deletePhotoshoots(t).then((function(e){e&&j()}))},color:"danger",children:[(0,u.jsx)(o.Z,{icon:a.N,className:"me-2"}),"Delete"]})]})]},t)}))})]})})]})})}},7052:function(e,t,s){s.d(t,{z:function(){return r}});var r=["512 512","<path fill='var(--ci-primary-color, currentColor)' d='M40,472H472V40H40ZM440,348.142,328.628,236.769l46.6-46.6L440,254.935ZM72,72H440V209.68l-64.769-64.77L306,214.142l-100-100-134,134Zm0,221.4,134-134,234,234V440H72Z' class='ci-primary'/>"]},10094:function(e,t,s){s.d(t,{l:function(){return r}});var r=["512 512","<path fill='var(--ci-primary-color, currentColor)' d='M29.663,482.25l.087.087a24.847,24.847,0,0,0,17.612,7.342,25.178,25.178,0,0,0,8.1-1.345l142.006-48.172,272.5-272.5A88.832,88.832,0,0,0,344.334,42.039l-272.5,272.5L23.666,456.541A24.844,24.844,0,0,0,29.663,482.25Zm337.3-417.584a56.832,56.832,0,0,1,80.371,80.373L411.5,180.873,331.127,100.5ZM99.744,331.884,308.5,123.127,388.873,203.5,180.116,412.256,58.482,453.518Z' class='ci-primary'/>"]},45498:function(e,t,s){s.d(t,{N:function(){return r}});var r=["512 512","<path fill='var(--ci-primary-color, currentColor)' d='M96,472a23.82,23.82,0,0,0,23.579,24H392.421A23.82,23.82,0,0,0,416,472V152H96Zm32-288H384V464H128Z' class='ci-primary'/><rect width='32' height='200' x='168' y='216' fill='var(--ci-primary-color, currentColor)' class='ci-primary'/><rect width='32' height='200' x='240' y='216' fill='var(--ci-primary-color, currentColor)' class='ci-primary'/><rect width='32' height='200' x='312' y='216' fill='var(--ci-primary-color, currentColor)' class='ci-primary'/><path fill='var(--ci-primary-color, currentColor)' d='M328,88V40c0-13.458-9.488-24-21.6-24H205.6C193.488,16,184,26.542,184,40V88H64v32H448V88ZM216,48h80V88H216Z' class='ci-primary'/>"]}}]);