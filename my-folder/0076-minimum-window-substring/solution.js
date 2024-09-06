var minWindow = function (s = 'ADOBECODEBANC', t = 'ABC') {
    let start = 0;
    let freq = {};
    //find frequencylist
    for (let i = 0; i < t.length; i++) {
        freq[t[i]] = freq[t[i]] ? ++freq[t[i]] : 1;
    }
    // console.log(freq);
    let minStart = 0,
        minLength = Infinity;

    let matched = 0;
// if s<t ""
    if (s.length < t.length) return '';

    for (let end = 0; end < s.length; end++) {
        let endChar = s[end];

        if (endChar in freq) {
            freq[endChar]--;
            if (freq[endChar] == 0) {
                matched++;
            }
        }

        while (matched == Object.keys(freq).length) {
            //if curr length is less than minlength
            if (end - start + 1 < minLength) {
                minStart = start;
                minLength = (minLength, end - start + 1);
            }
            // console.log(s.slice(minStart, end - minStart + 1), end);
            let startChar = s[start];
            // li++
            start++;

            if (startChar in freq) {
                if (freq[startChar] == 0) {
                    matched--;
                }
                freq[startChar]++;
            }
        }
        // ri++
    }
    // console.log(minStart, minLength);
    return minLength == Infinity ? '' : s.slice(minStart, minStart + minLength);
};
