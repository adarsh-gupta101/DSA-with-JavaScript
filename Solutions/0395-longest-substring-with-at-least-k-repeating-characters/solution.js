function longestSubstring(s, k) {
    //bbaaacbd
    let hash = {};
    for (let i = 0; i < s.length; i++) {
        // hash[s[i]] = hash[s[i]] ? ++hash[s[i]] : 1
        if (!(s[i] in hash)) {
            hash[s[i]] = 0;
        }
        hash[s[i]]++;
    }

    console.log(hash,"\n");
    if (Object.values(hash).every((val) => val >= k)) return s.length;

    let lenOfSubstring = 0;
    let start = 0;

    for (let i = 0; i < s.length; i++) {
        if (hash[s[i]] < k) {
            console.log("\n",s.substr(start,i-start))
            lenOfSubstring = Math.max(
                longestSubstring(s.substr(start, i - start), k),
                lenOfSubstring
            );

            start = i + 1;
        }
    }
    console.log(s.substr(start))
    lenOfSubstring=Math.max(longestSubstring(s.substr(start),k),lenOfSubstring)

    return lenOfSubstring > 1 ? lenOfSubstring : 0;
}

