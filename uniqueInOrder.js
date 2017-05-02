uniqueInOrder('abc');
/**@des 参数为字符串或者为数组  过滤相邻重复的元素，返回数组*/

function uniqueInOrder(_params) {
    /**@des
     * 判断参数类型
     * 新建backArray
     * 如果当前item 与上一个不等，添加到backArray
     * 返回backArray
     * */
    var isString = checkOutString(_params);
    var isArray = checkOutArray(_params);
    var backArray = [];
    if (!(isString || isArray))return [];
    if (_params.length === 0)return [];
    backArray.push(_params[0]);
    for (var i = 0; i < _params.length; i++) {
        if (i === 0)continue;
        var obj = _params[i];
        var _obj = _params[i - 1];
        if (obj === _obj) continue;
        backArray.push(obj);
    }
    return backArray;
}

function checkOutString(_params) {
    return Object.prototype.toString.call(_params) === '[object String]';
}
function checkOutArray(_params) {
    return Object.prototype.toString.call(_params) === '[object Array]';
}


