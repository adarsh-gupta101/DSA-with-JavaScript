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
 * @return {string[]}
 */
var binaryTreePaths = function (root) {

    let result = []
    function DFS(root, slice) {
        if(root==null) return

        slice.push(root.val)

        if(!root.left && !root.right){
            result.push(slice.join("->"))
        }

        DFS(root.left, slice)
        DFS(root.right, slice)
        slice.pop()



    }
    DFS(root, slice = [])
    return result

};
