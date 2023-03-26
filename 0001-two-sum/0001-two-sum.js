/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    const mapped = new Map()
    for(let i = 0; i < nums.length; i++) {
        const comp = target - nums[i]
        if(mapped.has(comp)) {
            return [i, mapped.get(comp)]
        } else {
            mapped.set(nums[i], i)
        }
    }
};