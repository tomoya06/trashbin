---
title: 数据结构基本+基本拓展
date: 2019-09-27 09:52:14
tags:
- 算法
---

> 数据结构基础记录，以及之前课本上没有的东西

<!-- more -->

## 基本数据结构

### 二分查找树

* 定义
  * 若任意节点的左子树不空，则左子树上所有节点的值均小于它的根节点的值；
  * 若任意节点的右子树不空，则右子树上所有节点的值均大于它的根节点的值；
  * 任意节点的左、右子树也分别为二叉查找树；
  * 没有键值相等的节点。
* 特点
  * 插入、查找速度快，为O(log n)
* 改良版二分查找树：AVL树、红黑树等

## 别的排序算法

### 桶排序

目标数据落在一个已知范围内，排序过程是将每个值放在它对应的位置里，也就是一个桶，然后再对每个桶里的值排序。

参考LeetCode题目/题解：[Q41](https://leetcode-cn.com/problems/first-missing-positive/solution/tong-pai-xu-python-dai-ma-by-liweiwei1419/)