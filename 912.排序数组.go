/*
 * @lc app=leetcode.cn id=912 lang=golang
 *
 * [912] 排序数组
 */

// @lc code=start
//func sortArray(nums []int) []int {
//
//}

// @lc code=start
func sortArray(nums []int) []int {
	res := mergeSort(nums)
	return res
}
func mergeSort(val []int)[]int{
	if len(val)>1{
		mid := len(val)/2
		left := val[:mid]
		right := val[mid:]
		left = mergeSort(left)
		right = mergeSort(right)

		val = make([]int,len(val))
		for len(left)>0 && len(right)>0{
			if left[0] < right[0]{
				val = append(val,left[0])
				left = left[1:]
			}else{
				val = append(val,right[0])
				right = right[1:]
			}
		}
	}
	return val
}
// @lc code=end

