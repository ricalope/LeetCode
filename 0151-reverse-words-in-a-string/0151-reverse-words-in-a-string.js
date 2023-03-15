/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function(s) {
    const arr = []
    const split = s.split(' ').filter(s => s !== '')
    for(let i = split.length - 1; i >= 0; i--) {
        arr.push(split[i])
    }
    return arr.join(' ').trim()
};