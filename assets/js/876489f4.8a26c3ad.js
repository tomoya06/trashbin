"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[1538],{3905:function(e,n,t){t.d(n,{Zo:function(){return f},kt:function(){return p}});var r=t(7294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var c=r.createContext({}),s=function(e){var n=r.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},f=function(e){var n=s(e.components);return r.createElement(c.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},m=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,f=l(e,["components","mdxType","originalType","parentName"]),m=s(t),p=o,d=m["".concat(c,".").concat(p)]||m[p]||u[p]||a;return t?r.createElement(d,i(i({ref:n},f),{},{components:t})):r.createElement(d,i({ref:n},f))}));function p(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var a=t.length,i=new Array(a);i[0]=m;var l={};for(var c in n)hasOwnProperty.call(n,c)&&(l[c]=n[c]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var s=2;s<a;s++)i[s]=t[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}m.displayName="MDXCreateElement"},361:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return l},contentTitle:function(){return c},metadata:function(){return s},toc:function(){return f},Highlight:function(){return u},default:function(){return p}});var r=t(7462),o=t(3366),a=(t(7294),t(3905)),i=["components"],l={tags:["\u5251\u6307offer","\u6570\u5b66\u95ee\u9898","\u52a8\u6001\u89c4\u5212","\u5206\u6cbb\u6cd5"],id:"leetcode_offer42",title:"\ud83d\udfe2 \u5251\u6307 Offer 42. \u8fde\u7eed\u5b50\u6570\u7ec4\u7684\u6700\u5927\u548c",ques_id:"offer42",platform:"leetcode",online_link:"https://leetcode-cn.com/problems/lian-xu-zi-shu-zu-de-zui-da-he-lcof/",online_name:"\u5251\u6307 Offer 42. \u8fde\u7eed\u5b50\u6570\u7ec4\u7684\u6700\u5927\u548c",level:"e"},c=void 0,s={unversionedId:"\u5251\u6307offer/leetcode_offer42",id:"\u5251\u6307offer/leetcode_offer42",isDocsHomePage:!1,title:"\ud83d\udfe2 \u5251\u6307 Offer 42. \u8fde\u7eed\u5b50\u6570\u7ec4\u7684\u6700\u5927\u548c",description:"<span",source:"@site/docs/\u5251\u6307offer/leetcode_offer42.mdx",sourceDirName:"\u5251\u6307offer",slug:"/\u5251\u6307offer/leetcode_offer42",permalink:"/trashbin/docs/\u5251\u6307offer/leetcode_offer42",tags:[{label:"\u5251\u6307offer",permalink:"/trashbin/docs/tags/\u5251\u6307offer"},{label:"\u6570\u5b66\u95ee\u9898",permalink:"/trashbin/docs/tags/\u6570\u5b66\u95ee\u9898"},{label:"\u52a8\u6001\u89c4\u5212",permalink:"/trashbin/docs/tags/\u52a8\u6001\u89c4\u5212"},{label:"\u5206\u6cbb\u6cd5",permalink:"/trashbin/docs/tags/\u5206\u6cbb\u6cd5"}],version:"current",frontMatter:{tags:["\u5251\u6307offer","\u6570\u5b66\u95ee\u9898","\u52a8\u6001\u89c4\u5212","\u5206\u6cbb\u6cd5"],id:"leetcode_offer42",title:"\ud83d\udfe2 \u5251\u6307 Offer 42. \u8fde\u7eed\u5b50\u6570\u7ec4\u7684\u6700\u5927\u548c",ques_id:"offer42",platform:"leetcode",online_link:"https://leetcode-cn.com/problems/lian-xu-zi-shu-zu-de-zui-da-he-lcof/",online_name:"\u5251\u6307 Offer 42. \u8fde\u7eed\u5b50\u6570\u7ec4\u7684\u6700\u5927\u548c",level:"e"},sidebar:"offer",previous:{title:"\ud83d\udd34 \u5251\u6307 Offer 41. \u6570\u636e\u6d41\u4e2d\u7684\u4e2d\u4f4d\u6570",permalink:"/trashbin/docs/\u5251\u6307offer/leetcode_offer41"},next:{title:"\ud83d\udd34 \u5251\u6307 Offer 43. 1\uff5en \u6574\u6570\u4e2d 1 \u51fa\u73b0\u7684\u6b21\u6570",permalink:"/trashbin/docs/\u5251\u6307offer/leetcode_offer43"}},f=[{value:"\u9898\u89e3 1.py",id:"\u9898\u89e3-1py",children:[]},{value:"\u9898\u89e3 2_\u7ebf\u6bb5\u6811.py",id:"\u9898\u89e3-2_\u7ebf\u6bb5\u6811py",children:[]}],u=function(e){var n=e.children,t=e.color;return(0,a.kt)("span",{style:{backgroundColor:t,borderRadius:"2px",color:"#fff",padding:"0.2rem"}},n)},m={toc:f,Highlight:u};function p(e){var n=e.components,t=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,r.Z)({},m,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,a.kt)("div",{parentName:"div",className:"admonition-heading"},(0,a.kt)("h5",{parentName:"div"},(0,a.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,a.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,a.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"LeetCode \u63d0\u793a")),(0,a.kt)("div",{parentName:"div",className:"admonition-content"},(0,a.kt)("p",{parentName:"div"},"\u9898\u76ee\u96be\u5ea6 ",(0,a.kt)(u,{color:"#00b8a3",mdxType:"Highlight"},"\u7b80\u5355")),(0,a.kt)("p",{parentName:"div"},"\u539f\u9898\u94fe\u63a5 ",(0,a.kt)("a",{parentName:"p",href:"https://leetcode-cn.com/problems/lian-xu-zi-shu-zu-de-zui-da-he-lcof/"},"\ud83d\udd17 leetcode")))),(0,a.kt)("h2",{id:"\u9898\u89e3-1py"},"\u9898\u89e3 1.py"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-py"},"# \u5dee\u70b9\u51fa\u4e0d\u6765= =\n\nclass Solution:\n    def maxSubArray(self, nums: List[int]) -> int:\n        np = [] + nums\n        maxx = np[0]\n        for idx in range(1, len(nums)):\n            np[idx] = max(np[idx-1]+nums[idx], nums[idx])\n            maxx = max(np[idx], maxx)\n        return maxx\n")),(0,a.kt)("h2",{id:"\u9898\u89e3-2_\u7ebf\u6bb5\u6811py"},"\u9898\u89e3 2_\u7ebf\u6bb5\u6811.py"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-py"},"class Solution:\n    def maxSubArray(self, nums: List[int]) -> int:\n        def calcSums(l, r):\n            if l == r:\n                return {\n                    'lsum': nums[l],\n                    'rsum': nums[r],\n                    'tsum': nums[r],\n                    'msum': nums[r],\n                }\n            m = (l+r)//2\n            left = calcSums(l, m)\n            right = calcSums(m+1, r)\n            return {\n                'lsum': max(left['lsum'], left['tsum']+right['lsum']),\n                'rsum': max(right['rsum'], left['rsum']+right['tsum']),\n                'tsum': left['tsum']+right['tsum'],\n                'msum': max(left['msum'], right['msum'], left['rsum']+right['lsum'])\n            }\n        return calcSums(0, len(nums)-1)['msum']\n")))}p.isMDXComponent=!0}}]);