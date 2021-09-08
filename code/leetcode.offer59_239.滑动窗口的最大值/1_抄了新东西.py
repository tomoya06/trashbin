# ##剑指offer#单调队列##levelh
import collections

class Solution:
    def maxSlidingWindow(self, nums: List[int], k: int) -> List[int]:
        if not nums:
            return []
        # deque是单调递减队列
        deque = collections.deque()
        
        for idx in range(k):
            while deque and deque[-1] < nums[idx]:
                deque.pop()
            deque.append(nums[idx])
        res = [deque[0]]

        for idx in range(k, len(nums)):
            if deque and deque[0] == nums[idx-k]:
                deque.popleft()
            while deque and deque[-1] < nums[idx]:
                deque.pop()
            deque.append(nums[idx])
            res.append(deque[0])
        
        return res
