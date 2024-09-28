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
var inorderTraversal = function (root) {

    const result = []
    function DFS(root) {
        if (root == null) return

        DFS(root.left)
        result.push(root.val)
        DFS(root.right)



    }

    DFS(root)

    return result
};
