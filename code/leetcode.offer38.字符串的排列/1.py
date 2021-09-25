class Solution:
    def permutation(self, s: str) -> List[str]:
        def dfs(slist: List[str]) -> List[str]:
            if len(slist) == 1:
                return slist
            res = []
            for idx in range(len(slist)):
                if idx > 0 and slist[idx] == slist[idx-1]:
                    continue
                header = slist.pop(idx)
                subRes = dfs(slist)
                for r in subRes:
                    res.append(''+header+r)
                slist.insert(idx, header)
            return res
        clist = list(s)
        clist.sort()
        return dfs(clist)
