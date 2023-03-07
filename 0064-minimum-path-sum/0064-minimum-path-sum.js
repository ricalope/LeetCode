/**
 * @param {number[][]} grid
 * @return {number}
 */
var minPathSum = function(grid) {
    let r = grid.length
    let c = grid[0].length
    
    for(let i = 1; i < r; i++) {
        grid[i][0] += grid[i - 1][0]
    }
    
    for(let i = 1; i < c; i++) {
        grid[0][i] += grid[0][i - 1]
    }
    
    for(let i = 1; i < r; i++) {
        for(let j = 1; j < c; j++) {
            grid[i][j] += Math.min(grid[i - 1][j], grid[i][j - 1])
        }
    }
    return grid[r - 1][c - 1]
};