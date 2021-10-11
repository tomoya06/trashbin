---
id: OfferII003
level: e
name: 前 n 个数字二进制中 1 的个数
online_link: https://leetcode-cn.com/problems/w3tCBm/
online_name: 剑指 Offer II 003. 前 n 个数字二进制中 1 的个数
platform: leetcode
tags:
- 位运算
- 动态规划
- 剑指offer专项版
---

偷师[官方教程](https://leetcode-cn.com/problems/w3tCBm/solution/qian-n-ge-shu-zi-er-jin-zhi-zhong-1-de-g-fkjq/)，可以利用这么算法：Brian Kernighan 算法


> 对于任意整数 x，令 `x = x & (x−1)`，该运算将 x 的二进制表示的最后一个 1 变成 0。

所以只要反复执行直到`x=0`，执行次数即为 1 的个数。
