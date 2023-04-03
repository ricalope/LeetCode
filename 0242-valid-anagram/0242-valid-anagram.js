/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
    const obj = {}
    for(let char of s) {
        if(obj[char]) obj[char]++
        else obj[char] = 1
    }
    for(let char of t) {
        if(obj[char]) obj[char]--
        else return false
    }
    return Object.values(obj).every(c => c === 0)
};