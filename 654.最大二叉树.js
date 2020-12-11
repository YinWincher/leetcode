/*
 * @lc app=leetcode.cn id=654 lang=javascript
 *
 * [654] 最大二叉树
 */

// @lc code=start
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {number[]} nums
 * @return {TreeNode}
 */
var constructMaximumBinaryTree = function(nums) {
    function resolve(start,end){
        if(start>end){
            return null
        }
        let maxInd = 0;
        let max = nums[start]
        for(let i=start;i<=end;i++){
            if(max<=nums[i]){
                max = nums[i]
                maxInd = i
            }
        }
        const node = new TreeNode(max)
        node.left = resolve(start,maxInd-1)
        node.right = resolve(maxInd+1,end)
        return node
    }
    return resolve(0,nums.length-1)
    // if(nums.length===0)
};
// @lc code=end

