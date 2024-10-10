/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
var uniquePaths = function (m, n) {
    // let count = 0;

    function DFS(down, right, memo) {
        if (down == m - 1 && right == n - 1) {
            return 1;
        }

        if (down > m) {
            return 0;
        }

        if (right > n) {
            return 0;
        }
        let key = `${down}-${right}`
        if (memo[key]) {
            return memo[key]
        }


        let downMovement = DFS(down + 1, right, memo);
        let rightMovement = DFS(down, right + 1, memo);

        memo[key] = downMovement + rightMovement

        return memo[key]

    }

    return DFS(0, 0, {});

    // return count;
};
