
class Solution:
    def allPathsSourceTarget(self, graph: List[List[int]]) -> List[List[int]]:
        n = len(graph)-1
        res = []

        def dfs(cur: int):
            path.append(cur)
            if cur == n:
                res.append(list(path))
            else:            
                curNexts = graph[cur]
                for nxt in curNexts:
                    dfs(nxt)

            path.pop()
        
        path = []

        dfs(0)

        return res
