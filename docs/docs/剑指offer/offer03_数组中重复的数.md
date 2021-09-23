---
tags:
  - 剑指offer
---

# 数组中重复的数

## 题解 1.py

```.py
# ##剑指offer##levele

class Solution:
  def findRepeatNumber(self, nums: List[int]) -> int:
    d = {}
    for n in nums:
      if n in d:
        return n
      d[n] = 1

```


