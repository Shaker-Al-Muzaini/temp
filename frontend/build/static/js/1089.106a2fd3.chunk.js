"use strict";(self.webpackChunk_coreui_coreui_free_react_admin_template=self.webpackChunk_coreui_coreui_free_react_admin_template||[]).push([[1089],{27676:function(t,e,n){function i(){var t="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6NywibmFtZSI6InRlc3QgbGFzdCIsImVtYWlsIjoidGVzdEB0ZXN0LmNvbSIsImlhdCI6MTY1MjY4Nzk1MH0.FKsgtAw1W-tT6aKxCHV5Ubj8VzkzP5vuzH8ANyy_-pc";return{Authorization:"Bearer "+t}}n.d(e,{Z:function(){return i}})},17647:function(t,e,n){var i=n(30426),s=n(27676),r="/settings",u={getAllSetting:function(){return i.Z.get(r,{headers:(0,s.Z)()})},getSetting:function(t){return i.Z.get(r+"/"+t,{headers:(0,s.Z)()})},postSetting:function(t){return i.Z.post(r,t,{headers:(0,s.Z)()})},deleteSetting:function(t){return i.Z.delete(r+"/"+t,{headers:(0,s.Z)()})},editSetting:function(t,e){return i.Z.put(r+"/"+t,e,{headers:(0,s.Z)()})}};e.Z=u},1089:function(t,e,n){n.r(e);var i=n(70885),s=n(47313),r=n(27998),u=(n(24896),n(17647)),a=n(97890),l=n(46417);e.default=function(){var t=(0,s.useState)(""),e=(0,i.Z)(t,2),n=e[0],c=e[1],d=(0,s.useState)(""),g=(0,i.Z)(d,2),o=g[0],h=g[1],f=(0,a.s0)(),x=(0,a.UO)();return(0,s.useEffect)((function(){u.Z.getSetting(x.id).then((function(t){t.data.setting.default_title&&c(t.data.setting.default_title),t.data.setting.value&&h(t.data.setting.value)}))}),[]),(0,l.jsx)(r.rb,{children:(0,l.jsx)(r.b7,{xs:12,children:(0,l.jsxs)(r.xH,{className:"mb-4",children:[(0,l.jsxs)(r.bn,{children:[(0,l.jsx)("strong",{children:"Edit"})," ",(0,l.jsx)("small",{children:"Setting Details"})]}),(0,l.jsx)(r.sl,{children:(0,l.jsxs)(r.lx,{className:"row g-3",children:[(0,l.jsxs)(r.b7,{md:6,children:[(0,l.jsx)(r.L8,{htmlFor:"inputEmail4",children:"Setting Title"}),(0,l.jsx)(r.jO,{value:n,type:"text",id:"title",onChange:function(t){return c(t.target.value)}})]}),(0,l.jsxs)(r.b7,{md:6,children:[(0,l.jsx)(r.L8,{htmlFor:"inputEmail4",children:"Setting Value"}),(0,l.jsx)(r.jO,{value:o,type:"text",id:"value",onChange:function(t){return h(t.target.value)}})]}),(0,l.jsx)(r.b7,{sm:10,children:(0,l.jsxs)(r.u5,{type:"submit",onClick:function(){var t={setting_title:n,setting_value:o,language_id:1};u.Z.editSetting(x.id,t).then((function(t){f("/settings/setting-list")}))},children:[" ","Submit"]})})]})})]})})})}}}]);