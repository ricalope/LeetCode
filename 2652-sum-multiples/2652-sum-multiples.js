/**
 * @param {number} n
 * @return {number}
 */
var sumOfMultiples = function(n) {
    let arr = []
    if(n === 1) return [];
    for(let i = 1; i <= n; i++) {
        if(i % 3 === 0 || i % 5 === 0 || i % 7 === 0) {
            arr.push(i)
        }
    }
    return arr.length > 0 ? arr.reduce((s,n) => s + n) : [];
};