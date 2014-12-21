var assert = require('assert');

var cls = require('./../../index.js');

var str = 'Hello World!',
    obj = { hello: 'world' };


describe('cls', function (){

  describe('#normal usage', function (){

    it('should return a colored string', function (){
      assert.equal(cls(str, 'red').length, 22);
    });

    it('should return a styled string', function (){
      assert.equal(cls(str, undefined, 'bold').length, 21);
    });

    describe('##multi styles', function (){
      it('should apply to styles', function (){
        assert.equal(cls(str, undefined, ['bold', 'underline']).length, 30);
      });
    });

  });

  describe('#missing/wrong parameters', function (){
    it('should now fail when we do not provide a text to style', function (){
      assert.equal(cls().length, 0);
    });

    it('should not color when `c` is of the wrong type (!string)', function (){
      assert.equal(cls(str, obj).length, str.length);
    });

    it('should not style when s is not found in style map', function (){
      assert.equal(cls(str, undefined, 'notFound').length, str.length);
    });

    it('should not style when s\'s are not found in style map', function (){
      assert.equal(cls(str, undefined, ['a', 'b']).length, str.length);
    });

    it('should not style when s is of the wrong type (!string && !array)', function (){
      assert.equal(cls(str, undefined, {a: 'b'}).length, str.length);
    });

  });

  describe('#object to string', function (){
    it('should return a string when we provide an object', function (){
      assert.equal( typeof cls(obj), 'string' );
    });
  });
});