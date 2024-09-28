/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
var checkInclusion = function (s1, s2) {
    let start = 0
    let freq = {

    }

    for (let i = 0; i < s1.length; i++) {
        freq[s1[i]] = freq[s1[i]] ? freq[s1[i]] + 1 : 1
    }

    let matched = 0;

    for (let end = 0; end < s2.length; end++) {


        let endChar = s2[end]

        if (endChar in freq) {
            freq[endChar]--
            if (freq[endChar] == 0) {
                matched++
            }
        }

        if (matched == Object.keys(freq).length) {
            return true
        }

        if (end >= s1.length - 1) {
            let startChar = s2[start]

            if (startChar in freq) {
                if (freq[startChar] == 0) {
                    matched--
                }
                freq[startChar]++
            }
            start++
        }

    }

    return false

};
