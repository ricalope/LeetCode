/**
 * @param {number[]} nums
 * @return {number}
 */
var firstMissingPositive = function(nums) {
    nums = Array.from(new Set(nums)).sort((a,b) => a - b).filter(a => a > 0)
    j = 1
    for(let i = 0; i < nums.length; i++) {
        if(j === nums[i]) j++
    }
    return j
};