class Solution:
    def findNthDigit(self, n: int) -> int:
        if n <= 9:
            return n
        n -= 10
        length = 2
        lengthTotal = 90
        lengthStart = 10
        while True:
            if n <= lengthTotal*length:
                theNum = n//length + lengthStart
                return int(str(theNum)[n%length])
            n -= lengthTotal*length
            length += 1
            lengthTotal *= 10
            lengthStart *= 10
