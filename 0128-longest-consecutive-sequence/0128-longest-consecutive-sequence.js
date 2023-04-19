/**
 * @param {number[]} nums
 * @return {number}
 */
var longestConsecutive = function(nums) {
    let max = 0, set = new Set(nums);
    
    for(let num of set) {
        if(set.has(num - 1)) continue;
        let curr = num, currMax = 1
        while(set.has(curr + 1)) {
            curr++
            currMax++
        }
        max = Math.max(currMax,max)
    }
    return max
};