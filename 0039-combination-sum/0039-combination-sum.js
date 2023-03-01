/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum = function(candidates, target) {
    const result = []
    
    function search(arr = [], sum = 0, idx = 0) {
        if(sum === target) {
            result.push(arr)
            return
        }
        for(let i = idx; i < candidates.length; i++) {
            if(sum + candidates[i] <= target) {
                search([...arr, candidates[i]], sum + candidates[i], i)
            }
        }
    }
    search()
    return result
};