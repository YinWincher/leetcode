/*
 * @lc app=leetcode.cn id=925 lang=javascript
 *
 * [925] 长按键入
 */

// @lc code=start
/**
 * @param {string} name
 * @param {string} typed
 * @return {boolean}
 */
var isLongPressedName = function(name, typed) {
    let i = 0
    let j = 0
    // let nameLen = name.length
    // let typedLen = typed.length
    while(i<name.length||j<typed.length){
        if(name[i]===typed[j]){
            i++
            j++
        }else if(name[i-1]===typed[j]){
            j++
        }else{
            return false
        }
    }
    return true
};
// @lc code=end

