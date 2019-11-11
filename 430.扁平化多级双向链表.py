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
                # 当前节点
                nodeHead = head
                # 节点child
                nodeChild = head.child
                # 下一个节点
                nodeNext = head.next
                if nodeNext:
                    nodeNext.prev = None
                    stack.append(nodeNext)
                nodeHead.child = None
                nodeHead.next = nodeChild
                nodeChild.prev = nodeHead
                head = nodeChild
            else:
                if head.next:
                    head = head.next
                else:
                    if stack:
                        temNode = head
                        head = stack.pop(-1)
                        temNode.next = head
                        head.prev = temNode
                    else:
                        head = None
        return dummy.next

