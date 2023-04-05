/**
 * @param {number[][]} grid
 * @return {number}
 */
var maxAreaOfIsland = function(grid) {
    const res = { count: 0 }
    for(let r = 0; r < grid.length; r++) {
        for(let c = 0; c < grid[0].length; c++) {
            explore(grid,r,c,res)
        }
    }
    return res.count
};

const explore = (grid,row,col,res,area = { count: 0 }) => {
    if(!grid[row] || !grid[row][col]) return
    res.count = Math.max(res.count, area.count += grid[row][col])
    grid[row][col] = 0
    const deltas = [[1, 0],[-1, 0],[0, 1],[0, -1]]
    for(let [dRow,dCol] of deltas) {
        const nRow = row + dRow
        const nCol = col + dCol
        explore(grid,nRow,nCol,res,area)
    }
}