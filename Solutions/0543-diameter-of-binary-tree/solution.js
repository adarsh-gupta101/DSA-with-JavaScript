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
var diameterOfBinaryTree = function (root) {


    let len = 0
    function DFS(root) {

        if (root == null) return 0



        let leftTree = DFS(root.left)

        let rightTree = DFS(root.right)

        len = Math.max(len, leftTree + rightTree)

        return Math.max(leftTree, rightTree) + 1


    }


    DFS(root)

    return len


};
