"use strict";(self.webpackChunkeclipse_tractusx_github_io=self.webpackChunkeclipse_tractusx_github_io||[]).push([[51187],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>m});var a=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=a.createContext({}),s=function(e){var t=a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},p=function(e){var t=s(e.components);return a.createElement(c.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},g=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,c=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),d=s(n),g=o,m=d["".concat(c,".").concat(g)]||d[g]||u[g]||r;return n?a.createElement(m,l(l({ref:t},p),{},{components:n})):a.createElement(m,l({ref:t},p))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,l=new Array(r);l[0]=g;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i[d]="string"==typeof e?e:o,l[1]=i;for(var s=2;s<r;s++)l[s]=n[s];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}g.displayName="MDXCreateElement"},42292:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>l,default:()=>d,frontMatter:()=>r,metadata:()=>i,toc:()=>s});var a=n(87462),o=(n(67294),n(3905));const r={},l="Setting up a local EDC Control Plane",i={unversionedId:"kits/tractusx-edc/docs/kit/operation-view/page03_local_setup_controlplane",id:"version-23.12/kits/tractusx-edc/docs/kit/operation-view/page03_local_setup_controlplane",title:"Setting up a local EDC Control Plane",description:"Basics",source:"@site/docs-kits_versioned_docs/version-23.12/kits/tractusx-edc/docs/kit/operation-view/page03_local_setup_controlplane.md",sourceDirName:"kits/tractusx-edc/docs/kit/operation-view",slug:"/kits/tractusx-edc/docs/kit/operation-view/page03_local_setup_controlplane",permalink:"/docs-kits/23.12/kits/tractusx-edc/docs/kit/operation-view/page03_local_setup_controlplane",draft:!1,tags:[],version:"23.12",frontMatter:{},sidebar:"kits",previous:{title:"Technical Prerequisites",permalink:"/docs-kits/23.12/kits/tractusx-edc/docs/kit/operation-view/page02_technical_prerequisites"},next:{title:"Setting up a local EDC Data Plane",permalink:"/docs-kits/23.12/kits/tractusx-edc/docs/kit/operation-view/page04_local_setup_dataplane"}},c={},s=[{value:"Basics",id:"basics",level:2},{value:"Building",id:"building",level:2},{value:"Example Configuration",id:"example-configuration",level:2},{value:"Example configuration.properties",id:"example-configurationproperties",level:3},{value:"Example logging.properties",id:"example-loggingproperties",level:3},{value:"Example opentelemetry.properties",id:"example-opentelemetryproperties",level:3},{value:"Running the Control Plane",id:"running-the-control-plane",level:2}],p={toc:s};function d(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"setting-up-a-local-edc-control-plane"},"Setting up a local EDC Control Plane"),(0,o.kt)("h2",{id:"basics"},"Basics"),(0,o.kt)("p",null,"The EDC is split into control and data plane.\nThe data plane handles the actual data transfer between parties.\nThe control plane manages the following:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Resource Management (e.g. Assets, Policies & Contract Definitions CRUD)"),(0,o.kt)("li",{parentName:"ul"},"Contract Offering & Contract Negotiation"),(0,o.kt)("li",{parentName:"ul"},"Data Transfer Coordination / Management")),(0,o.kt)("p",null,"The EDC control plane can run as a single container on your local machine.\nThe following is a short overview of the necessary steps to start up the default configuration."),(0,o.kt)("h2",{id:"building"},"Building"),(0,o.kt)("p",null,"Tractus-X EDC is build with Gradle. The following command creates the default control plane as a docker container:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"./gardlew :edc-controlplane:edc-controlplane-postgresql-hashicorp-vault:dockerize\n")),(0,o.kt)("h2",{id:"example-configuration"},"Example Configuration"),(0,o.kt)("p",null,"The following commands can be used to create the necessary configuration files for the EDC container.\nThey assume sane - but unsafe - defaults. An explanation of the respective parameters can be found ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/eclipse-tractusx/tractusx-edc/blob/main/edc-controlplane/edc-controlplane-postgresql-hashicorp-vault/README.md"},"here"),"."),(0,o.kt)("admonition",{type:"danger"},(0,o.kt)("p",{parentName:"admonition"},"The following configuration is for testing purposes only. Do not use it in production.")),(0,o.kt)("h3",{id:"example-configurationproperties"},"Example configuration.properties"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"# Create configuration.properties\nexport CONFIGURATION_PROPERTIES_FILE=$(mktemp /tmp/configuration.properties.XXXXXX)\ncat << 'EOF' > ${CONFIGURATION_PROPERTIES_FILE}\n\nweb.http.default.port=8080\nweb.http.default.path=/api\nweb.http.management.port=8181\nweb.http.management.path=/data\nweb.http.control.port=9999\nweb.http.control.path=/api/controlplane/control\nweb.http.protocol.port=8282\nweb.http.protocol.path=/api/v1/ids\n\nedc.receiver.http.dynamic.endpoint=http://backend-service\n\nedc.ids.title=Eclipse Dataspace Connector\nedc.ids.description=Eclipse Dataspace Connector\nedc.ids.id=urn:connector:edc\nedc.ids.security.profile=base\nedc.ids.endpoint=http://localhost:8282/api/v1/ids\nedc.ids.maintainer=http://localhost\nedc.ids.curator=http://localhost\nedc.ids.catalog.id=urn:catalog:default\nids.webhook.address=http://localhost:8282/api/v1/ids\n\nedc.hostname=localhost\n\nedc.api.auth.key=password\n\n# OAuth / DAPS related configuration\nedc.oauth.token.url=https://daps.example.net\nedc.oauth.certificate.alias=key-to-daps-certificate-in-keyvault\nedc.oauth.private.key.alias=key-to-private-key-in-keyvault\nedc.oauth.client.id=daps-oauth-client-id\n\n# HashiCorp vault related configuration\nedc.vault.hashicorp.url=http://vault\nedc.vault.hashicorp.token=55555555-6666-7777-8888-999999999999\nedc.vault.hashicorp.timeout.seconds=30\n\n# Control- / Data- Plane configuration\nedc.transfer.proxy.endpoint=http://dataplane-public-endpoint/public\nedc.transfer.proxy.token.signer.privatekey.alias=token-signer-private-key\n\n# Postgresql related configuration\nedc.datasource.asset.name=asset\nedc.datasource.asset.url=jdbc:postgresql://postgres.svc.cluster.local:5432/edc_asset\nedc.datasource.asset.user=user\nedc.datasource.asset.password=pass\nedc.datasource.contractdefinition.name=contractdefinition\nedc.datasource.contractdefinition.url=jdbc:postgresql://postgres.svc.cluster.local:5432/edc_contractdefinition\nedc.datasource.contractdefinition.user=user\nedc.datasource.contractdefinition.password=pass\nedc.datasource.contractnegotiation.name=contractnegotiation\nedc.datasource.contractnegotiation.url=jdbc:postgresql://postgres.svc.cluster.local:5432/edc_contractnegotiation\nedc.datasource.contractnegotiation.user=user\nedc.datasource.contractnegotiation.password=pass\nedc.datasource.policy.name=policy\nedc.datasource.policy.url=jdbc:postgresql://postgres.svc.cluster.local:5432/edc_policy\nedc.datasource.policy.user=user\nedc.datasource.policy.password=pass\nedc.datasource.transferprocess.name=transferprocess\nedc.datasource.transferprocess.url=jdbc:postgresql://postgres.svc.cluster.local:5432/edc_transferprocess\nedc.datasource.transferprocess.user=user\nedc.datasource.transferprocess.password=pass\nEOF\n")),(0,o.kt)("h3",{id:"example-loggingproperties"},"Example logging.properties"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"# Create logging.properties\nexport LOGGING_PROPERTIES_FILE=$(mktemp /tmp/logging.properties.XXXXXX)\ncat << 'EOF' > ${LOGGING_PROPERTIES_FILE}\n.level=INFO\norg.eclipse.edc.level=ALL\nhandlers=java.util.logging.ConsoleHandler\njava.util.logging.ConsoleHandler.formatter=java.util.logging.SimpleFormatter\njava.util.logging.ConsoleHandler.level=ALL\njava.util.logging.SimpleFormatter.format=[%1$tY-%1$tm-%1$td %1$tH:%1$tM:%1$tS] [%4$-7s] %5$s%6$s%n\nEOF\n")),(0,o.kt)("h3",{id:"example-opentelemetryproperties"},"Example opentelemetry.properties"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"# Create opentelemetry.properties\nexport OPENTELEMETRY_PROPERTIES_FILE=$(mktemp /tmp/opentelemetry.properties.XXXXXX)\ncat << 'EOF' > ${OPENTELEMETRY_PROPERTIES_FILE}\notel.javaagent.enabled=false\notel.javaagent.debug=false\nEOF\n")),(0,o.kt)("h2",{id:"running-the-control-plane"},"Running the Control Plane"),(0,o.kt)("p",null,"Once the configuration is created, the container can be run directly via docker."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"docker run \\\n  -p 8080:8080 -p 8181:8181 -p 8182:8182 -p 8282:8282 -p 9090:9090 -p 9999:9999 \\\n  -v ${CONFIGURATION_PROPERTIES_FILE:-/dev/null}:/app/configuration.properties \\\n  -v ${LOGGING_PROPERTIES_FILE:-/dev/null}:/app/logging.properties \\\n  -v ${OPENTELEMETRY_PROPERTIES_FILE:-/dev/null}:/app/opentelemetry.properties \\\n  -i edc-controlplane-postgresql-hashicorp-vault:latest\n")))}d.isMDXComponent=!0}}]);