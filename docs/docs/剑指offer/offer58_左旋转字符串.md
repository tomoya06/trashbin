---
tags:
  - 剑指offer
  - 字符串
---

# 左旋转字符串

## 题解 1.py

```.py
# ##剑指offer#字符串##levele
class Solution:
    def reverseLeftWords(self, s: str, n: int) -> str:
        return s[n:]+s[:n]

```


