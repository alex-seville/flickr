var assert = require(require('path').join(__dirname, '..', 'assert'));
describe('Assert.js unit tests', function () {
  it('Should not throw an error if the keys exist in the object', function () {
    require('assert').doesNotThrow(function () {
      assert(
        {a:'a', b:'b', flickr: 'feck'},
        'a',
        'b',
        'flickr'
      );
    });
  });

  it('Should not throw an error if just one key does exist in the object', function () {
    require('assert').doesNotThrow(function () {
      assert(
        {a:'a', b:'b', flickr: 'feck'},
        'a',
        'beyonce',
        'flickRiver'
      );
    });
  });


  it('Should throw an error if the keys do not exist in the object', function () {
    require('assert').throws(function () {
      assert(
        {a:'a', b:'b', flickr: 'feck'},
        'd',
        'e',
        'flickRiver'
      );
    });
  });
});
