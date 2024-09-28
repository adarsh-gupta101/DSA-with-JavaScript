/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function (haystack, needle) {

    // return haystack.indexOf(needle)
    let found = false
    let res = -1

    for (i = 0; i < haystack.length; i++) {
        if (needle[0] != haystack[i]) {
            continue
        }

         found=true

        for (let j = 1; j < needle.length; j++) {
            if (haystack[i + j] != needle[j]) {
                found = false
                break
            }
        }

        if (found) {
            res = i
             break
        }
    }

    return res

};
