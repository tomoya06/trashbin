"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[6315],{3905:function(e,n,t){t.d(n,{Zo:function(){return f},kt:function(){return p}});var r=t(7294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function a(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var c=r.createContext({}),s=function(e){var n=r.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},f=function(e){var n=s(e.components);return r.createElement(c.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},u=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,i=e.originalType,c=e.parentName,f=a(e,["components","mdxType","originalType","parentName"]),u=s(t),p=o,m=u["".concat(c,".").concat(p)]||u[p]||d[p]||i;return t?r.createElement(m,l(l({ref:n},f),{},{components:t})):r.createElement(m,l({ref:n},f))}));function p(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var i=t.length,l=new Array(i);l[0]=u;var a={};for(var c in n)hasOwnProperty.call(n,c)&&(a[c]=n[c]);a.originalType=e,a.mdxType="string"==typeof e?e:o,l[1]=a;for(var s=2;s<i;s++)l[s]=t[s];return r.createElement.apply(null,l)}return r.createElement.apply(null,t)}u.displayName="MDXCreateElement"},6509:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return a},contentTitle:function(){return c},metadata:function(){return s},toc:function(){return f},Highlight:function(){return d},default:function(){return p}});var r=t(7462),o=t(3366),i=(t(7294),t(3905)),l=["components"],a={tags:["\u6811","\u6df1\u5ea6\u4f18\u5148\u641c\u7d22","\u5e7f\u5ea6\u4f18\u5148\u641c\u7d22","\u4e8c\u53c9\u6811","\u5251\u6307offer\u4e13\u9879\u7248"],id:"leetcode_OfferII046",title:"\ud83d\udfe1 \u5251\u6307 Offer II 046. \u4e8c\u53c9\u6811\u7684\u53f3\u4fa7\u89c6\u56fe",ques_id:"OfferII046",platform:"leetcode",online_link:"https://leetcode-cn.com/problems/WNC0Lk/",online_name:"\u4e8c\u53c9\u6811\u7684\u53f3\u4fa7\u89c6\u56fe",level:"m"},c=void 0,s={unversionedId:"\u5251\u6307offer\u4e13\u9879\u7248/leetcode_OfferII046",id:"\u5251\u6307offer\u4e13\u9879\u7248/leetcode_OfferII046",isDocsHomePage:!1,title:"\ud83d\udfe1 \u5251\u6307 Offer II 046. \u4e8c\u53c9\u6811\u7684\u53f3\u4fa7\u89c6\u56fe",description:"<span",source:"@site/docs/\u5251\u6307offer\u4e13\u9879\u7248/leetcode_OfferII046.mdx",sourceDirName:"\u5251\u6307offer\u4e13\u9879\u7248",slug:"/\u5251\u6307offer\u4e13\u9879\u7248/leetcode_OfferII046",permalink:"/trashbin/docs/\u5251\u6307offer\u4e13\u9879\u7248/leetcode_OfferII046",tags:[{label:"\u6811",permalink:"/trashbin/docs/tags/\u6811"},{label:"\u6df1\u5ea6\u4f18\u5148\u641c\u7d22",permalink:"/trashbin/docs/tags/\u6df1\u5ea6\u4f18\u5148\u641c\u7d22"},{label:"\u5e7f\u5ea6\u4f18\u5148\u641c\u7d22",permalink:"/trashbin/docs/tags/\u5e7f\u5ea6\u4f18\u5148\u641c\u7d22"},{label:"\u4e8c\u53c9\u6811",permalink:"/trashbin/docs/tags/\u4e8c\u53c9\u6811"},{label:"\u5251\u6307offer\u4e13\u9879\u7248",permalink:"/trashbin/docs/tags/\u5251\u6307offer\u4e13\u9879\u7248"}],version:"current",frontMatter:{tags:["\u6811","\u6df1\u5ea6\u4f18\u5148\u641c\u7d22","\u5e7f\u5ea6\u4f18\u5148\u641c\u7d22","\u4e8c\u53c9\u6811","\u5251\u6307offer\u4e13\u9879\u7248"],id:"leetcode_OfferII046",title:"\ud83d\udfe1 \u5251\u6307 Offer II 046. \u4e8c\u53c9\u6811\u7684\u53f3\u4fa7\u89c6\u56fe",ques_id:"OfferII046",platform:"leetcode",online_link:"https://leetcode-cn.com/problems/WNC0Lk/",online_name:"\u4e8c\u53c9\u6811\u7684\u53f3\u4fa7\u89c6\u56fe",level:"m"},sidebar:"bffer",previous:{title:"\ud83d\udfe1 \u5251\u6307 Offer II 045. \u4e8c\u53c9\u6811\u6700\u5e95\u5c42\u6700\u5de6\u8fb9\u7684\u503c",permalink:"/trashbin/docs/\u5251\u6307offer\u4e13\u9879\u7248/leetcode_OfferII045"},next:{title:"\ud83d\udfe1 \u5251\u6307 Offer II 047. \u4e8c\u53c9\u6811\u526a\u679d",permalink:"/trashbin/docs/\u5251\u6307offer\u4e13\u9879\u7248/leetcode_OfferII047"}},f=[{value:"\u9898\u89e31",id:"\u9898\u89e31",children:[]},{value:"\u9898\u89e32",id:"\u9898\u89e32",children:[]}],d=function(e){var n=e.children,t=e.color;return(0,i.kt)("span",{style:{backgroundColor:t,borderRadius:"2px",color:"#fff",padding:"0.2rem"}},n)},u={toc:f,Highlight:d};function p(e){var n=e.components,t=(0,o.Z)(e,l);return(0,i.kt)("wrapper",(0,r.Z)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"LeetCode \u63d0\u793a")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"\u9898\u76ee\u96be\u5ea6 ",(0,i.kt)(d,{color:"#ffc01e",mdxType:"Highlight"},"\u4e2d\u7b49")),(0,i.kt)("p",{parentName:"div"},"\u539f\u9898\u94fe\u63a5 ",(0,i.kt)("a",{parentName:"p",href:"https://leetcode-cn.com/problems/WNC0Lk/"},"\ud83d\udd17 leetcode")))),(0,i.kt)("h2",{id:"\u9898\u89e31"},"\u9898\u89e31"),(0,i.kt)("p",null,"\u5c42\u5e8f\u904d\u5386\uff0c\u6bcf\u5c42\u6700\u540e\u4e00\u4e2a\u5199\u5165\u7ed3\u679c"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},"/**\n * Definition for a binary tree node.\n * public class TreeNode {\n *     int val;\n *     TreeNode left;\n *     TreeNode right;\n *     TreeNode() {}\n *     TreeNode(int val) { this.val = val; }\n *     TreeNode(int val, TreeNode left, TreeNode right) {\n *         this.val = val;\n *         this.left = left;\n *         this.right = right;\n *     }\n * }\n */\nclass Solution {\n    public List<Integer> rightSideView(TreeNode root) {\n        List<Integer> res = new ArrayList<>();\n        List<TreeNode> levels = new ArrayList<>();\n\n        if (root == null) {\n            return res;\n        }\n\n        levels.add(root);\n\n        while (levels.size() > 0) {\n            int curLen = levels.size();\n            for (int i=0; i<curLen; i+=1) {\n                TreeNode curNode = levels.remove(0);\n                if (curNode.left != null) {\n                    levels.add(curNode.left);\n                }\n                if (curNode.right != null) {\n                    levels.add(curNode.right);\n                }\n\n                if (i == curLen-1) {\n                    res.add(curNode.val);\n                }\n            }\n        }\n\n        return res;\n    }\n}\n")),(0,i.kt)("h2",{id:"\u9898\u89e32"},"\u9898\u89e32"),(0,i.kt)("p",null,"dfs\uff0c\u5148\u53f3\u540e\u5de6\uff0c\u6bcf\u5c42\u7b2c\u4e00\u4e2a\u8bbf\u95ee\u5230\u7684\u8282\u70b9\u52a0\u5165\u7ed3\u679c"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},"/**\n * Definition for a binary tree node.\n * public class TreeNode {\n *     int val;\n *     TreeNode left;\n *     TreeNode right;\n *     TreeNode() {}\n *     TreeNode(int val) { this.val = val; }\n *     TreeNode(int val, TreeNode left, TreeNode right) {\n *         this.val = val;\n *         this.left = left;\n *         this.right = right;\n *     }\n * }\n */\nclass Solution {\n    private List<Integer> result = new ArrayList<>();\n    private void dfs(Integer level, TreeNode root) {\n        if (root == null) {\n            return;\n        }\n        if (level == this.result.size()) {\n            this.result.add(root.val);\n        }\n        dfs(level+1, root.right);\n        dfs(level+1, root.left);\n    }\n\n    public List<Integer> rightSideView(TreeNode root) {\n        dfs(0, root);\n        return this.result;\n    }\n}\n")))}p.isMDXComponent=!0}}]);