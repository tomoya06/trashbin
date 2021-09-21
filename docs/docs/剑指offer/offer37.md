
# 序列化二叉树

 #剑指offer  #二叉树

> 题解 1_资源消耗大.py

```.py
# ##剑指offer#二叉树##levelh
# Definition for a binary tree node.
# class TreeNode(object):
#     def __init__(self, x):
#         self.val = x
#         self.left = None
#         self.right = None

class Codec:

    def serialize(self, root):
        """Encodes a tree to a single string.
        
        :type root: TreeNode
        :rtype: str
        """
        if not root:
            return ''

        stack = [root]
        res = []

        while stack:
            if all(c is None for c in stack):
                break
            for idx in range(0, len(stack)):
                cur = stack.pop(0)
                curVal = cur.val if cur else None
                res.append(curVal)
                if cur is None:
                    # stack += [None, None]
                    pass
                else:
                    stack += [cur.left, cur.right]
        
        return ','.join(['null' if c is None else str(c) for c in res])

    def deserialize(self, data):
        """Decodes your encoded data to tree.
        
        :type data: str
        :rtype: TreeNode
        """
        if not data or data == 'None' or data == 'null':
            return None
        
        res = data.split(',')
        resNodes = []
        for val in res:
            if res == 'None' or res == 'null' or not res:
                resNodes.append(None)
            else:
                resNodes.append(TreeNode(val))
        idx = 0
        while idx < len(resNodes):
            leftIdx = 2*idx+1
            rightIdx = 2*idx+2
            if resNodes[idx] is None:
                resNodes.insert(leftIdx, None)
                resNodes.insert(rightIdx, None)
            if leftIdx < len(resNodes):
                resNodes[idx].left = resNodes[leftIdx]
            if rightIdx < len(resNodes):
                resNodes[idx].right = resNodes[rightIdx]
            idx += 1
        
        return resNodes[0]

        

# Your Codec object will be instantiated and called as such:
# codec = Codec()
# codec.deserialize(codec.serialize(root))
```

> 题解 2_快一点点.py

```.py
# Definition for a binary tree node.
# class TreeNode(object):
#     def __init__(self, x):
#         self.val = x
#         self.left = None
#         self.right = None

class Codec:

    def serialize(self, root):
        """Encodes a tree to a single string.
        
        :type root: TreeNode
        :rtype: str
        """
        if not root:
            return ''

        stack = [root]
        res = ''

        while stack:
            if all(c is None for c in stack):
                break
            for idx in range(0, len(stack)):
                cur = stack.pop(0)
                # curVal = cur.val if cur else None
                res += str(cur.val) if cur else 'null'
                res += ','
                if cur is None:
                    # stack += [None, None]
                    pass
                else:
                    stack += [cur.left, cur.right]
        
        return '[' + res[:-1] + ']'

    def deserialize(self, data):
        """Decodes your encoded data to tree.
        
        :type data: str
        :rtype: TreeNode
        """
        data = data[1:-1]
        if not data or data == 'null':
            return None
        
        res = data.split(',')
        root = TreeNode(int(res[0]))
        queue = [root]
        idx = 0
        while queue:
            head = queue.pop(0)
            idx += 1
            if idx < len(res) and res[idx] != 'null':
                head.left = TreeNode(int(res[idx]))
                queue.append(head.left)
            idx += 1
            if idx < len(res) and res[idx] != 'null':
                head.right = TreeNode(int(res[idx]))
                queue.append(head.right)

        return root

        

# Your Codec object will be instantiated and called as such:
# codec = Codec()
# codec.deserialize(codec.serialize(root))
```

> 题解 2_我觉得是对的但是不给过.py

```.py
# Definition for a binary tree node.
# class TreeNode(object):
#     def __init__(self, x):
#         self.val = x
#         self.left = None
#         self.right = None

class Codec:

    def serialize(self, root):
        """Encodes a tree to a single string.
        
        :type root: TreeNode
        :rtype: str
        """
        if not root:
            return ''

        stack = [root]
        res = []

        while stack:
            if all(c is None for c in stack):
                break
            for idx in range(0, len(stack)):
                cur = stack.pop(0)
                curVal = cur.val if cur else None
                res.append(curVal)
                if cur is None:
                    stack += [None, None]
                else:
                    stack += [cur.left, cur.right]
        
        return ','.join(['null' if c is None else str(c) for c in res])

    def deserialize(self, data):
        """Decodes your encoded data to tree.
        
        :type data: str
        :rtype: TreeNode
        """
        if not data or data == 'None' or data == 'null':
            return None
        
        res = data.split(',')
        resNodes = []
        for val in res:
            if res == 'None' or res == 'null' or not res:
                resNodes.append(None)
            else:
                resNodes.append(TreeNode(val))
        for idx in range(len(res)):
            if resNodes[idx] is None:
                continue
            leftIdx = 2*idx+1
            rightIdx = 2*idx+2
            if leftIdx < len(res):
                resNodes[idx].left = resNodes[leftIdx]
            if rightIdx < len(res):
                resNodes[idx].right = resNodes[rightIdx]
        
        return resNodes[0]

        

# Your Codec object will be instantiated and called as such:
# codec = Codec()
# codec.deserialize(codec.serialize(root))
```


