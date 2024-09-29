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
var maxPathSum = function (root) {


    let sum = -Infinity
    //it return the sum of path
    function DFS(root, ) {
        if (root == null) return 0;


        let left = DFS(root.left, )
        let right = DFS(root.right, )

        left = Math.max(left, 0)
        right = Math.max(right, 0)


        let currentSum = left + right + root.val

        sum = Math.max(sum, currentSum)



        return Math.max(left, right) + root.val


    }
    DFS(root,)


    return sum


};
