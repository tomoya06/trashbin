
# 矩阵中的路径

>  #剑指offer  #回溯

## 题解 1.py

```.py
# ##剑指offer#回溯##levelm
class Solution:
    def exist(self, board: List[List[str]], word: str) -> bool:
        def dfs(x, y, idx):
            if idx == len(word):
                return True
            if x < 0 or x >= len(board[0]) or y < 0 or y >= len(board):
                return False 
            if board[y][x] == word[idx]:
                board[y][x] = '.'
                res = dfs(x, y-1, idx+1) or dfs(x, y+1, idx+1) or dfs(x+1, y, idx+1) or dfs(x-1, y, idx+1)
                board[y][x] = word[idx]
                return res
            return False
        for yy in range(len(board)):
            for xx in range(len(board[0])):
                if dfs(xx, yy, 0):
                    return True
        return False

```


