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