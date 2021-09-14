class Solution:
    def lastRemaining(self, n: int, m: int) -> int:
        ans = 0
        for n in range(2, n+1):
            ans = (ans+m) % n
        return ans
