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
var sumNumbers = function (root) {


    let sum = 0

    function DFS(root, slice) {
        if (root == null) return
        slice = (slice * 10 + root.val)

        if (
            !root.left && !root.right
        ) {
            sum = sum + slice
        }


        DFS(root.left, slice)
        DFS(root.right, slice)
        slice=(slice-root.val)/10

    }

    DFS(root, 0)
    return sum
};

