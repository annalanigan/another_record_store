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

Customer.prototype.buyRecord = function(record) {
  if(this.hasFunds(record.price)) {
    this.addRecord(record);
    this.decreaseFunds(record.price);
  }
};

module.exports = Customer;
