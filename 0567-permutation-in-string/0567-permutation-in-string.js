/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
var checkInclusion = function(s1, s2) {
    if(s1.length > s2.length) return false
    
    const chars = {}
    
    for(let i = 0; i < s1.length; i++) {
        chars[s1[i]] = (chars[s1[i]] || 0) + 1
    }
    
    let left = 0, right = 0
    let requiredLength = s1.length
    
    while(right < s2.length) {
        if(chars[s2[right]] > 0) requiredLength--
        chars[s2[right]]--
        right++
        
        if(requiredLength === 0) return true
        
        if(right - left === s1.length) {
            if(chars[s2[left]] >= 0) requiredLength++
            chars[s2[left]]++
            left++
        }
    }
    return false
};