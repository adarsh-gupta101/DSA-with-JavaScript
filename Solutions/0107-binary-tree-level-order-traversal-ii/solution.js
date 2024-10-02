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
 * @return {number[][]}
 */
var levelOrderBottom = function (root) {





    let result = []

    if(root==null) return result


    let queue = [root]


    while (queue.length > 0) {
        let currentLevel = []


        let LevelLength = queue.length

        for (let i = 0; i < LevelLength; i++) {

            let node = queue.shift()

            if (node.left!=null) {
                queue.push(node.left)
            }
            if (node.right!=null) {
                queue.push(node.right)
            }
            currentLevel.push(node.val)

        }

        result.unshift(currentLevel)
    }
    return result
};
