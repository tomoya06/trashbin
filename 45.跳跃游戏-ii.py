#
# @lc app=leetcode.cn id=45 lang=python3
#
# [45] 跳跃游戏 II
#

# @lc code=start
class Solution:
    def jumpFailed(self, nums: List[int]) -> int:
        toEnd = [0 for _ in nums]
        for idx in range(len(nums)-2, -1, -1):
            if nums[idx] == 0:
                toEnd[idx] = -1
            minStep = len(nums)+1
            for step in range(min(nums[idx], len(nums)-1-idx), 0, -1):
                if toEnd[step+idx] != -1:
                    minStep = min(minStep, 1+toEnd[step+idx])
            toEnd[idx] = minStep
        return toEnd[0]

    def jump(self, nums: List[int]) -> int:
        step, start, end, nn = 0, 0, 0, len(nums)
        while end < nn-1:
            step += 1
            maxend = end
            for i in range(end, start-1, -1):
                if i + nums[i] > nn-1:
                    return step
                maxend = max(maxend, i+nums[i])
            start, end = end+1, maxend
        return step

# @lc code=end

