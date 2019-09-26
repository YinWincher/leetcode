#
# @lc app=leetcode.cn id=105 lang=python3
#
# [105] 从前序与中序遍历序列构造二叉树
#
# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, x):
#         self.val = x
#         self.left = None
#         self.right = None

class Solution:
    def buildTree(self, preorder: List[int], inorder: List[int]) -> TreeNode:
        if not preorder or not inorder:
            return None
        head = preorder[0]
        index = inorder.index(head)
        node = TreeNode(head)
        node.left = self.buildTree(preorder[1:index+1],inorder[0:index])
        node.right = self.buildTree(preorder[index+1:],inorder[index+1:])
        return node

