
# 二叉搜索树的第k大节点

 #剑指offer  #二叉树

> 题解 1.py

```.py
# ##剑指offer#二叉树##levele
# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, x):
#         self.val = x
#         self.left = None
#         self.right = None

class Solution:
    def kthLargest(self, root: TreeNode, k: int) -> int:
        if not root:
            return -1
        self.cnt = 0
        self.res = None

        def visit(node):
            if self.res is not None:
                return
            if node.right:
                visit(node.right)
            self.cnt += 1
            if self.cnt == k:
                self.res = node.val
                return 
            if node.left:
                visit(node.left)
        visit(root)
        return self.res

```


