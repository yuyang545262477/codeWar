module.exports = [
    {
        in: '1.2.3.4',
        out: true
    },
    {
        in: '123.45.67.89',
        out: true
    },
    {
        in: '1.2.3',
        out: false
    },
    {
        in: '1.2.3.4.5',
        out: false
    },
    {
        in: '123.456.78.90',
        out: false
    },
    {
        in: '123.045.067.089',
        out: false
    }
];