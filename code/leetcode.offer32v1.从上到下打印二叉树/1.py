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
            len1 = len(levl)
            for idx in range(len1):
                n = levl[idx]
                res.append(n.val)
                if n.left:
                    levl.append(n.left)
                if n.right:
                    levl.append(n.right)
            levl = levl[len1:]
        return res

