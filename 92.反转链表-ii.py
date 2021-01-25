#
# @lc app=leetcode.cn id=92 lang=python3
#
# [92] 反转链表 II
#

# @lc code=start
# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, val=0, next=None):
#         self.val = val
#         self.next = next
class Solution:
    def reverseBetween(self, head: ListNode, m: int, n: int) -> ListNode:
        def reverseK(head, k):
            prev, curr = None, head
            nxt = None
            ii = k

            while curr and ii > 0:
                ii = ii-1
                nxt = curr.next
                curr.next = prev
                prev = curr
                curr = nxt
            
            return prev, nxt
        
        nullHead = ListNode()
        nullHead.next = head
        pp = nullHead
        for _ in range(m-1):
            pp = pp.next
        nHead, nNext = reverseK(pp.next, n-m+1)
        if pp.next:
            pp.next.next = nNext
        pp.next = nHead
        return nullHead.next
        
                
# @lc code=end

