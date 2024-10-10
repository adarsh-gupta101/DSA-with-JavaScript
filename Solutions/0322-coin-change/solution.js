/**
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */
var coinChange = function (coins, amount) {
    //     coins.sort((a, b) => b - a);

    //     let minCount = Infinity;
    //     const memo = new Map();

    //     function DFS(amount, index, counts) {
    //         if (index >= coins.length || counts > minCount) {
    //             return;
    //         }
    //         // console.log({ amount, index, counts, coins });

    //         const key = `${amount}-${index}`;
    //         if (memo.has(key)) {
    //             return memo.get(key);
    //         }
    //         if (amount == 0) {
    //             minCount =counts;
    //             return;
    //         }

    //         if (coins[index] <= amount) {
    //             DFS(amount - coins[index], index, counts + 1);
    //         }
    //         DFS(amount, index + 1, counts);
    //         memo.set(key, minCount);
    //     }

    //     DFS(amount, 0, 0);

    //     return minCount;

    const dp = Array(amount + 1).fill(Infinity);

    dp[0] = 0;

    for (let i = 1; i <= amount; i++) {
        for (let coin of coins) {
            if (i - coin >= 0) {
                dp[i] = Math.min(dp[i], dp[i - coin] + 1);
            }
        }
    }

    return dp[amount] === Infinity ? -1 : dp[amount];
};
