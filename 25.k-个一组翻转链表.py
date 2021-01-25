#
# @lc app=leetcode.cn id=25 lang=python3
#
# [25] K 个一组翻转链表
#

# @lc code=start
# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, val=0, next=None):
#         self.val = val
#         self.next = next
class Solution:
    def reverseKGroup(self, head: ListNode, k: int) -> ListNode:
        def reverseGroup(head):
            prev, curr = None, head
            next = None
            while curr:
                next = curr.next
                curr.next = prev
                prev = curr
                curr = next
            return prev
        
        nullHead = ListNode()
        nullHead.next = head
        cur = nullHead

        while cur.next:
            pp = cur.next
            for _ in range(k-1):
                if pp and pp.next:
                    pp = pp.next
                else:
                    return nullHead.next
            next = pp.next
            pp.next = None
            prev = reverseGroup(cur.next)
            cur.next.next = next
            nHead = cur.next
            cur.next = prev
            cur = nHead
        
        return nullHead.next

# @lc code=end

