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

 