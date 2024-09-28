/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function (nums) {

    let i = 2;
    let k = 2

    while (i < nums.length) {
        if(nums[i]!=nums[k-2]){

        [nums[i], nums[k]] = [nums[k],nums[i]]
        k++
        }
        i++
    }


return k

};
