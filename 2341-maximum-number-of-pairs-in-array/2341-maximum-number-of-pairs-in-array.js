/**
 * @param {number[]} nums
 * @return {number[]}
 */
var numberOfPairs = function(nums) {
    let mapped = {}, pairs = 0
    for(let i = 0; i < nums.length; i++) {
        if(mapped[nums[i]]) {
            delete mapped[nums[i]]
            pairs++
        } else {
            mapped[nums[i]] = 1
        }
    }
    return [pairs, Object.values(mapped).length]
};