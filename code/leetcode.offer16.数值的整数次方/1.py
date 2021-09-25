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

 