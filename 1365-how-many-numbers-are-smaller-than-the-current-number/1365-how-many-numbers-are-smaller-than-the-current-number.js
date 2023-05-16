/**
 * @param {number[]} nums
 * @return {number[]}
 */
var smallerNumbersThanCurrent = function(nums) {
    return nums.map(num => nums.reduce((a,b) => a + (num > b), 0));
};