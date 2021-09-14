# ##剑指offer#递归#数学问题##levelm
class Solution:
    def lastRemaining(self, n: int, m: int) -> int:
        def dp(x):
            if x == 1:
                return 0
            return (dp(x-1)+m) % x
        return dp(n)
        