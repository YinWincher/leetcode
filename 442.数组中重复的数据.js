/*
 * @lc app=leetcode.cn id=442 lang=javascript
 *
 * [442] 数组中重复的数据
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findDuplicates = function(nums) {
    let res = []
    for (let index = 0; index < nums.length; index++) {
        const element = nums[index];
        if(nums[Math.abs(element)-1]>0){
            nums[Math.abs(element)-1] *= -1
        }else{
            res.push(Math.abs(element))
        }
    }
    return res
};
// @lc code=end

