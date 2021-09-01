# ##剑指offer#二叉树#动态规划##levelm
# https://leetcode-cn.com/problems/chou-shu-lcof/solution/mian-shi-ti-49-chou-shu-dong-tai-gui-hua-qing-xi-t/
class Solution:
    def nthUglyNumber(self, n: int) -> int:
        dp = [1 for _ in range(n)]
        # a表示idx=a之前的数都已经乘过2加到队列里了
        a, b, c = 0, 0, 0
        
        for idx in range(1, n):
            dp[idx] = min(dp[a]*2, dp[b]*3, dp[c]*5)
            if dp[idx] == dp[a]*2: a += 1
            if dp[idx] == dp[b]*3: b += 1
            if dp[idx] == dp[c]*5: c += 1
        return dp[-1]
