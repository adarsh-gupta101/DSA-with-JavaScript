/**
 * @param {number} c
 * @return {boolean}
 */
var judgeSquareSum = function (c) {

    let a = 0; b = Math.floor(Math.sqrt(c))

    while (a <= b) {
        if ((a * a + b * b) == c) {
            return true
        } else if ((a * a + b * b) > c) {
            b--
        } else {
            a++
        }
    }
    return false
};
