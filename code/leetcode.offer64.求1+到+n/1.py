# ##剑指offer#数学问题##levele
'''
要求不能使用乘除法、for、while、if、else、switch、case等关键字及条件判断语句（A?B:C）
但你可以用加法（草
你也可以用and or not（草
'''
class Solution:
    def sumNums(self, n: int) -> int:
        return n and (self.sumNums(n-1) + n)
