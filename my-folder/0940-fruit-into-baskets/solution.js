/**
 * @param {number[]} fruits
 * @return {number}
 */
var totalFruit = function (fruit) {
    let max = 0;
    let start = 0;
    let freq = {};
    for (let end = 0; end < fruit.length; end++) {
        freq[fruit[end]] = (freq[fruit[end]] | 0) + 1;
        // console.log(freq, Object.keys(freq).length);
        if (Object.keys(freq).length > 2) {
            freq[fruit[start]]--;
            if (freq[fruit[start]] == 0) {
                delete freq[fruit[start]];
            }
            start++;
        }

        max = Math.max(max, end - start + 1);
    }
    // console.log({ max });
    return max;
};
