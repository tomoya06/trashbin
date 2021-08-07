# ##剑指offer#位运算##levele
class Solution:
    def hammingWeight(self, n: int) -> int:
        cnt = 0
        bit = 1
        while bit <= n:
            if n & bit:
                cnt += 1
            bit <<= 1
        return cnt
