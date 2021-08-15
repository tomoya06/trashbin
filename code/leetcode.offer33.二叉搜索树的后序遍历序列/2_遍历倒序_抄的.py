# 不太容易想到
# 抄的题解：
# https://leetcode-cn.com/problems/er-cha-sou-suo-shu-de-hou-xu-bian-li-xu-lie-lcof/solution/di-gui-he-zhan-liang-chong-fang-shi-jie-jue-zui-ha/
class Solution:
    def verifyPostorder(self, postorder: List[int]) -> bool:
        stack, root = [], float('inf')
        for idx in range(len(postorder)-1, -1, -1):
            if postorder[idx] > root:
                return False
            while stack and postorder[idx] < stack[-1]:
                root = stack.pop(-1)
            stack.append(postorder[idx])
        return True
