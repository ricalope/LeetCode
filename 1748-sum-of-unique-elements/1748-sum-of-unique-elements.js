/**
 * @param {number[]} nums
 * @return {number}
 */
var sumOfUnique = function(nums) {
    const mapped = {}
    for(let num of nums) {
        mapped[num] = (mapped[num] || 0) + 1;
    }
    console.log(mapped)
    let sum = 0;
    for(let num in mapped) {
        (mapped[num] === 1) && (sum += +num);
    }
    return sum;
};