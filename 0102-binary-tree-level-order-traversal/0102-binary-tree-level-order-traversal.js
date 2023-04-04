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
 * @return {number[][]}
 */
var levelOrder = function(root) {
    if(!root) return []
    const queue = [[root, 0]], res = []
    
    while(queue.length) {
        let [curr,count] = queue.shift()
        if(count === res.length) {
            res.push([curr.val])
        } else {
            res[count].push(curr.val)
        }
        if(curr.left) queue.push([curr.left, count + 1])
        if(curr.right) queue.push([curr.right, count + 1])
    }
    return res
};