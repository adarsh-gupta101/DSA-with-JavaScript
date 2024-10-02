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
var levelOrder = function (root) {
    result = [];
    if (root === null) {
        return result
    }

    let queue = [root]



    while (queue.length > 0) {
        let currentLevel = []
        const levelSize = queue.length


        for (let i = 0; i < levelSize; i++) {
            let removingNode=queue.shift()
            currentLevel.push(removingNode.val)

            if (removingNode.left != null) {
                queue.push(removingNode.left)
            }
            if (removingNode.right != null) {
                queue.push(removingNode.right)
            }
        }

        result.push(currentLevel)
    }

    return result
};
