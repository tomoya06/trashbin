class Solution:
    def constructArr(self, a: List[int]) -> List[int]:
        b, tmp = [1 for _ in a], 1
        for idx in range(1, len(a)):
            b[idx] = b[idx-1] * a[idx-1]
        for idx in range(len(a)-2, -1, -1):
            tmp *= a[idx+1]
            b[idx] *= tmp
        return b
