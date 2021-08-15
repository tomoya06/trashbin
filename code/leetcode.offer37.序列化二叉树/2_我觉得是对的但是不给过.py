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