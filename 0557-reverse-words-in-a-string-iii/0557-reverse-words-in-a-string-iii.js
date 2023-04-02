/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function(s) {
    return s.split(' ').map(word => {
        return reverse(word)
    }).join(' ')
};

const reverse = (word) => {
    let res = ''
    for(let i = word.length - 1; i >= 0; i--) {
        res += word[i]
    }
    return res
}