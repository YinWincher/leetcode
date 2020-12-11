/*
 * @lc app=leetcode.cn id=763 lang=javascript
 *
 * [763] 划分字母区间
 */

// @lc code=start
/**
 * @param {string} S
 * @return {number[]}
 */
var partitionLabels = function(S) {
    const len = S.length
    let result = []
    let i =0;
    while(i<len){
        //划分区间的长度
        let k = i
        //遍历区间指针
        let j = i
        while(j<=k){
            k = Math.max(k,S.lastIndexOf(S[j]))
            j++
        }
        result.push(k-i+1)
        i = k+1
    }
    return result
};
// @lc code=end

