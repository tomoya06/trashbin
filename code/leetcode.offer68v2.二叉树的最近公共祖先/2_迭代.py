# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, x):
#         self.val = x
#         self.left = None
#         self.right = None

class Solution:
    def lowestCommonAncestor(self, root: TreeNode, p: TreeNode, q: TreeNode) -> TreeNode:
        self.ans = None
        def dfs(cur):
            if not cur:
                return False
            left = dfs(cur.left)
            righ = dfs(cur.right)

            if (left and righ) or ((cur.val == p.val or cur.val == q.val) and (left or righ)):
                self.ans = cur
            
            return left or righ or (cur.val == p.val or cur.val == q.val)
        
        dfs(root)
        return self.ans
