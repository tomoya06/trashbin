
# 合并两个排序的链表

 #剑指offer

> 题解 1.py

```.py
# ##剑指offer##levele
# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, x):
#         self.val = x
#         self.next = None

class Solution:
    def mergeTwoLists(self, l1: ListNode, l2: ListNode) -> ListNode:
        def cutHead(l: ListNode):
            r = l.next
            l.next = None
            return [l, r]

        nh = ListNode(0)
        h = nh

        while l1 and l2:
            if l1.val <= l2.val:
                h.next, l1 = cutHead(l1)
            else:
                h.next, l2 = cutHead(l2)
            h = h.next
        
        if l1 is None:
            h.next = l2
        else:
            h.next = l1
        
        return nh.next

```


