
---
tags:
  - 剑指offer
---

# 和为s的两个数字

## 题解 1.py

```.py
# ##剑指offer##levele
class Solution:
    def twoSum(self, nums: List[int], target: int) -> List[int]:
        l, r = 0, len(nums)-1
        while l < r:
            curSum = nums[l] + nums[r]
            if curSum == target:
                return [nums[l], nums[r]]
            if curSum > target:
                r -= 1
            else:
                l += 1
        return []

```


