#
# @lc app=leetcode.cn id=61 lang=python3
#
# [61] 旋转链表
#
# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, x):
#         self.val = x
#         self.next = None

class Solution:
    def rotateRight(self, head: ListNode, k: int) -> ListNode:
        len = self.getListLength(head)
        
        print(k%len)
        # i = k%i

    def getListLength(self, head: ListNode) -> int:
        node = head
        len = 0
        while node:
            len = len+1
            node = node.next
        return len    
    

