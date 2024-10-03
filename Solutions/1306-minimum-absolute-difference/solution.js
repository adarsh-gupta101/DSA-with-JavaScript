/**
 * @param {number[]} arr
 * @return {number[][]}
 */
var minimumAbsDifference = function (arr) {


    //

    arr.sort((a, b) => a - b)
    let min = Infinity, pair = []

    for (let i = 1; i < arr.length; i++) {


        if (Math.abs(arr[i] - arr[i - 1]) < min) {
            min = Math.abs(arr[i] - arr[i - 1])
            pair = [[arr[i - 1], arr[i]]]
        } else if (Math.abs(arr[i] - arr[i - 1]) == min) {
            pair.push([arr[i-1], arr[i]])
        }
    }

    return pair


};
