/**
 * @param {string[]} sentences
 * @return {number}
 */
var mostWordsFound = function(sentences) {
    let max = 0;
    
    for(let i = 0; i < sentences.length; i++) {
        const split = sentences[i].split(' ');
        max = Math.max(max, split.length);
    }
    return max;
};