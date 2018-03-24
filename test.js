// noinspection JSUnresolvedVariable
var assert = require('chai').assert;
var app = require('./4kyu/human_readable_duration_format/index');
var condition = require('./4kyu/human_readable_duration_format/condition');

describe('App', function () {
    /**@des test order*/
    // noinspection JSUnresolvedVariable
    for (var i = 0; i < condition.length; i++) {
        (function (i) {
            'use strict';
            var obj = condition[i];
            it(obj.in + ' /should return/ ' + obj.out, function () {
                assert.equal(app(obj.in), obj.out);
            });
        })(i);
    }
});
