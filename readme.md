# is-nwjs

[![NPM version][npm-image]][npm-url] [![Travis-CI Status][travis-image]][travis-url] [![Appveyor Status][appveyor-image]][appveyor-url] [![Daviddm Status][daviddm-image]][daviddm-url]

> Check if your code is running on NW.js.


## Install

```
$ npm install --save is-nwjs
```


## Usage

```js
var isNwjs = require('is-nwjs');

// on your browser
console.log(isNwjs);
//=> false

// on NW.js
console.log(isNwjs);
//=> true
```


## Changelog

[changelog.md](./changelog.md).


## License

MIT © [sanemat](http://sane.jp)


[travis-url]: https://travis-ci.org/sanemat/is-nwjs
[travis-image]: https://img.shields.io/travis/sanemat/is-nwjs/master.svg?style=flat-square&label=travis
[appveyor-url]: https://ci.appveyor.com/project/sanemat/is-nwjs/branch/master
[appveyor-image]: https://img.shields.io/appveyor/ci/sanemat/is-nwjs/master.svg?style=flat-square&label=appveyor
[npm-url]: https://npmjs.org/package/is-nwjs
[npm-image]: https://img.shields.io/npm/v/is-nwjs.svg?style=flat-square
[daviddm-url]: https://david-dm.org/sanemat/is-nwjs
[daviddm-image]: https://img.shields.io/david/sanemat/is-nwjs.svg?style=flat-square
