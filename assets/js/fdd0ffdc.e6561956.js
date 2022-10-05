"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[8449],{3905:function(e,n,t){t.d(n,{Zo:function(){return p},kt:function(){return s}});var r=t(7294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function f(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var l=r.createContext({}),c=function(e){var n=r.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):f(f({},n),e)),t},p=function(e){var n=c(e.components);return r.createElement(l.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},d=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),d=c(t),s=o,m=d["".concat(l,".").concat(s)]||d[s]||u[s]||a;return t?r.createElement(m,f(f({ref:n},p),{},{components:t})):r.createElement(m,f({ref:n},p))}));function s(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var a=t.length,f=new Array(a);f[0]=d;var i={};for(var l in n)hasOwnProperty.call(n,l)&&(i[l]=n[l]);i.originalType=e,i.mdxType="string"==typeof e?e:o,f[1]=i;for(var c=2;c<a;c++)f[c]=t[c];return r.createElement.apply(null,f)}return r.createElement.apply(null,t)}d.displayName="MDXCreateElement"},249:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return i},contentTitle:function(){return l},metadata:function(){return c},toc:function(){return p},Highlight:function(){return u},default:function(){return s}});var r=t(7462),o=t(3366),a=(t(7294),t(3905)),f=["components"],i={tags:["\u5251\u6307offer","\u4f4d\u8fd0\u7b97"],id:"leetcode_offer65",title:"\ud83d\udfe1 \u5251\u6307 Offer 65. \u4e0d\u7528\u52a0\u51cf\u4e58\u9664\u505a\u52a0\u6cd5",ques_id:"offer65",platform:"leetcode",online_link:"https://leetcode-cn.com/problems/bu-yong-jia-jian-cheng-chu-zuo-jia-fa-lcof/",online_name:"\u5251\u6307 Offer 65. \u4e0d\u7528\u52a0\u51cf\u4e58\u9664\u505a\u52a0\u6cd5",level:"m"},l=void 0,c={unversionedId:"\u5251\u6307offer/leetcode_offer65",id:"\u5251\u6307offer/leetcode_offer65",isDocsHomePage:!1,title:"\ud83d\udfe1 \u5251\u6307 Offer 65. \u4e0d\u7528\u52a0\u51cf\u4e58\u9664\u505a\u52a0\u6cd5",description:"<span",source:"@site/docs/\u5251\u6307offer/leetcode_offer65.mdx",sourceDirName:"\u5251\u6307offer",slug:"/\u5251\u6307offer/leetcode_offer65",permalink:"/docs/\u5251\u6307offer/leetcode_offer65",tags:[{label:"\u5251\u6307offer",permalink:"/docs/tags/\u5251\u6307offer"},{label:"\u4f4d\u8fd0\u7b97",permalink:"/docs/tags/\u4f4d\u8fd0\u7b97"}],version:"current",frontMatter:{tags:["\u5251\u6307offer","\u4f4d\u8fd0\u7b97"],id:"leetcode_offer65",title:"\ud83d\udfe1 \u5251\u6307 Offer 65. \u4e0d\u7528\u52a0\u51cf\u4e58\u9664\u505a\u52a0\u6cd5",ques_id:"offer65",platform:"leetcode",online_link:"https://leetcode-cn.com/problems/bu-yong-jia-jian-cheng-chu-zuo-jia-fa-lcof/",online_name:"\u5251\u6307 Offer 65. \u4e0d\u7528\u52a0\u51cf\u4e58\u9664\u505a\u52a0\u6cd5",level:"m"},sidebar:"offer",previous:{title:"\ud83d\udfe2 \u5251\u6307 Offer 64. \u6c421+2+\u2026+n",permalink:"/docs/\u5251\u6307offer/leetcode_offer64"},next:{title:"\ud83d\udfe1 \u5251\u6307 Offer 66. \u6784\u5efa\u4e58\u79ef\u6570\u7ec4",permalink:"/docs/\u5251\u6307offer/leetcode_offer66"}},p=[{value:"\u89e3\u6790 1.md",id:"\u89e3\u6790-1md",children:[]},{value:"\u9898\u89e3 1.py",id:"\u9898\u89e3-1py",children:[]},{value:"\u9898\u89e3 2.js",id:"\u9898\u89e3-2js",children:[]}],u=function(e){var n=e.children,t=e.color;return(0,a.kt)("span",{style:{backgroundColor:t,borderRadius:"2px",color:"#fff",padding:"0.2rem"}},n)},d={toc:p,Highlight:u};function s(e){var n=e.components,t=(0,o.Z)(e,f);return(0,a.kt)("wrapper",(0,r.Z)({},d,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,a.kt)("div",{parentName:"div",className:"admonition-heading"},(0,a.kt)("h5",{parentName:"div"},(0,a.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,a.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,a.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"LeetCode \u63d0\u793a")),(0,a.kt)("div",{parentName:"div",className:"admonition-content"},(0,a.kt)("p",{parentName:"div"},"\u9898\u76ee\u96be\u5ea6 ",(0,a.kt)(u,{color:"#ffc01e",mdxType:"Highlight"},"\u4e2d\u7b49")),(0,a.kt)("p",{parentName:"div"},"\u539f\u9898\u94fe\u63a5 ",(0,a.kt)("a",{parentName:"p",href:"https://leetcode-cn.com/problems/bu-yong-jia-jian-cheng-chu-zuo-jia-fa-lcof/"},"\ud83d\udd17 leetcode")))),(0,a.kt)("h2",{id:"\u89e3\u6790-1md"},"\u89e3\u6790 1.md"),(0,a.kt)("p",null," Python \u8d1f\u6570\u7684\u5b58\u50a8\uff1a"),(0,a.kt)("p",null,"Python\uff0cJava \u7b49\u8bed\u8a00\u4e2d\u7684\u6570\u5b57\u90fd\u662f\u4ee5 \u8865\u7801 \u5f62\u5f0f\u5b58\u50a8\u7684\u3002\u4f46 Python \u6ca1\u6709 int , long \u7b49\u4e0d\u540c\u957f\u5ea6\u53d8\u91cf\uff0c\u5373\u5728\u7f16\u7a0b\u65f6\u65e0\u53d8\u91cf\u4f4d\u6570\u7684\u6982\u5ff5\u3002"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u83b7\u53d6\u8d1f\u6570\u7684\u8865\u7801\uff1a \u9700\u8981\u5c06\u6570\u5b57\u4e0e\u5341\u516d\u8fdb\u5236\u6570 ",(0,a.kt)("inlineCode",{parentName:"li"},"0xffffffff")," \u76f8\u4e0e\u3002\u53ef\u7406\u89e3\u4e3a\u820d\u53bb\u6b64\u6570\u5b57 32 \u4f4d\u4ee5\u4e0a\u7684\u6570\u5b57\uff08\u5c06 32 \u4f4d\u4ee5\u4e0a\u90fd\u53d8\u4e3a ",(0,a.kt)("inlineCode",{parentName:"li"},"00")," \uff09\uff0c\u4ece\u65e0\u9650\u957f\u5ea6\u53d8\u4e3a\u4e00\u4e2a 32 \u4f4d\u6574\u6570\u3002"),(0,a.kt)("li",{parentName:"ul"},"\u8fd4\u56de\u524d\u6570\u5b57\u8fd8\u539f\uff1a \u82e5\u8865\u7801 aa \u4e3a\u8d1f\u6570\uff08 ",(0,a.kt)("inlineCode",{parentName:"li"},"0x7fffffff")," \u662f\u6700\u5927\u7684\u6b63\u6570\u7684\u8865\u7801 \uff09\uff0c\u9700\u6267\u884c ",(0,a.kt)("inlineCode",{parentName:"li"},"~(a ^ x)")," \u64cd\u4f5c\uff0c\u5c06\u8865\u7801\u8fd8\u539f\u81f3 Python \u7684\u5b58\u50a8\u683c\u5f0f\u3002 ",(0,a.kt)("inlineCode",{parentName:"li"},"a ^ x")," \u8fd0\u7b97\u5c06 1 \u81f3 32 \u4f4d\u6309\u4f4d\u53d6\u53cd\uff1b ",(0,a.kt)("inlineCode",{parentName:"li"},"~")," \u8fd0\u7b97\u662f\u5c06\u6574\u4e2a\u6570\u5b57\u53d6\u53cd\uff1b\u56e0\u6b64\uff0c ",(0,a.kt)("inlineCode",{parentName:"li"},"~(a ^ x)")," \u662f\u5c06 32 \u4f4d\u4ee5\u4e0a\u7684\u4f4d\u53d6\u53cd\uff0c1 \u81f3 32 \u4f4d\u4e0d\u53d8\u3002")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-py"},"print(hex(1)) # = 0x1 \u8865\u7801\nprint(hex(-1)) # = -0x1 \u8d1f\u53f7 + \u539f\u7801 \uff08 Python \u7279\u8272\uff0cJava \u4f1a\u76f4\u63a5\u8f93\u51fa\u8865\u7801\uff09\n\nprint(hex(1 & 0xffffffff)) # = 0x1 \u6b63\u6570\u8865\u7801\nprint(hex(-1 & 0xffffffff)) # = 0xffffffff \u8d1f\u6570\u8865\u7801\n\nprint(-1 & 0xffffffff) # = 4294967295 \uff08 Python \u5c06\u5176\u8ba4\u4e3a\u6b63\u6570\uff09\n")),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"\u53c2\u8003",(0,a.kt)("a",{parentName:"p",href:"https://leetcode-cn.com/problems/bu-yong-jia-jian-cheng-chu-zuo-jia-fa-lcof/solution/mian-shi-ti-65-bu-yong-jia-jian-cheng-chu-zuo-ji-7/"},"LeetCode"))),(0,a.kt)("h2",{id:"\u9898\u89e3-1py"},"\u9898\u89e3 1.py"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-py"},"class Solution:\n    def add(self, a: int, b: int) -> int:\n        x = 0xffffffff\n        a, b = a & x, b & x\n        while b:\n            a, b = a^b & x, (a&b) << 1\n        return a if a <= 0x7fffffff else ~(a^x)\n")),(0,a.kt)("h2",{id:"\u9898\u89e3-2js"},"\u9898\u89e3 2.js"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"/**\n * @param {number} a\n * @param {number} b\n * @return {number}\n */\n var add = function(a, b) {\n  let c = 0;\n\n  while (b) {\n      c = (a & b) << 1;\n      a ^= b;\n      b = c;\n  }\n\n  return a;\n};\n")))}s.isMDXComponent=!0}}]);