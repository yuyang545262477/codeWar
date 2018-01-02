module.exports = solution;

function solution(number) {
    var backString = '';
    var mapObj = {
        'M': 1000,
        'D': 500,
        'C': 100,
        'L': 50,
        'X': 10,
        'V': 5,
        'I': 1
    };
    Object.keys(mapObj).map(function (key) {
        var _number = mapObj[key];
        if (number / _number > 0) backString = key;
        else backString = solution(number % _number);
    });

    return backString;
}