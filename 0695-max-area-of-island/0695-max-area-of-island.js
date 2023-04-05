/**
 * @param {number[][]} grid
 * @return {number}
 */
var maxAreaOfIsland = function(grid) {
    const visited = new Set()
    let maxArea = 0
    for(let r = 0; r < grid.length; r++) {
        for(let c = 0; c < grid[0].length; c++) {
            let size = explore(grid,r,c,visited)
            maxArea = Math.max(size, maxArea)
        }
    }
    return maxArea
};

const explore = (grid,row,col,visited) => {
    const ibRow = 0 <= row && row < grid.length
    const ibCol = 0 <= col && col < grid[0].length
    
    if(!ibRow || !ibCol) return 0
    if(grid[row][col] === 0) return 0
    
    const pos = [row,col].toString()
    if(visited.has(pos)) return 0
    visited.add(pos)
    
    let size = 1
    const deltas = [[1, 0], [-1, 0], [0, 1], [0, -1]]
    for(let [dRow, dCol] of deltas) {
        let nRow = row + dRow
        let nCol = col + dCol
        size += explore(grid,nRow,nCol,visited)
    }
    return size
}
