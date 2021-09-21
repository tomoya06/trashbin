
---
tags:
  - 剑指offer
  - 动态规划
  - 记忆化搜索
---

# 斐波拉契数列

## 题解 1.py

```.py
# ##剑指offer#动态规划#记忆化搜索##levele
# 注意反向递归会超时
class Solution:
    def fib(self, n: int) -> int:
        # if n<=1:
        #     return n
        # res = [0 for _ in range(n+1)]
        # res[0], res[1] = 0, 1
        # for i in range(2, n+1):
        #     res[i] = res[i-1] + res[i-2]
        # return res[n] % 1000000007

        a, b = 0, 1
        for _ in range(n):
            a, b = b, a+b
        return a % 1000000007

```


