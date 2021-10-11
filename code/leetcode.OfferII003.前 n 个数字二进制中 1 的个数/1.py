
class Solution:
    def countBits(self, n: int) -> List[int]:
        def countOnes(nn: int) -> int:
            cnt = 0
            while nn:
                cnt += 1
                nn = nn & (nn-1)
            return cnt
        
        res = [0]
        for i in range(1, n+1):
            res.append(countOnes(i))
        
        return res
