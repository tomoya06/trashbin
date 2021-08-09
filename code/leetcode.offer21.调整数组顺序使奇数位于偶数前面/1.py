# ##剑指offer##levele
class Solution:
    def exchange(self, nums: List[int]) -> List[int]:
        di = 0
        for idx in range(len(nums)):
            n = nums[idx]
            if n%2:
                nums[di], nums[idx] = nums[idx], nums[di]
                di += 1
            else:
                pass
        return nums
