#
# @lc app=leetcode.cn id=23 lang=python3
#
# [23] 合并K个升序链表
#

# @lc code=start
# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, val=0, next=None):
#         self.val = val
#         self.next = next

import heapq

class HeapListNode:
    def __init__(self, node: ListNode) -> None:
        self.node = node
    
    def __lt__(self, other) -> bool:
        return self.node.val < other.node.val

    def __eq__(self, other) -> bool:
        return self.node.val == other.node.val


class Solution:
    def mergeKLists(self, lists: List[ListNode]) -> ListNode:
        headHeap = []
        for node in lists:
            if node:
                heapq.heappush(headHeap, HeapListNode(node))
        
        voidHead = ListNode()
        cur = voidHead

        while headHeap:
            minHead = heapq.heappop(headHeap)
            minHead = minHead.node
            minHeadNext = minHead.next
            minHead.next = None
            cur.next = minHead
            cur = cur.next
            if minHeadNext:
                heapq.heappush(headHeap, HeapListNode(minHeadNext))
        
        return voidHead.next

# @lc code=end

