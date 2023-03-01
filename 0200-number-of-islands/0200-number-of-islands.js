/**
 * @param {character[][]} grid
 * @return {number}
 */
var numIslands = function(grid) {
    const visited = new Set()
    let count = 0
    for(let row = 0; row < grid.length; row++) {
        for(let col = 0; col < grid[0].length; col++) {
            if(explore([row,col], grid, visited) === true) {
                count++
            }
        }
    }
    return count
};

const explore = (node, grid, visited) => {
    const [row, col] = node
    const ibRow = 0 <= row && row < grid.length;
    const ibCol = 0 <= col && col < grid[0].length;
    if(!ibRow || !ibCol) return false
    if(grid[row][col] === "0") return false
    if(visited.has(node.toString())) return false
    visited.add(node.toString())
    const neighbors = [
        [row + 1, col],
        [row - 1, col],
        [row, col + 1],
        [row, col - 1]
    ]
    for(let neighbor of neighbors) {
        explore(neighbor, grid, visited)
    }
    return true
}