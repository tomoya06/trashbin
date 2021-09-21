
# 树的子结构

 #剑指offer  #深度优先搜索  #二叉树

> 题解 1.py

```.py
# ##剑指offer#深度优先搜索#二叉树##levelm
# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, x):
#         self.val = x
#         self.left = None
#         self.right = None

class Solution:
    def isSubStructure(self, A: TreeNode, B: TreeNode) -> bool:
        if B is None and A is not None:
            return False
        
        def isSub(a: TreeNode, b: TreeNode):
            return b is None or a is not None and b is not None and a.val == b.val and (
                    b.left is None or isSub(a.left, b.left)
                ) and (
                    b.right is None or isSub(a.right, b.right)
                )
            
        return isSub(A, B) or A.left is not None and self.isSubStructure(A.left, B) or A.right is not None and self.isSubStructure(A.right, B)

```


