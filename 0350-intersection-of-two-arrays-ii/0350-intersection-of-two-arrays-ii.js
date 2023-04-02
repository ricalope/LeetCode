/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersect = function(nums1, nums2) {
    const obj = {}, res = []
    for(let num of nums1) {
        if(obj[num]) obj[num]++
        else obj[num] = 1
    }
    for(let num of nums2) {
        if(obj[num]) {
            res.push(num)
            obj[num]--
        }
    }
    return res
};