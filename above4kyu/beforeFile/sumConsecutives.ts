let testArrayOne: Array<number> = [1, 4, 4, 4, 0, 4, 3, 3, 1];
let testArrayTwo: Array<number> = [1, 1, 7, 7, 3];
let testArrayThree: Array<number> = [-5, -5, 7, 7, 12, 0];


function sumConsecutives(baseArray: Array<number>): Array<number> {
    let backArray: Array<number> = [];
    if (baseArray.length === 0 || baseArray.length === 1) return baseArray;
    for (let i = 0; i < baseArray.length; i++) {
        let baseItem = baseArray[i];
        if (i === 0) {
            backArray.push(baseItem);
            continue;
        }
        let lastItem = baseArray[i - 1];
        if (baseItem !== lastItem) {
            backArray.push(baseItem);
        } else {
            backArray[backArray.length - 1] += baseItem;
        }
    }
    return backArray;
}


console.log(sumConsecutives(testArrayOne));