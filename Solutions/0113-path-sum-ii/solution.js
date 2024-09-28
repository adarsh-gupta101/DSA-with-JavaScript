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
 * @return {number[][]}
 */
var pathSum = function (root, targetSum) {

    let result = []



    function DFS(root, targetSum, slice) {

        if (root == null) return
        slice.push(root.val)

        if (targetSum == root.val && root.left == null && root.right == null) {
            result.push([...slice])
        }

        DFS(root.left, targetSum - root.val, slice)
        DFS(root.right, targetSum - root.val, slice)
        slice.pop()



    }

    DFS(root, targetSum, [])

    return result
};
