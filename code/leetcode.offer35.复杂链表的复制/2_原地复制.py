# 流程图参考这篇题解：
# https://leetcode-cn.com/problems/fu-za-lian-biao-de-fu-zhi-lcof/solution/jian-zhi-offer-35-fu-za-lian-biao-de-fu-zhi-ha-xi-/
"""
# Definition for a Node.
class Node:
    def __init__(self, x: int, next: 'Node' = None, random: 'Node' = None):
        self.val = int(x)
        self.next = next
        self.random = random
"""
class Solution:
    def copyRandomList(self, head: 'Node') -> 'Node':
            if not head:
                return None
            
            # 复制链表
            cur = head
            while cur:
                cpy = Node(cur.val)
                cpy.next = cur.next
                cur.next = cpy
                cur = cpy.next
            
            # 串联random
            cur = head
            while cur:
                if cur.random:
                    cpy = cur.next
                    cpy.random = cur.random.next
                cur = cur.next.next
            
            # 拆分链表
            newHead = head.next
            cur, cpy = head, head.next
            while cpy:
                cur.next = cpy.next
                cur = cpy.next
                cpy.next = cur.next if cur else None
                cpy = cpy.next
            
            return newHead
