/**
 * @param {string} s
 * @param {character} c
 * @return {number[]}
 */
var shortestToChar = function (s = 'loveleetcode', c = 'e') {
    let indexes = [];
    let distances = [];

    for (let i = 0; i < s.length; i++) {
        if (s[i] == c) {
            indexes.push(i);
        }
    }
    // console.log(indexes)

    for (let i = 0; i < s.length; i++) {
        let distance = Infinity;
        for (let j = 0; j < indexes.length; j++) {
            if (Math.abs(i - indexes[j]) < distance) {
                distance = Math.abs(i - indexes[j]);
            }
        }

        distances.push(distance);
    }

    return distances;
};
// shortestToChar();

