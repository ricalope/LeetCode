/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
    const res = nums.reduce((s,n) => {
        s[n] ? s[n]-- : s[n] = 1
        return s
    }, {})
    for(let key in res) {
        if(res[key] > 0) {
            return key
        }
    }
};