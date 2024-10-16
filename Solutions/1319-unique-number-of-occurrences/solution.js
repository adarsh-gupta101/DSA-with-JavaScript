/**
 * @param {number[]} arr
 * @return {boolean}
 */
var uniqueOccurrences = function (arr) {


    let hash = {}

    for (let i = 0; i < arr.length; i++) {
        hash[arr[i]] = (hash[arr[i]] || 0) + 1
    }
    let data = []
    for (let x in hash) {
        data.push(hash[x])
    }
    let test = [...new Set(data)]
    // console.log({test,data})
    return data.length == test.length

};
