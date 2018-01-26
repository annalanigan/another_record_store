var _ = require('lodash');

const RecordStore = function(name, city) {
  this.name = name;
  this.city = city;
  this.inventory = [];
  this.balance = 0;
}

RecordStore.prototype.addRecord = function (record) {
  this.inventory.push(record);
};

RecordStore.prototype.listInventory = function(){
  this.inventory.forEach(record => console.log(record.toString()));
};

RecordStore.prototype.sellRecord = function (record) {
  this.removeRecord(record);
  this.increaseBalance(record.price);
};

RecordStore.prototype.removeRecord = function (record) {
  if(this.inventory.includes(record)) {
    this.inventory = this.inventory.filter(each => each !== record);
  }
};

RecordStore.prototype.increaseBalance = function (amount) {
  this.balance += amount;
};


RecordStore.prototype.totalInventoryValue = function () {
  let totalValue = this.inventory.reduce(function(accumulator, next){
    return accumulator + next.price;
  }, 0)
  return _.round(totalValue, 2);
};

RecordStore.prototype.totalValue = function () {
  let totalValue = this.totalInventoryValue() + this.balance;
  return _.round(totalValue,'' 2);
};

RecordStore.prototype.genreSearch = function (genre) {
  return this.inventory.filter(record => record.genre === genre);
};



module.exports = RecordStore
