# ##剑指offer##levele

class Solution:
  def findRepeatNumber(self, nums: List[int]) -> int:
    d = {}
    for n in nums:
      if n in d:
        return n
      d[n] = 1
