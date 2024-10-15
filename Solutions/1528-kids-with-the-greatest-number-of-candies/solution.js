/**
 * @param {number[]} candies
 * @param {number} extraCandies
 * @return {boolean[]}
 */
var kidsWithCandies = function (candies, extraCandies) {

    let currentGreatest = -1

    for (let i = 0; i < candies.length; i++) {
        currentGreatest = Math.max(candies[i], currentGreatest)
    }
    let result = []
    for (let i = 0; i < candies.length; i++) {
        if (candies[i] + extraCandies >= currentGreatest) {
            result.push(true)
        }else{
            result.push(false)
        }
    }
    return result
};
