class Solution:
    def cuttingRope(self, n: int) -> int:
        dp = [0 for _ in range(n+1)]
        dp[0], dp[1], dp[2] = 1, 1, 1
        for nn in range(2, n+1):
            for lastPiece in range(1, nn//2+1):
                dp[nn] = max(dp[nn], lastPiece * dp[nn-lastPiece], lastPiece * (nn-lastPiece))
        return dp[n]
