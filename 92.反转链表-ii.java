/*
 * @lc app=leetcode.cn id=92 lang=java
 *
 * [92] 反转链表 II
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * public class ListNode {
 *     int val;
 *     ListNode next;
 *     ListNode(int x) { val = x; }
 * }
 */
class Solution {
    public ListNode reverseBetween(ListNode head, int m, int n) {
        ListNode dummy = ListNode();
        ListNode before = dummy;
        ListNode after = ListNode();
        ListNode node = head;
        dummy.next = head;
        int i = 1;
        while(node!=null){
            if(i<m){
                before = node;
            }else if(i==m){

            }else if(i>n){
                break;
            }else{
                before = node;
            }
            node = node.next;
        }

        return dummy.next;
    }
}
// @lc code=end

