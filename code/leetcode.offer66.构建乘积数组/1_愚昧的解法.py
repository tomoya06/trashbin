# ##剑指offer#数学问题##levelm
class Solution:
    def constructArr(self, a: List[int]) -> List[int]:
        if not a:
            return []
        left, right = [1 for _ in range(len(a)+2)], [1 for _ in range(len(a)+2)]
        length = len(a)
        for idx, num in enumerate(a):
            left[idx+1] = left[idx] * num
            right[length-idx] = right[length-idx+1] * a[length-idx-1]
        
        return [left[idx]*right[idx+2] for idx in range(len(a))]
