const assert = require('assert');
const RecordStore = require('../record_store.js');
const Record = require('../record.js');

describe('Record Store Test', function() {
  var recordStore;
  var record1;
  var record2;

  beforeEach(function() {
    recordStore = new RecordStore("Rickety Rick's Record Store", "Edinburgh");
    record1 = new Record('Michael J', 'Bad', 'Pop', 10.99);
    record2 = new Record('My Type', 'Saint Motel', 'Jazz', 15);
  })

  it('should create a record store', function() {
      assert.strictEqual(recordStore.name, "Rickety Rick's Record Store");
      assert.strictEqual(recordStore.city, "Edinburgh");
  })

})
