/*
 * @lc app=leetcode.cn id=74 lang=javascript
 *
 * [74] 搜索二维矩阵
 */

// @lc code=start
/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function(matrix, target) {
    if(matrix.length===0){
        return false
    }
    if(matrix[0].length===0){
        return false
    }
    let m = 0;
    let n = 0;
    let mLen = matrix.length
    while(m<mLen-1&&matrix[m+1][0]<=target){
        // 遍历至len-1
        m++
    }
    while(matrix[m][n]!==undefined){
        if(matrix[m][n]===target){
            return true
        }
        n++
    }
    return false
};
// @lc code=end

