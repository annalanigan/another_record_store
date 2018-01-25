var _ = require('lodash');

const Customer = function(name, wallet){
  this.name = name;
  this.wallet = wallet;
  this.collection = [];
}

Customer.prototype.increaseFunds = function (amount) {
  this.wallet += amount;
};

Customer.prototype.decreaseFunds = function (amount) {
  this.wallet -= amount;
};

Customer.prototype.hasFunds = function (amount) {
  return this.wallet >= amount ? true : false;
};

Customer.prototype.addRecord = function (record) {
  this.collection.push(record);
};

Customer.prototype.removeRecord = function(record){
  if(this.collection.includes(record)) {
    this.collection = this.collection.filter(each => each !== record);
  }
}

Customer.prototype.buyRecord = function(record) {
  if(this.hasFunds(record.price)) {
    this.addRecord(record);
    this.decreaseFunds(record.price);
  }
};

Customer.prototype.sellRecord = function (record) {
  this.removeRecord(record);
  this.increaseFunds(record.price);
};

Customer.prototype.totalCollectionValue = function () {
  let totalValue = this.collection.reduce(function(accumulator, next){
    return accumulator + next.price;
  }, 0)
  // return _.round(totalValue, 2);
  return totalValue;
};

module.exports = Customer;
