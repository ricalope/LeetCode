/**
 * @param {number[]} arr
 * @param {Function} fn
 * @return {number[]}
 */
var map = function(arr, fn) {
    const map = [];
    for(let i = 0; i < arr.length; i++) {
        map.push(fn(arr[i], i))
    }
    return map
};