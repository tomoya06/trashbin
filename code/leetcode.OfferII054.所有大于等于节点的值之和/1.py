
# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class Solution:
    def convertBST(self, root: TreeNode) -> TreeNode:
        if not root:
            return root
        self.curSum = 0

        def rmlVisit(node: TreeNode):
            if node.right:
                rmlVisit(node.right)
            self.curSum += node.val
            node.val = self.curSum
            if node.left:
                rmlVisit(node.left)
        
        rmlVisit(root)
        return root
