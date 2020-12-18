#
# @lc app=leetcode.cn id=4 lang=python3
#
# [4] 寻找两个正序数组的中位数
#

# @lc code=start
class Solution:
    def findMedianSortedArrays(self, nums1: List[int], nums2: List[int]) -> float:
        l1, l2 = len(nums1), len(nums2)

        if l1 > l2:
            l1, l2 = l2, l1
            nums1, nums2 = nums2, nums1

        ileft, iright = 0, l1
        while ileft <= iright:
            i = (ileft + iright) // 2
            j = (l1+l2+1) // 2 - i 

            if i != l1 and j != 0 and nums2[j-1] > nums1[i]:
                ileft = i + 1 
            elif i != 0 and j != l2 and nums2[j] < nums1[i-1]:
                iright = i -1
            else:
                if i == 0:
                    maxLeft = nums2[j-1]
                elif j == 0:
                    maxLeft = nums1[i-1]
                else:
                    maxLeft = max(nums1[i-1], nums2[j-1])
                
                if (l1+l2)%2 == 1:
                    return maxLeft
                
                if i == l1:
                    maxRight = nums2[j]
                elif j == l2:
                    maxRight = nums1[i]
                else:
                    maxRight = min(nums2[j], nums1[i])
                
                return (maxLeft + maxRight) / 2
        return 0.0



# @lc code=end

