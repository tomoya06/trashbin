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