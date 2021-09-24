---
title: js事件执行流程
date: 2019-04-09 14:17:58
tags:
- JavaScript
- 前端
---

首先记住js是单线程语言，这就意味着在任何时候都只有一个主线程，某个时间主线程只能执行一个任务。

<!-- more -->

> single thread = single call stack = do only one thing at a time

下面这张图可以帮助理解下JS执行过程中的完整体系：主要包括

* 执行栈，也就是主线程要执行的任务栈
* JS引擎，用来执行异步任务
* 渲染队列
* MACROTASK队列
* MICROTASK队列
* 事件循环，作为队列任务与栈任务之间的调度器

![](https://user-images.githubusercontent.com/35499042/55784635-8d86ab80-5ae3-11e9-8231-5bf99b6e9bb0.jpeg)

## 任务

JS中的所有任务可分为两种：

* 同步任务：在主线程上排队执行的任务
* 异步任务：不占用主线程、在任务队列执行的任务

## 主线程

主线程会按栈的顺序依次执行栈中的任务，例如：

````
function a() {
    console.log('a)
}

function b() {
    a()
}

b()
````

忽略最外层的匿名main函数，在这个执行过程中，出入栈顺序为：

````
b() in
a() in 
console.log('a') in 
console.log('a') exec
console.log('a') out
a() out
b() out
-- end
````

如果在主线程执行了一个耗时很长的任务，例如死循环，那么主线程就会卡在这个任务，也就是阻塞了。之后的其他任务都会受影响。最简单地，在一个浏览器窗口的终端输入一句`while(true) {}`，这个窗口就卡死了。

主线程上的任务都是同步任务。

## 异步任务

执行到异步任务的时候，主线程会将该任务从栈弹出，交给JS引擎，引擎执行完任务之后，将这个任务的回调函数推进任务队列（macrotask或microtask，后文会具体区分）。例如：

````
setTimeout(function a() {
    console.log('a')
}, 1000)
````

这里，延时1000ms是一个异步任务，`a()`是这个任务的回调函数。

至于哪些异步任务的回调函数是macrotask哪些是microtask，分类如下：

* macrotasks: setTimeout / setInterval / setImmediate / I/O
* microtasks: process.nextTick / promise / MutationObsever / Object.observe 

> promise也是microtask的原因，参考[这篇博文](https://abc.danch.me/microtasks-macrotasks-more-on-the-event-loop-881557d7af6f)，考虑到promise.then.then.then....多个promise链式执行，如果promise是macrotask，那么这条链在执行过程中很可能因为被当前的microtask队列隔断，而分处于不同的macrotask周期中执行了。

## 事件循环(Event Loop)

事件循环可以理解为一个调度器，会一直检查当前主线程执行栈是否为空，若为空，则把三个队列中的任务按照以下顺序推进执行栈中执行：

![](https://pic3.zhimg.com/v2-ad1a251cb91d37625185a4fb874494fc_1200x500.jpg)

* 浏览器通常每秒尝试渲染页面60次，以达到每秒60帧（60 fps），这个帧速率通常被认为是平滑运动的理想选择。这意味着浏览器尝试每16ms渲染一帧。上图中“update rendering”操作在事件循环中进行，这是因为在呈现页面时，页面内容不应该被另一个任务修改。这意味着如果我们应用实现平滑的效果，单个事件循环中不能占据太多时间。单个任务和由该任务生成的所有microtasks应该在16毫秒内完成。

## 参考

* 一个经典的StackOverflow回答：https://stackoverflow.com/a/25933985/8356786
* Medium文章：https://abc.danch.me/microtasks-macrotasks-more-on-the-event-loop-881557d7af6f
* 一部现场演讲视频：https://www.youtube.com/watch?v=8aGhZQkoFbQ