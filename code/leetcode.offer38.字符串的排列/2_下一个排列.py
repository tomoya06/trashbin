# https://leetcode-cn.com/problems/next-permutation/solution/xia-yi-ge-pai-lie-by-leetcode-solution/
class Solution:
    def permutation(self, s: str) -> List[str]:
        res = []
        clist = list(s)
        clist.sort()
        
        res.append(''.join(clist))

        def nextPermution():
            ll = len(clist)-2
            while ll >= 0 and clist[ll] >= clist[ll+1]:
                ll -= 1
            if ll < 0:
                return False
            for rr in range(len(clist)-1, ll, -1):
                if clist[rr] > clist[ll]:
                    break
            clist[ll], clist[rr] = clist[rr], clist[ll]

            ll, rr = ll+1, len(clist)-1
            while ll < rr:
                clist[ll], clist[rr] = clist[rr], clist[ll]
                ll += 1
                rr -= 1

            res.append(''.join(clist))
            return True
        
        while True:
            nss = nextPermution()
            if not nss:
                break
        
        return res
