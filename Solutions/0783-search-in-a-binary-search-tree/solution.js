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
 * @param {number} val
 * @return {TreeNode}
 */
var searchBST = function (root, val) {

    function DFS(root, val) {
        if (root == null) return null
        // if(root.val>val) return null
        if (root.val == val) {
            return root
        }
        if (val < root.val) {
            return DFS(root.left, val)
        } else {

            return DFS(root.right, val)
        }

    }

    return DFS(root, val)
};
