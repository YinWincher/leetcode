/*
 * @lc app=leetcode.cn id=347 lang=javascript
 *
 * [347] 前 K 个高频元素
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
// 1.排序
// var topKFrequent = function(nums, k) {
//     let hash = {}
//     nums.forEach(val=>{
//         hash[val] = hash[val] ? hash[val]+1 : 1;
//     })
//     let hashArr = Object.keys(hash).map(val=>{
//         return {
//             key: val,
//             value: hash[val]    
//         }
//     })
//     hashArr.sort((a,b)=>{
//         return b.value - a.value;
//     })
//     return hashArr.slice(0,k).map(val=>val.key)
// };
// 2.局部排序 只排序前k个元素
var topKFrequent = function(nums, k) {
    let hash = {}
    nums.forEach(val=>{
        hash[val] = hash[val] ? hash[val]+1 : 1;
    })


    let hashArr = Object.keys(hash).map(val=>{
        return {
            key: val,
            value: hash[val]    
        }
    })

    for(let i=0;i<k;i++){
        for(let j=i+1;j<nums.length;j++){
            if(hashArr)
        }
    }
    
    return hashArr.slice(0,k).map(val=>val.key)

    function bubbleSort(nums,k){
        let len = nums.length;
        for(let i=0;i<len;i++){

        }
    }
};
// @lc code=end

