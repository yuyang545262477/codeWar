function firstNonRepeatingLetter(s) {
    return s.replace(/[\s\uFEFF\xA0]/, '')
        .split("")
        .filter(function (item) {
            var _item = item.toUpperCase();
            var _s = s.toUpperCase();
            if (_s.indexOf(_item) === _s.lastIndexOf(_item)) return item;
        })[0]
}

var test = 'Simple Tests';

console.log(firstNonRepeatingLetter(test));