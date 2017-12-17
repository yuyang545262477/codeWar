findOutlier();
function findOutlier(integers) {
    //your code here
    var backInteger;
    //检测参数类型
    var paramsIsArray = checkOutArray(integers);
    if (!paramsIsArray) return undefined;
    //检测数字数组，是否为偶数行
    var isEvenArray = checkEvenArray(integers);
    //如果是偶数类型，遍历找出奇数，类型相反，求反；
    if (isEvenArray) {
        backInteger = findOddInteger(integers);
    }
    else {
        backInteger = findEvenInteger(integers);
    }
    return backInteger;
}

function checkOutArray(integers) {
    /**@desc 检测是否为整数*/
    if (typeof Array.isArray === 'function') {
        return Array.isArray(integers);
    } else {
        return Object.prototype.toString.call(integers) === '[object Array]';
    }


}

function checkEvenArray(integers) {
    /**@desc 检测数组是奇或偶*/
    var oddNum = 0;
    var evenNum = 0;
    for (var i = 0; i < 3; i++) {
        var obj = integers[i];
        if (obj % 2 === 0) {
            evenNum++;
        } else {
            oddNum++;
        }
    }
    return evenNum > oddNum;
}
function findOddInteger(integers) {
    for (var i = 0; i < integers.length; i++) {
        var obj = integers[i];
        if (obj % 2 !== 0) {
            return obj;
        }
    }
}

function findEvenInteger(integers) {
    for (var i = 0; i < integers.length; i++) {
        var obj = integers[i];
        if (obj % 2 === 0)return obj;
    }
}
