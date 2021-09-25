# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class Solution:
    def pathSum(self, root: TreeNode, target: int) -> List[List[int]]:
        res = []
        def dfs(node, cur, newTarget):
            if not node:
                return
            if not node.left and not node.right and node.val == newTarget:
                res.append(cur+[node.val])
                return
            if node.left:
                dfs(node.left, cur+[node.val], newTarget-node.val)
            if node.right:
                dfs(node.right, cur+[node.val], newTarget-node.val)
        
        dfs(root, [], target)
        return res
