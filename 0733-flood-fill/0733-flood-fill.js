/**
 * @param {number[][]} image
 * @param {number} sr
 * @param {number} sc
 * @param {number} color
 * @return {number[][]}
 */
var floodFill = function(image, sr, sc, color) {
    const currColor = image[sr][sc]
    if(currColor === color) return image
    const queue = [[sr,sc]]
    while(queue.length) {
        let [row,col] = queue.shift()
        if(image[row][col] === currColor) {
            image[row][col] = color
            const neighbors = findNeighbors(image,row,col)
            neighbors.forEach(nbr => {
                queue.push(nbr)
            })
        }
    }
    return image
};

const findNeighbors = (grid,row,col) => {
    const neighbors = []
    if(row - 1 >= 0) neighbors.push([row - 1, col])
    if(row + 1 < grid.length) neighbors.push([row + 1, col])
    if(col - 1 >= 0) neighbors.push([row, col - 1])
    if(col + 1 < grid[0].length) neighbors.push([row, col + 1])
    return neighbors
}