/*
 * @lc app=leetcode.cn id=530 lang=javascript
 *
 * [530] 二叉搜索树的最小绝对差
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
 * @param {TreeNode} root
 * @return {number}
 */
var getMinimumDifference = function(root) {
    let val = []
    let result = Number.MAX_SAFE_INTEGER
    const getData = (root)=>{
        if(!root){
            return
        }
        getData(root.left)
        val.push(root.val)
        getData(root.right)
    }
    getData(root)
    for(let i=1;i<val.length;i++){
        const a = val[i] - val[i-1]
        result = result>a ? a : result
    }
    return result
};
// @lc code=end

