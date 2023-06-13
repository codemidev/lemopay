"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[5861],{43894:function(t,e,n){n.d(e,{Z:function(){return x}});var r=n(59499),a=n(69580),o=n(92777),i=n(82262),c=n(81531),u=n(63553),s=n(37247),l=n(14154),p=n(22456),d=n(52982),f=n(85893),h=function(t,e){var n=d.T.createComponent(t);return function(t){var r,a=t.recipient,o=t.editable,i=void 0===o||o,c=t.event,u=a.firstName?"".concat(a.firstName," ").concat((null===(r=a.lastName)||void 0===r?void 0:r.charAt(0))||""):a.lastName;return i?(0,f.jsx)(e,{"aria-label":"".concat(u,". Click to edit recipient."),href:"/send/recipient-details","data-analytics-event":c||void 0,className:["badge--with-shadow",a.avatarSlug?"badge--round":""].join(" "),children:a.avatarSlug?(0,f.jsx)(f.Fragment,{children:(0,f.jsx)(n,{unsized:!0,slug:a.avatarSlug})}):u||"Edit Recipient Details"}):(0,f.jsx)("span",{"aria-label":u,className:["badge badge--disabled",a.avatarSlug?"badge--round":""].join(" "),children:a.avatarSlug?(0,f.jsx)(f.Fragment,{children:(0,f.jsx)(n,{unsized:!0,slug:a.avatarSlug})}):u})}};function v(t){var e=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,r=(0,s.Z)(t);if(e){var a=(0,s.Z)(this).constructor;n=Reflect.construct(r,arguments,a)}else n=r.apply(this,arguments);return(0,u.Z)(this,n)}}var m,b=function(t,e,n,r,a){var u=p.H.createComponent(t,e,n,r),s=h(t,a),d=l.B.createComponent(t);return function(t){(0,c.Z)(n,t);var e=v(n);function n(t){var r;return(0,o.Z)(this,n),(r=e.call(this,t)).state={amountError:""},r}return(0,i.Z)(n,[{key:"render",value:function(){var t=this,e=this.props.editable,n=void 0===e?"both":e;return(0,f.jsxs)("div",{children:[(0,f.jsxs)("p",{className:["flex-layout-center-center",this.props.hideBottomMargin?"":"mb-s"].join(" "),children:[(0,f.jsx)("span",{className:"sr-only",children:" Sending "}),(0,f.jsx)(u,{amount:this.props.amount,currency:this.props.currency,editable:["amount","both"].includes(n),setError:function(e){return t.setState({amountError:e})},onChange:function(e){var n,r;return null===(n=(r=t.props).onChange)||void 0===n?void 0:n.call(r,e)}}),(0,f.jsx)("span",{className:"sr-only",children:" to "}),(0,f.jsx)("svg",{className:"mx",xmlns:"http://www.w3.org/2000/svg","aria-hidden":"true",width:"24",height:"25",viewBox:"0 0 24 25",fill:"none",children:(0,f.jsx)("path",{d:"M13.1719 12.5L8.22192 7.54999L9.63592 6.13599L15.9999 12.5L9.63592 18.864L8.22192 17.45L13.1719 12.5Z",fill:"#6889FD"})}),(0,f.jsx)(s,{editable:["recipient","both"].includes(n),recipient:this.props.recipient,event:this.props.event})]}),this.state.amountError?(0,f.jsx)("p",{className:"my-s",id:"amount-input-badge-error",children:(0,f.jsx)(d,{errorText:this.state.amountError,className:"mt-s"})}):null]})}}]),n}(t.Component)},y=n(67294),g=n(49915);function j(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}var x=function(t){var e=(0,y.useState)(!1),n=e[0],o=e[1];return(0,y.useEffect)((function(){var t=(0,a.t)("@/global-store"),e=(0,a.t)("@/alert"),n=(0,a.t)("@/exchange-rate");m=b(y,e,t,n,g.Z),o(!0)}),[]),n?(0,f.jsx)(m,function(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?j(Object(n),!0).forEach((function(e){(0,r.Z)(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):j(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}({},t)):null}},42252:function(t,e,n){n.d(e,{Z:function(){return y}});var r,a,o=n(59499),i=n(67294),c=n(69580),u=n(48762),s=n(50029),l=n(17674),p=n(87794),d=n.n(p),f=n(35625),h=n(85893),v=["/send/with-bitcoin","send/with-usdt-tron","/send/with-p2p","/send/with-usdc","/send/payment-method"],m=function(t,e,n){var a=t.useState,o=t.useEffect;return function(t){var i=t.currency,c=t.position,u=void 0===c?"top":c,p=t.round,m=v.includes(window.location.pathname),b=a(0),y=(0,l.Z)(b,2),g=y[0],j=y[1],x=a(null),O=(0,l.Z)(x,2),w=O[0],Z=O[1],S=a(!1),_=(0,l.Z)(S,2),C=_[0],N=_[1],P=n(),E=(0,l.Z)(P,1)[0];o((function(){return(0,s.Z)(d().mark((function t(){var n,a,o;return d().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,null===(n=e.ready)||void 0===n?void 0:n.call(e);case 2:if(t.t0=t.sent,t.t0){t.next=5;break}t.t0=e;case 5:a=t.t0,o=a.fxRate$,r=o.subscribe((function(t){Z(t)}));case 8:case"end":return t.stop()}}),t)})))(),function(){var t;null===(t=r)||void 0===t||t.unsubscribe()}}),[]);var k=function(){var e=(0,s.Z)(d().mark((function e(){var n,r,a,o,c;return d().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:try{r=(n=E||{}).hasUnusedPromoCode,a=n.unusedPromoCodeAmount,r&&a&&null!==(o=(0,f.convertCurrency)({amount:+a,from:"USD",to:i||"USD",currencyInput:"code",fxRate:w}))&&void 0!==o&&o.value&&(j(o.displayValue),null===(c=t.setAmount)||void 0===c||c.call(t,o.value))}catch(u){console.log(u)}case 1:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return o((function(){k()}),[w,E]),o((function(){setTimeout((function(){N(!!g)}),1)}),[g]),w&&null!==E&&void 0!==E&&E.id&&!g?null:(0,h.jsx)("p",{"aria-live":"polite","aria-atomic":"true",className:["px text-center","bottom"===u?"card__banner--bottom":"card__banner",p?"card__banner--round":"",C?"card__banner--show":""].join(" "),children:C?(0,h.jsxs)("span",{className:"flex-1",children:["You have ",(0,h.jsx)("i",{children:g})," "," ","off ",m?"this":"your next"," "," ","transfer!"]}):null})}};function b(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}var y=function(t){var e=(0,i.useState)(!1),n=e[0],r=e[1];return(0,i.useEffect)((function(){var t=(0,c.t)("@/exchange-rate");a=m(i,t,u.Z),r(!0)}),[]),n?(0,h.jsx)(a,function(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?b(Object(n),!0).forEach((function(e){(0,o.Z)(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):b(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}({},t)):null}},54283:function(t,e,n){n.d(e,{R:function(){return r}});var r=function(){return window.innerWidth>=800}},52982:function(t,e,n){n.d(e,{T:function(){return m}});var r,a=n(17674),o=n(92777),i=n(82262),c=n(10748),u=n(81531),s=n(63553),l=n(37247),p=n(59499),d=n(3132),f=n(58833),h=n(85893);function v(t){var e=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,r=(0,l.Z)(t);if(e){var a=(0,l.Z)(this).constructor;n=Reflect.construct(r,arguments,a)}else n=r.apply(this,arguments);return(0,s.Z)(this,n)}}var m={createComponent:function(t,e){var n=f.i.createComponent(t);return function(t){(0,u.Z)(l,t);var s=v(l);function l(t){var i;if((0,o.Z)(this,l),i=s.call(this,t),(0,p.Z)((0,c.Z)(i),"getAvatarUrl",(function(t){var e=(null===t||void 0===t?void 0:t.split(":"))||[],n=(0,a.Z)(e,2),r=n[0],o=n[1];return"https://res.cloudinary.com/sendcash/image/upload/c_thumb,w_200,g_face/v1638275269/sendcash-v2".concat(function(){switch(r){case"black-bg":return"/avatars/Colored%20Background/ToyFaces_Black_BG_".concat(o,".png");case"transparent-bg":return"/avatars/Colored%20Background/ToyFaces_Transparent_BG_".concat(o,".png");case"colored-bg":return"/avatars/Colored%20Background/ToyFaces_Colored_BG_".concat(o,".png");default:return"/avatars/Generic/avatar-".concat(o,".jpg")}}())})),t.editable){r=e((function(){return(0,h.jsx)(n,{show:i.state.openSelectModal})}))}return i.state={openSelectModal:!1},i}return(0,i.Z)(l,[{key:"render",value:function(){var t=this,e=this.props,n=e.slug,a=e.inline,o=e.large,i=e.unsized,c=e.initials,u=e.editable;return(0,h.jsxs)(h.Fragment,{children:[(0,h.jsxs)("span",{className:"avatar"+(a?" avatar--inline":"")+(o?" avatar--large":"")+(i?" avatar--unsized":""),children:[n?(0,h.jsx)("img",{src:t.getAvatarUrl(n),alt:"user avatar",className:"avatar__image"}):c?(0,h.jsx)("span",{className:"avatar__initials","aria-hidden":"true",children:c}):(0,h.jsx)("img",{"aria-hidden":"true",src:t.getAvatarUrl("generic:purple"),alt:"",className:"avatar__image"}),u?(0,h.jsxs)("button",{onClick:function(){return t.setState({openSelectModal:!0})},className:"avatar__edit-button",type:"button",children:[(0,h.jsx)("span",{"aria-hidden":"true",children:"Edit"}),(0,h.jsx)("span",{className:"sr-only",children:"Select a different avatar"})]}):null]}),u?(0,h.jsx)(r,{open:this.state.openSelectModal,onClose:function(e){t.setState({openSelectModal:!1}),e&&(["string","number"].includes(typeof e)?t.props.setAvatar("colored-bg:".concat(e)):(0,d.Z)('<SelectAvatar> component returned invalid data: "'.concat(JSON.stringify(e),'"')))}}):null]})}}]),l}(t.Component)}}},22456:function(t,e,n){n.d(e,{H:function(){return O}});var r=n(50029),a=n(92777),o=n(82262),i=n(10748),c=n(81531),u=n(63553),s=n(37247),l=n(59499),p=n(87794),d=n.n(p),f=n(55840),h=n(53527),v=n(68725),m=n(93475),b=n(10461),y=n(85893);function g(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function j(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?g(Object(n),!0).forEach((function(e){(0,l.Z)(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):g(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function x(t){var e=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,r=(0,s.Z)(t);if(e){var a=(0,s.Z)(this).constructor;n=Reflect.construct(r,arguments,a)}else n=r.apply(this,arguments);return(0,u.Z)(this,n)}}var O={createComponent:function(t,e,n,u){var s=f.g.createComponent(t),p=b.K.createComponent(t,n,u),g=function(u){(0,c.Z)(b,u);var f=x(b);function b(o){var c;(0,a.Z)(this,b),c=f.call(this,o),(0,l.Z)((0,i.Z)(c),"amountInputWidthFinder",t.createRef()),(0,l.Z)((0,i.Z)(c),"amountInputContainer",t.createRef()),(0,l.Z)((0,i.Z)(c),"preventInvalid",function(){var t=(0,r.Z)(d().mark((function t(n){return d().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!c.state.amountError){t.next=7;break}return n.preventDefault(),t.next=5,e.ready();case 5:(0,t.sent)({title:"Invalid Amount",body:"You can not send this amount."});case 7:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()),(0,l.Z)((0,i.Z)(c),"amountInputLengthHandler",(function(){var t,e=null===(t=c.amountInputWidthFinder.current)||void 0===t?void 0:t.offsetWidth;c.setState({amountInputLength:e?Math.ceil(e):void 0})})),(0,l.Z)((0,i.Z)(c),"setAmount",(function(t,e){return new Promise((function(n){c.setState({amount:t,displayAmount:e},(function(){var e,r;null===(e=(r=c.props).onChange)||void 0===e||e.call(r,t),c.amountInputLengthHandler(),n()})),t&&c.Store.update("transaction",{amount:t})}))})),(0,l.Z)((0,i.Z)(c),"handleBlur",(function(){window.trackEvents({type:"action",properties:{event:"edited amount on payment method page"}})})),(0,l.Z)((0,i.Z)(c),"setError",(function(t){c.setState({amountError:t}),c.props.setError&&c.props.setError(t)})),c.Store=n;var u=c.Store.transaction;return c.state={displayAmount:(0,v.formatNumber)(c.props.amount||u.amount),amountError:"",amountInputLength:"50"},c}return(0,o.Z)(b,[{key:"componentDidMount",value:function(){var t=this;this.amountInputLengthHandler(),setTimeout((function(){t.amountInputLengthHandler()}),1500)}},{key:"render",value:function(){var t=this,e=this.state,n=e.displayAmount,r=e.amountInputLength,a=this.props,o=a.amount,i=a.currency,c=h.currencySymbols[i]||i;return this.props.editable?(0,y.jsxs)("span",{ref:this.amountInputContainer,className:["".concat(this.props.flat?"badge":"badge--with-shadow"),this.props.className||""].join(" "),children:[(0,y.jsxs)("span",{className:"badge__icon mr-none","aria-hidden":"true",children:[c,"\xa0"]}),(0,y.jsxs)("label",{className:"sr-only",htmlFor:"amount-input-badge",children:["Amount to send in ",i,"."]}),(0,y.jsx)("span",{ref:this.amountInputWidthFinder,style:{visibility:"hidden",position:"absolute"},children:n?(0,m.getDisplayAmount)(o,""):"0"}),(0,y.jsx)(p,{defaultValue:o,onChange:this.setAmount,currency:i,setError:function(e){return t.setError(e)},children:function(e){return(0,y.jsx)(s,j(j({},e.amountInputAttributes),{},{setValue:function(t){return e.setAmount(t)},value:e.displayValue,onRejectInput:e.setRejectInputCallback,inputContainerRef:t.amountInputContainer,id:"amount-input-badge",className:"badge__input",style:{width:r+"px",boxSizing:"content-box"},onBlur:t.handleBlur,"aria-describedby":"amount-input-badge-error",type:e.amountInputAttributes.type,inputMode:e.amountInputAttributes.inputMode}))}})]}):(0,y.jsxs)("span",{className:"badge badge--disabled",children:[c," ",n?(0,m.getDisplayAmount)(o,""):"0"]})}}]),b}(t.Component);return g}}}}]);
//# sourceMappingURL=5861-d17643b5c769ab1d.js.map