/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function (num) {
    const nums = num.sort((a, b) => a - b);
    const triplets = [];

    for (let i = 0; i < nums.length; i++) {
        if (i > 0 && nums[i] == nums[i - 1]) {
            continue;
        }
        searchPair(i, -nums[i], nums, triplets);
    }

    function searchPair(i, target, nums, triplets) {
        let left = i + 1;
        let right = nums.length - 1;

        while (left < right) {
            if (nums[left] + nums[right] < target) {
                left++;
            } else if (nums[left] + nums[right] > target) {
                right--;
            } else {
                triplets.push([nums[i], nums[left], nums[right]]);
                left++;
                right--;
                while(left<right && nums[left]==nums[left-1]){
                    left++
                }
                 while(left<right && nums[right]==nums[right+1]){
                    right--
                }


            }
        }
    }

    return triplets;
};
