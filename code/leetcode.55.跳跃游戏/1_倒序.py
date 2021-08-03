# ##tag#贪心算法#动态规划##tagend##
# @lc app=leetcode.cn id=55 lang=python3
#
# [55] 跳跃游戏
#

# @lc code=start
from typing import List


class Solution:
    def canJump(self, nums: List[int]) -> bool:
        goal = len(nums)-1
        for idx in range(len(nums))[::-1]:
            if idx+nums[idx] >= goal:
                goal = idx
        return goal == 0
# @lc code=end

