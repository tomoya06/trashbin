
# 顺时针打印矩阵

>  #剑指offer

## 题解 1.py

```.py
# ##剑指offer##levelm
class Solution:
    def spiralOrder(self, matrix: List[List[int]]) -> List[int]:
        curStep = 0 # 0右 1下 2左 3上
        res = []
        while len(matrix) and len(matrix[0]):
            if curStep == 0:
                res += matrix.pop(0)
            elif curStep == 1:
                for row in matrix:
                    res.append(row.pop(-1))
            elif curStep == 2:
                res += matrix.pop(-1)[::-1]
            elif curStep == 3:
                for row in matrix[::-1]:
                    res.append(row.pop(0))
            
            curStep = (curStep+1)%4
        
        return res

```


