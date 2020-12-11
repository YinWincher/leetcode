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
//1. 遍历节点，将节点放入队列当中。之后遍历队列
// var flatten = function(root) {
//     const list = []
//     const resolve = function(node){
//         if(!node){
//             return
//         }
//         list.push(node)
//         resolve(node.left)
//         resolve(node.right)
//     }
//     resolve(root)
//     list.forEach((ele,ind)=>{
//         if(ind<list.length-1){
//             ele.left = null;
//             ele.right = list[ind+1]
//         }else{
//             ele.left = null
//         }
        
//     })
//     return root
// };

//通过递归每个节点的方式。 
//1.将左节点移到右节点
//2.拉平左子节点 返回左节点最末端的节点
//3.将右节点移到最末端的节点的右边
var flatten = function(root) {
    if(!root){
        return
    }
    const left = root.left
    const right = root.right
    let node = root;
    if(left){
        node = flatten(left)
        root.left = null;
        root.right = left;
    }
    if(right){
        node.right = right
        node = flatten(right)
    }
    return node
};
// @lc code=end

