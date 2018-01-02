module.exports = toCamelCase;

function toCamelCase(str) {
    var back = str.split(/(?=[-|_])/)
        .map(function (value) {
            var backItem;
            if (!(/^[-|_]/g.test(value))) return value;
            backItem = value.replace(/^[-|_]/, '');
            return backItem.charAt(0).toUpperCase() + backItem.slice(1);
        }).join('');
    return back;
}
