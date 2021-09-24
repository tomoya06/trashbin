---
tags:
  - 剑指offer
id: 包含min函数的栈
title: 包含min函数的栈
---

## 题解 1.py

```.py
# ##剑指offer##levelm
class MinStack:
  
    def __init__(self):
        """
        initialize your data structure here.
        """
        self.stack = []
        self.minStack = []


    def push(self, x: int) -> None:
        self.stack.append(x)
        if not self.minStack or self.minStack[-1] >= x:
            self.minStack.append(x)


    def pop(self) -> None:
        res = self.stack.pop(-1)
        if self.minStack and self.minStack[-1] == res:
            self.minStack.pop(-1)


    def top(self) -> int:
        return self.stack and self.stack[-1]


    def min(self) -> int:
        return self.minStack and self.minStack[-1]



# Your MinStack object will be instantiated and called as such:
# obj = MinStack()
# obj.push(x)
# obj.pop()
# param_3 = obj.top()
# param_4 = obj.min()

```


