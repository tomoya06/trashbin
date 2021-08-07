# ##剑指offer#深度优先搜索#广度优先搜索##levelm
class Solution:
    def movingCount(self, m: int, n: int, k: int) -> int:
        boards = [['' for _ in range(m)] for _ in range(n)]
        self.cnt = 0
        def dfs(x, y):
            if x < 0 or x >= m or y < 0 or y >= n:
                return
            if boards[y][x] == '.':
                return
            x1, x2 = x//10, x%10
            y1, y2 = y//10, y%10
            if x1+x2+y1+y2 > k:
                return
            boards[y][x] = '.'
            self.cnt += 1
            dfs(x+1, y)
            dfs(x-1, y)
            dfs(x, y+1)
            dfs(x, y-1)
            
        dfs(0, 0)
        return self.cnt
