var numSubarrayProductLessThanK = function (nums = [10, 5, 2, 6], k = 100) {
    if (k == 0) return 0;

    let result = 0;
    let start = 0;
    let currentProduct = 1;

    for (let end = 0; end < nums.length; end++) {
        currentProduct = currentProduct * nums[end];
        while (currentProduct >= k && start <= end) {
            currentProduct = currentProduct / nums[start];
            start++;
        }
        result = result + end - start + 1;
    }
    return result;
};
