# n & (n-1) 二进制效果是把n的最后一个1给去掉
# 更快
class Solution:
    def hammingWeight(self, n: int) -> int:
        cnt = 0
        while n:
            n = n & (n-1)
            cnt+=1
        return cnt
