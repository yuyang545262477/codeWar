var testArrayOne = [1, 4, 4, 4, 0, 4, 3, 3, 1];
var testArrayTwo = [1, 1, 7, 7, 3];
var testArrayThree = [-5, -5, 7, 7, 12, 0];
function sumConsecutives(baseArray) {
    var backArray = [];
    if (baseArray.length === 0 || baseArray.length === 1)
        return baseArray;
    for (var i = 0; i < baseArray.length; i++) {
        var baseItem = baseArray[i];
        if (i === 0) {
            backArray.push(baseItem);
            continue;
        }
        var lastItem = baseArray[i - 1];
        if (baseItem !== lastItem) {
            backArray.push(baseItem);
        }
        else {
            backArray[backArray.length - 1] += baseItem;
        }
    }
    return backArray;
}
console.log(sumConsecutives(testArrayOne));
