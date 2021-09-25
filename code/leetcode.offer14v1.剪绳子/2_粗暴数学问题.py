# 尽量保证均分
# 也有数学证明尽量分成3等分是最合理的，但我觉得面试的时候还是算了
# https://leetcode-cn.com/problems/integer-break/solution/zheng-shu-chai-fen-by-leetcode-solution/
class Solution:
    def cuttingRope(self, n: int) -> int:
        maxx = 1
        for nn in range(2, n):
            ps = n//nn
            left = n%nn
            maxx = max(maxx, pow((ps+1), left) * pow(ps, (nn-left)))
        return maxx
