/**
 * @param {string} s
 * @param {string} p
 * @return {number[]}
 */
var findAnagrams = function (s, p) {

    // save patterns to a frequency
    // check if patterns exist
    //if exist and full exist decrrment

    let start = 0, frequency = {}, matched = 0;

    for (let i = 0; i < p.length; i++) {
        frequency[p[i]] = frequency[p[i]] ? ++frequency[p[i]] : 1;
    }

    let resultindex = []

    for (let end = 0; end < s.length; end++) {

        const endChar = s[end]

        if (endChar in frequency) {
            frequency[endChar]--
            if (frequency[endChar] == 0) {

                matched++
            }

        }

        if (matched === Object.keys(frequency).length) {
            resultindex.push(start)
        }

        if (end >= p.length - 1) {

            let startChar = s[start]

            start++

            if (startChar in frequency) {
                if (frequency[startChar] == 0) {
                    matched--
                }
                frequency[startChar]++

            }
        }

    }

    return resultindex

};
