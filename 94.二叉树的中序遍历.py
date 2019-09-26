#
# @lc app=leetcode.cn id=94 lang=python3
#
# [94] 二叉树的中序遍历
#
# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, x):
#         self.val = x
#         self.left = None
#         self.right = None

class Solution:
    def inorderTraversal(self, root: TreeNode) -> List[int]:
        node : TreeNode = root
        stack : List = []
        res : List = []
        while node or len(stack)!=0:
            while node:
                stack.append(node)
                node = node.left
            if len(stack)!=0:
                node = stack.pop()
                res.append(node.val)
                node = node.right
        return res
                

