"use strict";(self.webpackChunk_coreui_coreui_free_react_admin_template=self.webpackChunk_coreui_coreui_free_react_admin_template||[]).push([[844],{27676:function(e,r,i){function s(){var e="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6NywibmFtZSI6InRlc3QgbGFzdCIsImVtYWlsIjoidGVzdEB0ZXN0LmNvbSIsImlhdCI6MTY1MjY4Nzk1MH0.FKsgtAw1W-tT6aKxCHV5Ubj8VzkzP5vuzH8ANyy_-pc";return{Authorization:"Bearer "+e}}i.d(r,{Z:function(){return s}})},52642:function(e,r,i){var s=i(30426),t=i(27676),c="/lifestyles",n={getAllLifestyle:function(){return s.Z.get(c,{headers:(0,t.Z)()})},getLifestyle:function(e){return s.Z.get(c+"/"+e,{headers:(0,t.Z)()})},postLifestyle:function(e){return s.Z.post(c,e,{headers:(0,t.Z)()})},deleteLifestyle:function(e){return s.Z.delete(c+"/"+e,{headers:(0,t.Z)()})},editLifestyle:function(e,r){return s.Z.put(c+"/"+e,r,{headers:(0,t.Z)()})},getLifestyleImagesList:function(e){return s.Z.get(c+"/posts/"+e+"/images",{headers:(0,t.Z)()})},deleteImage:function(e){return s.Z.delete(c+"/posts/images"+e,{headers:(0,t.Z)()})},postImage:function(e,r){return s.Z.post(c+"/posts/"+e+"/images",r,{headers:(0,t.Z)(),"Content-Type":"multipart/form-data;"})}};r.Z=n},40844:function(e,r,i){i.r(r);var s=i(70885),t=i(47313),c=i(27998),n=(i(24896),i(22370)),l=i(33471),o=i(45498),a=i(97890),d=i(52642),u=i(46417);r.default=function(){var e=(0,t.useState)([]),r=(0,s.Z)(e,2),i=r[0],h=r[1],f=(0,a.UO)(),m=(0,a.s0)();function p(){d.Z.getLifestyleImagesList(f.id).then((function(e){console.log(e.data.images),h(e.data.images)}))}return(0,t.useEffect)((function(){p()}),[]),(0,u.jsx)(c.b7,{xs:12,children:(0,u.jsxs)(c.xH,{className:"mb-4",children:[(0,u.jsxs)(c.bn,{children:[(0,u.jsx)("strong",{children:"Image"})," ",(0,u.jsx)("small",{children:"Posts List"}),(0,u.jsx)("br",{}),(0,u.jsx)("br",{}),(0,u.jsxs)(c.u5,{onClick:function(){return m("/lifestyle/post-images-add/"+f.id)},color:"primary",children:[(0,u.jsx)(n.Z,{icon:l.q,className:"me-2"}),"Add Image"]})]}),(0,u.jsx)(c.sl,{children:(0,u.jsxs)(c.Sx,{children:[(0,u.jsx)(c.V,{children:(0,u.jsxs)(c.T6,{children:[(0,u.jsx)(c.is,{scope:"col",children:"No #"}),(0,u.jsx)(c.is,{scope:"col",children:"Image"}),(0,u.jsx)(c.is,{scope:"col",children:"Image Caption"}),(0,u.jsx)(c.is,{scope:"col",children:"Status"}),(0,u.jsx)(c.is,{scope:"col",children:"Action"})]})}),(0,u.jsx)(c.NR,{children:i.map((function(e,r){return(0,u.jsxs)(c.T6,{children:[(0,u.jsx)(c.is,{scope:"row",children:e.id}),(0,u.jsx)(c.NN,{children:e.classified_image}),(0,u.jsx)(c.NN,{children:e.caption}),(0,u.jsx)(c.NN,{children:e.is_active}),(0,u.jsx)(c.NN,{children:(0,u.jsxs)(c.u5,{onClick:function(){var r;r=e.id,console.log(r),d.Z.deleteImage(r).then((function(e){e&&p()}))},color:"danger",children:["Delete",(0,u.jsx)(n.Z,{icon:o.N,className:"me-2"})]})})]},r)}))})]})})]})})}},33471:function(e,r,i){i.d(r,{q:function(){return s}});var s=["512 512","<polygon fill='var(--ci-primary-color, currentColor)' points='440 240 272 240 272 72 240 72 240 240 72 240 72 272 240 272 240 440 272 440 272 272 440 272 440 240' class='ci-primary'/>"]},45498:function(e,r,i){i.d(r,{N:function(){return s}});var s=["512 512","<path fill='var(--ci-primary-color, currentColor)' d='M96,472a23.82,23.82,0,0,0,23.579,24H392.421A23.82,23.82,0,0,0,416,472V152H96Zm32-288H384V464H128Z' class='ci-primary'/><rect width='32' height='200' x='168' y='216' fill='var(--ci-primary-color, currentColor)' class='ci-primary'/><rect width='32' height='200' x='240' y='216' fill='var(--ci-primary-color, currentColor)' class='ci-primary'/><rect width='32' height='200' x='312' y='216' fill='var(--ci-primary-color, currentColor)' class='ci-primary'/><path fill='var(--ci-primary-color, currentColor)' d='M328,88V40c0-13.458-9.488-24-21.6-24H205.6C193.488,16,184,26.542,184,40V88H64v32H448V88ZM216,48h80V88H216Z' class='ci-primary'/>"]}}]);