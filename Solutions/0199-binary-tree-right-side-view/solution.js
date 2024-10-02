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
var rightSideView = function (root) {


    let result = []


    function DFS(root, level) {
        if (root == null) return

        if (result.length == level) {

            result.push(root.val)
        }
        DFS(root.right,level+1)
        DFS(root.left,level+1)

    }

    DFS(root, 0)

    return result

};
