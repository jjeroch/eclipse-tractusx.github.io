"use strict";(self.webpackChunkeclipse_tractusx_github_io=self.webpackChunkeclipse_tractusx_github_io||[]).push([[32394],{3905:(t,e,a)=>{a.d(e,{Zo:()=>u,kt:()=>s});var n=a(67294);function r(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function l(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,n)}return a}function p(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?l(Object(a),!0).forEach((function(e){r(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function i(t,e){if(null==t)return{};var a,n,r=function(t,e){if(null==t)return{};var a,n,r={},l=Object.keys(t);for(n=0;n<l.length;n++)a=l[n],e.indexOf(a)>=0||(r[a]=t[a]);return r}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(n=0;n<l.length;n++)a=l[n],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(r[a]=t[a])}return r}var o=n.createContext({}),d=function(t){var e=n.useContext(o),a=e;return t&&(a="function"==typeof t?t(e):p(p({},e),t)),a},u=function(t){var e=d(t.components);return n.createElement(o.Provider,{value:e},t.children)},c="mdxType",m={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},g=n.forwardRef((function(t,e){var a=t.components,r=t.mdxType,l=t.originalType,o=t.parentName,u=i(t,["components","mdxType","originalType","parentName"]),c=d(a),g=r,s=c["".concat(o,".").concat(g)]||c[g]||m[g]||l;return a?n.createElement(s,p(p({ref:e},u),{},{components:a})):n.createElement(s,p({ref:e},u))}));function s(t,e){var a=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var l=a.length,p=new Array(l);p[0]=g;var i={};for(var o in e)hasOwnProperty.call(e,o)&&(i[o]=e[o]);i.originalType=t,i[c]="string"==typeof t?t:r,p[1]=i;for(var d=2;d<l;d++)p[d]=a[d];return n.createElement.apply(null,p)}return n.createElement.apply(null,a)}g.displayName="MDXCreateElement"},93239:(t,e,a)=>{a.r(e),a.d(e,{assets:()=>o,contentTitle:()=>p,default:()=>c,frontMatter:()=>l,metadata:()=>i,toc:()=>d});var n=a(87462),r=(a(67294),a(3905));const l={},p="EDC Data-Plane with Azure Key Vault",i={unversionedId:"kits/tractusx-edc/edc-dataplane/edc-dataplane-azure-vault/README",id:"version-23.09/kits/tractusx-edc/edc-dataplane/edc-dataplane-azure-vault/README",title:"EDC Data-Plane with Azure Key Vault",description:"Building",source:"@site/docs-kits_versioned_docs/version-23.09/kits/tractusx-edc/edc-dataplane/edc-dataplane-azure-vault/README.md",sourceDirName:"kits/tractusx-edc/edc-dataplane/edc-dataplane-azure-vault",slug:"/kits/tractusx-edc/edc-dataplane/edc-dataplane-azure-vault/",permalink:"/docs-kits/23.09/kits/tractusx-edc/edc-dataplane/edc-dataplane-azure-vault/",draft:!1,tags:[],version:"23.09",frontMatter:{},sidebar:"kits",previous:{title:"Data Plane",permalink:"/docs-kits/23.09/kits/tractusx-edc/edc-dataplane/"},next:{title:"Notice for Docker image",permalink:"/docs-kits/23.09/kits/tractusx-edc/edc-dataplane/edc-dataplane-azure-vault/notice"}},o={},d=[{value:"Building",id:"building",level:2},{value:"Configuration",id:"configuration",level:2},{value:"Example configuration.properties",id:"example-configurationproperties",level:3},{value:"Example logging.properties",id:"example-loggingproperties",level:3},{value:"Example opentelemetry.properties",id:"example-opentelemetryproperties",level:3},{value:"Running",id:"running",level:2}],u={toc:d};function c(t){let{components:e,...a}=t;return(0,r.kt)("wrapper",(0,n.Z)({},u,a,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"edc-data-plane-with-azure-key-vault"},"EDC Data-Plane with Azure Key Vault"),(0,r.kt)("h2",{id:"building"},"Building"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"./gardlew :edc-dataplane:edc-dataplane-azure-vault:dockerize\n")),(0,r.kt)("h2",{id:"configuration"},"Configuration"),(0,r.kt)("p",null,"Listed below are configuration keys needed to get the ",(0,r.kt)("inlineCode",{parentName:"p"},"edc-dataplane-azure-vault")," up and running.\nDetails regarding each configuration property can be found at the ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/eclipse-edc/Connector/tree/main/docs"},"documentary section of the EDC"),"."),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Key"),(0,r.kt)("th",{parentName:"tr",align:null},"Required"),(0,r.kt)("th",{parentName:"tr",align:null},"Example"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"web.http.default.port"),(0,r.kt)("td",{parentName:"tr",align:null},"X"),(0,r.kt)("td",{parentName:"tr",align:null},"8080"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"web.http.default.path"),(0,r.kt)("td",{parentName:"tr",align:null},"X"),(0,r.kt)("td",{parentName:"tr",align:null},"/api"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"web.http.public.port"),(0,r.kt)("td",{parentName:"tr",align:null},"X"),(0,r.kt)("td",{parentName:"tr",align:null},"8181"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"web.http.public.path"),(0,r.kt)("td",{parentName:"tr",align:null},"X"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"web.http.control.port"),(0,r.kt)("td",{parentName:"tr",align:null},"X"),(0,r.kt)("td",{parentName:"tr",align:null},"9999"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"web.http.control.path"),(0,r.kt)("td",{parentName:"tr",align:null},"X"),(0,r.kt)("td",{parentName:"tr",align:null},"/api/controlplane/control"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"edc.receiver.http.endpoint"),(0,r.kt)("td",{parentName:"tr",align:null},"X"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"http://backend-service"},"http://backend-service")),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"edc.hostname"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"localhost"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"edc.oauth.client.id"),(0,r.kt)("td",{parentName:"tr",align:null},"X"),(0,r.kt)("td",{parentName:"tr",align:null},"daps-oauth-client-id"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"edc.vault.clientid"),(0,r.kt)("td",{parentName:"tr",align:null},"X"),(0,r.kt)("td",{parentName:"tr",align:null},"00000000-1111-2222-3333-444444444444"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"edc.vault.tenantid"),(0,r.kt)("td",{parentName:"tr",align:null},"X"),(0,r.kt)("td",{parentName:"tr",align:null},"55555555-6666-7777-8888-999999999999"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"edc.vault.name"),(0,r.kt)("td",{parentName:"tr",align:null},"X"),(0,r.kt)("td",{parentName:"tr",align:null},"my-vault-name"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"edc.vault.clientsecret"),(0,r.kt)("td",{parentName:"tr",align:null},"X"),(0,r.kt)("td",{parentName:"tr",align:null},"34-chars-secret"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"edc.dataplane.token.validation.endpoint"),(0,r.kt)("td",{parentName:"tr",align:null},"X"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"http://controlplane:8182/validation/token"},"http://controlplane:8182/validation/token")),(0,r.kt)("td",{parentName:"tr",align:null})))),(0,r.kt)("h3",{id:"example-configurationproperties"},"Example configuration.properties"),(0,r.kt)("p",null,"JDK properties-style configuration of the EDC Control-Plane is expected to be mounted to ",(0,r.kt)("inlineCode",{parentName:"p"},"/app/configuration.properties")," within the container."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"# Create configuration.properties\nexport CONFIGURATION_PROPERTIES_FILE=$(mktemp /tmp/configuration.properties.XXXXXX)\ncat << 'EOF' > ${CONFIGURATION_PROPERTIES_FILE}\n\nweb.http.default.port=8080\nweb.http.default.path=/api\nweb.http.public.port=8185\nweb.http.public.path=/public\nweb.http.control.port=9999\nweb.http.control.path=/api/dataplane/control\n\n# Validation endpoint of controlplane\nedc.dataplane.token.validation.endpoint=http://controlplane:8182/validation/token\n\n# EDC hostname\nedc.hostname=localhost\n\n# Azure vault related configuration\nedc.vault.clientid=00000000-1111-2222-3333-444444444444\nedc.vault.tenantid=55555555-6666-7777-8888-999999999999\nedc.vault.name=my-vault-name\nedc.vault.clientsecret=34-chars-secret\nEOF\n")),(0,r.kt)("h3",{id:"example-loggingproperties"},"Example logging.properties"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"# Create logging.properties\nexport LOGGING_PROPERTIES_FILE=$(mktemp /tmp/logging.properties.XXXXXX)\ncat << 'EOF' > ${LOGGING_PROPERTIES_FILE}\n.level=INFO\norg.eclipse.edc.level=ALL\nhandlers=java.util.logging.ConsoleHandler\njava.util.logging.ConsoleHandler.formatter=java.util.logging.SimpleFormatter\njava.util.logging.ConsoleHandler.level=ALL\njava.util.logging.SimpleFormatter.format=[%1$tY-%1$tm-%1$td %1$tH:%1$tM:%1$tS] [%4$-7s] %5$s%6$s%n\nEOF\n")),(0,r.kt)("h3",{id:"example-opentelemetryproperties"},"Example opentelemetry.properties"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"# Create opentelemetry.properties\nexport OPENTELEMETRY_PROPERTIES_FILE=$(mktemp /tmp/opentelemetry.properties.XXXXXX)\ncat << 'EOF' > ${OPENTELEMETRY_PROPERTIES_FILE}\notel.javaagent.enabled=true\notel.javaagent.debug=false\nEOF\n")),(0,r.kt)("h2",{id:"running"},"Running"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"docker run \\\n  -p 8080:8080 -p 8185:8185 -p 9999:9999 -p 9090:9090 \\\n  -v ${CONFIGURATION_PROPERTIES_FILE:-/dev/null}:/app/configuration.properties \\\n  -v ${LOGGING_PROPERTIES_FILE:-/dev/null}:/app/logging.properties \\\n  -v ${OPENTELEMETRY_PROPERTIES_FILE:-/dev/null}:/app/opentelemetry.properties \\\n  -i edc-dataplane-azure-vault:latest\n")))}c.isMDXComponent=!0}}]);