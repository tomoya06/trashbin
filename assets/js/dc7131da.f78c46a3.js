"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[1949],{3905:function(e,t,n){n.d(t,{Zo:function(){return f},kt:function(){return d}});var r=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=r.createContext({}),s=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},f=function(e){var t=s(e.components);return r.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,l=e.parentName,f=c(e,["components","mdxType","originalType","parentName"]),u=s(n),d=i,m=u["".concat(l,".").concat(d)]||u[d]||p[d]||o;return n?r.createElement(m,a(a({ref:t},f),{},{components:n})):r.createElement(m,a({ref:t},f))}));function d(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,a=new Array(o);a[0]=u;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:i,a[1]=c;for(var s=2;s<o;s++)a[s]=n[s];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},2550:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return c},contentTitle:function(){return l},metadata:function(){return s},toc:function(){return f},Highlight:function(){return p},default:function(){return d}});var r=n(7462),i=n(3366),o=(n(7294),n(3905)),a=["components"],c={tags:["\u6570\u7ec4","\u56de\u6eaf","\u5251\u6307offer\u4e13\u9879\u7248"],id:"leetcode_OfferII084",title:"\ud83d\udfe1 \u5251\u6307 Offer II 084. \u542b\u6709\u91cd\u590d\u5143\u7d20\u96c6\u5408\u7684\u5168\u6392\u5217",ques_id:"OfferII084",platform:"leetcode",online_link:"https://leetcode-cn.com/problems/7p8L0Z/",online_name:"\u542b\u6709\u91cd\u590d\u5143\u7d20\u96c6\u5408\u7684\u5168\u6392\u5217",level:"m"},l=void 0,s={unversionedId:"\u5251\u6307offer\u4e13\u9879\u7248/leetcode_OfferII084",id:"\u5251\u6307offer\u4e13\u9879\u7248/leetcode_OfferII084",isDocsHomePage:!1,title:"\ud83d\udfe1 \u5251\u6307 Offer II 084. \u542b\u6709\u91cd\u590d\u5143\u7d20\u96c6\u5408\u7684\u5168\u6392\u5217",description:"<span",source:"@site/docs\\\u5251\u6307offer\u4e13\u9879\u7248\\leetcode_OfferII084.mdx",sourceDirName:"\u5251\u6307offer\u4e13\u9879\u7248",slug:"/\u5251\u6307offer\u4e13\u9879\u7248/leetcode_OfferII084",permalink:"/trashbin/docs/\u5251\u6307offer\u4e13\u9879\u7248/leetcode_OfferII084",tags:[{label:"\u6570\u7ec4",permalink:"/trashbin/docs/tags/\u6570\u7ec4"},{label:"\u56de\u6eaf",permalink:"/trashbin/docs/tags/\u56de\u6eaf"},{label:"\u5251\u6307offer\u4e13\u9879\u7248",permalink:"/trashbin/docs/tags/\u5251\u6307offer\u4e13\u9879\u7248"}],version:"current",frontMatter:{tags:["\u6570\u7ec4","\u56de\u6eaf","\u5251\u6307offer\u4e13\u9879\u7248"],id:"leetcode_OfferII084",title:"\ud83d\udfe1 \u5251\u6307 Offer II 084. \u542b\u6709\u91cd\u590d\u5143\u7d20\u96c6\u5408\u7684\u5168\u6392\u5217",ques_id:"OfferII084",platform:"leetcode",online_link:"https://leetcode-cn.com/problems/7p8L0Z/",online_name:"\u542b\u6709\u91cd\u590d\u5143\u7d20\u96c6\u5408\u7684\u5168\u6392\u5217",level:"m"},sidebar:"bffer",previous:{title:"\ud83d\udfe1 \u5251\u6307 Offer II 083. \u6ca1\u6709\u91cd\u590d\u5143\u7d20\u96c6\u5408\u7684\u5168\u6392\u5217",permalink:"/trashbin/docs/\u5251\u6307offer\u4e13\u9879\u7248/leetcode_OfferII083"},next:{title:"\ud83d\udfe1 \u5251\u6307 Offer II 085. \u751f\u6210\u5339\u914d\u7684\u62ec\u53f7",permalink:"/trashbin/docs/\u5251\u6307offer\u4e13\u9879\u7248/leetcode_OfferII085"}},f=[{value:"\u9898\u89e31",id:"\u9898\u89e31",children:[]}],p=function(e){var t=e.children,n=e.color;return(0,o.kt)("span",{style:{backgroundColor:n,borderRadius:"2px",color:"#fff",padding:"0.2rem"}},t)},u={toc:f,Highlight:p};function d(e){var t=e.components,n=(0,i.Z)(e,a);return(0,o.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"LeetCode \u63d0\u793a")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"\u9898\u76ee\u96be\u5ea6 ",(0,o.kt)(p,{color:"#ffc01e",mdxType:"Highlight"},"\u4e2d\u7b49")),(0,o.kt)("p",{parentName:"div"},"\u539f\u9898\u94fe\u63a5 ",(0,o.kt)("a",{parentName:"p",href:"https://leetcode-cn.com/problems/7p8L0Z/"},"\ud83d\udd17 leetcode")))),(0,o.kt)("h2",{id:"\u9898\u89e31"},"\u9898\u89e31"),(0,o.kt)("p",null,"\u6ce8\u610f\u53bb\u91cd"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-java"},"class Solution {\n    private List<Integer> cur;\n    private boolean[] visited;\n    private int size;\n    private List<List<Integer>> res;\n\n    public List<List<Integer>> permuteUnique(int[] nums) {\n        size = nums.length;\n        cur = new ArrayList<>();\n        visited = new boolean[size];\n        res = new ArrayList<>();\n        Arrays.sort(nums);\n\n        travel(0, nums);\n\n        return res;\n    }\n\n    private void travel(int idx, int[] nums) {\n        if (idx == size) {\n            res.add(new ArrayList<>(cur));\n            return;\n        }\n\n        for (int i=0; i<size; i++) {\n            if (visited[i] || (i >= 1 && nums[i-1] == nums[i] && !visited[i-1])) {\n                continue;\n            }\n            visited[i] = true;\n            cur.add(nums[i]);\n            travel(idx+1, nums);\n            cur.remove(idx);\n            visited[i] = false;\n        }\n    }\n}\n")))}d.isMDXComponent=!0}}]);