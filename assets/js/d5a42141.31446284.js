"use strict";(self.webpackChunkeclipse_tractusx_github_io=self.webpackChunkeclipse_tractusx_github_io||[]).push([[296],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>m});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=n.createContext({}),c=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},p=function(e){var t=c(e.components);return n.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},g=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),g=c(r),m=a,d=g["".concat(s,".").concat(m)]||g[m]||u[m]||i;return r?n.createElement(d,o(o({ref:t},p),{},{components:r})):n.createElement(d,o({ref:t},p))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,o=new Array(i);o[0]=g;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var c=2;c<i;c++)o[c]=r[c];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}g.displayName="MDXCreateElement"},9595:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>u,frontMatter:()=>i,metadata:()=>l,toc:()=>c});var n=r(7462),a=(r(7294),r(3905));const i={title:"TRG 4.05 - Container registries"},o=void 0,l={unversionedId:"release/trg-4/trg-4-5",id:"release/trg-4/trg-4-5",title:"TRG 4.05 - Container registries",description:"| Author               | Status | Created      | Post-History    |",source:"@site/docs/release/trg-4/trg-4-5.md",sourceDirName:"release/trg-4",slug:"/release/trg-4/trg-4-5",permalink:"/docs/release/trg-4/trg-4-5",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/release/trg-4/trg-4-5.md",tags:[],version:"current",frontMatter:{title:"TRG 4.05 - Container registries"},sidebar:"docs",previous:{title:"TRG 4.04 - Image signing",permalink:"/docs/release/trg-4/trg-4-4"},next:{title:"TRG 5.01 - Helm Chart requirements",permalink:"/docs/release/trg-5/trg-5-1"}},s={},c=[{value:"Description",id:"description",level:2},{value:"Why",id:"why",level:2}],p={toc:c};function u(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Author"),(0,a.kt)("th",{parentName:"tr",align:null},"Status"),(0,a.kt)("th",{parentName:"tr",align:null},"Created"),(0,a.kt)("th",{parentName:"tr",align:null},"Post-History"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Catena-X System Team"),(0,a.kt)("td",{parentName:"tr",align:null},"Draft"),(0,a.kt)("td",{parentName:"tr",align:null},"14-Sept-2022"),(0,a.kt)("td",{parentName:"tr",align:null},"n/a")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Catena-X System Team"),(0,a.kt)("td",{parentName:"tr",align:null},"Active"),(0,a.kt)("td",{parentName:"tr",align:null},"05-Jan-2023"),(0,a.kt)("td",{parentName:"tr",align:null},"Initial release")))),(0,a.kt)("h2",{id:"description"},"Description"),(0,a.kt)("p",null,"In Eclipse Tractusx we are using one central container registry."),(0,a.kt)("p",null,"Currently this central registry is the ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/features/packages"},"GitHub Packages feature"),", the GitHub organization catenax-ng contains all ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/orgs/catenax-ng/packages"},"our packages"),"."),(0,a.kt)("p",null,"An example on how to build and push an image to the container registry using GitHub Actions can be found ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/catenax-ng/k8s-helm-example/blob/main/.github/workflows/docker-build.yaml"},"here"),"."),(0,a.kt)("admonition",{type:"info"},(0,a.kt)("p",{parentName:"admonition"},"Coming soon: we will be able to store our images in a docker hub target provided by the Eclipse Foundation - legal acpects under clarification.")),(0,a.kt)("h2",{id:"why"},"Why"),(0,a.kt)("p",null,"Using a central container registry greatly impoves security and manageability of images."))}u.isMDXComponent=!0}}]);