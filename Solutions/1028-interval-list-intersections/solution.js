/**
 * @param {number[][]} firstList
 * @param {number[][]} secondList
 * @return {number[][]}
 */
var intervalIntersection = function (firstList, secondList) {



    let i = 0, j = 0;

    let result = []


    while (i < firstList.length && j < secondList.length) {


        let firstOverlaps = firstList[i][0] >= secondList[j][0] && firstList[i][0] <= secondList[j][1]
        let secondOverlaps = secondList[j][0] >= firstList[i][0] && secondList[j][0] <= firstList[i][1]



        if (firstOverlaps || secondOverlaps) {
            result.push([Math.max(firstList[i][0], secondList[j][0]), Math.min(firstList[i][1], secondList[j][1])])
        }

        if (firstList[i][1] < secondList[j][1]) {
            i++
        } else {
            j++
        }
    }


    return result
};
