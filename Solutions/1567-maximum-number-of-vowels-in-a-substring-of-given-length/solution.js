/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var maxVowels = function (s, k) {


    let start = 0;
    let vowels = { "a": 1, "e": 1, "i": 1, "o": 1, "u": 1 }
    let vowelCount = 0;
    let max = -1
    for (let end = 0; end < s.length; end++) {


        if (s[end] in vowels) {
            vowelCount++

        }

        if (end - start + 1 == k) {
            max = Math.max(max, vowelCount)

            if (s[start] in vowels) {
                vowelCount--
            }
            start++
        }


    }

    return max


};
