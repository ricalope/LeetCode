/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
    const hash = nums.reduce((acc, num) => {
        acc[num] ? acc[num]++ : acc[num] = 1
        return acc
    }, {})
    for(let key in hash) {
        if(hash[key] === 1) {
            return key
        }
    }
};