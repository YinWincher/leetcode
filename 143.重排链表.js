/*
 * @lc app=leetcode.cn id=143 lang=javascript
 *
 * [143] 重排链表
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {void} Do not return anything, modify head in-place instead.
 */
var reorderList = function(head) {
    const dummy = new ListNode()
    dummy.next = head
    let arr = []
    let node = dummy.next
    while(node){
        const next = node.next
        node.next = null
        arr.push(node)
        node = next
    }
    node = dummy
    while(arr.length>0){
        const h = arr.shift()
        if (h) {
            node.next = h
            node = node.next
        }
        const t = arr.pop()
        if (t) {
            node.next = t
            node = node.next
        }
    }
    head = dummy.next
    // return dummy.next
};
// @lc code=end

