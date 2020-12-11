/*
 * @lc app=leetcode.cn id=113 lang=javascript
 *
 * [113] 路径总和 II
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
 * @param {number} sum
 * @return {number[][]}
 */
var pathSum = function (root, sum) {
    let res = []
    let stack = []
    let count = 0
    let node = root
    let prev = null
    while (node || stack.length > 0) {
        while (node) {
            stack.push(node)
            count += node.val
            node = node.left
        }
        node = stack.pop()
        count -= node.val
        if (node.right) {
            if (node.right === prev) {
                prev = node
                node = null
            } else {
                stack.push(node)
                count += node.val
                node = node.right
            }
        } else {
            prev = node
            if (!node.left && count+node.val === sum) {
                //根节点
                let temRes = stack.map(val=>val.val)
                temRes.push(node.val)
                res.push(temRes)
                node = null
            } else {
                node = null
            }
        }
    }
    return res

};
// @lc code=end

