/**
 * @param {number[][]} mat
 * @param {number} r
 * @param {number} c
 * @return {number[][]}
 */
var matrixReshape = function(mat, r, c) {
    if(mat.length * mat[0].length !== r * c) return mat
    let arr1 = [], arr2 = mat.flat()
    
    for(let i = 0; i < arr2.length; i += c) {
        arr1.push(arr2.slice(i, i + c))
    }
    return arr1
};