var Ezlog = require('./../index.js');

var log = new Ezlog(
  ['[main test]', 'green', ['underline', 'bold']],
  ['blue', 'bold']
);

log('Hello World!');
log('one', 'two');
log({a: 'b'})


var log2 = new Ezlog(
  [{a: 'b'}, 'green', ['underline', 'bold']],
  ['blue', 'bold']
);