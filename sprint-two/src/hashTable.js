
var HashTable = function() {
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
};

HashTable.prototype.insert = function(k, v) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  // console.log(index, k, v)
  this._storage.set(index, v);
  // console.log( this._storage.set(index, v) )
};

HashTable.prototype.retrieve = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  this._storage.get( index )
  // console.log( this._storage.get( index ), ' i wont lose' )
};

HashTable.prototype.remove = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  var valueToDelete = this._storage.get( index );

  var deleteMe = ( value, index, collection ) => {
    if ( value === valueToDelete ) {
    console.log('eventually is')
    delete value
  }

  }

  this._storage.each( deleteMe )

};

hashyyy = new HashTable();
hashyyy.insert('Shteven', 'Seagul');
hashyyy.retrieve('Shteven')




// var timmy = new HashTable()
// timmy.insert('Steven', 'Seagul');
// console.log(timmy.retrieve('Steven'))

/*
 * Complexity: What is the time complexity of the above functions?
 */


