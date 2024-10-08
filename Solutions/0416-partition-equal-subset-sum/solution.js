/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canPartition = function (nums) {
    let target = nums.reduce((acc, val) => acc + val);
    if (target % 2 != 0) return false;
    target = target / 2;

    var result = [];
    // function DFS(index, current, memo) {
    //     if (current == target) return true;
    //     if (current > target || index >= nums.length) return false;
    //     let memoKey = `${index}-${current}`;
    //     if (memo[memoKey]) return memo[memoKey];
    //     memo[memoKey] =
    //         DFS(index + 1, current, memo) ||
    //         DFS(index + 1, current + nums[index], memo);
    //     return memo[memoKey];
    // }

    let dp = new Array(target + 1).fill(false);
    dp[0] = true;
    function iteration() {
        for (let num of nums) {
            for (let j = target; j >= num; j--) {
                // console.log(j);
                dp[j] = dp[j] || dp[j - num];
            }
        }
    }
    iteration();

    return dp[target];
};
