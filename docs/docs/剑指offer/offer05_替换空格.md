---
tags:
  - 剑指offer
id: 替换空格
title: 替换空格
---

## 题解 1.py

```.py
# ##剑指offer##levele
class Solution:
    def replaceSpace(self, s: str) -> str:
        ss = ''
        for c in s:
            if c == ' ':
                ss += '%20'
            else:
                ss += c
        return ss


```


