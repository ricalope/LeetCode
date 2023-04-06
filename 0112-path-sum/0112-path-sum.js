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
 * @param {number} targetSum
 * @return {boolean}
 */
var hasPathSum = function(root, target) {
    return checkSum(root,0,target)
};

const checkSum = (root,currSum,targetSum) => {
    if(!root) return false
    currSum += root.val
    
    if(!root.left && !root.right) {
        return currSum === targetSum
    }
    
    return checkSum(root.left,currSum,targetSum) || checkSum(root.right,currSum,targetSum)
}