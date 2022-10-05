"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[3968],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return f}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var i=r.createContext({}),u=function(e){var t=r.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=u(e.components);return r.createElement(i.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,i=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),d=u(n),f=a,m=d["".concat(i,".").concat(f)]||d[f]||s[f]||l;return n?r.createElement(m,o(o({ref:t},p),{},{components:n})):r.createElement(m,o({ref:t},p))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,o=new Array(l);o[0]=d;var c={};for(var i in t)hasOwnProperty.call(t,i)&&(c[i]=t[i]);c.originalType=e,c.mdxType="string"==typeof e?e:a,o[1]=c;for(var u=2;u<l;u++)o[u]=n[u];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},7114:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return c},contentTitle:function(){return i},metadata:function(){return u},toc:function(){return p},default:function(){return d}});var r=n(7462),a=n(3366),l=(n(7294),n(3905)),o=["components"],c={date:new Date("2019-09-23T17:18:11.000Z"),id:"es-advanced",tags:["Java","ElasticSearch","\u540e\u7aef"],title:"ElasticSearch \u8fdb\u9636"},i=void 0,u={unversionedId:"note/es-advanced",id:"note/es-advanced",isDocsHomePage:!1,title:"ElasticSearch \u8fdb\u9636",description:"ES\u8fdb\u9636",source:"@site/docs/note/2019-09-23-es-advanced.mdx",sourceDirName:"note",slug:"/note/es-advanced",permalink:"/trashbin/docs/note/es-advanced",tags:[{label:"Java",permalink:"/trashbin/docs/tags/java"},{label:"ElasticSearch",permalink:"/trashbin/docs/tags/elastic-search"},{label:"\u540e\u7aef",permalink:"/trashbin/docs/tags/\u540e\u7aef"}],version:"current",frontMatter:{date:"2019-09-23T17:18:11.000Z",id:"es-advanced",tags:["Java","ElasticSearch","\u540e\u7aef"],title:"ElasticSearch \u8fdb\u9636"}},p=[{value:"\u96c6\u7fa4\u5065\u5eb7",id:"\u96c6\u7fa4\u5065\u5eb7",children:[]},{value:"\u6587\u6863",id:"\u6587\u6863",children:[{value:"\u6587\u6863\u5143\u6570\u636e",id:"\u6587\u6863\u5143\u6570\u636e",children:[]},{value:"\u5904\u7406\u51b2\u7a81",id:"\u5904\u7406\u51b2\u7a81",children:[]},{value:"\u6587\u6863\u90e8\u5206\u66f4\u65b0",id:"\u6587\u6863\u90e8\u5206\u66f4\u65b0",children:[]},{value:"\u591a\u4e2a\u6587\u6863",id:"\u591a\u4e2a\u6587\u6863",children:[]}]}],s={toc:p};function d(e){var t=e.components,n=(0,a.Z)(e,o);return(0,l.kt)("wrapper",(0,r.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"ES\u8fdb\u9636")),(0,l.kt)("h2",{id:"\u96c6\u7fa4\u5065\u5eb7"},"\u96c6\u7fa4\u5065\u5eb7"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},'curl -X GET "localhost:9200/_cluster/health?pretty"\n\n')),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"\u66f4\u591a\u5173\u4e8e\u5206\u5e03\u5f0f\u96c6\u7fa4\u7684\u4ecb\u7ecd\u76f4\u63a5\u53bb\u770b",(0,l.kt)("a",{parentName:"p",href:"https://www.elastic.co/guide/cn/elasticsearch/guide/current/distributed-cluster.html"},"\u6743\u5a01\u6307\u5357\uff1a\u96c6\u7fa4\u5185\u7684\u539f\u7406"))),(0,l.kt)("h2",{id:"\u6587\u6863"},"\u6587\u6863"),(0,l.kt)("h3",{id:"\u6587\u6863\u5143\u6570\u636e"},"\u6587\u6863\u5143\u6570\u636e"),(0,l.kt)("p",null,"\u4e09\u4e2a\u5fc5\u987b\u7684\u5143\u6570\u636e\u5143\u7d20\u5982\u4e0b\uff1a"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"_index\uff1a\u7d22\u5f15\uff0c\u4e00\u4e2a\u7d22\u5f15\u5e94\u8be5\u662f\u56e0\u5171\u540c\u7684\u7279\u6027\u88ab\u5206\u7ec4\u5230\u4e00\u8d77\u7684\u6587\u6863\u96c6\u5408\u3002"),(0,l.kt)("li",{parentName:"ul"},"_type\uff1a\u6587\u6863\u8868\u793a\u7684\u5bf9\u8c61\u7c7b\u522b\uff0c\u5b50\u5206\u533a"),(0,l.kt)("li",{parentName:"ul"},"_id\uff1a\u6587\u6863\u552f\u4e00\u6807\u8bc6\u3002\u521b\u5efa\u4e00\u4e2a\u65b0\u7684\u6587\u6863\uff0c\u8981\u4e48\u63d0\u4f9b\u81ea\u5df1\u7684 _id \uff0c\u8981\u4e48\u8ba9 Elasticsearch \u5e2e\u4f60\u751f\u6210\u3002")),(0,l.kt)("h3",{id:"\u5904\u7406\u51b2\u7a81"},"\u5904\u7406\u51b2\u7a81"),(0,l.kt)("p",null,"\u540c\u6837\u6709\u4e50\u89c2\u9501\u548c\u60b2\u89c2\u9501\u4e24\u79cd\u5904\u7406\u6982\u5ff5\u3002\u6743\u5a01\u6307\u5357\u4ecb\u7ecd\u4e86\u4e50\u89c2\u9501\uff1a"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u4e50\u89c2\u5e76\u53d1\u63a7\u5236")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},'curl -X PUT "localhost:9200/website/blog/1?version=1&pretty" -H \'Content-Type: application/json\' -d\'\n{\n  "title": "My first blog entry",\n  "text":  "Starting to get the hang of this..."\n}\n\'\n')),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u901a\u8fc7\u5916\u90e8\u7cfb\u7edf\u4f7f\u7528\u7248\u672c\u63a7\u5236")),(0,l.kt)("p",null,"\u4f7f\u7528\u5176\u5b83\u6570\u636e\u5e93\u4f5c\u4e3a\u4e3b\u8981\u7684\u6570\u636e\u5b58\u50a8\uff0c\u4f7f\u7528 Elasticsearch \u505a\u6570\u636e\u68c0\u7d22\u3002"),(0,l.kt)("h3",{id:"\u6587\u6863\u90e8\u5206\u66f4\u65b0"},"\u6587\u6863\u90e8\u5206\u66f4\u65b0"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},'curl -X POST "localhost:9200/website/blog/1/_update?pretty" -H \'Content-Type: application/json\' -d\'\n{\n   "doc" : {\n      "tags" : [ "testing" ],\n      "views": 0\n   }\n}\n\'\n')),(0,l.kt)("p",null,"\u6b64\u5916\u8fd8\u53ef\u4ee5\u7528Groovy\u811a\u672c\u66f4\u65b0\u3001\u8bbe\u7f6e\u521d\u59cb\u503cupsert\u7b49\u3002"),(0,l.kt)("h3",{id:"\u591a\u4e2a\u6587\u6863"},"\u591a\u4e2a\u6587\u6863"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"mget"),(0,l.kt)("li",{parentName:"ul"},"bulk")))}d.isMDXComponent=!0}}]);