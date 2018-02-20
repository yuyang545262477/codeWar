module.exports = snail;

function snail(array) {
    var backArray = [];
    var top = renderHeaderArray(array);

    var right = renderRightArray(array);

    var bottom = renderBottomArray(array);

    var left = renderLeftArray(array);

    var inner = renderInnerArray(array);

    return backArray.concat(top, right, bottom, left, inner).toString();

    function renderHeaderArray(_array) {

        var _backArray = [];
        if (Array.isArray(_array) && _array.length > 0) _backArray = _array.shift();
        return _backArray;
    }

    function renderRightArray(_array) {
        var _backArray = [];
        var heightSize = _array.length;
        if (!(Array.isArray(_array) && _array.length > 0)) return _backArray;
        for (var index = 0; index < heightSize; index++) {
            _backArray.push(_array[index].pop());
        }
        return _backArray;
    }

    function renderBottomArray(_array) {
        var _backArray = [];
        if (Array.isArray(_array) && _array.length > 0) {
            var distArray = _array.pop();
            _backArray = distArray.reverse();
        }
        return _backArray;
    }

    function renderLeftArray(_array) {

        var _backArray = [];
        if (!(Array.isArray(_array) && _array.length > 0)) return _backArray;
        var heightSize = _array.length;

        for (var index = heightSize - 1; index >= 0; index--) {
            _backArray.push(_array[index].shift());
        }
        return _backArray;
    }


    function renderInnerArray(_array) {
        return (isObject(_array) && _array.length > 0) ? snail(_array) : [];

        function isObject(_array) {
            var backBoolean = typeof _array === 'object';
            return backBoolean;
        }
    }
}