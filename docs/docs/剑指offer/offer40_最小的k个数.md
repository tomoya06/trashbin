---
tags:
  - 剑指offer
---

# 最小的k个数

## 题解 1.py

```.py
# ##剑指offer##levele
class Solution:
    def getLeastNumbers(self, arr: List[int], k: int) -> List[int]:
        arr.sort()
        return arr[:k]
```


