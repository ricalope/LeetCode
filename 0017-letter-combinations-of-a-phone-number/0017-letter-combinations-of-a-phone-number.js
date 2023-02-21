/**
 * @param {string} digits
 * @return {string[]}
 */

var letterCombinations = function(digits) {
    if(digits.length === 0) return []
    const numberPad = {
    2: ['a', 'b', 'c'],
    3: ['d', 'e', 'f'],
    4: ['g', 'h', 'i'],
    5: ['j', 'k', 'l'],
    6: ['m', 'n', 'o'],
    7: ['p', 'q', 'r', 's'],
    8: ['t', 'u', 'v'],
    9: ['w', 'x', 'y', 'z'],
}
    const res = []
    function backTrack(str, idx) {
        if(str.length === digits.length) {
            res.push(str)
        } else {
            const chars = numberPad[digits[idx]]
            for(let char of chars) {
                backTrack(str + char, idx + 1)
            }
        }
    }
    backTrack('', 0)
    return res
};
