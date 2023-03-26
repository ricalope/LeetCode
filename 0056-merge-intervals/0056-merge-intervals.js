/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function(intervals) {
    if(!intervals.length) return intervals
    intervals.sort((a,b) => a[0] !== b[0] ? a[0] - b[0] : a[1] - b[1])
    let prev = intervals[0]
    let res = [prev]
    for(let num of intervals) {
        if(num[0] <= prev[1]) {
            prev[1] = Math.max(num[1], prev[1])
        } else {
            res.push(num)
            prev = num
        }
    }
    return res
};