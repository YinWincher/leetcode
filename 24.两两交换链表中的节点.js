/*
 * @lc app=leetcode.cn id=24 lang=javascript
 *
 * [24] 两两交换链表中的节点
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
 * @return {ListNode}
 */
var swapPairs = function(head) {
    let traNode = head
    let dummy = new ListNode()
    dummy.next = head
    let preNode = dummy
    while(traNode){

        if(traNode.next){
            let nextNode = traNode.next

            traNode.next = nextNode.next
            nextNode.next = traNode
            preNode.next = nextNode

            preNode = nextNode            
        }

        traNode = traNode.next
        preNode = preNode.next
    }
    return dummy.next
};

