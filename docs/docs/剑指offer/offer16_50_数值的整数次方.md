---
tags:
  - 剑指offer
  - 递归
  - 数学问题
---

# 数值的整数次方

## 题解 1.py

```.py
# ##剑指offer#递归#数学问题##levelm
class Solution:
    def myPow(self, x: float, n: int) -> float:
        self.pownRes = {
            0: 1,
            1: x,
        }
        def calcPow(m):
            if m in self.pownRes:
                return self.pownRes[m]
            res = calcPow(m//2) * calcPow(m//2) * calcPow(m%2)
            self.pownRes[m] = res
            return res
        
        calc = calcPow(abs(n))
        return calc if n >= 0 else 1/calc

 
```

## 题解 2_不需要记忆.py

```.py
class Solution:
    def myPow(self, x: float, n: int) -> float:
        def calcPow(m):
            if m == 0:
                return 1
            if m == 1:
                return x
    
            half = calcPow(m//2)
            res = half * half
            if m%2 == 1:
                res *= x
            return res
        
        calc = calcPow(abs(n))
        return calc if n >= 0 else 1/calc

 
```

## 题解 2_快速幂.py

```.py
# 数学推导见：
# https://leetcode-cn.com/problems/powx-n/solution/50-powx-n-kuai-su-mi-qing-xi-tu-jie-by-jyd/
class Solution:
    def myPow(self, x: float, n: int) -> float:
        nn = n if n >= 0 else -n
        res = 1
        bit = x
        while nn:
            if nn & 1:
                res *= bit
            bit *= bit
            nn //= 2
        return res if n >= 0 else 1.0/res

```


