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
var sumRootToLeaf = function (root) {


    let sum = 0;


    function DFS(root, slate) { 

        if (root === null) return;

        slate.push(root.val)
        if (root.left == null && root.right == null) {
            // console.log(slate)

            let result = 0
            
            for (let i = 0; i <=slate.length-1; i++) {
                result = result + Math.pow(2, i) * slate[slate.length-1-i]
            }
            // console.log(result,"--")

            sum += result
            slate.pop()


            return

        } else {

            DFS(root.left, slate)
            DFS(root.right, slate)
        }

        slate.pop()



    }

    DFS(root, [])

    return sum

};
