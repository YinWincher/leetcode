/*
 * @lc app=leetcode.cn id=234 lang=golang
 *
 * [234] 回文链表
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * type ListNode struct {
 *     Val int
 *     Next *ListNode
 * }
 */
func isPalindrome(head *ListNode) bool {
	slow := head
	fast := head
	for fast!=nil && fast.Next!=nil {
		slow = slow.Next
		fast = fast.Next.Next
	}
	var pre *ListNode
	for slow!=nil {
		next := slow.Next
		slow.Next = pre
		pre = slow
		slow = next
	}
	for pre != nil && head != nil {
		if pre.Val != head.Val {
			return false
		}
		pre = pre.Next
		head = head.Next
	}
	return true
}
// @lc code=end

