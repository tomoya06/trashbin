
# 青蛙跳台阶问题

>  #剑指offer

## 题解 1.py

```.py
# ##剑指offer##levele
# 就是斐波拉契数列
class Solution:
    def numWays(self, n: int) -> int:
        a, b = 1, 1
        for _ in range(n):
            a, b = b, a+b
        return a % 1000000007

```


