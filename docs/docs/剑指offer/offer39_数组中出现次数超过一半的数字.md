
# 数组中出现次数超过一半的数字

>  #剑指offer  #数学问题  #分治法

## 题解 1.py

```.py
# ##剑指offer#数学问题#分治法##levele
class Solution:
    def majorityElement(self, nums: List[int]) -> int:
        half = len(nums)/2
        dd = {}
        for n in nums:
            dd[n] = dd[n]+1 if n in dd else 1
            if dd[n] > half:
                return n
        return -1

```

## 题解 2_中位数.py

```.py
class Solution:
    def majorityElement(self, nums: List[int]) -> int:
        nums.sort()
        return nums[len(nums)//2]

```

## 题解 2_二分查找.py

```.py
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

```

## 题解 2_神之摩尔投票法.py

```.py
# 神之算法
# 参考https://leetcode-cn.com/problems/shu-zu-zhong-chu-xian-ci-shu-chao-guo-yi-ban-de-shu-zi-lcof/solution/shu-zu-zhong-chu-xian-ci-shu-chao-guo-yi-pvh8/
class Solution:
    def majorityElement(self, nums: List[int]) -> int:
        candidate = None
        cnt = 0
        for n in nums:
            if cnt == 0:
                candidate = n 
            if n == candidate:
                cnt += 1
            else:
                cnt -= 1
        
        return candidate

```


