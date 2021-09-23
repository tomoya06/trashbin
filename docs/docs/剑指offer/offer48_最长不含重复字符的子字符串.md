---
tags:
  - 剑指offer
  - 滑动窗口
---

# 最长不含重复字符的子字符串

## 题解 1.py

```.py
# ##剑指offer#滑动窗口##levelm
class Solution:
    def lengthOfLongestSubstring(self, s: str) -> int:
        if not s:
            return 0
        s = list(s)
        ll, rr = 0, 0
        mlen = 1
        while rr < len(s) and ll <= rr:
            if ll == rr or len(set(s[ll:rr+1])) == rr-ll+1:
                rr += 1
            else:
                ll += 1
            if len(set(s[ll:rr+1])) == rr-ll+1:
                mlen = max(mlen, rr-ll+1)
        return mlen
```


