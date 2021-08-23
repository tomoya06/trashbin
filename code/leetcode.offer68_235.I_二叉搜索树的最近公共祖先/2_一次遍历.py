# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, x):
#         self.val = x
#         self.left = None
#         self.right = None

class Solution:
    def lowestCommonAncestor(self, root: 'TreeNode', p: 'TreeNode', q: 'TreeNode') -> 'TreeNode':
        def travel(cur):
            if cur.val == p.val or cur.val == q.val:
                return cur
            if cur.val < p.val and cur.val < q.val:
                return travel(cur.right)
            elif cur.val > p.val and cur.val > q.val:
                return travel(cur.left)
            else:
                return cur
        
        return travel(root)
