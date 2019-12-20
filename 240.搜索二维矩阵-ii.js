/*
 * @lc app=leetcode.cn id=240 lang=javascript
 *
 * [240] 搜索二维矩阵 II
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
    let nLen = matrix[0].length-1
    let mLen = matrix.length
    let m = 0
    while(nLen>=0&&m<mLen){
        if(matrix[m][nLen]===target){
            return true;
        }else if(matrix[m][nLen]>target){
            nLen--
        }else{
            m++
        }
    }
    return false
};
// @lc code=end

