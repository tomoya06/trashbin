# ##剑指offer#双指针##levelm
# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, x):
#         self.val = x
#         self.next = None

class Solution:
    def getIntersectionNode(self, headA: ListNode, headB: ListNode) -> ListNode:
        curA, curB = headA, headB
        while curA and curB:
            curA = curA.next
            curB = curB.next
        cnt = 0
        start, mid = None, None
        cur = None

        if curA:
            start = headA
            mid = headB
            cur = curA
        else:
            start = headB
            mid = headA
            cur = curB
        
        while cur:
            cur = cur.next
            start = start.next
        
        while start != mid:
            start = start.next
            mid = mid.next
        
        return start
