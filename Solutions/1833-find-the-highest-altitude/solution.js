/**
 * @param {number[]} gain
 * @return {number}
 */
var largestAltitude = function (gain) {
    //prefix sum

    let output = new Array(gain.length + 1).fill(0);

    let start = 0;

    for (let i = 0; i < gain.length; i++) {
        output[i] = output[i] + start;
        start = start + gain[i];
    }
    output[output.length - 1] = start;

    return output.sort((a,b)=>b-a)[0];
};

