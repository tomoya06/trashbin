# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, x):
#         self.val = x
#         self.left = None
#         self.right = None

class Solution:
    def lowestCommonAncestor(self, root: TreeNode, p: TreeNode, q: TreeNode) -> TreeNode:
        parents = {}
        def dfs(cur):
            if not cur:
                return
            if cur.left:
                parents[cur.left] = cur
                dfs(cur.left)
            if cur.right:
                parents[cur.right] = cur
                dfs(cur.right)
        
        dfs(root)
        visited = {}
        while p in parents:
            visited[p] = True
            p = parents[p]
        while q in parents:
            if q in visited:
                return q
            q = parents[q]
        return root
