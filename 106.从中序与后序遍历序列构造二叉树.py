#
# @lc app=leetcode.cn id=106 lang=python3
#
# [106] 从中序与后序遍历序列构造二叉树
#
# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, x):
#         self.val = x
#         self.left = None
#         self.right = None

class Solution:
    def buildTree(self, inorder: List[int], postorder: List[int]) -> TreeNode:
        # judge list is empty
        # use not list instead of not len(list)   (accodring to pep8)
        if not inorder or not postorder:
            return None
        else:
            head: int = postorder[-1]
            index: int = inorder.index(head)
            node = TreeNode(head)
            node.left = self.buildTree(inorder[0:index],postorder[0:index])
            node.right = self.buildTree(inorder[index+1:],postorder[index:-1])
            return node

