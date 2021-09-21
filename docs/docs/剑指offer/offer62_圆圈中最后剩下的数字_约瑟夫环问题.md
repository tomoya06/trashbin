
---
tags:
  - 剑指offer
  - 递归
  - 数学问题
---

# 圆圈中最后剩下的数字_约瑟夫环问题

## 题解 1_难在数学推理.py

```.py
# ##剑指offer#递归#数学问题##levelm
class Solution:
    def lastRemaining(self, n: int, m: int) -> int:
        def dp(x):
            if x == 1:
                return 0
            return (dp(x-1)+m) % x
        return dp(n)
        
```

## 题解 2_迭代.py

```.py
class Solution:
    def lastRemaining(self, n: int, m: int) -> int:
        ans = 0
        for n in range(2, n+1):
            ans = (ans+m) % n
        return ans

```


