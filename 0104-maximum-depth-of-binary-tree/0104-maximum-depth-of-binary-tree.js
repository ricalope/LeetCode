/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var maxDepth = function(root) {
    const queue = [[root, 1]]
    let max = 0
    
    if(!root) return 0
    
    while(queue.length) {
        let [curr, count] = queue.shift()
        
        max = Math.max(count, max)
        
        if(curr.left) queue.push([curr.left, count + 1])
        if(curr.right) queue.push([curr.right, count + 1])
    }
    return max
};