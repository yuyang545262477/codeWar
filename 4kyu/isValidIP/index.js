module.exports = isValidIP;

function isValidIP(str) {
    var max = 255;
    var min = 0;
    var ipArray = str.split('.');
    var backBoolean = true;
    if (ipArray.length !== 4) return false;
    ipArray.map(function (value) {
        if (value !== (+value).toString()) return backBoolean = false;
        if (Number(value) > max || Number(value) < min) return backBoolean = false;
    });
    return backBoolean;
}
