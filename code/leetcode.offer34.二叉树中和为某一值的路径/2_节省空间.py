# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class Solution:
    def pathSum(self, root: TreeNode, target: int) -> List[List[int]]:
        res = []
        stacks = []
        def dfs(node, newTarget):
            if not node:
                return
            if not node.left and not node.right and node.val == newTarget:
                res.append(stacks+[node.val])
                return
            if node.left:
                stacks.append(node.val)
                dfs(node.left, newTarget-node.val)
                stacks.pop(-1)
            if node.right:
                stacks.append(node.val)
                dfs(node.right, newTarget-node.val)
                stacks.pop(-1)
        
        dfs(root, target)
        return res
