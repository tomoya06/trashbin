"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[5161],{3905:function(e,t,n){n.d(t,{Zo:function(){return s},kt:function(){return d}});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=r.createContext({}),f=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},s=function(e){var t=f(e.components);return r.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),u=f(n),d=o,m=u["".concat(l,".").concat(d)]||u[d]||p[d]||a;return n?r.createElement(m,i(i({ref:t},s),{},{components:n})):r.createElement(m,i({ref:t},s))}));function d(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=u;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:o,i[1]=c;for(var f=2;f<a;f++)i[f]=n[f];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},7586:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return c},contentTitle:function(){return l},metadata:function(){return f},toc:function(){return s},Highlight:function(){return p},default:function(){return d}});var r=n(7462),o=n(3366),a=(n(7294),n(3905)),i=["components"],c={tags:["\u6570\u7ec4","\u6ed1\u52a8\u7a97\u53e3","\u5251\u6307offer\u4e13\u9879\u7248"],id:"leetcode_OfferII009",title:"\ud83d\udfe1 \u5251\u6307 Offer II 009. \u4e58\u79ef\u5c0f\u4e8e K \u7684\u5b50\u6570\u7ec4",ques_id:"OfferII009",platform:"leetcode",online_link:"https://leetcode-cn.com/problems/ZVAVXX/",online_name:"\u4e58\u79ef\u5c0f\u4e8e K \u7684\u5b50\u6570\u7ec4",level:"m"},l=void 0,f={unversionedId:"\u5251\u6307offer\u4e13\u9879\u7248/leetcode_OfferII009",id:"\u5251\u6307offer\u4e13\u9879\u7248/leetcode_OfferII009",isDocsHomePage:!1,title:"\ud83d\udfe1 \u5251\u6307 Offer II 009. \u4e58\u79ef\u5c0f\u4e8e K \u7684\u5b50\u6570\u7ec4",description:"<span",source:"@site/docs/\u5251\u6307offer\u4e13\u9879\u7248/leetcode_OfferII009.mdx",sourceDirName:"\u5251\u6307offer\u4e13\u9879\u7248",slug:"/\u5251\u6307offer\u4e13\u9879\u7248/leetcode_OfferII009",permalink:"/trashbin/docs/\u5251\u6307offer\u4e13\u9879\u7248/leetcode_OfferII009",tags:[{label:"\u6570\u7ec4",permalink:"/trashbin/docs/tags/\u6570\u7ec4"},{label:"\u6ed1\u52a8\u7a97\u53e3",permalink:"/trashbin/docs/tags/\u6ed1\u52a8\u7a97\u53e3"},{label:"\u5251\u6307offer\u4e13\u9879\u7248",permalink:"/trashbin/docs/tags/\u5251\u6307offer\u4e13\u9879\u7248"}],version:"current",frontMatter:{tags:["\u6570\u7ec4","\u6ed1\u52a8\u7a97\u53e3","\u5251\u6307offer\u4e13\u9879\u7248"],id:"leetcode_OfferII009",title:"\ud83d\udfe1 \u5251\u6307 Offer II 009. \u4e58\u79ef\u5c0f\u4e8e K \u7684\u5b50\u6570\u7ec4",ques_id:"OfferII009",platform:"leetcode",online_link:"https://leetcode-cn.com/problems/ZVAVXX/",online_name:"\u4e58\u79ef\u5c0f\u4e8e K \u7684\u5b50\u6570\u7ec4",level:"m"},sidebar:"bffer",previous:{title:"\ud83d\udfe1 \u5251\u6307 Offer II 008. \u548c\u5927\u4e8e\u7b49\u4e8e target \u7684\u6700\u77ed\u5b50\u6570\u7ec4",permalink:"/trashbin/docs/\u5251\u6307offer\u4e13\u9879\u7248/leetcode_OfferII008"},next:{title:"\ud83d\udfe1 \u5251\u6307 Offer II 010. \u548c\u4e3a k \u7684\u5b50\u6570\u7ec4",permalink:"/trashbin/docs/\u5251\u6307offer\u4e13\u9879\u7248/leetcode_OfferII010"}},s=[{value:"\u9898\u89e31",id:"\u9898\u89e31",children:[]}],p=function(e){var t=e.children,n=e.color;return(0,a.kt)("span",{style:{backgroundColor:n,borderRadius:"2px",color:"#fff",padding:"0.2rem"}},t)},u={toc:s,Highlight:p};function d(e){var t=e.components,n=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,a.kt)("div",{parentName:"div",className:"admonition-heading"},(0,a.kt)("h5",{parentName:"div"},(0,a.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,a.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,a.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"LeetCode \u63d0\u793a")),(0,a.kt)("div",{parentName:"div",className:"admonition-content"},(0,a.kt)("p",{parentName:"div"},"\u9898\u76ee\u96be\u5ea6 ",(0,a.kt)(p,{color:"#ffc01e",mdxType:"Highlight"},"\u4e2d\u7b49")),(0,a.kt)("p",{parentName:"div"},"\u539f\u9898\u94fe\u63a5 ",(0,a.kt)("a",{parentName:"p",href:"https://leetcode-cn.com/problems/ZVAVXX/"},"\ud83d\udd17 leetcode")))),(0,a.kt)("h2",{id:"\u9898\u89e31"},"\u9898\u89e31"),(0,a.kt)("p",null,"\u6ed1\u52a8\u7a97\u53e3\u3002\u5077\u7784\u4e86",(0,a.kt)("a",{parentName:"p",href:"https://leetcode-cn.com/problems/subarray-product-less-than-k/solution/cheng-ji-xiao-yu-kde-zi-shu-zu-by-leetcode/"},"\u5b98\u65b9\u9898\u89e3")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-java"},"class Solution {\n    public int numSubarrayProductLessThanK(int[] nums, int k) {\n        int left = 0, right = 0;\n        int res = 1;\n        int ans = 0;\n        while (right<nums.length) {\n            res *= nums[right];\n            while (res >= k && left <= right) {\n                res /= nums[left];\n                left += 1;\n            }\n            if (left <= right) {\n                ans += right-left+1;\n            }\n            right += 1;\n        }\n        return ans;\n    }\n}\n")))}d.isMDXComponent=!0}}]);