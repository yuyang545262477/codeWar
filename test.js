// noinspection JSUnresolvedVariable
var assert = require('chai').assert;
var app = require('./4kyu/sum_strings/index');
var condition = require('./4kyu/sum_strings/condition');

describe('App', function () {
    /**@des test order*/
    // noinspection JSUnresolvedVariable
    for (var i = 0; i < condition.length; i++) {
        (function (i) {
            'use strict';
            var obj = condition[i];
            it(obj.in + ' /should return/ ' + obj.out, function () {
                assert.equal(app(obj.in[0], obj.in[1]), obj.out);
            });
        })(i);
    }
});
