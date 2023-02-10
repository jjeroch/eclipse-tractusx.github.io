"use strict";(self.webpackChunkeclipse_tractusx_github_io=self.webpackChunkeclipse_tractusx_github_io||[]).push([[2140],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>d});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=n.createContext({}),c=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},p=function(e){var t=c(e.components);return n.createElement(s.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},g=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=c(r),g=a,d=u["".concat(s,".").concat(g)]||u[g]||m[g]||i;return r?n.createElement(d,o(o({ref:t},p),{},{components:r})):n.createElement(d,o({ref:t},p))}));function d(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,o=new Array(i);o[0]=g;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[u]="string"==typeof e?e:a,o[1]=l;for(var c=2;c<i;c++)o[c]=r[c];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}g.displayName="MDXCreateElement"},30114:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>u,frontMatter:()=>i,metadata:()=>l,toc:()=>c});var n=r(87462),a=(r(67294),r(3905));const i={title:"TRG 5.05 - Chart Values"},o=void 0,l={unversionedId:"release/trg-5/trg-5-5",id:"release/trg-5/trg-5-5",title:"TRG 5.05 - Chart Values",description:"| Author               | Status | Created      | Post-History    |",source:"@site/docs/release/trg-5/trg-5-5.md",sourceDirName:"release/trg-5",slug:"/release/trg-5/trg-5-5",permalink:"/docs/release/trg-5/trg-5-5",draft:!1,editUrl:"https://github.com/eclipse-tractusx/eclipse-tractusx.github.io/tree/main/docs/release/trg-5/trg-5-5.md",tags:[],version:"current",frontMatter:{title:"TRG 5.05 - Chart Values"},sidebar:"developer",previous:{title:"TRG 5.04 - Resource Management",permalink:"/docs/release/trg-5/trg-5-4"},next:{title:"TRG 5.06 - Application Configuration",permalink:"/docs/release/trg-5/trg-5-6"}},s={},c=[{value:"Description",id:"description",level:2},{value:"Container images",id:"container-images",level:2}],p={toc:c};function u(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Author"),(0,a.kt)("th",{parentName:"tr",align:null},"Status"),(0,a.kt)("th",{parentName:"tr",align:null},"Created"),(0,a.kt)("th",{parentName:"tr",align:null},"Post-History"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Catena-X System Team"),(0,a.kt)("td",{parentName:"tr",align:null},"Active"),(0,a.kt)("td",{parentName:"tr",align:null},"10-Nov-2022"),(0,a.kt)("td",{parentName:"tr",align:null},"Initial release")))),(0,a.kt)("h2",{id:"description"},"Description"),(0,a.kt)("p",null,"Best practices for Helm chart ",(0,a.kt)("inlineCode",{parentName:"p"},"values.yaml")," file."),(0,a.kt)("h2",{id:"container-images"},"Container images"),(0,a.kt)("p",null,"A proper section for Container images should look like this:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},"image:\n  registry: docker.io\n  repository: bitnami/postgresql\n  tag: 14.5.0-debian-11-r19\n  digest: \"\"\n  ## Specify an imagePullPolicy\n  ## Defaults to 'Always' if image tag is 'latest', else set to 'IfNotPresent'\n  ## ref: https://kubernetes.io/docs/user-guide/images/#pre-pulling-images\n  ##\n  pullPolicy: IfNotPresent\n  ## Optionally specify an array of imagePullSecrets.\n  ## Secrets must be manually created in the namespace.\n  ## ref: https://kubernetes.io/docs/tasks/configure-pod-container/pull-image-private-registry/\n  ## Example:\n  ## pullSecrets:\n  ##   - myRegistryKeySecretName\n  ##\n  pullSecrets: [ ]\n  ## Set to true if you would like to see extra information on logs\n  ##\n")),(0,a.kt)("admonition",{type:"caution"},(0,a.kt)("mdxAdmonitionTitle",{parentName:"admonition"},"do not use ",(0,a.kt)("inlineCode",{parentName:"mdxAdmonitionTitle"},"latest")," as image tag!"),(0,a.kt)("p",{parentName:"admonition"},"This might cause unexpected effects, as the Helm release could change without bumping the chart version! Also due to\nsecurity reasons you shall not use ",(0,a.kt)("inlineCode",{parentName:"p"},"latest")," tag.")))}u.isMDXComponent=!0}}]);