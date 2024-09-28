// /**
//  * @param {number[]} nums
//  * @return {number[]}
//  */
// /**
//  * @param {number[]} nums
//  * @return {number[]}
//  */

// var sortedSquares = function (nums = [-4, -1, 0, 3, 10]) {
//     let newArray = [];
//     let firstIndex = 0;

//     // Find the first non-negative number's index
//     for (let i = 0; i < nums.length; i++) {
//         if (nums[i] >= 0) {
//             firstIndex = i;
//             break;
//         }
//     }

//     let negative = firstIndex - 1;

//     // Compare squares of numbers in negative and positive halves
//     while (negative > -1 && firstIndex < nums.length) {
//         if (
//             nums[firstIndex] * nums[firstIndex] >
//             nums[negative] * nums[negative]
//         ) {
//             newArray.push(nums[negative] * nums[negative]);
//             negative--;
//         } else {
//             newArray.push(nums[firstIndex] * nums[firstIndex]);
//             firstIndex++;
//         }
//     }

//     // Handle remaining negative numbers
//     while (negative >= 0) {
//         newArray.push(nums[negative] * nums[negative]);
//         negative--;
//     }

//     // Handle remaining positive numbers
//     while (firstIndex < nums.length) {
//         newArray.push(nums[firstIndex] * nums[firstIndex]);
//         firstIndex++;
//     }

//     return newArray;
// };

var sortedSquares = function (nums = [-4, -1, 0, 3, 10]) {
    let newArray = Array(nums.length).fill(0);
    let highest = nums.length - 1;
    let firstIndex = 0;
    let lastIndex = nums.length-1;

    while (firstIndex <= lastIndex) {
        if (Math.abs(nums[firstIndex]) > Math.abs(nums[lastIndex])) {
            newArray[highest] = nums[firstIndex] * nums[firstIndex];
            firstIndex++;
        } else {
            newArray[highest] = nums[lastIndex] * nums[lastIndex];
            lastIndex--;

        }
                        highest--;

    }

    return newArray;
};

