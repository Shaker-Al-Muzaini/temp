"use strict";(self.webpackChunk_coreui_coreui_free_react_admin_template=self.webpackChunk_coreui_coreui_free_react_admin_template||[]).push([[5581],{27676:function(r,e,c){function i(){var r="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6NywibmFtZSI6InRlc3QgbGFzdCIsImVtYWlsIjoidGVzdEB0ZXN0LmNvbSIsImlhdCI6MTY1MjY4Nzk1MH0.FKsgtAw1W-tT6aKxCHV5Ubj8VzkzP5vuzH8ANyy_-pc";return{Authorization:"Bearer "+r}}c.d(e,{Z:function(){return i}})},16860:function(r,e,c){var i=c(30426),s=c(27676),n="/cmspages",l={getAllCMS:function(){return i.Z.get(n,{headers:(0,s.Z)()})},getCMSPage:function(r){return i.Z.get(n+"/"+r,{headers:(0,s.Z)()})},postCMS:function(r){return i.Z.post(n,r,{headers:(0,s.Z)()})},deleteCMS:function(r){return i.Z.delete(n+"/"+r,{headers:(0,s.Z)()})},editCMS:function(r,e){return i.Z.put(n+"/"+r,e,{headers:(0,s.Z)()})}};e.Z=l},85581:function(r,e,c){c.r(e);var i=c(70885),s=c(47313),n=c(97890),l=c(27998),t=c(22370),o=c(10094),a=c(45498),d=(c(24896),c(16860)),u=c(46417);e.default=function(){var r=(0,s.useState)([]),e=(0,i.Z)(r,2),c=e[0],h=e[1],m=(0,n.s0)();function p(){d.Z.getAllCMS().then((function(r){h(r.data.cmspages)}))}return(0,s.useEffect)((function(){p()}),[]),(0,u.jsx)(l.b7,{xs:12,children:(0,u.jsxs)(l.xH,{className:"mb-4",children:[(0,u.jsxs)(l.bn,{children:[(0,u.jsx)("strong",{children:"CMS"})," ",(0,u.jsx)("small",{children:"Page List"})]}),(0,u.jsx)(l.sl,{children:(0,u.jsxs)(l.Sx,{children:[(0,u.jsx)(l.V,{children:(0,u.jsxs)(l.T6,{children:[(0,u.jsx)(l.is,{scope:"col",children:"Order No"}),(0,u.jsx)(l.is,{scope:"col",style:{width:"20%"},children:"Name"}),(0,u.jsx)(l.is,{scope:"col",children:"Slug"}),(0,u.jsx)(l.is,{scope:"col",children:"Sub CMS Page"}),(0,u.jsx)(l.is,{scope:"col",children:"Status"}),(0,u.jsx)(l.is,{scope:"col",children:"Action"})]})}),(0,u.jsx)(l.NR,{children:c.map((function(r,e){return(0,u.jsxs)(l.T6,{children:[(0,u.jsx)(l.is,{scope:"row",children:r.id}),(0,u.jsx)(l.NN,{children:r.title}),(0,u.jsx)(l.NN,{children:r.cms_slug}),(0,u.jsx)(l.NN,{children:" "}),(0,u.jsx)(l.NN,{children:"1"==r.is_active?"Active":"In Active"}),(0,u.jsxs)(l.NN,{children:[(0,u.jsxs)(l.u5,{onClick:function(){m("/cms/edit-cms/"+r.id)},className:"me-2",color:"primary",children:[(0,u.jsx)(t.Z,{icon:o.l,className:"me-2"}),"Edit"]}),(0,u.jsxs)(l.u5,{onClick:function(){var e;e=r.id,console.log(e),d.Z.deleteCMS(e).then((function(r){r&&p()}))},color:"danger",children:[(0,u.jsx)(t.Z,{icon:a.N,className:"me-2"}),"Delete"]})]})]},e)}))})]})})]})})}},10094:function(r,e,c){c.d(e,{l:function(){return i}});var i=["512 512","<path fill='var(--ci-primary-color, currentColor)' d='M29.663,482.25l.087.087a24.847,24.847,0,0,0,17.612,7.342,25.178,25.178,0,0,0,8.1-1.345l142.006-48.172,272.5-272.5A88.832,88.832,0,0,0,344.334,42.039l-272.5,272.5L23.666,456.541A24.844,24.844,0,0,0,29.663,482.25Zm337.3-417.584a56.832,56.832,0,0,1,80.371,80.373L411.5,180.873,331.127,100.5ZM99.744,331.884,308.5,123.127,388.873,203.5,180.116,412.256,58.482,453.518Z' class='ci-primary'/>"]},45498:function(r,e,c){c.d(e,{N:function(){return i}});var i=["512 512","<path fill='var(--ci-primary-color, currentColor)' d='M96,472a23.82,23.82,0,0,0,23.579,24H392.421A23.82,23.82,0,0,0,416,472V152H96Zm32-288H384V464H128Z' class='ci-primary'/><rect width='32' height='200' x='168' y='216' fill='var(--ci-primary-color, currentColor)' class='ci-primary'/><rect width='32' height='200' x='240' y='216' fill='var(--ci-primary-color, currentColor)' class='ci-primary'/><rect width='32' height='200' x='312' y='216' fill='var(--ci-primary-color, currentColor)' class='ci-primary'/><path fill='var(--ci-primary-color, currentColor)' d='M328,88V40c0-13.458-9.488-24-21.6-24H205.6C193.488,16,184,26.542,184,40V88H64v32H448V88ZM216,48h80V88H216Z' class='ci-primary'/>"]}}]);