
# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class CBTInserter:

    def __init__(self, root: TreeNode):
        self.root = root
        self.lastRow = [root]
        self.emptyIdx = 0
        self.lastRowLen = 1

        while self.lastRow:
            curLen = len(self.lastRow)
            for idx in range(curLen):
                cnt = 0
                if self.lastRow[idx].left:
                    self.lastRow.append(self.lastRow[idx].left)
                    cnt += 1
                if self.lastRow[idx].right:
                    self.lastRow.append(self.lastRow[idx].right)
                    cnt += 1
                if cnt == 2:
                    pass
                else:
                    self.emptyIdx = idx
                    return
            self.lastRow = self.lastRow[curLen:]
            self.lastRowLen = len(self.lastRow)


    def insert(self, v: int) -> int:
        parent = self.lastRow[self.emptyIdx]
        newNode = TreeNode(v)
        self.lastRow.append(newNode)
        if not parent.left:
            parent.left = newNode
            return parent.val
        parent.right = newNode
        self.emptyIdx += 1
        if self.emptyIdx == self.lastRowLen:
            self.lastRow = self.lastRow[self.lastRowLen:]
            self.lastRowLen = len(self.lastRow)
            self.emptyIdx = 0
        return parent.val


    def get_root(self) -> TreeNode:
        return self.root



# Your CBTInserter object will be instantiated and called as such:
# obj = CBTInserter(root)
# param_1 = obj.insert(v)
# param_2 = obj.get_root()