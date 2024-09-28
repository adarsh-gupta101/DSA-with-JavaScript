/**
 * @param {number} target
 * @param {number[]} nums
 * @return {number}
 */
var minSubArrayLen = function (target, nums) {
    let len = Infinity;
    let start = 0;
    let sum = 0;

    for (let end = 0; end < nums.length; end++) {
        sum += nums[end];
        // console.log(sum,"");
        while (sum >= target) {
            len = Math.min(len, end - start + 1);
            sum -= nums[start];
            start++;
        }
        // console.log(len);
    }
    return len == Infinity ? 0 : len;
};
