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
var maxDepth = function (root) {

    if (root == null) return 0;

    if (root.left == null && root.right == null) {
        return 1
    }

    let left = root.left == null ? -Infinity : maxDepth(root.left)
    let right = root.right == null ? -Infinity : maxDepth(root.right)

    return Math.max(left,right)+1


};
