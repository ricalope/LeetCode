/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var rotate = function(nums, k) {
    if(!nums.length) return []
    if(k > 0) {
        k %= nums.length
        reverse(nums,0,nums.length - 1)
        reverse(nums,0,k - 1)
        reverse(nums,k,nums.length - 1)
    }
    return nums
};

const reverse = (nums,start,end) => {
    if(!nums.length || start >= end) return
    
    while(start < end) {
        let temp = nums[start]
        nums[start] = nums[end]
        nums[end] = temp
        start++, end--
    }
    return nums
}