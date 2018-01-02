function findUniq(arr) {
    arr.sort();
    return arr[0] === arr[1] ? arr.pop() : arr[0];
}


var testOne = [undefined, undefined, 0];
console.log(findUniq(testOne));