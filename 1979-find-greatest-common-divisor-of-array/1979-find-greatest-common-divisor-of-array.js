/**
 * @param {number[]} nums
 * @return {number}
 */
var findGCD = function(nums) {
    nums.sort((a, b) => a - b)
    let min = nums[0]
    let max = nums[nums.length - 1]
    for(let i = max; i >= 0; i--) {
        if(max % i === 0 && min % i === 0) {
            return i
        }
    }
    return 1
};