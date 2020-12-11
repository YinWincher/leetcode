/*
 * @lc app=leetcode.cn id=236 lang=javascript
 *
 * [236] 二叉树的最近公共祖先
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
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
var lowestCommonAncestor = function (root, p, q) {
    let pStack = [];
    let qStack = [];
    let findP = false;
    let findQ = false;
    const tre = (node,stack=[]) => {
        if (!node) {
            return;
        }
        if (findP && findQ) {
            return;
        }
        const s = [...stack,node]
        if (node.val === p.val) {
            findP = true
            pStack = s
        }
        if (node.val === q.val) {
            findQ = true
            qStack = s
        }
        tre(node.left,s)
        tre(node.right,s)
    }
    tre(root,[])
    let minLen = pStack.length > qStack.length ? qStack.length : pStack.length;
    for(;minLen>-1;minLen--){
        if(pStack[minLen-1]===qStack[minLen-1]){
            return pStack[minLen-1]
        }
    }
    return ;
};
// @lc code=end
