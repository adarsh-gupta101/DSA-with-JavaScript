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
var zigzagLevelOrder = function (root) {





    let result = []
    if (root == null) return result



    let queue = [root]
    let flip = false

    while (queue.length > 0) {

        let levelLength = queue.length
        let currentLevel = []



        for (let i = 0; i < levelLength; i++) {
            let currentNode = queue.shift()

            if (currentNode.left) {
                queue.push(currentNode.left)
            }
            if (currentNode.right) {
                queue.push(currentNode.right)
            }

            if (flip == 0) {
                currentLevel.push(currentNode.val)

            } else {
                currentLevel.unshift(currentNode.val)
            }

        }

        result.push(currentLevel)

        flip = !flip
    }

    return result
};
