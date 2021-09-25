class Solution:
    def maxSubArray(self, nums: List[int]) -> int:
        def calcSums(l, r):
            if l == r:
                return {
                    'lsum': nums[l],
                    'rsum': nums[r],
                    'tsum': nums[r],
                    'msum': nums[r],
                }
            m = (l+r)//2
            left = calcSums(l, m)
            right = calcSums(m+1, r)
            return {
                'lsum': max(left['lsum'], left['tsum']+right['lsum']),
                'rsum': max(right['rsum'], left['rsum']+right['tsum']),
                'tsum': left['tsum']+right['tsum'],
                'msum': max(left['msum'], right['msum'], left['rsum']+right['lsum'])
            }
        return calcSums(0, len(nums)-1)['msum']
