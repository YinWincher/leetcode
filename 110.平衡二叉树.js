/*
 * @lc app=leetcode.cn id=110 lang=javascript
 *
 * [110] 平衡二叉树
 */
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isBalanced = function(root) {

    let res = true;
    height(root)
    return res
    function height(root){
        if(!root){
            return 0
        }
        let leftHeight = height(root.left)+1
        let rightHeight = height(root.right)+1
        if(Math.abs(leftHeight-rightHeight)>1){
            res = false 
        }
        return leftHeight>rightHeight ? leftHeight : rightHeight
    }
};

