"use strict";(self.webpackChunk_coreui_coreui_free_react_admin_template=self.webpackChunk_coreui_coreui_free_react_admin_template||[]).push([[5921],{27676:function(e,r,i){function t(){var e="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6NywibmFtZSI6InRlc3QgbGFzdCIsImVtYWlsIjoidGVzdEB0ZXN0LmNvbSIsImlhdCI6MTY1MjY4Nzk1MH0.FKsgtAw1W-tT6aKxCHV5Ubj8VzkzP5vuzH8ANyy_-pc";return{Authorization:"Bearer "+e}}i.d(r,{Z:function(){return t}})},52642:function(e,r,i){var t=i(30426),s=i(27676),c="/lifestyles",l={getAllLifestyle:function(){return t.Z.get(c,{headers:(0,s.Z)()})},getLifestyle:function(e){return t.Z.get(c+"/"+e,{headers:(0,s.Z)()})},postLifestyle:function(e){return t.Z.post(c,e,{headers:(0,s.Z)()})},deleteLifestyle:function(e){return t.Z.delete(c+"/"+e,{headers:(0,s.Z)()})},editLifestyle:function(e,r){return t.Z.put(c+"/"+e,r,{headers:(0,s.Z)()})},getLifestyleImagesList:function(e){return t.Z.get(c+"/posts/"+e+"/images",{headers:(0,s.Z)()})},deleteImage:function(e){return t.Z.delete(c+"/posts/images"+e,{headers:(0,s.Z)()})},postImage:function(e,r){return t.Z.post(c+"/posts/"+e+"/images",r,{headers:(0,s.Z)(),"Content-Type":"multipart/form-data;"})}};r.Z=l},35921:function(e,r,i){i.r(r);var t=i(70885),s=i(47313),c=i(27998),l=(i(24896),i(22370)),n=i(7052),o=i(10094),a=i(45498),d=i(52642),u=i(97890),f=i(46417);r.default=function(){var e=(0,s.useState)([]),r=(0,t.Z)(e,2),i=r[0],h=r[1],m=(0,u.s0)();function p(){d.Z.getAllLifestyle().then((function(e){h(e.data.lifestyles)}))}return(0,s.useEffect)((function(){p()}),[]),(0,f.jsx)(c.b7,{xs:12,children:(0,f.jsxs)(c.xH,{className:"mb-4",children:[(0,f.jsxs)(c.bn,{children:[(0,f.jsx)("strong",{children:"Lifestyles"})," ",(0,f.jsx)("small",{children:"List"})]}),(0,f.jsx)(c.sl,{children:(0,f.jsxs)(c.Sx,{children:[(0,f.jsx)(c.V,{children:(0,f.jsxs)(c.T6,{children:[(0,f.jsx)(c.is,{scope:"col",children:"No #"}),(0,f.jsx)(c.is,{scope:"col",style:{width:"20%"},children:"Title"}),(0,f.jsx)(c.is,{scope:"col",children:"Images"}),(0,f.jsx)(c.is,{scope:"col",children:"Created Date"}),(0,f.jsx)(c.is,{scope:"col",children:"Status"}),(0,f.jsx)(c.is,{scope:"col",children:"Action"})]})}),(0,f.jsx)(c.NR,{children:i.map((function(e,r){return(0,f.jsxs)(c.T6,{children:[(0,f.jsx)(c.is,{scope:"row",children:e.id}),(0,f.jsx)(c.NN,{children:e.title}),(0,f.jsxs)(c.NN,{children:[" ",(0,f.jsxs)(c.u5,{color:"link",onClick:function(){return m("/lifestyle/post-images-list/"+e.id)},children:[(0,f.jsx)(l.Z,{icon:n.z,className:"me-2"}),"Image List"]})]}),"                  ",(0,f.jsx)(c.NN,{children:e.created_date_time}),(0,f.jsx)(c.NN,{children:"1"==e.is_active?"Active":"In Active"}),(0,f.jsxs)(c.NN,{children:[(0,f.jsxs)(c.u5,{onClick:function(){m("/lifestyle/edit-lifestyle/"+e.id)},color:"primary",className:"me-2",children:[(0,f.jsx)(l.Z,{icon:o.l,className:"me-2"}),"Edit"]}),(0,f.jsxs)(c.u5,{onClick:function(){var r;r=e.id,console.log(r),d.Z.deleteLifestyle(r).then((function(e){e&&p()}))},color:"danger",children:[(0,f.jsx)(l.Z,{icon:a.N,className:"me-2"}),"Delete"]})]})]},r)}))})]})})]})})}},7052:function(e,r,i){i.d(r,{z:function(){return t}});var t=["512 512","<path fill='var(--ci-primary-color, currentColor)' d='M40,472H472V40H40ZM440,348.142,328.628,236.769l46.6-46.6L440,254.935ZM72,72H440V209.68l-64.769-64.77L306,214.142l-100-100-134,134Zm0,221.4,134-134,234,234V440H72Z' class='ci-primary'/>"]},10094:function(e,r,i){i.d(r,{l:function(){return t}});var t=["512 512","<path fill='var(--ci-primary-color, currentColor)' d='M29.663,482.25l.087.087a24.847,24.847,0,0,0,17.612,7.342,25.178,25.178,0,0,0,8.1-1.345l142.006-48.172,272.5-272.5A88.832,88.832,0,0,0,344.334,42.039l-272.5,272.5L23.666,456.541A24.844,24.844,0,0,0,29.663,482.25Zm337.3-417.584a56.832,56.832,0,0,1,80.371,80.373L411.5,180.873,331.127,100.5ZM99.744,331.884,308.5,123.127,388.873,203.5,180.116,412.256,58.482,453.518Z' class='ci-primary'/>"]},45498:function(e,r,i){i.d(r,{N:function(){return t}});var t=["512 512","<path fill='var(--ci-primary-color, currentColor)' d='M96,472a23.82,23.82,0,0,0,23.579,24H392.421A23.82,23.82,0,0,0,416,472V152H96Zm32-288H384V464H128Z' class='ci-primary'/><rect width='32' height='200' x='168' y='216' fill='var(--ci-primary-color, currentColor)' class='ci-primary'/><rect width='32' height='200' x='240' y='216' fill='var(--ci-primary-color, currentColor)' class='ci-primary'/><rect width='32' height='200' x='312' y='216' fill='var(--ci-primary-color, currentColor)' class='ci-primary'/><path fill='var(--ci-primary-color, currentColor)' d='M328,88V40c0-13.458-9.488-24-21.6-24H205.6C193.488,16,184,26.542,184,40V88H64v32H448V88ZM216,48h80V88H216Z' class='ci-primary'/>"]}}]);