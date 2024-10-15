// /**
//  * @param {number[]} nums
//  * @return {number[]}
//  */
// var productExceptSelf = function (nums = [-1, 1, 0, -3, 3]) {
//     let product = 1;
//     let flag = false;

//     for (let i = 0; i < nums.length; i++) {
//         if (nums[i] == 0) {
//             flag = true;
//             continue;
//         }
//         product *= nums[i];
//     }
//     if(flag==true && product==1){
//         console.log("j")
//         product=0
//     }
//     console.log(product,"");


//     let res = [];

//     for (let i = 0; i < nums.length; i++) {

//         if (flag) {
//             if (nums[i] != 0) {
//                 res.push(0);
//             } else {
//                 res.push(product);
//             }
//         } else {
//             res.push(product / nums[i]);
//         }
//     }

//     return res;
// };

// productExceptSelf([0,0 ]);


var productExceptSelf = function (nums = [-1, 1, 0, -3, 3]) {





    let left = 1
    let output = Array(nums.length).fill(1)

    for (let i = 0; i < nums.length; i++) {
        output[i] = output[i] * left
        left=left*nums[i]
    }

    let right=1
    for(let i=nums.length-1;i>=0;i--){
        output[i]=output[i]*right
        right=right*nums[i]
    }

    return output

}

