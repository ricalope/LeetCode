/**
 * @param {string} s
 * @return {number}
 */
var firstUniqChar = function(s) {
    let obj = {}, res
    for(let char of s) {
        if(obj[char]) obj[char]++
        else obj[char] = 1
    }
    for(let key in obj) {
        if(obj[key] === 1) {
            res = key
            break
        }
    }
    return s.indexOf(res)
};