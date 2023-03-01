/**
 * @param {string} s
 * @return {number}
 */
var firstUniqChar = function(s) {
    let res
    const hash = s.split('').reduce((a,n) => {
        a[n] ? a[n]++ : a[n] = 1
        return a
    }, {})
    for(let key in hash) {
        if(hash[key] === 1) {
            res = key
            break
        }
    }
    return s.indexOf(res)
};