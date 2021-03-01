#
# @lc app=leetcode.cn id=37 lang=python3
#
# [37] 解数独
#

# @lc code=start
class Solution:
    def solveSudoku(self, board: List[List[str]]) -> None:
        valid = False
        xxs = [[False for _ in range(9)] for _ in range(9)]
        yys = [[False for _ in range(9)] for _ in range(9)]
        cells = [[[False for _ in range(9)] for _ in range(3)] for _ in range(3)]
        spaces = []

        for x in range(9):
            for y in range(9):
                if board[x][y] == '.':
                    spaces.append([x, y])
                else:
                    cur = int(board[x][y])-1
                    xxs[x][cur] = yys[y][cur] = cells[x//3][y//3][cur] = True
        
        def dfs(pos):
            nonlocal valid
            if pos == len(spaces):
                valid = True
                return
            xx, yy = spaces[pos]
            for tt in range(9):
                if xxs[xx][tt] == yys[yy][tt] == cells[xx//3][yy//3][tt] == False:
                    xxs[xx][tt] = yys[yy][tt] = cells[xx//3][yy//3][tt] = True
                    board[xx][yy] = str(tt+1)
                    dfs(pos+1)
                    if valid:
                        return
                    xxs[xx][tt] = yys[yy][tt] = cells[xx//3][yy//3][tt] = False
        
        dfs(0)
            

# @lc code=end

