"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[5602],{3905:function(e,t,r){r.d(t,{Zo:function(){return s},kt:function(){return d}});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function f(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var c=n.createContext({}),l=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},s=function(e){var t=l(e.components);return n.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,i=e.originalType,c=e.parentName,s=f(e,["components","mdxType","originalType","parentName"]),p=l(r),d=o,m=p["".concat(c,".").concat(d)]||p[d]||u[d]||i;return r?n.createElement(m,a(a({ref:t},s),{},{components:r})):n.createElement(m,a({ref:t},s))}));function d(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=r.length,a=new Array(i);a[0]=p;var f={};for(var c in t)hasOwnProperty.call(t,c)&&(f[c]=t[c]);f.originalType=e,f.mdxType="string"==typeof e?e:o,a[1]=f;for(var l=2;l<i;l++)a[l]=r[l];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}p.displayName="MDXCreateElement"},5925:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return f},contentTitle:function(){return c},metadata:function(){return l},toc:function(){return s},Highlight:function(){return u},default:function(){return d}});var n=r(7462),o=r(3366),i=(r(7294),r(3905)),a=["components"],f={tags:["\u5251\u6307offer","\u5206\u6cbb\u6cd5"],id:"leetcode_offer11",title:"\ud83d\udd34 \u5251\u6307 Offer 11. \u65cb\u8f6c\u6570\u7ec4\u7684\u6700\u5c0f\u6570\u5b57",ques_id:"offer11",platform:"leetcode",online_link:"https://leetcode-cn.com/problems/xuan-zhuan-shu-zu-de-zui-xiao-shu-zi-lcof/",online_name:"\u5251\u6307 Offer 11. \u65cb\u8f6c\u6570\u7ec4\u7684\u6700\u5c0f\u6570\u5b57",level:"h"},c=void 0,l={unversionedId:"\u5251\u6307offer/leetcode_offer11",id:"\u5251\u6307offer/leetcode_offer11",isDocsHomePage:!1,title:"\ud83d\udd34 \u5251\u6307 Offer 11. \u65cb\u8f6c\u6570\u7ec4\u7684\u6700\u5c0f\u6570\u5b57",description:"<span",source:"@site/docs\\\u5251\u6307offer\\leetcode_offer11.mdx",sourceDirName:"\u5251\u6307offer",slug:"/\u5251\u6307offer/leetcode_offer11",permalink:"/trashbin/docs/\u5251\u6307offer/leetcode_offer11",tags:[{label:"\u5251\u6307offer",permalink:"/trashbin/docs/tags/\u5251\u6307offer"},{label:"\u5206\u6cbb\u6cd5",permalink:"/trashbin/docs/tags/\u5206\u6cbb\u6cd5"}],version:"current",frontMatter:{tags:["\u5251\u6307offer","\u5206\u6cbb\u6cd5"],id:"leetcode_offer11",title:"\ud83d\udd34 \u5251\u6307 Offer 11. \u65cb\u8f6c\u6570\u7ec4\u7684\u6700\u5c0f\u6570\u5b57",ques_id:"offer11",platform:"leetcode",online_link:"https://leetcode-cn.com/problems/xuan-zhuan-shu-zu-de-zui-xiao-shu-zi-lcof/",online_name:"\u5251\u6307 Offer 11. \u65cb\u8f6c\u6570\u7ec4\u7684\u6700\u5c0f\u6570\u5b57",level:"h"},sidebar:"offer",previous:{title:"\ud83d\udfe2 \u5251\u6307 Offer 10- II. \u9752\u86d9\u8df3\u53f0\u9636\u95ee\u9898",permalink:"/trashbin/docs/\u5251\u6307offer/leetcode_offer10v2"},next:{title:"\ud83d\udfe1 \u5251\u6307 Offer 12. \u77e9\u9635\u4e2d\u7684\u8def\u5f84",permalink:"/trashbin/docs/\u5251\u6307offer/leetcode_offer12"}},s=[{value:"\u9898\u89e3 1.\u6284\u7684.py",id:"\u9898\u89e3-1\u6284\u7684py",children:[]}],u=function(e){var t=e.children,r=e.color;return(0,i.kt)("span",{style:{backgroundColor:r,borderRadius:"2px",color:"#fff",padding:"0.2rem"}},t)},p={toc:s,Highlight:u};function d(e){var t=e.components,r=(0,o.Z)(e,a);return(0,i.kt)("wrapper",(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"LeetCode \u63d0\u793a")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"\u9898\u76ee\u96be\u5ea6 ",(0,i.kt)(u,{color:"#ff375f",mdxType:"Highlight"},"\u56f0\u96be")),(0,i.kt)("p",{parentName:"div"},"\u539f\u9898\u94fe\u63a5 ",(0,i.kt)("a",{parentName:"p",href:"https://leetcode-cn.com/problems/xuan-zhuan-shu-zu-de-zui-xiao-shu-zi-lcof/"},"\ud83d\udd17 leetcode")))),(0,i.kt)("h2",{id:"\u9898\u89e3-1\u6284\u7684py"},"\u9898\u89e3 1.\u6284\u7684.py"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-py"},"class Solution:\n    def minArray(self, numbers: List[int]) -> int:\n        left, right = 0, len(numbers)-1\n        while left <= right:\n            mid = (left+right)//2\n            if numbers[mid] < numbers[right]:\n                right = mid\n            elif numbers[mid] > numbers[right]:\n                left = mid+1\n            else:\n                right -= 1\n        return numbers[left]\n")))}d.isMDXComponent=!0}}]);