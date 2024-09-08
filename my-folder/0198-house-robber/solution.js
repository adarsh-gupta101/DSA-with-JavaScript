/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function (nums) {


    function test(nums, i, memo) {


        if (i < 0) {
            return 0
        }

        if(memo[i] >=0){
            return memo[i]
        }


        let result = Math.max(nums[i] + test(nums, i - 2,memo), test(nums, i - 1,memo))
        memo[i] = result
        return result
    }


    return test(nums, nums.length - 1, {})
};
