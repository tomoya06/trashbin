#
# @lc app=leetcode.cn id=30 lang=python3
#
# [30] 串联所有单词的子串
#

# @lc code=start
class Solution:
    def findSubstring(self, s: str, words: List[str]) -> List[int]:
        if not s or not words: return []
        
        oneWordLen = len(words[0])
        subLen = len(words) * oneWordLen
        if len(s) < subLen: return []

        wordMap = {}
        for word in words:
            wordMap[word] = wordMap[word] + 1 if word in wordMap else 1
        
        res = []

        def checkSubstring(std):
            subMap = {}
            for i in range(len(words)):
                sWord = s[i*oneWordLen+std:(i+1)*oneWordLen+std]
                if sWord not in wordMap:
                    return
                subMap[sWord] = subMap[sWord] + 1 if sWord in subMap else 1
            return subMap == wordMap

        for std in range(0, len(s)-subLen+1):
            if checkSubstring(std):
                res.append(std)
        
        return res

# @lc code=end

