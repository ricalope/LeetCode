/**
 * @param {number} num
 * @return {number}
 */
var numberOfSteps = function(num) {
    let count = 0,total = num
    while(total > 0) {
        if(total % 2 === 0) {
            total /= 2
            count++
        } else {
            total -= 1
            count++
        }
    }
    return count
};