// /**
//  * @param {number[]} nums1
//  * @param {number[]} nums2
//  * @return {number[][]}
//  */
// var findDifference = function (nums1, nums2) {
//     let hash1 = {},
//         hash2 = {};
//     for (let x of nums1) {
//         hash1[x] = (hash1[x] || 0) + 1;
//     }
//     for (let x of nums2) {
//         hash2[x] = (hash2[x] || 0) + 1;
//     }

//     let answer = [[], []];

//     for (let x in hash1) {
//         // console.log(x);
//         if (!(x in hash2)) {
//             answer[0].push(Number(x));
//         }
//         // if(!(nums1[i] in hash2) ){

//         // }
//     }
//     for (let x in hash2) {
//         if (!(x in hash1)) {
//             answer[1].push(Number(x));
//         }
//     }
//     return answer;
// };

// // findDifference((nums1 = [1, 2, 3, 3]), (nums2 = [2, 1, 1, 2]));

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[][]}
 */
var findDifference = function(nums1, nums2) {
    // Use Set to store unique elements from both arrays
    let set1 = new Set(nums1);
    let set2 = new Set(nums2);
    
    // Arrays to store the results
    let answer = [[], []];

    // Elements in set1 but not in set2
    for (let num of set1) {
        if (!set2.has(num)) {
            answer[0].push(num);
        }
    }

    // Elements in set2 but not in set1
    for (let num of set2) {
        if (!set1.has(num)) {
            answer[1].push(num);
        }
    }

    return answer;
};

// findDifference([1, 2, 3, 3], [2, 1, 1, 2]);

