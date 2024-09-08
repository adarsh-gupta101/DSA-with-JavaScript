// /**
//  * @param {string} s
//  * @return {string}
//  */









var longestNiceSubstring = function (s) {
    function dnC(s) {
        if (s.length < 2) return '';

        let set = new Set(s);

        for (let end = 0; end < s.length; end++) {
            let char = s[end];

            if (!set.has(char.toLowerCase()) || !set.has(char.toUpperCase())) {

                let left = dnC(s.slice(0, end));
                let right = dnC(s.slice(end + 1));
                return left.length >= right.length ? left : right;
            }
        }
        return s;
    }

    return dnC(s);
};
// var longestNiceSubstring = function (s) {

//    function generateSubstrings(s) {
//     let result = [];

//     // Outer loop for the starting index of the substring
//     for (let i = 0; i < s.length; i++) {
//         let slate = "";
//         // Inner loop for the ending index of the substring
//         for (let j = i; j < s.length; j++) {
//             slate += s[j];
//             result.push(slate);  // Add each substring to the result
//         }
//     }

//     return result;
// }
//     let allSubstring = generateSubstrings(s)

//     let maxLength = 0;
//     let result = "";

//     function isNice(ss) {
//         const set = new Set(ss);

//         for (const char of set) {
//             if (!set.has(char.toLowerCase()) || !set.has(char.toUpperCase())) {
//                 return false;
//             }
//         }
//         return true;
//     }
//     for (string of allSubstring) {

//         if(isNice(string) && string.length>maxLength){
//             maxLength=string.length
//             result=string
//         }

//     }

//     return result

//     // if (s.length <= 1) return ""

//     // let start = 0;
//     // let hash = {}

//     // for (let end = 0; end < s.length; end++) {
//     //     hash[s[end]] = (hash[s[end]] | 0) + 1

//     // }

//     // for (let end = 0; end < s.length; end++) {

//     // }
// };
