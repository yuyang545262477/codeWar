solution('abc');
function solution(str) {
    var isString = checkOutString(str);
    if (!isString) return [];
    var backArray = [];
    str = beautyString(str);
    for (var i = 0; i < str.length / 2; i++) {
        backArray.push(str.substr(i * 2, 2));
    }
    return backArray;
}


function checkOutString(_string) {
    return Object.prototype.toString.call(_string) === '[object String]';
}
function beautyString(_string) {
    if (_string.length % 2 === 0)return _string;
    return _string + '_';
}