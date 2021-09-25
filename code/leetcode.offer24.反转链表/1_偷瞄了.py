# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, x):
#         self.val = x
#         self.next = None

class Solution:
    def reverseList(self, head: ListNode) -> ListNode:
        p, c, n = None, head, None
        while c is not None:
            n = c.next
            c.next = p
            p, c = c, n
        return p 

