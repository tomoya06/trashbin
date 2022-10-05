"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[5100],{3905:function(e,r,t){t.d(r,{Zo:function(){return p},kt:function(){return f}});var n=t(7294);function o(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function a(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function s(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?a(Object(t),!0).forEach((function(r){o(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function c(e,r){if(null==e)return{};var t,n,o=function(e,r){if(null==e)return{};var t,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||(o[t]=e[t]);return o}(e,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var i=n.createContext({}),l=function(e){var r=n.useContext(i),t=r;return e&&(t="function"==typeof e?e(r):s(s({},r),e)),t},p=function(e){var r=l(e.components);return n.createElement(i.Provider,{value:r},e.children)},u={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},d=n.forwardRef((function(e,r){var t=e.components,o=e.mdxType,a=e.originalType,i=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),d=l(t),f=o,m=d["".concat(i,".").concat(f)]||d[f]||u[f]||a;return t?n.createElement(m,s(s({ref:r},p),{},{components:t})):n.createElement(m,s({ref:r},p))}));function f(e,r){var t=arguments,o=r&&r.mdxType;if("string"==typeof e||o){var a=t.length,s=new Array(a);s[0]=d;var c={};for(var i in r)hasOwnProperty.call(r,i)&&(c[i]=r[i]);c.originalType=e,c.mdxType="string"==typeof e?e:o,s[1]=c;for(var l=2;l<a;l++)s[l]=t[l];return n.createElement.apply(null,s)}return n.createElement.apply(null,t)}d.displayName="MDXCreateElement"},8291:function(e,r,t){t.r(r),t.d(r,{frontMatter:function(){return c},contentTitle:function(){return i},metadata:function(){return l},toc:function(){return p},default:function(){return d}});var n=t(7462),o=t(3366),a=(t(7294),t(3905)),s=["components"],c={date:new Date("2019-09-05T15:54:28.000Z"),id:"electron-basic",tags:["\u524d\u7aef","Node.js","Electron"],title:"Electron\u57fa\u7840"},i=void 0,l={unversionedId:"note/electron-basic",id:"note/electron-basic",isDocsHomePage:!1,title:"Electron\u57fa\u7840",description:"\u6536\u96c6Electron\u7684\u5e38\u89c1\u95ee\u9898",source:"@site/docs/note/2019-09-05-electron-basic.mdx",sourceDirName:"note",slug:"/note/electron-basic",permalink:"/trashbin/docs/note/electron-basic",tags:[{label:"\u524d\u7aef",permalink:"/trashbin/docs/tags/\u524d\u7aef"},{label:"Node.js",permalink:"/trashbin/docs/tags/node-js"},{label:"Electron",permalink:"/trashbin/docs/tags/electron"}],version:"current",frontMatter:{date:"2019-09-05T15:54:28.000Z",id:"electron-basic",tags:["\u524d\u7aef","Node.js","Electron"],title:"Electron\u57fa\u7840"}},p=[{value:"Main Process, Renderer Process and Pages",id:"main-process-renderer-process-and-pages",children:[{value:"Additional Tips",id:"additional-tips",children:[]}]}],u={toc:p};function d(e){var r=e.components,t=(0,o.Z)(e,s);return(0,a.kt)("wrapper",(0,n.Z)({},u,t,{components:r,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"\u6536\u96c6Electron\u7684\u5e38\u89c1\u95ee\u9898"),(0,a.kt)("h2",{id:"main-process-renderer-process-and-pages"},"Main Process, Renderer Process and Pages"),(0,a.kt)("ol",{start:0},(0,a.kt)("li",{parentName:"ol"},"Main Process: the process that runs package.json's main script. An Electron app always has one main process, but never more."),(0,a.kt)("li",{parentName:"ol"},"Renderer Process: Each web page in Electron runs in its own process, which is called the renderer process."),(0,a.kt)("li",{parentName:"ol"},"Relationship with Pages: The main process creates web pages by creating BrowserWindow instances. Each BrowserWindow instance runs the web page in its own renderer process. When a BrowserWindow instance is destroyed, the corresponding renderer process is also terminated.")),(0,a.kt)("h3",{id:"additional-tips"},"Additional Tips"),(0,a.kt)("ol",{start:0},(0,a.kt)("li",{parentName:"ol"},"If you want to perform GUI operations in a web page, the renderer process of the web page must communicate with the main process to request that the main process perform those operations.")))}d.isMDXComponent=!0}}]);