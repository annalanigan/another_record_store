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

  it('should have an opening balance of zero', function() {
    assert.strictEqual(recordStore.balance, 0);
  })

  it('should have an empty inventory on creation', function() {
    assert.strictEqual(recordStore.inventory.length, 0);
  })

  it('should be able to add a record', function() {
    recordStore.addRecord(record1);
    assert.strictEqual(recordStore.inventory.length, 1);
  })

  it('should be able to list the inventory', function() {
    recordStore.addRecord(record1);
    recordStore.addRecord(record2);
    recordStore.listInventory();
  })

  it('should be able to sell a record - remove from inventory', function(){
    recordStore.addRecord(record1);
    recordStore.addRecord(record2);
    recordStore.sellRecord(record1);
    assert.strictEqual(recordStore.inventory.length, 1);
    assert.strictEqual(recordStore.balance, 10.99);
  })

  it('should be able to get total inventory value', function() {
    recordStore.addRecord(record1);
    recordStore.addRecord(record2);
    assert.strictEqual(recordStore.totalInventoryValue(), 25.99);
  })

  it('should be able to return total value', function() {
    recordStore.addRecord(record1);
    recordStore.addRecord(record2);
    recordStore.sellRecord(record1);
    assert.strictEqual(recordStore.totalValue(), 25.99);
    assert.strictEqual(recordStore.inventory.length, 1);
  })

  it('should return all records of a given genre', function(){
    recordStore.addRecord(record1);
    recordStore.addRecord(record2);
    assert.strictEqual(recordStore.genreSearch('Pop')[0], record1);
  })

})
