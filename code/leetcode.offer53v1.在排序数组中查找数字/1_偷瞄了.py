class Solution:
    def search(self, nums: List[int], target: int) -> int:
        def binSearch(lower):
            ll, rr = 0, len(nums)-1
            while ll <= rr:
                mid = (ll+rr)//2
                if lower:
                    if nums[mid] >= target:
                        rr = mid-1
                    else:
                        ll = mid
                else:
                    if nums[mid] <= target:
                        ll = mid+1
                    else:
                        rr = mid
            return ll
        
        lm = binSearch(True)
        rm = binSearch(False)
        return rm-lm+1