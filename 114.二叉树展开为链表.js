/*
 * @lc app=leetcode.cn id=114 lang=javascript
 *
 * [114] 二叉树展开为链表
 */

// @lc code=start
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {void} Do not return anything, modify root in-place instead.
 */
var flatten = function(root) {
    const list = []
    const resolve = function(node){
        if(!node){
            return
        }
        list.push(node)
        resolve(node.left)
        resolve(node.right)
    }
    resolve(root)
    list.forEach((ele,ind)=>{
        if(ind<list.length-1){
            ele.left = null;
            ele.right = list[ind+1]
        }else{
            ele.left = null
        }
        
    })
    return root
};
// @lc code=end

