"use strict";(self.webpackChunk_coreui_coreui_free_react_admin_template=self.webpackChunk_coreui_coreui_free_react_admin_template||[]).push([[5783],{27676:function(e,t,i){function n(){var e="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6NywibmFtZSI6InRlc3QgbGFzdCIsImVtYWlsIjoidGVzdEB0ZXN0LmNvbSIsImlhdCI6MTY1MjY4Nzk1MH0.FKsgtAw1W-tT6aKxCHV5Ubj8VzkzP5vuzH8ANyy_-pc";return{Authorization:"Bearer "+e}}i.d(t,{Z:function(){return n}})},17647:function(e,t,i){var n=i(30426),s=i(27676),c="/settings",r={getAllSetting:function(){return n.Z.get(c,{headers:(0,s.Z)()})},getSetting:function(e){return n.Z.get(c+"/"+e,{headers:(0,s.Z)()})},postSetting:function(e){return n.Z.post(c,e,{headers:(0,s.Z)()})},deleteSetting:function(e){return n.Z.delete(c+"/"+e,{headers:(0,s.Z)()})},editSetting:function(e,t){return n.Z.put(c+"/"+e,t,{headers:(0,s.Z)()})}};t.Z=r},85783:function(e,t,i){i.r(t);var n=i(70885),s=i(47313),c=i(27998),r=i(22370),l=i(10094),d=(i(24896),i(17647)),o=i(97890),a=i(46417);t.default=function(){var e=(0,s.useState)([]),t=(0,n.Z)(e,2),i=t[0],u=t[1],h=(0,o.s0)();return(0,s.useEffect)((function(){d.Z.getAllSetting().then((function(e){console.log(e.data),u(e.data.settings)}))}),[]),(0,a.jsx)(c.b7,{xs:12,children:(0,a.jsxs)(c.xH,{className:"mb-4",children:[(0,a.jsxs)(c.bn,{children:[(0,a.jsx)("strong",{children:"Setting"})," ",(0,a.jsx)("small",{children:"List"})]}),(0,a.jsx)(c.sl,{children:(0,a.jsxs)(c.Sx,{children:[(0,a.jsx)(c.V,{children:(0,a.jsxs)(c.T6,{children:[(0,a.jsx)(c.is,{scope:"col",style:{width:"20%"},children:"No #"}),(0,a.jsx)(c.is,{scope:"col",style:{width:"20%"},children:"Name"}),(0,a.jsx)(c.is,{scope:"col",style:{width:"20%"},children:"Value"}),(0,a.jsx)(c.is,{scope:"col",style:{width:"20%"},children:"Status"}),(0,a.jsx)(c.is,{scope:"col",style:{width:"20%"},children:"Action"})]})}),(0,a.jsx)(c.NR,{children:i.map((function(e,t){return(0,a.jsxs)(c.T6,{children:[(0,a.jsx)(c.is,{scope:"row",children:e.id}),(0,a.jsx)(c.NN,{children:e.default_title}),(0,a.jsx)(c.NN,{children:e.value}),(0,a.jsx)(c.NN,{children:"1"==e.is_active?"Active":"In Active"}),(0,a.jsx)(c.NN,{children:(0,a.jsxs)(c.u5,{onClick:function(){h("/settings/edit-setting/"+e.id)},color:"primary",className:"me-2",children:[(0,a.jsx)(r.Z,{icon:l.l,className:"me-2"}),"Edit"]})})]},t)}))})]})})]})})}},10094:function(e,t,i){i.d(t,{l:function(){return n}});var n=["512 512","<path fill='var(--ci-primary-color, currentColor)' d='M29.663,482.25l.087.087a24.847,24.847,0,0,0,17.612,7.342,25.178,25.178,0,0,0,8.1-1.345l142.006-48.172,272.5-272.5A88.832,88.832,0,0,0,344.334,42.039l-272.5,272.5L23.666,456.541A24.844,24.844,0,0,0,29.663,482.25Zm337.3-417.584a56.832,56.832,0,0,1,80.371,80.373L411.5,180.873,331.127,100.5ZM99.744,331.884,308.5,123.127,388.873,203.5,180.116,412.256,58.482,453.518Z' class='ci-primary'/>"]}}]);