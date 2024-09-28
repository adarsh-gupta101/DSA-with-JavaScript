/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function (height) {
    let min = 0;
    let start = 0,
        end = height.length - 1;
    // for (i = 0; i < height.length; i++) {

    // }

    while (start < end) {
        if (height[start] < height[end]) {
            let val = height[start] * (end - start );
            min = Math.max(val, min);
            start++;
        } else {
            let val = height[end] * (end - start );
            min = Math.max(val, min);

            end--;
        }
    }

    return min;
};
