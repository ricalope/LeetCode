/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function(numRows) {
    //set nested array with 1
    const roof = [[1]]
    //loop while length of matrix is less than num rows
    while(roof.length < numRows) {
        const last = roof[roof.length - 1]
        const next = [1]
        for(let i = 0; i < last.length - 1; i++) {
            next.push(last[i] + last[i + 1])
        }
        next.push(1)
        roof.push(next)
    }
    return roof
};