module.exports = solution;

function solution(number) {
    var backString = '';
    var mapObj = {
        'M': 1000,
        'CM': 900,
        'D': 500,
        'CD': 400,
        'C': 100,
        'XC': 90,
        'L': 50,
        'XL': 40,
        'X': 10,
        'V': 5,
        'IV': 4,
        'I': 1
    };
    Object.keys(mapObj).map(function (key) {
        var _number = mapObj[key];
        while (number >= _number) {
            backString += key;
            number -= _number;
        }
    });

    return backString;
}