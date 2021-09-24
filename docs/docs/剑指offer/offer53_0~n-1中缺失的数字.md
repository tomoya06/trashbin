---
tags:
  - 剑指offer
  - 二分法
id: 0~n-1中缺失的数字
title: 0~n-1中缺失的数字
---

## 题解 1.py

```.py
# ##剑指offer#二分法##levele
class Solution:
    def missingNumber(self, nums: List[int]) -> int:
        l, r = 0, len(nums)-1
        while l < r:
            mid = (l+r)//2
            if nums[r] == r:
                return nums[r]+1
            if nums[mid] == mid+1:
                r = mid
            else:
                l = mid+1
        return l+1 if nums[l] == l else l

```


