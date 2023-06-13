(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[7930],{95078:function(t,e,n){"use strict";var a=n(52982),r=n(67294),c=n(5152),s=n.n(c),o=a.T.createComponent(r,(function(t){return s()((function(){return n.e(3483).then(n.bind(n,53483))}),{loading:function(){return t()},loadableGenerated:{webpack:function(){return[53483]}}})}));e.Z=o},6016:function(t,e,n){var a=n(85696),r=n(930);function c(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function s(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?c(Object(n),!0).forEach((function(e){r(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}var o=n(28687).GraphQLClient,u=n(98607),i={request:function(t,e,n,r){var c=(null===r||void 0===r?void 0:r.locals.token)||t.cookies.sendcash_token||null;return new o(u.GRAPHQL_API,{headers:{authorization:"Bearer ".concat(c)}}).request(e,n).catch((function(t){var e,n=function(t){var e,n=s(s({},t),{},{summary:"".concat((null===(e=t.constructor)||void 0===e?void 0:e.name)||t.name,": ")+(t.message+" ").slice(0,t.message.indexOf("{")).trim()}),r=JSON.stringify(n,null,4).replace(/\\n/g,"\n").replace(/\\t/g,"    ");console.log("GraphQL Request Error: ",r);var c="";if("object"===typeof t)t.response&&t.response.error&&(c=t.response.error),t.response&&t.response.errors&&(c=t.response.errors[0].message);else{var o=t.message.split(":");c=a(o,1)[0]}return c}(t);return n.toLowerCase().includes("unauthorized")&&(e=401,null!==r&&void 0!==r&&r.headersSent||(null===r||void 0===r||r.clearCookie("sendcash_token"),null===r||void 0===r||r.clearCookie("current_user"))),Promise.reject({status:e,message:n})}))}};t.exports=i},89574:function(t,e,n){var a=n(930);function r(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function c(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?r(Object(n),!0).forEach((function(e){a(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}var s=n(53527),o=s.currencyCodes,u=s.getCodeFromName,i=n(93475).getDisplayAmount,l=(n(35625).convertCurrency,n(59904)),d=l.getFirstName,p=l.getLastName,y=l.getInitials,m=n(6016),b="\n\tfragment paymentFields on Payment {\n\t\tid\n\t\tamount\n\t\tcurrency\n\t\tstatus\n\t\tpaymentTime\n\t}\n\tfragment accountFields on Account {\n\t\tid\n\t\taccountName\n\t\taddress\n\t\tbankCode\n\t\tbranchCode\n\t\tcountryCode\n\t\tcreatedAt\n\t\tflagged\n\t\tphoneNumber\n\t\tnonGovernmentalOrganization\n\t}\n\tfragment depositFields on Deposit {\n\t\tid\n\t\tconfirmed\n\t\tflagged\n\t\tliquidated\n\t\tpaid\n\t\t# dueForPaymentAt\n\t\t# receivedRate\n\t\t# currencyIso\n\t\tcreatedAt\n\t\tamount\n\t\taddress\n\t\tcurrency\n\t\tfiatAmountToSend\n\t\tusdValue\n\t\tpayment {\n\t\t\t\t...paymentFields\n\t\t}\n\t\taccount {\n\t\t\t\t...accountFields\n\t\t}\n\t}\n\tfragment transactionFields on UserTransaction {\n\t\tid\n\t\tcreatedAt\n\t\tdirection\n\t\treference\n\t\tupdatedAt\n\t\ttransactableType\n\t\ttransactable {\n\t\t\t# Paid with Card\n\t\t\t... on CardDeposit {\n\t\t\t\tid\n\t\t\t\taccount {\n\t\t\t\t\t...accountFields\n\t\t\t\t}\n\t\t\t\tcard {\n\t\t\t\t\tid\n\t\t\t\t\texpiration\n\t\t\t\t\tlastFour\n\t\t\t\t\tnetwork\n\t\t\t\t\tverified\n\t\t\t\t}\n\t\t\t\tdeposit {\n\t\t\t\t\t...depositFields\n\t\t\t\t}\n\t\t\t\tpayment {\n\t\t\t\t\t...paymentFields\n\t\t\t\t}\n\t\t\t}\n\t\t\t# Sent with Bitcoin\n\t\t\t... on Deposit {\n\t\t\t\t...depositFields\n\t\t\t}\n\t\t\t# Sent with P2P payment options (Zelle, etc)\n\t\t\t... on P2PDeposit {\n\t\t\t\tid\n\t\t\t\tcurrencySent # The currency the user sent in\n\t\t\t\tfiatAmountSentByUser # Amount sent by the user\n\t\t\t\t# status\n\t\t\t\tpayment {\n\t\t\t\t\t...paymentFields\n\t\t\t\t}\n\t\t\t\taccount {\n\t\t\t\t\t...accountFields\n\t\t\t\t}\n\t\t\t\t# amount\n\t\t\t\t# amountExpected\n\t\t\t\t# amountRemaining\n\t\t\t\t# fiatAmountRemaining\n\t\t\t\t# fiatAmountWithCommission\n\t\t\t\t# receivingAddress\n\t\t\t}\n\t\t\t# This applies to wireout, i.e transactions sent to the US.\n\t\t\t... on WireoutPayout {\n\t\t\t\tid\n\t\t\t\tamount\n\t\t\t\t# createdAt # Causes error. We don't need it anyway.\n\t\t\t\tstatus\n\t\t\t\ttrackingRef\n\t\t\t\twireoutAccount {\n\t\t\t\t\tid\n\t\t\t\t\taccountName\n\t\t\t\t\taccountNumber\n\t\t\t\t\tbankName\n\t\t\t\t\tdestinationType\n\t\t\t\t\tiban\n\t\t\t\t\townerEmail\n\t\t\t\t\troutingNumber\n\t\t\t\t}\n\t\t\t}\n\t\t\t# Fiat deposits made by the user to topup their Sendcash balance.\n\t\t\t... on Payment {\n\t\t\t\tid\n\t\t\t\tamount\n\t\t\t\tcurrency\n\t\t\t\tstatus\n\t\t\t}\n\t\t\t... on BankAccountDeposit {\n\t\t\t\tid\n\t\t\t\tamount\n\t\t\t\tcurrency\n\t\t\t\tstatus\n\t\t\t\tbankAccount {\n\t\t\t\t\tid\n\t\t\t\t\tiban\n\t\t\t\t\tbankName\n\t\t\t\t\t# bankCode\n\t\t\t\t\tsortCode\n\t\t\t\t\tcurrency\n\t\t\t\t\tswiftCode\n\t\t\t\t\troutingNumber\n\t\t\t\t\taccountNumber\n\t\t\t\t}\n\t\t\t}\n\t\t\t... on VirtualAccountPayout {\n\t\t\t\tid\n\t\t\t\tpaid\n\t\t\t\tamount\n\t\t\t\tcurrency\n\t\t\t\tpayment {\n\t\t\t\t\tid\n\t\t\t\t\tamount\n\t\t\t\t\tstatus\n\t\t\t\t\tcurrency\n\t\t\t\t}\n\t\t\t\taccount {\n\t\t\t\t\tid\n\t\t\t\t\taddress\n\t\t\t\t\tflagged\n\t\t\t\t\tbankCode\n\t\t\t\t\tbankName\n\t\t\t\t\tcreatedAt\n\t\t\t\t\tbranchCode\n\t\t\t\t\taccountName\n\t\t\t\t\tphoneNumber\n\t\t\t\t\tcountryCode\n\t\t\t\t\taccountNumber\n\t\t\t\t\tnonGovernmentalOrganization\n\t\t\t\t}\n\t\t\t}\n\t\t}\n\t}\n",f=function(t){var e,n,a,r,c,s,l,m,b,f={value:null,currency:"",displayValue:""},v={value:null,currency:"",displayValue:""},g={firstName:"",lastName:"",initials:"S",fullName:""},h=function(t){var e;switch(t.transactableType){case"Payment":switch(t.transactable.status){case"success":return"Successful";case"pending":case"retrying":case"queued":case"initiated":case"unconfirmed":return"Pending";case"failed":case"refunded":case"canceled":case"expired":case"reversed":return"Failed";default:return console.warn("Unrecognised ".concat(t.transactableType," transaction status: ").concat(t.transactable.status)),t.transactable.status||""}case"Deposit":case"P2PDeposit":case"VirtualAccountPayout":if(null===t||void 0===t||null===(e=t.transactable)||void 0===e||!e.payment){var n=t.transactable||{},a=(n.confirmed,n.flagged),r=(n.liquidated,n.paid);return a?"Flagged":r?"Paid":"Pending"}switch(t.transactable.payment.status){case"success":return"Successful";case"pending":case"retrying":case"queued":case"initiated":case"unconfirmed":return"Pending";case"failed":case"refunded":case"canceled":case"expired":case"reversed":return"Failed";default:return console.warn("Unrecognised ".concat(t.transactableType," transaction status: ").concat(t.transactable.payment.status)),t.transactable.payment.status||""}case"CardDeposit":switch(t.transactable.payment?t.transactable.payment.status:t.transactable.deposit&&t.transactable.deposit.payment?t.transactable.deposit.payment.status:""){case"success":return"Successful";case"pending":case"retrying":case"queued":case"initiated":case"unconfirmed":return"Pending";case"failed":case"refunded":case"canceled":case"expired":case"reversed":return"Failed";default:return console.warn("Unrecognised ".concat(t.transactableType," transaction status: ").concat(t.transactable.payment.status)),t.transactable.payment.status}case"WireoutPayout":switch(t.transactable.status.toLowerCase()){case"completed":return"Successful";case"initiated":case"pending":return"Pending";case"failed":return"Failed";default:return console.warn("Unrecognised ".concat(t.transactableType," transaction status: ").concat(t.transactable.status)),t.transactable.status||""}case"BankAccountDeposit":switch(t.transactable.status.toLowerCase()){case"success":return"Successful";case"pending":return"Pending";case"failed":return"Failed";default:return console.warn("Unrecognised ".concat(t.transactableType," transaction status: ").concat(t.transactable.status)),t.transactable.status||""}default:return console.warn('Cannot resolve status for unknown transaction type "'.concat(t.transactableType,'".')),""}}(t);switch(t.transactableType){case"CardDeposit":t.transactable.payment?(f={value:t.transactable.payment.amount,currency:o[t.transactable.payment.currency]||t.transactable.payment.currency}).displayValue=i(f.value,f.currency):f=null,t.transactable.deposit&&t.transactable.deposit.payment?(v={value:t.transactable.deposit.payment.amount,currency:o[t.transactable.deposit.payment.currency]||t.transactable.deposit.payment.currency}).displayValue=i(v.value,v.currency):v=null,g={firstName:d(t.transactable.account.accountName),lastName:p(t.transactable.account.accountName),initials:y(t.transactable.account.accountName),fullName:t.transactable.account.accountName};break;case"Deposit":(f="credit"===t.direction?{value:t.transactable.usdValue,currency:"USD"}:{value:t.transactable.amount,currency:o[t.transactable.currency]||t.transactable.currency}).displayValue=i(f.value,f.currency),t.transactable.payment?(v={value:t.transactable.payment.amount,currency:o[t.transactable.payment.currency]||t.transactable.payment.currency}).displayValue=i(v.value,v.currency):"credit"===t.direction?(v={value:t.transactable.amount,currency:o[t.transactable.currency]||t.transactable.currency}).displayValue=i(v.value,v.currency):v=null,t.transactable.account&&(g={firstName:d(t.transactable.account.accountName),lastName:p(t.transactable.account.accountName),initials:y(t.transactable.account.accountName),fullName:t.transactable.account.accountName});break;case"P2PDeposit":case"VirtualAccountPayout":var N,w,P;if("VirtualAccountPayout"===t.transactableType)f={value:t.transactable.amount,currency:o[t.transactable.currency]||t.transactable.currency};else f={value:null===(N=t.transactable)||void 0===N?void 0:N.fiatAmountSentByUser,currency:o[null===(w=t.transactable)||void 0===w?void 0:w.currencySent]||(null===(P=t.transactable)||void 0===P?void 0:P.currencySent)};f.displayValue=i(f.value,f.currency),null!==(e=t.transactable)&&void 0!==e&&e.payment?(v={value:t.transactable.payment.amount,currency:o[t.transactable.payment.currency]||t.transactable.payment.currency}).displayValue=i(v.value,v.currency):v=null,g={firstName:d((null===(n=t.transactable)||void 0===n||null===(a=n.account)||void 0===a?void 0:a.accountName)||""),lastName:p((null===(r=t.transactable)||void 0===r||null===(c=r.account)||void 0===c?void 0:c.accountName)||""),initials:y((null===(s=t.transactable)||void 0===s||null===(l=s.account)||void 0===l?void 0:l.accountName)||""),fullName:(null===(m=t.transactable)||void 0===m||null===(b=m.account)||void 0===b?void 0:b.accountName)||""};break;case"WireoutPayout":f=null,(v={value:t.transactable.amount,currency:"USD"}).displayValue=i(v.value,v.currency),g={firstName:d(t.transactable.wireoutAccount.accountName),lastName:p(t.transactable.wireoutAccount.accountName),initials:y(t.transactable.wireoutAccount.accountName),fullName:t.transactable.wireoutAccount.accountName};break;case"BankAccountDeposit":f=null,(v={value:t.transactable.amount,currency:u(t.transactable.currency)}).displayValue=i(v.value,v.currency),g=null;break;case"Payment":f=null,(v={value:t.transactable.amount,currency:o[t.transactable.currency]||t.transactable.currency}).displayValue=i(v.value,v.currency),g=null;break;default:console.warn('Could not parse transaction of unknown type "'.concat(t.transactableType,'".'))}return{id:t.id,createdAt:new Date(1e3*t.createdAt),updatedAt:new Date(1e3*t.updatedAt),direction:t.direction,amountPaid:f,destinationAmount:v,recipient:g,status:h,rawData:t}};t.exports={getTransactionsList:function(t,e,n,a){var r="\n\t\t\t".concat(b,"\n\t\t\tquery getUserTransactions(\n\t\t\t\t\t$user: ID,\n\t\t\t\t\t$after: String,\n\t\t\t\t\t$before: String,\n\t\t\t\t\t$first: Int,\n\t\t\t\t\t$last: Int,\n\t\t\t\t\t$direction: TransactionDirection) {\n\t\t\t\tgetUserTransactions(\n\t\t\t\t\t\tuser: $user,\n\t\t\t\t\t\tafter: $after,\n\t\t\t\t\t\tbefore: $before,\n\t\t\t\t\t\tfirst: $first,\n\t\t\t\t\t\tlast: $last,\n\t\t\t\t\t\tdirection: $direction) {\n\t\t\t\t\tnodes {\n\t\t\t\t\t\t...transactionFields\n\t\t\t\t\t}\n\t\t\t\t\tpageInfo {\n\t\t\t\t\t\tendCursor\n\t\t\t\t\t\thasNextPage\n\t\t\t\t\t\thasPreviousPage\n\t\t\t\t\t\tstartCursor\n\t\t\t\t\t}\n\t\t\t\t}\n\t\t\t}\n\t\t"),s=c(c({direction:n},e),{},{user:a});return m.request(t,r,s).then((function(t){return{parsedNodes:t.getUserTransactions.nodes.map((function(t){return f(t)})).filter((function(t){return t.amountPaid&&t.amountPaid.value||t.destinationAmount&&t.destinationAmount.value})),pageInfo:t.getUserTransactions.pageInfo}}))},getSingleTransaction:function(t,e){var n="\n\t\t\t".concat(b,"\n\t\t\tquery getUserTransaction($id: ID!) {\n\t\t\t\tgetUserTransaction(userTransaction: $id) {\n\t\t\t\t\t...transactionFields\n\t\t\t\t}\n\t\t\t}\n\t\t"),a={id:e};return m.request(t,n,a).then((function(t){return f(t.getUserTransaction)}))}}},52982:function(t,e,n){"use strict";n.d(e,{T:function(){return f}});var a,r=n(17674),c=n(92777),s=n(82262),o=n(10748),u=n(81531),i=n(63553),l=n(37247),d=n(59499),p=n(3132),y=n(58833),m=n(85893);function b(t){var e=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,a=(0,l.Z)(t);if(e){var r=(0,l.Z)(this).constructor;n=Reflect.construct(a,arguments,r)}else n=a.apply(this,arguments);return(0,i.Z)(this,n)}}var f={createComponent:function(t,e){var n=y.i.createComponent(t);return function(t){(0,u.Z)(l,t);var i=b(l);function l(t){var s;if((0,c.Z)(this,l),s=i.call(this,t),(0,d.Z)((0,o.Z)(s),"getAvatarUrl",(function(t){var e=(null===t||void 0===t?void 0:t.split(":"))||[],n=(0,r.Z)(e,2),a=n[0],c=n[1];return"https://res.cloudinary.com/sendcash/image/upload/c_thumb,w_200,g_face/v1638275269/sendcash-v2".concat(function(){switch(a){case"black-bg":return"/avatars/Colored%20Background/ToyFaces_Black_BG_".concat(c,".png");case"transparent-bg":return"/avatars/Colored%20Background/ToyFaces_Transparent_BG_".concat(c,".png");case"colored-bg":return"/avatars/Colored%20Background/ToyFaces_Colored_BG_".concat(c,".png");default:return"/avatars/Generic/avatar-".concat(c,".jpg")}}())})),t.editable){a=e((function(){return(0,m.jsx)(n,{show:s.state.openSelectModal})}))}return s.state={openSelectModal:!1},s}return(0,s.Z)(l,[{key:"render",value:function(){var t=this,e=this.props,n=e.slug,r=e.inline,c=e.large,s=e.unsized,o=e.initials,u=e.editable;return(0,m.jsxs)(m.Fragment,{children:[(0,m.jsxs)("span",{className:"avatar"+(r?" avatar--inline":"")+(c?" avatar--large":"")+(s?" avatar--unsized":""),children:[n?(0,m.jsx)("img",{src:t.getAvatarUrl(n),alt:"user avatar",className:"avatar__image"}):o?(0,m.jsx)("span",{className:"avatar__initials","aria-hidden":"true",children:o}):(0,m.jsx)("img",{"aria-hidden":"true",src:t.getAvatarUrl("generic:purple"),alt:"",className:"avatar__image"}),u?(0,m.jsxs)("button",{onClick:function(){return t.setState({openSelectModal:!0})},className:"avatar__edit-button",type:"button",children:[(0,m.jsx)("span",{"aria-hidden":"true",children:"Edit"}),(0,m.jsx)("span",{className:"sr-only",children:"Select a different avatar"})]}):null]}),u?(0,m.jsx)(a,{open:this.state.openSelectModal,onClose:function(e){t.setState({openSelectModal:!1}),e&&(["string","number"].includes(typeof e)?t.props.setAvatar("colored-bg:".concat(e)):(0,p.Z)('<SelectAvatar> component returned invalid data: "'.concat(JSON.stringify(e),'"')))}}):null]})}}]),l}(t.Component)}}}}]);
//# sourceMappingURL=7930-efdfe4bf71b20cca.js.map