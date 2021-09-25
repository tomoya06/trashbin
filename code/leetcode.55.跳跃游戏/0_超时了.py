# @lc app=leetcode.cn id=55 lang=python3
#
# [55] 跳跃游戏
#

# @lc code=start
from typing import List


class Solution:
    def canJump(self, nums: List[int]) -> bool:
        if len(nums) == 0:
            return False
        avail_list = [False for _ in nums]
        avail_list[-1] = True
        for idx in range(len(nums)-2, -1, -1):
            for cur_step in range(nums[idx], 0, -1):
                if idx + cur_step < len(nums) and avail_list[idx + cur_step]:
                    avail_list[idx] = True
                    break
        return avail_list[0]
# @lc code=end

