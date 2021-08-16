class Solution:
    def majorityElement(self, nums: List[int]) -> int:
        def subMajor(lo, hi):
            if lo == hi:
                return nums[lo]
            mid = (lo+hi)//2
            leftMajor = subMajor(lo, mid)
            rightMajor = subMajor(mid+1, hi)
            if leftMajor == rightMajor:
                return leftMajor
            leftMajorCnt = sum(1 for idx in range(lo, hi+1) if nums[idx] == leftMajor)
            rightMajorCnt = sum(1 for idx in range(lo, hi+1) if nums[idx] == rightMajor)
            return leftMajor if leftMajorCnt > rightMajorCnt else rightMajor
        
        return subMajor(0, len(nums)-1)
