
# 扑克牌中的顺子

>  #剑指offer

## 题解 1.py

```.py
# ##剑指offer##levele
class Solution:
    def isStraight(self, nums: List[int]) -> bool:
        nums.sort()
        subs = 0
        notzero = 0
        zeros = 0
        for n in nums:
            if n != 0:
                if n == notzero:
                    return False
                if notzero != 0:
                    subs += n - notzero
                notzero = n
            else:
                zeros += 1
        
        return subs <= 4 and subs >= 4-zeros

```

## 题解 2.不用那么复杂.py

```.py
class Solution:
    def isStraight(self, nums: List[int]) -> bool:
        nums.sort()
        minn = 0
        for idx in range(len(nums)-1):
            if nums[idx] == 0:
                continue
            if nums[idx] == nums[idx+1]:
                return False
            if minn == 0:
                minn = nums[idx]
        return nums[-1]-minn < 5

```


