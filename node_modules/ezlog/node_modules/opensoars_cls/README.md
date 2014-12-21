cls
===

[![Build Status](https://img.shields.io/travis/opensoars/cls.svg?style=flat)](https://travis-ci.org/opensoars/cls)
[![Coverage Status](https://img.shields.io/coveralls/opensoars/cls.svg?style=flat)](https://coveralls.io/r/opensoars/cls)
[![Dependency Status](https://david-dm.org/opensoars/cls.svg?style=flat)](https://david-dm.org/opensoars/cls)
[![Development Dependency Status](https://david-dm.org/opensoars/cls/dev-status.svg?style=flat)](https://david-dm.org/opensoars/cls#info=devDependencies&view=table)


Colorized command line logging made easy.

---

## Dependencies
* None


### Install
`npm install opensoars_cls`


### API
`cls(text, [color], [style])`

Where `text` is the string or object to style, `color` is an optional color string and `style` is an optional style string or an array of style strings.


### Example
```js
var cls = require('opensoars_cls');

var styled_string = cls('Hello, world!', 'red', ['bold', 'underline']);

console.log(styled_string);
```


### Options

* 9 Colors
  * white
  * grey
  * black
  * blue
  * cyan
  * green
  * magenta
  * red
  * yellow
* 5 Styles (if supported by your os its terminal)
  * bold
  * italic
  * underline
  * inverse
  * strikethrough
