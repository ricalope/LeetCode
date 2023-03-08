/**
 * @param {string[]} words
 * @return {number}
 */
var similarPairs = function(words) {
    let count = 0
    for(let i = 0; i < words.length; i++) {
        for(let j = i + 1; j < words.length; j++) {
            if(similarChars(words[i], words[j]) && i !== j) {
                count++
            }
        }
    }
    return count
};

const similarChars = (w1, w2) => {
    const set1 = new Set(w1)
    const set2 = new Set(w2)
    if(set1.size !== set2.size) return false
    return Array.from(set1).every(c => set2.has(c))
}