module.exports = simple;


function simple(poly) {
    //TODO:切割为单项式
    var readyArray = poly.split(/(?=\W)/)
    //TODO:对单项式内部整理(排序,增加欠缺'+1',)
        .map(function (item) {
            var regexOne = /^[+|-]/;
            var regexTwo = /\d/;
            if (!regexOne.test(item)) item = '+' + item;
            if (!regexTwo.test(item)) item = item.slice(0, 1) + 1 + item.slice(1).split("").sort().join("");
            return item;
        });
    //TODO:计算前,进行排序
    needSort();
    //TODO:对单项式进行运算
    var readyArrayTwo = computeArrayOne(readyArray);

    // TODO:对计算结果,进行排序

    //TODO:整合计算结果
    function computeArrayOne(readyArray) {
        var backArray = [];

        for (var i = 0; i < readyArray.length; i++) {
            var polynomial = readyArray[i];
            var _indexOfExit = getExitIndex(polynomial, backArray);
            _indexOfExit !== -1 ? computeBackArray(polynomial) : pushBackArray(polynomial);
        }

        return backArray;

        function getExitIndex(polynomial, backArray) {
            //TODO:获取backArray 存在序列号
            var coreItem = getCore(polynomial);
            var _index = backArray.findIndex(function (item) {
                return getCore(item) === coreItem;
            });
            return _index;
        }

        function pushBackArray(polynomial) {
            //TODO:特殊处理的添加
            var coreItem = getCore(polynomial);
            if (/^[+]/.test(coreItem)) coreItem = coreItem.slice(1);
            backArray.push(coreItem);
        }

        function computeBackArray(polynomial) {
            //TODO:对存在的元素进行计算

        }


        function getCore(value) {
            return value.replace(/[^A-Za-z]/g, '');
        }


    }


}