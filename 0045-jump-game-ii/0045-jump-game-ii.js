/**
 * @param {number[]} nums
 * @return {number}
 */
var jump = function(nums) {
    let a = 0, b = 0, c = 0
    for(let i = 0; i < nums.length - 1; i++) {
        a = Math.max(a, i + nums[i])
        if(i === c) {
            b++
            c = a
        }
    }
    return b
};