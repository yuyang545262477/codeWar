module.exports = solution;

function solution(roman) {
    var backNumber = 0;
    var mapObj = {
        'CM': 900,
        'CD': 400,
        'XC': 90,
        'XL': 40,
        'IV': 4,
        'M': 1000,
        'D': 500,
        'C': 100,
        'L': 50,
        'X': 10,
        'V': 5,
        'I': 1
    };
    for (var key in mapObj) {
        var _index = roman.indexOf(key);
        if (_index !== -1) {
            return backNumber = mapObj[key] + solution(roman.slice(1, _index) + roman.slice(_index + key.length));
        }
    }

    return backNumber;
}