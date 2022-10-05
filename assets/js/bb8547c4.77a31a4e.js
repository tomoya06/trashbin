"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[9221],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return u}});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=r.createContext({}),f=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=f(e.components);return r.createElement(c.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),d=f(n),u=o,m=d["".concat(c,".").concat(u)]||d[u]||s[u]||a;return n?r.createElement(m,i(i({ref:t},p),{},{components:n})):r.createElement(m,i({ref:t},p))}));function u(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=d;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var f=2;f<a;f++)i[f]=n[f];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},4533:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return c},metadata:function(){return f},toc:function(){return p},Highlight:function(){return s},default:function(){return u}});var r=n(7462),o=n(3366),a=(n(7294),n(3905)),i=["components"],l={tags:["\u54c8\u5e0c\u8868","\u5b57\u7b26\u4e32","\u6ed1\u52a8\u7a97\u53e3","\u5251\u6307offer\u4e13\u9879\u7248"],id:"leetcode_OfferII015",title:"\ud83d\udfe1 \u5251\u6307 Offer II 015. \u5b57\u7b26\u4e32\u4e2d\u7684\u6240\u6709\u53d8\u4f4d\u8bcd",ques_id:"OfferII015",platform:"leetcode",online_link:"https://leetcode-cn.com/problems/VabMRr/",online_name:"\u5b57\u7b26\u4e32\u4e2d\u7684\u6240\u6709\u53d8\u4f4d\u8bcd",level:"m"},c=void 0,f={unversionedId:"\u5251\u6307offer\u4e13\u9879\u7248/leetcode_OfferII015",id:"\u5251\u6307offer\u4e13\u9879\u7248/leetcode_OfferII015",isDocsHomePage:!1,title:"\ud83d\udfe1 \u5251\u6307 Offer II 015. \u5b57\u7b26\u4e32\u4e2d\u7684\u6240\u6709\u53d8\u4f4d\u8bcd",description:"<span",source:"@site/docs/\u5251\u6307offer\u4e13\u9879\u7248/leetcode_OfferII015.mdx",sourceDirName:"\u5251\u6307offer\u4e13\u9879\u7248",slug:"/\u5251\u6307offer\u4e13\u9879\u7248/leetcode_OfferII015",permalink:"/docs/\u5251\u6307offer\u4e13\u9879\u7248/leetcode_OfferII015",tags:[{label:"\u54c8\u5e0c\u8868",permalink:"/docs/tags/\u54c8\u5e0c\u8868"},{label:"\u5b57\u7b26\u4e32",permalink:"/docs/tags/\u5b57\u7b26\u4e32"},{label:"\u6ed1\u52a8\u7a97\u53e3",permalink:"/docs/tags/\u6ed1\u52a8\u7a97\u53e3"},{label:"\u5251\u6307offer\u4e13\u9879\u7248",permalink:"/docs/tags/\u5251\u6307offer\u4e13\u9879\u7248"}],version:"current",frontMatter:{tags:["\u54c8\u5e0c\u8868","\u5b57\u7b26\u4e32","\u6ed1\u52a8\u7a97\u53e3","\u5251\u6307offer\u4e13\u9879\u7248"],id:"leetcode_OfferII015",title:"\ud83d\udfe1 \u5251\u6307 Offer II 015. \u5b57\u7b26\u4e32\u4e2d\u7684\u6240\u6709\u53d8\u4f4d\u8bcd",ques_id:"OfferII015",platform:"leetcode",online_link:"https://leetcode-cn.com/problems/VabMRr/",online_name:"\u5b57\u7b26\u4e32\u4e2d\u7684\u6240\u6709\u53d8\u4f4d\u8bcd",level:"m"},sidebar:"bffer",previous:{title:"\ud83d\udfe1 \u5251\u6307 Offer II 014. \u5b57\u7b26\u4e32\u4e2d\u7684\u53d8\u4f4d\u8bcd",permalink:"/docs/\u5251\u6307offer\u4e13\u9879\u7248/leetcode_OfferII014"},next:{title:"\ud83d\udfe1 \u5251\u6307 Offer II 016. \u4e0d\u542b\u91cd\u590d\u5b57\u7b26\u7684\u6700\u957f\u5b50\u5b57\u7b26\u4e32",permalink:"/docs/\u5251\u6307offer\u4e13\u9879\u7248/leetcode_OfferII016"}},p=[{value:"\u9898\u89e31",id:"\u9898\u89e31",children:[]}],s=function(e){var t=e.children,n=e.color;return(0,a.kt)("span",{style:{backgroundColor:n,borderRadius:"2px",color:"#fff",padding:"0.2rem"}},t)},d={toc:p,Highlight:s};function u(e){var t=e.components,n=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,a.kt)("div",{parentName:"div",className:"admonition-heading"},(0,a.kt)("h5",{parentName:"div"},(0,a.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,a.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,a.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"LeetCode \u63d0\u793a")),(0,a.kt)("div",{parentName:"div",className:"admonition-content"},(0,a.kt)("p",{parentName:"div"},"\u9898\u76ee\u96be\u5ea6 ",(0,a.kt)(s,{color:"#ffc01e",mdxType:"Highlight"},"\u4e2d\u7b49")),(0,a.kt)("p",{parentName:"div"},"\u539f\u9898\u94fe\u63a5 ",(0,a.kt)("a",{parentName:"p",href:"https://leetcode-cn.com/problems/VabMRr/"},"\ud83d\udd17 leetcode")))),(0,a.kt)("h2",{id:"\u9898\u89e31"},"\u9898\u89e31"),(0,a.kt)("p",null,"\u601d\u8def\u662f\u6bd4\u8f83diff\uff0c\u7528\u6ed1\u52a8\u7a97\u53e3\u6765\u8bb0\u5f55\u7a97\u53e3\u5185\u5355\u8bcd\u7684diff\uff0c\u79fb\u52a8\u7a97\u53e3\uff0c\u7ef4\u62a4diff\uff0cdiff=0\u65f6\u8bf4\u660e\u627e\u5230\u4e86\u3002"),(0,a.kt)("p",null,"\u4ece\u8bc4\u8bba\u533a\u627e\u5230\u4e00\u4e2a\u53d8\u957f\u7a97\u53e3\u7684\u5b9e\u73b0\u65b9\u5f0f\uff0c\u6bd4\u5b98\u65b9\u9898\u89e3\u7b80\u7ec3\uff0c\u4f46\u7a0d\u5fae\u4e0d\u90a3\u4e48\u597d\u7406\u89e3\u3002"),(0,a.kt)("p",null,"\u7a97\u53e3\u6ed1\u52a8\u7684\u5173\u952e\u5728\u4e8e\uff0c"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"\u5982\u679c\u7a97\u53e3\u5185\u51fa\u73b0\u4e86p\u91cc\u4e0d\u5b58\u5728\u7684\u5b57\u6bcd\uff0c\u6b64\u65f6lo\u4f1a\u524d\u8fdb"),(0,a.kt)("li",{parentName:"ol"},"\u8fd9\u6837\u7684\u8bddhi\u4e5f\u4f1a\u8ddf\u7740\u4e0a\u6765\uff0c\u4e14\u7a97\u53e3\u5bbd\u5ea6\u4e0d\u591f\u65f6\u4e0d\u4f1a\u5f71\u54cd\u7ed3\u679c"),(0,a.kt)("li",{parentName:"ol"},"\u673a\u52361\u540c\u65f6\u4fdd\u8bc1\u4e86\u6bcf\u6b21\u6d88\u8017hi\u80af\u5b9a\u662fp\u91cc\u5b58\u5728\u7684\u5b57\u6bcd\uff0c\u6240\u4ee5\u53ea\u8981\u53ef\u4ee5\u6d88\u8017\u3001\u4e14\u7a97\u53e3\u5bbd\u5ea6\u8db3\u591f\u4e86\uff0c\u90a3\u80af\u5b9a\u5c31\u627e\u5230\u4e86\u4e00\u4e2a\u7ed3\u679c")),(0,a.kt)("p",null,"\u592a\u5999\u4e86\uff0c\u8ba9\u6211\u80af\u5b9a\u60f3\u4e0d\u51fa\u6765\uff0c\u8fd8\u662f\u7528\u5b98\u65b9\u9898\u89e3\u7684\u4f20\u7edf\u5b9a\u957f\u7a97\u53e3\u5c31\u597d\u4e86\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-java"},"class Solution {\n    public List<Integer> findAnagrams(String s, String p) {\n        int[] cnt = new int[128];\n\n        for (char c : p.toCharArray()) {\n            cnt[c] += 1;\n        }\n\n        List<Integer> res = new ArrayList<>();\n\n        int lo=0, hi=0;\n\n        while (hi < s.length()) {\n            if (cnt[s.charAt(hi)] > 0) {\n                cnt[s.charAt(hi++)] -= 1;\n\n                if (hi-lo == p.length()) {\n                    res.add(lo);\n                }\n            } else {\n                cnt[s.charAt(lo++)] += 1;\n            }\n        }\n\n        return res;\n    }\n}\n")))}u.isMDXComponent=!0}}]);