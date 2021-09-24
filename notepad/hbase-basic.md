---
title: HBase 入门
date: 2019-11-21 11:49:39
tags:
- Java
- HBase
- 后台
---

## 简介

### 介绍

#### 特点

* 大：一个表可以有上亿行，上百万列；
* 面向列(族)的存储和权限控制，列(族)独立检索；
* 空(null)列不占用存储空间
* 数据多版本，默认版本号是单元插入时的时间戳；

### 基本概念

* Row Key
* Column Family
* Column: ``family:qualifier``
* Version Number
* Value/Cell: Index of a Cell = ``<key, column family, qualifier, timestamp>``

