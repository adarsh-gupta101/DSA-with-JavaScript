/**
 * @param {string} s
 * @return {number}
 */
var maximumLengthSubstring = function (s) {



    let start = 0;
    let length = 0
    let hash = {}

    for (let i = 0; i < s.length; i++) {
        hash[s[i]] = 0
    }

    for (let end = 0; end < s.length; end++) {

        hash[s[end]]++

        while (hash[s[end]] > 2) {
            hash[s[start]]--
            start++
        }

        length=Math.max(length, end-start+1)
    }

    return length

};
