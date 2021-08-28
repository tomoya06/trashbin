# ##剑指offer#二叉树##levelh
from heapq import *

class MedianFinder:

    def __init__(self):
        """
        initialize your data structure here.
        """
        self.left = []
        self.right = []


    def addNum(self, num: int) -> None:
        if len(self.left) == len(self.right):
            heappush(self.left, -heappushpop(self.right, num))
        else:
            heappush(self.right, -heappushpop(self.left, -num))

    def findMedian(self) -> float:
        return -self.left[0] if len(self.left) != len(self.right) else (self.right[0]-self.left[0])/2



# Your MedianFinder object will be instantiated and called as such:
# obj = MedianFinder()
# obj.addNum(num)
# param_2 = obj.findMedian()