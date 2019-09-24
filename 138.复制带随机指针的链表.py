#
# @lc app=leetcode.cn id=138 lang=python3
#
# [138] 复制带随机指针的链表
#
"""
# Definition for a Node.
class Node:
    def __init__(self, val, next, random):
        self.val = val
        self.next = next
        self.random = random
"""
class Solution:
    def copyRandomList(self, head: 'Node') -> 'Node':
        if not head:
            return None
        node = self.getList(head.val)
        if head.random:
            node.random = self.getList(head.random.val)
        res = node
        while head.next :
            node.next = self.getList(head.next.val)
            if head.next.random:
                node.next.random = self.getList(head.next.random.val)
            head = head.next
            node = node.next
        # print(self._nodeHash)
        return res
            
    def getList(self, val) -> 'Node':
        if not hasattr(self,'_nodeHash'):
            self._nodeHash = {}
        if self._nodeHash.get(val):
            return self._nodeHash[val]
        else:
            node = Node(val,None,None)
            self._nodeHash[val] = node
            return node

