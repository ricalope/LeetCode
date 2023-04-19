/**
 * @param {number[]} nums
 * @return {number}
 */
var numIdenticalPairs = function(nums) {
    let mapped = {}, count = 0
    for(let num of nums) {
        if(mapped[num]) {
            count += mapped[num]
            mapped[num]++
        } else {
            mapped[num] = 1
        }
    }
    return count
};