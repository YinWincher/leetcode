#
# @lc app=leetcode.cn id=430 lang=python3
#
# [430] 扁平化多级双向链表
#
# Definition for a Node.
class Node:
    def __init__(self, val, prev, next, child):
        self.val = val
        self.prev = prev
        self.next = next
        self.child = child

class Solution:
    def flatten(self, head: 'Node') -> 'Node':
        dummy: Node = Node(0,None,head,None)
        stack: list = []
        while head or stack:
            if head.child:
                if head.next:
                    head.next.prev = None
                    stack.append(head.next)
                head.next = head.child
                head.child.prev = head
                # 临时节点 
                temNode = head.child
                head.child = None
                head = temNode
            else:
                if head.next:
                    head = head.next
                else:
                    if stack:
                        head = stack.pop(-1)
                    head = head.next
        return dummy.next



