
class Solution:
    def maxProduct(self, words: List[str]) -> int:
        def parseBin(word):
            code = ['0'] * 26
            for w in word:
                code[ord(w)-ord('a')] = '1'
            return int(''.join(code), 2)
        
        wordCode = [parseBin(w) for w in words]
        wordLeng = [len(w) for w in words]

        maxx = 0
        for i in range(len(words)-1):
            for j in range(i, len(words)):
                if wordCode[i] & wordCode[j] == 0:
                    maxx = max(maxx, wordLeng[i] * wordLeng[j])
        
        return maxx
