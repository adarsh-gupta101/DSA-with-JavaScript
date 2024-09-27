/**
 * @param {number[]} nums
 * @return {number}
 */
var findDuplicate = function (nums) {

    let hash = {}

    for (i = 0; i < nums.length; i++) {
        if (nums[i] in hash) {
            return nums[i]
        } else {
            hash[nums[i]] = nums[i]
        }
    }

};
