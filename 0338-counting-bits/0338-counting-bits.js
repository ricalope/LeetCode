/**
 * @param {number} n
 * @return {number[]}
 */
var countBits = function(n) {
    let bitArray = new Array(n + 1).fill(0)
    let offset = 1
    for(let i = 1; i <= n; i++) {
        if(offset * 2 === i) offset = i
        bitArray[i] = 1 + bitArray[i - offset]
    }
    return bitArray
};