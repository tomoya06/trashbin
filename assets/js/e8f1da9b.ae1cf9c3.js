"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[6346],{3905:function(e,t,r){r.d(t,{Zo:function(){return s},kt:function(){return f}});var n=r(7294);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var u=n.createContext({}),l=function(e){var t=n.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},s=function(e){var t=l(e.components);return n.createElement(u.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,i=e.mdxType,o=e.originalType,u=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),d=l(r),f=i,y=d["".concat(u,".").concat(f)]||d[f]||p[f]||o;return r?n.createElement(y,a(a({ref:t},s),{},{components:r})):n.createElement(y,a({ref:t},s))}));function f(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=r.length,a=new Array(o);a[0]=d;var c={};for(var u in t)hasOwnProperty.call(t,u)&&(c[u]=t[u]);c.originalType=e,c.mdxType="string"==typeof e?e:i,a[1]=c;for(var l=2;l<o;l++)a[l]=r[l];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},4129:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return c},contentTitle:function(){return u},metadata:function(){return l},toc:function(){return s},default:function(){return d}});var n=r(7462),i=r(3366),o=(r(7294),r(3905)),a=["components"],c={date:new Date("2019-09-30T16:03:22.000Z"),id:"java-springboot-security",tags:["Java","SpringBoot","\u540e\u7aef"],title:"SpringBoot Security \u914d\u7f6e\u65b9\u6848"},u=void 0,l={unversionedId:"note/java-springboot-security",id:"note/java-springboot-security",isDocsHomePage:!1,title:"SpringBoot Security \u914d\u7f6e\u65b9\u6848",description:"\u68b3\u7406\u4e00\u4e0b Springboot Security \u7684\u914d\u7f6e\u65b9\u6848",source:"@site/docs/note/2019-09-30-java-springboot-security.mdx",sourceDirName:"note",slug:"/note/java-springboot-security",permalink:"/docs/note/java-springboot-security",tags:[{label:"Java",permalink:"/docs/tags/java"},{label:"SpringBoot",permalink:"/docs/tags/spring-boot"},{label:"\u540e\u7aef",permalink:"/docs/tags/\u540e\u7aef"}],version:"current",frontMatter:{date:"2019-09-30T16:03:22.000Z",id:"java-springboot-security",tags:["Java","SpringBoot","\u540e\u7aef"],title:"SpringBoot Security \u914d\u7f6e\u65b9\u6848"}},s=[{value:"\u914d\u7f6e\u7ed3\u6784",id:"\u914d\u7f6e\u7ed3\u6784",children:[]},{value:"\u5177\u4f53\u8bf4\u660e",id:"\u5177\u4f53\u8bf4\u660e",children:[{value:"<code>public UserDetailsService userDetailsService() </code>",id:"public-userdetailsservice-userdetailsservice-",children:[]},{value:"<code>class JwtAuthenticationTokenFilter extends OncePerRequestFilter</code>",id:"class-jwtauthenticationtokenfilter-extends-onceperrequestfilter",children:[]}]}],p={toc:s};function d(e){var t=e.components,r=(0,i.Z)(e,a);return(0,o.kt)("wrapper",(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"\u68b3\u7406\u4e00\u4e0b Springboot Security \u7684\u914d\u7f6e\u65b9\u6848")),(0,o.kt)("h2",{id:"\u914d\u7f6e\u7ed3\u6784"},"\u914d\u7f6e\u7ed3\u6784"),(0,o.kt)("p",null,"\u8fd9\u4e2a\u914d\u7f6e\u7ed3\u5408\u4e86jwt\u8ba4\u8bc1\uff0c\u89c1 SecurityConfig.java"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"- class SecurityConfig extends WebSecurityConfigurerAdapter\n  - void configure(HttpSecurity httpSecurity)\n    - httpSecurity.csrf() ...       // \u8def\u5f84\u6743\u9650\u914d\u7f6e\n    - httpSecurity.addFilterBefore : jwtAuthenticationTokenFilter\n    - httpSecurity.exceptionHandling\n      - accessDeniedHandler\n      - authenticationEntryPoint\n  - void configure(AuthenticationManagerBuilder auth)\n    - auth.userDetailsService : userDetailsService\n    - auth.passwordEncoder\n")),(0,o.kt)("h2",{id:"\u5177\u4f53\u8bf4\u660e"},"\u5177\u4f53\u8bf4\u660e"),(0,o.kt)("h3",{id:"public-userdetailsservice-userdetailsservice-"},(0,o.kt)("inlineCode",{parentName:"h3"},"public UserDetailsService userDetailsService() ")),(0,o.kt)("p",null,"SpringSecurity\u5b9a\u4e49\u7684\u6838\u5fc3\u63a5\u53e3\uff0c\u7528\u4e8e\u6839\u636e\u7528\u6237\u540d\u83b7\u53d6\u7528\u6237\u4fe1\u606fUserDetails\u3002\u8fd9\u4e2aUserDetails\u9700\u8981\u81ea\u884c\u5b9e\u73b0"),(0,o.kt)("h3",{id:"class-jwtauthenticationtokenfilter-extends-onceperrequestfilter"},(0,o.kt)("inlineCode",{parentName:"h3"},"class JwtAuthenticationTokenFilter extends OncePerRequestFilter")),(0,o.kt)("p",null,"GenericFilterBean\u57fa\u7c7b\uff0c\u76f8\u5f53\u4e8e\u4e2d\u95f4\u4ef6\u3002\u8fd9\u91cc\u52a0\u4e86\u4e00\u4e2a\u5904\u7406Jwt\u7684filter\uff0c\u53ef\u4ee5\u4e3a\u6bcf\u4e2arequest\u7684SecurityContextHolder\u4e0a\u4e0b\u6587\u5904\u7406Jwt\u6388\u6743\u4fe1\u606f\uff0c"))}d.isMDXComponent=!0}}]);