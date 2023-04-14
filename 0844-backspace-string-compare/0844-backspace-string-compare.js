/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var backspaceCompare = function(s, t) {
    return checkString(s) === checkString(t)
};

const checkString = (string) => {
    let str = '', count = 0
    for(let i = string.length - 1; i >= 0; i--) {
        if(string[i] === '#') count++
        else if(count > 0) count--
        else str += string[i]
    }
    return str
}