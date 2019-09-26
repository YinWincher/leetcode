#
# @lc app=leetcode.cn id=144 lang=python3
#
# [144] 二叉树的前序遍历
#
# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, x):
#         self.val = x
#         self.left = None
#         self.right = None

class Solution:
    def preorderTraversal(self, root: TreeNode) -> List[int]:
        stack : List = []
        res : List = []
        node : TreeNode = root
        while node or len(stack) != 0:
            while node:
                print(node.val)
                res.append(node.val)
                stack.append(node)
                node = node.left
            if len(stack) != 0:
                node = stack.pop().right
            # node = node.right
            # print(node.val)
        return res

