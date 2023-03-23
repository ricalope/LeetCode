/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    let i = 0,j = 2
    while(j < nums.length) {
        if(nums[i] === nums[j]) {
            nums.splice(i,1)
        } else {
            i++
            j++
        }
        
    }
};