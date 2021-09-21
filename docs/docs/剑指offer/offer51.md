
# 数组中的逆序对

 #剑指offer  #分治法  #归并排序

> 题解 1.py

```.py
# ##剑指offer#分治法#归并排序##levelh
class Solution:
    def reversePairs(self, nums: List[int]) -> int:
        def merge_sort(l, r):
            if l >= r:
                return 0
            mid = (l+r)//2
            res = merge_sort(l, mid) + merge_sort(mid+1, r)
            ll, rr = l, mid+1
            tmp[l:r+1] = nums[l:r+1]
            for idx in range(l, r+1):
                if ll == mid+1:
                    nums[idx] = tmp[rr]
                    rr += 1
                elif rr == r+1:
                    nums[idx] = tmp[ll]
                    ll += 1
                elif tmp[ll] <= tmp[rr]:
                    nums[idx] = tmp[ll]
                    ll += 1
                else:
                    nums[idx] = tmp[rr]
                    res += mid-ll+1
                    rr += 1
            return res
        
        tmp = [0] * len(nums)
        return merge_sort(0, len(nums)-1)

```


