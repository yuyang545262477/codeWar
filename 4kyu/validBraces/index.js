module.exports = validBraces;

var startArray = ['(', '{', '['];
var endArray = [')', '}', ']'];

function validBraces(braces) {
    if (isOdd(braces) || isEmpty(braces)) return false;
    else return checkBraces(braces);

    function isOdd(braces) {
        return braces.length % 2 !== 0;
    }

}

function isEmpty(braces) {
    return braces.length === 0;
}

function checkBraces(braces) {
    var firstIndex;
    var endIndex;
    var afterCutBraces;
//&& innerIsEven(braces)
    if (existHead(braces) && existEnd(braces) && innerIsEven(braces)) {
        afterCutBraces = cutThem(braces);
        if (isEmpty(afterCutBraces)) return true;
        else return checkBraces(afterCutBraces);
    } else return false;

    function existHead(braces) {
        var headString = braces.slice(0, 1);
        if (startArray.indexOf(headString) === -1) return false;
        firstIndex = startArray.indexOf(headString);
        return true;
    }

    function existEnd(braces) {
        var endString = endArray[firstIndex];
        if (braces.indexOf(endString) === -1) return false;
        else endIndex = braces.indexOf(endString);
        return true;
    }

    function innerIsEven(braces) {
        var innerWords = braces.slice(1, endIndex);
        return innerWords.length % 2 === 0;
    }

    function cutThem(braces) {
        var inner = braces.slice(1, endIndex);
        var others = braces.slice(endIndex + 1);
        return inner + others;
    }


}





