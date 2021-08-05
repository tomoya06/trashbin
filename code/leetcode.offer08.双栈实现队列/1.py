# ##剑指offer##levele
class CQueue:
  
    def __init__(self):
        self.stackOrd, self.stackRev = [], []


    def appendTail(self, value: int) -> None:
        self.stackOrd.append(value)


    def deleteHead(self) -> int:
        if len(self.stackOrd) == 0:
            return -1
        while self.stackOrd:
            self.stackRev.append(self.stackOrd.pop())
        res = self.stackRev.pop()
        while self.stackRev:
            self.stackOrd.append(self.stackRev.pop())
        return res




# Your CQueue object will be instantiated and called as such:
# obj = CQueue()
# obj.appendTail(value)
# param_2 = obj.deleteHead()