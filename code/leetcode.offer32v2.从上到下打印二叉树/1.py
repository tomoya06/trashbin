# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, x):
#         self.val = x
#         self.left = None
#         self.right = None

class Solution:
    def levelOrder(self, root: TreeNode) -> List[List[int]]:
        if root is None:
            return []
        res = []
        levl = [root]
        while levl:
            subRes = []
            len1 = len(levl)
            for _ in range(len1):
                n = levl.pop(0)
                subRes.append(n.val)
                if n.left:
                    levl.append(n.left)
                if n.right:
                    levl.append(n.right)
            res.append(subRes)
        return res
