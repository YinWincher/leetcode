/*
 * @lc app=leetcode.cn id=138 lang=javascript
 *
 * [138] 复制带随机指针的链表
 */
/**
 * // Definition for a Node.
 * function Node(val,next,random) {
 *    this.val = val;
 *    this.next = next;
 *    this.random = random;
 * };
 */
/**
 * @param {Node} head
 * @return {Node}
 */
var copyRandomList = function(head) {
    let res = new Node(0,null)
    let node = res
    let tem = head
    let hashTable = {}
    while(tem){
        node.next = new Node(tem.val,null,null)
        hashTable[tem.val] = node.next
        node = node.next
        tem = tem.next
    }
    tem = head
    node = res.next
    while(tem){
        node.random = tem.random ? hashTable[tem.random.val ] : null
        node = node.next
        tem = tem.next
    }
    
    return res.next
};

