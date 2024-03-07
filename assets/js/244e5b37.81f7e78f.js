"use strict";(self.webpackChunkeclipse_tractusx_github_io=self.webpackChunkeclipse_tractusx_github_io||[]).push([[91825],{19297:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>y,contentTitle:()=>m,default:()=>g,frontMatter:()=>c,metadata:()=>u,toc:()=>v});var s=a(87462),i=(a(67294),a(3905)),l=a(26389),n=a(94891),p=(a(75190),a(47507)),d=a(24310),r=a(63303),o=(a(75035),a(85162));const c={id:"find",title:"find",description:"Finds the best fitting data plane instance for a particular query",sidebar_label:"find",hide_title:!0,hide_table_of_contents:!0,api:{tags:["Dataplane Selector"],description:"Finds the best fitting data plane instance for a particular query",operationId:"find",requestBody:{content:{"*/*":{schema:{type:"object",properties:{"@type":{type:"string",example:"https://w3id.org/edc/v0.0.1/ns/SelectionRequest"},destination:{type:"object",properties:{"@type":{type:"string",example:"https://w3id.org/edc/v0.0.1/ns/DataAddress"},type:{type:"string",example:null}},example:null},source:{type:"object",properties:{"@type":{type:"string",example:"https://w3id.org/edc/v0.0.1/ns/DataAddress"},type:{type:"string",example:null}},example:null},strategy:{type:"string",example:null}},example:{source:{"@type":"https://w3id.org/edc/v0.0.1/ns/DataAddress",type:"test-src1"},destination:{"@type":"https://w3id.org/edc/v0.0.1/ns/DataAddress",type:"test-dst2"},strategy:"you_custom_strategy"}}}}},responses:{200:{description:"The DataPlane instance that fits best for the given selection request",content:{"*/*":{schema:{type:"object",properties:{"@id":{type:"string",example:null},"@type":{type:"string",example:"https://w3id.org/edc/v0.0.1/ns/DataPlaneInstance"},allowedDestTypes:{uniqueItems:!0,type:"array",example:null,items:{type:"string",example:null}},allowedSourceTypes:{uniqueItems:!0,type:"array",example:null,items:{type:"string",example:null}},lastActive:{type:"integer",format:"int64",example:null},turnCount:{type:"integer",format:"int32",example:null},url:{type:"string",format:"url",example:null}},example:{"@id":"your-dataplane-id",url:"http://somewhere.com:1234/api/v1",allowedSourceTypes:["source-type1","source-type2"],allowedDestTypes:["your-dest-type"]}}}}},204:{description:"No suitable DataPlane instance was found"},400:{description:"Request body was malformed",content:{"*/*":{schema:{type:"array",example:null,items:{type:"object",properties:{invalidValue:{type:"object",example:null},message:{type:"string",example:null},path:{type:"string",example:null},type:{type:"string",example:null}},example:null}}}}}},method:"post",path:"/select",servers:[{url:"/"}],info:{title:"Tractus-X EDC REST API",description:"Tractus-X EDC API Documentation",license:{name:"Apache License v2.0",url:"http://apache.org/v2"},version:"0.5.1-SNAPSHOT"},postman:{name:"find",description:{content:"Finds the best fitting data plane instance for a particular query",type:"text/plain"},url:{path:["select"],host:["{{baseUrl}}"],query:[],variable:[]},header:[{key:"Content-Type",value:"*/*"},{key:"Accept",value:"*/*"}],method:"POST",body:{mode:"raw",raw:'""'}}},sidebar_class_name:"post api-method",info_path:"docs-kits/kits/tractusx-edc/docs/kit/development-view/openAPI/tractusx-edc-api/tractus-x-edc-rest-api",custom_edit_url:null},m=void 0,u={unversionedId:"kits/tractusx-edc/docs/kit/development-view/openAPI/tractusx-edc-api/find",id:"version-23.12/kits/tractusx-edc/docs/kit/development-view/openAPI/tractusx-edc-api/find",title:"find",description:"Finds the best fitting data plane instance for a particular query",source:"@site/docs-kits_versioned_docs/version-23.12/kits/tractusx-edc/docs/kit/development-view/openAPI/tractusx-edc-api/find.api.mdx",sourceDirName:"kits/tractusx-edc/docs/kit/development-view/openAPI/tractusx-edc-api",slug:"/kits/tractusx-edc/docs/kit/development-view/openAPI/tractusx-edc-api/find",permalink:"/docs-kits/23.12/kits/tractusx-edc/docs/kit/development-view/openAPI/tractusx-edc-api/find",draft:!1,editUrl:null,tags:[],version:"23.12",frontMatter:{id:"find",title:"find",description:"Finds the best fitting data plane instance for a particular query",sidebar_label:"find",hide_title:!0,hide_table_of_contents:!0,api:{tags:["Dataplane Selector"],description:"Finds the best fitting data plane instance for a particular query",operationId:"find",requestBody:{content:{"*/*":{schema:{type:"object",properties:{"@type":{type:"string",example:"https://w3id.org/edc/v0.0.1/ns/SelectionRequest"},destination:{type:"object",properties:{"@type":{type:"string",example:"https://w3id.org/edc/v0.0.1/ns/DataAddress"},type:{type:"string",example:null}},example:null},source:{type:"object",properties:{"@type":{type:"string",example:"https://w3id.org/edc/v0.0.1/ns/DataAddress"},type:{type:"string",example:null}},example:null},strategy:{type:"string",example:null}},example:{source:{"@type":"https://w3id.org/edc/v0.0.1/ns/DataAddress",type:"test-src1"},destination:{"@type":"https://w3id.org/edc/v0.0.1/ns/DataAddress",type:"test-dst2"},strategy:"you_custom_strategy"}}}}},responses:{200:{description:"The DataPlane instance that fits best for the given selection request",content:{"*/*":{schema:{type:"object",properties:{"@id":{type:"string",example:null},"@type":{type:"string",example:"https://w3id.org/edc/v0.0.1/ns/DataPlaneInstance"},allowedDestTypes:{uniqueItems:!0,type:"array",example:null,items:{type:"string",example:null}},allowedSourceTypes:{uniqueItems:!0,type:"array",example:null,items:{type:"string",example:null}},lastActive:{type:"integer",format:"int64",example:null},turnCount:{type:"integer",format:"int32",example:null},url:{type:"string",format:"url",example:null}},example:{"@id":"your-dataplane-id",url:"http://somewhere.com:1234/api/v1",allowedSourceTypes:["source-type1","source-type2"],allowedDestTypes:["your-dest-type"]}}}}},204:{description:"No suitable DataPlane instance was found"},400:{description:"Request body was malformed",content:{"*/*":{schema:{type:"array",example:null,items:{type:"object",properties:{invalidValue:{type:"object",example:null},message:{type:"string",example:null},path:{type:"string",example:null},type:{type:"string",example:null}},example:null}}}}}},method:"post",path:"/select",servers:[{url:"/"}],info:{title:"Tractus-X EDC REST API",description:"Tractus-X EDC API Documentation",license:{name:"Apache License v2.0",url:"http://apache.org/v2"},version:"0.5.1-SNAPSHOT"},postman:{name:"find",description:{content:"Finds the best fitting data plane instance for a particular query",type:"text/plain"},url:{path:["select"],host:["{{baseUrl}}"],query:[],variable:[]},header:[{key:"Content-Type",value:"*/*"},{key:"Accept",value:"*/*"}],method:"POST",body:{mode:"raw",raw:'""'}}},sidebar_class_name:"post api-method",info_path:"docs-kits/kits/tractusx-edc/docs/kit/development-view/openAPI/tractusx-edc-api/tractus-x-edc-rest-api",custom_edit_url:null},sidebar:"kits",previous:{title:"find_1",permalink:"/docs-kits/23.12/kits/tractusx-edc/docs/kit/development-view/openAPI/tractusx-edc-api/find-1"},next:{title:"getAgreementById",permalink:"/docs-kits/23.12/kits/tractusx-edc/docs/kit/development-view/openAPI/tractusx-edc-api/get-agreement-by-id"}},y={},v=[{value:"find",id:"find",level:2}],h={toc:v};function g(e){let{components:t,...a}=e;return(0,i.kt)("wrapper",(0,s.Z)({},h,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"find"},"find"),(0,i.kt)("p",null,"Finds the best fitting data plane instance for a particular query"),(0,i.kt)(n.Z,{mdxType:"MimeTabs"},(0,i.kt)(o.Z,{label:"*/*",value:"*/*-schema",mdxType:"TabItem"},(0,i.kt)("details",{style:{},"data-collapsed":!1,open:!0},(0,i.kt)("summary",{style:{textAlign:"left"}},(0,i.kt)("strong",null,"Request Body")),(0,i.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,i.kt)("ul",{style:{marginLeft:"1rem"}},(0,i.kt)(d.Z,{collapsible:!1,name:"@type",required:!1,deprecated:void 0,schemaDescription:void 0,schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,i.kt)(d.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,i.kt)("details",{style:{}},(0,i.kt)("summary",{style:{}},(0,i.kt)("strong",null,"destination"),(0,i.kt)("span",{style:{opacity:"0.6"}}," object")),(0,i.kt)("div",{style:{marginLeft:"1rem"}},(0,i.kt)(d.Z,{collapsible:!1,name:"@type",required:!1,deprecated:void 0,schemaDescription:void 0,schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,i.kt)(d.Z,{collapsible:!1,name:"type",required:!1,deprecated:void 0,schemaDescription:void 0,schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"})))),(0,i.kt)(d.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,i.kt)("details",{style:{}},(0,i.kt)("summary",{style:{}},(0,i.kt)("strong",null,"source"),(0,i.kt)("span",{style:{opacity:"0.6"}}," object")),(0,i.kt)("div",{style:{marginLeft:"1rem"}},(0,i.kt)(d.Z,{collapsible:!1,name:"@type",required:!1,deprecated:void 0,schemaDescription:void 0,schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,i.kt)(d.Z,{collapsible:!1,name:"type",required:!1,deprecated:void 0,schemaDescription:void 0,schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"})))),(0,i.kt)(d.Z,{collapsible:!1,name:"strategy",required:!1,deprecated:void 0,schemaDescription:void 0,schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}))))),(0,i.kt)("div",null,(0,i.kt)(l.Z,{mdxType:"ApiTabs"},(0,i.kt)(o.Z,{label:"200",value:"200",mdxType:"TabItem"},(0,i.kt)("div",null,(0,i.kt)("p",null,"The DataPlane instance that fits best for the given selection request")),(0,i.kt)("div",null,(0,i.kt)(n.Z,{schemaType:"response",mdxType:"MimeTabs"},(0,i.kt)(o.Z,{label:"*/*",value:"*/*",mdxType:"TabItem"},(0,i.kt)(r.Z,{mdxType:"SchemaTabs"},(0,i.kt)(o.Z,{label:"Schema",value:"Schema",mdxType:"TabItem"},(0,i.kt)("details",{style:{},"data-collapsed":!1,open:!0},(0,i.kt)("summary",{style:{textAlign:"left"}},(0,i.kt)("strong",null,"Schema")),(0,i.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,i.kt)("ul",{style:{marginLeft:"1rem"}},(0,i.kt)(d.Z,{collapsible:!1,name:"@id",required:!1,deprecated:void 0,schemaDescription:void 0,schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,i.kt)(d.Z,{collapsible:!1,name:"@type",required:!1,deprecated:void 0,schemaDescription:void 0,schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,i.kt)(d.Z,{collapsible:!1,name:"allowedDestTypes",required:!1,deprecated:void 0,schemaDescription:void 0,schemaName:"string[]",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,i.kt)(d.Z,{collapsible:!1,name:"allowedSourceTypes",required:!1,deprecated:void 0,schemaDescription:void 0,schemaName:"string[]",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,i.kt)(d.Z,{collapsible:!1,name:"lastActive",required:!1,deprecated:void 0,schemaDescription:void 0,schemaName:"int64",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,i.kt)(d.Z,{collapsible:!1,name:"turnCount",required:!1,deprecated:void 0,schemaDescription:void 0,schemaName:"int32",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,i.kt)(d.Z,{collapsible:!1,name:"url",required:!1,deprecated:void 0,schemaDescription:void 0,schemaName:"url",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"})))),(0,i.kt)(o.Z,{label:"Example (from schema)",value:"Example (from schema)",mdxType:"TabItem"},(0,i.kt)(p.Z,{responseExample:'{\n  "@id": "your-dataplane-id",\n  "url": "http://somewhere.com:1234/api/v1",\n  "allowedSourceTypes": [\n    "source-type1",\n    "source-type2"\n  ],\n  "allowedDestTypes": [\n    "your-dest-type"\n  ]\n}',language:"json",mdxType:"ResponseSamples"}))))))),(0,i.kt)(o.Z,{label:"204",value:"204",mdxType:"TabItem"},(0,i.kt)("div",null,(0,i.kt)("p",null,"No suitable DataPlane instance was found")),(0,i.kt)("div",null)),(0,i.kt)(o.Z,{label:"400",value:"400",mdxType:"TabItem"},(0,i.kt)("div",null,(0,i.kt)("p",null,"Request body was malformed")),(0,i.kt)("div",null,(0,i.kt)(n.Z,{schemaType:"response",mdxType:"MimeTabs"},(0,i.kt)(o.Z,{label:"*/*",value:"*/*",mdxType:"TabItem"},(0,i.kt)(r.Z,{mdxType:"SchemaTabs"},(0,i.kt)(o.Z,{label:"Schema",value:"Schema",mdxType:"TabItem"},(0,i.kt)("details",{style:{},"data-collapsed":!1,open:!0},(0,i.kt)("summary",{style:{textAlign:"left"}},(0,i.kt)("strong",null,"Schema"),(0,i.kt)("span",{style:{opacity:"0.6"}}," array")),(0,i.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,i.kt)("ul",{style:{marginLeft:"1rem"}},(0,i.kt)(d.Z,{collapsible:!1,name:"invalidValue",required:!1,deprecated:void 0,schemaDescription:void 0,schemaName:"object",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,i.kt)(d.Z,{collapsible:!1,name:"message",required:!1,deprecated:void 0,schemaDescription:void 0,schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,i.kt)(d.Z,{collapsible:!1,name:"path",required:!1,deprecated:void 0,schemaDescription:void 0,schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,i.kt)(d.Z,{collapsible:!1,name:"type",required:!1,deprecated:void 0,schemaDescription:void 0,schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"})))),(0,i.kt)(o.Z,{label:"Example (from schema)",value:"Example (from schema)",mdxType:"TabItem"},(0,i.kt)(p.Z,{responseExample:"null",language:"json",mdxType:"ResponseSamples"}))))))))))}g.isMDXComponent=!0}}]);