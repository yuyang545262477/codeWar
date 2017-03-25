findOutlierBestSolution();

function findOutlierBestSolution(integers) {
    var evenArray = integers.filter(function (integer) {
        return integer % 2 === 0;
    });
    var oddArray = integers.filter(function (integer) {
        return integer % 2 !== 0;
    });

    return evenArray.length > 1 ? oddArray[0] : evenArray[0];
}
