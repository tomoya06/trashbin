
# 删除链表的节点

>  #剑指offer

## 题解 1.py

```.py
# ##剑指offer##levele
# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, x):
#         self.val = x
#         self.next = None
class Solution:
    def deleteNode(self, head: ListNode, val: int) -> ListNode:
        fakeHead = ListNode(None)
        fakeHead.next = head
        l, r = fakeHead, head
        while r and r.val != val:
            l, r = r, r.next
        if r.val == val:
            l.next = r.next
        return fakeHead.next

```


