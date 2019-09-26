#
# @lc app=leetcode.cn id=102 lang=python3
#
# [102] 二叉树的层次遍历
#
# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, x):
#         self.val = x
#         self.left = None
#         self.right = None

class Solution:
    def levelOrder(self, root: TreeNode) -> List[List[int]]:
        if not root:
            return None
        stack1: list = []
        stack2: list = []
        res: list = []
        # head = root
        stack1.append(root)
        while stack1 or stack2:
            res.append([])
            if stack1:
                while stack1:
                    node = stack1.pop(0)
                    res[-1].append(node.val)
                    node.left and stack2.append(node.left)
                    node.right and stack2.append(node.right)
            else:
                while stack2:
                    node = stack2.pop(0)
                    res[-1].append(node.val)
                    node.left and stack1.append(node.left)
                    node.right and stack1.append(node.right)
        return res
                



