#
# @lc app=leetcode.cn id=202 lang=python3
#
# [202] 快乐数
#
class Solution:
    def isHappy(self, n: int) -> bool:
        res = {}
        tem = 
        while 
    def getHappy(self,n: int) -> int:
        num: str = str(n)
        res: int = 0
        for i in range(len(num)):
            res += pow(int(i),2)
        return res    

