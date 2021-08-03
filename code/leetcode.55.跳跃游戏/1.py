# ##tag#贪心算法#动态规划##tagend##
# @lc app=leetcode.cn id=55 lang=python3
#
# [55] 跳跃游戏
#

# @lc code=start
from typing import List


class Solution:
    def canJump(self, nums: List[int]) -> bool:
        m = 0
        for idx in range(len(nums)):
            if idx > m:
                return False
            m = max(m, idx+nums[idx])
        return m >= len(nums)-1
# @lc code=end

