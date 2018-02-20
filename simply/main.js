module.exports = simplify;


function simplify(poly) {
    var h = {};
    poly.match(/[+-]?[^+-]+/g).forEach(function (x) {
        var m = x.match(/[a-z]+/)[0],
            k = x.replace(m, '');
        m = m.split('').sort().join('');
        k = Number(/\d/.test(k) ? k : k + '1');
        h[m] = (h[m] || 0) + k;
    });
    return Object.keys(h)
        .filter(function (m) {
            return h[m];
        })
        .sort(function (x, y) {
            return x.length - y.length || (x < y ? -1 : 1);
        })
        .map(function (m, i) {
            return {
                sign: h[m] < 0 ? '-' : i > 0 ? '+' : '',
                k: Math.abs(h[m]),
                m: m
            }
        })
        .map(function (o) {
            return o.sign + (o.k === 1 ? '' : o.k) + o.m;
        })
        .join('');
}
