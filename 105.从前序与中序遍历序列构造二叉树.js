/*
 * @lc app=leetcode.cn id=105 lang=javascript
 *
 * [105] 从前序与中序遍历序列构造二叉树
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
 * @param {number[]} preorder
 * @param {number[]} inorder
 * @return {TreeNode}
 */
//递归
//1.取前序遍历数组第一个元素 
//2.找到该元素在中序遍历数组中的位置 左边为左子树 右边为右子树 
//3.根据左子树 右子树的数量将前序遍历数组分割 
var buildTree = function(preorder, inorder) {
    if(preorder.length===0||inorder.length===0){
        return null;
    }
    const node = new TreeNode(preorder[0])
    const nodeInd = inorder.findIndex(val=>val===preorder[0])
    
    node.left = buildTree(preorder.slice(1,nodeInd+1),inorder.slice(0,nodeInd))
    node.right = buildTree(preorder.slice(nodeInd+1,preorder.length),inorder.slice(nodeInd+1,inorder.length))
    return node
};
// @lc code=end

