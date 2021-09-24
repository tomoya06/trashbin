---
date: 2019-04-02 11:09:53
id: vue-source-code
tags:
- Vue
- 前端
title: Vue源码学习记录 - 初始化和渲染
---

> 学习文章[参考](https://ustbhuangyi.github.io/vue-analysis/)。源码版本为当下GitHub最新版2.6.10
> 该系列两篇主要是标记Vue实现过程中的关键函数以及函数所在文件，方便查找。结合《剖析Vue.js内部运行机制》阅读效果更佳，后者对整体流程概括得比较清晰。

<!-- more -->

## 文件路径

* Vue类声明定位过程：
  * package.json - scripts - build: `node scripts/build.js`
  * script/build.js: `let builds = require('./config').getAllBuilds()`
  * script/config.js: 以runtime+compiler为例：`entry: resolve('web/entry-runtime-with-compiler.js')` / `cosnt resolve ...`
  * src/platforms/web/entry-runtime-with-compiler.js: `import Vue from './runtime/index'`
  * src/platforms/web/runtime/index.js: `import Vue from 'core/index'`
  * src/core/index.js: `import Vue from './instance/index'`
  * src/core/instance/index.js: `function Vue` **And now we get it.** 

## 初始化、渲染、VDOM

* new Vue 初始化
  * 文件：src/core/instance/index.js
  * 原型注入：之后的多个Mixin：`initMixin(Vue) stateMixin(Vue) eventsMixin(Vue) lifecycleMixin(Vue) renderMixin(Vue)`
  * 关键：this._init(options)，this._init在后面initMixin(Vue)中注入：`Vue.prototype._init = function ...`
  * 在_init中的工作有：
    * 声明`vm = this`，之后对vm的操作实际也是对Vue实例本身的操作
    * 添加`vm._uid vm.$options` 等
    * 实例挂载：`if (vm.$options.el) { vm.$mount(vm.$options.el) }`

* vm.$mount 挂载
  * 文件：src/platforms/entry-runtime-with-compiler.js
  * 关键：`Vue.prototype.$mount = function ...` 中的 `mount.call(this, el, hydrating)`，
    * mount定义：`const mount = Vue.prototype.$mount`暂存原先原型上的`$mount`
    * 原先原型上的`$mount`定义文件：src/platform/web/runtime/index.js
    * 关键：`return mountComponent(this, el, hydrating)`
      * mountComponent定义文件：src/core/instance/lifecycle.js
      * 关键：`new Watcher(vm, updateComponent, noop, ...`，回调函数调用 `updateComponent()`，其中又调用`vm._render() vm._update()`

* vm._render 创建VNode
  * 文件：src/core/instance/render.js，renderMixin(Vue)方法中
  * 关键：`render.call(vm._renderProxy, vm.$createElement)`，通过执行 createElement 方法并返回 vnode，它是一个虚拟 Node

* createElement
  * 文件：src/core/vdom/create-elemenet.js
  * 关键：`_createElement(context, tag, data, children, normalizationType)`，其中:
    * 子节点的规范化：`children = normalizeChildren(children) || children = simpleNormalizeChildren(children)`
      * 定义文件：src/core/vdom/helpers/normalzie-children.js
      * 作用：由于 Virtual DOM 实际上是一个树状结构，每一个 VNode 可能会有若干个子节点，这些子节点应该也是 VNode 的类型。_createElement 接收的第 4 个参数 children 是任意类型的，因此我们需要把它们规范成 VNode 类型。
    * VNode的创建和返回：`new VNode ...`

* vm._update 把VNode渲染成真实的DOM
  * 文件：src/core/instance/lifecycle.js
  * 关键：`vm.__patch__`
    * 定义文件：src/platforms/web/runtime/index.js `Vue.prototype.__patch__ = inBrowser ? patch : noop;`
    * patch()定义文件：src/platforms/web/runtime/patch.js `export const patch: Function = createPatchFunction({ nodeOps, modules })`
    * createPatchFunction()定义文件：src/core/vdom/patch.js，关键：`return function patch (oldVnode, vnode, hydrating, removeOnly)`
    * 执行过程(函数具体定义见[原文](https://ustbhuangyi.github.io/vue-analysis/data-driven/update.html#%E6%80%BB%E7%BB%93)):

    ````
    patch() {
      createElm() { 
        nodeOps.createElement()
        createChildren()
        invokeCreateHooks()
        insert() {
          nodeOps.insertBefore() {
            Node.insertBefore() // 调用原生DOM操作API
          }
          nodeOps.appendChildren() {
            Node.appendChildren() // 调用原生DOM操作API
          }
        }
      }
    }
    ````

### Virtual ~~Youtuber~~ DOM

> 日思夜想的VDom
> 真正的 DOM 元素是非常庞大的，因为浏览器的标准就把 DOM 设计的非常复杂。当我们频繁的去做 DOM 更新，会产生一定的性能问题。
> 而 Virtual DOM 就是用一个原生的 JS 对象去描述一个 DOM 节点，所以它比创建一个 DOM 的代价要小很多。

* VNode：VueJS用来描述VDom的类
  * 文件：src/core/vdom/vnode.js
  *  VNode 只是用来映射到真实 DOM 的渲染，不需要包含操作 DOM 的方法，因此它是非常轻量和简单的。
  * Virtual DOM 除了它的数据结构的定义，映射到真实的 DOM 实际上要经历 VNode 的 create、diff、patch 等过程。那么在 Vue.js 中，VNode 的 create 是通过之前提到的 createElement 方法创建的，我们接下来分析这部分的实现。

### TRICKS!

* 检查是否是浏览器环境：`var inBrowser = typeof window !== 'undefined'`
* 原生判断是否是数组：`Array.isArray(obj)`