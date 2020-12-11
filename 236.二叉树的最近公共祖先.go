/*
 * @lc app=leetcode.cn id=236 lang=golang
 *
 * [236] 二叉树的最近公共祖先
 */

// @lc code=start
/**
 * Definition for TreeNode.
 * type TreeNode struct {
 *     Val int
 *     Left *ListNode
 *     Right *ListNode
 * }
 */
 func lowestCommonAncestor(root, p, q *TreeNode) *TreeNode {
    resolve := func(node *TreeNode,findP,findQ bool)(*TreeNode){
		if node==nil{
			return nil
		}
		if !findP && node.Val == p.Val{
			findP = true
		}
		if !findQ && node.Val == q.Val{
			findQ = true
		}
		if findP && findQ{
			return node
		}
		left := resolve(node.Left,findP,findQ)
		if left != nil{
			return left
		}
		rig := resolve(node.Right,findP,findQ)
		if rig != nil{
			return rig
		}
		return nil
	}
	resolve()
}
// @lc code=end

