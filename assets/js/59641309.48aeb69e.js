"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[7382],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return u}});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var i=r.createContext({}),f=function(e){var t=r.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},p=function(e){var t=f(e.components);return r.createElement(i.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,i=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),d=f(n),u=o,m=d["".concat(i,".").concat(u)]||d[u]||s[u]||a;return n?r.createElement(m,l(l({ref:t},p),{},{components:n})):r.createElement(m,l({ref:t},p))}));function u(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,l=new Array(a);l[0]=d;var c={};for(var i in t)hasOwnProperty.call(t,i)&&(c[i]=t[i]);c.originalType=e,c.mdxType="string"==typeof e?e:o,l[1]=c;for(var f=2;f<a;f++)l[f]=n[f];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},2785:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return c},contentTitle:function(){return i},metadata:function(){return f},toc:function(){return p},Highlight:function(){return s},default:function(){return u}});var r=n(7462),o=n(3366),a=(n(7294),n(3905)),l=["components"],c={tags:["\u8bbe\u8ba1","\u7ebf\u6bb5\u6811","\u6709\u5e8f\u96c6\u5408","\u5251\u6307offer\u4e13\u9879\u7248"],id:"leetcode_OfferII058",title:"\ud83d\udfe1 \u5251\u6307 Offer II 058. \u65e5\u7a0b\u8868",ques_id:"OfferII058",platform:"leetcode",online_link:"https://leetcode-cn.com/problems/fi9suh/",online_name:"\u65e5\u7a0b\u8868",level:"m"},i=void 0,f={unversionedId:"\u5251\u6307offer\u4e13\u9879\u7248/leetcode_OfferII058",id:"\u5251\u6307offer\u4e13\u9879\u7248/leetcode_OfferII058",isDocsHomePage:!1,title:"\ud83d\udfe1 \u5251\u6307 Offer II 058. \u65e5\u7a0b\u8868",description:"<span",source:"@site/docs/\u5251\u6307offer\u4e13\u9879\u7248/leetcode_OfferII058.mdx",sourceDirName:"\u5251\u6307offer\u4e13\u9879\u7248",slug:"/\u5251\u6307offer\u4e13\u9879\u7248/leetcode_OfferII058",permalink:"/docs/\u5251\u6307offer\u4e13\u9879\u7248/leetcode_OfferII058",tags:[{label:"\u8bbe\u8ba1",permalink:"/docs/tags/\u8bbe\u8ba1"},{label:"\u7ebf\u6bb5\u6811",permalink:"/docs/tags/\u7ebf\u6bb5\u6811"},{label:"\u6709\u5e8f\u96c6\u5408",permalink:"/docs/tags/\u6709\u5e8f\u96c6\u5408"},{label:"\u5251\u6307offer\u4e13\u9879\u7248",permalink:"/docs/tags/\u5251\u6307offer\u4e13\u9879\u7248"}],version:"current",frontMatter:{tags:["\u8bbe\u8ba1","\u7ebf\u6bb5\u6811","\u6709\u5e8f\u96c6\u5408","\u5251\u6307offer\u4e13\u9879\u7248"],id:"leetcode_OfferII058",title:"\ud83d\udfe1 \u5251\u6307 Offer II 058. \u65e5\u7a0b\u8868",ques_id:"OfferII058",platform:"leetcode",online_link:"https://leetcode-cn.com/problems/fi9suh/",online_name:"\u65e5\u7a0b\u8868",level:"m"},sidebar:"bffer",previous:{title:"\ud83d\udfe1 \u5251\u6307 Offer II 057. \u503c\u548c\u4e0b\u6807\u4e4b\u5dee\u90fd\u5728\u7ed9\u5b9a\u7684\u8303\u56f4\u5185",permalink:"/docs/\u5251\u6307offer\u4e13\u9879\u7248/leetcode_OfferII057"},next:{title:"\ud83d\udfe2 \u5251\u6307 Offer II 059. \u6570\u636e\u6d41\u7684\u7b2c K \u5927\u6570\u503c",permalink:"/docs/\u5251\u6307offer\u4e13\u9879\u7248/leetcode_OfferII059"}},p=[{value:"\u9898\u89e31",id:"\u9898\u89e31",children:[]}],s=function(e){var t=e.children,n=e.color;return(0,a.kt)("span",{style:{backgroundColor:n,borderRadius:"2px",color:"#fff",padding:"0.2rem"}},t)},d={toc:p,Highlight:s};function u(e){var t=e.components,n=(0,o.Z)(e,l);return(0,a.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,a.kt)("div",{parentName:"div",className:"admonition-heading"},(0,a.kt)("h5",{parentName:"div"},(0,a.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,a.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,a.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"LeetCode \u63d0\u793a")),(0,a.kt)("div",{parentName:"div",className:"admonition-content"},(0,a.kt)("p",{parentName:"div"},"\u9898\u76ee\u96be\u5ea6 ",(0,a.kt)(s,{color:"#ffc01e",mdxType:"Highlight"},"\u4e2d\u7b49")),(0,a.kt)("p",{parentName:"div"},"\u539f\u9898\u94fe\u63a5 ",(0,a.kt)("a",{parentName:"p",href:"https://leetcode-cn.com/problems/fi9suh/"},"\ud83d\udd17 leetcode")))),(0,a.kt)("h2",{id:"\u9898\u89e31"},"\u9898\u89e31"),(0,a.kt)("p",null,"Java treemap & treeset \u771f\u662f\u597d\u7528\u554a"),(0,a.kt)("p",null,"treemap.floorKey treemap.ceilingKey\ntreeset.floor treeset.ceiling"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-java"},"class MyCalendar {\n\n    private TreeMap<Integer, Integer> cal;\n\n    public MyCalendar() {\n        this.cal = new TreeMap<>();\n    }\n    \n    public boolean book(int start, int end) {\n        Integer prev = cal.floorKey(start);\n        Integer next = cal.ceilingKey(start);\n\n        if ((prev == null || cal.get(prev) <= start) && (next == null || next >= end)) {\n            cal.put(start, end);\n            return true;\n        }\n        return false;\n    }\n}\n\n/**\n * Your MyCalendar object will be instantiated and called as such:\n * MyCalendar obj = new MyCalendar();\n * boolean param_1 = obj.book(start,end);\n */\n")))}u.isMDXComponent=!0}}]);