"use strict";(self.webpackChunk_coreui_coreui_free_react_admin_template=self.webpackChunk_coreui_coreui_free_react_admin_template||[]).push([[4806],{27676:function(e,r,o){function t(){var e="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6NywibmFtZSI6InRlc3QgbGFzdCIsImVtYWlsIjoidGVzdEB0ZXN0LmNvbSIsImlhdCI6MTY1MjY4Nzk1MH0.FKsgtAw1W-tT6aKxCHV5Ubj8VzkzP5vuzH8ANyy_-pc";return{Authorization:"Bearer "+e}}o.d(r,{Z:function(){return t}})},86374:function(e,r,o){var t=o(30426),s=o(27676),i="/photoshoots",c={getAllPhotoshoots:function(){return t.Z.get(i,{headers:(0,s.Z)()})},getPhotoshoots:function(e){return t.Z.get(i+"/"+e,{headers:(0,s.Z)()})},postPhotoshoots:function(e){return t.Z.post(i,e,{headers:(0,s.Z)()})},deletePhotoshoots:function(e){return t.Z.delete(i+"/"+e,{headers:(0,s.Z)()})},editPhotoshoots:function(e,r){return t.Z.put(i+"/"+e,r,{headers:(0,s.Z)()})},getPhotoshootImagesList:function(e){return t.Z.get(i+"/posts/"+e+"/images",{headers:(0,s.Z)()})},deleteImage:function(e){return t.Z.delete(i+"/posts/images"+e,{headers:(0,s.Z)()})},postImage:function(e,r){return t.Z.post(i+"/posts/"+e+"/images",r,{headers:(0,s.Z)(),"Content-Type":"multipart/form-data;"})}};r.Z=c},4806:function(e,r,o){o.r(r);var t=o(70885),s=o(47313),i=o(27998),c=(o(24896),o(22370)),n=o(33471),a=o(45498),l=o(97890),h=o(86374),d=o(46417);r.default=function(){var e=(0,s.useState)([]),r=(0,t.Z)(e,2),o=r[0],u=r[1],m=(0,l.UO)(),p=(0,l.s0)();function f(){h.Z.getPhotoshootImagesList(m.id).then((function(e){console.log(e.data.images),u(e.data.images)}))}return(0,s.useEffect)((function(){f()}),[]),(0,d.jsx)(i.b7,{xs:12,children:(0,d.jsxs)(i.xH,{className:"mb-4",children:[(0,d.jsxs)(i.bn,{children:[(0,d.jsx)("strong",{children:"Image"})," ",(0,d.jsx)("small",{children:"Posts List"}),(0,d.jsx)("br",{}),(0,d.jsx)("br",{}),(0,d.jsxs)(i.u5,{onClick:function(){return p("/photoshoot/post-images-add/"+m.id)},color:"primary",children:[(0,d.jsx)(c.Z,{icon:n.q,className:"me-2"}),"Add Image"]})]}),(0,d.jsx)(i.sl,{children:(0,d.jsxs)(i.Sx,{children:[(0,d.jsx)(i.V,{children:(0,d.jsxs)(i.T6,{children:[(0,d.jsx)(i.is,{scope:"col",children:"No #"}),(0,d.jsx)(i.is,{scope:"col",children:"Image"}),(0,d.jsx)(i.is,{scope:"col",children:"Image Caption"}),(0,d.jsx)(i.is,{scope:"col",children:"Status"}),(0,d.jsx)(i.is,{scope:"col",children:"Action"})]})}),(0,d.jsx)(i.NR,{children:o.map((function(e,r){return(0,d.jsxs)(i.T6,{children:[(0,d.jsx)(i.is,{scope:"row",children:e.id}),(0,d.jsx)(i.NN,{children:e.classified_image}),(0,d.jsx)(i.NN,{children:e.caption}),(0,d.jsx)(i.NN,{children:e.is_active}),(0,d.jsx)(i.NN,{children:(0,d.jsxs)(i.u5,{onClick:function(){var r;r=e.id,console.log(r),h.Z.deleteImage(r).then((function(e){e&&f()}))},color:"danger",children:["Delete",(0,d.jsx)(c.Z,{icon:a.N,className:"me-2"})]})})]},r)}))})]})})]})})}},33471:function(e,r,o){o.d(r,{q:function(){return t}});var t=["512 512","<polygon fill='var(--ci-primary-color, currentColor)' points='440 240 272 240 272 72 240 72 240 240 72 240 72 272 240 272 240 440 272 440 272 272 440 272 440 240' class='ci-primary'/>"]},45498:function(e,r,o){o.d(r,{N:function(){return t}});var t=["512 512","<path fill='var(--ci-primary-color, currentColor)' d='M96,472a23.82,23.82,0,0,0,23.579,24H392.421A23.82,23.82,0,0,0,416,472V152H96Zm32-288H384V464H128Z' class='ci-primary'/><rect width='32' height='200' x='168' y='216' fill='var(--ci-primary-color, currentColor)' class='ci-primary'/><rect width='32' height='200' x='240' y='216' fill='var(--ci-primary-color, currentColor)' class='ci-primary'/><rect width='32' height='200' x='312' y='216' fill='var(--ci-primary-color, currentColor)' class='ci-primary'/><path fill='var(--ci-primary-color, currentColor)' d='M328,88V40c0-13.458-9.488-24-21.6-24H205.6C193.488,16,184,26.542,184,40V88H64v32H448V88ZM216,48h80V88H216Z' class='ci-primary'/>"]}}]);