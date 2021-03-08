#
# @lc app=leetcode.cn id=44 lang=python3
#
# [44] 通配符匹配
#

# @lc code=start
class Solution:
    def isMatch(self, s: str, p: str) -> bool:
        dp = [[False for _ in range(len(s)+1)] for _ in range(len(p)+1)]
        dp[0][0] = True

        for pidx in range(len(p)):
            dp[pidx+1][0] = p[pidx] == '*' and dp[pidx][0]

        for pidx in range(len(p)):
            for sidx in range(len(s)):
                if p[pidx] == '?':
                    dp[pidx+1][sidx+1] = dp[pidx][sidx]
                elif p[pidx] == '*':
                    dp[pidx+1][sidx+1] = dp[pidx][sidx+1] or dp[pidx][sidx] or dp[pidx+1][sidx]
                else:
                    dp[pidx+1][sidx+1] = dp[pidx][sidx] and p[pidx] == s[sidx]
        
        return dp[-1][-1]
# @lc code=end

  