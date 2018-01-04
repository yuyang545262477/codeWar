module.exports = snail;

function snail(array) {
    var backArray = [];
    var subArray = [];
    var max = array.length;
    if (array.length === 0) return backArray;
    /**@des firstRow*/
    for (var i = 0; i < max; i++) {
        backArray.push(array[0][i]);
    }
    /**@des last column*/
    for (var j = i; j < max; j++) {
        backArray.push(array[j][max]);
    }
    /**@des last row*/
    for (var k = max; k >= 0; k--) {
        backArray.push(array[max][k]);
    }
    /**@des first column*/
    for (var l = 1; l < max; l++) {
        backArray.push(array[l][0]);
    }
    for (var m = 1; m < max; m++) {
        subArray.push(array[m].splice(1, max - 1));
    }
    backArray.concat(snail(subArray));

    return backArray;
}