// /**
//  * @param {number[]} nums
//  * @param {number} k
//  * @return {number[]}
//  */
// var maxSlidingWindow = function (nums, k) {
//     // let start = 0;
//     // let result = [];
//     // // let max = -Infini
//     // let local_max = -Infinity;
//     // if(k==1) return nums

//     // for (let end = 0; end < nums.length; end++) {
//     //     local_max = Math.max(local_max, nums[end]);
//     //     if (end >= k-1) {
//     //         result.push(local_max);
//     //     }
//     // }
//     // return result;
//     if (k == 1) return nums;

//     let deque = []
//     let result = []

//     for (let end = 0; end < nums.length; end++) {
//         //out of index
//         if(deque.length>0 && deque[0]<end-k+1){
//             deque.shift()
//         }


//         while(deque.length>0 && nums[deque[deque.length-1]]<nums[end]){
//             deque.pop()
//         }

//         deque.push(end)

//         if(end>=k-1){
//             result.push(nums[deque[0]])
//         }
//     }





// return result
// };


var maxSlidingWindow = function (nums, k) {

    if (k == 1) return nums
    let queue = [], result = []
    for (end = 0; end < nums.length; end++) {

        if (queue.length > 0 && queue[0]< end - k + 1) {
            queue.shift()
        }

        while (queue.length > 0 && nums[queue[queue.length - 1]] < nums[end]) {
            queue.pop()
        }

        queue.push(end)

        if (end >= k - 1) {
            result.push(nums[queue[0]])
        }

    }
    return result
}
