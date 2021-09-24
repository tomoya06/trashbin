---
tags:
  - 剑指offer
id: 倒序输出链表
title: 倒序输出链表
---

## 题解 1.py

```.py
# ##剑指offer##levele
# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, x):
#         self.val = x
#         self.next = None

class Solution:
    def reversePrint(self, head: ListNode) -> List[int]:
        res = []
        while head:
            res.insert(0, head.val)
            head = head.next
        return res

```


