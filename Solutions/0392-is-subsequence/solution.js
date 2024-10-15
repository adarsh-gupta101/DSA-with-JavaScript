/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isSubsequence = function (s, t) {

    let first = 0; second = 0;

    while (first < s.length && second < t.length) {
        if (s[first] == t[second]) {
            first++

        } 
            second++;
    }

    return first == s.length

};
