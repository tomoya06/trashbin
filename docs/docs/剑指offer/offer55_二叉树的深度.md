---
tags:
  - 剑指offer
  - 二叉树
---

# 二叉树的深度

## 题解 1.py

```.py
# ##剑指offer#二叉树##levele
# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, x):
#         self.val = x
#         self.left = None
#         self.right = None

class Solution:
    def maxDepth(self, root: TreeNode) -> int:
        if not root:
            return 0
        lel = [root]
        lelCnt = 0
        while lel:
            lelCnt += 1
            curLen = len(lel)
            for idx in range(curLen):
                if lel[idx].left:
                    lel.append(lel[idx].left)
                if lel[idx].right:
                    lel.append(lel[idx].right)
            lel = lel[curLen:]
        return lelCnt

```


