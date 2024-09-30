/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function (intervals) {

    intervals.sort((a, b) => { return a[0] - b[0] });
    const mergedIntervals = []

    let start = intervals[0][0]
    let end = intervals[0][1]


    for (let i = 1; i < intervals.length; i++) {
        const currentInterval = intervals[i]


        if (currentInterval[0] <= end) {
            end = Math.max(end, currentInterval[1])
        } else {

            mergedIntervals.push([start, end])
            start = currentInterval[0]
            end = currentInterval[1]
        }
    }

    mergedIntervals.push([start, end])

    return mergedIntervals



};
