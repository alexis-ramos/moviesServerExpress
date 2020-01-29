const assert = require('assert');
const buildMessage = require('../utils/buildMessage');

describe.only('utils - buildMessage', function() {
  it('when receives an entity and a action', function() {
    it('should return the respective message', function() {
      const result = buildMessage('movie', 'create');
      const expect = 'movie created';
      assert.strictEqual(result, expect);
    });
  });

  describe('when receives an entity and an action and a list', function() {
    it('should return the respective message whit the entity in plural', function() {
      const result = buildMessage('movies', 'list');
      const expected = 'movies list';
      assert.strictEqual(result, expected);
    });
  });
});
