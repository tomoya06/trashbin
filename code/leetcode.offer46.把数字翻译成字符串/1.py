class Solution:
    def translateNum(self, num: int) -> int:
        nums = list(str(num))
        dp = [0 for _ in nums]+[1]
        dp[-2] = 1
        for idx in range(len(nums)-2,-1,-1):
            dp[idx] += dp[idx+1]
            if nums[idx] == '1' or nums[idx] == '2' and nums[idx+1] <= '5':
                dp[idx] += dp[idx+2]
        return dp[0]
