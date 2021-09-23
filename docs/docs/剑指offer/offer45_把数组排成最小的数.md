---
tags:
  - 剑指offer
---

# 把数组排成最小的数

## 题解 1.js

```.js
// ##剑指offer##levele
/**
 * @param {number[]} nums
 * @return {string}
 */
 var minNumber = function(nums) {
  return nums.sort((a, b) => {
      return `${a}${b}` > `${b}${a}` ? 1 : -1
  }).join('')
};

```

## 题解 2_手写快排.py

```.py
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

```


