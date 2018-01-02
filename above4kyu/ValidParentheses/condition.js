module.exports = [
    {
        in: '()',
        out: true
    },
    {
        in: ')(()))',
        out: false
    },
    {
        in: '(',
        out: false
    },
    {
        in: '',
        out: true
    },
    {
        in: '(())((()())())',
        out: true
    }
];