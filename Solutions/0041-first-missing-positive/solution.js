/**
 * @param {number[]} nums
 * @return {number}
 */
var firstMissingPositive = function (nums=[3,4,-1,1]
) {


    // let hash = {}
    // let max = 0
    // for (let i = 0; i < nums.length; i++) {
    //     if (nums[i] > 0) {
    //         hash[nums[i]] = nums[i]
    //         max = Math.max(nums[i], max)
    //     }
    // }

    let index=0;
    // let firstPositive=0
    
    while(index<nums.length){
        let number=nums[index]-1
        if(nums[index]!=nums[number] &&nums[index]>0 && nums[index]<=nums.length){
            [nums[number],nums[index]]=[nums[index],nums[number]]
        }else{
            index++
        }
    }
    
    // console.log(nums)

    for (let i = 0; i < nums.length; i++) {
        if (nums[i]!=i+1) {
            return i+1
        }
    }

    return nums.length+1
// }
}
