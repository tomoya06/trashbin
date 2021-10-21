
class Solution:
    def numSimilarGroups(self, strs: List[str]) -> int:
        def isSimilar(w1, w2):
            cnt = 0
            for a1, a2 in zip(w1, w2):
                if a1 != a2:
                    cnt += 1
                    if cnt > 2:
                        return False
            return True
        
        wmap = dict()

        fakeNodes = [-1] * len(strs)

        for i in range(0, len(strs)):
            accNodes = []
            for j in range(0, len(strs)):
                if i != j and (wmap.get(j, fakeNodes)[i] >= 0 or isSimilar(strs[i], strs[j])):
                    accNodes.append(j)
                else:
                    accNodes.append(-1)
            wmap[i] = accNodes
        wmap[len(strs)-1] = []

        groups = []

        def visitRoutes(node):
            group = []
            
            def doVisit(nextNode):
                if nextNode not in wmap:
                    return
                group.append(nextNode)
                nextAccs = wmap.pop(nextNode, [])
                for acc in nextAccs:
                    doVisit(acc)
            
            doVisit(node)
            return group

        
        while wmap:
            entry = list(wmap.keys())[0]
            newGroup = visitRoutes(entry)
            if newGroup:
                groups.append(newGroup)

        return len(groups)



