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
