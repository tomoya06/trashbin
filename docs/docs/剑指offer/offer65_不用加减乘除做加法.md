
# 不用加减乘除做加法

>  #剑指offer  #位运算


Python 负数的存储：

Python，Java 等语言中的数字都是以 补码 形式存储的。但 Python 没有 int , long 等不同长度变量，即在编程时无变量位数的概念。

* 获取负数的补码： 需要将数字与十六进制数 `0xffffffff` 相与。可理解为舍去此数字 32 位以上的数字（将 32 位以上都变为 `00` ），从无限长度变为一个 32 位整数。
* 返回前数字还原： 若补码 aa 为负数（ `0x7fffffff` 是最大的正数的补码 ），需执行 `~(a ^ x)` 操作，将补码还原至 Python 的存储格式。 `a ^ x` 运算将 1 至 32 位按位取反； `~` 运算是将整个数字取反；因此， `~(a ^ x)` 是将 32 位以上的位取反，1 至 32 位不变。

```py
print(hex(1)) # = 0x1 补码
print(hex(-1)) # = -0x1 负号 + 原码 （ Python 特色，Java 会直接输出补码）

print(hex(1 & 0xffffffff)) # = 0x1 正数补码
print(hex(-1 & 0xffffffff)) # = 0xffffffff 负数补码

print(-1 & 0xffffffff) # = 4294967295 （ Python 将其认为正数）
```

> 参考[LeetCode](https://leetcode-cn.com/problems/bu-yong-jia-jian-cheng-chu-zuo-jia-fa-lcof/solution/mian-shi-ti-65-bu-yong-jia-jian-cheng-chu-zuo-ji-7/)



## 题解 1.py

```.py
# ##剑指offer#位运算##levelm
class Solution:
    def add(self, a: int, b: int) -> int:
        x = 0xffffffff
        a, b = a & x, b & x
        while b:
            a, b = a^b & x, (a&b) << 1
        return a if a <= 0x7fffffff else ~(a^x)

```

## 题解 2.js

```.js
/**
 * @param {number} a
 * @param {number} b
 * @return {number}
 */
 var add = function(a, b) {
  let c = 0;

  while (b) {
      c = (a & b) << 1;
      a ^= b;
      b = c;
  }

  return a;
};

```


