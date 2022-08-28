"use strict";(self.webpackChunk_coreui_coreui_free_react_admin_template=self.webpackChunk_coreui_coreui_free_react_admin_template||[]).push([[47],{27676:function(e,t,r){function s(){var e="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6NywibmFtZSI6InRlc3QgbGFzdCIsImVtYWlsIjoidGVzdEB0ZXN0LmNvbSIsImlhdCI6MTY1MjY4Nzk1MH0.FKsgtAw1W-tT6aKxCHV5Ubj8VzkzP5vuzH8ANyy_-pc";return{Authorization:"Bearer "+e}}r.d(t,{Z:function(){return s}})},54221:function(e,t,r){var s=r(30426),c=r(27676),i={getAllWatchCategories:function(){return s.Z.get("/watches/categories",{headers:(0,c.Z)()})},getAllWatchPosts:function(){return s.Z.get("/watches/posts",{headers:(0,c.Z)()})},getWatchCategory:function(e){return s.Z.get("/watches/categories/"+e,{headers:(0,c.Z)()})},getWatchPost:function(e){return s.Z.get("/watches/posts/"+e,{headers:(0,c.Z)()})},postWatchCategory:function(e){return s.Z.post("/watches/categories",e,{headers:(0,c.Z)()})},postWatchPost:function(e){return s.Z.post("/watches/posts",e,{headers:(0,c.Z)()})},deleteWatchCategory:function(e){return s.Z.delete("/watches/categories/"+e,{headers:(0,c.Z)()})},deleteWatchPost:function(e){return s.Z.delete("/watches/posts/"+e,{headers:(0,c.Z)()})},editWatchCategory:function(e){return s.Z.put("/watches/watches/"+e,{headers:(0,c.Z)()})},editWatchPost:function(e){return s.Z.put("/watches/posts/"+e,{headers:(0,c.Z)()})},getWatchesImagesList:function(e){return s.Z.get("/watches/posts/"+e+"/images",{headers:(0,c.Z)()})},deleteImage:function(e){return s.Z.delete("/watches/posts/images"+e,{headers:(0,c.Z)()})},postImage:function(e,t){return s.Z.post("/watches/posts/"+e+"/images",t,{headers:(0,c.Z)(),"Content-Type":"multipart/form-data;"})}};t.Z=i},70047:function(e,t,r){r.r(t);var s=r(70885),c=r(47313),i=r(27998),n=(r(24896),r(22370)),a=r(7052),o=r(10094),l=r(45498),h=r(54221),u=r(97890),d=r(46417);t.default=function(){var e=(0,c.useState)([]),t=(0,s.Z)(e,2),r=t[0],p=t[1],m=(0,u.s0)();function f(){h.Z.getAllWatchPosts().then((function(e){p(e.data.posts)}))}return(0,c.useEffect)((function(){f()}),[]),(0,d.jsx)(i.b7,{xs:12,children:(0,d.jsxs)(i.xH,{className:"mb-4",children:[(0,d.jsxs)(i.bn,{children:[(0,d.jsx)("strong",{children:"Watches"})," ",(0,d.jsx)("small",{children:"Posts List"})]}),(0,d.jsx)(i.sl,{children:(0,d.jsxs)(i.Sx,{children:[(0,d.jsx)(i.V,{children:(0,d.jsxs)(i.T6,{children:[(0,d.jsx)(i.is,{scope:"col",children:"No #"}),(0,d.jsx)(i.is,{scope:"col",style:{width:"20%"},children:"Title"}),(0,d.jsx)(i.is,{scope:"col",children:"Images"}),(0,d.jsx)(i.is,{scope:"col",children:"Created Date"}),(0,d.jsx)(i.is,{scope:"col",children:"Status"}),(0,d.jsx)(i.is,{scope:"col",children:"Action"})]})}),(0,d.jsx)(i.NR,{children:r.map((function(e,t){return(0,d.jsxs)(i.T6,{children:[(0,d.jsx)(i.is,{scope:"row",children:e.id}),(0,d.jsx)(i.NN,{children:e.title}),(0,d.jsxs)(i.NN,{children:[" ",(0,d.jsxs)(i.u5,{color:"link",onClick:function(){return m("/watches/post-images-list/"+e.id)},children:[(0,d.jsx)(n.Z,{icon:a.z,className:"me-2"}),"Image List"]})]})," ",(0,d.jsx)(i.NN,{children:e.created_date_time}),(0,d.jsx)(i.NN,{children:"1"==e.is_active?"Active":"In Active"}),(0,d.jsxs)(i.NN,{children:[(0,d.jsxs)(i.u5,{onClick:function(){m("/watches/edit-posts/"+e.id)},className:"me-2",color:"primary",children:[(0,d.jsx)(n.Z,{icon:o.l,className:"me-2"}),"Edit"]}),(0,d.jsxs)(i.u5,{onClick:function(){var t;t=e.id,console.log(t),h.Z.deleteWatchPost(t).then((function(e){e&&f()}))},color:"danger",children:[(0,d.jsx)(n.Z,{icon:l.N,className:"me-2"}),"Delete"]})]})]},t)}))})]})})]})})}},7052:function(e,t,r){r.d(t,{z:function(){return s}});var s=["512 512","<path fill='var(--ci-primary-color, currentColor)' d='M40,472H472V40H40ZM440,348.142,328.628,236.769l46.6-46.6L440,254.935ZM72,72H440V209.68l-64.769-64.77L306,214.142l-100-100-134,134Zm0,221.4,134-134,234,234V440H72Z' class='ci-primary'/>"]},10094:function(e,t,r){r.d(t,{l:function(){return s}});var s=["512 512","<path fill='var(--ci-primary-color, currentColor)' d='M29.663,482.25l.087.087a24.847,24.847,0,0,0,17.612,7.342,25.178,25.178,0,0,0,8.1-1.345l142.006-48.172,272.5-272.5A88.832,88.832,0,0,0,344.334,42.039l-272.5,272.5L23.666,456.541A24.844,24.844,0,0,0,29.663,482.25Zm337.3-417.584a56.832,56.832,0,0,1,80.371,80.373L411.5,180.873,331.127,100.5ZM99.744,331.884,308.5,123.127,388.873,203.5,180.116,412.256,58.482,453.518Z' class='ci-primary'/>"]},45498:function(e,t,r){r.d(t,{N:function(){return s}});var s=["512 512","<path fill='var(--ci-primary-color, currentColor)' d='M96,472a23.82,23.82,0,0,0,23.579,24H392.421A23.82,23.82,0,0,0,416,472V152H96Zm32-288H384V464H128Z' class='ci-primary'/><rect width='32' height='200' x='168' y='216' fill='var(--ci-primary-color, currentColor)' class='ci-primary'/><rect width='32' height='200' x='240' y='216' fill='var(--ci-primary-color, currentColor)' class='ci-primary'/><rect width='32' height='200' x='312' y='216' fill='var(--ci-primary-color, currentColor)' class='ci-primary'/><path fill='var(--ci-primary-color, currentColor)' d='M328,88V40c0-13.458-9.488-24-21.6-24H205.6C193.488,16,184,26.542,184,40V88H64v32H448V88ZM216,48h80V88H216Z' class='ci-primary'/>"]}}]);