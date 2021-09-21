
# 打印从1到最大的n位数

 #剑指offer  #数学问题

> 题解 1.py

```.py
# ##剑指offer#数学问题##levelm
# 工程解法 考虑大数问题
class Solution:
    def printNumbers(self, n: int) -> List[int]:
        realRes = [str(i) for i in range(10)]
        for level in range(2, n+1):
            # 处理level位数
            levelRes = []
            for top in range(1, 10):
                # 首位1~9 拼接结果
                for suffix in realRes:
                    cur = '{}{}{}'.format(top, '0'*(level-len(suffix)-1), suffix)
                    levelRes.append(cur)
            realRes += levelRes
        return [int(r) for r in realRes[1:]]

```

> 题解 2_偷懒解法.py

```.py
class Solution:
    def printNumbers(self, n: int) -> List[int]:
        return list(range(1, pow(10, n)))

```


