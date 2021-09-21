
# 剪绳子II

 #剑指offer  #数学问题

> 题解 1.py

```.py
# ##剑指offer#数学问题##levelm
class Solution:
    def cuttingRope(self, n: int) -> int:
        maxx = 1
        for nn in range(2, n):
            ps = n//nn
            left = n%nn
            maxx = max(maxx, pow((ps+1), left) * pow(ps, (nn-left)))
        return maxx % 1000000007
```


