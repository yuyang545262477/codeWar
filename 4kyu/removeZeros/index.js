module.exports = removeZeros;

function removeZeros(array) {
    var len = array.length;
    var string = '';
    var index = 0;

    for (var i = 0; i < len; i++) {
        var item = array[i];
        if (item === '0') {
            string += '0';
        } else if (item === 0) {
            string += '1';
        } else {
            array[index++] = array[i];
        }
    }

    for (var j = 0; j < string.length; j++) {
        string[j] === '0' ? array[index++] = '0' : array[index++] = 0;
    }

    return array;
}
