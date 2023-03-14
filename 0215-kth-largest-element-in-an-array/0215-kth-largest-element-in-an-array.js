/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findKthLargest = function(nums, k) {
    const numSort = nums.sort((a,b) => b - a)
    if(nums.length === 1) return nums[0]
    return numSort[k-1]
};