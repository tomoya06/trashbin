#
# @lc app=leetcode.cn id=41 lang=python3
#
# [41] 缺失的第一个正数
#

# @lc code=start
class Solution:
    def firstMissingPositive2(self, nums: List[int]) -> int:
        existed = {x: True for x in range(1, len(nums)+1)}
        for n in nums:
            if n in existed:
                existed[n] = False
        
        for n in existed.keys():
            if existed[n]:
                return n
        return len(nums)+1

    def firstMissingPositive(self, nums: List[int]) -> int:
        for i in range(len(nums)):
            while 0 <= nums[i] - 1 < len(nums) and nums[i] != nums[nums[i]-1]:
                tmp = nums[i] - 1
                nums[i], nums[tmp] = nums[tmp], nums[i]
        for i in range(len(nums)):
            if nums[i] != i+1:
                return i+1
        return len(nums) + 1

# @lc code=end

