"use strict";(self.webpackChunkeclipse_tractusx_github_io=self.webpackChunkeclipse_tractusx_github_io||[]).push([[55657],{3905:(t,e,n)=>{n.d(e,{Zo:()=>d,kt:()=>k});var i=n(67294);function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function a(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);e&&(i=i.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,i)}return n}function l(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?a(Object(n),!0).forEach((function(e){r(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function o(t,e){if(null==t)return{};var n,i,r=function(t,e){if(null==t)return{};var n,i,r={},a=Object.keys(t);for(i=0;i<a.length;i++)n=a[i],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);for(i=0;i<a.length;i++)n=a[i],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}var s=i.createContext({}),c=function(t){var e=i.useContext(s),n=e;return t&&(n="function"==typeof t?t(e):l(l({},e),t)),n},d=function(t){var e=c(t.components);return i.createElement(s.Provider,{value:e},t.children)},u="mdxType",p={inlineCode:"code",wrapper:function(t){var e=t.children;return i.createElement(i.Fragment,{},e)}},m=i.forwardRef((function(t,e){var n=t.components,r=t.mdxType,a=t.originalType,s=t.parentName,d=o(t,["components","mdxType","originalType","parentName"]),u=c(n),m=r,k=u["".concat(s,".").concat(m)]||u[m]||p[m]||a;return n?i.createElement(k,l(l({ref:e},d),{},{components:n})):i.createElement(k,l({ref:e},d))}));function k(t,e){var n=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var a=n.length,l=new Array(a);l[0]=m;var o={};for(var s in e)hasOwnProperty.call(e,s)&&(o[s]=e[s]);o.originalType=t,o[u]="string"==typeof t?t:r,l[1]=o;for(var c=2;c<a;c++)l[c]=n[c];return i.createElement.apply(null,l)}return i.createElement.apply(null,n)}m.displayName="MDXCreateElement"},69702:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>s,contentTitle:()=>l,default:()=>u,frontMatter:()=>a,metadata:()=>o,toc:()=>c});var i=n(87462),r=(n(67294),n(3905));const a={},l="MIW Client Credential Module",o={unversionedId:"kits/tractusx-edc/edc-extensions/ssi/ssi-miw-credential-client/README",id:"version-23.09/kits/tractusx-edc/edc-extensions/ssi/ssi-miw-credential-client/README",title:"MIW Client Credential Module",description:"This module contains an implementation of the SsiCredentialClient interface for SSI.",source:"@site/docs-kits_versioned_docs/version-23.09/kits/tractusx-edc/edc-extensions/ssi/ssi-miw-credential-client/README.md",sourceDirName:"kits/tractusx-edc/edc-extensions/ssi/ssi-miw-credential-client",slug:"/kits/tractusx-edc/edc-extensions/ssi/ssi-miw-credential-client/",permalink:"/docs-kits/23.09/kits/tractusx-edc/edc-extensions/ssi/ssi-miw-credential-client/",draft:!1,tags:[],version:"23.09",frontMatter:{},sidebar:"kits",previous:{title:"SSI Core Identity Service Module",permalink:"/docs-kits/23.09/kits/tractusx-edc/edc-extensions/ssi/ssi-identity-core/"},next:{title:"EDR core extension",permalink:"/docs-kits/23.09/kits/tractusx-edc/core/edr-core/"}},s={},c=[{value:"Configuration",id:"configuration",level:2}],d={toc:c};function u(t){let{components:e,...n}=t;return(0,r.kt)("wrapper",(0,i.Z)({},d,n,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"miw-client-credential-module"},"MIW Client Credential Module"),(0,r.kt)("p",null,"This module contains an implementation of the ",(0,r.kt)("inlineCode",{parentName:"p"},"SsiCredentialClient")," interface for SSI.\nIt basically narrows down to two operations:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"obtaining a token for protocol communication"),(0,r.kt)("li",{parentName:"ul"},"validating the token")),(0,r.kt)("p",null,"For validating the token accordingly to the first milestone ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/eclipse-tractusx/ssi-docu/tree/main/docs/architecture/cx-3-2"},"here"),", the implemetation\njust call the MIW for checking that the token and the VP claim inside are correct. Then extract the ",(0,r.kt)("inlineCode",{parentName:"p"},"JWT")," claims into the ",(0,r.kt)("inlineCode",{parentName:"p"},"ClaimToken")," for further checks."),(0,r.kt)("p",null,"For obtaining a ",(0,r.kt)("inlineCode",{parentName:"p"},"JWT")," token also it reaches the MIW, that will create a token with the ",(0,r.kt)("inlineCode",{parentName:"p"},"VP")," claim inside."),(0,r.kt)("p",null,"This module also contains two additional validation rules of VP/VC on the provider side."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"SsiCredentialIssuerValidationRule"),"    checks if the issuer of the Verifiable Credential matches ",(0,r.kt)("inlineCode",{parentName:"li"},"tx.ssi.miw.authority.issuer")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"SsiCredentialSubjectIdValidationRule")," checks if the issuer of the JWT/VP matches the credential subject id in the Verifiable Credential")),(0,r.kt)("h2",{id:"configuration"},"Configuration"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Key"),(0,r.kt)("th",{parentName:"tr",align:null},"Required"),(0,r.kt)("th",{parentName:"tr",align:null},"Example"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"tx.ssi.miw.url"),(0,r.kt)("td",{parentName:"tr",align:null},"X"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"MIW URL")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"tx.ssi.miw.authority.id"),(0,r.kt)("td",{parentName:"tr",align:null},"X"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"BPN number of the authority")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"tx.ssi.miw.authority.issuer"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"The id of the issuer (DID)")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"tx.ssi.oauth.token.url"),(0,r.kt)("td",{parentName:"tr",align:null},"X"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"Token URL (Keycloak)")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"tx.ssi.oauth.client.id"),(0,r.kt)("td",{parentName:"tr",align:null},"X"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"Client id")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"tx.ssi.oauth.client.secret.alias"),(0,r.kt)("td",{parentName:"tr",align:null},"X"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"Vault alias for the client secret")))),(0,r.kt)("p",null,"By default, the ",(0,r.kt)("inlineCode",{parentName:"p"},"tx.ssi.miw.authority.issuer")," is composed with ",(0,r.kt)("inlineCode",{parentName:"p"},"did:web:<tx.ssi.miw.url>:<tx.ssi.miw.authority.id>")),(0,r.kt)("p",null,"Another mandatory settings is ",(0,r.kt)("inlineCode",{parentName:"p"},"tx.ssi.endpoint.audience")," which is described ",(0,r.kt)("a",{parentName:"p",href:"/docs-kits/23.09/kits/tractusx-edc/edc-extensions/ssi/ssi-identity-core/"},"here")),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Note: the ",(0,r.kt)("inlineCode",{parentName:"p"},"edc.participant.id")," should match the BPN number contained in the OAuth2/Keycloak token and the one assigned by the portal to the user's organization.")))}u.isMDXComponent=!0}}]);