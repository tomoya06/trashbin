# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, x):
#         self.val = x
#         self.left = None
#         self.right = None

class Solution:
    def lowestCommonAncestor(self, root: 'TreeNode', p: 'TreeNode', q: 'TreeNode') -> 'TreeNode':
        def traval(target):
            stack = []
            def doTraval(cur):
                stack.append(cur)
                if cur.val == target.val:
                    return
                if cur.val > target.val:
                    doTraval(cur.left)
                else:
                    doTraval(cur.right)
            doTraval(root)
            return stack
        
        ptravel = traval(p)
        qtravel = traval(q)

        for i in range(1, min(len(ptravel), len(qtravel))):
            if ptravel[i] != qtravel[i]:
                return ptravel[i-1]
        
        return ptravel[-1] if len(ptravel) < len(qtravel) else qtravel[-1]

