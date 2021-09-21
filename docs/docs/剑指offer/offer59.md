
# II队列的最大值

 #剑指offer  #单调队列

> 题解 1.py

```.py
# ##剑指offer#单调队列##levelm
import queue

class MaxQueue:

    def __init__(self):
        self.queue = collections.deque()
        self.maxQueue = collections.deque()


    def max_value(self) -> int:
        return self.maxQueue[-1] if self.maxQueue else -1


    def push_back(self, value: int) -> None:
        while self.maxQueue and self.maxQueue[0] < value:
            self.maxQueue.popleft()
        self.maxQueue.appendleft(value)
        self.queue.append(value)


    def pop_front(self) -> int:
        if not self.queue:
            return -1
        front = self.queue.popleft()
        if self.maxQueue and self.maxQueue[-1] == front:
            self.maxQueue.pop()
        return front



# Your MaxQueue object will be instantiated and called as such:
# obj = MaxQueue()
# param_1 = obj.max_value()
# obj.push_back(value)
# param_3 = obj.pop_front()
```


