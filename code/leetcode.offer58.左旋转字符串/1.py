# ##剑指offer#字符串##levele
class Solution:
    def reverseLeftWords(self, s: str, n: int) -> str:
        return s[n:]+s[:n]
