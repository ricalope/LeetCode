/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function(s) {
    let longest = ''
    
    function isPal(s, left, right) {
        
        while(left >= 0 && right < s.length && s[left] === s[right]) {
            left--
            right++
        }
        return s.slice(left + 1, right)
    }
    
    for(let i = 0; i < s.length; i++) {
        odd = isPal(s,i,i)
        even = isPal(s,i,i + 1)
        
        let longestPal = odd.length > even.length ? odd : even
        if(longest.length < longestPal.length) {
            longest = longestPal
        }
    }
    return longest
};