# ##剑指offer#字符串##levele
class Solution:
    def reverseWords(self, s: str) -> str:
        return ' '.join(s.split()[::-1])
