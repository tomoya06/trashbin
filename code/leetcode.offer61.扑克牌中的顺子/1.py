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
