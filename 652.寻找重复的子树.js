/*
 * @lc app=leetcode.cn id=652 lang=javascript
 *
 * [652] 寻找重复的子树
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
 * @return {TreeNode[]}
 * 
 */
// 递归
// 1. 遍历每一个节点 获取该节点的前序遍历
var findDuplicateSubtrees = function(root) {
    let result = []
    let node = []
    function resolve(root,res=[]){
        if(!root){
            return
        }
        const newRes = preorder(root,[]).join(",")
        if(node.indexOf(newRes)>=0){
            result.push(root)
        }else{
            node.push(newRes)
        }
        resolve(root.left)
        resolve(root.right)
    }
    function preorder(root,res=[]){
        if(!root){
            return res
        }
        res.push(root.val)
        preorder(root.left,res)
        preorder(root.right,res)
        return res
    }
    resolve(root)
    console.log(node)
    return result
};
// @lc code=end

