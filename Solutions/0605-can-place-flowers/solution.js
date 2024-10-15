// /**
//  * @param {number[]} flowerbed
//  * @param {number} n
//  * @return {boolean}
//  */
// var canPlaceFlowers = function (flowerbed, n) {
//     if(n==0) return true


//     for (let i = 0; i < flowerbed.length; i++) {
//         if (i == 0 && flowerbed[i] == 0) {
//             if (flowerbed[i + 1] != 1) {
//                 flowerbed[i] = 1;
//                 n--;
//             }
//             continue
//         }

//         if (n == 0) return true;

//         if (flowerbed[i] == 0 && i>0) {
//             // console.log(i,flowerbed[i - 1]==0,flowerbed[i + 1]==0);
//             if (flowerbed[i - 1] == 0 && (flowerbed[i + 1] == 0 || i+1>flowerbed.length-1)) {
//                 // console.log("im doing")
//                 flowerbed[i] = 1;
//                 n--;
//             }
//             // console.log(flowerbed);
//         }
//     }

//     return n == 0 ? true : false;
// };



/**
 * @param {number[]} flowerbed
 * @param {number} n
 * @return {boolean}
 */
var canPlaceFlowers = function (flowerbed, n) {
    if (n === 0) return true;

    for (let i = 0; i < flowerbed.length && n > 0; i++) {
        // Check if the current spot is empty and has no neighbors planted
        if (flowerbed[i] === 0) {
            let prev = (i === 0 || flowerbed[i - 1] === 0);
            let next = (i === flowerbed.length - 1 || flowerbed[i + 1] === 0);
            
            if (prev && next) {
                flowerbed[i] = 1;
                n--;
            }
        }
    }

    return n === 0;
};

