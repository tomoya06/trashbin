
from collections import deque

class Solution:
    def addBinary(self, a: str, b: str) -> str:
        res = deque('')

        idxa, idxb = len(a)-1, len(b)-1
        c = 0
        while idxa >= 0 and idxb >= 0:
            pos = int(a[idxa]) + int(b[idxb]) + c
            c = pos // 2
            res.appendleft(str(pos % 2))
            idxa, idxb = idxa-1, idxb-1
        
        while idxa >= 0:
            pos = int(a[idxa]) + c
            c = pos // 2
            res.appendleft(str(pos % 2))
            idxa -= 1
        
        while idxb >= 0:
            pos = int(b[idxb]) + c
            c = pos // 2
            res.appendleft(str(pos % 2))
            idxb -= 1
        
        if c:
            res.appendleft(str(c))
        
        return ''.join(list(res))
