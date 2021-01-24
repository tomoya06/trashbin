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
        # return group new tail & head
        def reverseGroup(head: ListNode, tail: ListNode):
            prev = tail.next
            p = head
            nxt = None
            while p != tail:
                nxt = p.next
                p.next = prev
                prev = p 
                p = nxt
            return tail, head
        
        groupHead, groupTail = head, None
        lastTail = ListNode()
        newHead = lastTail
        cur = head
        while cur:
            groupHead = cur
            for _ in range(k-1):
                if not cur.next:
                    break
                cur = cur.next
            groupTail = cur
            groupHead, groupTail = reverseGroup(groupHead, groupTail)
            lastTail.next = groupHead
            lastTail = groupTail
            cur = cur.next

        return newHead.next



# @lc code=end

