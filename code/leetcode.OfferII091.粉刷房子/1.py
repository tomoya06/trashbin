
class Solution:
    def minCost(self, costs: List[List[int]]) -> int:
        dfs = costs[0]
        nhouse = len(costs)
        for n in range(1, nhouse):
            dfs = [
                costs[n][0] + min(dfs[1], dfs[2]),
                costs[n][1] + min(dfs[0], dfs[2]),
                costs[n][2] + min(dfs[0], dfs[1]),
            ]
        
        return min(dfs)
