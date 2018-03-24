module.exports = formatDuration;


function formatDuration(seconds) {
    var backStringArray = renderStringArray(seconds);
    if (backStringArray.length === 0) return 'now';
    if (backStringArray.length < 2) return backStringArray.join('');
    else if (backStringArray.length === 2) return backStringArray.slice(-2).join(' and ');
    else return backStringArray.slice(0, -2).join(', ') + ', ' + backStringArray.slice(-2).join(' and ');
}

function renderStringArray(seconds) {
    var stander = {
        year: 365 * 24 * 60 * 60,
        day: 24 * 60 * 60,
        hour: 60 * 60,
        minute: 60,
        second: 1
    };
    var backString = [];

    if (seconds === 0) return backString;
    for (var key in stander) {
        if (seconds >= stander[key]) {
            var value = Math.floor(seconds / stander[key]);
            return backString.concat([value + ' ' + (value > 1 ? key + 's' : key)], renderStringArray(seconds % stander[key]));
        }
    }
    return backString;
}