class Solution:
    def minNumber(self, nums: List[int]) -> str:
        nums = [str(n) for n in nums]
        def quick_sort(l, r):
            if l >= r:
                return
            m, n = l, r
            while m<n:
                while nums[n]+nums[l] >= nums[l]+nums[n] and m<n: n -= 1
                while nums[m]+nums[l] <= nums[l]+nums[m] and m<n: m += 1
                nums[m], nums[n] = nums[n], nums[m]
            nums[m], nums[l] = nums[l], nums[m]
            quick_sort(l, m-1)
            quick_sort(m+1, r)
        
        quick_sort(0, len(nums)-1)
        return ''.join(nums)
