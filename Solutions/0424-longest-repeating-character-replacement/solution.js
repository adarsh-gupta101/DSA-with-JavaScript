/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var characterReplacement = function (s, k) {

    let maxLength = 0;
    let start = 0;
    let maxRepeat = 0;
    let char = {}

    for (end = 0; end < s.length; end++) {

        let ch = s[end];
        if (!(ch in char)) {
            char[ch] = 0;
        }
        char[ch]++

        maxRepeat = Math.max(maxRepeat, char[ch])

        if (end - start - maxRepeat + 1 > k) {
            chn = s[start]
            char[chn]--
            start++
        }

        maxLength = Math.max(maxLength, end - start + 1)






    }

    return maxLength


};
