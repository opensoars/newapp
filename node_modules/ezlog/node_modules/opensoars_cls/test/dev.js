var cls = require('../index.js');


console.log(
  cls('Hello World!', 'red', 'bold')
);

console.log(
  cls({a: 'b'}, 'red')
);

console.log(
  cls(['a', 'b'], 'red', ['underline', 'bold'])
);

console.log(
  cls(false, 'red')
);