module.exports = sumStrings;


function sumStrings(a, b) {
    var arrayA = a.split('').reverse();
    var arrayB = b.split('').reverse();
    var sum = [];
    var longer = arrayA.length > arrayB.length ? arrayA : arrayB;
    var shorter = arrayA.length > arrayB.length ? arrayB : arrayA;
    var backString = '';

    for (var i = 0; i < longer.length; i++) {
        var item_long = longer[i];
        var item_short = shorter[i];
        var sumItem;
        if (item_short) {
            sumItem = Number(item_long) + Number(item_short);
        } else {
            sumItem = Number(item_long);
        }
        sum[i] ? sum[i] += sumItem : sum[i] = sumItem;

        if (sum[i] >= 10) {
            sum[i] %= 10;
            sum[++i] = 1;
            --i;
        }
    }

    backString = sum.reverse().join("");

    return backString.replace(/^0+/, '');

}