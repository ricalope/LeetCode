/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var characterReplacement = function(s, k) {
    let map = [26]
    let largest = 0, start = 0, maxLen = 0
    
    for(let i = 0; i < s.length; i++) {
        const c = s[i]
        map[c] = (map[c] || 0) + 1
        
        largest = Math.max(largest, map[c])
        
        if(i - start + 1 - largest > k) {
            map[s[start]] -= 1
            start++
        }
        
        maxLen = Math.max(maxLen, i - start + 1)
    }
    return maxLen
};