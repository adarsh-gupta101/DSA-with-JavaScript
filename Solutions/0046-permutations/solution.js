// /**
//  * @param {number[]} nums
//  * @return {number[][]}
//  */
// var permute = function (nums) {


//     let result = []

//     function DFS(slate, index) {

//         //base

//         if(index>=nums.length){
//             return
//         }

//         if (slate.length >= nums.length) {
//             result.push(slate.slice())
//             return
//         }
//         slate.push(nums[index])
//         DFS(slate, index + 1)
//         slate.pop()
//         DFS(slate, index + 1)


//     }

//     DFS(slate = [], 0)

//     return result
// };

/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function (nums) {
    let result = [];

    function DFS(slate, index) {
        //base

        if (index == nums.length) {
            result.push(nums.slice());
            return;
        }

        for (let i = index; i < nums.length; i++) {
            [nums[i], nums[index]] = [nums[index], nums[i]];
            DFS(slate, index + 1);
            [nums[i], nums[index]] = [nums[index], nums[i]];
        }
    }

    DFS((slate = []), 0);

    return result;
};
