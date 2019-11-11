#
# @lc app=leetcode.cn id=150 lang=python3
#
# [150] 逆波兰表达式求值
#
import math

class Solution:
    def evalRPN(self, tokens: List[str]) -> int:
        if not tokens:
            return 0
        numbers: List[int] = []
        symbolsTup = ("+","-","*","/")
        for a in range(len(tokens)):
            if tokens[a] in symbolsTup:
                # 符号
                number1 = numbers.pop()
                number2 = numbers.pop()
                if tokens[a] == "+":
                    numbers.append(number2+number1)
                elif tokens[a] == "-":
                    numbers.append(number2-number1)
                elif tokens[a] == "*":
                    numbers.append(number2*number1)
                else :
                    numbers.append(int(number2/number1))
            else:
                numbers.append(int(tokens[a]))
        return numbers[0]


