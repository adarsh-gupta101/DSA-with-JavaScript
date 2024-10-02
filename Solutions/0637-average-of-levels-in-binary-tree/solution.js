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
var averageOfLevels = function (root) {




    let queue = [root]

    let averages = []

    while (queue.length > 0) {
        let levelLength = queue.length;

        let currentLevel = [


        ]

        for (let i = 0; i < levelLength; i++) {
            let currentNode = queue.shift()

            if (currentNode.left != null) {
                queue.push(currentNode.left)
            }


            if (currentNode.right != null) {
                queue.push(currentNode.right)
            }

            currentLevel.push(currentNode.val)
        }


        let sum = 0;
        for (let i = 0; i < currentLevel.length; i++) {
            sum += currentLevel[i]
        }

        averages.push(sum / (currentLevel.length))


    }

    return averages
};
