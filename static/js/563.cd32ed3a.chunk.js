"use strict";(self.webpackChunkless1=self.webpackChunkless1||[]).push([[563],{2563:function(s,e,n){n.r(e),n.d(e,{default:function(){return b}});n(2791);var i=n(2906),a="Dialogs_dialogs__c8EOr",r="Dialogs_dialog_img__FJoxc",t="Dialogs_dialog_items__+A1DP",o="Dialogs_dialog__tZVb7",d="Dialogs_messages__5o0jI",l="Dialogs_message__k+UDA",u=n(184),c=function(s){return(0,u.jsx)("div",{className:l,children:s.message})},g=n(1087),m=function(s){return(0,u.jsxs)("div",{className:o,children:[(0,u.jsx)("div",{className:r,children:(0,u.jsx)("img",{src:"./DialogItem",alt:""})}),(0,u.jsx)(g.OL,{to:"/dialogs/"+s.id,children:s.name})]})},h=n(6139),f=n(704),j=n(8906),x=n(8610),_=(0,x.D)(20),v=function(s){return(0,u.jsxs)("form",{onSubmit:s.handleSubmit,children:[(0,u.jsx)("div",{children:(0,u.jsx)(h.Z,{name:"newMessageBody",placeholder:"enter your message",validate:[x.C,_],component:j.g})}),(0,u.jsx)("div",{children:(0,u.jsx)("button",{children:"send"})})]})};v=(0,f.Z)({form:"dialogAddMessageForm"})(v);var p=function(s){var e=s.dialogsPage.dialogs.map((function(s){return(0,u.jsx)(m,{name:s.name,id:s.id},s.id)})),n=s.dialogsPage.messages.map((function(s){return(0,u.jsx)(c,{message:s.message},s.id)}));return(0,u.jsx)("div",{children:(0,u.jsxs)("div",{className:a,children:[(0,u.jsx)("div",{className:t,children:e}),(0,u.jsxs)("div",{className:d,children:[n,(0,u.jsx)(v,{onSubmit:function(e){s.addMessage(e.newMessageBody)}})]})]})})},D=n(8687),Z=n(1548),b=(0,n(7781).qC)((0,D.$j)((function(s){return{dialogsPage:s.dialogsPage}}),{addMessage:i.H}),Z.D)(p)},1548:function(s,e,n){n.d(e,{D:function(){return m}});var i=n(1413),a=n(5671),r=n(3144),t=n(136),o=n(516),d=n(2791),l=n(7689),u=n(8687),c=n(184),g=function(s){return{isAuth:s.auth.isAuth}},m=function(s){var e=function(e){(0,t.Z)(d,e);var n=(0,o.Z)(d);function d(){return(0,a.Z)(this,d),n.apply(this,arguments)}return(0,r.Z)(d,[{key:"render",value:function(){return this.props.isAuth?(0,c.jsx)(s,(0,i.Z)({},this.props)):(0,c.jsx)(l.Fg,{to:"/login"})}}]),d}(d.Component);return(0,u.$j)(g)(e)}}}]);
//# sourceMappingURL=563.cd32ed3a.chunk.js.map