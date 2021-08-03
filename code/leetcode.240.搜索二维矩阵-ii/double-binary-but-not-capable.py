# ##tag#剑指offer#二分查找##tagend##
# @lc app=leetcode.cn id=240 lang=python3
#
# [240] 搜索二维矩阵 II
#

# 注意：双二分查找在这道题不适用
# 因为每行头部并不保证比上一行尾部大
# FIXME: 有没有这个解法适用的题目？

# @lc code=start
class Solution:
    def searchMatrix(self, matrix: List[List[int]], target: int) -> bool:
      def findInRow(idx: int):
        row = matrix[idx]
        left, right, mid = 0, len(row)-1, 0
        while left <= right:
          mid = (left+right)//2
          if row[mid] == target:
            return True
          if row[mid] > target:
            right = mid-1
          else:
            left = mid+1
        return False
      
      def findHeader():
        headers = [row[0] for row in matrix]
        left, right, mid = 0, len(headers), 0
        if headers[0] > target:
          return -1
        while left < right:
          mid = (left+right)//2
          if headers[mid] == target:
            return mid
          if headers[mid] > target:
            right = mid
          else:
            left = mid+1
        return left
      
      headerIdx = findHeader()
      if headerIdx < 0:
        return False
      return findInRow(headerIdx)

# @lc code=end

