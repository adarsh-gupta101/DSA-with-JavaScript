/**
 * @param {number[]} nums
 * @return {boolean}
 */
// var canJump = function (nums) {
//     if (nums.length == 1) return true
//     function DFS(index, memo = {}) {

//         // console.log(index)
//         if (index >= nums.length - 1) {
//             return true;
//         }
//         if (memo[index]) {
//             return memo[index]
//         }

//         for (let i = nums[index]; i >= 1; i--) {
//             if (DFS(index + i,memo)){
//                 memo[index]=true
//                 return true
//             } ;
//         }

//         memo[index]=false
//         return false
//     }

//     return DFS((index = 0), {});
// };

var canJump = (nums) => {


    let maxJump = 0;

    for (let i = 0; i < nums.length; i++) {
        if(i>maxJump){
            console.log(i,maxJump)
            return false
        }


        maxJump = Math.max(maxJump, i + nums[i])
        if (maxJump >= nums.length - 1) {
            return true;
        }
    }

    return false
}
