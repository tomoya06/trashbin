"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[7831],{3905:function(e,n,t){t.d(n,{Zo:function(){return s},kt:function(){return u}});var r=t(7294);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,i=function(e,n){if(null==e)return{};var t,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var c=r.createContext({}),f=function(e){var n=r.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):a(a({},n),e)),t},s=function(e){var n=f(e.components);return r.createElement(c.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},m=r.forwardRef((function(e,n){var t=e.components,i=e.mdxType,o=e.originalType,c=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),m=f(t),u=i,d=m["".concat(c,".").concat(u)]||m[u]||p[u]||o;return t?r.createElement(d,a(a({ref:n},s),{},{components:t})):r.createElement(d,a({ref:n},s))}));function u(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var o=t.length,a=new Array(o);a[0]=m;var l={};for(var c in n)hasOwnProperty.call(n,c)&&(l[c]=n[c]);l.originalType=e,l.mdxType="string"==typeof e?e:i,a[1]=l;for(var f=2;f<o;f++)a[f]=t[f];return r.createElement.apply(null,a)}return r.createElement.apply(null,t)}m.displayName="MDXCreateElement"},5137:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return l},contentTitle:function(){return c},metadata:function(){return f},toc:function(){return s},Highlight:function(){return p},default:function(){return u}});var r=t(7462),i=t(3366),o=(t(7294),t(3905)),a=["components"],l={tags:["\u6808","\u6570\u7ec4","\u52a8\u6001\u89c4\u5212","\u77e9\u9635","\u5355\u8c03\u6808","\u5251\u6307offer\u4e13\u9879\u7248"],id:"leetcode_OfferII040",title:"\ud83d\udd34 \u5251\u6307 Offer II 040. \u77e9\u9635\u4e2d\u6700\u5927\u7684\u77e9\u5f62",ques_id:"OfferII040",platform:"leetcode",online_link:"https://leetcode-cn.com/problems/PLYXKQ/",online_name:"\u77e9\u9635\u4e2d\u6700\u5927\u7684\u77e9\u5f62",level:"h"},c=void 0,f={unversionedId:"\u5251\u6307offer\u4e13\u9879\u7248/leetcode_OfferII040",id:"\u5251\u6307offer\u4e13\u9879\u7248/leetcode_OfferII040",isDocsHomePage:!1,title:"\ud83d\udd34 \u5251\u6307 Offer II 040. \u77e9\u9635\u4e2d\u6700\u5927\u7684\u77e9\u5f62",description:"<span",source:"@site/docs/\u5251\u6307offer\u4e13\u9879\u7248/leetcode_OfferII040.mdx",sourceDirName:"\u5251\u6307offer\u4e13\u9879\u7248",slug:"/\u5251\u6307offer\u4e13\u9879\u7248/leetcode_OfferII040",permalink:"/trashbin/docs/\u5251\u6307offer\u4e13\u9879\u7248/leetcode_OfferII040",tags:[{label:"\u6808",permalink:"/trashbin/docs/tags/\u6808"},{label:"\u6570\u7ec4",permalink:"/trashbin/docs/tags/\u6570\u7ec4"},{label:"\u52a8\u6001\u89c4\u5212",permalink:"/trashbin/docs/tags/\u52a8\u6001\u89c4\u5212"},{label:"\u77e9\u9635",permalink:"/trashbin/docs/tags/\u77e9\u9635"},{label:"\u5355\u8c03\u6808",permalink:"/trashbin/docs/tags/\u5355\u8c03\u6808"},{label:"\u5251\u6307offer\u4e13\u9879\u7248",permalink:"/trashbin/docs/tags/\u5251\u6307offer\u4e13\u9879\u7248"}],version:"current",frontMatter:{tags:["\u6808","\u6570\u7ec4","\u52a8\u6001\u89c4\u5212","\u77e9\u9635","\u5355\u8c03\u6808","\u5251\u6307offer\u4e13\u9879\u7248"],id:"leetcode_OfferII040",title:"\ud83d\udd34 \u5251\u6307 Offer II 040. \u77e9\u9635\u4e2d\u6700\u5927\u7684\u77e9\u5f62",ques_id:"OfferII040",platform:"leetcode",online_link:"https://leetcode-cn.com/problems/PLYXKQ/",online_name:"\u77e9\u9635\u4e2d\u6700\u5927\u7684\u77e9\u5f62",level:"h"},sidebar:"bffer",previous:{title:"\ud83d\udd34 \u5251\u6307 Offer II 039. \u76f4\u65b9\u56fe\u6700\u5927\u77e9\u5f62\u9762\u79ef",permalink:"/trashbin/docs/\u5251\u6307offer\u4e13\u9879\u7248/leetcode_OfferII039"},next:{title:"\ud83d\udfe2 \u5251\u6307 Offer II 041. \u6ed1\u52a8\u7a97\u53e3\u7684\u5e73\u5747\u503c",permalink:"/trashbin/docs/\u5251\u6307offer\u4e13\u9879\u7248/leetcode_OfferII041"}},s=[{value:"\u9898\u89e31",id:"\u9898\u89e31",children:[]}],p=function(e){var n=e.children,t=e.color;return(0,o.kt)("span",{style:{backgroundColor:t,borderRadius:"2px",color:"#fff",padding:"0.2rem"}},n)},m={toc:s,Highlight:p};function u(e){var n=e.components,t=(0,i.Z)(e,a);return(0,o.kt)("wrapper",(0,r.Z)({},m,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"LeetCode \u63d0\u793a")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"\u9898\u76ee\u96be\u5ea6 ",(0,o.kt)(p,{color:"#ff375f",mdxType:"Highlight"},"\u56f0\u96be")),(0,o.kt)("p",{parentName:"div"},"\u539f\u9898\u94fe\u63a5 ",(0,o.kt)("a",{parentName:"p",href:"https://leetcode-cn.com/problems/PLYXKQ/"},"\ud83d\udd17 leetcode")))),(0,o.kt)("h2",{id:"\u9898\u89e31"},"\u9898\u89e31"),(0,o.kt)("p",null,"\u8fd9\u9053\u9898\u5b9e\u9645\u4e0a\u662f\u4e24\u9053 Medium \u9898\u7684\u7ed3\u5408"),(0,o.kt)("p",null,"\u53c2\u8003\u67f1\u72b6\u56fe\u4e2d\u7684\u6700\u5927\u77e9\u5f62\u800c\u89e3"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-java"},"class Solution {\n    public int maximalRectangle(String[] matrix) {\n        int m = matrix.length;\n        if (m == 0) {\n            return 0;\n        }\n        int n = matrix[0].length();\n        if (n == 0) {\n            return 0;\n        }\n\n        int[][] left = new int[m][n];\n        int curLeft = 0;\n\n        for (int i=0; i<m; i+=1) {\n            for (int j=0; j<n; j+=1) {\n                curLeft = j == 0 ? 0 : left[i][j-1];\n                if (matrix[i].charAt(j) == '0') {\n                    left[i][j] = 0;\n                } else {\n                    left[i][j] = curLeft + 1;\n                }\n            }\n        }\n\n        int maxx = 0;\n\n        for (int j=0; j<n; j+=1) {\n            Deque<Integer> stack = new ArrayDeque<>();\n            int[] up = new int[m];\n            int[] down = new int[m];\n\n            Arrays.fill(down, m);\n\n            for (int i=0; i<m; i+=1) {\n                while (!stack.isEmpty() && left[stack.peek()][j] > left[i][j]) {\n                    down[stack.peek()] = i;\n                    stack.poll();\n                }\n                up[i] = stack.isEmpty() ? -1 : stack.peek();\n                stack.push(i);\n            }\n            for (int i=0; i<m; i+=1) {\n                maxx = Math.max(maxx, (down[i]-up[i]-1) * left[i][j]);\n            }\n        }\n\n        return maxx;\n    }\n}\n")))}u.isMDXComponent=!0}}]);