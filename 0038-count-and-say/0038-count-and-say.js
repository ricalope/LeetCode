/**
 * @param {number} n
 * @return {string}
 */
var countAndSay = function(n) {
    if(n === 1) return '1'
    return countAndSay(n - 1).match(/1+|2+|3+/g)
    .reduce((s,n) => s += `${n.length}${n[0]}`, '')
};