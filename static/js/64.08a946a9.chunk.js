/*! For license information please see 64.08a946a9.chunk.js.LICENSE.txt */
(self.webpackChunkless1=self.webpackChunkless1||[]).push([[64],{6064:function(e,r,s){"use strict";s.r(r),s.d(r,{default:function(){return W}});var n=s(5671),t=s(3144),o=s(136),i=s(516),u=s(8687),l=s(946),a=s(2791),c=s(4942),f=s(885),h="Paginator_item__MSFUg",p="Paginator_selectedPage__RTLxi",d=s(1694),g=s.n(d),w=s(184),v=function(e){for(var r=Math.ceil(e.totalItemsCount/e.pageSize),s=[],n=(0,a.useState)(1),t=(0,f.Z)(n,2),o=t[0],i=t[1],u=Math.ceil(r/e.portionSize),l=(o-1)*e.portionSize+1,d=o*e.portionSize,v=1;v<=r;v++)s.push(v);return(0,w.jsxs)("div",{children:[o>1&&(0,w.jsx)("button",{onClick:function(){i(o-1)},children:"prev"}),s.filter((function(e){return e>=l&&e<=d})).map((function(r){return(0,w.jsx)("span",{className:g()((0,c.Z)({},p,e.currentPage===r),h),onClick:function(){return e.setCurrentPage(r)},children:r})})),o<u&&(0,w.jsx)("button",{onClick:function(){i(o+1)},children:"next"})]})},A="Users_item__tUDYG",C="Users_avatar__cUtK5",k="Users_photo__H7nIR",I="Users_button__1AMoy",P="Users_content__84txb",x="Users_info__pqIue",m="Users_location__wwyyV",U=s(8055),b=s(1087),E=(s(7206),function(e){var r=e.user,s=e.followingInProgress,n=e.unfollow,t=e.follow;return(0,w.jsxs)("div",{className:A,children:[(0,w.jsxs)("div",{className:C,children:[(0,w.jsx)("div",{className:k,children:(0,w.jsx)(b.OL,{to:"/profile/"+r.id,children:(0,w.jsx)("img",{src:null!==r.photos.small?r.photos.small:U,alt:""})})}),(0,w.jsx)("div",{className:I,children:r.followed?(0,w.jsx)("button",{disabled:s.some((function(e){return e===r.id})),onClick:function(){n(r.id)},children:"Unfollow"}):(0,w.jsx)("button",{disabled:s.some((function(e){return e===r.id})),onClick:function(){t(r.id)},children:"Follow"})})]}),(0,w.jsxs)("div",{className:P,children:[(0,w.jsxs)("div",{className:x,children:[(0,w.jsx)("h3",{children:r.name}),(0,w.jsx)("span",{children:r.status})]}),(0,w.jsxs)("div",{className:m,children:[(0,w.jsx)("h3",{children:"user.location.country"}),(0,w.jsx)("span",{children:"user.location.city"})]})]})]})}),V=function(e){return(0,w.jsxs)("div",{children:[(0,w.jsx)(v,{totalItemsCount:e.totalUsersCount,pageSize:e.pageSize,currentPage:e.currentPage,setCurrentPage:e.setCurrentPage,portionSize:e.portionSize}),e.users.map((function(r){return(0,w.jsx)(E,{user:r,follow:e.follow,followingInProgress:e.followingInProgress,unfollow:e.unfollow},r.id)}))]})},S=s(6563),Q=function(e){return e.usersPage.users},y=function(e){return e.usersPage.pageSize},z=function(e){return e.usersPage.totalUsersCount},Z=function(e){return e.usersPage.currentPage},M=function(e){return e.usersPage.isFetching},X=function(e){return e.usersPage.followingInProgress},G=function(e){return e.usersPage.portionSize},j=function(e){(0,o.Z)(s,e);var r=(0,i.Z)(s);function s(){var e;(0,n.Z)(this,s);for(var t=arguments.length,o=new Array(t),i=0;i<t;i++)o[i]=arguments[i];return(e=r.call.apply(r,[this].concat(o))).setCurrentPage=function(r){e.props.getUsers(r,e.props.pageSize)},e}return(0,t.Z)(s,[{key:"componentDidMount",value:function(){this.props.getUsers(this.props.currentPage,this.props.pageSize)}},{key:"render",value:function(){return(0,w.jsxs)(w.Fragment,{children:[this.props.isFetching?(0,w.jsx)(S.Z,{}):null,(0,w.jsx)(V,{follow:this.props.follow,unfollow:this.props.unfollow,currentPage:this.props.currentPage,totalUsersCount:this.props.totalUsersCount,users:this.props.users,setCurrentPage:this.setCurrentPage,pageSize:this.props.pageSize,followingInProgress:this.props.followingInProgress,portionSize:this.props.portionSize})]})}}]),s}(a.Component),W=(0,u.$j)((function(e){return{users:Q(e),pageSize:y(e),totalUsersCount:z(e),currentPage:Z(e),isFetching:M(e),followingInProgress:X(e),portionSize:G(e)}}),{getUsers:l.D7,follow:l.ZN,unfollow:l.fv})(j)},1694:function(e,r){var s;!function(){"use strict";var n={}.hasOwnProperty;function t(){for(var e=[],r=0;r<arguments.length;r++){var s=arguments[r];if(s){var o=typeof s;if("string"===o||"number"===o)e.push(s);else if(Array.isArray(s)){if(s.length){var i=t.apply(null,s);i&&e.push(i)}}else if("object"===o){if(s.toString!==Object.prototype.toString&&!s.toString.toString().includes("[native code]")){e.push(s.toString());continue}for(var u in s)n.call(s,u)&&s[u]&&e.push(u)}}}return e.join(" ")}e.exports?(t.default=t,e.exports=t):void 0===(s=function(){return t}.apply(r,[]))||(e.exports=s)}()},8055:function(e){"use strict";e.exports="data:image/png;base64,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"}}]);
//# sourceMappingURL=64.08a946a9.chunk.js.map