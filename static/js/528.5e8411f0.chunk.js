(self.webpackChunkgoit_react_hw_08_phonebook=self.webpackChunkgoit_react_hw_08_phonebook||[]).push([[528],{8528:function(n,e,t){"use strict";t.r(e),t.d(e,{default:function(){return k}});var r=t(9439),o=t(2791),i="Form_form__aEQ+j",u="Form_label__1AKk-",c="Form_submit__cIQDM",a="Form_button__V80So",l=t(9434),s=t(9298),f=t(5206),d=(t(5462),t(8551)),m=t(184);var v=function(){var n=(0,o.useState)(""),e=(0,r.Z)(n,2),t=e[0],v=e[1],h=(0,o.useState)(""),p=(0,r.Z)(h,2),Z=p[0],_=p[1],b=(0,l.v9)((function(n){return n.contacts.items})),x=(0,l.I0)(),g=function(n){var e=n.currentTarget,t=e.name,r=e.value;switch(t){case"name":v(r);break;case"number":_(r);break;default:return}},S=function(){v(""),_("")};return(0,m.jsxs)("form",{className:i,onSubmit:function(n){n.preventDefault();for(var e=0;e<b.length;e++){if(b[e].name===t)return void(0,f.Am)("".concat(t," is already in contacts."))}x((0,s.w$)({name:t,number:Z})),S()},children:[(0,m.jsxs)("label",{className:u,children:["Name",(0,m.jsx)("input",{className:c,type:"text",value:t,onChange:g,placeholder:"Enter Name",name:"name",required:!0})]}),(0,m.jsxs)("label",{className:u,children:["Number",(0,m.jsx)("input",{className:c,type:"tel",value:Z,onChange:g,placeholder:"Enter Number",name:"number",pattern:"^\\+?\\d{1,4}[-.\\s]?\\(?\\d{1,3}\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}$",title:"Phone number must be digits and can contain spaces, dashes, parentheses and can start with +",required:!0})]}),(0,m.jsx)(d.Z,{className:a,type:"submit",disabled:!t||!Z,children:"Add contact"}),(0,m.jsx)(f.Ix,{})]})},h="Filter_Label__WeV3d",p="Filter_Input__HXkRb",Z=t(5145),_=function(){var n=(0,l.v9)((function(n){return n.filter.value})),e=(0,l.I0)();return(0,m.jsxs)("label",{className:h,children:[(0,m.jsx)("span",{children:"Find contacts by name:"}),(0,m.jsx)("input",{className:p,type:"text",value:n,onChange:function(n){e((0,Z.Tv)(n.currentTarget.value))},name:"filter"})]})},b="Contactlist_list__nZLdS",x={names:"ElementCotact_names__+jor5",number:"ElementCotact_number__BJ5vo",button:"ElementCotact_button__tY-wJ"},g=t(7247);function S(n){var e=n.contacts,t=n.onDeleteContact;return(0,m.jsxs)("p",{className:x.element,children:[(0,m.jsxs)("span",{className:x.names,children:[e.name,":"]}),(0,m.jsx)("span",{className:x.number,children:e.number}),(0,m.jsx)("button",{type:"button",className:x.button,onClick:function(){return t(e.id)},children:(0,m.jsx)(g.Z,{className:x.icon})})]})}var j=function(n){return n.contacts};function w(){var n=(0,l.v9)((function(n){return n.filter.value})),e=(0,l.v9)((function(n){return n.contacts.items})),t=function(){var t=n.toLocaleLowerCase();return e.filter((function(n){return n.name.toLocaleLowerCase().includes(t)}))}(),r=(0,l.I0)(),i=(0,l.v9)(j),u=i.isLoading,c=i.error,a=function(n){r((0,s.ku)(n))};return(0,o.useEffect)((function(){r((0,s.m$)())}),[r]),(0,m.jsxs)(m.Fragment,{children:[u&&(0,m.jsx)("b",{children:"Loading contacts..."}),c&&(0,m.jsx)("b",{children:c}),(0,m.jsx)("ul",{className:b,children:t.map((function(n){return(0,m.jsx)("li",{children:(0,m.jsx)(S,{contacts:n,onDeleteContact:a})},n.id)}))})]})}var N="Contacts_contacts__pGtDD",y="Contacts_title__TZj0w",C="Contacts_subtitle__tkbMA";function k(){return(0,m.jsxs)("div",{className:N,children:[(0,m.jsx)("h1",{className:y,children:"Phonebook"}),(0,m.jsx)(v,{}),(0,m.jsx)("h2",{className:C,children:"Contacts"}),(0,m.jsx)(_,{}),(0,m.jsx)(w,{})]})}},7247:function(n,e,t){"use strict";var r=t(4836);e.Z=void 0;var o=r(t(5649)),i=t(184),u=(0,o.default)((0,i.jsx)("path",{d:"M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM19 4h-3.5l-1-1h-5l-1 1H5v2h14V4z"}),"Delete");e.Z=u},5649:function(n,e,t){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"default",{enumerable:!0,get:function(){return r.createSvgIcon}});var r=t(4454)},9201:function(n,e,t){"use strict";t.d(e,{Z:function(){return b}});var r=t(7462),o=t(2791),i=t(3366),u=t(8182),c=t(4419),a=t(4036),l=t(1046),s=t(4923),f=t(5878),d=t(1217);function m(n){return(0,d.Z)("MuiSvgIcon",n)}(0,f.Z)("MuiSvgIcon",["root","colorPrimary","colorSecondary","colorAction","colorError","colorDisabled","fontSizeInherit","fontSizeSmall","fontSizeMedium","fontSizeLarge"]);var v=t(184),h=["children","className","color","component","fontSize","htmlColor","inheritViewBox","titleAccess","viewBox"],p=(0,s.ZP)("svg",{name:"MuiSvgIcon",slot:"Root",overridesResolver:function(n,e){var t=n.ownerState;return[e.root,"inherit"!==t.color&&e["color".concat((0,a.Z)(t.color))],e["fontSize".concat((0,a.Z)(t.fontSize))]]}})((function(n){var e,t,r,o,i,u,c,a,l,s,f,d,m,v,h,p,Z,_=n.theme,b=n.ownerState;return{userSelect:"none",width:"1em",height:"1em",display:"inline-block",fill:b.hasSvgAsChild?void 0:"currentColor",flexShrink:0,transition:null==(e=_.transitions)||null==(t=e.create)?void 0:t.call(e,"fill",{duration:null==(r=_.transitions)||null==(o=r.duration)?void 0:o.shorter}),fontSize:{inherit:"inherit",small:(null==(i=_.typography)||null==(u=i.pxToRem)?void 0:u.call(i,20))||"1.25rem",medium:(null==(c=_.typography)||null==(a=c.pxToRem)?void 0:a.call(c,24))||"1.5rem",large:(null==(l=_.typography)||null==(s=l.pxToRem)?void 0:s.call(l,35))||"2.1875rem"}[b.fontSize],color:null!=(f=null==(d=(_.vars||_).palette)||null==(m=d[b.color])?void 0:m.main)?f:{action:null==(v=(_.vars||_).palette)||null==(h=v.action)?void 0:h.active,disabled:null==(p=(_.vars||_).palette)||null==(Z=p.action)?void 0:Z.disabled,inherit:void 0}[b.color]}})),Z=o.forwardRef((function(n,e){var t=(0,l.Z)({props:n,name:"MuiSvgIcon"}),s=t.children,f=t.className,d=t.color,Z=void 0===d?"inherit":d,_=t.component,b=void 0===_?"svg":_,x=t.fontSize,g=void 0===x?"medium":x,S=t.htmlColor,j=t.inheritViewBox,w=void 0!==j&&j,N=t.titleAccess,y=t.viewBox,C=void 0===y?"0 0 24 24":y,k=(0,i.Z)(t,h),z=o.isValidElement(s)&&"svg"===s.type,I=(0,r.Z)({},t,{color:Z,component:b,fontSize:g,instanceFontSize:n.fontSize,inheritViewBox:w,viewBox:C,hasSvgAsChild:z}),E={};w||(E.viewBox=C);var F=function(n){var e=n.color,t=n.fontSize,r=n.classes,o={root:["root","inherit"!==e&&"color".concat((0,a.Z)(e)),"fontSize".concat((0,a.Z)(t))]};return(0,c.Z)(o,m,r)}(I);return(0,v.jsxs)(p,(0,r.Z)({as:b,className:(0,u.Z)(F.root,f),focusable:"false",color:S,"aria-hidden":!N||void 0,role:N?"img":void 0,ref:e},E,k,z&&s.props,{ownerState:I,children:[z?s.props.children:s,N?(0,v.jsx)("title",{children:N}):null]}))}));Z.muiName="SvgIcon";var _=Z;function b(n,e){function t(t,o){return(0,v.jsx)(_,(0,r.Z)({"data-testid":"".concat(e,"Icon"),ref:o},t,{children:n}))}return t.muiName=_.muiName,o.memo(o.forwardRef(t))}},3199:function(n,e,t){"use strict";var r=t(2254);e.Z=r.Z},4454:function(n,e,t){"use strict";t.r(e),t.d(e,{capitalize:function(){return o.Z},createChainedFunction:function(){return i},createSvgIcon:function(){return u.Z},debounce:function(){return c.Z},deprecatedPropType:function(){return a},isMuiElement:function(){return l.Z},ownerDocument:function(){return s.Z},ownerWindow:function(){return f.Z},requirePropFactory:function(){return d},setRef:function(){return m},unstable_ClassNameGenerator:function(){return g},unstable_useEnhancedEffect:function(){return v.Z},unstable_useId:function(){return h},unsupportedProp:function(){return p},useControlled:function(){return Z.Z},useEventCallback:function(){return _.Z},useForkRef:function(){return b.Z},useIsFocusVisible:function(){return x.Z}});var r=t(5902),o=t(4036),i=t(8949).Z,u=t(9201),c=t(3199);var a=function(n,e){return function(){return null}},l=t(9103),s=t(8301),f=t(7602);t(7462);var d=function(n,e){return function(){return null}},m=t(2971).Z,v=t(162),h=t(8252).Z;var p=function(n,e,t,r,o){return null},Z=t(5158),_=t(9683),b=t(2071),x=t(3031),g={configure:function(n){r.Z.configure(n)}}},9103:function(n,e,t){"use strict";t.d(e,{Z:function(){return o}});var r=t(2791);var o=function(n,e){return r.isValidElement(n)&&-1!==e.indexOf(n.type.muiName)}},8301:function(n,e,t){"use strict";var r=t(4913);e.Z=r.Z},7602:function(n,e,t){"use strict";var r=t(5202);e.Z=r.Z},5158:function(n,e,t){"use strict";t.d(e,{Z:function(){return i}});var r=t(9439),o=t(2791);var i=function(n){var e=n.controlled,t=n.default,i=(n.name,n.state,o.useRef(void 0!==e).current),u=o.useState(t),c=(0,r.Z)(u,2),a=c[0],l=c[1];return[i?e:a,o.useCallback((function(n){i||l(n)}),[])]}},162:function(n,e,t){"use strict";var r=t(2876);e.Z=r.Z},8949:function(n,e,t){"use strict";function r(){for(var n=arguments.length,e=new Array(n),t=0;t<n;t++)e[t]=arguments[t];return e.reduce((function(n,e){return null==e?n:function(){for(var t=arguments.length,r=new Array(t),o=0;o<t;o++)r[o]=arguments[o];n.apply(this,r),e.apply(this,r)}}),(function(){}))}t.d(e,{Z:function(){return r}})},2254:function(n,e,t){"use strict";function r(n){var e,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:166;function r(){for(var r=this,o=arguments.length,i=new Array(o),u=0;u<o;u++)i[u]=arguments[u];var c=function(){n.apply(r,i)};clearTimeout(e),e=setTimeout(c,t)}return r.clear=function(){clearTimeout(e)},r}t.d(e,{Z:function(){return r}})},4913:function(n,e,t){"use strict";function r(n){return n&&n.ownerDocument||document}t.d(e,{Z:function(){return r}})},5202:function(n,e,t){"use strict";t.d(e,{Z:function(){return o}});var r=t(4913);function o(n){return(0,r.Z)(n).defaultView||window}},8252:function(n,e,t){"use strict";var r;t.d(e,{Z:function(){return a}});var o=t(9439),i=t(2791),u=0;var c=(r||(r=t.t(i,2)))["useId".toString()];function a(n){if(void 0!==c){var e=c();return null!=n?n:e}return function(n){var e=i.useState(n),t=(0,o.Z)(e,2),r=t[0],c=t[1],a=n||r;return i.useEffect((function(){null==r&&c("mui-".concat(u+=1))}),[r]),a}(n)}},4836:function(n){n.exports=function(n){return n&&n.__esModule?n:{default:n}},n.exports.__esModule=!0,n.exports.default=n.exports}}]);
//# sourceMappingURL=528.5e8411f0.chunk.js.map