# ##tag#剑指offer##tagend##

class Solution:
  def findRepeatNumber(self, nums: List[int]) -> int:
    d = {}
    for n in nums:
      if n in d:
        return n
      d[n] = 1
