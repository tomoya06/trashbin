
class Solution:
    def coinChange(self, coins: List[int], amount: int) -> int:
        if amount == 0:
            return 0

        if len(coins) == 1:
            return -1 if amount % coins[0] else amount // coins[0]

        dfs = [0] + [-1] * (amount)

        for step in range(1, amount+1):
            curMin = amount + 1
            for coin in coins:
                if step-coin >= 0 and dfs[step-coin] >= 0:
                    curMin = min(curMin, dfs[step-coin] + 1)
            dfs[step] = curMin if curMin < amount+1 else -1

        return dfs[-1]
