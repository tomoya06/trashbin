#
# @lc app=leetcode.cn id=42 lang=python3
#
# [42] 接雨水
#

# @lc code=start
class Solution:
    def trap2(self, height: List[int]) -> int:
        leftMaxs = [0 for _ in height]
        righMaxs = [0 for _ in height]
        for i in range(1, len(height)):
            if i <= 1 or height[i-1] >= leftMaxs[i-1]:
                leftMaxs[i] = height[i-1]
            else:
                leftMaxs[i] = leftMaxs[i-1]
        for i in range(len(height)-2, -1, -1):
            if i >= len(height)-2 or height[i+1] >= righMaxs[i+1]:
                righMaxs[i] = height[i+1]
            else:
                righMaxs[i] = righMaxs[i+1]

        wt = 0

        for i in range(len(height)):
            minBorder = min(leftMaxs[i], righMaxs[i])
            if minBorder <= height[i]:
                continue
            wt = wt + minBorder - height[i]
        
        return wt
    
    def trap(self, height: List[int]) -> int:
        if not height:
            return 0
        
        left, rigt = 0, len(height) - 1
        left_max, rigt_max = height[left], height[rigt]

        wt = 0

        while left < rigt:
            left_max, rigt_max = max(left_max, height[left]), max(rigt_max, height[rigt])
            if left_max <= rigt_max:
                wt += left_max - height[left]
                left += 1
            else:
                wt += rigt_max - height[rigt]
                rigt -= 1
        
        return wt

# @lc code=end

