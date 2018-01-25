const assert = require('assert');
const Customer = require('../customer.js');
const Record = require('../record.js');

describe('Customer Test', function() {
  var customer;
  var record1;
  var record2;
  var record3;

  beforeEach(function() {
    customer = new Customer("Anna", 500.00);
    record1 = new Record('Michael J', 'Bad', 'Pop', 10.99);
    record2 = new Record('My Type', 'Saint Motel', 'Jazz', 15);
    record3 = new Record('My Type', 'Saint Motel', 'Jazz', 15);
  })

  it('should create with a name and wallet', function() {
    assert.strictEqual(customer.name, "Anna");
    assert.strictEqual(customer.wallet, 500.00);
  })

  it('should be able to buy a record', function(){
    customer.buyRecord(record1);
    assert.strictEqual(customer.collection.length, 1);
    assert.strictEqual(customer.wallet, 489.01);
  })

  it('should be able to sell a record', function(){
    customer.buyRecord(record1);
    customer.buyRecord(record2);
    customer.buyRecord(record3);
    customer.sellRecord(record2);
    assert.strictEqual(customer.collection.length, 2);
    assert.strictEqual(customer.wallet, 474.01);
  })

  it('should be able to calculate the calue of collection', function(){
    customer.buyRecord(record1);
    customer.buyRecord(record2);
    customer.buyRecord(record3);
    assert.strictEqual(customer.totalCollectionValue(), 40.99);
  })

})
