module.exports = validParentheses;

function validParentheses(parents) {
    //TODO:拿到字符串长度
    var stringLength = parents.length;
    var sumCount = 0;
    //TODO:如果为奇数,自动返回错误
    if (stringLength % 2 === 1) return false;
    for (var i = 0; i < stringLength; i++) {
        //TODO:做累加
        sumCount += parents[i] === '(' ? 1 : -1;
    }
    //TODO:如果累加,不为0 ,则错误
    return sumCount === 0;
}