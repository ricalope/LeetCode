/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */
var reverseString = function(s) {
    for(let [a,b] = [0, s.length - 1]; a < b; a++,b--) {
        [s[a], s[b]] = [s[b], s[a]]
    }
    return s
};