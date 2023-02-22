/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function(nums1, nums2) {
    const all = [...nums1, ...nums2].sort((a, b) => a - b)
    if(all.length % 2 !== 0) {
        return all[Math.round(all.length - 1) / 2]
    }
    const mid = all[(all.length / 2) - 1]
    const mid2 = all[(all.length / 2)]
    return (mid + mid2) / 2
};