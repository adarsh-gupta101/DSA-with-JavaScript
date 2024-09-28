function countGoodSubstrings(s: string): number {
    let hash = {};
    let start = 0;
    let count = 0;

    for (let end = 0; end < s.length; end++) {
        if (!(s[end] in hash)) {
            hash[s[end]] = 0;
        }
        hash[s[end]]++;

        while (end - start >= 2) {
            if (Object.entries(hash).length == 3) {
                count++;
            }
            let c = s[start];
            hash[c]--;
            if (hash[c] == 0) {
                delete hash[c];
            }
            start++;
        }
    }
    return count;
}
