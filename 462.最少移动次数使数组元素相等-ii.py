#
# @lc app=leetcode.cn id=462 lang=python3
#
# [462] 最少移动次数使数组元素相等 II
#
class Solution:
    # def minMoves2(self, nums: List[int]) -> int:
    #     sum = 0
    #     for i in range(len(nums)):
    #         sum += nums[i]
    #     avg = round(sum/len(nums))
    #     res = 0
    #     for i in range(len(nums)):
    #         res += abs(nums[i]-avg)
    #     return res
    def minMoves2(self, nums: List[int]) -> int:
        sum = 0
        for i in range(len(nums)):
            sum += nums[i]
        avg = round(sum/len(nums))
        res = 0
        for i in range(len(nums)):
            res += abs(nums[i]-avg)
        return res

