"use strict";(self.webpackChunkeclipse_tractusx_github_io=self.webpackChunkeclipse_tractusx_github_io||[]).push([[96471],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>h});var i=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,i,a=function(e,t){if(null==e)return{};var n,i,a={},r=Object.keys(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=i.createContext({}),l=function(e){var t=i.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=l(e.components);return i.createElement(s.Provider,{value:t},e.children)},u="mdxType",v={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},d=i.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,s=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),u=l(n),d=a,h=u["".concat(s,".").concat(d)]||u[d]||v[d]||r;return n?i.createElement(h,o(o({ref:t},p),{},{components:n})):i.createElement(h,o({ref:t},p))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,o=new Array(r);o[0]=d;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c[u]="string"==typeof e?e:a,o[1]=c;for(var l=2;l<r;l++)o[l]=n[l];return i.createElement.apply(null,o)}return i.createElement.apply(null,n)}d.displayName="MDXCreateElement"},52935:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>u,frontMatter:()=>r,metadata:()=>c,toc:()=>l});var i=n(87462),a=(n(67294),n(3905));const r={id:"Data Governance Kit Development View",title:"Development View",description:"Data Governance Kit",sidebar_position:1},o=void 0,c={unversionedId:"kits/Data Governance Kit/Software Development View/Data Governance Kit Development View",id:"version-24.03/kits/Data Governance Kit/Software Development View/Data Governance Kit Development View",title:"Development View",description:"Data Governance Kit",source:"@site/docs-kits_versioned_docs/version-24.03/kits/Data Governance Kit/Software Development View/page_software-development-view.md",sourceDirName:"kits/Data Governance Kit/Software Development View",slug:"/kits/Data Governance Kit/Software Development View/Data Governance Kit Development View",permalink:"/docs-kits/kits/Data Governance Kit/Software Development View/Data Governance Kit Development View",draft:!1,tags:[],version:"24.03",sidebarPosition:1,frontMatter:{id:"Data Governance Kit Development View",title:"Development View",description:"Data Governance Kit",sidebar_position:1},sidebar:"kits",previous:{title:"Adoption View",permalink:"/docs-kits/kits/Data Governance Kit/Data Governance Kit Adoption View"},next:{title:"Introduction",permalink:"/docs-kits/kits/Data Governance Kit/resources/MDX Files/data-governance-kit"}},s={},l=[{value:"Data Governance KIT",id:"data-governance-kit",level:2},{value:"Overview",id:"overview",level:3},{value:"High Level Architecture",id:"high-level-architecture",level:3},{value:"API Specifications",id:"api-specifications",level:3},{value:"NOTICE",id:"notice",level:2}],p={toc:l};function u(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,i.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"data-governance-kit"},"Data Governance KIT"),(0,a.kt)("p",null,"This document describes the foundations of the Data Governance KIT (=Keep It Together)."),(0,a.kt)("p",null,"For more information see"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/docs-kits/kits/Data%20Governance%20Kit/Data%20Governance%20Kit%20Adoption%20View"},"Adoption View")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"../page_software-operation-view.md"},"Operation View"))),(0,a.kt)("h3",{id:"overview"},"Overview"),(0,a.kt)("p",null,"The Data Governance Kit provides a set of API specifications which would help the application developers in developing the abstraction layer of EDC to simplify the data governance. This should be helpful in building products but won't be one in itself. The client API from Data Governance Kit should cover the most typical Data Provider and Consumer functions, including publishing and managing data offers, managing policies, listing data transfers and contract negotiations. Important to note here is that the API specifications makes it possible to interact with multiple EDC connectors at once."),(0,a.kt)("h3",{id:"high-level-architecture"},"High Level Architecture"),(0,a.kt)("p",null,"As it would be clear now that the Data Governance Kit acts as an abstraction layer for multiple EDC Connctors and hides the EDC complexities behind it. This is achieved by using the below concepts:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Staging (or Management )"),(0,a.kt)("li",{parentName:"ul"},"Publication")),(0,a.kt)("p",null,"The staging or Management refers to the creation, updation, deletion of various Assets, Policies and Contract Offers locally within the Governance KIT before actually sending those to the connectors. The users can create as many Assets, Policies or Contract Offers, get those reviewed and approved by any manual or automatic workflow process. Once the users are sure that now the data is ready to be sent to Connectors, the Publication process kicks in. Using the publication process, all the reviewed/approved assets, policies and contract offers can be sent to the required connectors. The following high level architecture provides more details."),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Data Governance Kit High Level Architecture",src:n(88797).Z,width:"1437",height:"801"})),(0,a.kt)("h3",{id:"api-specifications"},"API Specifications"),(0,a.kt)("p",null,"The Data Governance KIT API specifications can be found here."),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://app.swaggerhub.com/apis-docs/TSI-Germany/data-governance_kit/0.0.1-SNAPSHOT"},"Data Governance Kit Swagger API Specifications")),(0,a.kt)("h2",{id:"notice"},"NOTICE"),(0,a.kt)("p",null,"This work is licensed under the ",(0,a.kt)("a",{parentName:"p",href:"https://creativecommons.org/licenses/by/4.0/legalcode"},"CC-BY-4.0"),"."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"SPDX-License-Identifier: CC-BY-4.0"),(0,a.kt)("li",{parentName:"ul"},"SPDX-FileCopyrightText: 2023,2024 T-Systems International GmbH"),(0,a.kt)("li",{parentName:"ul"},"SPDX-FileCopyrightText: 2022,2023 Contributors to the Eclipse Foundation")))}u.isMDXComponent=!0},88797:(e,t,n)=>{n.d(t,{Z:()=>i});const i=n.p+"assets/images/Data Governance KIT_ Big Picture-7d1959bfd88513bb0f457e10370ed910.png"}}]);