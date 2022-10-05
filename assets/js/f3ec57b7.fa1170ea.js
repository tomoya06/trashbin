"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[9375],{3905:function(e,n,t){t.d(n,{Zo:function(){return s},kt:function(){return d}});var r=t(7294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function c(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var f=r.createContext({}),l=function(e){var n=r.useContext(f),t=n;return e&&(t="function"==typeof e?e(n):a(a({},n),e)),t},s=function(e){var n=l(e.components);return r.createElement(f.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},u=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,i=e.originalType,f=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),u=l(t),d=o,m=u["".concat(f,".").concat(d)]||u[d]||p[d]||i;return t?r.createElement(m,a(a({ref:n},s),{},{components:t})):r.createElement(m,a({ref:n},s))}));function d(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var i=t.length,a=new Array(i);a[0]=u;var c={};for(var f in n)hasOwnProperty.call(n,f)&&(c[f]=n[f]);c.originalType=e,c.mdxType="string"==typeof e?e:o,a[1]=c;for(var l=2;l<i;l++)a[l]=t[l];return r.createElement.apply(null,a)}return r.createElement.apply(null,t)}u.displayName="MDXCreateElement"},6943:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return c},contentTitle:function(){return f},metadata:function(){return l},toc:function(){return s},Highlight:function(){return p},default:function(){return d}});var r=t(7462),o=t(3366),i=(t(7294),t(3905)),a=["components"],c={tags:["\u5251\u6307offer","\u52a8\u6001\u89c4\u5212"],id:"leetcode_offer46",title:"\ud83d\udfe1 \u5251\u6307 Offer 46. \u628a\u6570\u5b57\u7ffb\u8bd1\u6210\u5b57\u7b26\u4e32",ques_id:"offer46",platform:"leetcode",online_link:"https://leetcode-cn.com/problems/ba-shu-zi-fan-yi-cheng-zi-fu-chuan-lcof/",online_name:"\u5251\u6307 Offer 46. \u628a\u6570\u5b57\u7ffb\u8bd1\u6210\u5b57\u7b26\u4e32",level:"m"},f=void 0,l={unversionedId:"\u5251\u6307offer/leetcode_offer46",id:"\u5251\u6307offer/leetcode_offer46",isDocsHomePage:!1,title:"\ud83d\udfe1 \u5251\u6307 Offer 46. \u628a\u6570\u5b57\u7ffb\u8bd1\u6210\u5b57\u7b26\u4e32",description:"<span",source:"@site/docs/\u5251\u6307offer/leetcode_offer46.mdx",sourceDirName:"\u5251\u6307offer",slug:"/\u5251\u6307offer/leetcode_offer46",permalink:"/trashbin/docs/\u5251\u6307offer/leetcode_offer46",tags:[{label:"\u5251\u6307offer",permalink:"/trashbin/docs/tags/\u5251\u6307offer"},{label:"\u52a8\u6001\u89c4\u5212",permalink:"/trashbin/docs/tags/\u52a8\u6001\u89c4\u5212"}],version:"current",frontMatter:{tags:["\u5251\u6307offer","\u52a8\u6001\u89c4\u5212"],id:"leetcode_offer46",title:"\ud83d\udfe1 \u5251\u6307 Offer 46. \u628a\u6570\u5b57\u7ffb\u8bd1\u6210\u5b57\u7b26\u4e32",ques_id:"offer46",platform:"leetcode",online_link:"https://leetcode-cn.com/problems/ba-shu-zi-fan-yi-cheng-zi-fu-chuan-lcof/",online_name:"\u5251\u6307 Offer 46. \u628a\u6570\u5b57\u7ffb\u8bd1\u6210\u5b57\u7b26\u4e32",level:"m"},sidebar:"offer",previous:{title:"\ud83d\udfe2 \u5251\u6307 Offer 45. \u628a\u6570\u7ec4\u6392\u6210\u6700\u5c0f\u7684\u6570",permalink:"/trashbin/docs/\u5251\u6307offer/leetcode_offer45"},next:{title:"\ud83d\udfe1 \u5251\u6307 Offer 47. \u793c\u7269\u7684\u6700\u5927\u4ef7\u503c",permalink:"/trashbin/docs/\u5251\u6307offer/leetcode_offer47"}},s=[{value:"\u9898\u89e3 1.py",id:"\u9898\u89e3-1py",children:[]}],p=function(e){var n=e.children,t=e.color;return(0,i.kt)("span",{style:{backgroundColor:t,borderRadius:"2px",color:"#fff",padding:"0.2rem"}},n)},u={toc:s,Highlight:p};function d(e){var n=e.components,t=(0,o.Z)(e,a);return(0,i.kt)("wrapper",(0,r.Z)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"LeetCode \u63d0\u793a")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"\u9898\u76ee\u96be\u5ea6 ",(0,i.kt)(p,{color:"#ffc01e",mdxType:"Highlight"},"\u4e2d\u7b49")),(0,i.kt)("p",{parentName:"div"},"\u539f\u9898\u94fe\u63a5 ",(0,i.kt)("a",{parentName:"p",href:"https://leetcode-cn.com/problems/ba-shu-zi-fan-yi-cheng-zi-fu-chuan-lcof/"},"\ud83d\udd17 leetcode")))),(0,i.kt)("h2",{id:"\u9898\u89e3-1py"},"\u9898\u89e3 1.py"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-py"},"class Solution:\n    def translateNum(self, num: int) -> int:\n        nums = list(str(num))\n        dp = [0 for _ in nums]+[1]\n        dp[-2] = 1\n        for idx in range(len(nums)-2,-1,-1):\n            dp[idx] += dp[idx+1]\n            if nums[idx] == '1' or nums[idx] == '2' and nums[idx+1] <= '5':\n                dp[idx] += dp[idx+2]\n        return dp[0]\n")))}d.isMDXComponent=!0}}]);