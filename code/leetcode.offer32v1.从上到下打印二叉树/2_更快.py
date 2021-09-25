# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, x):
#         self.val = x
#         self.left = None
#         self.right = None

class Solution:
    def levelOrder(self, root: TreeNode) -> List[int]:
        if root is None:
            return []

        levl = [root]
        res = []
        while levl:
            n = levl.pop(0)
            res.append(n.val)
            if n.left:
                levl.append(n.left)
            if n.right:
                levl.append(n.right)
        return res

