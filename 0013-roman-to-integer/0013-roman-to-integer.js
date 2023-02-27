/**
 * @param {string} s
 * @return {number}
 */

const romanNums = {
    "I": 1,
    "V": 5,
    "X": 10,
    "L": 50,
    "C": 100,
    "D": 500,
    "M": 1000
}
var romanToInt = function(s) {
    const values = s.split('').reduce((sum,n,i,arr) => {
        romanNums[n] < romanNums[arr[i + 1]] ? sum -= romanNums[n] : sum += romanNums[n]
        return sum
    }, 0)
    return values
};