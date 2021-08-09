# ##剑指offer#二叉树##levele
# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, x):
#         self.val = x
#         self.left = None
#         self.right = None

class Solution:
    def mirrorTree(self, root: TreeNode) -> TreeNode:
        if root is None:
            return root
        root.left, root.right = self.mirrorTree(root.right), self.mirrorTree(root.left)
        return root
