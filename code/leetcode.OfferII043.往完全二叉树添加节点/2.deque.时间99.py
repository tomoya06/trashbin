# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right

from collections import deque

class CBTInserter:

    def __init__(self, root: TreeNode):
        self.root = root
        self.queue = deque([root])

        while self.queue:
            head = self.queue[0]
            cnt = 0
            if head.left:
                cnt += 1
                self.queue.append(head.left)
            if head.right:
                cnt += 1
                self.queue.append(head.right)
            if cnt == 2:
                self.queue.popleft()
            else:
                return


    def insert(self, v: int) -> int:
        head = self.queue[0]
        newNode = TreeNode(v)
        self.queue.append(newNode)
        if not head.left:
            head.left = newNode
            return head.val
        head.right = newNode
        self.queue.popleft()
        return head.val


    def get_root(self) -> TreeNode:
        return self.root



# Your CBTInserter object will be instantiated and called as such:
# obj = CBTInserter(root)
# param_1 = obj.insert(v)
# param_2 = obj.get_root()