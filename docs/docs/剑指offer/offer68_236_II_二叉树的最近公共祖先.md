---
tags:
  - 剑指offer
  - 深度优先搜索
id: II_二叉树的最近公共祖先
title: II_二叉树的最近公共祖先
---

## 题解 1.py

```.py
# ##剑指offer#深度优先搜索##levele
# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, x):
#         self.val = x
#         self.left = None
#         self.right = None

class Solution:
    def lowestCommonAncestor(self, root: TreeNode, p: TreeNode, q: TreeNode) -> TreeNode:
        def traval(target):
            stack = []
            def doTraval(cur):
                stack.append(cur)
                if cur.val == target.val:
                    return True
                if cur.left and doTraval(cur.left):
                    return True
                if cur.right and doTraval(cur.right):
                    return True
                stack.pop(-1)
                return False
            doTraval(root)
            return stack
        
        ptravel = traval(p)
        qtravel = traval(q)

        for i in range(1, min(len(ptravel), len(qtravel))):
            if ptravel[i] != qtravel[i]:
                return ptravel[i-1]
        
        return ptravel[-1] if len(ptravel) < len(qtravel) else qtravel[-1]


```

## 题解 2_迭代.py

```.py
# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, x):
#         self.val = x
#         self.left = None
#         self.right = None

class Solution:
    def lowestCommonAncestor(self, root: TreeNode, p: TreeNode, q: TreeNode) -> TreeNode:
        self.ans = None
        def dfs(cur):
            if not cur:
                return False
            left = dfs(cur.left)
            righ = dfs(cur.right)

            if (left and righ) or ((cur.val == p.val or cur.val == q.val) and (left or righ)):
                self.ans = cur
            
            return left or righ or (cur.val == p.val or cur.val == q.val)
        
        dfs(root)
        return self.ans

```

## 题解 2_遍历.py

```.py
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

```


