---
title: js事件执行流程
date: 2019-04-09 14:17:58
tags:
- JavaScript
- 前端
---

首先记住js是单线程语言，这就意味着在任何时候都只有一个主线程，某个时间主线程只能执行一个任务。

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

### 渲染队列

渲染队列就是浏览器用来渲染DOM的任务队列，优先级高于普通的任务队列。

## 事件循环(Event Loop)

事件循环可以理解为一个调度器，会一直检查当前主线程执行栈是否为空，若为空，则把三个队列中的任务按照以下规则推进执行栈中执行：

* 总是优先选择渲染队列中的任务
* 其次优先选择macrotask队列中的任务， 每执行完一个macrotask任务，则必须执行完microtask队列中的所有任务方可执行下一个macrotask任务
* microtask队列可以在执行过程中又有新任务进队，这时，对于上一条规则，新任务也要被执行完

> 这里，第三条规则有可能存在microtask递归插入新的microtask任务的情况，即导致microtask无限延长，不同的JS引擎会对这种情况做出限制，例如Chrome会设置执行栈最大深度，越栈即报错

macrotask任务和microtask任务的执行顺序可以参考这段示例代码：

````
for (macroTask of macroTaskQueue) {
    // 1. Handle current MACRO-TASK
    handleMacroTask();
      
    // 2. Handle all MICRO-TASK
    for (microTask of microTaskQueue) {
        handleMicroTask(microTask);
    }
}
````

## 参考

* 一个经典的StackOverflow回答：https://stackoverflow.com/a/25933985/8356786
* Medium文章：https://abc.danch.me/microtasks-macrotasks-more-on-the-event-loop-881557d7af6f
* 一部现场演讲视频：https://www.youtube.com/watch?v=8aGhZQkoFbQ