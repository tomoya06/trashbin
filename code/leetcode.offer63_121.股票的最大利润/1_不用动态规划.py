# ##剑指offer#动态规划##levele
class Solution:
    def maxProfit(self, prices: List[int]) -> int:
        if not prices:
            return 0
        maxx = 0
        low = prices[0]
        for idx in range(1, len(prices)):
            maxx = max(maxx, prices[idx]-low)
            low = min(low, prices[idx])
        return maxx
