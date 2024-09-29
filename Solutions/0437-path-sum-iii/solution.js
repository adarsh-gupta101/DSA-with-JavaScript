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
 * @return {number}
 */
var pathSum = function (root, targetSum) {

    let count = 0

    function DFS(root, targetSum, slice) {
        //base
        if (root == null) return

        let currentSum = 0
        slice.push(root.val)

        for (let i = slice.length - 1; i >= 0; i--) {
            currentSum += slice[i]

            if (currentSum == targetSum) {
                count++
            }
        }



        DFS(root.left, targetSum , slice)
        DFS(root.right, targetSum , slice)
        slice.pop()

    }


    DFS(root, targetSum, slice = [])

    return count

};
