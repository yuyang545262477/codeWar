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
    //TODO:对单项式进行运算
    var readyArrayTwo = readyArray.map(function (value) {
        return value.replace(/[^A-Za-z]/g, '');
    });
    console.log(readyArrayTwo);
    console.log(readyArray);
    //TODO:对计算结果,进行排序
    //TODO:整合计算结果
}