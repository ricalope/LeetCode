/**
 * @param {number[][]} grid
 * @return {number}
 */
var minPathSum = function(grid, i = 0, j = 0, memo = {}) {
    const key = `${i},${j}`
    if(key in memo) return memo[key]
    if(i === grid.length || j === grid[0].length) return Infinity
    if(i === grid.length - 1 && j === grid[0].length - 1) return grid[i][j]
    const down = minPathSum(grid, i + 1, j, memo)
    const right = minPathSum(grid, i, j + 1, memo)
    memo[key] = grid[i][j] + Math.min(down, right)
    return memo[key]
};