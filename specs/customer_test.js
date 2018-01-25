const assert = require('assert');
const Customer = require('../customer.js');
const Record = require('../record.js');

describe('Customer Test', function() {
  var customer;
  var record1;

  beforeEach(function() {
    customer = new Customer("Anna", 500.00);
    record1 = new Record('Michael J', 'Bad', 'Pop', 10.99);
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

})
