// noinspection JSUnresolvedVariable
var assert = require('chai').assert;
var app = require('./order/order');
var testInstent = require('./testCondition');

describe('App', function () {
    /**@des test order*/

    for (var i = 0; i < testInstent.length; i++) {
        (function (i) {
            'use strict';
            var obj = testInstent[i];
            it(obj.in + ' /should return/ ' + obj.out, function () {
                assert.equal(app(obj.in), obj.out);
            });
        })(i);
    }
});
