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
 * @return {TreeNode}
 */
var invertTree = function(root) {
    const queue = [root]
    while(queue.length) {
        let curr = queue.shift()
        if(curr) {
            [curr.left,curr.right] = [curr.right,curr.left]
            queue.push(curr.left,curr.right)
        }
    }
    return root
};