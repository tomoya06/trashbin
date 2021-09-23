---
tags:
  - 剑指offer
  - 分治法
---

# 搜索二维矩阵-ii

## 题解 1.py

```.py
# ##剑指offer#分治法##levelm
# @lc app=leetcode.cn id=240 lang=python3
#
# [240] 搜索二维矩阵 II
#

# @lc code=start
class Solution:
    def searchMatrix(self, matrix: List[List[int]], target: int) -> bool:
        y, x = 0, len(matrix[0])-1
        while x >= 0 and y < len(matrix):
            cur = matrix[y][x]
            if target == cur:
                return True
            if target > cur:
                y += 1
            else:
                x -= 1
        return False


# @lc code=end


```

## 题解 x双重二分查找但不适用.py

```.py
# ##tag#剑指offer#分治法##tagend##
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


```


