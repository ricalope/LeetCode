/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function(nums) {
    const reducer = nums.reduce((acc, num) => {
        return [acc[1], Math.max(acc[0] + num, acc[1])]
    },[0,0])[1]
    return reducer
};