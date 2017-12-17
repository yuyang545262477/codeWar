uniqueInOrder('abc');
/**@des 参数为字符串或者为数组  过滤相邻重复的元素，返回数组*/

function uniqueInOrder(iterable) {
    var result = [];
    var last;
    for (var i = 0; i < iterable.length; i++) {
        var obj = iterable[i];
        //noinspection JSUnusedAssignment
        if (obj !== last) {
            result.push(last = obj);
        }
    }
    return iterable;
}



