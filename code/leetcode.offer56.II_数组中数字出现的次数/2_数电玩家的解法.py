'''
某个二进制位=1时，状态机变化：
00 - 01 - 10 - 00 - ...
设二位状态为two-one，遍历的当前二进制位为n

# 公式
异或：
x^1 = ~x 
x^0 = x

与：
x&1 = x
x&0 = 0

# 低位one变化：
if two == 0:
    if n == 1:
        one = ~one
    else:
        one = one
else:
    one = 0

# 简化：
if two == 0:
    one = one^n
else:
    one = 0

# 再简化：
one = one^n & ~two

# 高位two变化：应该基于新的one计算
01 - 00 - 10 - 00 - ..
对调two one 发现这个状态机是不变的
所以

two = two^n & ~one


int 类型的其他 31 位具有相同的运算规则，因此可将以上公式直接套用在 32 位数上。
'''

class Solution:
    def singleNumber(self, nums: List[int]) -> int:
        two, one = 0, 0
        for n in nums:
            one = one^n & ~two
            two = two^n & ~one
        return one
