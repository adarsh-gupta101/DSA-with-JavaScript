/**
 * @param {character[]} chars
 * @return {number}
 */
var compress = function (chars) {

    let start = 0;
    let i = 0;
    for (let end = 0; end + 1 <= chars.length; end++) {
        if (chars[end] == chars[end + 1]) {
            continue;
        } else {
            // data.push(chars[end]);
            // console.log(chars[end], 'push');
            chars[i] = chars[end];
            i++;

            // if (end - start + 1 < 10) {
            //     chars[i++]=(end - start + 1);
            // } else {
            //     // data.push(...String(end - start + 1).split(''));
            //     chars[i++]=
            // }
            // console.log(end, start);
            if (end  > start) {
                let count = (end - start + 1).toString();
                for (digit of count) {
                    chars[i++] = digit;
                }
            }
            start = end + 1;
        }
    }
    return chars.length=i;
};
