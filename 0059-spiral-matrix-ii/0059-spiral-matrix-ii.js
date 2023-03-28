/**
 * @param {number} n
 * @return {number[][]}
 */
var generateMatrix = function(n) {
    let size = n * n, count = 0
    let [left,right,top,bottom] = [0, n - 1, 0, n - 1]
    const res = new Array(n).fill(0).map(() => new Array(n).fill(0))

    while(count < size) {
        for(let i = left; i <= right; i++) {
            count++
            res[top][i] = count
        }
        top++
        
        for(let i = top; i <= bottom; i++) {
            count++
            res[i][right] = count
        }
        right--
        
        for(let i = right; i >= left; i--) {
            count++
            res[bottom][i] = count
        }
        bottom--
        
        for(let i = bottom; i >= top; i--) {
            count++
            res[i][left] = count
        }
        left++
    }
    return res
};