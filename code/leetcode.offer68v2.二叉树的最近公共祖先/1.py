# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, x):
#         self.val = x
#         self.left = None
#         self.right = None

class Solution:
    def lowestCommonAncestor(self, root: TreeNode, p: TreeNode, q: TreeNode) -> TreeNode:
        def traval(target):
            stack = []
            def doTraval(cur):
                stack.append(cur)
                if cur.val == target.val:
                    return True
                if cur.left and doTraval(cur.left):
                    return True
                if cur.right and doTraval(cur.right):
                    return True
                stack.pop(-1)
                return False
            doTraval(root)
            return stack
        
        ptravel = traval(p)
        qtravel = traval(q)

        for i in range(1, min(len(ptravel), len(qtravel))):
            if ptravel[i] != qtravel[i]:
                return ptravel[i-1]
        
        return ptravel[-1] if len(ptravel) < len(qtravel) else qtravel[-1]

