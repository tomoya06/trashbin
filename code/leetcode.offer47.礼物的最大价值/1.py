class Solution:
    def maxValue(self, grid: List[List[int]]) -> int:
        mp = [[0 for _ in grid[0]] for _ in grid]
        for y in range(len(grid)):
            for x in range(len(grid[0])):
                if x == 0 and y == 0:
                    mp[y][x] = grid[y][x]
                    continue
                if x == 0:
                    mp[y][x] = grid[y][x] + mp[y-1][x]
                    continue
                if y == 0:
                    mp[y][x] = grid[y][x] + mp[y][x-1]
                    continue
                mp[y][x] = max(mp[y-1][x], mp[y][x-1]) + grid[y][x]
        
        return mp[-1][-1]
