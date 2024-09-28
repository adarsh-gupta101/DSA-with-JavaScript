/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
var reverseStr = function (s="abcdefg", k=2) {
    s = s.split('');
    let start = 0;
    end = Math.min(s.length, start + k);

    function reverse(start, end) {
        while (start < end) {
            [s[start], s[end]] = [s[end], s[start]];
            start++;
            end--;
        }
        // consol/e.log(s)
    }

    while (start < s.length) {
        reverse(start, end-1);
        start = start + 2 * k;
        end = Math.min(s.length, start + k);
    }

    return s.join('');
};
