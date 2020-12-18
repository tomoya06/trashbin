#
# @lc app=leetcode.cn id=10 lang=python3
#
# [10] 正则表达式匹配
#

# @lc code=start
class Solution:
    def isMatch(self, s: str, p: str) -> bool:
        def splitSecs(p) -> List[str]:
            secs = []
            i = 0
            while i < len(p):
                if i < len(p)-1 and p[i+1] == '*':
                    secs.append(p[i:i+2])
                    i += 2
                else:
                    secs.append(p[i])
                    i += 1
            return secs
        
        secs = splitSecs(p)

        def isTotallyMatch(ss: str, pp: List[str]) -> bool:
            if len(ss) == 0:
                if len(pp) == 0:
                    return True
                if len(pp[0]) == 2:
                    return isTotallyMatch(ss, pp[1:])
                return False
            # len(ss) > 0
            if len(pp) == 0:
                return False
            if len(pp[0]) == 1:
                return (ss[0] == pp[0] or pp[0] == '.') and isTotallyMatch(ss[1:], pp[1:])
            # pp[0] has '*'
            if pp[0] == '.*':
                return isTotallyMatch(ss[1:], pp) or isTotallyMatch(ss, pp[1:])
            return ss[0] == pp[0][0] and isTotallyMatch(ss[1:], pp) or \
                isTotallyMatch(ss, pp[1:])
        
        return isTotallyMatch(s, secs)

# @lc code=end

