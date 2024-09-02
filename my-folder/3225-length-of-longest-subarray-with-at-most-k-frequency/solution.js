/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var maxSubarrayLength = function (nums, k) {

    let start = 0
    let frequency = {};
    let len = 0
    for (let end = 0; end < nums.length; end++) {
        if (!(nums[end] in frequency)) {
            frequency[nums[end]] = 0
        }
        frequency[nums[end]]++

        while(frequency[nums[end]]>k){
            frequency[nums[start]]--
            start++
        }
        len=Math.max(len,end-start+1)
    }

    return len

};
