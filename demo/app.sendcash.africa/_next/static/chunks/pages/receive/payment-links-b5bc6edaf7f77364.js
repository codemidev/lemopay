(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[3806],{56164:function(t,e,n){"use strict";n(67294);var r=n(85893);e.Z=function(){return(0,r.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",width:"24",height:"24",children:[(0,r.jsx)("path",{fill:"none",d:"M0 0h24v24H0z"}),(0,r.jsx)("path",{d:"M2 20h20v2H2v-2zm2-8h2v7H4v-7zm5 0h2v7H9v-7zm4 0h2v7h-2v-7zm5 0h2v7h-2v-7zM2 7l10-5 10 5v4H2V7zm2 1.236V9h16v-.764l-8-4-8 4zM12 8a1 1 0 1 1 0-2 1 1 0 0 1 0 2z",fill:"#6889FD"})]})}},37813:function(t,e,n){"use strict";var r=n(67294),a=n(50247).t.createComponent(r);e.Z=a},14265:function(t,e,n){"use strict";n(67294);var r=n(85893);e.Z=function(){return(0,r.jsxs)("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[(0,r.jsx)("rect",{width:"24",height:"24",rx:"12",fill:"#F6F7FB"}),(0,r.jsx)("path",{d:"M7 11.9999H17",stroke:"#6889FD",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"}),(0,r.jsx)("path",{d:"M12 6.99994V12.2199V16.9999",stroke:"#6889FD",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"})]})}},69682:function(t,e,n){"use strict";var r=n(5152),a=n.n(r),i=n(67294),o=n(33617).Q.createComponent(i,(function(t){return a()((function(){return Promise.all([n.e(5237),n.e(4377)]).then(n.bind(n,44377))}),{loading:function(){return t()},loadableGenerated:{webpack:function(){return[44377]}}})}));e.Z=o},54283:function(t,e,n){"use strict";n.d(e,{R:function(){return r}});var r=function(){return window.innerWidth>=800}},93475:function(t,e,n){function r(t){var e=t.toString();return(e.includes(".")?e.split(".")[1].length:0)>8?t.toFixed(8):t}function a(t){var e=parseFloat(t,10);return(new Intl.NumberFormat).format(e.toFixed(2))}t.exports={formatBTC:r,formatFiat:a,getDisplayAmount:function(t,e){var i="BTC"===e?r(t):a(t),o=n(53527).knownCurrencySymbols;return o[e]?"".concat(o[e]).concat(i):"".concat(e).concat(i)}}},35597:function(t,e,n){"use strict";n.r(e),n.d(e,{default:function(){return V}});var r=n(50029),a=n(92777),i=n(82262),o=n(10748),s=n(81531),c=n(63553),u=n(37247),l=n(59499),d=n(87794),m=n.n(d),p=n(49915),f=n(82802),h=n(14265),v=n(83466),y=n(6704),k=n(54283),x=n(69580),b=n(75268),g=n(24491),w=n(99009),j=n(66607),Z=n(11163),L=n.n(Z),P=n(67294),N=n(34050),S=n(69682),C=n(51557),E=n(74231),_=n(85893);function I(t){var e=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,r=(0,u.Z)(t);if(e){var a=(0,u.Z)(this).constructor;n=Reflect.construct(r,arguments,a)}else n=r.apply(this,arguments);return(0,c.Z)(this,n)}}var R=function(t){(0,s.Z)(n,t);var e=I(n);function n(t){var r;return(0,a.Z)(this,n),r=e.call(this,t),(0,l.Z)((0,o.Z)(r),"emailValidator",(0,E.Z_)().required("Enter a valid email address").email("Please enter a valid email address")),(0,l.Z)((0,o.Z)(r),"vibrateInput",(function(){})),(0,l.Z)((0,o.Z)(r),"onSubmit",(function(t){t.preventDefault();var e=r.state,n=e.email;e.emailError?r.vibrateInput("Please correct all input errors before submitting.",r.state.email):r.props.onSubmit(n)})),(0,l.Z)((0,o.Z)(r),"updateValue",(function(t){r.emailValidator.validate(t).then((function(){r.setState({email:t,emailError:""})})).catch((function(e){r.setState({email:t,emailError:e.message})}))})),r.state={email:"",emailError:"",showError:!1,callbackUrl:"/receive/choose-account"},r}return(0,i.Z)(n,[{key:"componentDidMount",value:function(){this.updateValue(this.state.email)}},{key:"render",value:function(){var t=this,e=this.state,n=e.showError,r=e.emailError;return(0,_.jsxs)(C.Z,{descriptionId:"email-input-modal-desc",onDismiss:this.props.onDismiss,open:this.props.open,titleId:"email-input-modal-title",children:[(0,_.jsx)("h1",{className:"modal__title h3",id:"email-input-modal-title",children:"View your payment links"}),(0,_.jsxs)("form",{className:"modal__body px pt",onSubmit:this.onSubmit,children:[(0,_.jsxs)("p",{className:"text-center pb mb",id:"email-input-modal-desc",children:["If you have a Sendcash account,"," ",(0,_.jsxs)(p.Z,{href:"/auth/login?callbackUrl=/receive",children:[(0,_.jsx)("b",{children:"log in"})," "]}),"to view your payment links. If you don't have an account, enter your email address below to see all payment links you have created."]}),(0,_.jsx)(S.Z,{type:"text",value:this.state.email,setValue:this.updateValue,showError:!1,onBlur:function(){return t.setState({showError:!0})},label:"Email",onRejectInput:function(e){t.vibrateInput=e}}),(0,_.jsx)(N.Z,{errorText:n?r:""}),(0,_.jsx)("div",{className:"modal__footer flex-layout-center-center mt-xl",children:(0,_.jsx)("button",{type:"submit",className:"button button--xl","aria-disabled":!!this.state.emailError,children:"Continue"})})]})]})}}]),n}(P.Component),F=n(56164),O=n(37813),D=n(53527),A=n(93475),M=n(59904),B=function(t){var e=t.link,n=t.onClick,r=D.currencyCodes,a=r[e.currency||r.usd_coin];return(0,_.jsx)("li",{children:(0,_.jsxs)("button",{className:"py flex items-center",onClick:n,"data-analytics-event":"Selected a payment link",children:[(0,_.jsxs)("span",{className:"flex-1 text-left mr flex",children:[(0,_.jsx)(F.Z,{}),(0,_.jsxs)("span",{className:"ml-s flex-1",children:[(0,_.jsx)("span",{className:"sr-only",id:"account-number-label",children:"Account name"}),(0,_.jsx)("span",{className:"fw-500 h2","aria-describedby":"account-number-label",children:(0,M.getFullName)(e.account.accountName)}),(0,_.jsx)("span",{className:"d-block mt-xs",children:e.account.bankName}),e.account&&Number(e.amount)>0&&e.currency?(0,_.jsxs)(_.Fragment,{children:[(0,_.jsx)("span",{"aria-describedby":"fixed-amount-label",className:"d-block mt-xs fw-500",children:(0,A.getDisplayAmount)(e.amount,a)}),(0,_.jsx)("span",{className:"sr-only",id:"fixed-amount-label",children:"Fixed amount"})]}):null]})]}),(0,_.jsx)(O.Z,{})]})})},$=n(9178);function q(t){var e=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,r=(0,u.Z)(t);if(e){var a=(0,u.Z)(this).constructor;n=Reflect.construct(r,arguments,a)}else n=r.apply(this,arguments);return(0,c.Z)(this,n)}}var z=function(t){(0,s.Z)(n,t);var e=q(n);function n(t){var i;(0,a.Z)(this,n),i=e.call(this,t),(0,l.Z)((0,o.Z)(i),"backLink",{callback:L().back}),(0,l.Z)((0,o.Z)(i),"Store",void 0),(0,l.Z)((0,o.Z)(i),"getPaymentLinks",(0,r.Z)(m().mark((function t(){var e,n,r,a,o=arguments;return m().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e=o.length>0&&void 0!==o[0]?o[0]:"",n=o.length>1?o[1]:void 0,t.prev=2,n&&i.setState({loading:!0}),r="/payment-links/get",e&&(r+="?email=".concat(e)),t.next=8,y.Z.request(r);case 8:a=t.sent,i.setState({paymentLinks:a}),i.Store.update("paymentLinks",{all:a}),t.next=18;break;case 13:t.prev=13,t.t0=t.catch(2),console.log({e:t.t0}),i.setState({paymentLinks:[]}),i.Store.update("paymentLinks",{all:[]});case 18:return t.prev=18,i.setState({loading:!1}),t.finish(18);case 21:case"end":return t.stop()}}),t,null,[[2,13,18,21]])})))),(0,l.Z)((0,o.Z)(i),"onSubmitEmailInput",(function(t){i.getPaymentLinks(t,!0),i.closeEmailInputModal()})),(0,l.Z)((0,o.Z)(i),"selectPaymentLink",(function(t){i.setState({selectedPaymentId:t})})),(0,l.Z)((0,o.Z)(i),"closePaymentLinkModal",(function(){i.setState({selectedPaymentId:""})})),(0,l.Z)((0,o.Z)(i),"showEmailInputModal",(function(){i.setState({showEmailInputModal:!0})})),(0,l.Z)((0,o.Z)(i),"closeEmailInputModal",(function(){i.setState({showEmailInputModal:!1})}));var s,c,u=[],d=!0;(i.Store=(0,x.t)("@/global-store"),t.isServerRendered)?(u=i.props.paymentLinks||[],d=!1):null!==(s=i.Store.paymentLinks)&&void 0!==s&&s.all&&(u=null===(c=i.Store.paymentLinks)||void 0===c?void 0:c.all,d=!1);return i.state={paymentLinks:u,selectedPaymentId:"",loading:d,showEmailInputModal:!1,isDesktop:!!(0,g.S)()&&(0,k.R)()},i}return(0,i.Z)(n,[{key:"componentDidMount",value:function(){var t,e;this.props.isServerRendered||this.props.paymentLinks||this.getPaymentLinks(),null===(t=(e=window).trackEvents)||void 0===t||t.call(e,{type:"action",properties:{event:'Viewed "Payment links" page'}})}},{key:"render",value:function(){var t,e=this,n=this.state,r=n.paymentLinks,a=n.selectedPaymentId,i=n.loading,o=n.showEmailInputModal,s=n.isDesktop,c=r.find((function(t){return t.id===a}));return(0,_.jsxs)(_.Fragment,{children:[(0,_.jsx)(b.Z,{hook:w.C,argumentsList:[],onUpdate:function(t){e.setState({isDesktop:t})}},"useIsDesktop"),(0,_.jsx)($.Z,{open:!!a,paymentLink:c,onDismiss:this.closePaymentLinkModal}),(0,_.jsx)(R,{open:o,onSubmit:this.onSubmitEmailInput,onDismiss:this.closeEmailInputModal}),(0,_.jsxs)("div",{className:s?"page--slim":"page--full",children:[(0,_.jsx)(v.Z,{title:"Payment Links",backLink:this.backLink,showCloseButton:!0,closeCallback:function(){return L().push("/home")}}),i?(0,_.jsx)("section",{className:"page__main",children:(0,_.jsx)(f.Z,{})}):(0,_.jsxs)(_.Fragment,{children:[(0,_.jsx)("section",{className:"page__main",children:(0,_.jsxs)("ul",{className:"list list--clickable list--card list--with-shadow py-xs",children:[r.map((function(t){return(0,_.jsx)(B,{onClick:function(){return e.selectPaymentLink(t.id)},"data-analytics-event":"Selected a payment link",link:t},t.id)})),(0,_.jsx)("li",{children:(0,_.jsxs)(p.Z,{type:"button",href:"/receive/add-account","data-analytics-event":"Clicked create payment link card",className:"flex-layout-center-between pt-s pb-s",children:[(0,_.jsx)("span",{className:"h3",children:"Create a new payment link"}),(0,_.jsx)("span",{"aria-hidden":"true",className:"button button--icon button--no-svg-first-child",children:(0,_.jsx)(h.Z,{})})]})})]})}),(0,_.jsx)("footer",{className:"page__footer mt-l",children:null!==(t=this.props.currentUser)&&void 0!==t&&t.id?null:(0,_.jsxs)("p",{className:"text-center py mb",children:["If you have previously created payment links,",(0,_.jsx)("button",{className:"link-button",onClick:this.showEmailInputModal,children:"click here to view them"})]})})]})]})]})}}]),n}(P.Component);(0,l.Z)(z,"getInitialProps",function(){var t=(0,r.Z)(m().mark((function t(e){var n,r,a,i,o,s,c,u,l,d,p,f;return m().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(n=e.pathname,r=e.asPath,a=e.req,i=e.res,!(o=e.err)){t.next=3;break}throw o;case 3:if(s={title:"Payment Links",path:(null===r||void 0===r?void 0:r.split("?")[0])||n,description:""},!1,l=!1,t.prev=6,!(0,g.S)()){t.next=12;break}c=null===(d=(0,x.t)("@/global-store"))||void 0===d?void 0:d.currentUser,!(null===(p=c)||void 0===p||!p.id),t.next=20;break;case 12:return l=!0,t.next=15,i.locals.getCurrentUser().catch((function(){return null}));case 15:return c=t.sent,!(null===(f=c)||void 0===f||!f.id),t.next=19,(0,j.getPaymentLinks)(a).catch((function(){return null}));case 19:u=t.sent;case 20:t.next=29;break;case 22:if(t.prev=22,t.t0=t.catch(6),401!==t.t0.status){t.next=28;break}!1,t.next=29;break;case 28:throw t.t0;case 29:return t.abrupt("return",{meta:s,template:"app",showAppMobileNav:!1,showAppDesktopNav:!0,usesAuth:!1,currentUser:c,paymentLinks:u,isServerRendered:l});case 30:case"end":return t.stop()}}),t,null,[[6,22]])})));return function(e){return t.apply(this,arguments)}}());var V=z},6016:function(t,e,n){var r=n(85696),a=n(930);function i(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function o(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?i(Object(n),!0).forEach((function(e){a(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}var s=n(28687).GraphQLClient,c=n(98607),u={request:function(t,e,n,a){var i=(null===a||void 0===a?void 0:a.locals.token)||t.cookies.sendcash_token||null;return new s(c.GRAPHQL_API,{headers:{authorization:"Bearer ".concat(i)}}).request(e,n).catch((function(t){var e,n=function(t){var e,n=o(o({},t),{},{summary:"".concat((null===(e=t.constructor)||void 0===e?void 0:e.name)||t.name,": ")+(t.message+" ").slice(0,t.message.indexOf("{")).trim()}),a=JSON.stringify(n,null,4).replace(/\\n/g,"\n").replace(/\\t/g,"    ");console.log("GraphQL Request Error: ",a);var i="";if("object"===typeof t)t.response&&t.response.error&&(i=t.response.error),t.response&&t.response.errors&&(i=t.response.errors[0].message);else{var s=t.message.split(":");i=r(s,1)[0]}return i}(t);return n.toLowerCase().includes("unauthorized")&&(e=401,null!==a&&void 0!==a&&a.headersSent||(null===a||void 0===a||a.clearCookie("sendcash_token"),null===a||void 0===a||a.clearCookie("current_user"))),Promise.reject({status:e,message:n})}))}};t.exports=u},66607:function(t,e,n){var r=n(87794),a=n(49376),i=n(82730).allCurrencies,o=n(6016),s="\n\tfragment accountFragment on Account {\n\t\tid\n\t\taccountName\n\t\taccountNumber\n\t\taddress\n\t\tbankCode\n\t\tbankName\n\t\tbranchCode\n\t\tcountryCode\n\t\tcreatedAt\n\t\tflagged\n\t\tnonGovernmentalOrganization\n\t\tphoneNumber\n\t}\n";t.exports={createPaymentLink:function(){var t=a(r.mark((function t(e){var n,a,c;return r.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n="\n\t\t\t".concat(s,"\n\n\t\t\tmutation createPaymentLink(\n\t\t\t\t\t$account: ID!\n\t\t\t\t\t$amount: Decimal!\n\t\t\t\t\t$email: String\n\t\t\t\t\t$currency: Currency\n\t\t\t\t\t$hasFixedAmount: Boolean!) {\n\t\t\t\tcreatePaymentLink(\n\t\t\t\t\t\taccount: $account\n\t\t\t\t\t\tamount: $amount\n\t\t\t\t\t\temail: $email\n\t\t\t\t\t\tcurrency: $currency\n\t\t\t\t\t\thasFixedAmount: $hasFixedAmount) {\n\t\t\t\t\taccount {\n\t\t\t\t\t\t...accountFragment\n\t\t\t\t\t}\n\t\t\t\t\tactive\n\t\t\t\t\tamount\n\t\t\t\t\tcreatedAt\n\t\t\t\t\tcurrency\n\t\t\t\t\tdescription\n\t\t\t\t\thasFixedAmount\n\t\t\t\t\tid\n\t\t\t\t\tslug\n\t\t\t\t\ttitle\n\t\t\t\t}\n\t\t\t}\n\t\t"),a={account:e.body.accountId,amount:e.body.amount||"0",currency:i[e.body.currency]||"dollar",hasFixedAmount:!!e.body.hasFixedAmount},e.body.email&&(a.email=e.body.email),t.next=5,o.request(e,n,a);case 5:return c=t.sent,t.abrupt("return",c.createPaymentLink);case 7:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),getPaymentLinks:function(){var t=a(r.mark((function t(e){var n,a,i;return r.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n="\n\t\t\t".concat(s,"\n\n\t\t\tquery getPaymentLinks($email: String) {\n\t\t\t\tgetPaymentLinks(email: $email) {\n\t\t\t\t\taccount {\n\t\t\t\t\t\t...accountFragment\n\t\t\t\t\t}\n\t\t\t\t\tactive\n\t\t\t\t\tamount\n\t\t\t\t\tcreatedAt\n\t\t\t\t\tcurrency\n\t\t\t\t\tdescription\n\t\t\t\t\thasFixedAmount\n\t\t\t\t\tid\n\t\t\t\t\tslug\n\t\t\t\t\ttitle   \n\t\t\t\t}\n\t\t\t}\n\t\t"),a={},e.query.email?a.email=e.query.email:e.cookies.temp_user&&(a.email=e.cookies.temp_user),t.next=5,o.request(e,n,a);case 5:return i=t.sent,t.abrupt("return",i.getPaymentLinks);case 7:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),getSinglePaymentLink:function(){var t=a(r.mark((function t(e,n){var a,i,c;return r.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return a="\n\t\t\t".concat(s,"\n\n\t\t\tquery getPaymentLink($slug: String!) {\n\t\t\t\tgetPaymentLink(slug: $slug) {\n\t\t\t\t\taccount {\n\t\t\t\t\t\t...accountFragment\n\t\t\t\t\t}\n\t\t\t\t\tactive\n\t\t\t\t\tamount\n\t\t\t\t\tcreatedAt\n\t\t\t\t\tcurrency\n\t\t\t\t\tdescription\n\t\t\t\t\thasFixedAmount\n\t\t\t\t\tid\n\t\t\t\t\tslug\n\t\t\t\t\ttitle\n\t\t\t\t}\n\t\t\t}\n\t\t"),i={slug:n||e.params.slug},t.next=4,o.request(e,a,i);case 4:return c=t.sent,t.abrupt("return",c.getPaymentLink);case 6:case"end":return t.stop()}}),t)})));return function(e,n){return t.apply(this,arguments)}}()}},40436:function(t,e,n){"use strict";n.d(e,{R:function(){return l}});var r=n(92777),a=n(82262),i=n(81531),o=n(63553),s=n(37247),c=n(85893);function u(t){var e=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,r=(0,s.Z)(t);if(e){var a=(0,s.Z)(this).constructor;n=Reflect.construct(r,arguments,a)}else n=r.apply(this,arguments);return(0,o.Z)(this,n)}}var l={createComponent:function(t){var e=function(t){(0,i.Z)(n,t);var e=u(n);function n(){return(0,r.Z)(this,n),e.apply(this,arguments)}return(0,a.Z)(n,[{key:"render",value:function(){return(0,c.jsxs)("svg",{width:this.props.width||"26px",height:this.props.height||"26px",xmlns:"http://www.w3.org/2000/svg",className:this.props.className,viewBox:"0 0 26 26",version:"1.1",children:[(0,c.jsx)("title",{children:"checkmark"}),(0,c.jsx)("g",{stroke:"currentColor",strokeWidth:this.props.strokeWidth||1,fill:"none",fillRule:"evenodd",children:(0,c.jsx)("g",{transform:"translate(-249.000000, -428.000000)",children:(0,c.jsx)("g",{transform:"translate(249.000000, 428.000000)",children:(0,c.jsx)("path",{d:"M10.5304995,15.7690781 L5.79050095,10.5769733 C5.36936673,10.1156709 4.73698488,10.1156709 4.31585066,10.5769733 C3.89471645,11.0382758 3.89471645,11.7309749 4.31585066,12.1922774 L10.530786,19 L22.4341493,5.96128088 C22.8552836,5.49997842 22.8552836,4.8072793 22.4341493,4.34597684 C22.0130151,3.88467439 21.3806333,3.88467439 20.9594991,4.34597684 L10.5304995,15.7690781 Z",className:"fill",fill:"currentColor"})})})})]})}}]),n}(t.Component);return e}}},50247:function(t,e,n){"use strict";n.d(e,{t:function(){return l}});var r=n(92777),a=n(82262),i=n(81531),o=n(63553),s=n(37247),c=n(85893);function u(t){var e=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,r=(0,s.Z)(t);if(e){var a=(0,s.Z)(this).constructor;n=Reflect.construct(r,arguments,a)}else n=r.apply(this,arguments);return(0,o.Z)(this,n)}}var l={createComponent:function(t){var e=function(t){(0,i.Z)(n,t);var e=u(n);function n(){return(0,r.Z)(this,n),e.apply(this,arguments)}return(0,a.Z)(n,[{key:"render",value:function(){var t;return(0,c.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 9 14",fill:"none",height:"14",width:"9",children:(0,c.jsx)("path",{d:"M1.24988 13L7.24988 7L1.24988 1",stroke:null!==(t=this.props.stroke)&&void 0!==t?t:"#9598A4",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"})})}}]),n}(t.Component);return e}}},11900:function(t,e,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/receive/payment-links",function(){return n(35597)}])}},function(t){t.O(0,[4231,3222,9936,458,3263,9774,2888,179],(function(){return e=11900,t(t.s=e);var e}));var e=t.O();_N_E=e}]);
//# sourceMappingURL=payment-links-b5bc6edaf7f77364.js.map