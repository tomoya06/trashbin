---
date: 2019-09-30 14:11:30
tags:
- JavaScript
- 前端
- Vue
title: Vue基础+拓展
---

> Vue使用/学习过程中遇到的细节

<!-- more -->

## 保留字

### `.sync`

> 参考[官方文档](https://cn.vuejs.org/v2/guide/components-custom-events.html#sync-%E4%BF%AE%E9%A5%B0%E7%AC%A6)

主要解决：双向绑定时，变量在子组件/父组件中发生改动时没有触发变化的问题

举个例子，在一个包含 ``title prop`` 的假设的组件中，我们可以用以下方法表达对其赋新值的意图：

````
this.$emit('update:title', newTitle)
````

然后父组件可以监听那个事件并根据需要更新一个本地的数据属性。例如：

````
<text-document
  v-bind:title="doc.title"
  v-on:update:title="doc.title = $event"
></text-document>
`````

为了方便起见，我们为这种模式提供一个缩写，即 .sync 修饰符：

````
<text-document v-bind:title.sync="doc.title"></text-document>
````

与 ``v-model`` 类似，但一个组件只能拥有一个 ``v-model`` 绑定值，当需要处理多个变量的时候就用到 ``.sync``