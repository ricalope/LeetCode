/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    const num = String(x)
    let str = ''
    for(let i = num.length - 1; i >= 0; i--) {
        str += num[i]
    }
    return str === num
};

