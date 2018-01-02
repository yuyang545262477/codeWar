module.exports = pigIt;

function pigIt(str) {
    return str.split(' ')
        .map(function (value) {
            var beforeArrary = value.split('');
            return beforeArrary.slice(1).concat(beforeArrary.slice(0, 1)).join('') + 'ay';
        }).join(' ');
}