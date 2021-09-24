---
tags:
  - 剑指offer
  - 哈希表
id: 第一个只出现一次的字符
title: 第一个只出现一次的字符
---

## 题解 1.py

```.py
# ##剑指offer#哈希表##levele
class Solution:
    def firstUniqChar(self, s: str) -> str:
        d = {}
        for idx, ch in enumerate(list(s)):
            if ch in d:
                d[ch] = -1
            else:
                d[ch] = idx
        minChar = ' '
        minIdx = len(s)
        for k, val in d.items():
            if val >= 0 and val < minIdx:
                minIdx = val
                minChar = k
        return minChar

```


