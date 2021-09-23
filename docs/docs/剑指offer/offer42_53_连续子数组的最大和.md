---
tags:
  - 剑指offer
  - 数学问题
  - 动态规划
  - 分治法
---

# 连续子数组的最大和

## 题解 1.py

```.py
# ##剑指offer#数学问题#动态规划#分治法##levele
# 差点出不来= =

class Solution:
    def maxSubArray(self, nums: List[int]) -> int:
        np = [] + nums
        maxx = np[0]
        for idx in range(1, len(nums)):
            np[idx] = max(np[idx-1]+nums[idx], nums[idx])
            maxx = max(np[idx], maxx)
        return maxx

```

## 题解 2_线段树.py

```.py
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

```


