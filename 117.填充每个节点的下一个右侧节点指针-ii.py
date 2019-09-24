#
# @lc app=leetcode.cn id=116 lang=python3
#
# [116] 填充每个节点的下一个右侧节点指针
#
"""
# Definition for a Node.
class Node:
    def __init__(self, val, left, right, next):
        self.val = val
        self.left = left
        self.right = right
        self.next = next
"""
class Solution:
    def connect(self, root: 'Node') -> 'Node':
        if not root:
            return root
        stack1: list = []
        stack2: list = []
        stack1.append(root)
        while stack1 or stack2:
            if stack1:
                while stack1:
                    node = stack1.pop(0)
                    if stack1:
                        node.next = stack1[0]
                    else:
                        node.next = None
                    # node.next = stack1 if stack1[0] else None
                    node.left and stack2.append(node.left)
                    node.right and stack2.append(node.right)
            else:
                while stack2:
                    node = stack2.pop(0)
                    if stack2:
                        node.next = stack2[0] 
                    else:
                        node.next = None
                    # node.next = stack2 if stack2[0] else None
                    node.left and stack1.append(node.left)
                    node.right and stack1.append(node.right)
        return root

