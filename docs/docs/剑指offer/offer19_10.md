
# 正则表达式匹配

 #剑指offer  #动态规划

> 题解 1.py

```.py
# ##剑指offer#动态规划##levelh
class Solution:
    def isMatch(self, s: str, p: str) -> bool:
        pp = ['']
        for c in p:
            if c == '*':
                pp[-1] += c
            else:
                pp.append(c)
        ss = [''] + list(s)
        mp = [[False for _ in pp] for _ in ss]

        mp[0][0] = True
        for idx in range(1, len(ss)):
            mp[idx][0] = False
        for idx in range(1, len(pp)):
            mp[0][idx] = mp[0][idx-1] and pp[idx][-1] == '*'
        
        for pidx in range(1, len(pp)):
            for sidx in range(1, len(ss)):
                if pp[pidx][-1] == '*':
                    mp[sidx][pidx] = (mp[sidx-1][pidx] and (pp[pidx][0] == '.' or pp[pidx][0] == ss[sidx])) or mp[sidx][pidx-1]
                else:
                    mp[sidx][pidx] = mp[sidx-1][pidx-1] and (pp[pidx][0] == ss[sidx] or pp[pidx][0] == '.')
        
        return mp[-1][-1]

```


