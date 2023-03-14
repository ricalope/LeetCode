/**
 * @param {number[]} nums
 * @return {number}
 */
var maximumGap = function(nums) {
    if(nums.length < 2) return 0
    let max = 0
    const sorted = nums.sort((a,b) => a - b)
    let i = 0
    let j = 1
    while(j < sorted.length) {
        max = Math.max(sorted[j] - sorted[i], max)
        i++
        j++
    }
    return max
};