/*
 * @lc app=leetcode.cn id=106 lang=javascript
 *
 * [106] 从中序与后序遍历序列构造二叉树
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
 * @param {number[]} inorder
 * @param {number[]} postorder
 * @return {TreeNode}
 */
//递归
// 1.取后序遍历最后一个值 
// 2.获取该值在中序遍历中的位置
// 3.中序遍历中该值左边的数组为左子树
var buildTree = function(inorder, postorder) {
    if(inorder.length===0||postorder.length===0){
        return null
    }
    const node = new TreeNode(postorder[postorder.length-1])
    const nodeInd = inorder.findIndex(val=>val===postorder[postorder.length-1])
    node.left = buildTree(inorder.slice(0,nodeInd),postorder.slice(0,nodeInd))
    node.right = buildTree(inorder.slice(nodeInd+1,inorder.length),postorder.slice(nodeInd,postorder.length-1))
    return node
};
// @lc code=end

