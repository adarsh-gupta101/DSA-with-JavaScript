// function countKConstraintSubstrings(s: string, k: number): number {

//     let windowStart = 0;
//     let count = 0;
//     let hash={}

//     for (let end = 0; end < s.length; s++) {
//         if (!(s[ends] in hash)) {
//             hash[s[end]] = 0
//         }
//         hash[s[end]]++

//         while(hash[s[end]]>k){

//         }

        





//     }

// };

function countKConstraintSubstrings(s: string, k: number): number {
    let windowStart = 0;
    let count = 0;
    let hash: { [key: string]: number } = {};

    for (let end = 0; end < s.length; end++) {
        // Initialize hash map
        if (!(s[end] in hash)) {
            hash[s[end]] = 0;
        }
        hash[s[end]]++;

        while (hash['0'] > k && hash['1'] > k) {
            let char = s[windowStart];
            hash[char]--;
            windowStart++;
        }

        count += end - windowStart + 1;
    }

    return count;
}

// Test the function

