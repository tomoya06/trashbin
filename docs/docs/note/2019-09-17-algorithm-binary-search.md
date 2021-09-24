---
date: 2019-09-17 13:58:14
id: algorithm-binary-search
tags:
- 算法
- 二分法
title: 二分查找cheat sheet
---

> 二分细节弄死人

<!-- more -->

总结一下吧。或者说直接出猫了。

来自[这个题解](https://leetcode-cn.com/problems/find-first-and-last-position-of-element-in-sorted-array/solution/er-fen-cha-zhao-suan-fa-xi-jie-xiang-jie-by-labula/)

示例代码语言为Java

## 二分查找框架

````
int binarySearch(int[] nums, int target) {
    int left = 0, right = ...;

    while(...) {
        int mid = (right + left) / 2;
        if (nums[mid] == target) {
            ...
        } else if (nums[mid] < target) {
            left = ...
        } else if (nums[mid] > target) {
            right = ...
        }
    }
    return ...;
}
````

* 技巧：不要出现 else，而是把所有情况用 else if 写清楚，这样可以清楚地展现所有细节。
* 思路：left 和 right 实际是控制一个当前的有效区间，但是区间是闭区间还是半开区间，就看不同情况了。
* 计算 mid 时需要技巧防止溢出，即`mid=left+(right-left)/2`。本文暂时忽略这个问题。

### 寻找一个数

````
var searchTarget = function (nums, target) {
  let left = 0, right = nums.length - 1;
  while (left <= right) {
    let mid = Math.floor((left + right) / 2);
    if (nums[mid] === target) {
      return mid;
    } else if (nums[mid] < target) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }
  return -1;
}

````

* 搜索区间：`[left, right]`闭区间
* 初始区间：`[0, len-1]`
* 终止：mid找到target值；或区间为空

### 寻找左侧边界/第一个target值的位置

````

var searchLeftBorder = function (nums, target) {
  let left = 0, right = nums.length;
  while (left < right) {
    let mid = Math.floor((left + right) / 2);
    if (nums[mid] === target) {
      right = mid;
    } else if (nums[mid] < target) {
      left = mid + 1;
    } else {
      right = mid;
    }
  }
  return left;
}
````

* 搜索区间：`[left, right)`半开区间
* 初始区间：`[0, len)`
* 终止：`left === right`，区间为空；
  * 返回值也可以理解为nums中小于target的数字数量

### 寻找右侧边界/最后一个target值的位置

````
var searchRightBorder = function (nums, target) {
  let left = 0, right = nums.length;
  while (left < right) {
    let mid = Math.floor((left + right) / 2);
    if (nums[mid] === target) {
      left = mid + 1;
    } else if (nums[mid] < target) {
      left = mid + 1;
    } else {
      right = mid;
    }
  }
  return left - 1;
}
````

* 搜索区间：`[left, right)`半开区间
* 初始区间：`[0, len)`
* 终止：返回`left - 1`，因为在循环中`nums[mid] == target`时`left = mid + 1 ==> mid = left - 1`，即`nums[left - 1] == target`
  * 返回值可以理解为nums中小于等于target的数字数量-1（若不存在该target则不-1）