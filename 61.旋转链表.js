/*
 * @lc app=leetcode.cn id=61 lang=javascript
 *
 * [61] 旋转链表
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
 * @param {number} k
 * @return {ListNode}
 */
var rotateRight = function(head, k) {
    let len = 0;
    const node = head;
    let pos = 0;
    while(node){
        len++;
        node = node.next;
    }
    console.log(len);
    pos = k%len;
    for (let index = 0; index < pos; index++) {
        const element = array[index];
        
    }
};
// @lc code=end

