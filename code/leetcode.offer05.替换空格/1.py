# ##剑指offer##levele
class Solution:
    def replaceSpace(self, s: str) -> str:
        ss = ''
        for c in s:
            if c == ' ':
                ss += '%20'
            else:
                ss += c
        return ss

