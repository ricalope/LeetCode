/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
var canConstruct = function(ransomNote, magazine) {
    const mag = magazine.split('')
    for(let i = 0; i < ransomNote.length; i++) {
        if(mag.indexOf(ransomNote[i]) === -1) {
            return false
        } else {
            mag.splice(mag.indexOf(ransomNote[i]), 1)
        }
    }
    return true
};