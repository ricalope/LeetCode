/**
 * @param {character[][]} board
 * @return {boolean}
 */
var isValidSudoku = function(board) {
    let row = []
    let col = []
    let set = []
    for(let i = 0; i < 9; i++) {
        row[i] = new Set()
        col[i] = new Set()
        set[i] = new Set()   
    }
    for(let i = 0; i < 9; i++) {
        for(let j = 0; j < 9; j++) {
            let x = board[i][j]
            if(x === ".") continue
            
            if(row[i].has(x)) return false
            else row[i].add(x)
            
            if(col[j].has(x)) return false
            else col[j].add(x)
            
            let z = Math.floor(i / 3) * 3 + Math.floor(j / 3)
            if(set[z].has(x)) return false
            else set[z].add(x)
        }
    }
    return true
};