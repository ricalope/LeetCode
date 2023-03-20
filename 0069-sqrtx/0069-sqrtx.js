/**
 * @param {number} x
 * @return {number}
 */
var mySqrt = function(x) {
    let low = 0, high = x
    while(low < high) {
        let mid = Math.floor((low + high) / 2)
        
        if(mid * mid === x) return mid
        if(x < mid * mid) high = mid - 1
        if(x > mid * mid) low = mid + 1
    }
    return x < high * high ? high - 1 : high
};