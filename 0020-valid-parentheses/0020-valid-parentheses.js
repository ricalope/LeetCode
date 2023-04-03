/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    const stack = []
    const parObj = {
        '(': ')',
        '[': ']',
        '{': '}'
    }
    for(let char of s) {
        if(char in parObj) {
            stack.push(parObj[char])
        } else if(stack.length > 0 && stack[stack.length - 1] === char) {
            stack.pop()
        } else {
            return false
        }
    }
    return stack.length === 0
};