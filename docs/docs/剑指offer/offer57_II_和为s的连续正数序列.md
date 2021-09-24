---
tags:
  - 剑指offer
  - 双指针
id: II_和为s的连续正数序列
title: II_和为s的连续正数序列
---

## 题解 1_偷瞄了.py

```.py
# ##剑指offer#双指针##levele
class Solution:
    def findContinuousSequence(self, target: int) -> List[List[int]]:
        l, r, s = 1, 2, 3
        res = []
        while l < r:
            if s == target:
                res.append(list(range(l, r+1)))
                s -= l
                l += 1
            if s < target:
                r += 1
                s += r
            elif s > target:
                s -= l
                l += 1
        return res

```


