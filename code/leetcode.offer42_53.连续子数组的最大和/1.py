# ##剑指offer#数学问题#动态规划#分治法##levele
# 差点出不来= =

class Solution:
    def maxSubArray(self, nums: List[int]) -> int:
        np = [] + nums
        maxx = np[0]
        for idx in range(1, len(nums)):
            np[idx] = max(np[idx-1]+nums[idx], nums[idx])
            maxx = max(np[idx], maxx)
        return maxx
