class Solution:
    def verifyPostorder(self, postorder: List[int]) -> bool:
        def order(l, r):
            if l >= r:
                return True
            cur = l
            while cur < r and postorder[cur] < postorder[r]:
                cur += 1
            suf = r
            while suf >= 0 and postorder[suf] >= postorder[r]:
                suf -= 1
            if cur != suf+1:
                return False
            return order(l, suf) and order(cur, r-1)

        return order(0, len(postorder)-1)
 