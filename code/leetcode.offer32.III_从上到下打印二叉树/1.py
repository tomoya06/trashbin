# ##剑指offer#广度优先搜索##levelm
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
        flag = True
        while levl:
            subRes = []
            len1 = len(levl)
            for _ in range(len1):
                n = levl.pop(0)
                if flag:
                    subRes.append(n.val)
                else:
                    subRes.insert(0, n.val)
                if n.left:
                    levl.append(n.left)
                if n.right:
                    levl.append(n.right)
            res.append(subRes)
            flag = not flag
        return res
