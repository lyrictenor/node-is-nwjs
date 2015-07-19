'use strict';
var assert = require('power-assert');
var isNwjs = require('./');

it('should ', function () {
  assert.strictEqual(isNwjs('unicorns'), 'unicorns & rainbows');
});
it('should not ', function () {
  assert.strictEqual(isNwjs('unicorns'), 'unicorns & wrong');
});
