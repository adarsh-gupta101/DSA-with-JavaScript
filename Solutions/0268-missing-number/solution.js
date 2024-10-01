/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function (nums) {

    // nums.sort((a, b) => a - b)

    let index = 0;

    while (index < nums.length) {
        let number=nums[index]

        if(nums[index]!=nums[number]){
            [nums[index],nums[number]]=[nums[number],nums[index]]
        }else{
            index++
        }
      
    }


    for (i = 0; i < nums.length; i++) {
        if (
            nums[i] != i
        ) {
            return i
        }
    }

    return nums.length

};
