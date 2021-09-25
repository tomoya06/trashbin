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

