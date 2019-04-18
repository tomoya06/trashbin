---
title: Vue源码学习记录 - 响应式原理
date: 2019-04-03 11:16:44
tags:
- Vue
- 前端
---

> 学习文章[参考](https://ustbhuangyi.github.io/vue-analysis/)。源码版本为当下GitHub最新版2.6.10
> 本文对应文章第三章，“深入响应式原理”

## 响应式对象 

* 核心：`Object.defineProperty` 将Vue实例的data选项全部转为getter/setter

### 响应式对象转换过程

* 初始化过程

````
initMixin() {
    initState() {
        initProps() // * 
        initMethods()
        initData()
        initComputed()
        initWatch()
    }
}
````

* initProps()
  * 关键：遍历props的属性，调用defineReactive()转换成响应式，调用proxy()将vm._props.xxx的读写访问代理到vm.xxx
* initData()
  * 关键：遍历data的属性，调用proxy()将vm._data.xxx的读写访问代理到vm.xxx，调用observe()转换成响应式
* proxy()
  * 属性代理转换
* observe()
  * 给非 VNode 的对象类型数据添加一个 Observer
* class Observer
  * 给对象的属性添加getter/setter
  * 关键：`walk (obj: Object) observeArray (items: Array<any>)`
* defineReactive()
  * 定义响应式对象，给对象添加getter/setter

### 依赖收集 / getter

* 核心：defineReactive() { new Dep() }
* class Dep
  * 文件：src/core/observer/dep.js
  * 关键：target: Watcher / subs: Array<Watcher> 实际上是对Watcher的管理
* 概述：getter除了返回属性值以外，还会把属性加入观察者队列，在之后有数据更新的时候会通知所有观察者

> watcher / dep 是观察者模式的实现，参见[菜鸟教程](http://www.runoob.com/design-pattern/observer-pattern.html)

### 派发更新 / setter

* 注意：在赋值之前有这么一个判断。这个判断会导致value为对象且newVal也为对象时、或赋值相同值时直接跳过setter后续步骤

````
if (newVal === value || (newVal !== newVal && value !== value)) {
  return
}
````

* dep.notify -> sub.update() -> queueWatcher() -> nextTick(flushScheduerQueue) 
* 概述：赋值时、执行setter流程，将会触发之前所有订阅的观察者watcher调用watcher.update()，这个调用过程会使用队列保证更新优先级顺序（父组件先于子组件、用户自定义watcher优先）、保证不遗漏watcher。

### nextTick()

先要了解JS的运行机制，可参考另一篇博文，JS事件执行流程。

数据的变化到 DOM 的重新渲染是一个异步过程，发生在下一个 tick。

## 特殊的对象变化

### 对象添加属性

给一个响应式对象添加一个新的属性的时候，是不能够触发它的 setter 的。可使用全局方法`Vue.set(target, key, val)`，

* 原理：`Vue.set = set`
* 关键：set的实现里调用defineReactive()来添加响应式属性

### 数组

不能触发响应的做法：

1. 按索引修改某个位置：`vm.items[indexOfItem] = newValue` 可使用`Vue.set(example1.items, indexOfItem, newValue)`
2. 修改数组长度：`vm.items.length = newLength` 可使用`vm.items.splice(newLength)`

## 组件更新 VNode DIFF

diff算法演示，详见[原文的图片演示](https://ustbhuangyi.github.io/vue-analysis/reactive/component-update.html#updatechildren)