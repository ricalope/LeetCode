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
 * @return {number[]}
 */
var postorderTraversal = function(root) {
    if(!root) return []
    const stack = [root], arr = []
    while(stack.length) {
        const curr = stack[stack.length - 1]
        if(curr.left) {
            stack.push(curr.left)
            curr.left = null
        } else if(curr.right) {
            stack.push(curr.right)
            curr.right = null
        } else {
            arr.push(stack.pop().val)
        }
    }
    return arr
};