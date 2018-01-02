module.exports = simplify;


function simplify(poly) {
    //TODO:切割为单项式,内部排序,填补欠缺+1,-1
    var readyArray = poly.split(/(?=\W)/)
        .map(function (item) {
            var regexOne = /^[+|-]/;
            var regexTwo = /\d/;
            if (!regexOne.test(item)) item = '+' + item;
            if (!regexTwo.test(item)) item = item.slice(0, 1) + 1 + item.slice(1).split("").sort().join("");
            return item;
        });
    //TODO:对单项式进行运算
    var readyArrayTwo = computeArrayOne(readyArray);
    // TODO:对计算结果,进行排序
    var backArrayThree = renderArrayThree(readyArrayTwo);

    return backArrayThree;

    /**@des 计算结果*/
    function computeArrayOne(readyArray) {
        var backArray = [];
        for (var i = 0; i < readyArray.length; i++) {
            var polynomial = readyArray[i];
            var _indexOfExit = getExitIndex(polynomial, backArray);
            _indexOfExit !== -1 ? computeBackArray(polynomial, _indexOfExit) : pushBackArray(polynomial);
        }
        return backArray;

        function getExitIndex(polynomial, backArray) {
            //TODO:获取backArray 存在序列号
            var _index = backArray.findIndex(function (item) {
                return getCore(item) === getCore(polynomial);
            });
            return _index;
        }

        function pushBackArray(polynomial) {
            //TODO:特殊处理的添加
            // var coreItem = getCore(polynomial);
            // if (/^[+]/.test(coreItem)) coreItem = coreItem.slice(1);
            backArray.push(polynomial);
        }

        function computeBackArray(polynomial, exitIndex) {
            //TODO:对存在的元素进行计算
            var coreItem = getCore(polynomial);
            var coreNumber = renderCoreNumber();
            if (!coreNumber) backArray.splice(exitIndex, 1);
            else backArray[exitIndex] = coreNumber + coreItem;

            function renderCoreNumber() {
                var numberOne = Number(polynomial.slice(0, 2));
                var numberTwo = Number(backArray[exitIndex].slice(0, 2));
                var backValue = numberOne + numberTwo;
                return backValue;
            }
        }


    }

    /**@des */
    function renderArrayThree(readyArrayTwo) {
        var backArray = readyArrayTwo
            .sort(function (a, b) {
                return getCore(a).length > getCore(b).length || getCore(a) < getCore(b) ? -1 : 1;
            })
            .map(function (value) {
                return value.replace(/[1]/, '');
            });
        // if (backArray[0].test()) backArray[0] = getCore(backArray[0]);
        backArray[0] = backArray[0].replace(/[+]/, '');
        return backArray.join('');
    }

    function getCore(value) {
        return value.replace(/[^A-Za-z]/g, '');
    }


}