/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function(numRows) {
    let roof = [[1]]
    while(roof.length < numRows) {
        let last = roof[roof.length - 1]
        let next = [1]
        for(let i = 0; i < last.length - 1; i++) {
            next.push(last[i] + last[i + 1])
        }
        next.push(1)
        roof.push(next)
    }
    return roof
};