/**
 * @param {string} s
 * @return {string[]}
 */
var findRepeatedDnaSequences = function (s) {
    let start = 0;
    let hash = {};

    for (let end = 9; end < s.length; end++) {
        if (!(s.slice(start, end+1) in hash)) {
            hash[s.slice(start, end+1)] = 0;
        }
        hash[s.slice(start, end+1)]++;
        start++;
    }

    let result = [];
    console.log(hash);
    for (i in hash) {
        if (hash[i] > 1) {
            result.push(i);
        }
    }
    return result;
};
