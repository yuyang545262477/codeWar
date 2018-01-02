// noinspection JSUnresolvedVariable
var assert = require('chai').assert;
var app = require('./toCamelCase/index');
var condition = require('./toCamelCase/condition');

describe('App', function () {
    /**@des test order*/
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
