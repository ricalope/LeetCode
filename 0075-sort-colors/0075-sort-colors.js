/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var sortColors = function(nums) {
    if (!nums.length) return []
    let pivot = nums[nums.length - 1]
    let leftArr = []
    let rightArr = []
    for (let el of nums.slice(0, nums.length - 1)) {
        el < pivot ? leftArr.push(el) : rightArr.push(el)
    }
    let abc = [...sortColors(leftArr), pivot, ...sortColors(rightArr)]
    for(let i = 0; i < abc.length; i++) {
        nums[i] = abc[i]
    }
    
    return nums
};