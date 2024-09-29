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
var minDepth = function (root) {

    let minLength = Infinity
    function DFS(root) {

        if (root == null) {
            return 0
        }

        if (root.left == null && root.right == null) {
            return 1;
        }

        let left = root.left ? DFS(root.left) : Infinity
        let right = root.right ? DFS(root.right) : Infinity

        // minLength = Math.min(minLength, left + right + 1)

        return Math.min(left, right) + 1

    }



    return DFS(root)

};
