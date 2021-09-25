"""
# Definition for a Node.
class Node:
    def __init__(self, val, left=None, right=None):
        self.val = val
        self.left = left
        self.right = right
"""
class Solution:
    def treeToDoublyList(self, root: 'Node') -> 'Node':
        if not root:
            return None
        self.pre, self.cur = None, None
        self.head = None

        def visit(node):
            if not node:
                return
            visit(node.left)
            # visit node
            self.cur = node
            if self.pre:
                self.pre.right = self.cur
                self.cur.left = self.pre
            else:
                self.head = self.cur
            self.pre = self.cur
            visit(node.right)

        visit(root)
        self.head.left = self.pre
        self.pre.right = self.head
        return self.head
