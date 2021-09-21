
---
tags:
  - 剑指offer
  - 状态机
---

# 表示数值的字符串

## 题解 1.py

```.py
# ##剑指offer#状态机##levelm
# from enum import Enum

# class Status(Enum):
#     Start = 1
#     Symbol1 = 2
#     NoIntFloat = 3
#     Int1 = 4
#     Float1 = 5
#     LetterE = 6
#     Symbol2 = 7
#     Int2 = 8
#     Ending = 9

statusMap = {
    1: {
        'd': 3,
        's': 1,
        'b': 2,
        'n': 4,
    },
    2: {
        'n': 4,
        'd': 3,
    },
    3: {
        'n': 5,
    },
    4: {
        's': 9,
        'e': 6,
        'd': 5,
        'n': 4,
    },
    5: {
        'n': 5,
        's': 9,
        'e': 6,
    },
    6: {
        'b': 7,
        'n': 8,
    },
    7: {
        'n': 8,
    },
    8: {
        'n': 8,
        's': 9,
    },
    9: {
        's': 9,
    },
}

class Solution:
    def isNumber(self, s: str) -> bool:
        def parse(ch):
            if ch == ' ':
                return 's'
            if ch == '+' or ch == '-':
                return 'b'
            if ch <= '9' and ch >= '0':
                return 'n'
            if ch == 'e' or ch == 'E':
                return 'e'
            if ch == '.':
                return 'd'
            return 'x'
        cur = 1
        for c in list(s):
            p = parse(c)
            if p not in statusMap[cur]:
                return False
            cur = statusMap[cur][p]
        return 's' in statusMap[cur] and statusMap[cur]['s'] == 9

```


