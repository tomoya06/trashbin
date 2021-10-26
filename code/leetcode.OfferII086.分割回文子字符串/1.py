
class Solution:
    def partition(self, s: str) -> List[List[str]]:
        n = len(s)
        dp = [[True] * n for _ in range(n)]

        for i in range(n-1, -1, -1):
            for j in range(i+1, n):
                dp[i][j] = s[i] == s[j] and dp[i+1][j-1]
        
        ret = []
        ans = []

        def dfs(idx):
            if idx == n:
                ret.append(list(ans))
            
            for eidx in range(idx, n):
                if dp[idx][eidx]:
                    ans.append(s[idx:eidx+1])
                    dfs(eidx+1)
                    ans.pop()
            
        dfs(0)

        return ret
