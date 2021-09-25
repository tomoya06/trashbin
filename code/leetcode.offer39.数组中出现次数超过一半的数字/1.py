class Solution:
    def majorityElement(self, nums: List[int]) -> int:
        half = len(nums)/2
        dd = {}
        for n in nums:
            dd[n] = dd[n]+1 if n in dd else 1
            if dd[n] > half:
                return n
        return -1
