/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function(nums) {
    let i = 0
    while (i < nums.length) {
        if (nums[i] === 0) {
            const num = nums.splice(i,1)
            nums.push(num)
        } else {
            i++
        }
    }
    return nums
};