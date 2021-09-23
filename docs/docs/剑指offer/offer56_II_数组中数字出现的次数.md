---
tags:
  - 剑指offer
  - 位运算
---

# II_数组中数字出现的次数

## 题解 1_普通人的解法.py

```.py
# ##剑指offer#位运算##levelm
class Solution:
    def singleNumber(self, nums: List[int]) -> int:
        cnt = set()
        visited = set()
        for num in nums:
            if num in visited:
                continue
            if num in cnt:
                cnt.remove(num)
                visited.add(num)
                continue
            cnt.add(num)
        return list(cnt)[0]

```

## 数电玩家解法

某个二进制位=1时，状态机变化：

```py
00 - 01 - 10 - 00 - ...
```

设二位状态为two-one，遍历的当前二进制位为n

### 公式

异或：

```py
x^1 = ~x 
x^0 = x
```

与：

```py
x&1 = x
x&0 = 0
```

### 分析

低位one变化：

```py
if two == 0:
    if n == 1:
        one = ~one
    else:
        one = one
else:
    one = 0
```

简化：

```py
if two == 0:
    one = one^n
else:
    one = 0
```

再简化：

```py
one = one ^ n & ~two
```


高位two变化：应该基于新的one计算

```py
01 - 00 - 10 - 00 - ..
```

对调two one，发现这个状态机是不变的
所以

```
two = two^n & ~one
```

`int`类型的其他 31 位具有相同的运算规则，因此可将以上公式直接套用在 32 位数上。


## 题解 2_数电玩家的解法.py

```.py
class Solution:
    def singleNumber(self, nums: List[int]) -> int:
        two, one = 0, 0
        for n in nums:
            one = one^n & ~two
            two = two^n & ~one
        return one

```


