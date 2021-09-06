# ##剑指offer#位运算#数学问题##levelm
# 用到的位运算公式：a异或a=0 0异或a=a 
# a异或b≠0 用来分组
# https://leetcode-cn.com/problems/shu-zu-zhong-shu-zi-chu-xian-de-ci-shu-lcof/solution/jian-zhi-offer-56-i-shu-zu-zhong-shu-zi-tykom/
class Solution:
    def singleNumbers(self, nums: List[int]) -> List[int]:
        xy, m = 0, 1
        for num in nums:
            xy ^= num
        while m & xy == 0:
            m <<= 1
        x, y = 0, 0
        for num in nums:
            if num & m:
                x ^= num
            else:
                y ^= num
        
        return [x, y]
