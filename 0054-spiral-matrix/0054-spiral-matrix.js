/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var spiralOrder = function(matrix) {
    const res = []
    let r = matrix.length, c = matrix[0].length
    let [top, right, bottom, left] = [0, c - 1, r - 1, 0]
    
    while(left<= right && top <= bottom) {
        for(let i = left; i <= right; i++) res.push(matrix[top][i])
        top++
        
        for(let i = top; i <= bottom; i++) res.push(matrix[i][right])
        right--
        
        if(top <= bottom) {
            for(let i = right; i >= left; i--) res.push(matrix[bottom][i])
            bottom--
        }
        
        if(left <= right) {
            for(let i = bottom; i >= top; i--) res.push(matrix[i][left])
            left++
        }
    }
    return res
};