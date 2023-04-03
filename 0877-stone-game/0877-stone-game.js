/**
 * @param {number[]} piles
 * @return {boolean}
 */
var stoneGame = function(piles) {
    let alice = 0, bob = 0
    for(let [a, b] = [0, piles.length - 1]; a <= b; a++, b--) {
        if(a % 2 === 0) alice += piles[a] > piles[b] ? piles[a] : piles[b]
        else bob += piles[a] > piles[b] ? piles[b] : piles[a]
    }
    return alice > bob
};