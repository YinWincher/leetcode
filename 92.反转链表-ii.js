/*
 * @lc app=leetcode.cn id=92 lang=javascript
 *
 * [92] 反转链表 II
 */
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} m
 * @param {number} n
 * @return {ListNode}
 */
var reverseBetween = function(head, m, n) {
    let counter = 1
    let dummy = new ListNode()
    dummy.next = head
    let traNode = head
    let preNode = dummy
    let preNodeOfM = null
    while(traNode){
        let now = traNode
        let pre = preNode
        let next = traNode.next
        traNode = traNode.next
        if(counter===m){
            preNodeOfM = pre
        }else if(counter>m){
            now.next = pre
        }else if(counter === n ){
            now.next = pre
            preNodeOfM.next.next = next
            preNodeOfM.next = now
            break
        }
        counter++
        preNode = preNode.next

    }

    return dummy.next
};



