/*
 * @lc app=leetcode.cn id=109 lang=javascript
 *
 * [109] 有序链表转换二叉搜索树
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
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {TreeNode}
 */
var sortedListToBST = function(head) {
    let arr = []
    while(head){
        arr.push(head.val)
        head = head.next;
    }

    const tre = function(left,right){
        if(left===right){
            return new TreeNode(arr[left]);
        }
        const mid = Math.floor((right-left)/2)+left
        const val = arr[mid];
        const node = new TreeNode(val);
        node.left = tre(left,mid-1)
        node.right = tre(mid+1,right)
        return node;
    }
    return tre(0,arr.length-1)
    // dummyRoot
};
// @lc code=end

