module.exports = order;

function order(words) {
    return words.split(" ")
        .sort(function (a, b) {
            return a.match(/\d/) - b.match(/\d/) > 0;
        })
        .join(' ');
}