# 并不用实时保留完整队列，把stack1和stack2理解为队列的前半部和后半部就好
class CQueue:
  
    def __init__(self):
        self.stack1, self.stack2 = [], []


    def appendTail(self, value: int) -> None:
        self.stack1.append(value)


    def deleteHead(self) -> int:
        if len(self.stack2) == 0:
            while self.stack1:
                self.stack2.append(self.stack1.pop())
        if len(self.stack2) == 0:
            return -1
        return self.stack2.pop()



# Your CQueue object will be instantiated and called as such:
# obj = CQueue()
# obj.appendTail(value)
# param_2 = obj.deleteHead()