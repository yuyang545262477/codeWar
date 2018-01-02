divisors(15);
/**@desc 找出参数得除数，如果参数为质数，返回字符串 参数+‘is prime’，反之，返回质因数数组*/
function divisors(integer) {
    /* 判断参数类型 */
    var backString = integer + ' is prime';
    var isNumber = checkOutIsNumber(integer);
    var backArray; //[]
    if (!isNumber)return;
    backArray = renderFactor(integer);
    return backArray.length === 0 ? backString : backArray;
}

function checkOutIsNumber(integer) {
    return Object.prototype.toString.call(integer) === '[object Number]' || Number(integer);
}

function renderFactor(integer) {
    var _backArray = [];
    var factorArray = [2, 3, 4, 5, 6, 7, 8, 9];
    for (var i = 0; i < factorArray.length; i++) {
        var obj = factorArray[i];
        if (Number(integer) % obj === 0) _backArray.push(obj);
    }
    return _backArray;
}

