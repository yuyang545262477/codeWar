module.exports = humanReadable;

function humanReadable(seconds) {
    var minuteStand = 60;
    var hourStand = minuteStand * minuteStand;

    var hour = Math.floor(seconds / hourStand);
    var minute = Math.floor(seconds / minuteStand % minuteStand);
    var second = Math.floor(seconds % minuteStand);

    return stander(hour) + ':' + stander(minute) + ':' + stander(second);

    function stander(time) {
        return time < 10 ? '0' + time : time;
    }


}