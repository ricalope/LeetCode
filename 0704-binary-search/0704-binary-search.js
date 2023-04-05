/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {
    let start = 0, end = nums.length - 1
    
    while(start <= end) {
        const mid = Math.floor((start + end) / 2)
        
        if(nums[mid] === target) return mid
        if(target > nums[mid]) start = mid + 1
        if(target < nums[mid]) end = mid - 1
    }
    return -1
};