"use strict";(self.webpackChunkeclipse_tractusx_github_io=self.webpackChunkeclipse_tractusx_github_io||[]).push([[38056],{95216:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>u,contentTitle:()=>l,default:()=>f,frontMatter:()=>c,metadata:()=>m,toc:()=>p});var n=i(87462),o=(i(67294),i(3905)),a=i(26389),r=i(94891),s=(i(75190),i(47507),i(24310)),d=(i(63303),i(75035),i(85162));const c={id:"get-production-forecast-information",title:"Client asking for MP information",description:"Client asking for MP information",sidebar_label:"Client asking for MP information",hide_title:!0,hide_table_of_contents:!0,api:{operationId:"GetProductionForecastInformation",requestBody:{description:"Optional description in *Markdown*",required:!0,content:{"application/json":{schema:{description:"Aspect Model to request a production forecast",type:"object",properties:{request:{description:"Data model for a request",type:"object",properties:{offset:{description:'Send/start time of the first message/notification\n- "0" ==> immediate response',type:"object",properties:{timeUnit:{description:"Specifies the unit in which the time is represented",type:"string",pattern:"[a-zA-Z]*:[a-zA-Z]+",enum:["unit:secondUnitOfTime","unit:minuteUnitOfTime","unit:hour","unit:day","unit:week","unit:month","unit:year"]},value:{description:"The amount of timeUnits considered",type:"number"}},required:["timeUnit","value"]},customerId:{description:"Internal customerId",type:"string"},precisionOfForecast:{description:"Accuracy of the time specification of the completion date.\n- default: implicitly defined by production\n- only as a REQUEST of the requester since it cannot be guaranteed that the store floor can provide the data in this accuracy.",type:"object",properties:{timeUnit:{description:"Specifies the unit in which the time is represented",type:"string",pattern:"[a-zA-Z]*:[a-zA-Z]+",enum:["unit:secondUnitOfTime","unit:minuteUnitOfTime","unit:hour","unit:day","unit:week","unit:month","unit:year"]},value:{description:"The amount of timeUnits considered",type:"number"}},required:["timeUnit","value"]},productionForecastForAll:{description:"Boolean variable that detemines whether the customer request information about each position of an order, or information about the complete order",type:"boolean"},orderId:{description:"The Id identifying subject of the request",type:"string"},deviationOfSchedule:{description:'Mandatory property for the notification mode. The property specifies the deviation from targeted delivery date that must be met to send a notification to a subscriber\n\nmandatory for CommunicationMode = "notification"',type:"object",properties:{timeUnit:{description:"Specifies the unit in which the time is represented",type:"string",pattern:"[a-zA-Z]*:[a-zA-Z]+",enum:["unit:secondUnitOfTime","unit:minuteUnitOfTime","unit:hour","unit:day","unit:week","unit:month","unit:year"]},value:{description:"The amount of timeUnits considered",type:"number"}},required:["timeUnit","value"]},notificationInterval:{description:'Interval time that either specifies the cyclic send time or limits the notification time\nmandatory for CommunicationMode = "cyclic"',type:"object",properties:{timeUnit:{description:"Specifies the unit in which the time is represented",type:"string",pattern:"[a-zA-Z]*:[a-zA-Z]+",enum:["unit:secondUnitOfTime","unit:minuteUnitOfTime","unit:hour","unit:day","unit:week","unit:month","unit:year"]},value:{description:"The amount of timeUnits considered",type:"number"}},required:["timeUnit","value"]},communicationMode:{description:"Specification of the communication mode",type:"string",enum:["synchronous","cyclic","notification"]},versionDataModel:{description:"Specifies the used version of the data model",type:"string"}},required:["offset","customerId","productionForecastForAll","orderId","communicationMode","versionDataModel"]},header:{description:"Contains information common to all messages",type:"object",properties:{messageId:{description:"Unique ID identifying the message. The purpose of the ID is to uniquely identify a single message, therefore it MUST not be reused.",type:"string"},context:{description:"Information about the context the message should be considered in.\r\nDefault: For Use Cases which need to validate against the Semantic Hub automatically.\r\nFallback: For Use Cases which do not use automatic validation.\r\nIn both cases: Versioning only refers to major versions.\r\nString pattern of the value follows: <domain>-<subdomain>-<object>-<major version>",type:"string"},sentDateTime:{description:"Time zone aware timestamp holding the date and the time the message was sent by the sending party. The value MUST be formatted according to the ISO 8601 standard",type:"string",pattern:"-?([1-9][0-9]{3,}|0[0-9]{3})-(0[1-9]|1[0-2])-(0[1-9]|[12][0-9]|3[01])T(([01][0-9]|2[0-3]):[0-5][0-9]:[0-5][0-9](.[0-9]+)?|(24:00:00(.0+)?))(Z|(+|-)((0[0-9]|1[0-3]):[0-5][0-9]|14:00))?"},senderBpn:{description:"The Business Partner Number of the sending party. The value MUST be a valid BPN. BPNA and BPNS are not allowed. Applicable constraints are defined in the corresponding standard",type:"string"},receiverBpn:{description:"The Business Partner Number of the receiving party. The value MUST be a valid BPN. BPNA and BPNS are not allowed. Applicable constraints are defined in the corresponding standard.",type:"string"},expectedResponseBy:{description:"Time zone aware timestamp holding the date and time by which the sending party expects a certain type of response from the receiving party. The meaning and interpretation of the fields's value are context-bound and MUST therefore be defined by any business domain or platform capability making use of it. The value MUST be formatted according to the ISO 8601 standard",type:"string",pattern:"-?([1-9][0-9]{3,}|0[0-9]{3})-(0[1-9]|1[0-2])-(0[1-9]|[12][0-9]|3[01])T(([01][0-9]|2[0-3]):[0-5][0-9]:[0-5][0-9](.[0-9]+)?|(24:00:00(.0+)?))(Z|(+|-)((0[0-9]|1[0-3]):[0-5][0-9]|14:00))?"},relatedMessageId:{description:"Unique ID identifying a message somehow related to the current one",type:"string"},version:{description:"The version of the standard defining the semantics and the structure of the message's header. The version number should follow the Semantic Versioning 2.0.0 specification.",type:"string"}},required:["messageId","context","sentDateTime","senderBpn","receiverBpn","version"]}},required:["header"]}}}},responses:{200:{description:"OK. The request has succeeded"},201:{description:"OK, Precision not possible. The request has succeeded. Precision is not possible, the default precision will be used"},400:{description:"Bad request. The server cannot or will not process the request due to something that is perceived to be a client error (e.g., malformed request syntax, invalid request message framing, or deceptive request routing)."},401:{description:'Unauthorized. Although the HTTP standard specifies "unauthorized", semantically this response means "unauthenticated". That is, the client must authenticate itself to get the requested response.'},403:{description:"Forbidden. The client does not have access rights to the content; that is, it is unauthorized, so the server is refusing to give the requested resource."},420:{description:"Unknown BPNS. The BPNS which is given as parameter is not registered in the data provider database as a direct partner."},421:{description:"Invalid CustomerId. The customerID unknown or invalid"},422:{description:"Invalid OrderId.\tThe orderID not found or invalid"},423:{description:"Invalid Notification Interval. The data field Notification interval is not set with a proper value or missing"},424:{description:"Invalid Deviation. The data field Deviation is not set with a proper value or missing"},425:{description:"Forbidden. The client does not have access rights to the content; that is, it is unauthorized, so the server is refusing to give the requested resource."},426:{description:"incomplete Request"}},description:"Client asking for MP information",method:"get",path:"/GetProductionForecastInformation",servers:[{url:"http://example.mp.org"}],jsonRequestBodyExample:{request:{offset:{timeUnit:"unit:secondUnitOfTime",value:0},customerId:"string",precisionOfForecast:{timeUnit:"unit:secondUnitOfTime",value:0},productionForecastForAll:!0,orderId:"string",deviationOfSchedule:{timeUnit:"unit:secondUnitOfTime",value:0},notificationInterval:{timeUnit:"unit:secondUnitOfTime",value:0},communicationMode:"synchronous",versionDataModel:"string"},header:{messageId:"string",context:"string",sentDateTime:"string",senderBpn:"string",receiverBpn:"string",expectedResponseBy:"string",relatedMessageId:"string",version:"string"}},info:{version:"1.0.0",title:"SIS EDC - Provider",license:{name:"MIT"}},postman:{name:"Client asking for MP information",description:{type:"text/plain"},url:{path:["GetProductionForecastInformation"],host:["{{baseUrl}}"],query:[],variable:[]},header:[{key:"Content-Type",value:"application/json"}],method:"GET",body:{mode:"raw",raw:'""',options:{raw:{language:"json"}}}}},sidebar_class_name:"get api-method",info_path:"docs-kits/kits/Modular Production Kit/Software Development View/Provider//sis-edc-provider",custom_edit_url:null},l=void 0,m={unversionedId:"kits/Modular Production Kit/Software Development View/Provider/get-production-forecast-information",id:"version-23.12/kits/Modular Production Kit/Software Development View/Provider/get-production-forecast-information",title:"Client asking for MP information",description:"Client asking for MP information",source:"@site/docs-kits_versioned_docs/version-23.12/kits/Modular Production Kit/Software Development View/Provider/get-production-forecast-information.api.mdx",sourceDirName:"kits/Modular Production Kit/Software Development View/Provider",slug:"/kits/Modular Production Kit/Software Development View/Provider/get-production-forecast-information",permalink:"/docs-kits/kits/Modular Production Kit/Software Development View/Provider/get-production-forecast-information",draft:!1,editUrl:null,tags:[],version:"23.12",frontMatter:{id:"get-production-forecast-information",title:"Client asking for MP information",description:"Client asking for MP information",sidebar_label:"Client asking for MP information",hide_title:!0,hide_table_of_contents:!0,api:{operationId:"GetProductionForecastInformation",requestBody:{description:"Optional description in *Markdown*",required:!0,content:{"application/json":{schema:{description:"Aspect Model to request a production forecast",type:"object",properties:{request:{description:"Data model for a request",type:"object",properties:{offset:{description:'Send/start time of the first message/notification\n- "0" ==> immediate response',type:"object",properties:{timeUnit:{description:"Specifies the unit in which the time is represented",type:"string",pattern:"[a-zA-Z]*:[a-zA-Z]+",enum:["unit:secondUnitOfTime","unit:minuteUnitOfTime","unit:hour","unit:day","unit:week","unit:month","unit:year"]},value:{description:"The amount of timeUnits considered",type:"number"}},required:["timeUnit","value"]},customerId:{description:"Internal customerId",type:"string"},precisionOfForecast:{description:"Accuracy of the time specification of the completion date.\n- default: implicitly defined by production\n- only as a REQUEST of the requester since it cannot be guaranteed that the store floor can provide the data in this accuracy.",type:"object",properties:{timeUnit:{description:"Specifies the unit in which the time is represented",type:"string",pattern:"[a-zA-Z]*:[a-zA-Z]+",enum:["unit:secondUnitOfTime","unit:minuteUnitOfTime","unit:hour","unit:day","unit:week","unit:month","unit:year"]},value:{description:"The amount of timeUnits considered",type:"number"}},required:["timeUnit","value"]},productionForecastForAll:{description:"Boolean variable that detemines whether the customer request information about each position of an order, or information about the complete order",type:"boolean"},orderId:{description:"The Id identifying subject of the request",type:"string"},deviationOfSchedule:{description:'Mandatory property for the notification mode. The property specifies the deviation from targeted delivery date that must be met to send a notification to a subscriber\n\nmandatory for CommunicationMode = "notification"',type:"object",properties:{timeUnit:{description:"Specifies the unit in which the time is represented",type:"string",pattern:"[a-zA-Z]*:[a-zA-Z]+",enum:["unit:secondUnitOfTime","unit:minuteUnitOfTime","unit:hour","unit:day","unit:week","unit:month","unit:year"]},value:{description:"The amount of timeUnits considered",type:"number"}},required:["timeUnit","value"]},notificationInterval:{description:'Interval time that either specifies the cyclic send time or limits the notification time\nmandatory for CommunicationMode = "cyclic"',type:"object",properties:{timeUnit:{description:"Specifies the unit in which the time is represented",type:"string",pattern:"[a-zA-Z]*:[a-zA-Z]+",enum:["unit:secondUnitOfTime","unit:minuteUnitOfTime","unit:hour","unit:day","unit:week","unit:month","unit:year"]},value:{description:"The amount of timeUnits considered",type:"number"}},required:["timeUnit","value"]},communicationMode:{description:"Specification of the communication mode",type:"string",enum:["synchronous","cyclic","notification"]},versionDataModel:{description:"Specifies the used version of the data model",type:"string"}},required:["offset","customerId","productionForecastForAll","orderId","communicationMode","versionDataModel"]},header:{description:"Contains information common to all messages",type:"object",properties:{messageId:{description:"Unique ID identifying the message. The purpose of the ID is to uniquely identify a single message, therefore it MUST not be reused.",type:"string"},context:{description:"Information about the context the message should be considered in.\r\nDefault: For Use Cases which need to validate against the Semantic Hub automatically.\r\nFallback: For Use Cases which do not use automatic validation.\r\nIn both cases: Versioning only refers to major versions.\r\nString pattern of the value follows: <domain>-<subdomain>-<object>-<major version>",type:"string"},sentDateTime:{description:"Time zone aware timestamp holding the date and the time the message was sent by the sending party. The value MUST be formatted according to the ISO 8601 standard",type:"string",pattern:"-?([1-9][0-9]{3,}|0[0-9]{3})-(0[1-9]|1[0-2])-(0[1-9]|[12][0-9]|3[01])T(([01][0-9]|2[0-3]):[0-5][0-9]:[0-5][0-9](\\.[0-9]+)?|(24:00:00(\\.0+)?))(Z|(\\+|-)((0[0-9]|1[0-3]):[0-5][0-9]|14:00))?"},senderBpn:{description:"The Business Partner Number of the sending party. The value MUST be a valid BPN. BPNA and BPNS are not allowed. Applicable constraints are defined in the corresponding standard",type:"string"},receiverBpn:{description:"The Business Partner Number of the receiving party. The value MUST be a valid BPN. BPNA and BPNS are not allowed. Applicable constraints are defined in the corresponding standard.",type:"string"},expectedResponseBy:{description:"Time zone aware timestamp holding the date and time by which the sending party expects a certain type of response from the receiving party. The meaning and interpretation of the fields's value are context-bound and MUST therefore be defined by any business domain or platform capability making use of it. The value MUST be formatted according to the ISO 8601 standard",type:"string",pattern:"-?([1-9][0-9]{3,}|0[0-9]{3})-(0[1-9]|1[0-2])-(0[1-9]|[12][0-9]|3[01])T(([01][0-9]|2[0-3]):[0-5][0-9]:[0-5][0-9](\\.[0-9]+)?|(24:00:00(\\.0+)?))(Z|(\\+|-)((0[0-9]|1[0-3]):[0-5][0-9]|14:00))?"},relatedMessageId:{description:"Unique ID identifying a message somehow related to the current one",type:"string"},version:{description:"The version of the standard defining the semantics and the structure of the message's header. The version number should follow the Semantic Versioning 2.0.0 specification.",type:"string"}},required:["messageId","context","sentDateTime","senderBpn","receiverBpn","version"]}},required:["header"]}}}},responses:{200:{description:"OK. The request has succeeded"},201:{description:"OK, Precision not possible. The request has succeeded. Precision is not possible, the default precision will be used"},400:{description:"Bad request. The server cannot or will not process the request due to something that is perceived to be a client error (e.g., malformed request syntax, invalid request message framing, or deceptive request routing)."},401:{description:'Unauthorized. Although the HTTP standard specifies "unauthorized", semantically this response means "unauthenticated". That is, the client must authenticate itself to get the requested response.'},403:{description:"Forbidden. The client does not have access rights to the content; that is, it is unauthorized, so the server is refusing to give the requested resource."},420:{description:"Unknown BPNS. The BPNS which is given as parameter is not registered in the data provider database as a direct partner."},421:{description:"Invalid CustomerId. The customerID unknown or invalid"},422:{description:"Invalid OrderId.\tThe orderID not found or invalid"},423:{description:"Invalid Notification Interval. The data field Notification interval is not set with a proper value or missing"},424:{description:"Invalid Deviation. The data field Deviation is not set with a proper value or missing"},425:{description:"Forbidden. The client does not have access rights to the content; that is, it is unauthorized, so the server is refusing to give the requested resource."},426:{description:"incomplete Request"}},description:"Client asking for MP information",method:"get",path:"/GetProductionForecastInformation",servers:[{url:"http://example.mp.org"}],jsonRequestBodyExample:{request:{offset:{timeUnit:"unit:secondUnitOfTime",value:0},customerId:"string",precisionOfForecast:{timeUnit:"unit:secondUnitOfTime",value:0},productionForecastForAll:!0,orderId:"string",deviationOfSchedule:{timeUnit:"unit:secondUnitOfTime",value:0},notificationInterval:{timeUnit:"unit:secondUnitOfTime",value:0},communicationMode:"synchronous",versionDataModel:"string"},header:{messageId:"string",context:"string",sentDateTime:"string",senderBpn:"string",receiverBpn:"string",expectedResponseBy:"string",relatedMessageId:"string",version:"string"}},info:{version:"1.0.0",title:"SIS EDC - Provider",license:{name:"MIT"}},postman:{name:"Client asking for MP information",description:{type:"text/plain"},url:{path:["GetProductionForecastInformation"],host:["{{baseUrl}}"],query:[],variable:[]},header:[{key:"Content-Type",value:"application/json"}],method:"GET",body:{mode:"raw",raw:'""',options:{raw:{language:"json"}}}}},sidebar_class_name:"get api-method",info_path:"docs-kits/kits/Modular Production Kit/Software Development View/Provider//sis-edc-provider",custom_edit_url:null},sidebar:"kits",previous:{title:"Information provided by MP to Client",permalink:"/docs-kits/kits/Modular Production Kit/Software Development View/Consumer/provide-production-forecast-information"},next:{title:"Client unsubscribing from information pushes",permalink:"/docs-kits/kits/Modular Production Kit/Software Development View/Provider/unsubscribe"}},u={},p=[{value:"Client asking for MP information",id:"client-asking-for-mp-information",level:2}],h={toc:p};function f(e){let{components:t,...i}=e;return(0,o.kt)("wrapper",(0,n.Z)({},h,i,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"client-asking-for-mp-information"},"Client asking for MP information"),(0,o.kt)("p",null,"Client asking for MP information"),(0,o.kt)(r.Z,{mdxType:"MimeTabs"},(0,o.kt)(d.Z,{label:"application/json",value:"application/json-schema",mdxType:"TabItem"},(0,o.kt)("details",{style:{},"data-collapsed":!1,open:!0},(0,o.kt)("summary",{style:{textAlign:"left"}},(0,o.kt)("strong",null,"Request Body"),(0,o.kt)("strong",{style:{fontSize:"var(--ifm-code-font-size)",color:"var(--openapi-required)"}}," required")),(0,o.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}},(0,o.kt)("div",{style:{marginTop:"1rem",marginBottom:"1rem"}},(0,o.kt)("p",null,"Optional description in ",(0,o.kt)("em",{parentName:"p"},"Markdown")))),(0,o.kt)("ul",{style:{marginLeft:"1rem"}},(0,o.kt)(s.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,o.kt)("details",{style:{}},(0,o.kt)("summary",{style:{}},(0,o.kt)("strong",null,"request"),(0,o.kt)("span",{style:{opacity:"0.6"}}," object")),(0,o.kt)("div",{style:{marginLeft:"1rem"}},(0,o.kt)("div",{style:{marginTop:".5rem",marginBottom:".5rem"}},(0,o.kt)("p",null,"Data model for a request")),(0,o.kt)(s.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,o.kt)("details",{style:{}},(0,o.kt)("summary",{style:{}},(0,o.kt)("strong",null,"offset"),(0,o.kt)("span",{style:{opacity:"0.6"}}," object"),(0,o.kt)("strong",{style:{fontSize:"var(--ifm-code-font-size)",color:"var(--openapi-required)"}}," required")),(0,o.kt)("div",{style:{marginLeft:"1rem"}},(0,o.kt)("div",{style:{marginTop:".5rem",marginBottom:".5rem"}},(0,o.kt)("p",null,"Send/start time of the first message/notification"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},'"0" ==',">"," immediate response"))),(0,o.kt)(s.Z,{collapsible:!1,name:"timeUnit",required:!0,deprecated:void 0,schemaDescription:"Specifies the unit in which the time is represented",schemaName:"string",qualifierMessage:"**Possible values:** Value must match regular expression `[a-zA-Z]*:[a-zA-Z]+`, [`unit:secondUnitOfTime`, `unit:minuteUnitOfTime`, `unit:hour`, `unit:day`, `unit:week`, `unit:month`, `unit:year`]",defaultValue:void 0,mdxType:"SchemaItem"}),(0,o.kt)(s.Z,{collapsible:!1,name:"value",required:!0,deprecated:void 0,schemaDescription:"The amount of timeUnits considered",schemaName:"number",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"})))),(0,o.kt)(s.Z,{collapsible:!1,name:"customerId",required:!0,deprecated:void 0,schemaDescription:"Internal customerId",schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,o.kt)(s.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,o.kt)("details",{style:{}},(0,o.kt)("summary",{style:{}},(0,o.kt)("strong",null,"precisionOfForecast"),(0,o.kt)("span",{style:{opacity:"0.6"}}," object")),(0,o.kt)("div",{style:{marginLeft:"1rem"}},(0,o.kt)("div",{style:{marginTop:".5rem",marginBottom:".5rem"}},(0,o.kt)("p",null,"Accuracy of the time specification of the completion date."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"default: implicitly defined by production"),(0,o.kt)("li",{parentName:"ul"},"only as a REQUEST of the requester since it cannot be guaranteed that the store floor can provide the data in this accuracy."))),(0,o.kt)(s.Z,{collapsible:!1,name:"timeUnit",required:!0,deprecated:void 0,schemaDescription:"Specifies the unit in which the time is represented",schemaName:"string",qualifierMessage:"**Possible values:** Value must match regular expression `[a-zA-Z]*:[a-zA-Z]+`, [`unit:secondUnitOfTime`, `unit:minuteUnitOfTime`, `unit:hour`, `unit:day`, `unit:week`, `unit:month`, `unit:year`]",defaultValue:void 0,mdxType:"SchemaItem"}),(0,o.kt)(s.Z,{collapsible:!1,name:"value",required:!0,deprecated:void 0,schemaDescription:"The amount of timeUnits considered",schemaName:"number",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"})))),(0,o.kt)(s.Z,{collapsible:!1,name:"productionForecastForAll",required:!0,deprecated:void 0,schemaDescription:"Boolean variable that detemines whether the customer request information about each position of an order, or information about the complete order",schemaName:"boolean",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,o.kt)(s.Z,{collapsible:!1,name:"orderId",required:!0,deprecated:void 0,schemaDescription:"The Id identifying subject of the request",schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,o.kt)(s.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,o.kt)("details",{style:{}},(0,o.kt)("summary",{style:{}},(0,o.kt)("strong",null,"deviationOfSchedule"),(0,o.kt)("span",{style:{opacity:"0.6"}}," object")),(0,o.kt)("div",{style:{marginLeft:"1rem"}},(0,o.kt)("div",{style:{marginTop:".5rem",marginBottom:".5rem"}},(0,o.kt)("p",null,"Mandatory property for the notification mode. The property specifies the deviation from targeted delivery date that must be met to send a notification to a subscriber"),(0,o.kt)("p",null,'mandatory for CommunicationMode = "notification"')),(0,o.kt)(s.Z,{collapsible:!1,name:"timeUnit",required:!0,deprecated:void 0,schemaDescription:"Specifies the unit in which the time is represented",schemaName:"string",qualifierMessage:"**Possible values:** Value must match regular expression `[a-zA-Z]*:[a-zA-Z]+`, [`unit:secondUnitOfTime`, `unit:minuteUnitOfTime`, `unit:hour`, `unit:day`, `unit:week`, `unit:month`, `unit:year`]",defaultValue:void 0,mdxType:"SchemaItem"}),(0,o.kt)(s.Z,{collapsible:!1,name:"value",required:!0,deprecated:void 0,schemaDescription:"The amount of timeUnits considered",schemaName:"number",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"})))),(0,o.kt)(s.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,o.kt)("details",{style:{}},(0,o.kt)("summary",{style:{}},(0,o.kt)("strong",null,"notificationInterval"),(0,o.kt)("span",{style:{opacity:"0.6"}}," object")),(0,o.kt)("div",{style:{marginLeft:"1rem"}},(0,o.kt)("div",{style:{marginTop:".5rem",marginBottom:".5rem"}},(0,o.kt)("p",null,'Interval time that either specifies the cyclic send time or limits the notification time\nmandatory for CommunicationMode = "cyclic"')),(0,o.kt)(s.Z,{collapsible:!1,name:"timeUnit",required:!0,deprecated:void 0,schemaDescription:"Specifies the unit in which the time is represented",schemaName:"string",qualifierMessage:"**Possible values:** Value must match regular expression `[a-zA-Z]*:[a-zA-Z]+`, [`unit:secondUnitOfTime`, `unit:minuteUnitOfTime`, `unit:hour`, `unit:day`, `unit:week`, `unit:month`, `unit:year`]",defaultValue:void 0,mdxType:"SchemaItem"}),(0,o.kt)(s.Z,{collapsible:!1,name:"value",required:!0,deprecated:void 0,schemaDescription:"The amount of timeUnits considered",schemaName:"number",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"})))),(0,o.kt)(s.Z,{collapsible:!1,name:"communicationMode",required:!0,deprecated:void 0,schemaDescription:"Specification of the communication mode",schemaName:"string",qualifierMessage:"**Possible values:** [`synchronous`, `cyclic`, `notification`]",defaultValue:void 0,mdxType:"SchemaItem"}),(0,o.kt)(s.Z,{collapsible:!1,name:"versionDataModel",required:!0,deprecated:void 0,schemaDescription:"Specifies the used version of the data model",schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"})))),(0,o.kt)(s.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,o.kt)("details",{style:{}},(0,o.kt)("summary",{style:{}},(0,o.kt)("strong",null,"header"),(0,o.kt)("span",{style:{opacity:"0.6"}}," object"),(0,o.kt)("strong",{style:{fontSize:"var(--ifm-code-font-size)",color:"var(--openapi-required)"}}," required")),(0,o.kt)("div",{style:{marginLeft:"1rem"}},(0,o.kt)("div",{style:{marginTop:".5rem",marginBottom:".5rem"}},(0,o.kt)("p",null,"Contains information common to all messages")),(0,o.kt)(s.Z,{collapsible:!1,name:"messageId",required:!0,deprecated:void 0,schemaDescription:"Unique ID identifying the message. The purpose of the ID is to uniquely identify a single message, therefore it MUST not be reused.",schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,o.kt)(s.Z,{collapsible:!1,name:"context",required:!0,deprecated:void 0,schemaDescription:"Information about the context the message should be considered in.\r\nDefault: For Use Cases which need to validate against the Semantic Hub automatically.\r\nFallback: For Use Cases which do not use automatic validation.\r\nIn both cases: Versioning only refers to major versions.\r\nString pattern of the value follows: <domain>-<subdomain>-<object>-<major version>",schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,o.kt)(s.Z,{collapsible:!1,name:"sentDateTime",required:!0,deprecated:void 0,schemaDescription:"Time zone aware timestamp holding the date and the time the message was sent by the sending party. The value MUST be formatted according to the ISO 8601 standard",schemaName:"string",qualifierMessage:"**Possible values:** Value must match regular expression `-?([1-9][0-9]{3,}|0[0-9]{3})-(0[1-9]|1[0-2])-(0[1-9]|[12][0-9]|3[01])T(([01][0-9]|2[0-3]):[0-5][0-9]:[0-5][0-9](\\.[0-9]+)?|(24:00:00(\\.0+)?))(Z|(\\+|-)((0[0-9]|1[0-3]):[0-5][0-9]|14:00))?`",defaultValue:void 0,mdxType:"SchemaItem"}),(0,o.kt)(s.Z,{collapsible:!1,name:"senderBpn",required:!0,deprecated:void 0,schemaDescription:"The Business Partner Number of the sending party. The value MUST be a valid BPN. BPNA and BPNS are not allowed. Applicable constraints are defined in the corresponding standard",schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,o.kt)(s.Z,{collapsible:!1,name:"receiverBpn",required:!0,deprecated:void 0,schemaDescription:"The Business Partner Number of the receiving party. The value MUST be a valid BPN. BPNA and BPNS are not allowed. Applicable constraints are defined in the corresponding standard.",schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,o.kt)(s.Z,{collapsible:!1,name:"expectedResponseBy",required:!1,deprecated:void 0,schemaDescription:"Time zone aware timestamp holding the date and time by which the sending party expects a certain type of response from the receiving party. The meaning and interpretation of the fields's value are context-bound and MUST therefore be defined by any business domain or platform capability making use of it. The value MUST be formatted according to the ISO 8601 standard",schemaName:"string",qualifierMessage:"**Possible values:** Value must match regular expression `-?([1-9][0-9]{3,}|0[0-9]{3})-(0[1-9]|1[0-2])-(0[1-9]|[12][0-9]|3[01])T(([01][0-9]|2[0-3]):[0-5][0-9]:[0-5][0-9](\\.[0-9]+)?|(24:00:00(\\.0+)?))(Z|(\\+|-)((0[0-9]|1[0-3]):[0-5][0-9]|14:00))?`",defaultValue:void 0,mdxType:"SchemaItem"}),(0,o.kt)(s.Z,{collapsible:!1,name:"relatedMessageId",required:!1,deprecated:void 0,schemaDescription:"Unique ID identifying a message somehow related to the current one",schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,o.kt)(s.Z,{collapsible:!1,name:"version",required:!0,deprecated:void 0,schemaDescription:"The version of the standard defining the semantics and the structure of the message's header. The version number should follow the Semantic Versioning 2.0.0 specification.",schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"})))))))),(0,o.kt)("div",null,(0,o.kt)(a.Z,{mdxType:"ApiTabs"},(0,o.kt)(d.Z,{label:"200",value:"200",mdxType:"TabItem"},(0,o.kt)("div",null,(0,o.kt)("p",null,"OK. The request has succeeded")),(0,o.kt)("div",null)),(0,o.kt)(d.Z,{label:"201",value:"201",mdxType:"TabItem"},(0,o.kt)("div",null,(0,o.kt)("p",null,"OK, Precision not possible. The request has succeeded. Precision is not possible, the default precision will be used")),(0,o.kt)("div",null)),(0,o.kt)(d.Z,{label:"400",value:"400",mdxType:"TabItem"},(0,o.kt)("div",null,(0,o.kt)("p",null,"Bad request. The server cannot or will not process the request due to something that is perceived to be a client error (e.g., malformed request syntax, invalid request message framing, or deceptive request routing).")),(0,o.kt)("div",null)),(0,o.kt)(d.Z,{label:"401",value:"401",mdxType:"TabItem"},(0,o.kt)("div",null,(0,o.kt)("p",null,'Unauthorized. Although the HTTP standard specifies "unauthorized", semantically this response means "unauthenticated". That is, the client must authenticate itself to get the requested response.')),(0,o.kt)("div",null)),(0,o.kt)(d.Z,{label:"403",value:"403",mdxType:"TabItem"},(0,o.kt)("div",null,(0,o.kt)("p",null,"Forbidden. The client does not have access rights to the content; that is, it is unauthorized, so the server is refusing to give the requested resource.")),(0,o.kt)("div",null)),(0,o.kt)(d.Z,{label:"420",value:"420",mdxType:"TabItem"},(0,o.kt)("div",null,(0,o.kt)("p",null,"Unknown BPNS. The BPNS which is given as parameter is not registered in the data provider database as a direct partner.")),(0,o.kt)("div",null)),(0,o.kt)(d.Z,{label:"421",value:"421",mdxType:"TabItem"},(0,o.kt)("div",null,(0,o.kt)("p",null,"Invalid CustomerId. The customerID unknown or invalid")),(0,o.kt)("div",null)),(0,o.kt)(d.Z,{label:"422",value:"422",mdxType:"TabItem"},(0,o.kt)("div",null,(0,o.kt)("p",null,"Invalid OrderId.\tThe orderID not found or invalid")),(0,o.kt)("div",null)),(0,o.kt)(d.Z,{label:"423",value:"423",mdxType:"TabItem"},(0,o.kt)("div",null,(0,o.kt)("p",null,"Invalid Notification Interval. The data field Notification interval is not set with a proper value or missing")),(0,o.kt)("div",null)),(0,o.kt)(d.Z,{label:"424",value:"424",mdxType:"TabItem"},(0,o.kt)("div",null,(0,o.kt)("p",null,"Invalid Deviation. The data field Deviation is not set with a proper value or missing")),(0,o.kt)("div",null)),(0,o.kt)(d.Z,{label:"425",value:"425",mdxType:"TabItem"},(0,o.kt)("div",null,(0,o.kt)("p",null,"Forbidden. The client does not have access rights to the content; that is, it is unauthorized, so the server is refusing to give the requested resource.")),(0,o.kt)("div",null)),(0,o.kt)(d.Z,{label:"426",value:"426",mdxType:"TabItem"},(0,o.kt)("div",null,(0,o.kt)("p",null,"incomplete Request")),(0,o.kt)("div",null)))))}f.isMDXComponent=!0}}]);