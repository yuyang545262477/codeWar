validPhoneNumber("(123) 456-7890");

function validPhoneNumber(phoneNumber) {
    var isString = checkOutIsString(phoneNumber);
    var isPhoneNumber;
    if (!isString) return;
    isPhoneNumber = checkOutHasSpace(phoneNumber);
    return isPhoneNumber;
}

function checkOutIsString(phoneNumber) {
    return Object.prototype.toString.call(phoneNumber) === '[object String]';
}

function checkOutHasSpace(phoneNumber) {
    var splitPhoneNumber = phoneNumber.split(' ');
    var leftNumber;
    var rightNumber;
    var isLeftCorrect;
    var isRightCorrect;
    if (splitPhoneNumber.length === 0) return false;
    leftNumber = splitPhoneNumber[0];
    isLeftCorrect = checkOutLeftCorrect(leftNumber);
    if (!isLeftCorrect) return false;
    rightNumber = splitPhoneNumber[1];
    isRightCorrect = checkOutRightCorrect(rightNumber);
    return isRightCorrect;
}

function checkOutLeftCorrect(leftNumber) {
    if (leftNumber.length !== 5) return false;
    if (leftNumber.indexOf('(') === -1) return false;
    if (leftNumber.indexOf(')') === -1) return false;
    var numberSection = leftNumber.substr(1, 3);
    return checkIsNumber(numberSection);
}

function checkOutRightCorrect(rightNumber) {
    if (rightNumber.length !== 8) return false;
    var spiltArray = rightNumber.split('-');
    var isArray = checkIsArray(spiltArray);
    if (!isArray) return;
    if (!spiltArray || spiltArray.length === 0) return false;
    var threeNumber = spiltArray[0];
    var fourNumber = spiltArray[1];
    if (threeNumber.length !== 3 && fourNumber.length !== 4) return false;
    return checkIsNumber(threeNumber) && checkIsNumber(fourNumber);
}

function checkIsArray(splitArray) {
    return Object.prototype.toString.call(splitArray) === '[object Array]';
}

function checkIsNumber(_number) {
    return !isNaN(_number);
}

