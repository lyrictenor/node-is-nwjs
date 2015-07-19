#!/usr/bin/env node
/*eslint no-console:0*/
'use strict';
var meow = require('meow');
var isNwjs = require('./');

var cli = meow({
  help: [
    'Usage',
    '  $ is-nwjs [input]',
    '',
    'Examples',
    '  $ is-nwjs',
    '  unicorns & rainbows',
    '',
    '  $ is-nwjs ponies',
    '  ponies & rainbows',
    '',
    'Options',
    '  --foo  Lorem ipsum. Default: false'
  ]
});

console.log(isNwjs(cli.input[0] || 'unicorns'));
