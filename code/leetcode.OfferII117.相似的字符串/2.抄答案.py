class Solution:
    def numSimilarGroups(self, strs: List[str]) -> int:
        n = len(strs)
        f = list(range(n))

        def isSimilar(a, b):
            cnt = 0
            for wa, wb in zip(a, b):
                if wa != wb:
                    cnt += 1
                    if cnt > 2:
                        return False
            return True
        
        def find(x):
            if f[x] == x:
                return x
            f[x] = find(f[x])
            return f[x]

        for i in range(n):
            for j in range(i+1, n):
                fi, fj = find(i), find(j)
                if fi == fj:
                    continue
                if isSimilar(strs[i], strs[j]):
                    f[fi] = fj
        
        return sum(1 for i in range(n) if f[i] == i)
