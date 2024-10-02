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
var maxLevelSum = function (root) {



    let queue = [root]

    let max = -Infinity;
    let maxLevel = 0
    let level = 0

    while (queue.length > 0) {
        level++
        let currentLength = queue.length;

        let localsum = 0;

        for (let i = 0; i < currentLength; i++) {
            let currentNode = queue.shift()

            localsum += currentNode.val

            if (currentNode.left) {
                queue.push(currentNode.left)
            }

            if (currentNode.right) {
                queue.push(currentNode.right)
            }



        }

        if (localsum > max) {
            max = localsum
            maxLevel = level
        }
    }

    return maxLevel

};
