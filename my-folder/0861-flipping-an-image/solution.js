/**
 * @param {number[][]} image
 * @return {number[][]}
 */
var flipAndInvertImage = function (image) {
    for (let i = 0; i < image.length; i++) {
        image[i].reverse()
        for (let j = 0; j < image[0].length; j++) {
            image[i][j] = image[i][j] ^ 1
        }
    }

    return image

};
