/**
 * @param {number[]} code
 * @param {number} k
 * @return {number[]}
 */
var decrypt = function (code, k) {
    let result = new Array(code.length).fill(0);
    if (k == 0) return result;

    if (k > 0) {
        let windowSum = 0;
        //sum till k
        for (let i = 0; i < k; i++) {
            windowSum += code[i];
        }
        // console.log(windowSum);

        for (let i = 0; i < code.length; i++) {
            //1st is sum till k

            windowSum -= code[i];
            //remove first
            windowSum += code[(i + k) % code.length];
            result[i] = windowSum;
        }
    }
    if (k < 0) {
        k = -k;

        let windowSum = 0;

        for (let i = 0; i < k; i++) {
            // console.log(code[(code.length - k + i ) % code.length]);
            windowSum += code[(code.length -  k+i) % code.length];
        }
        // console.log(windowSum);

        for (let i = 0; i < code.length; i++) {
            result[i] = windowSum;
            windowSum -= code[(code.length - k + i) % code.length];
            windowSum += code[i];
        }
    }
    return result;
};
