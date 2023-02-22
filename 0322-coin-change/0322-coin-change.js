/**
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */
var coinChange = function(coins, amount) {
    let dp = Array(amount + 1).fill(Infinity)
    dp[0] = 0
    for(let curr = 1; curr <= amount; curr++) {
        for(let coin of coins) {
            if(curr - coin >= 0) {
                dp[curr] = Math.min(dp[curr], 1 + dp[curr - coin])
            }
        }
    }
    return dp[amount] > amount ? -1 : dp[amount]
};