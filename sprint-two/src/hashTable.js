
var HashTable = function() {
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
};

HashTable.prototype.insert = function(k, v) {
  let index = getIndexBelowMaxForKey(k, this._limit);
  
  //checking to see if there is a tuplet at the location
  if ( !this._storage.get(index) ){
    //if no tuplet, make one
    this._storage.set( index, [[k,v]] )
  }

  let bucket = this._storage.get( index );
  //console.log(bucket, ' bucket')

  bucket.forEach( (tuple, i, theBucket) => {
    console.log( tuple, i, theBucket, k,' tuple, i, theBucket, k')
    console.log( tuple[0], ' tuple[0]')
    if ( tuple[0] === k ) {
      theBucket[i] = [k,v];
    }
    bucket.push( [k,v] );
  } );

};






HashTable.prototype.retrieve = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  this._storage.get( index )
};

HashTable.prototype.remove = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  var valueToDelete = this._storage.get( index );

  var deleteMe = ( value, indexNum, collection ) => {
    if ( value === valueToDelete ) {
    //console.log(value, indexNum, collection, index, valueToDelete, 'value, indexNum, collection, index, valueToDelete')  
    delete [collection]
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


