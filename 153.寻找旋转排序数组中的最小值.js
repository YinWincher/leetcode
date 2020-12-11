/*
 * @lc app=leetcode.cn id=153 lang=javascript
 *
 * [153] 寻找旋转排序数组中的最小值
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var findMin = function(nums) {
    for (let index = 1; index < nums.length; index++) {
        if(nums[index]<nums[index-1]){
            return nums[index]
        }
    }
    return nums[0]
};
// @lc code=end

