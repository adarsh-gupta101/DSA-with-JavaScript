// /**
//  * @param {number} n
//  * @return {number}
//  */
// var tribonacci = function (n, memo = {}) {


//     if (n == 0) return 0
//     if (n == 1) return 1
//     if (n == 2) return 1


//     if (memo[n]) return memo[n]

//     memo[n] = tribonacci(n - 1,memo) + tribonacci(n - 2,memo) + tribonacci(n - 3,memo)

//     return memo[n]
// };

/**
 * @param {number} n
 * @return {number}
 */
var tribonacci = function (n) {
    if (n === 0) return 0;
    if (n === 1 || n === 2) return 1;

    let t0 = 0, t1 = 1, t2 = 1;

    for (let i = 3; i <= n; i++) {
        let next = t0 + t1 + t2;
        t0 = t1;
        t1 = t2;
        t2 = next;
    }

    return t2;
};

