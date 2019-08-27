/*
 * @lc app=leetcode.cn id=2 lang=javascript
 *
 * [2] 两数相加
 */
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
    let jin = 0
    let newNode = new ListNode()
    let res = newNode
    while(l1||l2){
        if(!l1){
            let now = l2.val+jin
            jin = Math.floor(now/10)
            res.next = new ListNode(now%10)
            res = res.next
            l2 = l2.next
        }else if(!l2){
            let now = l1.val+jin
            jin = Math.floor(now/10)
            res.next = new ListNode(now%10)
            res = res.next
            l1 = l1.next
        }else{
            let now = l1.val+l2.val+jin
            jin = Math.floor(now/10)
            res.next = new ListNode(now%10)
            res = res.next
            l1 = l1.next
            l2 = l2.next
        }
    }
    // console.log(jin)
    // console.log(res)
    if(jin>0){
        res.next = new ListNode(jin)
    }
    // console.log(res)
    // console.log(newNode)
    return newNode.next
};

