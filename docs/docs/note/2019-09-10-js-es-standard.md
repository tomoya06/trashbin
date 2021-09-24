---
categories:
- JavaScript
- 前端
date: 2019-09-10 14:12:56
title: 各代ES标准及特点
---

总结ECMAScript标准的命名、特点。

<!-- more -->

## 分代/颁布年份

* ES1 ES2 ES3 ES4: 1997 1998 1999 (NOT PASSED)
* ES5: 2009
* ES6 / ES2015: 2015。从此每年一代
* ES7 / ES2016
* ES8 / ES2017

## Stage

> 中文版完整介绍可参考[这里](https://www.jianshu.com/p/b0877d1fc2a4)。TC39最新版提案的收藏仓库[在这里](https://github.com/tc39/proposals)。

每一项新特性，要最终纳入ECMAScript规范中，TC39拟定了一个处理过程，共包含5个阶段，Stage 0 ~ Stage 4。

* Stage 0: strawman 一种推进ECMAScript发展的自由形式，任何TC39成员，或者注册为TC39贡献者的会员，都可以提交。
* Stage 1: proposal 该阶段产生一个正式的提案。
* Stage 2: draft 草案是规范的第一个版本，与最终标准中包含的特性不会有太大差别。草案之后，原则上只接受增量修改。
* Stage 3: candidate 候选阶段，获得具体实现和用户的反馈。此后，只有在实现和使用过程中出现了重大问题才会修改。
* Stage 4: finished 已经准备就绪，该特性会出现在年度发布的规范之中。

## 新特性

### ECMAScript 6 / 2009 - 2015

> 完整新特性列表可见[ECMAScript 6 — New Features: Overview & Comparison](http://es6-features.org)或参考阮一峰的[ES6入门](http://es6.ruanyifeng.com/)。此处仅罗列部分经典/常用/有点意思的新特性。

````
- 新的变量修饰符 const let
- 箭头函数 () => {}
- 解构数组/解构对象 ...obj ...list
- 解构赋值 { a = 3, lhs: { op: b }, c } = node
  - 数组解构的妙用 [a, b] = [b, a]
- 函数参数默认值 function fn(a = 1)
- 模板字符串 `string ${substring}`
- 对象属性名缩写 x = 0; obj = { x }
- 模块控制 export/import, export default
- 类 class, class Children extends Parent
- 类的静态方法 static
- 类的getter/setter get, set
- 新类型 Symbol
- 新类型 Map/Set WeakMap/WeakSet
- 新类型 Promise
- 迭代器
- 数值/函数/数组/对象添加了新的方法
````

### ECMAScript 7 / 2016

````
- 数组新方法 Array.prototype.includes
- 求幂运算符 **
````

### ECMAScript 8 / 2017

````
- 对象新方法 Object.values Object.entries Object.getOwnPropertyDescriptors
- 字符串填充 str.padStart(10, '_') str.padEnd(10, '_')
- 新语法：函数最后一个参数后可加逗号
- 异步函数修饰符 async/await
````