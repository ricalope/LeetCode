/**
 * @param {number[][]} accounts
 * @return {number}
 */
var maximumWealth = function(accounts) {
    const mapped = accounts.map(row => {
        return row.reduce((s,n) => s + n, 0)
    })
    return Math.max(...mapped)
};