/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function(nums, target) {
    let i = 0, j = nums.length - 1, mid
    while(i <= j) {
        mid = Math.floor((i + j) / 2)
        nums[mid] >= target ? j = mid - 1 : i = mid + 1
    }
    
    if(nums[i] !== target) return [-1, -1]
    
    const k = i
    
    i = 0, j = nums.length - 1
    
    while(i <= j) {
        mid = Math.floor((i + j) / 2)
        nums[mid] <= target ? i = mid + 1 : j = mid - 1
    }
    return [k, j]
};