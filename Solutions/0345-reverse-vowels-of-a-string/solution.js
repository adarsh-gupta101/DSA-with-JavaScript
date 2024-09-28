/**
 * @param {string} s
 * @return {string}
 */
var reverseVowels = function (s) {
    let vowels = { A: 1, E: 1, I: 1, O: 1, U: 1, a: 1, e: 1, i: 1, o: 1, u: 1 };
    s = s.split('');

    let start = 0;
    let end = s.length - 1;

    // console.log('I' in vowels);
    // console.log(start, end);
    while (start <= end) {
        while (start <= end && !(s[start] in vowels)) {
            // console.log(s[start], 'st');

            start++;
        }
        while (start <= end && !(s[end] in vowels)) {
            // console.log(s[end]);

            end--;
        }

        if (start <= end) {
            [s[start], s[end]] = [s[end], s[start]]; // Correct swap syntax

            start++;
            end--;
        }
    }

    return s.join('');
};

reverseVowels('leetcode');

