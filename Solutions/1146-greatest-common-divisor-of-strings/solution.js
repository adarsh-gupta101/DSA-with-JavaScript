/**
 * @param {string} str1
 * @param {string} str2
 * @return {string}
 */
var gcdOfStrings = function (str1, str2) {


    if (str1 + str2 !== str2 + str1) {
        return "";
    }

    function checker(l1, l2) {
        return l2 == 0 ? l1 : checker(l2, l1 % l2)
    }
    let length = checker(str1.length, str2.length)
    return str1.slice(0, length);


};
