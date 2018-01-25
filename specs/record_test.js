const assert = require('assert');
const Record = require('../record.js');

describe('Record Test', function(){

  var record1;
  var record2;

  beforeEach(function(){
    record1 = new Record('Michael J', 'Bad', 'Pop', 10.99);
    record2 = new Record('My Type', 'Saint Motel', 'Jazz', 15);
  })

  it('should create an object', function(){
    assert.strictEqual(record1.artist, 'Michael J');
    assert.strictEqual(record2.title, 'Saint Motel');
    assert.strictEqual(record1.genre, 'Pop');
    assert.strictEqual(record2.price, 15);
  })

})
