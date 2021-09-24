---
date: 2018-12-13 00:54:52
id: nodejs-package
tags:
- 前端
- Node
title: Nodejs的包管理： CommonJS / AMD / CMD
---

> [参考来源](https://www.cnblogs.com/libin-1/p/7127481.html)

<!-- more -->

## CommonJS

* Node创造之初出现，主要为了服务端模块化开发
  
### 模块定义

* 语法：module.exports/exports - require
* 区别：exports只是module.exports的引用，require的内容还是module.exports的

## AMD

* 为了客户端模块化开发而诞生。
* AMD是”Asynchronous Module Definition”的缩写，它采用异步方式加载模块，模块的加载不影响它后面语句的运行。
* 所有依赖这个模块的语句，都定义在一个回调函数中，等到加载完成之后，这个回调函数才会运行。

### 模块定义

* 语法：define(id?, dependencies? , factory) - require(modules[]?, callback)

### 规范实现

* 目前，主要有两个Javascript库实现了AMD规范：[require.js](https://requirejs.org/)和[curl.js](http://cujojs.com/)。

## CMD

* 与AMD类似

### 区别

* AMD和CMD最大的区别是对依赖模块的执行时机处理不同，而不是加载的时机或者方式不同，二者皆为异步加载模块。
* AMD依赖前置，js可以方便知道依赖模块是谁，立即加载；
* 而CMD就近依赖，需要使用把模块变为字符串解析一遍才知道依赖了那些模块，这也是很多人诟病CMD的一点，牺牲性能来带来开发的便利性，实际上解析模块用的时间短到可以忽略。

## ES6标准

> 注意，当前还没有原生的支持ES6语法的JS引擎。参考[这条StackOverflow回答](https://stackoverflow.com/a/31367852/8356786)：
> Keep in mind that there is no JavaScript engine yet that natively supports ES6 modules. You said yourself that you are using Babel. Babel converts import and export declaration to CommonJS (require/module.exports) by default anyway. So even if you use ES6 module syntax, you will be using CommonJS under the hood if you run the code in Node.
> There are technical difference between CommonJS and ES6 modules, e.g. CommonJS allows you to load modules dynamically. ES6 doesn't allow this, but there is an API in development for that.
> Since ES6 modules are part of the standard, I would use them.

### 模块定义

* 语法：export - import