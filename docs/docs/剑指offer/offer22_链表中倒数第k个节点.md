---
tags:
  - 剑指offer
---

# 链表中倒数第k个节点

## 题解 1.py

```.py
# ##剑指offer##levele
# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, x):
#         self.val = x
#         self.next = None

class Solution:
    def getKthFromEnd(self, head: ListNode, k: int) -> ListNode:
        a, b = head, head
        for _ in range(k-1):
            if b.next:
                b = b.next
            else:
                return None
        while b.next:
            a, b = a.next, b.next
        return a

```


