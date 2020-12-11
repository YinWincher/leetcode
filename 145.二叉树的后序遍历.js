/*
 * @lc app=leetcode.cn id=145 lang=javascript
 *
 * [145] 二叉树的后序遍历
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
 * @param {TreeNode} root
 * @return {number[]}
 */
var postorderTraversal = function (root) {
    let node = root;
    let res = [];
    let stack = [];
    let prev = null;
    while (node || stack.length > 0) {
        while (node) {
            stack.push(node);
            node = node.left;
        }
        node = stack.pop();
        if (node.right) {
            if (node.right === prev) {
                res.push(node.val)
                prev = node;
                node = null;
            } else {
                stack.push(node)
                node = node.right
            }
        } else {
            res.push(node.val);
            prev = node;
            node = null;
        }
    }
    return res;
};
// @lc code=end
