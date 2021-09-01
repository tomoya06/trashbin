from heapq import *

class Solution:
    def nthUglyNumber(self, n: int) -> int:
        heap = [1]
        seen = {1}
        factors = [2, 3, 5]

        for _ in range(n-1):
            curMin = heappop(heap)
            for fac in factors:
                newseen = fac * curMin
                if newseen not in seen:
                    seen.add(newseen)
                    heappush(heap, newseen)
        
        return heappop(heap)