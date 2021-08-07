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
