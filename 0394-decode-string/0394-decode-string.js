/**
 * @param {string} s
 * @return {string}
 */
var decodeString = function(s) {
    let stack = [], str = '', num = 0
    for(let i = 0; i < s.length; i++) {
        if(s[i] === '[') {
            stack.push(str,num)
            str = '', num = 0
        } else if(s[i] === ']') {
            let prevNum = stack.pop()
            let prevStr = stack.pop()
            str = prevStr + str.repeat(prevNum) 
        } else if(s[i] >= '0' && s[i] <= '9') {
            num = num * 10 + Number(s[i])
        } else {
            str += s[i]
        }
    }
    return str
};