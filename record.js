const Record = function(artist, title, genre, price){
  this.artist = artist;
  this.title = title;
  this.genre = genre;
  this.price = price;
}

Record.prototype.toString = function () {
  string = "";
  for(property in this) {
    if(this.hasOwnProperty(property)) {
      string += property + ": " + this[property] + ", ";
    }
  }
   return string.slice(0, string.length - 2);
};


module.exports = Record;
