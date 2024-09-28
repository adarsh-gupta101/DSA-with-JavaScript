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
var hasPathSum = function (root, targetSum) {


    function DFS(root, targetSum) {



        if (root == null) return false

        if (targetSum == root.val && root.left == null && root.right==null) return true
        return DFS(root.left, targetSum - root.val) ||

            DFS(root.right, targetSum - root.val)


    }

    return DFS(root, targetSum)


};
