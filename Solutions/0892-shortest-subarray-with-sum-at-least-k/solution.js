/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var shortestSubarray = function (nums, k) {
    let minLength = Infinity;
    let n = nums.length;
    let prefixSum = new Array(n + 1).fill(0)

    for (i = 0; i < n; i++) {
        prefixSum[i + 1] = prefixSum[i] + nums[i]
    }
    let deque = []
    for (end = 0; end <= nums.length; end++) {


        while (deque.length > 0 && prefixSum[end] - prefixSum[deque[0]] >= k) {
            minLength = Math.min(minLength, end - deque[0])
            deque.shift()
        }


        while (deque.length > 0 && prefixSum[end] <= prefixSum[deque[deque.length - 1]]) {
            deque.pop()
        }



        deque.push(end)
    };

    return minLength == Infinity ? -1 : minLength
}
