var assert = require('assert');

var Ezlog = require('./../../index.js');



describe('Ezlog', function (){

  describe('#normal', function (){
    it('should return a function when we `new Ezlog()`', function (){
      assert.equal(typeof new Ezlog(), 'function');
    });

    it('should log ^ some colored output', function (){
      var log = new Ezlog(
        ['[main test]', 'green', ['underline', 'bold']],
        ['blue', 'bold']
      );

      log('Hello, world');
    });
  });

  describe('#missing params', function (){
    it('should not throw when there is no `p_o` parameter', function (){
      assert.doesNotThrow(new Ezlog());
    });

    it('should not throw when `p_o is missing an element', function (){
      assert.doesNotThrow(new Ezlog(['string', undefined]));
    });

    it('should not throw when `t_o is missing an element', function (){
      assert.doesNotThrow(new Ezlog(['string'], [undefined]));
    })

  });

  describe('#wrong params', function (){
    it('should not throw when the `p_o` is of wrong type (!array)', function (){
      assert.doesNotThrow(new Ezlog('string'));
    });

    it('should not throw when the `t_o` is of wrong type (!array)', function (){
      assert.doesNotThrow(new Ezlog([], 'string'));
    });
  });


});