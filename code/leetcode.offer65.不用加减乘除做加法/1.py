# ##剑指offer#位运算##levelm
class Solution:
    def add(self, a: int, b: int) -> int:
        x = 0xffffffff
        a, b = a & x, b & x
        while b:
            a, b = a^b & x, (a&b) << 1
        return a if a <= 0x7fffffff else ~(a^x)
