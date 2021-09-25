class Solution:
    def singleNumber(self, nums: List[int]) -> int:
        cnt = set()
        visited = set()
        for num in nums:
            if num in visited:
                continue
            if num in cnt:
                cnt.remove(num)
                visited.add(num)
                continue
            cnt.add(num)
        return list(cnt)[0]
