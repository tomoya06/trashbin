class Solution:
    def validateStackSequences(self, pushed: List[int], popped: List[int]) -> bool:
        res = []
        for p in pushed:
            res.append(p)

            while res and popped:
                if res[-1] == popped[0]:
                    res.pop(-1)
                    popped.pop(0)
                else:
                    break
            
        return len(res) == 0
