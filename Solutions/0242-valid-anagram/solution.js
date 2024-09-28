/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function (s, t) {
    // return s.split("").sort().join()==t.split("").sort().join()
    let f1 = {}

    if(s.length>t.length){
        return false
    }

    for (let i = 0; i < s.length; i++) {
        f1[s[i]] = f1[s[i]] ? f1[s[i]] + 1 : 1
    }

    for (let i = 0; i < t.length; i++) {
        if (t[i] in f1) {
            f1[t[i]]--

            if (f1[t[i]] < 0) {
                return false
            }
        } else {
            return false
        }
    }

    return true

};
