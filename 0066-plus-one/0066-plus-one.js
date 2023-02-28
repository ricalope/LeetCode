/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function(digits) {
    let result = BigInt(digits.join('')) + BigInt(1)
    result = result.toString().split('')
    return result
};