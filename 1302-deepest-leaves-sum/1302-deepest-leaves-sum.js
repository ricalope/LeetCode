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
var deepestLeavesSum = function(root) {
    const arr = []
    function recurse(root, count = 0) {
        if(!root) return 0
        
        arr[count] = (arr[count] || 0) + root.val
        recurse(root.left, count + 1)
        recurse(root.right, count + 1)
    }
    recurse(root)
    return arr[arr.length - 1]
};