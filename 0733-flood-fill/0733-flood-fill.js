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
        const [row,col] = queue.shift()
        
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

const findNeighbors = (grid,r,c) => {
    const neighbors = []
    if(r - 1 >= 0) neighbors.push([r - 1,c])
    if(r + 1 < grid.length) neighbors.push([r + 1,c])
    if(c - 1 >= 0) neighbors.push([r,c - 1])
    if(c + 1 < grid[0].length) neighbors.push([r,c + 1])
    return neighbors
}