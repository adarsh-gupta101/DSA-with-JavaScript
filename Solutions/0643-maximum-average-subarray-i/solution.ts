function findMaxAverage(nums: number[], k: number): number {


    let windowStart = 0;
    let maxAverage = -Infinity;
    let sum = 0;

if (nums.length == 1) return nums[0];

    for (let windowEnd = 0; windowEnd < nums.length; windowEnd++) {

        sum = sum + nums[windowEnd];
        if (windowEnd >= k-1) {
        maxAverage = Math.max(maxAverage, sum / k)
            sum = sum - nums[windowStart]
            windowStart++
        }




    }

return maxAverage;

};
