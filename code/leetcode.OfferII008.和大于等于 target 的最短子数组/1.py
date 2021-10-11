
class Solution:
    def minSubArrayLen(self, target: int, nums: List[int]) -> int:
        l, r, m = 0, 0, len(nums)+1
        cur = nums[0]
        right = len(nums)-1

        while l <= right and r <= right:
            if cur < target or l > r:
                r += 1
                if r <= right:
                    cur += nums[r]
                else:
                    break
            else:
                m = min(m, r-l+1)
                cur -= nums[l]
                l += 1
        
        return m if m <= len(nums) else 0
