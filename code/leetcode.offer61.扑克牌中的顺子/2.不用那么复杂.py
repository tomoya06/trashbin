class Solution:
    def isStraight(self, nums: List[int]) -> bool:
        nums.sort()
        minn = 0
        for idx in range(len(nums)-1):
            if nums[idx] == 0:
                continue
            if nums[idx] == nums[idx+1]:
                return False
            if minn == 0:
                minn = nums[idx]
        return nums[-1]-minn < 5
