
---
tags:
  - 剑指offer
  - 数学问题
---

# 构建乘积数组

## 题解 1_愚昧的解法.py

```.py
# ##剑指offer#数学问题##levelm
class Solution:
    def constructArr(self, a: List[int]) -> List[int]:
        if not a:
            return []
        left, right = [1 for _ in range(len(a)+2)], [1 for _ in range(len(a)+2)]
        length = len(a)
        for idx, num in enumerate(a):
            left[idx+1] = left[idx] * num
            right[length-idx] = right[length-idx+1] * a[length-idx-1]
        
        return [left[idx]*right[idx+2] for idx in range(len(a))]

```

## 题解 2_干练的解法.py

```.py
class Solution:
    def constructArr(self, a: List[int]) -> List[int]:
        b, tmp = [1 for _ in a], 1
        for idx in range(1, len(a)):
            b[idx] = b[idx-1] * a[idx-1]
        for idx in range(len(a)-2, -1, -1):
            tmp *= a[idx+1]
            b[idx] *= tmp
        return b

```


