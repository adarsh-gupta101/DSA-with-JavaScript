function lengthOfLongestSubstring(s: string): number {
    let hash = {}
    let start = 0;
    let maxLength = 0

    for (let end = 0; end < s.length; end++) {
        const endChar = s[end]
        if (s[end] in hash) {
            start = Math.max(start, hash[s[end]]+1)
        }
        hash[endChar] = end
        maxLength = Math.max(maxLength, end - start + 1)
    }

    return maxLength


};
