
# 二叉搜索树的后序遍历序列

 #剑指offer  #二叉树

> 题解 1_偷瞄了.py

```.py
# ##剑指offer#二叉树##levelm
class Solution:
    def verifyPostorder(self, postorder: List[int]) -> bool:
        def order(l, r):
            if l >= r:
                return True
            cur = l
            while cur < r and postorder[cur] < postorder[r]:
                cur += 1
            suf = r
            while suf >= 0 and postorder[suf] >= postorder[r]:
                suf -= 1
            if cur != suf+1:
                return False
            return order(l, suf) and order(cur, r-1)

        return order(0, len(postorder)-1)
 
```

> 题解 2_遍历倒序_抄的.py

```.py
# 不太容易想到
# 抄的题解：
# https://leetcode-cn.com/problems/er-cha-sou-suo-shu-de-hou-xu-bian-li-xu-lie-lcof/solution/di-gui-he-zhan-liang-chong-fang-shi-jie-jue-zui-ha/
class Solution:
    def verifyPostorder(self, postorder: List[int]) -> bool:
        stack, root = [], float('inf')
        for idx in range(len(postorder)-1, -1, -1):
            if postorder[idx] > root:
                return False
            while stack and postorder[idx] < stack[-1]:
                root = stack.pop(-1)
            stack.append(postorder[idx])
        return True

```


