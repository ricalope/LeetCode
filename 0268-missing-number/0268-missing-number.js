/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function(nums) {
    let x = nums.length
    for(let i = 0; i < nums.length; i++) {
        x = x ^ i ^ nums[i]
    }
    return x
};