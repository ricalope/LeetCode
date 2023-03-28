/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    let output = 0
    for(let i = 0; i < s.length; i++) {
        let char = s[i]
        for(let j = i + 1; j < s.length; j++) {
            if(char.indexOf(s[j]) !== -1) break
            else char += s[j]
        }
        output = Math.max(output, char.length)
    }
    return output
};