/**
 * @param {number[][]} intervals
 * @param {number[]} newInterval
 * @return {number[][]}
 */
var insert = function (intervals, newInterval) {



    let merged = [];
    let i;

    for (i = 0; i < intervals.length; i++) {
        if (intervals[i][1] < newInterval[0]) {

            merged.push(intervals[i])
        } else {
            break
        }
    }

    while (i < intervals.length && intervals[i][0] <= newInterval[1]) {
        newInterval[0] = Math.min(newInterval[0], intervals[i][0])
        newInterval[1] = Math.max(newInterval[1], intervals[i][1])
        i++
    }


    merged.push(newInterval)


    while (i < intervals.length) {
        merged.push(intervals[i])
        i++
    }

    return merged
};
