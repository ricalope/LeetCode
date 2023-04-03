/**
 * @param {number[]} piles
 * @return {boolean}
 */
var stoneGame = function(piles) {
    let alice = 0, bob = 0
    while(piles.length) {
        if(piles.length % 2 === 0) {
            alice += piles[0] > piles[piles.length - 1] ? piles.shift() : piles.pop()
        } else {
            bob += piles[0] > piles[piles.length - 1] ? piles.pop() : piles.shift()
        }
    }
    return alice > bob
};