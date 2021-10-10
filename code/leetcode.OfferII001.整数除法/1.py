
class Solution:
    def divide(self, a: int, b: int) -> int:
        res = 0
        sign = 0 if (a > 0) ^ (b > 0) else 1
        a, b = abs(a), abs(b)
        
        def bidivide(aa: int, bb: int):
            ss, bbi = 1, bb
            while aa >= bbi:
                bbi <<= 1
                ss <<= 1
            return ss >> 1, aa - (bbi >> 1)

        while a > 0:
            subres, a = bidivide(a, b)
            res += subres
        
        res = res if sign else -res
        if res > 2147483647:
            res = 2147483647
        if res < -2147483648:
            res = -2147483648
        return res
