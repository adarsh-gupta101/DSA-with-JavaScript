var minimumDifference = function (nums, k) {
    let min = Infinity
    let start = 0
    nums.sort((a,b)=>a-b);
    for (let end = k - 1; end<nums.length; end++) {

        min = Math.min(min, nums[end] - nums[start])
        start++

    }
    return min
};
