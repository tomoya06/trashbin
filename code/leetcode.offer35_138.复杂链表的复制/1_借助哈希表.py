# ##剑指offer##levelm
# 
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
        visited = {}

        def copy(nn):
            if not nn:
                return None
            if nn in visited:
                return visited[nn]
            else:
                cpnn = Node(nn.val)
                visited[nn] = cpnn
                cpnn.next = copy(nn.next)
                cpnn.random = copy(nn.random)
                return cpnn

        return copy(head)

