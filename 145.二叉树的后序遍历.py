#
# @lc app=leetcode.cn id=145 lang=python3
#
# [145] 二叉树的后序遍历
#
# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, x):
#         self.val = x
#         self.left = None
#         self.right = None

class Solution:
    def postorderTraversal(self, root: TreeNode) -> List[int]:
        node : TreeNode = root
        stack : List = []
        res : List = []
        while node or len(stack)!=0:
            while node:
                stack.append(node)
                node = node.left
            if len(stack)!=0:
                node = stack.pop()
                if node.right:
                    stack.append(node)
                    node = node.right
                    pass
                else:
                    res.append(node.val)
                    print(node.val)
                    
                    

