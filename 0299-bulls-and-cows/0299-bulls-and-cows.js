/**
 * @param {string} secret
 * @param {string} guess
 * @return {string}
 */
var getHint = function(secret, guess) {
    let map = {}, A = 0, B = 0
    
    for(let i = 0; i < 10; i++) map[i] = 0
    for(let i = 0; i < secret.length; i++) {
        if(secret[i] === guess[i]) A++
        else {
            map[secret[i]]++
            B += map[secret[i]] <= 0 ? 1 : 0
            map[guess[i]]--
            B += map[guess[i]] >= 0 ? 1 : 0
        }
    }
    return A + 'A' + B + 'B'
};