#
# @lc app=leetcode.cn id=349 lang=python3
#
# [349] 两个数组的交集
#
class Solution:
    def intersection(self, nums1: List[int], nums2: List[int]) -> List[int]:
        res = []
        for i in range(len(nums1)):
            if nums2.count(nums1[i]) > 0:
                res.append(nums1[i])
        return set(res)


