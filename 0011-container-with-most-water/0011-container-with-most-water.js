/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
    let left = 0
    let right = height.length - 1
    let ans = 0
    while(left < right) {
        let width = right - left
        let maxArea = Math.min(height[left], height[right]) * width
        ans = Math.max(ans, maxArea)
        
        if(height[left] <= height[right]) {
            left++
        } else {
            right--
        }
    }
    return ans
};